import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`From one tiny piece of a banana plant, a lab can grow thousands of identical plants. How?`,
    reveal: t`Plant cells can regrow a whole plant. On a nutrient medium, a small piece forms a callus that sprouts many plantlets.`,
  },
  explanation: {
    intuition: [
      t`**Tissue culture** grows plant parts on a nutrient medium in sterile conditions.`,
      t`Every plant cell can form a whole plant (totipotency).`,
      t`Microbes can also be grown for food: **single cell protein** (SCP).`,
    ],
    formal: [
      {
        title: "Tissue culture",
        points: [
          t`**Explant**: the plant part placed on the medium.`,
          t`**Callus**: an unorganised mass of cells on a solid medium.`,
          t`**Micropropagation**: many identical plantlets quickly, in a small space, all year.`,
        ],
      },
      {
        title: "Single cell protein",
        points: [
          t`Algae: ***Spirulina***, *Chlorella*.`,
          t`Fungi: yeast *Candida utilis*, *Aspergillus niger*, *Trichoderma viride*.`,
          t`SCP is protein-rich food or feed.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why are micropropagated plants all alike?`,
      steps: [
        t`They come from one explant by mitosis.`,
        t`Mitosis copies the genes exactly.`,
      ],
      answer: t`They are clones`,
    },
    visualSpec: t`An explant on agar growing into a callus, then into many small plantlets.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks callus.",
      remediation: "Callus grows from the explant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks clone.",
      remediation: "Clones are the result.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks medium.",
      remediation: "The medium feeds the explant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks explant.",
      remediation: "The explant is the starting piece.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks embryo.",
      remediation: "An embryo is organised.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks meristem.",
      remediation: "A meristem is organised.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says it needs seeds.",
      remediation: "It starts from any tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says one season.",
      remediation: "It works all year.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says offspring differ.",
      remediation: "They are identical.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks *Aspergillus*.",
      remediation: "It is a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks *Candida*.",
      remediation: "It is a yeast.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks *Trichoderma*.",
      remediation: "It is a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks alga.",
      remediation: "*Spirulina* is the alga.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks bacterium.",
      remediation: "*Candida* is a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks protozoan.",
      remediation: "*Candida* is a fungus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2025 Q. 6" },
      stem: t`The part of a plant placed on a nutrient medium in tissue culture is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "explant" } },
      options: [
        { key: "A", text: t`explant`, correct: true, value: "explant_t" },
        { key: "B", text: t`callus`, correct: false, misconceptionId: "C02-M1", value: "callus_t" },
        { key: "C", text: t`clone`, correct: false, misconceptionId: "C02-M2", value: "clone_t" },
        { key: "D", text: t`medium`, correct: false, misconceptionId: "C02-M3", value: "medium_t" },
      ],
      solution: {
        steps: [
          t`The starting piece.`,
          t`Explant.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2025 Q. 6" },
      stem: t`The unorganised mass of cells that grows from an explant on a solid medium is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "callus" } },
      options: [
        { key: "A", text: t`explant`, correct: false, misconceptionId: "C02-M4", value: "explant_t" },
        { key: "B", text: t`embryo`, correct: false, misconceptionId: "C02-M5", value: "embryo_t" },
        { key: "C", text: t`meristem`, correct: false, misconceptionId: "C02-M6", value: "meristem_t" },
        { key: "D", text: t`callus`, correct: true, value: "callus_t" },
      ],
      solution: {
        steps: [
          t`Unorganised cells.`,
          t`Callus.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 7" },
      stem: t`An advantage of micropropagation is that it`,
      verify: { kind: "value", inputs: {  }, params: { q: "micro" } },
      options: [
        { key: "A", text: t`gives offspring that all differ`, correct: false, misconceptionId: "C02-M9", value: "variable_offspring" },
        { key: "B", text: t`gives many plantlets quickly in a small space`, correct: true, value: "rapid_many" },
        { key: "C", text: t`needs seeds to start`, correct: false, misconceptionId: "C02-M7", value: "needs_seeds" },
        { key: "D", text: t`works in only one season`, correct: false, misconceptionId: "C02-M8", value: "one_season" },
      ],
      solution: {
        steps: [
          t`Quick, many, small space.`,
          t`Many plantlets quickly.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 1(v)" },
      stem: t`Among these producers of single cell protein, the alga is`,
      verify: { kind: "value", inputs: {  }, params: { q: "alga" } },
      options: [
        { key: "A", text: t`*Trichoderma viride*`, correct: false, misconceptionId: "C02-M12", value: "trichoderma_o" },
        { key: "B", text: t`*Spirulina*`, correct: true, value: "spirulina_o" },
        { key: "C", text: t`*Aspergillus niger*`, correct: false, misconceptionId: "C02-M10", value: "aspergillus_o" },
        { key: "D", text: t`*Candida utilis*`, correct: false, misconceptionId: "C02-M11", value: "candida_o" },
      ],
      solution: {
        steps: [
          t`Blue-green, spiral.`,
          t`*Spirulina*.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 1(v)" },
      stem: t`*Candida utilis*, used for single cell protein, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "candida" } },
      options: [
        { key: "A", text: t`protozoan`, correct: false, misconceptionId: "C02-M15", value: "protozoan_o" },
        { key: "B", text: t`yeast`, correct: true, value: "yeast_o" },
        { key: "C", text: t`alga`, correct: false, misconceptionId: "C02-M13", value: "alga_o" },
        { key: "D", text: t`bacterium`, correct: false, misconceptionId: "C02-M14", value: "bacterium_o" },
      ],
      solution: {
        steps: [
          t`A single-celled fungus.`,
          t`Yeast.`,
        ],
      },
    },
  ],
};
