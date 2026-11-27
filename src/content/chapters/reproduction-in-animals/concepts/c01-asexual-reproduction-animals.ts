import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A *Hydra* cut into pieces can regrow into several whole animals, and it also sprouts small *Hydra* from its side. Do these need a mate?`,
    reveal: t`No: both are asexual. The new animals come from one parent by mitosis, so they are its clones.`,
  },
  explanation: {
    intuition: [
      t`**Asexual reproduction** needs one parent and no gametes.`,
      t`Only mitosis is involved, so the offspring are genetically identical.`,
      t`It is common in simple animals: protozoa, sponges, cnidarians.`,
    ],
    formal: [
      {
        title: "Methods",
        points: [
          t`**Binary fission**: the parent splits into two, as in *Amoeba*.`,
          t`**Budding**: an outgrowth grows into a new animal, as in *Hydra*.`,
          t`**Gemmules**: internal buds of dormant **archaeocytes**, only in sponges.`,
          t`**Regeneration**: a lost part, or a whole body, regrows from a piece.`,
        ],
      },
      {
        title: "Versus sexual reproduction",
        points: [
          t`Sexual reproduction needs meiosis and the fusion of gametes.`,
          t`So sexual offspring vary; asexual ones do not.`,
        ],
      },
    ],
    worked: {
      prompt: t`A planarian is cut into three pieces and each grows into a whole worm. What kind of reproduction is this?`,
      steps: [
        t`One parent, no gametes.`,
        t`Pieces regrow into whole animals: regeneration, an asexual method.`,
      ],
      answer: t`Asexual: regeneration`,
    },
    visualSpec: t`A *Hydra* bud growing tentacles and pinching off.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks binary fission.",
      remediation: "Binary fission splits the whole body; *Hydra* grows buds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks gemmules.",
      remediation: "Gemmules are only in sponges.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks fragmentation.",
      remediation: "*Hydra*'s outgrowths are buds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks buds.",
      remediation: "Sponge buds that survive harsh times inside are gemmules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks binary fission.",
      remediation: "Sponges form gemmules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks spores.",
      remediation: "Animals don't form spores; sponges form gemmules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks budding.",
      remediation: "*Amoeba* splits into two: binary fission.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks gemmules.",
      remediation: "Gemmules are a sponge structure.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks multiple fission.",
      remediation: "Multiple fission gives many cells; *Amoeba* usually splits into two.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks choanocytes.",
      remediation: "Choanocytes are collar cells; gemmules hold archaeocytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks pinacocytes.",
      remediation: "Pinacocytes form the outer layer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks spicules.",
      remediation: "Spicules are the skeleton; the living cells are archaeocytes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks it uses meiosis.",
      remediation: "Asexual reproduction uses mitosis only.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks gametes fuse.",
      remediation: "Gamete fusion is sexual reproduction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks mitotic offspring vary.",
      remediation: "Mitosis copies the parent's genes exactly.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(1)" },
      stem: t`*Hydra* reproduces asexually in favourable conditions by`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydra" } },
      options: [
        { key: "A", text: t`budding`, correct: true, value: "budding" },
        { key: "B", text: t`binary fission`, correct: false, misconceptionId: "C01-M1", value: "binary_fission" },
        { key: "C", text: t`gemmule formation`, correct: false, misconceptionId: "C01-M2", value: "gemmules" },
        { key: "D", text: t`fragmentation`, correct: false, misconceptionId: "C01-M3", value: "fragmentation" },
      ],
      solution: {
        steps: [
          t`*Hydra* grows an outgrowth that becomes a new animal.`,
          t`Budding.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(2)" },
      stem: t`Sponges survive unfavourable conditions as internal buds called`,
      verify: { kind: "value", inputs: {  }, params: { q: "sponge" } },
      options: [
        { key: "A", text: t`gemmules`, correct: true, value: "gemmules" },
        { key: "B", text: t`buds`, correct: false, misconceptionId: "C01-M4", value: "budding" },
        { key: "C", text: t`fission products`, correct: false, misconceptionId: "C01-M5", value: "binary_fission" },
        { key: "D", text: t`spores`, correct: false, misconceptionId: "C01-M6", value: "spores" },
      ],
      solution: {
        steps: [
          t`Sponges form internal buds that survive harsh times.`,
          t`Gemmules.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`*Amoeba* divides into two daughter cells by`,
      verify: { kind: "value", inputs: {  }, params: { q: "amoeba" } },
      options: [
        { key: "A", text: t`gemmule formation`, correct: false, misconceptionId: "C01-M8", value: "gemmules" },
        { key: "B", text: t`multiple fission`, correct: false, misconceptionId: "C01-M9", value: "multiple_fission" },
        { key: "C", text: t`binary fission`, correct: true, value: "binary_fission" },
        { key: "D", text: t`budding`, correct: false, misconceptionId: "C01-M7", value: "budding" },
      ],
      solution: {
        steps: [
          t`*Amoeba* splits into two equal daughters.`,
          t`Binary fission.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-animals-12-bio/Ex Q4(2)" },
      stem: t`A gemmule is a mass of dormant cells called`,
      verify: { kind: "value", inputs: {  }, params: { q: "cells" } },
      options: [
        { key: "A", text: t`archaeocytes`, correct: true, value: "archaeocytes" },
        { key: "B", text: t`choanocytes`, correct: false, misconceptionId: "C01-M10", value: "choanocytes" },
        { key: "C", text: t`pinacocytes`, correct: false, misconceptionId: "C01-M11", value: "pinacocytes" },
        { key: "D", text: t`spicules`, correct: false, misconceptionId: "C01-M12", value: "spicules" },
      ],
      solution: {
        steps: [
          t`A gemmule is a mass of dormant cells.`,
          t`They are archaeocytes.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Animals/2024 Q. 4" },
      stem: t`Compared with sexual reproduction, asexual reproduction involves`,
      verify: { kind: "value", inputs: {  }, params: { q: "genetics" } },
      options: [
        { key: "A", text: t`only mitosis, so the offspring are identical to the parent`, correct: true, value: "mitosis_identical" },
        { key: "B", text: t`meiosis, so the offspring vary`, correct: false, misconceptionId: "C01-M13", value: "meiosis_varied" },
        { key: "C", text: t`the fusion of gametes`, correct: false, misconceptionId: "C01-M14", value: "gametes_fuse" },
        { key: "D", text: t`only mitosis, yet the offspring vary`, correct: false, misconceptionId: "C01-M15", value: "mitosis_varied" },
      ],
      solution: {
        steps: [
          t`Asexual reproduction uses only mitosis.`,
          t`The offspring are identical to the parent.`,
        ],
      },
    },
  ],
};
