import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`You eat rice at lunch and run in the evening. How does the rice end up moving your legs?`,
    reveal: t`Your cells oxidise its glucose in respiration, and the energy released is held in ATP, which the muscles spend.`,
  },
  explanation: {
    intuition: [
      t`**Respiration** oxidises food in living cells to release energy.`,
      t`The energy is not used at once: it is stored as **ATP**.`,
      t`It is a **catabolic** process: complex substances become simple ones.`,
    ],
    formal: [
      {
        title: "Respiratory substrates",
        points: [
          t`Complex organic substances oxidised in respiration to release energy.`,
          t`Carbohydrates, fats and proteins can all be used.`,
          t`The most common substrate is **glucose**.`,
        ],
      },
      {
        title: "Respiration and photosynthesis",
        points: [
          t`Respiration oxidises glucose; photosynthesis reduces $\ce{CO2}$ to glucose.`,
          t`Aerobic respiration takes in $\ce{O2}$ and gives out $\ce{CO2}$.`,
          t`ATP forms by **substrate-level** and **oxidative phosphorylation**, not photophosphorylation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the gas used and the gas given out in aerobic respiration.`,
      steps: [
        t`Glucose is oxidised, so oxygen is used.`,
        t`Its carbon leaves as $\ce{CO2}$.`,
      ],
      answer: t`$\ce{O2}$ used, $\ce{CO2}$ given out`,
    },
    visualSpec: t`Glucose and O₂ entering a cell, CO₂, water and ATP leaving it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks fat.",
      remediation: "Fats are used, but glucose is most common.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks protein.",
      remediation: "Proteins are used less often.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks oxygen.",
      remediation: "Oxygen oxidises; it is not the substrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks the products.",
      remediation: t`$\ce{CO2}$ and water are end products.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says glucose only.",
      remediation: "Fats and proteins are also used.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks enzymes.",
      remediation: "Enzymes act on the substrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks photophosphorylation.",
      remediation: "That is in photosynthesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says oxidative only.",
      remediation: "Glycolysis forms ATP at substrate level.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says substrate level only.",
      remediation: "Most ATP comes from the ETS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says stored in glucose.",
      remediation: "That is photosynthesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says all heat.",
      remediation: "Much of it is stored as ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says from oxygen.",
      remediation: "The energy is in glucose's bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Reverses the gases.",
      remediation: "That is photosynthesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says no gases.",
      remediation: "Aerobic respiration uses oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Forgets CO₂.",
      remediation: t`$\ce{CO2}$ is given out.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(F)" },
      stem: t`The most common respiratory substrate is`,
      verify: { kind: "value", inputs: {  }, params: { q: "common" } },
      options: [
        { key: "A", text: t`glucose`, correct: true, value: "glucose_s" },
        { key: "B", text: t`fat`, correct: false, misconceptionId: "C01-M1", value: "fat_s" },
        { key: "C", text: t`protein`, correct: false, misconceptionId: "C01-M2", value: "protein_s" },
        { key: "D", text: t`oxygen`, correct: false, misconceptionId: "C01-M3", value: "oxygen_s" },
      ],
      solution: {
        steps: [
          t`Most respiration oxidises glucose.`,
          t`Glucose.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(F)" },
      stem: t`Respiratory substrates are`,
      verify: { kind: "value", inputs: {  }, params: { q: "substrate" } },
      options: [
        { key: "A", text: t`complex organic substances oxidised to release energy`, correct: true, value: "organic_oxidised" },
        { key: "B", text: t`simple substances such as $\ce{CO2}$ and water`, correct: false, misconceptionId: "C01-M4", value: "inorganic_products" },
        { key: "C", text: t`glucose only, never fats or proteins`, correct: false, misconceptionId: "C01-M5", value: "glucose_only" },
        { key: "D", text: t`the enzymes that carry out respiration`, correct: false, misconceptionId: "C01-M6", value: "enzymes_t" },
      ],
      solution: {
        steps: [
          t`Oxidised to release energy.`,
          t`Complex organic substances.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q4(A)" },
      stem: t`In respiration, ATP is formed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "phosphorylation" } },
      options: [
        { key: "A", text: t`oxidative phosphorylation only`, correct: false, misconceptionId: "C01-M8", value: "oxidative_only" },
        { key: "B", text: t`substrate-level phosphorylation only`, correct: false, misconceptionId: "C01-M9", value: "substrate_only" },
        { key: "C", text: t`substrate-level and oxidative phosphorylation`, correct: true, value: "substrate_oxidative" },
        { key: "D", text: t`photophosphorylation`, correct: false, misconceptionId: "C01-M7", value: "photophosphorylation_t" },
      ],
      solution: {
        steps: [
          t`Glycolysis and Krebs: substrate level; ETS: oxidative.`,
          t`Substrate-level and oxidative.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q4(A)" },
      stem: t`In respiration, the energy of glucose is`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`released and made available as ATP`, correct: true, value: "released_atp" },
        { key: "B", text: t`stored in newly made glucose`, correct: false, misconceptionId: "C01-M10", value: "stored_glucose" },
        { key: "C", text: t`all lost as heat at once`, correct: false, misconceptionId: "C01-M11", value: "all_heat" },
        { key: "D", text: t`supplied by oxygen, not by glucose`, correct: false, misconceptionId: "C01-M12", value: "from_oxygen" },
      ],
      solution: {
        steps: [
          t`Energy is released.`,
          t`It is held as ATP.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q4(A)" },
      stem: t`In aerobic respiration, a cell`,
      verify: { kind: "value", inputs: {  }, params: { q: "gases" } },
      options: [
        { key: "A", text: t`takes in $\ce{O2}$ and gives out $\ce{CO2}$`, correct: true, value: "o2_in_co2_out" },
        { key: "B", text: t`takes in $\ce{CO2}$ and gives out $\ce{O2}$`, correct: false, misconceptionId: "C01-M13", value: "co2_in_o2_out" },
        { key: "C", text: t`exchanges no gases`, correct: false, misconceptionId: "C01-M14", value: "no_exchange" },
        { key: "D", text: t`takes in $\ce{O2}$ and gives out nothing`, correct: false, misconceptionId: "C01-M15", value: "o2_in_only" },
      ],
      solution: {
        steps: [
          t`Oxygen oxidises glucose.`,
          t`$\ce{O2}$ in, $\ce{CO2}$ out.`,
        ],
      },
    },
  ],
};
