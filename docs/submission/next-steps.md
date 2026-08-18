# What Is Left, Now That the Concept Is Locked

**Owner:** TODO: assign
**Status:** Working checklist
**Last Updated:** 2026-08-18
**Concept:** the bereavement journey, one verified death handled once across JPN, KWSP and PERKESO

> Recorded in `../decisions.md`. Do not reopen the concept. Everything below assumes it is fixed.

---

## The Short Answer

**No new discovery research is needed. Three specific pieces of work are, and one of them is
the highest-leverage thing left to do.**

The concept already has more cited evidence behind it than most submissions will have. What it
does not yet have is (a) those numbers confirmed at source, (b) the one artifact that proves
the problem visually, and (c) a single piece of real human input. In priority order:

| #   | Work                                                           | Time         | Why                                                                                    |
| --- | -------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------- |
| 1   | **Verify the numbers you will actually print**                 | 60 to 90 min | Blocking. These are the only figures allowed into the PDF                              |
| 2   | **Build the shared-fields matrix from the three public forms** | ~2 hours     | Highest leverage remaining. This becomes the centre of the A3                          |
| 3   | **One real conversation with someone who has handled a death** | 20 to 30 min | The only genuine evidence gap. Converts Section 2 from desk research to lived evidence |
| 4   | Name the concept                                               | 20 min       | Needed for every artifact                                                              |

---

## 1. Verify the Numbers, and Only These

Do not gather more. Confirm these at their primary source, then stop. Anything that fails
verification gets cut or narrowed, not softened.

| Figure                                            | Claimed                                                                      | Source to open                    |
| ------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| Deaths in Malaysia, 2024                          | 198,992                                                                      | DOSM Vital Statistics             |
| Median age at death                               | 69                                                                           | DOSM Vital Statistics             |
| EPF death withdrawal transactions, 2024           | 87,776                                                                       | EPF Integrated Annual Report 2024 |
| Value of those withdrawals, 2024                  | RM3.20 billion                                                               | EPF Integrated Annual Report 2024 |
| EPF Death Assistance amount and deadline          | RM2,500, application within six months, member died before 60, discretionary | EPF Death Withdrawal page         |
| PERKESO funeral benefit ceiling                   | up to RM3,000                                                                | PERKESO / MyGovernment            |
| Older citizens interacting with government online | 33.6% of those aged 60+, against 38.9% overall                               | DOSM ICT Use and Access 2024      |
| MyGOV scale                                       | 2.2m users, 51 services, 19 agencies, June 2026                              | Ministry of Digital statement     |
| MyDigital ID registrations                        | almost 10 million, Feb 2026                                                  | Confirm publisher                 |
| MyGDX                                             | 81 agencies, 49 integrated systems, 65m+ API transactions                    | Ministry of Digital statement     |

**Two traps already identified. Do not fall into either.**

- **Do not divide EPF death withdrawals by national deaths and present it as a take-up rate.**
  Not every deceased person was an EPF member, and claims can fall in a later year.
- **Do not claim all three agencies demand an identical document set.** The defensible claim is
  that they repeatedly demand the same **core identity, death, relationship and payment
  information**.

---

## 2. Build the Shared-Fields Matrix

**This is the most persuasive artifact available to you, and it requires no permission, no
interview and no speculation. The forms are public.**

Open the three actual processes and record, field by field, what each one asks for:

| Source                                               | What to extract                                                             |
| ---------------------------------------------------- | --------------------------------------------------------------------------- |
| JPN ordinary death registration, Peninsular          | Documents the informant must physically present, and the process timing     |
| KWSP Death Withdrawal                                | Form, identity, relationship, death and bank evidence required              |
| PERKESO Form 34 and the survivor / funeral checklist | Forms 24 and 26, death certificate, identity documents, submission location |

Then produce one table: rows are data items, columns are the three agencies, cells mark where
the same item is demanded again.

**That table is the evidence for the entire submission.** It is Section 1's proof, the A3's
centrepiece, the prototype's second screen, and the visual beat in the video. Everything else
is commentary on it.

Note also that Sabah and Sarawak death registration procedures differ from Peninsular and
should be treated separately, or explicitly scoped out of v1.

---

## 3. Get One Real Conversation

**This is the only thing in the whole submission that cannot be researched, and the rules
forbid inventing it.**

Twenty minutes with one person who has actually handled a death in Malaysia: a family member,
a friend's parent, a mosque khairat committee member, anyone. Ask what they had to produce,
how many times, where they went, what they nearly missed, and what nobody told them.

Record it with `../research/templates/user-insight-template.md`, marking verbatim quotes
against paraphrase, and state honestly what a single conversation can and cannot support.

**Why it matters disproportionately.** Section 2 Target User is scored, and the rubric
explicitly asks whether AI-generated statements are being passed off as user research. One
honest conversation, clearly labelled and modestly claimed, is worth more than any amount of
desk work, and almost no competing team will have one.

---

## 4. Decisions to Lock Before Drafting

Settle these in one sitting. Each one changes the wording of several sections.

- **Name.** Malay-first reads well for this audience. `TODO: team decides.`
- **Agencies in v1.** Recommended: JPN, KWSP, PERKESO only. Tabung Haji, ASB and JKM are
  named as future scope, not built.
- **Explicitly out of scope.** Estate distribution, faraid and probate, banks, zakat, and
  local burial management. These add religious, judicial, state and local-authority complexity
  that damages the Feasibility score. Say so in the submission rather than leaving it open.
- **What "end to end" means.** Define it as **submitted, receipted and tracked**, never
  automatically approved. The agency keeps the decision. This single sentence protects the
  concept in Q&A.
- **The one-sentence answer to "is this not MyGOV's chatbot?"** Draft it, agree it, and put it
  in Section 4. Every member should be able to say it from memory.
- **Peninsular only for v1**, given that Sabah and Sarawak procedures differ.

---

## 5. On Slides

The team's plan lists slides. Worth knowing: **finalists receive a different template for the
grand final pitch**, and mentoring runs 7 to 11 September to guide it
(`../source/2026-08-03-participant-briefing-transcript.md`, `[00:40:33]`, `[00:30:58]`).

So slides made now serve only the optional video. Do not over-invest in them, and do not build
a polished finals deck yet, because the template does not exist.

---

## 6. What Does Not Need More Research

To be explicit, because the temptation will be to keep researching:

- **The problem.** Already evidenced.
- **The policy fit.** 13MP's 95% online by 2030, the single government window, MyDigital ID,
  MyGDX and the Data Sharing Act 2025 are all documented in `../research/track-selection-findings.md`.
- **The competitor landscape.** MyGOV, MyGovernment, GovTech's TanyaKerajaan and
  MyCitizenProfile, PADU, MYEG, Bereev and UK Tell Us Once are all mapped.
- **The innovation argument.** The once-only principle and the gap between rails and journey
  are established.

**One honest gap that cannot be closed and should be stated rather than hidden:** there is no
Malaysian measurement of how long bereavement admin takes or how many claims are missed. Mark
it `[NEEDS SOURCE]`, narrow the claim, and let the shared-fields matrix carry the argument
instead. Judges respect a stated limit more than a confident guess.

Similarly, public JPN, KWSP and PERKESO submission and status APIs are **UNVERIFIED**. Say the
integration is proposed, not proven, and the Feasibility section gets stronger rather than
weaker for the honesty.
