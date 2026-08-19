# Verified Figures: Research Note

**Owner:** TODO: assign the actuarial pair named in issue #19
**Status:** Verification complete for the ten figures listed in issue #3
**Last Updated:** 2026-08-19
**Feeds:** PDF Sections 1, 2, 5 and 6; canvas bottom band; issue #3

## Question This Answers

Of the ten figures listed in issue #3, which survive verification against primary sources, and in exactly what wording may each be printed?

## How To Use This Note

Print the value in the **Printable Wording** column, not the value in the issue. Three figures changed. One is rejected outright. Anything not in this note does not go in the submission.

## Verdict Summary

| Figure                            | Claimed In Issue #3                           | Verdict                 | Printable Value                           |
| --------------------------------- | --------------------------------------------- | ----------------------- | ----------------------------------------- |
| Deaths In Malaysia 2024           | 198,992                                       | Confirmed               | 198,992                                   |
| Median Age At Death               | 69                                            | Confirmed               | 69.0 years                                |
| EPF Death Withdrawals 2024, Count | 87,776                                        | **Rejected, corrected** | 85,532, confirmation required             |
| EPF Death Withdrawals 2024, Value | RM3.20 billion                                | **Rejected, corrected** | RM3.24 billion, confirmation required     |
| EPF Death Assistance Terms        | RM2,500, six months, before 60, discretionary | Confirmed, all four     | as claimed                                |
| PERKESO Funeral Benefit           | up to RM3,000                                 | Confirmed               | up to RM3,000, effective 1 June 2024      |
| Over-60s Government Interaction   | 33.6% vs 38.9%                                | Confirmed, base wrong   | 33.6% vs 38.9% **of internet users**      |
| MyGOV Scale                       | 2.2m users, 51 services, 19 agencies          | Confirmed               | as claimed, dated 5 June 2026             |
| MyDigital ID Registrations        | almost 10 million, Feb 2026                   | Confirmed               | almost 10 million, 12 February 2026       |
| MyGDX Scale                       | 81 agencies, 49 systems, 65m+ transactions    | Confirmed, caveat       | print without the provider/consumer split |

## The One Figure That Must Not Be Printed As Written

Issue #3 lists **87,776 EPF death withdrawal transactions worth RM3.20 billion in 2024**. Neither number matches any year in the EPF record.

`docs/research/track-selection-findings.md` line 638 carries the same error, and adds a second one: it states 2023 as "84,673 and RM3.00 billion". The EPF Integrated Annual Report 2023 gives 2023 as **85,731 transactions worth RM3,050,681,920**.

The full primary series, read directly from the EPF Integrated Annual Report 2023, Performance Indicators, "Withdrawal By Schemes", is:

| Year | Death Withdrawals, Number | Death Withdrawals, Amount (RM) |
| ---- | ------------------------: | -----------------------------: |
| 2023 |                    85,731 |                  3,050,681,920 |
| 2022 |                    91,414 |                  3,166,318,390 |
| 2021 |                    65,280 |                  2,462,513,423 |
| 2020 |                    61,392 |                  1,928,253,887 |
| 2019 |                    65,747 |                  1,961,714,928 |

Note that 2022 is higher than 2023. The series is not a rising trend and must not be described as one.

### The 2024 Figure, And What Is Still Open

`kwsp.gov.my` blocks automated retrieval, so the EPF Integrated Annual Report 2024 performance document could not be opened directly. Web search returned **85,532 death withdrawals worth RM3,243,030,617 in 2024** from that document.

That is corroborated but not directly verified. The corroboration is strong for one specific reason: the same search returned 2023 comparatives for other schemes, "55 Years" at 943,376 and RM19,459,405,284 and "50 Years" at 127,107 and RM4,184,409,113, and both match the Integrated Annual Report 2023 figures extracted independently here, to the ringgit. A tool reading a different or invented document would not reproduce those.

**Action for a team member, five minutes.** Open `https://www.kwsp.gov.my/documents/d/guest/6-kwsp24_e-performance` in a normal browser, find "Withdrawal By Schemes", read the Death row for 2024, and record it here. Until that is done, treat the 2024 figure as `[NEEDS SOURCE]`.

**Safe fallback if nobody opens it.** Print the 2023 figures, which are fully verified from a primary source: **85,731 death withdrawals worth RM3.05 billion in 2023**. A verified 2023 number is worth more than an unverified 2024 number.

## The Base Error On The DOSM Digital Divide Figure

The claim "over-60s interacting with government online, 33.6% vs 38.9% overall" is arithmetically correct but the base is wrong in a way a judge can catch.

Both figures come from Table 2.14 of the DOSM report, titled "Percentage of individuals **using the Internet** by age group and type of activity, Malaysia, 2024". The denominator is internet users, not the population.

