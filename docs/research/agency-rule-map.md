# Agency Rule Map: Research Note

**Owner:** TODO: assign the actuarial pair named in issue #19
**Status:** Complete for JPN, KWSP and PERKESO, with two deadlines still open
**Last Updated:** 2026-08-19
**Feeds:** PDF Sections 3, 4 and 6; prototype screen 3; the answer to "is this not MyGOV chatbot"; issue #6

## Question This Answers

For each of JPN, KWSP and PERKESO: who may claim, on what conditions, against what deadlines, with what evidence, and which parts the agency alone decides.

## The Design Rule This Document Exists To Serve

Every rule below is deterministic and carries a source. **The model never decides eligibility.** MyTakziah pre-fills forms and submits them; the agency decides. Every condition shown to a user carries a link to the government page or form it came from.

This is not a design preference. It is the direct answer to the two MyGOV chatbot failures, and it is the reason the concept survives the question "what happens when your AI is wrong". If the system never decides, being wrong costs a correction, not a family's money.

## Deadline Board

Ranked by urgency, because prototype screen 3 ranks by deadline first and value second.

| Deadline                                           | Agency  | Length                                            | Status           | Consequence Of Missing It               |
| -------------------------------------------------- | ------- | ------------------------------------------------- | ---------------- | --------------------------------------- |
| Death Withdrawal Application, For Death Assistance | KWSP    | **Six months from death**                         | **Verified**     | RM2,500 Death Assistance is lost        |
| Registration Of The Death                          | JPN     | Short, ordinary window                            | `[NEEDS SOURCE]` | Falls into Late or Delayed Registration |
| Benefit Claim Submission                           | PERKESO | Stipulated period, unquantified on official pages | `[NEEDS SOURCE]` | PERKESO may reject the application      |

**Only one family-facing deadline is fully verified, and it is the six-month EPF window.** Build the urgency argument on that one. Do not print a number for the other two until someone confirms them.

Two further time limits exist but are not the family's to meet, and must not be presented as if they were: the death verification agency sends its copy to JPN within 7 working days, and an employer must report a work accident to PERKESO within 30 days.

## JPN, Jabatan Pendaftaran Negara

### Precondition

Registration begins only after a death verification agency, meaning a hospital, PDRM or DBKL, has verified the death and issued the Death Register or Burial Permit JPN.LM02 (Pin.1/11). There are two routes: the verification agency notifies JPN directly, or the next of kin reports the death and carries the permit themselves.

This is why prototype screen 1 starts after verification. **Do not depict MyTakziah verifying a death or triggering a JPN registration automatically.**

### Who May Act

| Role                                | Basis                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------- |
| Informant                           | The person recorded in the Death Register JPN.LM02 (Pin.1/11)                               |
| Next Of Kin                         | May report the death and present at the NRD office                                          |
| Eligible To Collect The Certificate | Mother or father, husband or wife, children, biological siblings, or the recorded informant |

### Evidence

**Mandatory:** the blue copy of JPN.LM02 (Pin.1/11); the deceased's identity card or identification document, original; the informant's identity card or identification document, original and copy.

**Conditional:** the medical practitioner's certification of the causes of death, original, Form JPN.LM09, or JPN.LM10 where there was a post-mortem, if the death occurred in hospital.

### What JPN Decides

Whether the death is registered, and issuance of the death certificate. There is no fee. Registration is in person at the NRD office.

### Scope

JPN publishes separate procedures for Peninsular Malaysia, Sabah and Sarawak, and separate Ordinary, Late and Delayed Registration procedures. **v1 is Peninsular only**, per issue #2, and the submission should say so rather than leave it open.

## KWSP, Employees Provident Fund

### Who May Claim

**With nomination:** the nominee, aged 18 and above, may withdraw the nominated portion of the member's full EPF savings.

Religion changes what happens if the nominee has also died:

- **Muslims:** if the nominee passes away, the nominee's next of kin is eligible to apply.
- **Non-Muslims:** if the nominee died **before** the member, the member's next of kin applies. If the nominee died **after** the member, the nominee's next of kin applies.

**Without nomination:**

| Member Status | Who May Apply                                                                        |
| ------------- | ------------------------------------------------------------------------------------ |
| Married       | The member's widow or widower, children or their guardian, parents, or Administrator |
| Unmarried     | The member's parents, or Administrator                                               |

Where the member left no nomination, any individual appointed by the court acts to apply for the Death Withdrawal.

### Payment Staging Without Nomination

This is a rule, not a discretion, and it explains why families are told to come back:

