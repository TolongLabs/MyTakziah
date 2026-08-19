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

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DraftDialog } from "@/draft";
import { QUESTIONS, TRIPS, answered, docsFor, shared, type Answers } from "@/plan";
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
  answers,
  setAnswers,
  onNext,
}: {
  values: Values;
  setValues: (v: Values) => void;
  answers: Answers;
  setAnswers: (a: Answers) => void;
  onNext: () => void;
}) {
  const done = FIELD_GROUPS.filter((g) => groupComplete(g, values)).length;
  const conditionsDone = QUESTIONS.filter((q) => answers[q.key]).length;
  /* Continue requires the conditions too. They are a separate section because
     they are conditions rather than evidence, but leaving them optional meant a
     user could legitimately finish this page, move on, and then be told on step
     5 that this page was unfinished. */
  const allDone = done === FIELD_GROUPS.length && conditionsDone === QUESTIONS.length;

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
        onClick={() => {
          setValues({ ...values, ...SAMPLE_VALUES });
          setAnswers({ marital: "married", religion: "muslim", nomination: "yes" });
        }}
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
              <Card key={group.id} className={complete ? "border-support" : undefined}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-base">
                      {i + 1}. {group.label}
                    </CardTitle>
                    {complete && (
                      <span className="flex items-center gap-1 text-sm font-medium text-support">
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

          {/* Separate from the five on purpose. These are not evidence the
              family hands over; they are the conditions that select which
              documents each agency will ask them to bring. Mixing them into the
              five would blunt the claim the matrix is making. */}
          <Card className={conditionsDone === QUESTIONS.length ? "border-support" : undefined}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base">A Few More Things</CardTitle>
                {conditionsDone === QUESTIONS.length && (
                  <span className="flex items-center gap-1 text-sm font-medium text-support">
                    <Check className="size-4" /> Answered
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                These do not change what you provide. They change which documents each agency asks
                you to bring, so answering them once means we can tell you exactly what to take.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              {QUESTIONS.map((q) => (
                <div key={q.key}>
                  <p className="text-sm font-medium">{q.label}</p>
                  <p className="text-xs text-muted-foreground">{q.why}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {q.options.map((o) => {
                      const active = answers[q.key] === o.value;
                      return (
                        <button
                          key={o.value}
                          aria-pressed={active}
                          className={`rounded-[var(--radius-control)] border px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
                            active
                              ? "border-primary bg-selected text-selected-foreground"
                              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          onClick={() => setAnswers({ ...answers, [q.key]: o.value })}
                          type="button"
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
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
                                    complete ? "bg-support" : "bg-border"
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
            {[
              done < FIELD_GROUPS.length &&
                `${FIELD_GROUPS.length - done} of the five still to provide`,
              conditionsDone < QUESTIONS.length &&
                `${QUESTIONS.length - conditionsDone} of the three conditions still to answer`,
            ]
              .filter(Boolean)
              .join(", ")}
            . The point of the service is that you do this once, so the demo asks you to do it once.
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
  values,
  answers,
  onRestart,
  onAbout,
}: {
  consents: Record<Agency, boolean>;
  values: Record<string, string>;
  answers: Answers;
  onRestart: () => void;
  onAbout: () => void;
}) {
  const [open, setOpen] = useState<Agency | null>(null);
  const sent = AGENCIES.filter((a) => consents[a]);
  const waiting = AGENCIES.filter((a) => !consents[a]);
  const waitingList = new Intl.ListFormat("en-GB", { type: "conjunction" }).format(waiting);
  const sharedDocs = shared(answers);

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
      date: "Next",
      label: `${a} is waiting for your supporting documents`,
      actor: "Only then does it decide",
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
    <div className="mx-auto max-w-6xl">
      <Badge variant="secondary">Step 5</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Drafts, and One Timeline</h2>
      <p className="mt-3 text-muted-foreground">
        Three forms prepared from one set of evidence, and a single place to watch them.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {AGENCIES.map((a) => (
          <Card
            aria-label={`View the draft for ${a}`}
            className="flex cursor-pointer flex-col text-left transition-colors duration-150 hover:border-primary"
            key={a}
            onClick={() => setOpen(a)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(a);
              }
            }}
          >
            <CardHeader>
              <FileText className="size-5 text-muted-foreground" />
              <CardTitle className="mt-2 text-base">{AGENCY_PAYLOADS[a].form}</CardTitle>
            </CardHeader>
            {/* Pushed to the bottom left of the card, so the three badges line
                up across the row whatever the form name wraps to. */}
            <CardContent className="mt-auto flex items-center justify-between gap-3">
              <span className="rounded border border-dashed px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                {consents[a] ? "DRAFT, SUBMITTED" : "DRAFT, NOT SUBMITTED"}
              </span>
              <span className="text-xs font-medium text-primary">View draft</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">One Status, Across All Three</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Today this lives in three places and none of them talk to each other. Here it is as
              one list, in the order it happened.
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
                        e.done ? "bg-support" : "bg-border"
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

        <Card className="lg:sticky lg:top-6">
          <CardHeader>
            <CardTitle className="text-base">What Happens Next</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              <span className="font-medium">Bring what each agency still asks for. </span>
              <span className="text-muted-foreground">
                Open any draft above to see the list. MyTakziah sent the claim, not the documents.
              </span>
            </p>

            <p>
              <span className="font-medium">Then nothing, from you. </span>
              <span className="text-muted-foreground">
                It watches the deadlines and tells you when an agency decides.
              </span>
            </p>

            <div className="flex items-start gap-3 rounded-[var(--radius-control)] bg-muted p-3">
              <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>
                <span className="font-medium">14 February 2027. </span>
                <span className="text-muted-foreground">
                  The EPF window closes six months after the death. The only family deadline we
                  could verify.
                </span>
              </p>
            </div>

            {waiting.length > 0 && (
              <p>
                <span className="font-medium">{waitingList} not sent. </span>
                <span className="text-muted-foreground">
                  Consent is per agency. Give it later, or leave it.
                </span>
              </p>
            )}

            <p className="border-t pt-4 text-muted-foreground">
              Nothing here is a granted claim. The agency decides.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-base">What to Bring, and In What Order</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            {answered(answers)
              ? "Narrowed to your situation."
              : "Shown in full. Complete step 2 and this narrows to your situation."}
          </p>
        </CardHeader>

        {/* A checklist, so one line per item. The count badge already says an
            item is demanded more than once, and the full wording of every row is
            in that agency's draft, so `title` carries the detail at no visual
            cost rather than stacking a second line under all fourteen rows. */}
        <CardContent className="text-sm">
          {sharedDocs.length > 0 && (
            <section className="rounded-[var(--radius-control)] border bg-muted p-4">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Every Counter
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {sharedDocs.map(({ doc, count }) => (
                  <li className="flex items-baseline gap-3" key={doc.id} title={doc.note}>
                    <span className="w-6 shrink-0 font-medium text-primary">{count}x</span>
                    <span>{doc.label}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ol className="mt-6 space-y-5">
            {TRIPS.map(({ agency, why }, i) => {
              const only = docsFor(agency, answers).filter((d) => d.agencies.length === 1);
              return (
                <li className="flex gap-3" key={agency}>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p>
                      <span className="font-medium">{agency}</span>
                      <span className="text-muted-foreground"> {why}</span>
                    </p>
                    {only.length > 0 ? (
                      <ul className="mt-2 space-y-1.5">
                        {only.map((d) => (
                          <li key={d.id} title={d.note}>
                            {d.label}
                            {d.hint && <span className="text-muted-foreground"> ({d.hint})</span>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-muted-foreground">
                        {answered(answers)
                          ? "Nothing beyond what you are already carrying."
                          : `Complete step 2 to see what else ${agency} asks for.`}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </CardContent>
      </Card>

      <DraftDialog
        agency={open}
        answers={answers}
        onClose={() => setOpen(null)}
        submitted={open ? consents[open] : false}
        values={values}
      />

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
