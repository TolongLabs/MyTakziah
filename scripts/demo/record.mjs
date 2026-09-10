import { spawnSync } from "node:child_process";
import { mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_URL = "https://mytakziah.vercel.app/#step1";
const BEAT_NAMES = ["step-1", "step-2", "step-3", "step-4", "step-5", "end"];

export function assertCompleteTake(beats) {
  for (const name of BEAT_NAMES) {
    if (!beats.some((beat) => beat.name === name)) {
      throw new Error(`take is missing required beat ${name}`);
    }
  }

  const ordered = BEAT_NAMES.map((name) => beats.find((beat) => beat.name === name));
  for (let index = 1; index < ordered.length; index += 1) {
    if (ordered[index].ms <= ordered[index - 1].ms) {
      throw new Error("required beats must be strictly increasing");
    }
  }
}

export function normalizedBeatOffsets(beats) {
  assertCompleteTake(beats);
  const first = beats.find((beat) => beat.name === "step-1").ms;
  return beats.filter((beat) => beat.ms >= first).map((beat) => ({ ...beat, ms: beat.ms - first }));
}

export function exactText(value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^\\s*${escaped}\\s*$`, "i");
}

async function installCursor(page) {
  await page.addInitScript(() => {
    const attach = () => {
      if (document.getElementById("mytakziah-demo-cursor")) return;
      const style = document.createElement("style");
      style.textContent = `
        #mytakziah-demo-cursor {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2147483647;
          width: 22px;
          height: 22px;
          border: 2px solid rgba(40, 25, 19, 0.92);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 1px 4px rgba(40, 25, 19, 0.24);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 120ms ease, height 120ms ease, background 120ms ease;
        }
        #mytakziah-demo-cursor[data-down='true'] {
          width: 16px;
          height: 16px;
          background: rgba(40, 25, 19, 0.28);
        }
      `;
      const cursor = document.createElement("div");
      cursor.id = "mytakziah-demo-cursor";
      document.head.append(style);
      document.body.append(cursor);
      document.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      });
      document.addEventListener("mousedown", () => {
        cursor.dataset.down = "true";
      });
      document.addEventListener("mouseup", () => {
        delete cursor.dataset.down;
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", attach, { once: true });
    } else {
      attach();
    }
  });
}

async function centerOf(locator) {
  const box = await locator.first().boundingBox();
  if (!box) throw new Error("target has no bounding box");
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
}

export async function recordMyTakziahDemo(options = {}) {
  const baseUrl = options.baseUrl ?? process.env.DEMO_URL ?? DEFAULT_URL;
  const demoDir = resolve(options.demoDir ?? process.env.DEMO_DIR ?? ".demo-output");
  const headless = process.env.DEMO_HEADLESS !== "false";
  const timeout = Number(options.timeout ?? process.env.DEMO_TIMEOUT_MS ?? 30_000);
  const specifier = process.env.DEMO_PLAYWRIGHT || "playwright";

  const videoDir = join(demoDir, "playwright-video");
  const capturePath = join(demoDir, "capture.webm");

  mkdirSync(demoDir, { recursive: true });
  rmSync(videoDir, { recursive: true, force: true });
  rmSync(capturePath, { force: true });
  mkdirSync(videoDir, { recursive: true });

  if (!process.env.TMPDIR) {
    process.env.TMPDIR = join(demoDir, "tmp");
  }
  mkdirSync(process.env.TMPDIR, { recursive: true });

  const { chromium } = await import(specifier);
  const browser = await chromium.launch({
    headless,
    args: ["--disable-gpu", "--no-sandbox"],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    colorScheme: "light",
    recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
  });

  const page = await context.newPage();
  page.setDefaultTimeout(timeout);

  const errors = [];
  const claims = [];
  const beats = [];
  let pointer = { x: 1_100, y: 120 };
  let failure = null;

  page.on("pageerror", (error) => errors.push(String(error).slice(0, 240)));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text().slice(0, 240));
  });

  await installCursor(page);

  const elapsed = () => Date.now() - startedAt;
  const pause = (ms) => page.waitForTimeout(ms);
  const startedAt = Date.now();

  const must = async (locator, name) => {
    try {
      await locator.first().waitFor({ state: "visible", timeout });
    } catch {
      throw new Error(`required recording anchor is absent: ${name}`);
    }
    return locator;
  };

  const countOf = (locator) => locator.count();

  const claim = async (beat, statement, check) => {
    let ok = false;
    let detail = "";
    try {
      const result = await check();
      ok = result === true || (typeof result === "number" && result > 0);
      if (typeof result === "string") {
        ok = false;
        detail = result;
      }
    } catch (error) {
      detail = error instanceof Error ? error.message.split("\n")[0].slice(0, 80) : String(error);
    }
    claims.push({ beat, statement, ok, detail });
  };

  const mark = (name) => {
    const ms = elapsed();
    beats.push({ name, ms });
    console.log(`${String(ms).padStart(6)}ms  ${name}`);
  };

  const finishShot = async (name, durationMs) => {
    const start = beats.find((beat) => beat.name === name)?.ms;
    if (start === undefined) throw new Error(`cannot pace missing beat ${name}`);
    const remaining = start + durationMs - elapsed();
    if (remaining > 0) await pause(remaining);
  };

  const moveTo = async (locator, duration = 480) => {
    const target = await centerOf(locator);
    const steps = Math.max(1, Math.round(duration / 24));
    const origin = pointer;
    for (let step = 1; step <= steps; step += 1) {
      const t = step / steps;
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const x = origin.x + (target.x - origin.x) * eased;
      const y = origin.y + (target.y - origin.y) * eased;
      await page.mouse.move(x, y);
      await pause(24);
    }
    pointer = target;
  };

  const click = async (locator, after = 450) => {
    await locator.first().scrollIntoViewIfNeeded();
    await locator
      .first()
      .evaluate((element) => element.scrollIntoView({ block: "center", behavior: "instant" }));
    await moveTo(locator);
    await pause(320);
    await locator.first().click();
    await pause(after);
  };

  const smoothScrollTo = async (locator, offset = 120, ms = 1_600) => {
    const target = await locator
      .first()
      .evaluate(
        (element, off) => element.getBoundingClientRect().top + window.scrollY - off,
        offset
      );
    const from = await page.evaluate(() => window.scrollY);
    const steps = Math.max(1, Math.round(ms / 40));
    for (let step = 1; step <= steps; step += 1) {
      const t = step / steps;
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const pos = from + (target - from) * eased;
      await page.evaluate((p) => window.scrollTo({ top: p, behavior: "instant" }), pos);
      await pause(40);
    }
    await pause(600);
  };

  const waitForPipeline = async () => {
    const overlay = page.getByText("Working Through the Published Rules");
    await overlay.waitFor({ state: "visible", timeout });
    await overlay.waitFor({ state: "hidden", timeout });
    await pause(400);
  };

  try {
    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await page.mouse.move(pointer.x, pointer.y);

    const step1Heading = page.getByRole("heading", { name: /A Death Has Been Verified/i });
    await must(step1Heading, "Step 1 heading");
    mark("step-1");
    await claim("step-1", "the verification record is shown", async () => {
      return (await countOf(page.getByText("Fatimah binti Abdullah"))) > 0;
    });
    await finishShot("step-1", 6_000);
    const continueStep1 = page.getByRole("button", { name: exactText("Continue") });
    await click(continueStep1);

    const step2Heading = page.getByRole("heading", { name: /Provide Your Evidence Once/i });
    await must(step2Heading, "Step 2 heading");
    mark("step-2");

    const fillButton = page.getByRole("button", { name: exactText("Fill This In for Me") });
    await must(fillButton, "Fill This In for Me button");
    await click(fillButton);

    await page.getByText("Provided").first().waitFor({ state: "visible", timeout });
    await claim("step-2", "all five groups and the three conditions are completed", async () => {
      const provided = await countOf(page.getByText("Provided"));
      const answered = await countOf(page.getByText("Answered"));
      const continueButton = page.getByRole("button", { name: exactText("Continue") });
      if (provided < 5) return `${provided} of 5 groups show Provided`;
      if (answered < 1) return "conditions do not show Answered";
      return await continueButton.isEnabled();
    });
    await finishShot("step-2", 22_000);

    const continueStep2 = page.getByRole("button", { name: exactText("Continue") });
    await click(continueStep2);
    await waitForPipeline();

    const step3Heading = page.getByRole("heading", { name: /What You May Be Entitled To/i });
    await must(step3Heading, "Step 3 heading");
    mark("step-3");

    await smoothScrollTo(page.getByText(exactText("Register the Death")));
    await smoothScrollTo(page.getByText(exactText("Death Withdrawal, Including Death Assistance")));
    await smoothScrollTo(page.getByText(exactText("Funeral Management Benefit")));
    await smoothScrollTo(page.getByText(exactText("Survivors' Pension")));
    await finishShot("step-3", 28_000);

    const reviewButton = page.getByRole("button", {
      name: exactText("Review What Each Agency Receives"),
    });
    await click(reviewButton);
    await pause(800);

    const step4Heading = page.getByRole("heading", { name: /Review and Consent/i });
    await must(step4Heading, "Step 4 heading");
    mark("step-4");

    for (const agency of ["JPN", "KWSP"]) {
      if (agency !== "JPN") {
        await click(page.getByRole("tab", { name: exactText(agency) }));
      }
      const consentButton = page.getByRole("button", {
        name: exactText(`I Agree to Send This to ${agency}`),
      });
      await click(consentButton);
      await page
        .getByText(exactText(`Consent Given for ${agency}`))
        .first()
        .waitFor({ state: "visible", timeout });
    }

    await click(page.getByRole("tab", { name: exactText("PERKESO") }));
    await pause(1_500);
    await claim("step-4", "JPN and KWSP are consented, PERKESO is not", async () => {
      const jpnConsented =
        (await page
          .getByRole("tab", { name: exactText("JPN") })
          .locator("svg")
          .count()) > 0;
      const kwspConsented =
        (await page
          .getByRole("tab", { name: exactText("KWSP") })
          .locator("svg")
          .count()) > 0;
      const perkesoConsented =
        (await page
          .getByRole("tab", { name: exactText("PERKESO") })
          .locator("svg")
          .count()) > 0;
      if (!jpnConsented) return "JPN is not consented";
      if (!kwspConsented) return "KWSP is not consented";
      if (perkesoConsented) return "PERKESO should not be consented";
      return true;
    });
    await finishShot("step-4", 22_000);

    const continueStep4 = page.getByRole("button", { name: exactText("Continue") });
    await click(continueStep4);
    await waitForPipeline();

    const step5Heading = page.getByRole("heading", { name: /Drafts, and One Timeline/i });
    await must(step5Heading, "Step 5 heading");
    mark("step-5");

    const jpnDraft = page.getByRole("button", { name: exactText("View the draft for JPN") });
    await must(jpnDraft, "JPN draft card");
    await click(jpnDraft);

    const draftFormHeading = page.getByRole("heading", {
      name: exactText("JPN.LM02, at the registration counter"),
    });
    await must(draftFormHeading, "JPN draft heading");
    await page
      .getByText(exactText("DRAFT, SUBMITTED"))
      .first()
      .waitFor({ state: "visible", timeout });
    await pause(2_000);
    await click(page.getByRole("button", { name: exactText("Close") }));

    await smoothScrollTo(page.getByText(exactText("One Status, Across All Three")));
    await smoothScrollTo(page.getByText(exactText("What Happens Next")));
    await smoothScrollTo(page.getByText(exactText("What to Bring, and In What Order")));

    await claim("step-5", "the timeline, next steps, and document plan are visible", async () => {
      const a = await page
        .getByText(exactText("One Status, Across All Three"))
        .first()
        .isVisible()
        .catch(() => false);
      const b = await page
        .getByText(exactText("What Happens Next"))
        .first()
        .isVisible()
        .catch(() => false);
      const c = await page
        .getByText(exactText("What to Bring, and In What Order"))
        .first()
        .isVisible()
        .catch(() => false);
      if (!a) return "timeline heading not visible";
      if (!b) return "What Happens Next heading not visible";
      if (!c) return "document plan heading not visible";
      return true;
    });
    await finishShot("step-5", 40_000);

    await pause(4_000);
    mark("end");
    assertCompleteTake(beats);
  } catch (error) {
    failure = error;
  } finally {
    try {
      await context.close();
    } catch (closeError) {
      failure = failure ?? closeError;
    }

    let videoPath = null;
    try {
      videoPath = await page.video().path();
    } catch {
      // The page may not have produced a video.
    }
    if (videoPath && capturePath) {
      try {
        renameSync(videoPath, capturePath);
      } catch (renameError) {
        failure = failure ?? renameError;
      }
    }

    try {
      await browser.close();
    } catch (closeError) {
      failure = failure ?? closeError;
    }

    writeFileSync(join(demoDir, "beats.json"), `${JSON.stringify(beats, null, 2)}\n`);
  }

  if (claims.length > 0) {
    console.log("\nclaim checks, one per beat, asserted where the narration makes its claim:");
    for (const entry of claims) {
      const mark_ = entry.ok ? "PASS" : "FAIL";
      console.log(
        `  ${mark_}  ${entry.beat.padEnd(8)} ${entry.statement}${
          entry.detail ? ` -- ${entry.detail}` : ""
        }`
      );
    }
    const failed = claims.filter((entry) => !entry.ok);
    if (failed.length > 0) {
      failure =
        failure ??
        new Error(
          `${failed.length} claim check(s) failed: ${failed.map((e) => e.beat).join(", ")}`
        );
    }
  }

  console.log(`video: ${capturePath}`);
  console.log(`beats: ${join(demoDir, "beats.json")}`);
  console.log(`console errors: ${errors.length}`);
  for (const error of errors.slice(0, 5)) console.log(`  ! ${error}`);

  if (failure) throw failure;
  return { capturePath, beats, errors };
}

async function main() {
  try {
    await recordMyTakziahDemo();
  } catch (error) {
    console.error(`recording failed: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}

const entry = process.argv[1] ? pathToFileURL(process.argv[1]).href : "";
if (entry === import.meta.url) await main();
