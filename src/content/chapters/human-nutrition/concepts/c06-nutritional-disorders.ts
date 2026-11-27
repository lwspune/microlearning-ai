import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A doctor looks at the whites of a patient's eyes. What can a yellow colour there tell?`,
    reveal: t`It points to jaundice, a sign of abnormal bilirubin metabolism and excretion.`,
  },
  explanation: {
    intuition: [
      t`Poor diet and a damaged liver both cause disorders.`,
      t`Kwashiorkor comes from too little protein.`,
      t`Jaundice and alcohol damage involve the liver.`,
    ],
    formal: [
      {
        title: "Kwashiorkor",
        points: [
          t`A **Protein Energy Malnutrition**, generally in children of one to three years.`,
          t`Underweight, stunted growth, protruding belly, slender legs, **oedema** of lower legs and face.`,
          t`Caused by lack of nutritious food; a proper diet can reverse the symptoms.`,
        ],
      },
      {
        title: "Liver disorders",
        points: [
          t`**Jaundice**: yellow conjunctiva and skin, whitish stool; from excess RBC breakdown or blocked bile flow.`,
          t`Bilirubin comes from haemoglobin; fat soluble bilirubin is toxic to brain cells.`,
          t`Alcoholism causes **steatosis** (fatty liver), alcoholic hepatitis, fibrosis and cirrhosis.`,
        ],
      },
    ],
    worked: {
      prompt: t`A child of two years has oedema of the face, a protruding belly and slender legs. Name the disorder.`,
      steps: [
        t`These are signs of protein deficiency.`,
        t`In children of one to three years it is kwashiorkor.`,
      ],
      answer: t`Kwashiorkor`,
    },
    visualSpec: t`A table of disorders with their cause and two symptoms each.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks jaundice.",
      remediation: "Jaundice is about bilirubin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks cirrhosis.",
      remediation: "Cirrhosis is a liver disorder.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks pancreatitis.",
      remediation: "Pancreatitis is mostly from alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks yellow eyes.",
      remediation: "That is jaundice.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks whitish stool.",
      remediation: "That is jaundice.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says weight gain.",
      remediation: "The child is underweight.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks haemoglobin.",
      remediation: "Bilirubin comes from haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks glycogen.",
      remediation: "Glycogen is stored sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks urea.",
      remediation: "Urea comes from amino acids.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says water soluble.",
      remediation: "The fat soluble form is toxic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says both.",
      remediation: "Only the fat soluble form.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says neither.",
      remediation: "Fat soluble bilirubin harms brain cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks cirrhosis.",
      remediation: "Fatty liver is steatosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks fibrosis.",
      remediation: "Fatty liver is steatosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks hepatitis.",
      remediation: "Fatty liver is steatosis.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q7" },
      stem: t`A protein deficiency disorder seen in children of one to three years is`,
      verify: { kind: "value", inputs: {  }, params: { q: "protein" } },
      options: [
        { key: "A", text: t`jaundice`, correct: false, misconceptionId: "C06-M1", value: "jaundice_t" },
        { key: "B", text: t`cirrhosis`, correct: false, misconceptionId: "C06-M2", value: "cirrhosis_t" },
        { key: "C", text: t`pancreatitis`, correct: false, misconceptionId: "C06-M3", value: "pancreatitis_t" },
        { key: "D", text: t`kwashiorkor`, correct: true, value: "kwashiorkor_t" },
      ],
      solution: {
        steps: [
          t`Protein Energy Malnutrition.`,
          t`Kwashiorkor.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q7" },
      stem: t`Which is a symptom of kwashiorkor?`,
      verify: { kind: "value", inputs: {  }, params: { q: "symptom" } },
      options: [
        { key: "A", text: t`Oedema of the lower legs and face`, correct: true, value: "oedema_t" },
        { key: "B", text: t`Yellow conjunctiva of the eyes`, correct: false, misconceptionId: "C06-M4", value: "yellow_eyes" },
        { key: "C", text: t`Whitish stool`, correct: false, misconceptionId: "C06-M5", value: "whitish_stool" },
        { key: "D", text: t`Weight gain`, correct: false, misconceptionId: "C06-M6", value: "overweight_t" },
      ],
      solution: {
        steps: [
          t`Swelling of legs and face.`,
          t`Oedema.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q4(B)" },
      stem: t`Jaundice is a sign of abnormal metabolism and excretion of`,
      verify: { kind: "value", inputs: {  }, params: { q: "pigment" } },
      options: [
        { key: "A", text: t`bilirubin`, correct: true, value: "bilirubin_t" },
        { key: "B", text: t`haemoglobin`, correct: false, misconceptionId: "C06-M7", value: "haemoglobin_t" },
        { key: "C", text: t`glycogen`, correct: false, misconceptionId: "C06-M8", value: "glycogen_t" },
        { key: "D", text: t`urea`, correct: false, misconceptionId: "C06-M9", value: "urea_t" },
      ],
      solution: {
        steps: [
          t`Pigment from haemoglobin.`,
          t`Bilirubin.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q4(B)" },
      stem: t`Serum bilirubin is checked in jaundice because one form is toxic to brain cells. That form is`,
      verify: { kind: "value", inputs: {  }, params: { q: "toxic" } },
      options: [
        { key: "A", text: t`neither form`, correct: false, misconceptionId: "C06-M12", value: "neither_form" },
        { key: "B", text: t`fat soluble bilirubin`, correct: true, value: "fat_soluble" },
        { key: "C", text: t`water soluble bilirubin`, correct: false, misconceptionId: "C06-M10", value: "water_soluble" },
        { key: "D", text: t`both forms equally`, correct: false, misconceptionId: "C06-M11", value: "both_forms" },
      ],
      solution: {
        steps: [
          t`Toxic to brain cells.`,
          t`Fat soluble bilirubin.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(B)" },
      stem: t`Fatty liver, one of the liver disorders caused by alcoholism, is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "fatty" } },
      options: [
        { key: "A", text: t`steatosis`, correct: true, value: "steatosis_t" },
        { key: "B", text: t`cirrhosis`, correct: false, misconceptionId: "C06-M13", value: "cirrhosis_t" },
        { key: "C", text: t`fibrosis`, correct: false, misconceptionId: "C06-M14", value: "fibrosis_t" },
        { key: "D", text: t`alcoholic hepatitis`, correct: false, misconceptionId: "C06-M15", value: "alcoholic_hepatitis" },
      ],
      solution: {
        steps: [
          t`Fatty liver.`,
          t`Steatosis.`,
        ],
      },
    },
  ],
};
