import { AlertCircle, FileText } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AGENCY_PAYLOADS, FIELD_GROUPS, type Agency } from "@/data";
import { docsFor, type Answers } from "@/plan";

/**
 * What would actually go on one agency's form, opened from a draft card.
 *
 * **This is deliberately not a facsimile of the government form.** We have
 * verified field lists for NRD.LM02, KWSP 9KM (AHL) and Borang 24 and 26, but no
 * layouts, and a hand-drawn imitation of an official Malaysian form would be
 * inaccurate, would fail in front of anyone who has seen the real one, and cuts
 * against the recorded decision not to imply official standing. So it states
 * what would be submitted rather than drawing the paper it goes on.
 *
 * The "Still Needed" half is the point as much as the filled half. The concept
 * removes the repetition, not the paperwork, and saying so here is what makes
 * the rest of the claim credible.
 */
export function DraftDialog({
  agency,
  values,
  answers,
  submitted,
  onClose,
}: {
  agency: Agency | null;
  values: Record<string, string>;
  answers: Answers;
  submitted: boolean;
  onClose: () => void;
}) {
  if (!agency) return null;

  const groups = FIELD_GROUPS.filter((g) => g.demandedBy.includes(agency));

  return (
    <Dialog onOpenChange={(open) => !open && onClose()} open>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <span className="flex items-center gap-2">
            <FileText aria-hidden className="size-4 text-muted-foreground" />
            <span className="rounded border border-dashed px-2 py-0.5 text-xs font-medium tracking-wide text-muted-foreground">
              {submitted ? "DRAFT, SUBMITTED" : "DRAFT, NOT SUBMITTED"}
            </span>
          </span>
          <DialogTitle className="mt-2">{AGENCY_PAYLOADS[agency].form}</DialogTitle>
          <DialogDescription>
            {submitted ? "What was sent to" : "What would be sent to"} {agency}, prepared from the
            evidence you gave once. This is a statement of the submission, not a copy of the
            agency's form.
          </DialogDescription>
        </DialogHeader>

        <section>
          <h3 className="text-sm font-medium">Filled From What You Provided</h3>
          <dl className="mt-3 divide-y rounded-[var(--radius-control)] border">
            {groups.flatMap((group) =>
              group.fields.map((f) => {
                const value = values[`${group.id}.${f.name}`]?.trim();
                return (
                  <div
                    className="flex flex-col gap-0.5 px-3 py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
                    key={`${group.id}.${f.name}`}
                  >
                    <dt className="text-sm text-muted-foreground sm:w-44 sm:shrink-0">{f.name}</dt>
                    <dd className="text-sm font-medium sm:flex-1">
                      {value || (
                        <span className="font-normal text-muted-foreground">Not given</span>
                      )}
                    </dd>
                    {/* Naming the source group is what makes the once-only claim
                        visible rather than asserted. */}
                    <dd className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                      from {group.label}
                    </dd>
                  </div>
                );
              })
            )}
          </dl>
        </section>

        <section className="mt-2">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <AlertCircle aria-hidden className="size-4 text-primary" />
            {submitted ? `What ${agency} Will Still Ask You For` : "Still Needed From You"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {submitted
              ? "The claim has gone. These are documents MyTakziah cannot send on your behalf, and the agency decides once it has them."
              : "MyTakziah cannot produce these. It removes the repetition, not the paperwork."}
          </p>
          <ul className="mt-3 space-y-2.5">
            {docsFor(agency, answers).map((d) => (
              <li className="flex flex-col gap-0.5" key={d.id}>
                <span className="text-sm font-medium">{d.label}</span>
                <span className="text-xs text-muted-foreground">{d.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-2 border-t pt-4 text-xs text-muted-foreground">
          Nothing is sent from this demo. {agency} decides whether the submission is accepted and
          what, if anything, is paid.
        </p>
      </DialogContent>
    </Dialog>
  );
}
