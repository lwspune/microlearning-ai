import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Write down a quadratic equation whose roots are $4$ and $7$. **Can you do it without any trial and error?**`,
    reveal: t`Yes. $(x - 4)(x - 7) = 0$ is true only when $x = 4$ or $x = 7$. Expand it: $x^2 - 11x + 28 = 0$. Here $11 = 4 + 7$ and $28 = 4 \times 7$.`,
  },
  explanation: {
    intuition: [
      t`Usually we are given an equation and find its roots; here we go backwards.`,
      t`If $\alpha$ and $\beta$ are the roots, $(x - \alpha)(x - \beta) = 0$ has exactly these roots.`,
      t`Expanding it always gives the same pattern.`,
      t`The coefficient of $x$ is **minus the sum** of the roots.`,
      t`The constant term is the **product** of the roots.`,
      t`So two numbers, the sum and the product, are all we need.`,
    ],
    formal: [
      {
        title: "Where the formula comes from",
        points: [
          t`Let $\alpha$ and $\beta$ be the two given roots.`,
          t`$(x - \alpha)(x - \beta) = 0$ when $x = \alpha$ or $x = \beta$, and at no other value.`,
          t`Expand: $x^2 - \alpha x - \beta x + \alpha\beta = 0$.`,
          t`Take $x$ common from the middle terms: $x^2 - (\alpha + \beta)x + \alpha\beta = 0$.`,
          t`It fits $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$ with $a = 1$.`,
        ],
      },
      {
        title: "Three steps",
        points: [
          t`Step 1: find the sum $\alpha + \beta$.`,
          t`Step 2: find the product $\alpha\beta$.`,
          t`Step 3: put them in $x^2 - (\text{sum})x + \text{product} = 0$.`,
          t`The minus goes before the sum only; the product keeps its own sign.`,
          t`A negative sum makes the $x$ term positive: $-(-6)x = +6x$.`,
          t`Roots $4$ and $-9$: sum $-5$, product $-36$, so $x^2 + 5x - 36 = 0$.`,
        ],
      },
      {
        title: "Zero sums and zero products",
        points: [
          t`If one root is $0$, the product is $0$ and there is no constant term.`,
          t`Roots $0$ and $7$: $x^2 - 7x + 0 = 0$, that is $x^2 - 7x = 0$.`,
          t`If the roots are opposites, like $10$ and $-10$, the sum is $0$.`,
          t`Then there is no $x$ term: $x^2 - 100 = 0$.`,
        ],
      },
      {
        title: "Fractions and surds",
        points: [
          t`If the sum or product is a fraction, multiply **every** term by the LCM of the denominators.`,
          t`That includes the $x^2$ term: $x^2 - \frac{1}{9} = 0$ becomes $9x^2 - 1 = 0$.`,
          t`Roots like $p - \sqrt{q}$ and $p + \sqrt{q}$ are **conjugate surds**: only the sign of the surd differs.`,
          t`Their sum is $2p$: the surds cancel.`,
          t`Their product uses $(a - b)(a + b) = a^2 - b^2$, so it is $p^2 - q$.`,
          t`Roots $3 \pm \sqrt{2}$: sum $6$, product $9 - 2 = 7$, so $x^2 - 6x + 7 = 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Form the quadratic equation, with integer coefficients, whose roots are $\dfrac{3}{2}$ and $-\dfrac{1}{3}$.`,
      steps: [
        t`Sum: $\dfrac{3}{2} - \dfrac{1}{3} = \dfrac{9 - 2}{6} = \dfrac{7}{6}$.`,
        t`Product: $\dfrac{3}{2} \times \left(-\dfrac{1}{3}\right) = -\dfrac{1}{2}$.`,
        t`The equation is $x^2 - \dfrac{7}{6}x - \dfrac{1}{2} = 0$.`,
        t`Multiply every term by $6$, the LCM of $6$ and $2$: $6x^2 - 7x - 3 = 0$.`,
      ],
      answer: t`$6x^2 - 7x - 3 = 0$`,
    },
    visualSpec: t`Two sliders for the roots $\alpha$ and $\beta$: the equation $x^2 - (\alpha + \beta)x + \alpha\beta = 0$ updates as they move, its sum and product highlighted.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Adds the sum instead of subtracting it: $x^2 + (\alpha + \beta)x + \alpha\beta = 0$, as if the roots' own signs go into the factors $(x + \alpha)(x + \beta)$.`,
      remediation: t`The equation is $x^2 - (\alpha + \beta)x + \alpha\beta = 0$: a root $\alpha$ gives the factor $(x - \alpha)$, so the sum comes with a minus sign.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M2",
      mistake: t`Swaps the sum and the product: $x^2 - (\alpha\beta)x + (\alpha + \beta) = 0$.`,
      remediation: t`The sum goes with $x$ and the product is the constant term: $x^2 - (\text{sum})x + \text{product} = 0$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M3",
      mistake: t`Puts a minus before the product too: $x^2 - (\alpha + \beta)x - \alpha\beta = 0$.`,
      remediation: t`Only the sum has a minus in front; the product is added with its own sign: $+\alpha\beta$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M4",
      mistake: t`Multiplies conjugate surds as $(a - b)(a + b) = a^2 + b^2$.`,
      remediation: t`Use $(a - b)(a + b) = a^2 - b^2$: $(2 - \sqrt{3})(2 + \sqrt{3}) = 4 - 3 = 1$.`,
      fallback: { kind: "ext", topic: "the identity (a + b)(a - b) = a^2 - b^2 (Std IX Polynomials)" },
    },
    {
      id: "C09-M5",
      mistake: t`Clears fractions by multiplying only the fraction terms, leaving the $x^2$ term as it is.`,
      remediation: t`Multiply **every** term by the LCM, the $x^2$ term too: $x^2 - \frac{1}{9} = 0$ becomes $9x^2 - 1 = 0$.`,
      fallback: { kind: "ext", topic: "clearing fractions in an equation" },
    },
  ],
  engineNotes: [
    t`C09-M1 gives the key when the sum of the roots is $0$, and C09-M3 when the product is $0$; draw items with both non-zero.`,
    "C09-M4 needs conjugate surd roots and C09-M5 a fractional sum or product; elsewhere they give no answer.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q2(B)(ii)" },
      stem: t`Form the quadratic equation whose roots are $3$ and $-10$.`,
      verify: { kind: "value", inputs: { r1: "3", r2: "-10" } },
      options: [
        { key: "A", text: t`$x^2 + 30x - 7 = 0$`, correct: false, misconceptionId: "C09-M2", value: "x**2 + 30*x - 7" },
        { key: "B", text: t`$x^2 + 7x + 30 = 0$`, correct: false, misconceptionId: "C09-M3", value: "x**2 + 7*x + 30" },
        { key: "C", text: t`$x^2 + 7x - 30 = 0$`, correct: true, value: "x**2 + 7*x - 30" },
        { key: "D", text: t`$x^2 - 7x - 30 = 0$`, correct: false, misconceptionId: "C09-M1", value: "x**2 - 7*x - 30" },
      ],
      solution: {
        steps: [
          t`Sum: $3 + (-10) = -7$. Product: $3 \times (-10) = -30$.`,
          t`Put them in $x^2 - (\text{sum})x + \text{product} = 0$: $x^2 - (-7)x + (-30) = 0$.`,
          t`Simplify the signs: $x^2 + 7x - 30 = 0$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q2(A)(ii)" },
      stem: t`The roots of a quadratic equation are $5$ and $12$. Sum of roots $= 17$ and product of roots $= 60$. Complete the activity: the required quadratic equation is`,
      verify: { kind: "value", inputs: { S: "17", P: "60" } },
      options: [
        { key: "A", text: t`$x^2 - 17x + 60 = 0$`, correct: true, value: "x**2 - 17*x + 60" },
        { key: "B", text: t`$x^2 + 17x + 60 = 0$`, correct: false, misconceptionId: "C09-M1", value: "x**2 + 17*x + 60" },
        { key: "C", text: t`$x^2 - 60x + 17 = 0$`, correct: false, misconceptionId: "C09-M2", value: "x**2 - 60*x + 17" },
        { key: "D", text: t`$x^2 - 17x - 60 = 0$`, correct: false, misconceptionId: "C09-M3", value: "x**2 - 17*x - 60" },
      ],
      solution: {
        steps: [
          t`The equation is $x^2 - (\text{sum})x + \text{product} = 0$.`,
          t`Sum $17$, product $60$: $x^2 - 17x + 60 = 0$.`,
          t`Check: $(x - 5)(x - 12) = x^2 - 17x + 60$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.1 (5)" },
      stem: t`Which of the following quadratic equations has roots $3$ and $5$?`,
      verify: { kind: "value", inputs: { r1: "3", r2: "5" } },
      options: [
        { key: "A", text: t`$x^2 + 8x + 15 = 0$`, correct: false, misconceptionId: "C09-M1", value: "x**2 + 8*x + 15" },
        { key: "B", text: t`$x^2 - 15x + 8 = 0$`, correct: false, misconceptionId: "C09-M2", value: "x**2 - 15*x + 8" },
        { key: "C", text: t`$x^2 - 8x - 15 = 0$`, correct: false, misconceptionId: "C09-M3", value: "x**2 - 8*x - 15" },
        { key: "D", text: t`$x^2 - 8x + 15 = 0$`, correct: true, value: "x**2 - 8*x + 15" },
      ],
      solution: {
        steps: [
          t`Sum: $3 + 5 = 8$. Product: $3 \times 5 = 15$.`,
          t`The equation is $x^2 - 8x + 15 = 0$.`,
          t`Check: $(x - 3)(x - 5) = x^2 - 8x + 15$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.4 (4)" },
      stem: t`Form the quadratic equation whose roots are $2 - \sqrt{5}$ and $2 + \sqrt{5}$.`,
      verify: { kind: "value", inputs: { r1: "2 - sqrt(5)", r2: "2 + sqrt(5)" } },
      options: [
        { key: "A", text: t`$x^2 - 4x - 1 = 0$`, correct: true, value: "x**2 - 4*x - 1" },
        { key: "B", text: t`$x^2 - 4x + 9 = 0$`, correct: false, misconceptionId: "C09-M4", value: "x**2 - 4*x + 9" },
        { key: "C", text: t`$x^2 + 4x - 1 = 0$`, correct: false, misconceptionId: "C09-M1", value: "x**2 + 4*x - 1" },
        { key: "D", text: t`$x^2 + x + 4 = 0$`, correct: false, misconceptionId: "C09-M2", value: "x**2 + x + 4" },
      ],
      solution: {
        steps: [
          t`Sum: $(2 - \sqrt{5}) + (2 + \sqrt{5}) = 4$.`,
          t`Product: $(2 - \sqrt{5})(2 + \sqrt{5})$ $= 2^2 - (\sqrt{5})^2 = 4 - 5 = -1$.`,
          t`The equation is $x^2 - 4x + (-1) = 0$, that is $x^2 - 4x - 1 = 0$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.5 (2)" },
      stem: t`Frame the quadratic equation whose roots are $1 - 3\sqrt{5}$ and $1 + 3\sqrt{5}$.`,
      verify: { kind: "value", inputs: { r1: "1 - 3*sqrt(5)", r2: "1 + 3*sqrt(5)" } },
      options: [
        { key: "A", text: t`$x^2 - 2x + 44 = 0$`, correct: false, misconceptionId: "C09-M3", value: "x**2 - 2*x + 44" },
        { key: "B", text: t`$x^2 + 44x + 2 = 0$`, correct: false, misconceptionId: "C09-M2", value: "x**2 + 44*x + 2" },
        { key: "C", text: t`$x^2 - 2x - 44 = 0$`, correct: true, value: "x**2 - 2*x - 44" },
        { key: "D", text: t`$x^2 - 2x + 46 = 0$`, correct: false, misconceptionId: "C09-M4", value: "x**2 - 2*x + 46" },
      ],
      solution: {
        steps: [
          t`Sum: $(1 - 3\sqrt{5}) + (1 + 3\sqrt{5}) = 2$.`,
          t`Product: $1^2 - (3\sqrt{5})^2 = 1 - 45 = -44$.`,
          t`The equation is $x^2 - 2x + (-44) = 0$, that is $x^2 - 2x - 44 = 0$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.4 (3)" },
      stem: t`Form the quadratic equation, with integer coefficients, whose roots are $\dfrac{1}{2}$ and $-\dfrac{1}{2}$.`,
      verify: { kind: "value", inputs: { r1: "1/2", r2: "-1/2" } },
      options: [
        { key: "A", text: t`$4x^2 + x = 0$`, correct: false, misconceptionId: "C09-M2", value: "x*(4*x + 1)" },
        { key: "B", text: t`$4x^2 - 1 = 0$`, correct: true, value: "4*x**2 - 1" },
        { key: "C", text: t`$x^2 - 1 = 0$`, correct: false, misconceptionId: "C09-M5", value: "x**2 - 1" },
        { key: "D", text: t`$4x^2 + 1 = 0$`, correct: false, misconceptionId: "C09-M3", value: "4*x**2 + 1" },
      ],
      solution: {
        steps: [
          t`Sum: $\dfrac{1}{2} + \left(-\dfrac{1}{2}\right) = 0$. Product: $-\dfrac{1}{4}$.`,
          t`The equation is $x^2 - 0x - \dfrac{1}{4} = 0$, that is $x^2 - \dfrac{1}{4} = 0$.`,
          t`Multiply every term by $4$: $4x^2 - 1 = 0$.`,
        ],
      },
    },
  ],
};
