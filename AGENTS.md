# AGENTS.md

---

## Project

**uriis-challenge** is the team workspace for **URIIS - Student Biz Innov Challenge 2026**, a Malaysia national student innovation competition run on the Kolaxus platform.

Tagline: **"Small Ideas. Big Impact."**

Theme: **"Empowering Citizens. Transforming Government. Shaping Malaysia's Future."**

This is **not a software product repo**. The required work is an innovation idea submission and a one-page Innovation Canvas. No coding, prototype, or technical expertise is required. Apps and videos may be included only as optional supporting materials.

**Team:** TODO: add 2-5 student names and identify the team lead.

**Chosen Track:** TODO: select one of the four tracks and record it in `docs/decisions.md`.

**The Single Hardest Constraint:** the submission deadline is **21 August 2026 at 11:59 PM**. Today is 18 August 2026, so the team has three days. No extension will be given.

Read `docs/competition/brief.md` before doing substantive work. Then read the tail of `docs/decisions.md` and the selected file in `docs/tracks/`. `docs/README.md` carries the full working order.

---

## Repo Layout

The workspace follows the submission pipeline: competition rules to track selection to research to submission writing to canvas to preflight.

```text
uriis-challenge/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── package.json
├── bun.lock
├── commitlint.config.js
├── .prettierrc
├── .prettierignore
├── .gitignore
├── .gitattributes
├── skills-lock.json
├── .husky/
│   └── commit-msg        # commit message check
├── .agents/
│   └── skills/           # installed skills and their guide, the canonical copy
├── .claude/
│   ├── skills -> ../.agents/skills   # symlink, do not replace with a real directory
│   ├── settings.json     # shared hooks: punctuation guard and Impeccable detector
│   └── hooks/
│       └── no-emdash-emoji.mjs
├── scripts/
│   └── link-skills.mjs   # repairs the skills symlink after a Windows clone
├── frontend/             # optional prototype, React and Vite, not graded
└── docs/
    ├── README.md         # working manual
    ├── decisions.md      # one-line ledger of lasting choices
    ├── competition/      # brief, rubric, timeline, and submission rules
    ├── tracks/           # the four official problem statements
    ├── research/         # cited evidence and fill-in templates
    ├── submission/       # deliverable guidance and preflight checklist
    │   └── brand/        # generated logo directions, not wired into the prototype
    └── source/           # primary sources, immutable record
```

`docs/source/` is the received primary-source record. It is expected to hold two official PDFs and two briefing transcripts. Read it when source verification is needed, but never create, edit, move, rename, reformat, or delete anything there.

---

## Commands

At the repo root, run `bun run setup` once. That installs dependencies, activates the commit message hook, and repairs the skills symlink if a clone broke it.

```bash
bun run setup          # once per machine
bun run format         # apply formatting
bun run format:check   # verify formatting
bun run skills:link    # repair .claude/skills if skills go missing
```

Prettier owns whitespace, tables, list markers, and line endings for authored Markdown and configuration files.

The optional prototype in `frontend/` has its own toolchain and is driven from the root:

```bash
bun run frontend:dev     # run the prototype locally
bun run frontend:build   # produce the shareable build
```

There is no build step for the submission itself. The documents are the product.

---

## Content Style

- **Naming:** use kebab-case for files and directories.
- **Claims Carry Sources:** factual claims, numbers, and quotations in the submission must trace to a source recorded in `docs/research/`.
- **Assumptions Are Explicit:** label an assumption as `[ASSUMPTION]`. Label missing evidence as `[NEEDS SOURCE]`.
- **Team Content Uses TODOs:** do not invent a team name, member, chosen track, user insight, validation result, solution feature, impact target, partner, cost, or feasibility claim. Use `TODO:` until the team supplies it.
- **Changes Are Surgical:** touch only what the task requires and preserve the surrounding document's structure and voice.
- **Punctuation:** no em dashes and no emoji in authored content. Use a comma, colon, semicolon, parentheses, or a plain hyphen instead.

---

## Documentation Hygiene

Write every heading, subheading, bold opening label, and table header cell in Title Case. Body prose and quoted official text keep their natural capitalization.

