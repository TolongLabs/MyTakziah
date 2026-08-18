# Concept Decision and Production Plan

**Owner:** TODO: assign
**Status:** Decision support
**Last Updated:** 2026-08-18
**Feeds:** the final concept lock, then the production order for the remaining days

---

## 1. What Finalists Are Actually Required to Do

**Answer: pitch only. Nothing has to be built, at any stage.**

The only stated finalist requirement in the entire source record is slides.

> "if you are selected as a finalist, that's where the mentoring happens. And you need to
> create slides because, you know, pitching, you will get into a pitching session between five
> to eight minutes and you need a couple of slides and we will guide you ... There will be a
> different template at that time."
> (`../source/2026-08-03-participant-briefing-transcript.md`, `[00:40:17]` to `[00:40:33]`)

Supporting facts from the same record:

| Fact                                                                                                                                   | Citation                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| No prototype, coding or technical expertise is required                                                                                | `[00:27:57]`               |
| "We don't need you guys to come up with a prototype with the app and all the stuff"                                                    | `[00:19:28]`               |
| Optional prototypes and videos are encouraged, and are considered inside the 20% Submission Quality weight, "as long as it looks good" | `[00:27:08]`, `[00:31:49]` |
| Mentoring for finalists runs 7 to 11 September, online                                                                                 | `[00:30:58]`               |
| The grand final is a physical pitch on 23 September, 3 PM, World Trade Center                                                          | `[00:25:22]`, `[00:25:50]` |

**A build requirement appears nowhere in either transcript, at either stage.**

**What this means for the team.** The prototype and the video are optional at the submission
stage and remain unnecessary at the finals stage. They can only earn marks inside a single 20%
criterion, and the organizer attached a quality condition to that: a video that "doesn't look
nice" earns little (`[00:31:42]`). They cannot compensate for a weak PDF or canvas, and they
carry a real risk of consuming time the mandatory artifacts need.

`[NEEDS SOURCE]` Whether the finals template asks for anything beyond slides is not stated in
the supplied record. Confirm on the Kolaxus forum if the team reaches the top 10.

---

## 2. The Comparison: Bereavement Versus DataKampung

A new criterion applies now that the team has committed to producing a frontend-only mocked
prototype: **can a mock actually carry the idea?** This was not scored in earlier passes and
it changes the margin considerably.

### The Decisive Difference

**A frontend mock can demonstrate a workflow. It cannot demonstrate a market.**

- The bereavement concept's core uncertainty is **technical and institutional**: can agencies
  be integrated. A mock legitimately shows the intended journey and defers integration
  honestly, because no student team could touch JPN, KWSP or PERKESO systems anyway.
- DataKampung's core uncertainty is **commercial**: will anyone pay. A mock cannot answer that,
  and worse, a screen reading "AgriTech Bhd offers RM30,000" visually manufactures the exact
  evidence the concept lacks.

That second point is a trap, not a limitation. Label the screen honestly as illustrative and
fictional, and the prototype stops demonstrating demand. Leave it unlabelled, and one judge
asking "which company offered this?" exposes the submission in front of the panel.

### Scored on the New Criterion

| Dimension                        |                                            Bereavement |                                       DataKampung |
| -------------------------------- | -----------------------------------------------------: | ------------------------------------------------: |
| Prototype conveyance             |                                              **4.5/5** |                                             2.5/5 |
| Mock-honesty risk                | Medium, manageable with a persistent simulation banner |                       **Critical and structural** |
| Layak visual and component reuse |    **50 to 60% of screens, 70 to 80% of demo grammar** |                          Under 20% of the journey |
| Video narrative                  |                  **Strong**, one family, one clear arc | Weak, must define five concepts before the payoff |
| A3 canvas compression            |     **Strong**, one horizontal flow plus three numbers |       Poor, needs six concepts in a circular flow |
| Prior overall score              |                                                 89/100 |                                      54 to 66/100 |

`[VERIFY]` Reuse percentages are estimates from a machine pass that could not inspect the
repository. Inspection of the local Layak frontend supports the direction: `manual-entry-form`,
`pipeline-narrative`, `evaluation-results-client`, `strategy-section`, `landing-packets-preview`,
`section-badge`, `status-pill-status` and `confidence-meter` all map onto a bereavement flow
with content changes rather than structural ones.

### The Five Screens Worth Building

If bereavement is chosen, the prototype is these screens and nothing else:

1. **A death has been verified.** Start after a hospital, PDRM or DBKL verification record.
   Do not invent an automatic JPN approval.
2. **Provide once.** Deceased identity, informant identity, relationship evidence, bank
   account. Include a matrix showing which fields each of JPN, KWSP and PERKESO reuses. The
   defensible claim is repeated **core identity, death, relationship and payment information**,
   not that every agency demands an identical document set.
3. **Eligibility and deadlines.** Cards worded as "potentially eligible, confirmation
   required", never "approved". Rank by deadline first, then value. Keep Layak's citations.
