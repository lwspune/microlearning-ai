import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The lining of your gut soaks up food, but your skin keeps the world out. Both are epithelia. Why so different?`,
    reveal: t`Each epithelium has a cell shape that suits its job: tall cells absorb, many layers protect.`,
  },
  explanation: {
    intuition: [
      t`**Epithelium** covers surfaces and lines cavities.`,
      t`Its cell shape and layers match its work.`,
      t`Glands are made of epithelial cells that secrete.`,
    ],
    formal: [
      {
        title: "Kinds of epithelium",
        points: [
          t`**Columnar**: tall cells with **microvilli** and **goblet cells**; lines the intestine; secretes and absorbs.`,
          t`**Stratified**: many layers; forms the epidermis of the skin; protects.`,
          t`**Ciliated**: cilia move material one way, as in the frog's buccal cavity.`,
        ],
      },
      {
        title: "Glands",
        points: [
          t`**Exocrine** glands pour their secretion through a duct: salivary, sebaceous, mammary.`,
          t`**Endocrine** glands are ductless; hormones go into the blood: thyroid, pituitary, adrenal.`,
          t`The **pancreas** is both: pancreatic juice by a duct, insulin and glucagon into the blood.`,
        ],
      },
    ],
    worked: {
      prompt: t`Saliva reaches the mouth through a duct. Is the salivary gland exocrine or endocrine?`,
      steps: [
        t`A gland with a duct is exocrine.`,
        t`Endocrine glands have no duct.`,
      ],
      answer: t`Exocrine`,
    },
    visualSpec: t`Three columns of cells: tall columnar cells, stacked stratified layers, and cells topped with cilia.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks stratified.",
      remediation: "Stratified layers protect the skin.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks ciliated.",
      remediation: "Microvilli, not cilia, line the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks squamous.",
      remediation: "Tall cells with microvilli are columnar.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks columnar.",
      remediation: "Columnar lines the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks ciliated.",
      remediation: "Ciliated lines the frog's buccal cavity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks dense irregular.",
      remediation: "That is the dermis below.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks columnar.",
      remediation: "Moving material needs cilia.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks stratified.",
      remediation: "Stratified layers protect, not move.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks squamous.",
      remediation: "Moving material needs cilia.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks sebaceous.",
      remediation: "It is only exocrine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks mammary.",
      remediation: "It is only exocrine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks pituitary.",
      remediation: "It is only endocrine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks thyroid.",
      remediation: "It is endocrine, like the others.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks pituitary.",
      remediation: "It is endocrine, like the others.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks adrenal.",
      remediation: "It is endocrine, like the others.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The inner lining of the intestine, with microvilli and goblet cells, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "intestine" } },
      options: [
        { key: "A", text: t`columnar epithelium`, correct: true, value: "columnar_e" },
        { key: "B", text: t`stratified epithelium`, correct: false, misconceptionId: "C02-M1", value: "stratified_e" },
        { key: "C", text: t`ciliated epithelium`, correct: false, misconceptionId: "C02-M2", value: "ciliated_e" },
        { key: "D", text: t`squamous epithelium`, correct: false, misconceptionId: "C02-M3", value: "squamous_e" },
      ],
      solution: {
        steps: [
          t`Microvilli, goblet cells.`,
          t`Columnar epithelium.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The epidermis of the skin, which protects the body, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "epidermis" } },
      options: [
        { key: "A", text: t`columnar epithelium`, correct: false, misconceptionId: "C02-M4", value: "columnar_e" },
        { key: "B", text: t`ciliated epithelium`, correct: false, misconceptionId: "C02-M5", value: "ciliated_e" },
        { key: "C", text: t`dense irregular connective tissue`, correct: false, misconceptionId: "C02-M6", value: "dense_irregular" },
        { key: "D", text: t`stratified epithelium`, correct: true, value: "stratified_e" },
      ],
      solution: {
        steps: [
          t`Many layers protect.`,
          t`Stratified epithelium.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(A)" },
      stem: t`The buccal cavity of the frog is lined by cells that move material in one direction. They are`,
      verify: { kind: "value", inputs: {  }, params: { q: "buccal" } },
      options: [
        { key: "A", text: t`squamous epithelium`, correct: false, misconceptionId: "C02-M9", value: "squamous_e" },
        { key: "B", text: t`ciliated epithelium`, correct: true, value: "ciliated_e" },
        { key: "C", text: t`columnar epithelium`, correct: false, misconceptionId: "C02-M7", value: "columnar_e" },
        { key: "D", text: t`stratified epithelium`, correct: false, misconceptionId: "C02-M8", value: "stratified_e" },
      ],
      solution: {
        steps: [
          t`Cilia move material.`,
          t`Ciliated epithelium.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q1(B)" },
      stem: t`Which gland is both exocrine and endocrine?`,
      verify: { kind: "value", inputs: {  }, params: { q: "mixed" } },
      options: [
        { key: "A", text: t`Pituitary gland`, correct: false, misconceptionId: "C02-M12", value: "pituitary_g" },
        { key: "B", text: t`Pancreas`, correct: true, value: "pancreas_g" },
        { key: "C", text: t`Sebaceous gland`, correct: false, misconceptionId: "C02-M10", value: "sebaceous_g" },
        { key: "D", text: t`Mammary gland`, correct: false, misconceptionId: "C02-M11", value: "mammary_g" },
      ],
      solution: {
        steps: [
          t`Duct plus hormones.`,
          t`Pancreas.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q1(E)" },
      stem: t`Find the odd one out.`,
      verify: { kind: "value", inputs: {  }, params: { q: "odd" } },
      options: [
        { key: "A", text: t`Adrenal gland`, correct: false, misconceptionId: "C02-M15", value: "adrenal_g" },
        { key: "B", text: t`Salivary gland`, correct: true, value: "salivary_g" },
        { key: "C", text: t`Thyroid gland`, correct: false, misconceptionId: "C02-M13", value: "thyroid_g" },
        { key: "D", text: t`Pituitary gland`, correct: false, misconceptionId: "C02-M14", value: "pituitary_g" },
      ],
      solution: {
        steps: [
          t`Only one has a duct.`,
          t`Salivary gland.`,
        ],
      },
    },
  ],
};
