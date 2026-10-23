import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$p(x) = x^2 + x + 41$ gives $p(1) = 43$, $p(2) = 47$ and $p(3) = 53$: all primes. Is $p(x)$ a prime for every whole number $x$?`,
    reveal: t`No. $p(40) = 40^2 + 40 + 41$ $= 1600 + 81 = 1681$, and $1681 = 41 \times 41$.`,
  },
  explanation: {
    intuition: [
      t`A polynomial in $x$ turns into a number once $x$ is given a number.`,
      t`$p(x)$ names the polynomial. $p(3)$ is its **value** when $x = 3$.`,
      t`To find the value, put the number in place of $x$ in **every** term.`,
      t`Put a negative number in brackets: $(-2)^2 = 4$, not $-4$.`,
      t`In $5x^2$ only $x$ is squared. Work out the power first, then multiply by $5$.`,
      t`The constant term has no $x$, so it stays as it is.`,
    ],
    formal: [
      {
        title: "Value at a number",
        points: [
          t`$p(a)$ is the value of $p(x)$ when $x = a$.`,
          t`Take $p(x) = 2x^2 - 3x + 5$ and $x = 2$.`,
          t`$p(2) = 2 \times 2^2 - 3 \times 2$ $+ 5$.`,
          t`$p(2) = 8 - 6 + 5 = 7$.`,
          t`Work out powers first, then multiply, then add and subtract.`,
          t`$p(0)$ is always the constant term, since every other term becomes $0$.`,
        ],
      },
      {
        title: "Substituting a negative number",
        points: [
          t`Put a negative number in brackets before you work out a power.`,
          t`Let $q(y) = y^3 - 4y^2 + 1$. Find $q(-1)$.`,
          t`$q(-1) = (-1)^3 - 4(-1)^2 + 1$.`,
          t`An even power of a negative number is positive. An odd power is negative.`,
          t`$(-1)^3 = -1$ and $(-1)^2 = 1$, so $q(-1) = -1 - 4 + 1$ $= -4$.`,
          t`$q(-1)$ is not just $-q(1)$: here $q(1) = -2$.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`Sometimes a coefficient is a letter, and the value of the polynomial is given.`,
          t`Let $p(x) = x^2 + kx + 3$ and $p(2) = 13$.`,
          t`Substitute: $p(2) = 4 + 2k + 3$ $= 2k + 7$.`,
          t`Equate it to the given value: $2k + 7 = 13$.`,
          t`Move $7$ to the other side and change its sign: $2k = 13 - 7 = 6$.`,
          t`So $k = 3$. Check: $4 + 6 + 3 = 13$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The value of $p(x) = 3x^2 + bx - 2$ at $x = -2$ is $4$. Find $b$.`,
      steps: [
        t`Put $x = -2$ in every term: $p(-2) = 3(-2)^2 + b(-2) - 2$.`,
        t`$(-2)^2 = 4$, so $p(-2) = 12 - 2b - 2$ $= 10 - 2b$.`,
        t`The value is $4$, so $10 - 2b = 4$.`,
        t`Move $10$ to the other side and change its sign: $-2b = 4 - 10 = -6$.`,
        t`So $b = 3$.`,
      ],
      answer: t`$b = 3$`,
    },
    visualSpec: t`Slide a point along a number line to choose x; each term of p(x) shows its own value as a bar, and the bars add up to the value p(x).`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Keeps the minus sign outside a power of a negative number: (−2)² = −4, (−a)² = −a²",
      remediation: t`Put a negative number in brackets before using the power: $(-2)^2 = (-2)(-2) = 4$. An even power of a negative number is positive.`,
      fallback: { kind: "ext", topic: "powers of negative numbers (Std VIII)" },
    },
    {
      id: "C07-M2",
      mistake: "Reads a power as multiplication by the index: x³ at x = 2 worked as 3 × 2 = 6",
      remediation: t`A power means repeated multiplication: $2^3 = 2 \times 2 \times 2 = 8$, not $3 \times 2$.`,
      fallback: { kind: "ext", topic: "indices (Std VIII)" },
    },
    {
      id: "C07-M3",
      mistake: "Raises the coefficient to the power too: 2x² at x = 2 worked as (2 × 2)² = 16",
      remediation: t`In $2x^2$ only $x$ is squared. Work out the power first, then multiply: $2 \times 2^2 = 8$.`,
      fallback: { kind: "ext", topic: "order of operations with indices (Std VIII)" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks p(−a) is just −p(a): finds the value at a and changes its sign",
      remediation: t`To find $p(-a)$, put $-a$ in place of the variable in every term. Even powers lose the minus sign, so $p(-a)$ is usually not $-p(a)$.`,
      fallback: { kind: "ext", topic: "substituting values in algebraic expressions (Std VIII)" },
    },
    {
      id: "C07-M5",
      mistake: "Leaves out the constant term, as it has no variable to replace",
      remediation: "The constant term is part of the value too: add it in unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Finding an unknown: moves a number across '=' without changing its sign (2k + 7 = 13 gives 2k = 20)",
      remediation: t`When a term moves to the other side of $=$, its sign changes: $2k + 7 = 13$ gives $2k = 13 - 7$.`,
      fallback: { kind: "ext", topic: "solving linear equations (Std VIII)" },
    },
  ],
  engineNotes: [
    t`C07-M1 and C07-M4 need a negative value substituted; C07-M5 needs a constant term; C07-M6 needs an unknown coefficient (a value of the form alpha*u + beta = target). C07-M3 is modelled for numeric coefficients only. C07-M2 gives the key on $x^2$ at $x = 2$, and C07-M4 agrees with C07-M6 on $m^2 - am + c$ at $m = -1$: draw diagnosing items where they differ.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q1(ii)" },
      stem: t`Find the value of the polynomial $2x - 2x^3 + 7$ for $x = -2$.`,
      verify: { kind: "value", inputs: {  }, params: { poly: "2*x - 2*x**3 + 7", var: "x", at: "-2" } },
      options: [
        { key: "A", text: t`$67$`, correct: false, misconceptionId: "C07-M3", value: "67" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C07-M4", value: "5" },
        { key: "C", text: t`$19$`, correct: true, value: "19" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C07-M2", value: "15" },
      ],
      solution: {
        steps: [
          t`Put $x = -2$ in every term: $2(-2) - 2(-2)^3 + 7$.`,
          t`$(-2)^3 = -8$, so $-2(-8) = 16$.`,
          t`So the value is $-4 + 16 + 7 = 19$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q13(ii)" },
      stem: t`If $p(x) = 2x^2 - 5\sqrt{3}\,x + 5$, find $p(5\sqrt{3})$.`,
      verify: { kind: "value", inputs: {  }, params: { poly: "2*x**2 - 5*sqrt(3)*x + 5", var: "x", at: "5*sqrt(3)" } },
      options: [
        { key: "A", text: t`$20\sqrt{3} - 70$`, correct: false, misconceptionId: "C07-M2", value: "-70 + 20*sqrt(3)" },
        { key: "B", text: t`$230$`, correct: false, misconceptionId: "C07-M3", value: "230" },
        { key: "C", text: t`$75$`, correct: false, misconceptionId: "C07-M5", value: "75" },
        { key: "D", text: t`$80$`, correct: true, value: "80" },
      ],
      solution: {
        steps: [
          t`$p(5\sqrt{3}) = 2(5\sqrt{3})^2$ $- 5\sqrt{3} \times 5\sqrt{3} + 5$.`,
          t`$(5\sqrt{3})^2 = 25 \times 3 = 75$.`,
          t`So $p(5\sqrt{3}) = 150 - 75 + 5$ $= 80$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q2(ii)" },
      stem: t`If $p(y) = y^2 - 2y + 5$, find $p(-3)$.`,
      verify: { kind: "value", inputs: {  }, params: { poly: "y**2 - 2*y + 5", var: "y", at: "-3" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C07-M5", value: "15" },
        { key: "B", text: t`$20$`, correct: true, value: "20" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C07-M1", value: "2" },
        { key: "D", text: t`$-8$`, correct: false, misconceptionId: "C07-M4", value: "-8" },
      ],
      solution: {
        steps: [
          t`$p(-3) = (-3)^2 - 2(-3) + 5$.`,
          t`$(-3)^2 = 9$ and $-2(-3) = 6$.`,
          t`So $p(-3) = 9 + 6 + 5 = 20$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.4 Q3" },
      stem: t`If $p(m) = m^3 + 2m^2 - m + 10$, then $p(a) + p(-a) = ?$`,
      verify: { kind: "value", inputs: {  }, params: { poly: "m**3 + 2*m**2 - m + 10", var: "m", at: "a|-a", signs: "++" } },
      options: [
        { key: "A", text: t`$4a^2 + 20$`, correct: true, value: "4*a**2 + 20" },
        { key: "B", text: t`$8a^2 + 20$`, correct: false, misconceptionId: "C07-M3", value: "8*a**2 + 20" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C07-M4", value: "0" },
        { key: "D", text: t`$4a^2$`, correct: false, misconceptionId: "C07-M5", value: "4*a**2" },
      ],
      solution: {
        steps: [
          t`$p(a) = a^3 + 2a^2 - a + 10$.`,
          t`$p(-a) = (-a)^3 + 2(-a)^2$ $- (-a) + 10$ $= -a^3 + 2a^2 + a + 10$.`,
          t`Add: $a^3$ and $a$ cancel, so $p(a) + p(-a)$ $= 4a^2 + 20$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q4" },
      stem: t`For the polynomial $p(x) = mx^2 - 2x + 3$, $p(-1) = 7$. Find $m$.`,
      verify: { kind: "value", inputs: {  }, params: { poly: "m*x**2 - 2*x + 3", var: "x", at: "-1", unknown: "m", target: "7" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C07-M1", value: "-2" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C07-M5", value: "5" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C07-M6", value: "12" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`$p(-1) = m(-1)^2 - 2(-1) + 3$ $= m + 2 + 3 = m + 5$.`,
          t`$p(-1) = 7$, so $m + 5 = 7$.`,
          t`So $m = 7 - 5 = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.4 SolvedEx.4" },
      stem: t`The value of the polynomial $m^2 - am + 7$ for $m = -1$ is $12$. Find $a$.`,
      verify: { kind: "value", inputs: {  }, params: { poly: "m**2 - a*m + 7", var: "m", at: "-1", unknown: "a", target: "12" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C07-M1", value: "6" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C07-M2", value: "7" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C07-M5", value: "11" },
      ],
      solution: {
        steps: [
          t`$p(-1) = (-1)^2 - a(-1) + 7$ $= 1 + a + 7 = a + 8$.`,
          t`The value is $12$, so $a + 8 = 12$.`,
          t`So $a = 12 - 8 = 4$.`,
        ],
      },
    },
  ],
};
