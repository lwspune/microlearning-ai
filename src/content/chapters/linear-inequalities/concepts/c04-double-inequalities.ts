import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`If $-1 < -x < 3$, can $x$ be $2$? **What are all the values $x$ can take?**`,
    reveal: t`No. At $x = 2$, $-x = -2$, which is below $-1$. Multiply all three parts by $-1$ and **both** signs turn round: $1 > x > -3$. With the smaller number on the left, $-3 < x < 1$: the interval $(-3, 1)$.`,
  },
  explanation: {
    intuition: [
      t`A **double inequality** such as $2 < x + 5 < 9$ traps $x + 5$ between two numbers.`,
      t`It is two inequalities at once: $2 < x + 5$ and $x + 5 < 9$.`,
      t`So every step must be done to **all three parts**: the left end, the middle and the right end.`,
      t`Subtract $5$ from every part: $2 - 5 < x < 9 - 5$, so $-3 < x < 4$.`,
      t`Multiply or divide every part by a negative number and **both** signs turn round.`,
      t`Each end keeps its own sign: a **strict** sign ($<$) stays strict, a **slack** one ($\le$) stays slack.`,
    ],
    formal: [
      {
        title: "All three parts",
        points: [
          t`Solve $-8 \le 5x - 3 < 7$: get $x$ alone in the middle.`,
          t`Add $3$ to every part: $-8 + 3 \le 5x < 7 + 3$, so $-5 \le 5x < 10$.`,
          t`Divide every part by the positive number $5$; the signs stay: $-1 \le x < 2$.`,
          t`An **interval** writes this range: a square bracket for an end that is included, a round one for an end that is not.`,
          t`So $-1 \le x < 2$ is $x \in [-1, 2)$: $-1$ is in, $2$ is not.`,
        ],
      },
      {
        title: "Dividing by a negative number",
        points: [
          t`Solve $-4 \le -2x < 6$: the middle has $-2x$.`,
          t`Divide every part by $-2$; **both** signs turn round: $2 \ge x > -3$.`,
          t`Now rewrite it with the smaller number on the left: $-3 < x \le 2$.`,
          t`Each sign stays with its own number: the strict sign was at $6$, so it is at $-3$ now.`,
          t`So $x \in (-3, 2]$; check: $x = 2$ gives $-2x = -4$, which is allowed.`,
        ],
      },
      {
        title: "Fractions in the middle",
        points: [
          t`Solve $1 < \frac{x + 3}{2} \le 4$: clear the fraction first.`,
          t`Multiply **every** part by the positive number $2$, not just the middle: $2 < x + 3 \le 8$.`,
          t`Subtract $3$ from every part: $-1 < x \le 5$, so $x \in (-1, 5]$.`,
          t`Tidy the signs of a fraction before you start: $\frac{3x}{-5} = -\frac{3x}{5}$.`,
          t`So $4 - \frac{3x}{-5}$ is $4 + \frac{3x}{5}$: its $x$ term is positive.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $-4 < \dfrac{2 - 3x}{4} \le 2$ for real $x$.`,
      steps: [
        t`Multiply every part by the positive number $4$: $-16 < 2 - 3x \le 8$.`,
        t`Subtract $2$ from every part: $-18 < -3x \le 6$.`,
        t`Divide every part by $-3$; both signs turn round: $6 > x \ge -2$.`,
        t`Smaller number on the left, each sign kept with its number: $-2 \le x < 6$.`,
      ],
      answer: t`$x \in [-2, 6)$`,
    },
    visualSpec: t`Drag a number across the middle of $a \le px + q < b$ and watch the interval for $x$ flip when $p$ goes negative.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Does each step to the middle only, so the two ends never change and the answer keeps the original numbers.",
      remediation: "A double inequality is two inequalities at once, so each step goes to all three parts: add, subtract, multiply or divide the left end, the middle and the right end alike.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Divides by a negative number without turning the signs, gets something like $1 \le x < 0$ and decides there is no solution.`,
      remediation: t`Multiplying or dividing by a negative number turns both signs round: $-4 \le -2x < 6$ becomes $2 \ge x > -3$, which is $-3 < x \le 2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: "Divides by a negative number and turns only one of the two signs, then reads off the two separate conditions.",
      remediation: "Dividing by a negative number turns both signs round, not one; then rewrite the result with the smaller number on the left.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Turns both signs and puts the smaller number on the left, but leaves the signs in their old places, so the strict end moves.",
      remediation: t`Each sign belongs to its own number: in $2 \ge x > -3$ the strict sign sits at $-3$, so it is $-3 < x \le 2$, the interval $(-3, 2]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Does every step to all three parts except the last division by the coefficient of $x$, which goes to the middle only.`,
      remediation: t`The last step, dividing by the number in front of $x$, also goes to both ends: $6 \le 3x \le 9$ gives $2 \le x \le 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Clears the fraction by multiplying the middle by its denominator but leaves the two ends as they were.",
      remediation: t`To clear a fraction, multiply every part by the denominator: $1 < \frac{x + 3}{2} \le 4$ becomes $2 < x + 3 \le 8$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M2, M3 and M4 apply only when the coefficient of $x$ is negative; C04-M5 only when it is positive.`,
    t`C04-M4 gives the key when both signs are alike (both $<$ or both $\le$): diagnose it on items with one strict and one slack sign, as Q2 and Q6.`,
    "C04-M6 needs a fraction to clear (Q1, Q3, Q5).",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Misc Q6" },
      stem: t`For real $x$, the solution set of $7 \le \dfrac{3x + 11}{2} \le 11$ is`,
      verify: { kind: "value", inputs: { lo: "7", hi: "11", p: "3", q: "11", d: "2" }, params: { form: "frac", L: "le", R: "le" } },
      options: [
        { key: "A", text: t`$\left[3, 11\right]$`, correct: false, misconceptionId: "C04-M5", value: "Interval(3, 11)" },
        { key: "B", text: t`$\left[- \frac{4}{3}, 0\right]$`, correct: false, misconceptionId: "C04-M6", value: "Interval(-4/3, 0)" },
        { key: "C", text: t`$\left[1, \frac{11}{3}\right]$`, correct: true, value: "Interval(1, 11/3)" },
        { key: "D", text: t`$\left[7, 11\right]$`, correct: false, misconceptionId: "C04-M1", value: "Interval(7, 11)" },
      ],
      solution: {
        steps: [
          t`Multiply every part by $2$: $14 \le 3x + 11 \le 22$.`,
          t`Subtract $11$ from every part: $3 \le 3x \le 11$.`,
          t`Divide every part by $3$: $1 \le x \le \frac{11}{3}$, so $x \in \left[1, \frac{11}{3}\right]$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Misc Q2" },
      stem: t`For real $x$, the solution set of $6 \le -3(2x - 4) < 12$ is`,
      verify: { kind: "value", inputs: { lo: "6", hi: "12", p: "-6", q: "12", d: "1" }, params: { form: "frac", L: "le", R: "lt" } },
      options: [
        { key: "A", text: t`$\left[0, 1\right)$`, correct: false, misconceptionId: "C04-M4", value: "Interval.Ropen(0, 1)" },
        { key: "B", text: t`$\emptyset$ (no real $x$)`, correct: false, misconceptionId: "C04-M2", value: "EmptySet" },
        { key: "C", text: t`$\left(-\infty, 0\right)$`, correct: false, misconceptionId: "C04-M3", value: "Interval.open(-oo, 0)" },
        { key: "D", text: t`$\left(0, 1\right]$`, correct: true, value: "Interval.Lopen(0, 1)" },
      ],
      solution: {
        steps: [
          t`Open the bracket: $6 \le -6x + 12 < 12$.`,
          t`Subtract $12$ from every part: $-6 \le -6x < 0$.`,
          t`Divide every part by $-6$; both signs turn: $1 \ge x > 0$.`,
          t`So $0 < x \le 1$, that is $x \in (0, 1]$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Misc Eg.10" },
      stem: t`For real $x$, the solution set of $-5 \le \dfrac{5 - 3x}{2} \le 8$ is`,
      verify: { kind: "value", inputs: { lo: "-5", hi: "8", p: "-3", q: "5", d: "2" }, params: { form: "frac", L: "le", R: "le" } },
      options: [
        { key: "A", text: t`$\left(-\infty, - \frac{11}{3}\right]$`, correct: false, misconceptionId: "C04-M3", value: "Interval(-oo, -11/3)" },
        { key: "B", text: t`$\left[-1, \frac{10}{3}\right]$`, correct: false, misconceptionId: "C04-M6", value: "Interval(-1, 10/3)" },
        { key: "C", text: t`$\left[- \frac{11}{3}, 5\right]$`, correct: true, value: "Interval(-11/3, 5)" },
        { key: "D", text: t`$\left[-5, 8\right]$`, correct: false, misconceptionId: "C04-M1", value: "Interval(-5, 8)" },
      ],
      solution: {
        steps: [
          t`Multiply every part by $2$: $-10 \le 5 - 3x \le 16$.`,
          t`Subtract $5$ from every part: $-15 \le -3x \le 11$.`,
          t`Divide every part by $-3$; both signs turn: $5 \ge x \ge -\frac{11}{3}$.`,
          t`So $x \in \left[-\frac{11}{3}, 5\right]$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Misc Q3" },
      stem: t`For real $x$, the solution set of $-3 \le 4 - \dfrac{7x}{2} \le 18$ is`,
      verify: { kind: "value", inputs: { lo: "-3", hi: "18", k: "4", p: "-7", d: "2" }, params: { form: "shift", L: "le", R: "le" } },
      options: [
        { key: "A", text: t`$\left[-3, 18\right]$`, correct: false, misconceptionId: "C04-M1", value: "Interval(-3, 18)" },
        { key: "B", text: t`$\emptyset$ (no real $x$)`, correct: false, misconceptionId: "C04-M2", value: "EmptySet" },
        { key: "C", text: t`$\left(-\infty, -4\right]$`, correct: false, misconceptionId: "C04-M3", value: "Interval(-oo, -4)" },
        { key: "D", text: t`$\left[-4, 2\right]$`, correct: true, value: "Interval(-4, 2)" },
      ],
      solution: {
        steps: [
          t`Subtract $4$ from every part: $-7 \le -\frac{7x}{2} \le 14$.`,
          t`Multiply every part by $-\frac{2}{7}$; both signs turn: $2 \ge x \ge -4$.`,
          t`So $-4 \le x \le 2$, that is $x \in [-4, 2]$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Misc Q4" },
      stem: t`For real $x$, the solution set of $-15 < \dfrac{3(x - 2)}{5} \le 0$ is`,
      verify: { kind: "value", inputs: { lo: "-15", hi: "0", p: "3", q: "-6", d: "5" }, params: { form: "frac", L: "lt", R: "le" } },
      options: [
        { key: "A", text: t`$\left(-3, 2\right]$`, correct: false, misconceptionId: "C04-M6", value: "Interval.Lopen(-3, 2)" },
        { key: "B", text: t`$\left(-23, 2\right]$`, correct: true, value: "Interval.Lopen(-23, 2)" },
        { key: "C", text: t`$\left(-15, 0\right]$`, correct: false, misconceptionId: "C04-M1", value: "Interval.Lopen(-15, 0)" },
        { key: "D", text: t`$\left(-69, 6\right]$`, correct: false, misconceptionId: "C04-M5", value: "Interval.Lopen(-69, 6)" },
      ],
      solution: {
        steps: [
          t`Multiply every part by $5$: $-75 < 3(x - 2) \le 0$, so $-75 < 3x - 6 \le 0$.`,
          t`Add $6$ to every part: $-69 < 3x \le 6$.`,
          t`Divide every part by $3$: $-23 < x \le 2$, so $x \in (-23, 2]$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`For real $x$, the solution set of $-7 < 5 - 4x \le 9$ is`,
      verify: { kind: "value", inputs: { lo: "-7", hi: "9", k: "5", p: "-4", d: "1" }, params: { form: "shift", L: "lt", R: "le" } },
      options: [
        { key: "A", text: t`$\left[-1, 3\right)$`, correct: true, value: "Interval.Ropen(-1, 3)" },
        { key: "B", text: t`$\left(-1, 3\right]$`, correct: false, misconceptionId: "C04-M4", value: "Interval.Lopen(-1, 3)" },
        { key: "C", text: t`$\left(-7, 9\right]$`, correct: false, misconceptionId: "C04-M1", value: "Interval.Lopen(-7, 9)" },
        { key: "D", text: t`$\left(-\infty, -1\right]$`, correct: false, misconceptionId: "C04-M3", value: "Interval(-oo, -1)" },
      ],
      solution: {
        steps: [
          t`Subtract $5$ from every part: $-12 < -4x \le 4$.`,
          t`Divide every part by $-4$; both signs turn: $3 > x \ge -1$.`,
          t`So $-1 \le x < 3$: the strict sign stays at $3$, giving $x \in [-1, 3)$.`,
        ],
      },
    },
  ],
};
