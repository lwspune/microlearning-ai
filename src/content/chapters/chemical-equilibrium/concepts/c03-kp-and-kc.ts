import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`For gases it is often easier to measure pressures than concentrations. Does an equilibrium constant in pressures equal $K_c$?`,
    reveal: t`Only when the gas moles are equal on both sides. In general $K_p = K_c(RT)^{\Delta n}$.`,
  },
  explanation: {
    intuition: [
      t`For gases, $K_p$ uses partial pressures instead of concentrations.`,
      t`Partial pressure and concentration are linked by $p = cRT$.`,
      t`So $K_p$ and $K_c$ differ by a power of $RT$.`,
      t`The power is the change in moles of gas, $\Delta n$.`,
    ],
    formal: [
      {
        title: "Relation",
        points: [
          t`$K_p = K_c(RT)^{\Delta n}$, with $R = 0.0821$ L atm $\mathrm{K^{-1}\,mol^{-1}}$.`,
          t`$\Delta n$ = gaseous moles of products − of reactants.`,
          t`$\Delta n = 0$: $K_p = K_c$ ($\ce{H2 + I2 <=> 2HI}$).`,
          t`$\ce{N2 + 3H2 <=> 2NH3}$: $\Delta n = -2$, $K_p = K_c(RT)^{-2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Relate $K_p$ and $K_c$ for $\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$.`,
      steps: [
        t`Gas moles: 2 products, 1 reactant: $\Delta n = 1$.`,
        t`$K_p = K_c(RT)$.`,
      ],
      answer: t`$K_p = K_cRT$`,
    },
    visualSpec: t`Count gas molecules on each side of an equation to find the power of $RT$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Flips the sign of $\Delta n$.`,
      remediation: "Products 2 − reactants 4 = −2.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Counts all the moles.",
      remediation: t`$\Delta n$ is a difference, products minus reactants.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Sets $K_p = K_c$.`,
      remediation: t`That holds only when $\Delta n = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Counts only the products.",
      remediation: t`$\Delta n$ = 2 − 2 = 0.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Uses $\Delta n = -1$.`,
      remediation: t`Two gas moles on each side: $\Delta n = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Adds all the moles.",
      remediation: "Subtract: 2 − 2 = 0.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Divides by $RT$.`,
      remediation: t`$\Delta n = +1$: multiply by $RT$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Squares $RT$.`,
      remediation: t`$\Delta n$ = 2 − 1 = 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Leaves $K_c$ unchanged.`,
      remediation: t`$\Delta n \ne 0$, so $K_p \ne K_c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Subtracts the wrong way.",
      remediation: "Products minus reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Counts solids.",
      remediation: t`Only gases count in $\Delta n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Gives the total moles of gas.",
      remediation: t`$\Delta n$ is the change, not the total.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Sets T = 0 K.",
      remediation: t`$K_p = K_c$ when $\Delta n = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Sets R = 1.",
      remediation: t`R has a fixed value; $\Delta n = 0$ makes the factor 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Thinks all species are solids.",
      remediation: t`$K_p$ applies to gases.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.2" },
      stem: t`For $\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$, $K_p$ in terms of $K_c$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ammonia" } },
      options: [
        { key: "A", text: t`$K_p = K_c(RT)^{4}$`, correct: false, misconceptionId: "C03-M2", value: "rt_plus_4" },
        { key: "B", text: t`$K_p = K_c$`, correct: false, misconceptionId: "C03-M3", value: "kp_eq_kc" },
        { key: "C", text: t`$K_p = K_c(RT)^{2}$`, correct: false, misconceptionId: "C03-M1", value: "rt_plus_2" },
        { key: "D", text: t`$K_p = K_c(RT)^{-2}$`, correct: true, value: "rt_minus_2" },
      ],
      solution: {
        steps: [
          t`$\Delta n = 2 - 4 = -2$.`,
          t`$K_p = K_c(RT)^{-2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.3" },
      stem: t`For $\ce{H2(g) + I2(g) <=> 2HI(g)}$, $K_p$ in terms of $K_c$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hi" } },
      options: [
        { key: "A", text: t`$K_p = K_c$`, correct: true, value: "kp_eq_kc" },
        { key: "B", text: t`$K_p = K_c(RT)^{3}$`, correct: false, misconceptionId: "C03-M6", value: "rt_plus_3" },
        { key: "C", text: t`$K_p = K_c(RT)^{-1}$`, correct: false, misconceptionId: "C03-M5", value: "rt_minus_1" },
        { key: "D", text: t`$K_p = K_c(RT)^{2}$`, correct: false, misconceptionId: "C03-M4", value: "rt_plus_2" },
      ],
      solution: {
        steps: [
          t`$\Delta n = 2 - 2 = 0$.`,
          t`$K_p = K_c$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.3 (B)" },
      stem: t`$\ce{N2O4(g) <=> 2NO2(g)}$ has $K_c = 0.5$ at 300 K. Find $K_p$. ($R = 0.0821$ L atm/(K mol))`,
      verify: { kind: "value", inputs: { Kc: "0.5", T: "300" }, params: { q: "n2o4" } },
      options: [
        { key: "A", text: t`$0.0203$`, correct: false, misconceptionId: "C03-M7", value: "0.0203000000000000" },
        { key: "B", text: t`$12.3$`, correct: true, value: "12.3000000000000" },
        { key: "C", text: t`$0.5$`, correct: false, misconceptionId: "C03-M9", value: "0.500000000000000" },
        { key: "D", text: t`$303$`, correct: false, misconceptionId: "C03-M8", value: "303" },
      ],
      solution: {
        steps: [
          t`$\Delta n = 1$; $RT = 0.0821 \times 300 = 24.6$.`,
          t`$K_p = 0.5 \times 24.6 = 12.3$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (C)" },
      stem: t`In $K_p = K_c(RT)^{\Delta n}$, $\Delta n$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dn" } },
      options: [
        { key: "A", text: t`moles of all products, solids included, minus reactants`, correct: false, misconceptionId: "C03-M11", value: "counts_solids" },
        { key: "B", text: t`the total moles of gas`, correct: false, misconceptionId: "C03-M12", value: "total_gas" },
        { key: "C", text: t`moles of gaseous products minus moles of gaseous reactants`, correct: true, value: "gas_products_minus_reactants" },
        { key: "D", text: t`moles of gaseous reactants minus products`, correct: false, misconceptionId: "C03-M10", value: "reactants_minus_products" },
      ],
      solution: {
        steps: [
          t`Count gas moles on each side.`,
          t`Products minus reactants.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`$K_p$ equals $K_c$ when`,
      verify: { kind: "value", inputs: {  }, params: { q: "equal" } },
      options: [
        { key: "A", text: t`all the species are solids`, correct: false, misconceptionId: "C03-M15", value: "all_solids" },
        { key: "B", text: t`the temperature is 0 K`, correct: false, misconceptionId: "C03-M13", value: "zero_kelvin" },
        { key: "C", text: t`R is taken as 1`, correct: false, misconceptionId: "C03-M14", value: "r_is_one" },
        { key: "D", text: t`$\Delta n = 0$`, correct: true, value: "dn_zero" },
      ],
      solution: {
        steps: [
          t`$(RT)^0 = 1$.`,
          t`So $K_p = K_c$ when $\Delta n = 0$.`,
        ],
      },
    },
  ],
};
