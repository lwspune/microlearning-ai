import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Bacteria live in boiling springs, in ice and inside your gut. What kind of cell manages all that?`,
    reveal: t`The simplest kind: a prokaryotic cell, with no true nucleus and no membrane-bound organelles.`,
  },
  explanation: {
    intuition: [
      t`**Monera** are unicellular **prokaryotes**.`,
      t`They are found in every kind of environment.`,
      t`Most are heterotrophs; a few make their own food.`,
    ],
    formal: [
      {
        title: "Structure",
        points: [
          t`DNA as a circular **nucleoid**, with no nuclear membrane; small **plasmids**.`,
          t`Cell wall of **peptidoglycan**; *Mycoplasma* has **no wall**.`,
          t`**70S** ribosomes; no mitochondria or chloroplasts. Reproduction by binary fission.`,
        ],
      },
      {
        title: "Shapes and roles",
        points: [
          t`**Bacillus** rod, **coccus** sphere, **vibrio** comma, **spirillum** spiral.`,
          t`**Cyanobacteria** photosynthesise; the rest (lactobacilli, methanogens, nitrogen fixers) are heterotrophs.`,
          t`Useful: decomposers, curd, antibiotics; harmful: typhoid, cholera, tetanus.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is *Mycoplasma* not killed by penicillin, which attacks cell walls?`,
      steps: [
        t`Penicillin acts on the wall.`,
        t`*Mycoplasma* has no wall.`,
      ],
      answer: t`It has no cell wall`,
    },
    visualSpec: t`Four bacterial shapes side by side: rod, sphere, comma and spiral.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks nitrogen fixers.",
      remediation: "Many are heterotrophs.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks lactobacilli.",
      remediation: "Lactobacilli are heterotrophs.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks methanogens.",
      remediation: "Methanogens are heterotrophs here.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says spherical.",
      remediation: "That is a coccus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says comma.",
      remediation: "That is a vibrio.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says spiral.",
      remediation: "That is a spirillum.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says rod.",
      remediation: "That is a bacillus.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says comma.",
      remediation: "That is a vibrio.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says spiral.",
      remediation: "That is a spirillum.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says true nucleus.",
      remediation: "Prokaryotes have none.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says mitochondria.",
      remediation: "Bacteria have no mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says no DNA.",
      remediation: "All cells have DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says chitin.",
      remediation: "That is fungi.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says cellulose.",
      remediation: "That is plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says silica.",
      remediation: "That is diatoms.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q1(C)" },
      stem: t`Select the odd one out among heterotrophic bacteria.`,
      verify: { kind: "value", inputs: {  }, params: { q: "odd" } },
      options: [
        { key: "A", text: t`Lactobacilli`, correct: false, misconceptionId: "C03-M2", value: "lactobacilli_b" },
        { key: "B", text: t`Methanogens`, correct: false, misconceptionId: "C03-M3", value: "methanogens_b" },
        { key: "C", text: t`Cyanobacteria`, correct: true, value: "cyanobacteria_b" },
        { key: "D", text: t`Nitrogen-fixing bacteria`, correct: false, misconceptionId: "C03-M1", value: "nitrogen_fixers" },
      ],
      solution: {
        steps: [
          t`They photosynthesise.`,
          t`Cyanobacteria.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(B)" },
      stem: t`A bacillus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bacillus" } },
      options: [
        { key: "A", text: t`comma-shaped`, correct: false, misconceptionId: "C03-M5", value: "comma_shape" },
        { key: "B", text: t`spiral`, correct: false, misconceptionId: "C03-M6", value: "spiral_shape" },
        { key: "C", text: t`rod-shaped`, correct: true, value: "rod_shape" },
        { key: "D", text: t`spherical`, correct: false, misconceptionId: "C03-M4", value: "spherical_shape" },
      ],
      solution: {
        steps: [
          t`Rod.`,
          t`Rod-shaped.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(B)" },
      stem: t`A coccus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "coccus" } },
      options: [
        { key: "A", text: t`rod-shaped`, correct: false, misconceptionId: "C03-M7", value: "rod_shape" },
        { key: "B", text: t`comma-shaped`, correct: false, misconceptionId: "C03-M8", value: "comma_shape" },
        { key: "C", text: t`spiral`, correct: false, misconceptionId: "C03-M9", value: "spiral_shape" },
        { key: "D", text: t`spherical`, correct: true, value: "spherical_shape" },
      ],
      solution: {
        steps: [
          t`Sphere.`,
          t`Spherical.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(A)" },
      stem: t`In bacteria, the DNA lies as`,
      verify: { kind: "value", inputs: {  }, params: { q: "dna" } },
      options: [
        { key: "A", text: t`DNA inside mitochondria`, correct: false, misconceptionId: "C03-M11", value: "in_mitochondria" },
        { key: "B", text: t`nothing: bacteria have no DNA`, correct: false, misconceptionId: "C03-M12", value: "no_dna" },
        { key: "C", text: t`a nucleoid: a circular chromosome with no nuclear membrane`, correct: true, value: "nucleoid_d" },
        { key: "D", text: t`a true nucleus with a membrane`, correct: false, misconceptionId: "C03-M10", value: "true_nucleus" },
      ],
      solution: {
        steps: [
          t`Naked circular DNA.`,
          t`Nucleoid.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(A)" },
      stem: t`*Mycoplasma* resists common antibiotics because it has`,
      verify: { kind: "value", inputs: {  }, params: { q: "mycoplasma" } },
      options: [
        { key: "A", text: t`no cell wall`, correct: true, value: "no_wall" },
        { key: "B", text: t`a chitin wall`, correct: false, misconceptionId: "C03-M13", value: "chitin_wall" },
        { key: "C", text: t`a cellulose wall`, correct: false, misconceptionId: "C03-M14", value: "cellulose_wall" },
        { key: "D", text: t`a silica wall`, correct: false, misconceptionId: "C03-M15", value: "silica_wall" },
      ],
      solution: {
        steps: [
          t`Wall-less.`,
          t`No cell wall.`,
        ],
      },
    },
  ],
};
