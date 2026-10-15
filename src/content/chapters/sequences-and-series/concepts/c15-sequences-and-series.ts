import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`Riya saves Rs $5$ on day $1$, Rs $10$ on day $2$, Rs $15$ on day $3$, and so on. **On day $4$ she says she has Rs $20$. Is she right?**`,
    reveal: t`No. Rs $20$ is what she saves **on** day $4$: the $4$th number of the list, $t_4$. What she **has** is all four days added: $5 + 10 + 15 + 20 = 50$, which is $S_4$. The list is a sequence; adding its numbers makes a series.`,
  },
  explanation: {
    intuition: [
      t`A **sequence** is a list of numbers written in a definite order: a first, a second, a third, and so on.`,
      t`Each number in the list is a **term**, and its **position** is its place in the list: 1st, 2nd, 3rd, ….`,
      t`We name the terms $t_1, t_2, t_3, \ldots$: the small number is the position, not the value.`,
      t`$t_n$, the term in position $n$, is the **$n$th term**, also called the **general term**.`,
      t`A **series** is what you get when you add the terms: $t_1 + t_2 + t_3 + \cdots$.`,
      t`$S_n$ is the sum of the first $n$ terms: here $S_3 = 5 + 10 + 15 = 30$, while $t_3$ is just $15$.`,
    ],
    formal: [
      {
        title: "Finite and infinite sequences",
        points: [
          t`A **finite** sequence stops: it has a last term, like $2, 4, 6, 8, 10$.`,
          t`An **infinite** sequence never stops: the dots $\ldots$ at the end mean the terms go on for ever.`,
          t`For example, $1, 4, 9, 16, \ldots$ is infinite: every square number is a term.`,
          t`Order matters: $1, 2, 3$ and $3, 2, 1$ are different sequences.`,
          t`A number may appear more than once: $1, -1, 1, -1, \ldots$ is a sequence too.`,
        ],
      },
      {
        title: "A formula for the nth term",
        points: [
          t`A sequence is often given by a **formula** for $t_n$: a rule that turns the position $n$ into the term.`,
          t`To write a term, put its position in place of $n$: for $t_n = n^2 + n$, $t_3 = 9 + 3 = 12$.`,
          t`The first term is $t_1$, so put $n = 1$, never $n = 0$: $t_1 = 1 + 1 = 2$.`,
          t`Here $n^2$ means $n \times n$, not $2n$: $t_5 = 25 + 5 = 30$.`,
          t`So $t_n = n^2 + n$ gives $2, 6, 12, 20, 30, \ldots$.`,
          t`The gaps $4, 6, 8, 10$ are not equal: take every term from the formula, not by repeating the first gap.`,
        ],
      },
      {
        title: "Which term is a given number?",
        points: [
          t`To find which term a number is, set $t_n$ equal to it and solve for $n$.`,
          t`The answer $n$ is a position, so it must be a **counting number**: $1, 2, 3, \ldots$.`,
          t`For $t_n = n^2 + n$, which term is $56$? Solve $n^2 + n = 56$.`,
          t`Try counting numbers: $7^2 + 7 = 49 + 7 = 56$, so $n = 7$.`,
          t`So $56$ is the $7$th term, $t_7$; putting $56$ in for $n$ would answer a different question.`,
          t`If no counting number $n$ works, the number is not a term of the sequence.`,
        ],
      },
      {
        title: "Terms from earlier terms",
        points: [
          t`A **recursive** rule gives each term from the one before it, starting from a given first term.`,
          t`For example, $t_1 = 2$ and $t_{n+1} = t_n + 3$; here $t_{n+1}$ is the term just after $t_n$.`,
          t`Put $n = 1$: $t_2 = t_1 + 3 = 5$. Then $n = 2$: $t_3 = t_2 + 3 = 8$.`,
          t`The rule works on the previous **term** $t_n$, not on the position $n$.`,
          t`So this rule gives the sequence $2, 5, 8, 11, \ldots$.`,
        ],
      },
      {
        title: "Adding up the terms",
        points: [
          t`To write the series of a sequence, put $+$ signs between its terms: $2, 5, 8, 11$ gives $2 + 5 + 8 + 11$.`,
          t`In $S_n = t_1 + t_2 + \cdots + t_n$, the small $n$ counts how many terms are added.`,
          t`For $2, 5, 8, 11, \ldots$: $S_1 = 2$, $S_2 = 2 + 5 = 7$ and $S_3 = 2 + 5 + 8 = 15$.`,
          t`Each sum adds one more term to the last: $S_4 = S_3 + t_4 = 15 + 11 = 26$.`,
          t`$S_n$ is a total and $t_n$ is one term: $S_3 = 15$, but $t_3 = 8$.`,
          t`$S_n$ is not $n \times t_n$: that would need every term to equal the last one.`,
        ],
      },
    ],
    worked: {
      prompt: t`The $n$th term of a sequence is $t_n = n^2 - 2n$. Write its first three terms, find which term is $48$, and find $S_3$.`,
      steps: [
        t`Put $n = 1, 2, 3$: $t_1 = 1 - 2 = -1$, $t_2 = 4 - 4 = 0$ and $t_3 = 9 - 6 = 3$.`,
        t`For $48$, solve $n^2 - 2n = 48$: $n^2 - 2n - 48 = 0$, so $(n - 8)(n + 6) = 0$.`,
        t`$n$ is a position, a counting number, so $n = 8$, not $-6$. Check: $t_8 = 64 - 16 = 48$.`,
        t`$S_3$ adds the first three terms: $S_3 = -1 + 0 + 3 = 2$.`,
      ],
      answer: t`The first three terms are $-1, 0, 3$; $48$ is the $8$th term, $t_8$; and $S_3 = 2$.`,
    },
    figure: {
      alt: "Four dots in a row, the start of a sequence, with the values 5, 10, 15 and 20 above them, then dots for more terms. Under the dots their positions, 1st to 4th, and their names t₁ to t₄; a last dot far along is the nth term, tₙ. Plus signs then join the values, and a bar over the first three is labelled S₃ = 30.",
      axes: "none",
      view: { x: [-0.9, 10.9], y: [-2.1, 2.5] },
      elements: [
        { kind: "segment", from: [-0.8, 0], to: [10.8, 0], tone: "muted", step: 1 },
        { kind: "point", at: [0, 0], label: "5", labelAt: "n", step: 1 },
        { kind: "point", at: [2, 0], label: "10", labelAt: "n", step: 1 },
        { kind: "point", at: [4, 0], label: "15", labelAt: "n", step: 1 },
        { kind: "point", at: [6, 0], label: "20", labelAt: "n", step: 1 },
        { kind: "label", at: [8, 0], label: "…", labelAt: "n", tone: "muted", step: 1 },
        { kind: "label", at: [0, 0], label: "1st", labelAt: "s", tone: "muted", step: 2 },
        { kind: "label", at: [2, 0], label: "2nd", labelAt: "s", tone: "muted", step: 2 },
        { kind: "label", at: [4, 0], label: "3rd", labelAt: "s", tone: "muted", step: 2 },
        { kind: "label", at: [6, 0], label: "4th", labelAt: "s", tone: "muted", step: 2 },
        { kind: "label", at: [0, -0.85], label: "t₁", labelAt: "s", step: 3 },
        { kind: "label", at: [2, -0.85], label: "t₂", labelAt: "s", step: 3 },
        { kind: "label", at: [4, -0.85], label: "t₃", labelAt: "s", step: 3 },
        { kind: "label", at: [6, -0.85], label: "t₄", labelAt: "s", step: 3 },
        { kind: "point", at: [10, 0], tone: "good", step: 4 },
        { kind: "label", at: [10, 0], label: "nth", labelAt: "s", tone: "muted", step: 4 },
        { kind: "label", at: [10, -0.85], label: "tₙ", labelAt: "s", tone: "good", step: 4 },
        { kind: "label", at: [1, 0], label: "+", labelAt: "n", tone: "muted", step: 5 },
        { kind: "label", at: [3, 0], label: "+", labelAt: "n", tone: "muted", step: 5 },
        { kind: "label", at: [5, 0], label: "+", labelAt: "n", tone: "muted", step: 5 },
        { kind: "segment", from: [-0.4, 1.25], to: [4.4, 1.25], tone: "good", label: "S₃ = 5 + 10 + 15 = 30", labelAt: "n", step: 6 },
      ],
    },
    visualSpec: t`Drag $n$ along a row of dots: a box above shows $t_n$ from the formula, and a bar over the first $n$ dots totals $S_n$, so the term and the sum pull apart as $n$ grows.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: t`Takes $S_n$ to be the $n$th term $t_n$: gives the last term when the sum is asked`,
      remediation: t`$S_n$ is a total: the first $n$ terms added, $t_1 + t_2 + \cdots + t_n$. The $n$th term $t_n$ is only the last of them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M2",
      mistake: t`Mixes up a term's position $n$ with its value $t_n$: puts the given number in for $n$, or uses $n$ where a rule says $t_n$`,
      remediation: t`$n$ is a place in the list and $t_n$ is the number in that place. To find which term a number is, solve $t_n =$ that number for $n$; a rule like $t_{n+1} = t_n + 3$ works on the previous term.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M3",
      mistake: t`Starts counting at $n = 0$: takes the first term at $n = 0$, so the $k$th term at $n = k - 1$`,
      remediation: t`The first term is $t_1$: put $n = 1$. The $k$th term is $t_k$, found by putting $n = k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M4",
      mistake: t`Assumes every sequence goes up by a fixed step: finds $t_1$ and $t_2$, then keeps adding $t_2 - t_1$`,
      remediation: t`The gaps of a sequence need not be equal: $t_n = n^2 + n$ gives $2, 6, 12, 20$. Take every term from the formula or the rule.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M5",
      mistake: t`Takes $S_n$ as $n$ times the $n$th term, as if every term equalled $t_n$`,
      remediation: t`$S_n = n \times t_n$ only when all the terms are equal. Add the first $n$ terms one by one: $S_3 = t_1 + t_2 + t_3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M6",
      mistake: t`Reads $n^2$ as $2n$: doubles the position instead of squaring it`,
      remediation: t`$n^2$ means $n \times n$: $5^2 = 25$, not $10$. Square the position first, then do the rest of the formula.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C15-M4 gives the key when $t_n$ is linear or a rule adds a fixed number (the steps really are equal), so diagnose it with $t_n$ of degree $2$ or more, asking for the $3$rd term or later.`,
    t`C15-M3 shows only when the stem names terms in words (the fifth term, the first four terms) or asks which term; with $t_5$ or $S_4$ alone a student counting from $0$ still gets the key.`,
    t`C15-M6 needs an $n^2$ in $t_n$; C15-M2 shows only on which-term questions and on rules on earlier terms.`,
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q1(B)(ii)" },
      stem: t`The $n$th term of a sequence is $t_n = n^2 - 3$. Its fifth term is:`,
      verify: { kind: "value", inputs: { f: "n**2 - 3", n: "n", k: "5" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C15-M4", value: "10" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C15-M6", value: "7" },
        { key: "C", text: t`$22$`, correct: true, value: "22" },
        { key: "D", text: t`$13$`, correct: false, misconceptionId: "C15-M3", value: "13" },
      ],
      solution: {
        steps: [
          t`The fifth term is $t_5$: put $n = 5$.`,
          t`$t_5 = 5^2 - 3 = 25 - 3 = 22$.`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q2(B)(iii)" },
      stem: t`In the sequence $t_n = n^2 + 2$, the number $66$ is the term $t_n$ for $n =$`,
      verify: { kind: "value", inputs: { f: "n**2 + 2", n: "n", T: "66" }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`$4358$`, correct: false, misconceptionId: "C15-M2", value: "4358" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C15-M3", value: "9" },
        { key: "C", text: t`$32$`, correct: false, misconceptionId: "C15-M6", value: "32" },
        { key: "D", text: t`$8$`, correct: true, value: "8" },
      ],
      solution: {
        steps: [
          t`Set $t_n = 66$: $n^2 + 2 = 66$, so $n^2 = 64$.`,
          t`$n$ is a position, a counting number, so $n = 8$.`,
          t`Check: $t_8 = 64 + 2 = 66$.`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "pyqvault-practice", ref: "ncert-10/c10ArithmeticProgressions/5.3 Eg.15" },
      stem: t`The $n$th term of a sequence is $t_n = 3 + 2n$. The sum of its first four terms is:`,
      verify: { kind: "value", inputs: { f: "3 + 2*n", n: "n", k: "4" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$44$`, correct: false, misconceptionId: "C15-M5", value: "44" },
        { key: "B", text: t`$24$`, correct: false, misconceptionId: "C15-M3", value: "24" },
        { key: "C", text: t`$32$`, correct: true, value: "32" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C15-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`Put $n = 1, 2, 3, 4$: $t_1 = 5$, $t_2 = 7$, $t_3 = 9$, $t_4 = 11$.`,
          t`Add them: $S_4 = 5 + 7 + 9 + 11 = 32$.`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "pyqvault-practice", ref: "ncert-10/c10ArithmeticProgressions/Ex 5.3 Q10 (i)" },
      stem: t`For the sequence $t_n = n^2 + 1$, the sum of the first four terms, $S_4$, is:`,
      verify: { kind: "value", inputs: { f: "n**2 + 1", n: "n", k: "4" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$24$`, correct: false, misconceptionId: "C15-M6", value: "24" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C15-M4", value: "26" },
        { key: "C", text: t`$34$`, correct: true, value: "34" },
        { key: "D", text: t`$17$`, correct: false, misconceptionId: "C15-M1", value: "17" },
      ],
      solution: {
        steps: [
          t`$t_1 = 2$, $t_2 = 5$, $t_3 = 10$, $t_4 = 17$: the gaps $3, 5, 7$ are not equal.`,
          t`$S_4 = 2 + 5 + 10 + 17 = 34$.`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "pyqvault-practice", ref: "ncert-10/c10ArithmeticProgressions/Ex 5.1 Q1 (i)" },
      stem: t`A sequence has $t_1 = 15$ and $t_{n+1} = t_n + 8$ for $n \ge 1$. Then $S_3 =$`,
      verify: { kind: "value", inputs: { a: "15", g: "u + 8", u: "u", k: "3" }, params: { ask: "rsum" } },
      options: [
        { key: "A", text: t`$93$`, correct: false, misconceptionId: "C15-M5", value: "93" },
        { key: "B", text: t`$34$`, correct: false, misconceptionId: "C15-M2", value: "34" },
        { key: "C", text: t`$69$`, correct: true, value: "69" },
        { key: "D", text: t`$31$`, correct: false, misconceptionId: "C15-M1", value: "31" },
      ],
      solution: {
        steps: [
          t`Each term is the previous term plus $8$: $t_2 = 15 + 8 = 23$ and $t_3 = 23 + 8 = 31$.`,
          t`$S_3 = t_1 + t_2 + t_3 = 15 + 23 + 31 = 69$.`,
        ],
      },
    },
    {
      id: "C15-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q1(i)" },
      stem: t`The first three terms of the sequence whose $n$th term is $t_n = 3n^2 - 4$ are:`,
      verify: { kind: "value", inputs: { f: "3*n**2 - 4", n: "n", k: "3" }, params: { ask: "terms" } },
      options: [
        { key: "A", text: t`$-4, -1, 8$`, correct: false, misconceptionId: "C15-M3", value: "(-4, -1, 8)" },
        { key: "B", text: t`$2, 8, 14$`, correct: false, misconceptionId: "C15-M6", value: "(2, 8, 14)" },
        { key: "C", text: t`$-1, 8, 17$`, correct: false, misconceptionId: "C15-M4", value: "(-1, 8, 17)" },
        { key: "D", text: t`$-1, 8, 23$`, correct: true, value: "(-1, 8, 23)" },
      ],
      solution: {
        steps: [
          t`Put $n = 1$: $t_1 = 3(1) - 4 = -1$.`,
          t`Put $n = 2$ and $n = 3$: $t_2 = 3(4) - 4 = 8$ and $t_3 = 3(9) - 4 = 23$.`,
          t`The first three terms are $-1, 8, 23$.`,
        ],
      },
    },
  ],
};
