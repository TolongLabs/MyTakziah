import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const SEGMENTS = 12;
const TICK_MS = 90;

/**
 * A spinner driven by React state rather than by CSS.
 *
 * This is the whole point of the component. When Windows animations are turned
 * off, or the user sets reduced motion, browsers report
 * `prefers-reduced-motion: reduce`, and both Tailwind's `animate-spin` and most
 * CSS resets stop or flatten `animation` and `transition`. A spinner built that
 * way silently freezes on exactly the machines most likely to be running the
 * demo on a projector, and a frozen spinner reads as a hung app.
 *
 * Advancing a state counter on an interval and repainting fills instead means
 * there is no CSS animation, no transition and no transform to disable. It
 * behaves identically in Chromium and Firefox, animations on or off.
 *
 * The motion is also deliberately discrete rather than a smooth sweep, which is
 * the honest reading of a reduced-motion preference: it still communicates that
 * work is happening without a continuously moving element.
 */
function Spinner() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % SEGMENTS), TICK_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <svg aria-hidden className="size-10" viewBox="0 0 40 40">
      {Array.from({ length: SEGMENTS }, (_, i) => {
        // Distance behind the leading segment, so the tail fades round the ring.
        const behind = (tick - i + SEGMENTS) % SEGMENTS;
        const lit = behind < 4;
        return (
          <rect
            key={i}
            fill="var(--primary)"
            height="8"
            opacity={lit ? 1 - behind * 0.22 : 0.12}
            rx="1.6"
            transform={`rotate(${(i * 360) / SEGMENTS} 20 20)`}
            width="3.2"
            x="18.4"
            y="2.5"
          />
        );
      })}
    </svg>
  );
}

/**
 * The beat between frames.
 *
 * It exists for the story rather than for the clock: the jump from "here is my
 * evidence" to "here is what you may be entitled to" is the moment the concept
 * does its work, and cutting straight there makes it look like nothing happened.
 *
 * Stages are worded as rule matching, never as a model deciding. Eligibility is
 * determined by the agency, and the interface must not imply otherwise even in
 * a loading state.
 */
export function Pipeline({ stages, onDone }: { stages: string[]; onDone: () => void }) {
  const [done, setDone] = useState(0);

  useEffect(() => {
    setDone(0);
    let cancelled = false;
    const timers = stages.map((_, i) =>
      setTimeout(
        () => {
          if (!cancelled) setDone(i + 1);
        },
        (i + 1) * 620
      )
    );
    const finish = setTimeout(
      () => {
        if (!cancelled) onDone();
      },
      stages.length * 620 + 420
    );
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      clearTimeout(finish);
    };
  }, [stages, onDone]);

  return (
    <div
      aria-live="polite"
      className="fixed inset-0 grid place-items-center bg-background"
      role="status"
      style={{ zIndex: "var(--z-banner)" }}
    >
      <div className="w-full max-w-md px-6">
        <div className="flex items-center gap-4">
          <Spinner />
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
            Working Through the Published Rules
          </p>
        </div>

        <ol className="mt-8 space-y-3">
          {stages.map((stage, i) => {
            const complete = i < done;
            const active = i === done;
            return (
              <li
                key={stage}
                className={`flex items-center gap-3 text-sm ${
                  complete || active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-full ${
                    complete ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {complete && <Check aria-hidden className="size-3" />}
                </span>
                {stage}
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-xs text-muted-foreground">
          Simulated. No request is made to any government system, and no rule shown anywhere in this
          demo is decided by a model.
        </p>
      </div>
    </div>
  );
}
