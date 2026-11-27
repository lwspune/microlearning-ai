import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A forest's trees make a tonne of sugar from sunlight, but much less is left as new wood. Where did the rest go?`,
    reveal: t`The trees used it themselves: respiration burns part of what photosynthesis makes.`,
  },
  explanation: {
    intuition: [
      t`An **ecosystem** is a community with its non-living surroundings.`,
      t`Plants trap sunlight and make biomass.`,
      t`The rate of this is **primary productivity**.`,
    ],
    formal: [
      {
        title: "Productivity",
        points: [
          t`Expressed as mass per area per time, e.g. **g/m²/day**.`,
          t`**Gross** (GPP): total made by photosynthesis.`,
          t`**Net** (NPP) $=$ GPP $-$ respiration: what is left for consumers.`,
        ],
      },
      {
        title: "Sunlight and consumers",
        points: [
          t`Less than **50%** of incident sunlight is photosynthetically active (PAR, 400–700 nm).`,
          t`Productivity depends on light, temperature, water, nutrients and the plants.`,
          t`Consumers' rate of forming new matter is **secondary productivity**.`,
        ],
      },
    ],
    worked: {
      prompt: t`GPP 800 g/m²/yr, respiration 200. Find NPP.`,
      steps: [
        t`NPP $=$ GPP $-$ R.`,
        t`$800 - 200 = 600$.`,
      ],
      answer: t`600 g/m²/yr`,
    },
    visualSpec: t`A bar showing GPP split into respiration and NPP.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Gives 100%.",
      remediation: "Only part is usable.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Gives 1–5%.",
      remediation: "That is the share actually captured.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Gives 2–10%.",
      remediation: "That is the share actually captured.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Adds respiration.",
      remediation: "Respiration is subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Gives respiration.",
      remediation: "That is what is lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Subtracts the wrong way.",
      remediation: t`NPP $=$ GPP $-$ R.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks total biomass.",
      remediation: "That is standing crop.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks consumers.",
      remediation: "That is secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks decomposition.",
      remediation: "That breaks matter down.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks mass only.",
      remediation: "It is a rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks joules only.",
      remediation: "It is mass per area per time.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks area only.",
      remediation: "It is a rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks primary.",
      remediation: "Primary is by plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks gross.",
      remediation: "Gross is by plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks NPP.",
      remediation: "NPP is by plants.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(4)" },
      stem: t`Photosynthetically active radiation is about what share of the incident sunlight?`,
      verify: { kind: "value", inputs: {  }, params: { q: "par" } },
      options: [
        { key: "A", text: t`Less than 50%`, correct: true, value: "below_50" },
        { key: "B", text: t`100%`, correct: false, misconceptionId: "C01-M1", value: "p100" },
        { key: "C", text: t`1–5%`, correct: false, misconceptionId: "C01-M2", value: "p1_5" },
        { key: "D", text: t`2–10%`, correct: false, misconceptionId: "C01-M3", value: "p2_10" },
      ],
      solution: {
        steps: [
          t`400–700 nm light.`,
          t`Less than 50%.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(2)" },
      stem: t`A forest has gross primary productivity 1000 g/m²/yr and loses 300 g/m²/yr in respiration. What is its net primary productivity (g/m²/yr)?`,
      verify: { kind: "value", inputs: { g: "1000", r: "300" }, params: { q: "npp" } },
      options: [
        { key: "A", text: t`$700$`, correct: true, value: "700" },
        { key: "B", text: t`$1300$`, correct: false, misconceptionId: "C01-M4", value: "1300" },
        { key: "C", text: t`$300$`, correct: false, misconceptionId: "C01-M5", value: "300" },
        { key: "D", text: t`$-700$`, correct: false, misconceptionId: "C01-M6", value: "-700" },
      ],
      solution: {
        steps: [
          t`$1000 - 300$.`,
          t`700.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(2)" },
      stem: t`Primary productivity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`the rate at which consumers make biomass`, correct: false, misconceptionId: "C01-M8", value: "consumer_rate" },
        { key: "B", text: t`the rate of decomposition`, correct: false, misconceptionId: "C01-M9", value: "decomposer_rate" },
        { key: "C", text: t`the rate at which plants make organic matter by photosynthesis`, correct: true, value: "rate_by_plants" },
        { key: "D", text: t`the total biomass present at one time`, correct: false, misconceptionId: "C01-M7", value: "total_biomass" },
      ],
      solution: {
        steps: [
          t`Plants make biomass.`,
          t`Rate by plants.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(2)" },
      stem: t`Primary productivity is expressed in units such as`,
      verify: { kind: "value", inputs: {  }, params: { q: "units" } },
      options: [
        { key: "A", text: t`g/m²/day`, correct: true, value: "mass_area_time" },
        { key: "B", text: t`grams only`, correct: false, misconceptionId: "C01-M10", value: "mass_only" },
        { key: "C", text: t`joules only`, correct: false, misconceptionId: "C01-M11", value: "joules_only" },
        { key: "D", text: t`m² only`, correct: false, misconceptionId: "C01-M12", value: "area_only" },
      ],
      solution: {
        steps: [
          t`Mass, area, time.`,
          t`g/m²/day.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(2)" },
      stem: t`The rate at which consumers form new organic matter is`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`secondary productivity`, correct: true, value: "secondary_prod" },
        { key: "B", text: t`primary productivity`, correct: false, misconceptionId: "C01-M13", value: "primary_prod" },
        { key: "C", text: t`gross primary productivity`, correct: false, misconceptionId: "C01-M14", value: "gross_prod" },
        { key: "D", text: t`net primary productivity`, correct: false, misconceptionId: "C01-M15", value: "net_primary_prod" },
      ],
      solution: {
        steps: [
          t`By consumers.`,
          t`Secondary productivity.`,
        ],
      },
    },
  ],
};
