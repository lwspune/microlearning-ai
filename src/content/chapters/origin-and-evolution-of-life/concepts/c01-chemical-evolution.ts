import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Life today comes only from life. But the first living thing had no parent. Where did it come from?`,
    reveal: t`From non-living chemicals: simple molecules on the early Earth built up into organic molecules and, slowly, into the first cells.`,
  },
  explanation: {
    intuition: [
      t`The early Earth had a reducing atmosphere: $\ce{CH4}$, $\ce{NH3}$, $\ce{H2}$, water vapour.`,
      t`Lightning and UV light supplied energy.`,
      t`**Oparin and Haldane**: life arose by **chemical evolution** in a 'hot dilute soup'.`,
    ],
    formal: [
      {
        title: "The sequence",
        points: [
          t`Inorganic molecules → simple organic molecules → complex ones.`,
          t`These gathered into **coacervates**: colloidal drops of proteins and lipids.`,
          t`Coacervates → the first cell-like **eobionts** → the first cells.`,
        ],
      },
      {
        title: "Urey and Miller",
        points: [
          t`A spark-discharge apparatus with $\ce{CH4}$, $\ce{NH3}$ and $\ce{H2}$ in the ratio 1 : 2 : 2, plus steam.`,
          t`Electric sparks for a week produced simple **amino acids**.`,
          t`It supported chemical evolution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why did Urey and Miller use sparks?`,
      steps: [
        t`The early Earth had lightning.`,
        t`Sparks supply energy for reactions.`,
      ],
      answer: t`To imitate lightning as an energy source`,
    },
    visualSpec: t`Spark-discharge flasks bubbling until amino acids collect in the trap.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks Wallace.",
      remediation: "Wallace co-founded natural selection.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks Darwin.",
      remediation: "Darwin explained evolution, not the first life.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks Pasteur.",
      remediation: "Pasteur disproved spontaneous generation of microbes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Puts organic first.",
      remediation: "Inorganic molecules came first.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Puts the cell first.",
      remediation: "Cells came last.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Puts the eobiont too early.",
      remediation: "Organic molecules came before eobionts.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Gives 2 : 1 : 1.",
      remediation: "The ratio was 1 : 2 : 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Gives equal parts.",
      remediation: "The ratio was 1 : 2 : 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Gives 2 : 2 : 1.",
      remediation: "Methane was 1 part.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks eobionts.",
      remediation: "Eobionts came after coacervates.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks ribosomes.",
      remediation: "Ribosomes are cell parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks viruses.",
      remediation: "Viruses are not colloidal drops.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says living cells.",
      remediation: "Only simple molecules formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says DNA.",
      remediation: "Amino acids formed, not DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says whole proteins.",
      remediation: "Only amino acids formed.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(1)" },
      stem: t`Who proposed that the first life came from non-living organic molecules?`,
      verify: { kind: "value", inputs: {  }, params: { q: "oparin" } },
      options: [
        { key: "A", text: t`Oparin and Haldane`, correct: true, value: "oparin_haldane" },
        { key: "B", text: t`Alfred Wallace`, correct: false, misconceptionId: "C01-M1", value: "wallace" },
        { key: "C", text: t`Charles Darwin`, correct: false, misconceptionId: "C01-M2", value: "darwin" },
        { key: "D", text: t`Louis Pasteur`, correct: false, misconceptionId: "C01-M3", value: "pasteur" },
      ],
      solution: {
        steps: [
          t`They proposed chemical evolution.`,
          t`Oparin and Haldane.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(2)" },
      stem: t`The sequence in the origin of life was`,
      verify: { kind: "value", inputs: {  }, params: { q: "sequence" } },
      options: [
        { key: "A", text: t`inorganic molecules → organic molecules → colloidal aggregates → eobiont → cell`, correct: true, value: "inorganic_first" },
        { key: "B", text: t`organic molecules → inorganic molecules → cell`, correct: false, misconceptionId: "C01-M4", value: "organic_first" },
        { key: "C", text: t`cell → organic molecules → eobiont`, correct: false, misconceptionId: "C01-M5", value: "cell_first" },
        { key: "D", text: t`inorganic molecules → eobiont → organic molecules → cell`, correct: false, misconceptionId: "C01-M6", value: "eobiont_early" },
      ],
      solution: {
        steps: [
          t`Simple to complex, then cells.`,
          t`Inorganic → organic → colloids → eobiont → cell.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 2(i)" },
      stem: t`In Urey and Miller's experiment, methane, ammonia and hydrogen were in the ratio`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`1 : 1 : 1`, correct: false, misconceptionId: "C01-M8", value: "one_one_one" },
        { key: "B", text: t`2 : 2 : 1`, correct: false, misconceptionId: "C01-M9", value: "two_two_one" },
        { key: "C", text: t`1 : 2 : 2`, correct: true, value: "one_two_two" },
        { key: "D", text: t`2 : 1 : 1`, correct: false, misconceptionId: "C01-M7", value: "two_one_one" },
      ],
      solution: {
        steps: [
          t`Methane : ammonia : hydrogen.`,
          t`1 : 2 : 2.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(8)" },
      stem: t`Oparin named the colloidal aggregates of proteins and lipids that grew and split`,
      verify: { kind: "value", inputs: {  }, params: { q: "coacervate" } },
      options: [
        { key: "A", text: t`coacervates`, correct: true, value: "coacervates" },
        { key: "B", text: t`eobionts`, correct: false, misconceptionId: "C01-M10", value: "eobionts" },
        { key: "C", text: t`ribosomes`, correct: false, misconceptionId: "C01-M11", value: "ribosomes" },
        { key: "D", text: t`viruses`, correct: false, misconceptionId: "C01-M12", value: "viruses" },
      ],
      solution: {
        steps: [
          t`Oparin called them coacervates.`,
          t`Coacervates.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q5(4)" },
      stem: t`Urey and Miller's spark-discharge apparatus produced`,
      verify: { kind: "value", inputs: {  }, params: { q: "product" } },
      options: [
        { key: "A", text: t`simple amino acids`, correct: true, value: "amino_acids" },
        { key: "B", text: t`living cells`, correct: false, misconceptionId: "C01-M13", value: "living_cells" },
        { key: "C", text: t`DNA molecules`, correct: false, misconceptionId: "C01-M14", value: "dna_molecules" },
        { key: "D", text: t`whole proteins`, correct: false, misconceptionId: "C01-M15", value: "whole_proteins" },
      ],
      solution: {
        steps: [
          t`The trap collected organic molecules.`,
          t`Simple amino acids.`,
        ],
      },
    },
  ],
};
