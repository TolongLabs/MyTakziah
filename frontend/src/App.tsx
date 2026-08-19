import { ClipboardList, FileCheck, ListChecks, ShieldCheck, Timer } from "lucide-react";
import { useCallback, useState } from "react";

import { type Agency } from "@/data";
import {
  FrameConsent,
  FrameEntitlements,
  FrameProvideOnce,
  FrameTimeline,
  FrameVerified,
} from "@/frames";
import {
  ActionIsland,
  DemoBanner,
  MobileDock,
  SidebarIsland,
  SiteFooter,
  type Step,
} from "@/shell";

const STEPS: Step[] = [
  { label: "Verified", icon: FileCheck },
  { label: "Provide once", icon: ClipboardList },
  { label: "Entitlements", icon: ListChecks },
  { label: "Consent", icon: ShieldCheck },
  { label: "Timeline", icon: Timer },
];

/* The step lives in the hash so a single frame can be linked directly.
   Frame 2 is the one worth sending anyone, and "open the demo then click twice"
   is a worse instruction than a URL. */
function stepFromHash() {
  const n = Number.parseInt(globalThis.location?.hash.replace("#step", "") ?? "", 10);
  return Number.isNaN(n) ? 0 : Math.min(Math.max(n - 1, 0), 4);
}

export default function App() {
  const [step, setStepState] = useState(stepFromHash);
  const [dimmed, setDimmed] = useState(false);

  const setStep = useCallback((i: number) => {
    setStepState(i);
    globalThis.history.replaceState(null, "", `#step${i + 1}`);
  }, []);
  const [values, setValues] = useState<Record<string, string>>({});
  const [consents, setConsents] = useState<Record<Agency, boolean>>({
    JPN: false,
    KWSP: false,
    PERKESO: false,
  });

  const next = () => setStep(Math.min(step + 1, STEPS.length - 1));
  const onExpandedChange = useCallback((expanded: boolean) => setDimmed(expanded), []);

  return (
    <div>
      <div className="reveal-page dot-grid">
        <DemoBanner />

        <SidebarIsland
          onExpandedChange={onExpandedChange}
          onSelect={setStep}
          step={step}
          steps={STEPS}
        />

        {/* Outside the content tree: the scrim has to cover the islands as well
            as the page, so it cannot be a child of the thing it is dimming. */}
        <div aria-hidden className="scrim" data-visible={dimmed} />

        <ActionIsland onRestart={() => setStep(0)} step={step} total={STEPS.length} />
        <MobileDock onSelect={setStep} step={step} steps={STEPS} />

        {/* On md+ the left offset clears the collapsed island and never reflows
            when it expands: content shifting under a hover would be worse than
            the dimming it replaces. Below md the dock is at the bottom, so the
            padding moves there to clear it instead. */}
        <main className="px-4 pt-16 pb-32 md:py-24 md:pr-6 md:pl-24">
          {step === 0 && <FrameVerified onNext={next} />}
          {step === 1 && <FrameProvideOnce onNext={next} setValues={setValues} values={values} />}
          {step === 2 && <FrameEntitlements onNext={next} />}
          {step === 3 && (
            <FrameConsent consents={consents} onNext={next} setConsents={setConsents} />
          )}
          {step === 4 && <FrameTimeline consents={consents} />}
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
