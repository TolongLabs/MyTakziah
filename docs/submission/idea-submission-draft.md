# Idea Submission Draft: MyTakziah

**Owner:** TODO: assign the final editor named in issue #19
**Status:** Sections 5 and 6 drafted. Sections 1 to 4 in #7, Sections 7 and 8 in #9.
**Last Updated:** 2026-08-19
**Target:** the official template, PDF only, under 25 MB

> **Format note.** The official template (`docs/source/uriis-challenge-2026-submission-template.pdf`)
> is a **14-page 16:9 slide deck, not a prose document**. Write slide copy: short paragraphs,
> tight bullets, one idea per line. Do not paste essay prose into it.

> **Wording rules are non-negotiable.** See the table at the end of
> `../research/agency-rule-map.md`. Never "approved", never "eligible", never "you will receive
> RM2,500", never "the same documents three times".

---

## Team Information

**Team Name:** Survive

| Member                    | University              | Course |
| ------------------------- | ----------------------- | ------ |
| Ling Jing Jie (team lead) | Universiti Malaya       | TODO   |
| Hee Zi Jie                | Asia Pacific University | TODO   |
| Yow Li Hao                | University of Sheffield | TODO   |
| Wong Xuan Rui             | Universiti Malaya       | TODO   |

TODO: courses, to be filled by each member.

**Contact details are deliberately not stored in this repo**, per the "No Secrets in Repo" rule in
`AGENTS.md`. They live in `team-contact.local.md`, which is gitignored, and are typed into the
export at the end.

> `[NEEDS SOURCE]` **Eligibility question, raised 2026-08-19.** The official briefing PDF describes
> this as "a national innovation competition that empowers university students **across Malaysia**".
> It does not state an explicit institution rule anywhere in the supplied record, and neither
> transcript addresses it. One member is enrolled at the University of Sheffield.
>
> **This is an open question, not a known problem.** Ask on the Kolaxus forum tonight. The organizer
> repeatedly directed questions there and said the forum was quiet, so an answer should be quick.
> Successful registration is weak evidence that it is fine, but registration may not validate
> institution.

---

## 1. The Problem

### One Death Starts Three Separate Paper Trails

When someone dies in Malaysia, the surviving family does not deal with "the government". It
deals with **Jabatan Pendaftaran Negara, KWSP and PERKESO, separately**, each with its own form,
its own counter and its own document list.

| Demanded of the family       | JPN | KWSP | PERKESO |
| ---------------------------- | :-: | :--: | :-----: |
| Identity of the deceased     | Yes | Yes  |   Yes   |
| Identity of the claimant     | Yes | Yes  |   Yes   |
| Proof of the death           | Yes | Yes  |   Yes   |
| Relationship to the deceased |  -  | Yes  |   Yes   |
| Where to pay the money       |  -  | Yes  |   Yes   |

Three agencies. Three different forms: NRD.LM02, KWSP 9KM (AHL), and Borang 34 or Borang 24 and 26. **The same core information, demanded again each time.**

### It Is Not Only Repetition. It Is Repetition In Person.

JPN requires attendance at a registration office with original documents. PERKESO's claim
checklist states the requirement in capitals: the applicant must attend, bringing the original
documents, when submitting the claim.

**A survivor makes at least two mandatory in-person trips, carrying original documents, to two
different agencies, to prove the same death.**

### The Burden Grows As The Family Shape Departs From The Standard

PERKESO's relationship evidence is tiered. A family that does not fit the spouse-and-children
shape must produce documents about other people: parents' identity documents and siblings' birth
certificates, or at the furthest tier, the parents' death certificates and birth certificates
plus the grandparents' identity documents.

**The further a survivor sits from the standard family shape, the more documents about more
people they must assemble, at exactly the moment they are least able to.**

### Scale And Urgency

**198,992 deaths were registered in Malaysia in 2024.** Each one begins this sequence.

One deadline sits on the family and is verified: **an application for EPF Death Withdrawal must
be received within six months of the death**, or the RM2,500 Death Assistance is lost.

`[NEEDS SOURCE]` No Malaysian measurement exists of how long this administration takes, or how
many claims are missed. We do not claim a figure for either. The repetition above is documented
from the agencies' own published requirements, and it is enough.

### The Problem In One Sentence

**A family should not have to act as systems integrator for the government while grieving.**

---

## 2. Target User

### Who

**The surviving family member who administers the death**, most often an older spouse. The median
age at death in Malaysia was **69.0 years** in 2024, and the largest single age band was 70 to 74.

### They Are Not Offline. That Is The Point.

| Measure                                       | Aged 60 and Over |              All Individuals |
| --------------------------------------------- | ---------------: | ---------------------------: |
| Use the internet                              |            91.6% | Above 90% in every age group |
| Interact with government organisations online |            33.6% |                        38.9% |

