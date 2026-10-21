import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$-3 < 2$ is true. Multiply both sides by $-1$. **Is $3 < -2$ true?**`,
    reveal: t`No: $3 > -2$. Multiplying both sides by a negative number turns the sign round. That one rule is where inequalities differ from equations.`,
  },
  explanation: {
    intuition: [
      t`An **inequality** compares two quantities using $<$, $>$, $\le$ or $\ge$, such as $x + 2 < 5$.`,
      t`$<$ and $>$ are **strict** inequalities: $x < 3$ leaves $3$ out.`,
      t`$\le$ and $\ge$ are **slack** inequalities: $x \le 3$ lets $3$ in.`,
      t`Add or subtract the same number on both sides and it stays true: $2 < 5$ gives $6 < 9$.`,
      t`Multiply both sides by a positive number and it stays true: $2 < 5$ gives $6 < 15$.`,
      t`Multiply both sides by a negative number and it turns round: $2 < 5$, but $-2 > -5$.`,
    ],
    formal: [
      {
        title: "Solutions and the solution set",
        points: [
          t`A **solution** of an inequality is a value of $x$ that makes it a true statement.`,
          t`In $x + 2 < 5$, $x = 1$ is a solution, since $3 < 5$ is true.`,
          t`$x = 3$ is not a solution, since $5 < 5$ is false.`,
          t`The **solution set** is the set of all solutions; finding it is **solving** the inequality.`,
          t`The question says where $x$ comes from: natural numbers $\mathbb{N}$, integers $\mathbb{Z}$ or real numbers $\mathbb{R}$.`,
        ],
      },
      {
        title: "Rule 1: add or subtract",
        points: [
          t`**Rule 1.** Add or subtract the same number on both sides: the sign does not change.`,
          t`From $x + 4 < 9$, subtract $4$ from both sides: $x < 5$.`,
          t`It works for $x$ terms too: from $5x < 2x + 6$, subtract $2x$ to get $3x < 6$.`,
          t`So a term that crosses to the other side changes its sign: $+4$ arrives as $-4$.`,
        ],
      },
      {
        title: "Rule 2: multiply or divide",
        points: [
          t`**Rule 2.** Multiply or divide both sides by the same **positive** number: the sign stays.`,
          t`From $3x < 6$, divide by $3$: $x < 2$.`,
          t`Multiply or divide both sides by a **negative** number: the sign is **reversed**.`,
          t`Reversed means $<$ becomes $>$ and $\le$ becomes $\ge$, and the other way round.`,
          t`From $-4x \ge 8$, divide by $-4$: $x \le -2$.`,
          t`Only the number you divide by matters: $4x > -12$ gives $x > -3$, sign kept.`,
        ],
      },
      {
        title: "Solving a simple inequality",
        points: [
          t`Solve $7x - 5 < 4x + 7$ for real $x$.`,
          t`Collect the $x$ terms on one side: subtract $4x$, so $3x - 5 < 7$.`,
          t`Collect the numbers on the other side: add $5$, so $3x < 12$.`,
          t`Divide by the coefficient of $x$, checking its sign: $3$ is positive, so $x < 4$.`,
          t`Check a value: $x = 0$ gives $-5 < 7$, which is true.`,
          t`Check the end: $x = 4$ gives $23 < 23$, which is false, so $4$ is left out.`,
        ],
      },
      {
        title: "The answer depends on x",
        points: [
          t`Take $3x < 13$: dividing by $3$ gives $x < \frac{13}{3}$, about $4.33$.`,
          t`Natural numbers start at $1$, so the solution set is $\{1, 2, 3, 4\}$.`,
          t`Integers include $0$ and the negatives: $\{\ldots, 2, 3, 4\}$.`,
          t`For real $x$ it is every number below $\frac{13}{3}$: the interval $(-\infty, \frac{13}{3})$.`,
          t`Don't round $\frac{13}{3}$ to $4$ and stop: $x = 4$ works, since $12 < 13$.`,
          t`For real $x$, a strict sign gives a round bracket and a slack one a square bracket: $x \le 4$ is $(-\infty, 4]$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $-12x > 30$ when $x$ is a natural number.`,
      steps: [
        t`Divide both sides by $-12$. It is negative, so reverse the sign: $x < \frac{30}{-12}$.`,
        t`So $x < -\frac{5}{2}$, that is, $x < -2.5$.`,
        t`Natural numbers are $1, 2, 3, \ldots$, all positive, so none is less than $-2.5$.`,
        t`Check one: $x = 1$ gives $-12 > 30$, which is false.`,
      ],
      answer: t`No natural number works: the solution set is the empty set $\emptyset$.`,
    },
    visualSpec: t`Drag a multiplier from positive to negative and watch the points $2$ and $5$ swap order on a number line.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Keeps the sign when multiplying or dividing both sides by a negative number.",
      remediation: t`Multiplying or dividing both sides by a negative number reverses the sign: $-x < 1$ gives $x > -1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Moves a number to the other side without changing its sign.",
      remediation: t`Moving a number across means subtracting it from both sides (Rule 1), so its sign changes: $x + 4 < 9$ gives $x < 9 - 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Treats a strict sign as slack, so keeps the end point that $<$ or $>$ leaves out.`,
      remediation: t`$<$ and $>$ are strict: test the end itself. In $x < 2$, $x = 2$ gives $2 < 2$, false, so $2$ is left out (a round bracket).`,
      fallback: { kind: "ext", topic: "interval notation (Sets and Relations)" },
    },
    {
      id: "C01-M4",
      mistake: t`Counts $0$ as a natural number.`,
      remediation: t`Natural numbers start at $1$: $\mathbb{N} = \{1, 2, 3, \ldots\}$. Zero is an integer but not a natural number.`,
      fallback: { kind: "ext", topic: "number systems N, W, Z, Q, R" },
    },
    {
      id: "C01-M5",
      mistake: "Rounds a fractional end to the nearest whole number before listing the solutions.",
      remediation: t`Keep the end as it is and test the whole numbers beside it: for $x < \frac{13}{3}$, $x = 4$ works, since $4 < 4.33$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Gives the real-number answer when $x$ must be a natural number or an integer.`,
      remediation: t`When $x$ must be a natural number or an integer, list only those values: $x < 2.5$ for integer $x$ is $\{\ldots, 0, 1, 2\}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 shows only when the coefficient of $x$, after collecting terms, is negative.`,
    t`C01-M2 needs a number beside the $x$ term on the left side.`,
    t`C01-M3 shows for natural or integer $x$ only when the end is a whole number; for real $x$ it always shows.`,
    t`C01-M4 shows only for natural $x$ when $0$ would satisfy the inequality.`,
    t`C01-M5 shows only when rounding moves the end towards the solutions: $x < \frac{25}{6}$ rounds to $x < 4$, but $x < \frac{20}{3}$ rounds to $x < 7$ and gives the key.`,
    t`C01-M6 applies only to natural or integer $x$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q1(i)" },
      stem: t`Solve $24x < 100$ when $x$ is a natural number.`,
      verify: { kind: "value", inputs: { a: "24", b: "0", c: "0", d: "100" }, params: { rel: "<", dom: "N" } },
      options: [
        { key: "A", text: t`$\left\{1, 2, 3, 4\right\}$`, correct: true, value: "{1, 2, 3, 4}" },
        { key: "B", text: t`$\left\{0, 1, 2, 3, 4\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{0, 1, 2, 3, 4}" },
        { key: "C", text: t`$\left\{1, 2, 3\right\}$`, correct: false, misconceptionId: "C01-M5", value: "{1, 2, 3}" },
        { key: "D", text: t`$\left(-\infty, \frac{25}{6}\right)$`, correct: false, misconceptionId: "C01-M6", value: "Interval.open(-oo, 25/6)" },
      ],
      solution: {
        steps: [
          t`Divide both sides by the positive number $24$, so the sign stays: $x < \frac{100}{24} = \frac{25}{6}$.`,
          t`$\frac{25}{6}$ is about $4.17$, so $x = 4$ works ($96 < 100$) and $x = 5$ does not.`,
          t`Natural numbers start at $1$, so the solution set is $\{1, 2, 3, 4\}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q6" },
      stem: t`Solve $3x - 7 > 5x - 1$ for real $x$.`,
      verify: { kind: "value", inputs: { a: "3", b: "-7", c: "5", d: "-1" }, params: { rel: ">", dom: "R" } },
      options: [
        { key: "A", text: t`$\left(-\infty, -3\right)$`, correct: true, value: "Interval.open(-oo, -3)" },
        { key: "B", text: t`$\left(-3, \infty\right)$`, correct: false, misconceptionId: "C01-M1", value: "Interval.open(-3, oo)" },
        { key: "C", text: t`$\left(-\infty, 4\right)$`, correct: false, misconceptionId: "C01-M2", value: "Interval.open(-oo, 4)" },
        { key: "D", text: t`$\left(-\infty, -3\right]$`, correct: false, misconceptionId: "C01-M3", value: "Interval(-oo, -3)" },
      ],
      solution: {
        steps: [
          t`Subtract $5x$ from both sides: $-2x - 7 > -1$.`,
          t`Add $7$ to both sides: $-2x > 6$.`,
          t`Divide by $-2$, a negative number, so reverse the sign: $x < -3$.`,
          t`The sign is strict, so $-3$ is left out: the solution set is $(-\infty, -3)$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q4(i)" },
      stem: t`Solve $3x + 8 > 2$ when $x$ is an integer.`,
      verify: { kind: "value", inputs: { a: "3", b: "8", c: "0", d: "2" }, params: { rel: ">", dom: "Z" } },
      options: [
        { key: "A", text: t`$\{-2, -1, 0, \ldots\}$`, correct: false, misconceptionId: "C01-M3", value: "Range(-2, oo, 1)" },
        { key: "B", text: t`$\left(-2, \infty\right)$`, correct: false, misconceptionId: "C01-M6", value: "Interval.open(-2, oo)" },
        { key: "C", text: t`$\{-1, 0, 1, \ldots\}$`, correct: true, value: "Range(-1, oo, 1)" },
        { key: "D", text: t`$\{4, 5, 6, \ldots\}$`, correct: false, misconceptionId: "C01-M2", value: "Range(4, oo, 1)" },
      ],
      solution: {
        steps: [
          t`Subtract $8$ from both sides: $3x > -6$.`,
          t`Divide by the positive number $3$, so the sign stays: $x > -2$.`,
          t`$x = -2$ fails, since $-6 + 8 = 2$ is not greater than $2$.`,
          t`The integer solutions are $\{-1, 0, 1, \ldots\}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q5" },
      stem: t`Solve $4x + 3 < 5x + 7$ for real $x$.`,
      verify: { kind: "value", inputs: { a: "4", b: "3", c: "5", d: "7" }, params: { rel: "<", dom: "R" } },
      options: [
        { key: "A", text: t`$\left(-4, \infty\right)$`, correct: true, value: "Interval.open(-4, oo)" },
        { key: "B", text: t`$\left(-\infty, -4\right)$`, correct: false, misconceptionId: "C01-M1", value: "Interval.open(-oo, -4)" },
        { key: "C", text: t`$\left(-10, \infty\right)$`, correct: false, misconceptionId: "C01-M2", value: "Interval.open(-10, oo)" },
        { key: "D", text: t`$\left[-4, \infty\right)$`, correct: false, misconceptionId: "C01-M3", value: "Interval(-4, oo)" },
      ],
      solution: {
        steps: [
          t`Subtract $5x$ from both sides: $-x + 3 < 7$.`,
          t`Subtract $3$ from both sides: $-x < 4$.`,
          t`Multiply by $-1$, a negative number, so reverse the sign: $x > -4$.`,
          t`The sign is strict, so the solution set is $(-4, \infty)$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q3(i)" },
      stem: t`Solve $5x - 3 < 7$ when $x$ is an integer.`,
      verify: { kind: "value", inputs: { a: "5", b: "-3", c: "0", d: "7" }, params: { rel: "<", dom: "Z" } },
      options: [
        { key: "A", text: t`$\{\ldots, -1, 0, 1\}$`, correct: true, value: "Range(-oo, 2, 1)" },
        { key: "B", text: t`$\{\ldots, -2, -1, 0\}$`, correct: false, misconceptionId: "C01-M2", value: "Range(-oo, 1, 1)" },
        { key: "C", text: t`$\{\ldots, 0, 1, 2\}$`, correct: false, misconceptionId: "C01-M3", value: "Range(-oo, 3, 1)" },
        { key: "D", text: t`$\left(-\infty, 2\right)$`, correct: false, misconceptionId: "C01-M6", value: "Interval.open(-oo, 2)" },
      ],
      solution: {
        steps: [
          t`Add $3$ to both sides: $5x < 10$.`,
          t`Divide by the positive number $5$: $x < 2$.`,
          t`$x = 2$ fails, since $10 - 3 = 7$ is not less than $7$.`,
          t`The integer solutions are $\{\ldots, -1, 0, 1\}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`Solve $-7x > -38$ when $x$ is a natural number.`,
      verify: { kind: "value", inputs: { a: "-7", b: "0", c: "0", d: "-38" }, params: { rel: ">", dom: "N" } },
      options: [
        { key: "A", text: t`$\left\{0, 1, 2, 3, 4, 5\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{0, 1, 2, 3, 4, 5}" },
        { key: "B", text: t`$\left\{1, 2, 3, 4\right\}$`, correct: false, misconceptionId: "C01-M5", value: "{1, 2, 3, 4}" },
        { key: "C", text: t`$\left\{1, 2, 3, 4, 5\right\}$`, correct: true, value: "{1, 2, 3, 4, 5}" },
        { key: "D", text: t`$\{6, 7, 8, \ldots\}$`, correct: false, misconceptionId: "C01-M1", value: "Range(6, oo, 1)" },
      ],
      solution: {
        steps: [
          t`Divide both sides by $-7$, a negative number, so reverse the sign: $x < \frac{38}{7}$.`,
          t`$\frac{38}{7}$ is about $5.43$, so $x = 5$ works ($-35 > -38$) and $x = 6$ does not ($-42 > -38$ is false).`,
          t`Natural numbers start at $1$, so the solution set is $\{1, 2, 3, 4, 5\}$.`,
        ],
      },
    },
  ],
};
