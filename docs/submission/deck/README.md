# Deck

The MyTakziah presentation deck, fourteen slides, built as one self-contained HTML file.

**Owner:** TODO: assign, per issue #19
**Status:** First full build, awaiting team review
**Feeds:** issue #9
**Open it:** `mytakziah-deck.html` in any browser. No server, no network, no build step.

---

## Controls

| Key                           | What It Does                        |
| ----------------------------- | ----------------------------------- |
| Right arrow, space, page down | Next slide                          |
| Left arrow, page up           | Previous slide                      |
| Home, End                     | First slide, last slide             |
| N                             | Toggle speaker notes, never printed |
| Click                         | Right half forward, left half back  |

The URL carries the slide number, so `mytakziah-deck.html#9` opens on slide 9.

## Exporting

`mytakziah-deck.pdf` and everything in `assets/slides/` are generated, not hand-made. Rebuild both
after any edit to the deck:

```bash
python3 docs/submission/deck/export-deck.py
```

It writes one PNG per slide at the deck's own 1920 by 1080 stage, then prints the deck to PDF from a
scratch copy. The repo's own assets are never touched. Needs Playwright, Pillow and pikepdf.

Three things happen to that scratch copy, and all three exist because a plain browser print is both
heavy and slow to open. Rasters are downsampled to twice the size they are actually drawn at. The
grounds of the cover, the problem slide and the close slide are flattened to one opaque JPEG each,
because a radial shading, a full-bleed photograph under an alpha gradient and a masked lattice each
cost per-pixel work across a 20 inch page; those three pages took 9.5, 14.0 and 16.5 seconds to
rasterize against 1 second for a plain slide, which is what makes a reader show blank pages. Then
large lossless images are re-encoded as JPEG and the file is linearized. The result is roughly
2.0 MB against the 7.4 MB a plain print produces, and every page's text stays vector and selectable.

**If a page ever starts opening slowly again, measure before guessing:**

```bash
for n in $(seq 1 15); do /usr/bin/time -f "p$n %e s" \
  pdftoppm -png -r 150 -f $n -l $n docs/submission/deck/mytakziah-deck.pdf /tmp/t; done
```

Printing from the browser also works and is the fallback: the stylesheet sets `@page` to 1920 by
1080, so every slide becomes one landscape page and the progress bar and notes are suppressed. Use
"Save as PDF", background graphics on, margins none. The file will be larger.

**This is the presentation deck, not the idea submission.** The idea submission is a separate
document built on the official 14-page template and is the artifact that must be PDF and under
25 MB. See `../idea-submission-draft.md`.

## Slide Order

| Slide | Template Section     | What It Carries                                                      |
| ----- | -------------------- | -------------------------------------------------------------------- |
| 1     | Team Information     | Wordmark, tagline, the three agency strands, four members, two SDGs  |
| 2     | 1. The Problem       | Encik Ismail's week, day one to week three                           |
| 3     | 1. The Problem       | Five facts, thirteen demands, and the i-Akaun contrast               |
| 4     | 1. The Problem       | Three clocks, only one fully published, and the 72,929 figure        |
| 5     | 2. Target User       | 91.6 per cent online, 33.6 per cent transacting, what the user needs |
| 6     | 3. Your Solution     | The five steps, and the never-approved guardrail                     |
| 7     | 3. Your Solution     | The same week without and with, and the worst case                   |
| 8     | 4. Innovation        | Not a chatbot, and the four design choices                           |
| 9     | 4. Innovation        | Four fair challenges and four answers                                |
| 10    | 5. Impact            | Scale, money already moving, the measures, the two SDGs              |
| 11    | 6. Feasibility       | Built already, not yet proven, and the four first steps              |
| 12    | 7. Visual Concept    | The one-thread diagram and the three prototype screens               |
| 13    | 8. Why We Should Win | Four roles, and the eighty-one word answer                           |
| 14    | Close                | The tagline, the QR code, the team                                   |

The "three proofs" slide was cut on 2026-08-21: two of its three proofs were restated verbatim as
challenges on the next slide, and its one original proof, KWSP's member-only capability, moved there
too. Slide 13 was cut earlier the same day and restored in a lower-key form. It carries the four
members' disciplines and one paragraph, and it **does not mention Layak or the two actuaries**, at
the team's request. Anyone presenting has to carry that credibility material by mouth.

## Design

Everything here comes from the recorded system, not from taste. Palette, type and semantics live in
`frontend/src/index.css`, `../canvas/canvas-copy.md` and `../../decisions.md`.