Capitalize the first and last word and all principal words. Lowercase articles, coordinating conjunctions, and short prepositions unless they begin or end the title. Acronyms and proper names keep their established form, including AI, MyGOV, URIIS, PDF, JPG, PNG, A3, and Malaysia.

Examples: `## Submission Quality`, `**Chosen Track:**`, `| Criterion | Weight | Evidence |`.

Do not reformat received sources, transcripts, or installed skills. `.prettierignore` records those boundaries.

---

## Evidence Discipline

- Prefer official Malaysian government, agency, university, or organizer sources for factual claims.
- Record publisher, title, publication date when available, URL or local source path, and date accessed.
- Separate evidence from interpretation.
- Do not present a team assumption as a researched fact.
- Do not present an AI-generated statement as user research.
- Preserve quotations exactly and keep them short.
- If evidence cannot be verified before drafting, write `[NEEDS SOURCE]` and narrow the claim.

---

## Submission Gates

- Idea submission: PDF only and under 25 MB.
- Innovation Canvas: one page, A3 portrait, JPG or PNG only.
- Idea submission must cover Team Information and Sections 1 through 8 from the official template.
- Section 8, "Why Your Team Should Win," is 100 words or less.
- Optional supporting materials may include apps or videos.
- Submit through the Kolaxus platform. Email submissions are not accepted.
- Submit before 21 August 2026 at 11:59 PM. No extension will be given.
- Check the exported files, not only the editable originals.

The judging weights are Innovation 30%, Feasibility 25%, Social/Economic Impact 25%, and Submission Quality 20%. Drafting and review effort should follow those weights.

---

## Design Standards

Anything in this repo that a judge can see is held to a professional standard. That covers the A3
Innovation Canvas, the idea submission PDF, the deck, the optional prototype in `frontend/`, and the
brand mark. **Submission Quality is 20 per cent of the score and 30 per cent of the final score is a
student popular vote decided on a scrolled feed**, so design is not decoration here. It is points.

The bar is simple to state and hard to clear: **the work must not look like it was generated.** An
agent that ships a competent but templated layout has failed the task, not partially completed it.

### Which Skill Does What

Three skills carry design work. They are not interchangeable, and reaching for the wrong one is the
usual way this goes wrong.

| Skill                   | Output                        | Reach For It When                                                                                                                  |
| ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `impeccable`            | HTML and CSS, edited in place | Building or fixing an actual interface or the canvas. This is the execution tool.                                                  |
| `design-taste-frontend` | Judgement, rules, and code    | Setting the design read before execution, and auditing an existing screen that looks templated. This is the taste tool.            |
| `brandkit`              | Images only, never code       | Identity work: logo directions, marks, identity boards. Pair it with an image model, because it does not generate anything itself. |

`design-taste-frontend` is taste-skill v2. Its most useful parts for this repo are brief inference
(Section 0), the redesign-audit protocol, the hard em dash ban, and the pre-flight check. Its GSAP
and scroll-animation material is mostly irrelevant here and should be left on the shelf.

### The Order Of Operations

Do not start with `impeccable`. Taste sets the target; `impeccable` hits it.

1. **Read the room first.** Run the brief inference from `design-taste-frontend` and state the one
   line Design Read out loud before touching any file. For most work here the read is already known:
   a public-sector bereavement service, for a competition jury and a student vote, in a warm and
   deliberately non-institutional language.
2. **Check what already exists.** The design system is recorded, not invented. See below.
3. **Execute with `impeccable`.** `craft` to build, then `layout`, `typeset`, `colorize` and
   `visualize` for targeted passes.
4. **Audit before shipping.** `impeccable critique` plus the `design-taste-frontend` pre-flight
   check. Both, not one.
5. **Adjust with intent.** `polish`, `bolder` and `quieter` are for a named problem, not for
   another lap.

### Dial Settings For This Repo

`design-taste-frontend` exposes three dials from 1 to 10. Defaults are wrong for this project.
Use these unless a task states otherwise, and say so when you deviate.

