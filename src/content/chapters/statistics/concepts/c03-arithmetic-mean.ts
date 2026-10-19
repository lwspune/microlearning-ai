import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A batsman scores $12$, $30$ and $81$ in three innings. Find how far each score is above or below his average, with a sign. **Add up the three gaps. What do you get, and would other scores change it?**`,
    reveal: t`The average is $\frac{12 + 30 + 81}{3} = 41$. The gaps are $-29$, $-11$ and $+40$, and they add up to $0$. Any scores do the same: the mean is the balance point, where the gaps below it exactly cancel the gaps above it.`,
  },
  explanation: {
    intuition: [
      t`An **observation** is one value in the data, such as one student's mark; $n$ is how many there are.`,
      t`The **arithmetic mean** $\bar{x}$ (read x bar) shares the total equally: add every observation, then divide by $n$.`,
      t`A value that appears twice counts twice: both copies are observations.`,
      t`The **frequency** $f_i$ of a value $x_i$ is how many times it occurs in the data.`,
      t`The **deviation** of an observation from a number $a$ is $x_i - a$: negative below $a$, positive above it.`,
      t`Measured from the mean itself, the deviations cancel: they always add up to $0$.`,
    ],
    formal: [
      {
        title: "Mean of raw data",
        points: [
          t`**Raw data** are the observations $x_1, x_2, \ldots, x_n$ listed one by one.`,
          t`The sign $\sum$ (sigma) means add them all up: $\sum x_i = x_1 + x_2 + \cdots + x_n$.`,
          t`The mean is $\bar{x} = \frac{\sum x_i}{n}$.`,
          t`For $3, 7, 7, 11$: $\bar{x} = \frac{3 + 7 + 7 + 11}{4}$ $= \frac{28}{4} = 7$.`,
          t`Turned round, the total is $\sum x_i = n\bar{x}$; use it to find a missing observation.`,
          t`Four values with mean $9$ total $36$; if three are $5, 8, 10$, the fourth is $36 - 23 = 13$.`,
        ],
      },
      {
        title: "Mean of a frequency table",
        points: [
          t`A **frequency table** lists each different value $x_i$ once, beside its frequency $f_i$.`,
          t`The value $x_i$ occurs $f_i$ times, so it adds $f_ix_i$ to the total.`,
          t`The number of observations is $N = \sum f_i$, not the number of rows.`,
          t`So $\bar{x} = \frac{\sum f_ix_i}{\sum f_i}$.`,
          t`Values $1, 3, 6$ with frequencies $5, 3, 2$: $\sum f_ix_i = 5 + 9 + 12 = 26$.`,
          t`There are $10$ observations, so $\bar{x} = \frac{26}{10} = 2.6$; dividing by the $3$ rows is wrong.`,
        ],
      },
      {
        title: "Deviations from the mean",
        points: [
          t`A **constant** is a fixed number; adding $n$ copies of it gives $\sum a = na$.`,
          t`So $\sum (x_i - \bar{x}) = \sum x_i - n\bar{x}$.`,
          t`But $\sum x_i = n\bar{x}$, so this sum is $0$ for every set of data.`,
          t`With frequencies too: $\sum f_i(x_i - \bar{x}) = 0$.`,
          t`For $3, 7, 7, 11$, where $\bar{x} = 7$: $-4 + 0 + 0 + 4 = 0$.`,
        ],
      },
      {
        title: "Deviations from any number",
        points: [
          t`From a number $a$ other than the mean, the deviations do not cancel.`,
          t`$\sum (x_i - a) = \sum x_i - na$ $= n(\bar{x} - a)$.`,
          t`The sum is positive when $a$ is below the mean, negative when $a$ is above it.`,
          t`Say $\sum (x_i - 2.5) = 50$ and $\sum (x_i - 3.5) = -50$.`,
          t`Each $(x_i - 2.5) - (x_i - 3.5) = 1$, so subtracting gives $n = 50 - (-50) = 100$.`,
          t`Then $100(\bar{x} - 2.5) = 50$, so $\bar{x} = 3$.`,
        ],
      },
      {
        title: "Means of standard series",
        points: [
          t`The whole numbers from $a$ to $b$ are $b - a + 1$ terms: $15$ to $64$ is $50$ terms.`,
          t`An **A.P.** (arithmetic progression) goes up in equal steps, like $4, 7, 10, \ldots$`,
          t`Its mean is halfway between its first and last terms, so $1, 2, \ldots, n$ has mean $\frac{n + 1}{2}$.`,
          t`The squares $1^2, 2^2, \ldots, n^2$ are not an A.P.; their sum is $\frac{n(n + 1)(2n + 1)}{6}$.`,
          t`So their mean is $\frac{(n + 1)(2n + 1)}{6}$: for $n = 13$, $\frac{14 \times 27}{6} = 63$.`,
          t`Halving $1^2 + 13^2$ gives $85$ and squaring the mean $7$ gives $49$: neither is $63$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The numbers $1$ and $6$ have frequencies $k$ and $k + 2$, and their mean is $4$. Find $k$.`,
      steps: [
        t`The number of observations is $\sum f_i = k + (k + 2)$ $= 2k + 2$.`,
        t`The total is $\sum f_ix_i = 1 \cdot k + 6(k + 2)$ $= 7k + 12$.`,
        t`The total is the mean times the count: $7k + 12 = 4(2k + 2)$ $= 8k + 8$.`,
        t`So $k = 4$. Check: frequencies $4$ and $6$ give $\frac{4 + 36}{10} = 4$.`,
      ],
      answer: t`$k = 4$.`,
    },
    visualSpec: t`Drag dots along a number line: a pivot marks their mean, the balance point, and the deviations on its two sides always cancel.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Dividing $\sum f_ix_i$ by the number of rows (different values) instead of the number of observations $\sum f_i$`,
      remediation: t`Every observation counts, so divide by $N = \sum f_i$, the total frequency, not by the number of rows (different values). In $\sum f_i(x_i - a)$, $a$ is taken away once for each observation: $N$ times.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Ignoring the frequencies (or the repeats) and using each different value once",
      remediation: t`A value that occurs $f_i$ times adds $f_ix_i$ to the total, not $x_i$. Multiply each value by its frequency, or keep every repeat, before you add.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Taking the mean as halfway between the first and last (smallest and largest) values",
      remediation: "Halfway between the ends is the mean only of an A.P. with each term once. Otherwise add every observation and divide by how many there are.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Taking the mean of the squares $k^2$ as the square of the mean of the $k$'s`,
      remediation: t`Square first, then average: the mean of $1^2, 2^2, \ldots, n^2$ is $\frac{(n + 1)(2n + 1)}{6}$, which is more than $\left(\frac{n + 1}{2}\right)^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Counting the whole numbers from $a$ to $b$ as $b - a$`,
      remediation: t`From $a$ to $b$ there are $b - a + 1$ whole numbers, both ends included: $3$ to $10$ is $8$ numbers, not $7$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Believing the deviations from any number add up to $0$`,
      remediation: t`Only the deviations from the mean add up to $0$. From any other number $a$, $\sum (x_i - a) = n(\bar{x} - a)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 and C03-M2 apply only to a frequency table or a list with repeats (ask mean or dev); C03-M4 only to a series of squares; C03-M5 only to the mean of a run of terms from $a$ to $b$; C03-M6 only to a sum of deviations.`,
    t`C03-M3 gives the key for an A.P. listed once, so it cannot be tagged there: the naturals in $[15, 64]$ (2021 Sep Q110) and the A.P. of 2022 Apr Q109 are not items (the slides count the terms of $[15, 64]$). For two values C03-M2 and C03-M3 agree.`,
    "C03-Q2 and C03-Q3 use new tables: the bank's 2024 Apr Q118 and 2022 Apr Q106 to Q108 refer to tables that are not there (and 2024 Apr Q118 prints options B and C the same).",
    t`C03-Q4 changes 2021 Apr Q107 (deviations of $73, 85, 92, 105, 120$ from their mean, key $0$, readable as a fact) to add a repeated $92$ and measure from $90$. C03-Q5 changes 2023 Apr Q108's dice (the mean of all twelve, and no $3$, so C03-M2 and C03-M3 differ). C03-Q6 takes the squares of 2024 Sep Q102 and asks a sum of deviations from $40$.`,
    t`The worked example is 2020 Apr Q101 (numbers $4$ and $9$, frequencies $x$ and $x - 1$, mean $6$, $x = 3$) with new numbers; the slides use 2020 Apr Q104 ($n = 100$) as it stands.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q120" },
      stem: t`What is the arithmetic mean of $8^2, 9^2, 10^2, \ldots, 15^2$?`,
      verify: { kind: "value", inputs: { a: "8", b: "15", p: "2" }, params: { ask: "series_mean" } },
      options: [
        { key: "A", text: t`$\frac{529}{4}$`, correct: false, misconceptionId: "C03-M4", value: "529/4" },
        { key: "B", text: t`$\frac{1100}{7}$`, correct: false, misconceptionId: "C03-M5", value: "1100/7" },
        { key: "C", text: t`$\frac{275}{2}$`, correct: true, value: "275/2" },
        { key: "D", text: t`$\frac{289}{2}$`, correct: false, misconceptionId: "C03-M3", value: "289/2" },
      ],
      solution: {
        steps: [
          t`From $8$ to $15$ there are $15 - 8 + 1 = 8$ terms.`,
          t`$1^2 + \cdots + 15^2 = \frac{15 \cdot 16 \cdot 31}{6} = 1240$ and $1^2 + \cdots + 7^2 = \frac{7 \cdot 8 \cdot 15}{6} = 140$.`,
          t`So $8^2 + \cdots + 15^2 = 1240 - 140$ $= 1100$.`,
          t`The mean is $\frac{1100}{8} = \frac{275}{2} = 137.5$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q118" },
      stem: t`The marks $x_i$ of $20$ students in a short test, with frequencies $f_i$, are: $$\begin{array}{c|c} x_i & f_i \\ \hline 2 & 6 \\ 4 & 7 \\ 8 & 6 \\ 12 & 1 \end{array}$$ What is the mean mark?`,
      verify: { kind: "value", inputs: { xs: "(2, 4, 8, 12)", fs: "(6, 7, 6, 1)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$6.5$`, correct: false, misconceptionId: "C03-M2", value: "13/2" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C03-M3", value: "7" },
        { key: "C", text: t`$5$`, correct: true, value: "5" },
        { key: "D", text: t`$25$`, correct: false, misconceptionId: "C03-M1", value: "25" },
      ],
      solution: {
        steps: [
          t`The number of students is $\sum f_i = 6 + 7 + 6 + 1 = 20$.`,
          t`The total of the marks is $\sum f_ix_i = 12 + 28 + 48 + 12$ $= 100$.`,
          t`$\bar{x} = \frac{100}{20} = 5$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q107" },
      stem: t`A frequency table of $20$ observations is: $$\begin{array}{c|c} x_i & f_i \\ \hline 10 & 3 \\ 20 & 6 \\ 30 & 8 \\ 50 & 3 \end{array}$$ What is the algebraic sum of the deviations of all $20$ observations from $25$?`,
      verify: { kind: "value", inputs: { xs: "(10, 20, 30, 50)", fs: "(3, 6, 8, 3)", c: "25" }, params: { ask: "dev" } },
      options: [
        { key: "A", text: t`$440$`, correct: false, misconceptionId: "C03-M1", value: "440" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C03-M2", value: "10" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C03-M6", value: "0" },
        { key: "D", text: t`$40$`, correct: true, value: "40" },
      ],
      solution: {
        steps: [
          t`$\sum f_ix_i = 30 + 120 + 240 + 150$ $= 540$, and $N = 20$.`,
          t`$\sum f_i(x_i - 25) = 540 - 20 \times 25$ $= 540 - 500 = 40$.`,
          t`Check: $\bar{x} = \frac{540}{20} = 27$, and $N(\bar{x} - 25) = 20 \times 2 = 40$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q107" },
      stem: t`What is the sum of the deviations of the variate values $73, 85, 92, 92, 105, 120$ from $90$?`,
      verify: { kind: "value", inputs: { xs: "(73, 85, 92, 92, 105, 120)", c: "90" }, params: { ask: "dev" } },
      options: [
        { key: "A", text: t`$39$`, correct: false, misconceptionId: "C03-M3", value: "39" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M6", value: "0" },
        { key: "C", text: t`$27$`, correct: true, value: "27" },
        { key: "D", text: t`$25$`, correct: false, misconceptionId: "C03-M2", value: "25" },
      ],
      solution: {
        steps: [
          t`There are $n = 6$ observations ($92$ counts twice), and $\sum x_i = 567$.`,
          t`$\sum (x_i - 90) = 567 - 6 \times 90$ $= 567 - 540 = 27$.`,
          t`It is not $0$ because $90$ is not the mean: $\bar{x} = 94.5$, and $6 \times 4.5 = 27$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q108" },
      stem: t`Twelve dice are thrown together and show $4, 1, 6, 1, 2, 4, 1, 5, 1, 4, 6, 1$. What is the mean of these $12$ observations?`,
      verify: { kind: "value", inputs: { xs: "(4, 1, 6, 1, 2, 4, 1, 5, 1, 4, 6, 1)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$7.2$`, correct: false, misconceptionId: "C03-M1", value: "36/5" },
        { key: "C", text: t`$3.6$`, correct: false, misconceptionId: "C03-M2", value: "18/5" },
        { key: "D", text: t`$3.5$`, correct: false, misconceptionId: "C03-M3", value: "7/2" },
      ],
      solution: {
        steps: [
          t`All $12$ throws are observations: five $1$s, one $2$, three $4$s, one $5$ and two $6$s.`,
          t`The total is $5 + 2 + 12 + 5 + 12$ $= 36$.`,
          t`$\bar{x} = \frac{36}{12} = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q102" },
      stem: t`What is the sum of the deviations of the squares $1^2, 2^2, 3^2, \ldots, 10^2$ from $40$?`,
      verify: { kind: "value", inputs: { a: "1", b: "10", p: "2", c: "40" }, params: { ask: "series_dev" } },
      options: [
        { key: "A", text: t`$-15$`, correct: true, value: "-15" },
        { key: "B", text: t`$105$`, correct: false, misconceptionId: "C03-M3", value: "105" },
        { key: "C", text: t`$-97.5$`, correct: false, misconceptionId: "C03-M4", value: "-195/2" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C03-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`There are $10$ squares, and $1^2 + \cdots + 10^2$ $= \frac{10 \cdot 11 \cdot 21}{6} = 385$.`,
          t`$\sum (x_i - 40) = 385 - 10 \times 40$ $= -15$.`,
          t`Check: the mean $38.5$ is below $40$, so the sum is negative: $10 \times (-1.5) = -15$.`,
        ],
      },
    },
  ],
};