4. **Review and consent.** Separate tabs per agency, each showing exactly what that agency
   would receive, each with its own explicit consent action.
5. **Drafts and one timeline.** Pre-filled forms marked `DRAFT, NOT SUBMITTED`, then a single
   consolidated status timeline.

**Put a persistent banner on every screen:** `CONCEPT DEMO. Simulated agency responses. No live
government submission.` In Q&A, the honest line is that the demo proves the user journey and
rule transparency, not completed government integration.

### Verdict

**Safer: bereavement. Better: bereavement.** They do not diverge, which is unusual and makes
the decision easy. DataKampung is more distinctive, and that is a real loss, because Innovation
is the heaviest criterion at 30%. Everything else favours bereavement, and the production plan
widens the gap rather than narrowing it.

**The one thing that must be got right.** Bereavement sits in the most crowded track, at 4.5
out of 5. The mitigation is to never pitch it as an AI government chatbot. Pitch it as a
narrowly defined once-only bereavement service built on deterministic published rules, deadline
protection, per-agency consent and source provenance.

---

## 3. The Production Order Needs Changing

**The current plan puts the optional artifact first and both mandatory artifacts second.**
Prototype, then slides and canvas, then video. The PDF and the A3 canvas are the only required
deliverables. The prototype and video are optional and can only earn marks inside one 20%
criterion.

There is a second problem with the order. Building first quietly locks the concept to whatever
screens turned out to be easiest to build, rather than to the story that scores best.

### Recommended Order

| Step | Work                                                                                                                                                                                              | Why This Position                                                                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Claim freeze, 60 to 90 minutes, tonight.** Fix the journey, the evidence, the agency conditions, the unverified integrations and the demo disclaimer. Do not change the concept after this gate | Everything downstream depends on it, and late concept drift is the most expensive failure available                                                                       |
| 2    | **PDF and A3 to roughly 80%**                                                                                                                                                                     | These are the only mandatory artifacts. The official-template PDF, not a free-form deck, is the primary narrative authority                                               |
| 3    | **Storyboard the five screens as static frames**                                                                                                                                                  | If the story does not work as static screens, code will not rescue it                                                                                                     |
| 4    | **Time-box the build to six to eight hours.** Golden path only. No backend, auth, OCR, real PDF generation, database, chatbot or live agency calls                                                | Protects the mandatory artifacts from the optional one                                                                                                                    |
| 5    | **Write the video script early, record late**                                                                                                                                                     | The script exposes logical gaps cheaply. Recording should wait until the PDF, canvas and screens are stable                                                               |
| 6    | **Submission gate on the optional extras**                                                                                                                                                        | Ship the prototype or video only with clean audio, readable text, no unsupported claims and visible simulation labels. Otherwise drop them and protect the required files |

**Suggested split.** The two actuarial members own the rule and impact evidence plus the claim
audit. The two computer science members adapt the Layak screens and the A3 visual flow. One
person must be final editor across the PDF, canvas, prototype and script, or terminology will
drift between artifacts and the judges will see four slightly different products.

---

## 4. Failure Modes to Watch

**For bereavement, the most likely failure is a polished reskin that overclaims live
integration.** Specific traps:

- Confusing the EPF Death Withdrawal with the discretionary RM2,500 Death Assistance.
- Marking PERKESO eligibility as confirmed without contribution records.
- Using "approved" statuses anywhere in a simulated interface.
- An emotionally manipulative video treatment.
- Building a fake AI chat instead of the once-only evidence and consent flow.
- Looking like a generic MyGOV chatbot because the death-specific wedge is not emphasised.

**On tone.** Use a fictional composite family. Do not show crying actors, funeral imagery or a
hospital death scene. Show the administrative burden instead: documents, deadlines, repeated
forms, status uncertainty. Calm narration, muted visuals.

---

## 5. Additional Sources From This Pass

| Source                                                      | URL                                                                                                 |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Official URIIS challenge site                               | https://uriis.kolaxus.net/                                                                          |
| DOSM Vital Statistics release, 18 Dec 2025                  | https://www.dosm.gov.my/uploads/release-content/file_20251218115546.pdf                             |
| EPF Integrated Annual Report 2024, death withdrawal figures | https://www.kwsp.gov.my/documents/d/guest/kwsp24_e                                                  |
| PERKESO Invalidity Scheme, survivor and funeral benefits    | https://perkeso.gov.my/en/our-services/protection/invalidity-scheme.html                            |
| PERKESO Form 34, Amendment 2/2026                           | https://www.perkeso.gov.my/images/borang/Borang34/290626-Form_34_ENGLISH.pdf                        |
| JPN death registration, Peninsular                          | https://www.jpn.gov.my/en/services/death/ordinary-registration-of-death-peninsular/                 |
| KUSKOP Malaysia Cooperative Policy 2030                     | https://www.kuskop.gov.my/admin/files/med/image/portal/PDF/Penerbitan/DasarKoperasiMalaysia2023.pdf |

`[VERIFY]` All of the above came from a machine research pass. Open each at source before any
figure enters the submission.
