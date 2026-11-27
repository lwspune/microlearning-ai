import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A tall tree loses hundreds of litres of water a day into the air. Why would a plant waste so much?`,
    reveal: t`It is not quite waste: the same open stomata that let water vapour out let $\ce{CO2}$ in for photosynthesis.`,
  },
  explanation: {
    intuition: [
      t`**Transpiration** is loss of water as vapour from aerial parts.`,
      t`Most of it is **stomatal**; a little is cuticular or lenticular.`,
      t`Curtis called it a **necessary evil**.`,
    ],
    formal: [
      {
        title: "Why necessary",
        points: [
          t`Stomata must open for gas exchange.`,
          t`It creates transpiration pull for water and minerals.`,
          t`It cools the leaf.`,
        ],
      },
      {
        title: "Factors",
        points: [
          t`**Low atmospheric pressure** increases it.`,
          t`**High humidity** decreases it.`,
          t`Light, temperature and wind increase it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does a plant transpire less on a humid day?`,
      steps: [
        t`Humid air already holds much vapour.`,
        t`The vapour gradient from leaf to air falls.`,
      ],
      answer: t`The gradient is smaller`,
    },
    visualSpec: t`A leaf section with water vapour leaving through an open stoma.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says it decreases rapidly.",
      remediation: "Low pressure speeds evaporation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says it decreases slowly.",
      remediation: "Low pressure speeds evaporation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says unaffected.",
      remediation: "Pressure does affect evaporation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks the cuticle.",
      remediation: "Cuticular loss is small.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks lenticels.",
      remediation: "Lenticular loss is tiny.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks bark.",
      remediation: "Bark is mostly impermeable.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says always harmful.",
      remediation: "It has uses too.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says useless.",
      remediation: "It pulls water up.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says cooling only.",
      remediation: "It also drives uptake.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says it increases.",
      remediation: "Humidity reduces the gradient.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says no change.",
      remediation: "Humidity reduces the gradient.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says it stops.",
      remediation: "It only slows.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks guttation.",
      remediation: "Guttation loses liquid drops.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks soil evaporation.",
      remediation: "That is not from the plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks bleeding.",
      remediation: "Bleeding is sap from wounds.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(9)" },
      stem: t`When atmospheric pressure is low, the rate of transpiration`,
      verify: { kind: "value", inputs: {  }, params: { q: "pressure" } },
      options: [
        { key: "A", text: t`is unaffected`, correct: false, misconceptionId: "C05-M3", value: "unaffected" },
        { key: "B", text: t`increases`, correct: true, value: "increases" },
        { key: "C", text: t`decreases rapidly`, correct: false, misconceptionId: "C05-M1", value: "decreases_rapidly" },
        { key: "D", text: t`decreases slowly`, correct: false, misconceptionId: "C05-M2", value: "decreases_slowly" },
      ],
      solution: {
        steps: [
          t`Vapour leaves the leaf faster.`,
          t`Increases.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q3(4)" },
      stem: t`Most transpiration happens through the`,
      verify: { kind: "value", inputs: {  }, params: { q: "route" } },
      options: [
        { key: "A", text: t`cuticle`, correct: false, misconceptionId: "C05-M4", value: "cuticle" },
        { key: "B", text: t`lenticels`, correct: false, misconceptionId: "C05-M5", value: "lenticels" },
        { key: "C", text: t`bark`, correct: false, misconceptionId: "C05-M6", value: "bark" },
        { key: "D", text: t`stomata`, correct: true, value: "stomata" },
      ],
      solution: {
        steps: [
          t`Pores on the leaf.`,
          t`Stomata.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q3(7)" },
      stem: t`Transpiration is called a necessary evil because`,
      verify: { kind: "value", inputs: {  }, params: { q: "evil" } },
      options: [
        { key: "A", text: t`stomata must stay open for gas exchange, so water is lost`, correct: true, value: "gas_exchange" },
        { key: "B", text: t`it is always harmful`, correct: false, misconceptionId: "C05-M7", value: "always_harmful" },
        { key: "C", text: t`it has no use`, correct: false, misconceptionId: "C05-M8", value: "useless" },
        { key: "D", text: t`its only use is cooling`, correct: false, misconceptionId: "C05-M9", value: "cooling_only" },
      ],
      solution: {
        steps: [
          t`Open stomata lose water.`,
          t`Gas exchange needs them open.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`In very humid air, the rate of transpiration`,
      verify: { kind: "value", inputs: {  }, params: { q: "humidity" } },
      options: [
        { key: "A", text: t`stays the same`, correct: false, misconceptionId: "C05-M11", value: "unchanged" },
        { key: "B", text: t`stops completely`, correct: false, misconceptionId: "C05-M12", value: "stops" },
        { key: "C", text: t`decreases`, correct: true, value: "decreases" },
        { key: "D", text: t`increases`, correct: false, misconceptionId: "C05-M10", value: "increases" },
      ],
      solution: {
        steps: [
          t`Humid air lowers the gradient.`,
          t`Decreases.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2025 Q. 30" },
      stem: t`The loss of water as vapour from the aerial parts of a plant is`,
      verify: { kind: "value", inputs: {  }, params: { q: "vapour" } },
      options: [
        { key: "A", text: t`transpiration`, correct: true, value: "transpiration" },
        { key: "B", text: t`guttation`, correct: false, misconceptionId: "C05-M13", value: "guttation" },
        { key: "C", text: t`evaporation from the soil`, correct: false, misconceptionId: "C05-M14", value: "soil_evaporation" },
        { key: "D", text: t`bleeding`, correct: false, misconceptionId: "C05-M15", value: "bleeding" },
      ],
      solution: {
        steps: [
          t`Vapour loss from aerial parts.`,
          t`Transpiration.`,
        ],
      },
    },
  ],
};
