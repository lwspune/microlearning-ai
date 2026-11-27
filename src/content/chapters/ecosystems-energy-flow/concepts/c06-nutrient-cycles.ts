import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The carbon in your body was once in a dinosaur, a tree and the air. How can the same atoms move around like this?`,
    reveal: t`Through nutrient cycles: elements pass from the environment into organisms and back again, over and over.`,
  },
  explanation: {
    intuition: [
      t`Nutrients cycle between living and non-living parts: **biogeochemical cycles**.`,
      t`**Gaseous** cycles have their reservoir in air or water.`,
      t`**Sedimentary** cycles have it in the Earth's crust.`,
    ],
    formal: [
      {
        title: "Carbon cycle (gaseous)",
        points: [
          t`Reservoirs: **atmosphere** and **oceans** (71% of global carbon, dissolved).`,
          t`Photosynthesis takes $\ce{CO2}$ in; respiration and burning release it.`,
          t`**Sinks**: carbon stored long-term in rocks and fossil fuels.`,
        ],
      },
      {
        title: "Phosphorus cycle (sedimentary)",
        points: [
          t`Reservoir: **rocks** of the Earth's crust; released slowly by weathering.`,
          t`Phosphorus is always short, so it is the **limiting** factor.`,
          t`A sudden inflow of phosphate causes algal overgrowth: **eutrophication**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Burning coal releases carbon. Where was it before?`,
      steps: [
        t`Coal is a fossil fuel.`,
        t`Fossil fuels are carbon sinks.`,
      ],
      answer: t`In a long-term sink`,
    },
    visualSpec: t`The carbon cycle: air, plants, animals, decomposers, oceans and fossil fuels joined by arrows.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks carbon.",
      remediation: "Carbon is plentiful.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks nitrogen.",
      remediation: "Nitrogen can be fixed.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks sulphur.",
      remediation: "Sulphur is rarely limiting.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks reservoirs.",
      remediation: "Reservoirs exchange carbon actively.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks producers.",
      remediation: "Producers are living.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks decomposers.",
      remediation: "Decomposers release carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks the crust.",
      remediation: "That is sedimentary.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks living bodies.",
      remediation: "Those are pools.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks soil.",
      remediation: "Soil is not the reservoir.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks atmosphere.",
      remediation: "That is gaseous.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks oceans.",
      remediation: "The reservoir is rock.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks living bodies.",
      remediation: "The reservoir is rock.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Gives 49%.",
      remediation: "49% is carbon in dry body weight.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Gives 29%.",
      remediation: "Oceans hold 71%.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Gives 10%.",
      remediation: "Oceans hold 71%.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(8)" },
      stem: t`The nutrient most often limiting primary productivity in an ecosystem is`,
      verify: { kind: "value", inputs: {  }, params: { q: "limiting" } },
      options: [
        { key: "A", text: t`carbon`, correct: false, misconceptionId: "C06-M1", value: "carbon_e" },
        { key: "B", text: t`nitrogen`, correct: false, misconceptionId: "C06-M2", value: "nitrogen_e" },
        { key: "C", text: t`sulphur`, correct: false, misconceptionId: "C06-M3", value: "sulphur_e" },
        { key: "D", text: t`phosphorus`, correct: true, value: "phosphorus_e" },
      ],
      solution: {
        steps: [
          t`Always in short supply.`,
          t`Phosphorus.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2025 Q. 2(viii)" },
      stem: t`Long-term stores of carbon in rocks and fossil fuels, kept away from the cycle, are`,
      verify: { kind: "value", inputs: {  }, params: { q: "sinks" } },
      options: [
        { key: "A", text: t`sinks`, correct: true, value: "sinks_c" },
        { key: "B", text: t`reservoirs`, correct: false, misconceptionId: "C06-M4", value: "reservoirs_c" },
        { key: "C", text: t`producers`, correct: false, misconceptionId: "C06-M5", value: "producers_c" },
        { key: "D", text: t`decomposers`, correct: false, misconceptionId: "C06-M6", value: "decomposers_c" },
      ],
      solution: {
        steps: [
          t`Stored away long-term.`,
          t`Sinks.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q2(4)" },
      stem: t`The carbon cycle is a gaseous cycle; its reservoir is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbon_res" } },
      options: [
        { key: "A", text: t`atmosphere`, correct: true, value: "atmosphere_r" },
        { key: "B", text: t`Earth's crust`, correct: false, misconceptionId: "C06-M7", value: "earth_crust" },
        { key: "C", text: t`bodies of living things`, correct: false, misconceptionId: "C06-M8", value: "living_bodies" },
        { key: "D", text: t`soil`, correct: false, misconceptionId: "C06-M9", value: "soil_r" },
      ],
      solution: {
        steps: [
          t`Gaseous cycle.`,
          t`Atmosphere.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(4)" },
      stem: t`In a sedimentary cycle such as the phosphorus cycle, the reservoir is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "sedimentary" } },
      options: [
        { key: "A", text: t`bodies of living things`, correct: false, misconceptionId: "C06-M12", value: "living_bodies" },
        { key: "B", text: t`Earth's crust (rocks)`, correct: true, value: "earth_crust" },
        { key: "C", text: t`atmosphere`, correct: false, misconceptionId: "C06-M10", value: "atmosphere_r" },
        { key: "D", text: t`oceans`, correct: false, misconceptionId: "C06-M11", value: "oceans_r" },
      ],
      solution: {
        steps: [
          t`Rocks.`,
          t`Earth's crust.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q2(4)" },
      stem: t`The oceans hold about what share of the global carbon, in dissolved form?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ocean" } },
      options: [
        { key: "A", text: t`71%`, correct: true, value: "c71" },
        { key: "B", text: t`49%`, correct: false, misconceptionId: "C06-M13", value: "c49" },
        { key: "C", text: t`29%`, correct: false, misconceptionId: "C06-M14", value: "c29" },
        { key: "D", text: t`10%`, correct: false, misconceptionId: "C06-M15", value: "c10" },
      ],
      solution: {
        steps: [
          t`Dissolved in sea water.`,
          t`71%.`,
        ],
      },
    },
  ],
};
