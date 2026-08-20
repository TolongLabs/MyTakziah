# Canvas Versions

Eight A3 candidates for the Innovation Canvas. **The team picks one; the rest are kept for the
record.** Decision owner is @AlaskanTuna, per issue #13.

Every file here is A3 portrait, **3508 by 4961 pixels at 300 DPI**, PNG, one page, and under the
25 MB gate.

## The Candidates

| Version        | File                  | Source      | Look                                                                                           | Hero Line                                         |
| -------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| v1             | `mytakziah-v1-a3.png` | Code + art  | Serif hero, gold corner ornament, horizontal thread, illustrated scene at the base.            | One death. Tell government once.                  |
| v2             | `mytakziah-v2-a3.png` | Image model | The illustrated "full-v2". Songket border, medallion chain, watercolour base.                  | Grief is hard enough. The paperwork shouldn't be. |
| v3             | `mytakziah-v3-a3.png` | Code        | Editorial and austere. Three columns, one vertical thread, no illustration.                    | One death. Tell government once.                  |
| v4             | `mytakziah-v4-a3.png` | Code + art  | Illustrated rebuild. Watercolour backdrop, connected chain, four cards.                        | Grief is hard enough. The paperwork shouldn't be. |
| v5             | `mytakziah-v5-a3.png` | Code + art  | As v4, plus a watercolour scene behind each pillar card.                                       | Grief is hard enough. The paperwork shouldn't be. |
| v6             | `mytakziah-v6-a3.png` | Code + art  | As v4, in a layered paper-cut style, with each card led by an illustrated banner.              | Grief is hard enough. The paperwork shouldn't be. |
| v7             | `mytakziah-v7-a3.png` | Code + art  | v5 rebuilt for legibility: bigger, heavier, darker type, two-column pillars, money-led Impact. | Grief is hard enough. The paperwork shouldn't be. |
| **v8, latest** | `mytakziah-v8-a3.png` | Code + art  | v7 plus two real screens from the running prototype, and a sharper problem statement.          | Grief is hard enough. The paperwork shouldn't be. |

**v2 has no editable source in this repo**, because it came out of an image model. Every other
version has a matching `.html` that re-exports the PNG exactly, so its copy and figures can still be
corrected before submission.

## How They Check Out

| Check                                          | v1  | v2  | v3  | v4  | v5  | v6  | v7  | v8  |
| ---------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| A3 portrait, 3508 by 4961, 300 DPI             | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Under 25 MB                                    | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Vector-crisp text at print size                | Yes | No  | Yes | Yes | Yes | Yes | Yes | Yes |
| Prototype QR present and decodes               | No  | No  | Yes | Yes | Yes | Yes | Yes | Yes |
| Editable source in repo                        | Yes | No  | Yes | Yes | Yes | Yes | Yes | Yes |
| No em dash, no emoji, no banned agency wording | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

## Body Text Size, Measured

Measured from each version's own source, converted to the printed A3 sheet. This is the dominant
body size, not the headline or the display numbers.

| Version | Body text on A3                                               |
| ------- | ------------------------------------------------------------- |
| v1      | 8.6 pt, about 3.0 mm                                          |
| v2      | Not measurable, image model output, visually comparable to v1 |
| v3      | 8.5 pt, about 3.0 mm                                          |
| v4      | 11.0 pt, about 3.9 mm                                         |
| v5      | 11.0 pt, about 3.9 mm                                         |
| v6      | 11.0 pt, about 3.9 mm                                         |
| v7      | about 13 pt, 4.6 mm                                           |
| **v8**  | **about 13 pt, 4.6 mm**                                       |

**Correction.** An earlier note on issue #13 said v4 to v6 set body text "at 5 mm or more". That was
wrong. They set it at 11 pt, roughly 3.9 mm. v7 is the first version at about 13 pt.

For reference, a poster read at arm's length wants 12 pt or more for body copy, and 14 pt is
comfortable. v7 clears the first bar; v1, v2 and v3 sit well below it.

## What v7 Changes Against v5

**Legibility**

- **Type is larger and heavier throughout.** Body copy moves from 11 pt to about 13 pt, the base
  weight moves from regular to medium, and bold lead-ins move from semibold to bold.
- **Text is darker.** The muted neutral moves from `#736056` to `#5c4a40`, and the lede under the
  headline is now full ink rather than muted.
- **Station subtexts are ink, not muted**, and set in semibold, because they were the faintest text
  on the poster.
- **The footer is bigger and darker.** Its labels are ink and semibold, the QR grows to 164 px, the
  SDG icons to 120 px, and the Kolaxus mark to 76 px.

**Composition**

- **Pillar numbers are terracotta**, so "1. Problem" reads as a marker rather than grey furniture.
- **Two pillars became two-column** to pay for the larger type: the four Innovation points sit in a
  2 by 2 grid, and the two benefit figures in Impact sit side by side.
- **Money now leads the Impact pillar.** RM3.05b is set at 88 px against 198,992 at 66 px, and the
  two sit on a shared baseline via a grid row rather than being flex-aligned by their bottoms.
- **No footer panel.** An earlier pass put the footer on a white card, which read as clutter. The
  footer now sits on the page under a hairline rule, and a soft wash of the page ground settles the
  illustration behind it so the text still holds.
