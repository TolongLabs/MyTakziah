# Verified Figures: Research Note

**Owner:** TODO: assign the actuarial pair named in issue #19
**Status:** Verification complete for the issue #3 figures and the finals-deck mortality figures
**Last Updated:** 2026-09-19
**Feeds:** PDF Sections 1, 2, 5 and 6; canvas bottom band; issue #3

## Question This Answers

Of the ten figures listed in issue #3, which survive verification against primary sources, and in exactly what wording may each be printed?

## How To Use This Note

Print the value in the **Printable Wording** column, not the value in the issue. Three figures changed. One is rejected outright. Anything not in this note does not go in the submission.

## Verdict Summary

| Figure                            | Claimed In Issue #3                           | Verdict                 | Printable Value                           |
| --------------------------------- | --------------------------------------------- | ----------------------- | ----------------------------------------- |
| Deaths In Malaysia 2024           | 198,992                                       | Confirmed               | 198,992                                   |
| Deaths In Malaysia, Q2 2026       | 49,827, daily average 548                     | Confirmed               | as claimed, dated Q2 2026                 |
| Median Age At Death               | 69                                            | Confirmed               | 69.0 years                                |
| EPF Death Withdrawals 2024, Count | 87,776                                        | **Rejected, corrected** | **85,532, confirmed 2026-08-21**          |
| EPF Death Withdrawals 2024, Value | RM3.20 billion                                | **Rejected, corrected** | **RM3,243,030,617, confirmed 2026-08-21** |
| EPF Death Assistance 2024, Count  | not previously held                           | **New, confirmed**      | **27,006 payments, RM67,515,000**         |
| EPF Death Assistance Terms        | RM2,500, six months, before 60, discretionary | Confirmed, all four     | as claimed                                |
| PERKESO Funeral Benefit           | up to RM3,000                                 | Confirmed               | up to RM3,000, effective 1 June 2024      |
| Over-60s Government Interaction   | 33.6% vs 38.9%                                | Confirmed, base wrong   | 33.6% vs 38.9% **of internet users**      |
| MyGOV Scale                       | 2.2m users, 51 services, 19 agencies          | Confirmed               | as claimed, dated 5 June 2026             |
| MyDigital ID Registrations        | 12 million, June 2026                         | **Updated, confirmed**  | 12 million, reported 8 July 2026          |
| MyGDX Scale                       | 131 onboarded agencies                        | **Updated, confirmed**  | label as onboarded agencies               |
| Singapore MyLegacy Use            | about 90% of bereaved families                | Confirmed, narrow scope | digital death-certificate downloads only  |

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

### The 2024 Figure: Closed 2026-08-21

**Resolved.** `kwsp.gov.my` blocked automated retrieval on four separate attempts across three days, including a live browser session and a curl request carrying browser headers. A team member downloaded the document directly and it was read from the local copy, archived at `kwsp-five-year-financial-highlights.pdf` alongside this note.

**Verified from the primary document: 85,532 death withdrawals worth RM3,243,030,617 in 2024.** The earlier corroborated-but-unverified reading was correct to the ringgit, and the issue #3 figures of 87,776 and RM3.20 billion remain rejected.

The 2023 comparatives in the same table match this note's independently extracted 2023 series exactly, which closes the verification loop.

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

### Deaths in the Second Quarter of 2026

DOSM Demographic Statistics Malaysia, Second Quarter 2026, released 13 August 2026:

- 49,827 deaths were recorded in Malaysia in the second quarter of 2026.
- The daily average was 548 deaths.
- The quarterly total was 0.6 per cent higher than the 49,552 deaths reported for the second
  quarter of 2025.

**Printable wording.** "Malaysia recorded 49,827 deaths in the second quarter of 2026, an average
of 548 every day."

These are recorded deaths, not unique bereaved families, claims, or potential MyTakziah users.

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
- **MyDigital ID.** The official MyDigital ID news page records multiple 8 July 2026 reports that
  registration reached **12 million users as of June 2026**, quoting Deputy Prime Minister Ahmad
  Zahid Hamidi. This supersedes the earlier February figure of almost 10 million for current finals
  material. Label the date because registrations continue to change.
- **MyGDX.** The live MyGDX portal reported **131 onboarded agencies**, 82 integrated systems and
  425,265,340 transactions when accessed on 19 September 2026. "Onboarded agencies" is the portal's
  label and should not be shortened to "integrated agencies." The Ministry of Digital's dated
  10 February release remains a useful snapshot: 81 participating agencies across 49 integrated
  systems and more than 65 million API transactions.

