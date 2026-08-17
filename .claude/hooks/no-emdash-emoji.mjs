import { readFileSync } from "node:fs";

const EXEMPT = [".agents/skills/", ".claude/skills/", "docs/source/", "node_modules/"];

const RULES = [
  {
    label: "em dash (U+2014)",
    pattern: /\u{2014}/gu,
    fix: "use a comma, colon, semicolon, parentheses, or plain hyphen",
  },
  {
    label: "horizontal bar (U+2015)",
    pattern: /\u{2015}/gu,
    fix: "use a comma, colon, semicolon, parentheses, or plain hyphen",
  },
  {
    label: "emoji",
    pattern: /\p{Extended_Pictographic}/gu,
    fix: "delete it or express the meaning in words",
  },
];

const allow = () => process.exit(0);

function tally(value, pattern) {
  if (typeof value !== "string" || value.length === 0) return 0;
  return value.match(pattern)?.length ?? 0;
}

function excerpt(value, pattern) {
  const position = value.search(pattern);
  if (position < 0) return "";
  return value
    .slice(Math.max(0, position - 40), position + 40)
    .replace(/\s+/g, " ")
    .trim();
}

let raw = "";
try {
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) raw += chunk;
} catch {
  allow();
}

let payload;
try {
  payload = JSON.parse(raw);
} catch {
  allow();
}

const input = payload?.tool_input ?? {};
const target = String(input.file_path ?? input.notebook_path ?? "").replace(/\\/g, "/");
if (EXEMPT.some((directory) => target.includes(directory))) allow();

const pairs = [];
if (typeof input.content === "string") {
  let existing = "";
  try {
    existing = readFileSync(target, "utf8");
  } catch {
    existing = "";
  }
  pairs.push([existing, input.content]);
}
if (typeof input.new_string === "string") {
  pairs.push([input.old_string ?? "", input.new_string]);
}
if (typeof input.new_source === "string") {
  pairs.push([input.old_source ?? "", input.new_source]);
}
if (Array.isArray(input.edits)) {
  for (const edit of input.edits) {
    pairs.push([edit?.old_string ?? "", edit?.new_string ?? ""]);
  }
}
if (pairs.length === 0) allow();

const findings = [];
for (const rule of RULES) {
  let added = 0;
  let sample = "";
  for (const [before, after] of pairs) {
    const difference = tally(after, rule.pattern) - tally(before, rule.pattern);
    if (difference > 0) {
      added += difference;
      if (!sample) sample = excerpt(after, rule.pattern);
    }
  }
  if (added > 0) {
    findings.push(`${added} new ${rule.label}: "${sample}". Instead, ${rule.fix}.`);
  }
}

if (findings.length === 0) allow();

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: ["Blocked by .claude/hooks/no-emdash-emoji.mjs.", ...findings].join(
        " "
      ),
    },
  })
);
process.exit(0);
