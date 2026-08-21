# Pre-Submission Preflight

Run this checklist on the actual exported files before uploading to Kolaxus.

**Official Deadline:** 21 August 2026 at 11:59 PM

**Current Urgency:** **Deadline day, 21 August 2026.** Submission window closes 11:59 PM tonight.

**Extension:** None

A bare tick is not enough for a file property. Record the observed format, size, orientation, or word count.

## Team and Track

| Done | Check                                                         | Owner | Evidence                         |
| ---- | ------------------------------------------------------------- | ----- | -------------------------------- |
| [ ]  | team has 2-5 students                                         | TODO  | names recorded in the submission |
| [ ]  | team name is final and consistent                             | TODO  | TODO                             |
| [ ]  | one of the four tracks is selected                            | TODO  | `../decisions.md` entry          |
| [ ]  | idea directly answers the selected official problem statement | TODO  | selected track file and draft    |

## Idea Submission Content

| Done | Required Section           | Draft or Final Location | Reviewer |
| ---- | -------------------------- | ----------------------- | -------- |
| [ ]  | Team Information           | TODO                    | TODO     |
| [ ]  | 1 The Problem              | TODO                    | TODO     |
| [ ]  | 2 Target User              | TODO                    | TODO     |
| [ ]  | 3 Your Solution            | TODO                    | TODO     |
| [ ]  | 4 Innovation Element       | TODO                    | TODO     |
| [ ]  | 5 Impact                   | TODO                    | TODO     |
| [ ]  | 6 Feasibility              | TODO                    | TODO     |
| [ ]  | 7 Visual Concept           | TODO                    | TODO     |
| [ ]  | 8 Why Your Team Should Win | TODO                    | TODO     |

### Section 8 Word Count

|             Limit | Observed Count | Counted By | Date |
| ----------------: | -------------: | ---------- | ---- |
| 100 words or less |           TODO | TODO       | TODO |

## Innovation Canvas Content

| Done | Pillar      | Present and Legible | Reviewer |
| ---- | ----------- | ------------------- | -------- |
| [ ]  | The Concept | TODO                | TODO     |
| [ ]  | Problem     | TODO                | TODO     |
| [ ]  | Target User | TODO                | TODO     |
| [ ]  | Innovation  | TODO                | TODO     |
| [ ]  | Impact      | TODO                | TODO     |

## Judging Coverage

| Done | Criterion              | Weight | Strongest Evidence                                                                                                                              | Remaining Risk                                                                             |
| ---- | ---------------------- | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [x]  | Innovation             |    30% | Central innovation in one sentence, then four named incumbents refuted individually: MyGOV chatbot, Tell Us Once, MyDigital ID, UTC co-location | None material. The distinction is stated and defended                                      |
| [x]  | Feasibility            |    25% | Dependencies table, risks table, first practical steps, scope boundary, and "What Is Not Proven, Stated Plainly"                                | None material. The UNVERIFIED submission API is stated, which the rubric asks for directly |
| [x]  | Social/Economic Impact |    25% | Every baseline traced to `verified-figures.md`; metrics explicitly framed as "proposed future measures, not results"                            | Cleared. The two unsourced figures were cut and the base error corrected in `4f50558`      |
| [ ]  | Submission Quality     |    20% | Team Information plus Sections 1 to 8 complete, Section 8 verified at 96 words, canvas passes every format gate                                 | Markers cleared. **No PDF export exists yet**, plus four courses and the final editor      |

## Weighted Review Outcome

Complete this record after reviewing both required artifacts against the four judging criteria. Use "Ready with Comments" only when every remaining comment is non-blocking.

| Outcome                 | Recorded By           | Date       | Unresolved Blockers                                        |
| ----------------------- | --------------------- | ---------- | ---------------------------------------------------------- |
| **Ready with Comments** | automated claim audit | 2026-08-21 | No exported PDF; four member courses; final editor unnamed |

**Updated after fixes were applied in `4f50558`.** All three claim-audit defects are corrected and
all six evidence markers are converted to prose. The content now passes every check that can be run
against it. **The only mandatory blocker left is that no PDF export exists.**

### Claim Audit, 2026-08-21

Sixty-nine quantified mentions were extracted from `idea-submission-draft.md` and each traced to
`verified-figures.md`, `agency-rule-map.md`, `incumbent-and-deadline-verification.md`,
`documented-accounts-bereavement.md` or `rubrics.md`. **Sixty-six trace cleanly. Three did not, and all three were fixed in `4f50558`.**

| #   | Location                  | Claim                                                                          | Finding                                                                                                                                                                     |
| --- | ------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Section 5, "Scale"        | "largest single age band was 70 to 74, at **24,513** deaths (**12.3%**)"       | **Unsourced.** Neither number appears anywhere in `docs/research/`. The same age-band claim is repeated in Section 2 without a figure. Source it from DOSM or cut both      |
| 2   | Section 6, "What Exists"  | "**95 per cent** of government services fully online end to end by 2030"       | **Unsourced.** No 2030 service-delivery target is recorded in research or competition materials. Source it or cut the row                                                   |
| 3   | Section 5, "Who Benefits" | "Among Malaysians who use the internet, 91.6 per cent ... were internet users" | **Base error, and self-contradicting.** 91.6% is the share of the 60-plus **population** who use the internet. Attaching "among internet users" makes the sentence circular |

