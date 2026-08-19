import { ClipboardList, FileCheck, ListChecks, ShieldCheck, Timer } from "lucide-react";
import { useCallback, useState } from "react";

import { About } from "@/About";
import { Pipeline } from "@/pipeline";
import { PIPELINE_STAGES, type Agency } from "@/data";
import { type Answers } from "@/plan";
import {
  FrameConsent,
  FrameEntitlements,
  FrameProvideOnce,
  FrameTimeline,
  FrameVerified,
} from "@/frames";
import {
  AccountIsland,
  MobileDock,
  SidebarIsland,
  SiteFooter,
  StepIsland,
  type Step,
} from "@/shell";

const STEPS: Step[] = [
  { label: "Verified", icon: FileCheck },
  { label: "Provide Once", icon: ClipboardList },
  { label: "Entitlements", icon: ListChecks },
  { label: "Consent", icon: ShieldCheck },
  { label: "Timeline", icon: Timer },
];

/* The view lives in the hash so a single frame can be linked directly. Frame 2
   is the one worth sending anyone, and "open the demo then click twice" is a
   worse instruction than a URL. */
function fromHash() {
  const hash = globalThis.location?.hash ?? "";
  if (hash === "#about") return { about: true, step: 0 };
  const n = Number.parseInt(hash.replace("#step", ""), 10);
  return { about: false, step: Number.isNaN(n) ? 0 : Math.min(Math.max(n - 1, 0), 4) };
}

export default function App() {
  const [view, setView] = useState(fromHash);
  const [dimmed, setDimmed] = useState(false);
  const [pending, setPending] = useState<{ target: number; stages: string[] } | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Answers>({});
  const [consents, setConsents] = useState<Record<Agency, boolean>>({
    JPN: false,
    KWSP: false,
    PERKESO: false,
  });

  const { about, step } = view;

  const setStep = useCallback((i: number) => {
    setView({ about: false, step: i });
    globalThis.history.replaceState(null, "", `#step${i + 1}`);
    globalThis.scrollTo({ top: 0 });
  }, []);

  const setAbout = useCallback((next: boolean) => {
    setView((v) => ({ about: next, step: v.step }));
    globalThis.history.replaceState(null, "", next ? "#about" : "#step1");
    globalThis.scrollTo({ top: 0 });
  }, []);

  /* Advance through the pipeline overlay where there is something to narrate,
     and cut straight there where there is not. Frame 1 to 2 has nothing to
     compute: the user has supplied no evidence yet. */
  const advance = () => {
    const target = Math.min(step + 1, STEPS.length - 1);
    const stages = PIPELINE_STAGES[`${step}-${target}`];
    if (stages) setPending({ target, stages });
    else setStep(target);
  };
  const onExpandedChange = useCallback((expanded: boolean) => setDimmed(expanded), []);

  return (
    <div>
      <div className="reveal-page dot-grid">
        <SidebarIsland
          onExpandedChange={onExpandedChange}
          onSelect={setStep}
          step={about ? -1 : step}
          steps={STEPS}
        />

        {/* Outside the content tree: the scrim has to cover the islands as well
            as the page, so it cannot be a child of the thing it is dimming. */}
        <div aria-hidden className="scrim" data-visible={dimmed} />

        <AccountIsland />
        {!about && (
          <StepIsland
            onBack={() => setStep(Math.max(step - 1, 0))}
            onRestart={() => setStep(0)}
            step={step}
            total={STEPS.length}
          />
        )}
        <MobileDock onSelect={setStep} step={about ? -1 : step} steps={STEPS} />

        {/* On md+ the left offset clears the collapsed island and never reflows
            when it expands: content shifting under a hover would be worse than
            the dimming it replaces. Below md the dock is at the bottom, so the
            padding moves there to clear it instead. */}
        <main className="px-4 pt-10 pb-40 md:py-24 md:pr-6 md:pl-24">
          {about ? (
            <About onBack={() => setAbout(false)} />
          ) : (
            <>
              {step === 0 && <FrameVerified onNext={advance} />}
              {step === 1 && (
                <FrameProvideOnce
                  answers={answers}
                  onNext={advance}
                  setAnswers={setAnswers}
                  setValues={setValues}
                  values={values}
                />
              )}
              {step === 2 && <FrameEntitlements onNext={advance} />}
              {step === 3 && (
                <FrameConsent consents={consents} onNext={advance} setConsents={setConsents} />
              )}
              {step === 4 && (
                <FrameTimeline
                  answers={answers}
                  consents={consents}
                  onAbout={() => setAbout(true)}
                  onRestart={() => setStep(0)}
                  values={values}
                />
              )}
            </>
          )}
        </main>
      </div>

      <SiteFooter onAbout={() => setAbout(true)} />

      {pending && (
        <Pipeline
          onDone={() => {
            setStep(pending.target);
            setPending(null);
          }}
          stages={pending.stages}
        />
      )}
    </div>
  );
}