Among Malaysians who use the internet, those aged 60 and over are **the least likely age group to
deal with government online**, despite being connected at essentially the same rate as everyone
else.

**The barrier is the process, not the device.** A simpler digital front door does not fix a
journey that requires three separate in-person submissions of the same evidence.

### What Happens When Nobody Tells You

**We did not conduct primary user research within the competition window.** This section is built
from the published requirements of the three agencies, from national statistics, and from
documented accounts in Malaysian news reporting. We state this rather than present desk research
as user validation.

**Documented accounts show survivors collecting death benefits two decades after the death.** In
one reported case, a widow in Kuching collected her PERKESO survivor benefits almost 23 years
after her husband died, and began receiving a lifetime monthly pension. She had never been
denied them. She did not know she was eligible until her sister heard about it at a community
seminar.

A PERKESO deputy director, quoted by Bernama, put the gap plainly: _"We only hope that Socso
contributors and the beneficiaries are aware of their rights and would contact us immediately in
the event of death."_

**The failure mode is not rejection. It is that nobody tells the family, and the family has no way
to check.**

`[ASSUMPTION]` These are individual reported cases. Journalism selects for the remarkable, so a
23-year delay is reported precisely because it is unusual. **We do not claim to know how common
this is**, and no Malaysian measurement of it exists.

### How Fragmented The Journey Officially Is

This is not our characterisation. The Malaysian government's own MyGovernment portal, in its
guidance on dealing with a death, names **JPN, the Ministry of Health, PDRM, DBKL, Malaysian
embassies, the High Court and State Zakat Boards**, and sets separate deadlines including **six
months** for the EPF death benefit and **twelve months** for funeral assistance.

**A grieving family is expected to hold all of that in their head, in the first weeks.**

### What The User Needs

1. To give each piece of evidence **once**.
2. To be told **which deadline comes first**, not which benefit is largest.
3. To know **what each agency will receive** before it is sent, and to agree to each separately.
4. To see **one status**, not three.

---

## 3. Your Solution

### MyTakziah, In One Line

**One verified death, told to government once.** The family provides its evidence a single time.
MyTakziah prepares the claims at JPN, KWSP and PERKESO, submits them with the family's consent,
and tracks them in one timeline.

### What "End To End" Means Here

**Submitted, receipted and tracked. Never automatically approved.**

The agency keeps every eligibility and approval decision. MyTakziah pre-fills forms and cites
published rules. It does not decide, and it never tells a family it has been approved.

### The Journey

| Step | What Happens                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Start from a verified death.** After a hospital, PDRM or DBKL verification record exists. MyTakziah does not verify a death or trigger a registration itself      |
| 2    | **Provide once.** Who died, who you are, proof of the death, how you are related, where money should go. Five things, entered a single time                         |
| 3    | **See what you may be entitled to, ranked by deadline.** Every card reads "potentially eligible, confirmation required" and carries a link to the rule it came from |
| 4    | **Review and consent, per agency.** Separate tabs, each showing exactly what that agency would receive, each with its own explicit consent action                   |
| 5    | **Drafts and one timeline.** Pre-filled forms, then a single consolidated status view across all three agencies                                                     |

### The Honest Limit, Stated In The Product

**PERKESO eligibility depends on a contribution history that neither the family nor MyTakziah can
see.** Survivors' Pension requires at least 24 monthly contributions within the 40 months before
death, or a fractional equivalent. A widow cannot compute that. Neither can we.

So PERKESO can only ever be shown as **potentially eligible, confirmation required**. The same
discipline applies to the RM2,500 EPF Death Assistance, which KWSP describes as a gesture made at
its own discretion.

### Deliberately Out Of Scope

Estate distribution, faraid and probate, banks, zakat, and local burial management. These add
religious, judicial, state and local-authority complexity that the concept does not need in order
to be useful. **v1 covers Peninsular Malaysia**, with Sabah and Sarawak, whose registration
procedures differ, named as phase 2.

---

## 4. Innovation Element

### The Central Innovation

**The once-only principle, applied to a single life event, across agency boundaries.**

Malaysia already has the rails. MyDigital ID provides identity. MyGDX moves data between
agencies. The Data Sharing Act 2025 gives a legal basis. **What does not exist is a journey.** The
plumbing is shared; the citizen's experience is not.

### Why This Is Not The MyGOV Chatbot

> **A chatbot tells you what to do. MyTakziah does it: one death, one set of evidence, three
> agencies' claims prepared, submitted and tracked under published rules the family can check.**

The difference is architectural, not cosmetic:

