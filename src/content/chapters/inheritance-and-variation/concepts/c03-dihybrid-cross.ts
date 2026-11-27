import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Crossing round-yellow with wrinkled-green peas gave some round-green and wrinkled-yellow plants in the F₂. Where did the new mixes come from?`,
    reveal: t`Seed shape and seed colour are inherited independently, so their alleles recombine in new ways.`,
  },
  explanation: {
    intuition: [
      t`A **dihybrid cross** follows two traits at once.`,
      t`$RRYY \times rryy$ gives F₁ $RrYy$: round, yellow.`,
      t`The F₁ forms four kinds of gamete: $RY$, $Ry$, $rY$, $ry$.`,
      t`Their 16 combinations give the F₂.`,
    ],
    formal: [
      {
        title: "The F₂",
        points: [
          t`Phenotypes $9 : 3 : 3 : 1$.`,
          t`Round yellow 9, round green 3, wrinkled yellow 3, wrinkled green 1.`,
          t`Genotypes: $3 \times 3 = 9$ kinds.`,
        ],
      },
      {
        title: "Independent assortment",
        points: [
          t`The alleles of one pair separate independently of the other pair.`,
          t`It holds for genes on different chromosomes.`,
          t`Linked genes break this law.`,
        ],
      },
    ],
    worked: {
      prompt: t`Of 640 F₂ plants from $RrYy$ selfed, about how many are wrinkled and green?`,
      steps: [
        t`Wrinkled green is $\frac{1}{16}$.`,
        t`$\frac{1}{16} \times 640 = 40$`,
      ],
      answer: t`About 40`,
    },
    visualSpec: t`A 4 × 4 Punnett square whose 16 boxes sort into the four phenotypes.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Counts the boxes.",
      remediation: t`16 is the number of combinations; genotypes are $3 \times 3 = 9$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Counts phenotypes.",
      remediation: "There are 4 phenotypes but 9 genotypes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Counts one gene's genotypes.",
      remediation: "Each gene gives 3; two give 9.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Takes round yellow.",
      remediation: t`Round yellow is $\frac{9}{16}$; round green is $\frac{3}{16}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Takes wrinkled green.",
      remediation: t`Wrinkled green is $\frac{1}{16}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Takes a quarter.",
      remediation: t`Round green is $\frac{3}{16}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives 3 : 1.",
      remediation: "3 : 1 is a monohybrid ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Gives 1 : 2 : 1.",
      remediation: "1 : 2 : 1 is a monohybrid genotypic ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Gives 1 : 1 : 1 : 1.",
      remediation: "1 : 1 : 1 : 1 is the dihybrid test cross.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Counts two.",
      remediation: t`$RrYy$ gives $2 \times 2 = 4$ gametes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Counts 16.",
      remediation: "16 is the combinations of two such plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Counts one.",
      remediation: "A heterozygote forms several gametes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Thinks linked genes assort.",
      remediation: "Genes close on one chromosome stay together.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Applies it to alleles of one gene.",
      remediation: "Independent assortment is between different genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Limits it to sex chromosomes.",
      remediation: "It applies to genes on any different chromosomes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(2)" },
      stem: t`In a dihybrid cross, the F₂ shows four phenotypes. How many genotypes does it show?`,
      verify: { kind: "value", inputs: {  }, params: { q: "genotypes" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M3", value: "3" },
        { key: "C", text: t`$9$`, correct: true, value: "9" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C03-M1", value: "16" },
      ],
      solution: {
        steps: [
          t`Each gene gives 3 genotypes.`,
          t`$3 \times 3 = 9$`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`Selfing $RrYy$ (round yellow) peas gives 1600 plants. About how many are round and green?`,
      verify: { kind: "value", inputs: { n: "1600" }, params: { q: "round_green" } },
      options: [
        { key: "A", text: t`$100$`, correct: false, misconceptionId: "C03-M5", value: "100" },
        { key: "B", text: t`$400$`, correct: false, misconceptionId: "C03-M6", value: "400" },
        { key: "C", text: t`$300$`, correct: true, value: "300" },
        { key: "D", text: t`$900$`, correct: false, misconceptionId: "C03-M4", value: "900" },
      ],
      solution: {
        steps: [
          t`Round green is $\frac{3}{16}$.`,
          t`$\frac{3}{16} \times 1600 = 300$`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(1)" },
      stem: t`The F₂ phenotypic ratio of a dihybrid cross is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`$3 : 1$`, correct: false, misconceptionId: "C03-M7", value: "three_one" },
        { key: "B", text: t`$1 : 2 : 1$`, correct: false, misconceptionId: "C03-M8", value: "one_two_one" },
        { key: "C", text: t`$1 : 1 : 1 : 1$`, correct: false, misconceptionId: "C03-M9", value: "one_one_one_one" },
        { key: "D", text: t`$9 : 3 : 3 : 1$`, correct: true, value: "nine_three_three_one" },
      ],
      solution: {
        steps: [
          t`Four phenotypes in proportion.`,
          t`$9 : 3 : 3 : 1$`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(1)" },
      stem: t`How many kinds of gametes does a plant of genotype $RrYy$ form?`,
      verify: { kind: "value", inputs: {  }, params: { q: "gametes" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C03-M11", value: "16" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M12", value: "1" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M10", value: "2" },
      ],
      solution: {
        steps: [
          t`$R$ or $r$ with $Y$ or $y$.`,
          t`$2 \times 2 = 4$`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(2)" },
      stem: t`The law of independent assortment holds for genes that are`,
      verify: { kind: "value", inputs: {  }, params: { q: "law" } },
      options: [
        { key: "A", text: t`on different chromosomes`, correct: true, value: "different_chromosomes" },
        { key: "B", text: t`close together on the same chromosome`, correct: false, misconceptionId: "C03-M13", value: "same_chromosome" },
        { key: "C", text: t`alleles of one gene`, correct: false, misconceptionId: "C03-M14", value: "same_allele" },
        { key: "D", text: t`on the sex chromosomes only`, correct: false, misconceptionId: "C03-M15", value: "sex_chromosomes" },
      ],
      solution: {
        steps: [
          t`Genes assort independently when unlinked.`,
          t`On different chromosomes.`,
        ],
      },
    },
  ],
};
