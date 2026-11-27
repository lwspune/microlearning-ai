import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Pyruvic acid leaves glycolysis still holding most of glucose's energy. Where is the rest of it taken out?`,
    reveal: t`In the mitochondria: the link reaction and the Krebs cycle strip off its carbon as CO₂ and its hydrogen onto NADH and FADH₂.`,
  },
  explanation: {
    intuition: [
      t`Pyruvic acid enters the **mitochondrion**.`,
      t`It becomes **acetyl CoA**, which feeds a cycle.`,
      t`The cycle ends where it began, with **oxaloacetate**.`,
    ],
    formal: [
      {
        title: "Link reaction",
        points: [
          t`Pyruvic acid (3C) is oxidatively decarboxylated by the pyruvate dehydrogenase complex.`,
          t`The 2C part joins coenzyme A: **acetyl CoA**.`,
          t`One $\ce{CO2}$ and one $\ce{NADH + H+}$ form per pyruvic acid.`,
        ],
      },
      {
        title: "Krebs cycle",
        points: [
          t`In the matrix, acetyl CoA (2C) + oxaloacetate (4C) give **citrate** (6C).`,
          t`Four dehydrogenations give $\ce{NADH + H+}$ and $\ce{FADH2}$; two steps release $\ce{CO2}$.`,
          t`Succinyl CoA $\to$ succinate makes one GTP: **substrate-level phosphorylation**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Fatty acids are broken by β-oxidation into acetyl CoA. Which stage do they skip?`,
      steps: [
        t`Glycolysis only makes pyruvic acid from sugar.`,
        t`Acetyl CoA goes straight to the Krebs cycle.`,
      ],
      answer: t`Glycolysis`,
    },
    visualSpec: t`A ring of ten steps from citrate round to oxaloacetate, with CO₂, NADH, FADH₂ and GTP leaving it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks ribosomes.",
      remediation: "Ribosomes make proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks grana.",
      remediation: "Grana are in chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks the ER.",
      remediation: "The ER does not run the cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says glucose.",
      remediation: "Glucose first becomes pyruvic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says oxaloacetic acid.",
      remediation: "Acetyl CoA joins it later.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says citric acid.",
      remediation: "Citrate is made from acetyl CoA.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks α-KG step.",
      remediation: "That is oxidative decarboxylation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks succinate step.",
      remediation: t`That forms $\ce{FADH2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks fumarate step.",
      remediation: "That is a hydration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks isocitrate.",
      remediation: "Isocitrate comes after citrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks malate.",
      remediation: "Malate is near the end.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks α-ketoglutarate.",
      remediation: "That is 5C, made later.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks Krebs cycle.",
      remediation: "Acetyl CoA enters it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks ETS.",
      remediation: "NADH and FADH₂ still need it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks terminal oxidation.",
      remediation: "Oxygen still accepts electrons.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q1(A)" },
      stem: t`The reactions of the TCA cycle occur in`,
      verify: { kind: "value", inputs: {  }, params: { q: "site" } },
      options: [
        { key: "A", text: t`grana`, correct: false, misconceptionId: "C03-M2", value: "grana_s" },
        { key: "B", text: t`endoplasmic reticulum`, correct: false, misconceptionId: "C03-M3", value: "er_s" },
        { key: "C", text: t`mitochondria`, correct: true, value: "mitochondria_s" },
        { key: "D", text: t`ribosomes`, correct: false, misconceptionId: "C03-M1", value: "ribosomes_s" },
      ],
      solution: {
        steps: [
          t`Matrix of the mitochondria.`,
          t`Mitochondria.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q2(A)" },
      stem: t`Acetyl CoA is formed from coenzyme A and`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetyl" } },
      options: [
        { key: "A", text: t`oxaloacetic acid`, correct: false, misconceptionId: "C03-M5", value: "oxaloacetic_acid" },
        { key: "B", text: t`citric acid`, correct: false, misconceptionId: "C03-M6", value: "citric_acid" },
        { key: "C", text: t`pyruvic acid`, correct: true, value: "pyruvic_acid" },
        { key: "D", text: t`glucose`, correct: false, misconceptionId: "C03-M4", value: "glucose_s" },
      ],
      solution: {
        steps: [
          t`Link reaction.`,
          t`Pyruvic acid.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q1(C)" },
      stem: t`Which step of the Krebs cycle has substrate-level phosphorylation?`,
      verify: { kind: "value", inputs: {  }, params: { q: "slp" } },
      options: [
        { key: "A", text: t`α-ketoglutarate $\to$ succinyl CoA`, correct: false, misconceptionId: "C03-M7", value: "akg_succinyl" },
        { key: "B", text: t`Succinate $\to$ fumarate`, correct: false, misconceptionId: "C03-M8", value: "succinate_fumarate" },
        { key: "C", text: t`Fumarate $\to$ malate`, correct: false, misconceptionId: "C03-M9", value: "fumarate_malate" },
        { key: "D", text: t`Succinyl CoA $\to$ succinate`, correct: true, value: "succinyl_succinate" },
      ],
      solution: {
        steps: [
          t`GTP from the thioester bond.`,
          t`Succinyl CoA $\to$ succinate.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q6" },
      stem: t`In the first step of the Krebs cycle, acetyl CoA condenses with oxaloacetate to form`,
      verify: { kind: "value", inputs: {  }, params: { q: "condense" } },
      options: [
        { key: "A", text: t`malate (4C)`, correct: false, misconceptionId: "C03-M11", value: "malate_t" },
        { key: "B", text: t`α-ketoglutarate (5C)`, correct: false, misconceptionId: "C03-M12", value: "akg_t" },
        { key: "C", text: t`citrate (6C)`, correct: true, value: "citrate_6c" },
        { key: "D", text: t`isocitrate (6C)`, correct: false, misconceptionId: "C03-M10", value: "isocitrate_t" },
      ],
      solution: {
        steps: [
          t`Condensation step.`,
          t`Citrate (6C).`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(N)" },
      stem: t`Which step of aerobic respiration is left out when fatty acids are the respiratory substrate?`,
      verify: { kind: "value", inputs: {  }, params: { q: "fatty" } },
      options: [
        { key: "A", text: t`Glycolysis`, correct: true, value: "glycolysis_s" },
        { key: "B", text: t`Krebs cycle`, correct: false, misconceptionId: "C03-M13", value: "krebs_s" },
        { key: "C", text: t`Electron transport chain`, correct: false, misconceptionId: "C03-M14", value: "ets_s" },
        { key: "D", text: t`Terminal oxidation`, correct: false, misconceptionId: "C03-M15", value: "terminal_oxidation" },
      ],
      solution: {
        steps: [
          t`β-oxidation gives acetyl CoA.`,
          t`Glycolysis is left out.`,
        ],
      },
    },
  ],
};
