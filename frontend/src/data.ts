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
    label: "Who Died",
    hint: "Identity of the Deceased",
    fields: [
      { name: "Full Name", placeholder: "Name as printed on MyKad" },
      { name: "Identity Number", placeholder: "MyKad number" },
    ],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "claimant",
    label: "Who You Are",
    hint: "Identity of the Claimant",
    fields: [
      { name: "Your Full Name", placeholder: "Name as printed on MyKad" },
      { name: "Your Identity Number", placeholder: "MyKad number" },
    ],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "death",
    label: "Proof of the Death",
    hint: "The Fact of the Death",
    fields: [{ name: "Death Register Reference", placeholder: "NRD.LM02 reference" }],
    demandedBy: ["JPN", "KWSP", "PERKESO"],
  },
  {
    id: "relationship",
    label: "How You Are Related",
    hint: "Relationship to the Deceased",
    fields: [{ name: "Relationship", placeholder: "Spouse, child, parent" }],
    demandedBy: ["KWSP", "PERKESO"],
  },
  {
    id: "payment",
    label: "Where Money Should Go",
    hint: "Payment Destination",
    fields: [{ name: "Bank Account", placeholder: "Account in your own name" }],
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
    title: "Death Withdrawal, Including Death Assistance",
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
    receives: ["Who Died", "Who You Are", "Proof of the Death"],
  },
  KWSP: {
    form: "KWSP 9KM (AHL)",
    receives: [
      "Who Died",
      "Who You Are",
      "Proof of the Death",
      "How You Are Related",
      "Where Money Should Go",
    ],
  },
  PERKESO: {
    form: "Borang 24 and Borang 26",
    receives: [
      "Who Died",
      "Who You Are",
      "Proof of the Death",
      "How You Are Related",
      "Where Money Should Go",
    ],
  },
};

/* Illustrative values for the "Fill This In for Me" shortcut. A fictional
   composite family, matching the verification record on frame 1. Nobody should
   have to type a MyKad number to see the point of the demo. */
export const SAMPLE_VALUES: Record<string, string> = {
  "deceased.Full Name": "Fatimah binti Abdullah",
  "deceased.Identity Number": "540312-10-5432",
  "claimant.Your Full Name": "Ismail bin Yusof",
  "claimant.Your Identity Number": "500118-10-5011",
  "death.Death Register Reference": "LM02-2026-0814-KL",
  "relationship.Relationship": "Spouse",
  "payment.Bank Account": "Maybank 5141 2233 4455",
};

/* Stage labels for the transition between frames.
   Deliberately worded as rule matching rather than as a model deciding
   anything: the concept's whole defence is that eligibility is never
   determined by a model. See the wording table in agency-rule-map.md. */
export const PIPELINE_STAGES: Record<string, string[]> = {
  "1-2": [
    "Reading the Published Agency Rules",
    "Mapping Your Evidence to Each Agency Form",
    "Checking Every Deadline Against Today",
    "Ranking by Deadline, Not by Value",
  ],
  "3-4": ["Assembling One Payload per Agency", "Removing Anything an Agency Does Not Require"],
  "4-5": [
    "Filling Each Agency Form From Your Evidence",
    "Marking Every Form as a Draft",
    "Opening One Consolidated Timeline",
  ],
};
