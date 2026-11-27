import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Mitochondria and chloroplasts have their own DNA, like tiny bacteria living inside cells. Why?`,
    reveal: t`They probably were bacteria once, engulfed long ago (the endosymbiont theory), and they still carry their own circular DNA.`,
  },
  explanation: {
    intuition: [
      t`**Mitochondria** release energy; **plastids** make and store food.`,
      t`Both have a **double membrane**.`,
      t`Both have their own DNA and 70S ribosomes.`,
    ],
    formal: [
      {
        title: "Mitochondria",
        points: [
          t`The **power house**: aerobic respiration makes **ATP**.`,
          t`Inner folds (**cristae**) carry **oxysomes** (F1–F0 particles, ATP synthase); the matrix holds Krebs cycle enzymes.`,
          t`DNA: **naked, circular, double-stranded**.`,
        ],
      },
      {
        title: "Plastids",
        points: [
          t`**Leucoplasts**: no pigment; store starch (amyloplasts), oils, proteins.`,
          t`**Chromoplasts**: carotene and xanthophyll colour flowers and fruits.`,
          t`**Chloroplasts**: chlorophyll; **photosynthesis**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A potato tuber stores starch but is not green. Which plastid holds the starch?`,
      steps: [
        t`Colourless storage plastids.`,
        t`Starch-storing ones are amyloplasts, a leucoplast.`,
      ],
      answer: t`Leucoplasts (amyloplasts)`,
    },
    visualSpec: t`A mitochondrion cut open showing cristae, beside a chloroplast showing grana.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says naked only.",
      remediation: "It is also circular and double.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says circular only.",
      remediation: "It is also naked and double.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says double only.",
      remediation: "It is also naked and circular.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks peroxisomes.",
      remediation: "Peroxisomes have no DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks the membrane.",
      remediation: "Membranes have no DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks Golgi.",
      remediation: "The Golgi has no DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks ribosomes.",
      remediation: "Ribosomes make protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks thylakoids.",
      remediation: "Those are in chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks lysosomes.",
      remediation: "Lysosomes digest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says green.",
      remediation: "That is chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says coloured.",
      remediation: "That is chromoplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says ATP.",
      remediation: "That is mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says proteins.",
      remediation: "That is ribosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says photosynthesis.",
      remediation: "That is chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says storing food.",
      remediation: "That is plastids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(F)" },
      stem: t`Mitochondrial DNA is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mtdna" } },
      options: [
        { key: "A", text: t`double-stranded only`, correct: false, misconceptionId: "C05-M3", value: "double_only" },
        { key: "B", text: t`naked, circular and double-stranded`, correct: true, value: "all_three_d" },
        { key: "C", text: t`naked only`, correct: false, misconceptionId: "C05-M1", value: "naked_only" },
        { key: "D", text: t`circular only`, correct: false, misconceptionId: "C05-M2", value: "circular_only" },
      ],
      solution: {
        steps: [
          t`Like bacterial DNA.`,
          t`Naked, circular and double-stranded.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(G)" },
      stem: t`Which set of organelles contains DNA?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dna_set" } },
      options: [
        { key: "A", text: t`Mitochondria and peroxisomes`, correct: false, misconceptionId: "C05-M4", value: "mito_perox" },
        { key: "B", text: t`Plasma membrane and ribosomes`, correct: false, misconceptionId: "C05-M5", value: "membrane_ribo" },
        { key: "C", text: t`Chloroplasts and Golgi bodies`, correct: false, misconceptionId: "C05-M6", value: "chloro_golgi" },
        { key: "D", text: t`Mitochondria and chloroplasts`, correct: true, value: "mito_chloro" },
      ],
      solution: {
        steps: [
          t`Double-membrane organelles.`,
          t`Mitochondria and chloroplasts.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q7(iii)" },
      stem: t`In mitochondria, ATP is made by particles on the inner membrane called`,
      verify: { kind: "value", inputs: {  }, params: { q: "atp_site" } },
      options: [
        { key: "A", text: t`oxysomes (F1–F0 particles)`, correct: true, value: "oxysomes_o" },
        { key: "B", text: t`ribosomes`, correct: false, misconceptionId: "C05-M7", value: "ribosomes_o" },
        { key: "C", text: t`thylakoids`, correct: false, misconceptionId: "C05-M8", value: "thylakoids_o" },
        { key: "D", text: t`lysosomes`, correct: false, misconceptionId: "C05-M9", value: "lysosomes_o" },
      ],
      solution: {
        steps: [
          t`ATP synthase heads.`,
          t`Oxysomes.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q3(C)" },
      stem: t`Leucoplasts are plastids that`,
      verify: { kind: "value", inputs: {  }, params: { q: "leuco" } },
      options: [
        { key: "A", text: t`colour petals and fruits`, correct: false, misconceptionId: "C05-M11", value: "coloured_petals" },
        { key: "B", text: t`make ATP`, correct: false, misconceptionId: "C05-M12", value: "make_atp" },
        { key: "C", text: t`have no pigment and store starch, oils or proteins`, correct: true, value: "colourless_storage" },
        { key: "D", text: t`are green and photosynthesise`, correct: false, misconceptionId: "C05-M10", value: "green_photosynthesis" },
      ],
      solution: {
        steps: [
          t`Colourless stores.`,
          t`No pigment; storage.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q3(B)" },
      stem: t`Mitochondria are called the power house of the cell because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "powerhouse" } },
      options: [
        { key: "A", text: t`make ATP by aerobic respiration`, correct: true, value: "aerobic_atp" },
        { key: "B", text: t`make proteins`, correct: false, misconceptionId: "C05-M13", value: "make_proteins" },
        { key: "C", text: t`photosynthesise`, correct: false, misconceptionId: "C05-M14", value: "photosynthesise_p" },
        { key: "D", text: t`store food`, correct: false, misconceptionId: "C05-M15", value: "store_food" },
      ],
      solution: {
        steps: [
          t`Aerobic respiration.`,
          t`They make ATP.`,
        ],
      },
    },
  ],
};
