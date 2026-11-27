import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A city's sewage is 99.9% water, yet it cannot be poured into a river. What must be removed first?`,
    reveal: t`The dissolved organic matter and germs, which microbes in treatment plants break down.`,
  },
  explanation: {
    intuition: [
      t`**Sewage** is 99.5–99.9% water with organic and inorganic matter and germs.`,
      t`It is treated in steps before release.`,
      t`Microbes can also turn wastes into fuel: **biogas**.`,
    ],
    formal: [
      {
        title: "Sewage treatment",
        points: [
          t`**Preliminary/primary**: screens, grit chambers and settling remove debris physically.`,
          t`**Secondary**: aerobic bacteria form **flocs** in aeration tanks, lowering BOD.`,
          t`The sludge is digested by anaerobic bacteria, releasing gases.`,
        ],
      },
      {
        title: "Biogas",
        points: [
          t`Cattle dung slurry is digested anaerobically.`,
          t`Hydrolysis, acidogenesis, then **methanogens** (*Methanobacterium*) make methane.`,
          t`Biogas: **methane 50–60%**, $\ce{CO2}$ 30–40%, $\ce{H2S}$ 0–3%.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is biogas made only in a sealed digester?`,
      steps: [
        t`Methanogens are anaerobic.`,
        t`Oxygen would stop them.`,
      ],
      answer: t`Methanogens need no oxygen`,
    },
    visualSpec: t`A sewage plant in stages: screens, settling tank, aeration tank, sludge digester.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks secondary.",
      remediation: "Secondary uses microbes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks final.",
      remediation: "This is the first step.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks amplification.",
      remediation: "That is not a treatment step.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says chlorine alone.",
      remediation: "Chlorine disinfects at the end.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says screens alone.",
      remediation: "Screens are primary.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says sand filters.",
      remediation: "Microbes do the work.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Picks $\ce{CO2}$.`,
      remediation: t`$\ce{CO2}$ is 30–40%.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Picks $\ce{H2S}$.`,
      remediation: t`$\ce{H2S}$ is a trace.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks hydrogen.",
      remediation: "Hydrogen is a trace.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Gives 30–40%.",
      remediation: t`That is $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Gives 0–3%.",
      remediation: t`That is $\ce{H2S}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Gives 90–100%.",
      remediation: "Biogas is a mixture.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says 50%.",
      remediation: "Sewage is almost all water.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says 75%.",
      remediation: "Sewage is almost all water.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says 10%.",
      remediation: "Sewage is almost all water.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(2)" },
      stem: t`Removing large floating debris, oil and grit from sewage is`,
      verify: { kind: "value", inputs: {  }, params: { q: "primary" } },
      options: [
        { key: "A", text: t`final treatment`, correct: false, misconceptionId: "C07-M2", value: "final_t" },
        { key: "B", text: t`amplification`, correct: false, misconceptionId: "C07-M3", value: "amplification_t" },
        { key: "C", text: t`primary treatment`, correct: true, value: "primary_t" },
        { key: "D", text: t`secondary treatment`, correct: false, misconceptionId: "C07-M1", value: "secondary_t" },
      ],
      solution: {
        steps: [
          t`Physical removal.`,
          t`Primary treatment.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q4(1)" },
      stem: t`Secondary treatment of sewage relies on`,
      verify: { kind: "value", inputs: {  }, params: { q: "secondary" } },
      options: [
        { key: "A", text: t`chlorine alone`, correct: false, misconceptionId: "C07-M4", value: "chlorine_only" },
        { key: "B", text: t`screens alone`, correct: false, misconceptionId: "C07-M5", value: "screens_only" },
        { key: "C", text: t`sand filters`, correct: false, misconceptionId: "C07-M6", value: "sand_filters" },
        { key: "D", text: t`aerobic bacteria forming flocs in aeration tanks`, correct: true, value: "aerobic_flocs" },
      ],
      solution: {
        steps: [
          t`Aeration tanks.`,
          t`Aerobic flocs.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 26" },
      stem: t`The main component of biogas is`,
      verify: { kind: "value", inputs: {  }, params: { q: "gas" } },
      options: [
        { key: "A", text: t`hydrogen`, correct: false, misconceptionId: "C07-M9", value: "hydrogen_gas" },
        { key: "B", text: t`methane`, correct: true, value: "methane_g" },
        { key: "C", text: t`$\ce{CO2}$`, correct: false, misconceptionId: "C07-M7", value: "co2_gas" },
        { key: "D", text: t`$\ce{H2S}$`, correct: false, misconceptionId: "C07-M8", value: "h2s_gas" },
      ],
      solution: {
        steps: [
          t`The fuel gas.`,
          t`Methane.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(2)" },
      stem: t`Methane makes up about what share of biogas?`,
      verify: { kind: "value", inputs: {  }, params: { q: "percent" } },
      options: [
        { key: "A", text: t`50–60%`, correct: true, value: "m50_60" },
        { key: "B", text: t`30–40%`, correct: false, misconceptionId: "C07-M10", value: "m30_40" },
        { key: "C", text: t`0–3%`, correct: false, misconceptionId: "C07-M11", value: "m0_3" },
        { key: "D", text: t`90–100%`, correct: false, misconceptionId: "C07-M12", value: "m90_100" },
      ],
      solution: {
        steps: [
          t`About half or more.`,
          t`50–60%.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q4(1)" },
      stem: t`Sewage is about what share water?`,
      verify: { kind: "value", inputs: {  }, params: { q: "water" } },
      options: [
        { key: "A", text: t`about 50%`, correct: false, misconceptionId: "C07-M13", value: "w50" },
        { key: "B", text: t`about 75%`, correct: false, misconceptionId: "C07-M14", value: "w75" },
        { key: "C", text: t`about 10%`, correct: false, misconceptionId: "C07-M15", value: "w10" },
        { key: "D", text: t`99.5–99.9%`, correct: true, value: "w99" },
      ],
      solution: {
        steps: [
          t`Mostly water.`,
          t`99.5–99.9%.`,
        ],
      },
    },
  ],
};