| Group          | Interacting With Government Organisations |
| -------------- | ----------------------------------------: |
| Total          |                                     38.9% |
| 60 And Over    |                                     33.6% |
| 35 To 39, Peak |                                     44.1% |
| 15 To 19, Low  |                                     23.9% |

**Printable wording.** "Among Malaysians who use the internet, 33.6 per cent of those aged 60 and over interact with government organisations online, against 38.9 per cent overall."

### A Stronger Framing Found During Verification

The same report gives internet usage among the 60 and over group as **91.6 per cent in 2024**, up from 86.9 per cent in 2023, and notes every age group is above 90 per cent.

This kills the lazy version of the argument and replaces it with a better one. Older Malaysians are online. They are not less connected. They are the least likely age group to transact with government online despite being connected. The barrier is the process, not the device.

That reframe is stronger for Section 2 and it is fully evidenced. Use it.

Do not multiply 91.6% by 33.6% to produce a population rate. That derivation is not in the source and the survey base does not support it.

## Figures Confirmed Without Change

### Deaths And Median Age

DOSM Vital Statistics, Malaysia, 2025, released 16 October 2025:

- 198,992 deaths in 2024, against 196,965 in 2023, an increase of 1.0 per cent.
- Crude death rate 5.8 per 1,000 population in 2024, down from 5.9 in 2023.
- Median age at death 69.0 years in 2024, unchanged from 2023.
- Male deaths 113,866 (57.2%), female deaths 85,126 (42.8%).

### EPF Death Assistance

All four elements of the claim are confirmed by the KWSP Death Withdrawal page, and independently corroborated by the MyGovernment portal. The stated conditions are, verbatim from KWSP:

- "A Malaysian citizen or Malaysian permanent resident; or a non-Malaysian citizen who was registered as an EPF member before 1 August 1998"
- "Member's dependent (widow/ widower/ children/ parents)"
- "Subject to member's marital status"
- "Application for Death Withdrawal received within six (6) months from the date of member's death"
- "Member passed away before age 60"
- "Member still has savings with the EPF"

KWSP describes it as "a gesture of compassion by the EPF to our member's next-of-kin (under EPF's discretion)", a "one-time payment of RM2,500", and states "The EPF reserves the rights to make all final decisions pertaining to the Death Assistance."

The word "discretionary" is therefore accurate and must be kept. Never write that a family will receive RM2,500.

### PERKESO Funeral Benefit

RM3,000, effective 1 June 2024. The benefit is the actual funeral expenditure or RM3,000, whichever is lower, so "up to RM3,000" is the correct wording and "RM3,000" alone is not.

It is payable to the eligible person, or if there is none, to whoever bore the funeral costs. The MyGovernment portal adds that proof of expenses such as receipts is required if the applicant is not the legal heir.

### MyGOV, MyDigital ID And MyGDX

- **MyGOV.** "More than 2.2 million Malaysian citizens now use the MyGOV App" and it "has consolidated 51 services from 19 government agencies". Ministry of Digital, 5 June 2026.
- **MyDigital ID.** "As of today, we have reached almost 10 million (accounts)", Azrin Aris, Deputy Chief Executive Officer of MyDigital ID, reported by Bernama on 12 February 2026. Up from 1.8 million a year earlier. Targets of 13 million by mid-2026 and 17 million by end-2026. **The publisher is Bernama reporting a company officer, not a Ministry of Digital statement.** Issue #3 asked this to be confirmed; it is now confirmed and the attribution in the submission must say so.
- **MyGDX.** Verbatim: "MyGDX has been utilized by 81 government agencies, comprising 51 data-providing agencies and 23 data-consuming agencies across 49 integrated systems. With over 65 million Application Programming Interface (API) transactions recorded". Ministry of Digital, 10 February 2026.

**MyGDX caveat.** 51 plus 23 is 74, not 81. The arithmetic gap is in the source itself. Print "81 government agencies across 49 integrated systems, with more than 65 million API transactions" and omit the provider and consumer split. Quoting the split invites a judge to do the sum in front of you.

## The Two Traps, Confirmed

Issue #3 named two traps. Both are real and the verification confirms why.

**Do not compute a take-up rate.** 85,532 divided by 198,992 is 43 per cent. That number is meaningless. Not every deceased person was an EPF member, a claim can be paid in a year after the death, and 2022 recorded more death withdrawals than 2023 while deaths rose. Any rate built from these two series is indefensible.

**Do not claim an identical document set.** See `shared-fields-matrix.md`. The three agencies demand the same core information repeatedly, in different formats, with different forms. They do not demand the same documents. The defensible claim is repetition of core information.

## Assumptions

| Assumption                                                           | Basis                                                                    | Impact If Wrong                                        |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| The 2024 EPF figures returned by search match the published document | Adjacent 2023 comparatives match the primary 2023 report to the ringgit  | A printed 2024 number would be wrong; fallback to 2023 |
| Table 2.14 figures are the most current DOSM e-government breakdown  | The 2024 report is the latest full report located; a 2025 edition exists | A slightly stale figure, still correctly attributed    |

