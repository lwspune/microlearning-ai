import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Try to separate the variables in $\dfrac{dy}{dx} = \dfrac{1}{x + y}$. **Can you get every $y$ on one side and every $x$ on the other?**`,
    reveal: t`Not as it stands: $x$ and $y$ are locked together in $x + y$. So call the bracket $v = x + y$. Then $\dfrac{dv}{dx} = 1 + \dfrac{dy}{dx}$ $= 1 + \dfrac{1}{v}$, which has only $v$ and $x$. It separates: $\dfrac{v}{v + 1}\,dv = dx$.`,
  },
  explanation: {
    intuition: [
      t`Some equations lock $x$ and $y$ inside one bracket, like $\dfrac{dy}{dx} = \sin(x + y)$.`,
      t`No algebra pulls that $x$ and $y$ apart, so the variables won't separate as written.`,
      t`So treat the whole bracket as one new variable: put $v = x + y$.`,
      t`The right side becomes $\sin v$, a function of $v$ alone.`,
      t`The left side changes too: rewrite $\dfrac{dy}{dx}$ using $\dfrac{dv}{dx}$.`,
      t`The new equation has only $v$ and $x$, so it separates and you solve it as before.`,
    ],
    formal: [
      {
        title: "The form it fits",
        points: [
          t`The method fits $\dfrac{dy}{dx} = f(ax + by + c)$, where $a$, $b$, $c$ are constants.`,
          t`Here $f$ is any function, applied to the single bracket $ax + by + c$.`,
          t`Examples: $(4x + y + 1)^2$, $\sin(x + y)$, $\dfrac{1}{2x - y}$.`,
          t`Rearrange first if needed: $(x + y)\dfrac{dy}{dx} = 2$ is $\dfrac{dy}{dx} = \dfrac{2}{x + y}$.`,
          t`Then put $v = ax + by + c$, the whole bracket.`,
        ],
      },
      {
        title: "Differentiate the substitution",
        points: [
          t`$v = ax + by + c$ changes with $x$ in two ways: directly through $ax$, and through $y$.`,
          t`So $\dfrac{dv}{dx} = a + b\dfrac{dy}{dx}$.`,
          t`Keep both parts: $a$ comes from $ax$, and $b$ multiplies $\dfrac{dy}{dx}$.`,
          t`Put $\dfrac{dy}{dx} = f(v)$: the equation becomes $\dfrac{dv}{dx} = a + b\,f(v)$.`,
          t`Example: $v = 2x - y$ gives $\dfrac{dv}{dx} = 2 - \dfrac{dy}{dx}$.`,
        ],
      },
      {
        title: "Separate, integrate, put back",
        points: [
          t`$\dfrac{dv}{dx} = a + b\,f(v)$ has only $v$ and $x$, so it separates.`,
          t`Divide across: $\dfrac{dv}{a + b\,f(v)} = dx$.`,
          t`Integrate both sides and add one constant of integration.`,
          t`Replace $v$ by $ax + by + c$, so the answer is in $x$ and $y$.`,
          t`Don't stop at $v$: the question was about $y$.`,
        ],
      },
      {
        title: "Particular solutions",
        points: [
          t`A **particular solution** is the one solution through a given point $(x_0, y_0)$.`,
          t`First work out $v$ at that point: $v_0 = ax_0 + by_0 + c$.`,
          t`That $v_0$, not $y_0$, is the starting value in the equation for $v$.`,
          t`Example: for $v = x + y + 2$ through $(0, 1)$, $v_0 = 3$, not $1$.`,
          t`Find the constant from $v_0$, then write $y$ in terms of $x$.`,
          t`Check: your answer must give $y = y_0$ at $x = x_0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Reduce $\dfrac{dy}{dx} = (4x + y + 1)^2$ to variables separable form and find its general solution.`,
      steps: [
        t`Put $v = 4x + y + 1$. Then $\dfrac{dv}{dx} = 4 + \dfrac{dy}{dx}$.`,
        t`So $\dfrac{dv}{dx} = 4 + v^2$, which separates: $\dfrac{dv}{v^2 + 4} = dx$.`,
        t`Integrate: $\dfrac{1}{2}\tan^{-1}\dfrac{v}{2} = x + c$, so $\tan^{-1}\dfrac{v}{2} = 2x + 2c$.`,
        t`Put $v$ back, writing $k = 2c$: $4x + y + 1 = 2\tan(2x + k)$.`,
      ],
      answer: t`$4x + y + 1 = 2\tan(2x + k)$, where $k$ is a constant.`,
    },
    visualSpec: t`Drag $a$ and $b$ in $v = ax + by + c$ and watch $\dfrac{dv}{dx} = a + b\,f(v)$ update, with the solution curves of the original equation redrawn beside it.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Takes dv/dx to be b times dy/dx, forgetting the a that comes from ax",
      remediation: t`$v = ax + by + c$ changes with $x$ directly as well as through $y$, so $\dfrac{dv}{dx} = a + b\dfrac{dy}{dx}$. Keep the $a$.`,
      fallback: { kind: "ext", topic: "derivative of a sum" },
    },
    {
      id: "C05-M2",
      mistake: "Takes dv/dx = a + dy/dx, dropping the coefficient b of y",
      remediation: t`The term $by$ differentiates to $b\dfrac{dy}{dx}$, not $\dfrac{dy}{dx}$: for $v = 3x + 2y$, $\dfrac{dv}{dx} = 3 + 2\dfrac{dy}{dx}$.`,
      fallback: { kind: "ext", topic: "implicit differentiation" },
    },
    {
      id: "C05-M3",
      mistake: "Moves a across with the wrong sign: b dy/dx = dv/dx + a",
      remediation: t`From $\dfrac{dv}{dx} = a + b\dfrac{dy}{dx}$, $b\dfrac{dy}{dx} = \dfrac{dv}{dx} - a$. So the equation in $v$ is $\dfrac{dv}{dx} = a + b\,f(v)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Integrates f(ax + by + c) with respect to x while holding y fixed, skipping the substitution",
      remediation: t`$y$ changes with $x$, so you can't integrate $f(ax + by + c)\,dx$ as if $y$ were a constant. Put $v = ax + by + c$ first; then each side has one variable.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: "Uses y0 as the starting value of v",
      remediation: t`The point gives $x_0$ and $y_0$, but $v$ starts at $v_0 = ax_0 + by_0 + c$. Find the constant from that value of $v$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M6",
      mistake: "Stops at v: gives the solution for v as the answer for y",
      remediation: t`Solving the equation in $v$ gives $v$, not $y$. Put $v = ax + by + c$ back and solve for $y$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M2 gives the key when b = 1 (v = x + y + c): diagnose it with b not 1 (Q1, Q2, Q6).",
    "C05-M5 gives the key when a x0 + b y0 + c = y0 (for example v = x - y through the origin): diagnose it with Q5.",
    "C05-M4 models general solutions only; C05-M5 and C05-M6 particular solutions only.",
    "In a particular-solution item, the starting v must not be a root of a listed mistake's dv/dx: separating breaks down there, so the models refuse it.",
    "A general-solution option F(x, y) = c has value F. Another form of the same family (constant absorbed) would also be right; the options here are different families.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.4 (ii)" },
      stem: t`Put $v = x - y$ in $(x - y)^2 \dfrac{dy}{dx} = 4$. The equation in $v$ and $x$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", c: "0", f: "4/v**2" }, params: { ask: "veq" } },
      options: [
        { key: "A", text: t`$\dfrac{dv}{dx} = -1 - \dfrac{4}{v^2}$`, correct: false, misconceptionId: "C05-M3", value: "-1 - 4/v**2" },
        { key: "B", text: t`$\dfrac{dv}{dx} = 1 - \dfrac{4}{v^2}$`, correct: true, value: "1 - 4/v**2" },
        { key: "C", text: t`$\dfrac{dv}{dx} = -\dfrac{4}{v^2}$`, correct: false, misconceptionId: "C05-M1", value: "-4/v**2" },
        { key: "D", text: t`$\dfrac{dv}{dx} = 1 + \dfrac{4}{v^2}$`, correct: false, misconceptionId: "C05-M2", value: "1 + 4/v**2" },
      ],
      solution: {
        steps: [
          t`$v = x - y$ gives $\dfrac{dv}{dx} = 1 - \dfrac{dy}{dx}$.`,
          t`The equation says $\dfrac{dy}{dx} = \dfrac{4}{(x - y)^2} = \dfrac{4}{v^2}$.`,
          t`So $\dfrac{dv}{dx} = 1 - \dfrac{4}{v^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.4 (iv)" },
      stem: t`Put $v = x - 2y$ in $\dfrac{dy}{dx} = \dfrac{1}{2}\sin^2(x - 2y)$. The equation in $v$ and $x$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-2", c: "0", f: "sin(v)**2/2" }, params: { ask: "veq" } },
      options: [
        { key: "A", text: t`$\dfrac{dv}{dx} = -\sin^2 v$`, correct: false, misconceptionId: "C05-M1", value: "-sin(v)**2" },
        { key: "B", text: t`$\dfrac{dv}{dx} = 1 + \dfrac{1}{2}\sin^2 v$`, correct: false, misconceptionId: "C05-M2", value: "sin(v)**2/2 + 1" },
        { key: "C", text: t`$\dfrac{dv}{dx} = -1 - \sin^2 v$`, correct: false, misconceptionId: "C05-M3", value: "cos(v)**2 - 2" },
        { key: "D", text: t`$\dfrac{dv}{dx} = \cos^2 v$`, correct: true, value: "cos(v)**2" },
      ],
      solution: {
        steps: [
          t`$v = x - 2y$ gives $\dfrac{dv}{dx} = 1 - 2\dfrac{dy}{dx}$.`,
          t`Here $\dfrac{dy}{dx} = \dfrac{1}{2}\sin^2 v$, so $2\dfrac{dy}{dx} = \sin^2 v$.`,
          t`So $\dfrac{dv}{dx} = 1 - \sin^2 v = \cos^2 v$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.4 (i)" },
      stem: t`The general solution of $\dfrac{dy}{dx} = \cos(x + y)$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "0", f: "cos(v)" }, params: { ask: "general" } },
      options: [
        { key: "A", text: t`$\tan\left(\dfrac{x + y}{2}\right) = x + c$`, correct: true, value: "-x + tan(x/2 + y/2)" },
        { key: "B", text: t`$\log\left|\sec(x + y) + \tan(x + y)\right| = x + c$`, correct: false, misconceptionId: "C05-M1", value: "-x - log(Abs(sin(x + y) - 1))/2 + log(Abs(sin(x + y) + 1))/2" },
        { key: "C", text: t`$\cot\left(\dfrac{x + y}{2}\right) = x + c$`, correct: false, misconceptionId: "C05-M3", value: "-x + 1/tan(x/2 + y/2)" },
        { key: "D", text: t`$y = \sin(x + y) + c$`, correct: false, misconceptionId: "C05-M4", value: "y - sin(x + y)" },
      ],
      solution: {
        steps: [
          t`Put $v = x + y$: $\dfrac{dv}{dx} = 1 + \dfrac{dy}{dx} = 1 + \cos v$.`,
          t`Separate: $\dfrac{dv}{1 + \cos v} = dx$, and $1 + \cos v = 2\cos^2\dfrac{v}{2}$.`,
          t`So $\dfrac{1}{2}\sec^2\dfrac{v}{2}\,dv = dx$; integrating, $\tan\dfrac{v}{2} = x + c$.`,
          t`Put $v$ back: $\tan\left(\dfrac{x + y}{2}\right) = x + c$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc I (7)" },
      stem: t`The general solution of $(x + y)^2 \dfrac{dy}{dx} = 1$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "0", f: "1/v**2" }, params: { ask: "general" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2}\log\left|\dfrac{x + y + 1}{x + y - 1}\right| = 2x + y + c$`, correct: false, misconceptionId: "C05-M3", value: "-2*x - y - log(Abs(x + y - 1))/2 + log(Abs(x + y + 1))/2" },
        { key: "B", text: t`$y + \dfrac{1}{x + y} = c$`, correct: false, misconceptionId: "C05-M4", value: "(y*(x + y) + 1)/(x + y)" },
        { key: "C", text: t`$y = \tan^{-1}(x + y) + c$`, correct: true, value: "y - atan(x + y)" },
        { key: "D", text: t`$\dfrac{(x + y)^3}{3} = x + c$`, correct: false, misconceptionId: "C05-M1", value: "-x + (x + y)**3/3" },
      ],
      solution: {
        steps: [
          t`Put $v = x + y$: $\dfrac{dv}{dx} = 1 + \dfrac{1}{v^2}$ $= \dfrac{v^2 + 1}{v^2}$.`,
          t`Separate: $\dfrac{v^2}{v^2 + 1}\,dv = dx$, that is $\left(1 - \dfrac{1}{1 + v^2}\right)dv = dx$.`,
          t`Integrate: $v - \tan^{-1} v = x + c$.`,
          t`Put $v = x + y$: $x + y - \tan^{-1}(x + y) = x + c$, so $y = \tan^{-1}(x + y) + c$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The particular solution of $\dfrac{dy}{dx} = (x + y + 1)^2$ with $y = 0$ when $x = 0$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "1", f: "v**2", x0: "0", y0: "0" }, params: { ask: "particular" } },
      options: [
        { key: "A", text: t`$y = \tan\left(x + \dfrac{\pi}{4}\right) - x - 1$`, correct: true, value: "-x + tan(x + pi/4) - 1" },
        { key: "B", text: t`$y = \dfrac{1}{1 - x} - x - 1$`, correct: false, misconceptionId: "C05-M1", value: "-x**2/(x - 1)" },
        { key: "C", text: t`$y = \tan x - x - 1$`, correct: false, misconceptionId: "C05-M5", value: "-x + tan(x) - 1" },
        { key: "D", text: t`$y = \tan\left(x + \dfrac{\pi}{4}\right)$`, correct: false, misconceptionId: "C05-M6", value: "tan(x + pi/4)" },
      ],
      solution: {
        steps: [
          t`Put $v = x + y + 1$: $\dfrac{dv}{dx} = 1 + v^2$, so $\tan^{-1} v = x + c$.`,
          t`At $x = 0$, $y = 0$: $v_0 = 0 + 0 + 1 = 1$, so $c = \tan^{-1} 1 = \dfrac{\pi}{4}$.`,
          t`So $v = \tan\left(x + \dfrac{\pi}{4}\right)$, and $y = v - x - 1$.`,
          t`$y = \tan\left(x + \dfrac{\pi}{4}\right) - x - 1$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`The particular solution of $\dfrac{dy}{dx} = (x - y)^2$ with $y = 0$ when $x = 0$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", c: "0", f: "v**2", x0: "0", y0: "0" }, params: { ask: "particular" } },
      options: [
        { key: "A", text: t`$y = x - \dfrac{e^{2x} - 1}{e^{2x} + 1}$`, correct: true, value: "x - tanh(x)" },
        { key: "B", text: t`$y = x - \tan x$`, correct: false, misconceptionId: "C05-M2", value: "x - tan(x)" },
        { key: "C", text: t`$y = x + \tan x$`, correct: false, misconceptionId: "C05-M3", value: "x + tan(x)" },
        { key: "D", text: t`$y = \dfrac{e^{2x} - 1}{e^{2x} + 1}$`, correct: false, misconceptionId: "C05-M6", value: "tanh(x)" },
      ],
      solution: {
        steps: [
          t`Put $v = x - y$: $\dfrac{dv}{dx} = 1 - \dfrac{dy}{dx} = 1 - v^2$.`,
          t`Separate and integrate: $\dfrac{1}{2}\log\left|\dfrac{1 + v}{1 - v}\right|$ $= x + c$.`,
          t`At $x = 0$, $y = 0$: $v_0 = 0$, so $c = 0$ and $\dfrac{1 + v}{1 - v} = e^{2x}$.`,
          t`So $v = \dfrac{e^{2x} - 1}{e^{2x} + 1}$, and $y = x - v$ $= x - \dfrac{e^{2x} - 1}{e^{2x} + 1}$.`,
        ],
      },
    },
  ],
};
