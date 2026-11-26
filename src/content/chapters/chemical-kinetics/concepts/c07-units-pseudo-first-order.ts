import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A rate constant is written in a notebook as $0.25$, with no unit. Can you tell the order of the reaction?`,
    reveal: t`Not without the unit. $0.25\ \mathrm{s^{-1}}$ means first order; $0.25\ \mathrm{mol^{-1}\,L\,s^{-1}}$ means second order. The units of $k$ carry the order.`,
  },
  explanation: {
    intuition: [
      t`Rate always has the units $\mathrm{mol\,L^{-1}\,s^{-1}}$, whatever the reaction.`,
      t`In rate $= k[\ce{A}]^n$, $k$ makes up whatever units $[\ce{A}]^n$ leaves out.`,
      t`So the units of $k$ change with the order $n$, and they reveal it.`,
      t`A reactant in large **excess** (far more than needed) hardly changes in concentration.`,
      t`Its concentration folds into $k$, and the reaction looks first order: **pseudo first order**.`,
    ],
    formal: [
      {
        title: "Units of k from the order",
        points: [
          t`$k = \dfrac{\text{rate}}{[\ce{A}]^n}$: rate units divided by $(\mathrm{mol\,L^{-1}})^n$.`,
          t`That gives $\mathrm{mol^{1-n}\,L^{n-1}\,s^{-1}}$ for order $n$.`,
          t`Zero order: $\mathrm{mol\,L^{-1}\,s^{-1}}$, the same as rate.`,
          t`First order: $\mathrm{s^{-1}}$, with no concentration in it.`,
          t`Second order: $\mathrm{mol^{-1}\,L\,s^{-1}}$; third order: $\mathrm{mol^{-2}\,L^2\,s^{-1}}$.`,
          t`The book often writes $\mathrm{dm^3}$ for $\mathrm{L}$: $\mathrm{mol\,dm^{-3}\,s^{-1}}$ is zero order.`,
        ],
      },
      {
        title: "Order from the units",
        points: [
          t`In the units of $k$, the power of $\mathrm{mol}$ is $1 - n$.`,
          t`So $n = 1 - (\text{power of mol})$.`,
          t`$\mathrm{mol^{-1}\,L\,s^{-1}}$: the power is $-1$, so $n = 2$.`,
          t`The order comes from experiment, never from the balanced equation's coefficients.`,
        ],
      },
      {
        title: "Pseudo first order reactions",
        points: [
          t`Take rate $= k[\ce{A}][\ce{B}]$, a second order reaction.`,
          t`If $\ce{B}$ is in large excess, $[\ce{B}]$ stays almost constant while $\ce{A}$ reacts.`,
          t`Then rate $= k'[\ce{A}]$, where $k' = k[\ce{B}]$ is in $\mathrm{s^{-1}}$.`,
          t`Example: $\ce{CH3COOC2H5 + H2O}$ $\ce{->[H+] CH3COOH + C2H5OH}$ in plenty of water.`,
          t`Water is the solvent, so $[\ce{H2O}]$ hardly changes as the ester reacts.`,
          t`The reaction is second order but behaves as first order: it is **pseudo first order**.`,
        ],
      },
    ],
    worked: {
      prompt: t`The rate law of $\ce{2NO + O2 -> 2NO2}$ is rate $= k[\ce{NO}]^2[\ce{O2}]$. Find the order and the units of $k$.`,
      steps: [
        t`The order is the sum of the powers: $2 + 1 = 3$.`,
        t`$k = \dfrac{\text{rate}}{[\ce{NO}]^2[\ce{O2}]}$: rate units divided by $(\mathrm{mol\,L^{-1}})^3$.`,
        t`$\mathrm{mol^{1-3}\,L^{3-1}\,s^{-1}}$ $= \mathrm{mol^{-2}\,L^2\,s^{-1}}$.`,
      ],
      answer: t`Third order; $k$ is in $\mathrm{mol^{-2}\,L^2\,s^{-1}}$`,
    },
    visualSpec: t`Slide the order $n$ from $0$ to $3$ and watch the powers of $\mathrm{mol}$ and $\mathrm{L}$ in the units of $k$ change step by step.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Writes the concentration part of $k$'s units as $(\mathrm{mol\,L^{-1}})^{n-1}$, with the exponent flipped.`,
      remediation: t`$k = \dfrac{\text{rate}}{[\ce{A}]^n}$, so its units are $\mathrm{mol^{1-n}\,L^{n-1}\,s^{-1}}$: the power of $\mathrm{mol}$ is $1 - n$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M2",
      mistake: t`Thinks every rate constant is in $\mathrm{s^{-1}}$, as a first order one is.`,
      remediation: t`Only a first order $k$ is in $\mathrm{s^{-1}}$. The units of $k$ change with the order, so they tell you the order.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M3",
      mistake: "Takes the order from the coefficients of the balanced equation.",
      remediation: t`The order comes from the experimental rate law, or from the units of $k$, never from the balanced equation.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M4",
      mistake: t`Drops the reactant in excess, taking $k' = k$.`,
      remediation: t`The excess reactant's concentration is constant, not absent: it folds into the constant, $k' = k[\ce{B}]$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M5",
      mistake: t`Divides by the concentration of the reactant in excess: $k' = \dfrac{k}{[\ce{B}]}$.`,
      remediation: t`rate $= k[\ce{A}][\ce{B}] = k'[\ce{A}]$, so $k' = k[\ce{B}]$: multiply by $[\ce{B}]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Gives the rate, $k[\ce{A}][\ce{B}]$, as the pseudo first order constant.`,
      remediation: t`$k'$ is what multiplies $[\ce{A}]$ in rate $= k'[\ce{A}]$, so $k' = k[\ce{B}]$; leave $[\ce{A}]$ out.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.2 (vi)" },
      stem: t`For $\ce{2A + B -> P}$ the rate law found by experiment is rate $= k[\ce{A}][\ce{B}]$. With concentration in $\mathrm{mol\,L^{-1}}$ and time in seconds, the units of $k$ are`,
      verify: { kind: "value", inputs: { n: "2", ne: "3" }, params: { ask: "units" } },
      options: [
        { key: "A", text: t`$\mathrm{s^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "1/s" },
        { key: "B", text: t`$\mathrm{mol^{-2}\,L^{2}\,s^{-1}}$`, correct: false, misconceptionId: "C07-M3", value: "L**2/(mol**2*s)" },
        { key: "C", text: t`$\mathrm{mol^{-1}\,L\,s^{-1}}$`, correct: true, value: "L/(mol*s)" },
        { key: "D", text: t`$\mathrm{mol\,L^{-1}\,s^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "mol/(L*s)" },
      ],
      solution: {
        steps: [
          t`The order comes from the rate law: $1 + 1 = 2$, whatever the equation's coefficients.`,
          t`Units $= \mathrm{mol^{1-2}\,L^{2-1}\,s^{-1}}$ $= \mathrm{mol^{-1}\,L\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.3 (xiii)" },
      stem: t`The reaction $\ce{A + 2B -> C}$ is found to be zero order. With concentration in $\mathrm{mol\,L^{-1}}$ and time in seconds, the units of $k$ are`,
      verify: { kind: "value", inputs: { n: "0", ne: "3" }, params: { ask: "units" } },
      options: [
        { key: "A", text: t`$\mathrm{mol^{-1}\,L\,s^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "L/(mol*s)" },
        { key: "B", text: t`$\mathrm{s^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "1/s" },
        { key: "C", text: t`$\mathrm{mol^{-2}\,L^{2}\,s^{-1}}$`, correct: false, misconceptionId: "C07-M3", value: "L**2/(mol**2*s)" },
        { key: "D", text: t`$\mathrm{mol\,L^{-1}\,s^{-1}}$`, correct: true, value: "mol/(L*s)" },
      ],
      solution: {
        steps: [
          t`Zero order: rate $= k$, so $k$ has the units of rate.`,
          t`Units $= \mathrm{mol^{1-0}\,L^{0-1}\,s^{-1}}$ $= \mathrm{mol\,L^{-1}\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#20" },
      stem: t`For the reaction $\ce{A + 2B -> products}$, the rate constant has units $\mathrm{mol\,dm^{-3}\,s^{-1}}$. The order of the reaction is`,
      verify: { kind: "value", inputs: { p: "1", ne: "3" }, params: { ask: "order" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C07-M3", value: "3" },
        { key: "B", text: t`$0$`, correct: true, value: "0" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C07-M1", value: "2" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C07-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`The power of $\mathrm{mol}$ in $\mathrm{mol\,dm^{-3}\,s^{-1}}$ is $1$, and it equals $1 - n$.`,
          t`So $n = 0$: these are the units of rate, and the reaction is zero order.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#5" },
      stem: t`The acid hydrolysis of ethyl acetate, $\ce{CH3COOC2H5 + H2O}$ $\ce{-> CH3COOH + C2H5OH}$, has rate $= k[\text{ester}][\ce{H2O}]$, with $k = 1.0 \times 10^{-4}\ \mathrm{L\,mol^{-1}\,s^{-1}}$. In a solution with $[\text{ester}] = 0.10\ \mathrm{mol\,L^{-1}}$ and $[\ce{H2O}] = 55.5\ \mathrm{mol\,L^{-1}}$, the pseudo first order rate constant $k'$ is`,
      verify: { kind: "value", inputs: { k: "1.0e-4", A: "0.10", B: "55.5" }, params: { ask: "pseudo" } },
      options: [
        { key: "A", text: t`$0.00555\ \mathrm{s^{-1}}$`, correct: true, value: "0.00555000000000000" },
        { key: "B", text: t`$1 \times 10^{-4}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C07-M4", value: "0.000100000000000000" },
        { key: "C", text: t`$1.8 \times 10^{-6}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C07-M5", value: "1.80000000000000e-6" },
        { key: "D", text: t`$5.55 \times 10^{-4}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C07-M6", value: "0.000555000000000000" },
      ],
      solution: {
        steps: [
          t`Water is in large excess, so $[\ce{H2O}]$ is constant and rate $= k'[\text{ester}]$.`,
          t`$k' = k[\ce{H2O}]$ $= 1.0 \times 10^{-4} \times 55.5$.`,
          t`$k' = 0.00555\ \mathrm{s^{-1}}$, a first order constant.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.1 (ii)" },
      stem: t`For the reaction $\ce{A + B -> P}$, the rate constant has units $\mathrm{mol^{-1/2}\,L^{1/2}\,s^{-1}}$. The order of the reaction is`,
      verify: { kind: "value", inputs: { p: "-1/2", ne: "2" }, params: { ask: "order" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "1/2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M2", value: "1" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C07-M3", value: "2" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
      ],
      solution: {
        steps: [
          t`The power of $\mathrm{mol}$ is $-\frac{1}{2}$, and it equals $1 - n$.`,
          t`So $n = 1 + \frac{1}{2} = \frac{3}{2}$: an order can be a fraction.`,
        ],
      },
    },
  ],
};
