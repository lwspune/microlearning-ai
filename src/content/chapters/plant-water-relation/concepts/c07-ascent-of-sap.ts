import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Water reaches the top leaves of a 100 m tree with no pump. How?`,
    reveal: t`It is pulled up from above: leaves lose water, and cohesion drags the whole thin column of water up behind it.`,
  },
  explanation: {
    intuition: [
      t`Upward movement of water in xylem is the **ascent of sap**.`,
      t`**Root pressure** (+1 to +2 bars) pushes water up only **10–20 m**.`,
      t`**Capillarity** lifts it even less.`,
    ],
    formal: [
      {
        title: "Cohesion–tension theory",
        points: [
          t`**Dixon and Joly** (1894): transpiration pull theory.`,
          t`Transpiration creates **tension** at the top.`,
          t`Cohesion and adhesion keep the column unbroken.`,
        ],
      },
      {
        title: "Limits",
        points: [
          t`Air bubbles break the column and stop the pull.`,
          t`Fast-transpiring trees show **negative** root pressure.`,
          t`Root pressure matters only in small plants, at night.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why can't root pressure explain sap reaching 100 m?`,
      steps: [
        t`Root pressure lifts water only 10–20 m.`,
        t`Tall trees need a pull from above.`,
      ],
      answer: t`It is too weak`,
    },
    visualSpec: t`A tall tree with a water column under tension, from leaf to root.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks capillarity.",
      remediation: "Capillarity lifts too little.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks root pressure.",
      remediation: "Root pressure lifts only 10–20 m.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks diffusion.",
      remediation: "Diffusion is far too slow.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says 50–60 m.",
      remediation: "It lifts only 10–20 m.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says 30–40 m.",
      remediation: "It lifts only 10–20 m.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says 20–30 m.",
      remediation: "It lifts only 10–20 m.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks Boehm.",
      remediation: "Boehm studied capillarity.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks Priestley.",
      remediation: "Priestley studied gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks Darwin.",
      remediation: "Darwin studied evolution.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says stomata open.",
      remediation: "Open stomata drive the pull.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says high root pressure.",
      remediation: "High root pressure helps.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says wet soil.",
      remediation: "Wet soil helps.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks seedlings at night.",
      remediation: "Seedlings at night show positive pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks aquatic plants.",
      remediation: "Aquatic plants transpire little.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks dead plants.",
      remediation: "Dead plants have no pressure.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(2)" },
      stem: t`The most widely accepted theory of the ascent of sap is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "theory" } },
      options: [
        { key: "A", text: t`root pressure theory`, correct: false, misconceptionId: "C07-M2", value: "root_pressure" },
        { key: "B", text: t`diffusion theory`, correct: false, misconceptionId: "C07-M3", value: "diffusion" },
        { key: "C", text: t`transpiration pull theory`, correct: true, value: "transpiration_pull" },
        { key: "D", text: t`capillarity theory`, correct: false, misconceptionId: "C07-M1", value: "capillarity" },
      ],
      solution: {
        steps: [
          t`Pull from transpiration.`,
          t`Transpiration pull theory.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2024 Q. 1(vi)" },
      stem: t`Root pressure of +1 to +2 bars can pump water to a height of about`,
      verify: { kind: "value", inputs: {  }, params: { q: "height" } },
      options: [
        { key: "A", text: t`50–60 m`, correct: false, misconceptionId: "C07-M4", value: "fifty_to_sixty" },
        { key: "B", text: t`30–40 m`, correct: false, misconceptionId: "C07-M5", value: "thirty_to_forty" },
        { key: "C", text: t`20–30 m`, correct: false, misconceptionId: "C07-M6", value: "twenty_to_thirty" },
        { key: "D", text: t`10–20 m`, correct: true, value: "ten_to_twenty" },
      ],
      solution: {
        steps: [
          t`+1 to +2 bars.`,
          t`10–20 m.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(3)" },
      stem: t`The cohesion–tension theory was put forward by`,
      verify: { kind: "value", inputs: {  }, params: { q: "dixon" } },
      options: [
        { key: "A", text: t`Darwin`, correct: false, misconceptionId: "C07-M9", value: "darwin" },
        { key: "B", text: t`Dixon and Joly`, correct: true, value: "dixon_joly" },
        { key: "C", text: t`Boehm`, correct: false, misconceptionId: "C07-M7", value: "boehm" },
        { key: "D", text: t`Priestley`, correct: false, misconceptionId: "C07-M8", value: "priestley" },
      ],
      solution: {
        steps: [
          t`Cohesion–tension theory, 1894.`,
          t`Dixon and Joly.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(6)" },
      stem: t`Transpiration pull fails when`,
      verify: { kind: "value", inputs: {  }, params: { q: "broken" } },
      options: [
        { key: "A", text: t`the water column in the xylem is broken by air bubbles`, correct: true, value: "column_broken" },
        { key: "B", text: t`the stomata are open`, correct: false, misconceptionId: "C07-M10", value: "stomata_open" },
        { key: "C", text: t`root pressure is high`, correct: false, misconceptionId: "C07-M11", value: "high_root_pressure" },
        { key: "D", text: t`the soil is wet`, correct: false, misconceptionId: "C07-M12", value: "wet_soil" },
      ],
      solution: {
        steps: [
          t`Bubbles break cohesion.`,
          t`The column is broken.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(5)" },
      stem: t`Negative root pressure is shown by`,
      verify: { kind: "value", inputs: {  }, params: { q: "negative" } },
      options: [
        { key: "A", text: t`seedlings at night`, correct: false, misconceptionId: "C07-M13", value: "seedlings_night" },
        { key: "B", text: t`aquatic plants`, correct: false, misconceptionId: "C07-M14", value: "aquatic_plants" },
        { key: "C", text: t`dead plants`, correct: false, misconceptionId: "C07-M15", value: "dead_plants" },
        { key: "D", text: t`actively transpiring tall trees`, correct: true, value: "transpiring_trees" },
      ],
      solution: {
        steps: [
          t`Xylem under tension.`,
          t`Transpiring tall trees.`,
        ],
      },
    },
  ],
};
