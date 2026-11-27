import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`In industrial England, black peppered moths came to outnumber white ones. Did the moths turn black on purpose?`,
    reveal: t`No: soot darkened the trees, so birds caught more white moths, and the black ones survived to breed.`,
  },
  explanation: {
    intuition: [
      t`The **modern synthetic theory** joins Darwin with genetics.`,
      t`A population's genes form its **gene pool**.`,
      t`**Genetic variation** is the raw material; **natural selection** sorts it.`,
    ],
    formal: [
      {
        title: "Factors that change the gene pool",
        points: [
          t`**Mutation**: sudden heritable change.`,
          t`**Recombination** in sexual reproduction.`,
          t`**Gene flow**: genes moving in or out with migrants.`,
          t`**Genetic drift**: chance changes, strongest in small populations.`,
        ],
      },
      {
        title: "Natural selection",
        points: [
          t`Better-adapted individuals leave more offspring.`,
          t`Industrial melanism in *Biston betularia* is a classic case.`,
          t`**Stabilizing** favours the middle; **directional** one extreme; **disruptive** both extremes.`,
        ],
      },
    ],
    worked: {
      prompt: t`After clean-air laws, tree trunks lightened again. What happened to the black moths?`,
      steps: [
        t`White moths were hidden again.`,
        t`Birds ate more black ones, so their numbers fell.`,
      ],
      answer: t`They declined`,
    },
    visualSpec: t`A moth population shifting from white to black as tree bark darkens.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks geographical isolation.",
      remediation: "Isolation splits populations; melanism is selection.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks reproductive isolation.",
      remediation: "No new species formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks adaptive radiation.",
      remediation: "One species, one change: selection.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks the genome.",
      remediation: "A genome is one organism's DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks gene frequency.",
      remediation: "That is one allele's share.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks the karyotype.",
      remediation: "A karyotype is the chromosome set.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks natural selection.",
      remediation: "Selection is not by chance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks gene flow.",
      remediation: "Gene flow is migration.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks mutation.",
      remediation: "Mutation makes new alleles.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks stabilizing.",
      remediation: "Stabilizing favours the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks directional.",
      remediation: "Directional favours one extreme.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks artificial.",
      remediation: "Artificial selection is by humans.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks drift.",
      remediation: "Drift is chance change.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks mutation.",
      remediation: "Mutation changes DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks recombination.",
      remediation: "Recombination shuffles alleles.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 1(v)" },
      stem: t`Industrial melanism is one of the best examples of`,
      verify: { kind: "value", inputs: {  }, params: { q: "melanism" } },
      options: [
        { key: "A", text: t`adaptive radiation`, correct: false, misconceptionId: "C05-M3", value: "adaptive_radiation" },
        { key: "B", text: t`natural selection`, correct: true, value: "natural_selection" },
        { key: "C", text: t`geographical isolation`, correct: false, misconceptionId: "C05-M1", value: "geographical_isolation" },
        { key: "D", text: t`reproductive isolation`, correct: false, misconceptionId: "C05-M2", value: "reproductive_isolation" },
      ],
      solution: {
        steps: [
          t`Dark moths survived on sooty trees.`,
          t`Natural selection.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2025 Q. 2(i)" },
      stem: t`The total genetic information in all the genes of a Mendelian population is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "pool" } },
      options: [
        { key: "A", text: t`genome`, correct: false, misconceptionId: "C05-M4", value: "genome" },
        { key: "B", text: t`gene frequency`, correct: false, misconceptionId: "C05-M5", value: "gene_frequency" },
        { key: "C", text: t`karyotype`, correct: false, misconceptionId: "C05-M6", value: "karyotype" },
        { key: "D", text: t`gene pool`, correct: true, value: "gene_pool" },
      ],
      solution: {
        steps: [
          t`All the genes of a population.`,
          t`The gene pool.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(3)" },
      stem: t`A change in allele frequency by chance alone, not by selection, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "drift" } },
      options: [
        { key: "A", text: t`genetic drift`, correct: true, value: "genetic_drift" },
        { key: "B", text: t`natural selection`, correct: false, misconceptionId: "C05-M7", value: "natural_selection" },
        { key: "C", text: t`gene flow`, correct: false, misconceptionId: "C05-M8", value: "gene_flow" },
        { key: "D", text: t`mutation`, correct: false, misconceptionId: "C05-M9", value: "mutation" },
      ],
      solution: {
        steps: [
          t`Change by chance.`,
          t`Genetic drift.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q3(6)" },
      stem: t`Selection that favours both extremes and removes the intermediates is`,
      verify: { kind: "value", inputs: {  }, params: { q: "disruptive" } },
      options: [
        { key: "A", text: t`directional`, correct: false, misconceptionId: "C05-M11", value: "directional" },
        { key: "B", text: t`artificial`, correct: false, misconceptionId: "C05-M12", value: "artificial" },
        { key: "C", text: t`disruptive`, correct: true, value: "disruptive" },
        { key: "D", text: t`stabilizing`, correct: false, misconceptionId: "C05-M10", value: "stabilizing" },
      ],
      solution: {
        steps: [
          t`Both extremes favoured.`,
          t`Disruptive selection.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 7" },
      stem: t`The movement of genes into or out of a population is`,
      verify: { kind: "value", inputs: {  }, params: { q: "flow" } },
      options: [
        { key: "A", text: t`gene flow`, correct: true, value: "gene_flow" },
        { key: "B", text: t`genetic drift`, correct: false, misconceptionId: "C05-M13", value: "genetic_drift" },
        { key: "C", text: t`mutation`, correct: false, misconceptionId: "C05-M14", value: "mutation" },
        { key: "D", text: t`recombination`, correct: false, misconceptionId: "C05-M15", value: "recombination" },
      ],
      solution: {
        steps: [
          t`Genes moving with migrants.`,
          t`Gene flow.`,
        ],
      },
    },
  ],
};