**On finding 3.** `verified-figures.md` warns that this exact figure family carries "a base error a
judge can catch". Section 2 states it correctly, separating internet usage from government
interaction. Section 5 compresses the two into one sentence and breaks the denominator, so **the two
sections currently disagree**. Section 2's wording is the correct one; make Section 5 match it.

### Evidence Markers, All Six Defensible

`[NEEDS SOURCE]` and `[ASSUMPTION]` appear six times in submission prose. **Every one is a deliberate
narrowing rather than an oversight**, and the marker at Section 6 on unverified submission APIs is
required by the rubric's own Feasibility question. Keep every sentence.

**Done in `4f50558`.** All six were converted to plain prose with every sentence's meaning
intact, for example "JPN publishes no answer to this, and we could not source one." The honesty is
preserved; only the draft-looking bracket syntax is gone.

### Remaining TODOs In The Draft

Four member courses, and the final editor named in issue #19.

## Evidence and Integrity

| Done | Check                                                                                                      | Owner | Evidence |
| ---- | ---------------------------------------------------------------------------------------------------------- | ----- | -------- |
| [ ]  | every factual claim and number traces to a recorded source                                                 | TODO  | TODO     |
| [ ]  | assumptions are labeled                                                                                    | TODO  | TODO     |
| [ ]  | no invented user research, metrics, partnerships, costs, or outcomes appear                                | TODO  | TODO     |
| [ ]  | the PDF and canvas tell the same story                                                                     | TODO  | TODO     |
| [ ]  | all visible TODO and `[NEEDS SOURCE]` markers are resolved or intentionally removed by narrowing the claim | TODO  | TODO     |

## Exported Idea Submission

Inspect the exported file itself.

> **BLOCKER as of 2026-08-21.** No exported PDF exists anywhere in the repository. The content is
> written and complete in `idea-submission-draft.md`, Team Information plus Sections 1 to 8, with
> Section 8 verified at **96 words**. What is missing is the export into the official template and
> out to PDF. **This is the only mandatory artifact not yet in a submittable format.**

| Property               | Required    | Observed | Verified By | Date |
| ---------------------- | ----------- | -------- | ----------- | ---- |
| Format                 | PDF only    | TODO     | TODO        | TODO |
| File Size              | under 25 MB | TODO MB  | TODO        | TODO |
| Opens Successfully     | yes         | TODO     | TODO        | TODO |
| Intended Final Version | yes         | TODO     | TODO        | TODO |

## Exported Innovation Canvas

Inspect the exported image itself.

**File inspected:** `canvas/versions/mytakziah-v10-a3.png`, the final selected by @AlaskanTuna.

| Property            | Required        | Observed                       | Verified By          | Date       |
| ------------------- | --------------- | ------------------------------ | -------------------- | ---------- |
| Format              | JPG or PNG only | PNG                            | automated inspection | 2026-08-21 |
| File Size           | under 25 MB     | 8.1 MB                         | automated inspection | 2026-08-21 |
| Page or Image Count | one             | one image                      | automated inspection | 2026-08-21 |
| Page Size           | A3              | 3508 x 4961 px at 300 DPI      | automated inspection | 2026-08-21 |
| Orientation         | portrait        | portrait                       | automated inspection | 2026-08-21 |
| Opens Successfully  | yes             | yes                            | automated inspection | 2026-08-21 |
| Text Legible        | yes             | body 12.5 pt, smallest 10.6 pt | automated inspection | 2026-08-21 |
| Prototype QR        | scans           | decodes to the prototype URL   | automated inspection | 2026-08-21 |

**Measured detail.** The PNG carries a 300 DPI `pHYs` tag, so A3 is correct in physical units and
not only in pixels. Body copy sits at 12.5 pt on the printed sheet and the smallest text at 10.6 pt,
both above the 12 pt guideline for body and readable at arm's length. The QR decodes to
`https://mytakziah.vercel.app` straight out of the exported file, at 2.2 cm printed, above the
1.5 cm floor recorded in `brand/mytakziah-qr.md`, with roughly 15:1 contrast.

**Still needs a human:** open the file on a phone and confirm it reads there too, and confirm this
is the intended final version before it is attached.

## Optional Supporting Materials

Complete only if the team includes an app or video.

| Done | Check                                                                    | Owner | Evidence |
| ---- | ------------------------------------------------------------------------ | ----- | -------- |
| [ ]  | supporting material is optional and does not replace a required artifact | TODO  | TODO     |
| [ ]  | supporting material opens or plays successfully                          | TODO  | TODO     |
| [ ]  | any access permissions work for the intended reviewer                    | TODO  | TODO     |

## Kolaxus Submission

| Done | Check                                                      | Owner | Evidence |
| ---- | ---------------------------------------------------------- | ----- | -------- |
| [ ]  | Kolaxus registration or access is ready                    | TODO  | TODO     |
| [ ]  | intended PDF is attached                                   | TODO  | TODO     |
| [ ]  | intended canvas image is attached                          | TODO  | TODO     |
| [ ]  | optional material, if any, is attached correctly           | TODO  | TODO     |
| [ ]  | final entry is submitted before 21 August 2026 at 11:59 PM | TODO  | TODO     |
| [ ]  | submission confirmation is recorded                        | TODO  | TODO     |

Email is not accepted. Do not treat an email draft or sent message as a submission.

## Sign-Off

| Responsibility              | Name | Date | Signed |
| --------------------------- | ---- | ---- | ------ |
| Team Lead                   | TODO | TODO | TODO   |
| Independent Format Verifier | TODO | TODO | TODO   |
| Final Upload Owner          | TODO | TODO | TODO   |
