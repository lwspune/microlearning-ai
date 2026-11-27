import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`One glucose molecule can pay for 38 ATP. Where does each of those ATP come from?`,
    reveal: t`From adding up each stage: glycolysis 8, the link reaction 6 and the Krebs cycle 24.`,
  },
  explanation: {
    intuition: [
      t`Count the ATP each stage makes, directly or through NADH and $\ce{FADH2}$.`,
      t`Take 3 ATP per NADH and 2 per $\ce{FADH2}$.`,
      t`The **respiratory quotient** compares gases to tell the substrate.`,
    ],
    formal: [
      {
        title: "Balance sheet",
        points: [
          t`40 ATP are formed and 2 are used: net **38** per glucose.`,
          t`Glycolysis: 2 ATP + 2 NADH, net **8**; Krebs cycle: 6 NADH, 2 $\ce{FADH2}$, 2 GTP, **24**.`,
          t`The actual number can vary with physiological conditions and the respiratory substrate.`,
        ],
      },
      {
        title: "Respiratory quotient",
        points: [
          t`RQ = volume of $\ce{CO2}$ released ÷ volume of $\ce{O2}$ consumed.`,
          t`Its value depends on the respiratory substrate.`,
          t`For fats it is less than 1, mostly about **0.7**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A tissue gives out 14 mL $\ce{CO2}$ and takes in 20 mL $\ce{O2}$. Find its RQ.`,
      steps: [
        t`RQ = $\ce{CO2}$ ÷ $\ce{O2}$.`,
        t`$14 \div 20 = 0.7$.`,
      ],
      answer: t`0.7`,
    },
    visualSpec: t`A stacked bar: glycolysis 8, link reaction 6, Krebs cycle 24, making 38 ATP.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Gives 2.",
      remediation: "The 2 NADH also give 6 ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives 6.",
      remediation: "Each NADH gives 3, not 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives 10.",
      remediation: "Use the net 2 ATP, not the 4 formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Counts 1 each.",
      remediation: "NADH gives 3 and FADH₂ 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Gives FADH₂ 3.",
      remediation: t`$\ce{FADH2}$ gives 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Forgets GTP.",
      remediation: "Each turn also makes 1 GTP.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Gives 40.",
      remediation: "That is gross; subtract the 2 used.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Adds 2.",
      remediation: "ATP used is subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Gives 2.",
      remediation: "2 is the ATP used, not the gain: 40 − 2 = 38.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Inverts it.",
      remediation: t`$\ce{CO2}$ goes on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Subtracts.",
      remediation: "RQ is a ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Divides by the total.",
      remediation: t`Divide by $\ce{O2}$ only.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says 1.",
      remediation: "That is for carbohydrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says more than 1.",
      remediation: t`Fats need more $\ce{O2}$ than the $\ce{CO2}$ they give.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says zero.",
      remediation: t`Fats do release $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q5(B)" },
      stem: t`Glycolysis gives a net 2 ATP and 2 $\ce{NADH + H+}$ per glucose. In aerobic oxidation, how many ATP does glycolysis add in all?`,
      verify: { kind: "value", inputs: { a: "2", n: "2" }, params: { q: "glyco_atp" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C05-M3", value: "10" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C05-M1", value: "2" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C05-M2", value: "6" },
      ],
      solution: {
        steps: [
          t`$2 + 2 \times 3$.`,
          t`8 ATP.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q5(B)" },
      stem: t`Each turn of the Krebs cycle gives 3 $\ce{NADH + H+}$, 1 $\ce{FADH2}$ and 1 GTP. One glucose gives 2 turns. How many ATP is that?`,
      verify: { kind: "value", inputs: { t: "2" }, params: { q: "krebs_atp" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C05-M4", value: "10" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C05-M5", value: "26" },
        { key: "C", text: t`$22$`, correct: false, misconceptionId: "C05-M6", value: "22" },
        { key: "D", text: t`$24$`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`Per turn $9 + 2 + 1 = 12$.`,
          t`$2 \times 12 = 24$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q2(B)" },
      stem: t`The balance sheet for one glucose shows 40 ATP formed and 2 ATP used. What is the net gain?`,
      verify: { kind: "value", inputs: { p: "40", c: "2" }, params: { q: "net_atp" } },
      options: [
        { key: "A", text: t`$38$`, correct: true, value: "38" },
        { key: "B", text: t`$40$`, correct: false, misconceptionId: "C05-M7", value: "40" },
        { key: "C", text: t`$42$`, correct: false, misconceptionId: "C05-M8", value: "42" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C05-M9", value: "2" },
      ],
      solution: {
        steps: [
          t`$40 - 2$.`,
          t`38 ATP.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(E)" },
      stem: t`Germinating seeds take in 10 mL of $\ce{O2}$ and give out 7 mL of $\ce{CO2}$. What is their RQ?`,
      verify: { kind: "value", inputs: { c: "7", o: "10" }, params: { q: "rq" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C05-M11", value: "3" },
        { key: "B", text: t`$\frac{7}{17}$`, correct: false, misconceptionId: "C05-M12", value: "7/17" },
        { key: "C", text: t`$\frac{7}{10}$`, correct: true, value: "7/10" },
        { key: "D", text: t`$\frac{10}{7}$`, correct: false, misconceptionId: "C05-M10", value: "10/7" },
      ],
      solution: {
        steps: [
          t`$7 \div 10$.`,
          t`RQ = 0.7.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(E)" },
      stem: t`The RQ of fats is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rq_fat" } },
      options: [
        { key: "A", text: t`less than 1, about 0.7`, correct: true, value: "less_than_one" },
        { key: "B", text: t`exactly 1`, correct: false, misconceptionId: "C05-M13", value: "equal_one" },
        { key: "C", text: t`more than 1`, correct: false, misconceptionId: "C05-M14", value: "more_than_one" },
        { key: "D", text: t`zero, as no $\ce{CO2}$ is released`, correct: false, misconceptionId: "C05-M15", value: "zero_t" },
      ],
      solution: {
        steps: [
          t`Less $\ce{CO2}$ than $\ce{O2}$.`,
          t`Less than 1, about 0.7.`,
        ],
      },
    },
  ],
};
