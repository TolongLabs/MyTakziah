import { pathToFileURL } from "node:url";

const DEFAULT_URL = "https://mytakziah.vercel.app/#step1";

export function exactText(value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^\\s*${escaped}\\s*$`, "i");
}

export function exitCodeFor(results) {
  return results.some((result) => result.status === "ABSENT") ? 1 : 0;
}

export async function locatorIsVisible(locator, timeout) {
  try {
    await locator.first().waitFor({ state: "visible", timeout });
    return true;
  } catch {
    return false;
  }
}

export function formatCheckTable(results) {
  const headings = ["STEP", "ANCHOR", "STATUS", "SELECTOR"];
  const rows = results.map((result) => [
    String(result.step),
    result.anchor,
    result.status,
    result.selector,
  ]);
  const widths = headings.map((heading, index) =>
    Math.max(heading.length, ...rows.map((row) => row[index]?.length ?? 0))
  );
  const render = (row) => row.map((cell, index) => String(cell).padEnd(widths[index])).join(" | ");
  return [
    render(headings),
    widths.map((width) => "-".repeat(width)).join("-|-"),
    ...rows.map(render),
  ].join("\n");
}

export async function runAnchorChecks(options = {}) {
  const baseUrl = options.baseUrl ?? process.env.DEMO_URL ?? DEFAULT_URL;
  const timeout = Number(options.timeout ?? process.env.DEMO_TIMEOUT_MS ?? 30_000);
  const headless = process.env.DEMO_HEADLESS !== "false";
  const specifier = process.env.DEMO_PLAYWRIGHT || "playwright";

  const { chromium } = await import(specifier);
  const browser = await chromium.launch({
    headless,
    args: ["--disable-gpu", "--no-sandbox"],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "light",
  });

  const page = await context.newPage();
  page.setDefaultTimeout(timeout);

  const results = [];
  const add = (step, anchor, present, selector) => {
    results.push({ step, anchor, status: present ? "PRESENT" : "ABSENT", selector });
  };
  const check = async (step, anchor, selector, locator, predicate) => {
    if (!(await locatorIsVisible(locator, timeout))) {
      add(step, anchor, false, selector);
      return false;
    }
    const present = predicate ? await predicate(locator).catch(() => false) : true;
    add(step, anchor, present, selector);
    return present;
  };

  try {
    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

    await check(
      "step-1",
      "Step 1 heading",
      'heading "A Death Has Been Verified"',
      page.getByRole("heading", { name: /A Death Has Been Verified/i })
    );
    const continueStep1 = page.getByRole("button", { name: exactText("Continue") });
    await check("step-1", "Continue button", 'button "Continue"', continueStep1);
    await continueStep1.click();

    await check(
      "step-2",
      "Step 2 heading",
      'heading "Provide Your Evidence Once"',
      page.getByRole("heading", { name: /Provide Your Evidence Once/i })
    );
    const fillButton = page.getByRole("button", { name: exactText("Fill This In for Me") });
    await check("step-2", "Fill This In for Me button", 'button "Fill This In for Me"', fillButton);
    await fillButton.click();

    await page
      .getByText("Provided")
      .first()
      .waitFor({ state: "visible", timeout })
      .catch(() => {});

    await check(
      "step-2",
      "Continue is enabled after filling",
      'button "Continue"',
      page.getByRole("button", { name: exactText("Continue") }),
      async (locator) => (await locator.first().isEnabled()) === true
    );
    await page.getByRole("button", { name: exactText("Continue") }).click();

    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "visible", timeout })
      .catch(() => {});
    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "hidden", timeout })
      .catch(() => {});

    await check(
      "step-3",
      "Step 3 heading",
      'heading "What You May Be Entitled To"',
      page.getByRole("heading", { name: /What You May Be Entitled To/i })
    );
    const jpnHeading = page.getByText(exactText("Register the Death"));
    const kwspHeading = page.getByText(exactText("Death Withdrawal, Including Death Assistance"));
    const perkesoHeading = page.getByText(exactText("Funeral Management Benefit"));
    await check("step-3", "JPN entitlement heading", 'heading "Register the Death"', jpnHeading);
    await check(
      "step-3",
      "KWSP entitlement heading",
      'heading "Death Withdrawal, Including Death Assistance"',
      kwspHeading
    );
    await check(
      "step-3",
      "PERKESO entitlement heading",
      'heading "Funeral Management Benefit"',
      perkesoHeading
    );

    const reviewButton = page.getByRole("button", {
      name: exactText("Review What Each Agency Receives"),
    });
    await check(
      "step-3",
      "Review What Each Agency Receives button",
      'button "Review What Each Agency Receives"',
      reviewButton
    );
    await reviewButton.click();

    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "visible" })
      .catch(() => {});
    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "hidden" })
      .catch(() => {});

    await check(
      "step-4",
      "Step 4 heading",
      'heading "Review and Consent, per Agency"',
      page.getByRole("heading", { name: /Review and Consent/i })
    );

    await page.getByRole("button", { name: exactText("I Agree to Send This to JPN") }).click();
    await page.getByRole("tab", { name: exactText("KWSP") }).click();
    await page.getByRole("button", { name: exactText("I Agree to Send This to KWSP") }).click();
    await page.getByRole("tab", { name: exactText("PERKESO") }).click();

    await check(
      "step-4",
      "PERKESO tab stays unconsented",
      'tab "PERKESO"',
      page.getByRole("tab", { name: exactText("PERKESO") })
    );
    await check(
      "step-4",
      "Continue is enabled after consent",
      'button "Continue"',
      page.getByRole("button", { name: exactText("Continue") }),
      async (locator) => (await locator.first().isEnabled()) === true
    );
    await page.getByRole("button", { name: exactText("Continue") }).click();

    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "visible" })
      .catch(() => {});
    await page
      .getByText("Working Through the Published Rules")
      .waitFor({ state: "hidden" })
      .catch(() => {});

    await check(
      "step-5",
      "Step 5 heading",
      'heading "Drafts, and One Timeline"',
      page.getByRole("heading", { name: /Drafts, and One Timeline/i })
    );
    const jpnDraft = page.getByRole("button", { name: exactText("View the draft for JPN") });
    await check("step-5", "JPN draft card", 'button "View the draft for JPN"', jpnDraft);
    await jpnDraft.click();

    await check(
      "step-5",
      "Draft dialog opens for JPN",
      'dialog heading "JPN.LM02, at the registration counter"',
      page.getByRole("heading", { name: exactText("JPN.LM02, at the registration counter") })
    );
    const closeButton = page.getByRole("button", { name: exactText("Close") });
    await check("step-5", "Draft dialog close button", 'button "Close"', closeButton);
    await closeButton.click();

    await check(
      "step-5",
      "Consolidated timeline heading",
      'text "One Status, Across All Three"',
      page.getByText(exactText("One Status, Across All Three"))
    );
    await check(
      "step-5",
      "What Happens Next heading",
      'text "What Happens Next"',
      page.getByText(exactText("What Happens Next"))
    );
    await check(
      "step-5",
      "Supporting document plan heading",
      'text "What to Bring, and In What Order"',
      page.getByText(exactText("What to Bring, and In What Order"))
    );
  } finally {
    await context.close();
    await browser.close();
  }

  return results;
}

async function main() {
  let results = [];
  try {
    results = await runAnchorChecks();
  } catch (error) {
    console.error(
      `preflight check failed: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exitCode = 1;
    return;
  }

  console.log(formatCheckTable(results));
  const missing = results.filter((result) => result.status === "ABSENT");
  if (missing.length > 0) {
    console.error(`\n${missing.length} required anchor${missing.length === 1 ? "" : "s"} absent.`);
  }
  process.exitCode = exitCodeFor(results);
}

const entry = process.argv[1] ? pathToFileURL(process.argv[1]).href : "";
if (entry === import.meta.url) await main();