- **The card artwork is more present**, raised from 50 to 62 per cent opacity and widened.

**Marks**

- **The Kolaxus mark is keyed to transparency.** Its white box is removed by unpremultiplying
  against the white matte, so the mark sits on the warm ground rather than in a white rectangle.
- **The URIIS 2026 organiser mark is added** to the footer, keyed the same way from
  `assets/uriis-logo.jpeg`. Transparent copies are `kolaxus-logo-transparent.png` and
  `uriis-logo-transparent.png` in `assets/`.

**Copy, corrected against the research**

The old line "Drafts, never auto-approval" sat next to "MyTakziah claims" and read as a
contradiction. The sourced position is in `docs/research/agency-rule-map.md`: the model never
decides eligibility, MyTakziah pre-fills forms and submits them, and the agency decides. v7 makes
the order explicit:

- "**You approve each agency separately.** Nothing is sent until you do."
- "**Never auto-approved.** The agency decides every claim."
- The station now reads "One timeline: you approve, it submits, you track".
- The closing line reads "MyTakziah prepares and files the claim".
- The bottom disclaimer drops "Drafts only", which contradicted the above, in favour of
  "Nothing is sent without your approval".

## v8, What It Adds Over v7

**v7 is unchanged and still on `main`.** v8 is a separate candidate built from it.

- **Removed at the team's request:** the "URIIS 2026, Track 02" line, the "Small Ideas. Big Impact."
  tagline, the "Submitted through" label, and the bottom disclaimer strip.
- **Core message sharpened.** The lede now names the problem and the safeguard in one sentence, and
  the Problem pillar leads on a number derived from its own table: the same five facts are demanded
  thirteen times across the three agencies (3 + 3 + 3 + 2 + 2). The cost of failure is stated: miss
  the six-month EPF window and the RM2,500 is gone.
- **Two real screens from the running prototype**, captured from <https://mytakziah.vercel.app> and
  shown between the thread and the pillars. One is a complete entitlement card: the deadline chip,
  "Potentially Eligible, Confirmation Required", the criteria, a "What We Cannot Know" note, and the
  live source link. The other is a complete consent panel: the per-agency tabs, the exact fields JPN
  would receive, "No consent given yet. Nothing is sent to JPN.", and the consent action.
- **Two Innovation bullets were removed because the screens now prove them.** Consent-per-agency and
  never-auto-approved were assertions; they are now visible in the product, so the pillar shows
  rather than tells and the space pays for the screens.

**The screens are captured from a 430 pixel mobile frame, not the desktop layout.** That matters: on
the desktop layout the interface text lands at roughly 7 pt once placed on A3, which is half the
poster's own body size and unreadable at poster distance. Captured on mobile and shown at 1.9x, the
same text lands at **12.9 pt for body and 16.5 pt for titles**, at or above the poster's 12.5 pt body.
Capture at deviceScaleFactor 4 with viewport 430 by 940, isMobile true; crops are
`{x:14, y:252, w:402, h:193}` for Entitlements and `{x:14, y:405, w:402, h:207}` for Consent.
Screens live in `assets/proto-entitlements.png` and `assets/proto-consent.png`.

**Note on the removed disclaimer.** `docs/decisions.md` records a standing caution against implying
official endorsement. In v8 the masthead's "A proposed addition to the MyGOV family" is the only
non-endorsement signal left on the sheet. If that reads as too weak, restoring one line above the
footer is the shortest fix. v7 still carries the full strip.

## Rebuilding An Export

Edit the version's `.html`, then screenshot the `#page` element at 1754 by 2480.5 with
`deviceScaleFactor: 2` in Playwright, and pad the result to 4961 with a 300 DPI tag. Fonts are
embedded in `assets/fonts-embedded.css`, so an export cannot silently fall back to a system face.

Note that **v1 is authored at half scale**, an 877 pixel page, so it does not follow this recipe.

Generated artwork lives in `../../codex-generated/`. Prefixes: no prefix for v4, `b-` for v5 and v7,
`c-` for v6.

## Open Points Before Submission

- **The hero line changed.** v1 and v3 carry "One death. Tell government once." from
  `canvas-copy.md`. The team removed it as insensitive, so v4 onward use v2's hero and sub instead.
  `canvas-copy.md` and the deck on issue #9 still carry the old line and need updating to match
  whichever version wins.
- **From v4 onward the KWSP station reads "savings and death benefit"**, not a figure. v1 and v2
  print "RM2,500" there. EPF Death Assistance is discretionary in KWSP's own words, so a bare amount
  on a station label would read as a promise.
- **v7 shortens three Innovation lines and one Impact line** to pay for the larger type. The meaning
  is unchanged, but the exact wording now differs from `canvas-copy.md`.
- **No public submission API is evidenced.** `docs/research/agency-rule-map.md` records that a death
  notice can already be lodged online at one agency, but warns that this "is not evidence that a
  public submission or status API exists, and the submission must not imply that it is". JPN death
  registration is in person. So filing is the proposed service, not demonstrated integration, and
  nobody should defend it in question and answer as something that already works end to end.
- **Team member names are still `TODO`** and appear on none of these versions.
