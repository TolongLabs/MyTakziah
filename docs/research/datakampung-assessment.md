# DataKampung: Concept Assessment

**Owner:** TODO: assign
**Status:** Review of a teammate-authored concept
**Last Updated:** 2026-08-18
**Reviews:** `datakampung-concept.md`, authored by Andersonnn7788
**Feeds:** the track and concept decision

> This is a review of a teammate's work, written to the same evidence standard as everything
> else in `docs/research/`. It is deliberately direct. The concept has a real strength that
> nothing else the team has produced can match, and one unverified assumption that currently
> carries the whole business model.

---

## Verdict in One Paragraph

**Not suitable as written, and the reason is fixable in principle but probably not in three
days.** DataKampung is the most original idea anyone on the team has produced, and originality
maps onto Innovation, the heaviest single criterion at 30%. But the entire model rests on one
claim that no research pass could verify: that somebody will pay a rural Malaysian community
for its data. Feasibility and Impact are 50% of the expert score combined, and both hang on
that single unproven arrow. There is a specific three-day test, given at the end, that would
settle it either way.

---

## What Is Genuinely Strong

Credit where it is due, because these are not small things.

- **It dodges every crowded idea in the track, deliberately.** Section 12 lists the ideas it
  is avoiding, and that list matches almost exactly what our own research identified as the
  most-copied Track 04 concepts: farming chatbots, crop disease detection, rural e-commerce,
  digital literacy. The organizer's own three examples (voice commerce, cashless, AI travel)
  are also avoided. Independent assessment put crowding risk at **2 out of 5**, the lowest of
  any concept the team has considered.
- **The framing question is a real one.** "Who owns the intelligence that AI is built on"
  sits directly on a live Malaysian policy debate, and data sovereignty is named in the
  proposed AI Governance Bill.
- **Section 26 is the best-reasoned part of the document.** Bootstrapping onto an existing
  agricultural cooperative rather than convincing a village to adopt a new platform is the
  correct answer to the cold-start problem, and most student concepts never get that far.
- **Roughly a third of the submission is already drafted.** The document contains canvas copy,
  an MVP scope, a demo story, a risk register, taglines and a pitch structure. That is real
  Submission Quality work already banked.

---

## The Problem That Decides It

**No verified case was found, anywhere in Malaysia, of an organisation paying a rural
community or cooperative to license local agricultural data or knowledge.**

The document's own Risk 6 is "Companies Do Not Want to Pay." Its mitigation reads: "Focus
first on high-value, difficult-to-obtain local datasets with clear research or commercial
usefulness." That restates the problem rather than answering it. Risk 6 is not one risk among
six. It is the load-bearing assumption of the entire concept.

The concept asks a judge to accept three unsupported conversions in sequence:

```text
Rural knowledge becomes a usable dataset
        ->  an organisation pays for it
        ->  enough net income reaches community members to matter
```

Each arrow carries major uncertainty, and the document evidences none of them.

### What the Evidence Actually Shows

| Finding                                                                                                                                                                                                                | What It Means for DataKampung                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Malaysia has a voluntary **Agriculture Data Sharing Code of Practice**, dated 29 October 2021, stating farmers should control farm data and recommending contracts, permission and traceability                        | **Helps.** A direct Malaysian policy hook the document does not currently cite. But its worked examples are hypothetical, with no buyer, price or completed transaction                                                                           |
| **HARA (Indonesia)**, the closest ASEAN analogue, reported deployment across 212 villages and 9,000-plus farmers, and named Bank Negara Indonesia as a data buyer in 2018                                              | **Mixed.** Not farmer-governed, and its value was credit scoring rather than licensing knowledge for AI. Its own site describes the data exchange as a 2018 to 2021 phase before pivoting twice. Adaptation, not a durable data-dividend business |
| **Farmobile (US)** sold standardised Electronic Field Records to a reinsurer in 2017; acquired 2021. The earlier US$2-per-acre farmer cheques were a company-funded promotion                                          | **Cautionary.** Proves demand exists for narrow, machine-generated, standardised underwriting data. Does not prove demand for a mixed catalogue of pest stories, dialects, prices and flood memories                                              |
| **Sarawak Biodiversity Centre** signed Malaysia's first benefit-sharing agreement with five indigenous communities in 2019; by 2022 six villages produced 513 litres of LitSara oil for over **RM360,000** in benefits | **Both.** A genuine Malaysian benefit-sharing precedent worth citing. But the income came from a developed product and value chain backed by a state institution over years, not from selling a dataset                                           |
| Malaysia already publishes agricultural data through the **DOA catalogue on data.gov.my**                                                                                                                              | **Hurts.** Free public data creates a substitution problem. The concept must prove its asset is materially fresher, better or unavailable elsewhere                                                                                               |
| Palm oil already has **e-MSPO, SIMS, GeoSAWIT** and a National Traceability System mapping estates and smallholders                                                                                                    | **Hurts, then helps.** These occupy the obvious traceability ground, but they also identify who the realistic buyers would be                                                                                                                     |

