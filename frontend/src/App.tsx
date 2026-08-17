import { ArrowRight, Lightbulb, Target, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PILLARS = [
  {
    icon: Target,
    title: "Problem",
    body: "TODO: state the exact problem the chosen track asks us to solve.",
  },
  {
    icon: Lightbulb,
    title: "Solution",
    body: "TODO: describe what this prototype demonstrates in one sentence.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    body: "TODO: the measurable change, with a source recorded in docs/research/.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Badge variant="secondary">URIIS Student Biz Innov Challenge 2026</Badge>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          TODO: Name The Idea
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
          TODO: one plain sentence a judge can repeat back after reading it once. Replace everything
          on this page. Nothing here is meant to survive.
        </p>

        <Button asChild size="lg" className="mt-8">
          <a href="#pillars">
            See the concept
            <ArrowRight className="size-4" />
          </a>
        </Button>

        <section id="pillars" className="mt-20 grid gap-5 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-5 text-primary" />
                <CardTitle className="mt-2">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <p className="mt-16 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
          This prototype is optional supporting material. The graded deliverables are the PDF
          submission and the A3 canvas. Do not start here until both are safe.
        </p>
      </div>
    </main>
  );
}
