import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Without dividing, can you tell whether $x - 1$ divides $x^5 + x^4 - 2$ exactly?`,
    reveal: t`Yes. Put $x = 1$: $1 + 1 - 2 = 0$. The remainder is $0$, so $x - 1$ is a factor.`,
  },
  explanation: {
    intuition: [
      t`$3$ is a **factor** of $12$ because $12 \div 3$ leaves remainder $0$.`,
      t`Polynomials work the same way: a factor divides the polynomial with remainder $0$.`,
      t`When $p(x)$ is divided by $x - a$, the remainder is $p(a)$.`,
      t`So we need not divide at all. We only find $p(a)$.`,
      t`If $p(a) = 0$, then $x - a$ is a factor of $p(x)$.`,
      t`If $p(a) \neq 0$, then $x - a$ is not a factor.`,
    ],
    formal: [
      {
        title: "The factor theorem",
        points: [
          t`**Factor theorem:** $x - a$ is a factor of $p(x)$ exactly when $p(a) = 0$.`,
          t`It comes from the remainder theorem: the remainder on dividing by $x - a$ is $p(a)$.`,
          t`The value to put in is the one that makes the divisor $0$.`,
          t`For $x - 2$: $x - 2 = 0$ gives $x = 2$, so find $p(2)$.`,
          t`For $x + 5$: $x + 5 = 0$ gives $x = -5$, so find $p(-5)$.`,
        ],
      },
      {
        title: "Testing a factor",
        points: [
          t`Is $x - 1$ a factor of $p(x) = x^3 + 4x - 5$?`,
          t`$x - 1 = 0$ gives $x = 1$, so find $p(1)$.`,
          t`$p(1) = 1^3 + 4(1) - 5$ $= 1 + 4 - 5 = 0$.`,
          t`$p(1) = 0$, so $x - 1$ is a factor of $p(x)$.`,
          t`Take care with negatives: $(-2)^2 = 4$, but $(-2)^3 = -8$.`,
          t`Find each power first, then multiply: at $x = 2$, $3x^2 = 3 \times 4 = 12$.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`If $x - a$ is a factor, then $p(a) = 0$. This gives an equation.`,
          t`$x - 1$ is a factor of $x^3 - 2x^2 + mx - 4$. Find $m$.`,
          t`$p(1) = 1 - 2 + m - 4$ $= m - 5$.`,
          t`$p(1) = 0$, so $m - 5 = 0$.`,
          t`A term that moves across $=$ changes its sign: $m = 5$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $x - 3$ is a factor of $x^3 - mx^2 + 2x + 3$, find the value of $m$.`,
      steps: [
        t`$x - 3$ is a factor, so by the factor theorem $p(3) = 0$.`,
        t`$p(3) = 3^3 - m(3^2) + 2(3) + 3$.`,
        t`$p(3) = 27 - 9m + 6 + 3$ $= 36 - 9m$.`,
        t`$36 - 9m = 0$, so $36 = 9m$.`,
        t`So $m = 4$.`,
      ],
      answer: t`$m = 4$`,
    },
    visualSpec: t`Drag a along the x-axis while the curve y = p(x) stays fixed; a dot shows p(a), and the divisor x − a turns green as a factor each time the dot lands on the axis.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes a as the number written in the divisor, sign and all: tests x + 3 with x = 3 and x − 2 with x = −2",
      remediation: t`Put in the value that makes the divisor $0$. For $x + 3$ that is $x = -3$; for $x - 2$ it is $x = 2$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: "Believes a negative number to an even power is negative: (−3)² = −9",
      remediation: t`An even power of a negative number is positive: $(-3)^2 = (-3)(-3) = 9$. An odd power stays negative: $(-2)^3 = -8$.`,
      fallback: { kind: "ext", topic: "powers of negative numbers (Std VIII)" },
    },
    {
      id: "C09-M3",
      mistake: "Multiplies the base by the index: 2³ = 6, (−3)² = −6",
      remediation: t`The index says how many times the base is multiplied by itself: $2^3 = 2 \times 2 \times 2 = 8$, not $2 \times 3$.`,
      fallback: { kind: "ext", topic: "indices (Std VIII)" },
    },
    {
      id: "C09-M4",
      mistake: "Moves a term across the = sign without changing its sign: 8 − 4m = 0 read as 4m = −8",
      remediation: t`A term that moves to the other side of $=$ changes its sign: $6 - 3m = 0$ gives $6 = 3m$, so $m = 2$.`,
      fallback: { kind: "ext", topic: "solving linear equations (Std VIII)" },
    },
    {
      id: "C09-M5",
      mistake: "Multiplies the coefficient into the base before taking the power: 2x³ at x = 3 worked as (2 × 3)³",
      remediation: t`Find the power first, then multiply by the coefficient: at $x = 2$, $3x^2 = 3 \times 2^2 = 12$, not $6^2$.`,
      fallback: { kind: "ext", topic: "indices (Std VIII)" },
    },
  ],
  engineNotes: [
    t`C09-M1 gives the key when $p(a)$ and $p(-a)$ are both $0$. C09-M2 applies only when $a$ is negative and $p$ has an even power. C09-M3 changes nothing on $a^2$ when $a = 2$ ($2 \times 2 = 2^2$); it needs some other power. C09-M4 applies only to finding an unknown coefficient. C09-M5 applies only to a coefficient other than $\pm 1$ on a power of 2 or more, and not to an unknown coefficient.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q7" },
      stem: t`Use the factor theorem to decide whether $x + 3$ is a factor of $p(x) = x^2 + 2x - 3$.`,
      verify: { kind: "value", inputs: { p: "x**2 + 2*x - 3", d: "x + 3" }, params: { ask: "test" } },
      options: [
        { key: "A", text: t`$p(-3) = -18$, so $x + 3$ is not a factor`, correct: false, misconceptionId: "C09-M2", value: "(-3, -18)" },
        { key: "B", text: t`$p(-3) = -15$, so $x + 3$ is not a factor`, correct: false, misconceptionId: "C09-M3", value: "(-3, -15)" },
        { key: "C", text: t`$p(-3) = 0$, so $x + 3$ is a factor`, correct: true, value: "(-3, 0)" },
        { key: "D", text: t`$p(3) = 12$, so $x + 3$ is not a factor`, correct: false, misconceptionId: "C09-M1", value: "(3, 12)" },
      ],
      solution: {
        steps: [
          t`$x + 3 = 0$ gives $x = -3$, so find $p(-3)$.`,
          t`$p(-3) = (-3)^2 + 2(-3) - 3$ $= 9 - 6 - 3 = 0$.`,
          t`$p(-3) = 0$, so $x + 3$ is a factor of $p(x)$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q9(ii)" },
      stem: t`Use the factor theorem to decide whether $x - 3$ is a factor of $p(x) = 2x^3 - x^2 - 45$.`,
      verify: { kind: "value", inputs: { p: "2*x**3 - x**2 - 45", d: "x - 3" }, params: { ask: "test" } },
      options: [
        { key: "A", text: t`$p(3) = 0$, so $x - 3$ is a factor`, correct: true, value: "(3, 0)" },
        { key: "B", text: t`$p(-3) = -108$, so $x - 3$ is not a factor`, correct: false, misconceptionId: "C09-M1", value: "(-3, -108)" },
        { key: "C", text: t`$p(3) = -33$, so $x - 3$ is not a factor`, correct: false, misconceptionId: "C09-M3", value: "(3, -33)" },
        { key: "D", text: t`$p(3) = 162$, so $x - 3$ is not a factor`, correct: false, misconceptionId: "C09-M5", value: "(3, 162)" },
      ],
      solution: {
        steps: [
          t`$x - 3 = 0$ gives $x = 3$, so find $p(3)$.`,
          t`$p(3) = 2 \times 27 - 9 - 45$ $= 54 - 54 = 0$.`,
          t`$p(3) = 0$, so $x - 3$ is a factor of $p(x)$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.5 SolvedEx.6" },
      stem: t`Use the factor theorem to decide whether $x + 2$ is a factor of $p(x) = x^3 + 3x^2 - 5$.`,
      verify: { kind: "value", inputs: { p: "x**3 + 3*x**2 - 5", d: "x + 2" }, params: { ask: "test" } },
      options: [
        { key: "A", text: t`$p(-2) = -25$, so $x + 2$ is not a factor`, correct: false, misconceptionId: "C09-M2", value: "(-2, -25)" },
        { key: "B", text: t`$p(-2) = -23$, so $x + 2$ is not a factor`, correct: false, misconceptionId: "C09-M3", value: "(-2, -23)" },
        { key: "C", text: t`$p(-2) = 23$, so $x + 2$ is not a factor`, correct: false, misconceptionId: "C09-M5", value: "(-2, 23)" },
        { key: "D", text: t`$p(-2) = -1$, so $x + 2$ is not a factor`, correct: true, value: "(-2, -1)" },
      ],
      solution: {
        steps: [
          t`$x + 2 = 0$ gives $x = -2$, so find $p(-2)$.`,
          t`$(-2)^3 = -8$ and $(-2)^2 = 4$.`,
          t`$p(-2) = -8 + 3 \times 4 - 5$ $= -8 + 12 - 5 = -1$.`,
          t`$p(-2) \neq 0$, so $x + 2$ is not a factor of $p(x)$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q8" },
      stem: t`If $x - 2$ is a factor of $x^3 - mx^2 + 10x - 20$, find the value of $m$.`,
      verify: { kind: "value", inputs: { p: "x**3 - m*x**2 + 10*x - 20", d: "x - 2" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$m = 2$`, correct: true, value: "2" },
        { key: "B", text: t`$m = -12$`, correct: false, misconceptionId: "C09-M1", value: "-12" },
        { key: "C", text: t`$m = \frac{3}{2}$`, correct: false, misconceptionId: "C09-M3", value: "3/2" },
        { key: "D", text: t`$m = -2$`, correct: false, misconceptionId: "C09-M4", value: "-2" },
      ],
      solution: {
        steps: [
          t`$x - 2$ is a factor, so by the factor theorem $p(2) = 0$.`,
          t`$p(2) = 8 - 4m + 20 - 20$ $= 8 - 4m$.`,
          t`$8 - 4m = 0$, so $8 = 4m$ and $m = 2$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q10" },
      stem: t`For which value of $m$ is $x + 3$ a factor of the polynomial $x^3 - 2mx + 21$?`,
      verify: { kind: "value", inputs: { p: "x**3 - 2*m*x + 21", d: "x + 3" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$m = -2$`, correct: false, misconceptionId: "C09-M3", value: "-2" },
        { key: "B", text: t`$m = -1$`, correct: false, misconceptionId: "C09-M4", value: "-1" },
        { key: "C", text: t`$m = 1$`, correct: true, value: "1" },
        { key: "D", text: t`$m = 8$`, correct: false, misconceptionId: "C09-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`$x + 3$ is a factor, so by the factor theorem $p(-3) = 0$.`,
          t`$p(-3) = (-3)^3 - 2m(-3) + 21$.`,
          t`$p(-3) = -27 + 6m + 21$ $= 6m - 6$.`,
          t`$6m - 6 = 0$, so $6m = 6$ and $m = 1$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.5 SolvedEx.8" },
      stem: t`If $x + 2$ is a factor of $x^3 - 2x^2 + mx + 4$, find the value of $m$.`,
      verify: { kind: "value", inputs: { p: "x**3 - 2*x**2 + m*x + 4", d: "x + 2" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$m = 6$`, correct: false, misconceptionId: "C09-M4", value: "6" },
        { key: "B", text: t`$m = -6$`, correct: true, value: "-6" },
        { key: "C", text: t`$m = -2$`, correct: false, misconceptionId: "C09-M1", value: "-2" },
        { key: "D", text: t`$m = 2$`, correct: false, misconceptionId: "C09-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`$x + 2$ is a factor, so $p(-2) = 0$. Here $(-2)^3 = -8$ and $(-2)^2 = 4$.`,
          t`$p(-2) = -8 - 2(4) + m(-2) + 4$.`,
          t`$p(-2) = -8 - 8 - 2m + 4$ $= -12 - 2m$.`,
          t`$-12 - 2m = 0$, so $-12 = 2m$ and $m = -6$.`,
        ],
      },
    },
  ],
};