| Application Timing               | Savings Up To RM2,500 | Savings RM2,500 To RM25,000                                | Savings Above RM25,000                                                                                          |
| -------------------------------- | --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Less Than Two Months After Death | Lump sum              | First payment RM2,500, then the full balance at two months | First payment RM2,500, then RM22,500 at two months, balance on a court, legal institution or Amanah Raya letter |
| Two Months Or More After Death   | Lump sum              | Lump sum                                                   | RM25,000, balance on a court, legal institution or Amanah Raya letter                                           |

### Death Assistance Conditions

All of the following must hold, in KWSP's own wording:

- "A Malaysian citizen or Malaysian permanent resident; or a non-Malaysian citizen who was registered as an EPF member before 1 August 1998"
- "Member's dependent (widow/ widower/ children/ parents)"
- "Subject to member's marital status"
- "Application for Death Withdrawal received within six (6) months from the date of member's death"
- "Member passed away before age 60"
- "Member still has savings with the EPF"

The amount is a one-time RM2,500. KWSP describes it as "a gesture of compassion by the EPF to our member's next-of-kin (under EPF's discretion)" and states that "The EPF reserves the rights to make all final decisions pertaining to the Death Assistance."

### What KWSP Decides

Whether the documents are sufficient; whether Death Assistance is awarded, which is explicitly discretionary and never automatic; and how payment is staged. **Never show a user that they will receive RM2,500.**

### What Can Be Pre-Filled

Form KWSP 9KM (AHL): the identity, relationship and bank-account fields. Not the outcome.

## PERKESO, Pertubuhan Keselamatan Sosial

PERKESO is the hardest of the three to represent honestly, because two different schemes can pay out on a death and both turn on contribution history that the family cannot see.

### Route One, Employment Injury Scheme

Applies where the employee dies as a result of an employment injury, or while receiving Permanent Disablement Benefit.

- **Dependants' Benefit:** a daily payment at 90 per cent of the deceased's average assumed daily wage, subject to a minimum of RM30.00 and a maximum of RM178.50 per day.
- **Distribution:** widow or widower three fifths, receiving benefits for life even on remarriage after 1 May 2005; children two fifths, until age 21 or marriage, extended to completion of a first degree if studying, and indefinitely where mentally or physically incapacitated.
- **If no spouse or children:** parents four tenths, siblings under 21 three tenths, grandparents four tenths where a parent is deceased.

### Route Two, Invalidity Scheme

Applies where the Insured Person dies before reaching 60 and satisfies the qualifying contribution conditions, or was receiving Invalidity Pension at death regardless of age.

**Full qualifying period**, either of:

- at least 24 monthly contributions paid within the 40 consecutive months before death; or
- not less than two thirds of the complete months from enrollment to death, with a minimum of 24 months.

**Reduced qualifying period:** not less than one third of the complete months from enrollment to death, with a minimum of 24 months.

### Funeral Management Benefit, Both Routes

RM3,000, effective 1 June 2024. The payment is the actual funeral expenditure or RM3,000, **whichever is lower**, so the correct wording is "up to RM3,000".

It is payable to the eligible person, or where there is none, to whoever bore the funeral costs. Original burial receipts are required where there is no next of kin, and proof of expenses is required where the claimant is someone other than the widow or widower, parents, or child or adopted child.

### What PERKESO Decides

Whether the qualifying contribution period is met; which scheme applies; the benefit rate; and whether the funeral expenditure evidence is accepted.

### One Channel Already Exists Online

PERKESO's benefit application page directs claimants to Portal LINDUNG FAEDAH,
https://lindungfaedah.perkeso.gov.my/, to "create an application for the categories below:
Accident Notice, Occupational Disease Notice, Death Notice".

**A death notice can already be lodged online at one of the three agencies.** This is worth a
line in Feasibility: the concept is not proposing something no Malaysian agency has attempted,
it is proposing that the channel one agency already built should be reachable once, alongside
the other two, from a single journey.

Treat it as precedent and as an integration candidate. It is **not** evidence that a public
submission or status API exists, and the submission must not imply that it is.

### The Honest Limit, And Why It Strengthens Us

**Survivors' Pension eligibility depends on a contribution history that neither the family nor MyTakziah can see.** A widow cannot tell you whether her husband had 24 contributions inside the last 40 months. Neither can we.

So PERKESO can only ever be shown as **"potentially eligible, confirmation required"**. Issue #6 called this out and the rules confirm it.

State this limit in the submission rather than hiding it. A judge who finds an overclaim you did not disclose stops trusting the rest of the document. A judge who reads a limit you disclosed yourself starts trusting it. Feasibility is 25 per cent of the score and this is where that 25 per cent is won.

## What Can Be Pre-Filled Versus What The Agency Decides

The single table that defines the product boundary.

