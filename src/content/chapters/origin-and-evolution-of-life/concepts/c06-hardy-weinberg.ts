import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`If 16% of a population show a recessive trait, how common is the hidden recessive allele?`,
    reveal: t`If mating is random, $q^2 = 0.16$, so $q = 0.4$: the allele is far commoner than the trait.`,
  },
  explanation: {
    intuition: [
      t`In an ideal population, allele frequencies stay the same each generation.`,
      t`This is the **Hardy–Weinberg equilibrium**.`,
      t`Let $p$ and $q$ be the frequencies of alleles A and a.`,
    ],
    formal: [
      {
        title: "The equations",
        points: [
          t`$p + q = 1$.`,
          t`$p^2 + 2pq + q^2 = 1$.`,
          t`$p^2$: AA; $2pq$: Aa carriers; $q^2$: aa.`,
        ],
      },
      {
        title: "Conditions",
        points: [
          t`A large population with random mating.`,
          t`No mutation, migration, drift or selection.`,
          t`Any of these changes the frequencies: evolution.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $q = 0.2$, what fraction of the population is AA?`,
      steps: [
        t`$p = 1 - 0.2 = 0.8$.`,
        t`$p^2 = 0.64$.`,
      ],
      answer: t`0.64`,
    },
    visualSpec: t`A bar of the population splitting into $p^2$, $2pq$ and $q^2$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Picks $p^2$.`,
      remediation: t`$p^2$ is the homozygous dominant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Picks $pq$.`,
      remediation: t`$2pq$ is the heterozygotes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Picks $2pq$.`,
      remediation: t`$2pq$ is the heterozygotes, not aa.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Forgets the square root.",
      remediation: t`$q^2 = 0.16$, so $q = \sqrt{0.16} = 0.4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Gives $1 - q^2$.`,
      remediation: "That is everyone not aa.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Halves.",
      remediation: t`Take the square root of $q^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Forgets the 2.",
      remediation: t`Carriers are $2pq$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Gives $q^2$.`,
      remediation: t`$q^2$ is aa.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: t`Gives $p^2$.`,
      remediation: t`$p^2$ is AA.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks mutation.",
      remediation: "Mutation changes frequencies.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks migration.",
      remediation: "Migration changes frequencies.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks non-random mating.",
      remediation: "Random mating keeps them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: t`Gives $q$.`,
      remediation: t`$p = 1 - q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: t`Gives $q^2$.`,
      remediation: t`$p = 1 - q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Gives $p^2$.`,
      remediation: t`$p$, not $p^2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(3)" },
      stem: t`In the Hardy–Weinberg equation, the frequency of homozygous recessive individuals is`,
      verify: { kind: "value", inputs: {  }, params: { q: "q2" } },
      options: [
        { key: "A", text: t`$p^2$`, correct: false, misconceptionId: "C06-M1", value: "p_squared" },
        { key: "B", text: t`$pq$`, correct: false, misconceptionId: "C06-M2", value: "pq" },
        { key: "C", text: t`$2pq$`, correct: false, misconceptionId: "C06-M3", value: "two_pq" },
        { key: "D", text: t`$q^2$`, correct: true, value: "q_squared" },
      ],
      solution: {
        steps: [
          t`The aa genotype.`,
          t`$q^2$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`In a population, 16% of individuals show a recessive trait ($aa$). What is $q$, the frequency of allele $a$?`,
      verify: { kind: "value", inputs: { f: "16/100" }, params: { q: "q" } },
      options: [
        { key: "A", text: t`0.4`, correct: true, value: "2/5" },
        { key: "B", text: t`0.16`, correct: false, misconceptionId: "C06-M4", value: "4/25" },
        { key: "C", text: t`0.84`, correct: false, misconceptionId: "C06-M5", value: "21/25" },
        { key: "D", text: t`0.08`, correct: false, misconceptionId: "C06-M6", value: "2/25" },
      ],
      solution: {
        steps: [
          t`$q^2 = 0.16$`,
          t`$q = 0.4$`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`In a population in equilibrium, $q = 0.3$. What fraction of individuals are heterozygous carriers?`,
      verify: { kind: "value", inputs: { q: "3/10" }, params: { q: "carriers" } },
      options: [
        { key: "A", text: t`0.42`, correct: true, value: "21/50" },
        { key: "B", text: t`0.21`, correct: false, misconceptionId: "C06-M7", value: "21/100" },
        { key: "C", text: t`0.09`, correct: false, misconceptionId: "C06-M8", value: "9/100" },
        { key: "D", text: t`0.49`, correct: false, misconceptionId: "C06-M9", value: "49/100" },
      ],
      solution: {
        steps: [
          t`$p = 0.7$`,
          t`$2pq = 2 \times 0.7 \times 0.3 = 0.42$`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(7)" },
      stem: t`Gene frequencies in a population stay constant with`,
      verify: { kind: "value", inputs: {  }, params: { q: "constant" } },
      options: [
        { key: "A", text: t`non-random mating`, correct: false, misconceptionId: "C06-M12", value: "non_random_mating" },
        { key: "B", text: t`random mating`, correct: true, value: "random_mating" },
        { key: "C", text: t`mutation`, correct: false, misconceptionId: "C06-M10", value: "mutation" },
        { key: "D", text: t`migration`, correct: false, misconceptionId: "C06-M11", value: "migration" },
      ],
      solution: {
        steps: [
          t`Equilibrium needs random mating.`,
          t`Random mating.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`If $q = 0.25$, what is $p$?`,
      verify: { kind: "value", inputs: { q: "1/4" }, params: { q: "p" } },
      options: [
        { key: "A", text: t`0.75`, correct: true, value: "3/4" },
        { key: "B", text: t`0.25`, correct: false, misconceptionId: "C06-M13", value: "1/4" },
        { key: "C", text: t`0.0625`, correct: false, misconceptionId: "C06-M14", value: "1/16" },
        { key: "D", text: t`0.5625`, correct: false, misconceptionId: "C06-M15", value: "9/16" },
      ],
      solution: {
        steps: [
          t`$p + q = 1$`,
          t`$p = 0.75$`,
        ],
      },
    },
  ],
};
