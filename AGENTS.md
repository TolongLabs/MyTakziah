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

Read `docs/competition/brief.md` before doing substantive work. Then read the tail of `docs/decisions.md`, `docs/progress.md`, and the selected file in `docs/tracks/`. `docs/README.md` carries the full working order.

---

## Repo Layout

The workspace follows the submission pipeline: competition rules to track selection to research to submission writing to canvas to preflight.

```text
uriis-challenge/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── .claude/agents/       # Claude role adapters
├── .codex/agents/        # Codex role adapters
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

At the repo root, run `bun install` once, then:

```bash
bun run format
bun run format:check
```

Prettier owns whitespace, tables, list markers, and line endings for authored Markdown and configuration files. There is no build, application, or prototype command.

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

The judging weights are Innovation 30%, Feasibility 25%, Social/Economic Impact 25%, and Submission Quality 20%. Drafting effort and QA should follow those weights.

---

## Critical Do-Nots

- **Do not** create, modify, delete, move, rename, reformat, or otherwise touch anything under `docs/source/`. The official PDFs and briefing transcripts live there and are the record we cite.
- **Do not** run `git init`, `git add`, `git commit`, or another git write command without explicit human direction.
- **Do not** hand-create files under `.agents/skills/`. Skills are installed and pinned with skills.sh, see `.agents/skills/README.md`.
- **Do not fabricate facts.** Use TODOs and source markers instead.
- **Do not assume a track has been selected** until it is recorded in `docs/decisions.md`.
- **Do not build a prototype by default.** The competition does not require one, and the deadline makes unscored work especially costly.
- **Do not miss a format gate** for the PDF or canvas.
- **No Secrets in Repo.** Keep credentials, private contact details, and Kolaxus login data out of tracked files.

---

## Decisions

`docs/decisions.md` is the persistent ledger. Add one line for each lasting team choice, especially the team name, selected track, target user, core problem framing, solution concept, and final impact claims. Never silently reverse a recorded choice. Add a new entry that states what changed and why.

---

## Agent Workflow

This workspace can use a PM-orchestrated Planner to Producer to QA workflow. The roles are tool-agnostic and defined in `docs/roles.md`; execution details are in `docs/agent-workflow.md`.

- **Planner:** turns the next submission objective into a sourced, checkboxed plan in `docs/plan.md`.
- **Producer:** performs research, writes submission content, and prepares canvas-ready copy. The legacy adapter filename is `programmer`, but this role does not default to coding.
- **QA:** reviews the work against official rules, judging weights, source quality, internal consistency, and export readiness.

Human teammates own track selection, claims based on lived experience, final wording, and submission through Kolaxus. Agents may assist, but they do not invent or submit on the team's behalf.

---

## Git Commit Convention

When a human later authorizes commits, use Conventional Commits: `<type>[scope]: <description>`. Prefer `docs:` and `chore:` for this workspace. Use a single imperative sentence with no trailing period. Never commit or push without team approval.
