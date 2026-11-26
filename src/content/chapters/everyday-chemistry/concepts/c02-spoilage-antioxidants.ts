import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`An open tin of ghee smells sour after weeks in a warm kitchen. Packed oil labelled 'with vitamin E' stays fresh much longer. What is going on?`,
    reveal: t`Oxygen attacks the fat by a free-radical reaction, releasing smelly acids. Vitamin E is an antioxidant that stops the radical chain.`,
  },
  explanation: {
    intuition: [
      t`Fats react slowly with air: **oxidative rancidity**.`,
      t`It is a free-radical chain reaction producing smelly acids such as butyric acid.`,
      t`Cut fruit browns as an enzyme oxidises its phenols.`,
      t`Antioxidants, $\ce{SO2}$ and lemon juice slow these changes.`,
    ],
    formal: [
      {
        title: "Spoilage",
        points: [
          t`Rancidity: free-radical oxidation of fats; butyric acid gives the rancid smell.`,
          t`Enzymatic browning: polyphenol oxidase oxidises phenols in cut fruit.`,
        ],
      },
      {
        title: "Prevention",
        points: [
          t`Antioxidants (vitamin E, BHT, BHA) stop the radical chain.`,
          t`$\ce{SO2}$ slows browning; lemon juice's acid and vitamin C do too.`,
          t`Cool, airtight, dark storage slows all of these reactions.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is food packed in nitrogen-filled bags?`,
      steps: [
        t`Rancidity needs oxygen.`,
        t`Nitrogen keeps oxygen out.`,
      ],
      answer: t`To keep oxygen away and slow rancidity`,
    },
    visualSpec: t`Follow a radical chain through a fat molecule, then add an antioxidant to stop it.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says addition.",
      remediation: "Rancidity goes through free radicals.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says substitution.",
      remediation: "Oxygen attacks by a free-radical chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says combination.",
      remediation: "It is a free-radical chain reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks glycerol.",
      remediation: "Glycerol is odourless; butyric acid smells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks protein.",
      remediation: "Rancidity is a change in fats.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks saturated fat.",
      remediation: "The fat is the starting material; butyric acid is the smelly product.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Picks $\ce{SO3}$.`,
      remediation: t`$\ce{SO2}$ is the food preservative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Picks $\ce{H2SO4}$.`,
      remediation: "A strong acid would spoil the fruit.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Picks $\ce{Na2CO3}$.`,
      remediation: t`$\ce{SO2}$ slows browning.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks vitamin E is for flavour.",
      remediation: "It is an antioxidant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks it kills bacteria.",
      remediation: "It stops oxidation, not microbes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks it removes water.",
      remediation: "It stops the free-radical chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Blames bacteria.",
      remediation: "Browning starts within minutes: an enzyme and air.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Blames caramelising sugar.",
      remediation: "Caramelising needs heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Blames evaporation.",
      remediation: "Browning is oxidation, not drying.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (A)" },
      stem: t`Oxidative rancidity of fats is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rancidity" } },
      options: [
        { key: "A", text: t`an addition reaction`, correct: false, misconceptionId: "C02-M1", value: "addition" },
        { key: "B", text: t`a free-radical reaction`, correct: true, value: "free_radical" },
        { key: "C", text: t`a substitution reaction`, correct: false, misconceptionId: "C02-M2", value: "substitution_rxn" },
        { key: "D", text: t`a combination reaction`, correct: false, misconceptionId: "C02-M3", value: "combination" },
      ],
      solution: {
        steps: [
          t`Oxygen attacks fats through radicals.`,
          t`A free-radical reaction.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (G)" },
      stem: t`The chemical responsible for the rancid flavour of fats is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rancid_flavour" } },
      options: [
        { key: "A", text: t`glycerol`, correct: false, misconceptionId: "C02-M4", value: "glycerol" },
        { key: "B", text: t`protein`, correct: false, misconceptionId: "C02-M5", value: "protein" },
        { key: "C", text: t`butyric acid`, correct: true, value: "butyric_acid" },
        { key: "D", text: t`saturated fat`, correct: false, misconceptionId: "C02-M6", value: "saturated_fat" },
      ],
      solution: {
        steps: [
          t`Oxidation releases short-chain acids.`,
          t`Butyric acid smells rancid.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (F)" },
      stem: t`The chemical used to slow the browning of cut fruit is`,
      verify: { kind: "value", inputs: {  }, params: { q: "browning_agent" } },
      options: [
        { key: "A", text: t`$\ce{Na2CO3}$`, correct: false, misconceptionId: "C02-M9", value: "na2co3" },
        { key: "B", text: t`$\ce{H2SO4}$`, correct: false, misconceptionId: "C02-M8", value: "h2so4" },
        { key: "C", text: t`$\ce{SO3}$`, correct: false, misconceptionId: "C02-M7", value: "so3" },
        { key: "D", text: t`$\ce{SO2}$`, correct: true, value: "so2" },
      ],
      solution: {
        steps: [
          t`$\ce{SO2}$ blocks the browning enzyme.`,
          t`$\ce{SO2}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.2 (C)" },
      stem: t`Vitamin E is added to packed edible oil because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "vitamin_e" } },
      options: [
        { key: "A", text: t`is an antioxidant that delays rancidity`, correct: true, value: "antioxidant" },
        { key: "B", text: t`removes water from the oil`, correct: false, misconceptionId: "C02-M12", value: "removes_water" },
        { key: "C", text: t`improves the flavour`, correct: false, misconceptionId: "C02-M10", value: "flavour" },
        { key: "D", text: t`kills bacteria in the oil`, correct: false, misconceptionId: "C02-M11", value: "kills_bacteria" },
      ],
      solution: {
        steps: [
          t`Vitamin E stops the radical chain.`,
          t`An antioxidant.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.2 (B)" },
      stem: t`A cut apple turns brown because`,
      verify: { kind: "value", inputs: {  }, params: { q: "browning" } },
      options: [
        { key: "A", text: t`its water evaporates`, correct: false, misconceptionId: "C02-M15", value: "evaporation" },
        { key: "B", text: t`an enzyme oxidises its phenolic compounds in air`, correct: true, value: "enzyme_oxidises_phenols" },
        { key: "C", text: t`bacteria grow on it`, correct: false, misconceptionId: "C02-M13", value: "bacteria" },
        { key: "D", text: t`its sugar caramelises`, correct: false, misconceptionId: "C02-M14", value: "caramelises" },
      ],
      solution: {
        steps: [
          t`Cutting exposes phenols to an enzyme and air.`,
          t`They are oxidised to brown products.`,
        ],
      },
    },
  ],
};
