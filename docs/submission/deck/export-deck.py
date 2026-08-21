#!/usr/bin/env python3
"""Export the deck: one PNG per slide, and the whole deck as a lightweight PDF.

Run from the repo root:

    python3 docs/submission/deck/export-deck.py

Needs Playwright and Pillow. Writes `mytakziah-deck.pdf` beside the HTML and one
image per slide into `assets/slides/`.

Two things make the PDF small, and neither of them touches the repo's own assets.
The whole deck is copied to a scratch directory first, and it is that copy that
gets degraded and printed.

1.  Every raster is downsampled to twice the size it is actually drawn at on the
    1920 by 1080 stage. A 2400px mark drawn into a 96px box costs 140 KB in the
    PDF and resolves no better than a 192px one.
2.  The cover, the problem slide and the close slide have their grounds
    flattened to one opaque JPEG each. Their text stays vector and selectable;
    only what sits behind it becomes an image. Without this a viewer spends 9 to
    17 seconds rasterizing each of those pages, against 1 second for a plain
    slide, because a radial shading, a photograph under an alpha gradient and a
    masked lattice all cost per-pixel work across a 20 inch page.

Two things that used to break this file are now fixed in the deck itself rather
than here, and both are worth knowing before touching the cover. The hero's
shadow is painted into `assets/cover-hero.png`, because a live `drop-shadow`
filter made Chrome rasterize the element at print scale. And `.cover-glow` is
centred with arithmetic rather than `translate(-50%, -50%)`, because Chrome's
PDF writer silently drops a radial gradient on a transformed absolutely
positioned box while rendering it correctly on screen.
"""

import io
import pathlib
import re
import shutil
import tempfile

import pikepdf
from PIL import Image
from playwright.sync_api import sync_playwright

DECK = pathlib.Path(__file__).resolve().parent / "mytakziah-deck.html"
SRC = DECK.parent
SLIDES = SRC / "assets" / "slides"
PDF = SRC / "mytakziah-deck.pdf"

STAGE = {"width": 1920, "height": 1080}
CHROME_ARGS = ["--force-color-profile=srgb", "--font-render-hinting=none"]

# Largest box each raster is drawn into, across every slide. Backgrounds are the
# lattice only, which is handled separately, so images and SVG <image> suffice.
MEASURE = """() => {
  const seen = {};
  const note = (url, w, h) => {
    if (!url) return;
    const k = decodeURIComponent(new URL(url, location.href).pathname);
    const p = seen[k] || (seen[k] = [0, 0]);
    p[0] = Math.max(p[0], w);
    p[1] = Math.max(p[1], h);
  };
  document.querySelectorAll('section.slide').forEach((s) => {
    const was = s.classList.contains('active');
    s.classList.add('active');
    s.querySelectorAll('img').forEach((e) => {
      const r = e.getBoundingClientRect();
      note(e.currentSrc || e.src, r.width, r.height);
    });
    s.querySelectorAll('image').forEach((e) => {
      const r = e.getBoundingClientRect();
      note(e.getAttribute('href') || e.getAttribute('xlink:href'), r.width, r.height);
    });
    if (!was) s.classList.remove('active');
  });
  return seen;
}"""

# Slides whose ground is built from gradients, a photograph and a masked overlay
# are flattened to one opaque JPEG before printing. Everything on them stays
# vector and selectable; only the ground behind the text becomes an image.
#
# This is the whole reason the export does any of this. Poppler took 9.5s, 14.0s
# and 16.5s on the cover, the problem slide and the close slide, against 1s for a
# plain slide, because a radial shading, a full-bleed photograph under an alpha
# gradient and a masked lattice each cost per-pixel work across a 20 inch page.
# Flattened, those three pages cost one image draw.
GROUND_SLIDES = ("cover", "dark", "close")

# Hide the content while photographing the ground, but keep the cover's glow and
# ring, which are ground even though they live inside the content wrapper.
GROUND_HIDE = """
.pad, #bar, #notes { visibility: hidden !important; }
.cover-glow, .cover-ring { visibility: visible !important; }
"""

GROUND_RULE = """
#stage > section:nth-of-type({n}) {{
  background: url("./{file}") center / cover no-repeat !important;
}}
#stage > section:nth-of-type({n})::before,
#stage > section:nth-of-type({n})::after {{
  display: none !important;
}}
#stage > section:nth-of-type({n}) .hero-bg,
#stage > section:nth-of-type({n}) .hero-shade,
#stage > section:nth-of-type({n}) .cover-glow,
#stage > section:nth-of-type({n}) .cover-ring {{
  display: none !important;
}}
"""


def slug(label):
    return re.sub(r"[^a-z0-9]+", "-", re.sub(r"^\d+\s+", "", label).lower()).strip("-")


def shoot_slides(page):
    """One PNG per slide, at the deck's own stage size, one pixel to one pixel."""
    SLIDES.mkdir(parents=True, exist_ok=True)
    for old in SLIDES.glob("*.png"):
        old.unlink()
    labels = page.eval_on_selector_all(
        "section.slide", "els => els.map(e => e.getAttribute('data-label') || '')"
    )
    for i, label in enumerate(labels):
        page.evaluate(
            "k => document.querySelectorAll('section.slide')"
            ".forEach((e, j) => e.classList.toggle('active', j === k))",
            i,
        )
        page.wait_for_timeout(400)
        name = f"{i + 1:02d}-{slug(label)}.png"
        page.locator("section.slide").nth(i).screenshot(path=str(SLIDES / name))
        print(f"   {name}")
    return len(labels)


