# Prototype

An optional clickable demo to support the idea submission. It is **not required** and it is **not graded**.

Read this first: the competition asks for no prototype, no code, and no technical expertise. The graded deliverables are the PDF idea submission and the A3 Innovation Canvas. An app or video counts only as optional supporting material. With the deadline on 21 August 2026, do not open this folder until both required files are finished and have passed [`../docs/submission/preflight.md`](../docs/submission/preflight.md).

If you are still reading, the tools are ready and you can start immediately.

## Running It

From the project root:

```bash
bun run frontend:dev
```

That installs what is needed and opens the prototype in your browser at the address it prints, usually `http://localhost:5173`. Edit any file under `src/` and the browser updates instantly. Stop it with `Ctrl + C`.

To produce the final files for sharing or deploying:

```bash
bun run frontend:build
```

## What Is Already Set Up

| Tool                  | What it does for you                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| React with TypeScript | The page structure. TypeScript catches mistakes as you type.                                     |
| Vite                  | Runs the dev server and builds the final files. Very fast.                                       |
| Tailwind CSS v4       | Styling written directly on the elements, so an assistant can restyle safely.                    |
| Radix UI              | The accessible behaviour under the components: focus handling, keyboard support, screen readers. |
| shadcn/ui             | Styled components built on Radix. Add one with `bunx shadcn@latest add <name>`.                  |
| lucide-react          | Icon set, already installed.                                                                     |

### Components Already Installed

`button`, `card`, `badge`, `tabs`, `dialog`, `accordion`, `separator`, `input`, `label`.

They live in `src/components/ui/` and are yours to edit. Radix handles the behaviour, so a dialog traps focus and closes on Escape without you writing that.

Add more from the [shadcn/ui catalogue](https://ui.shadcn.com/docs/components) as needed:

```bash
bunx shadcn@latest add chart table sheet tooltip
```

`chart` is worth knowing about: it wraps Recharts and is the quickest way to turn an impact number into something a judge can read at a glance.

The `@/` prefix in imports means `src/`, so `@/components/ui/button` is `src/components/ui/button.tsx`.

Colours, spacing, and corner rounding are defined once as tokens at the top of `src/index.css`. Change them there and the whole prototype follows.

## Working With an AI Assistant

Open the project root with your assistant and paste something like:

```text
Read frontend/README.md and frontend/src/App.tsx, then read docs/decisions.md for our chosen track and concept. Build a short clickable demo of that concept as a single page in frontend/src/. Use the existing design tokens in src/index.css and add shadcn/ui components with `bunx shadcn@latest add <name>` rather than writing raw markup. Do not invent statistics or user research; use TODO: for anything the team has not decided.
```

The `impeccable` skill is installed and is good at design review. After a first version exists, try `/impeccable critique` on the page, then `/impeccable polish`.

## A Warning Worth Repeating

A rough prototype attached to a weak submission scores nothing. A strong submission with no prototype can win. Judging is Innovation 30%, Feasibility 25%, Social/Economic Impact 25%, and Submission Quality 20%. None of those award marks for working code.

Build this only if it makes the idea easier to believe.
