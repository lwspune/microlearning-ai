import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Human blood groups come in four types, A, B, AB and O, yet each of us carries only two alleles. How?`,
    reveal: t`The ABO gene has three alleles in the population, $I^A$, $I^B$ and $i$; any two together give one of six genotypes.`,
  },
  explanation: {
    intuition: [
      t`**Multiple alleles**: a gene with more than two alleles in a population.`,
      t`Each person still carries only two.`,
      t`**Pleiotropy**: one gene with several unrelated effects.`,
    ],
    formal: [
      {
        title: "ABO blood groups",
        points: [
          t`Alleles $I^A$ and $I^B$ are codominant; both dominate $i$.`,
          t`Six genotypes: $I^AI^A$, $I^Ai$, $I^BI^B$, $I^Bi$, $I^AI^B$, $ii$.`,
          t`Four phenotypes: A, B, AB and O.`,
          t`Group O is $ii$.`,
        ],
      },
      {
        title: "Pleiotropy",
        points: [
          t`Sickle-cell anaemia: one gene alters haemoglobin, red cells and health.`,
          t`$\mathrm{Hb^S}\,\mathrm{Hb^S}$ is lethal, so carriers' children come 1 : 2.`,
        ],
      },
    ],
    worked: {
      prompt: t`Can parents of groups AB and O have a child of group O?`,
      steps: [
        t`$I^AI^B \times ii$ gives $I^Ai$ or $I^Bi$.`,
        t`So the children are A or B, never O.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`A grid of the six ABO genotypes collapsing into four blood groups.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Counts phenotypes.",
      remediation: "Four phenotypes, but six genotypes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Counts alleles.",
      remediation: "Three alleles combine into six genotypes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Squares the alleles.",
      remediation: "Order doesn't matter: six, not nine.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Gives AB.",
      remediation: t`$I^AI^B$ is group AB.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Gives a hidden A.",
      remediation: t`$I^Ai$ is group A.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Gives a hidden B.",
      remediation: t`$I^Bi$ is group B.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks polygenic.",
      remediation: "Polygenic is many genes, one trait.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks multiple alleles.",
      remediation: "Multiple alleles is about number of alleles.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks epistasis.",
      remediation: "Epistasis is gene masking gene.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks incomplete dominance.",
      remediation: "Incomplete dominance gives 1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks codominance.",
      remediation: "Codominance gives 1 : 2 : 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks multiple alleles.",
      remediation: "Multiple alleles don't drop a class.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says AB only.",
      remediation: t`$I^A$ or $i$ with $I^B$ or $i$ gives four types.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says A or B only.",
      remediation: t`$I^AI^B$ and $ii$ are possible too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says O only.",
      remediation: t`Each child may get $I^A$ or $I^B$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "authored" },
      stem: t`With the three alleles $I^A$, $I^B$ and $i$, how many genotypes are possible for the ABO blood groups?`,
      verify: { kind: "value", inputs: {  }, params: { q: "genotypes" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C06-M1", value: "4" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C06-M2", value: "3" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C06-M3", value: "9" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Three alleles in pairs.`,
          t`Six genotypes.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`A person of blood group O has the genotype`,
      verify: { kind: "value", inputs: {  }, params: { q: "o" } },
      options: [
        { key: "A", text: t`$ii$`, correct: true, value: "ii" },
        { key: "B", text: t`$I^AI^B$`, correct: false, misconceptionId: "C06-M4", value: "ia_ib" },
        { key: "C", text: t`$I^Ai$`, correct: false, misconceptionId: "C06-M5", value: "ia_i" },
        { key: "D", text: t`$I^Bi$`, correct: false, misconceptionId: "C06-M6", value: "ib_i" },
      ],
      solution: {
        steps: [
          t`Group O carries no A or B allele.`,
          t`$ii$`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(3)" },
      stem: t`A single gene that affects several unrelated traits shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "pleiotropy" } },
      options: [
        { key: "A", text: t`pleiotropy`, correct: true, value: "pleiotropy" },
        { key: "B", text: t`polygenic inheritance`, correct: false, misconceptionId: "C06-M7", value: "polygenic" },
        { key: "C", text: t`multiple alleles`, correct: false, misconceptionId: "C06-M8", value: "multiple_alleles" },
        { key: "D", text: t`epistasis`, correct: false, misconceptionId: "C06-M9", value: "epistasis" },
      ],
      solution: {
        steps: [
          t`One gene, many unrelated effects.`,
          t`Pleiotropy.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2025 Q. 1(v)" },
      stem: t`The type of gene interaction that changes Mendel's 3 : 1 to 1 : 2 is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`multiple alleles`, correct: false, misconceptionId: "C06-M12", value: "multiple_alleles" },
        { key: "B", text: t`pleiotropy`, correct: true, value: "pleiotropy" },
        { key: "C", text: t`incomplete dominance`, correct: false, misconceptionId: "C06-M10", value: "incomplete_dominance" },
        { key: "D", text: t`codominance`, correct: false, misconceptionId: "C06-M11", value: "codominance" },
      ],
      solution: {
        steps: [
          t`The lethal homozygote drops out.`,
          t`Pleiotropy: 1 : 2.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`Parents of blood groups A ($I^Ai$) and B ($I^Bi$) can have children of blood group`,
      verify: { kind: "value", inputs: {  }, params: { q: "children" } },
      options: [
        { key: "A", text: t`A, B, AB or O`, correct: true, value: "all_four" },
        { key: "B", text: t`AB only`, correct: false, misconceptionId: "C06-M13", value: "only_ab" },
        { key: "C", text: t`A or B only`, correct: false, misconceptionId: "C06-M14", value: "only_a_b" },
        { key: "D", text: t`O only`, correct: false, misconceptionId: "C06-M15", value: "only_o" },
      ],
      solution: {
        steps: [
          t`$I^Ai \times I^Bi$ gives $I^AI^B$, $I^Ai$, $I^Bi$, $ii$.`,
          t`Groups AB, A, B and O.`,
        ],
      },
    },
  ],
};
