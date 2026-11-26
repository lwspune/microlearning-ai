import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A car's speedometer reads $60\ \mathrm{km/hr}$ at one instant. But in that instant the car covers no distance and takes no time. So what does the reading mean?`,
    reveal: t`It is a **rate of change** at an instant: the distance in a very short time, divided by that time, as the time shrinks towards zero. That limit is the **derivative** $\dfrac{dx}{dt}$.`,
  },
  explanation: {
    intuition: [
      t`Physics is full of rates: how fast position changes, how fast velocity changes.`,
      t`Over a time $\Delta t$, position changes by $\Delta x$; the average rate is $\dfrac{\Delta x}{\Delta t}$.`,
      t`Make $\Delta t$ smaller and smaller: the ratio settles to the rate at that instant.`,
      t`That limit is the **derivative**, written $\dfrac{dx}{dt}$.`,
      t`On a graph, it is the slope of the tangent at that point.`,
    ],
    formal: [
      {
        title: "The derivative",
        points: [
          t`For $y = f(x)$, the derivative is $\dfrac{dy}{dx}$ $= \displaystyle\lim_{\Delta x \to 0} \dfrac{\Delta y}{\Delta x}$.`,
          t`It is the rate of change of $y$ with $x$, and the slope of the graph of $y$ against $x$.`,
          t`Velocity is the rate of change of position: $v = \dfrac{dx}{dt}$.`,
          t`Acceleration is the rate of change of velocity: $a = \dfrac{dv}{dt}$.`,
          t`The rate at one instant is not the average $\dfrac{x}{t}$ over the whole time.`,
        ],
      },
      {
        title: "Standard derivatives",
        points: [
          t`$\dfrac{d}{dx}(x^n) = nx^{n-1}$: multiply by the power, then lower it by one.`,
          t`$\dfrac{d}{dx}(\text{constant}) = 0$.`,
          t`$\dfrac{d}{dx}(\sin x) = \cos x$.`,
          t`$\dfrac{d}{dx}(\cos x) = -\sin x$: note the minus sign.`,
          t`A constant factor stays: $\dfrac{d}{dx}\left(cf\right)$ $= c\dfrac{df}{dx}$.`,
        ],
      },
      {
        title: "Sum, product and quotient",
        points: [
          t`Sum: $\dfrac{d}{dx}(f_1 + f_2)$ $= \dfrac{df_1}{dx} + \dfrac{df_2}{dx}$.`,
          t`Product: $\dfrac{d}{dx}(f_1f_2)$ $= f_1\dfrac{df_2}{dx} + \dfrac{df_1}{dx}f_2$.`,
          t`Quotient: $\dfrac{d}{dx}\left(\dfrac{f_1}{f_2}\right)$ $= \dfrac{1}{f_2}\dfrac{df_1}{dx} - \dfrac{f_1}{f_2^2}\dfrac{df_2}{dx}$.`,
          t`The derivative of a product is **not** the product of the derivatives.`,
        ],
      },
    ],
    worked: {
      prompt: t`A particle moves along a line with $x = t^3 - 6t^2 + 9t$ (in metres, $t$ in seconds). Find its velocity and acceleration at $t = 1\ \mathrm{s}$.`,
      steps: [
        t`$v = \dfrac{dx}{dt}$ $= 3t^2 - 12t + 9$.`,
        t`At $t = 1$: $v = 3 - 12 + 9 = 0$; the particle is momentarily at rest.`,
        t`$a = \dfrac{dv}{dt} = 6t - 12$.`,
        t`At $t = 1$: $a = 6 - 12$ $= -6\ \mathrm{m/s^2}$; at rest, yet accelerating.`,
      ],
      answer: t`$v = 0$, $a = -6\ \mathrm{m/s^2}$`,
    },
    visualSpec: t`Slide a point along the curve $x(t)$ and watch its tangent line turn; read the slope as the velocity at that instant.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Multiplies (or divides) the two derivatives.",
      remediation: t`Use the product rule $f_1\dfrac{df_2}{dx} + \dfrac{df_1}{dx}f_2$, or the quotient rule; derivatives do not multiply like that.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Keeps only one term of the product rule.",
      remediation: t`Each factor takes its turn being differentiated: two terms, $f_1\dfrac{df_2}{dx} + \dfrac{df_1}{dx}f_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Puts a minus sign in the product rule.",
      remediation: "The product rule adds its two terms; only the quotient rule has a minus sign.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Takes the derivative of $\cos x$ as $\sin x$.`,
      remediation: t`$\dfrac{d}{dx}(\cos x) = -\sin x$: $\cos x$ falls as $x$ rises from $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Lowers the power but does not multiply by it.",
      remediation: t`$\dfrac{d}{dx}(x^n) = nx^{n-1}$: the old power comes down in front.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Multiplies by the power but does not lower it.",
      remediation: t`$\dfrac{d}{dx}(x^n) = nx^{n-1}$: the power drops by one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Subtracts the quotient-rule terms the wrong way round.",
      remediation: t`$\dfrac{d}{dx}\left(\dfrac{f_1}{f_2}\right)$ $= \dfrac{f_2\dfrac{df_1}{dx} - f_1\dfrac{df_2}{dx}}{f_2^2}$: the derivative of the top comes first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Forgets to square the denominator.",
      remediation: t`The quotient rule divides by $f_2^2$, not $f_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Divides by the time instead of differentiating.",
      remediation: t`$\dfrac{x}{t}$ is an average over the whole time; the rate at an instant is the derivative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Gives the quantity itself, not its rate of change.",
      remediation: t`Velocity is $\dfrac{dx}{dt}$ and acceleration $\dfrac{dv}{dt}$: differentiate before putting in $t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Differentiates twice.",
      remediation: t`Velocity needs one derivative of $x$; a second derivative gives acceleration.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (v)" },
      stem: t`What is $\dfrac{d}{dx}\left(x\sin x\right)$?`,
      verify: { kind: "value", inputs: { f1: "x", f2: "sin(x)" }, params: { ask: "prod" } },
      options: [
        { key: "A", text: t`$\cos x$`, correct: false, misconceptionId: "C06-M1", value: "cos(x)" },
        { key: "B", text: t`$x\cos x$`, correct: false, misconceptionId: "C06-M2", value: "x*cos(x)" },
        { key: "C", text: t`$x\cos x - \sin x$`, correct: false, misconceptionId: "C06-M3", value: "x*cos(x) - sin(x)" },
        { key: "D", text: t`$\sin x + x\cos x$`, correct: true, value: "x*cos(x) + sin(x)" },
      ],
      solution: {
        steps: [
          t`Product rule with $f_1 = x$, $f_2 = \sin x$: $x\dfrac{d}{dx}(\sin x) + \dfrac{d}{dx}(x)\sin x$.`,
          t`$= x\cos x + \sin x$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (v)" },
      stem: t`What is $\dfrac{d}{dx}\left(x^5 + \cos x\right)$?`,
      verify: { kind: "value", inputs: { n: "5" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$5x^4 - \sin x$`, correct: true, value: "5*x**4 - sin(x)" },
        { key: "B", text: t`$5x^4 + \sin x$`, correct: false, misconceptionId: "C06-M4", value: "5*x**4 + sin(x)" },
        { key: "C", text: t`$x^4 - \sin x$`, correct: false, misconceptionId: "C06-M5", value: "x**4 - sin(x)" },
        { key: "D", text: t`$5x^5 - \sin x$`, correct: false, misconceptionId: "C06-M6", value: "5*x**5 - sin(x)" },
      ],
      solution: {
        steps: [
          t`Term by term: $\dfrac{d}{dx}(x^5) = 5x^4$ and $\dfrac{d}{dx}(\cos x) = -\sin x$.`,
          t`So the derivative is $5x^4 - \sin x$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (v)" },
      stem: t`What is $\dfrac{d}{dx}\left(\dfrac{x}{\sin x}\right)$?`,
      verify: { kind: "value", inputs: { f1: "x", f2: "sin(x)" }, params: { ask: "quot" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{\sin x} - \dfrac{x\cos x}{\sin^2 x}$`, correct: true, value: "(-x*cos(x) + sin(x))/sin(x)**2" },
        { key: "B", text: t`$\dfrac{1}{\cos x}$`, correct: false, misconceptionId: "C06-M1", value: "1/cos(x)" },
        { key: "C", text: t`$\dfrac{x\cos x - \sin x}{\sin^2 x}$`, correct: false, misconceptionId: "C06-M7", value: "(x*cos(x) - sin(x))/sin(x)**2" },
        { key: "D", text: t`$\dfrac{\sin x - x\cos x}{\sin x}$`, correct: false, misconceptionId: "C06-M8", value: "-x/tan(x) + 1" },
      ],
      solution: {
        steps: [
          t`Quotient rule with $f_1 = x$, $f_2 = \sin x$: $\dfrac{1}{\sin x}(1) - \dfrac{x}{\sin^2 x}(\cos x)$.`,
          t`$= \dfrac{1}{\sin x} - \dfrac{x\cos x}{\sin^2 x}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mathematical-methods-11-phy/Ex Q.3 (vi)" },
      stem: t`Using the quotient rule, $\dfrac{d}{dx}\left(\dfrac{\sin x}{\cos x}\right)$ equals`,
      verify: { kind: "value", inputs: { f1: "sin(x)", f2: "cos(x)" }, params: { ask: "quot" } },
      options: [
        { key: "A", text: t`$\sec x$`, correct: false, misconceptionId: "C06-M8", value: "1/cos(x)" },
        { key: "B", text: t`$\sec^2 x$`, correct: true, value: "cos(x)**(-2)" },
        { key: "C", text: t`$-\cot x$`, correct: false, misconceptionId: "C06-M1", value: "-1/tan(x)" },
        { key: "D", text: t`$1 - \tan^2 x$`, correct: false, misconceptionId: "C06-M4", value: "1 - tan(x)**2" },
      ],
      solution: {
        steps: [
          t`$\dfrac{1}{\cos x}(\cos x) - \dfrac{\sin x}{\cos^2 x}(-\sin x)$ $= 1 + \dfrac{\sin^2 x}{\cos^2 x}$.`,
          t`$= \dfrac{\cos^2 x + \sin^2 x}{\cos^2 x}$ $= \dfrac{1}{\cos^2 x}$.`,
          t`$= \sec^2 x$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`The position of a particle is $x = 5t^2 + 3t$, with $x$ in metres and $t$ in seconds. What is its velocity at $t = 2\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { c2: "5", c1: "3", t0: "2" }, params: { ask: "vel" } },
      options: [
        { key: "A", text: t`$23\ \mathrm{m/s}$`, correct: true, value: "23" },
        { key: "B", text: t`$13\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M9", value: "13" },
        { key: "C", text: t`$26\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M10", value: "26" },
        { key: "D", text: t`$10\ \mathrm{m/s}$`, correct: false, misconceptionId: "C06-M11", value: "10" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{dx}{dt} = 10t + 3$.`,
          t`At $t = 2$: $v = 20 + 3$ $= 23\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`The velocity of a particle is $v = 4t^3 - 2t$, with $v$ in $\mathrm{m/s}$ and $t$ in seconds. What is its acceleration at $t = 2\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { c3: "4", c1: "-2", t0: "2" }, params: { ask: "acc" } },
      options: [
        { key: "A", text: t`$28\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C06-M10", value: "28" },
        { key: "B", text: t`$94\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C06-M6", value: "94" },
        { key: "C", text: t`$46\ \mathrm{m/s^2}$`, correct: true, value: "46" },
        { key: "D", text: t`$14\ \mathrm{m/s^2}$`, correct: false, misconceptionId: "C06-M9", value: "14" },
      ],
      solution: {
        steps: [
          t`$a = \dfrac{dv}{dt} = 12t^2 - 2$.`,
          t`At $t = 2$: $a = 48 - 2$ $= 46\ \mathrm{m/s^2}$.`,
        ],
      },
    },
  ],
};
