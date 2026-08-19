import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
