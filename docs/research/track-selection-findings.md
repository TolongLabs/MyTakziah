# Track Selection: Critical Findings

**Owner:** TODO: assign
**Status:** Draft for the team decision meeting
**Last Updated:** 2026-08-18
**Feeds:** the one-track decision, then Sections 1, 2, 5 and 6 of the idea submission

> Prepared for the 18 August 2026 team meeting. Nothing here is a decision. The team
> chooses the track and records it in `../decisions.md`.

---

## How to Read This

Each track below is narrowed to one lead angle and one named runner-up, then examined for
pain points, aim and objectives, industry and policy context, and the real competitor
landscape. Every track also carries a section arguing **against** picking it. A track that
survives its own rejection case is the one worth choosing.

Confidence is marked inline. `[ASSUMPTION]` is a team judgment, not a fact.
`[NEEDS SOURCE]` means the claim could not be verified before this meeting and must not
enter the submission in its current form. `[VERIFY]` means the finding comes from
secondary reporting and the primary source should be opened before the claim is quoted.

---

## Decision Context That Changes the Answer

Four facts about the competition reframe the choice. They are not track-specific, but they
change which track is worth picking.

### 1. The Rubric Everyone Is Optimising For Is Only 70% of the Score

The four judging criteria are Innovation 30, Feasibility 25, Social/Economic Impact 25,
and Submission Quality 20. Those weights govern the **expert evaluation**, which is 70% of
the final score. The remaining 30% is a popular vote by registered students.

> "70% of will be from evaluation ... So from your submission, how innovative is your
> submission? That accounts to 30% out of the 70% ... 30% will come on popular [vote]"
> (`../source/2026-08-03-participant-briefing-transcript.md`, `[00:33:22]` to `[00:32:07]`)

> "Experts contribute 70% of the final score, focusing on innovation, feasibility, social
> and economic impact, and pitch quality. Student voting accounts for 30%, ensuring a fair
> process through secure, limited votes on the Collaxus platform. Voting opens on August
> 7th for registered students."
> (`../source/briefing-video-transcript.md`, `[00:03:24]`)

**Implication for track choice.** A track whose idea a stranger can understand in five
seconds is worth real marks. This does not mean picking the most popular idea. It means an
abstract idea must be given a concrete, human framing on the canvas or it forfeits part of
the 30%.

### 2. Voting Opened on 7 August. Every Day Before Submission Costs Vote Exposure

Voting has been open for 11 days as of today. A submission uploaded on 19 August has more
days on the voting platform than one uploaded at 11:58 PM on 21 August. Submitting early
is worth marks, and the organizer said so directly.

> "Between 3rd and 21st, if you all finished your innovation canvas, you can submit as soon
> as possible. You don't have to wait until 21st August."
> (`../source/2026-08-03-participant-briefing-transcript.md`, `[00:29:24]`)

**Implication.** The internal cutoffs in `../competition/timeline.md` should be pulled
forward, not treated as comfortable. Track choice tonight is the gate on everything else.

### 3. The Organizer Named the Tool He Wants for Three of the Four Tracks

In the live briefing the organizer went off-script and described specific tools he believes
do not exist. Twice he answered his own question with "No."

| Track | What the organizer asked for                                                                                                                                                    | Citation                     |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 1     | "a tool which can say which government agencies using which AI model. For example, do we know now? **No.**" He also asked for "risk classification of government platforms."    | `[00:13:57]`, `[00:14:10]`   |
| 2     | "you can use voice to engage the government services ... it will tell you where to submit what form, the AI platform can also fill up most of the basic requirements"           | `[00:14:53]` to `[00:15:13]` |
| 3     | "is there a tool recommending me which area of study should I take ... 500 microelectronics engineers are being sought ... in Penang for example. Is that those tools? **No.**" | `[00:16:01]` to `[00:16:33]` |
| 4     | rural voice commerce, going cashless, and guiding a person from a small town in Johor to Kuala Lumpur by bus "and how can he arrive safely"                                     | `[00:17:50]` to `[00:18:42]` |

**Implication.** An idea that visibly answers a question the organizer asked out loud is
easier to score on Innovation than one that does not. This is not a reason to be
unoriginal. It is a reason to make the answer explicit in Section 4.

### 4. Finalists Must Physically Attend the Kuala Lumpur Grand Final

> "Only those students who are able to attend the final will will be selected for the
> final." (`[00:25:28]`) Travel and accommodation are not sponsored, though the organizer
> said there will be a cash fund or prize for all top 10 (`[00:38:26]`).

**Resolved 18 August 2026.** All four members can attend the physical grand final in Kuala
Lumpur on 23 September 2026. This gate is cleared and is recorded in `../decisions.md`.

---

## What Layak Is

Two of the four members, **Adam and Chaos**, built Layak as Team T010NG and won **Grand
Champion, Open Category** at the Project 2030 MyAI Future Hackathon. It is referenced
throughout this document, so it is described here once.

- **Repository:** https://github.com/TolongLabs/Layak
- **Live demo:** https://layak.vercel.app
- **Demo video:** https://youtu.be/XuFsiMNjknA

**The problem it attacks.** Malaysia's aid landscape is fragmented across scores of schemes
and ministries. Citizens rarely know what they qualify for because the effort to search and
apply for each one separately is not worth it.

**What it does.** A citizen uploads their identity document, an income document and a utility
bill, or fills a manual form if they would rather upload nothing. An agent then runs six
visible steps, streamed live: extract, classify, match, optimise strategy, compute upside,
generate. It returns schemes ranked by estimated annual ringgit upside, plain-language reasons
the citizen appears to qualify, a pre-filled draft application packet for each, required
contributions surfaced separately so the headline number stays honest, and a grounded chatbot
answering follow-up questions in English, Bahasa Malaysia or Mandarin.

**The design choice that matters most for this competition.** Every number and every rule
cites the government PDF it came from, and deterministic rule modules decide eligibility
rather than the language model. It was built as a direct countermeasure to the MyGOV and NYC
MyCity chatbot failures. Nothing is submitted on the citizen's behalf: every packet carries a
**DRAFT, NOT SUBMITTED** watermark.

**Why that last point matters tonight.** Track 02 asks for transactions completed _end to
end_. Layak deliberately stops one step short of that. Closing that gap is precisely the
innovation delta a Layak continuation would have to claim.

**The portable part.** The reusable asset is not the aid domain. It is the **method**: a
grounded rule engine, plus source-cited provenance, plus pre-filled output. The ranked-ideas
pass below found that the top idea in three of the four tracks can reuse that method.

---

## How Each Track Was Scored

Each track is scored out of 100 against the judged weights, then given a separate vote
appeal rating that is used only to break a close call, per the team's instruction. Two
bonus flags are recorded but not scored:

- **Organizer Signal:** does the lead angle answer a question the organizer asked aloud?
- **Team Right to Claim:** can a team of 2 Computer Science and 2 Actuarial Science students
  credibly claim this problem as theirs?

The full scorecard is in `track-scorecard.md`. The reasoning is below.

---

## Track 01: Fostering Trustworthy and Ethical AI in the Public Sphere

> This section was revised after an independent second-opinion research pass. The naive
> version of this track, "build a public register of government AI," was materially weakened
> by evidence found in that pass. See "Where the Two Research Passes Disagreed" at the end
> of this document.

### Narrowed Scope

**Lead Angle. An AI decision receipt, not a register.** At the moment a citizen receives a
consequential outcome from a government service, they are told that AI was involved, what
its role was, which agency and system is responsible, what risk tier it carries, and they
are given one button to request human review and one to report a problem.

**The exact moment of failure.** A citizen believes an outcome is wrong. They cannot tell
whether AI influenced it, which system was responsible, or how to get a human to look again.
There is no disclosure point anywhere in the journey, so there is nothing to name, question,
or appeal.

**Why not just a register.** A searchable "which agency uses which AI model" directory
matches the organizer's words almost literally (`[00:14:10]`), which is tempting. It is the
runner-up angle, not the lead, because Malaysia's National AI Action Plan 2026-2030,
published 28 July 2026, already proposes an AI Trust Function maintaining a public AI
incident registry and a public Trust Barometer dashboard. A student team proposing a
register in August 2026 risks pitching a weaker version of something the government
published a plan for five weeks ago. The decision receipt sits in the gap that plan leaves
open: case-level notice and a redress journey for the individual.

**Runner-Up Angle.** The searchable public register of citizen-facing government AI systems,
with agency, purpose, model, data used, risk tier and assessment date. Directly matches the
briefing, but less differentiated for the reason above.

### Pain Points

**1. Public-sector AI exposure is expanding faster than citizen visibility.** In February
2025 the Ministry of Digital announced AI training and Google Workspace with Gemini access
for up to 445,000 public officers, across infrastructure spanning 25 ministries, three State
Secretary Offices and 200 government agencies. This is evidence of adoption capacity, not
evidence that 445,000 officers make automated decisions, but it enlarges the oversight
surface considerably.

**2. Government AI has failed publicly three times, and the most recent failure is six days
old.**

| Date           | System                                                                           | What happened                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aug 2025       | MyGOV super-app AI chatbot                                                       | Disabled about one day after beta launch after naming the wrong Communications Minister and describing the Digital Ministry Secretary-General as "a famous Filipino actor and model"                                  |
| 19-20 Jul 2026 | PMX AI, an AI digital twin of the Prime Minister on WhatsApp, built by Zetrix AI | Offline within about a day of launch after viral responses, including answering "No" when asked whether Anwar Ibrahim should be re-elected, and emitting unrelated C# code                                            |
| 12 Aug 2026    | MyGOV AI chatbot, relaunched                                                     | Still wrong: unaware of the 10-year passport option, could not retrieve a SARA aid balance, did not recognise BUDI Diesel, named the wrong Menteri Besar of Negeri Sembilan, could not name the Speaker of Parliament |

In all three cases citizens learned about the failure from journalists, not from government.

**3. AI already informs decisions where liberty is at stake, without a clear statutory
basis.** Courts in Sabah and Sarawak have used AI sentencing recommendations since 2020, on
software from Sarawak Information Systems, applied to drug possession offences in Sabah and
rape and sexual assault offences in Sarawak. Lawyers objected that there was no proper
consultation and that the Criminal Procedure Code does not provide for it, one stating "I
think it's unconstitutional." The courts' position is that recommendations are non-binding.
`[VERIFY: this is 2020-2022 reporting. Confirm current programme status before citing it as
ongoing.]`

**4. Existing assurance is agency-facing, voluntary, and self-assessed.** The National
Guidelines on AI Governance and Ethics launched 20 September 2024 describe themselves as
voluntary. The Public Sector AI Adoption Guidelines and the GPAISA self-assessment tool
(`gpaisa.jdn.gov.my`, launched 27 February 2025) let agencies assess their own compliance,
social impact and mitigation using a prohibited / high / limited / minimal risk framework.
Both are built for agencies. Neither gives an affected citizen a case-specific notice,
explanation, or review route.

**5. The complaint and redress layers are not designed around algorithmic decisions.**
SISPAA, the integrated public complaints system, accepts complaints about unfair action,
delay and poor service, but its published categories do not identify an AI system, model
version, decision reference, or risk tier. Separately, section 3 of the Personal Data
Protection Act excludes Federal and State Governments from its application, so citizens
cannot assume the usual PDPA route covers government processing of their data.

**6. Trust is high but understanding is not, which makes the trust fragile.** Ipsos reported
in June 2025 that roughly seven in ten Malaysians trusted the government to regulate AI
responsibly, while its 2024 AI Monitor found only about six in ten connected Malaysian adults
claimed a good understanding of AI. These are online survey results, not administrative
statistics. `[VERIFY both at the Ipsos press releases before quoting a percentage.]`

**7. No complete public inventory of Malaysian government AI systems was found.** `[MARKED
UNVERIFIED: failure to find one is not proof that none exists. Check with AI Malaysia or on
the Kolaxus forum before asserting absence in the submission.]`

### Aim and Objectives

**Aim.** To let any Malaysian affected by an AI-assisted public service outcome know that AI
was involved, understand its role, obtain accountable human review, and contribute safely to
national AI risk monitoring.

**Objectives.**

1. Define the citizen-facing disclosure record for a government AI system, prioritising
   systems that influence eligibility, enforcement, health, education, taxation and licensing.
2. Specify the AI decision receipt issued at the point of a consequential outcome: system
   owner, purpose, model version where publishable, data categories, risk tier, limitations,
   and the human intervention available.
3. Apply the existing prohibited / high / limited / minimal framework through a transparent
   severity, likelihood and population-exposure methodology, with uncertainty and assessor
   identity disclosed.
4. Route case-specific review requests to the responsible agency and SISPAA, and send
   de-identified systemic signals to the AI Trust Function proposed in the national plan.
5. Publish aggregate measures, including reversal rate after human review and time to
   resolution, subject to privacy thresholds.

**One design rule worth stating on the canvas.** Citizen complaints may trigger reassessment
but must never directly determine a system's official risk score. Otherwise complaint volume,
organised voting, or simple misunderstanding would distort the classification.

