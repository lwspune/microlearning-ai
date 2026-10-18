import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A shirt costs ₹$1000$. A coupon takes ₹$100$ off, and a sale takes $10\%$ off. **Does it matter which is applied first?**`,
    reveal: t`Yes. Coupon first: $1000 - 100 = 900$, then $10\%$ off gives ₹$810$. Sale first: $1000 \times 0.9 = 900$, then the coupon gives ₹$800$. The same two steps in a different order give a different price.`,
  },
  explanation: {
    intuition: [
      t`A **composite** function does two functions one after the other: the output of the first is the input of the second.`,
      t`$(f \circ g)(x) = f(g(x))$, read as $f$ circle $g$ of $x$.`,
      t`$g$ is written next to $x$, so $g$ acts first; then $f$ acts on the output $g(x)$.`,
      t`Take $g(x) = x + 1$ and $f(x) = x^2$: $(f \circ g)(2) = f(3) = 9$.`,
      t`The other order: $(g \circ f)(2) = g(4) = 5$, a different answer.`,
      t`So $f \circ g \ne g \circ f$ in general: the order matters.`,
    ],
    formal: [
      {
        title: "The rule of a composite",
        points: [
          t`To find $(f \circ g)(x)$, put the whole of $g(x)$, in brackets, for every $x$ in $f$.`,
          t`For $f(x) = x^2 + 1$ and $g(x) = 2x - 3$: $(f \circ g)(x) = (2x - 3)^2 + 1$.`,
          t`Expand the square in full: $(2x - 3)^2 = 4x^2 - 12x + 9$.`,
          t`So $(f \circ g)(x) = 4x^2 - 12x + 10$.`,
          t`Without brackets, $(2x - 3)^2$ turns into $2x - 3^2$, which is wrong.`,
          t`The ring $\circ$ is not a product: $f(g(x))$ is not $f(x) \cdot g(x)$.`,
        ],
      },
      {
        title: "Order matters",
        points: [
          t`$(g \circ f)(x) = g(f(x))$: now $f$ acts first and $g$ acts on its output.`,
          t`With the same $f$ and $g$: $g(f(x)) = 2(x^2 + 1) - 3$ $= 2x^2 - 1$.`,
          t`That is not $(f \circ g)(x) = 4x^2 - 12x + 10$.`,
          t`So $f \circ g \ne g \circ f$ in general, though some pairs do agree.`,
          t`For a value, work inside out: $(g \circ f)(2)$ needs $f(2) = 5$ first, then $g(5) = 7$.`,
        ],
      },
      {
        title: "Three functions, or f twice",
        points: [
          t`$(f \circ g \circ h)(x)$ $= f(g(h(x)))$: the rightmost function, $h$, acts first.`,
          t`Work from the inside out: find $h(x)$, put it into $g$, then put that into $f$.`,
          t`$(f \circ f)(x) = f(f(x))$: apply $f$, then apply $f$ again to the output.`,
          t`For $f(x) = x^2 + 1$: $f(f(x)) = (x^2 + 1)^2 + 1$ $= x^4 + 2x^2 + 2$.`,
          t`That is not $[f(x)]^2$: squaring the output is a product, not a composite.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $f(x) = x^2 - 2$ and $g(x) = 4x + 1$, find $(f \circ g)(x)$ and $(g \circ f)(x)$.`,
      steps: [
        t`$(f \circ g)(x) = f(g(x))$: put $(4x + 1)$ for $x$ in $f$, giving $(4x + 1)^2 - 2$.`,
        t`Expand: $(4x + 1)^2 = 16x^2 + 8x + 1$, so $(f \circ g)(x) = 16x^2 + 8x - 1$.`,
        t`$(g \circ f)(x) = g(f(x))$: put $(x^2 - 2)$ for $x$ in $g$, giving $4(x^2 - 2) + 1$.`,
        t`Simplify: $(g \circ f)(x) = 4x^2 - 8 + 1$ $= 4x^2 - 7$.`,
      ],
      answer: t`$(f \circ g)(x) = 16x^2 + 8x - 1$ and $(g \circ f)(x) = 4x^2 - 7$: different, so the order matters.`,
    },
    visualSpec: t`Two machines in a row: drop $x$ into $g$, watch $g(x)$ fall into $f$, then swap the machines and see a different output.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Reads $f \circ g$ left to right, so $f$ acts first: takes $(f \circ g)(x)$ as $g(f(x))$.`,
      remediation: t`In $(f \circ g)(x) = f(g(x))$ the function next to $x$, here $g$, acts first. Find $g(x)$, then put it into $f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Reads the ring $\circ$ as multiplication: takes $(f \circ g)(x)$ as $f(x) \cdot g(x)$.`,
      remediation: t`$f \circ g$ is not a product: $(f \circ g)(x) = f(g(x))$ is the value of $f$ at the input $g(x)$. Put $g(x)$ in place of every $x$ in $f$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M3",
      mistake: t`Puts the inner rule in correctly, then expands a power of a sum as the sum of the powers: $(p + q)^2 = p^2 + q^2$.`,
      remediation: t`A power of a sum is not the sum of the powers: $(p + q)^2 = p^2 + 2pq + q^2$, so $(3x - 1)^2 = 9x^2 - 6x + 1$.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^2" },
    },
    {
      id: "C10-M4",
      mistake: t`Writes the inner rule in without brackets, so $(x + 4)^2$ becomes $x + 4^2$.`,
      remediation: t`Put the inner rule in brackets first: $f(g(x))$ replaces each $x$ by $(g(x))$, so $x^2$ becomes $(x + 4)^2$, not $x + 4^2$.`,
      fallback: { kind: "ext", topic: "brackets and order of operations" },
    },
  ],
  engineNotes: [
    t`C10-M1 gives the key for $f \circ f$ and whenever $f \circ g = g \circ f$ (e.g. a function and its inverse); diagnose it with two functions that don't commute.`,
    "C10-M3 needs an outer rule with a square and an inner rule that is a sum.",
    t`C10-M4 gives the key when the inner rule is a single term (like $3x$) or the outer rule is $x + c$.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q3(a)" },
      stem: t`If $f(x) = 2x^2 + 3$ and $g(x) = 5x - 2$, then $(f \circ g)(x)$ equals`,
      verify: { kind: "value", inputs: {  }, params: { f: "2*x**2 + 3", g: "5*x - 2", ask: "fg" } },
      options: [
        { key: "A", text: t`$10x^2 + 13$`, correct: false, misconceptionId: "C10-M1", value: "10*x**2 + 13" },
        { key: "B", text: t`$10x^3 - 4x^2 + 15x - 6$`, correct: false, misconceptionId: "C10-M2", value: "10*x**3 - 4*x**2 + 15*x - 6" },
        { key: "C", text: t`$50x^2 + 11$`, correct: false, misconceptionId: "C10-M3", value: "50*x**2 + 11" },
        { key: "D", text: t`$50x^2 - 40x + 11$`, correct: true, value: "2*(5*x - 2)**2 + 3" },
      ],
      solution: {
        steps: [
          t`$(f \circ g)(x) = f(g(x))$: put $(5x - 2)$ for $x$ in $f$, giving $2(5x - 2)^2 + 3$.`,
          t`$(5x - 2)^2 = 25x^2 - 20x + 4$, so $2(5x - 2)^2 = 50x^2 - 40x + 8$.`,
          t`So $(f \circ g)(x) = 50x^2 - 40x + 11$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q3(c)" },
      stem: t`If $f(x) = 2x^2 + 3$, then $(f \circ f)(x)$ equals`,
      verify: { kind: "value", inputs: {  }, params: { f: "2*x**2 + 3", ask: "ff" } },
      options: [
        { key: "A", text: t`$8x^4 + 24x^2 + 21$`, correct: true, value: "2*(2*x**2 + 3)**2 + 3" },
        { key: "B", text: t`$4x^4 + 12x^2 + 9$`, correct: false, misconceptionId: "C10-M2", value: "4*x**4 + 12*x**2 + 9" },
        { key: "C", text: t`$8x^4 + 21$`, correct: false, misconceptionId: "C10-M3", value: "8*x**4 + 21" },
        { key: "D", text: t`$4x^2 + 12$`, correct: false, misconceptionId: "C10-M4", value: "4*x**2 + 12" },
      ],
      solution: {
        steps: [
          t`$(f \circ f)(x) = f(f(x))$: put $(2x^2 + 3)$ for $x$ in $f$, giving $2(2x^2 + 3)^2 + 3$.`,
          t`$(2x^2 + 3)^2 = 4x^4 + 12x^2 + 9$, so twice it is $8x^4 + 24x^2 + 18$.`,
          t`So $(f \circ f)(x) = 8x^4 + 24x^2 + 21$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q12(ii)" },
      stem: t`If $f(x) = 3x - 2$ and $g(x) = x^2$, then $(g \circ f)(x)$ equals`,
      verify: { kind: "value", inputs: {  }, params: { f: "3*x - 2", g: "x**2", ask: "gf" } },
      options: [
        { key: "A", text: t`$3x - 4$`, correct: false, misconceptionId: "C10-M4", value: "3*x - 4" },
        { key: "B", text: t`$9x^2 - 12x + 4$`, correct: true, value: "(3*x - 2)**2" },
        { key: "C", text: t`$3x^2 - 2$`, correct: false, misconceptionId: "C10-M1", value: "3*x**2 - 2" },
        { key: "D", text: t`$9x^2 + 4$`, correct: false, misconceptionId: "C10-M3", value: "9*x**2 + 4" },
      ],
      solution: {
        steps: [
          t`$(g \circ f)(x) = g(f(x))$: $f$ acts first, so put $(3x - 2)$ for $x$ in $g$.`,
          t`That gives $(3x - 2)^2 = 9x^2 - 12x + 4$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.3(ii)" },
      stem: t`If $f(x) = \dfrac{2}{x + 5}$ and $g(x) = x^2 - 1$, then $(g \circ f)(3)$ equals`,
      verify: { kind: "value", inputs: { a: "3" }, params: { f: "2/(x + 5)", g: "x**2 - 1", ask: "gf" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C10-M2", value: "2" },
        { key: "B", text: t`$- \frac{31}{32}$`, correct: false, misconceptionId: "C10-M4", value: "-31/32" },
        { key: "C", text: t`$- \frac{15}{16}$`, correct: true, value: "-15/16" },
        { key: "D", text: t`$\frac{2}{13}$`, correct: false, misconceptionId: "C10-M1", value: "2/13" },
      ],
      solution: {
        steps: [
          t`$(g \circ f)(3) = g(f(3))$: find $f(3)$ first.`,
          t`$f(3) = \dfrac{2}{3 + 5} = \dfrac{1}{4}$.`,
          t`$g\left(\dfrac{1}{4}\right) = \dfrac{1}{16} - 1$ $= -\dfrac{15}{16}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.4" },
      stem: t`If $f(x) = x^2$, $g(x) = 3x$ and $h(x) = x + 1$, then $(f \circ g \circ h)(x)$ equals`,
      verify: { kind: "value", inputs: {  }, params: { f: "x**2", g: "3*x", h: "x + 1", ask: "fgh" } },
      options: [
        { key: "A", text: t`$9x^2 + 18x + 9$`, correct: true, value: "9*(x + 1)**2" },
        { key: "B", text: t`$3x^2 + 1$`, correct: false, misconceptionId: "C10-M1", value: "3*x**2 + 1" },
        { key: "C", text: t`$3x^4 + 3x^3$`, correct: false, misconceptionId: "C10-M2", value: "3*x**3*(x + 1)" },
        { key: "D", text: t`$3x + 1$`, correct: false, misconceptionId: "C10-M4", value: "3*x + 1" },
      ],
      solution: {
        steps: [
          t`$(f \circ g \circ h)(x)$ $= f(g(h(x)))$: start with $h(x) = x + 1$.`,
          t`Put it into $g$: $g(x + 1) = 3(x + 1) = 3x + 3$.`,
          t`Put that into $f$: $f(3x + 3) = (3x + 3)^2$ $= 9x^2 + 18x + 9$.`,
        ],
      },
    },
  ],
};
