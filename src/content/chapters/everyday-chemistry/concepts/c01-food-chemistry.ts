import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Raw rice is hard and chalky; boiled rice is soft and easily digested. Nothing was added but water and heat. What changed?`,
    reveal: t`Heat and water made the starch granules swell and burst, so digestive enzymes can reach the starch easily.`,
  },
  explanation: {
    intuition: [
      t`Food supplies carbohydrates, proteins, fats, vitamins and minerals.`,
      t`Carbohydrates give quick energy; fats store energy.`,
      t`Fats are saturated (single bonds) or unsaturated (C=C bonds).`,
      t`Cooking breaks down starch and proteins, aiding digestion.`,
    ],
    formal: [
      {
        title: "Fats",
        points: [
          t`Saturated fats: only C–C single bonds in their chains; often solid.`,
          t`Unsaturated fats: one (mono) or more (poly) C=C bonds; usually oils.`,
          t`Monounsaturated fats are healthier; trans fats are harmful.`,
        ],
      },
      {
        title: "Cooking",
        points: [
          t`Heat gelatinises starch and denatures proteins.`,
          t`Cooked food is softer and easier to digest.`,
        ],
      },
    ],
    worked: {
      prompt: t`Oleic acid has one C=C in its chain. What kind of fat does it form?`,
      steps: [
        t`One double bond: unsaturated.`,
        t`Only one: monounsaturated.`,
      ],
      answer: t`A monounsaturated fat`,
    },
    visualSpec: t`Compare fatty acid chains with and without double bonds, and starch before and after cooking.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks saturated fats.",
      remediation: "Saturated fats raise cholesterol; monounsaturated fats are healthier.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks trans fats.",
      remediation: "Trans fats are the most harmful.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks all of them.",
      remediation: "Only monounsaturated fats bring the benefits.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Gives saturated fats double bonds.",
      remediation: "Saturated means only single bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls them liquid oils.",
      remediation: "Saturated fats are usually solid, like ghee.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Denies them carbon chains.",
      remediation: "Fats are esters of long-chain fatty acids.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks cooking adds nutrients.",
      remediation: "Cooking changes food's structure; it adds nothing.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks cooking removes all water.",
      remediation: "Boiled food often gains water.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks proteins become fats.",
      remediation: "Heat denatures proteins; they stay proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks cooked rice has no starch.",
      remediation: "The starch is still there, just gelatinised.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Calls rice flour protein.",
      remediation: "Rice flour is mostly starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks starch becomes fat.",
      remediation: "Cooking does not change starch into fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks vitamins.",
      remediation: "Vitamins regulate the body; they give no energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks minerals.",
      remediation: "Minerals give no energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks water.",
      remediation: "Water gives no energy.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (H)" },
      stem: t`Health benefits come from eating`,
      verify: { kind: "value", inputs: {  }, params: { q: "healthy_fat" } },
      options: [
        { key: "A", text: t`all of these`, correct: false, misconceptionId: "C01-M3", value: "all_of_these" },
        { key: "B", text: t`saturated fats`, correct: false, misconceptionId: "C01-M1", value: "saturated" },
        { key: "C", text: t`trans fats`, correct: false, misconceptionId: "C01-M2", value: "trans" },
        { key: "D", text: t`monounsaturated fats`, correct: true, value: "monounsaturated" },
      ],
      solution: {
        steps: [
          t`Monounsaturated fats lower harmful cholesterol.`,
          t`They bring health benefits.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.4 (C)" },
      stem: t`Saturated fats`,
      verify: { kind: "value", inputs: {  }, params: { q: "saturated" } },
      options: [
        { key: "A", text: t`have only C–C single bonds in their fatty acid chains`, correct: true, value: "single_bonds" },
        { key: "B", text: t`have C=C double bonds in their chains`, correct: false, misconceptionId: "C01-M4", value: "double_bonds" },
        { key: "C", text: t`are always liquid oils`, correct: false, misconceptionId: "C01-M5", value: "liquid_oils" },
        { key: "D", text: t`have no carbon chains`, correct: false, misconceptionId: "C01-M6", value: "no_chains" },
      ],
      solution: {
        steps: [
          t`Saturated: no C=C bonds.`,
          t`Only single bonds.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.2 (A)" },
      stem: t`Cooking makes food easier to digest because`,
      verify: { kind: "value", inputs: {  }, params: { q: "cooking" } },
      options: [
        { key: "A", text: t`cooking removes all the water`, correct: false, misconceptionId: "C01-M8", value: "removes_water" },
        { key: "B", text: t`heat breaks down starch and proteins into simpler, softer forms`, correct: true, value: "breaks_down" },
        { key: "C", text: t`cooking turns proteins into fats`, correct: false, misconceptionId: "C01-M9", value: "protein_to_fat" },
        { key: "D", text: t`cooking adds new nutrients`, correct: false, misconceptionId: "C01-M7", value: "adds_nutrients" },
      ],
      solution: {
        steps: [
          t`Heat softens starch and denatures proteins.`,
          t`Enzymes digest them more easily.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.4 (D)" },
      stem: t`Cooked rice is easier to digest than rice flour because`,
      verify: { kind: "value", inputs: {  }, params: { q: "rice" } },
      options: [
        { key: "A", text: t`rice flour is mostly protein`, correct: false, misconceptionId: "C01-M11", value: "flour_protein" },
        { key: "B", text: t`cooked rice contains no starch`, correct: false, misconceptionId: "C01-M10", value: "no_starch" },
        { key: "C", text: t`cooking swells and gelatinises the starch granules`, correct: true, value: "gelatinised" },
        { key: "D", text: t`cooking turns the starch into fat`, correct: false, misconceptionId: "C01-M12", value: "starch_to_fat" },
      ],
      solution: {
        steps: [
          t`Cooking gelatinises the starch.`,
          t`Gelatinised starch is easier to digest.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`The main source of quick energy in food is`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`water`, correct: false, misconceptionId: "C01-M15", value: "water" },
        { key: "B", text: t`vitamins`, correct: false, misconceptionId: "C01-M13", value: "vitamins" },
        { key: "C", text: t`minerals`, correct: false, misconceptionId: "C01-M14", value: "minerals" },
        { key: "D", text: t`carbohydrates`, correct: true, value: "carbohydrates" },
      ],
      solution: {
        steps: [
          t`Carbohydrates are broken down fast to glucose.`,
          t`Quick energy.`,
        ],
      },
    },
  ],
};
