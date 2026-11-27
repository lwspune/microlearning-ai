import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A few bacteria on fresh agar become millions overnight, but never cover the whole Earth. What stops them?`,
    reveal: t`Resources run out: food and space are limited, so growth slows and levels off.`,
  },
  explanation: {
    intuition: [
      t`With unlimited resources, a population grows **exponentially**.`,
      t`With limited resources, it grows **logistically**.`,
      t`The limit is the **carrying capacity**, $K$.`,
    ],
    formal: [
      {
        title: "Exponential",
        points: [
          t`$\dfrac{dN}{dt} = rN$: faster and faster.`,
          t`A **J-shaped** curve.`,
          t`Seen in bacteria on fresh agar: a doubling population after $t$ doublings is $N \times 2^t$.`,
        ],
      },
      {
        title: "Logistic",
        points: [
          t`$\dfrac{dN}{dt} = rN\left(\dfrac{K - N}{K}\right)$: slows as $N$ nears $K$.`,
          t`An **S-shaped** (sigmoid) curve: lag, log, then a plateau.`,
          t`Also called Verhulst-Pearl logistic growth.`,
        ],
      },
    ],
    worked: {
      prompt: t`A population of 50 doubles every day with unlimited food. How many after 4 days?`,
      steps: [
        t`$50 \times 2^4$.`,
        t`$50 \times 16$.`,
      ],
      answer: t`800`,
    },
    visualSpec: t`A J-shaped exponential curve and an S-shaped logistic curve levelling at K, on one set of axes.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks logistic.",
      remediation: "Resources are not yet limited.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks Verhulst-Pearl.",
      remediation: "That is logistic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks zero growth.",
      remediation: "The bacteria are multiplying.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks S-shaped.",
      remediation: "That is logistic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks a flat line.",
      remediation: "Numbers rise.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks bell-shaped.",
      remediation: "Numbers do not fall.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says zero.",
      remediation: "It levels at K.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says no limit.",
      remediation: "That is exponential.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says birth rate.",
      remediation: "It levels at K.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks J-shaped.",
      remediation: "That is exponential.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks a straight line.",
      remediation: "Growth slows at the top.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks bell-shaped.",
      remediation: "Numbers do not fall.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Multiplies by 2t.",
      remediation: "Doubling compounds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Multiplies by t.",
      remediation: "Doubling compounds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Counts one doubling too few.",
      remediation: t`3 hours give $2^3$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q1(5)" },
      stem: t`Bacteria on a newly inoculated agar plate show`,
      verify: { kind: "value", inputs: {  }, params: { q: "agar" } },
      options: [
        { key: "A", text: t`Verhulst-Pearl logistic growth`, correct: false, misconceptionId: "C04-M2", value: "verhulst_g" },
        { key: "B", text: t`zero growth`, correct: false, misconceptionId: "C04-M3", value: "zero_g" },
        { key: "C", text: t`exponential growth`, correct: true, value: "exponential_g" },
        { key: "D", text: t`logistic growth`, correct: false, misconceptionId: "C04-M1", value: "logistic_g" },
      ],
      solution: {
        steps: [
          t`Unlimited resources.`,
          t`Exponential growth.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2026 Q. 1(vi)" },
      stem: t`Exponential growth, plotted against time, gives a curve that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "j" } },
      options: [
        { key: "A", text: t`S-shaped`, correct: false, misconceptionId: "C04-M4", value: "s_shaped" },
        { key: "B", text: t`a flat line`, correct: false, misconceptionId: "C04-M5", value: "flat_line" },
        { key: "C", text: t`bell-shaped`, correct: false, misconceptionId: "C04-M6", value: "bell_shaped" },
        { key: "D", text: t`J-shaped`, correct: true, value: "j_shaped" },
      ],
      solution: {
        steps: [
          t`Faster and faster.`,
          t`J-shaped.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q4(1)" },
      stem: t`In logistic growth the population levels off at the`,
      verify: { kind: "value", inputs: {  }, params: { q: "levels" } },
      options: [
        { key: "A", text: t`no limit: it keeps rising`, correct: false, misconceptionId: "C04-M8", value: "no_limit" },
        { key: "B", text: t`birth rate`, correct: false, misconceptionId: "C04-M9", value: "birth_rate_level" },
        { key: "C", text: t`carrying capacity (K) of the habitat`, correct: true, value: "carrying_capacity" },
        { key: "D", text: t`zero population`, correct: false, misconceptionId: "C04-M7", value: "zero_population" },
      ],
      solution: {
        steps: [
          t`The habitat's limit.`,
          t`Carrying capacity.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q4(1)" },
      stem: t`Logistic growth, plotted against time, gives a curve that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "s" } },
      options: [
        { key: "A", text: t`J-shaped`, correct: false, misconceptionId: "C04-M10", value: "j_shaped" },
        { key: "B", text: t`a straight line`, correct: false, misconceptionId: "C04-M11", value: "straight_line" },
        { key: "C", text: t`bell-shaped`, correct: false, misconceptionId: "C04-M12", value: "bell_shaped" },
        { key: "D", text: t`S-shaped (sigmoid)`, correct: true, value: "s_shaped" },
      ],
      solution: {
        steps: [
          t`Lag, log, plateau.`,
          t`S-shaped.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`A population of 100 bacteria doubles every hour with unlimited food. How many are there after 3 hours?`,
      verify: { kind: "value", inputs: { n: "100", t: "3" }, params: { q: "doubling" } },
      options: [
        { key: "A", text: t`$400$`, correct: false, misconceptionId: "C04-M15", value: "400" },
        { key: "B", text: t`$800$`, correct: true, value: "800" },
        { key: "C", text: t`$600$`, correct: false, misconceptionId: "C04-M13", value: "600" },
        { key: "D", text: t`$300$`, correct: false, misconceptionId: "C04-M14", value: "300" },
      ],
      solution: {
        steps: [
          t`$100 \times 2^3$.`,
          t`800.`,
        ],
      },
    },
  ],
};
