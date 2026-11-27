import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Under a microscope, chromosomes look like V's, L's, J's and I's. What decides each shape?`,
    reveal: t`Where the centromere sits: in the middle (V), off-centre (L), near one end (J), or at the very end (I).`,
  },
  explanation: {
    intuition: [
      t`A **chromosome** carries genes on its DNA.`,
      t`At metaphase it has two **chromatids** joined at the **centromere**.`,
      t`Its shape depends on where the centromere lies.`,
    ],
    formal: [
      {
        title: "Parts",
        points: [
          t`**Centromere**: the **primary constriction**, holding the kinetochore.`,
          t`**Telomeres**: the sealed ends.`,
          t`**Secondary constriction** and **satellite**: on some chromosomes.`,
        ],
      },
      {
        title: "Types",
        points: [
          t`**Metacentric** (V): centromere in the middle.`,
          t`**Submetacentric** (L): slightly off-centre.`,
          t`**Acrocentric** (J): near one end.`,
          t`**Telocentric** (I): at the very end.`,
          t`Humans: 22 pairs of **autosomes** and a pair of sex chromosomes (**allosomes**).`,
        ],
      },
    ],
    worked: {
      prompt: t`A human sperm has how many autosomes?`,
      steps: [
        t`Body cells have 22 pairs: 44 autosomes.`,
        t`A sperm has one of each: 22.`,
      ],
      answer: t`22`,
    },
    visualSpec: t`Four chromosome shapes, each with its centromere marked.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks metacentric.",
      remediation: "Metacentric has the centromere in the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks submetacentric.",
      remediation: "Submetacentric is slightly off-centre.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks telocentric.",
      remediation: "Telocentric is at the very end.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks the telomere.",
      remediation: "Telomeres are the ends.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks the secondary constriction.",
      remediation: "The centromere is the primary constriction.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks the satellite.",
      remediation: "The satellite is a knob beyond a secondary constriction.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Calls it an autosome.",
      remediation: "Autosomes are not sex chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Calls it extra.",
      remediation: "Allosomes are normal sex chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Calls it a chromatid.",
      remediation: "A chromatid is half a chromosome.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks submetacentric.",
      remediation: "Submetacentric is L-shaped.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks acrocentric.",
      remediation: "Acrocentric is J-shaped.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks telocentric.",
      remediation: "Telocentric is I-shaped.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Counts 23.",
      remediation: "23 pairs includes the sex chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Counts 46.",
      remediation: "46 is all chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Counts 44.",
      remediation: "44 is the number of autosomes, not pairs.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(5)" },
      stem: t`A chromosome with its centromere near one end is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acro" } },
      options: [
        { key: "A", text: t`submetacentric`, correct: false, misconceptionId: "C07-M2", value: "submetacentric" },
        { key: "B", text: t`telocentric`, correct: false, misconceptionId: "C07-M3", value: "telocentric" },
        { key: "C", text: t`acrocentric`, correct: true, value: "acrocentric" },
        { key: "D", text: t`metacentric`, correct: false, misconceptionId: "C07-M1", value: "metacentric" },
      ],
      solution: {
        steps: [
          t`The centromere is near one end.`,
          t`Acrocentric.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2024 Q. 1(ii)" },
      stem: t`Another name for the centromere is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "primary" } },
      options: [
        { key: "A", text: t`telomere`, correct: false, misconceptionId: "C07-M4", value: "telomere" },
        { key: "B", text: t`secondary constriction`, correct: false, misconceptionId: "C07-M5", value: "secondary_constriction" },
        { key: "C", text: t`satellite`, correct: false, misconceptionId: "C07-M6", value: "satellite" },
        { key: "D", text: t`primary constriction`, correct: true, value: "primary_constriction" },
      ],
      solution: {
        steps: [
          t`The centromere is a constriction.`,
          t`The primary constriction.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(3)" },
      stem: t`An allosome is`,
      verify: { kind: "value", inputs: {  }, params: { q: "allosome" } },
      options: [
        { key: "A", text: t`a chromatid`, correct: false, misconceptionId: "C07-M9", value: "chromatid" },
        { key: "B", text: t`a sex chromosome`, correct: true, value: "sex_chromosome" },
        { key: "C", text: t`an autosome`, correct: false, misconceptionId: "C07-M7", value: "autosome" },
        { key: "D", text: t`an extra chromosome`, correct: false, misconceptionId: "C07-M8", value: "extra_chromosome" },
      ],
      solution: {
        steps: [
          t`Allosomes determine sex.`,
          t`Sex chromosomes.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2025 Q. 10" },
      stem: t`A V-shaped chromosome, with its centromere in the middle, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "v" } },
      options: [
        { key: "A", text: t`metacentric`, correct: true, value: "metacentric" },
        { key: "B", text: t`submetacentric`, correct: false, misconceptionId: "C07-M10", value: "submetacentric" },
        { key: "C", text: t`acrocentric`, correct: false, misconceptionId: "C07-M11", value: "acrocentric" },
        { key: "D", text: t`telocentric`, correct: false, misconceptionId: "C07-M12", value: "telocentric" },
      ],
      solution: {
        steps: [
          t`The centromere is in the middle.`,
          t`Metacentric.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(3)" },
      stem: t`How many pairs of autosomes does a human body cell have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "autosomes" } },
      options: [
        { key: "A", text: t`$23$`, correct: false, misconceptionId: "C07-M13", value: "23" },
        { key: "B", text: t`$46$`, correct: false, misconceptionId: "C07-M14", value: "46" },
        { key: "C", text: t`$44$`, correct: false, misconceptionId: "C07-M15", value: "44" },
        { key: "D", text: t`$22$`, correct: true, value: "22" },
      ],
      solution: {
        steps: [
          t`23 pairs minus the sex pair.`,
          t`22 pairs of autosomes.`,
        ],
      },
    },
  ],
};
