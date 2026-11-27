import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`After heavy rain the soil is soaked, yet a day later a plant can wilt in it. Where did the water go?`,
    reveal: t`Much of it drained away by gravity, and some is locked too tightly to soil particles. Roots can use only the water held loosely in the small pores.`,
  },
  explanation: {
    intuition: [
      t`Soil holds water in four forms.`,
      t`Only one of them is available to roots.`,
      t`Water's own properties, cohesion and adhesion, let it stick together and climb narrow tubes.`,
    ],
    formal: [
      {
        title: "Forms of soil water",
        points: [
          t`**Gravitational water** drains down below the roots by gravity.`,
          t`**Capillary water** fills the fine pores between particles: the form **available** to roots.`,
          t`**Hygroscopic water** is a thin film held tightly around particles, and **combined water** is bound in hydrated oxides of Si and Al: neither is available.`,
        ],
      },
      {
        title: "Properties of water",
        points: [
          t`**Cohesion**: water molecules attract each other; this causes **surface tension**.`,
          t`**Adhesion**: water molecules attract other surfaces, such as xylem walls.`,
          t`Together they hold an unbroken water column in the xylem.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which soil water does a root hair absorb?`,
      steps: [
        t`Gravitational water drains away; hygroscopic and combined water are held too tightly.`,
        t`Capillary water sits loosely in the pores.`,
      ],
      answer: t`Capillary water`,
    },
    visualSpec: t`A soil particle wrapped in a thin film, with water filling the pores between particles.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks gravitational water.",
      remediation: "Gravitational water drains below the roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks hygroscopic water.",
      remediation: "Hygroscopic water is held too tightly.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks combined water.",
      remediation: "Combined water is chemically bound.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks diffusion.",
      remediation: "Diffusion is movement, not attraction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks osmosis.",
      remediation: "Osmosis needs a membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks gravity.",
      remediation: "Gravity does not hold molecules together.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks capillary water.",
      remediation: "Capillary water sits free in the pores.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks hygroscopic water.",
      remediation: "That is a film, not bound oxides.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks gravitational water.",
      remediation: "That drains away freely.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks capillary water.",
      remediation: "Capillary water fills the pores.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks gravitational water.",
      remediation: "That drains away by gravity.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks combined water.",
      remediation: "Combined water is chemically bound, not a film.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks cohesion.",
      remediation: "Cohesion is water attracting water.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks surface tension.",
      remediation: "Surface tension comes from cohesion.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks imbibition.",
      remediation: "Imbibition is absorption by colloids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(1)" },
      stem: t`In soil, the water available to roots for absorption is`,
      verify: { kind: "value", inputs: {  }, params: { q: "available" } },
      options: [
        { key: "A", text: t`capillary water`, correct: true, value: "capillary" },
        { key: "B", text: t`gravitational water`, correct: false, misconceptionId: "C01-M1", value: "gravitational" },
        { key: "C", text: t`hygroscopic water`, correct: false, misconceptionId: "C01-M2", value: "hygroscopic" },
        { key: "D", text: t`combined water`, correct: false, misconceptionId: "C01-M3", value: "combined" },
      ],
      solution: {
        steps: [
          t`Water in the fine soil pores.`,
          t`Capillary water.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(5)" },
      stem: t`Surface tension of water is due to`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface" } },
      options: [
        { key: "A", text: t`cohesion`, correct: true, value: "cohesion" },
        { key: "B", text: t`diffusion`, correct: false, misconceptionId: "C01-M4", value: "diffusion" },
        { key: "C", text: t`osmosis`, correct: false, misconceptionId: "C01-M5", value: "osmosis" },
        { key: "D", text: t`gravitational force`, correct: false, misconceptionId: "C01-M6", value: "gravity" },
      ],
      solution: {
        steps: [
          t`Water molecules attract one another.`,
          t`Cohesion.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2026 Q. 2(vii)" },
      stem: t`Water held in the soil as hydrated oxides of silicon and aluminium is`,
      verify: { kind: "value", inputs: {  }, params: { q: "combined" } },
      options: [
        { key: "A", text: t`hygroscopic water`, correct: false, misconceptionId: "C01-M8", value: "hygroscopic" },
        { key: "B", text: t`gravitational water`, correct: false, misconceptionId: "C01-M9", value: "gravitational" },
        { key: "C", text: t`combined water`, correct: true, value: "combined" },
        { key: "D", text: t`capillary water`, correct: false, misconceptionId: "C01-M7", value: "capillary" },
      ],
      solution: {
        steps: [
          t`Bound as hydrated oxides of Si and Al.`,
          t`Combined water.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`A thin film of water held tightly around soil particles, unavailable to roots, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "film" } },
      options: [
        { key: "A", text: t`hygroscopic water`, correct: true, value: "hygroscopic" },
        { key: "B", text: t`capillary water`, correct: false, misconceptionId: "C01-M10", value: "capillary" },
        { key: "C", text: t`gravitational water`, correct: false, misconceptionId: "C01-M11", value: "gravitational" },
        { key: "D", text: t`combined water`, correct: false, misconceptionId: "C01-M12", value: "combined" },
      ],
      solution: {
        steps: [
          t`A tight film around soil particles.`,
          t`Hygroscopic water.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(3)" },
      stem: t`The attraction between water molecules and the walls of xylem vessels is`,
      verify: { kind: "value", inputs: {  }, params: { q: "adhesion" } },
      options: [
        { key: "A", text: t`adhesion`, correct: true, value: "adhesion" },
        { key: "B", text: t`cohesion`, correct: false, misconceptionId: "C01-M13", value: "cohesion" },
        { key: "C", text: t`surface tension`, correct: false, misconceptionId: "C01-M14", value: "surface_tension" },
        { key: "D", text: t`imbibition`, correct: false, misconceptionId: "C01-M15", value: "imbibition" },
      ],
      solution: {
        steps: [
          t`Water attracted to a different surface.`,
          t`Adhesion.`,
        ],
      },
    },
  ],
};
