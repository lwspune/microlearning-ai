import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`The circle $x^2 + y^2 = 25$ is not one function $y = f(x)$: most $x$ give two values of $y$. **So how do you find its slope at $(3, 4)$ without solving for $y$?**`,
    reveal: t`Differentiate both sides, treating $y$ as a function of $x$: $2x + 2y\frac{dy}{dx} = 0$. So $\frac{dy}{dx} = -\frac{x}{y} = -\frac{3}{4}$ at $(3, 4)$.`,
  },
  explanation: {
    intuition: [
      t`An equation like $x^2 + y^2 = 25$ ties $y$ to $x$ without giving $y$ on its own.`,
      t`Near most points the curve still behaves like a graph $y = f(x)$, so $\frac{dy}{dx}$ makes sense there.`,
      t`So differentiate both sides of the equation with respect to $x$, term by term.`,
      t`Wherever $y$ appears, it is a function of $x$, so the chain rule adds a factor $\frac{dy}{dx}$.`,
      t`The result is a simple equation in $\frac{dy}{dx}$: collect those terms and solve.`,
      t`Example: $y^2 = x$ gives $2y\frac{dy}{dx} = 1$, so $\frac{dy}{dx} = \frac{1}{2y}$.`,
    ],
    formal: [
      {
        title: "Explicit and implicit functions",
        points: [
          t`An **explicit function** gives $y$ on its own, as in $y = x^2 + 1$.`,
          t`An **implicit function** is given by an equation in $x$ and $y$, as in $x^3 + y^3 = 3xy$.`,
          t`Often $y$ cannot be separated neatly, but it is still a function of $x$ near each point.`,
          t`**Implicit differentiation** finds $\frac{dy}{dx}$ by differentiating the whole equation with respect to $x$.`,
        ],
      },
      {
        title: "Terms in y alone",
        points: [
          t`A term in $y$ alone, like $y^3$, is a function of a function: outside $u^3$, inside $y$.`,
          t`By the chain rule, $\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$.`,
          t`Example: $\frac{d}{dx}(y^3) = 3y^2\frac{dy}{dx}$, not just $3y^2$.`,
          t`The same holds for any function of $y$: $\frac{d}{dx}(e^y) = e^y\frac{dy}{dx}$.`,
          t`Also $\frac{d}{dx}(\log y) = \frac{1}{y}\frac{dy}{dx}$ and $\frac{d}{dx}(\sin y) = \cos y\frac{dy}{dx}$.`,
        ],
      },
      {
        title: "Terms with both x and y",
        points: [
          t`A term like $x^2y$ is a **product** of two functions of $x$: $x^2$ and $y$.`,
          t`Use the product rule: $\frac{d}{dx}(x^2y)$ $= 2xy + x^2\frac{dy}{dx}$.`,
          t`Treating $y$ as a constant gives only $2xy$: half the answer is missing.`,
          t`The derivative of a product is not the product of the derivatives: $2x\frac{dy}{dx}$ is wrong.`,
          t`Inside a function, combine the rules: $\frac{d}{dx}e^{xy}$ $= e^{xy}\left(y + x\frac{dy}{dx}\right)$.`,
        ],
      },
      {
        title: "Collect and solve",
        points: [
          t`After differentiating, each term either contains $\frac{dy}{dx}$ or does not.`,
          t`Keep the $\frac{dy}{dx}$ terms on one side and move the rest across, changing their signs.`,
          t`Take $\frac{dy}{dx}$ out as a common factor, then divide by what multiplies it.`,
          t`Example: $3x^2 + 3y^2\frac{dy}{dx} = 0$ gives $3y^2\frac{dy}{dx} = -3x^2$.`,
          t`So $\frac{dy}{dx} = -\frac{x^2}{y^2}$: the coefficient of $\frac{dy}{dx}$ goes in the denominator.`,
        ],
      },
      {
        title: "The value at a point",
        points: [
          t`The answer usually contains both $x$ and $y$.`,
          t`To get a number, first check that the point lies on the curve.`,
          t`Then put both coordinates into the expression for $\frac{dy}{dx}$.`,
          t`If only $x$ is given, find $y$ from the curve's equation first.`,
          t`Example: on $xy = 6$, $y + x\frac{dy}{dx} = 0$, so at $(2, 3)$, $\frac{dy}{dx} = -\frac{3}{2}$.`,
        ],
      },
      {
        title: "Roots that repeat forever",
        points: [
          t`In $y = \sqrt{\tan x + \sqrt{\tan x + \ldots}}$, the part under the first root after $\tan x$ is $y$ itself.`,
          t`So $y = \sqrt{\tan x + y}$; squaring gives $y^2 = \tan x + y$.`,
          t`Differentiate: $2y\frac{dy}{dx} = \sec^2 x + \frac{dy}{dx}$.`,
          t`Solve: $\frac{dy}{dx} = \frac{\sec^2 x}{2y - 1}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\cos(xy) = x + y$, find $\frac{dy}{dx}$.`,
      steps: [
        t`Differentiate both sides with respect to $x$, keeping in mind that $y$ is a function of $x$.`,
        t`Left: chain rule, then product rule: $-\sin(xy)\left(y + x\frac{dy}{dx}\right)$.`,
        t`Right: $\frac{d}{dx}(x + y) = 1 + \frac{dy}{dx}$.`,
        t`Collect the $\frac{dy}{dx}$ terms on one side: $-(1 + x\sin xy)\frac{dy}{dx}$ $= 1 + y\sin xy$.`,
        t`Divide by the coefficient of $\frac{dy}{dx}$.`,
      ],
      answer: t`$\frac{dy}{dx} = -\frac{1 + y\sin(xy)}{1 + x\sin(xy)}$`,
    },
    visualSpec: t`The circle $x^2 + y^2 = 25$ with a draggable point: its tangent's slope $-\frac{x}{y}$ updates as the point moves, and becomes undefined where $y = 0$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Forgetting $\frac{dy}{dx}$ on a term in $y$ alone: $\frac{d}{dx}(y^2) = 2y$`,
      remediation: t`$y$ is a function of $x$, so the chain rule adds a factor: $\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M2",
      mistake: t`Treating $y$ as a constant in a term that also has $x$: $\frac{d}{dx}(x^2y) = 2xy$`,
      remediation: t`$y$ changes with $x$, so $x^2y$ is a product of two functions: $\frac{d}{dx}(x^2y) = 2xy + x^2\frac{dy}{dx}$.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
    {
      id: "C07-M3",
      mistake: t`Dropping the minus sign when moving terms across: from $2x + 2y\frac{dy}{dx} = 0$, writing $\frac{dy}{dx} = \frac{x}{y}$`,
      remediation: t`A term moved to the other side changes sign: $2y\frac{dy}{dx} = -2x$, so $\frac{dy}{dx} = -\frac{x}{y}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Differentiating a product as the product of the derivatives: $\frac{d}{dx}(x^2y) = 2x\frac{dy}{dx}$`,
      remediation: t`Use the product rule, $(uv)' = uv' + vu'$: $\frac{d}{dx}(x^2y) = 2xy + x^2\frac{dy}{dx}$.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
    {
      id: "C07-M5",
      mistake: t`Solving for $\frac{dy}{dx}$ upside down: from $2x + 2y\frac{dy}{dx} = 0$, writing $\frac{dy}{dx} = -\frac{y}{x}$`,
      remediation: t`Divide by the coefficient of $\frac{dy}{dx}$: $2y\frac{dy}{dx} = -2x$ gives $\frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Inputs: F, the curve as F(x, y) = 0 (lhs minus rhs, one summand per term as the student writes it), and the point (a, b), which the models check lies on the curve. The key is -F_x/F_y at the point.",
    "C07-M1 needs a non-linear term in y alone and some term still carrying dy/dx; C07-M2 needs a term with both x and y; C07-M4 needs a product u(x)v(y) such as x^2y or xe^y.",
    "C07-M3 gives the key when dy/dx = 0 and C07-M5 when dy/dx = 1 or -1 (as on C07-Q6, where M5 is not offered): draw diagnosing items elsewhere.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.3 (iv)" },
      stem: t`If $x^3 + x^2y + xy^2 + y^3 = 15$, then the value of $\dfrac{dy}{dx}$ at $(1, 2)$ is`,
      verify: { kind: "value", inputs: { F: "x**3 + x**2*y + x*y**2 + y**3 - 15", a: "1", b: "2" } },
      options: [
        { key: "A", text: t`$- \frac{11}{12}$`, correct: false, misconceptionId: "C07-M2", value: "-11/12" },
        { key: "B", text: t`$- \frac{1}{6}$`, correct: false, misconceptionId: "C07-M4", value: "-1/6" },
        { key: "C", text: t`$- \frac{11}{17}$`, correct: true, value: "-11/17" },
        { key: "D", text: t`$- \frac{23}{5}$`, correct: false, misconceptionId: "C07-M1", value: "-23/5" },
      ],
      solution: {
        steps: [
          t`Write $y'$ for $\frac{dy}{dx}$. Differentiate: $3x^2 + 2xy + x^2y'$ $+ y^2 + 2xyy' + 3y^2y' = 0$.`,
          t`At $(1, 2)$: $3 + 4 + y' + 4 + 4y' + 12y' = 0$.`,
          t`So $11 + 17y' = 0$, and $\frac{dy}{dx} = -\frac{11}{17}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.5 (i)" },
      stem: t`If $\log(x + y) = \log(xy) + p$, where $p$ is a constant, and the curve passes through $(1, 2)$, then the value of $\dfrac{dy}{dx}$ at $(1, 2)$ is`,
      verify: { kind: "value", inputs: { F: "log(x + y) - log(x) - log(y) - log(3/2)", a: "1", b: "2" } },
      options: [
        { key: "A", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C07-M1", value: "7/2" },
        { key: "B", text: t`$- \frac{4}{3}$`, correct: false, misconceptionId: "C07-M2", value: "-4/3" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C07-M3", value: "4" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`Write $\log(xy) = \log x + \log y$, and $y'$ for $\frac{dy}{dx}$.`,
          t`Differentiate: $\frac{1 + y'}{x + y} = \frac{1}{x} + \frac{y'}{y}$, since $p$ is a constant.`,
          t`At $(1, 2)$: $\frac{1 + y'}{3} = 1 + \frac{y'}{2}$; multiply by 6: $2 + 2y' = 6 + 3y'$.`,
          t`So $\frac{dy}{dx} = -4$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.3 (vi)" },
      stem: t`If $xe^y + ye^x = 1$, then the value of $\dfrac{dy}{dx}$ at $(0, 1)$ is`,
      verify: { kind: "value", inputs: { F: "x*exp(y) + y*exp(x) - 1", a: "0", b: "1" } },
      options: [
        { key: "A", text: t`$-\dfrac{1}{1 + e}$`, correct: false, misconceptionId: "C07-M5", value: "-1/(1 + E)" },
        { key: "B", text: t`$-(1 + e)$`, correct: true, value: "-E - 1" },
        { key: "C", text: t`$1 + e$`, correct: false, misconceptionId: "C07-M3", value: "1 + E" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C07-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`Write $y'$ for $\frac{dy}{dx}$. Product rule on both terms: $e^y + xe^yy'$ $+ y'e^x + ye^x = 0$.`,
          t`At $(0, 1)$: $e + 0 + y' + 1 = 0$.`,
          t`So $\frac{dy}{dx} = -(1 + e)$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.5 (iv)" },
      stem: t`If $e^x + e^y = e^{x + y}$, then the value of $\dfrac{dy}{dx}$ at $x = \log 3$ is`,
      verify: { kind: "value", inputs: { F: "exp(x) + exp(y) - exp(x + y)", a: "log(3)", b: "log(3/2)" } },
      options: [
        { key: "A", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C07-M1", value: "0" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M2", value: "1" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C07-M5", value: "-2" },
      ],
      solution: {
        steps: [
          t`At $x = \log 3$, $e^x = 3$: $3 + e^y = 3e^y$, so $e^y = \frac{3}{2}$ and $e^{x+y} = \frac{9}{2}$.`,
          t`Write $y'$ for $\frac{dy}{dx}$. Differentiate: $e^x + e^yy' = e^{x+y}(1 + y')$.`,
          t`Substitute: $3 + \frac{3}{2}y' = \frac{9}{2} + \frac{9}{2}y'$, so $-3y' = \frac{3}{2}$.`,
          t`So $\frac{dy}{dx} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.5 (viii)" },
      stem: t`If $y = \sqrt{\log x + \sqrt{\log x + \sqrt{\log x + \ldots}}}$, then the value of $\dfrac{dy}{dx}$ at $x = e^2$ is`,
      verify: { kind: "value", inputs: { F: "y**2 - y - log(x)", a: "exp(2)", b: "2" } },
      options: [
        { key: "A", text: t`$4 - \dfrac{1}{e^2}$`, correct: false, misconceptionId: "C07-M1", value: "4 - exp(-2)" },
        { key: "B", text: t`$-\dfrac{1}{3e^2}$`, correct: false, misconceptionId: "C07-M3", value: "-exp(-2)/3" },
        { key: "C", text: t`$3e^2$`, correct: false, misconceptionId: "C07-M5", value: "3*exp(2)" },
        { key: "D", text: t`$\dfrac{1}{3e^2}$`, correct: true, value: "exp(-2)/3" },
      ],
      solution: {
        steps: [
          t`The part under the first root after $\log x$ is $y$ itself, so $y^2 = \log x + y$.`,
          t`At $x = e^2$: $y^2 - y - 2 = 0$, so $y = 2$ (a square root is not negative).`,
          t`Differentiate: $2y\frac{dy}{dx} = \frac{1}{x} + \frac{dy}{dx}$, so $\frac{dy}{dx} = \frac{1}{x(2y - 1)}$.`,
          t`At $x = e^2$, $y = 2$: $\frac{dy}{dx} = \frac{1}{3e^2}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.3.3 SolvedEx.1 (i)" },
      stem: t`If $x^5 + xy^3 + x^2y + y^4 = 4$, then the value of $\dfrac{dy}{dx}$ at $(1, 1)$ is`,
      verify: { kind: "value", inputs: { F: "x**5 + x*y**3 + x**2*y + y**4 - 4", a: "1", b: "1" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M2", value: "-2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M3", value: "1" },
        { key: "D", text: t`$- \frac{5}{9}$`, correct: false, misconceptionId: "C07-M4", value: "-5/9" },
      ],
      solution: {
        steps: [
          t`Write $y'$ for $\frac{dy}{dx}$. Differentiate: $5x^4 + y^3 + 3xy^2y'$ $+ 2xy + x^2y' + 4y^3y' = 0$.`,
          t`At $(1, 1)$: $5 + 1 + 3y' + 2 + y' + 4y' = 0$.`,
          t`So $8 + 8y' = 0$, and $\frac{dy}{dx} = -1$.`,
        ],
      },
    },
  ],
};
