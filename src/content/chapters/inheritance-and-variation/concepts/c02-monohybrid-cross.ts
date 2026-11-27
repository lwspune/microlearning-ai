import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Crossing pure tall with pure dwarf peas gave only tall plants. Had the dwarf trait vanished?`,
    reveal: t`No: selfing those tall plants brought dwarfs back in a quarter of the next generation.`,
  },
  explanation: {
    intuition: [
      t`A **monohybrid cross** follows one pair of contrasting traits.`,
      t`$TT \times tt$ gives an F₁ of all $Tt$: all tall.`,
      t`Selfing the F₁ gives the F₂: 3 tall : 1 dwarf.`,
      t`The dwarf trait was hidden, not lost.`,
    ],
    formal: [
      {
        title: "The F₂",
        points: [
          t`Gametes of $Tt$: half $T$, half $t$.`,
          t`Random fusion gives $TT : Tt : tt = 1 : 2 : 1$.`,
          t`Phenotypes: 3 tall : 1 dwarf.`,
          t`So $\frac34$ are tall and $\frac14$ homozygous tall.`,
        ],
      },
      {
        title: "Mendel's laws",
        points: [
          t`**Dominance**: in a heterozygote one allele shows, the other is hidden.`,
          t`**Segregation**: the two alleles separate into different gametes.`,
          t`Each gamete carries one allele, unmixed: the purity of gametes.`,
        ],
      },
    ],
    worked: {
      prompt: t`Selfing $Tt$ peas gives 400 plants. About how many are dwarf?`,
      steps: [
        t`Dwarf ($tt$) is $\frac14$ of the F₂.`,
        t`$\frac14 \times 400 = 100$`,
      ],
      answer: t`About 100`,
    },
    visualSpec: t`A Punnett square filling in, $T$ and $t$ gametes meeting in four boxes.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Uses 1 : 1.",
      remediation: t`Selfing $Tt$ gives 3 : 1, so $\frac34$ are tall.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Gives the dwarfs.",
      remediation: t`Tall is $\frac34$, not $\frac14$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks all are tall.",
      remediation: t`Selfing $Tt$ brings back dwarfs.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Gives 3 : 1.",
      remediation: "3 : 1 is the phenotypic ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Gives 9 : 3 : 3 : 1.",
      remediation: "That is a dihybrid ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives 1 : 1.",
      remediation: "1 : 1 is a test cross ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks alleles blend.",
      remediation: "Alleles stay separate and unmixed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks gametes are diploid.",
      remediation: "Gametes carry one allele: they are haploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks only dominant alleles pass on.",
      remediation: "Each allele goes into half the gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Expects half dwarf.",
      remediation: t`Every F₁ plant is $Tt$, so all are tall.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Expects all dwarf.",
      remediation: "Tall is dominant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Expects intermediate height.",
      remediation: "Tallness is completely dominant in peas.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Gives all the tall.",
      remediation: t`Homozygous tall, $TT$, is only $\frac14$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Gives the heterozygotes.",
      remediation: t`$Tt$ is $\frac12$; $TT$ is $\frac14$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Takes a third.",
      remediation: t`$TT$ is 1 of 4 parts: $\frac14$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`Selfing a heterozygous tall pea ($Tt$) gives 800 plants. About how many are tall?`,
      verify: { kind: "value", inputs: { n: "800" }, params: { q: "tall" } },
      options: [
        { key: "A", text: t`$600$`, correct: true, value: "600" },
        { key: "B", text: t`$400$`, correct: false, misconceptionId: "C02-M1", value: "400" },
        { key: "C", text: t`$200$`, correct: false, misconceptionId: "C02-M2", value: "200" },
        { key: "D", text: t`$800$`, correct: false, misconceptionId: "C02-M3", value: "800" },
      ],
      solution: {
        steps: [
          t`Tall is $\frac34$ of the F₂.`,
          t`$\frac34 \times 800 = 600$`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`The F₂ genotypic ratio of a monohybrid cross is`,
      verify: { kind: "value", inputs: {  }, params: { q: "genotypic" } },
      options: [
        { key: "A", text: t`$3 : 1$`, correct: false, misconceptionId: "C02-M4", value: "three_one" },
        { key: "B", text: t`$9 : 3 : 3 : 1$`, correct: false, misconceptionId: "C02-M5", value: "nine_three" },
        { key: "C", text: t`$1 : 1$`, correct: false, misconceptionId: "C02-M6", value: "one_one" },
        { key: "D", text: t`$1 : 2 : 1$`, correct: true, value: "one_two_one" },
      ],
      solution: {
        steps: [
          t`$TT : Tt : tt$`,
          t`$1 : 2 : 1$`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q3(2)" },
      stem: t`The law of segregation is also called the law of purity of gametes because`,
      verify: { kind: "value", inputs: {  }, params: { q: "purity" } },
      options: [
        { key: "A", text: t`only the dominant allele enters gametes`, correct: false, misconceptionId: "C02-M9", value: "dominant_only" },
        { key: "B", text: t`each gamete receives only one allele of a pair, unmixed`, correct: true, value: "one_allele_each" },
        { key: "C", text: t`the alleles blend in the hybrid`, correct: false, misconceptionId: "C02-M7", value: "alleles_blend" },
        { key: "D", text: t`the gametes are diploid`, correct: false, misconceptionId: "C02-M8", value: "gametes_diploid" },
      ],
      solution: {
        steps: [
          t`Alleles separate into gametes.`,
          t`Each gamete is pure: one allele.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A pure tall pea ($TT$) is crossed with a pure dwarf pea ($tt$). The F₁ plants are`,
      verify: { kind: "value", inputs: {  }, params: { q: "f1" } },
      options: [
        { key: "A", text: t`of intermediate height`, correct: false, misconceptionId: "C02-M12", value: "intermediate" },
        { key: "B", text: t`all tall, $Tt$`, correct: true, value: "all_tall" },
        { key: "C", text: t`half tall and half dwarf`, correct: false, misconceptionId: "C02-M10", value: "half_dwarf" },
        { key: "D", text: t`all dwarf`, correct: false, misconceptionId: "C02-M11", value: "all_dwarf" },
      ],
      solution: {
        steps: [
          t`$TT \times tt$ gives only $Tt$.`,
          t`All tall.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Selfing $Tt$ peas gives 900 plants. About how many are homozygous tall?`,
      verify: { kind: "value", inputs: { n: "900" }, params: { q: "homo_tall" } },
      options: [
        { key: "A", text: t`$300$`, correct: false, misconceptionId: "C02-M15", value: "300" },
        { key: "B", text: t`$225$`, correct: true, value: "225" },
        { key: "C", text: t`$675$`, correct: false, misconceptionId: "C02-M13", value: "675" },
        { key: "D", text: t`$450$`, correct: false, misconceptionId: "C02-M14", value: "450" },
      ],
      solution: {
        steps: [
          t`$TT$ is $\frac14$ of the F₂.`,
          t`$\frac14 \times 900 = 225$`,
        ],
      },
    },
  ],
};