- **Terracotta `#BC4D1A` means act or attend. Slate `#376D7C` means settled.** Colour carries state
  on every slide: unpublished deadlines are terracotta, published ones slate; the "without" column
  is plain, the "with" column carries the slate tint.
- **Type is Outfit for display and Work Sans for text**, both embedded in `assets/fonts.css`, so the
  deck renders identically with no network. One type scale, declared at the top of
  `assets/deck.css`, and nothing is set outside it.
- **The three strands on the cover are the three agencies**, in the mark's own three colours, which
  are the same three the braided ribbons in the cover illustration carry. The device is a key.
- **The songket lattice is on the first slide and the last slide only.** It frames the deck rather
  than texturing it, and the twelve slides in between are clean ground so the content carries them.
  The cover has it over its own warm radial glow at 3.2 per cent; the close slide has it across the
  top band at 5.5 per cent, masked out before it reaches the part of the frame that reads as a
  picture.
- **Do not put a CSS filter or a transform on anything the cover needs.** Chrome's PDF writer
  rasterizes a filtered element at print scale and silently drops a radial gradient on a transformed
  absolutely positioned box. Both bugs hit this cover, and both are fixed by avoiding the feature:
  the hero's shadow is painted into `assets/cover-hero.png` and `.cover-glow` is centred with
  `calc()`. Check the exported PDF, not the browser, after any change here.
- Structure is hairlines and one 4px radius, not soft shadows and rounded cards. **Tables carry an
  opaque `--card` surface**, not a tint and not a blur: the deck prints, and a backdrop filter does
  not survive the print path while a half-transparent fill lets the lattice run through the figures.
- **The three prototype screens on slide 13 are 16 by 9**, in the same card shell the A3 canvas uses,
  so no screen is ever cropped mid-sentence. Recapture them with `export-deck.py`'s viewport, 1280 by
  720 at twice the device pixel ratio, with `.glass.fixed` hidden.

## Assets

| Path                              | Where It Came From                                                           |
| --------------------------------- | ---------------------------------------------------------------------------- |
| `assets/fonts.css`                | Copied from the canvas build. Outfit and Work Sans, embedded                 |
| `assets/mark.png`                 | The Anyaman weave mark, from `../brand/`                                     |
| `assets/med-*.png`                | The watercolour medallion set, resized from `../codex-generated/`            |
| `assets/screen-*.png`             | Prototype screenshots, captured 16 by 9 by `export-deck.py`'s recipe         |
| `assets/slides/`                  | One PNG per slide, generated. Do not edit by hand, regenerate                |
| `assets/sdg-*.png`                | Official UN goal icons. **Do not recolour, crop or round them**              |
| `assets/gen/*`                    | Generated for this deck via the Codex CLI, art direction in this repo        |
| `assets/gen/bg-problem-young.jpg` | The problem slide's ground. `bg-problem.jpg` is the elderly original, kept   |
| `assets/cover-hero.png`           | `gen/cover-hero.png` with its shadow painted in. Regenerate, never hand-edit |

`assets/gen/bg-problem-young.jpg` is one painted scene, not a figure composited over a background. That
matters: the earlier two-layer version read as a sticker, and a cut-out figure over a photographic
plate is the tell that gets a deck marked as generated.

## Things A Reviewer Should Check

- [ ] **43,929 on slide 4 still has no source.** Supply one or revert to 72,929, 2003 to 2014
- [ ] **A human has opened the Tan Gek Hiang article on slide 2.** PressReader blocks automated retrieval, so it was read through a search index. `../../research/documented-accounts-bereavement.md` requires a human to confirm it before it is quoted
- [ ] Every other figure still matches `../../research/verified-figures.md`
- [ ] No banned word anywhere on a slide: approved, eligible, you will receive
- [ ] Section 8 on slide 13 is still at or under 100 words. It is eighty-one
- [ ] Slide 2's composite is still labelled fictional, and the Saifulnizam naming risk in `../../decisions.md` is either resolved or consciously accepted
- [ ] The fictional-composite line on slide 2 is still present and still says fictional, and Tan Gek Hiang is still distinguished from it as a real case
- [ ] The four contact blocks on the cover are still the details the members want published
- [ ] Print to PDF and check the exported file, not only the browser

## Known Gaps

- **TODO: courses for all four members.** The cover carries name and university only, because the
  courses have not been supplied. Decide whether they belong on the cover at all.
- **The prototype fixture in `frontend/src/data.ts` still names the deceased.** The deck no longer
  does, by the 2026-08-21 decision. The two are now inconsistent. The three screenshots on slide 13
  were checked and none of them shows the name, but a live demo of steps 1 and 2 will.
