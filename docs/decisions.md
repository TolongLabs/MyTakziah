# DECISIONS

> Persistent decision log. Add one line per lasting team choice, newest at the bottom. Never rewrite history silently.

Format:

```text
- YYYY-MM-DD: <decision area>: <decision>: <one-clause rationale>
```

Example placeholder:

```text
- YYYY-MM-DD: selected track: TODO: TODO
```

## Decisions Needed Now

- TODO: team name
- TODO: full names of all four members, and confirmation of whether Chaos and Andersonnn7788 are the same person
- TODO: primary target user
- TODO: core concept
- TODO: final submission owner and backup verifier

## Recorded Decisions

- 2026-08-18: team composition: four members, two Computer Science and two Actuarial Science: supplied by the team
- 2026-08-18: team lead: Andersonnn7788: supplied by the team
- 2026-08-18: grand final attendance: all members can attend the physical grand final in Kuala Lumpur on 23 September 2026: confirmed by the team, and required because finalists who cannot attend are not selected
- 2026-08-18: prior art: Layak, https://github.com/TolongLabs/Layak, grand champion at the Project 2030 MyAI Future Hackathon Open Category, was built by Adam and Chaos, two of the four members: supplied by the team, and reusable because the organizer permits submitting or improvising a similar prior project
- 2026-08-18: selected track: Track 02, One-Stop AI Assistant for End-to-End Government Services: chosen over Track 04 because the four tracks scored within six points of each other while execution capacity in the remaining time did not, and because a frontend-only mocked prototype can demonstrate a workflow but cannot demonstrate a market
- 2026-08-18: selected concept: the bereavement journey, one verified death handled once across JPN, KWSP and PERKESO: best literal fit to the track wording, entirely federal core agencies, measurable money at stake, and the lowest crowding of the strong Track 02 journeys
- 2026-08-18: concept rejected: DataKampung: kept on record as the most original idea produced, rejected because no verified case was found of any Malaysian organisation paying a rural community for data, leaving Feasibility and Impact resting on one unevidenced assumption
- 2026-08-18: concept name: MyTakziah: the My- prefix places it in the recognised government service family alongside MyKad, MySejahtera and MyDigital ID, supporting the argument that this is the missing layer inside MyGOV, while takziah is the standard respectful Malaysian word for condolences and carries no risk of reading as flippant
- 2026-08-18: names rejected: Kayangan and unprefixed Takziah: Kayangan is a euphemism for dying drawn from Hindu-Javanese cosmology rather than syurga, carries the orang kayangan slang sense of the out-of-touch super-rich, and collides with luxury property branding; unprefixed Takziah loses the government-family signal
- 2026-08-18: naming caution: do not imply official endorsement: no government logos or wording suggesting MyTakziah is an existing or sanctioned MyGOV service
- 2026-08-18: positioning rule: never pitch this as an AI government chatbot: Track 02 has the highest crowding risk of the four, and the generic version is already announced and partly built by GovTech
- 2026-08-18: track shortlist position: the team lead argued against Track 03 on the grounds that most teams would choose it: recorded as the lead's position, and supported by research showing Track 03 has the densest incumbent landscape
- 2026-08-19: agencies in v1: JPN, KWSP and PERKESO only, with Tabung Haji, ASB and JKM named as future scope and not built: all three are federal core agencies with public forms and publicly documented benefits, which keeps the feasibility claim tight
- 2026-08-19: out of scope, and stated as such in the submission: estate distribution, faraid and probate, banks, zakat, and local burial management: these add religious, judicial, state and local-authority complexity, and writing the boundary down protects Feasibility and pre-empts the obvious judge question
- 2026-08-19: definition of end to end: submitted, receipted and tracked, never automatically approved: the agency keeps every eligibility and approval decision, and this single sentence protects the concept in question and answer
- 2026-08-19: geographic scope: Peninsular Malaysia for v1, with Sabah and Sarawak named as phase 2: Sabah and Sarawak death registration procedures differ, and committing to a national roadmap strengthens Impact while obliging the submission to say credibly how those differences get handled
- 2026-08-19: the one-sentence answer to "is this not just the MyGOV chatbot": "A chatbot tells you what to do. MyTakziah does it: one death, one set of evidence, three agencies' claims prepared, submitted and tracked under published rules the family can check.": drafted rather than debated because the positioning rule it expresses was already locked on 2026-08-18, and every member needs one sentence they can say from memory. The team may amend the wording; the distinction it draws, generated answer versus cited rule plus pre-filled form, is the part that must survive
- 2026-08-19: team name: Survive: supplied by the team, and it carries a useful resonance because "survivor" is the exact administrative term in this domain, as in PERKESO's Survivors' Pension and the surviving spouse, so the name names the user rather than the event
- 2026-08-19: deck production tool: Canva, building on an imported copy of the official template PDF: chosen by the members drafting the slides, and recorded because the export path affects the under-25-MB gate, where Canva's PDF Print setting can exceed it and PDF Standard does not
- 2026-08-20: prototype disclosure: the persistent CONCEPT DEMO banner is removed from the prototype: the team judged it self-evident that a walkthrough with no login and no data is a demo, and it cost vertical space on every frame; disclosure moves to a dedicated About page linked from the footer on every screen, plus the interface wording rules that never say approved or granted
- 2026-08-20: prototype theme: light by default rather than following the operating system: the canvas and the deck are both light, and a judge on a dark-set machine would otherwise see a palette nobody designed against
- 2026-08-20: JPN form code corrected from NRD.LM02 to JPN.LM02 (and JPN.LM09, JPN.LM10): the Bahasa Malaysia service page, checked under issue #20, gives the JPN code; the English page's "NRD" is a machine-translation of the department name, not the form identifier; corrected in research and submission drafts, frontend prototype still to follow
- 2026-08-20: SDG alignment: SDG 16 at target 16.6 as primary and SDG 1 at target 1.3 as secondary, with SDG 10 and SDG 5 explicitly not claimed: the SDGs appear nowhere in the official template, the briefing PDF or either transcript, so this is voluntary and other teams are doing it; two goals quoted at target level are defensible where a longer list is not, and naming what we do not claim is the part that reads as rigour. SDG 10 is refused because v1 is Peninsular only by the 2026-08-19 geography decision, and SDG 5 because we hold no gender-disaggregated evidence
- 2026-08-20: prototype now follows the JPN.LM02 correction recorded earlier the same day: the frontend carried NRD.LM02, JPN.LM09 and JPN.LM10 in five places, which would have shipped an outdated form code into the canvas screenshots
- 2026-08-20: brand mark: the Anyaman weave, three hexagonal strands woven Borromean so that no strand sits on top of the other two: selected by the team from six generated directions, and the only one of the six that held its structure at 32 pixels without reading as something else (the others read as a torii gate, a share icon, a play button, a human figure, or collapsed entirely)
- 2026-08-20: brand mark is vector, not raster: the generated PNG was redrawn as SVG in `docs/submission/brand/mytakziah-mark.svg`: an image model cannot produce per-strand colour control or survive A3 at 300 DPI, and the redraw also removed the weave seams the generated version carried
- 2026-08-20: brand mark colour: three colours, terracotta for JPN, ochre for KWSP and slate for PERKESO, replacing the previous single terracotta: requested by the team, and settled at three rather than two because three strands is the mark's whole argument and a two-colour version would make two of the three agencies look like the same thing; in one flat colour the weave also reads as a honeycomb, so colour is load-bearing rather than decorative
- 2026-08-20: slate accepted in the mark despite the standing caution against MyGOV blue: slate `#376D7C` is a desaturated teal already used in the product as the settled-state colour, it carries one strand of three rather than the mark's dominant tone, and the alternative all-warm palette merged two strands at thumbnail size; recorded here because it is a deliberate exception, so reverse it consciously if a judge reads it as institutional
- 2026-08-20: a one-colour lockup ships alongside the colour mark: `mytakziah-mark-mono.svg`, which breaks each strand with a knockout gap where it passes underneath: the footer repaints the mark with a CSS filter that destroys colour, and without the gaps the flattened mark loses the weave
- 2026-08-21: the deck may show a human figure, and the canvas forbidden list no longer binds it: requested by the team while reviewing the slides, and recorded because `canvas/canvas-copy.md` bans people in every visual artifact. The figure is an illustrated fictional composite, painted into the slide background as one scene rather than composited on top, seen from behind with no visible face, so posture carries the story and the image cannot read as a portrait of a real person or of one particular community. The A3 canvas keeps the original ban
- 2026-08-21: the deck names only the surviving spouse, Encik Ismail, and no longer names the deceased: raised by the team on the grounds that a judge could share the name; the narrower risk is naming a person who is described as having died, so the wife is referred to only as his wife. The prototype fixture in `frontend/src/data.ts` still carries the earlier name and has not been changed
