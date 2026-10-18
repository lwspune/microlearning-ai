import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$x\dfrac{dy}{dx} + y = 3x^2$. **Is the left side the derivative of one simple product?**`,
    reveal: t`Yes: $\frac{d}{dx}(xy) = x\frac{dy}{dx} + y$. So $(xy)' = 3x^2$, and $xy = x^3 + c$. An integrating factor turns every linear equation into this shape.`,
  },
  explanation: {
    intuition: [
      t`A **linear** differential equation has $y$ and $\frac{dy}{dx}$ only to the first power, never multiplied together.`,
      t`Its **standard form** is $\frac{dy}{dx} + Py = Q$, where $P$ and $Q$ are functions of $x$ alone.`,
      t`Multiply by a well-chosen factor, and the left side becomes the derivative of one product.`,
      t`That factor is the **integrating factor**, $\text{I.F.} = e^{\int P\,dx}$.`,
      t`Then $\frac{d}{dx}(y\cdot\text{I.F.})$ $= Q\cdot\text{I.F.}$, and one integration solves it.`,
      t`The solution: $y\cdot\text{I.F.}$ $= \int Q\cdot\text{I.F.}\,dx + c$.`,
    ],
    formal: [
      {
        title: "Getting the standard form",
        points: [
          t`First make the coefficient of $\frac{dy}{dx}$ equal to $1$: divide every term by it.`,
          t`Example: $x\frac{dy}{dx} + 3y = x$ becomes $\frac{dy}{dx} + \frac{3}{x}y = 1$.`,
          t`So $P = \frac{3}{x}$ and $Q = 1$, not $P = 3$.`,
          t`Bring the $y$ term to the left side; $P$ is its coefficient there, sign included.`,
          t`Example: $\frac{dy}{dx} = \sec x - y\tan x$ is $\frac{dy}{dx} + y\tan x = \sec x$.`,
          t`So $P = \tan x$; in $\frac{dy}{dx} - y = x$, the minus belongs to $P = -1$.`,
        ],
      },
      {
        title: "The integrating factor",
        points: [
          t`Work out $\int P\,dx$ first; its constant of integration can be left out.`,
          t`Then raise $e$ to it: $\text{I.F.} = e^{\int P\,dx}$, never $\int P\,dx$ itself.`,
          t`When $\int P\,dx = k\log g$, use $e^{k\log g} = g^k$, not $kg$.`,
          t`$P = \frac{3}{x}$: $\text{I.F.} = e^{3\log x} = x^3$.`,
          t`$P = \tan x$: $\text{I.F.} = e^{\log\sec x} = \sec x$.`,
          t`$P = -\frac{1}{x}$: $\text{I.F.} = e^{-\log x} = \frac{1}{x}$.`,
        ],
      },
      {
        title: "Solving, and the constant",
        points: [
          t`Multiply the whole equation by the I.F., so the right side becomes $Q\cdot\text{I.F.}$.`,
          t`By the product rule, the left side is now $\frac{d}{dx}(y\cdot\text{I.F.})$.`,
          t`Integrate: $y\cdot\text{I.F.}$ $= \int Q\cdot\text{I.F.}\,dx + c$.`,
          t`Add $c$ before dividing; then divide every term, $c$ too, by the I.F.`,
          t`Example: $x^3y = \frac{x^4}{4} + c$ gives $y = \frac{x}{4} + \frac{c}{x^3}$.`,
          t`A condition such as $y = 1$ at $x = 1$ then fixes $c$: here $c = \frac{3}{4}$.`,
        ],
      },
      {
        title: "Linear in x instead",
        points: [
          t`Some equations are linear in $x$, taking $y$ as the variable: $\frac{dx}{dy} + Px = Q$.`,
          t`Here $P$ and $Q$ are functions of $y$ alone, and $\text{I.F.} = e^{\int P\,dy}$.`,
          t`The solution is $x\cdot\text{I.F.}$ $= \int Q\cdot\text{I.F.}\,dy + c$.`,
          t`Use it when the equation is not linear in $y$, as in $(x + y)\frac{dy}{dx} = 1$.`,
          t`Turn it over: $\frac{dx}{dy} = x + y$, that is $\frac{dx}{dy} - x = y$.`,
          t`Then $P = -1$, $\text{I.F.} = e^{-y}$, and the solution is $x + y + 1 = ce^{y}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $\dfrac{dy}{dx} + y\cot x = x^2\cot x + 2x$.`,
      steps: [
        t`It is already in standard form: $P = \cot x$ and $Q = x^2\cot x + 2x$.`,
        t`$\int\cot x\,dx = \log\sin x$, so $\text{I.F.} = e^{\log\sin x} = \sin x$.`,
        t`Multiply $Q$ by it: $Q\sin x = x^2\cos x + 2x\sin x$.`,
        t`That is $\frac{d}{dx}(x^2\sin x)$, so its integral is $x^2\sin x$.`,
        t`So $y\sin x = x^2\sin x + c$, that is $y = x^2 + c\operatorname{cosec} x$.`,
      ],
      answer: t`$y\sin x = x^2\sin x + c$`,
    },
    visualSpec: t`A slope field of $\frac{dy}{dx} + Py = Q$ with a draggable starting point: the solution curve through it redraws, and the value of $c$ updates beside it.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Reading $P$ off the equation before dividing by the coefficient of $\frac{dy}{dx}$: in $x\frac{dy}{dx} + 2y = \dots$, taking $P = 2$`,
      remediation: t`Divide every term by the coefficient of $\frac{dy}{dx}$ first, so that coefficient is $1$. Only then read off $P$ and $Q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Taking $e^{k\log g}$ as $kg$ instead of $g^k$`,
      remediation: t`$k\log g = \log g^k$, so $e^{k\log g} = g^k$: for example $e^{2\log x} = x^2$.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C07-M3",
      mistake: t`Taking $P$ with the wrong sign, so $\text{I.F.} = e^{-\int P\,dx}$, often when the $y$ term starts on the right`,
      remediation: t`Bring the $y$ term to the left first. $P$ is its coefficient there, sign included, and $\text{I.F.} = e^{\int P\,dx}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Multiplying only the left side by the I.F.: $y\cdot\text{I.F.} = \int Q\,dx + c$`,
      remediation: t`Multiply the whole equation by the I.F. The right side becomes $\int Q\cdot\text{I.F.}\,dx$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Dividing by the I.F. but leaving $c$ undivided: $y = \frac{F}{\text{I.F.}} + c$, where $F = \int Q\cdot\text{I.F.}\,dx$`,
      remediation: t`Add $c$ as soon as you integrate, then divide every term, $c$ included, by the I.F. Or find $c$ before dividing.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Forgetting the exponential: taking $\text{I.F.} = \int P\,dx$`,
      remediation: t`The integrating factor is $e^{\int P\,dx}$: raise $e$ to the integral of $P$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M1 needs a coefficient of dy/dx other than 1, and C07-M2 needs the integral of P to be k log g with k not 1.",
    "C07-M4 gives the key when the I.F. is constant, and C07-M5 when c works out to 0: draw a diagnosing item of the right shape.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc I (10)" },
      stem: t`The integrating factor of the linear differential equation $x\dfrac{dy}{dx} + 2y = x^2\log x$ is`,
      verify: { kind: "value", inputs: { a: "x", b: "2", q: "x**2*log(x)" }, params: { mode: "if" } },
      options: [
        { key: "A", text: t`$2x$`, correct: false, misconceptionId: "C07-M2", value: "2*x" },
        { key: "B", text: t`$\dfrac{1}{x^2}$`, correct: false, misconceptionId: "C07-M3", value: "x**(-2)" },
        { key: "C", text: t`$x^2$`, correct: true, value: "x**2" },
        { key: "D", text: t`$e^{2x}$`, correct: false, misconceptionId: "C07-M1", value: "exp(2*x)" },
      ],
      solution: {
        steps: [
          t`Divide by $x$: $\frac{dy}{dx} + \frac{2}{x}y = x\log x$, so $P = \frac{2}{x}$.`,
          t`$\int\frac{2}{x}\,dx = 2\log x$.`,
          t`$\text{I.F.} = e^{2\log x}$ $= e^{\log x^2} = x^2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.5 Q.1 (ii)" },
      stem: t`The integrating factor of the linear differential equation $\cos^2 x\,\dfrac{dy}{dx} + y = \tan x$ is`,
      verify: { kind: "value", inputs: { a: "cos(x)**2", b: "1", q: "tan(x)" }, params: { mode: "if" } },
      options: [
        { key: "A", text: t`$e^{x}$`, correct: false, misconceptionId: "C07-M1", value: "exp(x)" },
        { key: "B", text: t`$e^{-\tan x}$`, correct: false, misconceptionId: "C07-M3", value: "exp(-tan(x))" },
        { key: "C", text: t`$\tan x$`, correct: false, misconceptionId: "C07-M6", value: "tan(x)" },
        { key: "D", text: t`$e^{\tan x}$`, correct: true, value: "exp(tan(x))" },
      ],
      solution: {
        steps: [
          t`Divide by $\cos^2 x$: $\frac{dy}{dx} + y\sec^2 x$ $= \tan x\sec^2 x$.`,
          t`So $P = \sec^2 x$, and $\int\sec^2 x\,dx = \tan x$.`,
          t`$\text{I.F.} = e^{\tan x}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.5 Q.1 (viii)" },
      stem: t`Write $dr + (2r\cot\theta + \sin 2\theta)\,d\theta = 0$ as $\dfrac{dr}{d\theta} + Pr = Q$. Its integrating factor is`,
      verify: { kind: "value", inputs: { a: "1", b: "2*cot(theta)", q: "-sin(2*theta)" }, params: { mode: "if", var: "theta" } },
      options: [
        { key: "A", text: t`$2\log(\sin\theta)$`, correct: false, misconceptionId: "C07-M6", value: "2*log(sin(theta))" },
        { key: "B", text: t`$\sin^2\theta$`, correct: true, value: "sin(theta)**2" },
        { key: "C", text: t`$2\sin\theta$`, correct: false, misconceptionId: "C07-M2", value: "2*sin(theta)" },
        { key: "D", text: t`$\operatorname{cosec}^2\theta$`, correct: false, misconceptionId: "C07-M3", value: "sin(theta)**(-2)" },
      ],
      solution: {
        steps: [
          t`Divide by $d\theta$: $\frac{dr}{d\theta} + 2r\cot\theta$ $= -\sin 2\theta$, so $P = 2\cot\theta$.`,
          t`$\int 2\cot\theta\,d\theta$ $= 2\log(\sin\theta)$.`,
          t`$\text{I.F.} = e^{2\log\sin\theta}$ $= \sin^2\theta$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.6 (3)" },
      stem: t`$y$ satisfies $\dfrac{dy}{dx} - 3y\cot x = \sin 2x$, and $y = 2$ when $x = \dfrac{\pi}{2}$. Find $y$ when $x = \dfrac{\pi}{4}$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-3*cot(x)", q: "sin(2*x)", s0: "pi/2", y0: "2", s1: "pi/4" }, params: { mode: "value" } },
      options: [
        { key: "A", text: t`$\sqrt{2} - 1$`, correct: true, value: "-1 + sqrt(2)" },
        { key: "B", text: t`$\dfrac{1 + 16\sqrt{2}}{5}$`, correct: false, misconceptionId: "C07-M3", value: "1/5 + 16*sqrt(2)/5" },
        { key: "C", text: t`$\dfrac{3\sqrt{2}}{8}$`, correct: false, misconceptionId: "C07-M4", value: "3*sqrt(2)/8" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C07-M5", value: "3" },
      ],
      solution: {
        steps: [
          t`$P = -3\cot x$, so $\int P\,dx = -3\log\sin x$ and $\text{I.F.} = \frac{1}{\sin^3 x}$.`,
          t`$\int\frac{\sin 2x}{\sin^3 x}\,dx$ $= \int\frac{2\cos x}{\sin^2 x}\,dx$ $= -\frac{2}{\sin x}$.`,
          t`So $\frac{y}{\sin^3 x} = -\frac{2}{\sin x} + c$, that is $y = -2\sin^2 x + c\sin^3 x$.`,
          t`At $x = \frac{\pi}{2}$: $2 = -2 + c$, so $c = 4$. At $x = \frac{\pi}{4}$: $y = -1 + \sqrt{2} = \sqrt{2} - 1$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Ex.2 (slope of tangent)" },
      stem: t`The slope of the tangent to a curve at any point $(x, y)$ is $y + 2x$, and the curve passes through the origin. Find $y$ on the curve when $x = 1$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", q: "2*x", s0: "0", y0: "0", s1: "1" }, params: { mode: "value" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{e}$`, correct: false, misconceptionId: "C07-M3", value: "2*exp(-1)" },
        { key: "B", text: t`$e$`, correct: false, misconceptionId: "C07-M4", value: "E" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C07-M5", value: "-2" },
        { key: "D", text: t`$2e - 4$`, correct: true, value: "-4 + 2*E" },
      ],
      solution: {
        steps: [
          t`$\frac{dy}{dx} = y + 2x$ is $\frac{dy}{dx} - y = 2x$: $P = -1$, $\text{I.F.} = e^{-x}$.`,
          t`$ye^{-x} = \int 2xe^{-x}\,dx$ $= -2xe^{-x} - 2e^{-x} + c$.`,
          t`So $y = -2x - 2 + ce^{x}$. Through $(0, 0)$: $0 = -2 + c$, so $c = 2$.`,
          t`At $x = 1$: $y = -2 - 2 + 2e = 2e - 4$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.6 (2)" },
      stem: t`$(x + 2y^2)\dfrac{dy}{dx} = y$, and $x = 3$ when $y = 1$. Find $x$ when $y = 2$.`,
      verify: { kind: "value", inputs: { a: "1", b: "-1/y", q: "2*y", s0: "1", y0: "3", s1: "2" }, params: { mode: "value", var: "y" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$\frac{23}{6}$`, correct: false, misconceptionId: "C07-M3", value: "23/6" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C07-M4", value: "12" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C07-M5", value: "9" },
      ],
      solution: {
        steps: [
          t`It is linear in $x$: $\frac{dx}{dy} = \frac{x}{y} + 2y$, so $\frac{dx}{dy} - \frac{1}{y}x = 2y$.`,
          t`$P = -\frac{1}{y}$, so $\text{I.F.} = e^{-\log y} = \frac{1}{y}$.`,
          t`$\frac{x}{y} = \int 2\,dy = 2y + c$. At $y = 1$: $3 = 2 + c$, so $c = 1$.`,
          t`So $x = 2y^2 + y$, and at $y = 2$: $x = 8 + 2 = 10$.`,
        ],
      },
    },
  ],
};
