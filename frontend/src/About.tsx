import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* Target wording from sdgs.un.org; icons are the UN's own files, unmodified,
   with provenance and the permission basis recorded in public/sdg/README.md. */
const GOALS = [
  {
    number: 16,
    name: "Peace, Justice and Strong Institutions",
    icon: "/sdg/E-Goal-16.png",
    target: "16.6",
    text: "Develop effective, accountable and transparent institutions at all levels",
    how: "MyTakziah publishes the rule behind every requirement, receipts every submission and shows all three agencies in one status list. It never marks a claim approved, because the agency decides. Transparency here means a family can check the rule, not that it is asked to trust the system.",
  },
  {
    number: 1,
    name: "No Poverty",
    icon: "/sdg/E-Goal-01.png",
    target: "1.3",
    text: "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable",
    how: "Malaysia's survivor benefits already exist and are already funded. The gap is coverage, and an entitlement that is never claimed pays nothing. Documented cases include a widow who reached her claim twenty-three years late.",
  },
];

/** The long-form disclosure the footer no longer carries. Everything a judge
 *  might reasonably ask about what this demo is and is not. */
export function About({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Button onClick={onBack} variant="outline">
        <ArrowLeft className="size-4" /> Back to the Walkthrough
      </Button>

      <h2 className="mt-8 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight">
        About This Prototype
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        MyTakziah is a concept for the URIIS Student Biz Innov Challenge 2026, built by team
        Survive. It proposes that a family should give its evidence to government once after a
        death, rather than three times.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Where This Sits in the Global Goals</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Two goals, each quoted at target level. The competition does not ask for these, and a
            longer list would be easier to write and worth less.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {GOALS.map((g) => (
            <div className="flex flex-col gap-4 sm:flex-row" key={g.number}>
              {/* Official UN artwork, used unmodified. The guidelines forbid
                  altering the icons, so there is no recolouring, no cropping
                  and deliberately no corner rounding, however much the latter
                  would match the rest of this page. */}
              <img
                alt={`Sustainable Development Goal ${g.number}: ${g.name}`}
                className="size-28 shrink-0"
                height={1500}
                src={g.icon}
                width={1500}
              />

              <div className="min-w-0">
                <p className="text-sm font-medium">
                  Target {g.target}. <span className="font-normal italic">"{g.text}"</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{g.how}</p>
              </div>
            </div>
          ))}

          <p className="border-t pt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">What We Do Not Claim. </span>
            Not SDG 10, because the first release covers Peninsular Malaysia and defers Sabah and
            Sarawak to a second phase. Not SDG 5, because we hold no gender-disaggregated evidence,
            only the fact that PERKESO publishes a sole widow declaration form.
          </p>

          <p className="text-xs text-muted-foreground">
            Goal icons are the United Nations' own, used unmodified for illustrative purposes. Team
            Survive is not affiliated with or endorsed by the United Nations.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">What This Demo Is</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            A five-screen walkthrough of the intended user journey. It shows the shape of the
            service and the rules it would rely on. Nothing more is claimed for it.
          </p>
          <p>
            The competition asks for no prototype and none is graded. This exists only as optional
            supporting material for the written submission and the one-page canvas.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">What Is Real and What Is Simulated</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Real. </span>
            Every rule, condition, deadline and figure shown on screen comes from a published
            government page or form, and each one carries a link to its source.
          </p>
          <p>
            <span className="font-medium text-foreground">Simulated. </span>
            Every agency response. No data leaves this page, nothing is submitted to JPN, KWSP or
            PERKESO, and there is no server, no database and no account behind any screen.
          </p>
          <p>
            <span className="font-medium text-foreground">Not Proven. </span>
            Whether these three agencies expose submission or status interfaces at all. Our
            submission states plainly that the integration is proposed rather than demonstrated.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">What It Deliberately Does Not Do</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              It never decides eligibility. Every entitlement reads as requiring confirmation.
            </li>
            <li>It never shows a claim as granted. There is no approved state anywhere in it.</li>
            <li>
              It does not verify or register a death. The walkthrough begins after JPN's input.
            </li>
            <li>
              It does not touch estate distribution, faraid, probate, banks or zakat, which are out
              of scope by an explicit team decision.
            </li>
            <li>It is not a chatbot, and the absence is the point rather than a shortcut.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">The Limit We State Rather Than Hide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            PERKESO eligibility depends on a contribution history that neither a family nor
            MyTakziah can see. A widow cannot tell you whether her husband had twenty-four
            contributions in the forty months before he died, and neither can we.
          </p>
          <p>
            That is why every entitlement in this demo reads as potentially eligible and requiring
            confirmation. The agency keeps the decision, and the service is honest about it.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">Not an Official Service</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            MyTakziah is a student proposal. It is not affiliated with, endorsed by, or connected to
            MyGOV, JPN, KWSP, PERKESO or any Malaysian government agency. The name places it in a
            recognisable service family; it does not claim membership of one.
          </p>
        </CardContent>
      </Card>

      <p className="mt-8 text-sm text-muted-foreground">
        Team Survive: Ling Jing Jie, Hee Zi Jie, Yow Li Hao, Wong Xuan Rui.
      </p>
    </div>
  );
}
