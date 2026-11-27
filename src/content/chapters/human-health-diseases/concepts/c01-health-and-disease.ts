import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A person has no illness at all, but is lonely and anxious all the time. Are they healthy?`,
    reveal: t`Not fully. Health means well-being of body, mind and social life, not just the absence of disease.`,
  },
  explanation: {
    intuition: [
      t`The WHO defines **health** as complete physical, mental and social well-being.`,
      t`A **disease** disturbs this.`,
      t`Diseases are grouped by when and how they arise.`,
    ],
    formal: [
      {
        title: "Kinds of disease",
        points: [
          t`**Congenital**: present from birth.`,
          t`**Acquired**: develop after birth.`,
          t`Acquired diseases are communicable or non-communicable.`,
        ],
      },
      {
        title: "Communicable or not",
        points: [
          t`**Communicable** (infectious): pass from an infected to a healthy person, e.g. AIDS, malaria, hepatitis B.`,
          t`**Non-communicable**: do not spread, e.g. cancer, diabetes.`,
          t`Blood-borne germs can spread by shared needles; elephantiasis cannot, as its larvae must grow in a mosquito.`,
        ],
      },
    ],
    worked: {
      prompt: t`Hepatitis B spreads through shared needles. What kind of disease is it?`,
      steps: [
        t`It develops after birth.`,
        t`It passes from person to person.`,
      ],
      answer: t`Acquired, communicable`,
    },
    visualSpec: t`A tree of disease types: congenital and acquired, acquired splitting into communicable and non-communicable.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Says absence of disease.",
      remediation: "Health is more than that.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Says physical fitness alone.",
      remediation: "Mental and social well-being count too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Leaves out social well-being.",
      remediation: "Social well-being counts too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says from birth.",
      remediation: "That is congenital.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says only inherited.",
      remediation: "Infections are acquired too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says always infectious.",
      remediation: "Cancer is acquired but not infectious.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks AIDS.",
      remediation: "HIV spreads through blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks malaria.",
      remediation: "*Plasmodium* is in the blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks hepatitis B.",
      remediation: "The virus spreads through blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks non-communicable.",
      remediation: "Those do not spread.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks congenital.",
      remediation: "Those are present from birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks deficiency.",
      remediation: "Those come from poor diet.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says communicable.",
      remediation: "Cancer does not spread between people.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says congenital.",
      remediation: "Cancer usually arises later.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says deficiency.",
      remediation: "Cancer is not from poor diet.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(12)" },
      stem: t`According to the WHO, health is`,
      verify: { kind: "value", inputs: {  }, params: { q: "health" } },
      options: [
        { key: "A", text: t`complete physical, mental and social well-being`, correct: true, value: "complete_wellbeing" },
        { key: "B", text: t`merely the absence of disease`, correct: false, misconceptionId: "C01-M1", value: "no_disease" },
        { key: "C", text: t`physical fitness alone`, correct: false, misconceptionId: "C01-M2", value: "physical_only" },
        { key: "D", text: t`physical and mental fitness only`, correct: false, misconceptionId: "C01-M3", value: "body_mind_only" },
      ],
      solution: {
        steps: [
          t`Body, mind and social life.`,
          t`Complete well-being.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(1)" },
      stem: t`Acquired diseases are diseases that`,
      verify: { kind: "value", inputs: {  }, params: { q: "acquired" } },
      options: [
        { key: "A", text: t`develop after birth`, correct: true, value: "after_birth" },
        { key: "B", text: t`are present from birth`, correct: false, misconceptionId: "C01-M4", value: "from_birth" },
        { key: "C", text: t`are only inherited`, correct: false, misconceptionId: "C01-M5", value: "inherited_only" },
        { key: "D", text: t`are always infectious`, correct: false, misconceptionId: "C01-M6", value: "always_infectious" },
      ],
      solution: {
        steps: [
          t`Not present at birth.`,
          t`Develop after birth.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(1)" },
      stem: t`Which disease is NOT spread by unsterilized needles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "needles" } },
      options: [
        { key: "A", text: t`Malaria`, correct: false, misconceptionId: "C01-M8", value: "malaria_d" },
        { key: "B", text: t`Hepatitis B`, correct: false, misconceptionId: "C01-M9", value: "hepatitis_b_d" },
        { key: "C", text: t`Elephantiasis`, correct: true, value: "elephantiasis_d" },
        { key: "D", text: t`AIDS`, correct: false, misconceptionId: "C01-M7", value: "aids_d" },
      ],
      solution: {
        steps: [
          t`Larvae must grow in a mosquito.`,
          t`Elephantiasis.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(1)" },
      stem: t`A disease passed from an infected person to a healthy person, directly or indirectly, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "communicable" } },
      options: [
        { key: "A", text: t`communicable`, correct: true, value: "communicable_d" },
        { key: "B", text: t`non-communicable`, correct: false, misconceptionId: "C01-M10", value: "non_communicable_d" },
        { key: "C", text: t`congenital`, correct: false, misconceptionId: "C01-M11", value: "congenital_d" },
        { key: "D", text: t`a deficiency disease`, correct: false, misconceptionId: "C01-M12", value: "deficiency_d" },
      ],
      solution: {
        steps: [
          t`Passes person to person.`,
          t`Communicable.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(1)" },
      stem: t`Cancer is a disease that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cancer" } },
      options: [
        { key: "A", text: t`non-communicable`, correct: true, value: "non_communicable_d" },
        { key: "B", text: t`communicable`, correct: false, misconceptionId: "C01-M13", value: "communicable_d" },
        { key: "C", text: t`congenital`, correct: false, misconceptionId: "C01-M14", value: "congenital_d" },
        { key: "D", text: t`a deficiency disease`, correct: false, misconceptionId: "C01-M15", value: "deficiency_d" },
      ],
      solution: {
        steps: [
          t`It does not spread.`,
          t`Non-communicable.`,
        ],
      },
    },
  ],
};
