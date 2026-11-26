import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`You double the concentration of a reactant. Does the reaction always go twice as fast?`,
    reveal: t`No. For some reactions the rate does not change at all, for others it doubles, and for others it grows even more. Only an experiment tells which.`,
  },
  explanation: {
    intuition: [
      t`The rate of most reactions depends on how much reactant is present.`,
      t`More reactant molecules per litre means more collisions every second.`,
      t`The **rate law** says exactly how the rate depends on each concentration.`,
      t`Each concentration is raised to a power, called the **order** in that reactant.`,
      t`The orders come from experiment; they need not match the coefficients in the equation.`,
      t`Adding the orders gives the overall order of the reaction.`,
    ],
    formal: [
      {
        title: "The rate law",
        points: [
          t`For $a\ce{A} + b\ce{B} \rightarrow$ products, the **rate law** is rate $= k[\ce{A}]^x[\ce{B}]^y$.`,
          t`$k$, the **rate constant**, is fixed for a reaction at a given temperature.`,
          t`$x$ is the **order** in A and $y$ the order in B; $x + y$ is the **overall order**.`,
          t`An order may be zero, a whole number or a fraction.`,
          t`$x$ and $y$ need not equal $a$ and $b$: they are found only by experiment.`,
        ],
      },
      {
        title: "Orders from rate data",
        points: [
          t`Change one concentration and keep every other one fixed.`,
          t`If $[\ce{A}]$ is multiplied by $f$, the rate is multiplied by $f^x$.`,
          t`Doubling $[\ce{A}]$: the rate unchanged means $x = 0$, doubled means $x = 1$, four times means $x = 2$.`,
          t`In general $x = \dfrac{\log(\text{rate factor})}{\log f}$.`,
          t`For example, rate $\times 8$ when $f = 4$ gives $4^x = 8$, so $x = 1.5$.`,
        ],
      },
      {
        title: "Finding the rate constant",
        points: [
          t`Once the orders are known, $k = \dfrac{\text{rate}}{[\ce{A}]^x[\ce{B}]^y}$.`,
          t`Raise each concentration to its order before dividing.`,
          t`The rate is always in $\mathrm{mol\,L^{-1}\,s^{-1}}$, so the unit of $k$ depends on the overall order.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{2NOBr(g) -> 2NO(g) + Br2(g)}$, rate $= k[\ce{NOBr}]^2$. The rate is $6.5 \times 10^{-6}\ \mathrm{mol\,L^{-1}\,s^{-1}}$ when $[\ce{NOBr}] = 2 \times 10^{-3}\ \mathrm{mol\,L^{-1}}$. Find the order and $k$.`,
      steps: [
        t`The power of $[\ce{NOBr}]$ is $2$, so the reaction is second order.`,
        t`$k = \dfrac{\text{rate}}{[\ce{NOBr}]^2}$ $= \dfrac{6.5 \times 10^{-6}}{(2 \times 10^{-3})^2}$.`,
        t`$(2 \times 10^{-3})^2 = 4 \times 10^{-6}$, so $k = 1.625$.`,
        t`Unit: $\dfrac{\mathrm{mol\,L^{-1}\,s^{-1}}}{(\mathrm{mol\,L^{-1}})^2}$ $= \mathrm{mol^{-1}\,L\,s^{-1}}$.`,
      ],
      answer: t`Second order; $k = 1.63\ \mathrm{mol^{-1}\,L\,s^{-1}}$`,
    },
    visualSpec: t`Drag the order slider for one reactant and a concentration slider, and watch the rate bar grow as the concentration raised to that power.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes the orders from the coefficients of the balanced equation.",
      remediation: "Orders are found by experiment and need not equal the coefficients. Use the rate law given, or work the orders out from the rate data.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Solves rate factor $= f^x$ upside down, as $x = \dfrac{\log f}{\log(\text{rate factor})}$.`,
      remediation: t`The rate changes by $f^x$, so $x = \dfrac{\log(\text{rate factor})}{\log f}$: the rate factor goes on top.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C02-M3",
      mistake: "Takes the order as the factor by which the rate changes.",
      remediation: t`The order is the power: if doubling $[\ce{A}]$ makes the rate $8$ times, then $2^x = 8$ and $x = 3$, not $8$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C02-M4",
      mistake: "Leaves out the exponents, as if every concentration were to the first power.",
      remediation: t`Raise each concentration to its order: in rate $= k[\ce{A}][\ce{B}]^2$, $[\ce{B}]$ enters squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Multiplies a concentration, or its factor, by the order instead of raising it to that power.",
      remediation: t`An order is a power: $[\ce{B}]^2$ means $[\ce{B}] \times [\ce{B}]$, not $2[\ce{B}]$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.3 (xvii)" },
      stem: t`For $\ce{2A + B -> products}$, three runs gave these initial rates. $$\begin{array}{c|c|c} [\ce{A}]/\mathrm{M} & [\ce{B}]/\mathrm{M} & \text{rate}/\mathrm{M\,s^{-1}} \\ \hline 0.3 & 0.05 & 0.15 \\ 0.6 & 0.05 & 0.30 \\ 0.6 & 0.10 & 1.20 \end{array}$$ The rate law is`,
      verify: { kind: "value", inputs: { fA: "2", rA: "2", fB: "2", rB: "4", a: "2", b: "1" }, params: { ask: "law" } },
      options: [
        { key: "A", text: t`rate $= k[\ce{A}][\ce{B}]^2$`, correct: true, value: "law_a1_b2" },
        { key: "B", text: t`rate $= k[\ce{A}]^2[\ce{B}]$`, correct: false, misconceptionId: "C02-M1", value: "law_a2_b1" },
        { key: "C", text: t`rate $= k[\ce{A}][\ce{B}]^{1/2}$`, correct: false, misconceptionId: "C02-M2", value: "law_a1_b1over2" },
        { key: "D", text: t`rate $= k[\ce{A}]^2[\ce{B}]^4$`, correct: false, misconceptionId: "C02-M3", value: "law_a2_b4" },
      ],
      solution: {
        steps: [
          t`Runs 1 and 2: $[\ce{B}]$ fixed, $[\ce{A}]$ doubles and the rate doubles: $2^x = 2$, so $x = 1$.`,
          t`Runs 2 and 3: $[\ce{A}]$ fixed, $[\ce{B}]$ doubles and the rate becomes $4$ times: $2^y = 4$, so $y = 2$.`,
          t`Rate $= k[\ce{A}][\ce{B}]^2$, although the equation has $\ce{2A}$ and $\ce{B}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.5" },
      stem: t`The reaction $\ce{2A + B -> P}$ is first order in A and second order in B. Its rate is $3.6 \times 10^{-2}\ \mathrm{mol\,dm^{-3}\,s^{-1}}$ when $[\ce{A}] = 0.2\ \mathrm{mol\,dm^{-3}}$ and $[\ce{B}] = 0.1\ \mathrm{mol\,dm^{-3}}$. The rate constant is`,
      verify: { kind: "value", inputs: { rate: "0.036", A: "0.2", B: "0.1", x: "1", y: "2", a: "2", b: "1" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$9\ \mathrm{mol^{-2}\,dm^{6}\,s^{-1}}$`, correct: false, misconceptionId: "C02-M1", value: "9" },
        { key: "B", text: t`$1.8\ \mathrm{mol^{-2}\,dm^{6}\,s^{-1}}$`, correct: false, misconceptionId: "C02-M4", value: "1.80000000000000" },
        { key: "C", text: t`$0.9\ \mathrm{mol^{-2}\,dm^{6}\,s^{-1}}$`, correct: false, misconceptionId: "C02-M5", value: "0.900000000000000" },
        { key: "D", text: t`$18\ \mathrm{mol^{-2}\,dm^{6}\,s^{-1}}$`, correct: true, value: "18" },
      ],
      solution: {
        steps: [
          t`Rate $= k[\ce{A}][\ce{B}]^2$, so $k = \dfrac{3.6 \times 10^{-2}}{0.2 \times (0.1)^2}$.`,
          t`$0.2 \times 0.01 = 2 \times 10^{-3}$, so $k = 18\ \mathrm{mol^{-2}\,dm^{6}\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.2 (ii)" },
      stem: t`For $\ce{2NO(g) + 2H2(g)}$ $\ce{-> N2(g) + 2H2O(g)}$, rate $= k[\ce{NO}]^2[\ce{H2}]$. If $[\ce{NO}]$ is tripled and $[\ce{H2}]$ is halved, the rate becomes`,
      verify: { kind: "value", inputs: { fA: "3", fB: "1/2", x: "2", y: "1", a: "2", b: "2" }, params: { ask: "factor" } },
      options: [
        { key: "A", text: t`$3$ times as fast`, correct: false, misconceptionId: "C02-M5", value: "3" },
        { key: "B", text: t`$4.5$ times as fast`, correct: true, value: "4.50000000000000" },
        { key: "C", text: t`$2.25$ times as fast`, correct: false, misconceptionId: "C02-M1", value: "2.25000000000000" },
        { key: "D", text: t`$1.5$ times as fast`, correct: false, misconceptionId: "C02-M4", value: "1.50000000000000" },
      ],
      solution: {
        steps: [
          t`$[\ce{NO}]$ tripled: the rate is multiplied by $3^2 = 9$.`,
          t`$[\ce{H2}]$ halved: the rate is multiplied by $\left(\tfrac{1}{2}\right)^1 = \tfrac{1}{2}$.`,
          t`Together, $9 \times \tfrac{1}{2} = 4.5$: the rate becomes $4.5$ times as fast.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#10" },
      stem: t`For $\ce{A ->}$ products, the rate triples when the concentration of A is made $9$ times as large. The order of the reaction is`,
      verify: { kind: "value", inputs: { f: "9", rf: "3", a: "1" }, params: { ask: "order1" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C02-M3", value: "3" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C02-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`The rate is multiplied by $9^x$, so $9^x = 3$.`,
          t`$9^{1/2} = 3$, so $x = \tfrac{1}{2}$: the order is $0.5$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#19" },
      stem: t`For $\ce{A + B -> P}$, doubling $[\ce{B}]$ at constant $[\ce{A}]$ makes the rate $4$ times as fast. Tripling $[\ce{A}]$ and doubling $[\ce{B}]$ together makes it $12$ times as fast. The overall order is`,
      verify: { kind: "value", inputs: { fA: "3", fB: "2", rB: "4", r2: "12", a: "1", b: "1" }, params: { ask: "overall" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C02-M3", value: "7" },
        { key: "B", text: t`$3$`, correct: true, value: "3" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C02-M2", value: "3/2" },
      ],
      solution: {
        steps: [
          t`$[\ce{B}]$ doubled alone makes the rate $4$ times: $2^y = 4$, so $y = 2$.`,
          t`Both changed: $3^x \times 2^2 = 12$, so $3^x = 3$ and $x = 1$.`,
          t`Overall order $= x + y = 1 + 2 = 3$.`,
        ],
      },
    },
  ],
};
