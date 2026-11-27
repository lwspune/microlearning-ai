import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`After a salty snack you pass less urine, and it is darker. What changed in your kidneys?`,
    reveal: t`ADH made the collecting ducts take back more water, so the urine became small and concentrated.`,
  },
  explanation: {
    intuition: [
      t`The **loop of Henle** makes the medulla salty by the countercurrent mechanism.`,
      t`**ADH** decides how much water the collecting duct takes back.`,
      t`More water taken back means less urine, more concentrated.`,
    ],
    formal: [
      {
        title: "Loop of Henle and ADH",
        points: [
          t`The thin **descending limb** is permeable to water, so water leaves into the medulla.`,
          t`The thick **ascending limb** is impermeable to water but pumps out Na⁺ and Cl⁻: the filtrate turns **hypotonic**.`,
          t`ADH makes the last part of the DCT and the collecting duct permeable to water.`,
        ],
      },
      {
        title: "Urine and its colour",
        points: [
          t`With ADH, urine is small in volume and concentrated, with a higher specific gravity.`,
          t`Without ADH, large volumes of dilute urine pass: **diabetes insipidus**.`,
          t`Urine is pale yellow from **urochrome**, from haemoglobin breakdown; urea and uric acid are colourless.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does urine formed with more ADH have a higher specific gravity?`,
      steps: [
        t`ADH lets the collecting duct reabsorb more water.`,
        t`The same solutes sit in less water.`,
      ],
      answer: t`The urine is more concentrated.`,
    },
    visualSpec: t`A loop of Henle: water arrows out of the descending limb, Na⁺ and Cl⁻ arrows out of the ascending limb.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks PCT.",
      remediation: "In the PCT the filtrate stays isotonic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks DCT.",
      remediation: "In the DCT water leaves under ADH, concentrating urine.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks collecting tubule.",
      remediation: "Water leaves there, concentrating urine.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says it decreases.",
      remediation: "More ADH means more water reabsorbed.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says it is unaffected.",
      remediation: "Less water in urine raises its concentration.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says it stabilises.",
      remediation: "ADH raises the specific gravity.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks PCT.",
      remediation: "ADH acts on the last part of the DCT and the collecting duct.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks descending limb.",
      remediation: "It is permeable to water without ADH.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks Bowman's capsule.",
      remediation: "The capsule filters; it does not reabsorb water.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says it is permeable to water.",
      remediation: "That is the descending limb.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says salts cannot leave.",
      remediation: "It pumps out Na⁺ and Cl⁻.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says ADH acts on it.",
      remediation: "ADH acts on the DCT's last part and the collecting duct.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks urea.",
      remediation: "Urea is colourless.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks uric acid.",
      remediation: "Uric acid is colourless.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks cholesterol.",
      remediation: "Cholesterol is not normally in urine.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(M)" },
      stem: t`Hypotonic filtrate is formed in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "hypotonic" } },
      options: [
        { key: "A", text: t`DCT`, correct: false, misconceptionId: "C04-M2", value: "dct_t" },
        { key: "B", text: t`collecting tubule`, correct: false, misconceptionId: "C04-M3", value: "collecting_tubule" },
        { key: "C", text: t`loop of Henle`, correct: true, value: "henle_loop" },
        { key: "D", text: t`PCT`, correct: false, misconceptionId: "C04-M1", value: "pct_t" },
      ],
      solution: {
        steps: [
          t`The ascending limb removes salt, not water.`,
          t`Loop of Henle.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(E)" },
      stem: t`If the level of ADH increases, the specific gravity of urine`,
      verify: { kind: "value", inputs: {  }, params: { q: "gravity" } },
      options: [
        { key: "A", text: t`decreases`, correct: false, misconceptionId: "C04-M4", value: "decreases_t" },
        { key: "B", text: t`remains unaffected`, correct: false, misconceptionId: "C04-M5", value: "unaffected_t" },
        { key: "C", text: t`stabilises`, correct: false, misconceptionId: "C04-M6", value: "stabilises_t" },
        { key: "D", text: t`increases`, correct: true, value: "increases_t" },
      ],
      solution: {
        steps: [
          t`ADH: more water reabsorbed.`,
          t`It increases.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q2(B)" },
      stem: t`Anitaji passes a large volume of dilute urine many times a day. The part of the nephron whose water permeability has changed is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "permeability" } },
      options: [
        { key: "A", text: t`descending limb of Henle's loop`, correct: false, misconceptionId: "C04-M8", value: "descending_limb" },
        { key: "B", text: t`Bowman's capsule`, correct: false, misconceptionId: "C04-M9", value: "bowman_capsule" },
        { key: "C", text: t`last part of the DCT and the collecting duct`, correct: true, value: "dct_collecting" },
        { key: "D", text: t`PCT`, correct: false, misconceptionId: "C04-M7", value: "pct_t" },
      ],
      solution: {
        steps: [
          t`ADH acts on the DCT's last part and the collecting duct.`,
          t`That part's permeability changed.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`The ascending limb of the loop of Henle`,
      verify: { kind: "value", inputs: {  }, params: { q: "ascending" } },
      options: [
        { key: "A", text: t`is freely permeable to water`, correct: false, misconceptionId: "C04-M10", value: "permeable_water" },
        { key: "B", text: t`lets neither water nor salts leave`, correct: false, misconceptionId: "C04-M11", value: "impermeable_salts" },
        { key: "C", text: t`becomes permeable to water under ADH`, correct: false, misconceptionId: "C04-M12", value: "adh_permeable" },
        { key: "D", text: t`is impermeable to water but pumps out Na⁺ and Cl⁻`, correct: true, value: "impermeable_pumps" },
      ],
      solution: {
        steps: [
          t`Water stays in; Na⁺ and Cl⁻ are pumped out.`,
          t`Impermeable to water, pumps out salts.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(L)" },
      stem: t`The yellow colour of urine is due to`,
      verify: { kind: "value", inputs: {  }, params: { q: "colour" } },
      options: [
        { key: "A", text: t`cholesterol`, correct: false, misconceptionId: "C04-M15", value: "cholesterol_t" },
        { key: "B", text: t`urochrome`, correct: true, value: "urochrome_t" },
        { key: "C", text: t`urea`, correct: false, misconceptionId: "C04-M13", value: "urea_w" },
        { key: "D", text: t`uric acid`, correct: false, misconceptionId: "C04-M14", value: "uric_acid_w" },
      ],
      solution: {
        steps: [
          t`The pigment comes from haemoglobin breakdown.`,
          t`Urochrome.`,
        ],
      },
    },
  ],
};
