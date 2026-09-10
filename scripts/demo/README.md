# MyTakziah E2E Walkthrough Recorder

Records a silent, end-to-end walkthrough of the MyTakziah concept prototype with a
synthetic cursor, deterministic pauses, and claim checks at every beat. The output is
a WebM capture and a beat log; `encode.sh` turns the capture into a silent 1920x1080
H.264 MP4.

## What It Does

| Command       | Purpose                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `demo:check`  | Open the target site and verify every production anchor and critical interaction before a take. |
| `demo:record` | Film the full five-step walkthrough and write `capture.webm` plus `beats.json`.                 |
| `demo:encode` | Convert `capture.webm` to a silent, padded H.264 MP4.                                           |
| `demo:test`   | Run focused unit tests on the beat and checker helpers.                                         |

## Prerequisites

- Bun, for package install and tests.
- ffmpeg and ffprobe, on `PATH`.
- Playwright Chromium, installed through the dev dependency.
- A writable directory for capture output. The default is `.demo-output` at the repo root.

## One-Time Install

```bash
bun install
```

This installs Playwright as a dev dependency only. It does not add production code to
the frontend.

## Commands

Run the preflight gate first:

```bash
bun run demo:check
```

Record the walkthrough:

```bash
bun run demo:record
```

Encode the capture:

```bash
bun run demo:encode
```

Run the focused tests:

```bash
bun run demo:test
```

A full pipeline in one session:

```bash
bun run demo:check && bun run demo:record && bun run demo:encode
```

## Environment Variables

| Variable          | Default                                  | Purpose                                                        |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------- |
| `DEMO_URL`        | `https://mytakziah.vercel.app/#step1`    | The site to record or check.                                   |
| `DEMO_DIR`        | `.demo-output` at the repo root          | Directory for `capture.webm`, `beats.json`, and the final MP4. |
| `DEMO_OUT`        | `DEMO_DIR/mytakziah-e2e-walkthrough.mp4` | Path for the encoded MP4.                                      |
| `DEMO_SOURCE`     | `DEMO_DIR/capture.webm`                  | Source for `encode.sh`.                                        |
| `DEMO_HEADLESS`   | `true`                                   | Set to `false` to show the browser.                            |
| `DEMO_TIMEOUT_MS` | `30000`                                  | Locator timeout for record and check.                          |
| `DEMO_FFMPEG`     | `ffmpeg`                                 | Path to an alternate ffmpeg binary.                            |
| `DEMO_FFPROBE`    | `ffprobe`                                | Path to an alternate ffprobe binary.                           |
| `DEMO_PLAYWRIGHT` | `playwright`                             | Module specifier for a Playwright install outside the repo.    |

## Outputs

All media stays under `DEMO_DIR` and is ignored by Git.

- `capture.webm`: the 1440x900 Playwright recording.
- `beats.json`: the timestamp for each recorded beat, `step-1` through `end`.
- `mytakziah-e2e-walkthrough.mp4`: the final silent 1920x1080 H.264 MP4.

## Failure Recovery

- If a take fails, delete the relevant files under `DEMO_DIR` or set a fresh
  `DEMO_DIR`, then run again.
- If the browser crashes with resource errors, set `DEMO_DIR` to a directory on a
  filesystem with free space before the run.
- If a claim fails, the beat log and the console error list are still written so the
  failing assertion can be inspected.
- `demo:check` exits with a non-zero code and prints an `ABSENT` row for every missing
  anchor. Fix the anchor before recording, because a missing anchor will abort a take.

## Production Warning

All agency responses, submissions, and status updates shown in the walkthrough are
simulated. MyTakziah does not verify or register a death, does not connect to live JPN,
KWSP, or PERKESO systems, and does not decide eligibility. The agency always decides.
