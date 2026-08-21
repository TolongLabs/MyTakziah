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
2.  The songket lattice is baked into a pre-multiplied PNG tile. As an SVG under
    `opacity`, Chrome flattens the whole slide into a transparency group and
    prints roughly 150 KB of raster per light slide; as an opaque-alpha tile it
    embeds once. The tile carries the opacity, so the result is identical.

The cover's `drop-shadow` filter still forces Chrome to rasterize the hero at
print scale. That single image is about a third of the file and there is no way
to ask for it at a lower resolution, so it stays.
"""

import pathlib
import re
import shutil
import tempfile

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

# The lattice, pre-multiplied. Opacity and the dark slides' invert now live in
# the tiles, so the rule no longer opens a transparency group.
PRINT_CSS = """
@media print {
  section.slide:not(.dark):not(.nolattice)::before {
    background-image: url("./lattice-light.png") !important;
    opacity: 1 !important;
  }
  section.slide.dark::before {
    background-image: url("./lattice-dark.png") !important;
    opacity: 1 !important;
    filter: none !important;
  }
  section.slide.close::after {
    background-image: url("./lattice-close.png") !important;
    opacity: 1 !important;
  }
}
"""

# One tile per ground, pre-multiplied: the ink colour and the opacity the CSS
# would otherwise apply. Keep these in step with deck.css.
TILES = (
    ("light", (0, 0, 0), 0.032),
    ("dark", (249, 243, 234), 0.05),
    ("close", (0, 0, 0), 0.055),
)

# lattice.svg declares its own 240 by 240 size, so a bare navigation renders it
# at that size in the corner of the viewport rather than filling it. It has to be
# placed in a box of the size we actually want.
TILE_PX = 880
TILE_HOST = f"""<!doctype html><meta charset=utf-8>
<style>html,body{{margin:0;background:transparent}}
img{{display:block;width:{TILE_PX}px;height:{TILE_PX}px}}</style>
<img src="./assets/lattice.svg" alt="">"""


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


def bake_lattice(browser, work):
    """Render lattice.svg at tile size, then tint and pre-multiply it per ground."""
    host = work / "_lattice.html"
    host.write_text(TILE_HOST)
    page = browser.new_page(viewport={"width": TILE_PX, "height": TILE_PX})
    page.goto(host.as_uri())
    page.wait_for_timeout(400)
    raw = work / "assets" / "_lattice-raw.png"
    page.locator("img").screenshot(path=str(raw), omit_background=True)
    page.close()
    host.unlink()

    tile = Image.open(raw).convert("RGBA")
    if tile.size != (TILE_PX, TILE_PX):
        raise SystemExit(f"lattice tile came out {tile.size}, expected {TILE_PX} square")
    if tile.getchannel("A").getextrema()[1] == 0:
        raise SystemExit("lattice tile is empty; the SVG did not render")
    alpha = tile.getchannel("A")
    for name, rgb, mult in TILES:
        out = Image.new("RGBA", tile.size, rgb + (0,))
        out.putalpha(alpha.point(lambda a, m=mult: round(a * m)))
        out.save(work / "assets" / f"lattice-{name}.png", optimize=True)
    raw.unlink()


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
            bake_lattice(browser, work)
            css = work / "assets" / "deck.css"
            css.write_text(css.read_text() + PRINT_CSS)

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

    print(f"\n{count} slides in {SLIDES}")
    print(f"{PDF.name}  {PDF.stat().st_size / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    main()
