# URIIS Student Biz Innov Challenge 2026

Team workspace for **URIIS - Student Biz Innov Challenge 2026**, a Malaysia national student innovation competition run on the Kolaxus platform.

Tagline: **"Small Ideas. Big Impact."**

Theme: **"Empowering Citizens. Transforming Government. Shaping Malaysia's Future."**

**Team:** TODO: add the 2-5 student members and team name.

---

## Next Deadline

**Idea submission and Innovation Canvas: 21 August 2026 at 11:59 PM.**

Today is 18 August 2026. The deadline is in three days, and no extension will be given.

- Idea submission: PDF only, under 25 MB.
- Innovation Canvas: one A3 portrait page, JPG or PNG only.
- Submit through Kolaxus. Email submissions are not accepted.

Run the full checklist in [`docs/submission/preflight.md`](docs/submission/preflight.md) before submitting.

---

## The Challenge, in Short

Students develop an impactful, scalable innovation aligned with one of four tracks: trustworthy public-sector AI, an end-to-end MyGOV assistant, AI for employment and skills, or rural community empowerment. The goal is to drive entrepreneurship, leadership, and nation-building. Top teams pitch live at URIIS 2026 in Kuala Lumpur.

No coding, prototype, or technical expertise is required. The work is the quality of the idea, evidence, writing, visual concept, and case for impact and feasibility.

Full brief: [`docs/competition/brief.md`](docs/competition/brief.md).

---

## Repo Map

```text
uriis-challenge/
├── docs/
│   ├── competition/     official facts, judging weights, dates, and format rules
│   ├── tracks/          four official problem statements and team prompts
│   ├── research/        cited evidence and reusable templates
│   ├── submission/      deliverable guidance and final preflight
│   ├── source/          primary sources, immutable record
│   └── decisions.md     one-line ledger of lasting team decisions
├── .claude/agents/      Planner, Producer, and QA role adapters
├── .codex/agents/       matching Codex role adapters
└── AGENTS.md            canonical workspace instructions
```

Start at [`docs/README.md`](docs/README.md).

---

## Working Here

```bash
bun install
bun run format
bun run format:check
```

There is no application build. Documents are the product.

One writing rule Prettier cannot enforce: headings, table headers, and bold opening labels use Title Case. Full conventions are in [`AGENTS.md`](AGENTS.md).

---

## Start Now

1. Read [`docs/competition/brief.md`](docs/competition/brief.md) and [`docs/competition/rubrics.md`](docs/competition/rubrics.md).
2. Review all four files in [`docs/tracks/`](docs/tracks/).
3. Choose one track and record it in [`docs/decisions.md`](docs/decisions.md).
4. Assign owners in [`docs/roles.md`](docs/roles.md).
5. Work through the urgent plan in [`docs/plan.md`](docs/plan.md).
6. Draft the submission and canvas copy under [`docs/submission/`](docs/submission/).
7. Run [`docs/submission/preflight.md`](docs/submission/preflight.md) against the exported files.

Never invent team details, research findings, metrics, or validation. Use `TODO:` or `[NEEDS SOURCE]` until the team can support the statement.
