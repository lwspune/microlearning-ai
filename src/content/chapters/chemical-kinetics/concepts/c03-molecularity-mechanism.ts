import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`For $\ce{4HBr + O2 -> 2H2O + 2Br2}$ to happen in one go, five molecules would have to hit one another at the same instant. How likely is that?`,
    reveal: t`Almost never. The reaction goes by simple steps, each a collision of two particles (rarely three). The slowest of these steps sets the rate.`,
  },
  explanation: {
    intuition: [
      t`Most reactions do not happen in one go, but in a series of simple steps.`,
      t`An **elementary reaction** is one such step, happening exactly as written.`,
      t`Its **molecularity** is the number of particles that collide in that step.`,
      t`The steps together are the **mechanism** of the reaction.`,
      t`Like a queue at the slowest counter, the slowest step sets the overall rate.`,
      t`So the rate law comes from the slow step, not from the overall equation.`,
    ],
    formal: [
      {
        title: "Molecularity",
        points: [
          t`An **elementary reaction** takes place in a single step, exactly as its equation is written.`,
          t`Its **molecularity** is the number of reactant particles that collide in that step.`,
          t`One particle breaking up is **unimolecular**, as in $\ce{O3 -> O2 + O}$.`,
          t`Two colliding is **bimolecular**; count particles, not kinds: $\ce{2HI -> H2 + I2}$ is bimolecular.`,
          t`Three is **termolecular** and rare; four particles almost never meet at once.`,
        ],
      },
      {
        title: "Rate law of one step",
        points: [
          t`For an elementary step, the rate law follows from its own equation.`,
          t`An elementary $\ce{A + B ->}$ products has rate $= k[\ce{A}][\ce{B}]$.`,
          t`An elementary $\ce{2A ->}$ products has rate $= k[\ce{A}]^2$.`,
          t`So for a single step, the order equals the molecularity.`,
          t`An overall reaction is different: its order is found only by experiment.`,
        ],
      },
      {
        title: "Mechanism and slow step",
        points: [
          t`A **complex reaction** goes by a series of elementary steps, called its **mechanism**.`,
          t`An **intermediate** is formed in one step and used up in a later one.`,
          t`Adding the steps cancels the intermediates and gives the overall equation.`,
          t`The slowest step is the **rate determining step**: the reaction goes no faster than it.`,
          t`So the overall rate law is the rate law of the slow step.`,
        ],
      },
      {
        title: "Order versus molecularity",
        points: [
          t`Molecularity is a theoretical count, for one elementary step only.`,
          t`It is always a whole number, $1$, $2$ or $3$, and never zero.`,
          t`Order is found by experiment, for the overall reaction.`,
          t`It can be zero, a whole number or a fraction.`,
        ],
      },
    ],
    worked: {
      prompt: t`A reaction goes in two steps. (1) $\ce{NO + Cl2 -> NOCl2}$ (slow); (2) $\ce{NOCl2 + NO -> 2NOCl}$ (fast). Find the overall equation, the intermediate and the rate law.`,
      steps: [
        t`Add the steps: $\ce{2NO + Cl2 + NOCl2}$ $\ce{-> NOCl2 + 2NOCl}$.`,
        t`$\ce{NOCl2}$ appears on both sides, so cancel it: $\ce{2NO + Cl2 -> 2NOCl}$.`,
        t`$\ce{NOCl2}$ is formed in step 1 and used in step 2: it is the intermediate.`,
        t`Each step has two colliding particles, so both are bimolecular.`,
        t`Step 1 is slow, so rate $= k[\ce{NO}][\ce{Cl2}]$: first order in NO, though the equation has $\ce{2NO}$.`,
      ],
      answer: t`$\ce{2NO + Cl2 -> 2NOCl}$; intermediate $\ce{NOCl2}$; rate $= k[\ce{NO}][\ce{Cl2}]$`,
    },
    visualSpec: t`Play a two-step mechanism as two conveyor belts of different speeds, and watch the product pile up only as fast as the slower belt allows.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Writes the rate law from the overall equation.",
      remediation: "A complex reaction's rate law is that of its slowest step; the coefficients of the overall equation do not give the orders.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: "Writes the rate law from the fast step.",
      remediation: "The slowest step decides the rate: the reaction can go no faster than its rate determining step.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks even an elementary step's order must come from experiment.",
      remediation: "For a single elementary step the rate law follows its equation, so its order equals its molecularity. Only an overall reaction needs experiment.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Treats molecularity like order: found by experiment, and possibly zero or a fraction.",
      remediation: t`Molecularity counts the particles colliding in one step, so it is always $1$, $2$ or $3$. Only order is measured, and only order can be zero or a fraction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Counts the kinds of reactant in a step, not the particles that collide.",
      remediation: t`Count every particle: in $\ce{2HI -> H2 + I2}$ two HI molecules collide, so the step is bimolecular and rate $= k[\ce{HI}]^2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.7" },
      stem: t`A reaction goes in two steps. (i) $\ce{NO2 + F2 -> NO2F + F}$ (slow); (ii) $\ce{F + NO2 -> NO2F}$ (fast). The rate law of the overall reaction is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nof2" } },
      options: [
        { key: "A", text: t`rate $= k[\ce{F}][\ce{NO2}]$`, correct: false, misconceptionId: "C03-M2", value: "rl_f_no2" },
        { key: "B", text: t`It cannot be written without measuring rates`, correct: false, misconceptionId: "C03-M3", value: "rl_unpredictable" },
        { key: "C", text: t`rate $= k[\ce{NO2}][\ce{F2}]$`, correct: true, value: "rl_no2_f2" },
        { key: "D", text: t`rate $= k[\ce{NO2}]^2[\ce{F2}]$`, correct: false, misconceptionId: "C03-M1", value: "rl_no2sq_f2" },
      ],
      solution: {
        steps: [
          t`Step (i) is slow, so it decides the rate.`,
          t`Its equation gives rate $= k[\ce{NO2}][\ce{F2}]$; F is only an intermediate.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.4" },
      stem: t`$\ce{2NO + 2H2 -> N2 + 2H2O}$ goes in two steps. (i) $\ce{2NO + H2 -> N2 + H2O2}$ (slow); (ii) $\ce{H2O2 + H2 -> 2H2O}$ (fast). The rate law is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "noh2" } },
      options: [
        { key: "A", text: t`rate $= k[\ce{H2O2}][\ce{H2}]$`, correct: false, misconceptionId: "C03-M2", value: "rl_h2o2_h2" },
        { key: "B", text: t`rate $= k[\ce{NO}][\ce{H2}]$`, correct: false, misconceptionId: "C03-M5", value: "rl_no_h2" },
        { key: "C", text: t`rate $= k[\ce{NO}]^2[\ce{H2}]$`, correct: true, value: "rl_nosq_h2" },
        { key: "D", text: t`rate $= k[\ce{NO}]^2[\ce{H2}]^2$`, correct: false, misconceptionId: "C03-M1", value: "rl_nosq_h2sq" },
      ],
      solution: {
        steps: [
          t`Step (i) is slow and elementary, so the rate law follows its equation.`,
          t`Two NO molecules and one $\ce{H2}$ collide: rate $= k[\ce{NO}]^2[\ce{H2}]$, third order.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#11" },
      stem: t`The elementary reaction $\ce{2NO(g) + O2(g) -> 2NO2(g)}$ is`,
      verify: { kind: "value", inputs: { n: "3", s: "2" }, params: { ask: "elem" } },
      options: [
        { key: "A", text: t`termolecular; its order can be found only by experiment`, correct: false, misconceptionId: "C03-M3", value: "mol3_ordexp" },
        { key: "B", text: t`third order; its molecularity can be found only by experiment`, correct: false, misconceptionId: "C03-M4", value: "molexp_ord3" },
        { key: "C", text: t`bimolecular and second order`, correct: false, misconceptionId: "C03-M5", value: "mol2_ord2" },
        { key: "D", text: t`termolecular and third order`, correct: true, value: "mol3_ord3" },
      ],
      solution: {
        steps: [
          t`Two NO molecules and one $\ce{O2}$ collide: three particles, so it is termolecular.`,
          t`It is a single step, so rate $= k[\ce{NO}]^2[\ce{O2}]$: third order, equal to its molecularity.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.3 (ii)" },
      stem: t`Which statement about order and molecularity is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "statement" } },
      options: [
        { key: "A", text: t`Neither can be read off an equation, not even for an elementary step.`, correct: false, misconceptionId: "C03-M3", value: "st_neither" },
        { key: "B", text: t`Both are found by experiment, and either may be zero or a fraction.`, correct: false, misconceptionId: "C03-M4", value: "st_both_exp" },
        { key: "C", text: t`Molecularity is the whole number of particles colliding in one elementary step; order is found by experiment and may be zero or a fraction.`, correct: true, value: "st_key" },
        { key: "D", text: t`The order of any reaction is the sum of the coefficients of the reactants in its balanced equation.`, correct: false, misconceptionId: "C03-M1", value: "st_coeffs" },
      ],
      solution: {
        steps: [
          t`Molecularity counts the particles in one elementary step, so it is $1$, $2$ or $3$.`,
          t`Order is measured for the whole reaction, and can be zero or a fraction.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.1 (viii)" },
      stem: t`The elementary reaction $\ce{2NO2(g) -> NO3(g) + NO(g)}$ is`,
      verify: { kind: "value", inputs: { n: "2", s: "1" }, params: { ask: "elem" } },
      options: [
        { key: "A", text: t`bimolecular and second order`, correct: true, value: "mol2_ord2" },
        { key: "B", text: t`bimolecular; its order can be found only by experiment`, correct: false, misconceptionId: "C03-M3", value: "mol2_ordexp" },
        { key: "C", text: t`second order; its molecularity can be found only by experiment`, correct: false, misconceptionId: "C03-M4", value: "molexp_ord2" },
        { key: "D", text: t`unimolecular and first order`, correct: false, misconceptionId: "C03-M5", value: "mol1_ord1" },
      ],
      solution: {
        steps: [
          t`Two $\ce{NO2}$ molecules collide: the step is bimolecular.`,
          t`It is a single step, so rate $= k[\ce{NO2}]^2$: second order.`,
        ],
      },
    },
  ],
};
