import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Onion skin cells under a microscope have no green chloroplasts at all. How do we know they are plant cells?`,
    reveal: t`By their rigid cellulose wall and large central vacuole: features animal cells do not have.`,
  },
  explanation: {
    intuition: [
      t`All living things are made of cells.`,
      t`Cells are **prokaryotic** or **eukaryotic**.`,
      t`Eukaryotic cells are plant or animal cells.`,
    ],
    formal: [
      {
        title: "Prokaryotic and eukaryotic",
        points: [
          t`Prokaryotic (bacteria): no **nuclear membrane**, DNA as a nucleoid, **70S** ribosomes, no membrane-bound organelles.`,
          t`Eukaryotic: a true nucleus, membrane-bound organelles, **80S** ribosomes.`,
          t`Both have a cell membrane, DNA and ribosomes.`,
        ],
      },
      {
        title: "Plant and animal",
        points: [
          t`Plant cells: **cellulose wall**, **plastids**, a **large central vacuole**.`,
          t`Animal cells: no wall, small vacuoles, **centrioles**.`,
          t`Higher plant cells usually lack centrioles.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell has a nucleus, mitochondria and a cell wall of cellulose but no chloroplast. Plant or animal?`,
      steps: [
        t`A cellulose wall marks plant cells.`,
        t`Not all plant cells have chloroplasts.`,
      ],
      answer: t`Plant`,
    },
    visualSpec: t`A plant cell and an animal cell side by side, the wall, plastids and vacuole marked in the plant cell.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Says nucleus.",
      remediation: "Animal cells have one too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Says mitochondria.",
      remediation: "Animal cells have them too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Says membrane.",
      remediation: "All cells have one.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says ribosomes.",
      remediation: "Prokaryotes have 70S ribosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says DNA.",
      remediation: "All cells have DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says cell membrane.",
      remediation: "All cells have one.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says 70S.",
      remediation: "That is prokaryotes and organelles.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says 50S.",
      remediation: "That is a subunit.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says 30S.",
      remediation: "That is a subunit.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says mitochondria.",
      remediation: "Plant cells have mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says Golgi.",
      remediation: "Plant cells have Golgi.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says ER.",
      remediation: "Plant cells have ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says mitochondria.",
      remediation: "Both have them.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says ribosomes.",
      remediation: "Both have them.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says nucleus.",
      remediation: "Both have one.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q8" },
      stem: t`Onion bulb cells have no chloroplasts. They are still plant cells because they have`,
      verify: { kind: "value", inputs: {  }, params: { q: "onion" } },
      options: [
        { key: "A", text: t`a cellulose cell wall and a large central vacuole`, correct: true, value: "wall_vacuole" },
        { key: "B", text: t`a nucleus`, correct: false, misconceptionId: "C01-M1", value: "has_nucleus" },
        { key: "C", text: t`mitochondria`, correct: false, misconceptionId: "C01-M2", value: "has_mitochondria" },
        { key: "D", text: t`a cell membrane`, correct: false, misconceptionId: "C01-M3", value: "has_membrane" },
      ],
      solution: {
        steps: [
          t`Wall and vacuole.`,
          t`A cellulose wall and a large vacuole.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`Prokaryotic cells lack`,
      verify: { kind: "value", inputs: {  }, params: { q: "prokaryote" } },
      options: [
        { key: "A", text: t`a nuclear membrane`, correct: true, value: "nuclear_membrane" },
        { key: "B", text: t`ribosomes`, correct: false, misconceptionId: "C01-M4", value: "ribosomes_x" },
        { key: "C", text: t`DNA`, correct: false, misconceptionId: "C01-M5", value: "dna_x" },
        { key: "D", text: t`a cell membrane`, correct: false, misconceptionId: "C01-M6", value: "cell_membrane_x" },
      ],
      solution: {
        steps: [
          t`No membrane around DNA.`,
          t`A nuclear membrane.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Ribosomes in the cytoplasm of eukaryotic cells are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ribosome" } },
      options: [
        { key: "A", text: t`50S`, correct: false, misconceptionId: "C01-M8", value: "r50s" },
        { key: "B", text: t`30S`, correct: false, misconceptionId: "C01-M9", value: "r30s" },
        { key: "C", text: t`80S`, correct: true, value: "r80s" },
        { key: "D", text: t`70S`, correct: false, misconceptionId: "C01-M7", value: "r70s" },
      ],
      solution: {
        steps: [
          t`Eukaryotic cytoplasm.`,
          t`80S.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Which organelle is usually absent from the cells of higher plants?`,
      verify: { kind: "value", inputs: {  }, params: { q: "centrioles" } },
      options: [
        { key: "A", text: t`Centrioles`, correct: true, value: "centrioles_x" },
        { key: "B", text: t`Mitochondria`, correct: false, misconceptionId: "C01-M10", value: "mitochondria_x" },
        { key: "C", text: t`Golgi apparatus`, correct: false, misconceptionId: "C01-M11", value: "golgi_x" },
        { key: "D", text: t`Endoplasmic reticulum`, correct: false, misconceptionId: "C01-M12", value: "er_x" },
      ],
      solution: {
        steps: [
          t`Animal cells have them.`,
          t`Centrioles.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`Which is found in plant cells but not in animal cells?`,
      verify: { kind: "value", inputs: {  }, params: { q: "plant_only" } },
      options: [
        { key: "A", text: t`A cell wall and plastids`, correct: true, value: "wall_plastids" },
        { key: "B", text: t`Mitochondria`, correct: false, misconceptionId: "C01-M13", value: "mitochondria_x" },
        { key: "C", text: t`Ribosomes`, correct: false, misconceptionId: "C01-M14", value: "ribosomes_x" },
        { key: "D", text: t`A nucleus`, correct: false, misconceptionId: "C01-M15", value: "nucleus_x" },
      ],
      solution: {
        steps: [
          t`Plant-only structures.`,
          t`A cell wall and plastids.`,
        ],
      },
    },
  ],
};
