import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Which numbers $y$ have $|y| = 4$? **So how many answers does $|x - 10| = 4$ have?**`,
    reveal: t`Both $4$ and $-4$ have absolute value $4$, so $x - 10 = 4$ or $x - 10 = -4$. That gives two answers: $x = 14$ or $x = 6$.`,
  },
  explanation: {
    intuition: [
      t`An **absolute value equation** has the unknown inside the bars, like $|x - 5| = 2$.`,
      t`Two numbers have absolute value $2$: they are $2$ and $-2$.`,
      t`So the whole inside, $x - 5$, is either $2$ or $-2$.`,
      t`That splits one equation into two simple equations.`,
      t`$x - 5 = 2$ gives $x = 7$, and $x - 5 = -2$ gives $x = 3$.`,
      t`Check: $|7 - 5| = 2$ and $|3 - 5| = 2$, so both answers work.`,
    ],
    formal: [
      {
        title: "Two cases",
        points: [
          t`For a positive number $c$, $|ax + b| = c$ means two things can happen.`,
          t`Case 1: the inside is $c$, so $ax + b = c$.`,
          t`Case 2: the inside is $-c$, so $ax + b = -c$.`,
          t`The $-$ sign goes on $c$, the right side, never on $x$ alone.`,
          t`Solve each case as a linear equation.`,
          t`The two answers together are the solution.`,
        ],
      },
      {
        title: "Solving each case",
        points: [
          t`Take $|11 - 2x| = 3$.`,
          t`Case 1: $11 - 2x = 3$, so $-2x = 3 - 11 = -8$, and $x = 4$.`,
          t`Case 2: $11 - 2x = -3$, so $-2x = -3 - 11 = -14$, and $x = 7$.`,
          t`When $11$ moves to the other side, it becomes $-11$.`,
          t`Divide by $-2$ with its sign: $-8 \div (-2) = 4$.`,
          t`So $x = 4$ or $x = 7$.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`Don't stop after case 1: there are two answers.`,
          t`The two answers are not just a number and its negative: $|x - 5| = 2$ gives $7$ and $3$, not $\pm 7$.`,
          t`The bars don't make each term positive: $|x - 5|$ is not $x + 5$.`,
          t`An answer may be negative: only $|ax + b|$ must be $c$, not $x$ itself.`,
          t`Check each answer by putting it back inside the bars.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve: $|4x - 2| = 10$.`,
      steps: [
        t`$|4x - 2| = 10$ means $4x - 2 = 10$ or $4x - 2 = -10$.`,
        t`Case 1: $4x = 10 + 2 = 12$, so $x = 3$.`,
        t`Case 2: $4x = -10 + 2 = -8$, so $x = -2$.`,
        t`Check: $|4 \times 3 - 2| = |10| = 10$ and $|4 \times (-2) - 2| = |-10| = 10$.`,
      ],
      answer: t`$x = 3$ or $x = -2$`,
    },
    visualSpec: t`A number line with the inside value as a slider: it lights up at the two points c and −c, and each lights the matching value of x below.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Solves only ax + b = c and forgets the case ax + b = −c",
      remediation: t`Both $c$ and $-c$ have absolute value $c$. So also solve $ax + b = -c$: an absolute value equation like this has **two** answers.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M2",
      mistake: "Takes the two answers as a number and its negative, so |x − 5| = 2 gives x = ±7",
      remediation: t`The $\pm$ goes on the whole inside, not on $x$: $x - 5 = 2$ or $x - 5 = -2$, so $x = 7$ or $x = 3$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M3",
      mistake: "Thinks the bars make every term inside positive, so |x − 5| = x + 5",
      remediation: t`Work out the inside first: the bars act on the whole value of $x - 5$, not on each term. Write the two cases $x - 5 = c$ and $x - 5 = -c$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M4",
      mistake: "Moves the number across without changing its sign, so 3x − 5 = 1 becomes 3x = 1 − 5",
      remediation: t`A term that moves to the other side changes its sign: $3x - 5 = 1$ gives $3x = 1 + 5$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable (Std VIII)" },
    },
    {
      id: "C13-M5",
      mistake: "Rejects a negative answer, thinking an absolute value equation can't have one",
      remediation: t`Only the absolute value must be positive, not $x$. In $|x + 1| = 1$, $x = -2$ works: $|-2 + 1| = |-1| = 1$.`,
      fallback: { kind: "concept", id: "C12" },
    },
  ],
  engineNotes: [
    "C13-M2 does not apply when case 1 gives x = 0; C13-M3 only where a term inside the bars is negative; C13-M4 only where the inside has a number term.",
    "C13-M5 applies only where exactly one answer is negative.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q2(i)" },
      stem: t`Solve: $|3x - 5| = 1$`,
      verify: { kind: "value", inputs: { a: "3", b: "-5", c: "1" } },
      options: [
        { key: "A", text: t`$x = 2$ or $x = \frac{4}{3}$`, correct: true, value: "{4/3, 2}" },
        { key: "B", text: t`$x = 2$ only`, correct: false, misconceptionId: "C13-M1", value: "{2}" },
        { key: "C", text: t`$x = 2$ or $x = -2$`, correct: false, misconceptionId: "C13-M2", value: "{-2, 2}" },
        { key: "D", text: t`$x = -\frac{4}{3}$ or $x = -2$`, correct: false, misconceptionId: "C13-M4", value: "{-2, -4/3}" },
      ],
      solution: {
        steps: [
          t`$|3x - 5| = 1$ means $3x - 5 = 1$ or $3x - 5 = -1$.`,
          t`Case 1: $3x = 1 + 5 = 6$, so $x = 2$.`,
          t`Case 2: $3x = -1 + 5 = 4$, so $x = \frac{4}{3}$.`,
          t`So $x = 2$ or $x = \frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q2(ii)" },
      stem: t`Solve: $|7 - 2x| = 5$`,
      verify: { kind: "value", inputs: { a: "-2", b: "7", c: "5" } },
      options: [
        { key: "A", text: t`$x = 1$ or $x = 6$`, correct: true, value: "{1, 6}" },
        { key: "B", text: t`$x = 1$ only`, correct: false, misconceptionId: "C13-M1", value: "{1}" },
        { key: "C", text: t`$x = -1$ only`, correct: false, misconceptionId: "C13-M3", value: "{-1}" },
        { key: "D", text: t`$x = -6$ or $x = -1$`, correct: false, misconceptionId: "C13-M4", value: "{-6, -1}" },
      ],
      solution: {
        steps: [
          t`$|7 - 2x| = 5$ means $7 - 2x = 5$ or $7 - 2x = -5$.`,
          t`Case 1: $-2x = 5 - 7 = -2$, so $x = 1$.`,
          t`Case 2: $-2x = -5 - 7 = -12$, so $x = 6$.`,
          t`So $x = 1$ or $x = 6$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q2(iii)" },
      stem: t`Solve: $\left|\dfrac{8 - x}{2}\right| = 5$`,
      verify: { kind: "value", inputs: { a: "-1/2", b: "4", c: "5" } },
      options: [
        { key: "A", text: t`$x = 18$ only`, correct: false, misconceptionId: "C13-M5", value: "{18}" },
        { key: "B", text: t`$x = -2$ or $x = 18$`, correct: true, value: "{-2, 18}" },
        { key: "C", text: t`$x = -2$ or $x = 2$`, correct: false, misconceptionId: "C13-M2", value: "{-2, 2}" },
        { key: "D", text: t`$x = -18$ or $x = 2$`, correct: false, misconceptionId: "C13-M4", value: "{-18, 2}" },
      ],
      solution: {
        steps: [
          t`The equation means $\dfrac{8 - x}{2} = 5$ or $\dfrac{8 - x}{2} = -5$.`,
          t`Case 1: $8 - x = 10$, so $x = -2$.`,
          t`Case 2: $8 - x = -10$, so $x = 18$.`,
          t`So $x = -2$ or $x = 18$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q2(iv)" },
      stem: t`Solve: $\left|5 + \dfrac{x}{4}\right| = 3$`,
      verify: { kind: "value", inputs: { a: "1/4", b: "5", c: "3" } },
      options: [
        { key: "A", text: t`$x = -8$ only`, correct: false, misconceptionId: "C13-M1", value: "{-8}" },
        { key: "B", text: t`$x = -8$ or $x = 8$`, correct: false, misconceptionId: "C13-M2", value: "{-8, 8}" },
        { key: "C", text: t`$x = 32$ or $x = 8$`, correct: false, misconceptionId: "C13-M4", value: "{8, 32}" },
        { key: "D", text: t`$x = -8$ or $x = -32$`, correct: true, value: "{-32, -8}" },
      ],
      solution: {
        steps: [
          t`The equation means $5 + \dfrac{x}{4} = 3$ or $5 + \dfrac{x}{4} = -3$.`,
          t`Case 1: $\dfrac{x}{4} = 3 - 5 = -2$, so $x = -8$.`,
          t`Case 2: $\dfrac{x}{4} = -3 - 5 = -8$, so $x = -32$.`,
          t`So $x = -8$ or $x = -32$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/2.5 SolvedEx.3" },
      stem: t`Solve: $|x + 4| = 6$`,
      verify: { kind: "value", inputs: { a: "1", b: "4", c: "6" } },
      options: [
        { key: "A", text: t`$x = 2$ or $x = -10$`, correct: true, value: "{-10, 2}" },
        { key: "B", text: t`$x = 2$ or $x = -2$`, correct: false, misconceptionId: "C13-M2", value: "{-2, 2}" },
        { key: "C", text: t`$x = 10$ or $x = -2$`, correct: false, misconceptionId: "C13-M4", value: "{-2, 10}" },
        { key: "D", text: t`$x = 2$ only`, correct: false, misconceptionId: "C13-M5", value: "{2}" },
      ],
      solution: {
        steps: [
          t`$|x + 4| = 6$ means $x + 4 = 6$ or $x + 4 = -6$.`,
          t`Case 1: $x = 6 - 4 = 2$.`,
          t`Case 2: $x = -6 - 4 = -10$.`,
          t`So $x = 2$ or $x = -10$.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.5 Q2(i)" },
      stem: t`Solve: $|2x - 9| = 3$`,
      verify: { kind: "value", inputs: { a: "2", b: "-9", c: "3" } },
      options: [
        { key: "A", text: t`$x = -3$ only`, correct: false, misconceptionId: "C13-M3", value: "{-3}" },
        { key: "B", text: t`$x = 6$ only`, correct: false, misconceptionId: "C13-M1", value: "{6}" },
        { key: "C", text: t`$x = 6$ or $x = -6$`, correct: false, misconceptionId: "C13-M2", value: "{-6, 6}" },
        { key: "D", text: t`$x = 6$ or $x = 3$`, correct: true, value: "{3, 6}" },
      ],
      solution: {
        steps: [
          t`$|2x - 9| = 3$ means $2x - 9 = 3$ or $2x - 9 = -3$.`,
          t`Case 1: $2x = 3 + 9 = 12$, so $x = 6$.`,
          t`Case 2: $2x = -3 + 9 = 6$, so $x = 3$.`,
          t`So $x = 6$ or $x = 3$.`,
        ],
      },
    },
  ],
};
