import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "draft",
  hook: {
    prompt: t`For $y = e^{x^2}$, can you write $y_2$ using only $x$, $y$ and $y_1$, with no $e$ at all?`,
    reveal: t`Yes. $y_1 = 2xe^{x^2} = 2xy$. Differentiate that again: $y_2 = 2y + 2xy_1$. So $y_2 - 2xy_1 - 2y = 0$, and the exponential has gone.`,
  },
  explanation: {
    intuition: [
      t`A **relation** here is an equation linking $x$, $y$, $y_1$ and $y_2$ that holds for every $x$.`,
      t`The book gives $y$ and asks you to **show** that it satisfies such a relation.`,
      t`Writing $y_1$ and $y_2$ out in full and substituting gets messy fast.`,
      t`Instead, write $y_1$ using $y$ itself, so the hard part of $y$ disappears.`,
      t`Then differentiate that simpler equation once more to bring in $y_2$.`,
      t`Finally cancel any common factor and collect the terms.`,
    ],
    formal: [
      {
        title: "The four steps",
        points: [
          t`**Step 1:** find $y_1$ and, wherever you can, write it using $y$ itself.`,
          t`**Step 2:** clear fractions by multiplying up, and clear roots by squaring.`,
          t`Example: $y_1 = \frac{2y}{x}$ becomes $xy_1 = 2y$, and squaring gives $x^2y_1^2 = 4y^2$.`,
          t`**Step 3:** differentiate both sides with respect to $x$ again, so $y_2$ appears.`,
          t`**Step 4:** divide out any common factor, such as $2y_1$, and collect terms.`,
          t`The final relation uses only $x$, $y$, $y_1$, $y_2$ and constants.`,
        ],
      },
      {
        title: "Coefficients need the product rule",
        points: [
          t`After Step 2, $y_1$ is often multiplied by a function of $x$, as in $x^2y_1$.`,
          t`That is a product of two functions of $x$, so use the product rule.`,
          t`$\frac{d}{dx}(x^2y_1) = 2xy_1 + x^2y_2$.`,
          t`Dropping $2xy_1$ treats $x^2$ as a constant, which it is not.`,
          t`Watch the sign: $\frac{d}{dx}(1 - x^2) = -2x$, and a term changes sign only when it crosses the $=$ sign.`,
        ],
      },
      {
        title: "Differentiating terms in y",
        points: [
          t`$y$ depends on $x$, so a function of $y$ is differentiated by the chain rule.`,
          t`$\frac{d}{dx}(y^2) = 2y\,y_1$, not $2y$.`,
          t`Likewise $\frac{d}{dx}(e^{y}) = e^{y}y_1$, and $\frac{d}{dx}(ky) = ky_1$ for a constant $k$.`,
          t`$y_1$ also depends on $x$, and its derivative is $y_2$.`,
          t`So $\frac{d}{dx}(y_1^2) = 2y_1\,y_2$, not $2y_1$.`,
        ],
      },
      {
        title: "Cancelling the common factor",
        points: [
          t`Squaring in Step 2 gives $y_1^2$, so Step 3 leaves a factor $2y_1$ in every term.`,
          t`Example: $x^2y_1^2 = 4y^2$ gives $2xy_1^2 + 2x^2y_1y_2$ $= 8yy_1$.`,
          t`Divide **every** term by $2y_1$ (the book assumes $y_1 \ne 0$).`,
          t`So $2xy_1^2$ becomes $xy_1$, not $2xy_1$.`,
          t`The result is $x^2y_2 + xy_1 - 4y = 0$.`,
        ],
      },
      {
        title: "Five traps",
        points: [
          t`Product rule on a coefficient: $\frac{d}{dx}(x^2y_1) = 2xy_1 + x^2y_2$.`,
          t`Chain rule on $y$: $\frac{d}{dx}(y^2) = 2yy_1$.`,
          t`Chain rule on $y_1$: $\frac{d}{dx}(y_1^2) = 2y_1y_2$.`,
          t`Keep each term's sign unless it crosses the $=$ sign.`,
          t`Divide every term by $2y_1$, including the one from the coefficient.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $y = \cos(m\cos^{-1}x)$, show that $(1 - x^2)y_2 - xy_1 + m^2y = 0$.`,
      steps: [
        t`Write $\cos^{-1}y = m\cos^{-1}x$ and differentiate: $-\frac{y_1}{\sqrt{1 - y^2}}$ $= -\frac{m}{\sqrt{1 - x^2}}$.`,
        t`Clear the roots: $\sqrt{1 - x^2}\,y_1 = m\sqrt{1 - y^2}$; squaring, $(1 - x^2)y_1^2$ $= m^2(1 - y^2)$.`,
        t`Differentiate, with the product rule on the left: $(1 - x^2)\cdot 2y_1y_2 - 2xy_1^2$ $= -2m^2yy_1$.`,
        t`Divide every term by $2y_1$: $(1 - x^2)y_2 - xy_1 = -m^2y$.`,
        t`So $(1 - x^2)y_2 - xy_1 + m^2y = 0$.`,
      ],
      answer: t`$(1 - x^2)y_2 - xy_1 + m^2y = 0$`,
    },
    visualSpec: t`Sliders set $x$ and $m$ for a chosen $y$, and a bar for each term of the relation shows the terms adding up to $0$ at every $x$.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Treating the coefficient of $y_1$ as a constant: $\frac{d}{dx}(x^2y_1) = x^2y_2$`,
      remediation: t`A coefficient such as $x^2$ or $1 - x^2$ is a function of $x$, so use the product rule: $\frac{d}{dx}(x^2y_1) = 2xy_1 + x^2y_2$.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
    {
      id: "C12-M2",
      mistake: t`Differentiating a function of $y$ as if $y$ were $x$: $\frac{d}{dx}(y^2) = 2y$, $\frac{d}{dx}(my) = m$`,
      remediation: t`$y$ is a function of $x$, so the chain rule adds a factor $y_1$: $\frac{d}{dx}(y^2) = 2yy_1$ and $\frac{d}{dx}(e^{y}) = e^{y}y_1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M3",
      mistake: t`Taking $\frac{d}{dx}(y_1^2) = 2y_1$, as if $y_1$ were $x$`,
      remediation: t`$y_1$ is itself a function of $x$ whose derivative is $y_2$, so $\frac{d}{dx}(y_1^2) = 2y_1y_2$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C12-M4",
      mistake: "Changing the sign of the term that comes from the coefficient's derivative",
      remediation: t`Write the derivative of each side in full first; a term changes sign only when you move it across the $=$ sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: t`Dividing by $2y_1$ but leaving the 2 on the coefficient's term: $-2xy_1^2$ becomes $-2xy_1$`,
      remediation: t`Divide every term by $2y_1$: $-2xy_1^2$ becomes $-xy_1$, just as $2(1 - x^2)y_1y_2$ becomes $(1 - x^2)y_2$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Inputs: f is y; F is the correct first step (y1 found, roots and fractions cleared) as F(x, y, y1) = 0; T is the template of the relation asked for, with unknown constants p, q, r. Params: pts are sample x values in the domain; out is rel (the relation, as the expression T), tuple (the book's A, B, C) or the name of one unknown. The key uses only f and T: it substitutes y and solves for the unknowns, then checks T vanishes.",
    "C12-M3 and C12-M5 need a squared first step (y1^2 in F); C12-M1, C12-M4 and C12-M5 need an x-coefficient on the terms of F in y or y1; C12-M2 needs a term in y. A model that would give a true relation is refused, so it never doubles as the key.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.3 (ii)" },
      stem: t`If $y = e^{m\tan^{-1}x}$, which relation does $y$ satisfy? ($y_1 = \frac{dy}{dx}$, $y_2 = \frac{d^2y}{dx^2}$)`,
      verify: { kind: "value", inputs: { f: "exp(m*atan(x))", F: "(1 + x**2)*y1 - m*y", T: "(1 + x**2)*y2 + (p*x + q)*y1 + r*y" }, params: { pts: "1/2,1/3,2,3", out: "rel" } },
      options: [
        { key: "A", text: t`$(1 + x^2)y_2 - my_1 = 0$`, correct: false, misconceptionId: "C12-M1", value: "-m*y1 + x**2*y2 + y2" },
        { key: "B", text: t`$(1 + x^2)y_2 + 2xy_1 - m = 0$`, correct: false, misconceptionId: "C12-M2", value: "-m + x**2*y2 + 2*x*y1 + y2" },
        { key: "C", text: t`$(1 + x^2)y_2 - (2x + m)y_1 = 0$`, correct: false, misconceptionId: "C12-M4", value: "-m*y1 + x**2*y2 - 2*x*y1 + y2" },
        { key: "D", text: t`$(1 + x^2)y_2 + (2x - m)y_1 = 0$`, correct: true, value: "-m*y1 + x**2*y2 + 2*x*y1 + y2" },
      ],
      solution: {
        steps: [
          t`$y_1 = e^{m\tan^{-1}x}\cdot\frac{m}{1 + x^2}$ $= \frac{my}{1 + x^2}$.`,
          t`Clear the fraction: $(1 + x^2)y_1 = my$.`,
          t`Differentiate, with the product rule on the left: $2xy_1 + (1 + x^2)y_2 = my_1$.`,
          t`So $(1 + x^2)y_2 + (2x - m)y_1 = 0$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.5.1 SolvedEx.5" },
      stem: t`If $y = e^{m\sin^{-1}x}$, which relation does $y$ satisfy? ($y_1 = \frac{dy}{dx}$, $y_2 = \frac{d^2y}{dx^2}$)`,
      verify: { kind: "value", inputs: { f: "exp(m*asin(x))", F: "(1 - x**2)*y1**2 - m**2*y**2", T: "(1 - x**2)*y2 + (p*x + q)*y1 + r*y" }, params: { pts: "1/2,1/3,1/5,1/7", out: "rel" } },
      options: [
        { key: "A", text: t`$(1 - x^2)y_2 - 2xy_1 - m^2y = 0$`, correct: false, misconceptionId: "C12-M5", value: "-m**2*y - x**2*y2 - 2*x*y1 + y2" },
        { key: "B", text: t`$(1 - x^2)y_2 - xy_1 - m^2y = 0$`, correct: true, value: "-m**2*y - x**2*y2 - x*y1 + y2" },
        { key: "C", text: t`$(1 - x^2)y_2 - m^2y = 0$`, correct: false, misconceptionId: "C12-M1", value: "-m**2*y - x**2*y2 + y2" },
        { key: "D", text: t`$(1 - x^2) - xy_1 - m^2y = 0$`, correct: false, misconceptionId: "C12-M3", value: "-m**2*y - x**2 - x*y1 + 1" },
      ],
      solution: {
        steps: [
          t`$y_1 = e^{m\sin^{-1}x}\cdot\frac{m}{\sqrt{1 - x^2}}$ $= \frac{my}{\sqrt{1 - x^2}}$.`,
          t`Clear the root and square: $(1 - x^2)y_1^2 = m^2y^2$.`,
          t`Differentiate: $(1 - x^2)\cdot 2y_1y_2 - 2xy_1^2$ $= 2m^2yy_1$.`,
          t`Divide every term by $2y_1$: $(1 - x^2)y_2 - xy_1 - m^2y = 0$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Misc I Q.12" },
      stem: t`If $y = a\cos(\log x)$ and $A\dfrac{d^2y}{dx^2} + B\dfrac{dy}{dx} + C = 0$, then the values of $A$, $B$, $C$ are`,
      verify: { kind: "value", inputs: { f: "a*cos(log(x))", F: "x**2*y1**2 + y**2 - a**2", T: "x**2*y2 + p*x*y1 + q*y" }, params: { pts: "2,3,1/2,5", out: "tuple" } },
      options: [
        { key: "A", text: t`$x^2,\ 2x,\ y$`, correct: false, misconceptionId: "C12-M5", value: "(x**2, 2*x, y)" },
        { key: "B", text: t`$x^2,\ x,\ y$`, correct: true, value: "(x**2, x, y)" },
        { key: "C", text: t`$x^2,\ 0,\ y$`, correct: false, misconceptionId: "C12-M1", value: "(x**2, 0, y)" },
        { key: "D", text: t`$x^2,\ -x,\ y$`, correct: false, misconceptionId: "C12-M4", value: "(x**2, -x, y)" },
      ],
      solution: {
        steps: [
          t`$y_1 = -\frac{a\sin(\log x)}{x}$, so $xy_1 = -a\sin(\log x)$.`,
          t`Square: $x^2y_1^2 = a^2\sin^2(\log x)$ $= a^2 - y^2$.`,
          t`Differentiate: $2xy_1^2 + x^2\cdot 2y_1y_2 = -2yy_1$.`,
          t`Divide by $2y_1$: $x^2y_2 + xy_1 + y = 0$, so $A = x^2$, $B = x$, $C = y$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.3 (viii)" },
      stem: t`If $y = \log\left[\left(x + \sqrt{x^2 + a^2}\right)^m\right]$ and $(x^2 + a^2)\dfrac{d^2y}{dx^2} + kx\dfrac{dy}{dx} = 0$, then $k =$`,
      verify: { kind: "value", inputs: { f: "m*log(x + sqrt(x**2 + a**2))", F: "(x**2 + a**2)*y1**2 - m**2", T: "(x**2 + a**2)*y2 + p*x*y1" }, params: { pts: "1,2,3", out: "p" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C12-M5", value: "2" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C12-M1", value: "0" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C12-M4", value: "-1" },
      ],
      solution: {
        steps: [
          t`$y = m\log\left(x + \sqrt{x^2 + a^2}\right)$, so $y_1 = \frac{m}{\sqrt{x^2 + a^2}}$.`,
          t`Clear the root and square: $(x^2 + a^2)y_1^2 = m^2$.`,
          t`Differentiate: $2xy_1^2 + (x^2 + a^2)\cdot 2y_1y_2$ $= 0$.`,
          t`Divide by $2y_1$: $(x^2 + a^2)y_2 + xy_1 = 0$, so $k = 1$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.3 (vii)" },
      stem: t`If $2y = \sqrt{x + 1} + \sqrt{x - 1}$, which relation does $y$ satisfy? ($y_1 = \frac{dy}{dx}$, $y_2 = \frac{d^2y}{dx^2}$)`,
      verify: { kind: "value", inputs: { f: "(sqrt(x + 1) + sqrt(x - 1))/2", F: "4*(x**2 - 1)*y1**2 - y**2", T: "4*(x**2 - 1)*y2 + (p*x + q)*y1 + r*y" }, params: { pts: "2,3,5,7", out: "rel" } },
      options: [
        { key: "A", text: t`$4(x^2 - 1) + 4xy_1 - y = 0$`, correct: false, misconceptionId: "C12-M3", value: "4*x**2 + 4*x*y1 - y - 4" },
        { key: "B", text: t`$4(x^2 - 1)y_2 - 4xy_1 - y = 0$`, correct: false, misconceptionId: "C12-M4", value: "4*x**2*y2 - 4*x*y1 - y - 4*y2" },
        { key: "C", text: t`$4(x^2 - 1)y_2 + 4xy_1 - y = 0$`, correct: true, value: "4*x**2*y2 + 4*x*y1 - y - 4*y2" },
        { key: "D", text: t`$4(x^2 - 1)y_1y_2 + 4xy_1^2 - y = 0$`, correct: false, misconceptionId: "C12-M2", value: "4*x**2*y1*y2 + 4*x*y1**2 - y - 4*y1*y2" },
      ],
      solution: {
        steps: [
          t`$2y_1 = \frac{1}{2\sqrt{x + 1}} + \frac{1}{2\sqrt{x - 1}}$ $= \frac{\sqrt{x - 1} + \sqrt{x + 1}}{2\sqrt{x^2 - 1}}$ $= \frac{2y}{2\sqrt{x^2 - 1}}$.`,
          t`So $2\sqrt{x^2 - 1}\,y_1 = y$; squaring, $4(x^2 - 1)y_1^2 = y^2$.`,
          t`Differentiate: $8xy_1^2 + 8(x^2 - 1)y_1y_2$ $= 2yy_1$.`,
          t`Divide by $2y_1$: $4(x^2 - 1)y_2 + 4xy_1 - y = 0$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.5 Q.3 (x)" },
      stem: t`If $y = \log(\log 2x)$, which relation does $y$ satisfy? ($y_1 = \frac{dy}{dx}$, $y_2 = \frac{d^2y}{dx^2}$)`,
      verify: { kind: "value", inputs: { f: "log(log(2*x))", F: "x*exp(y)*y1 - 1", T: "x*y2 + p*y1 + q*x*y1**2" }, params: { pts: "1,2,3", out: "rel" } },
      options: [
        { key: "A", text: t`$xy_2 + xy_1^2 = 0$`, correct: false, misconceptionId: "C12-M1", value: "x*(y1**2 + y2)" },
        { key: "B", text: t`$xy_2 + (1 + x)y_1 = 0$`, correct: false, misconceptionId: "C12-M2", value: "x*y1 + x*y2 + y1" },
        { key: "C", text: t`$xy_2 - y_1(1 - xy_1) = 0$`, correct: false, misconceptionId: "C12-M4", value: "x*y1**2 + x*y2 - y1" },
        { key: "D", text: t`$xy_2 + y_1(1 + xy_1) = 0$`, correct: true, value: "x*y1**2 + x*y2 + y1" },
      ],
      solution: {
        steps: [
          t`$e^{y} = \log 2x$, so $e^{y}y_1 = \frac{1}{x}$, that is $xe^{y}y_1 = 1$.`,
          t`Differentiate, with $\frac{d}{dx}e^{y} = e^{y}y_1$: $e^{y}y_1 + xe^{y}y_1^2$ $+ xe^{y}y_2 = 0$.`,
          t`Divide by $e^{y}$: $xy_2 + y_1 + xy_1^2 = 0$, that is $xy_2 + y_1(1 + xy_1) = 0$.`,
        ],
      },
    },
  ],
};
