import { AGENCIES, type Agency } from "@/data";

/* The few conditions that change which documents an agency asks for.
   Every branch below traces to docs/research/shared-fields-matrix.md. */
export type Answers = {
  marital?: "married" | "unmarried" | "divorced";
  religion?: "muslim" | "non-muslim";
  nomination?: "yes" | "no" | "unknown";
};

export const QUESTIONS: {
  key: keyof Answers;
  label: string;
  why: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "marital",
    label: "Was the deceased married?",
    why: "KWSP asks for a different certificate in each case",
    options: [
      { value: "married", label: "Married" },
      { value: "unmarried", label: "Unmarried" },
      { value: "divorced", label: "Divorced" },
    ],
  },
  {
    key: "religion",
    label: "Was the deceased Muslim?",
    why: "The declaration forms differ, at both KWSP and PERKESO",
    options: [
      { value: "muslim", label: "Muslim" },
      { value: "non-muslim", label: "Non-Muslim" },
    ],
  },
  {
    key: "nomination",
    label: "Was there an EPF nomination?",
    why: "Without one, KWSP may require a court or Amanah Raya letter",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "unknown", label: "I Do Not Know" },
    ],
  },
];

export type Doc = {
  id: string;
  label: string;
  note: string;
  /** Four words at most, and only where it changes whether you need the item.
      The plan card is a checklist; the fuller `note` belongs in the dialog. */
  hint?: string;
  agencies: Agency[];
  /** Undefined means always required. */
  applies?: (a: Answers) => boolean;
};

/* Sources: JPN ordinary death registration, KWSP Death Withdrawal document list,
   PERKESO Borang 34 and Borang 24 checklists. See shared-fields-matrix.md. */
export const DOCUMENTS: Doc[] = [
  {
    id: "nrd-lm02",
    label: "Death Register or Burial Permit, NRD.LM02, blue copy",
    note: "Issued by the hospital, PDRM or DBKL that verified the death",
    agencies: ["JPN"],
  },
  {
    id: "cause",
    label: "Medical certification of the cause of death",
    hint: "hospital deaths only",
    note: "Form NRD.LM09, or NRD.LM10 after a post-mortem. Only if the death was in hospital",
    agencies: ["JPN"],
  },
  {
    id: "deceased-id",
    label: "Identity document of the deceased",
    note: "Original at JPN, copies for the other two",
    agencies: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "claimant-id",
    label: "Your own identity document",
    note: "Original and a copy at every counter",
    agencies: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "death-cert",
    label: "Death certificate",
    note: "JPN issues this. Both benefit agencies then demand it separately",
    agencies: ["KWSP", "PERKESO"],
  },
  {
    id: "bank",
    label: "Bank account evidence, in your own name",
    hint: "not a joint account",
    note: "Statement, account book or a bank confirmation letter. Joint accounts are not accepted",
    agencies: ["KWSP", "PERKESO"],
  },
  {
    id: "marriage",
    label: "Marriage certificate",
    note: "Also used as relationship evidence at PERKESO",
    agencies: ["KWSP", "PERKESO"],
    applies: (a) => a.marital === "married",
  },
  {
    id: "deceased-birth",
    label: "Birth certificate of the deceased",
    note: "Required where the member was unmarried",
    agencies: ["KWSP"],
    applies: (a) => a.marital === "unmarried",
  },
  {
    id: "divorce",
    label: "Divorce certificate, or proof of your relation",
    note: "Required where the member was divorced",
    agencies: ["KWSP"],
    applies: (a) => a.marital === "divorced",
  },
  {
    id: "decl-a",
    label: "Declaration of responsibility, Appendix A",
    note: "The Muslim version of the KWSP declaration",
    agencies: ["KWSP"],
    applies: (a) => a.religion === "muslim",
  },
  {
    id: "decl-b",
    label: "Declaration of responsibility, Appendix B",
    note: "The non-Muslim version of the KWSP declaration",
    agencies: ["KWSP"],
    applies: (a) => a.religion === "non-muslim",
  },
  {
    id: "balu",
    label: "Borang Akuan Balu Tunggal",
    note: "Sole widow declaration, required by PERKESO for Muslims",
    agencies: ["PERKESO"],
    applies: (a) => a.religion === "muslim" && a.marital === "married",
  },
  {
    id: "court",
    label: "Court, legal institution or Amanah Raya letter",
    hint: "if there was no nomination",
    note: "May be required where there is no nomination, above the payment thresholds",
    agencies: ["KWSP"],
    applies: (a) => a.nomination === "no" || a.nomination === "unknown",
  },
  {
    id: "tier",
    label: "Relationship evidence for surviving family",
    hint: "spouse and children first",
    note: "PERKESO works in tiers: spouse and children, else parents and siblings, else grandparents",
    agencies: ["PERKESO"],
  },
];

/**
 * The plan.
 *
 * JPN comes first and that ordering is not a preference: JPN issues the death
 * certificate that both benefit agencies then demand, so any other order sends
 * a family home to come back.
 *
 * `copies` is the cheapest useful thing here. A family currently discovers one
 * agency at a time that it wants the same certificate, which is part of why the
 * trips multiply.
 */
export const TRIPS: { agency: Agency; heading: string; why: string }[] = [
  {
    agency: "JPN",
    heading: "First, JPN",
    why: "Issues the certificate the other two need",
  },
  {
    agency: "KWSP",
    heading: "Then KWSP",
    why: "Death Withdrawal, six month window",
  },
  {
    agency: "PERKESO",
    heading: "Then PERKESO",
    why: "Funeral benefit and survivors' pension",
  },
];

export function docsFor(agency: Agency, answers: Answers): Doc[] {
  return DOCUMENTS.filter((d) => d.agencies.includes(agency) && (!d.applies || d.applies(answers)));
}

/** Documents demanded by more than one agency, with how many are needed. */
export function shared(answers: Answers): { doc: Doc; count: number }[] {
  return DOCUMENTS.filter((d) => (!d.applies || d.applies(answers)) && d.agencies.length > 1)
    .map((doc) => ({ doc, count: doc.agencies.length }))
    .sort((a, b) => b.count - a.count);
}

export function answered(a: Answers) {
  return AGENCIES.length > 0 && Boolean(a.marital && a.religion && a.nomination);
}
