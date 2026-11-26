import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`The same chemical, phenol, is dabbed on a cut in one bottle and poured down drains in another. How can it be both safe and harsh?`,
    reveal: t`Concentration decides. Dilute phenol is a gentle antiseptic; concentrated phenol is a strong disinfectant.`,
  },
  explanation: {
    intuition: [
      t`**Antiseptics** kill or stop microbes and are safe on living tissue.`,
      t`**Disinfectants** kill microbes on objects and would harm tissue.`,
      t`Concentration can turn one into the other.`,
      t`Examples: Dettol, tincture of iodine, turmeric, dilute phenol.`,
    ],
    formal: [
      {
        title: "Antiseptics",
        points: [
          t`Dettol: chloroxylenol and terpineol.`,
          t`Tincture of iodine: 2–3 % iodine in alcohol-water.`,
          t`Turmeric has antiseptic compounds; dilute phenol (about 0.2 %) is antiseptic.`,
        ],
      },
      {
        title: "Disinfectants",
        points: [
          t`Concentrated phenol (about 1 %) disinfects floors and drains.`,
          t`Chlorine compounds disinfect water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is bleach (sodium hypochlorite) an antiseptic or a disinfectant?`,
      steps: [
        t`It harms living tissue.`,
        t`It is used on surfaces and water.`,
      ],
      answer: t`A disinfectant`,
    },
    visualSpec: t`Dilute a disinfectant step by step until it is gentle enough for skin.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Limits antiseptics to floors.",
      remediation: "Antiseptics are for living tissue.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Confuses them with disinfectants.",
      remediation: "Antiseptics are mild enough for skin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Calls them oral antibiotics.",
      remediation: "Antiseptics are applied externally.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks phenol is never antiseptic.",
      remediation: "Dilute phenol is antiseptic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Reverses the dilution.",
      remediation: "Dilute is antiseptic; concentrated is disinfectant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Calls phenol an antibiotic.",
      remediation: "Phenol is applied externally.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says iodine in water only.",
      remediation: "Iodine dissolves poorly in water; alcohol is used.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says iodine in oil.",
      remediation: "Tincture means an alcohol-water solution.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says potassium iodide alone.",
      remediation: "It contains iodine itself.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks it only colours the wound.",
      remediation: "Turmeric's compounds act against microbes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Calls it an antibiotic pill.",
      remediation: "It is applied to wounds as an antiseptic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Calls it a floor disinfectant.",
      remediation: "It is gentle enough for skin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says phenol and iodine.",
      remediation: "Dettol is chloroxylenol and terpineol.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says aspirin.",
      remediation: "Aspirin is an analgesic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says BHT.",
      remediation: "BHT is a food antioxidant.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.4 (A)" },
      stem: t`An antiseptic is a substance that`,
      verify: { kind: "value", inputs: {  }, params: { q: "antiseptic" } },
      options: [
        { key: "A", text: t`is used only to clean floors`, correct: false, misconceptionId: "C06-M1", value: "floors_only" },
        { key: "B", text: t`kills or stops microbes and is safe on living tissue`, correct: true, value: "safe_on_tissue" },
        { key: "C", text: t`is an antibiotic taken by mouth`, correct: false, misconceptionId: "C06-M3", value: "oral_antibiotic" },
        { key: "D", text: t`is too strong to apply to skin`, correct: false, misconceptionId: "C06-M2", value: "kills_on_drains" },
      ],
      solution: {
        steps: [
          t`Antiseptics are mild.`,
          t`Safe on living tissue.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.2 (E)" },
      stem: t`Phenol can act as an antiseptic or a disinfectant. What decides which?`,
      verify: { kind: "value", inputs: {  }, params: { q: "phenol" } },
      options: [
        { key: "A", text: t`dilution makes it a disinfectant`, correct: false, misconceptionId: "C06-M5", value: "dilute_disinfectant" },
        { key: "B", text: t`nothing: phenol is never an antiseptic`, correct: false, misconceptionId: "C06-M4", value: "never_antiseptic" },
        { key: "C", text: t`concentration: dilute phenol is antiseptic, concentrated phenol disinfectant`, correct: true, value: "concentration_decides" },
        { key: "D", text: t`phenol is really an antibiotic`, correct: false, misconceptionId: "C06-M6", value: "antibiotic" },
      ],
      solution: {
        steps: [
          t`Dilute phenol is antiseptic.`,
          t`Concentrated phenol is disinfectant.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (F)" },
      stem: t`Tincture of iodine is`,
      verify: { kind: "value", inputs: {  }, params: { q: "iodine" } },
      options: [
        { key: "A", text: t`potassium iodide solution alone`, correct: false, misconceptionId: "C06-M9", value: "ki_only" },
        { key: "B", text: t`iodine dissolved in water only`, correct: false, misconceptionId: "C06-M7", value: "iodine_water" },
        { key: "C", text: t`iodine dissolved in oil`, correct: false, misconceptionId: "C06-M8", value: "iodine_oil" },
        { key: "D", text: t`2–3 % iodine in an alcohol-water mixture`, correct: true, value: "iodine_alcohol_water" },
      ],
      solution: {
        steps: [
          t`Iodine dissolves in alcohol-water.`,
          t`2–3 % iodine.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.2 (F)" },
      stem: t`Turmeric powder can be used as an antiseptic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "turmeric" } },
      options: [
        { key: "A", text: t`its compounds kill or slow microbes on the skin`, correct: true, value: "kills_microbes" },
        { key: "B", text: t`it is a floor disinfectant`, correct: false, misconceptionId: "C06-M12", value: "floor_disinfectant" },
        { key: "C", text: t`it only colours the wound`, correct: false, misconceptionId: "C06-M10", value: "colours_only" },
        { key: "D", text: t`it is an antibiotic pill`, correct: false, misconceptionId: "C06-M11", value: "antibiotic_pill" },
      ],
      solution: {
        steps: [
          t`Turmeric contains antimicrobial compounds.`,
          t`It works as an antiseptic.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (D)" },
      stem: t`Dettol is a mixture of`,
      verify: { kind: "value", inputs: {  }, params: { q: "dettol" } },
      options: [
        { key: "A", text: t`phenol and iodine`, correct: false, misconceptionId: "C06-M13", value: "phenol_iodine" },
        { key: "B", text: t`chloroxylenol and terpineol`, correct: true, value: "chloroxylenol_terpineol" },
        { key: "C", text: t`aspirin and water`, correct: false, misconceptionId: "C06-M14", value: "aspirin" },
        { key: "D", text: t`BHT and alcohol`, correct: false, misconceptionId: "C06-M15", value: "bht" },
      ],
      solution: {
        steps: [
          t`Dettol's active parts.`,
          t`Chloroxylenol and terpineol.`,
        ],
      },
    },
  ],
};
