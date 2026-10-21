import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Asha solves $\frac{x}{4} - 2 > \frac{x}{6}$. She multiplies by $12$, writes $3x - 2 > 2x$ and gets $x > 2$. **Is $x = 12$ a solution?**`,
    reveal: t`No: at $x = 12$ the left side is $3 - 2 = 1$, and $1 > 2$ is false. Asha forgot to multiply the $2$ by $12$. Done properly, $3x - 24 > 2x$, so $x > 24$, and $12$ is not in it.`,
  },
  explanation: {
    intuition: [
      t`Brackets and fractions do not change the method; they only need tidying first.`,
      t`Open the brackets: the number outside multiplies **every** term inside.`,
      t`The **L.C.M.** of the denominators is the smallest number that each of them divides.`,
      t`Multiply every term on both sides by the L.C.M.: the fractions disappear.`,
      t`The L.C.M. is positive, so the sign of the inequality stays as it is.`,
      t`Then collect the $x$ terms on one side, and divide by the coefficient of $x$ last.`,
    ],
    formal: [
      {
        title: "Opening the brackets",
        points: [
          t`The number outside a bracket multiplies every term inside: $a(b + c) = ab + ac$.`,
          t`So $5(x - 3) = 5x - 15$, not $5x - 3$.`,
          t`A minus outside a bracket changes the sign of every term inside.`,
          t`So $-(2x + 7) = -2x - 7$, and $-4(x - 5) = -4x + 20$.`,
          t`Opening a bracket only rewrites one side, so the sign of the inequality does not change.`,
        ],
      },
      {
        title: "Clearing the fractions",
        points: [
          t`In $\frac{x}{2} - 3 \le \frac{x}{5}$ the denominators are $2$ and $5$, with L.C.M. $10$.`,
          t`Multiply **every** term by $10$, the $3$ included: $5x - 30 \le 2x$.`,
          t`The L.C.M. is positive, so $\le$ stays $\le$.`,
          t`A fraction with a bracket on top keeps its bracket: $10 \cdot \frac{x - 1}{5} = 2(x - 1)$.`,
          t`Then open it as usual: $2(x - 1) = 2x - 2$.`,
          t`A minus before such a fraction covers the whole bracket: times $10$, $-\frac{x - 1}{5}$ becomes $-2(x - 1)$.`,
        ],
      },
      {
        title: "Collect, then divide last",
        points: [
          t`Add or subtract the same term on both sides to bring the $x$ terms together.`,
          t`So a term that crosses over changes its sign: $5x - 30 \le 2x$ gives $3x \le 30$.`,
          t`Divide by the coefficient of $x$ only at the end.`,
          t`Dividing by a positive number keeps the sign: $3x \le 30$ gives $x \le 10$.`,
          t`Dividing by a negative number turns the sign round: $-3x \le 30$ gives $x \ge -10$.`,
          t`Write the answer as an interval: $x \le 10$ is $(-\infty, 10]$; a square bracket includes the end.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $\dfrac{x}{4} < \dfrac{5x - 2}{3} - \dfrac{7x - 3}{5}$ for real $x$.`,
      steps: [
        t`The L.C.M. of $4$, $3$ and $5$ is $60$. Multiply every term by $60$; it is positive, so the sign stays: $15x < 20(5x - 2) - 12(7x - 3)$.`,
        t`Open the brackets. The minus changes both signs in the second one: $15x < 100x - 40 - 84x + 36$.`,
        t`Simplify the right side: $15x < 16x - 4$. Subtract $16x$ from both sides: $-x < -4$.`,
        t`Divide by $-1$, a negative number, so the sign turns round: $x > 4$.`,
      ],
      answer: t`$x > 4$: the solution set is $(4, \infty)$.`,
    },
    visualSpec: t`A balance whose pans hold the two sides: scaling both pans by the L.C.M. keeps the tilt, but dividing by a negative number flips it.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Multiplies only the fractions by the L.C.M. and leaves the terms with no denominator as they were.",
      remediation: t`Multiply **every** term on both sides by the L.C.M., whole numbers and plain $x$ terms too; otherwise the two sides are not multiplied by the same number.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "With a minus before a bracket, changes the sign of only the first term inside.",
      remediation: t`A minus before a bracket changes the sign of **every** term inside: $-(a + b) = -a - b$ and $-(a - b) = -a + b$.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
    {
      id: "C02-M3",
      mistake: t`Divides both sides by a negative coefficient of $x$ but keeps the sign as it was.`,
      remediation: t`Dividing both sides by a negative number turns the sign round: $-2x < 6$ gives $x > -3$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Turns the sign round on multiplying both sides by the L.C.M.",
      remediation: "The L.C.M. is positive, and multiplying both sides by a positive number keeps the sign. Turn it round only for a negative multiplier or divisor.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Multiplies only the first term inside a bracket by the number outside it.",
      remediation: t`The number outside a bracket multiplies **every** term inside: $4(x - 3) = 4x - 12$, not $4x - 3$.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
    {
      id: "C02-M6",
      mistake: "Carries a term across to the other side without changing its sign.",
      remediation: t`Moving a term across means subtracting (or adding) it on both sides, so it changes sign: $5x \le 2x + 6$ gives $3x \le 6$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C02-M3 and C02-M4 both give the key turned round whenever the inequality has fractions and the coefficient of x is negative once x is collected on the left. Items keep them apart: M3 items have no fractions; M4 items have a positive coefficient of x.",
    "C02-M3 and C02-M6 are modelled with x collected on the left. A student who collects x on the right gets other numbers, and with M3 may even reach the key.",
    "C02-M2 and C02-M5 agree on a bracket multiplied by -1 (both change only its first term), so M5 is modelled only on brackets multiplied by a number other than 1 or -1.",
    "C02-Q5 and C02-Q6 are NCERT Ex 5.1 Q16 and Q10 with the two sides swapped, so that x collects with a positive coefficient and M4 is not confused with M3.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q14" },
      stem: t`Solve $37 - (3x + 5) \ge 9x - 8(x - 3)$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((1, 37, 0, 1), (-1, 3*x, 5, 1))", R: "((1, 9*x, 0, 1), (-8, x, -3, 1))" }, params: { rel: "ge" } },
      options: [
        { key: "A", text: t`$\left(-\infty, 2\right]$`, correct: true, value: "Interval(-oo, 2)" },
        { key: "B", text: t`$\left(-\infty, \frac{33}{2}\right]$`, correct: false, misconceptionId: "C02-M2", value: "Interval(-oo, 33/2)" },
        { key: "C", text: t`$\left[2, \infty\right)$`, correct: false, misconceptionId: "C02-M3", value: "Interval(2, oo)" },
        { key: "D", text: t`$\left(-\infty, \frac{35}{4}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Interval(-oo, 35/4)" },
      ],
      solution: {
        steps: [
          t`Open the brackets; each minus changes every sign inside: $37 - 3x - 5 \ge 9x - 8x + 24$.`,
          t`Simplify both sides: $32 - 3x \ge x + 24$.`,
          t`Subtract $x$ and $32$ from both sides: $-4x \ge -8$.`,
          t`Divide by $-4$, so the sign turns round: $x \le 2$. The solution set is $(-\infty, 2]$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/5.1 Eg.4" },
      stem: t`Solve $\dfrac{5 - 2x}{3} \le \dfrac{x}{6} - 5$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((1, 5, -2*x, 3),)", R: "((1, x, 0, 6), (1, -5, 0, 1))" }, params: { rel: "le" } },
      options: [
        { key: "A", text: t`$\left[3, \infty\right)$`, correct: false, misconceptionId: "C02-M1", value: "Interval(3, oo)" },
        { key: "B", text: t`$\left[\frac{40}{3}, \infty\right)$`, correct: false, misconceptionId: "C02-M5", value: "Interval(40/3, oo)" },
        { key: "C", text: t`$\left[\frac{20}{3}, \infty\right)$`, correct: false, misconceptionId: "C02-M6", value: "Interval(20/3, oo)" },
        { key: "D", text: t`$\left[8, \infty\right)$`, correct: true, value: "Interval(8, oo)" },
      ],
      solution: {
        steps: [
          t`The L.C.M. of $3$ and $6$ is $6$. Multiply every term by $6$, the $5$ included: $2(5 - 2x) \le x - 30$.`,
          t`Open the bracket: $10 - 4x \le x - 30$.`,
          t`Subtract $x$ and $10$ from both sides: $-5x \le -40$.`,
          t`Divide by $-5$, so the sign turns round: $x \ge 8$. The solution set is $[8, \infty)$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q11" },
      stem: t`Solve $\dfrac{3(x - 2)}{5} \le \dfrac{5(2 - x)}{3}$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((3, x, -2, 5),)", R: "((5, 2, -x, 3),)" }, params: { rel: "le" } },
      options: [
        { key: "A", text: t`$\left[-2, \infty\right)$`, correct: false, misconceptionId: "C02-M6", value: "Interval(-2, oo)" },
        { key: "B", text: t`$\left(-\infty, 2\right]$`, correct: true, value: "Interval(-oo, 2)" },
        { key: "C", text: t`$\left[2, \infty\right)$`, correct: false, misconceptionId: "C02-M4", value: "Interval(2, oo)" },
        { key: "D", text: t`$\left(-\infty, \frac{26}{5}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Interval(-oo, 26/5)" },
      ],
      solution: {
        steps: [
          t`The L.C.M. of $5$ and $3$ is $15$, a positive number, so the sign stays: $9(x - 2) \le 25(2 - x)$.`,
          t`Open the brackets: $9x - 18 \le 50 - 25x$.`,
          t`Add $25x$ and $18$ to both sides: $34x \le 68$.`,
          t`Divide by $34$, a positive number: $x \le 2$. The solution set is $(-\infty, 2]$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q13" },
      stem: t`Solve $2(2x + 3) - 10 < 6(x - 2)$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((2, 2*x, 3, 1), (1, -10, 0, 1))", R: "((6, x, -2, 1),)" }, params: { rel: "lt" } },
      options: [
        { key: "A", text: t`$\left(-\infty, - \frac{8}{5}\right)$`, correct: false, misconceptionId: "C02-M6", value: "Interval.open(-oo, -8/5)" },
        { key: "B", text: t`$\left(4, \infty\right)$`, correct: true, value: "Interval.open(4, oo)" },
        { key: "C", text: t`$\left(-\infty, 4\right)$`, correct: false, misconceptionId: "C02-M3", value: "Interval.open(-oo, 4)" },
        { key: "D", text: t`$\left(- \frac{5}{2}, \infty\right)$`, correct: false, misconceptionId: "C02-M5", value: "Interval.open(-5/2, oo)" },
      ],
      solution: {
        steps: [
          t`Open the brackets: $4x + 6 - 10 < 6x - 12$, that is, $4x - 4 < 6x - 12$.`,
          t`Subtract $6x$ from both sides and add $4$: $-2x < -8$.`,
          t`Divide by $-2$, so the sign turns round: $x > 4$. The solution set is $(4, \infty)$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q16" },
      stem: t`Solve $\dfrac{3x - 2}{4} - \dfrac{2 - x}{5} \le \dfrac{2x - 1}{3}$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((1, 3*x, -2, 4), (-1, 2, -x, 5))", R: "((1, 2*x, -1, 3),)" }, params: { rel: "le" } },
      options: [
        { key: "A", text: t`$\left(-\infty, \frac{25}{4}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Interval(-oo, 25/4)" },
        { key: "B", text: t`$\left(-\infty, 2\right]$`, correct: true, value: "Interval(-oo, 2)" },
        { key: "C", text: t`$\left[- \frac{34}{7}, \infty\right)$`, correct: false, misconceptionId: "C02-M2", value: "Interval(-34/7, oo)" },
        { key: "D", text: t`$\left[2, \infty\right)$`, correct: false, misconceptionId: "C02-M4", value: "Interval(2, oo)" },
      ],
      solution: {
        steps: [
          t`The L.C.M. of $4$, $5$ and $3$ is $60$, positive, so the sign stays: $15(3x - 2) - 12(2 - x) \le 20(2x - 1)$.`,
          t`Open the brackets; the minus changes both signs in the second: $45x - 30 - 24 + 12x \le 40x - 20$.`,
          t`Simplify: $57x - 54 \le 40x - 20$. Subtract $40x$ and add $54$: $17x \le 34$.`,
          t`Divide by $17$: $x \le 2$. The solution set is $(-\infty, 2]$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q10" },
      stem: t`Solve $\dfrac{x}{2} + 1 < \dfrac{x}{3}$ for real $x$.`,
      verify: { kind: "value", inputs: { L: "((1, x, 0, 2), (1, 1, 0, 1))", R: "((1, x, 0, 3),)" }, params: { rel: "lt" } },
      options: [
        { key: "A", text: t`$\left(-\infty, -6\right)$`, correct: true, value: "Interval.open(-oo, -6)" },
        { key: "B", text: t`$\left(-\infty, -1\right)$`, correct: false, misconceptionId: "C02-M1", value: "Interval.open(-oo, -1)" },
        { key: "C", text: t`$\left(-6, \infty\right)$`, correct: false, misconceptionId: "C02-M4", value: "Interval.open(-6, oo)" },
        { key: "D", text: t`$\left(-\infty, \frac{6}{5}\right)$`, correct: false, misconceptionId: "C02-M6", value: "Interval.open(-oo, 6/5)" },
      ],
      solution: {
        steps: [
          t`The L.C.M. of $2$ and $3$ is $6$. Multiply every term by $6$, the $1$ included: $3x + 6 < 2x$.`,
          t`Subtract $2x$ and $6$ from both sides: $x < -6$. The solution set is $(-\infty, -6)$.`,
        ],
      },
    },
  ],
};
