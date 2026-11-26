import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A few grams of iron, helped by a pinch of potassium oxide, turn millions of tonnes of nitrogen and hydrogen into ammonia each year. How does a surface do so much?`,
    reveal: t`The gases adsorb on the iron, where their bonds weaken and they react faster. The iron is not used up; potassium oxide boosts its activity.`,
  },
  explanation: {
    intuition: [
      t`Adsorption has many uses: decolourising, gas masks, chromatography.`,
      t`A **catalyst** speeds up a reaction and is not used up.`,
      t`Homogeneous catalysts share the reactants' phase; heterogeneous ones do not.`,
      t`**Promoters** boost a catalyst; **poisons** spoil it; **inhibitors** slow reactions.`,
    ],
    formal: [
      {
        title: "Uses of adsorption",
        points: [
          t`Animal charcoal adsorbs coloured impurities from raw sugar.`,
          t`Activated charcoal in gas masks adsorbs poisonous gases.`,
          t`Silica gel removes moisture; adsorption separates mixtures in chromatography.`,
        ],
      },
      {
        title: "Catalysis",
        points: [
          t`Heterogeneous: solid Fe for gaseous $\ce{N2}$ and $\ce{H2}$ (Haber's process).`,
          t`Homogeneous: catalyst in the same phase, e.g. NO in the lead chamber process.`,
          t`Promoter: $\ce{K2O}$ or Mo in Haber's process.`,
          t`Inhibitor (negative catalyst): slows a reaction.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\ce{2SO2 + O2 -> 2SO3}$ is catalysed by solid $\ce{V2O5}$. Homogeneous or heterogeneous?`,
      steps: [
        t`Reactants are gases; the catalyst is a solid.`,
        t`Different phases: heterogeneous.`,
      ],
      answer: t`Heterogeneous`,
    },
    visualSpec: t`Watch reactant molecules land on a catalyst surface, react and leave.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Calls $\ce{K2O}$ the catalyst.`,
      remediation: t`Iron is the catalyst; $\ce{K2O}$ promotes it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Calls $\ce{K2O}$ an inhibitor.`,
      remediation: t`$\ce{K2O}$ increases the catalyst's activity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Calls $\ce{K2O}$ an adsorbate.`,
      remediation: t`The gases are the adsorbates; $\ce{K2O}$ is a promoter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks charcoal bleaches by oxidation.",
      remediation: "Charcoal adsorbs the coloured impurities.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks the sugar is taken up.",
      remediation: "The sugar passes through; the colour is held back.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks charcoal dissolves the colour.",
      remediation: "Charcoal is insoluble; it adsorbs colour on its surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks an inhibitor speeds a reaction.",
      remediation: "An inhibitor slows it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks an inhibitor is used up.",
      remediation: "It slows the reaction; its defining job is to reduce the rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks it shifts the equilibrium.",
      remediation: "Catalysts and inhibitors change rate, not equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Calls iron homogeneous.",
      remediation: "Solid iron and gaseous reactants are different phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Calls iron an autocatalyst.",
      remediation: "An autocatalyst is a product that speeds its own reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Calls iron an inhibitor.",
      remediation: "Iron speeds the reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks the charcoal takes up oxygen.",
      remediation: "Charcoal adsorbs the poisonous gases; oxygen passes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks it reacts with every gas.",
      remediation: "It adsorbs gases physically, mostly harmful ones.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks it only filters dust.",
      remediation: "Charcoal adsorbs gases, not just dust.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.1 (C)" },
      stem: t`In Haber's process for ammonia, $\ce{K2O}$ is used as`,
      verify: { kind: "value", inputs: {  }, params: { q: "k2o" } },
      options: [
        { key: "A", text: t`an inhibitor`, correct: false, misconceptionId: "C04-M2", value: "inhibitor" },
        { key: "B", text: t`a promoter`, correct: true, value: "promoter" },
        { key: "C", text: t`an adsorbate`, correct: false, misconceptionId: "C04-M3", value: "adsorbate" },
        { key: "D", text: t`the catalyst`, correct: false, misconceptionId: "C04-M1", value: "catalyst" },
      ],
      solution: {
        steps: [
          t`Fe is the catalyst.`,
          t`$\ce{K2O}$ increases its activity: a promoter.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (J)" },
      stem: t`A raw sugar solution passed over animal charcoal becomes colourless because`,
      verify: { kind: "value", inputs: {  }, params: { q: "sugar" } },
      options: [
        { key: "A", text: t`the charcoal bleaches the colour by oxidation`, correct: false, misconceptionId: "C04-M4", value: "oxidises" },
        { key: "B", text: t`the charcoal takes up the sugar and leaves the colour`, correct: false, misconceptionId: "C04-M5", value: "takes_sugar" },
        { key: "C", text: t`the coloured impurities are adsorbed on the charcoal`, correct: true, value: "adsorbs_colour" },
        { key: "D", text: t`the charcoal dissolves the colour`, correct: false, misconceptionId: "C04-M6", value: "dissolves_colour" },
      ],
      solution: {
        steps: [
          t`Charcoal has a huge surface.`,
          t`Coloured impurities are adsorbed on it.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (A)" },
      stem: t`An inhibitor is a substance that`,
      verify: { kind: "value", inputs: {  }, params: { q: "inhibitor" } },
      options: [
        { key: "A", text: t`is used up completely in the reaction`, correct: false, misconceptionId: "C04-M8", value: "used_up" },
        { key: "B", text: t`shifts the equilibrium`, correct: false, misconceptionId: "C04-M9", value: "shifts_equilibrium" },
        { key: "C", text: t`speeds up a reaction`, correct: false, misconceptionId: "C04-M7", value: "speeds" },
        { key: "D", text: t`slows down a reaction`, correct: true, value: "slows" },
      ],
      solution: {
        steps: [
          t`An inhibitor is a negative catalyst.`,
          t`It slows the reaction.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Solid iron catalysing the gas reaction $\ce{N2 + 3H2 <=> 2NH3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "iron" } },
      options: [
        { key: "A", text: t`a heterogeneous catalyst`, correct: true, value: "heterogeneous" },
        { key: "B", text: t`an autocatalyst`, correct: false, misconceptionId: "C04-M11", value: "autocatalyst" },
        { key: "C", text: t`an inhibitor`, correct: false, misconceptionId: "C04-M12", value: "inhibitor" },
        { key: "D", text: t`a homogeneous catalyst`, correct: false, misconceptionId: "C04-M10", value: "homogeneous" },
      ],
      solution: {
        steps: [
          t`Solid catalyst, gaseous reactants.`,
          t`Heterogeneous.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (M)" },
      stem: t`Gas masks contain activated charcoal to`,
      verify: { kind: "value", inputs: {  }, params: { q: "gas_mask" } },
      options: [
        { key: "A", text: t`filter out dust only`, correct: false, misconceptionId: "C04-M15", value: "dust_only" },
        { key: "B", text: t`adsorb poisonous gases`, correct: true, value: "adsorbs_poison" },
        { key: "C", text: t`absorb oxygen`, correct: false, misconceptionId: "C04-M13", value: "takes_oxygen" },
        { key: "D", text: t`react chemically with every gas`, correct: false, misconceptionId: "C04-M14", value: "reacts_all" },
      ],
      solution: {
        steps: [
          t`Activated charcoal has a large surface.`,
          t`It adsorbs poisonous gases.`,
        ],
      },
    },
  ],
};
