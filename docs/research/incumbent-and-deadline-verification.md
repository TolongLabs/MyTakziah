# Incumbent And Deadline Verification: Research Note

**Owner:** TODO: assign
**Status:** Six open questions resolved, two partly resolved, two confirmed dead ends for automated tools
**Last Updated:** 2026-08-21
**Feeds:** PDF Sections 1, 4 and 6; the answer to "is this not already solved"; `agency-rule-map.md` deadline board; `verified-figures.md`

## Question This Answers

Three questions a judge can ask that we could not previously answer with a source:

1. Is this not already solved by MyDigital ID, by MyEG, or by putting the agencies in one building (UTC)?
2. Can any of the three agencies already receive a death claim online?
3. Is there any Malaysian measurement of administrative failure in this domain?

Plus the four `[NEEDS SOURCE]` markers that have been open since 2026-08-19.

---

## Finding 1: MyDigital ID Is Authentication, Not Orchestration

**This is now the strongest competitive evidence in the repository, and it comes from the responsible Minister.**

Digital Minister Gobind Singh Deo, reported by The Star on 13 December 2025:

> "It is purely a verification and authentication platform. It only verifies your identity by cryptographically linking your digital ID to existing records in a secure one-time process."

The same article states:

> "Services such as wedding registrations, death certificates and passport renewals will soon require applicants to have a MyDigital ID."

Named in the same announcement: police summonses, JPJ services, government payments, local council compounds, and public housing services.

**How To Read This.** MyDigital ID is the key to the front door of each agency, separately. It proves you are who you say you are. It does not carry your evidence from JPN to KWSP, it does not rank your deadlines, and it does not prepare or submit a claim. The Wikipedia entry states the same in different words: a single sign-on system that does not store personal information and does not conduct transactions on behalf of citizens.

**The Positioning Consequence, And It Is Important.** MyTakziah must be positioned as sitting **on top of** MyDigital ID, never as an alternative to it. MyDigital ID is about to become mandatory for death certificate services. That is a tailwind, not a threat: it means every user of ours will already hold the identity anchor our concept assumes.

**The Line To Say Out Loud:** MyDigital ID proves who you are, once, to each agency in turn. MyTakziah tells them what happened, once, across all three.

`[ASSUMPTION]` Over 100 government services are reported as integrated with MyDigital ID as of early 2026, including MyJPN, EPF i-Akaun and PERKESO. The count comes from a third-party guide citing the official service list at digital-id.my, not from a government statement. Do not print the number 100 without opening digital-id.my.

---

## Finding 2: UTC Co-Location Is Real, Partial, And Does Not Integrate

The Urban Transformation Centre programme does put agencies under one roof. This is the sharpest version of the "are they not in the same building" question and we now have an answer.

**Scale.** Twelve UTCs operate in Malaysia: Alor Setar, Ipoh, Johor Bahru, Kota Kinabalu, Kuala Lumpur, Kuantan, Kuching, Melaka, Bandar Baru Sentul, Keramat, Miri and Sibu.

**Coverage Of Our Three Agencies Is Inconsistent.**

| Source                       |     JPN      |           KWSP           |   PERKESO    |
| ---------------------------- | :----------: | :----------------------: | :----------: |
| UTC Perak (Ipoh) directory   | Yes, Level 3 | Kiosk only, Ground Floor | Yes, Level 3 |
| utc.my's own agency list     |     Yes      |        Not listed        |  Not listed  |
| Wikipedia "mostly available" | Not in list  |           Yes            | Not in list  |

**How To Read This.** Even at the best case we found, UTC Perak, the three sit on two different floors and one of them is a self-service kiosk rather than a staffed counter. No source lists all three as standard across UTCs. And twelve cities do not cover a country recording close to 199,000 deaths a year.

**The Argument, And It Favours Us.** Co-location shortens the walk between counters. It does not merge the forms, the evidence, or the status. In the same building you still queue three times, hand over the same originals three times, and leave with three reference numbers and no single view of any of it. **A shared roof is not a shared record.**

`[ASSUMPTION]` Per-location agency lists were verified for UTC Perak only. The three sources above disagree with each other, which is itself the finding: co-location is not a uniform national service.

---

## Finding 3: KWSP Death Withdrawal Is Counter Or Post Only

EPF has built online self-service and has not extended it to the bereaved.

| EPF Transaction              | Channel                                                  |
| ---------------------------- | -------------------------------------------------------- |
| Nomination, create or update | i-Akaun app with e-KYC, no office visit needed           |
| Various member withdrawals   | i-Akaun app or i-Akaun (Member) Web Portal, or an office |
| **Death Withdrawal**         | **Over the counter at an EPF office, or by post to EPF** |

