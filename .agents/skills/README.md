# Agent Skills

63 skills installed for the URIIS Student Biz Innov Challenge 2026, curated
against the eight submission sections, the four judging criteria, and the four
problem statements.

These are plain `SKILL.md` instruction files. Any agent that reads `.agents/`
picks them up.

This directory is the single source of truth. `.claude/skills` is a symlink
pointing here, so Claude sees exactly the same set. If skills ever go missing
after a clone, which happens on Windows when the symlink does not survive, run
`bun run skills:link` from the project root to repair it.

## Managing skills

Installed with [skills.sh](https://skills.sh) (`vercel-labs/skills`):

```bash
bunx skills list                  # what is installed
bunx skills find "<query>"        # search the ecosystem
bunx skills add <owner/repo> -s <skill> -a universal --copy -y
bunx skills experimental_install  # restore everything from skills-lock.json
```

Note: `-s` does not accept a comma separated list. Pass the flag once per
skill. `-a universal` is what targets `.agents/skills/`.

`skills-lock.json` in the repo root pins the exact versions. Commit it.

## Map to the submission template

The template has eight sections. Reach for these:

| Section | Skills |
| --- | --- |
| 1. The Problem | `opportunity-solution-tree`, `jobs-to-be-done`, `identify-assumptions-new`, `pestle-analysis` |
| 2. Target User | `user-personas`, `ideal-customer-profile`, `user-segmentation`, `market-segments`, `beachhead-segment`, `empathy-map`, `customer-journey-map`, `interview-script`, `job-stories` |
| 3. Your Solution | `brainstorm-ideas-new`, `value-proposition`, `value-prop-statements`, `lean-canvas`, `service-blueprint`, `user-flow-diagram`, `conversational-ux` |
| 4. Innovation Element | `competitor-analysis`, `competitive-battlecard`, `positioning-ideas`, `swot-analysis`, `porters-five-forces` |
| 5. Impact | `toc-builder`, `market-sizing`, `north-star-metric`, `data-visualization` |
| 6. Feasibility | `business-model`, `monetization-strategy`, `gtm-strategy`, `startup-validator`, `pre-mortem`, `strategy-red-team` |
| 7. Visual Concept | `impeccable`, `wireframe-spec`, `storyboard-manager`, `visual-hierarchy`, `layout-grid`, `color-system`, `typography-scale`, `information-architecture` |
| 8. Why Your Team Should Win | `product-vision`, `value-prop-statements`, `grammar-check`, `ux-writing` |

## Map to the judging criteria

Weightings are fixed by the organisers. Spend effort proportionally.

| Criterion | Weight | Skills that move the score |
| --- | --- | --- |
| Innovation | 30% | `competitor-analysis`, `positioning-ideas`, `brainstorm-ideas-new`, `opportunity-solution-tree` |
| Feasibility | 25% | `business-model`, `startup-validator`, `identify-assumptions-new`, `pre-mortem`, `strategy-red-team` |
| Social / Economic Impact | 25% | `toc-builder`, `market-sizing`, `north-star-metric`, `pestle-analysis` |
| Submission Quality | 20% | `impeccable`, `grammar-check`, `ux-writing`, `visual-hierarchy`, `layout-grid`, `business-document-generator`, `docx`, `pptx` |

## Building the A3 Innovation Canvas

The canvas is a graded deliverable: one page, A3 portrait, JPG or PNG only. It
carries a real share of the 20% Submission Quality score, and it is the first
thing a judge looks at.

`impeccable` is installed for this. It is a design skill aimed at HTML and CSS,
which suits the canvas well: build the page in HTML, then export it at A3 300
DPI (3508 by 4961 pixels, portrait) to PNG. Working in HTML rather than a
drawing tool means the layout, type scale, and colour stay editable to the last
minute, and every change is reviewable in git.

Useful entry points, all invoked as `/impeccable <command>`:

| Command | Use it for |
| --- | --- |
| `init` | Set up design context for the repo first, once. |
| `craft` | Build the canvas from a description. |
| `layout` | Fix the five-pillar arrangement and visual balance. |
| `typeset` | Type scale and readability, which matters at A3 print size. |
| `colorize` | Build a coherent palette. |
| `visualize` | Present impact numbers as charts rather than raw text. |
| `critique` | Get a design review before you export. |
| `polish`, `bolder`, `quieter` | Adjust the finished piece. |

Keep the five pillars intact: The Concept, Problem, Target User, Innovation,
and Impact. Confirm the exported file is A3 portrait and JPG or PNG in
`docs/submission/preflight.md` before uploading.

## Map to the four problem statements

Everything above applies to all four tracks. These are the extras that matter
if you pick a given track.

**1. Fostering Trustworthy and Ethical AI in the Public Sphere**
`iso-42001-ai-governance` (the AI management system standard, gives you real
vocabulary for accountability and oversight), `heuristic-evaluation`,
`accessibility-audit`, `information-architecture`.

**2. One-Stop AI Assistant for End-to-End Government Services**
`conversational-ux` (directly on point, this track is a conversational
assistant), `service-blueprint` (cross agency handoffs are a service design
problem), `user-flow-diagram`, `customer-journey-map`.

**3. Future Talent Ecosystem: AI for Employment & Skills**
`market-segments`, `user-segmentation`, `beachhead-segment` (a talent
ecosystem is two sided, pick a wedge), `job-stories`, `north-star-metric`.

**4. Empowering Rural Communities Through Innovation**
`localization-design` (language and literacy access is the core constraint),
`accessibility-audit`, `empathy-map`, `service-blueprint`, `market-sizing`.

## Working with the source material

`summarize-meeting` is aimed at `docs/source/`. The participant briefing
transcript is 639 segments of live Q&A and contains detail that is not in
either PDF. Run it over the transcript before you start writing.

`research-paper-writer` and `market-research-analysis` are for building the
evidence base. Impact is 25% of the score and unsourced numbers are the usual
way teams lose it.

## Known gaps

The ecosystem search turned up nothing credible for Malaysian public sector
policy, MyGOV integration, or rural development specifically. Those are
domain research problems, not skill problems. The judging criteria reward
evidence, so plan to source that material yourselves rather than expecting a
skill to supply it.