| A General Government Assistant    | MyTakziah                                   |
| --------------------------------- | ------------------------------------------- |
| Generates an answer               | Cites a published rule and pre-fills a form |
| Covers every service shallowly    | Covers one life event completely            |
| The model's output is the product | The model never decides eligibility         |
| You still fill the forms          | The forms arrive filled, for your consent   |

### Why This Is Not The UK's Tell Us Once

Tell Us Once is the closest international analogue, and the distinction is the whole idea.
**Tell Us Once notifies agencies that a death has occurred. MyTakziah claims.** Notification stops
a family being asked again. It does not put money in their hands, and it does not protect a
deadline.

### The Four Design Choices That Carry It

1. **Deterministic, published, cited rules.** Roughly a dozen conditions across three agencies,
   every one traceable to a government page or form. Provenance is visible to the user.
2. **Ranked by deadline, not by value.** The six-month EPF window outranks a larger benefit with
   no deadline. No existing service does this.
3. **Consent per agency, granted separately.** The family sees exactly what each agency receives.
4. **Drafts, never auto-approval.** If the system is wrong, the cost is a correction, not a
   family's money.

### Why It Matters

The innovation is not a new technology. It is **refusing to make a grieving family the integration
layer** between three institutions that already share infrastructure with each other.

---

## 5. Impact

### Who Benefits Directly

The surviving family member who administers the death. Typically an older spouse: the median
age at death in Malaysia was **69.0 years** in 2024.

They are not offline. Among Malaysians who use the internet, **91.6 per cent of those aged 60
and over** were internet users in 2024, up from 86.9 per cent in 2023. Yet only **33.6 per cent
of that group interact with government organisations online, against 38.9 per cent overall**.

**The barrier is the process, not the device.** That single contrast is the impact case.

### Who Benefits Indirectly

The three agencies, through fewer incomplete and rejected submissions; and the wider household,
because a delayed or missed claim removes money from a family at its least resilient moment.

### Scale

**198,992 deaths were registered in Malaysia in 2024**, up 1.0 per cent from 196,965 in 2023.
The largest single age band was 70 to 74, at 24,513 deaths (12.3 per cent).

Every one of those deaths generates the same administrative sequence.

### Money Already Moving Through This Journey

| Benefit                    | Scale                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| EPF Death Withdrawal, 2023 | 85,731 transactions worth RM3.05 billion                           |
| EPF Death Assistance       | RM2,500 one-off, at EPF's discretion, six-month application window |
| PERKESO Funeral Benefit    | Up to RM3,000, actual expenditure or RM3,000, whichever is lower   |

`[NEEDS SOURCE]` 2024 EPF figures pending the browser check in #20. Reported as 85,532 worth
RM3.24 billion. **If unconfirmed, print the 2023 figures above, which are fully verified.**

**Note for the drafter:** the death withdrawal series does not rise monotonically. 2022 recorded
91,414 transactions, more than 2023. Do not describe it as a growing trend.

### How Impact Could Be Observed

These are **proposed future measures, not results**. Nothing here has been measured.

| Measure                                                        | Why It Is The Right One                              |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| Number of core information items re-entered per death          | Directly tests the once-only claim                   |
| Number of mandatory in-person agency trips per death           | Currently at least two, evidenced in the matrix      |
| Proportion of claims submitted inside the six-month EPF window | The only verified family deadline                    |
| Rate of incomplete or rejected submissions                     | PERKESO states it may reject incomplete applications |

### The Limit We State Rather Than Hide

`[NEEDS SOURCE]` **No Malaysian measurement exists of how long bereavement administration takes,
or how many claims are missed.** We do not claim a figure for either.

**We also do not compute a take-up rate.** Dividing death withdrawals by national deaths is
indefensible: not every deceased person was an EPF member, a claim can be paid in a later year,
and the two series move independently.

---

## 6. Feasibility

### What Already Exists, And Is Not Ours To Build

| Component                    | Status                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| Identity                     | MyDigital ID, almost 10 million registrations as of February 2026                                 |
| Inter-agency data exchange   | MyGDX, 81 government agencies across 49 integrated systems, more than 65 million API transactions |
| Legal basis for data sharing | Data Sharing Act 2025                                                                             |
| Policy direction             | 95 per cent of government services fully online end to end by 2030                                |
| An online death channel      | PERKESO Portal LINDUNG FAEDAH already accepts a Death Notice online                               |

That last row matters more than its size suggests. **One of the three agencies has already built
an online death notification channel.** MyTakziah does not propose something untried in Malaysia.
It proposes that a family should reach all three from one journey instead of three.

### What Is Deterministic, And Therefore Small

The rule layer is roughly a dozen published conditions across three agencies, every one of them
citable to a government page or form. That is rule authoring, not a research programme.