| Agency  | MyTakziah Can Pre-Fill                                                   | Only The Agency Decides                                                           |
| ------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| JPN     | Particulars already held on JPN.LM02 by the verification agency          | Whether the death is registered, and issuance of the certificate                  |
| KWSP    | Form KWSP 9KM (AHL) identity, relationship and bank fields               | Sufficiency of documents, award of the discretionary RM2,500, and payment staging |
| PERKESO | Borang 24, Borang 26 or Borang 34 identity, relationship and bank fields | Whether the qualifying period is met, which scheme applies, and the benefit rate  |

## Wording Rules, Non-Negotiable

Apply these in the PDF, the canvas, the prototype and the video script. One person should enforce them across all four.

| Never Write                    | Write Instead                                                        |
| ------------------------------ | -------------------------------------------------------------------- |
| Approved                       | Submitted, receipted and tracked                                     |
| Eligible                       | Potentially eligible, confirmation required                          |
| You will receive RM2,500       | RM2,500 Death Assistance, at EPF's discretion, if conditions are met |
| RM3,000 funeral benefit        | Up to RM3,000, actual expenditure or RM3,000, whichever is lower     |
| We submit your claim           | We prepare your claim and submit it with your consent                |
| The same documents three times | The same core information, demanded again at each agency             |
| End to end                     | End to end, meaning submitted, receipted and tracked                 |

## Implications For The Concept

1. **The deterministic layer is real and it is small.** Roughly a dozen rules across three agencies, all published, all citable. That is a weekend of rule authoring, not a research programme, which is a genuine feasibility argument.
2. **Deadline ranking has exactly one confirmed anchor.** Screen 3 should lead with the EPF six-month window because it is the only family deadline verified to a primary source.
3. **Religion and marital status are branch conditions, not edge cases.** KWSP splits on Muslim and non-Muslim for nominee succession and for the declaration appendix; PERKESO requires a sole widow declaration for Muslims. Any demo that ignores this looks naive to a Malaysian judge.
4. **Provenance is the differentiator, not the chat.** Every condition above has a URL. That is the same approach as Layak and it is the crisp answer to "is this not MyGOV chatbot": the chatbot generates an answer, MyTakziah cites a rule and pre-fills a form.

## Open Gaps

- `[NEEDS SOURCE]` The statutory window for ordinary death registration under the Births and Deaths Registration Act 1957. JPN's service page does not state it, and the official Act text could not be retrieved. Search results indicate a three-day ordinary window with a further short delayed-registration period, but that reading came from third-party hosts of the Act and **must not be printed until confirmed** against the official text. See the browser-verification log below for the 2026-08-20 re-check.
- `[NEEDS SOURCE]` The PERKESO claim submission deadline. The official checklist states only that PERKESO may reject applications later than "tempoh masa yang ditetapkan", the stipulated period, without quantifying it. A 12-month figure circulates on social media and is not a source. Re-checked 2026-08-20: still no official quantification, see log below.
- `[NEEDS SOURCE]` The KWSP page lists the without-nomination claimants twice and the two lists differ: one includes siblings, the other does not. Confirm which applies before any screen or table repeats it. Re-checked 2026-08-20: could not reopen the official page, see log below.
- `[ASSUMPTION]` Both PERKESO checklists located are current. Borang 34's checklist is dated 9 December 2024; the Borang 24 and 26 checklist is undated.

## Browser-Verification Log, 2026-08-20 (Issue #20)

Issue #20 flagged that several official pages block automated retrieval and asked a human with a normal browser to confirm six items. What follows is an honest record of a re-check run by an AI assistant, not a human browser session. Three items were resolved or advanced; three still need a human.

