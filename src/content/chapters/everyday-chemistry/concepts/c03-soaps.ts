import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Water alone will not wash oil off a plate. Add soap, and the oil lifts away. How does soap get water and oil to cooperate?`,
    reveal: t`Each soap molecule has an oil-loving tail and a water-loving head. The tails bury themselves in the grease and the heads pull it into the water.`,
  },
  explanation: {
    intuition: [
      t`Soaps are sodium or potassium salts of long-chain fatty acids.`,
      t`They are made by boiling fats with alkali: **saponification**.`,
      t`Their tails dissolve in grease; their heads in water.`,
      t`They fail in hard water, forming scum.`,
    ],
    formal: [
      {
        title: "Saponification",
        points: [
          t`Fat + 3NaOH → 3 soap + glycerol, an alkaline hydrolysis.`,
          t`Glycerol is propane-1,2,3-triol.`,
        ],
      },
      {
        title: "Cleansing",
        points: [
          t`Tails enter the grease; heads stay in water.`,
          t`Micelles carry grease away in the water.`,
          t`In hard water, $\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$ form insoluble scum.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is sodium stearate?`,
      steps: [
        t`Stearic acid is a long-chain fatty acid.`,
        t`Its sodium salt is a soap.`,
      ],
      answer: t`A soap`,
    },
    visualSpec: t`Surround an oil drop with soap molecules, tails in and heads out.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says oxidation.",
      remediation: "Saponification is alkaline hydrolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Says polymerisation.",
      remediation: "Soap forms by hydrolysis, not polymerisation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says free radicals.",
      remediation: "Hydroxide ions hydrolyse the ester.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Gives water as the by-product.",
      remediation: "Glycerol is released.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Gives ethanol.",
      remediation: "Fats are esters of glycerol.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Gives fatty acid and salt.",
      remediation: "In alkali, sodium salts (soap) and glycerol form.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Swaps heads and tails.",
      remediation: "Ionic heads face water; hydrocarbon tails enter grease.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks soap reacts with dirt.",
      remediation: "Soap traps grease physically in micelles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks water alone dissolves grease.",
      remediation: "Soap is needed to bridge water and grease.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Names propanol.",
      remediation: "Glycerol has three OH groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Names a diol.",
      remediation: "Three OH groups: -triol.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Calls glycerol an acid.",
      remediation: "It is an alcohol: propane-1,2,3-triol.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Blames cold water.",
      remediation: t`Dissolved $\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$ cause the scum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Blames fast dissolving.",
      remediation: "Soap is precipitated as scum.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Calls hard water acidic.",
      remediation: "Hard water contains calcium and magnesium salts.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (B)" },
      stem: t`Saponification is carried out by`,
      verify: { kind: "value", inputs: {  }, params: { q: "saponification" } },
      options: [
        { key: "A", text: t`polymerisation`, correct: false, misconceptionId: "C03-M2", value: "polymerisation" },
        { key: "B", text: t`free-radical formation`, correct: false, misconceptionId: "C03-M3", value: "free_radical" },
        { key: "C", text: t`oxidation`, correct: false, misconceptionId: "C03-M1", value: "oxidation" },
        { key: "D", text: t`alkaline hydrolysis`, correct: true, value: "alkaline_hydrolysis" },
      ],
      solution: {
        steps: [
          t`NaOH hydrolyses the ester bonds.`,
          t`Alkaline hydrolysis.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (I)" },
      stem: t`A fat is boiled with NaOH solution. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "products" } },
      options: [
        { key: "A", text: t`soap and glycerol`, correct: true, value: "soap_glycerol" },
        { key: "B", text: t`fatty acid and NaCl`, correct: false, misconceptionId: "C03-M6", value: "acid_salt" },
        { key: "C", text: t`soap and ethanol`, correct: false, misconceptionId: "C03-M5", value: "soap_ethanol" },
        { key: "D", text: t`soap and water`, correct: false, misconceptionId: "C03-M4", value: "soap_water" },
      ],
      solution: {
        steps: [
          t`Fat + NaOH.`,
          t`Soap and glycerol.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.8" },
      stem: t`Soap removes grease because`,
      verify: { kind: "value", inputs: {  }, params: { q: "cleansing" } },
      options: [
        { key: "A", text: t`its ionic heads dissolve in the grease`, correct: false, misconceptionId: "C03-M7", value: "heads_in_grease" },
        { key: "B", text: t`its hydrocarbon tails dissolve in the grease and its ionic heads in water, forming micelles`, correct: true, value: "tails_in_grease" },
        { key: "C", text: t`it lets water alone dissolve the grease`, correct: false, misconceptionId: "C03-M9", value: "water_alone" },
        { key: "D", text: t`it reacts chemically with the dirt`, correct: false, misconceptionId: "C03-M8", value: "reacts_with_dirt" },
      ],
      solution: {
        steps: [
          t`Tails hold the grease; heads hold the water.`,
          t`Micelles carry grease away.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.3 (F)" },
      stem: t`The IUPAC name of glycerin, $\ce{CH2(OH)CH(OH)CH2OH}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "glycerin" } },
      options: [
        { key: "A", text: t`propane-1,2-diol`, correct: false, misconceptionId: "C03-M11", value: "propane_diol" },
        { key: "B", text: t`propanoic acid`, correct: false, misconceptionId: "C03-M12", value: "propanoic_acid" },
        { key: "C", text: t`propane-1,2,3-triol`, correct: true, value: "propane_triol" },
        { key: "D", text: t`propan-1-ol`, correct: false, misconceptionId: "C03-M10", value: "propanol" },
      ],
      solution: {
        steps: [
          t`Three carbons, three OH groups.`,
          t`propane-1,2,3-triol.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.4 (B)" },
      stem: t`Soap does not lather well in hard water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "hard_water" } },
      options: [
        { key: "A", text: t`hard water is strongly acidic`, correct: false, misconceptionId: "C03-M15", value: "acidic" },
        { key: "B", text: t`hard water is too cold`, correct: false, misconceptionId: "C03-M13", value: "too_cold" },
        { key: "C", text: t`soap dissolves too quickly`, correct: false, misconceptionId: "C03-M14", value: "dissolves_fast" },
        { key: "D", text: t`$\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$ ions form an insoluble scum with it`, correct: true, value: "insoluble_scum" },
      ],
      solution: {
        steps: [
          t`$\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$ react with soap.`,
          t`Insoluble scum forms.`,
        ],
      },
    },
  ],
};
