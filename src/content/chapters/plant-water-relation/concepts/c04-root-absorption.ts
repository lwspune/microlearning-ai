import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A plant's roots are buried in soil, yet only a small zone near each tip drinks water. Why there?`,
    reveal: t`That is the root-hair zone: thousands of thin, thin-walled hairs give a huge surface touching capillary water.`,
  },
  explanation: {
    intuition: [
      t`**Root hairs** are tubular outgrowths of **epiblema** cells.`,
      t`Their sap is hypertonic to soil water, so water enters.`,
      t`Water then crosses the cortex, endodermis and pericycle to reach the xylem.`,
    ],
    formal: [
      {
        title: "Mechanism",
        points: [
          t`**Passive absorption**: transpiration pull draws water in; about **98%** of uptake.`,
          t`**Active absorption**: the root's own osmotic and metabolic work.`,
          t`Active absorption builds root pressure.`,
        ],
      },
      {
        title: "Path across the root",
        points: [
          t`**Apoplast**: through cell walls and intercellular spaces.`,
          t`**Symplast**: from cytoplasm to cytoplasm through **plasmodesmata**.`,
          t`At the endodermis the Casparian strip forces water into the symplast.`,
        ],
      },
    ],
    worked: {
      prompt: t`A plant transpires fast at noon. How is most of its water absorbed?`,
      steps: [
        t`Transpiration pull creates tension in the xylem.`,
        t`The root acts as a passive surface.`,
      ],
      answer: t`Passively`,
    },
    visualSpec: t`Cross-section of a root, arrows from root hair through cortex to xylem by walls and by plasmodesmata.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks lateral roots.",
      remediation: "Lateral roots extend the system.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks the root cap.",
      remediation: "The root cap protects the tip.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks the primary root.",
      remediation: "Uptake is by its hairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says active.",
      remediation: "Only a small share is active.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says by the leaves.",
      remediation: "Leaves lose water, not absorb it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says by the stem.",
      remediation: "The stem conducts water.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks apoplast.",
      remediation: "Apoplast runs through walls.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks vacuolar.",
      remediation: "That route crosses vacuoles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks the xylem route.",
      remediation: "Xylem comes after the cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks symplast.",
      remediation: "Symplast runs through cytoplasm.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks phloem.",
      remediation: "Phloem carries food.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks plasmodesmata.",
      remediation: "Plasmodesmata form the symplast.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks cortex.",
      remediation: "Cortex cells lie inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks endodermis.",
      remediation: "Endodermis lies deep inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks pericycle.",
      remediation: "Pericycle lies inside the endodermis.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(8)" },
      stem: t`Water is absorbed from the soil mainly through the`,
      verify: { kind: "value", inputs: {  }, params: { q: "organ" } },
      options: [
        { key: "A", text: t`root cap`, correct: false, misconceptionId: "C04-M2", value: "root_cap" },
        { key: "B", text: t`primary root`, correct: false, misconceptionId: "C04-M3", value: "primary_root" },
        { key: "C", text: t`root hairs`, correct: true, value: "root_hair" },
        { key: "D", text: t`lateral roots`, correct: false, misconceptionId: "C04-M1", value: "lateral_roots" },
      ],
      solution: {
        steps: [
          t`Thin, numerous outgrowths.`,
          t`Root hairs.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q3(1)" },
      stem: t`About 98% of the water a plant takes in is absorbed`,
      verify: { kind: "value", inputs: {  }, params: { q: "passive" } },
      options: [
        { key: "A", text: t`actively, by the root's own osmosis`, correct: false, misconceptionId: "C04-M4", value: "active" },
        { key: "B", text: t`through the leaves`, correct: false, misconceptionId: "C04-M5", value: "by_leaves" },
        { key: "C", text: t`through the stem`, correct: false, misconceptionId: "C04-M6", value: "by_stem" },
        { key: "D", text: t`passively, pulled by transpiration`, correct: true, value: "passive" },
      ],
      solution: {
        steps: [
          t`Transpiration pull does it.`,
          t`Passively.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(9)" },
      stem: t`Water passing from living cell to living cell through plasmodesmata follows the`,
      verify: { kind: "value", inputs: {  }, params: { q: "symplast" } },
      options: [
        { key: "A", text: t`vacuolar pathway`, correct: false, misconceptionId: "C04-M8", value: "vacuolar" },
        { key: "B", text: t`xylem route`, correct: false, misconceptionId: "C04-M9", value: "xylem_route" },
        { key: "C", text: t`symplast pathway`, correct: true, value: "symplast" },
        { key: "D", text: t`apoplast pathway`, correct: false, misconceptionId: "C04-M7", value: "apoplast" },
      ],
      solution: {
        steps: [
          t`Cytoplasm to cytoplasm.`,
          t`Symplast.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2024 Q. 9" },
      stem: t`Water passing through cell walls and intercellular spaces follows the`,
      verify: { kind: "value", inputs: {  }, params: { q: "apoplast" } },
      options: [
        { key: "A", text: t`symplast pathway`, correct: false, misconceptionId: "C04-M10", value: "symplast" },
        { key: "B", text: t`phloem`, correct: false, misconceptionId: "C04-M11", value: "phloem" },
        { key: "C", text: t`plasmodesmata`, correct: false, misconceptionId: "C04-M12", value: "plasmodesmata" },
        { key: "D", text: t`apoplast pathway`, correct: true, value: "apoplast" },
      ],
      solution: {
        steps: [
          t`Walls and spaces.`,
          t`Apoplast.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(1)" },
      stem: t`A root hair is an extension of an`,
      verify: { kind: "value", inputs: {  }, params: { q: "epiblema" } },
      options: [
        { key: "A", text: t`pericycle cell`, correct: false, misconceptionId: "C04-M15", value: "pericycle" },
        { key: "B", text: t`epiblema cell`, correct: true, value: "epiblema" },
        { key: "C", text: t`cortex cell`, correct: false, misconceptionId: "C04-M13", value: "cortex" },
        { key: "D", text: t`endodermis cell`, correct: false, misconceptionId: "C04-M14", value: "endodermis" },
      ],
      solution: {
        steps: [
          t`Outermost layer of the root.`,
          t`Epiblema.`,
        ],
      },
    },
  ],
};
