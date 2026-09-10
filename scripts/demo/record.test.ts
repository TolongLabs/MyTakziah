import { describe, expect, test } from "bun:test";
import { assertCompleteTake, exactText, normalizedBeatOffsets } from "./record.mjs";

const complete = [
  { name: "step-1", ms: 1_000 },
  { name: "step-2", ms: 9_000 },
  { name: "step-3", ms: 44_000 },
  { name: "step-4", ms: 79_000 },
  { name: "step-5", ms: 124_000 },
  { name: "end", ms: 154_000 },
];

describe("demo recording beats", () => {
  test("rejects a take that omits a required beat", () => {
    expect(() => assertCompleteTake(complete.filter((beat) => beat.name !== "step-3"))).toThrow(
      "step-3"
    );
  });

  test("rejects beats that run backwards", () => {
    const outOfOrder = complete.map((beat) => ({ ...beat }));
    outOfOrder[3] = { name: "step-4", ms: 5_000 };

    expect(() => assertCompleteTake(outOfOrder)).toThrow("strictly increasing");
  });

  test("rejects a take missing the final beat", () => {
    expect(() => assertCompleteTake(complete.filter((beat) => beat.name !== "end"))).toThrow("end");
  });

  test("normalizes measured offsets to the first filmed beat", () => {
    expect(normalizedBeatOffsets(complete).slice(0, 3)).toEqual([
      { name: "step-1", ms: 0 },
      { name: "step-2", ms: 8_000 },
      { name: "step-3", ms: 43_000 },
    ]);
  });

  test("matches exact text ignoring surrounding whitespace and case", () => {
    const pattern = exactText("Continue");

    expect(pattern.test("CONTINUE")).toBe(true);
    expect(pattern.test("  continue  ")).toBe(true);
    expect(pattern.test("Continue now")).toBe(false);
  });
});
