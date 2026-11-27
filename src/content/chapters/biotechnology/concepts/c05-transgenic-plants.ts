import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A cotton plant that kills the bollworms eating it, with no spraying. How?`,
    reveal: t`It carries a gene from the bacterium Bt, so its own cells make the insect-killing protein.`,
  },
  explanation: {
    intuition: [
      t`A **transgenic** plant carries a foreign gene.`,
      t`Genes are often carried in by *Agrobacterium*.`,
      t`Aims: pest resistance, nutrition, shelf life, oil quality.`,
    ],
    formal: [
      {
        title: "Examples",
        points: [
          t`**Bt cotton**: insect resistance, fewer pesticides.`,
          t`**Flavr Savr** tomato: polygalacturonase blocked, longer **shelf life**.`,
          t`**Golden rice**: **β-carotene** (vitamin A).`,
        ],
      },
      {
        title: "More examples",
        points: [
          t`Iron-rich rice: **ferritin** gene from soybean.`,
          t`Tomato with **chalcone isomerase**: more flavonoids.`,
          t`***Arabidopsis*** genes improve oil crops; the $\alpha$AI-Pv gene in tobacco resists bean weevils.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does golden rice help children in poor countries?`,
      steps: [
        t`It makes β-carotene.`,
        t`β-carotene becomes vitamin A, preventing blindness.`,
      ],
      answer: t`It supplies vitamin A`,
    },
    visualSpec: t`Four crops, each tagged with its added gene and benefit.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says shelf life.",
      remediation: "That is Flavr Savr.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says vitamin A.",
      remediation: "That is golden rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says iron.",
      remediation: "That is iron-rich rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says disease resistance.",
      remediation: "It slows softening.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says iron.",
      remediation: "That is iron-rich rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says yield.",
      remediation: "It slows softening.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says iron.",
      remediation: "That is iron-rich rice.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says flavonoids.",
      remediation: "That is the chalcone tomato.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says phytase.",
      remediation: "Phytase frees phosphate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks phytoene synthase.",
      remediation: "That makes carotene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks ferritin.",
      remediation: "Ferritin stores iron.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks phytase.",
      remediation: "Phytase frees phosphate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks phytase.",
      remediation: "Phytase frees phosphate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks holandric.",
      remediation: "Holandric genes are on the Y.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks oncogenes.",
      remediation: "Oncogenes cause cancer.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q2(5)" },
      stem: t`Bt cotton was made for`,
      verify: { kind: "value", inputs: {  }, params: { q: "bt_cotton" } },
      options: [
        { key: "A", text: t`more iron`, correct: false, misconceptionId: "C05-M3", value: "iron_rich" },
        { key: "B", text: t`insect resistance`, correct: true, value: "insect_resistance" },
        { key: "C", text: t`longer shelf life`, correct: false, misconceptionId: "C05-M1", value: "shelf_life" },
        { key: "D", text: t`vitamin A`, correct: false, misconceptionId: "C05-M2", value: "vitamin_a_rich" },
      ],
      solution: {
        steps: [
          t`Bt toxin in cotton.`,
          t`Insect resistance.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 1(v)" },
      stem: t`The Flavr Savr tomato was modified to improve its`,
      verify: { kind: "value", inputs: {  }, params: { q: "flavr" } },
      options: [
        { key: "A", text: t`disease resistance`, correct: false, misconceptionId: "C05-M4", value: "disease_resistance" },
        { key: "B", text: t`iron content`, correct: false, misconceptionId: "C05-M5", value: "iron_content" },
        { key: "C", text: t`yield`, correct: false, misconceptionId: "C05-M6", value: "yield_i" },
        { key: "D", text: t`shelf life`, correct: true, value: "shelf_life" },
      ],
      solution: {
        steps: [
          t`Slower softening.`,
          t`Shelf life.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q2(5)" },
      stem: t`Golden rice is rich in`,
      verify: { kind: "value", inputs: {  }, params: { q: "golden" } },
      options: [
        { key: "A", text: t`β-carotene`, correct: true, value: "beta_carotene" },
        { key: "B", text: t`iron (ferritin)`, correct: false, misconceptionId: "C05-M7", value: "ferritin_iron" },
        { key: "C", text: t`flavonoids`, correct: false, misconceptionId: "C05-M8", value: "flavonoids_c" },
        { key: "D", text: t`phytase`, correct: false, misconceptionId: "C05-M9", value: "phytase_c" },
      ],
      solution: {
        steps: [
          t`Yellow rice.`,
          t`β-carotene.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 1(ii)" },
      stem: t`The transgenic tomato rich in flavonoids carries the transgene`,
      verify: { kind: "value", inputs: {  }, params: { q: "tomato" } },
      options: [
        { key: "A", text: t`ferritin`, correct: false, misconceptionId: "C05-M11", value: "ferritin_g" },
        { key: "B", text: t`phytase`, correct: false, misconceptionId: "C05-M12", value: "phytase_g" },
        { key: "C", text: t`chalcone isomerase`, correct: true, value: "chalcone_isomerase" },
        { key: "D", text: t`phytoene synthase`, correct: false, misconceptionId: "C05-M10", value: "phytoene_synthase" },
      ],
      solution: {
        steps: [
          t`Flavonoid tomato.`,
          t`Chalcone isomerase.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2025 Q. 1(x)" },
      stem: t`Oil content and quality of oil crops have been improved by transferring`,
      verify: { kind: "value", inputs: {  }, params: { q: "oil" } },
      options: [
        { key: "A", text: t`*Arabidopsis* genes`, correct: true, value: "arabidopsis_g" },
        { key: "B", text: t`phytase genes`, correct: false, misconceptionId: "C05-M13", value: "phytase_g" },
        { key: "C", text: t`holandric genes`, correct: false, misconceptionId: "C05-M14", value: "holandric_g" },
        { key: "D", text: t`oncogenes`, correct: false, misconceptionId: "C05-M15", value: "oncogene_g" },
      ],
      solution: {
        steps: [
          t`Oil crops.`,
          t`*Arabidopsis* genes.`,
        ],
      },
    },
  ],
};
