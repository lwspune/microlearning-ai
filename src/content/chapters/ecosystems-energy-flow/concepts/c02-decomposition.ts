import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A fallen leaf vanishes from the forest floor within months. Who removes it?`,
    reveal: t`Decomposers: earthworms break it up, then bacteria and fungi digest it into simple nutrients.`,
  },
  explanation: {
    intuition: [
      t`**Decomposition** breaks complex organic matter into $\ce{CO2}$, water and nutrients.`,
      t`Its raw material is **detritus**: dead remains and faecal matter.`,
      t`**Saprotrophs** (bacteria, fungi) do most of it.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`**Fragmentation**: detritivores such as earthworms break detritus into small pieces.`,
          t`**Leaching**: soluble nutrients percolate into the soil and precipitate as unavailable salts.`,
          t`**Catabolism**: bacterial and fungal enzymes degrade detritus.`,
        ],
      },
      {
        title: "Humus",
        points: [
          t`**Humification**: forms dark, amorphous **humus**, resistant to microbes.`,
          t`**Mineralization**: humus is slowly degraded, releasing inorganic nutrients.`,
          t`Warm, moist, oxygen-rich conditions speed decomposition.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does decomposition slow down in cold, waterlogged soil?`,
      steps: [
        t`Microbes work slowly in cold.`,
        t`Waterlogging cuts oxygen.`,
      ],
      answer: t`Low temperature and oxygen`,
    },
    visualSpec: t`A leaf passing through fragmentation, leaching, catabolism, humification and mineralization.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks omnivores.",
      remediation: "Omnivores eat living food.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks carnivores.",
      remediation: "Carnivores eat animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks autotrophs.",
      remediation: "Autotrophs make their own food.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks humification.",
      remediation: "That forms humus.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks mineralization.",
      remediation: "That releases nutrients.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks fragmentation.",
      remediation: "That breaks pieces.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks leaching.",
      remediation: "That moves nutrients down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks catabolism.",
      remediation: "That is enzyme breakdown.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks mineralization.",
      remediation: "That breaks humus down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks humification.",
      remediation: "That makes humus.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks leaching.",
      remediation: "That moves nutrients down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks fragmentation.",
      remediation: "That is physical.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks living producers.",
      remediation: "Detritus is dead.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks inorganic salts.",
      remediation: "Those are products.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks humus only.",
      remediation: "Humus is a product.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 1(iv)" },
      stem: t`Organisms that get their energy and nutrients by degrading detritus are`,
      verify: { kind: "value", inputs: {  }, params: { q: "detritus" } },
      options: [
        { key: "A", text: t`saprotrophs`, correct: true, value: "saprotrophs_o" },
        { key: "B", text: t`omnivores`, correct: false, misconceptionId: "C02-M1", value: "omnivores_o" },
        { key: "C", text: t`carnivores`, correct: false, misconceptionId: "C02-M2", value: "carnivores_o" },
        { key: "D", text: t`autotrophs`, correct: false, misconceptionId: "C02-M3", value: "autotrophs_o" },
      ],
      solution: {
        steps: [
          t`They feed on detritus.`,
          t`Saprotrophs.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 17" },
      stem: t`Water-soluble nutrients percolate down the soil and are precipitated as unavailable salts. This step is`,
      verify: { kind: "value", inputs: {  }, params: { q: "leaching" } },
      options: [
        { key: "A", text: t`Humification`, correct: false, misconceptionId: "C02-M4", value: "humification_s" },
        { key: "B", text: t`Mineralization`, correct: false, misconceptionId: "C02-M5", value: "mineralization_s" },
        { key: "C", text: t`Fragmentation`, correct: false, misconceptionId: "C02-M6", value: "fragmentation_s" },
        { key: "D", text: t`Leaching`, correct: true, value: "leaching_s" },
      ],
      solution: {
        steps: [
          t`Soluble nutrients sink.`,
          t`Leaching.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2024 Q. 25" },
      stem: t`The step that forms dark, amorphous humus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "humus" } },
      options: [
        { key: "A", text: t`Mineralization`, correct: false, misconceptionId: "C02-M9", value: "mineralization_s" },
        { key: "B", text: t`Humification`, correct: true, value: "humification_s" },
        { key: "C", text: t`Leaching`, correct: false, misconceptionId: "C02-M7", value: "leaching_s" },
        { key: "D", text: t`Catabolism`, correct: false, misconceptionId: "C02-M8", value: "catabolism_s" },
      ],
      solution: {
        steps: [
          t`Dark, amorphous matter.`,
          t`Humification.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2026 Q. 17" },
      stem: t`Microbes degrade humus and release inorganic nutrients. This step is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mineral" } },
      options: [
        { key: "A", text: t`Fragmentation`, correct: false, misconceptionId: "C02-M12", value: "fragmentation_s" },
        { key: "B", text: t`Mineralization`, correct: true, value: "mineralization_s" },
        { key: "C", text: t`Humification`, correct: false, misconceptionId: "C02-M10", value: "humification_s" },
        { key: "D", text: t`Leaching`, correct: false, misconceptionId: "C02-M11", value: "leaching_s" },
      ],
      solution: {
        steps: [
          t`Nutrients released.`,
          t`Mineralization.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(3)" },
      stem: t`Detritus, the raw material of decomposition, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "what" } },
      options: [
        { key: "A", text: t`humus alone`, correct: false, misconceptionId: "C02-M15", value: "humus_only" },
        { key: "B", text: t`dead remains of plants and animals, including faecal matter`, correct: true, value: "dead_remains" },
        { key: "C", text: t`living producers`, correct: false, misconceptionId: "C02-M13", value: "living_producers" },
        { key: "D", text: t`inorganic salts`, correct: false, misconceptionId: "C02-M14", value: "inorganic_salts" },
      ],
      solution: {
        steps: [
          t`Dead organic matter.`,
          t`Dead remains and faeces.`,
        ],
      },
    },
  ],
};