### Industry and Policy Insight

Malaysia has moved fast and top-down, and the citizen-facing last mile is the part that does
not exist.

| Date                 | Development                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20 Sep 2024          | MOSTI launched the National Guidelines on AI Governance and Ethics, seven principles, voluntary                                                                                                                             |
| 12 Dec 2024          | National AI Office launched under the Ministry of Digital                                                                                                                                                                   |
| 5 Feb 2025           | Data Sharing Act 2025 (Act 864) received royal assent, regulating data sharing between Federal agencies and Federal statutory bodies `[VERIFY commencement date: sources differ between 20 February 2025 and a later date]` |
| 27 Feb 2025          | Public Sector AI Adoption Guidelines and the GPAISA agency self-assessment tool launched                                                                                                                                    |
| 10 Jul to 1 Aug 2026 | Pre-drafting public consultation on a proposed AI Governance Bill covering central oversight, risk-proportionate regulation and incident reporting. Not yet enacted                                                         |
| 28 Jul 2026          | AI Malaysia Berhad institutionalised, replacing NAIO. AI Safety Institute announced. National AI Action Plan 2026-2030 published                                                                                            |

**What this means for an idea pitched today.** The direction is set: Malaysia is moving from
voluntary ethics principles toward central oversight, risk tiers, technical assurance and
incident reporting. So the winning pitch is not "Malaysia should create an AI registry,"
because the government has already said that. It is closer to: here is the missing
citizen-facing last mile connecting GPAISA, MyGovernment, SISPAA and the forthcoming AI
Trust Function, at the exact moment an AI-assisted decision affects a person.

### Market and Competitor Analysis

| Player                                         | Type                            | What It Does                                                                                                                 | Where It Stops                                                                                                               |
| ---------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GPAISA (JDN)                                   | Malaysian government            | Structured agency self-assessment across seven ethical principles, social impact, risks and mitigation, with four risk tiers | Agency-facing self-assessment. No case-specific citizen notice, explanation or review route                                  |
| AIGE Guidelines, Sep 2024                      | Malaysian policy                | Seven responsible-AI principles                                                                                              | Explicitly voluntary. Written for officials                                                                                  |
| National AI Action Plan 2026-2030, Jul 2026    | Malaysian roadmap               | Proposes an AI Trust Function with testing, certification, and a public AI incident registry, plus a public Trust Barometer  | A roadmap capability, not a demonstrated case-level citizen interface. No decision receipt or human-review journey described |
| AI Governance Bill, consultation Jul 2026      | Malaysian draft law             | Proposes central oversight, risk-proportionate regulation, incident reporting                                                | Not enacted. Regulator-facing                                                                                                |
| MyGovernment portal                            | Malaysian government            | Citizen gateway to services by life event                                                                                    | Does not disclose whether AI influences any given service                                                                    |
| SISPAA and MyGCC                               | Malaysian government            | Cross-government complaints, enquiries, suggestions                                                                          | Captures generic dissatisfaction, not an AI-specific evidence package tied to a named system and decision                    |
| UK Algorithmic Transparency Recording Standard | International, closest analogue | Public records of algorithmic tools, mandatory for central departments from Feb 2024                                         | System-level transparency. Not a case-specific receipt linking an adverse outcome to human review                            |
| Netherlands Algoritmeregister                  | International                   | Public algorithm register                                                                                                    | Publication without a contest pathway                                                                                        |
| Singapore AI Verify                            | International                   | Testing framework and toolkit                                                                                                | Developer and enterprise assurance, not a public register of state AI                                                        |

**The gap in one sentence.** No Malaysian instrument closes the loop from AI system
disclosure through a case-linked explanation to human review, tracked resolution, and
anonymised national risk monitoring.

### Strongest Reason to Reject This Track

**Government pre-emption.** In July 2026 alone Malaysia consulted on an AI Governance Bill,
institutionalised AI Malaysia, announced an AI Safety Institute, and published a national
plan calling for risk classification, an AI Trust Function and a public incident registry. A
generic register or ethics scorecard now looks like a weaker student version of something
already committed to. This is the single strongest argument against the track, and it is
what forced the lead angle away from a register.

**Institutional dependency.** Accurate disclosure requires agencies and vendors to reveal
system purposes, model versions and assessment results. Human review requires agencies to
appoint empowered reviewers. Some information will legitimately be withheld for security or
enforcement reasons. Without a disclosure mandate, the concept is an attractive but empty
interface, and the Feasibility section has to say so.

**Impact is indirect, and the organizer asked for direct impact.** He said "How many people
will this impact? Say example, this might impact a million students or 100,000 students"
(`[00:21:44]`). Governance value is diffuse and hard to state crisply against a 25% weight.

**Crowding risk: contested.** The independent research pass rated crowding **high, 4 out of
5**, reasoning that the subject is fashionable, attractive to CS students, and that the
briefing handed teams the exact phrases "risk classification" and "which agency uses which
model," so many teams will produce traffic-light dashboards and AI complaint portals. The
first pass had assumed crowding was low because the track needs policy literacy. Both are
judgments. `[ASSUMPTION: no data on actual submission distribution is available to us.
Consider asking on the Kolaxus forum.]`

### Vote Appeal

**3 out of 5.** "Why was my aid or licence rejected, and can a human check it?" is relatable.
It is still less immediately emotional than cost of living, jobs, health, or transport. The
canvas must lead with the citizen's question, not with governance vocabulary.

### Fit for This Team

**Strong, and the actuarial half is not decorative.** The computer science students can
specify the inventory fields, model traceability, data flows and integration with
MyGovernment and SISPAA. The actuarial students have a real role: frequency, severity and
exposure classification; credibility weighting when complaint data is sparse; minimum data
thresholds and confidence intervals; time-to-resolution survival analysis; calibration and
outcome-disparity monitoring; and the trigger thresholds that let complaints prompt
reassessment without letting complaint volume set the official score.

**The honest limit.** Without verified agency data, actuarial modelling cannot infer whether
an opaque system is fair. The team should pitch a measurement and assurance framework, not
claim to compute precise risk from public sentiment. The team also has no law or public
administration member, so statutory rights and disclosure exemptions should stay high level.

---

## Track 02: One-Stop AI Assistant for End-to-End Government Services

### Narrowed Scope

**Lead Angle. One life event, three agencies, information given once.** Pick a single life
event that triggers several government transactions across different agencies, and complete
the whole bundle from one conversation. The official statement names this exactly: "without
re-entering the same information across different agencies." That is the once-only
principle, and it is the sharpest reading of the track.

**The strongest candidate life event: bereavement.** A death triggers a registration at JPN,
then a death withdrawal at KWSP, then survivor or funeral benefits at PERKESO. All three are
federal, which matters because the Data Sharing Act 2025 covers Federal agencies and Federal
statutory bodies. The survivor is typically an older spouse. Malaysia recorded 198,992
deaths in 2024 with a median age at death of 69, and DOSM's 2024 internet-activity data
recorded "interacting with government organisations" at 33.6% for people aged 60 and over
against 38.9% overall. KWSP's discretionary RM2,500 Death Assistance additionally requires
the death-withdrawal application to reach KWSP within six months. `[VERIFY every figure and
rule in this paragraph at source before it enters the submission.]`

**The exact moment of failure.** The survivor leaves JPN holding a death certificate and no
personalised list of what they can now claim, by when, or with what documents. They then
re-disclose the deceased's identity, date of death, relationship and bank details separately
to KWSP and to PERKESO. The state already holds most of it.

**Runner-Up Angle.** First-time home-based food seller: registers with SSM, then stalls at
local-authority licensing, food-handler certification, tax and social protection. Higher
economic upside, but it depends on state and local-authority integration, which is much
weaker than the federal-only scope above.

**A third framing worth considering, and the reason this track may suit this team best.**
The team's existing Layak work is an agentic concierge that reads a citizen's documents,
applies a hard-coded rule engine for Malaysian assistance schemes, and produces a pre-filled,
source-cited draft packet. That architecture transfers to a bereavement or any other
life-event bundle almost unchanged. See "Fit for This Team" below.

### Pain Points

**1. Malaysia has digitised individual services without completing the cross-agency journey.**
The 13th Malaysia Plan reported more than 14,273 online services by December 2024 and 88.7%
of federal online services classified as end-to-end, while explicitly diagnosing siloed,
non-user-friendly systems and weak interconnection between agency processes. The remaining
problem is orchestration, not putting another form online.

**2. The AI front door has failed publicly twice, and the second failure is six days old.**
The MyGOV chatbot was disabled about one day after its August 2025 beta launch. It was
relaunched in early August 2026 with what the Digital Ministry described as "Agentic AI
capability." As documented on 12 August 2026 it was still unaware of the 10-year passport
option, could not retrieve a SARA aid balance, did not recognise BUDI Diesel, and named the
wrong Menteri Besar of Negeri Sembilan.

**3. The single gateway is often a gateway to somewhere else.** In January 2026 the Ministry
described MyGOV's then 38 services across 13 agencies as covering inquiries and direct
links, and stated MyGOV did not replace existing agency applications. It reached 51 services
across 19 agencies and 2.2 million users by 5 June 2026. `[NOTE: an earlier secondary source
reported 44 services across 16 agencies as of February 2026. Use the Ministry of Digital
statements, and state the figure with its date.]`

**4. The government has itself promised the fix, which is both an opportunity and a threat.**
On 27 February 2025 the Digital Minister announced MyGOV autofill and a 24/7 intelligent
chatbot. GovTech's public product page lists TanyaKerajaan at 40% development for Q4 2026,
MyCitizenProfile at 15% for Q1 2027, and BorangMy as ready. Those three components are
precisely what most teams will propose.

**5. Quantified re-entry burden.** `[NEEDS SOURCE]` No Malaysian measurement of how many
times a citizen re-enters the same data, or what it costs them, was found. Do not invent
one. Let the 13MP diagnosis and the specific life-event walkthrough carry the weight.

### Aim and Objectives

**Aim.** To let a Malaysian complete every government transaction triggered by one life event
through a single consented conversation, supplying verified information once, with the
assistant never asserting a rule it cannot cite and never making the entitlement decision.

**Objectives.**

1. Select one life event and map every agency, form, document and deadline it currently touches.
2. Authenticate through MyDigital ID and reuse the verified source record rather than
   requesting another upload at each step. Specify what is captured once, what is reused,
   what consent is required at each agency boundary, and what is never stored.
3. Convert published agency rules into an auditable, deterministic eligibility checklist that
   explains why each claim may be relevant. The agency retains the final decision.
4. Pre-fill each agency's submission, highlight unresolved evidence, and require the user to
   review and approve every declaration. Provide Bahasa Malaysia first, voice and large type,
   and a human handoff when the assistant cannot resolve an exception.
5. Measure the pilot on repeated fields eliminated, claim completion time, incomplete
   submissions and missed-deadline prevention, not on conversation counts.

### Industry and Policy Insight

Malaysia has built the identity layer, the data rail and the shopfront. What is missing is
the orchestration between them for any one journey.

| Date        | Development                                                                                                                                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27 Feb 2025 | Public Sector AI Adaptation Guidelines launched. Minister announces MyGOV autofill and a 24/7 intelligent chatbot                                                                                                                                                                      |
| 28 Apr 2025 | Data Sharing Act 2025 (Act 864) takes effect, creating a structured process for secure data requests between federal agencies. Gazetted 20 February 2025. It creates governance for sharing; it does not itself prove production APIs exist or grant an AI agent authority to transact |
| 31 Jul 2025 | 13MP targets 95% end-to-end federal online services by 2030, a single gateway via MyDigital ID, and reduced duplication                                                                                                                                                                |
| 11 Oct 2025 | Budget 2026 allocates a reported RM20 million for further MyGOV development                                                                                                                                                                                                            |
| 10 Feb 2026 | MyGDX reported in use by 81 government agencies across 49 integrated systems, having processed more than 65 million API transactions                                                                                                                                                   |
| 5 Jun 2026  | MyGOV reaches 2.2 million users, 51 services, 19 agencies                                                                                                                                                                                                                              |
| 29 Jun 2026 | Malaysia Digital 2030 reaffirms the 95% target and RM4.5 billion in intended public-sector digitalisation savings                                                                                                                                                                      |

**Correction to an earlier reading.** A first pass concluded that "Malaysia has not built the
exchange layer." That is wrong. MyGDX is the exchange layer and it is operating at scale.
The correct statement is that the rails exist and no one has assembled them into a complete
citizen journey. Propose reusing MyGDX. Do not propose another central citizen database.

### Market and Competitor Analysis

