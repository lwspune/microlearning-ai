import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Put an unripe banana in a bag with a ripe one, and it ripens faster. What is the ripe one giving off?`,
    reveal: t`Ethylene, a gaseous hormone. Ripe fruit releases it, and it speeds the ripening of fruit nearby.`,
  },
  explanation: {
    intuition: [
      t`**Cytokinins** promote cell division.`,
      t`**Ethylene** is the only gaseous hormone.`,
      t`**Abscisic acid (ABA)** is the main growth inhibitor.`,
    ],
    formal: [
      {
        title: "Cytokinins and ethylene",
        points: [
          t`Cytokinins drive cell division and **delay senescence**.`,
          t`In tissue culture, high cytokinin : auxin gives **shoots**; low gives **roots**.`,
          t`Ethylene ripens bananas, apples and mangoes; ethephon releases it.`,
        ],
      },
      {
        title: "Abscisic acid",
        points: [
          t`The **stress hormone**: in drought it closes stomata by moving $\ce{K+}$ out of guard cells.`,
          t`It causes **dormancy** of buds and seeds.`,
          t`It causes **abscission** (fall) of leaves and fruits.`,
        ],
      },
    ],
    worked: {
      prompt: t`A crop faces drought. Which hormone rises, and what does it do?`,
      steps: [
        t`Drought is a stress.`,
        t`The stress hormone closes stomata to save water.`,
      ],
      answer: t`ABA, closing stomata`,
    },
    visualSpec: t`A callus in two dishes: shoots on high cytokinin, roots on high auxin.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks auxin.",
      remediation: "Auxin elongates cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks cytokinin.",
      remediation: "Cytokinin delays ageing.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks gibberellin.",
      remediation: "Gibberellin enlarges fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks cell division.",
      remediation: "ABA inhibits cell division.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks shoot elongation.",
      remediation: "That is gibberellin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks cell elongation.",
      remediation: "That is auxin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks ethylene.",
      remediation: "Ethylene ripens fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks auxin.",
      remediation: "Auxin promotes growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks cytokinin.",
      remediation: "Cytokinin promotes growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks roots.",
      remediation: "Roots form when auxin is high.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks callus only.",
      remediation: "Callus stays at balanced levels.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks ripe fruit.",
      remediation: "That is ethylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks ethylene.",
      remediation: "Ethylene hastens senescence.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks abscisic acid.",
      remediation: "ABA hastens senescence.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks auxin.",
      remediation: "Cytokinin is the anti-ageing one.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(4)" },
      stem: t`Bananas are ripened artificially with`,
      verify: { kind: "value", inputs: {  }, params: { q: "banana" } },
      options: [
        { key: "A", text: t`Gibberellin`, correct: false, misconceptionId: "C05-M3", value: "gibberellin_h" },
        { key: "B", text: t`Ethylene`, correct: true, value: "ethylene_h" },
        { key: "C", text: t`Auxin`, correct: false, misconceptionId: "C05-M1", value: "auxin_h" },
        { key: "D", text: t`Cytokinin`, correct: false, misconceptionId: "C05-M2", value: "cytokinin_h" },
      ],
      solution: {
        steps: [
          t`The gaseous ripening hormone.`,
          t`Ethylene.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q1(3)" },
      stem: t`Abscisic acid controls`,
      verify: { kind: "value", inputs: {  }, params: { q: "aba" } },
      options: [
        { key: "A", text: t`cell division`, correct: false, misconceptionId: "C05-M4", value: "cell_division" },
        { key: "B", text: t`shoot elongation`, correct: false, misconceptionId: "C05-M5", value: "shoot_elongation" },
        { key: "C", text: t`cell elongation and wall formation`, correct: false, misconceptionId: "C05-M6", value: "cell_elongation_wall" },
        { key: "D", text: t`leaf fall and dormancy`, correct: true, value: "leaf_fall_dormancy" },
      ],
      solution: {
        steps: [
          t`ABA causes abscission and dormancy.`,
          t`Leaf fall and dormancy.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q2(4)" },
      stem: t`The plant stress hormone, which closes stomata in drought, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "stress" } },
      options: [
        { key: "A", text: t`Abscisic acid`, correct: true, value: "abscisic_h" },
        { key: "B", text: t`Ethylene`, correct: false, misconceptionId: "C05-M7", value: "ethylene_h" },
        { key: "C", text: t`Auxin`, correct: false, misconceptionId: "C05-M8", value: "auxin_h" },
        { key: "D", text: t`Cytokinin`, correct: false, misconceptionId: "C05-M9", value: "cytokinin_h" },
      ],
      solution: {
        steps: [
          t`It closes stomata under stress.`,
          t`Abscisic acid.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2024 Q. 23" },
      stem: t`In tissue culture, a high cytokinin to auxin ratio makes the callus form`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`only undifferentiated callus`, correct: false, misconceptionId: "C05-M11", value: "callus_only" },
        { key: "B", text: t`ripe fruit`, correct: false, misconceptionId: "C05-M12", value: "fruit_ripens" },
        { key: "C", text: t`shoot buds`, correct: true, value: "shoot_buds" },
        { key: "D", text: t`roots`, correct: false, misconceptionId: "C05-M10", value: "roots_form" },
      ],
      solution: {
        steps: [
          t`High cytokinin to auxin.`,
          t`Shoot buds.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2024 Q. 23" },
      stem: t`Leaves sprayed with this hormone stay green longer, because it delays senescence:`,
      verify: { kind: "value", inputs: {  }, params: { q: "senescence" } },
      options: [
        { key: "A", text: t`Cytokinin`, correct: true, value: "cytokinin_h" },
        { key: "B", text: t`Ethylene`, correct: false, misconceptionId: "C05-M13", value: "ethylene_h" },
        { key: "C", text: t`Abscisic acid`, correct: false, misconceptionId: "C05-M14", value: "abscisic_h" },
        { key: "D", text: t`Auxin`, correct: false, misconceptionId: "C05-M15", value: "auxin_h" },
      ],
      solution: {
        steps: [
          t`It delays senescence.`,
          t`Cytokinin.`,
        ],
      },
    },
  ],
};
