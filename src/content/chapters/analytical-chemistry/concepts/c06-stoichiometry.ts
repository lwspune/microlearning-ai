import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`How much lime can a kiln make from a tonne of limestone? A balanced equation answers that before any rock is heated.`,
    reveal: t`$\ce{CaCO3 -> CaO + CO2}$: 100 g of limestone gives 56 g of lime, so a tonne gives 560 kg.`,
  },
  explanation: {
    intuition: [
      t`A balanced equation is a recipe in moles.`,
      t`Its coefficients give the mole ratios of reactants and products.`,
      t`So: grams → moles → mole ratio → moles → grams.`,
      t`For gases at STP, moles convert to volume with 22.4 L.`,
    ],
    formal: [
      {
        title: "Steps",
        points: [
          t`Balance the equation.`,
          t`Convert the given mass (or gas volume) to moles.`,
          t`Multiply by the mole ratio from the coefficients.`,
          t`Convert to the mass or volume asked for.`,
          t`Percentage purity = pure mass found ÷ sample mass × 100.`,
        ],
      },
    ],
    worked: {
      prompt: t`What mass of $\ce{CO2}$ forms when 24 g of methane burns completely?`,
      steps: [
        t`24 ÷ 16 = 1.5 mol $\ce{CH4}$ → 1.5 mol $\ce{CO2}$.`,
        t`1.5 × 44 = 66 g.`,
      ],
      answer: t`66 g`,
    },
    visualSpec: t`Follow a mass through the chain: grams, moles, mole ratio, moles, grams.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks the product weighs as much as the reactant.",
      remediation: t`Some mass leaves as $\ce{CO2}$; use the mole ratio.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Gives the mass of $\ce{CO2}$.`,
      remediation: "The question asks for CaO: 56 g per 100 g.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Inverts the mass ratio.",
      remediation: "Mass of CaO = 25 × 56 ÷ 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Ignores the coefficient 2 in $\ce{2H2O}$.`,
      remediation: t`Each mole of $\ce{CH4}$ gives two moles of water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Counts four waters.",
      remediation: t`The equation gives $\ce{2H2O}$ per $\ce{CH4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Gives the mass of $\ce{CO2}$.`,
      remediation: "Water is asked: 2 × 18 g per mole of methane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Uses a 1 : 1 ratio.",
      remediation: t`4 Al need 3 $\ce{O2}$: ratio 3 : 4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Inverts the 4 : 3 ratio.",
      remediation: t`Moles of $\ce{O2}$ = moles of Al × 3/4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: t`Uses 16 g per mole of $\ce{O2}$.`,
      remediation: t`$\ce{O2}$ is 32 g/mol.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: t`Ignores the 5 in $\ce{5O2}$.`,
      remediation: t`Each mole of propane needs five moles of $\ce{O2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Gives moles instead of litres.",
      remediation: "Multiply moles by 22.4 L at STP.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Divides by 5.",
      remediation: t`Multiply: 5 mol of $\ce{O2}$ per mol of propane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Forgets to multiply by 100.",
      remediation: "Purity is a percentage: × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Inverts the ratio.",
      remediation: "Purity = pure mass ÷ sample mass × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: t`Takes two Zn per $\ce{H2}$.`,
      remediation: t`$\ce{Zn + H2SO4 -> ZnSO4 + H2}$: one Zn per $\ce{H2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (F)" },
      stem: t`How much CaO forms when 25 g of $\ce{CaCO3}$ decomposes? $\ce{CaCO3 -> CaO + CO2}$`,
      verify: { kind: "value", inputs: { m: "25" }, params: { q: "cao" } },
      options: [
        { key: "A", text: t`$25\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M1", value: "25" },
        { key: "B", text: t`$14\ \mathrm{g}$`, correct: true, value: "14" },
        { key: "C", text: t`$44.6\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M3", value: "44.6000000000000" },
        { key: "D", text: t`$11\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M2", value: "11" },
      ],
      solution: {
        steps: [
          t`25 ÷ 100 = 0.25 mol $\ce{CaCO3}$ → 0.25 mol CaO.`,
          t`0.25 × 56 = 14.0 g.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (G)" },
      stem: t`How many grams of water form when 12 g of methane burns completely? $\ce{CH4 + 2O2}$ $\ce{-> CO2 + 2H2O}$`,
      verify: { kind: "value", inputs: { m: "12" }, params: { q: "water" } },
      options: [
        { key: "A", text: t`$54\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M5", value: "54" },
        { key: "B", text: t`$13.5\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M4", value: "13.5000000000000" },
        { key: "C", text: t`$27\ \mathrm{g}$`, correct: true, value: "27" },
        { key: "D", text: t`$33\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M6", value: "33" },
      ],
      solution: {
        steps: [
          t`12 ÷ 16 = 0.75 mol $\ce{CH4}$ → 1.5 mol $\ce{H2O}$.`,
          t`1.5 × 18 = 27 g.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (J)" },
      stem: t`How many grams of oxygen react completely with 27 g of Al? $\ce{4Al + 3O2 -> 2Al2O3}$ (Al = 27, O = 16)`,
      verify: { kind: "value", inputs: { m: "27" }, params: { q: "oxygen_al" } },
      options: [
        { key: "A", text: t`$12\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M9", value: "12" },
        { key: "B", text: t`$32\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M7", value: "32" },
        { key: "C", text: t`$42.7\ \mathrm{g}$`, correct: false, misconceptionId: "C06-M8", value: "42.7000000000000" },
        { key: "D", text: t`$24\ \mathrm{g}$`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`27 ÷ 27 = 1 mol Al → 0.75 mol $\ce{O2}$.`,
          t`0.75 × 32 = 24 g.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.13" },
      stem: t`How many litres of oxygen at STP burn 2.2 g of propane completely? $\ce{C3H8 + 5O2}$ $\ce{-> 3CO2 + 4H2O}$`,
      verify: { kind: "value", inputs: { m: "2.2" }, params: { q: "propane" } },
      options: [
        { key: "A", text: t`$5.6\ \mathrm{L}$`, correct: true, value: "5.60000000000000" },
        { key: "B", text: t`$0.224\ \mathrm{L}$`, correct: false, misconceptionId: "C06-M12", value: "0.224000000000000" },
        { key: "C", text: t`$1.12\ \mathrm{L}$`, correct: false, misconceptionId: "C06-M10", value: "1.12000000000000" },
        { key: "D", text: t`$0.25\ \mathrm{L}$`, correct: false, misconceptionId: "C06-M11", value: "0.250000000000000" },
      ],
      solution: {
        steps: [
          t`2.2 ÷ 44 = 0.05 mol → 0.25 mol $\ce{O2}$.`,
          t`0.25 × 22.4 = 5.6 L.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.14" },
      stem: t`0.635 g of impure zinc with excess dilute $\ce{H2SO4}$ gives $200\ \mathrm{cm^3}$ of hydrogen at STP. Find the percentage purity of the zinc. (Zn = 65.5)`,
      verify: { kind: "value", inputs: { m: "0.635", V: "200", Zn: "65.5" }, params: { q: "zinc" } },
      options: [
        { key: "A", text: t`$0.921\%$`, correct: false, misconceptionId: "C06-M13", value: "0.921000000000000" },
        { key: "B", text: t`$92.1\%$`, correct: true, value: "92.1000000000000" },
        { key: "C", text: t`$109\%$`, correct: false, misconceptionId: "C06-M14", value: "109" },
        { key: "D", text: t`$184\%$`, correct: false, misconceptionId: "C06-M15", value: "184" },
      ],
      solution: {
        steps: [
          t`$\ce{H2}$: 200 ÷ 22 400 = 0.00893 mol = mol Zn; × 65.5 = 0.585 g.`,
          t`0.585 ÷ 0.635 × 100 = 92.1 %.`,
        ],
      },
    },
  ],
};
