import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`$\frac{dy}{dx} + y = y^2$ looks almost linear, but the $y^2$ spoils it. Can a substitution rescue it?`,
    reveal: t`Yes: divide by $y^2$ and put $v = \frac1y$. The equation becomes linear in $v$.`,
  },
  explanation: {
    intuition: [
      t`A linear equation has $y$ and $\frac{dy}{dx}$ only to the first power.`,
      t`**Bernoulli's equation** adds a power of $y$ on the right.`,
      t`Dividing by that power and putting $v = y^{1-n}$ makes it linear.`,
      t`Then solve with the integrating factor and turn $v$ back into $y$.`,
    ],
    formal: [
      {
        title: "Bernoulli's equation",
        points: [
          t`$\frac{dy}{dx} + Py = Qy^n$, with $P$, $Q$ functions of $x$.`,
          t`Divide by $y^n$ and put $v = y^{1-n}$.`,
          t`Then $\frac{dv}{dx} + (1 - n)Pv = (1 - n)Q$.`,
          t`Solve this linear equation for $v$.`,
          t`Finally replace $v$ by $y^{1-n}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Turn $\frac{dy}{dx} - \frac{y}{x} = y^2$ into a linear equation.`,
      steps: [
        t`$n = 2$: put $v = y^{-1}$.`,
        t`$\frac{dv}{dx} + (1 - 2)\left(-\frac1x\right)v = (1 - 2) \cdot 1$`,
        t`$\frac{dv}{dx} + \frac{v}{x} = -1$`,
      ],
      answer: t`$\dfrac{dv}{dx} + \dfrac{v}{x} = -1$, with $v = \dfrac1y$`,
    },
    visualSpec: t`Two panels: the original curve family in $y$, and the straightened linear family in $v = y^{1-n}$.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Puts $v = y^n$.`,
      remediation: t`Use $v = y^{1-n}$: here $y^{-2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Puts $v = y^{-n}$.`,
      remediation: t`The power is $1 - n$, not $-n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Puts $v = y^{n-1}$.`,
      remediation: t`The power is $1 - n$, which is negative here.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Keeps $P$.`,
      remediation: t`The coefficient becomes $(1 - n)P$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Flips the sign.",
      remediation: t`$(1 - n)P = -2 \cdot \frac1x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Multiplies by $-n$.`,
      remediation: t`Multiply by $1 - n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: t`Takes $x^2$.`,
      remediation: t`I.F. $= e^{\int -2/x\,dx} = x^{-2}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M8",
      mistake: t`Takes $e^{-2/x}$.`,
      remediation: t`Integrate $-\frac2x$ first: $-2\log x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Gives the exponent as the factor.",
      remediation: t`I.F. is $e^{-2\log x} = x^{-2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Picks a linear equation.",
      remediation: "A linear equation needs no substitution.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Picks a homogeneous equation.",
      remediation: t`Homogeneous equations use $y = vx$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Picks a separable equation.",
      remediation: "A separable equation needs no substitution.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Forgets to invert v.",
      remediation: t`$v = \frac1y$, so $y = \frac1v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Flips the exponent.",
      remediation: t`$\frac{dv}{dx} - v = -1$ gives $v = 1 + Ce^{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Drops the 1.",
      remediation: t`The particular part of $v$ is 1: $v = 1 + Ce^x$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`To solve $\dfrac{dy}{dx} + \dfrac{y}{x} = x^2y^3$, the right substitution is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sub" } },
      options: [
        { key: "A", text: t`$v = y^3$`, correct: false, misconceptionId: "C10-M1", value: "y_cubed" },
        { key: "B", text: t`$v = y^{-3}$`, correct: false, misconceptionId: "C10-M2", value: "y_minus_three" },
        { key: "C", text: t`$v = y^2$`, correct: false, misconceptionId: "C10-M3", value: "y_squared" },
        { key: "D", text: t`$v = y^{-2}$`, correct: true, value: "y_minus_two" },
      ],
      solution: {
        steps: [
          t`$n = 3$, so $1 - n = -2$.`,
          t`$v = y^{-2}$`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`With $v = y^{-2}$, the equation $\dfrac{dy}{dx} + \dfrac{y}{x} = x^2y^3$ becomes $\dfrac{dv}{dx} + Pv = Q$, where $P =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "coeff" } },
      options: [
        { key: "A", text: t`$-\dfrac{2}{x}$`, correct: true, value: "minus_two_over_x" },
        { key: "B", text: t`$\dfrac{1}{x}$`, correct: false, misconceptionId: "C10-M4", value: "one_over_x" },
        { key: "C", text: t`$\dfrac{2}{x}$`, correct: false, misconceptionId: "C10-M5", value: "two_over_x" },
        { key: "D", text: t`$-\dfrac{3}{x}$`, correct: false, misconceptionId: "C10-M6", value: "minus_three_over_x" },
      ],
      solution: {
        steps: [
          t`Coefficient $(1 - n)P = -2 \cdot \frac1x$`,
          t`$-\frac2x$`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`The integrating factor of $\dfrac{dv}{dx} - \dfrac{2}{x}v = -2x^2$ ($x > 0$) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "factor" } },
      options: [
        { key: "A", text: t`$-2\log x$`, correct: false, misconceptionId: "C10-M9", value: "minus_two_log_x" },
        { key: "B", text: t`$x^{-2}$`, correct: true, value: "x_minus_two" },
        { key: "C", text: t`$x^2$`, correct: false, misconceptionId: "C10-M7", value: "x_two" },
        { key: "D", text: t`$e^{-2/x}$`, correct: false, misconceptionId: "C10-M8", value: "e_minus_two_over_x" },
      ],
      solution: {
        steps: [
          t`$e^{\int -2/x\,dx} = e^{-2\log x}$`,
          t`$= x^{-2}$`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`Which of these is a Bernoulli equation that needs a substitution to become linear?`,
      verify: { kind: "value", inputs: {  }, params: { q: "which" } },
      options: [
        { key: "A", text: t`$\dfrac{dy}{dx} = \dfrac{x + y}{x}$`, correct: false, misconceptionId: "C10-M11", value: "homogeneous" },
        { key: "B", text: t`$\dfrac{dy}{dx} = xy$`, correct: false, misconceptionId: "C10-M12", value: "separable" },
        { key: "C", text: t`$\dfrac{dy}{dx} + y = xy^2$`, correct: true, value: "bernoulli_form" },
        { key: "D", text: t`$\dfrac{dy}{dx} + y = x$`, correct: false, misconceptionId: "C10-M10", value: "linear" },
      ],
      solution: {
        steps: [
          t`$\frac{dy}{dx} + y = xy^2$ has $y^2$ on the right.`,
          t`It is Bernoulli's form with $n = 2$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`The general solution of $\dfrac{dy}{dx} + y = y^2$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "solve" } },
      options: [
        { key: "A", text: t`$y = \dfrac{1}{1 + Ce^{x}}$`, correct: true, value: "inverse_one_plus_ce" },
        { key: "B", text: t`$y = 1 + Ce^{x}$`, correct: false, misconceptionId: "C10-M13", value: "one_plus_ce" },
        { key: "C", text: t`$y = \dfrac{1}{1 + Ce^{-x}}$`, correct: false, misconceptionId: "C10-M14", value: "inverse_one_plus_ce_minus" },
        { key: "D", text: t`$y = \dfrac{1}{Ce^{x}}$`, correct: false, misconceptionId: "C10-M15", value: "inverse_ce" },
      ],
      solution: {
        steps: [
          t`$v = \frac1y$: $\frac{dv}{dx} - v = -1$`,
          t`$v = 1 + Ce^x$`,
          t`$y = \frac{1}{1 + Ce^x}$`,
        ],
      },
    },
  ],
};