`[VERIFY]` Every item above came from a machine research pass and must be opened at source
before any of it enters a submission.

---

## Secondary Problems

- **Zero citations in 1,272 lines.** No URLs, no `[NEEDS SOURCE]`, no `[ASSUMPTION]` labels.
  This conflicts with the workspace evidence rules in `AGENTS.md` and with the rubric question
  "Is each factual baseline sourced?" under the 25% Impact criterion. The document has no
  Malaysian baseline at all: no rural population, no cooperative count, no market size. For
  comparison, every other concept the team assessed carries hard cited numbers.
- **The AI is thin.** Section 18 has AI doing proposal simplification, risk explanation,
  dataset organisation, quality checks, matching and translation. That is AI assisting a
  governance platform, not AI as the innovation. A judge may reasonably ask where the AI is.
- **Vote appeal is weak, and the vote is 30%.** A data cooperative with consent, licensing
  and royalty mechanics is abstract in a five-second glance, and the word "data marketplace"
  can trigger privacy suspicion. Independent assessment put it at **2 out of 5**.
- **No Layak reuse.** Different domain, different architecture. The team's largest execution
  advantage does not transfer.
- **Same domain-access gap as the rest of Track 04, but worse.** This concept needs a real
  rural community more than any other, because it is fundamentally about community governance.
  The team has not stated any such relationship, and the rules forbid inventing one.
- **Scope.** A 1,272-line, four-phase vision must compress into one PDF and one A3 page. The
  risk is a canvas that diagrams an economic model instead of showing a person with a problem.

---

## Scoring

Two independent readings, both against the judged 70%. They differ, and the disagreement is
recorded rather than averaged away.

| Criterion              | Independent pass | This review | Note                                                                                                                                                                                                                                                                |
| ---------------------- | ---------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Innovation, 30         |               25 |          26 | Both rate it highly. Systemic and locally uncrowded, though data trusts have extensive international prior art                                                                                                                                                      |
| Feasibility, 25        |                8 |          11 | The independent pass is harsher. This review credits Section 26's cooperative bootstrap, but no Malaysian payer, price or pilot partner exists                                                                                                                      |
| Impact, 25             |               14 |          15 | Large addressable population, unproven path from data to household income                                                                                                                                                                                           |
| Submission Quality, 20 |                7 |          14 | **Main disagreement.** The independent pass penalises 1,272 uncited lines heavily. This review rates the writing, structure and drafted canvas copy as genuinely strong, and treats the citation gap as an Impact and Feasibility problem rather than a Quality one |
| **Total**              |           **54** |      **66** | Either way, below JalanPulih at 86 and DokumenSiap at 85 in the same track                                                                                                                                                                                          |

Crowding risk **2 out of 5**, the best of any concept considered. Vote appeal **2 out of 5**,
the worst.

---

## The Three-Day Test

The concept is not dead. It is unvalidated, and validation is cheap and fast.

**Narrow it to one cooperative, one buyer, one missing dataset, one paid pilot.** Drop the
general marketplace, the mixed local-knowledge catalogue, AI co-ownership and future royalties
into a long-term roadmap.

Then find one plausible buyer, a mill, exporter, insurer, financier or university, and get
them to confirm three things before the submission goes in:

1. **What data they are missing.**
2. **Why existing systems do not already supply it**, given e-MSPO, SIMS, GeoSAWIT, the
   National Traceability System and the free DOA catalogue.
3. **An indicative price, or willingness to run a paid pilot.**

**If no buyer will confirm those three points before 21 August, do not choose DataKampung.**
A single confirming email would transform the Feasibility score and give the submission
something no competitor will have: a named customer. Without it, the concept asks judges to
take the most important claim on faith.

---

## Recommendation

**Do not submit DataKampung as written.** Keep it as the team's strongest differentiation play
if, and only if, the buyer test above returns a yes within 24 hours.

Two ways it could still be used:

- **As the Track 04 entry**, narrowed to one paid pilot as above, if the buyer confirms.
- **As Section 5 material for whichever concept wins.** The ownership and benefit-sharing
  framing is genuinely good writing, and a "community keeps a share of the value" angle
  strengthens the Impact section of almost any rural concept.

**A note on process.** The commit adding this concept used the message
`datakampung idea suggestion`, which does not follow the Conventional Commits rule enforced by
the `.husky/commit-msg` hook. That suggests the hook is not active on that machine. Running
`bun run setup` once will install it.