| Dial               | Setting | Why                                                                                                         |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| `DESIGN_VARIANCE`  | 5 to 6  | Enough asymmetry to escape the template, not so much that a procurement-minded juror reads it as unserious. |
| `MOTION_INTENSITY` | 1 to 2  | The subject is bereavement and the canvas is print. Motion should be almost absent, and never decorative.   |
| `VISUAL_DENSITY`   | 3 to 4  | Everything has to survive thumbnail size. Density is the enemy of the five-second test.                     |

### Where The Design System Actually Lives

It is already decided. Do not invent a palette, and do not import one from a reference library.

- **`frontend/src/index.css`** holds the canonical tokens in oklch, light and dark. Terracotta
  primary is `#BC4D1A`, ground is warm sand `#F9F3EA`, ink is `#281913`, and there is exactly one
  cool support note, slate `#376D7C`.
- **`docs/submission/canvas/canvas-copy.md`** holds the palette direction, the typography direction,
  and the forbidden list. Read the forbidden list before generating anything visual.
- **`docs/decisions.md`** holds the choices that outrank taste, including light theme by default and
  the rule against implying government endorsement.
- **`docs/submission/brand/`** holds the identity masters as SVG. Export raster from them; never
  redraw the mark by hand and never upscale an exported PNG.

**The semantic rule, and keep it:** terracotta means act or attend, slate means settled. Colour
carries state here. Do not spend the accent on decoration.

### The Anti-Slop Rules

Current AI design output clusters around a small number of looks. Producing any of them here is a
defect. The tells:

- Warm cream ground with a serif display face and a terracotta accent
- Near black with a single acid green or vermilion pop
- A purple to blue gradient hero on white
- Inter or Space Grotesk reached for as the safe default
- Emoji as section markers, which is separately banned below
- Everything centre aligned
- One large corner radius applied uniformly to every surface
- A coloured rail down the side of a rounded card
- Numbered markers, 01 and 02 and 03, on content that is not actually a sequence
- Three items in every list because three feels balanced
- Hairline rules and dense columns used as a shortcut to signal editorial

**One trap is specific to this project.** The first item on that list, warm ground plus terracotta,
is this project's real palette. That is not slop here, because it is a recorded decision with a
stated reason: terracotta reads Malaysian and warm, and it reads clearly as not-official. The
palette is not where you avoid the cliché. Avoid it in the other choices: a geometric sans rather
than a serif display, asymmetric composition rather than centred, hairline borders in the border
token rather than soft drop shadows, and structural devices that encode something true about the
content rather than decorate it.

**Structure must mean something.** If a design uses numbering, an eyebrow, a divider, or a state
chip, that device has to carry real information. A numbered list of things that are not ordered is
a lie told in layout.

### Constraints That Bind Every Design Artifact Here

These are not stylistic preferences. Breaking one costs a gate or breaks the product.

- **The brand mark ships as a pair, and both are needed.** `docs/submission/brand/mytakziah-mark.svg`
  is the master, a three-strand weave in terracotta, ochre and slate, one strand per agency.
  `mytakziah-mark-mono.svg` is the one-colour lockup. Any context that flattens the mark must use the
  mono file, because `frontend/src/shell.tsx` repaints the footer with a `brightness-0 invert` filter
  that destroys colour. The mono version is not just the mark recoloured: it breaks each strand with a
  knockout gap, because three interlocked hexagons in one flat colour read as a honeycomb rather than
  a weave. **Never point a filtered context at the colour mark, and never remove the gaps from the
  mono one.**
- **Everything must survive 32 pixels.** Test it, do not assume it. Render the real thing at favicon
  size and look at it before claiming it works.
- **The canvas is A3 portrait at 300 DPI**, which is 3508 by 4961 pixels, exported to JPG or PNG.
- **No em dashes and no emoji** in authored content. The `.husky` and `.claude/hooks` punctuation
  guard enforces it.
- **Headings and bold lead labels are Title Case.** See Documentation Hygiene above.
- **The forbidden list in `canvas-copy.md` is absolute:** no people or figures, no funeral, hospital
  or cemetery imagery, no religious iconography of any faith, no government logos, crests or
  wordmarks, and no stock photography.
