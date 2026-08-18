# Track Scorecard

**Owner:** TODO: assign
**Status:** Draft for the 18 August 2026 decision meeting
**Last Updated:** 2026-08-18
**Feeds:** the one-track decision recorded in `../decisions.md`

> **Team assets in play:** Layak, https://github.com/TolongLabs/Layak, built by Adam and Chaos,
> two of the four members. All four members can attend the grand final.

> Scores are research judgments, not competition scores. They exist to make disagreement
> visible, not to decide anything. Full reasoning is in `track-selection-findings.md`.

## The Four Narrowed Concepts

| Label | Track                 | One-Sentence Concept                                                                                                           | Primary User                                                                                 |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| A     | 01 Trustworthy AI     | An AI decision receipt telling a citizen that AI shaped their outcome, what its role was, and how to get a human to look again | A citizen who has just received an adverse or confusing government decision                  |
| B     | 02 One-Stop Assistant | One life event, three federal agencies, information given once, with pre-filled claims and a single status timeline            | A bereaved spouse, typically 55 or older, facing JPN, KWSP and PERKESO                       |
| C     | 03 Talent Ecosystem   | A demand-at-graduation forecaster that ranks a student's own UPU choices with honest uncertainty                               | A STPM, Matrikulasi or Asasi leaver ranking 12 UPU choices                                   |
| D     | 04 Rural Communities  | Predicting and preventing the first missed rehabilitation appointment after a rural stroke discharge                           | A mobility-dependent stroke survivor more than 30 minutes from hospital, and their caregiver |

## Scored Against the Judged 70%

Scores from the independent second-opinion pass, run at maximum reasoning effort with its
own web research. Reasoning for each is in the findings document.

| Criterion              |  Weight |      A |      B |      C |      D | Notes                                                                                                    |
| ---------------------- | ------: | -----: | -----: | -----: | -----: | -------------------------------------------------------------------------------------------------------- |
| Innovation             |      30 |     23 |     22 |     21 | **25** | Every track's obvious version is already announced by government. Scores reflect the narrowed wedge only |
| Feasibility            |      25 |     18 | **19** |     18 |     18 | All four depend on institutions the team cannot commit in three days                                     |
| Social/Economic Impact |      25 |     21 |     22 |     21 | **23** | D has the strongest evidenced baseline. A has the most diffuse benefit                                   |
| Submission Quality     |      20 |     18 |     18 |     18 |     18 | All four can produce a strong canvas. None is disqualified here                                          |
| **Total**              | **100** | **80** | **81** | **78** | **84** | Six points across four options is inside the noise                                                       |

## Best Idea Found in Each Track

Six ideas were ranked per track (eight journeys for Track 02). Full tables and evidence are in
`track-selection-findings.md`. **The best idea outscores its own track in every case**, which
is the entire argument for narrowing before drafting.

| Track | Best Idea       | One Line                                                                                                                         | Idea Score | Track Score | Layak Method Reuse                          |
| ----- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------: | ----------: | ------------------------------------------- |
| 01    | **UjiJawab**    | Citizen-triggered audit replays an official chatbot answer against the versioned government rulebook and returns a cited verdict |     **89** |          80 | **High**                                    |
| 02    | **Bereavement** | One death triggers JPN, KWSP and PERKESO, each demanding the same evidence. Give it once                                         |     **89** |          81 | Architecture yes, content no                |
| 03    | **KerjaBetul**  | Reads a real job offer and its duties, returns a cited underemployment-risk and career-capital verdict before the student signs  |     **89** |          78 | **High**                                    |
| 04    | **JalanPulih**  | Predict which rural stroke patient will miss their first rehabilitation appointment, then coordinate transport or nearer care    |     **86** |          84 | Medium. Runner-up DokumenSiap at 85 is High |

**The cross-cutting finding.** The top idea in three of the four tracks can reuse the Layak
method, meaning a grounded rule engine plus source-cited provenance plus pre-filled output.
The team's asset is a portable method, not a Track 02 lock-in. This widens the viable choice
and weakens, though does not overturn, the case for Track 02.