## Open Gaps

- `[NEEDS SOURCE]` EPF death withdrawal count and value for 2024, pending a human opening the KWSP performance document.
- `[NEEDS SOURCE]` DOSM released an ICT Use and Access by Individuals and Households Survey Report, 2025 on 23 April 2026, covering reference year 2025. Its summary release does not carry the e-government activity breakdown, and the full report could not be located. If it carries an updated Table 2.14, the 33.6 and 38.9 figures should be refreshed. This is a nice-to-have, not a blocker.
- `[NEEDS SOURCE]` The statutory deadline for registering a death under the Births and Deaths Registration Act 1957 is not stated on the JPN service page. See `agency-rule-map.md`.

## Sources

1. Department of Statistics Malaysia, "Vital Statistics, Malaysia, 2025", published 16 October 2025, https://www.dosm.gov.my/portal-main/release-content/vital-statistics-malaysia-2025, accessed 2026-08-19. Supports deaths 2024 and 2023, crude death rate, median age at death, sex split.
2. Department of Statistics Malaysia, "ICT Use and Access by Individuals and Households Survey Report, 2024", released 24 April 2025, full report PDF https://www.dosm.gov.my/uploads/release-content/file_20250711104931.pdf, accessed 2026-08-19. Supports Table 2.14 e-government activity by age group, and internet usage by age group at 91.6 per cent for 60 and over.
3. Department of Statistics Malaysia, "ICT Use and Access by Individuals and Households Survey Report, 2025", released 23 April 2026, https://www.dosm.gov.my/portal-main/release-content/ict-use-and-access-by-individuals-and-households-survey-report-2025, accessed 2026-08-19. Consulted to check for a newer e-government breakdown; the summary release does not contain one.
4. Employees Provident Fund, "EPF Integrated Annual Report 2023", Performance Indicators section, "Withdrawal By Schemes", https://www.kwsp.gov.my/documents/d/guest/6-epf_iar23-performance, accessed 2026-08-19 via the Internet Archive capture of 7 January 2026 because kwsp.gov.my blocks automated retrieval. Supports the 2019 to 2023 death withdrawal series.
5. Employees Provident Fund, "EPF Integrated Annual Report 2024", Performance Indicators, https://www.kwsp.gov.my/documents/d/guest/6-kwsp24_e-performance, **not directly accessed**, figures reported via web search on 2026-08-19. Supports the 2024 death withdrawal figures pending human confirmation.
6. Employees Provident Fund, "Death Withdrawal", https://www.kwsp.gov.my/en/member/account-centre/death, accessed 2026-08-19 via the Internet Archive because kwsp.gov.my blocks automated retrieval. Supports Death Assistance amount, conditions, deadline, age condition and discretionary status, and the required document list.
7. PERKESO, "Employment Injury Scheme (LINDUNG PEKERJA)", https://www.perkeso.gov.my/en/our-services/protection/employment-injury-scheme.html, accessed 2026-08-19. Supports Funeral Benefit RM3,000 effective 1 June 2024 and Dependants' Benefit rates.
8. PERKESO, "Invalidity Scheme (LINDUNG PEKERJA)", https://www.perkeso.gov.my/en/our-services/protection/invalidity-scheme.html, accessed 2026-08-19. Supports Survivors' Pension qualifying conditions and Funeral Benefit.
9. MyGovernment, "Funeral Management Assistance (Khairat Kematian) in Malaysia", updated 30 July 2026, https://www.malaysia.gov.my/en/personas/caretakers-to-older-parents/mengurus-kematian-ibu-bapa/funeral-management-assistance-khairat-kematian-in-malaysia, accessed 2026-08-19. Independently corroborates the EPF and PERKESO benefit terms, and lists four further schemes.
10. Ministry of Digital, MyGOV Malaysia app statement, published 5 June 2026, https://www.digital.gov.my/en-GB/siaran/Aplikasi-MyGOV-Malaysia-Capai-2.2-Juta-Pengguna%2CPerluas-Penawaran-Digital-Dengan-Penstriman-Langsung-Piala-Dunia-FIFA-2026, accessed 2026-08-19. Supports 2.2 million users, 51 services, 19 agencies.
11. Ministry of Digital, "Revolusi Digital Sektor Awam: PPDSA Dan MyGDX Pemacu Transformasi Rakyat", published 10 February 2026, https://www.digital.gov.my/en-GB/siaran/Revolusi-Digital-Sektor-Awam%3APPDSA-Dan-MyGDX-Pemacu-Transformasi-Rakyat, accessed 2026-08-19. Supports MyGDX agency, system and transaction counts.
12. Bernama, "MyDigital ID Targets 17 Mln Registered Accounts By End-2026", published 12 February 2026, https://www.bernama.com/en/news.php?id=2523289, accessed 2026-08-19. Supports almost 10 million registrations and the quoted attribution.
