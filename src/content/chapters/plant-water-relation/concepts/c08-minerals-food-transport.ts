import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A leaf makes sugar; a root tip far below needs it. How does the food get there?`,
    reveal: t`Through the phloem, as sucrose: up, down and sideways to wherever it is used or stored.`,
  },
  explanation: {
    intuition: [
      t`Minerals are absorbed as dissolved **ions**.`,
      t`Their uptake is **independent** of water uptake; many ions are taken in actively, some passively.`,
      t`Food moves through phloem as **sucrose**.`,
    ],
    formal: [
      {
        title: "Minerals",
        points: [
          t`Ions enter root cells against a gradient, using ATP.`,
          t`They reach the xylem and rise with the water.`,
          t`Uptake does not depend on how much water is absorbed.`,
        ],
      },
      {
        title: "Food",
        points: [
          t`Food moves in phloem as **sucrose**, up and down.`,
          t`Phloem to pith: **radial** translocation.`,
          t`Phloem to cortex: **tangential** translocation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is food moved as sucrose, not glucose?`,
      steps: [
        t`Sucrose is a non-reducing sugar.`,
        t`It is less reactive in transit.`,
      ],
      answer: t`It is stable in transit`,
    },
    visualSpec: t`A stem cross-section, arrows from phloem inward to pith and outward to cortex.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks glucose.",
      remediation: "Glucose is too reactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks starch.",
      remediation: "Starch is insoluble.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks fructose.",
      remediation: "Fructose is a monomer.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks tangential.",
      remediation: "Tangential goes to the cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks upward.",
      remediation: "Upward is along the stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks downward.",
      remediation: "Downward is along the stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks radial.",
      remediation: "Radial goes to the pith.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks upward.",
      remediation: "Upward is along the stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks downward.",
      remediation: "Downward is along the stem.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks salt crystals.",
      remediation: "Crystals cannot cross membranes.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks organic compounds.",
      remediation: "Minerals are inorganic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks gases.",
      remediation: "Minerals are not gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Says with water.",
      remediation: "Mineral uptake is independent.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Says passive only.",
      remediation: "Many ions are taken in actively, using ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Says leaves only.",
      remediation: "Roots absorb minerals.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2026 Q. 1(vi)" },
      stem: t`In plants, food is translocated in the form of`,
      verify: { kind: "value", inputs: {  }, params: { q: "sucrose" } },
      options: [
        { key: "A", text: t`sucrose`, correct: true, value: "sucrose" },
        { key: "B", text: t`glucose`, correct: false, misconceptionId: "C08-M1", value: "glucose" },
        { key: "C", text: t`starch`, correct: false, misconceptionId: "C08-M2", value: "starch" },
        { key: "D", text: t`fructose`, correct: false, misconceptionId: "C08-M3", value: "fructose" },
      ],
      solution: {
        steps: [
          t`The phloem sugar.`,
          t`Sucrose.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2026 Q. 1(iii)" },
      stem: t`When food moves from the phloem to the pith, the translocation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "radial" } },
      options: [
        { key: "A", text: t`tangential`, correct: false, misconceptionId: "C08-M4", value: "tangential" },
        { key: "B", text: t`upward`, correct: false, misconceptionId: "C08-M5", value: "upward" },
        { key: "C", text: t`downward`, correct: false, misconceptionId: "C08-M6", value: "downward" },
        { key: "D", text: t`radial`, correct: true, value: "radial" },
      ],
      solution: {
        steps: [
          t`Phloem to pith.`,
          t`Radial.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2024 Q. 7" },
      stem: t`When food moves from the phloem to the cortex, the translocation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tangential" } },
      options: [
        { key: "A", text: t`radial`, correct: false, misconceptionId: "C08-M7", value: "radial" },
        { key: "B", text: t`upward`, correct: false, misconceptionId: "C08-M8", value: "upward" },
        { key: "C", text: t`downward`, correct: false, misconceptionId: "C08-M9", value: "downward" },
        { key: "D", text: t`tangential`, correct: true, value: "tangential" },
      ],
      solution: {
        steps: [
          t`Phloem to cortex.`,
          t`Tangential.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(5)" },
      stem: t`Plants absorb minerals from the soil as`,
      verify: { kind: "value", inputs: {  }, params: { q: "ions" } },
      options: [
        { key: "A", text: t`organic compounds`, correct: false, misconceptionId: "C08-M11", value: "organic_compounds" },
        { key: "B", text: t`gases`, correct: false, misconceptionId: "C08-M12", value: "gases" },
        { key: "C", text: t`dissolved ions`, correct: true, value: "ions" },
        { key: "D", text: t`salt crystals`, correct: false, misconceptionId: "C08-M10", value: "salt_crystals" },
      ],
      solution: {
        steps: [
          t`Dissolved minerals.`,
          t`Ions.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(5)" },
      stem: t`Absorption of minerals by roots is`,
      verify: { kind: "value", inputs: {  }, params: { q: "independent" } },
      options: [
        { key: "A", text: t`only through the leaves`, correct: false, misconceptionId: "C08-M15", value: "leaves_only" },
        { key: "B", text: t`independent of water absorption, and often active (using ATP)`, correct: true, value: "independent_active" },
        { key: "C", text: t`carried along with water absorption`, correct: false, misconceptionId: "C08-M13", value: "with_water" },
        { key: "D", text: t`always passive`, correct: false, misconceptionId: "C08-M14", value: "passive_only" },
      ],
      solution: {
        steps: [
          t`Uses ATP, separate from water.`,
          t`Active and independent.`,
        ],
      },
    },
  ],
};