| Item                                       | Outcome On 2026-08-20                                                                                                                                                                                                                                                                                                                                        | Still Needs A Human |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------: |
| JPN Bahasa Malaysia document list          | **Confirmed.** The BM service page was retrieved in full. The document list matches this note. **Correction:** the form codes are `JPN.LM02`, `JPN.LM09` and `JPN.LM10`, not `NRD.LM02` etc. The English page machine-translated the department code `JPN` to its English acronym `NRD`, garbling the form identifiers. All references in this note are corrected accordingly. Certificate collectors, including "adik-beradik kandung" (biological siblings), are confirmed. No informant registration deadline appears on the page. |         No          |
| JPN statutory registration window          | **Not resolved.** The official Laws of Malaysia page for Act 299 (`lom.agc.gov.my/act-detail.php?lang=BM&act=299`) timed out and CommonLII returned HTTP 403. Consolidated third-party hosts consistently attribute a three-day ordinary window to Section 21, but per the issue this may not be printed until confirmed against the official Act text. Remains `[NEEDS SOURCE]`. |         Yes         |
| PERKESO claim deadline                     | **Confirmed as unquantifiable from a source.** The 12-month figure appears only on third-party blogs, job sites and a Meta AI social post, never on an official PERKESO page. Leave unquantified.                                                                                                                                                             |    No (settled)     |
| KWSP without-nomination claimant list      | **Not resolved at source.** `kwsp.gov.my` still returned HTTP 403 and web.archive.org is not reachable by the tools used. Corroborating Malaysian news and blogs describe a spouse then children then parents hierarchy with **no siblings**, which matches the version already used in this note, but the official page's internal contradiction could not be reopened to settle it. |         Yes         |
| KWSP 9KM (AHL) form fields                 | **Not resolved.** The form itself could not be opened (`kwsp.gov.my` HTTP 403, archive unreachable). Field match against prototype screen 2 still unconfirmed.                                                                                                                                                                                                |         Yes         |
| EPF 2024 death withdrawals                 | **Not resolved.** Recorded in `verified-figures.md`. `kwsp.gov.my` performance document returned HTTP 403; 2024 figure stays `[NEEDS SOURCE]` and the verified 2023 fallback stands.                                                                                                                                                                          |         Yes         |

## Sources

1. Jabatan Pendaftaran Negara, "Ordinary Registration of Death (Peninsular)", page last updated 19 August 2026, https://www.jpn.gov.my/en/services/death/ordinary-registration-of-death-peninsular/, accessed 2026-08-19. Supports the JPN precondition, both routes, the informant and collector lists, mandatory and conditional evidence, and the no-fee statement.
   - Bahasa Malaysia original, "Pendaftaran Biasa Kematian (Semenanjung)", https://www.jpn.gov.my/ms/perkhidmatan/kematian/pendaftaran-biasa-kematian-semenanjung/, accessed 2026-08-20. Confirms the document list verbatim and the correct form codes JPN.LM02 (Pin.1/11), JPN.LM09 and JPN.LM10. The English page's "NRD.LM02" is a machine-translation of the department code and is not the form's identifier.
2. Jabatan Pendaftaran Negara, "Death" services index, https://www.jpn.gov.my/en/services/death/, accessed 2026-08-19. Supports the existence of Ordinary, Late and Delayed Registration procedures and separate Peninsular, Sabah and Sarawak tracks.
3. Employees Provident Fund, "Death Withdrawal", https://www.kwsp.gov.my/en/member/account-centre/death, accessed 2026-08-19 via the Internet Archive because kwsp.gov.my blocks automated retrieval. Supports nomination and non-nomination claimant rules, the Muslim and non-Muslim nominee succession rules, the payment staging table, and all six Death Assistance conditions.
4. PERKESO, "Employment Injury Scheme (LINDUNG PEKERJA)", https://www.perkeso.gov.my/en/our-services/protection/employment-injury-scheme.html, accessed 2026-08-19. Supports Dependants' Benefit rates, distribution shares, and the Funeral Benefit amount and effective date.
5. PERKESO, "Invalidity Scheme (LINDUNG PEKERJA)", https://www.perkeso.gov.my/en/our-services/protection/invalidity-scheme.html, accessed 2026-08-19. Supports Survivors' Pension conditions and the full and reduced qualifying periods.
6. PERKESO, "Senarai Semak Dokumen Permohonan Borang 34, Butiran Notis Dan Tuntutan Faedah", dated 9 December 2024, https://www.perkeso.gov.my/images/borang/2024/091224-SS-DokumenBorang34.pdf, accessed 2026-08-19. Supports the death notice evidence tiers, the funeral receipt condition, submission channels, and PERKESO's stated right to reject late or incomplete applications.
7. PERKESO, "Benefit Application", https://www.perkeso.gov.my/en/uncategorised/936-benefit-application.html, accessed 2026-08-19. Supports the counter submission instruction and the Portal LINDUNG FAEDAH online Death Notice channel.
8. PERKESO, "Senarai Semak Dokumen Tuntutan Faedah Orang Tanggungan dan Pengurusan Mayat", https://www.perkeso.gov.my/images/borang/FOT%20DAN%20FPM/SenaraiSemak_fpm.pdf, accessed 2026-08-19. Supports Borang 24, Borang 26, Borang BKA-1, the sole widow declaration for Muslims, and the in-person original-documents requirement.
9. MyGovernment, "Funeral Management Assistance (Khairat Kematian) in Malaysia", updated 30 July 2026, https://www.malaysia.gov.my/en/personas/caretakers-to-older-parents/mengurus-kematian-ibu-bapa/funeral-management-assistance-khairat-kematian-in-malaysia, accessed 2026-08-19. Independently corroborates the EPF and PERKESO conditions and amounts.
