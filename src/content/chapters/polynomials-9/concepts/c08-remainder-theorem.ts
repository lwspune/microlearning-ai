import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Dividing $x^{31} + 31$ by $x + 1$ by long division takes 31 steps. Can you find the remainder in one line?`,
    reveal: t`Yes. Put $x = -1$: $(-1)^{31} + 31$ $= -1 + 31 = 30$. The remainder is $30$.`,
  },
  explanation: {
    intuition: [
      t`Dividing $p(x)$ by $x - a$ by long division can take many steps.`,
      t`The **remainder theorem** gives the remainder in one step.`,
      t`It says: the remainder equals $p(a)$, the value of $p(x)$ at $x = a$.`,
      t`For the divisor $x - 2$, put $x = 2$. For $x + 3$, put $x = -3$.`,
      t`If the remainder is given, $p(a) =$ remainder is an equation for an unknown.`,
    ],
    formal: [
      {
        title: "The remainder theorem",
        points: [
          t`If $p(x)$ is divided by $x - a$, the remainder is $p(a)$.`,
          t`So put $x = a$ in $p(x)$: no division is needed.`,
          t`Check: $4x^2 - x + 2$ divided by $x + 1$ by long division leaves remainder $7$.`,
          t`Here $x + 1 = x - (-1)$, so $a = -1$.`,
          t`$p(-1) = 4(-1)^2 - (-1) + 2$ $= 4 + 1 + 2 = 7$, the same remainder.`,
        ],
      },
      {
        title: "Why it works",
        points: [
          t`Division gives $p(x) = (x - a) \times q(x) + r$.`,
          t`Here $q(x)$ is the **quotient** and $r$ is the **remainder**.`,
          t`The divisor $x - a$ has degree $1$, so the remainder has degree $0$: it is a number.`,
          t`Put $x = a$: the divisor becomes $a - a = 0$.`,
          t`So $p(a) = 0 \times q(a) + r$ $= r$.`,
        ],
      },
      {
        title: "Reading a from the divisor",
        points: [
          t`Write the divisor as $x - a$ and read off $a$.`,
          t`The divisor $x - 5$ gives $a = 5$.`,
          t`$x + 3 = x - (-3)$, so $a = -3$.`,
          t`Check: $a$ is the value of $x$ that makes the divisor $0$.`,
          t`For a negative $a$, use brackets: $(-3)^2 = 9$, but $(-3)^3 = -27$.`,
          t`An even power of a negative number is positive; an odd power is negative.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`Sometimes the remainder is given and a coefficient is unknown.`,
          t`Find $p(a)$ in terms of the unknown. Set it equal to the remainder.`,
          t`Example: $x^3 + kx - 4$ divided by $x - 2$ leaves remainder $10$.`,
          t`$p(2) = 8 + 2k - 4$ $= 2k + 4$.`,
          t`So $2k + 4 = 10$. Moving $4$ across changes its sign: $2k = 10 - 4$.`,
          t`So $2k = 6$ and $k = 3$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the remainder when $2x^3 - 5x + 4$ is divided by $x + 2$.`,
      steps: [
        t`$x + 2 = x - (-2)$, so $a = -2$. By the remainder theorem, the remainder is $p(-2)$.`,
        t`$p(-2) = 2(-2)^3 - 5(-2) + 4$.`,
        t`$(-2)^3 = -8$, so $2(-2)^3 = -16$. Also $-5(-2) = 10$.`,
        t`So $p(-2) = -16 + 10 + 4$ $= -2$.`,
      ],
      answer: t`$-2$`,
    },
    visualSpec: t`Drag a dot along a number line under the divisor x − a; when the divisor reads 0 the dot sits at a, and p(a) appears beside a long-division box that fills in, step by step, to the same remainder.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Uses the sign shown in the divisor: dividing by x + 3, puts x = 3 (and for x − 3, puts x = −3)",
      remediation: t`Write the divisor as $x - a$: $x + 3 = x - (-3)$, so put $x = -3$. The value of $a$ makes the divisor $0$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M2",
      mistake: "Writes every power of a negative number as negative: (−3)² = −9",
      remediation: t`An even power of a negative number is positive: $(-3)^2 = 9$ and $(-3)^4 = 81$. Only odd powers stay negative.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: "Leaves out the missing powers: writes only the coefficients it sees, so x⁴ − 5x² − 4x becomes (1, −5, −4)",
      remediation: t`Write $0$ for every missing power: $x^4 - 5x^2 - 4x$ is $(1, 0, -5, -4, 0)$. Or put $x = a$ straight into $p(x)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M4",
      mistake: "Moves a number across the = sign without changing its sign: 3k + 50 = 62 gives 3k = 112",
      remediation: t`A number moved to the other side changes its sign: $3k + 50 = 62$ gives $3k = 62 - 50$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Sets p(a) = 0, as if the division left no remainder, and ignores the given remainder",
      remediation: t`The remainder is $p(a)$, so set $p(a)$ equal to the given remainder. $p(a) = 0$ only when the division is exact.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks the remainder is the constant term: the x-terms all divide by x − a, so only the number is left over",
      remediation: t`Every term affects the remainder, not just the constant. The remainder is $p(a)$: put $x = a$ in every term.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    "C08-M2 applies only when a is negative and p(x) has an even power; C08-M3 only when p(x) has a missing power; C08-M3 and C08-M6 are modelled on remainder items, C08-M4 and C08-M5 on find-the-unknown items.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q5(i)" },
      stem: t`Using the remainder theorem, what is the remainder when $x^2 - 7x + 9$ is divided by $x + 1$?`,
      verify: { kind: "value", inputs: { P: "x**2 - 7*x + 9", a: "-1" }, params: { ask: "rem", var: "x" } },
      options: [
        { key: "A", text: t`$17$`, correct: true, value: "17" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C08-M1", value: "3" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C08-M2", value: "15" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C08-M6", value: "9" },
      ],
      solution: {
        steps: [
          t`$x + 1 = x - (-1)$, so the remainder is $p(-1)$.`,
          t`$p(-1) = (-1)^2 - 7(-1) + 9$ $= 1 + 7 + 9$.`,
          t`So the remainder is $17$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.5 SolvedEx.2" },
      stem: t`What is the remainder when $x^4 - 5x^2 - 4x$ is divided by $x + 3$?`,
      verify: { kind: "value", inputs: { P: "x**4 - 5*x**2 - 4*x", a: "-3" }, params: { ask: "rem", var: "x" } },
      options: [
        { key: "A", text: t`$24$`, correct: false, misconceptionId: "C08-M1", value: "24" },
        { key: "B", text: t`$-24$`, correct: false, misconceptionId: "C08-M2", value: "-24" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C08-M3", value: "20" },
        { key: "D", text: t`$48$`, correct: true, value: "48" },
      ],
      solution: {
        steps: [
          t`$x + 3 = x - (-3)$, so the remainder is $p(-3)$.`,
          t`$p(-3) = (-3)^4 - 5(-3)^2 - 4(-3)$.`,
          t`$(-3)^4 = 81$ and $(-3)^2 = 9$, so $p(-3) = 81 - 45 + 12$.`,
          t`So the remainder is $48$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`What is the remainder when $x^3 - 4x + 7$ is divided by $x - 3$?`,
      verify: { kind: "value", inputs: { P: "x**3 - 4*x + 7", a: "3" }, params: { ask: "rem", var: "x" } },
      options: [
        { key: "A", text: t`$-8$`, correct: false, misconceptionId: "C08-M1", value: "-8" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M3", value: "4" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C08-M6", value: "7" },
        { key: "D", text: t`$22$`, correct: true, value: "22" },
      ],
      solution: {
        steps: [
          t`The divisor is $x - 3$, so the remainder is $p(3)$.`,
          t`$p(3) = 3^3 - 4(3) + 7$ $= 27 - 12 + 7$.`,
          t`So the remainder is $22$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q5(iii)" },
      stem: t`Using the remainder theorem, what is the remainder when $54m^3 + 18m^2 - 27m + 5$ is divided by $m + 3$?`,
      verify: { kind: "value", inputs: { P: "54*m**3 + 18*m**2 - 27*m + 5", a: "-3" }, params: { ask: "rem", var: "m" } },
      options: [
        { key: "A", text: t`$-1534$`, correct: false, misconceptionId: "C08-M2", value: "-1534" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C08-M6", value: "5" },
        { key: "C", text: t`$-1210$`, correct: true, value: "-1210" },
        { key: "D", text: t`$1544$`, correct: false, misconceptionId: "C08-M1", value: "1544" },
      ],
      solution: {
        steps: [
          t`$m + 3 = m - (-3)$, so the remainder is $p(-3)$.`,
          t`$(-3)^3 = -27$ and $(-3)^2 = 9$.`,
          t`$p(-3) = 54(-27) + 18(9)$ $- 27(-3) + 5$.`,
          t`$= -1458 + 162 + 81 + 5$ $= -1210$. So the remainder is $-1210$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.5 SolvedEx.4" },
      stem: t`When the polynomial $t^3 - 3t^2 + kt + 50$ is divided by $t - 3$, the remainder is $62$. What is the value of $k$?`,
      verify: { kind: "value", inputs: { P: "t**3 - 3*t**2 + k*t + 50", a: "3", R: "62" }, params: { ask: "unk", var: "t", unk: "k" } },
      options: [
        { key: "A", text: t`$- \frac{50}{3}$`, correct: false, misconceptionId: "C08-M5", value: "-50/3" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$-22$`, correct: false, misconceptionId: "C08-M1", value: "-22" },
        { key: "D", text: t`$\frac{112}{3}$`, correct: false, misconceptionId: "C08-M4", value: "112/3" },
      ],
      solution: {
        steps: [
          t`The divisor is $t - 3$, so the remainder is $p(3)$.`,
          t`$p(3) = 27 - 27 + 3k + 50$ $= 3k + 50$.`,
          t`The remainder is $62$, so $3k + 50 = 62$.`,
          t`$3k = 62 - 50 = 12$, so $k = 4$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.5 Q6" },
      stem: t`When the polynomial $y^3 - 5y^2 + 7y + m$ is divided by $y + 2$, the remainder is $50$. What is the value of $m$?`,
      verify: { kind: "value", inputs: { P: "y**3 - 5*y**2 + 7*y + m", a: "-2", R: "50" }, params: { ask: "unk", var: "y", unk: "m" } },
      options: [
        { key: "A", text: t`$52$`, correct: false, misconceptionId: "C08-M2", value: "52" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C08-M4", value: "8" },
        { key: "C", text: t`$92$`, correct: true, value: "92" },
        { key: "D", text: t`$48$`, correct: false, misconceptionId: "C08-M1", value: "48" },
      ],
      solution: {
        steps: [
          t`$y + 2 = y - (-2)$, so the remainder is $p(-2)$.`,
          t`$p(-2) = -8 - 20 - 14 + m$ $= m - 42$.`,
          t`The remainder is $50$, so $m - 42 = 50$ and $m = 92$.`,
        ],
      },
    },
  ],
};