def bake_grounds(browser, work):
    """Flatten the gradient and photographic grounds to one opaque JPEG each."""
    page = browser.new_page(viewport=STAGE, device_scale_factor=1)
    page.emulate_media(reduced_motion="reduce")
    page.goto((work / DECK.name).as_uri())
    page.wait_for_timeout(1200)
    page.add_style_tag(content=GROUND_HIDE)
    classes = page.eval_on_selector_all("section.slide", "els => els.map(e => e.className)")

    rules = []
    for i, cls in enumerate(classes):
        if not any(c in cls.split() for c in GROUND_SLIDES):
            continue
        name = f"ground-{i + 1:02d}.jpg"
        page.evaluate(
            "k => document.querySelectorAll('section.slide')"
            ".forEach((e, j) => e.classList.toggle('active', j === k))",
            i,
        )
        page.wait_for_timeout(400)
        out = work / "assets" / name
        page.locator("section.slide").nth(i).screenshot(path=str(out), type="jpeg", quality=93)
        rules.append(GROUND_RULE.format(n=i + 1, file=name))
        print(f"   {name}  {out.stat().st_size // 1024} KB")
    page.close()
    return "@media print {" + "".join(rules) + "}\n"


def shrink(work, drawn):
    """Downsample every raster to twice the box it is drawn into."""
    for path, (dw, dh) in drawn.items():
        if dw <= 0:
            continue
        found = list(work.rglob(pathlib.Path(path).name))
        if not found or found[0].suffix.lower() not in (".png", ".jpg", ".jpeg"):
            continue
        f = found[0]
        im = Image.open(f)
        before = f.stat().st_size
        cap = (max(1, round(dw * 2)), max(1, round(dh * 2)))
        if im.width <= cap[0] and im.height <= cap[1]:
            continue
        im.thumbnail(cap, Image.LANCZOS)
        if f.suffix.lower() in (".jpg", ".jpeg"):
            im.convert("RGB").save(f, "JPEG", quality=88, optimize=True, subsampling=0)
        else:
            im.save(f, "PNG", optimize=True)
        print(f"   {f.name:22} {before // 1024:>5} KB to {f.stat().st_size // 1024:>4} KB")


def recompress(path, floor=80_000, quality=90):
    """Re-encode big lossless images as JPEG, then linearize.

    Chrome writes every raster as FlateDecode. A 1258 square hero costs the viewer
    4.7 MB of inflate plus a 1.6 MB alpha channel before it can draw anything, and
    that alone kept the cover at three and a half seconds. DCTDecode carries the
    same pixels at a fraction of the decode cost. Any soft mask stays where it is:
    a greyscale plane inflates quickly and JPEG would fringe the edges.
    """
    saved = 0
    with pikepdf.open(path, allow_overwriting_input=True) as pdf:
        done = set()
        for page in pdf.pages:
            for _, obj in (page.get("/Resources", {}).get("/XObject", {}) or {}).items():
                if obj.get("/Subtype") != pikepdf.Name("/Image"):
                    continue
                if obj.objgen in done or obj.get("/Filter") != pikepdf.Name("/FlateDecode"):
                    continue
                done.add(obj.objgen)
                before = len(bytes(obj.read_raw_bytes()))
                if before < floor:
                    continue
                try:
                    pil = pikepdf.PdfImage(obj).as_pil_image().convert("RGB")
                except Exception:
                    continue
                buf = io.BytesIO()
                pil.save(buf, "JPEG", quality=quality, optimize=True, subsampling=0)
                obj.write(buf.getvalue(), filter=pikepdf.Name("/DCTDecode"))
                obj.ColorSpace = pikepdf.Name("/DeviceRGB")
                obj.BitsPerComponent = 8
                if "/DecodeParms" in obj:
                    del obj["/DecodeParms"]
                after = len(bytes(obj.read_raw_bytes()))
                saved += before - after
                print(f"   {pil.width}x{pil.height}  {before // 1024} KB to {after // 1024} KB")
        pdf.save(path, linearize=True)
    return saved


def main():
    scratch = pathlib.Path(tempfile.mkdtemp(prefix="deck-print-"))
    try:
        with sync_playwright() as pw:
            browser = pw.chromium.launch(args=CHROME_ARGS)

            print("Slides")
            page = browser.new_page(viewport=STAGE, device_scale_factor=1)
            page.emulate_media(reduced_motion="reduce")
            page.goto(DECK.as_uri())
            page.wait_for_timeout(1500)
            count = shoot_slides(page)
            drawn = page.evaluate(MEASURE)
            page.close()

            work = scratch / "deck"
            shutil.copytree(SRC, work, ignore=shutil.ignore_patterns("*.pdf", "slides", "*.py"))
            print("Trimming the print copy")
            shrink(work, drawn)
            print("Baking the heavy grounds")
            ground_css = bake_grounds(browser, work)
            css = work / "assets" / "deck.css"
            css.write_text(css.read_text() + ground_css)

            page = browser.new_page(viewport=STAGE)
            page.emulate_media(media="print", reduced_motion="reduce")
            page.goto((work / DECK.name).as_uri())
            page.wait_for_timeout(2000)
            page.pdf(
                path=str(PDF),
                width="1920px",
                height="1080px",
                print_background=True,
                prefer_css_page_size=True,
                margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
            )
            browser.close()
    finally:
        shutil.rmtree(scratch, ignore_errors=True)

    print("Recompressing")
    recompress(PDF)

    print(f"\n{count} slides in {SLIDES}")
    print(f"{PDF.name}  {PDF.stat().st_size / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    main()
