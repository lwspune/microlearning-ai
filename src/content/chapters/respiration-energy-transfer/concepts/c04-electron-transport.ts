import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Most of the ATP from glucose is not made in glycolysis or the Krebs cycle. Where is it made?`,
    reveal: t`On the inner mitochondrial membrane, where electrons from NADH and FADH₂ flow to oxygen and drive ATP synthesis.`,
  },
  explanation: {
    intuition: [
      t`NADH and $\ce{FADH2}$ carry hydrogen from the earlier stages.`,
      t`The **ETS** passes their electrons down a chain to oxygen.`,
      t`The energy released is used to make ATP.`,
    ],
    formal: [
      {
        title: "The chain",
        points: [
          t`Complexes I to V sit on the **inner mitochondrial membrane**.`,
          t`Complex I oxidises NADH, complex II $\ce{FADH2}$; electrons go to ubiquinone.`,
          t`Complex III passes them to **cytochrome c**; complex IV hands them to **oxygen**, forming water.`,
        ],
      },
      {
        title: "Making ATP",
        points: [
          t`Protons released into the outer chamber flow back through $\ce{F0}$ of complex V.`,
          t`$\ce{F1}$ makes ATP from ADP and phosphate: **oxidative phosphorylation** (chemiosmosis, Peter Mitchell).`,
          t`Each $\ce{NADH + H+}$ gives 3 ATP; each $\ce{FADH2}$ gives 2 ATP.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many ATP come from oxidising 3 $\ce{NADH + H+}$?`,
      steps: [
        t`Each gives 3 ATP.`,
        t`$3 \times 3 = 9$.`,
      ],
      answer: t`9`,
    },
    visualSpec: t`A membrane with complexes I to IV in a row, electrons passing to O₂, and protons returning through complex V.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks the outer membrane.",
      remediation: "The carriers are on the inner one.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks the matrix.",
      remediation: "The Krebs cycle is there.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks the cytoplasm.",
      remediation: "Glycolysis is there.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Picks $\ce{NAD+}$.`,
      remediation: "NAD⁺ carries hydrogen early on.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks cytochrome c.",
      remediation: "It passes electrons to complex IV.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks water.",
      remediation: "Water is the product.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks NADH.",
      remediation: "NADH is oxidised, not made.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks water.",
      remediation: "Water forms at complex IV.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks GTP.",
      remediation: "GTP forms in the Krebs cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks ubiquinone.",
      remediation: "It carries to complex III.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: t`Picks $\mathrm{a_3}$.`,
      remediation: "It is part of complex IV.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks NADH dehydrogenase.",
      remediation: "That is complex I.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Swaps the yields.",
      remediation: "NADH gives 3, FADH₂ gives 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Gives 3 each.",
      remediation: t`$\ce{FADH2}$ gives only 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Gives 2 each.",
      remediation: "NADH gives 3.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(C)" },
      stem: t`The site of the ETS in mitochondrial respiration is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "site" } },
      options: [
        { key: "A", text: t`mitochondrial matrix`, correct: false, misconceptionId: "C04-M2", value: "matrix_s" },
        { key: "B", text: t`cytoplasm`, correct: false, misconceptionId: "C04-M3", value: "cytoplasm_s" },
        { key: "C", text: t`inner mitochondrial membrane`, correct: true, value: "inner_membrane" },
        { key: "D", text: t`outer mitochondrial membrane`, correct: false, misconceptionId: "C04-M1", value: "outer_membrane" },
      ],
      solution: {
        steps: [
          t`Carriers on the membrane.`,
          t`Inner mitochondrial membrane.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(D)" },
      stem: t`The terminal electron acceptor in aerobic respiration is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acceptor" } },
      options: [
        { key: "A", text: t`$\ce{NAD+}$`, correct: false, misconceptionId: "C04-M4", value: "nad_plus" },
        { key: "B", text: t`cytochrome c`, correct: false, misconceptionId: "C04-M5", value: "cytochrome_c" },
        { key: "C", text: t`water`, correct: false, misconceptionId: "C04-M6", value: "water_t" },
        { key: "D", text: t`molecular oxygen`, correct: true, value: "oxygen_mol" },
      ],
      solution: {
        steps: [
          t`Complex IV passes electrons on.`,
          t`Molecular oxygen.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q2(D)" },
      stem: t`$\ce{F1}$–$\ce{F0}$ particles take part in the synthesis of`,
      verify: { kind: "value", inputs: {  }, params: { q: "f0f1" } },
      options: [
        { key: "A", text: t`water`, correct: false, misconceptionId: "C04-M8", value: "water_t" },
        { key: "B", text: t`GTP`, correct: false, misconceptionId: "C04-M9", value: "gtp_t" },
        { key: "C", text: t`ATP`, correct: true, value: "atp_t" },
        { key: "D", text: t`$\ce{NADH}$`, correct: false, misconceptionId: "C04-M7", value: "nadh_t" },
      ],
      solution: {
        steps: [
          t`Complex V.`,
          t`ATP.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(K)" },
      stem: t`The small mobile carrier that takes electrons from complex III to complex IV is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mobile" } },
      options: [
        { key: "A", text: t`ubiquinone (coenzyme Q)`, correct: false, misconceptionId: "C04-M10", value: "ubiquinone_t" },
        { key: "B", text: t`cytochrome $\mathrm{a_3}$`, correct: false, misconceptionId: "C04-M11", value: "cytochrome_a3" },
        { key: "C", text: t`NADH dehydrogenase`, correct: false, misconceptionId: "C04-M12", value: "nadh_dehydrogenase" },
        { key: "D", text: t`cytochrome c`, correct: true, value: "cytochrome_c" },
      ],
      solution: {
        steps: [
          t`Iron protein between III and IV.`,
          t`Cytochrome c.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(K)" },
      stem: t`In the ETS, 2 $\ce{NADH + H+}$ and 1 $\ce{FADH2}$ are oxidised. How many ATP are formed?`,
      verify: { kind: "value", inputs: { n: "2", f: "1" }, params: { q: "yield" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C04-M15", value: "6" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C04-M13", value: "7" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C04-M14", value: "9" },
      ],
      solution: {
        steps: [
          t`$2 \times 3 + 1 \times 2$.`,
          t`8 ATP.`,
        ],
      },
    },
  ],
};
