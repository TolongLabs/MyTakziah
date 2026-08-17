<!-- pm-workflow scaffold, adapted for a non-coding innovation submission -->

# ROLES

Defines the human and agent roles in this workspace. Identify your role before acting.

## Role Registry

| Key | Role                      | Owns                                                    | Does Not Own                                  |
| --- | ------------------------- | ------------------------------------------------------- | --------------------------------------------- |
| PO  | Project Owner, human team | track, concept, claims, final files, Kolaxus submission | invented research or delegated accountability |
| PM  | Orchestrator              | sequence, scopes, gates, deadline risk                  | submission content                            |
| PL  | Planner                   | `docs/plan.md`                                          | research or final copy                        |
| PG  | Submission Producer       | approved research, writing, and canvas copy             | unapproved decisions or submission            |
| QA  | Submission Reviewer       | `docs/test.md` verdict                                  | rewriting the reviewed work                   |

The `programmer` adapter filename is retained to mirror the prior workspace. In this competition, PG means Submission Producer and coding is not the default task.

## Human Team

| Responsibility             | Owner |
| -------------------------- | ----- |
| Team Lead                  | TODO  |
| Track and Concept Decision | TODO  |
| Problem and User Research  | TODO  |
| Submission Writing         | TODO  |
| Canvas Design              | TODO  |
| Final QA                   | TODO  |
| Kolaxus Upload             | TODO  |
| Backup Verification        | TODO  |

Team size must be 2-5 students. Add names only when known.

## PM: Orchestrator

Runs the workflow, keeps scope aligned with the deadline, and enforces the two gates. The PM does not choose a track, invent claims, or submit through Kolaxus.

## PL: Planner

| Item     | Detail                                                                    |
| -------- | ------------------------------------------------------------------------- |
| Trigger  | team defines the next objective                                           |
| Reads    | competition docs, decisions, progress, track file, relevant work          |
| Produces | checkboxed plan with owners, dependencies, files, and acceptance criteria |
| Updates  | `docs/plan.md` only                                                       |

PL plans backward from the deadline and gives rubric-weighted work priority.

## PG: Submission Producer

| Item     | Detail                                                       |
| -------- | ------------------------------------------------------------ |
| Trigger  | plan is approved                                             |
| Reads    | plan, competition rules, decisions, selected track, evidence |
| Produces | cited research notes, submission copy, canvas-ready copy     |
| Updates  | assigned files, plan ticks, progress log                     |

PG labels unknowns and assumptions. PG never fabricates a completed interview, metric, partnership, cost, or outcome.

## QA: Submission Reviewer

| Item    | Detail                                                                |
| ------- | --------------------------------------------------------------------- |
| Trigger | draft or export is ready                                              |
| Checks  | rules, judging weights, evidence, coherence, wording, file properties |
| Verdict | Approve, Approve with Comments, or Reject with Reasons                |
| Updates | `docs/test.md` only                                                   |

QA records observed PDF size, canvas format, orientation, and required-section coverage. A checkbox without evidence is not a verification.

## Boundaries Shared by Every Role

- Never write under `docs/source/`.
- Never delete or move anything under `docs/source/`.
- Never create skill contents under `.agents/skills/` or `.claude/skills/`.
- Never run a git write command without human direction.
- Never submit to Kolaxus on behalf of the team.
- Never fabricate team-specific or competition facts.
