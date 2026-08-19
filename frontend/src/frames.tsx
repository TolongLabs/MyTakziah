import {
  ArrowRight,
  Check,
  Clock,
  ExternalLink,
  FileText,
  Lock,
  RotateCcw,
  Wand2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AGENCIES,
  AGENCY_PAYLOADS,
  ENTITLEMENTS,
  FIELD_GROUPS,
  SAMPLE_VALUES,
  type Agency,
} from "@/data";

type Values = Record<string, string>;

export function groupComplete(group: (typeof FIELD_GROUPS)[number], values: Values) {
  return group.fields.every((f) => (values[`${group.id}.${f.name}`] ?? "").trim().length > 0);
}

/* Frame 1. Start after a verification record exists. MyTakziah neither
   verifies a death nor registers it, and the screen says so. */
export function FrameVerified({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-2xl">
      <Badge variant="secondary">Step 1</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">A Death Has Been Verified</h2>
      <p className="mt-3 text-muted-foreground">
        A verification record exists from a hospital, PDRM or DBKL. MyTakziah begins here.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Verification Record</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            ["Deceased", "Fatimah binti Abdullah (illustrative)"],
            ["Date of Verification", "14 August 2026"],
            ["Issuing Body", "Hospital Kuala Lumpur"],
            ["Reference", "NRD.LM02 (Pin.1/11)"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6">
              <span className="text-muted-foreground">{k}</span>
              <span className="text-right font-medium">{v}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <p className="mt-6 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
        MyTakziah does not verify a death and does not register it. JPN registers the death and
        issues the death certificate.
      </p>

      <Button className="mt-8" size="lg" onClick={onNext}>
        Continue <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}

/* Frame 2. The centrepiece. Completing a group lights its row across every
   agency that demands the same information today. */
export function FrameProvideOnce({
  values,
  setValues,
  onNext,
}: {
  values: Values;
  setValues: (v: Values) => void;
  onNext: () => void;
}) {
  const done = FIELD_GROUPS.filter((g) => groupComplete(g, values)).length;
  const allDone = done === FIELD_GROUPS.length;

  return (
    <div className="mx-auto max-w-6xl">
      <Badge variant="secondary">Step 2</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Provide Your Evidence Once</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Five things. Today each of them is demanded again at each agency, on a different form.
      </p>

      <Button
        className="mt-5"
        disabled={allDone}
        onClick={() => setValues({ ...values, ...SAMPLE_VALUES })}
        variant="outline"
      >
        <Wand2 className="size-4" /> Fill This In for Me
      </Button>
      <p className="mt-2 text-xs text-muted-foreground">
        Fills every field with an illustrative composite family. Nothing here is a real person.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          {FIELD_GROUPS.map((group, i) => {
            const complete = groupComplete(group, values);
            return (
              <Card key={group.id} className={complete ? "border-primary/60" : undefined}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-base">
                      {i + 1}. {group.label}
                    </CardTitle>
                    {complete && (
                      <span className="flex items-center gap-1 text-sm font-medium text-primary">
                        <Check className="size-4" /> Provided
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.fields.map((f) => {
                    const key = `${group.id}.${f.name}`;
                    return (
                      <div key={key} className="space-y-1.5">
                        <Label htmlFor={key}>{f.name}</Label>
                        <Input
                          id={key}
                          placeholder={f.placeholder}
                          value={values[key] ?? ""}
                          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Who Demands the Same Information</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                {done} of {FIELD_GROUPS.length} provided. Each row lights across every agency that
                asks for it today.
              </p>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left font-medium">Information</th>
                    {AGENCIES.map((a) => (
                      <th key={a} className="pb-2 text-center font-medium">
                        {a}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FIELD_GROUPS.map((g) => {
                    const complete = groupComplete(g, values);
                    return (
                      <tr key={g.id} className="border-b last:border-0">
                        <td
                          className={`py-2.5 pr-3 ${complete ? "font-medium text-foreground" : "text-muted-foreground"}`}
                        >
                          {g.hint}
                        </td>
                        {AGENCIES.map((a) => {
                          const demanded = g.demandedBy.includes(a);
                          return (
                            <td key={a} className="py-2.5 text-center">
                              {demanded ? (
                                <span
                                  aria-label={complete ? "provided" : "demanded"}
                                  className={`inline-block size-2.5 rounded-full transition-colors ${
                                    complete ? "bg-primary" : "bg-border"
                                  }`}
                                />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <p className="mt-5 border-t pt-4 text-sm text-muted-foreground">
                The same core information, demanded again at each agency, on three different forms.
                A survivor makes at least two mandatory in-person trips carrying original documents
                to prove one death.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button disabled={!allDone} onClick={onNext} size="lg">
          Continue <ArrowRight className="size-4" />
        </Button>
        {!allDone && (
          <p className="text-sm text-muted-foreground">
            {FIELD_GROUPS.length - done} of {FIELD_GROUPS.length} still to provide. The point of the
            service is that you do this once, so the demo asks you to do it once.
          </p>
        )}
      </div>
    </div>
  );
}

/* Frame 3. Ranked by deadline first, value second. Every card carries its
   source and says confirmation is required. Nothing here is a decision. */
export function FrameEntitlements({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Badge variant="secondary">Step 3</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        What You May Be Entitled To, Ranked by Deadline
      </h2>
      <p className="mt-3 text-muted-foreground">
        Ordered by which runs out first, not by which is largest.
      </p>

      <div className="mt-8 space-y-5">
        {ENTITLEMENTS.map((e) => (
          <Card key={e.id}>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{e.agency}</Badge>
                {e.deadline ? (
                  <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-sm font-medium text-accent-foreground">
                    <Clock className="size-3.5" /> {e.deadline}
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground">No Published Deadline</span>
                )}
              </div>
              <CardTitle className="mt-2 text-lg">{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="font-medium">Potentially Eligible, Confirmation Required</p>
              <p className="text-muted-foreground">{e.amount}</p>
              <Separator />
              <p className="text-muted-foreground">{e.condition}</p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">What We Cannot Know. </span>
                {e.limitation}
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-primary underline underline-offset-4"
                href={e.source.url}
                rel="noreferrer"
                target="_blank"
              >
                {e.source.label} <ExternalLink className="size-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="mt-8" size="lg" onClick={onNext}>
        Review What Each Agency Receives <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}

/* Frame 4. Consent is per agency, granted separately. One agency is left
   un-consented on purpose, to show the consent is real. */
export function FrameConsent({
  consents,
  setConsents,
  onNext,
}: {
  consents: Record<Agency, boolean>;
  setConsents: (c: Record<Agency, boolean>) => void;
  onNext: () => void;
}) {
  const granted = AGENCIES.filter((a) => consents[a]).length;

  return (
    <div className="mx-auto max-w-3xl">
      <Badge variant="secondary">Step 4</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Review and Consent, per Agency</h2>
      <p className="mt-3 text-muted-foreground">
        Each agency receives only what it requires. You agree to each one separately.
      </p>

      <Tabs className="mt-8" defaultValue="JPN">
        <TabsList>
          {AGENCIES.map((a) => (
            <TabsTrigger key={a} value={a}>
              {a}
              {consents[a] && <Check className="ml-1.5 size-3.5" />}
            </TabsTrigger>
          ))}
        </TabsList>

        {AGENCIES.map((a) => {
          const payload = AGENCY_PAYLOADS[a];
          return (
            <TabsContent key={a} value={a}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{payload.form}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {a} would receive exactly the following, and nothing else.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {payload.receives.map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <Check className="size-4 text-primary" /> {r}
                      </li>
                    ))}
                  </ul>

                  <Separator className="my-5" />

                  {consents[a] ? (
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-primary">Consent Given for {a}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setConsents({ ...consents, [a]: false })}
                      >
                        Withdraw
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <p className="text-sm text-muted-foreground">
                        No consent given yet. Nothing is sent to {a}.
                      </p>
                      <Button onClick={() => setConsents({ ...consents, [a]: true })}>
                        <Lock className="size-4" /> I Agree to Send This to {a}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      <p className="mt-6 text-sm text-muted-foreground">
        {granted} of {AGENCIES.length} agencies consented. Consent is not all or nothing, and
        withdrawing it stops that agency receiving anything.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button disabled={granted === 0} onClick={onNext} size="lg">
          Continue <ArrowRight className="size-4" />
        </Button>
        {granted === 0 && (
          <p className="text-sm text-muted-foreground">
            Nothing is prepared until you agree to at least one agency.
          </p>
        )}
      </div>
    </div>
  );
}

/* Frame 5. Drafts stay drafts. The status vocabulary has no "approved" in it,
   because the agency has not decided anything yet. */
export function FrameTimeline({
  consents,
  onRestart,
  onAbout,
}: {
  consents: Record<Agency, boolean>;
  onRestart: () => void;
  onAbout: () => void;
}) {
  const sent = AGENCIES.filter((a) => consents[a]);
  const waiting = AGENCIES.filter((a) => !consents[a]);
  const waitingList = new Intl.ListFormat("en-GB", { type: "conjunction" }).format(waiting);

  /* One merged stream, not three. The whole claim of this frame is that a
     family currently has to chase three agencies separately with no single
     view, so rendering three parallel progress bars would say the opposite of
     the card's own title. */
  const events: { date: string; label: string; actor: string; done: boolean }[] = [
    { date: "14 Aug", label: "Death verified", actor: "Hospital Kuala Lumpur", done: true },
    { date: "15 Aug", label: "Evidence provided once", actor: "You", done: true },
    ...sent.flatMap((a) => [
      { date: "15 Aug", label: `Consent given to ${a}`, actor: "You", done: true },
      { date: "15 Aug", label: `Submitted to ${a}`, actor: "MyTakziah", done: true },
      { date: "15 Aug", label: `Receipted by ${a}`, actor: a as string, done: true },
    ]),
    ...sent.map((a) => ({
      date: "Now",
      label: `In review by ${a}`,
      actor: `${a} decides`,
      done: false,
    })),
    ...waiting.map((a) => ({
      date: "Waiting",
      label: `${a} has not been sent anything`,
      actor: "Awaiting your consent",
      done: false,
    })),
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <Badge variant="secondary">Step 5</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Drafts, and One Timeline</h2>
      <p className="mt-3 text-muted-foreground">
        Three forms prepared from one set of evidence, and a single place to watch them.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {AGENCIES.map((a) => (
          <Card className="flex flex-col" key={a}>
            <CardHeader>
              <FileText className="size-5 text-muted-foreground" />
              <CardTitle className="mt-2 text-base">{AGENCY_PAYLOADS[a].form}</CardTitle>
            </CardHeader>
            {/* Pushed to the bottom left of the card, so the three badges line
                up across the row whatever the form name wraps to. */}
            <CardContent className="mt-auto flex">
              <span className="rounded border border-dashed px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                {consents[a] ? "DRAFT, SUBMITTED" : "DRAFT, NOT SUBMITTED"}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">One Status, Across All Three</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Today this lives in three places and none of them talk to each other. Here it is as one
            list, in the order it happened.
          </p>
        </CardHeader>
        <CardContent>
          <ol className="space-y-0">
            {events.map((e, i) => (
              <li className="flex gap-4" key={`${e.label}-${i}`}>
                <span className="w-16 shrink-0 pt-3 text-xs text-muted-foreground">{e.date}</span>

                {/* The rail: a dot per event, joined by a line, so the whole
                    thing reads as one thread rather than as separate rows. */}
                <span className="relative flex w-4 shrink-0 justify-center">
                  {i !== events.length - 1 && (
                    <span className="absolute top-5 bottom-0 w-px bg-border" />
                  )}
                  <span
                    className={`relative mt-4 size-2.5 rounded-full ${
                      e.done ? "bg-primary" : "bg-border"
                    }`}
                  />
                </span>

                <span className="flex-1 py-3">
                  <span
                    className={`block text-sm ${e.done ? "font-medium" : "text-muted-foreground"}`}
                  >
                    {e.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">{e.actor}</span>
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">What Happens Next</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p>
            <span className="font-medium">Nothing, from you.</span>{" "}
            <span className="text-muted-foreground">
              Each agency decides in its own time. MyTakziah watches the deadlines and tells you
              when a decision arrives, so nobody has to remember which office to ring.
            </span>
          </p>

          <div className="flex items-start gap-3 rounded-[var(--radius-control)] bg-muted p-3">
            <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            <p>
              <span className="font-medium">The One Date That Matters. </span>
              <span className="text-muted-foreground">
                The EPF Death Assistance window closes six months after the death, on 14 February
                2027. It is the only family deadline we could verify, which is why it leads.
              </span>
            </p>
          </div>

          {waiting.length > 0 && (
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {waitingList} {waiting.length === 1 ? "has" : "have"} not been sent anything.{" "}
              </span>
              Consent was never all or nothing. You can go back and give it, or leave it, and the
              rest still proceeds.
            </p>
          )}

          <p className="border-t pt-4 text-muted-foreground">
            No status in this demo means a claim has been granted. The agency decides. MyTakziah
            prepares, submits with your consent, and tracks.
          </p>
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={onRestart} size="lg">
          <RotateCcw className="size-4" /> Walk Through It Again
        </Button>
        <Button onClick={onAbout} size="lg" variant="outline">
          What This Demo Is, and Is Not <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
