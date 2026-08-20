# Canvas Versions

Six A3 candidates for the Innovation Canvas. **The team picks one; the rest are kept for the
record.** Decision owner is @AlaskanTuna, per issue #13.

Every file here is A3 portrait, **3508 by 4961 pixels at 300 DPI**, PNG, one page, and under the
25 MB gate.

## The Candidates

| Version | File                  | Source      | Look                                                                                | Hero Line                                         |
| ------- | --------------------- | ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| v1      | `mytakziah-v1-a3.png` | Code + art  | Serif hero, gold corner ornament, horizontal thread, illustrated scene at the base. | One death. Tell government once.                  |
| v2      | `mytakziah-v2-a3.png` | Image model | The illustrated "full-v2". Songket border, medallion chain, watercolour base.       | Grief is hard enough. The paperwork shouldn't be. |
| v3      | `mytakziah-v3-a3.png` | Code        | Editorial and austere. Three columns, one vertical thread, no illustration.         | One death. Tell government once.                  |
| v4      | `mytakziah-v4-a3.png` | Code + art  | Illustrated rebuild. Watercolour backdrop, connected chain, four cards.             | Grief is hard enough. The paperwork shouldn't be. |
| v5      | `mytakziah-v5-a3.png` | Code + art  | As v4, plus a watercolour scene behind each pillar card.                            | Grief is hard enough. The paperwork shouldn't be. |
| v6      | `mytakziah-v6-a3.png` | Code + art  | As v4, in a layered paper-cut style, with each card led by an illustrated banner.   | Grief is hard enough. The paperwork shouldn't be. |

**v2 has no editable source in this repo**, because it came out of an image model. v1 and v3 to v6
each have a matching `.html` that re-exports the PNG exactly, so their copy and figures can still be
corrected before submission.

## How They Check Out

| Check                                          | v1  | v2  | v3  | v4  | v5  | v6  |
| ---------------------------------------------- | --- | --- | --- | --- | --- | --- |
| A3 portrait, 3508 by 4961, 300 DPI             | Yes | Yes | Yes | Yes | Yes | Yes |
| Under 25 MB                                    | Yes | Yes | Yes | Yes | Yes | Yes |
| Vector-crisp text at print size                | Yes | No  | Yes | Yes | Yes | Yes |
| Body text at or above 5 mm on A3               | No  | No  | No  | Yes | Yes | Yes |
| Prototype QR present and decodes               | No  | No  | Yes | Yes | Yes | Yes |
| Editable source in repo                        | Yes | No  | Yes | Yes | Yes | Yes |
| No em dash, no emoji, no banned agency wording | Yes | Yes | Yes | Yes | Yes | Yes |

**On text size.** v1, v2 and v3 set body copy at roughly 3 mm on A3, which is a caption size and
too small to read at poster distance. v4, v5 and v6 set it at 5 mm or more.

**On v2.** It is an image-model render, so its text is soft at A3 and cannot be corrected without
regenerating the whole poster. v4, v5 and v6 reproduce its look in code, which keeps the warmth and
makes the text sharp and editable.

## Rebuilding An Export

Edit the version's `.html`, then screenshot the `#page` element at 1754 by 2480.5 with
`deviceScaleFactor: 2` in Playwright, and pad the result to 4961 with a 300 DPI tag. Fonts are
embedded in `assets/fonts-embedded.css`, so an export cannot silently fall back to a system face.

Generated artwork lives in `../../codex-generated/`. Prefixes: no prefix for v4, `b-` for v5,
`c-` for v6.

## Open Points Before Submission

- **The hero line changed.** v1 and v3 carry "One death. Tell government once." from `canvas-copy.md`.
  The team removed it as insensitive, so v4 to v6 use v2's hero and sub instead. `canvas-copy.md`
  and the deck on issue #9 still carry the old line and need updating to match whichever version wins.
- **In v4 to v6 the KWSP station reads "savings and death benefit"**, not a figure. v1 and v2 print "RM2,500" there. EPF Death Assistance is
  discretionary in KWSP's own words, so a bare amount on a station label would read as a promise.
- **Team member names are still `TODO`** and appear on none of these versions.
