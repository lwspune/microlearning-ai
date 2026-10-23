import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Divide $x^2 + 5x + 7$ by $x + 2$ using only the numbers $1$, $5$, $7$ and $-2$. **Can you?**`,
    reveal: t`Bring down $1$. Then $1 \times (-2) = -2$ and $5 - 2 = 3$. Then $3 \times (-2) = -6$ and $7 - 6 = 1$. The quotient is $x + 3$ and the remainder is $1$.`,
  },
  explanation: {
    intuition: [
      t`Long division by $x - a$ repeats the same moves on the coefficients again and again.`,
      t`**Synthetic division** keeps only those numbers and leaves out the variable.`,
      t`Write the dividend's coefficients in a row, with $0$ for a missing power.`,
      t`From the divisor $x - a$, take the number $a$: for $x + 2$, take $-2$.`,
      t`Bring the first coefficient down; then multiply by $a$ and add to the next one, again and again.`,
      t`The last number is the remainder; the others are the quotient's coefficients.`,
    ],
    formal: [
      {
        title: "Setting up the table",
        points: [
          t`The **dividend** is the polynomial being divided; the **divisor** is what it is divided by.`,
          t`Write the dividend in standard form, highest power first.`,
          t`Write its coefficient form, with $0$ for each missing power.`,
          t`$2x^3 - 5x + 4$ becomes $(2, 0, -5, 4)$.`,
          t`The divisor $x - a$ gives the number $a$, the value of $x$ that makes it zero.`,
          t`So $x - 2$ gives $2$, and $x + 2 = x - (-2)$ gives $-2$.`,
        ],
      },
      {
        title: "Bring down, multiply, add",
        points: [
          t`Divide $2x^3 - 5x + 4$ by $x - 2$: write $2$ on the left, and $2, 0, -5, 4$ on top.`,
          t`Bring the first coefficient, $2$, down to the bottom row.`,
          t`Multiply it by $a$: $2 \times 2 = 4$. Write $4$ under the next coefficient, and add: $0 + 4 = 4$.`,
          t`Multiply the newest bottom number by $a$: $4 \times 2 = 8$, and $-5 + 8 = 3$.`,
          t`Once more: $3 \times 2 = 6$, and $4 + 6 = 10$.`,
          t`The bottom row is $2, 4, 3, 10$.`,
        ],
      },
      {
        title: "Reading the answer",
        points: [
          t`The last number of the bottom row is the **remainder**: here $10$.`,
          t`The numbers before it are the coefficient form of the **quotient**: $(2, 4, 3)$.`,
          t`Dividing by $x - a$ lowers the degree by $1$, so the quotient starts one power lower.`,
          t`So the quotient is $2x^2 + 4x + 3$, of degree $2$.`,
          t`Check: Dividend $=$ Divisor $\times$ Quotient $+$ Remainder.`,
          t`$(x - 2)(2x^2 + 4x + 3) + 10$ $= 2x^3 - 5x + 4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Divide $2y^4 - 3y^3 + 5y - 4$ by $y - 1$ using synthetic division. Write the quotient and the remainder.`,
      steps: [
        t`Index form: $2y^4 - 3y^3 + 0y^2 + 5y - 4$, so the coefficient form is $(2, -3, 0, 5, -4)$.`,
        t`The divisor is $y - 1$, so $a = 1$.`,
        t`Bring down $2$. $2 \times 1 = 2$, $-3 + 2 = -1$. Then $-1 \times 1 = -1$, $0 - 1 = -1$.`,
        t`$-1 \times 1 = -1$, $5 - 1 = 4$. Then $4 \times 1 = 4$, $-4 + 4 = 0$.`,
        t`The bottom row is $2, -1, -1, 4, 0$. The quotient has degree $3$: $2y^3 - y^2 - y + 4$.`,
      ],
      answer: t`Quotient $= 2y^3 - y^2 - y + 4$, remainder $= 0$.`,
    },
    visualSpec: t`A synthetic-division table where the student drags each product down into the next column, watches each column add up, and sees the last cell light up as the remainder.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Takes the divisor's constant term as it is: uses $-5$ for $m - 5$ and $2$ for $x + 2$.`,
      remediation: t`Use the number that makes the divisor zero: $x - 5$ gives $5$, and $x + 2$ gives $-2$. Then multiply and add.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Leaves out the $0$ for a missing power when writing the coefficient form of the dividend.`,
      remediation: t`Every power from the highest down to the constant needs a place. Write $0$ for a missing power: $x^3 - 2$ is $(1, 0, 0, -2)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M3",
      mistake: "Gives the quotient the dividend's degree: reads the bottom row from the dividend's highest power.",
      remediation: t`Dividing by $x - a$ lowers the degree by $1$: a dividend of degree $4$ gives a quotient of degree $3$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: t`Multiplies $a$ by the coefficient in the top row instead of by the number just written in the bottom row.`,
      remediation: t`Each product uses the newest number in the bottom row: multiply it by $a$, write it under the next coefficient, then add.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Writes the coefficients in the order the terms are given, without putting the dividend in standard form first.",
      remediation: t`First write the dividend in standard form, highest power first. Then list its coefficients, with $0$ for a missing power.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M6",
      mistake: "Reads every number of the bottom row, the remainder included, as the quotient.",
      remediation: "The last number of the bottom row is the remainder, not part of the quotient. The quotient uses only the numbers before it.",
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    t`C06-M1 gives the key for the remainder when the dividend has only even powers (as in Q5's $x^4 - 3x^2 - 8$), so Q5 asks for the quotient.`,
    t`C06-M3 and C06-M6 give the same quotient when the remainder is $0$; the M6 model refuses such inputs.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.3 Q1(i)" },
      stem: t`Divide $2m^2 - 3m + 10$ by $m - 5$ using synthetic division. What is the quotient?`,
      verify: { kind: "value", inputs: { t: "(2*m**2, -3*m, 10)", d: "m - 5" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$2 m - 13$`, correct: false, misconceptionId: "C06-M1", value: "2*m - 13" },
        { key: "B", text: t`$2m^{2} + 7m$`, correct: false, misconceptionId: "C06-M3", value: "m*(2*m + 7)" },
        { key: "C", text: t`$2 m^{2} + 7 m + 45$`, correct: false, misconceptionId: "C06-M6", value: "2*m**2 + 7*m + 45" },
        { key: "D", text: t`$2 m + 7$`, correct: true, value: "2*m + 7" },
      ],
      solution: {
        steps: [
          t`The coefficient form is $(2, -3, 10)$. The divisor $m - 5$ gives $a = 5$.`,
          t`Bring down $2$. $2 \times 5 = 10$, $-3 + 10 = 7$.`,
          t`$7 \times 5 = 35$, $10 + 35 = 45$.`,
          t`The bottom row is $2, 7, 45$: the quotient is $2m + 7$, the remainder $45$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.3 Q1(ii)" },
      stem: t`Divide $x^4 + 2x^3 + 3x^2 + 4x + 5$ by $x + 2$ using synthetic division. What is the quotient?`,
      verify: { kind: "value", inputs: { t: "(x**4, 2*x**3, 3*x**2, 4*x, 5)", d: "x + 2" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$x^{3} + 3 x - 2$`, correct: true, value: "x**3 + 3*x - 2" },
        { key: "B", text: t`$x^{4} + 3x^{2} - 2x$`, correct: false, misconceptionId: "C06-M3", value: "x*(x**3 + 3*x - 2)" },
        { key: "C", text: t`$x^{3} - x - 2$`, correct: false, misconceptionId: "C06-M4", value: "x**3 - x - 2" },
        { key: "D", text: t`$x^{4} + 3 x^{2} - 2 x + 9$`, correct: false, misconceptionId: "C06-M6", value: "x**4 + 3*x**2 - 2*x + 9" },
      ],
      solution: {
        steps: [
          t`The coefficient form is $(1, 2, 3, 4, 5)$. The divisor $x + 2$ gives $a = -2$.`,
          t`Bring down $1$. $1 \times (-2) = -2$, $2 - 2 = 0$. $0 \times (-2) = 0$, $3 + 0 = 3$.`,
          t`$3 \times (-2) = -6$, $4 - 6 = -2$. $-2 \times (-2) = 4$, $5 + 4 = 9$.`,
          t`The bottom row is $1, 0, 3, -2, 9$. The quotient has degree $3$: $x^3 + 3x - 2$, remainder $9$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.3 Q1(iii)" },
      stem: t`Divide $y^3 - 216$ by $y - 6$ using synthetic division. What is the remainder?`,
      verify: { kind: "value", inputs: { t: "(y**3, -216)", d: "y - 6" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$-432$`, correct: false, misconceptionId: "C06-M1", value: "-432" },
        { key: "C", text: t`$-210$`, correct: false, misconceptionId: "C06-M2", value: "-210" },
        { key: "D", text: t`$-216$`, correct: false, misconceptionId: "C06-M4", value: "-216" },
      ],
      solution: {
        steps: [
          t`Index form: $y^3 + 0y^2 + 0y - 216$, so the coefficient form is $(1, 0, 0, -216)$.`,
          t`The divisor $y - 6$ gives $a = 6$. Bring down $1$. $1 \times 6 = 6$, $0 + 6 = 6$.`,
          t`$6 \times 6 = 36$, $0 + 36 = 36$. $36 \times 6 = 216$, $-216 + 216 = 0$.`,
          t`The last number is $0$, so the remainder is $0$ (the quotient is $y^2 + 6y + 36$).`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.3 Q1(iv)" },
      stem: t`Divide $2x^4 + 3x^3 + 4x - 2x^2$ by $x + 3$ using synthetic division. What is the quotient?`,
      verify: { kind: "value", inputs: { t: "(2*x**4, 3*x**3, 4*x, -2*x**2)", d: "x + 3" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$2 x^{3} - 3 x^{2} + 13 x - 41$`, correct: false, misconceptionId: "C06-M5", value: "2*x**3 - 3*x**2 + 13*x - 41" },
        { key: "B", text: t`$2 x^{3} - 3 x^{2} + 7 x - 17$`, correct: true, value: "2*x**3 - 3*x**2 + 7*x - 17" },
        { key: "C", text: t`$2 x^{3} + 9 x^{2} + 25 x + 79$`, correct: false, misconceptionId: "C06-M1", value: "2*x**3 + 9*x**2 + 25*x + 79" },
        { key: "D", text: t`$2x^{4} - 3x^{3} + 7x^{2} - 17x$`, correct: false, misconceptionId: "C06-M3", value: "x*(2*x**3 - 3*x**2 + 7*x - 17)" },
      ],
      solution: {
        steps: [
          t`Standard form: $2x^4 + 3x^3 - 2x^2 + 4x + 0$, so the coefficient form is $(2, 3, -2, 4, 0)$.`,
          t`The divisor $x + 3$ gives $a = -3$. Bring down $2$. $2 \times (-3) = -6$, $3 - 6 = -3$.`,
          t`$-3 \times (-3) = 9$, $-2 + 9 = 7$. $7 \times (-3) = -21$, $4 - 21 = -17$.`,
          t`$-17 \times (-3) = 51$, $0 + 51 = 51$. The quotient is $2x^3 - 3x^2 + 7x - 17$, the remainder $51$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.3 Q1(v)" },
      stem: t`Divide $x^4 - 3x^2 - 8$ by $x + 4$ using synthetic division. What is the quotient?`,
      verify: { kind: "value", inputs: { t: "(x**4, -3*x**2, -8)", d: "x + 4" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$x^{3} - 4 x^{2} + 13 x - 52$`, correct: true, value: "x**3 - 4*x**2 + 13*x - 52" },
        { key: "B", text: t`$x^{3} + 4 x^{2} + 13 x + 52$`, correct: false, misconceptionId: "C06-M1", value: "x**3 + 4*x**2 + 13*x + 52" },
        { key: "C", text: t`$x - 7$`, correct: false, misconceptionId: "C06-M2", value: "x - 7" },
        { key: "D", text: t`$x^{3} - 4 x^{2} - 3 x + 12$`, correct: false, misconceptionId: "C06-M4", value: "x**3 - 4*x**2 - 3*x + 12" },
      ],
      solution: {
        steps: [
          t`Index form: $x^4 + 0x^3 - 3x^2 + 0x - 8$, so the coefficient form is $(1, 0, -3, 0, -8)$.`,
          t`The divisor $x + 4$ gives $a = -4$. Bring down $1$. $1 \times (-4) = -4$, $0 - 4 = -4$.`,
          t`$-4 \times (-4) = 16$, $-3 + 16 = 13$. $13 \times (-4) = -52$, $0 - 52 = -52$.`,
          t`$-52 \times (-4) = 208$, $-8 + 208 = 200$. The quotient is $x^3 - 4x^2 + 13x - 52$, the remainder $200$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q9" },
      stem: t`Divide $3x^3 - 8x^2 + 7$ by $x - 3$ using synthetic division. What is the remainder?`,
      verify: { kind: "value", inputs: { t: "(3*x**3, -8*x**2, 7)", d: "x - 3" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C06-M2", value: "10" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C06-M4", value: "7" },
        { key: "C", text: t`$16$`, correct: true, value: "16" },
        { key: "D", text: t`$-146$`, correct: false, misconceptionId: "C06-M1", value: "-146" },
      ],
      solution: {
        steps: [
          t`Index form: $3x^3 - 8x^2 + 0x + 7$, so the coefficient form is $(3, -8, 0, 7)$.`,
          t`The divisor $x - 3$ gives $a = 3$. Bring down $3$. $3 \times 3 = 9$, $-8 + 9 = 1$.`,
          t`$1 \times 3 = 3$, $0 + 3 = 3$. $3 \times 3 = 9$, $7 + 9 = 16$.`,
          t`The last number is $16$, so the remainder is $16$ (the quotient is $3x^2 + x + 3$).`,
        ],
      },
    },
  ],
};
