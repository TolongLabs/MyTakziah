// Makes sure .claude/skills points at .agents/skills.
//
// Git stores that path as a symlink. Windows clones sometimes turn it into a
// plain text file instead, which silently hides every skill from Claude. This
// repairs it, and falls back to copying when the OS will not allow a symlink.

import {
  existsSync,
  lstatSync,
  mkdirSync,
  rmSync,
  symlinkSync,
  cpSync,
  readFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, ".agents", "skills");
const link = join(root, ".claude", "skills");

if (!existsSync(target)) {
  console.error("Cannot find .agents/skills. Run this from the project root.");
  process.exit(1);
}

const stat = existsSync(link) ? lstatSync(link) : null;

if (stat?.isSymbolicLink() && existsSync(link)) {
  console.log(".claude/skills is already linked. Nothing to do.");
  process.exit(0);
}

// A broken clone leaves a small file containing the relative path.
if (stat?.isFile() && readFileSync(link, "utf8").trim().length < 200) {
  rmSync(link);
} else if (stat) {
  rmSync(link, { recursive: true, force: true });
}

mkdirSync(dirname(link), { recursive: true });

try {
  symlinkSync(join("..", ".agents", "skills"), link, "junction");
  console.log("Linked .claude/skills to .agents/skills.");
} catch {
  cpSync(target, link, { recursive: true });
  console.log("Could not create a link on this system, so the skills were copied instead.");
  console.log("This works fine. Re-run this command after anyone adds a new skill.");
}
