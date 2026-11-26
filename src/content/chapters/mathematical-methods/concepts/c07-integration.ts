import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A car speeds up steadily, so its velocity is different at every instant. Distance is velocity times time, but which velocity do you use?`,
    reveal: t`None of them on its own. Cut the time into tiny pieces, multiply each piece by the velocity during it, and add them all up. That sum is the **integral** $\displaystyle\int v\,dt$.`,
  },
  explanation: {
    intuition: [
      t`Distance $=$ velocity $\times$ time works only when the velocity stays the same.`,
      t`When it changes, cut the time into small pieces $dt$, so short that $v$ hardly changes in each.`,
      t`Each piece gives a small displacement $v\,dt$.`,
      t`Adding all these small pieces is **integration**.`,
      t`On a velocity-time graph, the sum is the area under the curve.`,
    ],
    formal: [
      {
        title: "Integration as the reverse",
        points: [
          t`Integration undoes differentiation: if $\dfrac{dF}{dx} = f(x)$, then $\displaystyle\int f(x)\,dx$ $= F(x) + C$.`,
          t`$C$ is a **constant of integration**: differentiating any constant gives $0$, so it cannot be known.`,
          t`An integral without limits, like this, is an **indefinite integral**.`,
          t`Check any answer by differentiating it: you should get back $f(x)$.`,
        ],
      },
      {
        title: "Standard integrals",
        points: [
          t`$\displaystyle\int x^n\,dx$ $= \dfrac{x^{n+1}}{n+1} + C$, for $n \ne -1$: raise the power, then divide by the new power.`,
          t`$\displaystyle\int \sin x\,dx$ $= -\cos x + C$, since $\dfrac{d}{dx}(-\cos x) = \sin x$.`,
          t`$\displaystyle\int \cos x\,dx$ $= \sin x + C$.`,
          t`A sum integrates term by term: $\displaystyle\int (f_1 + f_2)\,dx$ $= \displaystyle\int f_1\,dx + \int f_2\,dx$.`,
        ],
      },
      {
        title: "Definite integrals",
        points: [
          t`With limits $a$ and $b$: $\displaystyle\int_a^b f(x)\,dx$ $= F(b) - F(a)$.`,
          t`Find $F$ first; put in the upper limit, then subtract its value at the lower limit.`,
          t`The constant $C$ cancels, so a definite integral is a plain number.`,
          t`It equals the area between the graph of $f$ and the $x$-axis, from $x = a$ to $x = b$.`,
        ],
      },
      {
        title: "In physics",
        points: [
          t`Displacement from velocity: $s$ $= \displaystyle\int_{t_1}^{t_2} v\,dt$, the area under the $v$–$t$ graph.`,
          t`Velocity from acceleration: $v_2 - v_1$ $= \displaystyle\int_{t_1}^{t_2} a\,dt$.`,
          t`Work by a varying force: $W$ $= \displaystyle\int_{x_1}^{x_2} F\,dx$.`,
          t`Multiplying by the final value alone is right only when the quantity stays constant.`,
        ],
      },
    ],
    worked: {
      prompt: t`The velocity of a particle is $v = 2t + 1$, with $v$ in $\mathrm{m/s}$ and $t$ in seconds. Find its displacement from $t = 1\ \mathrm{s}$ to $t = 3\ \mathrm{s}$.`,
      steps: [
        t`$s$ $= \displaystyle\int_1^3 (2t + 1)\,dt$.`,
        t`An integral of $2t + 1$ is $t^2 + t$ (differentiate to check).`,
        t`$s = (3^2 + 3) - (1^2 + 1)$ $= 12 - 2 = 10\ \mathrm{m}$.`,
      ],
      answer: t`$10\ \mathrm{m}$`,
    },
    visualSpec: t`Fill the area under a velocity-time curve with thin strips and watch their total settle on the integral as the strips get thinner.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Differentiates instead of integrating.",
      remediation: t`Integration is the reverse of differentiation: the power goes **up**, $\displaystyle\int x^n\,dx$ $= \dfrac{x^{n+1}}{n+1}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M2",
      mistake: "Raises the power but does not divide by it.",
      remediation: t`Differentiate $x^{n+1}$ and you get $(n+1)x^n$; divide by $n + 1$ to get back $x^n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Divides by the old power.",
      remediation: t`Divide by the **new** power, $n + 1$: $\displaystyle\int x^5\,dx$ $= \dfrac{x^6}{6} + C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Uses only the upper limit.",
      remediation: t`A definite integral is $F(b) - F(a)$: subtract the value at the lower limit too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Subtracts the wrong way round.",
      remediation: t`Upper limit minus lower limit: $F(b) - F(a)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Puts the limits into the integrand itself.",
      remediation: t`Integrate first to get $F$, then put the limits into $F$, not into $f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Takes the integral of $\sin x$ as $\cos x$.`,
      remediation: t`$\dfrac{d}{dx}(\cos x) = -\sin x$, so $\displaystyle\int \sin x\,dx$ $= -\cos x + C$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M8",
      mistake: "Adds the values at the two limits.",
      remediation: t`$\displaystyle\int_a^b f\,dx$ $= F(b) - F(a)$: a difference, not a sum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Multiplies the final value by the whole interval.",
      remediation: "That treats the quantity as constant. It changes, so add up its small pieces: integrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Gives the integrand's value at the end.",
      remediation: t`Displacement (or work) is the integral, the area under the graph, not the value of $v$ (or $F$) at one point.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.11" },
      stem: t`Evaluate $\displaystyle\int x^5\,dx$.`,
      verify: { kind: "value", inputs: { n: "5" }, params: { ask: "pow" } },
      options: [
        { key: "A", text: t`$x^6 + C$`, correct: false, misconceptionId: "C07-M2", value: "C + x**6" },
        { key: "B", text: t`$\dfrac{x^6}{5} + C$`, correct: false, misconceptionId: "C07-M3", value: "C + x**6/5" },
        { key: "C", text: t`$\dfrac{x^6}{6} + C$`, correct: true, value: "C + x**6/6" },
        { key: "D", text: t`$5x^4 + C$`, correct: false, misconceptionId: "C07-M1", value: "C + 5*x**4" },
      ],
      solution: {
        steps: [
          t`Raise the power by one: $x^6$; divide by the new power, $6$.`,
          t`$\displaystyle\int x^5\,dx$ $= \dfrac{x^6}{6} + C$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.11" },
      stem: t`Evaluate $\displaystyle\int_1^4 x^2\,dx$.`,
      verify: { kind: "value", inputs: { n: "2", a: "1", b: "4" }, params: { ask: "def" } },
      options: [
        { key: "A", text: t`$\dfrac{64}{3}$`, correct: false, misconceptionId: "C07-M4", value: "64/3" },
        { key: "B", text: t`$-21$`, correct: false, misconceptionId: "C07-M5", value: "-21" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C07-M6", value: "15" },
        { key: "D", text: t`$21$`, correct: true, value: "21" },
      ],
      solution: {
        steps: [
          t`$\displaystyle\int x^2\,dx$ $= \dfrac{x^3}{3}$.`,
          t`$\dfrac{4^3}{3} - \dfrac{1^3}{3}$ $= \dfrac{64 - 1}{3} = 21$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (vii)" },
      stem: t`Evaluate $\displaystyle\int_0^{\pi/3} \sin x\,dx$.`,
      verify: { kind: "value", inputs: { b: "pi/3" }, params: { ask: "sin" } },
      options: [
        { key: "A", text: t`$-\dfrac{3}{2}$`, correct: false, misconceptionId: "C07-M8", value: "-3/2" },
        { key: "B", text: t`$\dfrac{1}{2}$`, correct: true, value: "1/2" },
        { key: "C", text: t`$-\dfrac{1}{2}$`, correct: false, misconceptionId: "C07-M7", value: "-1/2" },
        { key: "D", text: t`$\dfrac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C07-M6", value: "sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$\displaystyle\int \sin x\,dx$ $= -\cos x$.`,
          t`$-\cos\dfrac{\pi}{3} - (-\cos 0)$ $= -\dfrac{1}{2} + 1 = \dfrac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Solved Ex.2.11" },
      stem: t`Evaluate $\displaystyle\int \left(x^2 + \sin x\right)dx$.`,
      verify: { kind: "value", inputs: { n: "2" }, params: { ask: "mix" } },
      options: [
        { key: "A", text: t`$\dfrac{x^3}{3} - \cos x + C$`, correct: true, value: "C + x**3/3 - cos(x)" },
        { key: "B", text: t`$\dfrac{x^3}{3} + \cos x + C$`, correct: false, misconceptionId: "C07-M7", value: "C + x**3/3 + cos(x)" },
        { key: "C", text: t`$2x + \cos x + C$`, correct: false, misconceptionId: "C07-M1", value: "C + 2*x + cos(x)" },
        { key: "D", text: t`$x^3 - \cos x + C$`, correct: false, misconceptionId: "C07-M2", value: "C + x**3 - cos(x)" },
      ],
      solution: {
        steps: [
          t`Term by term: $\displaystyle\int x^2\,dx$ $= \dfrac{x^3}{3}$ and $\displaystyle\int \sin x\,dx$ $= -\cos x$.`,
          t`So the integral is $\dfrac{x^3}{3} - \cos x + C$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`The velocity of a particle is $v = 3t^2 + 4$, with $v$ in $\mathrm{m/s}$ and $t$ in seconds. How far does it move from $t = 0$ to $t = 3\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { c2: "3", c1: "0", c0: "4", T: "3" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$93\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M9", value: "93" },
        { key: "B", text: t`$31\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M10", value: "31" },
        { key: "C", text: t`$18\ \mathrm{m}$`, correct: false, misconceptionId: "C07-M1", value: "18" },
        { key: "D", text: t`$39\ \mathrm{m}$`, correct: true, value: "39" },
      ],
      solution: {
        steps: [
          t`$s$ $= \displaystyle\int_0^3 (3t^2 + 4)\,dt$ $= \left[t^3 + 4t\right]_0^3$.`,
          t`$= 27 + 12 - 0$ $= 39\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "authored" },
      stem: t`A spring pulled out by $x$ needs a force $F = 2x$ newtons, with $x$ in metres. How much work is done in pulling it from $x = 0$ to $x = 3\ \mathrm{m}$? Use $W = \displaystyle\int F\,dx$.`,
      verify: { kind: "value", inputs: { c2: "0", c1: "2", c0: "0", T: "3" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$9\ \mathrm{J}$`, correct: true, value: "9" },
        { key: "B", text: t`$18\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M9", value: "18" },
        { key: "C", text: t`$6\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M10", value: "6" },
        { key: "D", text: t`$2\ \mathrm{J}$`, correct: false, misconceptionId: "C07-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$W = \displaystyle\int_0^3 2x\,dx$ $= \left[x^2\right]_0^3$.`,
          t`$= 9 - 0 = 9\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
