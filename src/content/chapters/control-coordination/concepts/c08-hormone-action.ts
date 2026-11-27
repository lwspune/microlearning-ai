import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Adrenaline reaches every cell in your body, yet only some respond. How does it pick its targets?`,
    reveal: t`By receptors: only cells that carry the right receptor can respond to a hormone.`,
  },
  explanation: {
    intuition: [
      t`**Hormones** are chemical messengers from ductless glands, carried by blood.`,
      t`They act on **target cells** with receptors.`,
      t`**Pheromones** are released outside the body and affect **behaviour** of others.`,
    ],
    formal: [
      {
        title: "Two modes of action",
        points: [
          t`**Protein hormones** cannot cross the membrane: they bind **surface receptors** and act through cAMP.`,
          t`**Steroid hormones** are lipid soluble: they enter, bind receptors, and the complex binds **DNA**.`,
          t`Thyroxine and adrenaline are made from **tyrosine**.`,
        ],
      },
      {
        title: "Glands",
        points: [
          t`Discrete endocrine glands: pituitary, thyroid, adrenal, thymus.`,
          t`Pancreas and gonads are mixed (exocrine and endocrine).`,
          t`The placenta is a temporary endocrine gland.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why can estrogen act inside the nucleus but insulin cannot?`,
      steps: [
        t`Estrogen is a lipid-soluble steroid.`,
        t`Insulin is a protein and binds at the surface.`,
      ],
      answer: t`Steroids cross the membrane`,
    },
    visualSpec: t`Two cells: one with a surface receptor and cAMP, one with a steroid entering to the nucleus.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks cytoplasm.",
      remediation: "Proteins cannot enter the cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks nucleus.",
      remediation: "Steroids reach the nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks Golgi.",
      remediation: "Receptors face outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks protein hormones.",
      remediation: "They act at the surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks peptide hormones.",
      remediation: "They act at the surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks catecholamines.",
      remediation: "They act at the surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks glycine.",
      remediation: "They come from tyrosine.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks arginine.",
      remediation: "They come from tyrosine.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks ornithine.",
      remediation: "They come from tyrosine.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks skin colour.",
      remediation: "Pheromones act on others' behaviour.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks excretion.",
      remediation: "Pheromones act on behaviour.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks digestion.",
      remediation: "Pheromones act on behaviour.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Includes salivary glands.",
      remediation: "Salivary glands are exocrine.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Includes the liver.",
      remediation: "The liver is not a discrete endocrine gland.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Includes the pancreas.",
      remediation: "The pancreas is mixed.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(5)" },
      stem: t`Receptors for protein hormones are located`,
      verify: { kind: "value", inputs: {  }, params: { q: "receptor" } },
      options: [
        { key: "A", text: t`on the cell surface`, correct: true, value: "cell_surface" },
        { key: "B", text: t`in the cytoplasm`, correct: false, misconceptionId: "C08-M1", value: "cytoplasm_r" },
        { key: "C", text: t`in the nucleus`, correct: false, misconceptionId: "C08-M2", value: "nucleus_r" },
        { key: "D", text: t`on the Golgi complex`, correct: false, misconceptionId: "C08-M3", value: "golgi_r" },
      ],
      solution: {
        steps: [
          t`Proteins cannot cross the membrane.`,
          t`On the cell surface.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q2(7)" },
      stem: t`Hormones that bind to DNA and alter gene expression are`,
      verify: { kind: "value", inputs: {  }, params: { q: "dna" } },
      options: [
        { key: "A", text: t`protein hormones`, correct: false, misconceptionId: "C08-M4", value: "protein_h" },
        { key: "B", text: t`peptide hormones`, correct: false, misconceptionId: "C08-M5", value: "peptide_h" },
        { key: "C", text: t`catecholamines`, correct: false, misconceptionId: "C08-M6", value: "catecholamine_h" },
        { key: "D", text: t`steroid hormones`, correct: true, value: "steroid_h" },
      ],
      solution: {
        steps: [
          t`Lipid soluble, enters the nucleus.`,
          t`Steroid hormones.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(7)" },
      stem: t`Thyroxine, adrenaline and noradrenaline are formed from`,
      verify: { kind: "value", inputs: {  }, params: { q: "tyrosine" } },
      options: [
        { key: "A", text: t`glycine`, correct: false, misconceptionId: "C08-M7", value: "glycine_aa" },
        { key: "B", text: t`arginine`, correct: false, misconceptionId: "C08-M8", value: "arginine_aa" },
        { key: "C", text: t`ornithine`, correct: false, misconceptionId: "C08-M9", value: "ornithine_aa" },
        { key: "D", text: t`tyrosine`, correct: true, value: "tyrosine_aa" },
      ],
      solution: {
        steps: [
          t`The amino acid precursor.`,
          t`Tyrosine.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(8)" },
      stem: t`The odour of pheromones affects`,
      verify: { kind: "value", inputs: {  }, params: { q: "pheromone" } },
      options: [
        { key: "A", text: t`excretion`, correct: false, misconceptionId: "C08-M11", value: "excretion_e" },
        { key: "B", text: t`digestion`, correct: false, misconceptionId: "C08-M12", value: "digestion_e" },
        { key: "C", text: t`behaviour`, correct: true, value: "behaviour_e" },
        { key: "D", text: t`skin colour`, correct: false, misconceptionId: "C08-M10", value: "skin_colour_e" },
      ],
      solution: {
        steps: [
          t`Released outside the body.`,
          t`Behaviour.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(9)" },
      stem: t`Which is a set of discrete endocrine glands?`,
      verify: { kind: "value", inputs: {  }, params: { q: "discrete" } },
      options: [
        { key: "A", text: t`Pituitary, pancreas, adrenal, thymus`, correct: false, misconceptionId: "C08-M15", value: "set_d" },
        { key: "B", text: t`Pituitary, thyroid, adrenal, thymus`, correct: true, value: "set_c" },
        { key: "C", text: t`Salivary, thyroid, adrenal, ovary`, correct: false, misconceptionId: "C08-M13", value: "set_a" },
        { key: "D", text: t`Adrenal, testis, ovary, liver`, correct: false, misconceptionId: "C08-M14", value: "set_b" },
      ],
      solution: {
        steps: [
          t`All four purely endocrine.`,
          t`Pituitary, thyroid, adrenal, thymus.`,
        ],
      },
    },
  ],
};
