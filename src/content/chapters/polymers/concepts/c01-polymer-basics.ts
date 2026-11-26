import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A plastic bag, a silk scarf and a car tyre seem to have nothing in common. Under a powerful microscope, though, all three look alike. What would you see?`,
    reveal: t`Very long chains, each made of thousands of small repeating units joined end to end. All three are polymers.`,
  },
  explanation: {
    intuition: [
      t`A **polymer** is a giant molecule built from many small **monomer** units.`,
      t`The **degree of polymerization** tells how many repeat units a chain has.`,
      t`Polymers come from nature, from modified natural polymers, or from the laboratory.`,
      t`Their chains may be straight, branched, or joined into a network.`,
    ],
    formal: [
      {
        title: "Degree of polymerization",
        points: [
          t`DP = molar mass of polymer ÷ molar mass of repeat unit.`,
          t`Polythene of 28 000 g/mol has DP = 28 000 ÷ 28 = 1000.`,
        ],
      },
      {
        title: "Classes",
        points: [
          t`By source: natural (protein, cellulose, rubber), semisynthetic (rayon), synthetic (polythene, nylon).`,
          t`By structure: linear (HDP, PVC), branched (LDP), cross-linked (Bakelite).`,
          t`By monomers: **homopolymer**, one kind (PVC, Teflon); **copolymer**, two or more kinds (Buna-S, nylon 6,6, PHBV).`,
        ],
      },
    ],
    worked: {
      prompt: t`A PVC sample has a molar mass of 62 500 g/mol. Its repeat unit, $\ce{CH2CHCl}$, is 62.5 g/mol. Find the DP.`,
      steps: [
        t`DP = 62 500 ÷ 62.5.`,
        t`= 1000.`,
      ],
      answer: t`1000`,
    },
    visualSpec: t`Line up monomer beads into chains, then branch them or tie them together into a network.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks a polymer is natural when its monomer occurs in nature.",
      remediation: "Natural polymers are made by living things; polythene is made in factories.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Counts semisynthetic polymers as natural.",
      remediation: "Rayon is chemically modified cellulose: semisynthetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls any household polymer natural.",
      remediation: "Teflon, PVC and polythene are synthetic, however common.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Takes a side group for a second monomer.",
      remediation: "Orlon is made from one monomer, acrylonitrile: a homopolymer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks PVC has two monomers, vinyl and chloride.",
      remediation: "Vinyl chloride is one monomer, so PVC is a homopolymer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks two kinds of atom in the monomer make a copolymer.",
      remediation: "A copolymer needs two kinds of monomer; Teflon has one.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Multiplies the masses.",
      remediation: "DP is a ratio: polymer mass ÷ repeat-unit mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: t`Uses the mass of $\ce{CH2}$ as the repeat unit.`,
      remediation: t`Polythene's repeat unit is $\ce{-CH2-CH2-}$, 28 g/mol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Divides the repeat unit by the polymer.",
      remediation: "DP is the number of units: polymer mass ÷ unit mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks Bakelite is linear.",
      remediation: "Bakelite's chains are joined by cross-links into a network.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Takes cross-links for branches.",
      remediation: "Branches hang off one chain; cross-links join different chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks Bakelite is one giant ring.",
      remediation: "Bakelite is a three-dimensional network of cross-linked chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Confuses homopolymers with copolymers.",
      remediation: "Homo- means one kind of monomer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks homo- means natural.",
      remediation: "Homo- means same: one kind of monomer, natural or synthetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks homo- means no side groups.",
      remediation: "Homopolymers can carry side groups, as PVC does.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (ii)" },
      stem: t`Which of these is a naturally occurring polymer?`,
      verify: { kind: "value", inputs: {  }, params: { q: "natural" } },
      options: [
        { key: "A", text: t`Teflon`, correct: false, misconceptionId: "C01-M3", value: "teflon" },
        { key: "B", text: t`polythene`, correct: false, misconceptionId: "C01-M1", value: "polythene" },
        { key: "C", text: t`rayon`, correct: false, misconceptionId: "C01-M2", value: "rayon" },
        { key: "D", text: t`protein`, correct: true, value: "protein" },
      ],
      solution: {
        steps: [
          t`Proteins are made by living things.`,
          t`Polythene and Teflon are synthetic; rayon is semisynthetic.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#18" },
      stem: t`Identify the copolymer.`,
      verify: { kind: "value", inputs: {  }, params: { q: "copolymer" } },
      options: [
        { key: "A", text: t`PHBV`, correct: true, value: "phbv" },
        { key: "B", text: t`Orlon`, correct: false, misconceptionId: "C01-M4", value: "orlon" },
        { key: "C", text: t`PVC`, correct: false, misconceptionId: "C01-M5", value: "pvc" },
        { key: "D", text: t`Teflon`, correct: false, misconceptionId: "C01-M6", value: "teflon" },
      ],
      solution: {
        steps: [
          t`PHBV is made from two monomers.`,
          t`So it is a copolymer.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A sample of polythene, built of $\ce{-CH2-CH2-}$ repeat units, has a molar mass of 28 000 g/mol. What is its degree of polymerization? (C = 12, H = 1)`,
      verify: { kind: "value", inputs: {  }, params: { q: "dp" } },
      options: [
        { key: "A", text: t`2000`, correct: false, misconceptionId: "C01-M8", value: "dp_2000" },
        { key: "B", text: t`1000`, correct: true, value: "dp_1000" },
        { key: "C", text: t`0.001`, correct: false, misconceptionId: "C01-M9", value: "dp_0_001" },
        { key: "D", text: t`784 000`, correct: false, misconceptionId: "C01-M7", value: "dp_784000" },
      ],
      solution: {
        steps: [
          t`Repeat unit $\ce{C2H4}$ = 28 g/mol.`,
          t`DP = 28 000 ÷ 28 = 1000.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.4 (vii)" },
      stem: t`By structure, Bakelite is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bakelite" } },
      options: [
        { key: "A", text: t`a branched-chain polymer`, correct: false, misconceptionId: "C01-M11", value: "branched" },
        { key: "B", text: t`a linear polymer`, correct: false, misconceptionId: "C01-M10", value: "linear" },
        { key: "C", text: t`a cross-linked (network) polymer`, correct: true, value: "cross_linked" },
        { key: "D", text: t`a single giant ring`, correct: false, misconceptionId: "C01-M12", value: "one_ring" },
      ],
      solution: {
        steps: [
          t`Bakelite's chains are joined by cross-links.`,
          t`It is a network polymer.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#4" },
      stem: t`A homopolymer is made from`,
      verify: { kind: "value", inputs: {  }, params: { q: "homo" } },
      options: [
        { key: "A", text: t`monomers with no side groups`, correct: false, misconceptionId: "C01-M15", value: "no_side_groups" },
        { key: "B", text: t`two or more kinds of monomer`, correct: false, misconceptionId: "C01-M13", value: "two_monomers" },
        { key: "C", text: t`natural monomers only`, correct: false, misconceptionId: "C01-M14", value: "natural_monomers" },
        { key: "D", text: t`one kind of monomer`, correct: true, value: "one_monomer" },
      ],
      solution: {
        steps: [
          t`Homo- means same.`,
          t`A homopolymer has one kind of monomer.`,
        ],
      },
    },
  ],
};
