import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`In a sealed bottle of soda the fizz seems to stop, yet $\ce{CO2}$ molecules never stop moving between gas and liquid. How can nothing seem to happen while so much is happening?`,
    reveal: t`Molecules escape the liquid exactly as fast as others dissolve back. The rates balance: a dynamic equilibrium.`,
  },
  explanation: {
    intuition: [
      t`Many reactions can run both forward and backward: they are **reversible**.`,
      t`In a closed system the forward rate falls and the backward rate rises until they are equal.`,
      t`Then concentrations stop changing: **equilibrium**.`,
      t`Both reactions still go on: the equilibrium is **dynamic**.`,
    ],
    formal: [
      {
        title: "Equilibrium",
        points: [
          t`Forward rate = backward rate.`,
          t`Concentrations stay constant, but are not usually equal.`,
          t`It is reached only in a closed system, from either direction.`,
        ],
      },
      {
        title: "Examples",
        points: [
          t`Physical: $\ce{H2O(l) <=> H2O(g)}$ in a sealed flask.`,
          t`Chemical: $\ce{H2 + I2 <=> 2HI}$; ionic: $\ce{H2O <=> H+ + OH-}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a sealed flask, $\ce{N2O4}$ and $\ce{NO2}$ stop changing in amount. Have the reactions stopped?`,
      steps: [
        t`At equilibrium both reactions continue.`,
        t`Their rates are equal, so amounts stay constant.`,
      ],
      answer: t`No: they continue at equal rates`,
    },
    visualSpec: t`Plot forward and backward rates against time and watch them meet.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Calls the equilibrium static.",
      remediation: "Ions keep forming and recombining at equal rates: dynamic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls it physical.",
      remediation: "Bonds break and form: it is a chemical (ionic) equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls it mechanical.",
      remediation: "Chemical equilibria are dynamic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks concentrations become equal.",
      remediation: "Concentrations become constant, not equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks both reactions stop.",
      remediation: "Both continue at equal rates.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks the forward rate becomes zero.",
      remediation: "The forward rate equals the backward rate, not zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks it goes to completion.",
      remediation: "A reversible reaction stops short, at equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks it needs heating.",
      remediation: "Reversibility does not depend on heating.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks there are no products.",
      remediation: "Products form and turn back into reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks air would react.",
      remediation: "In an open system products escape, so the backward reaction cannot keep up.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks heat must be kept in.",
      remediation: "Matter, not heat, must stay in.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks the pressure must be zero.",
      remediation: "The system must be closed so products remain.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks concentrations keep changing.",
      remediation: "At equilibrium they are constant.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks they all become equal.",
      remediation: "They are constant, usually unequal.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks the reactions stop.",
      remediation: "Both continue: the balance is dynamic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.1 (A)" },
      stem: t`The equilibrium $\ce{H2O(l) <=> H+(aq) + OH-(aq)}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "water" } },
      options: [
        { key: "A", text: t`mechanical`, correct: false, misconceptionId: "C01-M3", value: "mechanical" },
        { key: "B", text: t`static`, correct: false, misconceptionId: "C01-M1", value: "static" },
        { key: "C", text: t`physical`, correct: false, misconceptionId: "C01-M2", value: "physical" },
        { key: "D", text: t`dynamic`, correct: true, value: "dynamic" },
      ],
      solution: {
        steps: [
          t`Water ionises and ions recombine all the time.`,
          t`Dynamic.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (L)" },
      stem: t`A reaction is at equilibrium when`,
      verify: { kind: "value", inputs: {  }, params: { q: "rates" } },
      options: [
        { key: "A", text: t`the forward and backward rates are equal`, correct: true, value: "rates_equal" },
        { key: "B", text: t`reactant and product concentrations are equal`, correct: false, misconceptionId: "C01-M4", value: "conc_equal" },
        { key: "C", text: t`both reactions have stopped`, correct: false, misconceptionId: "C01-M5", value: "both_stop" },
        { key: "D", text: t`the forward rate has become zero`, correct: false, misconceptionId: "C01-M6", value: "forward_zero" },
      ],
      solution: {
        steps: [
          t`Both reactions continue.`,
          t`Their rates are equal.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (J)" },
      stem: t`A reversible reaction is one that`,
      verify: { kind: "value", inputs: {  }, params: { q: "reversible" } },
      options: [
        { key: "A", text: t`happens only on heating`, correct: false, misconceptionId: "C01-M8", value: "needs_heat" },
        { key: "B", text: t`can go both ways and reaches equilibrium in a closed system`, correct: true, value: "both_directions" },
        { key: "C", text: t`forms no products`, correct: false, misconceptionId: "C01-M9", value: "no_products" },
        { key: "D", text: t`always goes to completion`, correct: false, misconceptionId: "C01-M7", value: "completion" },
      ],
      solution: {
        steps: [
          t`Products can turn back into reactants.`,
          t`In a closed system it reaches equilibrium.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.3 (A)" },
      stem: t`Equilibrium is reached only in a closed system because`,
      verify: { kind: "value", inputs: {  }, params: { q: "closed" } },
      options: [
        { key: "A", text: t`heat must be kept in`, correct: false, misconceptionId: "C01-M11", value: "keep_heat" },
        { key: "B", text: t`air would otherwise react with the products`, correct: false, misconceptionId: "C01-M10", value: "air_reacts" },
        { key: "C", text: t`products must stay so the backward reaction can occur`, correct: true, value: "products_stay" },
        { key: "D", text: t`the pressure must be zero`, correct: false, misconceptionId: "C01-M12", value: "zero_pressure" },
      ],
      solution: {
        steps: [
          t`Products must be present to react back.`,
          t`A closed system keeps them.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.3 (A)" },
      stem: t`At equilibrium, the concentrations of reactants and products`,
      verify: { kind: "value", inputs: {  }, params: { q: "concentrations" } },
      options: [
        { key: "A", text: t`stay constant because both reactions have stopped`, correct: false, misconceptionId: "C01-M15", value: "reactions_stop" },
        { key: "B", text: t`keep changing`, correct: false, misconceptionId: "C01-M13", value: "keep_changing" },
        { key: "C", text: t`all become equal`, correct: false, misconceptionId: "C01-M14", value: "all_equal" },
        { key: "D", text: t`stay constant while both reactions continue`, correct: true, value: "constant_reactions_go_on" },
      ],
      solution: {
        steps: [
          t`Rates are equal.`,
          t`Concentrations stay constant as reactions continue.`,
        ],
      },
    },
  ],
};
