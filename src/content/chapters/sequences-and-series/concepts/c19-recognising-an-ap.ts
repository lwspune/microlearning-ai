import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c19: Concept = {
  id: "C19",
  status: "approved",
  hook: {
    prompt: t`Meena lists $7, 11, 15, 20, \ldots$ and says: the first jump is $4$, so this is an A.P. with $d = 4$. **Is she right?**`,
    reveal: t`No. The jumps are $11 - 7 = 4$, $15 - 11 = 4$, but $20 - 15 = 5$. One jump is different, so the list is not an A.P. Check every difference, not just the first.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **sequence** is a list of numbers in order, and $t_n$ is its $n$th term.`,
      t`In $2, 9, 16, 23, \ldots$, each term is $7$ more than the one before it.`,
      t`A list that adds the same number every time is an **arithmetic progression**, or **A.P.**`,
      t`That fixed number is the **common difference**, written $d$: here $d = 7$.`,
      t`The **first term** of the A.P. is written $a$: here $a = 2$.`,
      t`$d$ can be negative, so the terms fall, or $0$, so the terms stay the same.`,
    ],
    formal: [
      {
        title: "Finding d",
        points: [
          t`The common difference is a term minus the one just before it: $d = t_{n+1} - t_n$.`,
          t`Always take the later term minus the earlier one: $d = t_2 - t_1$.`,
          t`For $20, 17, 14, \ldots$: $d = 17 - 20 = -3$, so the terms fall.`,
          t`Put a negative term in brackets: $-1 - (-5)$ $= -1 + 5 = 4$.`,
          t`Subtract, never divide: $d$ is what is **added**, not what you multiply by.`,
        ],
      },
      {
        title: "Check every difference",
        points: [
          t`A list is an A.P. only if **every** difference $t_{n+1} - t_n$ is the same.`,
          t`So find $t_2 - t_1$, $t_3 - t_2$, $t_4 - t_3$, and compare them all.`,
          t`$1, 1, 2, 2, 3, 3, \ldots$ has differences $0, 1, 0, 1, 0$: not an A.P.`,
          t`$2, 4, 8, 16, \ldots$ doubles each time; its differences $2, 4, 8$ differ: not an A.P.`,
          t`$9, 9, 9, \ldots$ has every difference $0$: it is an A.P. with $d = 0$.`,
          t`Surds work the same way: $3, 3 + \sqrt{2}, 3 + 2\sqrt{2}, \ldots$ has $d = \sqrt{2}$.`,
        ],
      },
      {
        title: "Terms from a and d",
        points: [
          t`The first term is $a$ itself: $t_1 = a$, with no $d$ added yet.`,
          t`Each next term adds $d$: $t_2 = a + d$, $t_3 = a + 2d$.`,
          t`So the A.P. is $a, a + d, a + 2d, a + 3d, \ldots$`,
          t`For $a = 4$ and $d = -3$: $4, 1, -2, -5, \ldots$`,
          t`Adding a negative $d$ makes each term smaller than the one before.`,
        ],
      },
    ],
    worked: {
      prompt: t`Complete the activity for $9, 4, -1, -6, \ldots$: $t_1 = \square$, $t_2 = \square$, $t_3 = \square$, $t_4 = \square$; $t_2 - t_1 = \square$, $t_3 - t_2 = \square$, $t_4 - t_3 = \square$; so $a = \square$, $d = \square$. Then write the next two terms.`,
      steps: [
        t`Read the terms in order: $t_1 = 9$, $t_2 = 4$, $t_3 = -1$, $t_4 = -6$.`,
        t`$t_2 - t_1 = 4 - 9 = -5$ and $t_3 - t_2 = -1 - 4 = -5$.`,
        t`$t_4 - t_3 = -6 - (-1)$ $= -6 + 1 = -5$.`,
        t`Every difference is $-5$, so it is an A.P. with $a = 9$ and $d = -5$.`,
        t`Next two terms: $t_5 = -6 + (-5) = -11$ and $t_6 = -11 + (-5) = -16$.`,
      ],
      answer: t`$t_1 = 9$, $t_2 = 4$, $t_3 = -1$, $t_4 = -6$; every difference is $-5$; $a = 9$, $d = -5$; the next two terms are $-11$ and $-16$.`,
    },
    visualSpec: t`Type a list of numbers and watch the jump from each term to the next appear above it; the list lights up as an A.P. only when every jump is the same.`,
  },
  misconceptions: [
    {
      id: "C19-M1",
      mistake: t`Subtracts the wrong way round: takes $d = t_n - t_{n+1}$, and steps from each term by $-d$`,
      remediation: t`The common difference is a later term minus the one before it: $d = t_2 - t_1$. To get the next term, add $d$, keeping its sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C19-M2",
      mistake: t`Divides one term by the one before it, taking $d$ to be the number each term is multiplied by`,
      remediation: t`An A.P. **adds** the same number each time, so $d$ comes from subtracting: $d = t_2 - t_1$. A list multiplied by the same number each time is not an A.P.`,
      fallback: { kind: "none" },
    },
    {
      id: "C19-M3",
      mistake: "Checks only the first difference and takes every later difference to be the same",
      remediation: t`Find every difference, $t_2 - t_1$, $t_3 - t_2$, $t_4 - t_3$. The list is an A.P. only if all of them are equal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C19-M4",
      mistake: t`Starts the list one step late, writing $t_1 = a + d$`,
      remediation: t`The first term is $a$ itself, $t_1 = a$. The A.P. is $a, a + d, a + 2d, \ldots$: $d$ is first added to get $t_2$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C19-M5",
      mistake: t`Subtracts a negative term as if it were positive: works out $-6 - (-10)$ as $-6 - 10$`,
      remediation: t`Put a negative term in brackets: subtracting $-10$ adds $10$, so $-6 - (-10)$ $= -6 + 10 = 4$.`,
      fallback: { kind: "ext", topic: "subtracting negative numbers" },
    },
    {
      id: "C19-M6",
      mistake: "Thinks a list whose terms never change is not an A.P.",
      remediation: t`If every difference is $0$, the same number, $0$, is added each time. The list is an A.P. with $d = 0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C19-M1 gives the key when asked for the next term of a listed A.P. (its reversed $d$ and reversed step cancel); detect it by asking for $d$, the differences, or terms from a given $a$ and $d$.`,
    "C19-M3 gives the key on any list that is an A.P.; only a list that is not an A.P. (Q2) detects it.",
    "C19-M5 shows only when a negative term is subtracted; C19-M6 only on a constant list.",
  ],
  items: [
    {
      id: "C19-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2019/Q2(A)(i)" },
      stem: t`Using its third and fourth terms, the common difference $d$ of the A.P. $2, -2, -6, -10, \ldots$ is:`,
      verify: { kind: "value", inputs: { terms: "(2, -2, -6, -10)", i: "3" }, params: { ask: "pair" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C19-M1", value: "4" },
        { key: "B", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C19-M2", value: "5/3" },
        { key: "C", text: t`$-16$`, correct: false, misconceptionId: "C19-M5", value: "-16" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`The third term is $t_3 = -6$ and the fourth is $t_4 = -10$.`,
          t`$d = t_4 - t_3 = -10 - (-6)$ $= -10 + 6$.`,
          t`So $d = -4$; the terms fall by $4$ each time.`,
        ],
      },
    },
    {
      id: "C19-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q1(i)" },
      stem: t`Is $3, 6, 12, 24, \ldots$ an A.P.? To decide, find $t_2 - t_1$, $t_3 - t_2$ and $t_4 - t_3$. In that order, they are:`,
      verify: { kind: "value", inputs: { terms: "(3, 6, 12, 24)" }, params: { ask: "diffs" } },
      options: [
        { key: "A", text: t`$3, 6, 12$`, correct: true, value: "(3, 6, 12)" },
        { key: "B", text: t`$-3, -6, -12$`, correct: false, misconceptionId: "C19-M1", value: "(-3, -6, -12)" },
        { key: "C", text: t`$2, 2, 2$`, correct: false, misconceptionId: "C19-M2", value: "(2, 2, 2)" },
        { key: "D", text: t`$3, 3, 3$`, correct: false, misconceptionId: "C19-M3", value: "(3, 3, 3)" },
      ],
      solution: {
        steps: [
          t`$t_2 - t_1 = 6 - 3 = 3$ and $t_3 - t_2 = 12 - 6 = 6$.`,
          t`$t_4 - t_3 = 24 - 12 = 12$.`,
          t`The differences are $3, 6, 12$. They are not equal, so $3, 6, 12, 24, \ldots$ is not an A.P.`,
        ],
      },
    },
    {
      id: "C19-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/PS3 Q.1(1)" },
      stem: t`Choose the correct alternative. For the sequence $-10, -6, -2, 2, \ldots$:`,
      verify: { kind: "value", inputs: { terms: "(-10, -6, -2, 2)" }, params: { ask: "isap" } },
      options: [
        { key: "A", text: t`It is an A.P. with $d = -16$`, correct: false, misconceptionId: "C19-M5", value: "-16" },
        { key: "B", text: t`It is not an A.P.`, correct: false, misconceptionId: "C19-M2", value: "not_ap" },
        { key: "C", text: t`It is an A.P. with $d = 4$`, correct: true, value: "4" },
        { key: "D", text: t`It is an A.P. with $d = -4$`, correct: false, misconceptionId: "C19-M1", value: "-4" },
      ],
      solution: {
        steps: [
          t`$t_2 - t_1 = -6 - (-10)$ $= -6 + 10 = 4$.`,
          t`$t_3 - t_2 = -2 - (-6) = 4$ and $t_4 - t_3 = 2 - (-2) = 4$.`,
          t`Every difference is $4$, so it is an A.P. with $d = 4$.`,
        ],
      },
    },
    {
      id: "C19-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.1 Q.1(6)" },
      stem: t`Is $-\frac{1}{5}, -\frac{1}{5}, -\frac{1}{5}, -\frac{1}{5}, \ldots$ an A.P.? If it is, find its common difference.`,
      verify: { kind: "value", inputs: { terms: "(-1/5, -1/5, -1/5, -1/5)" }, params: { ask: "isap" } },
      options: [
        { key: "A", text: t`It is not an A.P.`, correct: false, misconceptionId: "C19-M6", value: "not_ap" },
        { key: "B", text: t`It is an A.P. with $d = 1$`, correct: false, misconceptionId: "C19-M2", value: "1" },
        { key: "C", text: t`It is an A.P. with $d = -\frac{2}{5}$`, correct: false, misconceptionId: "C19-M5", value: "-2/5" },
        { key: "D", text: t`It is an A.P. with $d = 0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`$t_2 - t_1 = -\frac{1}{5} - (-\frac{1}{5})$ $= -\frac{1}{5} + \frac{1}{5} = 0$.`,
          t`Every other difference is $0$ in the same way.`,
          t`The same number, $0$, is added each time, so it is an A.P. with $d = 0$.`,
        ],
      },
    },
    {
      id: "C19-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/PS3 Q.1(2)" },
      stem: t`Choose the correct alternative. The first four terms of an A.P. whose first term is $-2$ and common difference is $-2$ are:`,
      verify: { kind: "value", inputs: { a: "-2", d: "-2", k: "4" }, params: { ask: "terms" } },
      options: [
        { key: "A", text: t`$-4, -6, -8, -10$`, correct: false, misconceptionId: "C19-M4", value: "(-4, -6, -8, -10)" },
        { key: "B", text: t`$-2, -4, -6, -8$`, correct: true, value: "(-2, -4, -6, -8)" },
        { key: "C", text: t`$-2, 0, 2, 4$`, correct: false, misconceptionId: "C19-M1", value: "(-2, 0, 2, 4)" },
        { key: "D", text: t`$-2, 4, -8, 16$`, correct: false, misconceptionId: "C19-M2", value: "(-2, 4, -8, 16)" },
      ],
      solution: {
        steps: [
          t`$t_1 = a = -2$.`,
          t`Add $d = -2$ each time: $t_2 = -2 + (-2) = -4$, $t_3 = -6$.`,
          t`$t_4 = -6 + (-2) = -8$. The terms are $-2, -4, -6, -8$.`,
        ],
      },
    },
    {
      id: "C19-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.1 Q.2(3)" },
      stem: t`The first term of an A.P. is $a = -7$ and its common difference is $d = \frac{1}{2}$. Its first four terms are:`,
      verify: { kind: "value", inputs: { a: "-7", d: "1/2", k: "4" }, params: { ask: "terms" } },
      options: [
        { key: "A", text: t`$-7, -\frac{15}{2}, -8, -\frac{17}{2}$`, correct: false, misconceptionId: "C19-M1", value: "(-7, -15/2, -8, -17/2)" },
        { key: "B", text: t`$-7, -\frac{7}{2}, -\frac{7}{4}, -\frac{7}{8}$`, correct: false, misconceptionId: "C19-M2", value: "(-7, -7/2, -7/4, -7/8)" },
        { key: "C", text: t`$-7, -\frac{13}{2}, -6, -\frac{11}{2}$`, correct: true, value: "(-7, -13/2, -6, -11/2)" },
        { key: "D", text: t`$-\frac{13}{2}, -6, -\frac{11}{2}, -5$`, correct: false, misconceptionId: "C19-M4", value: "(-13/2, -6, -11/2, -5)" },
      ],
      solution: {
        steps: [
          t`$t_1 = a = -7$.`,
          t`$t_2 = -7 + \frac{1}{2} = -\frac{13}{2}$ and $t_3 = -\frac{13}{2} + \frac{1}{2} = -6$.`,
          t`$t_4 = -6 + \frac{1}{2} = -\frac{11}{2}$.`,
          t`The first four terms are $-7, -\frac{13}{2}, -6, -\frac{11}{2}$.`,
        ],
      },
    },
  ],
};
