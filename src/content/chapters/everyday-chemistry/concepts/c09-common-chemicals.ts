import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Rubbing a little baking soda on an ant bite eases the sting, and a spoon of milk of magnesia eases acidity. What do the two remedies have in common?`,
    reveal: t`Both are mild bases that neutralise an acid: formic acid from the ant, hydrochloric acid in the stomach.`,
  },
  explanation: {
    intuition: [
      t`Many acids, bases and salts are part of daily life.`,
      t`Acids taste sour: vinegar, lemon, curd.`,
      t`Bases taste bitter and feel soapy; mild ones neutralise unwanted acid.`,
      t`Salts like baking soda, washing soda and plaster of Paris each have their own use.`,
    ],
    formal: [
      {
        title: "Acids in daily life",
        points: [
          t`Vinegar: acetic (ethanoic) acid. Lemons: citric acid.`,
          t`Curd: lactic acid. Tamarind: tartaric acid.`,
          t`Ant and bee stings: methanoic (formic) acid.`,
          t`The stomach makes hydrochloric acid to help digestion.`,
        ],
      },
      {
        title: "Bases and antacids",
        points: [
          t`Milk of magnesia, $\ce{Mg(OH)2}$, is a mild base used as an **antacid**.`,
          t`It neutralises excess stomach acid.`,
          t`Slaked lime, $\ce{Ca(OH)2}$, neutralises acidic soil.`,
        ],
      },
      {
        title: "Common salts",
        points: [
          t`Baking soda, $\ce{NaHCO3}$: in baking powder and antacids.`,
          t`Washing soda, $\ce{Na2CO3.10H2O}$: softens hard water.`,
          t`Bleaching powder, $\ce{CaOCl2}$: bleaches and disinfects water.`,
          t`Plaster of Paris, $\ce{CaSO4.1/2H2O}$: sets hard with water, for casts.`,
          t`It sets back to gypsum, $\ce{CaSO4.2H2O}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does a bee sting hurt less after baking soda is rubbed on it?`,
      steps: [
        t`The sting injects methanoic acid.`,
        t`Baking soda, $\ce{NaHCO3}$, is a mild base.`,
        t`It neutralises the acid.`,
      ],
      answer: t`Baking soda neutralises the sting's methanoic acid`,
    },
    visualSpec: t`A kitchen shelf where each jar flips over to show its chemical name and formula.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Picks acetic acid.",
      remediation: "Acetic acid is in vinegar; stings inject methanoic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks citric acid.",
      remediation: "Citric acid is in lemons; stings inject methanoic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Picks lactic acid.",
      remediation: "Lactic acid is in curd; stings inject methanoic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Gives gypsum.",
      remediation: t`Gypsum is $\ce{CaSO4.2H2O}$; plaster of Paris has half a water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Gives calcium carbonate.",
      remediation: "Plaster of Paris is a calcium sulfate, not a carbonate.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Gives anhydrous calcium sulfate.",
      remediation: t`Plaster of Paris keeps half a water: $\ce{CaSO4.1/2H2O}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Gives washing soda.",
      remediation: t`Washing soda is $\ce{Na2CO3.10H2O}$; baking soda is $\ce{NaHCO3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Gives common salt.",
      remediation: t`Common salt is NaCl; baking soda is $\ce{NaHCO3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Gives caustic soda.",
      remediation: "NaOH is caustic soda, far too strong to eat.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Calls it an acid.",
      remediation: "An acid would add to the problem; milk of magnesia is a base.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Thinks it kills bacteria.",
      remediation: "It neutralises acid; it is not an antibiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Calls it caustic soda.",
      remediation: t`Milk of magnesia is $\ce{Mg(OH)2}$, a mild base.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: t`Gives $\ce{CaCl2}$.`,
      remediation: t`Bleaching powder is $\ce{CaOCl2}$, which releases chlorine.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Gives slaked lime.",
      remediation: t`Slaked lime is $\ce{Ca(OH)2}$; chlorine turns it into bleaching powder.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Gives household bleach.",
      remediation: t`NaOCl is liquid bleach; bleaching powder is $\ce{CaOCl2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`The sting of an ant or a bee injects`,
      verify: { kind: "value", inputs: {  }, params: { q: "sting" } },
      options: [
        { key: "A", text: t`citric acid`, correct: false, misconceptionId: "C09-M2", value: "citric" },
        { key: "B", text: t`lactic acid`, correct: false, misconceptionId: "C09-M3", value: "lactic" },
        { key: "C", text: t`methanoic (formic) acid`, correct: true, value: "methanoic" },
        { key: "D", text: t`acetic acid`, correct: false, misconceptionId: "C09-M1", value: "acetic" },
      ],
      solution: {
        steps: [
          t`Ants and bees inject an acid.`,
          t`It is methanoic (formic) acid.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`Plaster of Paris is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pop" } },
      options: [
        { key: "A", text: t`$\ce{CaSO4.1/2H2O}$`, correct: true, value: "hemihydrate" },
        { key: "B", text: t`$\ce{CaSO4.2H2O}$`, correct: false, misconceptionId: "C09-M4", value: "dihydrate" },
        { key: "C", text: t`$\ce{CaCO3}$`, correct: false, misconceptionId: "C09-M5", value: "calcium_carbonate" },
        { key: "D", text: t`$\ce{CaSO4}$`, correct: false, misconceptionId: "C09-M6", value: "anhydrous_sulfate" },
      ],
      solution: {
        steps: [
          t`Plaster of Paris is gypsum with most water driven off.`,
          t`$\ce{CaSO4.1/2H2O}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`Baking soda, used in baking powder and antacids, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "baking" } },
      options: [
        { key: "A", text: t`$\ce{Na2CO3.10H2O}$`, correct: false, misconceptionId: "C09-M7", value: "sodium_carbonate" },
        { key: "B", text: t`NaCl`, correct: false, misconceptionId: "C09-M8", value: "sodium_chloride" },
        { key: "C", text: t`NaOH`, correct: false, misconceptionId: "C09-M9", value: "sodium_hydroxide" },
        { key: "D", text: t`$\ce{NaHCO3}$`, correct: true, value: "sodium_hydrogencarbonate" },
      ],
      solution: {
        steps: [
          t`Baking soda is sodium hydrogencarbonate.`,
          t`$\ce{NaHCO3}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Milk of magnesia relieves acidity because`,
      verify: { kind: "value", inputs: {  }, params: { q: "antacid" } },
      options: [
        { key: "A", text: t`it is a mild base, $\ce{Mg(OH)2}$, that neutralises excess stomach acid`, correct: true, value: "mild_base" },
        { key: "B", text: t`it is an acid that dilutes stomach acid`, correct: false, misconceptionId: "C09-M10", value: "an_acid" },
        { key: "C", text: t`it kills the bacteria that make acid`, correct: false, misconceptionId: "C09-M11", value: "kills_bacteria" },
        { key: "D", text: t`it is sodium hydroxide, a strong base`, correct: false, misconceptionId: "C09-M12", value: "caustic_soda" },
      ],
      solution: {
        steps: [
          t`$\ce{Mg(OH)2}$ is a mild base.`,
          t`It neutralises excess stomach acid.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`Bleaching powder is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bleach" } },
      options: [
        { key: "A", text: t`$\ce{Ca(OH)2}$`, correct: false, misconceptionId: "C09-M14", value: "slaked_lime" },
        { key: "B", text: t`NaOCl`, correct: false, misconceptionId: "C09-M15", value: "naocl" },
        { key: "C", text: t`$\ce{CaOCl2}$`, correct: true, value: "caocl2" },
        { key: "D", text: t`$\ce{CaCl2}$`, correct: false, misconceptionId: "C09-M13", value: "cacl2" },
      ],
      solution: {
        steps: [
          t`Chlorine passed over slaked lime gives it.`,
          t`$\ce{CaOCl2}$.`,
        ],
      },
    },
  ],
};
