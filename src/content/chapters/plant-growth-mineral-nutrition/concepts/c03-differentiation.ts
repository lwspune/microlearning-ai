import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A cutting from a rose stem grows roots from tissue that was never root. How can mature stem cells change their fate?`,
    reveal: t`Plant cells can go back: mature cells can start dividing again and then mature into something new.`,
  },
  explanation: {
    intuition: [
      t`Cells from meristems mature into tissues: they **differentiate**.`,
      t`Mature cells can regain the power to divide.`,
      t`Plants can also change form to suit their surroundings.`,
    ],
    formal: [
      {
        title: "Three steps",
        points: [
          t`**Differentiation**: permanent change of meristem cells into mature cells.`,
          t`**Dedifferentiation**: mature cells regain the power to divide, as in interfascicular and cork cambium.`,
          t`**Redifferentiation**: those cells lose the power again and mature, as into cork or secondary xylem.`,
        ],
      },
      {
        title: "Plasticity",
        points: [
          t`**Plasticity**: forming different structures in response to the environment.`,
          t`Example: **heterophylly**, leaves of different shapes on one plant.`,
          t`Seen in cotton, coriander and larkspur, and in buttercup in water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Mature cortex cells start dividing to form cork cambium. Which step is this?`,
      steps: [
        t`Mature cells are regaining the power to divide.`,
        t`That is the reverse of differentiation.`,
      ],
      answer: t`Dedifferentiation`,
    },
    visualSpec: t`A cell cycle: meristem → mature cell → dividing again → mature again.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks dedifferentiation.",
      remediation: "That is regaining division.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks redifferentiation.",
      remediation: "That follows dedifferentiation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks plasticity.",
      remediation: "Plasticity is change of form.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks differentiation.",
      remediation: "These cells were already mature.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks redifferentiation.",
      remediation: "Those cells stop dividing.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks senescence.",
      remediation: "Senescence is ageing.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks dedifferentiation.",
      remediation: "That restores division.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks differentiation.",
      remediation: "These cells came from a secondary meristem.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks abscission.",
      remediation: "Abscission is shedding.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks differentiation.",
      remediation: "That is maturing cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks vernalization.",
      remediation: "That is cold-induced flowering.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks photoperiodism.",
      remediation: "That is day-length flowering.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks fruit ripening.",
      remediation: "Ripening is hormonal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks leaf fall.",
      remediation: "Leaf fall is abscission.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks bending to light.",
      remediation: "That is phototropism.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2024 Q. 12" },
      stem: t`The permanent change in structure and function of cells from the apical meristems, leading to maturity, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "differentiation" } },
      options: [
        { key: "A", text: t`redifferentiation`, correct: false, misconceptionId: "C03-M2", value: "redifferentiation_term" },
        { key: "B", text: t`plasticity`, correct: false, misconceptionId: "C03-M3", value: "plasticity_term" },
        { key: "C", text: t`differentiation`, correct: true, value: "differentiation_term" },
        { key: "D", text: t`dedifferentiation`, correct: false, misconceptionId: "C03-M1", value: "dedifferentiation_term" },
      ],
      solution: {
        steps: [
          t`Meristem cells mature for good.`,
          t`Differentiation.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q3(1)" },
      stem: t`Mature parenchyma cells regain the power to divide and form the interfascicular cambium. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cambium" } },
      options: [
        { key: "A", text: t`redifferentiation`, correct: false, misconceptionId: "C03-M5", value: "redifferentiation_term" },
        { key: "B", text: t`senescence`, correct: false, misconceptionId: "C03-M6", value: "senescence_term" },
        { key: "C", text: t`dedifferentiation`, correct: true, value: "dedifferentiation_term" },
        { key: "D", text: t`differentiation`, correct: false, misconceptionId: "C03-M4", value: "differentiation_term" },
      ],
      solution: {
        steps: [
          t`Mature cells divide again.`,
          t`Dedifferentiation.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q3(1)" },
      stem: t`Cells cut off by the cork cambium lose the power to divide and mature into cork cells. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cork" } },
      options: [
        { key: "A", text: t`dedifferentiation`, correct: false, misconceptionId: "C03-M7", value: "dedifferentiation_term" },
        { key: "B", text: t`differentiation`, correct: false, misconceptionId: "C03-M8", value: "differentiation_term" },
        { key: "C", text: t`abscission`, correct: false, misconceptionId: "C03-M9", value: "abscission_term" },
        { key: "D", text: t`redifferentiation`, correct: true, value: "redifferentiation_term" },
      ],
      solution: {
        steps: [
          t`Divided cells mature again.`,
          t`Redifferentiation.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 10" },
      stem: t`The ability of a plant to form different structures in response to its surroundings is`,
      verify: { kind: "value", inputs: {  }, params: { q: "plasticity" } },
      options: [
        { key: "A", text: t`vernalization`, correct: false, misconceptionId: "C03-M11", value: "vernalization_term" },
        { key: "B", text: t`photoperiodism`, correct: false, misconceptionId: "C03-M12", value: "photoperiodism_term" },
        { key: "C", text: t`plasticity`, correct: true, value: "plasticity_term" },
        { key: "D", text: t`differentiation`, correct: false, misconceptionId: "C03-M10", value: "differentiation_term" },
      ],
      solution: {
        steps: [
          t`Form changes with surroundings.`,
          t`Plasticity.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 10" },
      stem: t`An example of plasticity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "heterophylly" } },
      options: [
        { key: "A", text: t`leaves of different shapes on one cotton or coriander plant`, correct: true, value: "leaf_shapes" },
        { key: "B", text: t`the ripening of fruit`, correct: false, misconceptionId: "C03-M13", value: "fruit_ripening" },
        { key: "C", text: t`leaf fall in autumn`, correct: false, misconceptionId: "C03-M14", value: "autumn_leaf_fall" },
        { key: "D", text: t`a shoot bending towards light`, correct: false, misconceptionId: "C03-M15", value: "bending_to_light" },
      ],
      solution: {
        steps: [
          t`Different leaves on one plant.`,
          t`Heterophylly in cotton or coriander.`,
        ],
      },
    },
  ],
};