**MyGDX caveat.** The live portal and the February release use different measures and dates. Print
"131 onboarded agencies" only when citing the live portal. If using the February snapshot, print
"81 government agencies across 49 integrated systems, with more than 65 million API transactions"
and omit the provider and consumer split. The February source says 51 providers and 23 consumers,
which adds to 74 rather than 81.

### Singapore MyLegacy Comparator

Singapore's Ministry of Digital Development and Information reported on 1 March 2024 that about
90 per cent of bereaved families download digital death certificates from MyLegacy every month.
The service brings information and services from several government agencies onto one platform.

**Printable wording.** "In Singapore, about 90 per cent of bereaved families use MyLegacy to
download the digital death certificate."

Keep the scope narrow. The figure supports uptake of the death-certificate service, not use of
every MyLegacy feature, successful benefit claims, or proof that Malaysia will reach the same rate.

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

- **Closed 2026-08-21.** A team member downloaded the KWSP five-year financial highlights and the full Withdrawal by Schemes series is now verified from the primary document.

### EPF Death Withdrawals, Verified Five-Year Series

| Year | Transactions | Value           |
| ---- | -----------: | --------------- |
| 2024 |       85,532 | RM3,243,030,617 |
| 2023 |       85,731 | RM3,050,681,920 |
| 2022 |       91,414 | RM3,166,318,390 |
| 2021 |       65,280 | RM2,462,513,423 |
| 2020 |       61,392 | RM1,928,253,887 |

**The series does not rise monotonically.** 2022 recorded more transactions than either 2023 or 2024. The existing warning in this file stands: never describe this as a growing trend.

### The Number That Matters More, And The Discipline It Needs

The same document carries a separate "Death and Incapacitation Benefits" block. Its Death Benefits line is **27,006 payments worth RM67,515,000 in 2024**, which divides to **exactly RM2,500.00 per payment**. That identifies it as the Death Assistance.

**So in 2024 the EPF processed 85,532 death withdrawals and made 27,006 Death Assistance payments, a ratio of 31.6 per cent.**

`[ASSUMPTION]` **Do not present that gap as missed deadlines.** Death Assistance also requires the member to have died **before age 60**, and the median age at death in Malaysia is 69.0, so the age condition alone must account for a large share of it. EPF also states the payment is discretionary. **No published breakdown separates the age condition, the discretion and the six-month window.**

**The defensible claim is the gap plus the silence, not a cause:** most EPF death withdrawals are not accompanied by a Death Assistance payment, and EPF does not publish why. Attributing it to the deadline would be exactly the kind of unevidenced leap this file exists to prevent.

**Five-year Death Assistance series, for context:** 2024 27,006; 2023 26,745; 2022 28,243; 2021 25,001; 2020 20,310.

- `[NEEDS SOURCE]` DOSM released an ICT Use and Access by Individuals and Households Survey Report, 2025 on 23 April 2026, covering reference year 2025. Its summary release does not carry the e-government activity breakdown, and the full report could not be located. If it carries an updated Table 2.14, the 33.6 and 38.9 figures should be refreshed. This is a nice-to-have, not a blocker.
- **Closed 2026-08-21.** The death registration deadline is **seven days**, cited to JPN's own Late Registration Of Death (Peninsular) page rather than to the Act, because the 2016 amendment that would put seven days into section 19(2) commences by ministerial notification and gazettement was not confirmed. Working in `incumbent-and-deadline-verification.md`.
- **New verified figure, 2026-08-21: 72,929 late death registrations recorded between 2003 and 2014**, from the explanatory statement to the Births and Deaths Registration (Amendment) Bill 2016. Roughly 6,000 a year. It measures late registration at JPN only and does **not** license any claim about missed KWSP or PERKESO claims. The Bill also names "rituals, religious obligations and customs with regard to the management of a death" as the reason families could not meet the old window, which is Parliament stating our problem in its own words.
- `[NEEDS SOURCE]` **2026-08-21, team decision: the deck now carries 43,929 late death registrations for 2019 to 2025 instead of the 72,929 figure above.** The team chose the more recent number on the grounds that recency wins. **No source for it exists anywhere in this repo.** The 72,929 figure remains the only late-registration count this file can support, and it stays here unchanged. Either the team supplies a citation for 43,929 before the deck ships, or the deck reverts to 72,929. Do not treat 43,929 as verified on the strength of it appearing on a slide.

## Added 2026-09-12: Malaysia's Age Structure

Needed because the mentor asked the pitch to open on Malaysia's ageing population. Verified against
the primary DOSM release, not a summary.

