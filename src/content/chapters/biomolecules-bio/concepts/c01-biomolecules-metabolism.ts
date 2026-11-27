import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Your body is made of the same few elements as rocks: carbon, hydrogen, oxygen, nitrogen. What makes it alive?`,
    reveal: t`How those atoms are arranged: into huge biomolecules, constantly broken down and rebuilt by the cell's reactions.`,
  },
  explanation: {
    intuition: [
      t`**Biomolecules** are the molecules of living protoplasm.`,
      t`Small subunits (**monomers**) join into **macromolecules**.`,
      t`**Metabolism** is the sum of all the cell's chemical reactions.`,
    ],
    formal: [
      {
        title: "Building blocks",
        points: [
          t`Monosaccharides → polysaccharides.`,
          t`Amino acids → polypeptides (proteins).`,
          t`Nucleotides → polynucleotides (nucleic acids).`,
        ],
      },
      {
        title: "Metabolism",
        points: [
          t`**Catabolism** breaks down; **anabolism** builds up.`,
          t`The **metabolic pool**: a reservoir of biomolecules enzymes draw on.`,
          t`**Secondary metabolites** are not essential to the organism but useful to people: medicines, and anti-fertility pills from yam.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is the Krebs cycle catabolic or anabolic?`,
      steps: [
        t`It breaks down molecules to release energy.`,
        t`It also supplies building materials to the pool.`,
      ],
      answer: t`Catabolic, feeding the metabolic pool`,
    },
    visualSpec: t`Three columns of monomers joining into chains: sugars, amino acids and nucleotides.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks bioelements.",
      remediation: "Elements are atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks micromolecules.",
      remediation: "Monomers are micromolecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks each of these.",
      remediation: "Only macromolecules fit.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks catabolism.",
      remediation: "That is breakdown only.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks anabolism.",
      remediation: "That is synthesis only.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks digestion.",
      remediation: "That is one process.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says waste.",
      remediation: "It holds useful molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says DNA.",
      remediation: "DNA is in the nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says water.",
      remediation: "It holds biomolecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says essential.",
      remediation: "Those are primary metabolites.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says waste only.",
      remediation: "They are useful.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says harmful only.",
      remediation: "Many are medicines.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says antibiotics.",
      remediation: "Those come from microbes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says insulin.",
      remediation: "Insulin is a hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says vitamins.",
      remediation: "Yam gives steroid drugs.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(A)" },
      stem: t`Sugars, amino acids and nucleotides join their own kind to form`,
      verify: { kind: "value", inputs: {  }, params: { q: "macro" } },
      options: [
        { key: "A", text: t`macromolecules`, correct: true, value: "macromolecules_m" },
        { key: "B", text: t`bioelements`, correct: false, misconceptionId: "C01-M1", value: "bioelements_m" },
        { key: "C", text: t`micromolecules`, correct: false, misconceptionId: "C01-M2", value: "micromolecules_m" },
        { key: "D", text: t`each of these`, correct: false, misconceptionId: "C01-M3", value: "each_of_these" },
      ],
      solution: {
        steps: [
          t`Polymers of monomers.`,
          t`Macromolecules.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q7(i)" },
      stem: t`The term for all the chemical reactions in an organism is`,
      verify: { kind: "value", inputs: {  }, params: { q: "metabolism" } },
      options: [
        { key: "A", text: t`metabolism`, correct: true, value: "metabolism_t" },
        { key: "B", text: t`catabolism`, correct: false, misconceptionId: "C01-M4", value: "catabolism_t" },
        { key: "C", text: t`anabolism`, correct: false, misconceptionId: "C01-M5", value: "anabolism_t" },
        { key: "D", text: t`digestion`, correct: false, misconceptionId: "C01-M6", value: "digestion_t" },
      ],
      solution: {
        steps: [
          t`All reactions.`,
          t`Metabolism.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(K)" },
      stem: t`The metabolic pool is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pool" } },
      options: [
        { key: "A", text: t`a store of DNA`, correct: false, misconceptionId: "C01-M8", value: "dna_store" },
        { key: "B", text: t`a store of water`, correct: false, misconceptionId: "C01-M9", value: "water_store" },
        { key: "C", text: t`the cell's reservoir of biomolecules that enzymes draw on`, correct: true, value: "reservoir_p" },
        { key: "D", text: t`a store of waste`, correct: false, misconceptionId: "C01-M7", value: "waste_store" },
      ],
      solution: {
        steps: [
          t`Shared reservoir.`,
          t`A reservoir of biomolecules.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(L)" },
      stem: t`Secondary metabolites are`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`not essential to the organism's growth, but useful to people`, correct: true, value: "not_essential_useful" },
        { key: "B", text: t`essential for the organism's growth`, correct: false, misconceptionId: "C01-M10", value: "essential_growth" },
        { key: "C", text: t`only waste products`, correct: false, misconceptionId: "C01-M11", value: "waste_only" },
        { key: "D", text: t`only harmful to people`, correct: false, misconceptionId: "C01-M12", value: "harmful_only" },
      ],
      solution: {
        steps: [
          t`Useful, not essential.`,
          t`Not essential, but useful to people.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q4(C)" },
      stem: t`The yam plant gives a secondary metabolite used to make`,
      verify: { kind: "value", inputs: {  }, params: { q: "yam" } },
      options: [
        { key: "A", text: t`anti-fertility pills`, correct: true, value: "antifertility_pills" },
        { key: "B", text: t`antibiotics`, correct: false, misconceptionId: "C01-M13", value: "antibiotics_y" },
        { key: "C", text: t`insulin`, correct: false, misconceptionId: "C01-M14", value: "insulin_y" },
        { key: "D", text: t`vitamins`, correct: false, misconceptionId: "C01-M15", value: "vitamins_y" },
      ],
      solution: {
        steps: [
          t`Steroid drugs.`,
          t`Anti-fertility pills.`,
        ],
      },
    },
  ],
};
