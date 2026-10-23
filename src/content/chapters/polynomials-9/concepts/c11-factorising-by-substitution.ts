import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Factorise $(a + b)^2 + 5(a + b) + 6$. **It looks long.** What if you call $a + b$ just $m$?`,
    reveal: t`It becomes $m^2 + 5m + 6 = (m + 2)(m + 3)$. Put $a + b$ back for $m$: the answer is $(a + b + 2)(a + b + 3)$.`,
  },
  explanation: {
    intuition: [
      t`Some long expressions repeat one piece again and again.`,
      t`We call that repeated piece the **block**.`,
      t`Give the block one letter, say $m$.`,
      t`The long expression then becomes a quadratic in $m$, such as $m^2 - 5m - 50$.`,
      t`Factorise that quadratic by splitting the middle term.`,
      t`Put the block back for $m$, and factorise each bracket again if it splits.`,
    ],
    formal: [
      {
        title: "Spotting the block",
        points: [
          t`Look for the same expression inside each bracket or power.`,
          t`In $(y^2 - 3y)^2 - 5(y^2 - 3y) - 50$ the block is $y^2 - 3y$.`,
          t`Put $m = y^2 - 3y$: the expression is $m^2 - 5m - 50$.`,
          t`A number outside a bracket multiplies every term inside: $-3(m + 4) = -3m - 12$.`,
          t`A block can hide: $4x - 8 = 4(x - 2)$, so the block is $x - 2$.`,
        ],
      },
      {
        title: "Factorise, then put back",
        points: [
          t`For $m^2 - 5m - 50$, find two numbers with product $-50$ and sum $-5$.`,
          t`They are $-10$ and $5$, so $m^2 - 5m - 50$ $= (m - 10)(m + 5)$.`,
          t`Put the whole block back for $m$, not just $y$.`,
          t`This gives $(y^2 - 3y - 10)(y^2 - 3y + 5)$.`,
          t`$y^2 - 3y - 10 = (y - 5)(y + 2)$ splits again.`,
          t`$y^2 - 3y + 5$ does not: no two integers have product $5$ and sum $-3$.`,
        ],
      },
      {
        title: "Four brackets plus a number",
        points: [
          t`Take $(x + 1)(x + 2)(x + 3)(x + 4)$ $- 24$.`,
          t`Pair the brackets whose numbers add to the same total: $1 + 4 = 2 + 3$.`,
          t`$(x + 1)(x + 4) = x^2 + 5x + 4$ and $(x + 2)(x + 3) = x^2 + 5x + 6$.`,
          t`Put $m = x^2 + 5x$: $(m + 4)(m + 6) - 24$ $= m^2 + 10m + 24 - 24$ $= m^2 + 10m$.`,
          t`So $m(m + 10)$ $= (x^2 + 5x)(x^2 + 5x + 10)$ $= x(x + 5)(x^2 + 5x + 10)$.`,
          t`The number at the end changes the factors, so never drop it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Factorise: $(x + 2)(x - 3)(x - 7)(x - 2)$ $+ 64$.`,
      steps: [
        t`Pair the brackets: $2 + (-7) = -3 + (-2) = -5$.`,
        t`$(x + 2)(x - 7) = x^2 - 5x - 14$ and $(x - 3)(x - 2) = x^2 - 5x + 6$.`,
        t`Put $m = x^2 - 5x$: $(m - 14)(m + 6) + 64$ $= m^2 - 8m - 84 + 64$ $= m^2 - 8m - 20$.`,
        t`Split: $(-10) \times 2 = -20$ and $-10 + 2 = -8$, so $(m - 10)(m + 2)$.`,
        t`Put the block back: $(x^2 - 5x - 10)(x^2 - 5x + 2)$. Neither bracket splits again.`,
      ],
      answer: t`$(x^2 - 5x - 10)(x^2 - 5x + 2)$`,
    },
    visualSpec: t`Drag a box over each copy of the block and watch the long expression shrink to a quadratic in $m$.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Splits the middle term with the right pair of numbers but the wrong signs, so m^2 - 8m + 12 = (m + 6)(m + 2)",
      remediation: t`Check the signs: the two numbers must **multiply** to the constant term and **add** to the coefficient of $m$. For $m^2 - 7m + 10$ they are $-5$ and $-2$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M2",
      mistake: "Puts the variable back for m instead of the whole block, so (m - 6)(m - 2) becomes (x - 6)(x - 2)",
      remediation: t`$m$ stands for the **whole block**. With $m = x^2 - 2x$, $(m - 5)(m + 1)$ becomes $(x^2 - 2x - 5)(x^2 - 2x + 1)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Leaves out the number added at the end, as if it did not change the factors",
      remediation: t`The number at the end is part of the expression. Multiply out the brackets in $m$, add the number, and only then factorise.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Multiplies the number outside a bracket into its first term only, so -8(m + 8) = -8m + 8",
      remediation: t`The number outside multiplies **every** term inside: $-3(m + 4) = -3m - 12$.`,
      fallback: { kind: "ext", topic: "multiplying a polynomial by a monomial (Std VIII)" },
    },
    {
      id: "C11-M5",
      mistake: "Multiplies two brackets as first times first plus last times last, so (m + 1)(m + 2) = m^2 + 2",
      remediation: t`Every term multiplies every term: $(m + a)(m + b)$ $= m^2 + am + bm + ab$. Two brackets of two terms give four products.`,
      fallback: { kind: "ext", topic: "multiplying binomials (Std VIII)" },
    },
    {
      id: "C11-M6",
      mistake: "Lets the minus sign outside a bracket reach its first term only, so -8(m + 8) = -8m + 64",
      remediation: t`A negative number multiplies every term, sign and all: $-3(m + 4) = -3m - 12$, not $-3m + 12$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C11-M1 and C11-M2 need an item that asks for the full factorisation; C11-M1 also needs the quadratic in m to have integer roots.",
    "C11-M4 and C11-M6 need a term k(block + s); C11-M5 needs a product (block + a)(block + b).",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q2(i)" },
      stem: t`Factorise: $(x^2 - x)^2 - 8(x^2 - x) + 12$`,
      verify: { kind: "value", inputs: {  }, params: { var: "x", expr: "(x**2 - x)**2 - 8*(x**2 - x) + 12", block: "x**2 - x", terms: ["1:0,0", "-8:0"], k: "12", ask: "factor" } },
      options: [
        { key: "A", text: t`$(x + 2)(x + 1)(x - 2)(x - 3)$`, correct: true, value: "(x - 3)*(x - 2)*(x + 1)*(x + 2)" },
        { key: "B", text: t`$(x^2 - x + 6)(x^2 - x + 2)$`, correct: false, misconceptionId: "C11-M1", value: "(x**2 - x + 2)*(x**2 - x + 6)" },
        { key: "C", text: t`$(x - 2)(x - 6)$`, correct: false, misconceptionId: "C11-M2", value: "(x - 6)*(x - 2)" },
        { key: "D", text: t`$x(x - 1)(x^2 - x - 8)$`, correct: false, misconceptionId: "C11-M3", value: "-x*(x - 1)*(-x**2 + x + 8)" },
      ],
      solution: {
        steps: [
          t`Put $m = x^2 - x$: $m^2 - 8m + 12$ $= (m - 6)(m - 2)$, since $(-6) \times (-2) = 12$ and $-6 - 2 = -8$.`,
          t`Put the block back: $(x^2 - x - 6)(x^2 - x - 2)$.`,
          t`$x^2 - x - 6 = (x - 3)(x + 2)$ and $x^2 - x - 2 = (x - 2)(x + 1)$.`,
          t`So the answer is $(x + 2)(x + 1)(x - 2)(x - 3)$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q2(iii)" },
      stem: t`Put $m = x^2 - 6x$ in $(x^2 - 6x)^2$ $- 8(x^2 - 6x + 8) - 64$. The expression becomes`,
      verify: { kind: "value", inputs: {  }, params: { var: "x", expr: "(x**2 - 6*x)**2 - 8*(x**2 - 6*x + 8) - 64", block: "x**2 - 6*x", terms: ["1:0,0", "-8:8"], k: "-64", ask: "quad" } },
      options: [
        { key: "A", text: t`$m^2 - 8m$`, correct: false, misconceptionId: "C11-M6", value: "m*(m - 8)" },
        { key: "B", text: t`$m^2 - 8m - 64$`, correct: false, misconceptionId: "C11-M3", value: "m**2 - 8*m - 64" },
        { key: "C", text: t`$m^2 - 8m - 128$`, correct: true, value: "m**2 - 8*m - 128" },
        { key: "D", text: t`$m^2 - 8m - 56$`, correct: false, misconceptionId: "C11-M4", value: "m**2 - 8*m - 56" },
      ],
      solution: {
        steps: [
          t`The block $x^2 - 6x$ becomes $m$, so $x^2 - 6x + 8$ becomes $m + 8$.`,
          t`The expression is $m^2 - 8(m + 8) - 64$.`,
          t`$-8$ multiplies both terms: $-8(m + 8) = -8m - 64$.`,
          t`So it is $m^2 - 8m - 64 - 64$ $= m^2 - 8m - 128$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`Factorise: $(x^2 + 3x + 1)(x^2 + 3x + 2) - 6$`,
      verify: { kind: "value", inputs: {  }, params: { var: "x", expr: "(x**2 + 3*x + 1)*(x**2 + 3*x + 2) - 6", block: "x**2 + 3*x", terms: ["1:1,2"], k: "-6", ask: "factor" } },
      options: [
        { key: "A", text: t`$(x + 4)(x - 1)(x^2 + 3x + 1)$`, correct: false, misconceptionId: "C11-M1", value: "(x - 1)*(x + 4)*(x**2 + 3*x + 1)" },
        { key: "B", text: t`$(x + 2)(x + 1)(x^2 + 3x - 2)$`, correct: false, misconceptionId: "C11-M5", value: "(x + 1)*(x + 2)*(x**2 + 3*x - 2)" },
        { key: "C", text: t`$(x + 2)(x + 1)(x^2 + 3x + 1)$`, correct: false, misconceptionId: "C11-M3", value: "(x + 1)*(x + 2)*(x**2 + 3*x + 1)" },
        { key: "D", text: t`$(x^2 + 3x + 4)(x^2 + 3x - 1)$`, correct: true, value: "(x**2 + 3*x - 1)*(x**2 + 3*x + 4)" },
      ],
      solution: {
        steps: [
          t`Put $m = x^2 + 3x$: $(m + 1)(m + 2) - 6$ $= m^2 + 3m + 2 - 6$ $= m^2 + 3m - 4$.`,
          t`Split: $4 \times (-1) = -4$ and $4 - 1 = 3$, so $(m + 4)(m - 1)$.`,
          t`Put the block back: $(x^2 + 3x + 4)(x^2 + 3x - 1)$.`,
          t`Neither bracket splits: no integer pair works for either.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q2(vi)" },
      stem: t`Factorise: $(y^2 + 5y)(y^2 + 5y - 2) - 24$`,
      verify: { kind: "value", inputs: {  }, params: { var: "y", expr: "(y**2 + 5*y)*(y**2 + 5*y - 2) - 24", block: "y**2 + 5*y", terms: ["1:0,-2"], k: "-24", ask: "factor" } },
      options: [
        { key: "A", text: t`$(y + 4)(y - 6)$`, correct: false, misconceptionId: "C11-M2", value: "(y - 6)*(y + 4)" },
        { key: "B", text: t`$y(y + 5)(y^2 + 5y - 2)$`, correct: false, misconceptionId: "C11-M3", value: "y*(y + 5)*(y**2 + 5*y - 2)" },
        { key: "C", text: t`$(y + 6)(y + 4)(y + 1)(y - 1)$`, correct: true, value: "(y - 1)*(y + 1)*(y + 4)*(y + 6)" },
        { key: "D", text: t`$(y + 3)(y + 2)(y^2 + 5y - 4)$`, correct: false, misconceptionId: "C11-M1", value: "(y + 2)*(y + 3)*(y**2 + 5*y - 4)" },
      ],
      solution: {
        steps: [
          t`Put $m = y^2 + 5y$: $m(m - 2) - 24 = m^2 - 2m - 24$.`,
          t`Split: $(-6) \times 4 = -24$ and $-6 + 4 = -2$, so $(m - 6)(m + 4)$.`,
          t`Put the block back: $(y^2 + 5y - 6)(y^2 + 5y + 4)$.`,
          t`These split: $(y + 6)(y - 1)$ and $(y + 4)(y + 1)$. The answer is $(y + 6)(y + 4)(y + 1)(y - 1)$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q2(v)" },
      stem: t`Factorise: $(y + 2)(y - 3)(y + 8)(y + 3)$ $+ 56$`,
      verify: { kind: "value", inputs: {  }, params: { var: "y", expr: "(y + 2)*(y - 3)*(y + 8)*(y + 3) + 56", block: "y**2 + 5*y", terms: ["1:6,-24"], k: "56", ask: "factor" } },
      options: [
        { key: "A", text: t`$(y^2 + 5y + 22)(y^2 + 5y - 4)$`, correct: false, misconceptionId: "C11-M1", value: "(y**2 + 5*y - 4)*(y**2 + 5*y + 22)" },
        { key: "B", text: t`$(y + 4)(y - 22)$`, correct: false, misconceptionId: "C11-M2", value: "(y - 22)*(y + 4)" },
        { key: "C", text: t`$(y + 8)(y + 3)(y + 2)(y - 3)$`, correct: false, misconceptionId: "C11-M3", value: "(y - 3)*(y + 2)*(y + 3)*(y + 8)" },
        { key: "D", text: t`$(y + 4)(y + 1)(y^2 + 5y - 22)$`, correct: true, value: "(y + 1)*(y + 4)*(y**2 + 5*y - 22)" },
      ],
      solution: {
        steps: [
          t`Pair: $(y + 2)(y + 3) = y^2 + 5y + 6$ and $(y - 3)(y + 8) = y^2 + 5y - 24$.`,
          t`Put $m = y^2 + 5y$: $(m + 6)(m - 24) + 56$ $= m^2 - 18m - 144 + 56$ $= m^2 - 18m - 88$.`,
          t`Split: $(-22) \times 4 = -88$ and $-22 + 4 = -18$, so $(m - 22)(m + 4)$.`,
          t`Put back: $(y^2 + 5y - 22)(y^2 + 5y + 4)$ $= (y + 4)(y + 1)(y^2 + 5y - 22)$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q2(vii)" },
      stem: t`Factorise: $(x - 3)(x - 4)^2(x - 5) - 6$`,
      verify: { kind: "value", inputs: {  }, params: { var: "x", expr: "(x - 3)*(x - 4)**2*(x - 5) - 6", block: "x**2 - 8*x", terms: ["1:15,16"], k: "-6", ask: "factor" } },
      options: [
        { key: "A", text: t`$(x - 3)(x - 4)^2(x - 5)$`, correct: false, misconceptionId: "C11-M3", value: "(x - 5)*(x - 4)**2*(x - 3)" },
        { key: "B", text: t`$(x^2 - 8x + 18)(x^2 - 8x + 13)$`, correct: true, value: "(x**2 - 8*x + 13)*(x**2 - 8*x + 18)" },
        { key: "C", text: t`$(x^2 - 8x - 13)(x^2 - 8x - 18)$`, correct: false, misconceptionId: "C11-M1", value: "(-x**2 + 8*x + 13)*(-x**2 + 8*x + 18)" },
        { key: "D", text: t`$(x + 18)(x + 13)$`, correct: false, misconceptionId: "C11-M2", value: "(x + 13)*(x + 18)" },
      ],
      solution: {
        steps: [
          t`Pair: $(x - 3)(x - 5) = x^2 - 8x + 15$ and $(x - 4)^2 = x^2 - 8x + 16$.`,
          t`Put $m = x^2 - 8x$: $(m + 15)(m + 16) - 6$ $= m^2 + 31m + 240 - 6$ $= m^2 + 31m + 234$.`,
          t`Split: $18 \times 13 = 234$ and $18 + 13 = 31$, so $(m + 18)(m + 13)$.`,
          t`Put back: $(x^2 - 8x + 18)(x^2 - 8x + 13)$. Neither bracket splits again.`,
        ],
      },
    },
  ],
};