| Player                                                     | Type                            | What It Does                                                                                               | Where It Stops                                                                                                                                                                   |
| ---------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MyGOV app                                                  | Malaysian government            | 2.2m users, 51 services, 19 agencies as of Jun 2026, AI chatbot with claimed agentic capability            | Phased integration. Does not expose a cross-agency life-event journey. Does not replace agency systems. Still factually wrong on recent policy as of 12 Aug 2026                 |
| MyGovernment portal and MyGCC                              | Malaysian government            | Organises 400-plus services by persona and life event; central enquiries and complaints                    | Helps users find and ask about services. Does not reuse one verified record to submit several claims                                                                             |
| GovTech roadmap: TanyaKerajaan, MyCitizenProfile, BorangMy | Malaysian government, in build  | AI guidance, reusable profile data, digital forms. Listed at 40%, 15%, and ready                           | Horizontal components, not an operational cross-agency workflow. Their existence destroys the novelty of a generic chatbot-plus-autofill proposal                                |
| MyDigital ID and MyGDX                                     | Malaysian government            | Identity authentication and secure inter-agency data exchange, 81 agencies, 65m+ API transactions          | Rails. They do not tell a citizen what to do, gather missing evidence, submit claims, or track outcomes                                                                          |
| PADU                                                       | Malaysian government            | Central household socio-economic database                                                                  | A data store, not a transaction surface. Criticised for duplicating EPF, STR and LHDN data                                                                                       |
| Individual agencies, for example JPN, KWSP, PERKESO        | Malaysian government            | Each performs its authoritative function well                                                              | Each stops at its own institutional boundary, leaving the citizen to bridge the gap                                                                                              |
| MYEG                                                       | Malaysian private               | Real-time government searches, renewals and payments for contracted services                               | Contracted services only, not universal workflows                                                                                                                                |
| UK Tell Us Once                                            | International, closest analogue | A registrar-issued reference lets a family report a death once to most central and local government bodies | Mainly notifies and cancels records. Does not itself make benefit claims                                                                                                         |
| Singapore LifeSG, India MyScheme, Estonia X-Road           | International                   | Life-event bundling, scheme matching, true once-only exchange                                              | The models Malaysia is heading toward. Singapore GovTech reported only around 20% of visitors used its eligibility checker, a caution against over-engineering the questionnaire |

**The gap in one sentence.** Malaysia has service directories, an identity layer, a working
data exchange, agency forms and transaction portals, but no verified citizen journey that
turns one trigger event into consented cross-agency notification, pre-filled claims and a
single status timeline.

### Strongest Reason to Reject This Track

**The generic version of this idea is already government policy and partly built.** The
Minister announced intelligent MyGOV assistance and autofill in February 2025. GovTech
publicly lists TanyaKerajaan, MyCitizenProfile and BorangMy. A submission that proposes "a
multilingual AI chatbot that tells you which form to use and fills it in" is a restatement of
the briefing, not an innovation, and a judge can say so in one sentence.

**Crowding risk is the highest of the four tracks.** The independent second opinion rated it
**very high, 4.5 out of 5**, on the reasoning that this track uses the most familiar
technology and the organizer effectively supplied the voice-plus-autofill concept, so many
canvases will look identical in a five-second scan. That compresses both the Innovation score
and popular-vote differentiation. `[ASSUMPTION: no submission distribution data is available.]`

**Hard questions a canvas can hand-wave and a judge will not.** Legal authority to act for a
deceased person, nomination and estate exceptions, false-claimant risk, which agency is
responsible when the assistant gives wrong advice, data-sharing approval, and the documents
that must still be presented in original form.

**Reuse must be handled honestly.** See below.

### Vote Appeal

**4 out of 5.** "Do not make a grieving family repeat the same loss to three agencies" is
immediately understandable and emotional. Every Malaysian student has also re-typed a MyKad
number or watched a parent struggle with a form. The idea survives a five-second glance
without reframing work.

### Fit for This Team

**Strongest on execution, by a wide margin, and this is a team-specific factor the
independent second opinion did not have on its first pass.**

