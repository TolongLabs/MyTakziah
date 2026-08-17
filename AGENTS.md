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
