import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`You have 10 slices of bread and 3 slices of cheese. Each sandwich needs 2 bread and 1 cheese. How many sandwiches?`,
    reveal: t`Three: the cheese runs out first and limits you, with 4 bread left over. Reactions work the same way.`,
  },
  explanation: {
    intuition: [
      t`Reactants are rarely mixed in the exact ratio of the equation.`,
      t`The one that runs out first is the **limiting reagent**.`,
      t`It decides how much product forms.`,
      t`The others are left over: the **excess reagents**.`,
    ],
    formal: [
      {
        title: "Finding the limiting reagent",
        points: [
          t`Convert each reactant's mass to moles.`,
          t`Divide each by its coefficient; the smallest result limits.`,
          t`Or compare the moles each needs with the moles available.`,
          t`Base all product amounts on the limiting reagent.`,
          t`Excess left = amount taken − amount used.`,
        ],
      },
    ],
    worked: {
      prompt: t`2.0 mol of $\ce{H2}$ and 2.0 mol of $\ce{O2}$ react: $\ce{2H2 + O2 -> 2H2O}$. Which limits?`,
      steps: [
        t`$\ce{H2}$: 2.0 ÷ 2 = 1.0; $\ce{O2}$: 2.0 ÷ 1 = 2.0.`,
        t`$\ce{H2}$ gives the smaller value.`,
      ],
      answer: t`$\ce{H2}$`,
    },
    visualSpec: t`Pair up reactant molecules by the equation's ratio and see which kind runs out.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks the reactant of smallest mass.",
      remediation: "Compare moles against the equation, not masses.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks the reactant left over.",
      remediation: "The one left over is in excess; the limiting one is used up.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks the reactant with the smallest coefficient.",
      remediation: "Coefficients alone don't decide; compare moles available with moles needed.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Compares moles without the mole ratio.",
      remediation: "Divide each reactant's moles by its coefficient before comparing.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks both run out together.",
      remediation: "Only an exact equation ratio uses both up; check the moles.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks the product limits.",
      remediation: "A product cannot limit; a reactant does.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Forgets the 2 : 1 ratio.",
      remediation: t`2 mol $\ce{NH3}$ give 1 mol urea.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Adds the masses of the reactants.",
      remediation: "Only the limiting reagent's amount sets the product.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: t`Takes moles of $\ce{O2}$ as moles of water.`,
      remediation: t`1 mol $\ce{O2}$ gives 2 mol water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: t`Gives the $\ce{N2}$ used.`,
      remediation: "Left over = taken − used.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Subtracts the masses.",
      remediation: "Work in moles with the 1 : 3 ratio.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks nothing is left over.",
      remediation: t`$\ce{H2}$ limits, so some $\ce{N2}$ remains.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.2 (E)" },
      stem: t`The limiting reagent in a reaction is`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`the reactant left over at the end`, correct: false, misconceptionId: "C07-M2", value: "left_over" },
        { key: "B", text: t`the reactant with the smallest coefficient`, correct: false, misconceptionId: "C07-M3", value: "smallest_coefficient" },
        { key: "C", text: t`the reactant present in the smallest mass`, correct: false, misconceptionId: "C07-M1", value: "smallest_mass" },
        { key: "D", text: t`the reactant used up first, which limits the amount of product`, correct: true, value: "used_up_first" },
      ],
      solution: {
        steps: [
          t`The limiting reagent is used up first.`,
          t`It sets how much product forms.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.15" },
      stem: t`$\ce{2NH3 + CO2 -> (NH2)2CO + H2O}$. 637.2 g of $\ce{NH3}$ reacts with 1142 g of $\ce{CO2}$. What mass of urea (60 g/mol) forms?`,
      verify: { kind: "value", inputs: { a: "637.2", b: "1142" }, params: { q: "urea" } },
      options: [
        { key: "A", text: t`$1120\ \mathrm{g}$`, correct: true, value: "1120" },
        { key: "B", text: t`$2250\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M7", value: "2250" },
        { key: "C", text: t`$1780\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M8", value: "1780" },
        { key: "D", text: t`$1560\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M4", value: "1560" },
      ],
      solution: {
        steps: [
          t`$\ce{NH3}$: 37.5 mol needs 18.7 mol $\ce{CO2}$; 25.9 mol is available.`,
          t`$\ce{NH3}$ limits: 18.7 mol urea × 60 = 1120 g.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`4 g of $\ce{H2}$ and 16 g of $\ce{O2}$ react: $\ce{2H2 + O2 -> 2H2O}$. What mass of water forms?`,
      verify: { kind: "value", inputs: { a: "4", b: "16" }, params: { q: "water" } },
      options: [
        { key: "A", text: t`$9\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M9", value: "9" },
        { key: "B", text: t`$18\ \mathrm{g}$`, correct: true, value: "18" },
        { key: "C", text: t`$36\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M4", value: "36" },
        { key: "D", text: t`$20\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M8", value: "20" },
      ],
      solution: {
        steps: [
          t`$\ce{H2}$ 2 mol; $\ce{O2}$ 0.5 mol needs only 1 mol $\ce{H2}$.`,
          t`$\ce{O2}$ limits: 1 mol water = 18 g.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`28 g of $\ce{N2}$ and 3 g of $\ce{H2}$ react: $\ce{N2 + 3H2 -> 2NH3}$. Which is the limiting reagent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ammonia" } },
      options: [
        { key: "A", text: t`both run out together`, correct: false, misconceptionId: "C07-M5", value: "both" },
        { key: "B", text: t`$\ce{N2}$`, correct: false, misconceptionId: "C07-M4", value: "n2_limits" },
        { key: "C", text: t`$\ce{H2}$`, correct: true, value: "h2_limits" },
        { key: "D", text: t`$\ce{NH3}$`, correct: false, misconceptionId: "C07-M6", value: "nh3_limits" },
      ],
      solution: {
        steps: [
          t`1 mol $\ce{N2}$ needs 3 mol $\ce{H2}$; only 1.5 mol is there.`,
          t`$\ce{H2}$ limits.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`42 g of $\ce{N2}$ and 6 g of $\ce{H2}$ react: $\ce{N2 + 3H2 -> 2NH3}$. What mass of $\ce{N2}$ is left over?`,
      verify: { kind: "value", inputs: { a: "42", b: "6" }, params: { q: "excess" } },
      options: [
        { key: "A", text: t`$28\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M10", value: "28" },
        { key: "B", text: t`$36\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M11", value: "36" },
        { key: "C", text: t`$0\ \mathrm{g}$`, correct: false, misconceptionId: "C07-M12", value: "0" },
        { key: "D", text: t`$14\ \mathrm{g}$`, correct: true, value: "14" },
      ],
      solution: {
        steps: [
          t`3 mol $\ce{H2}$ uses 1 mol $\ce{N2}$ (28 g).`,
          t`42 − 28 = 14 g left.`,
        ],
      },
    },
  ],
};