- **Licensed third-party artwork is exempt from everything above, and must not be altered.**
  `frontend/public/sdg/` holds the United Nations goal icons for the two SDGs recorded in
  `decisions.md`. The UN guidelines forbid modifying them, so they keep their own colours, `#00689D`
  for SDG 16 and `#E5243B` for SDG 1, their own aspect ratio, and their own square corners.
  **Do not recolour them into the warm palette, do not crop or round them, and do not redraw them as
  SVG.** They are also not what the forbidden list means by a government logo or crest: the
  individual goal icons are cleared for illustrative use, while the SDG logo carrying the UN emblem
  is restricted to UN System partners and must never be used. Provenance and the full rules are in
  `frontend/public/sdg/README.md`.
- **Generated raster is not a final asset.** An image model output is a direction. Redraw the chosen
  one as SVG before it goes near the canvas at print resolution.

### Image Generation

Claude Code cannot generate images. Delegate to the Codex CLI, which has generation built in and
needs no API key:

```bash
codex exec --skip-git-repo-check - < brief.md
```

Use `brandkit` for the art direction rather than hand-writing a prompt. Note that `brandkit` defaults
to a dark developer-brand visual world, so override it explicitly with this project's warm palette.
Generated work lands in `docs/submission/brand/`, and nothing is wired into `frontend/public/` until
the team picks.

### The Gate Before Anything Ships

Nothing visual is done until all four are true. State them explicitly when reporting completion.

1. `impeccable critique` has been run and its findings addressed or consciously declined
2. The `design-taste-frontend` pre-flight check passes
3. The artifact has been viewed at thumbnail size, not just at full size
4. The forbidden list and the format gate have both been checked against the exported file

---

## Critical Do-Nots

- **Do not** create, modify, delete, move, rename, reformat, or otherwise touch anything under `docs/source/`. The official PDFs and briefing transcripts live there and are the record we cite.
- **Do not** use a commit message that breaks the enforced convention, force-push, or rewrite shared history. See "Git Commit Convention" below.
- **Do not** manually create or edit files under `.agents/skills/`. Skills are installed and pinned with skills.sh. Read `.agents/skills/README.md` for the supported management commands.
- **Do not fabricate facts.** Use TODOs and source markers instead.
- **Do not assume a track has been selected** until it is recorded in `docs/decisions.md`.
- **Do not build a prototype by default.** The competition does not require one, and the deadline makes unscored work especially costly. `frontend/` holds a ready React and Vite setup if the team decides one is worth it, but only start it after the PDF and the canvas have passed preflight. Read `frontend/README.md` first.
- **Do not replace `.claude/skills` with a real directory.** It is a symlink to `.agents/skills`, which is the canonical copy. Installers sometimes overwrite it. Repair it with `bun run skills:link`.
- **Do not miss a format gate** for the PDF or canvas.
- **No Secrets in Repo.** Keep credentials, private contact details, and Kolaxus login data out of tracked files.

---

## Decisions

`docs/decisions.md` is the persistent ledger. Add one line for each lasting team choice, especially the team name, selected track, target user, core problem framing, solution concept, and final impact claims. Never silently reverse a recorded choice. Add a new entry that states what changed and why.

---

## Using AI Assistants

Any AI assistant may be used to read, research, draft, or review work in this workspace. The human team owns every lasting decision, all claims based on lived experience, the final wording and exported files, and the submission through Kolaxus.

AI assistants must not invent team facts, user research, validation results, metrics, partnerships, costs, or feasibility claims. They must leave unknown team content as `TODO:`, mark missing evidence as `[NEEDS SOURCE]`, label assumptions as `[ASSUMPTION]`, and never submit on the team's behalf.

---

## Git Commit Convention

Conventional Commits are enforced by the `.husky/commit-msg` hook. Every commit message must follow `<type>[optional-scope]: <description>`.

Allowed types are `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`, and `perf`. Use `docs:` for most writing changes. Write a short imperative description, start it with a lowercase word, and do not add a trailing period.

Examples:

```text
docs: add rural track research notes
docs(canvas): revise impact copy
fix: correct the submission deadline
chore: update document formatting
```

If the hook rejects a message, its friendly error explains the rule and gives copy-paste examples. The change is not lost; correct the message and try again. Never force-push or rewrite shared history.