**The Line To Say Out Loud:** EPF let you nominate a beneficiary from your phone. It does not let that beneficiary claim from theirs.

This sharpens rather than weakens the problem statement. The barrier is not that EPF lacks digital capability. It is that the bereavement path was not built.

**Confirmed 2026-08-21 in a live browser session**, which defeated the HTTP 403 that had blocked three previous attempts. The page's only application action is a link labelled **"Apply For Manual Withdrawal"** pointing at the KWSP 9KM (AHL) form PDF. **There is no online application route for Death Withdrawal.**

Three further things the live page settled, recorded in full in `agency-rule-map.md`:

- **The without-nomination claimant list was wrong in our files.** The live page carries one list, and it is narrow: widow or widower plus Administrator if the member was married, parents plus Administrator if unmarried. **No children, no guardians, no siblings.** Our table had listed "children or their guardian, parents" for married members. Corrected. Any prototype screen offering a child as a without-nomination claimant is wrong.
- **KWSP publishes separate declaration of responsibility forms by religion**, Appendix A for Muslims and Appendix B for non-Muslims. That is direct evidence for our design claim that religion is a branch condition and not an edge case.
- The Death Assistance conditions, the six-month window, the RM2,500 amount, the discretion wording and the full payment staging table all matched our existing record exactly.

---

## Finding 4: The JPN Deadline Is Resolved At Seven Days

This closes a `[NEEDS SOURCE]` open since 2026-08-19.

**Corrected 2026-08-21 by browser. The boundary is verified. The consequence is not published, and that is the finding.**

JPN's Late Registration of Death (Peninsular) page states the procedure covers a death registered "after hari ke 7", then qualifies it: **"death that berlaku before 1 Disember 2011 sahaja"**, deaths occurring before 1 December 2011 only. It names forms JPN.LM02 (Pin.1/11), **JPN.LM28**, and JPN.LM09 or JPN.LM10 for hospital deaths, requires **two sponsors** who are next of kin, and charges an **application fee of RM50.00**. There is no separate RM10 processing fee and no fine; that reading came from a search summary and was wrong.

**JPN's Peninsular death index publishes an Ordinary procedure and that legacy Late procedure, and no Delayed procedure at all.** Delayed Registration of Death is published only for Sabah and Sarawak.

**So a family in Peninsular Malaysia that passes the seventh day today cannot learn from JPN's published pages what happens next.** Print the boundary, which is published. Never invent the consequence, which is not. This mirrors Finding 6 exactly: enforceable timing, unpublished consequence, at two of the three agencies.

**The Separate Seven Working Days Already In Our Files.** JPN's ordinary registration page states the death verification agency sends the grey copy of JPN.LM02 (Pin.1/11) to the nearest NRD within 7 working days. That is the agency's deadline, not the family's. `agency-rule-map.md` already draws this distinction and it must be kept.

**Statutory Basis, And Why We Still Do Not Cite A Section Number.** The original Act 299 section 19(2) required information within "twelve hours (exclusive of the time necessary for the journey and of any intervening hours of darkness)". The Births and Deaths Registration (Amendment) Bill 2016 substitutes "seven days" for that phrase at clause 12, deletes section 20 at clause 14, and substitutes "seven" for "three" in section 21 at clause 15.

`[NEEDS SOURCE]` **The Bill's own clause 1(2) says it "comes into operation on a date to be appointed by the Minister by notification in the Gazette", and we did not confirm gazettement.** So print the seven days as **JPN's published rule, sourced to JPN**, and do not attribute it to a section of the Act. The administrative source is sufficient and is what a family actually meets.

`[NEEDS SOURCE]` JPN's late registration page carries the qualifier "(for deaths occurring before 1 December 2011)", which suggests a Late versus Delayed category split we could not resolve; the Delayed Registration page refused connection. One human check needed.

---

## Finding 5: Malaysia Has Measured Part Of This, And Parliament Wrote Down Why

**This is the most valuable single find of the pass.** The explanatory statement to the 2016 Amendment Bill records:

> "from 2003 to 2014, the statistic shows that seventy two thousand and nine hundred twenty nine cases for late registration of deaths have been recorded."

**72,929 late death registrations across twelve years**, roughly 6,000 a year. And the Bill states the reason for extending the window:

> "Due to the needs, circumstances, rituals, religious obligations and customs with regard to the management of a death that may prevent a qualified person from informing the death to the Registrar in a period of twelve hours after the death, the period for giving information is extended to seven days."

**How To Read This, And The Limit On It.** This is a Malaysian government statistic, tabled in Parliament, quantifying administrative failure in our exact domain, and accompanied by Parliament's own acknowledgement that managing a death obstructs meeting a government deadline. That is close to the strongest possible framing of the problem, and it is not ours: it is the state's.

