import { describe, expect, test } from "bun:test";
import { exactText, exitCodeFor, formatCheckTable } from "./check-shots.mjs";

describe("shot anchor checks", () => {
  test("matches exact text without depending on rendered case", () => {
    const pattern = exactText("I Agree to Send This to JPN");

    expect(pattern.test("I AGREE TO SEND THIS TO JPN")).toBe(true);
    expect(pattern.test("I Agree to Send This to JPN now")).toBe(false);
  });

  test("rejects partial matches and surrounding whitespace variations", () => {
    const pattern = exactText("What Happens Next");

    expect(pattern.test("What Happens Next")).toBe(true);
    expect(pattern.test("  What Happens Next  ")).toBe(true);
    expect(pattern.test("See What Happens Next")).toBe(false);
  });

  test("fails the gate when any required anchor is absent", () => {
    expect(
      exitCodeFor([
        { step: "step-1", anchor: "Step 1 heading", status: "PRESENT", selector: "heading" },
        { step: "step-4", anchor: "PERKESO tab", status: "ABSENT", selector: "tab" },
      ])
    ).toBe(1);
  });

  test("passes the gate when every anchor is present", () => {
    expect(
      exitCodeFor([
        { step: "step-1", anchor: "Step 1 heading", status: "PRESENT", selector: "heading" },
        { step: "step-4", anchor: "PERKESO tab", status: "PRESENT", selector: "tab" },
      ])
    ).toBe(0);
  });

  test("prints a present or absent row with the resolved selector", () => {
    const table = formatCheckTable([
      { step: "step-1", anchor: "Step 1 heading", status: "PRESENT", selector: "heading" },
      { step: "step-4", anchor: "PERKESO tab", status: "ABSENT", selector: "tab" },
    ]);

    expect(table).toContain("STEP");
    expect(table).toContain("ANCHOR");
    expect(table).toContain("STATUS");
    expect(table).toContain("PRESENT");
    expect(table).toContain("ABSENT");
    expect(table).toContain("heading");
    expect(table).toContain("tab");
  });
});
