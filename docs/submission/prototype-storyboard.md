# Prototype Storyboard: Five Static Frames

**Owner:** TODO: assign, the CS pair per issue #19
**Status:** Frames drafted, awaiting team agreement before any code
**Last Updated:** 2026-08-19
**Feeds:** issue #10, and gates issue #11

> **Read this before opening `frontend/`.** The prototype is **optional and not required**. It can
> earn marks only inside the 20% Submission Quality weight, and the organizer attached a quality
> condition to that. **It must never delay the PDF or the canvas.** If the mandatory artifacts are
> not exported and preflighted, this document stays unbuilt and that is a correct outcome.

> **The test this document exists to apply.** If the story does not work as five static frames,
> code will not rescue it. Agree the frames first.

---

## Global Rules, Every Frame

**Disclosure, revised 2026-08-20.** The original storyboard mandated a persistent
`CONCEPT DEMO` bar across the top of every screen. **That bar has been removed** by team decision:
it is self-evident that a five-screen walkthrough with no login and no data is a demo, and the bar
cost a full strip of vertical space on every frame.

**Disclosure now lives in two places instead, and both are load-bearing:**

- **The About page**, reachable from the footer on every screen, which states plainly what is real,
  what is simulated, and what is unproven.
- **The interface wording itself**, which never says approved and never says a claim was granted.

**If the demo is ever screen-recorded or shown without the footer in frame, say out loud that
agency responses are simulated.** The removed bar was doing that job passively.

**Banned words anywhere in the interface.** From the wording table in
`../research/agency-rule-map.md`:

| Never Render             | Render Instead                                                       |
| ------------------------ | -------------------------------------------------------------------- |
| Approved                 | Submitted, receipted and tracked                                     |
| Eligible                 | Potentially eligible, confirmation required                          |
| You will receive RM2,500 | RM2,500 Death Assistance, at EPF's discretion, if conditions are met |
| RM3,000 funeral benefit  | Up to RM3,000, actual expenditure or RM3,000, whichever is lower     |

**Tone.** Documents, deadlines and repeated fields. No funeral imagery, no religious iconography,
no grief photography. Muted palette. A fictional composite family only.

**No government logos or crests.** Nothing implying this is a sanctioned MyGOV service.

---

## Frame 1: A Death Has Been Verified

**Purpose:** establish the starting point honestly, and defuse the first judge question.

| Element       | Content                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------ |
| Heading       | A death has been verified                                                                  |
| Body          | A verification record exists from a hospital, PDRM or DBKL. MyTakziah begins here          |
| Record card   | Deceased, fictional composite name. Date of verification. Issuing body. Reference NRD.LM02 |
| Explicit note | MyTakziah does not verify a death and does not register it. JPN registers the death        |
| Action        | Continue                                                                                   |

**The trap this frame avoids.** Do not depict MyTakziah triggering an automatic JPN registration.
JPN registration begins only after a verification agency has issued the Death Register or Burial
Permit. Getting this wrong invalidates the whole flow to anyone who knows the process.

---

## Frame 2: Provide Once

**Purpose:** the centrepiece. This frame is the entire argument.

| Element                      | Content                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| Heading                      | Provide your evidence once                                                            |
| Form, five groups            | Who died. Who you are. Proof of the death. How you are related. Where money should go |
| Live matrix, beside the form | The five-row, three-column table showing which agency reuses each item                |
| Caption                      | Today each of these is demanded again at each agency, on a different form             |

**The matrix is not decoration.** As each group is completed, its row lights across all three
agency columns. That single interaction is the once-only claim made visible, and it is the
strongest five seconds in the demo.

Source the rows from `../research/shared-fields-matrix.md`. Do not invent a row.

---

## Frame 3: What You May Be Entitled To, Ranked By Deadline

**Purpose:** show the deterministic rule layer and the deadline-first ordering.

**Card order is fixed, and the order is the point:**

| Rank | Card                                                     | Why It Ranks Here                                                        |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1    | EPF Death Withdrawal, including RM2,500 Death Assistance | **Six months from the date of death.** The only verified family deadline |
| 2    | PERKESO Funeral Management Benefit, up to RM3,000        | Requires evidence of expenditure                                         |
| 3    | PERKESO Survivors' Pension                               | Depends on contribution history nobody outside PERKESO can see           |

**Every card carries, without exception:**

- The status line **Potentially eligible, confirmation required**
- The condition in plain words
- **A visible source link** to the government page or form the rule came from
- Where relevant, a countdown to the deadline, not a promise of payment

**The line that must appear on the Survivors' Pension card:** eligibility depends on at least 24
monthly contributions within the 40 months before death. We cannot see that record. PERKESO
confirms it.

**Ranking by deadline rather than by value is a design decision worth narrating in the video.**
No existing service does it.

---

## Frame 4: Review And Consent, Per Agency

**Purpose:** answer the data-sharing question before a judge asks it.

| Element        | Content                                                            |
| -------------- | ------------------------------------------------------------------ |
| Layout         | Three tabs: JPN, KWSP, PERKESO                                     |
| Each tab shows | Exactly the fields that agency would receive, and nothing else     |
| Each tab has   | Its own explicit consent action, granted separately                |
| Visible state  | Two agencies consented, one not yet. Consent is not all-or-nothing |

**Show one agency deliberately un-consented.** It proves the consent is real rather than a single
accept-all checkbox, and it invites the right question in Q and A instead of the wrong one.

---

## Frame 5: Drafts And One Timeline

**Purpose:** close the loop without overclaiming.

| Element           | Content                                                                       |
| ----------------- | ----------------------------------------------------------------------------- |
| Upper half        | Three pre-filled forms, each watermarked **DRAFT, NOT SUBMITTED**             |
| Lower half        | One consolidated status timeline across all three agencies                    |
| Status vocabulary | Prepared, Submitted, Receipted, In review by agency                           |
| Absent vocabulary | Approved. Anywhere. In any state                                              |
| Closing line      | The agency decides. MyTakziah prepares, submits with your consent, and tracks |

---

## What This Prototype Deliberately Does Not Have

State these in the demo notes, because a judge will look for them:

- No backend, no database, no authentication
- No OCR and no real PDF generation
- No chatbot. **The absence is the point**, not a shortcut
- No live agency calls. Public submission and status APIs at all three agencies are unverified,
  and the integration is proposed, not proven

---

## Build Gate

Do not open `frontend/` until every box is ticked:

- [ ] PDF exported and preflighted
- [ ] A3 canvas exported and preflighted
- [ ] #15 weighted review passed
- [ ] These five frames agreed by the team
- [ ] A time-box agreed, 6 to 8 hours, golden path only

If the build overruns the time-box, **ship the submission without it.**
