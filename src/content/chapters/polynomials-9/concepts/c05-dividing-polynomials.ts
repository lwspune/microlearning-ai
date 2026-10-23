import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`$17 \div 5$ gives quotient $3$ and remainder $2$, because $17 = 5 \times 3 + 2$. Can $x^2 + 5x + 7$ be divided by $x + 2$ the same way?`,
    reveal: t`Yes. $(x + 2)(x + 3) = x^2 + 5x + 6$, which is $1$ short. So $x^2 + 5x + 7$ $= (x + 2)(x + 3) + 1$: quotient $x + 3$, remainder $1$.`,
  },
  explanation: {
    intuition: [
      t`With numbers, $17 = 5 \times 3 + 2$, and the remainder $2$ is less than the divisor $5$.`,
      t`Polynomials divide the same way: Dividend $=$ Divisor $\times$ Quotient $+$ Remainder.`,
      t`The **dividend** is the polynomial being divided; the **divisor** is the polynomial we divide by.`,
      t`The **quotient** is the result of the division; the **remainder** is what is left over.`,
      t`For polynomials, the remainder must have a lower degree than the divisor.`,
      t`**Long division** finds the quotient one term at a time, as it does for numbers.`,
    ],
    formal: [
      {
        title: "Setting up",
        points: [
          t`Write the dividend and the divisor in **standard form**: powers in descending order.`,
          t`Put a $0$ term for every missing power of the dividend: $3x^2 + 5$ becomes $3x^2 + 0x + 5$.`,
          t`The $0$ terms keep like terms in the same column while you subtract.`,
        ],
      },
      {
        title: "One step of division",
        points: [
          t`Divide the first term of the dividend by the first term of the divisor: $3x^2 \div x = 3x$.`,
          t`When dividing powers, subtract the indices: $x^5 \div x^2 = x^3$.`,
          t`This term is the first term of the quotient.`,
          t`Multiply it by **every** term of the divisor: $3x(x + 1) = 3x^2 + 3x$.`,
          t`Subtract: change the sign of every term of the product, then add.`,
          t`What is left is the new dividend for the next step.`,
        ],
      },
      {
        title: "When to stop",
        points: [
          t`Repeat the step while what is left has degree at least the degree of the divisor.`,
          t`Stop when what is left has a lower degree than the divisor.`,
          t`What is left then is the **remainder**; the terms you found make the quotient.`,
          t`A remainder of $0$ means the divisor divides the dividend exactly.`,
        ],
      },
      {
        title: "Writing the answer",
        points: [
          t`Write the result as Dividend $=$ Divisor $\times$ Quotient $+$ Remainder.`,
          t`To check, multiply the divisor by the quotient and add the remainder; you must get the dividend.`,
          t`Given any three parts, the relation gives the fourth.`,
          t`For example, Remainder $=$ Dividend $-$ Divisor $\times$ Quotient.`,
        ],
      },
    ],
    worked: {
      prompt: t`Divide $x^3 - 3x^2 + 6$ by $x - 2$. Write the answer as Dividend $=$ Divisor $\times$ Quotient $+$ Remainder.`,
      steps: [
        t`The $x$ term is missing, so write the dividend as $x^3 - 3x^2 + 0x + 6$.`,
        t`$x^3 \div x = x^2$. Multiply: $x^2(x - 2) = x^3 - 2x^2$. Subtract to leave $-x^2 + 0x + 6$.`,
        t`$-x^2 \div x = -x$. Multiply: $-x(x - 2) = -x^2 + 2x$. Subtract to leave $-2x + 6$.`,
        t`$-2x \div x = -2$. Multiply: $-2(x - 2) = -2x + 4$. Subtract to leave $2$.`,
        t`$2$ has degree $0$, less than $1$, so stop. Quotient $x^2 - x - 2$, remainder $2$.`,
      ],
      answer: t`$x^3 - 3x^2 + 6$ $= (x - 2)(x^2 - x - 2) + 2$.`,
    },
    visualSpec: t`A long-division frame: the student types each quotient term, and the product and the subtraction fill in below, column by column.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`When subtracting the product, changing the sign of its first term only: $(3x^2 + 0x) - (3x^2 + 3x)$ taken as $3x$`,
      remediation: t`To subtract, change the sign of every term of the product, then add: $(3x^2 + 0x) - (3x^2 + 3x)$ $= -3x$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: "Stopping after one step, though what is left still has degree at least the divisor's",
      remediation: "Keep dividing while what is left has degree at least the divisor's degree. Stop only when it is lower: that is the remainder.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Multiplying a quotient term by the first term of the divisor only: $3x(x + 1)$ taken as $3x^2$`,
      remediation: t`Multiply each quotient term by every term of the divisor: $3x(x + 1) = 3x^2 + 3x$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: t`Leaving no place for a missing power, so unlike terms share a column: $3x^2 + 5$ worked as $3x^2 + 5x$`,
      remediation: t`Write the dividend in standard form with a $0$ term for each missing power: $3x^2 + 0x + 5$. Then only like terms are combined.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M5",
      mistake: t`Turning the relation round: Remainder $=$ Divisor $\times$ Quotient $-$ Dividend`,
      remediation: t`Dividend $=$ Divisor $\times$ Quotient $+$ Remainder, so Remainder $=$ Dividend $-$ Divisor $\times$ Quotient.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Leaving out the remainder: Dividend $=$ Divisor $\times$ Quotient`,
      remediation: t`The remainder is part of the dividend: Dividend $=$ Divisor $\times$ Quotient $+$ Remainder. Only a remainder of $0$ adds nothing.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M4 shows only when the dividend has a missing power; C05-M2 only when the quotient has more than one term; C05-M1 only for a divisor of two or more terms.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.2 SolvedEx.5" },
      stem: t`Divide $2 + 2x^2$ by $x + 2$. What are the quotient and the remainder?`,
      verify: { kind: "value", inputs: { D: "2 + 2*x**2", d: "x + 2" }, params: { ask: "qr" } },
      options: [
        { key: "A", text: t`Quotient $2x - 2$, remainder $4$`, correct: false, misconceptionId: "C05-M4", value: "(2*x - 2, 4)" },
        { key: "B", text: t`Quotient $2x - 4$, remainder $10$`, correct: true, value: "(2*x - 4, 10)" },
        { key: "C", text: t`Quotient $2x + 4$, remainder $10$`, correct: false, misconceptionId: "C05-M1", value: "(2*x + 4, 10)" },
        { key: "D", text: t`Quotient $2x$, remainder $2$`, correct: false, misconceptionId: "C05-M3", value: "(2*x, 2)" },
      ],
      solution: {
        steps: [
          t`Write $2x^2 + 0x + 2$. $2x^2 \div x = 2x$; $2x(x + 2) = 2x^2 + 4x$. Subtract to leave $-4x + 2$.`,
          t`$-4x \div x = -4$; $-4(x + 2) = -4x - 8$. Subtract: $2 - (-8) = 10$.`,
          t`$10$ has degree $0$, less than $1$, so stop: quotient $2x - 4$, remainder $10$.`,
          t`Check: $(x + 2)(2x - 4) + 10$ $= 2x^2 - 8 + 10$ $= 2x^2 + 2$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q5(i)" },
      stem: t`Divide $x^3 - 64$ by $x - 4$. What is the remainder?`,
      verify: { kind: "value", inputs: { D: "x**3 - 64", d: "x - 4" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$-128$`, correct: false, misconceptionId: "C05-M1", value: "-128" },
        { key: "B", text: t`$4x^2 - 64$`, correct: false, misconceptionId: "C05-M2", value: "4*x**2 - 64" },
        { key: "C", text: t`$-64$`, correct: false, misconceptionId: "C05-M3", value: "-64" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Write $x^3 + 0x^2 + 0x - 64$. $x^3 \div x = x^2$; subtract $x^3 - 4x^2$ to leave $4x^2 + 0x - 64$.`,
          t`$4x^2 \div x = 4x$; subtract $4x^2 - 16x$ to leave $16x - 64$.`,
          t`$16x \div x = 16$; subtract $16x - 64$ to leave $0$. The remainder is $0$.`,
          t`So $x^3 - 64$ $= (x - 4)(x^2 + 4x + 16) + 0$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q5(ii)" },
      stem: t`Divide $5x^5 + 4x^4 - 3x^3 + 2x^2 + 2$ by $x^2 - x$. What is the remainder?`,
      verify: { kind: "value", inputs: { D: "5*x**5 + 4*x**4 - 3*x**3 + 2*x**2 + 2", d: "x**2 - x" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$8x + 2$`, correct: true, value: "8*x + 2" },
        { key: "B", text: t`$-4x + 2$`, correct: false, misconceptionId: "C05-M1", value: "2 - 4*x" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C05-M3", value: "2" },
        { key: "D", text: t`$10x$`, correct: false, misconceptionId: "C05-M4", value: "10*x" },
      ],
      solution: {
        steps: [
          t`Write $0x$ for the missing power. $5x^5 \div x^2 = 5x^3$; subtract $5x^5 - 5x^4$ to leave $9x^4 - 3x^3 + 2x^2 + 0x + 2$.`,
          t`Next $9x^2$: subtract $9x^4 - 9x^3$ to leave $6x^3 + 2x^2 + 0x + 2$.`,
          t`Next $6x$: subtract $6x^3 - 6x^2$ to leave $8x^2 + 0x + 2$. Next $8$: subtract $8x^2 - 8x$ to leave $8x + 2$.`,
          t`$8x + 2$ has degree $1$, less than $2$, so stop. Quotient $5x^3 + 9x^2 + 6x + 8$, remainder $8x + 2$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Complete the activity. Dividend $=$ Divisor $\times$ Quotient $+$ Remainder: $3x^3 - 2x^2 + 4x - 5$ $= (x - 2)(3x^2 + 4x + 12) + \square$. What goes in the box?`,
      verify: { kind: "value", inputs: { D: "3*x**3 - 2*x**2 + 4*x - 5", d: "x - 2", q: "3*x**2 + 4*x + 12" }, params: { ask: "rem" } },
      options: [
        { key: "A", text: t`$-19$`, correct: false, misconceptionId: "C05-M5", value: "-19" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C05-M6", value: "0" },
        { key: "C", text: t`$19$`, correct: true, value: "19" },
        { key: "D", text: t`$-6x^2 - 8x - 5$`, correct: false, misconceptionId: "C05-M3", value: "-6*x**2 - 8*x - 5" },
      ],
      solution: {
        steps: [
          t`Remainder $=$ Dividend $-$ Divisor $\times$ Quotient.`,
          t`$(x - 2)(3x^2 + 4x + 12)$ $= 3x^3 + 4x^2 + 12x$ $- 6x^2 - 8x - 24$ $= 3x^3 - 2x^2 + 4x - 24$.`,
          t`Subtract it from $3x^3 - 2x^2 + 4x - 5$: the $x^3$, $x^2$ and $x$ terms cancel, leaving $-5 + 24 = 19$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`A polynomial $p(x)$ is divided by $x - 3$. The quotient is $x^2 + 2$ and the remainder is $5$. What is $p(x)$?`,
      verify: { kind: "value", inputs: { d: "x - 3", q: "x**2 + 2", r: "5" }, params: { ask: "dividend" } },
      options: [
        { key: "A", text: t`$x^3 - 3x^2 + 2x - 1$`, correct: true, value: "x**3 - 3*x**2 + 2*x - 1" },
        { key: "B", text: t`$x^3 + 2x + 5$`, correct: false, misconceptionId: "C05-M3", value: "x**3 + 2*x + 5" },
        { key: "C", text: t`$x^3 - 3x^2 + 2x - 11$`, correct: false, misconceptionId: "C05-M5", value: "x**3 - 3*x**2 + 2*x - 11" },
        { key: "D", text: t`$x^3 - 3x^2 + 2x - 6$`, correct: false, misconceptionId: "C05-M6", value: "x**3 - 3*x**2 + 2*x - 6" },
      ],
      solution: {
        steps: [
          t`Dividend $=$ Divisor $\times$ Quotient $+$ Remainder, so $p(x) = (x - 3)(x^2 + 2) + 5$.`,
          t`$(x - 3)(x^2 + 2) = x^3 + 2x - 3x^2 - 6$.`,
          t`$p(x) = x^3 - 3x^2 + 2x - 6 + 5$ $= x^3 - 3x^2 + 2x - 1$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`Divide $2x^4 - x^3 + 3x^2 - x + 4$ by $x^2 - 2$. What is the quotient?`,
      verify: { kind: "value", inputs: { D: "2*x**4 - x**3 + 3*x**2 - x + 4", d: "x**2 - 2" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$2x^2 - x + 7$`, correct: true, value: "2*x**2 - x + 7" },
        { key: "B", text: t`$2x^2 - x - 1$`, correct: false, misconceptionId: "C05-M1", value: "2*x**2 - x - 1" },
        { key: "C", text: t`$2x^2$`, correct: false, misconceptionId: "C05-M2", value: "2*x**2" },
        { key: "D", text: t`$2x^2 - x + 3$`, correct: false, misconceptionId: "C05-M3", value: "2*x**2 - x + 3" },
      ],
      solution: {
        steps: [
          t`Write the divisor as $x^2 + 0x - 2$. $2x^4 \div x^2 = 2x^2$; subtract $2x^4 - 4x^2$ to leave $-x^3 + 7x^2 - x + 4$.`,
          t`$-x^3 \div x^2 = -x$; subtract $-x^3 + 2x$ to leave $7x^2 - 3x + 4$.`,
          t`$7x^2 \div x^2 = 7$; subtract $7x^2 - 14$ to leave $-3x + 18$, of degree $1$, less than $2$.`,
          t`So the quotient is $2x^2 - x + 7$ (and the remainder is $-3x + 18$).`,
        ],
      },
    },
  ],
};