**It does not license the broader claim.** It counts late registration at JPN. It says nothing about missed KWSP or PERKESO claims. The existing `[NEEDS SOURCE]` on "how many claims are missed" stands unchanged.

**Safe Wording:** "Malaysia has measured one part of this. Parliament recorded 72,929 late death registrations between 2003 and 2014, and named the rituals and obligations surrounding a death as the reason families could not meet the deadline."

---

## Finding 6: The PERKESO Deadline Is Twelve Months, Superseded 2026-09-22

Searching specifically for a Survivors' Pension or Dependants' Benefit submission deadline surfaced only deadlines belonging to other schemes: 60 days after job loss for EIS, and 12 months after an accident for SIP. Nothing quantifies the death claim window.

**This confirms the existing marker rather than closing it, and that is a useful result.** We can now say, with a search behind it, that PERKESO does not publish a quantified deadline for death claims and states only "tempoh masa yang ditetapkan", the stipulated period. The 12-month figure circulating on social media remains unsourced and must not be printed.

**Superseded 2026-09-22.** The finding above was right that PERKESO's consumer pages do not print a number, and wrong to conclude from that there is none. The limit is statutory: Employees' Social Security Act 1969 (Act 4), section 86(3)(a) requires a claim for dependants' benefit, survivors' pension or funeral benefit to be made "within a period of twelve months after the claim became due or within such further period as the Board may allow on grounds which appear to it to be reasonable", and section 89 bars payment of a benefit not claimed in time. A separate three-month proviso in section 29(2) binds only a non-family person who paid for the funeral, and must not be quoted at a surviving spouse.

**The lesson for this file:** absence from an agency's own website is not absence from law. Check the Act before recording a deadline as unpublished.

**The concept argument survives in a narrower form.** The deadline exists, is enforceable, and is not printed anywhere a grieving family would look. That is still a thing a family cannot be expected to meet on its own.

---

## Finding 6a: JPN Now Runs An Official Virtual Assistant With A Death Module

Observed live on `jpn.gov.my` on 2026-08-21: a chat widget branded "JPN, Pembantu maya rasmi Jabatan Pendaftaran Negara", the official JPN virtual assistant, carrying a dedicated **Kematian** (Death) module and quick actions including **Daftar Kematian** and **Semak Status**.

**This is a live incumbent in our track and it must be acknowledged rather than discovered by a judge.** It is also the cleanest possible illustration of the positioning we already hold: the assistant answers questions about registering a death at JPN. It is one agency, it is guidance, and it does not carry a family's evidence to KWSP or PERKESO or prepare a claim.

**Use it, do not hide it:** JPN has already built the chatbot for its own counter. That is the strongest available evidence that the missing layer is not another assistant, but the journey between the three agencies.

---

## Finding 7: MyEG Does Not Cover This Journey

MyEG's service areas are JPJ, PDRM summonses, immigration and foreign worker permits, road tax and insurance renewal, and healthcare services. It offers some JPN services. **No evidence was found that MyEG handles KWSP or PERKESO death benefit claims.** This is consistent with the existing competitor entry in `track-selection-findings.md`: contracted services only, not universal workflows.

Separately, JPN operates its own ezJPN application for Death Certificate Extract applications. That is retrieving a copy of an already-registered death, not registering one and not claiming anything.

---

## Finding 8: EPF 2024 Withdrawal Figures Remain Blocked

`kwsp.gov.my` returned HTTP 403 on both the Death Withdrawal page and the performance document at `https://www.kwsp.gov.my/documents/d/guest/6-kwsp24_e-performance`. `web.archive.org` is unreachable by these tools.

**The verified 2023 fallback stands: 85,731 transactions worth RM3.05 billion.** Treat this as a confirmed dead end for automated retrieval, not a task still worth agent time. It needs a human with a browser, exactly as `verified-figures.md` already says.

---

## Trap To Watch: The Outdated PERKESO Funeral Benefit Figure

Third-party pages still circulate **RM2,000** for the PERKESO Funeral Management Benefit. Our verified figure is **up to RM3,000, effective 1 June 2024**, and the correct wording is "up to", because the payment is actual funeral expenditure or RM3,000, whichever is lower. If anyone tries to correct us downward during questions, they are reading a stale page.

---

## What Changed For The Submission

