# docs/

The working manual for this workspace. For first-contact orientation, read the root [`README.md`](../README.md). For the official challenge summary, read [`competition/brief.md`](competition/brief.md).

## What This Repo Is

This is a document-first team workspace for **URIIS - Student Biz Innov Challenge 2026**. The required outputs are an idea submission in PDF and a one-page Innovation Canvas image. No coding or prototype is required.

## Deadline State

**D-3 as of 18 August 2026. Submission closes 21 August 2026 at 11:59 PM, with no extension.**

The team should optimize for a complete, evidenced, compliant submission. Optional supporting material comes only after both required artifacts pass preflight.

## What We Are Producing

| Deliverable         | Required Format       | Hard Gate                                      | Deadline                 |
| ------------------- | --------------------- | ---------------------------------------------- | ------------------------ |
| Idea Submission     | PDF only              | Under 25 MB and follows the provided template  | 21 August 2026, 11:59 PM |
| Innovation Canvas   | JPG or PNG only       | One page, A3 portrait                          | 21 August 2026, 11:59 PM |
| Supporting Material | Optional app or video | Only if it strengthens the required submission | Same submission window   |

Submission is through Kolaxus. Email submissions are not accepted.

## Directory Map

| Path                | Purpose                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `docs/competition/` | Ground-truth brief, judging weights, timeline, and submission rules |
| `docs/tracks/`      | The four official problem statements plus team fill-in prompts      |
| `docs/research/`    | Evidence notes, source records, and reusable templates              |
| `docs/submission/`  | Required section map, canvas guidance, and export preflight         |
| `docs/source/`      | Primary sources, immutable record; never edit or reformat           |
| `docs/decisions.md` | Lasting team choices, newest at the bottom                          |
| `docs/plan.md`      | Current checkboxed work plan                                        |
| `docs/progress.md`  | Dated status and blocker log                                        |
| `docs/test.md`      | QA verdicts and preflight observations                              |

## Submission Pipeline

`rules -> track choice -> target-user evidence -> concept -> submission draft -> canvas -> rubric QA -> export preflight -> Kolaxus`

Each stage must feed the next. Research that does not improve a template section, canvas pillar, or judging criterion is out of scope on a three-day clock.

## Reading Order for a New Session

1. `docs/competition/brief.md`
2. `docs/competition/rubrics.md`
3. Tail of `docs/decisions.md`
4. `docs/progress.md`
5. `docs/plan.md`
6. The selected file under `docs/tracks/`, once chosen
7. The research or submission file matching the assigned task

## Writing Rules

- Use Title Case for headings, table headers, and bold opening labels.
- Use kebab-case for paths.
- Cite factual claims and numbers.
- Mark missing evidence as `[NEEDS SOURCE]`.
- Mark team-specific unknowns as `TODO:`.
- Label assumptions as `[ASSUMPTION]`.
- Use no em dashes and no emoji.
- Never alter `docs/source/` or protected root media.

## Commands

```bash
bun install
bun run format
bun run format:check
```

There is no build step. Export checks are performed on the final PDF and canvas image using the checklist in `docs/submission/preflight.md`.

## Agent Workflow

The optional workflow is PM to Planner to Producer to QA. `docs/roles.md` defines boundaries, and `docs/agent-workflow.md` defines the handoffs. The workflow does not replace human decisions or the final Kolaxus submission.
