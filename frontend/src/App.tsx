import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DEMO_BANNER, type Agency } from "@/data";
import {
  FrameConsent,
  FrameEntitlements,
  FrameProvideOnce,
  FrameTimeline,
  FrameVerified,
} from "@/frames";

const STEPS = ["Verified", "Provide once", "Entitlements", "Consent", "Timeline"];

export default function App() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [consents, setConsents] = useState<Record<Agency, boolean>>({
    JPN: false,
    KWSP: false,
    PERKESO: false,
  });

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Never dismissible. Every screen, every time. */}
      <div className="sticky top-0 z-50 bg-foreground px-4 py-2 text-center text-xs font-medium tracking-wide text-background">
        {DEMO_BANNER}
      </div>

      <header className="border-b">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">MyTakziah</p>
            <p className="text-sm text-muted-foreground">One death. Tell government once.</p>
          </div>
          <nav className="flex flex-wrap gap-1">
            {STEPS.map((label, i) => (
              <button
                key={label}
                className={`rounded-md px-2.5 py-1 text-sm transition-colors ${
                  i === step
                    ? "bg-accent font-medium text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setStep(i)}
                type="button"
              >
                {i + 1}. {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="px-6 py-12">
        {step === 0 && <FrameVerified onNext={next} />}
        {step === 1 && <FrameProvideOnce onNext={next} setValues={setValues} values={values} />}
        {step === 2 && <FrameEntitlements onNext={next} />}
        {step === 3 && <FrameConsent consents={consents} onNext={next} setConsents={setConsents} />}
        {step === 4 && <FrameTimeline consents={consents} />}
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-12">
        <p className="border-t pt-6 text-sm text-muted-foreground">
          Concept demo for the URIIS Student Biz Innov Challenge 2026. Agency responses are
          simulated. No submission is made to any government system. Rules shown are drawn from
          published agency pages and cited on screen.
        </p>
        {step > 0 && (
          <Button className="mt-6" onClick={() => setStep(0)} variant="outline">
            Restart the walkthrough
          </Button>
        )}
      </footer>
    </div>
  );
}