**Layak** (https://github.com/TolongLabs/Layak) is a grand-champion agentic AI concierge for
Malaysian social-assistance schemes, built by **Adam and Chaos**, two of this team's four
members, for the Project 2030 MyAI Future Hackathon, Open Category. It carries:

- a cited evidence base on Malaysian government service fragmentation, including the STR,
  JKM and LHDN rule sources, PADU criticism, Ihsan MADANI, and the MyGOV chatbot failure;
- a working architecture of document intake, a hard-coded rule engine, ranked results and a
  pre-filled draft packet where every claim cites its source document;
- a poster, pitch deck and demo video;
- a competitor analysis covering SupportGoWhere, MyScheme, USA.gov Benefit Finder, the NYC
  MyCity chatbot failure and the GOV.UK Design System.

That architecture transfers to a life-event bundle with little structural change. The
organizer permits reuse directly: "If you have done a project similar, yeah, you can submit
or improvise and submit" (`[00:24:03]`), and confirmed optional videos and prototypes are
considered within the 20% Submission Quality weight: "if you do some additional videos and
all those, yeah, we will consider in the 20%" (`[00:31:49]`).

**Three conditions on using it.**

1. **Authorship is confirmed and must be stated accurately.** Adam and Chaos built Layak;
   the other two members did not. Section 8 can claim the credential honestly by saying
   exactly that. Do not let the phrasing imply all four built it.
2. Layak solves aid **discovery and pre-filling**. Track 02 asks for **end-to-end completion
   without re-entry**. The reframe is legitimate and small, but it must actually be made.
3. The actuarial contribution here is weaker than in Tracks 01 and 04. Mortality and pricing
   are irrelevant. The defensible actuarial role is the auditable rule map, claims-process
   risk, workload forecasting and benefit take-up measurement. Do not staple the word
   "actuarial" onto a chatbot.

### Which Journey Inside Track 02, and Why Not Simply Continue Layak

This question was put directly by the team and deserves a direct answer. The first synthesis
led with bereavement without properly testing it against the option the team already owns.
That was a gap in the analysis, not a considered rejection of Layak. A dedicated research
pass was run on this question alone, with the Layak context supplied, and it evaluated eight
candidate journeys.

**The short answer.** Continuing Layak is viable and finishes third of eight, five points
behind the leader. It survives on one condition, stated below, and fails without it.

#### Ranked Candidate Journeys

Scores model the 70/30 split and are comparative, not predicted judging outcomes.

| Rank | Journey                                                                                                         |  Score | Track Fit | Crowding      | Layak Reuse, Architecture and Content | Federal Fit | Vote |
| ---: | --------------------------------------------------------------------------------------------------------------- | -----: | --------: | ------------- | ------------------------------------- | ----------: | ---: |
|    1 | **Bereavement.** JPN death registration, then KWSP death withdrawal, then PERKESO survivor and funeral benefits | **89** |       5/5 | Low to medium | 4/5 and 1/5                           |         5/5 |  4/5 |
|    2 | **OKU registration and benefit activation.** JKM OKU card, then the benefits it unlocks                         | **87** |     4.5/5 | **Low**       | 4/5 and 3/5                           |       4.5/5 |  4/5 |
|    3 | **Layak continuation.** Federal assistance, upgraded from draft packet to submitted and tracked                 | **84** |       4/5 | **High**      | **5/5 and 5/5**                       |         5/5 |  4/5 |
|    4 | **Change of address once, updated everywhere.** JPN, JPJ, SPR, LHDN                                             |     80 |       5/5 | Low           | 3/5 and 1/5                           |         5/5 |  4/5 |
|    5 | **Job loss.** PERKESO Employment Insurance System, MYFutureJobs, EPF                                            |     78 |     3.5/5 | High          | 4/5 and 2/5                           |         5/5 |  5/5 |
|    6 | **New baby.** JPN birth registration, KWSP nomination, tax relief, childcare                                    |     76 |       4/5 | **Very high** | 3/5 and 2/5                           |         4/5 |  5/5 |
|    7 | **Retirement or turning 60.** EPF withdrawal, JKM Warga Emas, concessions                                       |     70 |     3.5/5 | Low           | 4/5 and 4/5                           |         4/5 |  2/5 |
|    8 | **Micro-business start-up.** SSM, local licensing, LHDN, PERKESO, e-invoicing                                   |     68 |     4.5/5 | **Very high** | 3/5 and 1/5                           |     **2/5** |  5/5 |

**Crowding judgment.** The single most obvious idea in this track is **the new baby journey**.
It is the canonical "tell government once" life event, it is positive and easy to pitch, and
MyGovernment already groups "Pregnant Women" and "Parents to Babies" as personas. The
micro-business journey is the business-side equivalent and may be nearly as crowded in a
business innovation competition. Bereavement and OKU differentiate substantially better.

**Micro-business fails on a structural point, not a judgment call.** Local authority licensing
is indispensable to that journey and sits outside the Data Sharing Act 2025, which covers
Federal agencies and Federal statutory bodies only. MalaysiaBiz also already claims to be a
single gateway for registration and selected licence applications.

#### The "Is This Not Just X" Test

Every candidate faces one question from a judge. This is the answer for each.

| Journey            | What a judge will name                                                                                | Does the answer survive                                                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bereavement        | MyGovernment Death and Inheritance pages, JPN death registration, EPF Death Withdrawal, PERKESO forms | **Strongly.** Each explains or processes one agency at a time. None turns a JPN-verified death into a single consented KWSP and PERKESO case with reused evidence, deadlines and consolidated status                             |
| OKU                | MyDaftarOKU and SMOKU, MyGovernment OKU persona                                                       | **Strongly.** MyDaftarOKU registers the status. It does not activate the downstream JKM allowance, road tax exemption and tax treatment as one workflow                                                                          |
| Layak continuation | Ihsan MADANI, PADU, TanyaKerajaan, **and Layak itself**                                               | **Conditional.** It survives only if the new submission actually submits and tracks applications. Another eligibility recommender, comparison table or pre-filled draft is too close to both Ihsan MADANI and the previous Layak |
| Address change     | MyDigital ID and MyGOV profile, JPN, MySPR, MyTax                                                     | Mostly. A judge can reasonably ask why this needs AI rather than a structured "update everywhere" button                                                                                                                         |
| Job loss           | PERKESO EIS and MYFutureJobs                                                                          | **Weak.** PERKESO already links EIS claims to MYFutureJobs enrolment. Risks reading as a conversational skin, and may be judged as Track 03 employment instead                                                                   |
| New baby           | JPN birth pre-registration, MyKid, MyGovernment parent journey                                        | Medium to weak. MyKid already embodies part of the record-once premise                                                                                                                                                           |
| Retirement         | EPF i-Akaun Age 60 Withdrawal, MyGovernment Retirees persona                                          | Medium to weak. The high-value transaction is already completed inside EPF                                                                                                                                                       |
| Micro-business     | MalaysiaBiz, EzBiz, MyTax                                                                             | **Poor.** MalaysiaBiz already presents itself as the single gateway                                                                                                                                                              |

#### What the Team Gives Up by Not Continuing Layak

This is a real cost, and it should not be waved away three days from the deadline.

- Maximum reuse of the STR, JKM, LHDN and i-Saraan rule corpus.
- An existing poster, pitch deck, demo video and a narrative proven to win.
- Two builders who can answer architecture and implementation questions under Q&A pressure.
- A grand champion credential demonstrating execution capability.
- Much lower factual research risk, which matters given this document's verification debt.
- More time for visual polish, which is where the Submission Quality 20% is won.

**Put a number on it.** Feasibility 25 plus Submission Quality 20 is 45% of the expert
assessment, which is **31.5% of the final score** after the 70% weighting. Layak reuse has
genuine scoring value, not merely convenience.

What the team gains by moving to bereavement or OKU is greater originality inside the most
crowded track, and a much clearer transition from information assistant to transaction
orchestrator.

#### The Strongest Argument for Continuing Layak, Argued Properly

A World Bank report published in January 2026 identifies **189 Malaysian social-assistance
programmes delivered by 26 ministries and agencies**, explicitly describing fragmentation,
duplication and difficulty navigating the system, and recommends database interoperability
and a social registry. That is close to a direct evidence statement for Track 02, handed over
by a source no judge will dismiss.

The scale is exceptional. SARA 2026 began with a reported 5 million household and senior
recipients and 3.1 million single recipients, with STR the required gateway for monthly SARA.

And the incumbents do not close the gap. PADU is a data and analytics foundation, not a
citizen transaction agent. Ihsan MADANI performs preliminary aid matching and links people to
application portals; its official description does not say it submits those applications.
TanyaKerajaan guides users to sources. Layak itself discovers eligibility and produces drafts
but explicitly stops before submission.

That leaves a defensible product gap, expressible in one line:

> MyGOV and Ihsan MADANI help citizens **find** assistance. This submits and tracks a
> selected federal assistance bundle, once, with cited rules and explicit approval.

**The condition.** To survive, a Layak continuation must demonstrate **three named federal
transactions actually submitted and tracked**, not 189 discoveries and not another draft
packet. If the team is unwilling to make that leap, this option should be dropped, because
without it a judge's "is this not Ihsan MADANI, and is this not your old project" lands.

#### Evidence for the Leading Journeys

**Bereavement.**

- Malaysia recorded **198,992 deaths in 2024**, up 1% on 2023, per DOSM's release of 16 October 2025.
- EPF approved **87,776 death withdrawal transactions worth RM3.20 billion in 2024**, against 84,673 and RM3.00 billion in 2023.
- The first handoff is still physical. JPN's Peninsular process has the hospital, PDRM or DBKL send the death record to JPN within seven working days, but the informant must still attend JPN with the burial permit or death register, the deceased's original identity document, their own identity document, and where relevant the medical cause of death document. Sabah and Sarawak procedures differ and must be treated separately.
- The same core evidence is demanded again downstream. PERKESO's survivor pension and funeral benefit checklist separately requires Forms 24 and 26, the deceased contributor's death certificate and identity documents, submitted at a PERKESO office.
- Money is time limited. EPF's RM2,500 discretionary death assistance requires the death withdrawal application within **six months**, where the member died before 60. PERKESO funeral assistance is currently up to RM3,000 for eligible contributors.
- `[UNVERIFIED]` No reliable Malaysian official study quantifying hours spent, repeated fields, missed-benefit rates or total unclaimed bereavement benefits was found. **Do not divide EPF death withdrawals by national deaths and present it as a take-up rate.** Not every deceased person was an EPF member, and claims can fall in a later year.

**OKU registration and benefit activation.**

- DOSM reported **805,509 registered persons with disabilities in 2024, 2.4% of the population**, in a release dated 11 December 2025.
- The live MyDaftarOKU form itself demonstrates the re-entry problem: it asks for MyKad or MyKid number, full name, marital status, children, multiple contact fields, permanent and correspondence addresses, city, postcode, state, religion, ethnicity and date of birth, plus a sized photograph.
- "Online" is not end to end. For a non-visible disability, MyDaftarOKU instructs the applicant to print the form, attend a health facility for certification, then submit it to a district welfare office.
- Registration unlocks material money: EPOKU at RM450 per month for a registered working OKU earning no more than RM1,500, and a 100% road tax exemption for an eligible vehicle.
- **A provenance argument the team could not invent.** MyGovernment's aggregated OKU page still shows a RM6,000 disabled-individual tax figure while LHDN's own YA2025 table lists **RM7,000**. One government page contradicts the agency of record. That is a concrete, checkable justification for Layak's date-effective, source-priority rule engine, and it is exactly the failure Layak's provenance layer was built to prevent.
- `[UNVERIFIED]` Do not estimate unregistered OKU by applying a global 15% prevalence figure to Malaysia's population. No sufficiently current Malaysian primary survey supporting that was found.

#### The Recommendation Inside Track 02

**Lead: bereavement.** Best literal fit to the track wording, entirely federal core agencies,
significant measurable money, relatively low crowding, and a survivable answer to the
"already exists" attack. It also converts Layak's provenance architecture from a nice feature
into a safety requirement.

**Second: OKU registration.** Equally strong differentiation, better direct reuse of the JKM
and LHDN content Layak already encodes, less emotionally delicate, and it comes with the
RM6,000 against RM7,000 contradiction as a ready-made argument.

**Third, and the deadline-safe fallback: Layak continuation**, repositioned ruthlessly around
three consented federal submissions rather than eligibility discovery.

**Scope discipline for whichever is chosen.** Define "end to end" as **submitted, receipted
and tracked**, not automatically approved. The agency keeps the decision. For bereavement,
exclude estate distribution, faraid and probate, banks, zakat and local burial management
from the first scope: they add religious, judicial, state, private sector and local authority
complexity that will damage the Feasibility score.

**How Layak's architecture maps across, whichever journey wins.**

| Layak component                     | Becomes                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| Multimodal document extraction      | Death certificate and relationship evidence, or OKU medical certification, extraction |
| Deterministic rule engine           | Claimant type, nomination, deadlines and required documents                           |
| Provenance layer citing source PDFs | The governing KWSP, PERKESO, JKM or LHDN rule attached to every claim                 |
| Sandboxed calculation step          | Estimated amounts, without letting the model invent arithmetic                        |
| "DRAFT, NOT SUBMITTED" watermark    | An explicit consent checkpoint and a signed transaction receipt                       |

---

## Track 03: Future Talent Ecosystem, AI for Employment and Skills

### Narrowed Scope

> **Revised after the ranked-ideas pass.** A later pass found that PERKESO launched
> MYFutureJobs Galaxy on 16 November 2025, an AI career-intelligence platform. That weakens
> the UPU angle below and promotes **KerjaBetul**, auditing an actual job offer before the
> student signs, to the strongest idea in this track. See "Ranked Ideas Inside Each Track".

**Lead Angle. The UPU ranking moment.** A demand-at-graduation forecaster for pre-university
students ranking their UPU choices. Not a career chatbot. A decision layer at one specific,
dated, national form.

**The exact moment of failure.** After UPU's eligibility check but before the applicant locks
their ranking. UPU tells the applicant what they can enter. It does not connect each eligible
programme to likely occupational demand in the state where they expect to work three to five
years later. For 2026/27 UPU offered 1,146 programmes to STPM and equivalent applicants, who
may list 12 choices and must complete at least six. MOHE received 109,866 bachelor-degree
applications in the previous cycle. `[VERIFY all four figures at MOHE and UPUOnline.]`

**Runner-Up Angle.** A workforce-planning simulator for university and polytechnic leaders,
forecasting occupation shortages against graduate output. Exploits the actuarial skill set
more strongly, but is far less relatable to student voters and faces institutional resistance.

### Pain Points

**1. The problem is underemployment, not unemployment, and getting this wrong will cost
marks.** DOSM reported on 22 May 2026 that Q1 2026 unemployment was 2.9%, while 35.2% of
employed people with tertiary education were in skill-related underemployment. Earlier data
put graduate unemployment at 3.2% in 2024 and skill-related underemployment at about 1.96
million degree and diploma holders, roughly 35.5%, in Q3 2025. **Any submission that opens
with a graduate unemployment crisis is factually wrong**, and a judge who knows the labour
data will mark it down. The defensible framing is mismatch and underemployment.

**2. Occupational demand changes within one degree cycle.** TalentCorp's impact study,
launched 18 November 2024, examined 949 roles across ten sectors accounting for about 60% of
GDP. It projected that around 620,000 employees, 18% of the workforce in those sectors, would
be significantly affected, identified 60 emerging roles, and mapped transitions for 84 highly
affected roles. "Affected" does not mean job loss.

**3. Malaysia's labour-demand signals answer different questions and are easy to misread.**
DOSM's online job series counted 626,861 advertised offerings in Q1 2026. Its separate
establishment survey counted 194,800 unfilled positions, of which only 48,700 were skilled.
These are not contradictory: one counts online advertisements, the other surveys registered
private-sector establishments. A student cannot safely treat the largest job-ad count as the
best degree.

**4. Policy targets are not vacancies.** The National Semiconductor Strategy targets training
and upskilling 60,000 highly skilled local engineers by 2030 with at least RM25 billion in
fiscal support. That is a **training target, not 60,000 verified open vacancies**. Reported
figures that Penang alone is short 50,000 engineers, and that Malaysia loses around 15% of
talent annually to brain drain, come from news reporting. `[VERIFY before quoting.]`

**5. Government already acknowledges fragmented workforce information.** The 13MP states that
workforce platforms will be rationalised into a single platform combining talent supply,
training readiness and workforce demand.

### Aim and Objectives

**Aim.** To reduce degree-to-occupation mismatch by giving UPU applicants an explainable,
risk-adjusted outlook for where each eligible programme is likely to lead at graduation.

**Objectives.**

1. Map UPU programmes to Malaysian occupations and skills using an auditable national taxonomy.
2. Forecast demand by occupation, state and graduation year using low, base and high scenarios
   with explicit confidence levels, never a single false point prediction.
3. Rank the applicant's own eligible choices against results, affordability and willingness to
   relocate. Rank their choices; do not prescribe one perfect degree.
4. Link each recommendation to concrete preparation steps in provision that already exists.
5. Evaluate on decision confidence, forecast calibration and skilled-employment outcomes, not
   clicks or enrolments.

### Industry and Policy Insight

Government is moving from generic employability toward integrated workforce planning, and has
explicitly claimed the obvious version of this idea. The National AI Action Plan 2026-2030
includes "Personalised Learning for Tertiary Education" with AI-supported academic and career
guidance, an individual AI-impact diagnostic, and a dynamic national career-and-skills
taxonomy. Budget 2026 provides for HRD Corp to offer three million training opportunities
using a reported RM3 billion, with PTPK financing of RM650 million targeting 25,000 trainees
in AI, EV and semiconductor fields. The Malaysia Digital Action Plan 2030, launched 29 June
2026, targets 500,000 high-value digital jobs by 2030, which is a target, not employment.

**Implication.** Policy alignment is excellent and novelty is correspondingly poor. "AI career
guidance" is now national policy, so it cannot be the innovation. The UPU decision moment and
the honest treatment of forecast uncertainty must be the differentiators.

### Market and Competitor Analysis

This is the densest incumbent field of the four tracks.

| Player                                           | Type                                                                                                       | What It Does                                                                                                                                | Where It Stops                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MYFutureJobs Galaxy, PERKESO**                 | Malaysian government, launched 16 Nov 2025                                                                 | An AI and machine-learning career-intelligence platform covering occupational profiles, skills, career pathways and labour-market forecasts | **This is the incumbent that changes the picture.** It substantially weakens the UPU angle above and kills any generic "AI recommends what to study" concept outright |
| MyMahir, TalentCorp                              | Malaysian government, closest incumbent                                                                    | 60-plus roles, 800-plus skills, identifies in-demand, emerging and highly affected roles, recommends training                               | Journey starts from a role, sector or skill. Does not combine UPU eligibility, programme cost, graduate supply and probabilistic regional forecasts                   |
| MyNext, TalentCorp                               | Malaysian government                                                                                       | Psychometric profiling, Career Explorer, matching to structured internships                                                                 | Connects current students to self-knowledge and internships. No state-level demand-at-graduation forecast for UPU choices                                             |
| MYFutureJobs, PERKESO                            | Malaysian government                                                                                       | National job portal, AI and ESCO-based skills matching, career readiness                                                                    | Starts from a present jobseeker or vacancy. Does not rank multi-year education choices or model graduate-supply saturation                                            |
| PERKESO, MYFutureJobs Galaxy launch, 16 Nov 2025 | https://www.perkeso.gov.my/images/kenyataan_media/2025/161125%20-%20%20PR%20MFJ%20KOTA%20BELUD%20Final.pdf |
| MYFutureJobs Galaxy platform                     | https://myfuturejobs.gov.my/myfuturejobsgalaxy/                                                            |
| MyCOL, TalentCorp                                | Malaysian government                                                                                       | 66 critical occupations across 18 sectors in the 2024/2025 edition, up from 37                                                              | A list, published periodically. Does not connect to a course or an intake                                                                                             |
| UPUOnline and ePanduan                           | Malaysian government                                                                                       | Programme listings, entry requirements, application management                                                                              | Stops at academic eligibility and application mechanics                                                                                                               |
| e-LATiH, HRD Corp                                | Malaysian government                                                                                       | 1,000-plus free courses                                                                                                                     | Supplies courses after a learner chooses a direction                                                                                                                  |
| JobStreet by SEEK, Hiredly                       | Malaysian private                                                                                          | AI matching of resumes to current jobs, salary data                                                                                         | Optimises current recruitment, not the upstream degree choice three to five years earlier                                                                             |
| Lightcast Career Coach                           | International analogue                                                                                     | Connects education programmes to local job opportunities, skills, salaries and projected occupational growth                                | Proves the underlying programme-to-labour-market mechanism is not globally novel                                                                                      |

**The gap in one sentence.** On the publicly visible features reviewed on 18 August 2026, no
Malaysian service combines UPU eligibility, personal constraints, graduate-supply saturation,
regional demand at graduation, and disclosed forecast uncertainty in one decision.

### Strongest Reason to Reject This Track

**It is perilously close to already solved, or already planned, by government.** MyMahir
covers future roles and pathways. MyNext covers profiling and internships. MYFutureJobs
covers AI job matching. The National AI Action Plan explicitly proposes personalised career
guidance. A judge can name three existing government platforms in the time it takes to read
the canvas.

**The forecasting claim is hard to make honestly.** Job advertisements are not hires. Postings
duplicate. Informal and small-firm demand is under-observed. Courses map to many occupations.
Investment targets do not guarantee vacancies. And a recommender can create herd behaviour:
directing thousands of students into today's shortage manufactures tomorrow's oversupply.
That last point is a genuine ethical objection to the concept itself.

**Guidance cannot repair a structural shortage of high-skilled positions.** In Q1 2026 only
about 25% of establishment vacancies were classified as skilled. Better matching redistributes
graduates. It does not create good jobs.

**Crowding risk: high.** The team lead's prediction that most teams will choose this track is
supported by the independent second opinion, which rated crowding high for the same reasons:
employment is immediately relatable to students, and the organizer supplied the concept
almost verbatim in the briefing. Expect many career chatbots, skills quizzes and course
recommenders. `[ASSUMPTION on both sides: no submission distribution data exists.]`

**A note on the team lead's reasoning.** The instinct is right, but "too ordinary" understates
the case. The stronger argument is that this is the track where the incumbent landscape is
densest and where the government has most explicitly claimed the idea, which is where the
Innovation 30% is hardest to win. Crowding among fellow entrants also splits the student
vote across many similar entries, so the track's apparent vote advantage partly cancels itself.

### Vote Appeal

**5 out of 5 raw, discounted to roughly 3.5 by vote splitting.** "Before you submit UPU, see
which degree is likely to have jobs when you graduate" is instantly relevant to every student
voter. But if many teams pitch the same territory, the votes divide.

### Fit for This Team

**Good, but only under the narrowed forecasting angle.** The actuarial students have a genuine
role in modelling transitions from study to internship to skilled employment, demand decay
over the qualification period, low, base and high scenarios, uncertainty intervals, forecast
calibration, and saturation risk when graduate supply responds to a shortage. Without that
layer the team has no advantage over dozens of other computer-science-led teams. Mortality
tables and pricing should not be forced into the pitch.

---

## Track 04: Empowering Rural Communities Through Innovation

### Narrowed Scope

**Lead Angle. The first missed rehabilitation appointment after a stroke.** At hospital
discharge, estimate the risk that a rural patient will not attend their first outpatient
rehabilitation appointment, then have a human coordinator deliver a low-bandwidth voice or
SMS journey plan: transport, caregiver, departure time, cost, or a clinician-approved
virtual or nearer community alternative.

**The exact moment of failure.** The patient leaves hospital with an appointment date. Before
the visit, the family cannot assemble a workable plan for transport, wheelchair assistance,
caregiver availability, cost and departure time. The appointment is silently missed.

**The statistic that carries the whole canvas.** A Hospital Sibu study of 631 stroke
survivors found that 50.4% defaulted on their first outpatient rehabilitation appointment.
Among patients travelling more than 30 minutes, the default rate was 91.0%, with adjusted
odds of default 39.81 times those of patients within 30 minutes. Published 28 February 2026
in the Malaysian Journal of Medical Sciences. The authors caution that this was retrospective
and single-centre, so the national rural default rate is **UNVERIFIED**. `[VERIFY at the
journal before quoting. This is the single most valuable number found in this research, and
it must be quoted exactly and with its limitation stated.]`

**The line for the canvas.** An appointment is not access if the patient cannot complete the
journey.

**Runner-Up Angle.** A consent-based rural income-risk profile that converts a home seller's
cashless and e-commerce records into a cash-flow volatility profile for referral to TEKUN or
Agrobank support. Fits the actuarial team, but alternative credit scoring is crowded,
regulated, and easily attacked as financial surveillance.

### Pain Points

**1. Rural Malaysia is measurably poorer.** Absolute poverty was 9.9% rural against 3.7%
urban in 2024, with relative poverty 24.8% rural against 11.9% urban. Rural median household
income was RM4,588 against RM8,139 urban. Sabah had the highest state poverty rate at 17.7%.

**2. Connectivity has closed but not converged, and the residual gap is the design
constraint.** Household internet access reached 99.0% urban and 90.7% rural in 2025, but
fixed broadband was 54% urban against 24.2% rural. DOSM's 2024 survey recorded rural
individual computer use at 64.3% against 86.5% urban, while rural mobile phone use was 98.9%.
**This supports voice and SMS delivery, not a heavy new application.**

**3. Availability of digital health is not adoption of it.** NHMS 2023 found only 5.4% of
rural adults used any online healthcare service in the preceding year, against 6.6% urban,
with utilisation among people aged 50 to 59 at only 3.6%.

**4. Rural clinical access is structurally thin.** In Sarawak, 98 of 215 rural clinics had no
doctor, 75 remote clinics were reachable only by river, some residents travel up to 50km to
the nearest hospital, and 45.3% of residents are classified rural against a national 24.4%.
About 6.5% of Malaysia's population live more than 5km from any healthcare facility.
`[VERIFY each of these at MOH or the cited studies.]`

**5. Existing transport assistance leaves this exact gap.** PeKa B40's transport benefit is
restricted to recipients of its medical-equipment or cancer-treatment benefits. Ordinary
stroke-rehabilitation follow-up is not an eligible category, and it is a payment rather than
a ride.

### Aim and Objectives

**Aim.** To reduce loss to rehabilitation in the first 90 days after discharge for
mobility-dependent stroke survivors living more than 30 minutes from their referral hospital.

**Objectives.**

1. Enrol the patient and a nominated caregiver at discharge, with explicit consent, and
   produce an actionable Bahasa Malaysia and Iban voice-and-SMS journey plan.
2. Classify non-attendance risk using explainable logistical and functional factors, excluding
   ethnicity, religion and other protected attributes. The score may increase support. It must
   never reduce eligibility.
3. Route high-risk cases to a human coordinator who confirms with the clinician whether the
   next contact must be at hospital or can safely be virtual, domiciliary or community-based.
4. Coordinate accessible transport and caregiver arrangements for essential visits, including
   departure time, estimated cost, assistance needs, confirmation and fallback escalation.
5. Pilot in selected districts with a **proposed, not forecast** target of reducing
   first-appointment default from the observed 50.4% baseline to 30%, measuring 90-day
   retention, on-time arrival, caregiver burden, cost per completed visit and fairness by
   district and language.

### Industry and Policy Insight

Government direction is unusually favourable to this specific concept. Budget 2026 allocated
a reported RM650 million for Future Healthcare under MCMC including connectivity at health
institutions, 13 new clinics including Mukah and Nabawan, and RM30 million to bring
specialist services closer to communities. MOH's Digitalisation Strategic Plan 2026-2030,
dated 8 February 2026, covers MySejahtera enhancement, EMR integration and disease-risk
forecasting, and MOH's 2026 estimates target a 5% increase in virtual consultations while
tracking functional improvement under domiciliary care using the Modified Barthel Index. On
6 July 2026 MOH announced the Malaysia Digital Health Certification Network as a national
trust framework under "One Person, One Record." The National AI Action Plan 2026-2030 names
healthcare as a catalytic impact engine and proposes risk segmentation and personalised
digital nudges, while stating AI must uplift rural and underserved communities without
widening inequality. `[VERIFY all budget figures at MOF.]`

**Implication.** "Bring suitable care closer, travel only when necessary" matches funded
government direction. The pitch should be a small workflow layer for one documented failure,
integrating with MySejahtera and existing services, not a promise to rebuild rural healthcare.

### Market and Competitor Analysis

| Player                      | Type                                                | What It Does                                                                                                          | Where It Stops                                                                                                                                                             |
| --------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MySejahtera and MyVAS       | Malaysian government                                | Books selected MOH services, holds appointment details, supports scheduled virtual consultations                      | Supplies a slot or a call link. Does not classify likely default, assess whether the journey is executable, coordinate transport, or escalate an incomplete caregiver plan |
| PeKa B40                    | Malaysian government                                | B40 screening, medical aids, limited transport payments                                                               | Transport aid tied to cancer or medical-aid benefits, not ordinary stroke rehabilitation. Pays assistance, does not produce the ride                                       |
| CaknaStrok                  | Malaysian public and academic, launched 18 Sep 2025 | Free caregiver-facing app from USM with MOH and partners: home-care information, progress tracking, shareable reports | Supports knowledge and home tracking. Does not manage appointments, non-attendance risk, transport or coordination                                                         |
| Homage Malaysia, HomePhysio | Malaysian private                                   | App-booked home physiotherapy and stroke care, advertised from around RM170 a session                                 | Private-pay marketplaces, not an MOH discharge pathway. Rural Sarawak workforce availability and B40 affordability for repeated rehabilitation are not demonstrated        |
| Modivcare, United States    | International analogue                              | Coordinates non-emergency medical transport with app, web, phone and SMS, live ride tracking, provider integration    | Depends on US payer contracts and a credentialled transport network. Does not manage the clinical pathway                                                                  |

**The gap in one sentence.** No identified Malaysian incumbent connects discharge risk, to
human-approved care location, to an accessible transport and caregiver plan, to
completed-visit feedback, for rural publicly referred stroke rehabilitation.

### Strongest Reason to Reject This Track

**The institutional-dependency trap.** The concept needs hospital enrolment, consented health
and functional data, clinician approval, a human coordinator, and an actual supply of
accessible vehicles or decentralised rehabilitation. A student team can describe these
convincingly but cannot prove any partnership in three days, and a prediction model does not
create vans, caregivers or therapists.

**Model risk and fairness.** The Sibu evidence is one retrospective centre, and geography is
strongly entangled with ethnicity and income. A careless system would encode those
differences. The submission must state that the score only allocates additional assistance,
excludes protected attributes, is audited for group calibration, and never makes clinical
decisions.

**The team has no stated clinical or rural access, and the rules forbid inventing it.** The
research standard in this workspace prohibits presenting desk research as user validation.
Without at least one real conversation with a rehabilitation professional, caregiver or
medical social worker, the team cannot claim its proposed care modes or transport workflow are
clinically accepted. `TODO: does any team member have a healthcare contact, or a family or
community connection in rural Sabah or Sarawak? This single answer moves the track's score
materially.`

**Crowding risk: moderate to high.** Rural empowerment is emotionally accessible and the
organizer supplied voice-commerce, cashless and AI-travel examples, so many teams will produce
variations of those three. A generic rural AI super-app is impossible to distinguish. The
narrow stroke-transition angle is defensible precisely because it is not one of the three the
organizer named.

### Vote Appeal

**4 out of 5.** "A stroke survivor misses rehabilitation because home is 30 minutes too far"
is immediate and human. Vote appeal falls sharply if the canvas leads with risk modelling
rather than the patient journey and the 91% figure.

### Fit for This Team

**Genuinely strong on the modelling half, genuinely weak on the domain half.** The computer
science students can specify low-bandwidth voice and SMS delivery, integration, consent,
security and human escalation. The actuarial students can design transparent risk classes,
time-to-default or survival models, competing events such as readmission or death,
calibration, fairness testing and cost-per-completed-visit scenarios. The advantage is not
"using AI." It is explaining responsibly who is likely to fall out of care, when, and how
limited support should be prioritised.

The missing capability is clinical and field-operational knowledge, and three days is not
long enough to acquire it honestly.

---

## Ranked Ideas Inside Each Track

A further research pass produced six ranked concrete ideas per track for Tracks 01, 03 and 04,
matching the eight ranked journeys already produced for Track 02. Scores are analyst judgments
against the judged 70%, not predicted outcomes.

**The finding that cuts across all four.** The top-ranked idea in three of the four tracks has
**high reuse of the Layak pattern**, meaning the grounded rule engine plus source-cited
provenance plus pre-filled output. The team's asset is not locked to Track 02. It is a
portable method, and that widens the viable track choice considerably.

### Track 01: Trustworthy and Ethical AI

Government occupies the obvious territory: GPAISA with four risk tiers, the National AI Action
Plan promising a Trust Function, trust dashboard and public AI incident registry, and a
reported Budget 2026 allocation near RM20 million to NAIO. The double bind is that simple
registries duplicate funded government work, while genuinely novel accountability tools need
agency data students cannot obtain. These six escape through citizen-side gaps.

| Rank | Idea           | Concept                                                                                                                                                                 | Primary User                                                                                     |  Score | Crowding      | Vote | Layak Reuse |
| ---: | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -----: | ------------- | ---: | ----------- |
|    1 | **UjiJawab**   | Citizen-triggered audits replay official chatbot answers against versioned government rulebooks, returning a source-cited verdict and an evidence-ready feedback packet | A citizen about to rely on an official AI answer about benefits, tax, licensing or documentation | **89** | Medium        |  4.7 | **High**    |
|    2 | **HakSemak**   | Every AI-assisted adverse decision produces a standard receipt showing AI involvement, data factors, policy rules, owner, version, and a one-click human-review route   | A citizen rejected, deprioritised or flagged in a public-service process                         |     86 | Medium        |  4.8 | **High**    |
|    3 | **BahasaSama** | Paired tests check whether the same government question gets equally correct, complete and sourced answers across Malaysian languages                                   | A Mandarin, Tamil or East Malaysian language speaker using a government chatbot                  |     84 | Low           |  4.5 | **High**    |
|    4 | **JejakData**  | A personal data-use receipt revealing which agencies and records fed an AI-assisted decision, and where an incorrect field can be challenged                            | A public-benefit applicant who suspects a wrong government record affected the result            |     81 | Low to medium |  4.4 | Medium      |
|    5 | **KiraAdil**   | A voluntary outcome diary using actuarial adjustment and confidence intervals to flag possible unequal approval rates or waiting times in one AI-assisted scheme        | Applicants to one disclosed AI-assisted scheme, aggregated through a partner NGO                 |     78 | Low           |  4.1 | Low         |
|    6 | **JagaBukti**  | A local-first recorder that captures, timestamps and redacts harmful government AI outputs, then routes a structured complaint                                          | A citizen reporting a harmful or misleading public-service AI interaction                        |     74 | High          |  4.2 | **High**    |

**Top pick: UjiJawab.** The moment of failure is precise: a citizen acts on an official
chatbot's outdated eligibility condition and only discovers the error after losing money, time
or an application window. Given that the relaunched MyGOV chatbot was documented getting
answers wrong on 12 August 2026, the pain is current and demonstrable. It survives the
"is this not GPAISA or the planned Trust Function" attack because those are institutional
assurance mechanisms, while this is a public, transaction-level regression test against cited
policy rules that a citizen can trigger. It also maps almost exactly onto Layak's architecture.

### Track 03: Future Talent Ecosystem

**A new incumbent found in this pass changes the picture.** PERKESO launched **MYFutureJobs
Galaxy on 16 November 2025** as an AI and machine-learning career-intelligence platform
covering occupational profiles, skills, career pathways and labour-market forecasts. Combined
with MyMahir, a generic "AI recommends what to study" concept is dead on arrival, and this
also weakens the UPU Foresight angle recorded earlier in this document.

| Rank | Idea             | Concept                                                                                                                                                                            | Primary User                                                                |  Score | Crowding      |    Vote | Layak Reuse |
| ---: | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -----: | ------------- | ------: | ----------- |
|    1 | **KerjaBetul**   | AI reads an actual job offer and its duties, then gives a cited underemployment-risk and career-capital assessment against MASCO, MyCOL, wages and future exit routes              | A Malaysian final-year student choosing between first-job offers            | **89** | Medium        | **4.8** | **High**    |
|    2 | **BuktiKerja**   | Multimodal AI turns gig-work records, receipts, photos and testimonials into a cited APEL or JPK pathway and a draft evidence portfolio, without pretending to award accreditation | An SPM-qualified informal or gig worker seeking a formal qualification      |     86 | Low           |     4.2 | **High**    |
|    3 | **GapSemester**  | AI compares a transcript and remaining modules against current local skill demand, then prescribes the smallest feasible elective, project or microcredential to close the gap     | A year two or three tertiary student with semesters remaining               |     84 | Medium        |     4.6 | **High**    |
|    4 | **InternScope**  | AI audits the tasks in an internship offer before acceptance and scores whether they build role-relevant skills or clerical labour                                                 | An undergraduate comparing internship offers                                |     82 | Low to medium |     4.7 | **High**    |
|    5 | **WorthTheMove** | Combines an offer's salary and progression with district living costs, relocation costs and fallback jobs to show whether moving actually improves prospects                       | A Sabah, Sarawak or rural graduate weighing an offer in KL, Penang or Johor |     79 | Low           |     4.5 | Medium      |
|    6 | **SkillReserve** | Builds an MSME task-to-worker dependency map, stress-tests resignations and automation shocks, recommends cross-training                                                           | An operations manager of a 20 to 100 worker manufacturing MSME              |     77 | Low           |     2.7 | Medium      |

**Top pick: KerjaBetul.** It attacks the correct problem. Unemployment was 2.9% in Q1 2026
while 35.2% of tertiary-educated workers were in skill-related underemployment, so job quality
and match is the real issue, not joblessness. The failure moment is sharp: a graduate accepts a
professional-sounding role and then finds the daily tasks are routine and build little
transferable career capital. It survives MYFutureJobs Galaxy narrowly, because Galaxy helps
users explore and find careers while this audits a specific offer's actual duties and downside
before the user signs. Highest vote appeal of any idea in this document at 4.8.

### Track 04: Rural Communities

Generic rural commerce, cashless, connectivity, disaster alert, medicine delivery and dropout
prediction are all occupied. Budget 2026 includes a reported RM780 million for JENDELA 2 across
2,700 mainly rural locations, RM350 million for 1,099 NADI entrepreneurship hubs and RM210
million for an MCMC early warning system. MOH already runs MyUBAT, and MOE already operates
SiPKPM dropout-risk detection.

| Rank | Idea             | Concept                                                                                                                                                        | Primary User                                                                                  |  Score | Crowding      | Vote | Layak Reuse |
| ---: | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -----: | ------------- | ---: | ----------- |
|    1 | **JalanPulih**   | At discharge, identify logistical non-attendance risk and coordinate nearer care, caregiver support or accessible transport for the first 90 days after stroke | A family caregiver of a mobility-dependent stroke survivor over 30 minutes from Hospital Sibu | **86** | Low to medium |  4.5 | Medium      |
|    2 | **DokumenSiap**  | An offline, Sabah-specific rules assistant that checks every document, witness and declaration before a JPN MEKAR late-birth-registration visit                | A parent or guardian of a home-born child in interior Sabah needing late registration         |     85 | Low           |  4.5 | **High**    |
|    3 | **LineProof**    | Record unusable mobile service offline, aggregate community evidence, then submit a standards-linked JENDELA case when connectivity returns                    | A longhouse or village leader in Baram documenting recurring service failure                  |     83 | Medium        |  4.5 | Medium      |
|    4 | **TaniTuntut**   | Maintain a season-long, source-cited crop insurance claim-readiness record and assemble the correct loss notice immediately after damage                       | An STTP-enrolled smallholder paddy farmer in Kedah                                            |     82 | Medium        |  4.0 | **High**    |
|    5 | **SaksiBanjir**  | Let a trusted village representative verify a mobility-limited, non-evacuated household at its damaged home and sync a query-free record to MyIBJKM            | An elderly or disabled rural head of household hit by flooding but not in a relief centre     |     81 | Medium        |  4.5 | **High**    |
|    6 | **KutipKampung** | Cluster dispersed household demand into viable waste collection rounds run by a local youth micro-franchise and a licensed disposal partner                    | A household in an unserved rural Johor village                                                |     80 | Low           |  4.0 | None        |

**Top pick: JalanPulih**, confirming the earlier finding. But note **DokumenSiap at 85 with high
Layak reuse**, which is the strongest rural option if the team wants to lean on what it already
has rather than acquire clinical knowledge in three days.

**The standing objection to this track is unchanged and is structural.** Its real bottlenecks
are physical and institutional: vehicles, clinicians, field officers, waste collectors and
agency permissions. Without one credible rural or domain validator, an app-only proposal from
an urban university team loses heavily on Feasibility.

---

## What the Four Tracks Have in Common

One pattern held across every track, and it is the most important finding in this document.

**In all four tracks, the Malaysian government has recently announced or begun building the
obvious version of the idea.**

| Track | The obvious idea                                       | What government already announced                                                                                                                         |
| ----- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01    | A public register of government AI                     | National AI Action Plan 2026-2030 proposes an AI Trust Function with a public AI incident registry and a Trust Barometer dashboard, published 28 Jul 2026 |
| 02    | An AI chatbot that finds your form and fills it in     | MyGOV autofill and a 24/7 intelligent chatbot announced 27 Feb 2025. GovTech lists TanyaKerajaan, MyCitizenProfile and BorangMy                           |
| 03    | An AI career and course adviser                        | National AI Action Plan includes personalised academic and career guidance, an AI-impact diagnostic and a national skills taxonomy                        |
| 04    | A rural AI super-app for commerce, cashless and travel | Exactly the three examples the organizer supplied, so the most-copied ideas in the track                                                                  |

**Therefore the choice is not really between four tracks. It is between four narrow wedges.**
A generic submission in any track scores badly on Innovation, which is the heaviest single
criterion at 30%. Every recommendation in this document is a narrowing, not a topic.

---

## Where the Two Research Passes Disagreed

This document merges two independent research passes: a primary pass and a separate
second-opinion pass run at maximum reasoning effort with independent web research. They were
given the same competition context and none of each other's conclusions. Where they
disagreed, both positions are recorded rather than silently reconciled.

| Question                                 | First pass                                                | Second opinion                                                                                           | Resolution                                                                                     |
| ---------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Track 01 crowding                        | Low, because the track needs policy literacy              | High, 4 out of 5, because the briefing handed teams the exact phrases and the topic attracts CS students | Unresolved. Both are judgments. Neither has data. Treat crowding as unknown in all four tracks |
| Track 01 lead angle                      | A public AI register                                      | A case-level AI decision receipt, because a register is already in the national plan                     | Second opinion adopted. The register became the runner-up                                      |
| Does Malaysia have a data exchange layer | No, not built                                             | Yes, MyGDX, 81 agencies, 49 integrated systems, 65m+ API transactions as of Feb 2026                     | Second opinion correct. First pass was wrong and the text was corrected                        |
| Track 04 viability                       | Weak, because the statement is vague and team fit is poor | Strongest of the four at 84 out of 100, on a narrow stroke-rehabilitation angle                          | Second opinion substantially raised this track. The narrowing is what changed it               |
| Track 02 novelty                         | Reasonable, given the once-only framing                   | Very high crowding, 4.5 out of 5, and the generic version is already announced                           | Second opinion adopted as the risk. The life-event wedge is the mitigation                     |

**Second-opinion scores against the judged 70%,** for the narrowed angle in each case:

| Track                               | Innovation /30 | Feasibility /25 | Impact /25 | Quality /20 |  Total |
| ----------------------------------- | -------------: | --------------: | ---------: | ----------: | -----: |
| 04 Rural, stroke rehabilitation     |             25 |              18 |         23 |          18 | **84** |
| 02 One-stop, one life event         |             22 |              19 |         22 |          18 | **81** |
| 01 Trustworthy AI, decision receipt |             23 |              18 |         21 |          18 | **80** |
| 03 Talent, UPU forecasting          |             21 |              18 |         21 |          18 | **78** |

**Best idea found in each track,** from the later ranked-ideas pass. Note that the best idea
scores higher than the track in every case, which is the whole argument for narrowing.

| Track                 | Best idea                                                           | Idea score | Track score | Layak method reuse                    |
| --------------------- | ------------------------------------------------------------------- | ---------: | ----------: | ------------------------------------- |
| 01 Trustworthy AI     | **UjiJawab**, citizen-triggered audit of official chatbot answers   |     **89** |          80 | **High**                              |
| 02 One-stop assistant | **Bereavement**, one death, three federal agencies, one submission  |     **89** |          81 | Architecture yes, content no          |
| 03 Talent ecosystem   | **KerjaBetul**, audit a real job offer before signing               |     **89** |          78 | **High**                              |
| 04 Rural communities  | **JalanPulih**, prevent the first missed rehabilitation appointment |     **86** |          84 | Medium, but DokumenSiap at 85 is High |

**Read this spread carefully. Six points across four tracks is inside the noise of this kind
of judgment.** No track is disqualified by its score. The scores say the narrowing matters
more than the topic.

---

## Recommendation

> **Revised after the ranked-ideas pass.** This recommendation originally rested on the claim
> that Track 02 is the only track where Layak converts into marks. **That claim is now weaker.**
> The ranked-ideas pass found the top idea in three of the four tracks can reuse the Layak
> _method_, meaning a grounded rule engine plus source-cited provenance plus pre-filled output.
> Specifically: UjiJawab in Track 01 and KerjaBetul in Track 03 are both rated high reuse, and
> DokumenSiap in Track 04 is high reuse at a score of 85. The recommendation below still stands,
> but on a narrower margin than before, and the team should weigh it knowing the asset travels.

**Recommended: Track 02, narrowed to a single life event, most likely bereavement.**

**The reasoning is not that Track 02 has the best idea.** It scored second. The reasoning is
that the scores are within noise of each other, and the one factor that is not within noise
is what this team can execute to a high standard with three days left and voting already open.

The team holds a grand-champion project, Layak, that is an agentic AI concierge for Malaysian
government assistance schemes. It carries a cited evidence base, a working rule-engine and
provenance architecture, a poster, a pitch deck and a demo video. The organizer permits reuse
(`[00:24:03]`) and confirmed optional videos and prototypes count within the 20% Submission
Quality weight (`[00:31:49]`). No other track lets this team convert existing verified work
into marks. On a 21 August deadline, that is worth more than a four-point theoretical edge on
a track where the team starts from nothing.

**The conditions that make this recommendation valid.**

1. The submission must be one life event, end to end, not a general assistant. The generic
   version is dead: GovTech has publicly announced TanyaKerajaan, MyCitizenProfile and
   BorangMy.
2. The hero of the canvas is the three-agency workflow, not "AI chatbot."
3. Layak's authorship is stated accurately: Adam and Chaos, two of the four members.
4. The actuarial half gets a real job: the auditable rule map, claims-process risk and
   benefit take-up measurement. Not a decorative label.

### The Strongest Case Against This Recommendation

**Track 02 has the highest crowding risk of the four, rated 4.5 out of 5.** If forty teams
submit a MyGOV assistant, the Innovation score compresses and the student vote splits. The
life-event wedge is a mitigation, not an immunity.

**Track 04 scored higher and has the single best piece of evidence found anywhere in this
research:** 50.4% of stroke survivors defaulting on their first rehabilitation appointment,
rising to 91.0% for those travelling more than 30 minutes, from a Malaysian study published
in February 2026. That number would carry a canvas on its own. If the team can answer the
`TODO` about clinical or rural access with a yes, **Track 04 becomes the stronger pick and
this recommendation should be overturned.**

**Track 01 is the best fit for the team's actuarial half** and has the freshest failure
evidence, including a government AI failure documented six days ago. It loses on indirect
impact and the lowest vote appeal, not on merit.

### On the Team Lead's Position

Andersonnn7788's recommendation against Track 03 is supported by this research, and the
underlying reason is stronger than the one given. The problem is not only that many teams
will choose it. It is that Track 03 has the densest incumbent landscape of the four, with
MyMahir, MyNext, MYFutureJobs, MyCOL and e-LATiH all occupying adjacent ground, and the
National AI Action Plan has explicitly claimed personalised AI career guidance as national
policy. That is where the Innovation 30% is hardest to win. Track 03 also scored lowest in
the independent pass, at 78.

One correction worth putting to the meeting: the crowding argument applies to Track 02 at
least as strongly, and the second opinion rated Track 02's crowding risk **higher** than
Track 03's. If crowding is the team's deciding criterion, it argues against the recommended
track too, and the honest conclusion would be Track 01 or Track 04.

---

## Decisions the Team Must Make Tonight

1. **The track.** One only. An idea unrelated to a problem statement is disqualified
   (`[00:22:49]`).
2. **The narrow wedge inside it.** A topic is not a submission.
3. **Rural or clinical access.** Does any member have a healthcare contact or a rural Sabah
   or Sarawak connection? A yes reopens Track 04 as the leading option.
4. **If Track 02: which journey.** See the ranked candidate journeys below. This is a
   separate decision from the track itself, and the Layak continuation is one of the options.
5. **Submission date target.** Every day before 21 August is a day of extra vote exposure.

Already settled and recorded in `../decisions.md`: all four members can attend the grand
final, and Layak was built by Adam and Chaos.

Record the outcome in `../decisions.md`.

---

## Source Notes and Verification Debt

Every factual claim in this document carries its source in the text. The following must be
opened at the primary source before any of them enters the submission PDF or the canvas.
This list is the verification debt of this research pass, and it is not optional.

| Claim                                                          | Why It Needs Checking                                                                                              |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| The 50.4% and 91.0% stroke rehabilitation default figures      | The most valuable number found. Single-centre and retrospective. Must be quoted exactly with its limitation stated |
| All Budget 2026 allocations quoted anywhere in this document   | Reported via secondary sources. Check MOF documents                                                                |
| Ipsos trust and AI-understanding percentages                   | Online survey results, not administrative statistics                                                               |
| MyGOV service and agency counts                                | Sources give different figures for different dates. Always state the figure with its date                          |
| Data Sharing Act 2025 commencement date                        | Sources differ. Use the Ministry of Digital statement                                                              |
| Penang engineer shortage and brain-drain percentages           | News reporting, not primary data                                                                                   |
| The 60,000 engineers under the National Semiconductor Strategy | A training target, not verified open vacancies. Do not present it as demand                                        |
| Sabah and Sarawak rural clinic figures                         | Verify at MOH or the cited studies                                                                                 |
| AI sentencing in Sabah and Sarawak courts                      | 2020 to 2022 reporting. Confirm current status before describing it as ongoing                                     |
| Absence of a public Malaysian government AI inventory          | Marked UNVERIFIED. Failure to find is not proof of absence                                                         |

**The claim gate in `README.md` applies to every one of these.** A number without a checked
source does not go in the submission.

---

## Source Register

Every source consulted across both research passes, grouped by track. This replaces keeping
the second-opinion pass as separate files: its findings are merged into the sections above
and its citations are preserved here.

**Nothing in this register is itself a source until a human opens it.** Machine research
retrieves and summarises; it does not verify. Open the link, confirm the claim and the date,
then record the full entry in a research note using the minimum source record in `README.md`.

### Cross-Cutting: Competition Ground Truth

| Source                                        | Location                                                  |
| --------------------------------------------- | --------------------------------------------------------- |
| Participant briefing transcript, 3 Aug 2026   | `../source/2026-08-03-participant-briefing-transcript.md` |
| Produced briefing video transcript            | `../source/briefing-video-transcript.md`                  |
| Official briefing PDF and submission template | `../source/`                                              |

### Track 01: Trustworthy and Ethical AI

| Publisher and Description                                                       | URL                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| National AI Action Plan 2026-2030, published 28 Jul 2026                        | https://strapi.naio.okie.my/uploads/AI_Nation_2030_National_AI_Action_Plan_2026_2030_Eng_V_290726_49cb382621.pdf                                                                                          |
| AI Malaysia institutionalisation media release, 28 Jul 2026                     | https://strapi.naio.okie.my/uploads/28072026_SIARAN_MEDIA_AI_MALAYSIA_PEMACU_UTAMA_MENUJU_NEGARA_AI_2030_a6f8fbbbf3.pdf                                                                                   |
| MOSTI, National Guidelines on AI Governance and Ethics, 20 Sep 2024             | https://mastic.mosti.gov.my/storage/2024/09/THE-NATIONAL-GUIDELINES-ON-AI-GOVERNANCE-ETHICS.pdf                                                                                                           |
| MOSTI AIGE announcement                                                         | https://www.mosti.gov.my/berita/garis-panduan-tadbir-urus-dan-etika-kecerdasan-buatan-negara-aige/                                                                                                        |
| Ministry of Digital, NAIO launch, 12 Dec 2024                                   | https://www.digital.gov.my/en-GB/siaran/Pembukaan-Pejabat-Kecerdasan-Buatan-Kebangsaan-%28NAIO%29-Membawa-Malaysia-Ke-Era-Transformasi-Dan-Inovasi-Kecerdasan-Buatan-%28AI%29.                            |
| Ministry of Digital, Public Sector AI Adaptation Guidelines launch, 27 Feb 2025 | https://www.digital.gov.my/en-GB/siaran/Majlis-Peluncuran-Garis-Panduan-Pengadaptasian-Kecerdesan-Buatan-%28AI%29-Sektor-Awam                                                                             |
| JDN GPAISA public-sector AI self-assessment tool                                | https://gpaisa.jdn.gov.my/                                                                                                                                                                                |
| Ministry of Digital, AI training for 445,000 civil servants, 5 Feb 2025         | https://www.digital.gov.my/en-GB/siaran/Ministry-Of-Digital%2C-Through-NAIO%2C-Secures-AI-Training-For-445%2C000-Civil-Servants-Under-Google-AI-At-Work-2.0-Initiative                                    |
| AI Governance Bill public consultation, MPC portal                              | https://upc.mpc.gov.my/view-consultation/264                                                                                                                                                              |
| Ministry of Digital, AI Bill engagement, 10 Jul 2026                            | https://www.digital.gov.my/en-GB/siaran/Kementerian-Digital-Mulakan-Libat-Urus-Cadangan-Rang-Undang-Undang-Tadbir-Urus-Kecerdasan-Buatan-%28AI%29                                                         |
| Personal Data Protection Department, Act 709 non-application to government      | https://www.pdp.gov.my/ppdpv1/en/akta/application-and-non-application-of-the-act/                                                                                                                         |
| SISPAA integrated complaints system                                             | https://www.malaysia.gov.my/en/feedback/sistem-pengurusan-aduan-bersepadu-sispaa                                                                                                                          |
| MyGCC central enquiries and complaints                                          | https://www.malaysia.gov.my/en/e-penyertaan/e-customer/mygcc                                                                                                                                              |
| Ipsos AI Monitor 2025, 24 Jun 2025                                              | https://www.ipsos.com/en-my/press-release-ai-monitor-2025                                                                                                                                                 |
| Ipsos AI Monitor 2024 press release                                             | https://www.ipsos.com/sites/default/files/ct/news/documents/2024-07/Press%20Release_AI%20Monitor_0.pdf                                                                                                    |
| GOV.UK, Algorithmic Transparency Recording Standard guidance                    | https://www.gov.uk/government/publications/guidance-for-organisations-using-the-algorithmic-transparency-recording-standard/algorithmic-transparency-recording-standard-guidance-for-public-sector-bodies |
| Economic Outlook 2026, NAIO allocation                                          | https://belanjawan.mof.gov.my/pdf/belanjawan2026/economy/economic-2026.pdf                                                                                                                                |
| Federal Expenditure Estimates 2026, Ministry of Digital                         | https://belanjawan.mof.gov.my/pdf/belanjawan2026/perbelanjaan/BP.50.pdf                                                                                                                                   |
| SoyaCincau, MyGOV chatbot shut down, 20 Aug 2025                                | https://soyacincau.com/2025/08/20/mygov-beta-ai-chatbot-shut-down-nonsense-answers/                                                                                                                       |
| SoyaCincau, MyGOV chatbot back but still wrong, 12 Aug 2026                     | https://soyacincau.com/2026/08/12/mygov-ai-chatbot-is-back-but-there-are-still-issues/                                                                                                                    |
| SoyaCincau, PMX AI digital twin offline, 20 Jul 2026                            | https://soyacincau.com/2026/07/20/pmx-ai-anwar-ibrahim-digital-twin-offline/                                                                                                                              |
| Malay Mail, AI court sentencing concerns, 12 Apr 2022                           | https://www.malaymail.com/news/malaysia/2022/04/12/as-malaysia-tests-ai-court-sentencing-some-lawyers-fear-for-justice/2053017                                                                            |
| Malay Mail, Sabah and Sarawak courts to use AI, 17 Jan 2020                     | https://www.malaymail.com/news/malaysia/2020/01/17/chief-judge-sabah-sarawak-high-courts-to-use-ai-to-propose-punishments/1828985                                                                         |
| GovInsider, AI sentencing in Sabah and Sarawak                                  | https://govinsider.asia/intl-en/article/how-courts-in-sabah-and-sarawak-are-sentencing-with-the-help-of-ai-abang-iskandar-malaysia                                                                        |
| Obiguard, Malaysian enterprise AI-risk platform                                 | https://obiguard.ai/about                                                                                                                                                                                 |
| EY Malaysia Trusted AI Platform                                                 | https://www.ey.com/en_my/services/consulting/trusted-ai-platform                                                                                                                                          |

### Track 02: One-Stop Government Services

| Publisher and Description                                                                                          | URL                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thirteenth Malaysia Plan, tabled 31 Jul 2025                                                                       | https://rmk13.ekonomi.gov.my/wp-content/uploads/2025/09/120925-Main-Document-e-Book.pdf                                                                              |
| Ministry of Digital, MyGOV 38 services 13 agencies, 20 Jan 2026                                                    | https://www.digital.gov.my/siaran/MyGOV-Malaysia-Mencatatkan-Lebih-1-Juta-Muat-Turun%2CMenyediakan-38-Perkhidmatan-Melibatkan-13-Agensi-Kerajaan                     |
| Ministry of Digital, MyGOV 2.2m users 51 services 19 agencies, 5 Jun 2026                                          | https://www.digital.gov.my/en-GB/siaran/Aplikasi-MyGOV-Malaysia-Capai-2.2-Juta-Pengguna%2CPerluas-Penawaran-Digital-Dengan-Penstriman-Langsung-Piala-Dunia-FIFA-2026 |
| Ministry of Digital, Data Sharing Act 2025 comes into effect                                                       | https://www.digital.gov.my/en-GB/siaran/Akta-Perkongsian-Data-2025-Berkuat-Kuasa-Hari-Ini%3BTingkatkan-Perkhidmatan-Kerajaan%2CLindungi-Data-Peribadi                |
| JDN, Data Sharing Act 2025 (Act 864) page                                                                          | https://www.jdn.gov.my/en/data-sharing-act-2025-act-864/                                                                                                             |
| Data Sharing Act 2025 (Act 864), full text                                                                         | https://www.jdn.gov.my/wp-content/uploads/2025/06/Act-864.pdf                                                                                                        |
| Ministry of Digital, PPDSA and MyGDX, 10 Feb 2026                                                                  | https://www.digital.gov.my/en-GB/siaran/Revolusi-Digital-Sektor-Awam%3APPDSA-Dan-MyGDX-Pemacu-Transformasi-Rakyat                                                    |
| MyGDX, Malaysian Government Central Data Exchange                                                                  | https://www.mygdx.gov.my/                                                                                                                                            |
| GovTech product roadmap: TanyaKerajaan, MyCitizenProfile, BorangMy                                                 | https://govtech.miniapp.malaysia.gov.my/produk/kami                                                                                                                  |
| Ministry of Digital, Budget 2026 digital allocations, 11 Oct 2025                                                  | https://www.digital.gov.my/en-GB/siaran/Peruntukan-Dalam-Belanjawan-Madani-2026-Akan-Merangsang-Transformasi-Digital-Malaysia                                        |
| Ministry of Digital, Malaysia Digital 2030, 29 Jun 2026                                                            | https://www.digital.gov.my/en-GB/siaran/Kementerian-Digital-Terajui-Transformasi-AI-Negara                                                                           |
| MyGovernment official portal                                                                                       | https://www.malaysia.gov.my/en                                                                                                                                       |
| Current MyGOV service catalogue                                                                                    | https://www.mygov.gov.my/ms-MY                                                                                                                                       |
| JPN, ordinary registration of death, Peninsular                                                                    | https://www.jpn.gov.my/en/services/death/ordinary-registration-of-death-peninsular/                                                                                  |
| KWSP death withdrawal and death assistance                                                                         | https://www.kwsp.gov.my/en/member/account-centre/death                                                                                                               |
| PERKESO benefit application                                                                                        | https://perkeso.gov.my/perkhidmatan-kami/perlindungan/permohonan-faedah.html                                                                                         |
| DOSM Vital Statistics Malaysia 2025                                                                                | https://www.dosm.gov.my/portal-main/release-content/vital-statistics-malaysia-2025                                                                                   |
| DOSM ICT Use and Access 2024                                                                                       | https://v2.dosm.gov.my/uploads/release-content/file_20250711104931.pdf                                                                                               |
| UK Tell Us Once                                                                                                    | https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once                                                                                  |
| MYEG public service collaboration                                                                                  | https://www.malaysia.gov.my/en/my-initiative/public-service-delivery-and-local-government/digital-divide/ict-collaboration                                           |
| Bereev, Malaysian legacy-planning platform                                                                         | https://www.zurich.com.my/about-zurich/zurich-in-the-news/2019/2019-01-17                                                                                            |
| Team prior art: Layak, built by Adam and Chaos, grand champion at Project 2030 MyAI Future Hackathon Open Category | https://github.com/TolongLabs/Layak                                                                                                                                  |
| Layak live demo                                                                                                    | https://layak.vercel.app                                                                                                                                             |
| Layak demo video                                                                                                   | https://youtu.be/XuFsiMNjknA                                                                                                                                         |
| Team prior art: Layak research brief, local working copy                                                           | `/home/adam/CS/Layak/docs/project-idea.md`                                                                                                                           |
| Ihsan MADANI, government aid-matching portal under NACCOL and KPDN                                                 | https://ihsanmadani.gov.my/                                                                                                                                          |
| World Bank, Social Assistance in Malaysia, Jan 2026: 189 programmes across 26 ministries and agencies              | https://www.worldbank.org/en/country/malaysia/publication/social-assistance-in-malaysia-who-benefits-and-who-misses-out                                              |
| SARA 2026 official portal                                                                                          | https://sara.gov.my/en/home.html                                                                                                                                     |
| EPF Integrated Annual Report 2024: death withdrawal volumes and values                                             | https://www.kwsp.gov.my/documents/d/guest/kwsp24_eng                                                                                                                 |
| PERKESO survivor pension and funeral benefit claim checklist                                                       | https://perkeso.gov.my/images/borang/FPP%20DAN%20%20FPM/SenaraiSemak_fpp.pdf                                                                                         |
| JPN ordinary death registration, Peninsular, updated 31 Jul 2026                                                   | https://www.jpn.gov.my/perkhidmatan/kematian/pendaftaran-biasa-kematian-semenanjung/                                                                                 |
| MyGovernment, Death and Inheritance category                                                                       | https://www.malaysia.gov.my/en/categories/death--inheritance                                                                                                         |
| MyGovernment, funeral management assistance, updated 10 Dec 2025                                                   | https://www.malaysia.gov.my/en/categories/death--inheritance/dealing-with-death/funeral-management-assistance-khairat-kematian-in-malaysia                           |
| DOSM, Person with Disability Statistics Malaysia 2024, released 11 Dec 2025                                        | https://www.dosm.gov.my/portal-main/release-content/person-with-disability-statistics-malaysia-2024                                                                  |
| MyDaftarOKU registration system, JKM                                                                               | https://oku.jkm.gov.my/myDaftarOku                                                                                                                                   |
| EPOKU, allowance for registered working persons with disabilities, updated 13 Mar 2026                             | https://www.malaysia.gov.my/en/categories/bantuan-kebajikan--kemudahan/bantuan-pekerjaan/elaun-pekerja-oku-epoku                                                     |
| MyGovernment, other OKU help and facilities                                                                        | https://www.malaysia.gov.my/en/categories/aid-welfare-and-assistance/other-help--facilities                                                                          |
| LHDN personal tax reliefs, agency of record, YA2025                                                                | https://www.hasil.gov.my/en/individual/individual-life-cycle/income-declaration/tax-reliefs/                                                                         |
| MalaysiaBiz, business registration and licensing gateway                                                           | https://malaysiabiz.gov.my/en                                                                                                                                        |
| PERKESO Employment Insurance System                                                                                | https://www.perkeso.gov.my/                                                                                                                                          |

### Track 03: Future Talent Ecosystem

| Publisher and Description                               | URL                                                                                                                                                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DOSM Labour Market Review Q1 2026, 22 May 2026          | https://www.dosm.gov.my/portal-main/release-content/labour-market-review-lmr-q12026                                                                                                           |
| DOSM Employment Statistics Q1 2026, 14 May 2026         | https://www.dosm.gov.my/portal-main/release-content/employment-statistics-q12026                                                                                                              |
| DOSM Job Market Insights Q1 2026, 25 Jun 2026           | https://www.dosm.gov.my/portal-main/release-content/big-data-analytics-job-market-insights-q12026                                                                                             |
| TalentCorp workforce impact study, launched 18 Nov 2024 | https://www.talentcorp.com.my/impact-study/                                                                                                                                                   |
| TalentCorp impact study launch statement                | https://www.talentcorp.com.my/resources/press-releases/talentcorp-launches-landmark-study-on-workforce-impact-of-ai-digitalisation-and-green-economy/                                         |
| MyMahir, TalentCorp                                     | https://www.mymahir.my/                                                                                                                                                                       |
| MyCOL, Malaysia Critical Occupations List               | https://www.talentcorp.com.my/our-initiatives/data-research/mycol/                                                                                                                            |
| MyNext, TalentCorp                                      | https://www.talentcorp.com.my/our-initiatives/for-students-graduates/mynext/                                                                                                                  |
| MYFutureJobs, PERKESO                                   | https://www.perkeso.gov.my/                                                                                                                                                                   |
| e-LATiH, HRD Corp                                       | https://elatih.hrdcorp.gov.my/                                                                                                                                                                |
| UPUOnline and ePanduan                                  | https://upu.mohe.gov.my/                                                                                                                                                                      |
| UPUOnline 2026 application FAQ                          | https://upu.mohe.gov.my/FAQ%20PERMOHONAN%20UPUONLINE%202026.pdf                                                                                                                               |
| MOHE, 2026/2027 programme announcement                  | https://www.mohe.gov.my/muat-turun/kenyataan-media/2026/1827-kenyataan-media-pelanjutan-tarikh-permohonan-upuonline-r-bagi-kemasukan-sesi-akademik-20262027-khas-untuk-lepasan-spm-sahaja-pdf |
| MOHE, 78,883 bachelor offers, 5 Sep 2025                | https://www.mohe.gov.my/en/broadcast/media-statements/kenyataan-media-seramai-78-883-calon-mendapat-tawaran-pengajian-ijazah-sarjana-muda-di-universiti-awam                                  |
| MOHE, National Education Plan 2026-2035, 18 Jan 2026    | https://www.mohe.gov.my/en/broadcast/media-statements/siaran-media-rpn-2026-2035-rancangan-satu-dekad-pendidikan-bersepadu-negara-bakal-diluncurkan-pada-20-januari-depan                     |
| MOHE Higher Education Blueprint portal                  | https://mohe.gov.my/en/download/publications-journals-and-reports/malaysia-higher-education-blueprint                                                                                         |
| MITI National Semiconductor Strategy                    | https://www.miti.gov.my/miti/resources/NSS_141024.pdf                                                                                                                                         |
| Budget 2026 speech                                      | https://belanjawan.mof.gov.my/pdf/belanjawan2026/ucapan/bs26.pdf                                                                                                                              |
| JobStreet by SEEK, AI-powered platform                  | https://my.jobstreet.com/about/news/article/ai-powered-platform-launch                                                                                                                        |
| Hiredly                                                 | https://sg.hiredly.com/about-us                                                                                                                                                               |
| Lightcast Career Coach, international analogue          | https://lightcast.io/use-cases/education                                                                                                                                                      |

### Track 04: Rural Communities

| Publisher and Description                                                                             | URL                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Malaysian Journal of Medical Sciences, Hospital Sibu stroke rehabilitation default study, 28 Feb 2026 | https://ejournal.usm.my/mjms/article/view/mjms_vol33-no1-2026_8                                                                                                                                                                                                |
| MOH National Stroke Registry Report 2017-2024, 8 Apr 2026                                             | https://www.moh.gov.my/penerbitan-dan-laporan/infografik-laporan-statistik/laporan-registri-strok/laporan-registri-strok-2017-2024                                                                                                                             |
| DOSM Poverty in Malaysia 2024                                                                         | https://www.dosm.gov.my/portal-main/release-content/poverty-in-malaysia-2024                                                                                                                                                                                   |
| DOSM Poverty in Malaysia 2024, release PDF                                                            | https://v2.dosm.gov.my/uploads/release-content/file_20251010203643.pdf                                                                                                                                                                                         |
| DOSM ICT Use and Access Survey 2024                                                                   | https://www.dosm.gov.my/portal-main/release-content/ict-use-and-access-by-individuals-and-households-survey-report-2024                                                                                                                                        |
| DOSM ICT Use and Access Survey 2025                                                                   | https://www.dosm.gov.my/portal-main/release-content/ict-use-and-access-by-individuals-and-households-survey-report-2025                                                                                                                                        |
| Institute for Public Health, NHMS 2023 Technical Report                                               | https://iku.nih.gov.my/images/nhms2023/report-nhms-2023.pdf                                                                                                                                                                                                    |
| MOH Digitalisation Strategic Plan 2026-2030, 8 Feb 2026                                               | https://www.moh.gov.my/penerbitan-dan-laporan/dasar-akta-polisi-garis-panduan/pelan-strategik/senarai-pelan-strategik/pelan-strategik-pendigitalan-kkm-2026-2030-versi-1                                                                                       |
| MOH digital health systems update, 8 Jul 2025                                                         | https://www2.moh.gov.my/index.php/pages/view/12964                                                                                                                                                                                                             |
| MOF and MOH, Malaysia Digital Health Certification Network, 6 Jul 2026                                | https://www.mof.gov.my/portal/en/news/press-release/press-release-jbmkks-mediasas-060726                                                                                                                                                                       |
| MOF Budget 2026 touchpoints                                                                           | https://belanjawan.mof.gov.my/pdf/belanjawan2026/ucapan/touchpoint-budget-en.pdf                                                                                                                                                                               |
| Federal Expenditure Estimates 2026, MOH                                                               | https://belanjawan.mof.gov.my/pdf/belanjawan2026/perbelanjaan/BP.42.pdf                                                                                                                                                                                        |
| MySejahtera appointment FAQ                                                                           | https://mysejahtera.moh.gov.my/en/appointment/faq                                                                                                                                                                                                              |
| ProtectHealth PeKa B40                                                                                | https://protecthealth.com.my/peka-b40-eng/                                                                                                                                                                                                                     |
| PeKa B40 hospital manual, 2019                                                                        | https://jknsabah.moh.gov.my/hqe2/pusat-media/muat-turun/category/22-peka-b40?download=90%3Amanual-for-moh-hospital                                                                                                                                             |
| USM, CaknaStrok caregiver app launch, 18 Sep 2025                                                     | https://news.usm.my/index.php/berita-mutakhir/11926-usm-lancar-aplikasi-caknastrok-perkasa-penjagaan-pesakit-strok-melalui-pendekatan-digital                                                                                                                  |
| Homage Malaysia physiotherapy                                                                         | https://www.homage.com.my/services/physiotherapy/                                                                                                                                                                                                              |
| HomePhysio Malaysia                                                                                   | https://www.homephysio.com.my/                                                                                                                                                                                                                                 |
| Modivcare non-emergency medical transport, international analogue                                     | https://www.modivcare.com/offerings/nemt/                                                                                                                                                                                                                      |
| MCMC JENDELA and rural connectivity                                                                   | https://www.mcmc.gov.my/skmmgovmy/media/General/pdf2/Insight-Digital-Connectivity.pdf                                                                                                                                                                          |
| MOH MyUBAT medicine supply and pharmacy value-added services                                          | https://pharmacy.moh.gov.my/en/content/medicines-supply-management-system-pharmacy-value-added-services-myubat.html                                                                                                                                            |
| MOE SiPKPM dropout-risk detection guideline, 2025                                                     | https://www.moe.gov.my/storage/files/shares/pekeliling_dan_garis_panduan/ikhtisas/2025/SPI%20KPM%20BIL.%204%20Tahun%202025%20GARIS%20PANDUAN%20SiPKPM%20DAN%20MENGURUS%20MURID%20BERISIKO%20CICIR%20DAN%20MURID%20CICIR%20DI%20SEKOLAH%20%281%29%20%281%29.pdf |
| MKN, Budget 2026 MCMC digital inclusion: JENDELA 2, NADI hubs, early warning, 10 Nov 2025             | https://www.mkn.gov.my/web/ms/2025/11/10/belanjawan-2026-mcmc-perkukuh-keterangkuman-digital-dan-kesalinghubungan-negara-2/                                                                                                                                    |
