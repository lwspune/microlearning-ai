import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A reaction can give a 100 % yield and still throw away most of its atoms. How?`,
    reveal: t`If most reactant atoms end up in by-products, the desired product carries only a few of them, however complete the reaction. Atom economy measures that.`,
  },
  explanation: {
    intuition: [
      t`Atom economy asks: what share of the reactants' mass ends up in the product we want?`,
      t`Atoms in by-products are wasted, even when the yield is perfect.`,
      t`Additions put every atom into one product: 100 %.`,
      t`Substitutions and eliminations release by-products, so they score less.`,
    ],
    formal: [
      {
        title: "Formula",
        points: [
          t`$\%\text{ atom economy} = \dfrac{\text{mass of desired product}}{\text{total mass of reactants}} \times 100$`,
          t`Use molar masses from the balanced equation.`,
          t`Atom economy differs from percentage yield, which compares actual and expected product.`,
        ],
      },
      {
        title: "Example",
        points: [
          t`$\ce{C2H5OH + HBr}$ $\ce{-> C2H5Br + H2O}$`,
          t`Reactants: 46 + 81 = 127 g; product: 109 g.`,
          t`Atom economy $= 109/127 \times 100 = 85.8\%$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the atom economy of $\ce{CH2=CH2 + H2 -> C2H6}$.`,
      steps: [
        t`Reactants: 28 + 2 = 30 g; product: 30 g.`,
        t`30/30 × 100.`,
      ],
      answer: t`100 %`,
    },
    visualSpec: t`Weigh the reactant atoms on one side and see what share lands in the desired product.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Confuses atom economy with percentage yield.",
      remediation: "Yield compares actual and expected product; atom economy compares product with reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Puts the by-products on top.",
      remediation: "That gives the wasted share; atom economy uses the desired product.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Inverts the ratio.",
      remediation: "Product mass goes on top; atom economy cannot exceed 100 %.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks two reactants halve the atom economy.",
      remediation: "In an addition every atom of both reactants enters the product: 100 %.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks an addition wastes part of the second reactant.",
      remediation: t`All of $\ce{Br2}$ becomes part of the product.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks every complete reaction scores 100 %.",
      remediation: "Atoms in by-products are wasted however complete the reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives the share wasted instead of the share used.",
      remediation: "Atom economy is the desired product's share of the reactant mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks substitutions score highest.",
      remediation: "A substitution always releases a by-product.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks eliminations score highest.",
      remediation: "An elimination splits off a small molecule, which is wasted.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks mass conservation makes all reactions equal.",
      remediation: "Total mass is conserved, but only atoms in the desired product count.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Leaves out the second reactant.",
      remediation: "Add the masses of all reactants, KOH included.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.2 (i)" },
      stem: t`Percentage atom economy is calculated as`,
      verify: { kind: "value", inputs: {  }, params: { q: "formula" } },
      options: [
        { key: "A", text: t`$\dfrac{\text{mass of by-products}}{\text{total mass of reactants}} \times 100$`, correct: false, misconceptionId: "C03-M2", value: "byproducts_over_reactants" },
        { key: "B", text: t`$\dfrac{\text{total mass of reactants}}{\text{mass of desired product}} \times 100$`, correct: false, misconceptionId: "C03-M3", value: "reactants_over_product" },
        { key: "C", text: t`$\dfrac{\text{actual yield}}{\text{theoretical yield}} \times 100$`, correct: false, misconceptionId: "C03-M1", value: "pct_yield" },
        { key: "D", text: t`$\dfrac{\text{mass of desired product}}{\text{total mass of reactants}} \times 100$`, correct: true, value: "product_over_reactants" },
      ],
      solution: {
        steps: [
          t`Atom economy compares the desired product with all reactants.`,
          t`Product mass ÷ reactant mass × 100.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.4 (ii)" },
      stem: t`What is the atom economy of the addition $\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "addition" } },
      options: [
        { key: "A", text: t`100 %`, correct: true, value: "pct_100" },
        { key: "B", text: t`0 %`, correct: false, misconceptionId: "C03-M7", value: "pct_0" },
        { key: "C", text: t`less than 100 %, because $\ce{Br2}$ is partly wasted`, correct: false, misconceptionId: "C03-M5", value: "pct_less_than_100" },
        { key: "D", text: t`50 %`, correct: false, misconceptionId: "C03-M4", value: "pct_50" },
      ],
      solution: {
        steps: [
          t`All atoms of both reactants enter the product.`,
          t`Atom economy = 100 %.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Find the atom economy for making bromoethane: $\ce{C2H5OH + HBr -> C2H5Br + H2O}$. (C = 12, H = 1, O = 16, Br = 80)`,
      verify: { kind: "value", inputs: {  }, params: { q: "substitution" } },
      options: [
        { key: "A", text: t`100 %`, correct: false, misconceptionId: "C03-M6", value: "pct_100" },
        { key: "B", text: t`85.8 %`, correct: true, value: "pct_85_8" },
        { key: "C", text: t`116.5 %`, correct: false, misconceptionId: "C03-M3", value: "pct_116_5" },
        { key: "D", text: t`14.2 %`, correct: false, misconceptionId: "C03-M7", value: "pct_14_2" },
      ],
      solution: {
        steps: [
          t`Reactants: 46 + 81 = 127 g; product: 109 g.`,
          t`109/127 × 100 = 85.8 %.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`Which type of reaction has the highest atom economy?`,
      verify: { kind: "value", inputs: {  }, params: { q: "best" } },
      options: [
        { key: "A", text: t`elimination`, correct: false, misconceptionId: "C03-M9", value: "elimination_rxn" },
        { key: "B", text: t`all are equal, since mass is conserved`, correct: false, misconceptionId: "C03-M10", value: "all_equal" },
        { key: "C", text: t`addition`, correct: true, value: "addition_rxn" },
        { key: "D", text: t`substitution`, correct: false, misconceptionId: "C03-M8", value: "substitution_rxn" },
      ],
      solution: {
        steps: [
          t`Additions put every atom into the product.`,
          t`They score 100 %.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Find the atom economy for making ethene: $\ce{C2H5Br + KOH}$ $\ce{-> C2H4 + KBr + H2O}$. (C = 12, H = 1, O = 16, K = 39, Br = 80)`,
      verify: { kind: "value", inputs: {  }, params: { q: "elimination" } },
      options: [
        { key: "A", text: t`25.7 %`, correct: false, misconceptionId: "C03-M11", value: "pct_25_7" },
        { key: "B", text: t`100 %`, correct: false, misconceptionId: "C03-M6", value: "pct_100" },
        { key: "C", text: t`83.0 %`, correct: false, misconceptionId: "C03-M7", value: "pct_83_0" },
        { key: "D", text: t`17.0 %`, correct: true, value: "pct_17_0" },
      ],
      solution: {
        steps: [
          t`Reactants: 109 + 56 = 165 g; product: 28 g.`,
          t`28/165 × 100 = 17.0 %.`,
        ],
      },
    },
  ],
};
