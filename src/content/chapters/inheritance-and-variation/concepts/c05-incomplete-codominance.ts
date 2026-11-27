import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A red four-o'clock flower crossed with a white one gives pink flowers. Has dominance failed?`,
    reveal: t`Yes, partly: neither allele is fully dominant, so the heterozygote is intermediate. This is incomplete dominance.`,
  },
  explanation: {
    intuition: [
      t`Not every gene follows Mendel's complete dominance.`,
      t`In **incomplete dominance** the heterozygote is intermediate.`,
      t`In **codominance** both alleles show fully in the heterozygote.`,
    ],
    formal: [
      {
        title: "Incomplete dominance",
        points: [
          t`*Mirabilis jalapa*: red $RR$ × white $rr$ gives pink $Rr$.`,
          t`F₂: 1 red : 2 pink : 1 white.`,
          t`So the phenotypic ratio equals the genotypic ratio.`,
        ],
      },
      {
        title: "Codominance",
        points: [
          t`Roan cattle show red and white hairs side by side.`,
          t`Blood group AB shows both antigens A and B.`,
        ],
      },
    ],
    worked: {
      prompt: t`A pink *Mirabilis* is crossed with a white one. What fraction of the offspring are pink?`,
      steps: [
        t`$Rr \times rr$ gives $Rr : rr = 1 : 1$.`,
        t`Half are pink.`,
      ],
      answer: t`$\frac12$`,
    },
    visualSpec: t`Red and white flowers crossing to pink, then pink selfing to red, pink and white.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Gives 3 : 1.",
      remediation: "With no dominance, pink shows separately: 1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives 2 : 1 : 1.",
      remediation: "The heterozygotes are half: 1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives 2 : 2.",
      remediation: "1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks complete dominance.",
      remediation: "Complete dominance gives 3 : 1 against 1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks multiple alleles.",
      remediation: "Multiple alleles is about number of alleles.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks cytoplasmic inheritance.",
      remediation: "Cytoplasmic genes are outside the nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks incomplete dominance.",
      remediation: "Roan shows both colours, not a blend: codominance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks epistasis.",
      remediation: "Epistasis is between different genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks pleiotropy.",
      remediation: "Pleiotropy is one gene, many traits.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Calls it homozygous red.",
      remediation: t`$RR$ is red.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls it homozygous white.",
      remediation: t`$rr$ is white.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks pink is a new allele.",
      remediation: "Pink is the heterozygote.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks incomplete dominance.",
      remediation: "AB shows both antigens fully: codominance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks A dominates B.",
      remediation: "Both A and B show.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks pleiotropy.",
      remediation: "Pleiotropy is one gene, many traits.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(1)" },
      stem: t`The F₂ phenotypic ratio for flower colour in *Mirabilis jalapa* (incomplete dominance) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mirabilis" } },
      options: [
        { key: "A", text: t`$2 : 2$`, correct: false, misconceptionId: "C05-M3", value: "two_two" },
        { key: "B", text: t`$1 : 2 : 1$`, correct: true, value: "one_two_one" },
        { key: "C", text: t`$3 : 1$`, correct: false, misconceptionId: "C05-M1", value: "three_one" },
        { key: "D", text: t`$2 : 1 : 1$`, correct: false, misconceptionId: "C05-M2", value: "two_one_one" },
      ],
      solution: {
        steps: [
          t`$Rr \times Rr$ gives $RR : Rr : rr$.`,
          t`1 red : 2 pink : 1 white.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(4)" },
      stem: t`When the F₂ phenotypic and genotypic ratios are the same, it is an example of`,
      verify: { kind: "value", inputs: {  }, params: { q: "same" } },
      options: [
        { key: "A", text: t`complete dominance`, correct: false, misconceptionId: "C05-M4", value: "complete_dominance" },
        { key: "B", text: t`multiple alleles`, correct: false, misconceptionId: "C05-M5", value: "multiple_alleles" },
        { key: "C", text: t`cytoplasmic inheritance`, correct: false, misconceptionId: "C05-M6", value: "cytoplasmic" },
        { key: "D", text: t`incomplete dominance`, correct: true, value: "incomplete_dominance" },
      ],
      solution: {
        steps: [
          t`Each genotype has its own phenotype.`,
          t`Incomplete dominance.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2024 Q. 19" },
      stem: t`Roan cattle show both red and white hairs. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "roan" } },
      options: [
        { key: "A", text: t`codominance`, correct: true, value: "codominance" },
        { key: "B", text: t`incomplete dominance`, correct: false, misconceptionId: "C05-M7", value: "incomplete_dominance" },
        { key: "C", text: t`epistasis`, correct: false, misconceptionId: "C05-M8", value: "epistasis" },
        { key: "D", text: t`pleiotropy`, correct: false, misconceptionId: "C05-M9", value: "pleiotropy" },
      ],
      solution: {
        steps: [
          t`Both colours show.`,
          t`Codominance.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(1)" },
      stem: t`A pink-flowered *Mirabilis* plant is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pink" } },
      options: [
        { key: "A", text: t`homozygous white, $rr$`, correct: false, misconceptionId: "C05-M11", value: "homozygous_white" },
        { key: "B", text: t`a carrier of a new pink allele`, correct: false, misconceptionId: "C05-M12", value: "new_allele" },
        { key: "C", text: t`a heterozygote, $Rr$`, correct: true, value: "heterozygote_rr" },
        { key: "D", text: t`homozygous red, $RR$`, correct: false, misconceptionId: "C05-M10", value: "homozygous_red" },
      ],
      solution: {
        steps: [
          t`Pink is intermediate.`,
          t`It is $Rr$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2024 Q. 19" },
      stem: t`In a person of blood group AB, both antigens A and B are present. This shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "ab" } },
      options: [
        { key: "A", text: t`codominance`, correct: true, value: "codominance" },
        { key: "B", text: t`incomplete dominance`, correct: false, misconceptionId: "C05-M13", value: "incomplete_dominance" },
        { key: "C", text: t`dominance of A over B`, correct: false, misconceptionId: "C05-M14", value: "a_dominant" },
        { key: "D", text: t`pleiotropy`, correct: false, misconceptionId: "C05-M15", value: "pleiotropy" },
      ],
      solution: {
        steps: [
          t`Both antigens are made.`,
          t`Codominance.`,
        ],
      },
    },
  ],
};
