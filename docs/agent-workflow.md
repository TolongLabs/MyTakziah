# Agent Workflow

> Operational contract for the PM to PL to PG to QA workflow. Documents remain usable without agents.

## Deadline Override

The official deadline is 21 August 2026 at 11:59 PM. As of 18 August, the workflow is in D-3 mode. Keep gates short, run disjoint research tasks in parallel, and avoid optional supporting material until the required PDF and canvas pass preflight.

## Protocol

1. **PM scopes the iteration.** State the output, files, owner, dependencies, and acceptance criteria.
2. **PL writes the plan.** PL updates `docs/plan.md`, identifies TODOs, and allocates effort by judging weight.
3. **Gate 1, Team Approval.** A human confirms the track, user, concept direction, and task priorities. Agents may not invent approval.
4. **PG produces the work.** Research and writing follow the approved file scopes. Source records precede factual claims.
5. **QA reviews.** QA writes a verdict to `docs/test.md` against rules, judging weights, evidence, and export properties.
6. **Correction Loop.** Reject returns only the named findings to PG. QA then checks the fixes and their adjacent effects.
7. **Gate 2, Human Preflight.** The team reviews the final PDF and canvas, completes `docs/submission/preflight.md`, and submits through Kolaxus.

## Parallel Work

Parallel work is appropriate when file scopes are disjoint, for example one owner researches the target-user problem while another drafts a concept comparison. Shared files such as `docs/plan.md`, `docs/progress.md`, and the main submission draft have one writer at a time.

Parallel workers do not edit workflow logs. They return evidence, file paths, and unresolved TODOs to the PM, who updates shared state.

## Fast Lane

Typos, citation formatting, and isolated checklist corrections may skip PL. QA still verifies them. A track choice, concept change, target-user change, impact claim, or format decision never uses the fast lane.

## Logging

- Lasting choices go to `docs/decisions.md`.
- Verified work goes to `docs/progress.md`.
- Active tasks and dependencies go to `docs/plan.md`.
- QA evidence and verdicts go to `docs/test.md`.

## Stop Conditions

Stop and surface the issue if a task requires guessing team facts, contradicting a recorded decision, altering `docs/source/`, deleting or moving protected root media, writing to a skill directory, or running a git write command.

## Human-Only Actions

Humans choose the track and concept, approve claims based on lived experience, accept final wording, verify exported artifacts, manage Kolaxus access, and submit the entry.
