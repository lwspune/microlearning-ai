import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Burning sugar in a flame and respiring it both give CO₂ and water. Why does only respiration give you ATP?`,
    reveal: t`Respiration releases the energy in small enzyme steps, so much of it can be caught as ATP.`,
  },
  explanation: {
    intuition: [
      t`A flame releases all the energy at once, as heat and light.`,
      t`Respiration releases it **step by step**, using enzymes.`,
      t`The steps also supply building blocks for the cell.`,
    ],
    formal: [
      {
        title: "Why steps help",
        points: [
          t`A higher proportion of the energy is used to make ATP.`,
          t`Enzymes can be enhanced or inhibited, so the rate fits the cell's need.`,
          t`In the ETS, stepwise release prevents damage to the cells.`,
        ],
      },
      {
        title: "Amphibolic pathway",
        points: [
          t`**Amphibolic**: a pathway with both catabolism and anabolism.`,
          t`Carbohydrates, fats and proteins all enter through acetyl CoA.`,
          t`Acetyl CoA makes fatty acids; α-ketoglutarate, glutamic acid; oxaloacetate, aspartic acid.`,
        ],
      },
    ],
    worked: {
      prompt: t`Oxaloacetate is drawn off from the Krebs cycle. Which amino acid can it make?`,
      steps: [
        t`The book pairs oxaloacetate with aspartic acid.`,
        t`So the cycle also builds.`,
      ],
      answer: t`Aspartic acid`,
    },
    visualSpec: t`Energy released as one tall drop for combustion beside a staircase of small drops for respiration.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says faster.",
      remediation: "The point is more ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says more heat.",
      remediation: "Steps capture more as ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says no enzymes.",
      remediation: "Each step needs an enzyme.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says one step.",
      remediation: "That is combustion.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says direct union.",
      remediation: "Hydrogen goes to oxygen at the end.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says no ATP.",
      remediation: "Respiration makes ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says only catabolic.",
      remediation: "Intermediates also build molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says only anabolic.",
      remediation: "It also oxidises acetyl CoA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Mixes up the terms.",
      remediation: "The Krebs cycle is aerobic only.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks α-ketoglutarate.",
      remediation: "That makes glutamic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks oxaloacetate.",
      remediation: "That makes aspartic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks fumarate.",
      remediation: "The book lists acetyl CoA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says carbohydrates only.",
      remediation: "Fats and proteins enter too.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Leaves out proteins.",
      remediation: "Amino acids enter too.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says proteins only.",
      remediation: "Glucose is the main substrate.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(J)" },
      stem: t`An advantage of the stepwise release of energy in respiration is that`,
      verify: { kind: "value", inputs: {  }, params: { q: "stepwise" } },
      options: [
        { key: "A", text: t`more heat is made to warm the body`, correct: false, misconceptionId: "C07-M2", value: "more_heat" },
        { key: "B", text: t`no enzymes are needed`, correct: false, misconceptionId: "C07-M3", value: "no_enzymes" },
        { key: "C", text: t`a higher proportion of the energy is stored as ATP`, correct: true, value: "more_atp" },
        { key: "D", text: t`the energy is released faster`, correct: false, misconceptionId: "C07-M1", value: "faster_release" },
      ],
      solution: {
        steps: [
          t`Small steps.`,
          t`More energy stored as ATP.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q5(A)" },
      stem: t`Which is true of respiration but not of combustion?`,
      verify: { kind: "value", inputs: {  }, params: { q: "combustion" } },
      options: [
        { key: "A", text: t`It releases all the energy in a single step`, correct: false, misconceptionId: "C07-M4", value: "single_step" },
        { key: "B", text: t`The substance unites directly with oxygen`, correct: false, misconceptionId: "C07-M5", value: "direct_oxygen" },
        { key: "C", text: t`No ATP is formed`, correct: false, misconceptionId: "C07-M6", value: "no_atp" },
        { key: "D", text: t`It is controlled by enzymes and goes in many steps`, correct: true, value: "enzyme_stepwise" },
      ],
      solution: {
        steps: [
          t`Enzymes and many steps.`,
          t`Respiration.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(M)" },
      stem: t`The Krebs cycle is called an amphibolic pathway because`,
      verify: { kind: "value", inputs: {  }, params: { q: "amphibolic" } },
      options: [
        { key: "A", text: t`it runs in both aerobic and anaerobic respiration`, correct: false, misconceptionId: "C07-M9", value: "both_resp" },
        { key: "B", text: t`it takes part in both catabolism and anabolism`, correct: true, value: "both_ana_cata" },
        { key: "C", text: t`it only breaks substances down`, correct: false, misconceptionId: "C07-M7", value: "only_catabolic" },
        { key: "D", text: t`it only builds new substances`, correct: false, misconceptionId: "C07-M8", value: "only_anabolic" },
      ],
      solution: {
        steps: [
          t`Breaks down and builds up.`,
          t`Both catabolism and anabolism.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(L)" },
      stem: t`Which compound is drawn off from the respiratory pathway to make fatty acids?`,
      verify: { kind: "value", inputs: {  }, params: { q: "fatty_build" } },
      options: [
        { key: "A", text: t`acetyl CoA`, correct: true, value: "acetyl_coa" },
        { key: "B", text: t`α-ketoglutarate`, correct: false, misconceptionId: "C07-M10", value: "akg_t" },
        { key: "C", text: t`oxaloacetate`, correct: false, misconceptionId: "C07-M11", value: "oxaloacetate_t" },
        { key: "D", text: t`fumarate`, correct: false, misconceptionId: "C07-M12", value: "fumarate_t" },
      ],
      solution: {
        steps: [
          t`Precursor for synthesis.`,
          t`Acetyl CoA.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(L)" },
      stem: t`The Krebs cycle is a common oxidative pathway for`,
      verify: { kind: "value", inputs: {  }, params: { q: "common_path" } },
      options: [
        { key: "A", text: t`carbohydrates only`, correct: false, misconceptionId: "C07-M13", value: "carbs_only" },
        { key: "B", text: t`carbohydrates and fats only`, correct: false, misconceptionId: "C07-M14", value: "carbs_fats" },
        { key: "C", text: t`proteins only`, correct: false, misconceptionId: "C07-M15", value: "proteins_only" },
        { key: "D", text: t`carbohydrates, fats and proteins`, correct: true, value: "all_three" },
      ],
      solution: {
        steps: [
          t`All enter via acetyl CoA.`,
          t`Carbohydrates, fats and proteins.`,
        ],
      },
    },
  ],
};