| Figure                                 | Value                                 |
| -------------------------------------- | ------------------------------------- |
| Total population, 2026                 | **34.4 million**                      |
| Aged 65 and over, 2026                 | **8.4 per cent**, roughly 2.9 million |
| Aged 65 and over, 2025                 | 8.0 per cent                          |
| Aged 15 to 64, 2026                    | 70.4 per cent                         |
| Aged 0 to 14, 2026                     | 21.2 per cent                         |
| Old-age dependency ratio, 2025 to 2026 | 11.4 rising to 11.9                   |
| Median age, 2026                       | 31.7 years                            |

**Printable wording.** "8.4 per cent of Malaysians are aged 65 or over, up from 8.0 per cent a year
earlier. That is roughly 2.9 million people, and the share is rising."

### "Ageing Nation": Resolved 2026-09-21, Cite MOF And Not DOSM

**The label is sourced. The earlier `[NEEDS SOURCE]` marking on this page was wrong and is
withdrawn.** Both dated claims trace to the Ministry of Finance.

| Claim                                             | Status        | Source                                      |
| ------------------------------------------------- | ------------- | ------------------------------------------- |
| Malaysia became an ageing nation in 2021, at 7%   | **Confirmed** | MOF, Amir Hamzah Azizan, 26 August 2025     |
| Malaysia projected an aged nation by 2048, at 14% | **Confirmed** | MOF, Amir Hamzah Azizan, 26 August 2025     |
| The 7% and 14% thresholds                         | **Confirmed** | United Nations definition, via MOF and DOSM |

**Printable wording.** "Malaysia became an ageing nation in 2021. The Ministry of Finance projects
we will be an aged nation by 2048." Attribute it to the Ministry of Finance, or say it plainly as
national fact. Either is defensible.

**The one thing that stays wrong: do not attribute the label to the DOSM population release.** The
Current Population Estimates 2026 release uses "old age population", never "ageing", and sets no
threshold. Checked directly against the release on 2026-09-21. DOSM supports the numbers (8.0 to
8.4 per cent, dependency ratio 11.4 to 11.9, median age 31.7); MOF supports the label and the
dated projections. Keep the two attributions separate and both are safe.

### The Join That Makes It Our Problem

The median age at death is 69.0, and 8.4 per cent of the population is already 65 or over. These
figures establish national context, but they do not establish the age, gender or household role of
the person handling the paperwork. Treat the proposed surviving-spouse segment as `[ASSUMPTION]`
until the team records genuine user research.

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
13. Department of Statistics Malaysia, "Current Population Estimates, 2026", released 31 July 2026, https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026, accessed 2026-09-12. Supports total population, the 65 and over share for 2025 and 2026, the working age and child shares, the old-age dependency ratio and the median age.
14. Department of Statistics Malaysia, "Demographic Statistic Malaysia, Second Quarter 2026", released 13 August 2026, https://www.dosm.gov.my/portal-main/release-content/demographic-statistic-malaysia-q22026, accessed 2026-09-19. Supports 49,827 deaths in Q2 2026 and the daily average of 548.
15. MyDigital ID, "News", entries published 8 July 2026, https://www.digital-id.my/en/news, accessed 2026-09-19. Records multiple reports quoting the Deputy Prime Minister that MyDigital ID reached 12 million registered users as of June 2026.
16. Malaysian Government Central Data Exchange, "MyGDX", live implementation statistics, https://www.mygdx.gov.my/en/landing-page/catalog, accessed 2026-09-19. Supports 131 onboarded agencies and labels the figure as onboarding rather than integration.
17. Singapore Ministry of Digital Development and Information, "MyLegacy@LifeSG", published 1 March 2024, https://www.mddi.gov.sg/newsroom/my-legacy-life-sg/, accessed 2026-09-19. Supports the statement that about 90 per cent of bereaved families download digital death certificates from MyLegacy every month.
18. Ministry of Finance Malaysia, "Malaysia To Become Aged Nation By 2048 - Amir Hamzah", press citation dated 26 August 2025, https://mof.gov.my/portal/en/news/press-citations/malaysia-to-become-aged-nation-by-2048-amir-hamzah, accessed 2026-09-21. Supports the aged-nation projection for 2048 at a 14 per cent threshold, and the statement that Malaysia became an ageing nation in 2021 at 7 per cent. Attributed to Datuk Seri Amir Hamzah Azizan, Finance Minister II.
19. Department of Statistics Malaysia, "Malaysia attained ageing nation status", content download reporting the Ministry of Finance Economic Outlook 2023, https://www.dosm.gov.my/uploads/content-downloads/file_20221215161042.pdf, accessed 2026-09-21. Records Malaysia as "officially considered as an ageing country" on reaching 7.3 per cent aged 65 and over, and attributes the 7 per cent threshold to the United Nations. Corroborates source 18 and predates it.