## Factors Not in the Score

| Factor                                       | A             | B                                | C                                     | D                                                     |
| -------------------------------------------- | ------------- | -------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| Vote appeal, 1 to 5                          | 3             | 4                                | 5 raw, about 3.5 after vote splitting | 4                                                     |
| Crowding risk                                | High, 4/5     | **Highest, 4.5/5**               | High                                  | Moderate to high                                      |
| Answers a question the organizer asked aloud | Yes, directly | Yes                              | Yes, directly                         | Not the three examples he gave, which is an advantage |
| Actuarial half has a real job                | **Strongest** | Weakest                          | Strong                                | Strong                                                |
| Team already holds usable assets             | No            | **Yes, Layak** by Adam and Chaos | No                                    | No                                                    |
| Blocking unknown                             | None          | Which journey, see below         | None                                  | **Clinical or rural access**                          |

## Recommendation and Its Counter-Case

**Recommended: B.** Not because it scored highest, but because the scores are within noise
and the team's existing Layak work converts directly into Feasibility and Submission Quality
marks inside a three-day window, with the organizer explicitly permitting reuse.

**Overturn it if:** any team member has a healthcare contact or a rural Sabah or Sarawak
connection. That answer makes **D** the stronger pick, and D scored highest.

**Do not pick B in its generic form.** GovTech has already announced TanyaKerajaan,
MyCitizenProfile and BorangMy. One life event, end to end, or nothing.

## If Track 02 Wins: Which Journey

Concept B above is a track, not yet a journey. Eight candidate journeys were ranked in a
dedicated research pass. Full reasoning and evidence are in `track-selection-findings.md`.

| Rank | Journey                                    | Score | Crowding      | Layak Reuse                      | The "Already Exists" Attack           |
| ---: | ------------------------------------------ | ----: | ------------- | -------------------------------- | ------------------------------------- |
|    1 | Bereavement: JPN, KWSP, PERKESO            |    89 | Low to medium | Architecture yes, content no     | Survives strongly                     |
|    2 | OKU registration and benefit activation    |    87 | Low           | Architecture yes, content partly | Survives strongly                     |
|    3 | Layak continuation, submitted and tracked  |    84 | High          | Maximum                          | Survives only on one condition        |
|    4 | Change of address once, updated everywhere |    80 | Low           | Low                              | Mostly survives                       |
|    5 | Job loss: EIS and MYFutureJobs             |    78 | High          | Partial                          | Weak, and may read as Track 03        |
|    6 | New baby                                   |    76 | Very high     | Low                              | Medium to weak                        |
|    7 | Retirement or turning 60                   |    70 | Low           | Good                             | Medium to weak                        |
|    8 | Micro-business start-up                    |    68 | Very high     | Low                              | Poor, MalaysiaBiz already claims this |

**The condition on continuing Layak.** It must demonstrate three named federal transactions
actually submitted and tracked, not 189 discoveries and not another draft packet. Without
that leap, a judge's "is this not Ihsan MADANI, and is this not your old project" lands.

**What continuing Layak is worth.** Feasibility 25 plus Submission Quality 20 is 45% of the
expert score, which is 31.5% of the final score. Reuse has real scoring value, not just
convenience.

## Team Vote

Fill this in during the meeting. Scores are 1 to 5, or write the label you favour.

| Member | Favoured Track | Main Reason | Main Worry |
| ------ | -------------- | ----------- | ---------- |
| TODO   | TODO           | TODO        | TODO       |
| TODO   | TODO           | TODO        | TODO       |
| TODO   | TODO           | TODO        | TODO       |
| TODO   | TODO           | TODO        | TODO       |

## Decision

**Selected Concept:** TODO

**Why:** TODO

**Main Risk:** TODO

**Evidence Needed Next:** TODO

**Target Submission Date:** TODO: earlier than 21 August buys extra days of vote exposure

Record the lasting decision in `../decisions.md`.
