import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Start with any mix of $\ce{H2}$, $\ce{I2}$ and HI at 700 K, and at equilibrium $[\ce{HI}]^2/([\ce{H2}][\ce{I2}])$ always comes to about 54. Why that combination?`,
    reveal: t`The law of mass action: at equilibrium, products over reactants, each raised to its coefficient, is a constant, $K_c$.`,
  },
  explanation: {
    intuition: [
      t`The rate of a reaction depends on its reactants' concentrations.`,
      t`At equilibrium the forward and backward rates are equal.`,
      t`That fixes a ratio of concentrations: the equilibrium constant $K_c$.`,
      t`$K_c$ depends only on temperature.`,
    ],
    formal: [
      {
        title: "Kc",
        points: [
          t`For $a\ce{A} + b\ce{B} <=> c\ce{C} + d\ce{D}$:`,
          t`$K_c = \dfrac{[\ce{C}]^c[\ce{D}]^d}{[\ce{A}]^a[\ce{B}]^b}$.`,
          t`$K_c = k_f / k_r$.`,
        ],
      },
      {
        title: "Manipulating K",
        points: [
          t`Reversing the equation: $K' = 1/K$.`,
          t`Multiplying the equation by $n$: $K' = K^n$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $K_c$ for $\ce{N2O4(g) <=> 2NO2(g)}$.`,
      steps: [
        t`Products over reactants.`,
        t`Raise $[\ce{NO2}]$ to the power 2.`,
      ],
      answer: t`$K_c = \dfrac{[\ce{NO2}]^2}{[\ce{N2O4}]}$`,
    },
    visualSpec: t`Mix different starting amounts and watch each run settle to the same value of $K_c$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Inverts the expression.",
      remediation: "Products go on top.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Drops the powers.",
      remediation: "Each concentration is raised to its coefficient.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Adds instead of multiplying.",
      remediation: "Concentrations are multiplied, with coefficients as powers.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Changes the sign.",
      remediation: t`Reversing gives $1/K$, never a negative K.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Keeps K.",
      remediation: "Reversing the equation inverts K.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Takes the square root.",
      remediation: "Reversing inverts K; halving would take the root.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Doubles K.",
      remediation: "Doubling the equation squares K.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Keeps K.",
      remediation: "Each concentration is now squared, so K is squared.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Takes the square root.",
      remediation: "Doubling the equation squares K.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Forgets the square.",
      remediation: t`$54 = 0.85^2/[\ce{H2}]^2$, so take the square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Squares the wrong side.",
      remediation: t`$[\ce{H2}]^2 = 0.85^2/54$; then take the root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Takes the root of the ratio.",
      remediation: t`$[\ce{H2}] = 0.85/\sqrt{54}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Uses a sum of masses.",
      remediation: "Rate is proportional to the product of concentrations.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks rate is independent of concentration.",
      remediation: "More reactant means more collisions and faster reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Uses the products.",
      remediation: "The forward rate depends on the reactants.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (D)" },
      stem: t`For $\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$, $K_c$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "expression" } },
      options: [
        { key: "A", text: t`$\dfrac{[\ce{SO2}]^2[\ce{O2}]}{[\ce{SO3}]^2}$`, correct: false, misconceptionId: "C02-M1", value: "so2sq_o2_over_so3sq" },
        { key: "B", text: t`$\dfrac{[\ce{SO3}]^2}{[\ce{SO2}]^2[\ce{O2}]}$`, correct: true, value: "so3sq_over_so2sq_o2" },
        { key: "C", text: t`$\dfrac{[\ce{SO3}]}{[\ce{SO2}][\ce{O2}]}$`, correct: false, misconceptionId: "C02-M2", value: "so3_over_so2_o2" },
        { key: "D", text: t`$\dfrac{2[\ce{SO3}]}{2[\ce{SO2}] + [\ce{O2}]}$`, correct: false, misconceptionId: "C02-M3", value: "sum_form" },
      ],
      solution: {
        steps: [
          t`Products over reactants, powers from coefficients.`,
          t`$[\ce{SO3}]^2/([\ce{SO2}]^2[\ce{O2}])$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`$\ce{H2 + I2 <=> 2HI}$ has $K_c = 54$. What is $K_c$ for $\ce{2HI <=> H2 + I2}$?`,
      verify: { kind: "value", inputs: { K: "54" }, params: { q: "reverse" } },
      options: [
        { key: "A", text: t`$-54$`, correct: false, misconceptionId: "C02-M4", value: "-54" },
        { key: "B", text: t`$54$`, correct: false, misconceptionId: "C02-M5", value: "54" },
        { key: "C", text: t`$0.0185$`, correct: true, value: "0.0185000000000000" },
        { key: "D", text: t`$7.35$`, correct: false, misconceptionId: "C02-M6", value: "7.35000000000000" },
      ],
      solution: {
        steps: [
          t`Reversing inverts K.`,
          t`$1/54 = 0.0185$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`$\ce{A <=> B}$ has $K = 4$. What is $K$ for $\ce{2A <=> 2B}$?`,
      verify: { kind: "value", inputs: { K: "4" }, params: { q: "double" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C02-M9", value: "2" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C02-M8", value: "4" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C02-M7", value: "8" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`Doubling squares K.`,
          t`$4^2 = 16$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.5" },
      stem: t`Equal amounts of $\ce{H2}$ and $\ce{I2}$ react: $\ce{H2 + I2 <=> 2HI}$, $K_c = 54$. At equilibrium $[\ce{HI}] = 0.85$ M. Find $[\ce{H2}]$.`,
      verify: { kind: "value", inputs: { hi: "0.85", K: "54" }, params: { q: "hi" } },
      options: [
        { key: "A", text: t`$0.116\ \mathrm{M}$`, correct: true, value: "0.116000000000000" },
        { key: "B", text: t`$0.125\ \mathrm{M}$`, correct: false, misconceptionId: "C02-M12", value: "0.125000000000000" },
        { key: "C", text: t`$0.0157\ \mathrm{M}$`, correct: false, misconceptionId: "C02-M10", value: "0.0157000000000000" },
        { key: "D", text: t`$0.0134\ \mathrm{M}$`, correct: false, misconceptionId: "C02-M11", value: "0.0134000000000000" },
      ],
      solution: {
        steps: [
          t`$[\ce{H2}] = [\ce{I2}]$, so $54 = 0.85^2/[\ce{H2}]^2$.`,
          t`$[\ce{H2}] = 0.85/\sqrt{54} = 0.116$ M.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (A)" },
      stem: t`The law of mass action states that the rate of a reaction is proportional to`,
      verify: { kind: "value", inputs: {  }, params: { q: "mass_action" } },
      options: [
        { key: "A", text: t`the product of the products' concentrations`, correct: false, misconceptionId: "C02-M15", value: "products_conc" },
        { key: "B", text: t`the product of the reactants' concentrations, each raised to its coefficient`, correct: true, value: "product_of_powers" },
        { key: "C", text: t`the sum of the reactants' masses`, correct: false, misconceptionId: "C02-M13", value: "sum_of_masses" },
        { key: "D", text: t`nothing: it does not depend on concentration`, correct: false, misconceptionId: "C02-M14", value: "independent" },
      ],
      solution: {
        steps: [
          t`Rate depends on reactants' concentrations.`,
          t`Their product, each raised to its coefficient.`,
        ],
      },
    },
  ],
};
