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

TODO: team name (#7, still open)
TODO: four member names, universities, contact

---

## 1. The Problem

TODO: #7. Lead with the shared-fields matrix. Frame as administrative burden on a grieving
family, never as death itself.

## 2. Target User

TODO: #7. If #5 does not happen, use the fallback disclosure in
`../research/interview-guide-bereavement.md`, which is pre-written and safe to use as-is.

## 3. Your Solution

TODO: #7.

## 4. Innovation Element

TODO: #7. Must contain the agreed sentence: "A chatbot tells you what to do. MyTakziah does it:
one death, one set of evidence, three agencies' claims prepared, submitted and tracked under
published rules the family can check."

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

TODO: #9.

## 8. Why Your Team Should Win

TODO: #9. **100 words or less.** Count it and record the count in `preflight.md`.

---

## Sources Used In Sections 5 And 6

Full records in `../research/verified-figures.md` and `../research/agency-rule-map.md`. Every
figure above traces to one of them. Nothing in this draft may be widened beyond what those two
files support.