**The model never decides eligibility.** It pre-fills forms and cites rules. The agency decides.
This is the reason the concept survives the question "what happens when your AI is wrong": if the
system never decides, being wrong costs a correction, not a family's money.

### What Is Not Proven, Stated Plainly

- `[NEEDS SOURCE]` **Public submission and status APIs at JPN, KWSP and PERKESO are UNVERIFIED.**
  The integration is **proposed, not proven**. We have not found evidence that any of the three
  exposes a public transactional API.
- **The Data Sharing Act 2025 governs sharing between federal bodies. It does not prove that
  production APIs exist, and it does not authorise an agent to transact on a citizen's behalf.**
  We do not claim otherwise.
- **PERKESO eligibility depends on contribution history no family and no third party can see.**
  Survivors' Pension requires at least 24 monthly contributions within the 40 months before
  death, or a fractional equivalent. A widow cannot compute this. Neither can we. PERKESO is
  therefore only ever shown as **"potentially eligible, confirmation required"**.

### Dependencies

| Dependency                                       | Owner        | If It Does Not Land                                                                            |
| ------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------- |
| Agency agreement to receive prepared submissions | The agencies | The service degrades to pre-filled forms the family carries, which is still a real improvement |
| MyDigital ID as the identity anchor              | Government   | Falls back to manual identity verification                                                     |
| Published rules staying current                  | MyTakziah    | Rule drift, mitigated by source links on every condition                                       |

### Risks, And What We Would Do

| Risk                                            | Response                                                                      |
| ----------------------------------------------- | ----------------------------------------------------------------------------- |
| A user reads "potentially eligible" as approved | Wording rules enforced across every artifact; no status ever reads "approved" |
| Rules change without notice                     | Every condition carries its source link and access date                       |
| Religion and marital status branches missed     | Both are branch conditions, not edge cases, and are modelled from the outset  |
| Scope creep into probate and estate             | Explicitly out of scope by recorded decision                                  |

### First Practical Steps

1. Author the deterministic rule set for the three agencies from published sources. Already begun in `../research/agency-rule-map.md`.
2. Validate the shared-fields matrix with one agency counter or a khairat committee.
3. Pilot as **pre-filled forms the family carries**, which requires no agency integration at all and tests the once-only premise immediately.
4. Only then approach agencies about receiving prepared submissions directly.

**Step 3 is the honest core of the feasibility case.** The concept delivers value before any
integration exists.

### Scope Boundary

Peninsular Malaysia for v1. Sabah and Sarawak death registration procedures differ and are named
as phase 2. Estate distribution, faraid and probate, banks, zakat and local burial management are
out of scope.

---

## 7. Visual Concept

### What Judges Should See First

**One continuous line, carrying one death through three agencies.**

The canvas centre is a single thread drawn like a transit line. It begins at one filled point,
a verified death, and passes through three stations: JPN, KWSP, PERKESO. **The family appears once,
at the start, and the line never returns to them.**

Directly beside it, the Problem pillar shows the same three stations as they work today: three
separate lines, each looping back to the family. **Three round trips against one pass.** The
argument is made by the shape before a word is read.

### The Detail That Carries The Urgency

A single marker sits above the KWSP station reading **six months**. It is the one family deadline
we verified, and it is why the service ranks entitlements by deadline rather than by value.

### Treatment, And Why

Warm neutral ground, deep ink, one accent colour used only for the thread and the deadline marker.
**No people, no funeral imagery, no religious iconography, and no government crests or logos**,
because MyTakziah is a proposed addition to the MyGOV family and must not imply endorsement.

The subject is bereavement. **The treatment is deliberately not somber**, because the product is
about competence and relief, not grief. The visual language is a journey that moves forward and
does not double back.

### The Five-Second Test

At a glance a viewer sees the name, one line, three stations, and one sentence:
**One death. Tell government once.** That is the whole idea, and it is designed to survive being
seen small, which matters because 30 per cent of the score is a student vote.

## 8. Why Your Team Should Win

> **Draft, 98 words.** Recount before export and record the count in `preflight.md`.

Survive is four students: two in Computer Science, two in Actuarial Science, whose discipline is
mortality itself. Two of us built Layak, grand champion of the Project 2030 MyAI Future Hackathon,
so we have shipped a citizen-facing service before.

We did not invent a single number. Every figure carries a source, every limit is stated, and where
we could not verify something we narrowed the claim instead of softening it. MyTakziah is
deliberately small: one life event, three agencies, published rules, and a family that tells
government once.

That discipline is the reason this can actually be built.

---

## Sources Used In Sections 5 And 6

Full records in `../research/verified-figures.md` and `../research/agency-rule-map.md`. Every
figure above traces to one of them. Nothing in this draft may be widened beyond what those two
files support.
