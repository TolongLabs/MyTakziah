# URIIS Student Biz Innov Challenge 2026

This folder contains the team's working documents for **URIIS - Student Biz Innov Challenge 2026**, a Malaysia national student innovation competition on Kolaxus. It is not a software project. The work is to develop one well-supported idea, write the required submission, and prepare a one-page Innovation Canvas.

**Deadline:** 21 August 2026 at 11:59 PM. No extension will be given.

The idea submission must be a PDF under 25 MB. The Innovation Canvas must be one A3 portrait page in JPG or PNG. Both are submitted through Kolaxus. Email submissions are not accepted.

Tagline: **"Small Ideas. Big Impact."**

Theme: **"Empowering Citizens. Transforming Government. Shaping Malaysia's Future."**

**Team:** TODO: add the team name, 2-5 students, and team lead.

**Chosen Track:** TODO: choose exactly one of the four tracks and record it in [`docs/decisions.md`](docs/decisions.md).

## Start Here

1. Open this whole folder with any AI assistant you use, such as Claude Code, Codex, Cursor, Gemini, ChatGPT, or Copilot.
2. Paste one of the prompts below into the assistant.
3. Let the assistant read the relevant files before it suggests or makes changes.

You do not need to install anything or use a text command window to begin writing or research.

### Find the Next Task

```text
Read AGENTS.md, docs/competition/brief.md, docs/decisions.md, and docs/README.md. Tell me the deadline, the decisions still needed from the team, and the three most useful actions I can take now. Do not invent team facts, and do not edit anything under docs/source/.
```

### Compare the Four Tracks

```text
Read docs/competition/brief.md, docs/competition/rubrics.md, and all four files in docs/tracks/. Give me a concise comparison of the four tracks against Innovation, Feasibility, Social/Economic Impact, and Submission Quality. Identify the evidence each track would need. Do not select a track for the team or invent research findings.
```

### Research a Chosen Track

```text
Our chosen track is TODO: [insert the exact track]. Read AGENTS.md, the matching file in docs/tracks/, and docs/research/README.md. Research one narrowly defined problem for one target user, prioritizing official Malaysian government, agency, university, or competition sources. Record sources and separate evidence from interpretation. Mark unsupported points as [NEEDS SOURCE] and team choices as TODO:.
```

### Draft or Review a Submission Section

```text
Help with Section TODO: [insert section number and name]. First read AGENTS.md, docs/competition/rubrics.md, docs/competition/submission-rules.md, docs/decisions.md, and the relevant research notes. If a draft exists, review it against the judging weights and suggest precise revisions. If no draft exists, prepare a fill-in draft using only supported facts. Keep unknown team details as TODO: and missing evidence as [NEEDS SOURCE].
```

## What the Team Must Produce

- **Idea Submission:** PDF only, under 25 MB, covering Team Information and Sections 1 through 8 of the official template.
- **Innovation Canvas:** one A3 portrait page, JPG or PNG only.
- **Track Choice:** exactly one of the four official problem statements.
- **Submission:** upload through Kolaxus before 21 August 2026 at 11:59 PM.

No coding, prototype, app, video, or technical expertise is required. An app or video is optional supporting material and should only be considered after both required files are ready.

## The Four Tracks

1. Fostering Trustworthy and Ethical AI in the Public Sphere
2. One-Stop AI Assistant for End-to-End Government Services
3. Future Talent Ecosystem: AI for Employment & Skills
4. Empowering Rural Communities Through Innovation

Read the exact official wording in [`docs/tracks/`](docs/tracks/). The team must choose exactly one track.

## How the Entry Is Judged

| Criterion              | Weight |
| ---------------------- | -----: |
| Innovation             |    30% |
| Feasibility            |    25% |
| Social/Economic Impact |    25% |
| Submission Quality     |    20% |

Use [`docs/competition/rubrics.md`](docs/competition/rubrics.md) for the review questions.

## Folder Map

| Path                | What It Contains                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `docs/competition/` | The official brief, judging weights, dates, and submission rules.                          |
| `docs/tracks/`      | The four official problem statements and space for the team's chosen angle.                |
| `docs/research/`    | Source notes and fill-in templates for evidence, insights, and concepts.                   |
| `docs/submission/`  | Guidance for the written entry, canvas copy, final review, and exported-file checks.       |
| `docs/source/`      | The original PDFs and briefing transcripts. Read them when needed, but never edit them.    |
| `docs/decisions.md` | The lasting choices made by the human team.                                                |
| `.agents/skills/`   | Extra instructions that AI assistants can use for research, writing, strategy, and design. |
| `frontend/`         | An optional clickable demo. Not required and not graded. Ignore it unless asked.           |
| `AGENTS.md`         | The rules every AI assistant must follow in this folder.                                   |

For a shorter guide to the documents, read [`docs/README.md`](docs/README.md).

## Working Rules

- Do not invent a team name, member, chosen track, user insight, validation result, feature, impact target, partner, cost, or feasibility claim.
- Use `TODO:` for facts the team must supply, `[NEEDS SOURCE]` for evidence still missing, and `[ASSUMPTION]` for an explicit assumption.
- Support factual claims, numbers, and short quotations with sources recorded under `docs/research/`.
- Never edit, move, rename, reformat, or delete anything under `docs/source/`.
- Check the actual exported PDF and canvas image with [`docs/submission/preflight.md`](docs/submission/preflight.md) before upload.
- Human teammates make all final decisions and submit the files through Kolaxus.

## Saving Changes with Git

Git is the folder's change history. A commit is a named checkpoint containing a set of changes. If your team uses Git, each checkpoint message must start with a short change type, then a colon and a clear description.

Copy-paste examples:

```text
docs: add rural track research notes
docs: revise the impact section
fix: correct the submission deadline
chore: update document formatting
```

The allowed types are `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`, and `perf`. For most writing changes, use `docs:`. Keep the description short, start it with a lowercase word, and do not end it with a full stop.

An automatic commit-message check enforces this rule. If a message is rejected, the friendly error message tells you exactly what to fix, and no work is lost.

## Optional Terminal Commands

These commands are **not required for writing or research work**. A terminal is a text window for giving the computer commands. Use this section only if a technical teammate asks you to prepare or check document formatting.

`bun` is the small command runner used by this folder. Prettier is the automatic formatter that keeps spacing, tables, and lists consistent in the text documents.

Run once on a new computer:

```bash
bun run setup
```

Format the documents, then check that formatting is consistent:

```bash
bun run format
bun run format:check
```

If your AI assistant cannot find the extra skills after you first download the folder, run this and try again:

```bash
bun run skills:link
```

There is no application to build. The documents are the submission work.

## Optional Prototype

The team may build a small clickable demo to help explain the idea. It is optional supporting material, it is not graded, and it should only be started once the PDF and the canvas are finished and checked.

The tools are already set up, so nothing needs deciding in advance. See [`frontend/README.md`](frontend/README.md), then from the project root:

```bash
bun run frontend:dev
```
