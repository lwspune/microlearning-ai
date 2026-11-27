import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`After a hard sprint your legs ache, and a sealed dough rises. What links the two?`,
    reveal: t`Both are anaerobic: muscle makes lactic acid, and yeast makes ethanol and CO₂.`,
  },
  explanation: {
    intuition: [
      t`Without enough oxygen, cells still run **glycolysis**.`,
      t`Pyruvic acid is then changed to lactic acid or ethanol.`,
      t`This frees $\ce{NAD+}$ so glycolysis can continue.`,
    ],
    formal: [
      {
        title: "In man and yeast",
        points: [
          t`Skeletal muscle in vigorous exercise: pyruvic acid $\to$ **lactic acid**, causing fatigue.`,
          t`Yeast: pyruvate $\to$ **acetaldehyde** + $\ce{CO2}$, then ethanol.`,
          t`Ethanol build-up can kill the yeast; fermentation is used in bakeries and distilleries.`,
        ],
      },
      {
        title: "Less energy",
        points: [
          t`Glucose is only **incompletely oxidised**.`,
          t`NADH reduces pyruvic acid instead of going to the ETS.`,
          t`Net gain: only **2 ATP** per glucose, against 38 aerobically.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many ATP does yeast gain from fermenting 3 glucose molecules?`,
      steps: [
        t`Net gain is 2 ATP per glucose.`,
        t`$3 \times 2 = 6$.`,
      ],
      answer: t`6`,
    },
    visualSpec: t`Two arrows from pyruvic acid: one to lactic acid (muscle), one to acetaldehyde, then ethanol + CO₂ (yeast).`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks ethanol.",
      remediation: "Ethanol is made by yeast.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks acetyl CoA.",
      remediation: "That needs oxygen and mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Picks $\ce{CO2}$ and water.`,
      remediation: "That is complete oxidation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Skips to ethanol.",
      remediation: "Acetaldehyde comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks lactic acid.",
      remediation: "Muscle makes lactic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks acetyl CoA.",
      remediation: "That is aerobic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says oxygen used.",
      remediation: "The lime water level did not rise.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says alcohol.",
      remediation: "Alcohol is detected by smell.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says water.",
      remediation: t`Lime water tests for $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says no glycolysis.",
      remediation: "Glycolysis still runs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says more ATP used.",
      remediation: "Both use 2 ATP in glycolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says no NADH.",
      remediation: "NADH forms but reduces pyruvic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Gives 4 each.",
      remediation: "4 is gross; 2 are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Gives 38 each.",
      remediation: "That is aerobic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Gives 8 each.",
      remediation: "NADH does not go to the ETS here.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(A)" },
      stem: t`In human skeletal muscle during vigorous exercise, pyruvic acid is reduced to`,
      verify: { kind: "value", inputs: {  }, params: { q: "muscle" } },
      options: [
        { key: "A", text: t`ethanol`, correct: false, misconceptionId: "C06-M1", value: "ethanol_t" },
        { key: "B", text: t`acetyl CoA`, correct: false, misconceptionId: "C06-M2", value: "acetyl_coa" },
        { key: "C", text: t`$\ce{CO2}$ and water`, correct: false, misconceptionId: "C06-M3", value: "co2_water" },
        { key: "D", text: t`lactic acid`, correct: true, value: "lactic_acid" },
      ],
      solution: {
        steps: [
          t`Vigorous exercise.`,
          t`Lactic acid.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(G)" },
      stem: t`In alcoholic fermentation by yeast, pyruvate is first converted to`,
      verify: { kind: "value", inputs: {  }, params: { q: "yeast" } },
      options: [
        { key: "A", text: t`acetaldehyde`, correct: true, value: "acetaldehyde_t" },
        { key: "B", text: t`ethanol`, correct: false, misconceptionId: "C06-M4", value: "ethanol_t" },
        { key: "C", text: t`lactic acid`, correct: false, misconceptionId: "C06-M5", value: "lactic_acid" },
        { key: "D", text: t`acetyl CoA`, correct: false, misconceptionId: "C06-M6", value: "acetyl_coa" },
      ],
      solution: {
        steps: [
          t`Decarboxylation first.`,
          t`Acetaldehyde.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(I)" },
      stem: t`In the yeast experiment, the tube is sealed with oil and its gas bubbles into lime water. The lime water turns milky. This shows that`,
      verify: { kind: "value", inputs: {  }, params: { q: "limewater" } },
      options: [
        { key: "A", text: t`$\ce{CO2}$ is released`, correct: true, value: "co2_released" },
        { key: "B", text: t`$\ce{O2}$ is used`, correct: false, misconceptionId: "C06-M7", value: "o2_used" },
        { key: "C", text: t`alcohol is formed`, correct: false, misconceptionId: "C06-M8", value: "alcohol_formed" },
        { key: "D", text: t`water is formed`, correct: false, misconceptionId: "C06-M9", value: "water_formed" },
      ],
      solution: {
        steps: [
          t`Milky lime water.`,
          t`$\ce{CO2}$ released.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(B)" },
      stem: t`Less energy is produced in anaerobic respiration than in aerobic respiration because`,
      verify: { kind: "value", inputs: {  }, params: { q: "less" } },
      options: [
        { key: "A", text: t`no $\ce{NADH + H+}$ is formed`, correct: false, misconceptionId: "C06-M12", value: "no_nadh" },
        { key: "B", text: t`glucose is only partly oxidised, so energy stays locked in lactic acid or ethanol`, correct: true, value: "incomplete_oxidation" },
        { key: "C", text: t`glycolysis does not take place`, correct: false, misconceptionId: "C06-M10", value: "no_glycolysis" },
        { key: "D", text: t`more ATP is used up in anaerobic respiration`, correct: false, misconceptionId: "C06-M11", value: "more_atp_used" },
      ],
      solution: {
        steps: [
          t`Incomplete oxidation.`,
          t`Energy stays in the products.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q4(B)" },
      stem: t`Muscle cells break down 5 glucose molecules anaerobically. What is the net ATP gain?`,
      verify: { kind: "value", inputs: { g: "5" }, params: { q: "anaerobic_atp" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C06-M13", value: "20" },
        { key: "C", text: t`$190$`, correct: false, misconceptionId: "C06-M14", value: "190" },
        { key: "D", text: t`$40$`, correct: false, misconceptionId: "C06-M15", value: "40" },
      ],
      solution: {
        steps: [
          t`2 per glucose.`,
          t`$5 \times 2 = 10$.`,
        ],
      },
    },
  ],
};