| Claim In The Draft                         | Status After This Pass                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| JPN registration deadline `[NEEDS SOURCE]` | **Resolved.** Seven days, with JPN.LM28, RM10 fee and a fine up to RM50, sourced to JPN           |
| "No Malaysian measurement exists"          | **Narrow it.** 72,929 late registrations 2003 to 2014 is a measurement of one part                |
| At least two mandatory in-person trips     | **Holds, and is conservative.** KWSP death withdrawal is also counter or post, so it may be three |
| Competitor coverage                        | **Three new entries needed:** MyDigital ID, UTC, and the EPF i-Akaun contrast                     |
| PERKESO deadline `[NEEDS SOURCE]`          | **Confirmed unpublished.** Keep the marker, strengthen the wording                                |
| EPF 2024 figures `[NEEDS SOURCE]`          | **Dead end for tools.** Print the verified 2023 figures                                           |

---

## Sources

1. The Star, "Prepare for MyDigital ID integration", published 13 December 2025, https://www.thestar.com.my/news/nation/2025/12/13/prepare-for-mydigital-id-integration, accessed 2026-08-21. Supports the Gobind Singh Deo quotations and the list of services that will require MyDigital ID.
2. Wikipedia, "MyDigital ID", https://en.wikipedia.org/wiki/MyDigital_ID, accessed 2026-08-21. Supports single sign-on, no personal data storage, no transactions on behalf of citizens, and almost 10 million accounts as of February 2026. Marked a stub; treat as corroboration only.
3. Biometric Update, "Malaysia to launch national digital ID super-app", January 2025, https://www.biometricupdate.com/202501/malaysia-to-launch-national-digital-id-super-app, accessed 2026-08-21. Supports the superapp proof of concept and the privacy-by-design description. Contains no mention of death certificates or social protection.
4. Wikipedia, "Urban Transformation Centre", https://en.wikipedia.org/wiki/Urban_Transformation_Centre, accessed 2026-08-21. Supports the twelve UTC locations and the ten service clusters.
5. UTC Malaysia, https://www.utc.my/, accessed 2026-08-21. Supports the agency list naming JIM, JPN, JPJ, LHDN, HOI, PTPTN and SSM.
6. From Emily To You, "UTC Perak (Urban Transformation Centre)", https://www.emily2u.com/utc-perak-urban-transformation-centre/, accessed 2026-08-21. Supports the UTC Perak floor directory. Third-party blog; corroborate before printing a floor number.
7. KWSP, "Death Withdrawal", https://www.kwsp.gov.my/en/member/account-centre/death, accessed 2026-08-21 through a search index because the host returns HTTP 403. Supports the counter or post submission channel and the six-month deadline.
8. KWSP, "KWSP i-Akaun App: Features & Benefits", https://www.kwsp.gov.my/en/member/kwsp-i-akaun, accessed 2026-08-21. Supports the online nomination and withdrawal contrast.
9. Jabatan Pendaftaran Negara, "Ordinary Registration of Death (Peninsular)", https://www.jpn.gov.my/en/services/death/ordinary-registration-of-death-peninsular/, accessed 2026-08-21. Supports the 7 working days agency-side transmission, the document list, in-person attendance, the eligible collectors, and no fee.
10. Jabatan Pendaftaran Negara, "Late Registration Of Death (Peninsular)", https://www.jpn.gov.my/en/core-business/death/peninsular/kematian-daftar-lewat-sm-eng, accessed 2026-08-21. Supports the after-the-7th-day threshold, two sponsors, JPN.LM28, RM10 processing fee and fine not exceeding RM50.
11. Parliament of Malaysia, Births and Deaths Registration (Amendment) Bill 2016, hosted by CLJ Law, https://www.cljlaw.com/files/bills/pdf/2016/MY_FS_BIL_2016_15.pdf, accessed 2026-08-21. Supports the twelve hours to seven days substitution at clause 12, the deletion of section 20, the section 21 amendment, the 72,929 late registration statistic, and the stated rationale. Commencement not confirmed.
12. Low & Partners, "Births and Deaths Registration Act 1957", https://www.lowpartners.com/births-deaths-registration-act-1957/, accessed 2026-08-21. Supports the original section 19(2) twelve-hour wording and the section 35 penalty of up to RM250. Third-party host of the Act; not the official text.

### Retrieval Failures Recorded

| Target                                            | Result                             |
| ------------------------------------------------- | ---------------------------------- |
| `kwsp.gov.my` Death Withdrawal page               | HTTP 403                           |
| `kwsp.gov.my` performance document, 2024 figures  | HTTP 403                           |
| `web.archive.org` snapshot of the KWSP death page | Unreachable by the tools available |
| `lom.agc.gov.my` official Act 299 text            | Invalid request                    |
| `commonlii.org` Act 299 consolidated text         | HTTP 403                           |
| JPN Delayed Registration of Death (Peninsular)    | Connection refused                 |
