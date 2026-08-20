import { ArrowLeft, Bell, Moon, PanelLeft, RotateCcw, Sun, UserRound } from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

const OPEN_DELAY_MS = 120;
const CLOSE_DELAY_MS = 200;

export type Step = { label: string; icon: ComponentType<{ className?: string }> };

/**
 * A floating glass island, detached from all four edges, that expands on intent
 * and dims what sits beneath it.
 *
 * Three triggers, not one. Hover alone would strand keyboard and touch users:
 *
 *   1. pointer hover, delayed so a cursor crossing the edge does not dim the app
 *   2. focus-visible, so tabbing in produces the same state as pointing at it
 *   3. an explicit pin, which is the only honest answer for touch
 *
 * The dim lives on one fixed scrim rendered by the shell, never as a filter over
 * the content tree: filtering a large subtree on every hover janks.
 */
export function SidebarIsland({
  steps,
  step,
  onSelect,
  onExpandedChange,
}: {
  steps: Step[];
  step: number;
  onSelect: (i: number) => void;
  onExpandedChange: (expanded: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const expanded = pinned || hovered || focused;

  useEffect(() => onExpandedChange(expanded), [expanded, onExpandedChange]);
  useEffect(() => () => clearTimeout(timer.current), []);

  const schedule = (next: boolean) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHovered(next), next ? OPEN_DELAY_MS : CLOSE_DELAY_MS);
  };

  return (
    <nav
      aria-label="Walkthrough"
      className={cn(
        // Below md the island is the wrong shape for a thumb and hover does not
        // exist, so it is replaced by a bottom dock rather than shrunk.
        "hidden md:flex",
        "glass fixed top-4 bottom-4 left-4 flex-col rounded-[var(--radius-float)] p-2",
        "transition-[width] duration-[220ms] ease-out",
        expanded ? "w-60" : "w-16"
      )}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      // Keyboard focus expands the island; a mouse click does not. Clicking an
      // item leaves it focused, so treating every focus as intent would hold the
      // island open until the user clicked elsewhere entirely.
      onFocus={(e) => {
        if (e.target instanceof Element && e.target.matches(":focus-visible")) setFocused(true);
      }}
      onPointerEnter={() => schedule(true)}
      onPointerLeave={() => schedule(false)}
      style={{ zIndex: "var(--z-island)" }}
    >
      <div className="flex items-center gap-2 rounded-[var(--radius-control)] px-2 py-3">
        <img alt="" className="size-9 shrink-0" src="/logo-mark.png" />
        <span
          className={cn(
            "text-lg font-semibold tracking-tight whitespace-nowrap transition-opacity duration-150",
            expanded ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          MyTakziah
        </span>
      </div>

      <ul className="mt-2 flex flex-1 flex-col gap-1">
        {steps.map(({ label, icon: Icon }, i) => (
          <li key={label}>
            <button
              aria-current={i === step ? "step" : undefined}
              className={cn(
                "flex h-11 w-full items-center gap-3 rounded-[var(--radius-control)] px-3",
                "text-sm font-medium transition-colors duration-150",
                i === step
                  ? "bg-selected text-selected-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              onClick={() => onSelect(i)}
              type="button"
            >
              <Icon aria-hidden className="size-5 shrink-0" />
              <span
                className={cn(
                  "whitespace-nowrap transition-opacity duration-150",
                  expanded ? "opacity-100" : "pointer-events-none opacity-0"
                )}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Touch has no hover and a keyboard user should not have to hold focus to
          read a label. Pinning is the accessible equivalent. */}
      <div className="border-t pt-2">
        <button
          aria-label={pinned ? "Unpin walkthrough menu" : "Pin walkthrough menu open"}
          aria-pressed={pinned}
          className="flex h-11 w-full items-center gap-3 rounded-[var(--radius-control)] px-3 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
          onClick={() => setPinned((v) => !v)}
          type="button"
        >
          <PanelLeft aria-hidden className={cn("size-5 shrink-0", pinned && "text-primary")} />
          <span
            className={cn(
              "whitespace-nowrap transition-opacity duration-150",
              expanded ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            {pinned ? "Unpin" : "Pin Open"}
          </span>
        </button>
      </div>
    </nav>
  );
}

/**
 * The top-right island: theme, notifications, account.
 *
 * **The bell and the account control are stubs and are labelled as such.** This
 * is a concept demo with no accounts and no notifications, and a control that
 * looks functional but silently does nothing is exactly the kind of thing that
 * gets caught in a live pitch. Each announces itself on activation instead.
 */
export function AccountIsland() {
  const { theme, toggle } = useTheme();
  const [note, setNote] = useState<string | null>(null);

  const stub = (message: string) => {
    setNote(message);
    globalThis.setTimeout(() => setNote(null), 2400);
  };

  const item =
    "inline-flex size-10 items-center justify-center rounded-[var(--radius-control)] text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground";

  return (
    <div
      className="glass fixed top-4 right-4 hidden items-center gap-1 rounded-[var(--radius-float)] p-1.5 md:flex md:right-6"
      style={{ zIndex: "var(--z-island)" }}
    >
      {note && (
        <p
          className="absolute top-full right-0 mt-2 rounded-[var(--radius-control)] bg-foreground px-3 py-2 text-xs font-medium text-background"
          role="status"
        >
          {note}
        </p>
      )}

      <button
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className={item}
        onClick={toggle}
        title={theme === "dark" ? "Light Theme" : "Dark Theme"}
        type="button"
      >
        {theme === "dark" ? (
          <Sun aria-hidden className="size-[18px]" />
        ) : (
          <Moon aria-hidden className="size-[18px]" />
        )}
      </button>

      <button
        aria-label="Notifications, not implemented in this demo"
        className={item}
        onClick={() => stub("Notifications are not part of this concept demo.")}
        title="Notifications"
        type="button"
      >
        <Bell aria-hidden className="size-[18px]" />
      </button>

      <button
        aria-label="Account, not implemented in this demo"
        className={item}
        onClick={() => stub("There are no accounts in this concept demo.")}
        title="Account"
        type="button"
      >
        <UserRound aria-hidden className="size-[18px]" />
      </button>
    </div>
  );
}

/**
 * Position, back and restart, parked at the bottom centre.
 *
 * It sits where a media player's transport sits, because that is what it is:
 * you are being walked through five frames and this says where you are. Bottom
 * centre also keeps it clear of the account island and out of the reading
 * column entirely.
 *
 * Both controls are icon-only. The label carries the meaning, and two worded
 * buttons under a five-word status line was more chrome than a walkthrough of
 * five screens can justify.
 */
export function StepIsland({
  step,
  total,
  onBack,
  onRestart,
}: {
  step: number;
  total: number;
  onBack: () => void;
  onRestart: () => void;
}) {
  const control =
    "grid size-9 place-items-center rounded-[var(--radius-control)] text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:text-border";

  return (
    <div
      className="glass fixed bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-[var(--radius-float)] p-1.5 md:flex"
      style={{ zIndex: "var(--z-island)" }}
    >
      <p aria-live="polite" className="px-3 text-sm font-medium whitespace-nowrap">
        Step {step + 1} of {total}
      </p>

      <button
        aria-label="Back one step"
        className={control}
        disabled={step === 0}
        onClick={onBack}
        title="Back"
        type="button"
      >
        <ArrowLeft aria-hidden className="size-4" />
      </button>

      <button
        aria-label="Restart the walkthrough"
        className={control}
        disabled={step === 0}
        onClick={onRestart}
        title="Restart"
        type="button"
      >
        <RotateCcw aria-hidden className="size-4" />
      </button>
    </div>
  );
}

/** The small-screen replacement for the island, not a squeezed version of it.
 *  Touch has no hover, so labels are simply always visible, and it never dims
 *  the content: on a phone the content is the entire screen. */
export function MobileDock({
  steps,
  step,
  onSelect,
}: {
  steps: Step[];
  step: number;
  onSelect: (i: number) => void;
}) {
  return (
    <nav
      aria-label="Walkthrough"
      className="glass fixed inset-x-3 bottom-3 flex items-stretch justify-around rounded-[var(--radius-float)] p-1.5 md:hidden"
      style={{ zIndex: "var(--z-island)" }}
    >
      {steps.map(({ label, icon: Icon }, i) => (
        <button
          key={label}
          aria-current={i === step ? "step" : undefined}
          className={cn(
            "flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-[var(--radius-control)] px-1 py-1.5",
            "text-[0.65rem] font-medium transition-colors duration-150",
            i === step ? "bg-selected text-selected-foreground" : "text-muted-foreground"
          )}
          onClick={() => onSelect(i)}
          type="button"
        >
          <Icon aria-hidden className="size-5" />
          {label}
        </button>
      ))}
    </nav>
  );
}

/**
 * The layer the page is lying on top of.
 *
 * Fixed to the bottom of the viewport for the whole session while the page above
 * it is opaque, so reaching the end uncovers something that was always there
 * rather than scrolling a panel into view. Nothing animates; the occluder moves.
 */
export function SiteFooter({ onAbout }: { onAbout: () => void }) {
  const footer = useRef<HTMLElement>(null);

  /* A fixed element's rect is always inside the viewport, so the browser sees no
     reason to scroll when focus reaches a footer link, and a keyboard user lands
     on a focus ring the page is currently covering. Guarded on `fixed`: below md
     the footer is in normal flow and the browser's own behaviour is right. */
  useEffect(() => {
    const node = footer.current;
    if (!node) return;
    const reveal = () => {
      if (getComputedStyle(node).position !== "fixed") return;
      window.scrollTo({ top: document.documentElement.scrollHeight });
    };
    node.addEventListener("focusin", reveal);
    return () => node.removeEventListener("focusin", reveal);
  }, []);

  return (
    <footer className="site-footer" ref={footer}>
      <div className="mx-auto flex h-full max-w-6xl flex-col items-end justify-center gap-2 px-6 py-10 text-right">
        <span className="flex items-center gap-3">
          <img
            alt=""
            /* The mark is ochre and so is the footer. Painted to match the
               footer's own foreground: white on light, ink on dark. */
            className="size-10 brightness-0 invert dark:invert-0"
            src="/logo-mark.png"
          />
          <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
            MyTakziah
          </span>
        </span>
        <p className="text-base font-medium">One death. Tell government once.</p>
        <button
          className="text-sm underline underline-offset-4 transition-opacity hover:no-underline"
          onClick={onAbout}
          type="button"
        >
          About
        </button>
      </div>
    </footer>
  );
}
