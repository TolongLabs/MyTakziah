/* Content for the MyTakziah concept demo.
   Every rule and figure here traces to docs/research/. Do not add one that does not.
   Wording obeys the table at the end of docs/research/agency-rule-map.md:
   never "approved", never a bare "eligible", never "you will receive RM2,500". */

export const AGENCIES = ["JPN", "KWSP", "PERKESO"] as const;
export type Agency = (typeof AGENCIES)[number];

/* The five things a family is made to supply, and who demands each.
   Source: docs/research/shared-fields-matrix.md */
export type FieldGroup = {
  id: string;
  label: string;
  hint: string;
  fields: { name: string; placeholder: string }[];
  demandedBy: Agency[];
};

export const FIELD_GROUPS: FieldGroup[] = [
  {
    id: "deceased",
    label: "Who died",
    hint: "Identity of the deceased",
    fields: [
      { name: "Full name", placeholder: "Name as printed on MyKad" },
      { name: "Identity number", placeholder: "MyKad number" },
    ],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "claimant",
    label: "Who you are",
    hint: "Identity of the claimant",
    fields: [
      { name: "Your full name", placeholder: "Name as printed on MyKad" },
      { name: "Your identity number", placeholder: "MyKad number" },
    ],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "death",
    label: "Proof of the death",
    hint: "The fact of the death",
    fields: [{ name: "Death register reference", placeholder: "NRD.LM02 reference" }],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "relationship",
    label: "How you are related",
    hint: "Relationship to the deceased",
    fields: [{ name: "Relationship", placeholder: "Spouse, child, parent" }],
    demandedBy: ["KWSP", "PERKESO"],
  },
  {
    id: "payment",
    label: "Where money should go",
    hint: "Payment destination",
    fields: [{ name: "Bank account", placeholder: "Account in your own name" }],
    demandedBy: ["KWSP", "PERKESO"],
  },
];

/* Entitlements, ranked by deadline first and value second.
   Only the KWSP six-month window is a verified family deadline.
   Source: docs/research/agency-rule-map.md */
export type Entitlement = {
  id: string;
  agency: Agency;
  title: string;
  amount: string;
  deadline: string | null;
  condition: string;
  limitation: string;
  source: { label: string; url: string };
};

export const ENTITLEMENTS: Entitlement[] = [
  {
    id: "epf",
    agency: "KWSP",
    title: "Death Withdrawal, including Death Assistance",
    amount: "RM2,500 Death Assistance, at EPF's discretion",
    deadline: "6 months from the date of death",
    condition:
      "Application received within six months of death, member passed away before age 60, and the member still has savings with the EPF.",
    limitation:
      "EPF describes the assistance as a gesture made at its own discretion and reserves all final decisions. It is never automatic.",
    source: {
      label: "KWSP, Death Withdrawal",
      url: "https://www.kwsp.gov.my/en/member/account-centre/death",
    },
  },
  {
    id: "funeral",
    agency: "PERKESO",
    title: "Funeral Management Benefit",
    amount: "Up to RM3,000",
    deadline: null,
    condition:
      "Payable on death from any cause. The amount is the actual funeral expenditure or RM3,000, whichever is lower.",
    limitation:
      "Evidence of expenditure is required. PERKESO does not publish a quantified claim deadline.",
    source: {
      label: "PERKESO, Invalidity Scheme",
      url: "https://www.perkeso.gov.my/en/our-services/protection/invalidity-scheme.html",
    },
  },
  {
    id: "survivors",
    agency: "PERKESO",
    title: "Survivors' Pension",
    amount: "Monthly pension, rate set by PERKESO",
    deadline: null,
    condition:
      "Requires at least 24 monthly contributions within the 40 months before death, or a fractional equivalent, and death before age 60.",
    limitation:
      "This turns entirely on a contribution history that neither the family nor MyTakziah can see. Only PERKESO can confirm it.",
    source: {
      label: "PERKESO, Invalidity Scheme",
      url: "https://www.perkeso.gov.my/en/our-services/protection/invalidity-scheme.html",
    },
  },
];

/* What each agency would receive. Nothing is shared that the agency does not require. */
export const AGENCY_PAYLOADS: Record<Agency, { form: string; receives: string[] }> = {
  JPN: {
    form: "NRD.LM02, at the registration counter",
    receives: ["Who died", "Who you are", "Proof of the death"],
  },
  KWSP: {
    form: "KWSP 9KM (AHL)",
    receives: [
      "Who died",
      "Who you are",
      "Proof of the death",
      "How you are related",
      "Where money should go",
    ],
  },
  PERKESO: {
    form: "Borang 24 and Borang 26",
    receives: [
      "Who died",
      "Who you are",
      "Proof of the death",
      "How you are related",
      "Where money should go",
    ],
  },
};

/* Status vocabulary. "Approved" is deliberately absent and must stay absent. */
export const TIMELINE_STATES = [
  "Prepared",
  "Submitted",
  "Receipted",
  "In review by agency",
] as const;

export const DEMO_BANNER =
  "CONCEPT DEMO. Simulated agency responses. No live government submission.";
