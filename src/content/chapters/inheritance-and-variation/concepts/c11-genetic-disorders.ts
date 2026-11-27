import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A single extra chromosome, number 21, changes a person's development throughout life. How does a cell end up with an extra one?`,
    reveal: t`Non-disjunction: a chromosome pair fails to separate in meiosis, so a gamete carries both copies.`,
  },
  explanation: {
    intuition: [
      t`**Chromosomal disorders**: too many, too few or rearranged chromosomes.`,
      t`**Non-disjunction** in meiosis gives gametes with an extra or missing chromosome.`,
      t`**Gene disorders**: a faulty allele, such as PKU.`,
    ],
    formal: [
      {
        title: "Aneuploidy",
        points: [
          t`Trisomy $2n + 1$; monosomy $2n - 1$.`,
          t`**Down's syndrome**: trisomy 21, 47 chromosomes.`,
          t`**Turner's syndrome**: $44 + \text{XO}$, a sterile female.`,
          t`**Klinefelter's syndrome**: $44 + \text{XXY}$, a sterile male.`,
        ],
      },
      {
        title: "Autosomal recessive",
        points: [
          t`**PKU**: no phenylalanine hydroxylase.`,
          t`Sickle-cell anaemia, thalassemia, cystic fibrosis.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many chromosomes does a person with Turner's syndrome have?`,
      steps: [
        t`$44 + \text{XO}$: one sex chromosome.`,
        t`$44 + 1 = 45$`,
      ],
      answer: t`45`,
    },
    visualSpec: t`A karyotype with chromosome 21 in triplicate.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Gives 46.",
      remediation: "Down's adds one: 47.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: "Gives 45.",
      remediation: "45 is a monosomy, such as Turner's.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Gives 48.",
      remediation: "Down's has one extra: 47.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Picks Klinefelter's.",
      remediation: "Klinefelter's is XXY.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Picks Down's.",
      remediation: "Down's is trisomy 21.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Picks a normal female.",
      remediation: "A normal female is XX.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Picks Turner's.",
      remediation: "Turner's is XO.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Picks Down's.",
      remediation: "Down's is trisomy 21.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Picks super female.",
      remediation: "A super female is XXX.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Calls it X-linked.",
      remediation: "PKU is autosomal.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Calls it chromosomal.",
      remediation: "PKU is a single gene.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Calls it dominant.",
      remediation: "PKU needs two recessive alleles.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Gives 2n + 1.",
      remediation: "That is trisomy.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Gives 2n − 2.",
      remediation: "That is nullisomy.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Gives 3n.",
      remediation: "That is triploidy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2024 Q. 6" },
      stem: t`A person with Down's syndrome has how many chromosomes?`,
      verify: { kind: "value", inputs: {  }, params: { q: "down" } },
      options: [
        { key: "A", text: t`47`, correct: true, value: "47" },
        { key: "B", text: t`46`, correct: false, misconceptionId: "C11-M1", value: "46" },
        { key: "C", text: t`45`, correct: false, misconceptionId: "C11-M2", value: "45" },
        { key: "D", text: t`48`, correct: false, misconceptionId: "C11-M3", value: "48" },
      ],
      solution: {
        steps: [
          t`Trisomy 21 adds one chromosome.`,
          t`47.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q4" },
      stem: t`The chromosome formula $44 + \text{XO}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "turner" } },
      options: [
        { key: "A", text: t`Down's syndrome`, correct: false, misconceptionId: "C11-M5", value: "down" },
        { key: "B", text: t`a normal female`, correct: false, misconceptionId: "C11-M6", value: "normal_female" },
        { key: "C", text: t`Turner's syndrome`, correct: true, value: "turner" },
        { key: "D", text: t`Klinefelter's syndrome`, correct: false, misconceptionId: "C11-M4", value: "klinefelter" },
      ],
      solution: {
        steps: [
          t`$44 + \text{XO}$`,
          t`Turner's syndrome.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q4" },
      stem: t`The chromosome formula $44 + \text{XXY}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "klinefelter" } },
      options: [
        { key: "A", text: t`Turner's syndrome`, correct: false, misconceptionId: "C11-M7", value: "turner" },
        { key: "B", text: t`Down's syndrome`, correct: false, misconceptionId: "C11-M8", value: "down" },
        { key: "C", text: t`a super female`, correct: false, misconceptionId: "C11-M9", value: "super_female" },
        { key: "D", text: t`Klinefelter's syndrome`, correct: true, value: "klinefelter" },
      ],
      solution: {
        steps: [
          t`$44 + \text{XXY}$`,
          t`Klinefelter's syndrome.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q2(5)" },
      stem: t`Phenylketonuria (PKU) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pku" } },
      options: [
        { key: "A", text: t`a chromosomal disorder`, correct: false, misconceptionId: "C11-M11", value: "chromosomal" },
        { key: "B", text: t`autosomal dominant`, correct: false, misconceptionId: "C11-M12", value: "autosomal_dominant" },
        { key: "C", text: t`an autosomal recessive disorder`, correct: true, value: "autosomal_recessive" },
        { key: "D", text: t`X-linked`, correct: false, misconceptionId: "C11-M10", value: "x_linked" },
      ],
      solution: {
        steps: [
          t`Two recessive autosomal alleles.`,
          t`Autosomal recessive.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2026 Q. 30" },
      stem: t`Monosomy is the condition`,
      verify: { kind: "value", inputs: {  }, params: { q: "monosomy" } },
      options: [
        { key: "A", text: t`$2n + 1$`, correct: false, misconceptionId: "C11-M13", value: "two_n_plus_one" },
        { key: "B", text: t`$2n - 2$`, correct: false, misconceptionId: "C11-M14", value: "two_n_minus_two" },
        { key: "C", text: t`$3n$`, correct: false, misconceptionId: "C11-M15", value: "three_n" },
        { key: "D", text: t`$2n - 1$`, correct: true, value: "two_n_minus_one" },
      ],
      solution: {
        steps: [
          t`One chromosome missing.`,
          t`$2n - 1$`,
        ],
      },
    },
  ],
};
