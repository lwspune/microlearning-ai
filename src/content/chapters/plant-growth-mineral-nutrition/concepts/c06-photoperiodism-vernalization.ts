import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Chrysanthemums flower in autumn; wheat flowers in summer. How do plants know the season?`,
    reveal: t`By measuring the night. The length of day and night (the photoperiod) tells them when to flower.`,
  },
  explanation: {
    intuition: [
      t`Garner and Allard found that day length controls flowering: **photoperiodism**.`,
      t`The **critical photoperiod** is the day length above or below which a plant flowers.`,
      t`Some plants also need cold to flower: **vernalization**.`,
    ],
    formal: [
      {
        title: "Three groups",
        points: [
          t`**Short day plants**: flower when days are shorter than critical; really **long night** plants: a flash of light at night stops them. Tobacco, soybean.`,
          t`**Long day plants**: need longer days than critical. Wheat, pea, radish, spinach.`,
          t`**Day neutral plants**: flower regardless: tomato, cotton, cucumber, sunflower.`,
        ],
      },
      {
        title: "Vernalization",
        points: [
          t`Chilling seeds or seedlings (about 1–6 °C) to hasten flowering.`,
          t`Cereals and crucifers need it.`,
          t`**Gibberellins** can replace the cold treatment.`,
        ],
      },
    ],
    worked: {
      prompt: t`A short day plant gets a flash of light in the middle of its long night. Will it flower?`,
      steps: [
        t`Its critical period is the dark.`,
        t`The flash breaks the night.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`A 24-hour bar of day and night for short day, long day and day neutral plants.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks oxygen.",
      remediation: "Oxygen is needed for all growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks water.",
      remediation: "Water is needed for all growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks minerals.",
      remediation: "Minerals are needed for all growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks the light period.",
      remediation: "The night is what counts.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks UV rays.",
      remediation: "UV plays no part.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks light and UV.",
      remediation: "The night is what counts.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks cucumber.",
      remediation: "Cucumber is day neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks tomato.",
      remediation: "Tomato is day neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks cotton.",
      remediation: "Cotton is day neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks tobacco.",
      remediation: "Tobacco is a short day plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks tomato.",
      remediation: "Tomato is day neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks soybean.",
      remediation: "Soybean is a short day plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks auxin.",
      remediation: "Auxin elongates cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks cytokinin.",
      remediation: "Cytokinin drives division.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks ethylene.",
      remediation: "Ethylene ripens fruit.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(5)" },
      stem: t`Flowering in plants is stimulated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "flowering" } },
      options: [
        { key: "A", text: t`adequate oxygen`, correct: false, misconceptionId: "C06-M1", value: "adequate_oxygen" },
        { key: "B", text: t`adequate water`, correct: false, misconceptionId: "C06-M2", value: "adequate_water" },
        { key: "C", text: t`water and minerals`, correct: false, misconceptionId: "C06-M3", value: "water_minerals" },
        { key: "D", text: t`a definite photoperiod`, correct: true, value: "definite_photoperiod" },
      ],
      solution: {
        steps: [
          t`Day length controls flowering.`,
          t`A definite photoperiod.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(6)" },
      stem: t`For short day plants, the critical period is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "critical" } },
      options: [
        { key: "A", text: t`dark period (night)`, correct: true, value: "dark_period" },
        { key: "B", text: t`light period`, correct: false, misconceptionId: "C06-M4", value: "light_period" },
        { key: "C", text: t`UV rays`, correct: false, misconceptionId: "C06-M5", value: "uv_rays" },
        { key: "D", text: t`light and UV rays`, correct: false, misconceptionId: "C06-M6", value: "light_and_uv" },
      ],
      solution: {
        steps: [
          t`They are long night plants.`,
          t`The dark period.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 1(ii)" },
      stem: t`Which of these is NOT a day neutral plant?`,
      verify: { kind: "value", inputs: {  }, params: { q: "not_dnp" } },
      options: [
        { key: "A", text: t`Tobacco`, correct: true, value: "tobacco_p" },
        { key: "B", text: t`Cucumber`, correct: false, misconceptionId: "C06-M7", value: "cucumber_p" },
        { key: "C", text: t`Tomato`, correct: false, misconceptionId: "C06-M8", value: "tomato_p" },
        { key: "D", text: t`Cotton`, correct: false, misconceptionId: "C06-M9", value: "cotton_p" },
      ],
      solution: {
        steps: [
          t`Tobacco needs long nights.`,
          t`Tobacco.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 2(iv)" },
      stem: t`Which of these is a long day plant?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ldp" } },
      options: [
        { key: "A", text: t`Soybean`, correct: false, misconceptionId: "C06-M12", value: "soybean_p" },
        { key: "B", text: t`Wheat`, correct: true, value: "wheat_p" },
        { key: "C", text: t`Tobacco`, correct: false, misconceptionId: "C06-M10", value: "tobacco_p" },
        { key: "D", text: t`Tomato`, correct: false, misconceptionId: "C06-M11", value: "tomato_p" },
      ],
      solution: {
        steps: [
          t`Wheat flowers in long days.`,
          t`Wheat.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(1)" },
      stem: t`Which hormone can replace vernalization?`,
      verify: { kind: "value", inputs: {  }, params: { q: "replace" } },
      options: [
        { key: "A", text: t`Gibberellin`, correct: true, value: "gibberellin_h" },
        { key: "B", text: t`Auxin`, correct: false, misconceptionId: "C06-M13", value: "auxin_h" },
        { key: "C", text: t`Cytokinin`, correct: false, misconceptionId: "C06-M14", value: "cytokinin_h" },
        { key: "D", text: t`Ethylene`, correct: false, misconceptionId: "C06-M15", value: "ethylene_h" },
      ],
      solution: {
        steps: [
          t`Gibberellins replace chilling.`,
          t`Gibberellins.`,
        ],
      },
    },
  ],
};
