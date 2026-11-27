import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A child is born without a working gene for an immune enzyme. Could doctors give the child the missing gene?`,
    reveal: t`Yes: gene therapy places a healthy copy of the gene into the child's own cells.`,
  },
  explanation: {
    intuition: [
      t`**Transgenic animals** carry foreign genes.`,
      t`They serve research, medicine and farming.`,
      t`**Gene therapy** treats disease by fixing genes.`,
    ],
    formal: [
      {
        title: "Transgenic animals",
        points: [
          t`Mice with an **oncogene** develop cancer, for cancer research.`,
          t`Pigs are bred as sources of **hearts for transplant**; also more meat.`,
          t`Cattle give better milk.`,
        ],
      },
      {
        title: "Gene therapy",
        points: [
          t`It replaces, alters or adds a faulty or missing gene.`,
          t`**Somatic** cell therapy: only the patient is affected.`,
          t`**Germ line** therapy: changes pass to offspring; discouraged for technical and ethical reasons.`,
        ],
      },
    ],
    worked: {
      prompt: t`A gene is added to a patient's lung cells. Will her children inherit it?`,
      steps: [
        t`Lung cells are somatic.`,
        t`Somatic changes are not passed on.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`A virus vector carrying a healthy gene into a patient's bone-marrow cell.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says they resist cancer.",
      remediation: "They are made to develop it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says they make insulin.",
      remediation: "They are for cancer study.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says they grow larger.",
      remediation: "That is not the aim.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says it never works.",
      remediation: "It is highly effective.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says it is cheap.",
      remediation: "Cost is not the reason.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says animals only.",
      remediation: "It is about humans.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says descendants too.",
      remediation: "That is germ line.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says the population.",
      remediation: "Only one person.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says embryos.",
      remediation: "That is germ line.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says drugs.",
      remediation: "It changes genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says transplant.",
      remediation: "It changes genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says vaccination.",
      remediation: "It changes genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks wool.",
      remediation: "Pigs give no wool.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks lac.",
      remediation: "Lac is from insects.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks silk.",
      remediation: "Silk is from silkworms.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(4)" },
      stem: t`Transgenic mice are used in cancer research because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "mice" } },
      options: [
        { key: "A", text: t`cannot get cancer`, correct: false, misconceptionId: "C06-M1", value: "resist_cancer" },
        { key: "B", text: t`make insulin`, correct: false, misconceptionId: "C06-M2", value: "make_insulin" },
        { key: "C", text: t`grow larger`, correct: false, misconceptionId: "C06-M3", value: "larger_size" },
        { key: "D", text: t`carry an oncogene and develop cancer`, correct: true, value: "carry_oncogene" },
      ],
      solution: {
        steps: [
          t`They carry an oncogene.`,
          t`They develop cancer.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 31" },
      stem: t`Germ line gene therapy is not encouraged in humans because`,
      verify: { kind: "value", inputs: {  }, params: { q: "germline" } },
      options: [
        { key: "A", text: t`its changes pass to future generations, raising technical and ethical problems`, correct: true, value: "heritable_ethics" },
        { key: "B", text: t`it never works`, correct: false, misconceptionId: "C06-M4", value: "ineffective_t" },
        { key: "C", text: t`it is too cheap`, correct: false, misconceptionId: "C06-M5", value: "too_cheap" },
        { key: "D", text: t`it works only in animals`, correct: false, misconceptionId: "C06-M6", value: "animals_only" },
      ],
      solution: {
        steps: [
          t`Changes are heritable.`,
          t`Ethical and technical problems.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 31" },
      stem: t`Somatic cell gene therapy affects`,
      verify: { kind: "value", inputs: {  }, params: { q: "somatic" } },
      options: [
        { key: "A", text: t`only the person treated`, correct: true, value: "only_patient" },
        { key: "B", text: t`the person and all descendants`, correct: false, misconceptionId: "C06-M7", value: "descendants_too" },
        { key: "C", text: t`the whole population`, correct: false, misconceptionId: "C06-M8", value: "whole_population" },
        { key: "D", text: t`only embryos`, correct: false, misconceptionId: "C06-M9", value: "only_embryos" },
      ],
      solution: {
        steps: [
          t`Body cells only.`,
          t`Only the patient.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(3)" },
      stem: t`Gene therapy treats a disorder by`,
      verify: { kind: "value", inputs: {  }, params: { q: "therapy" } },
      options: [
        { key: "A", text: t`vaccination alone`, correct: false, misconceptionId: "C06-M12", value: "vaccination_only" },
        { key: "B", text: t`replacing, altering or adding a faulty or missing gene`, correct: true, value: "replace_gene" },
        { key: "C", text: t`giving drugs`, correct: false, misconceptionId: "C06-M10", value: "drug_therapy" },
        { key: "D", text: t`transplanting an organ`, correct: false, misconceptionId: "C06-M11", value: "organ_transplant" },
      ],
      solution: {
        steps: [
          t`Fix the gene.`,
          t`Replace or add the gene.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2024 Q. 30" },
      stem: t`Transgenic pigs are bred mainly as a source of`,
      verify: { kind: "value", inputs: {  }, params: { q: "pigs" } },
      options: [
        { key: "A", text: t`hearts for transplants`, correct: true, value: "heart_transplant" },
        { key: "B", text: t`wool`, correct: false, misconceptionId: "C06-M13", value: "wool_p" },
        { key: "C", text: t`lac`, correct: false, misconceptionId: "C06-M14", value: "lac_p" },
        { key: "D", text: t`silk`, correct: false, misconceptionId: "C06-M15", value: "silk_p" },
      ],
      solution: {
        steps: [
          t`Organs for people.`,
          t`Hearts for transplants.`,
        ],
      },
    },
  ],
};
