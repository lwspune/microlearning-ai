import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Five friends have $2$, $3$, $3$, $4$ and $8$ chocolates. If they pool them and share equally, how many does each friend get?`,
    reveal: t`Together they have $2 + 3 + 3 + 4 + 8 = 20$ chocolates. Shared among $5$ friends, each gets $\dfrac{20}{5} = 4$. This fair share is the **mean**.`,
  },
  explanation: {
    intuition: [
      t`An **observation** is one value in the data, such as one student's marks.`,
      t`The **mean** is the fair share: pool all the observations, then share them equally.`,
      t`So mean $=$ sum of the observations $\div$ number of observations.`,
      t`Every observation counts, even when a value repeats.`,
      t`The mean is written $\bar{x}$, read as x bar.`,
      t`It is one number that represents the whole data.`,
    ],
    formal: [
      {
        title: "Mean of raw data",
        points: [
          t`Mean $= \dfrac{\text{sum of all observations}}{\text{number of observations}}$.`,
          t`Count each observation every time it occurs.`,
          t`For $4$, $6$, $6$, $8$ there are $4$ observations, not $3$.`,
          t`Mean $= \dfrac{4 + 6 + 6 + 8}{4} = \dfrac{24}{4} = 6$.`,
        ],
      },
      {
        title: "Mean from a frequency table",
        points: [
          t`In a table, $x_i$ is a value and $f_i$ is its **frequency**: how many times it occurs.`,
          t`The $f_i$ observations equal to $x_i$ add up to $f_i \times x_i$.`,
          t`So $\sum f_i x_i$ is the sum of all the observations.`,
          t`$N = \sum f_i$ is the number of observations.`,
          t`Mean $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$.`,
        ],
      },
      {
        title: "Using the table",
        points: [
          t`Add a third column, $f_i \times x_i$, to the table.`,
          t`Total the $f_i$ column to get $N$.`,
          t`Total the $f_i x_i$ column to get $\sum f_i x_i$.`,
          t`Divide by $N$, not by the number of rows.`,
          t`Values $1, 2, 3$ with frequencies $2, 5, 3$: $\sum f_i x_i = 2 + 10 + 9 = 21$.`,
          t`$N = 2 + 5 + 3 = 10$, so $\bar{x} = \dfrac{21}{10} = 2.1$.`,
        ],
      },
      {
        title: "A missing frequency",
        points: [
          t`When one frequency is unknown, call it $p$ and keep it in both totals.`,
          t`Write $\sum f_i$ and $\sum f_i x_i$, each with a $p$ term.`,
          t`Use $\sum f_i x_i = \bar{x} \times \sum f_i$.`,
          t`The mean multiplies **every** term of $\sum f_i$, the $p$ term too.`,
          t`Collect the $p$ terms on one side and solve for $p$.`,
          t`Check: the new totals must give the stated mean.`,
        ],
      },
    ],
    worked: {
      prompt: t`A team scored $0$, $1$, $2$, $3$, $4$ goals in $3$, $5$, $6$, $p$, $2$ matches respectively. The mean is $2$ goals per match. Find $p$.`,
      steps: [
        t`$\sum f_i = 3 + 5 + 6 + p + 2 = 16 + p$.`,
        t`$\sum f_i x_i = 0 + 5 + 12 + 3p + 8$ $= 25 + 3p$.`,
        t`$\sum f_i x_i = \bar{x} \times \sum f_i$: $25 + 3p = 2(16 + p)$ $= 32 + 2p$.`,
        t`$3p - 2p = 32 - 25$, so $p = 7$.`,
        t`Check: $\dfrac{25 + 21}{16 + 7} = \dfrac{46}{23} = 2$.`,
      ],
      answer: t`$p = 7$`,
    },
    visualSpec: t`A row of bars of different heights; dragging the level line until the bars above it exactly fill the gaps below shows the mean as the fair-share height.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Divides the total by the number of different values (the number of rows of a table) instead of the number of observations.",
      remediation: t`Divide by the number of observations. Repeated values count each time, and in a table this is $N = \sum f_i$, not the number of rows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Ignores how often a value occurs: averages only the different values, or only the $x_i$ column.`,
      remediation: t`Every observation counts each time it occurs. In a table, multiply each value by its frequency: mean $= \dfrac{\sum f_i x_i}{\sum f_i}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Averages the frequencies, $\sum f_i \div$ number of rows, instead of the observations.`,
      remediation: t`The frequencies only say how many times each value occurs. The mean is an average of the values: $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`In $\bar{x}(N + p)$, multiplies only $N$ by the mean and leaves $p$ as it is.`,
      remediation: t`The mean multiplies every term inside the bracket: $\bar{x}(N + p) = \bar{x}N + \bar{x}p$.`,
      fallback: { kind: "ext", topic: "removing brackets in linear equations (Std VIII)" },
    },
    {
      id: "C05-M5",
      mistake: t`Leaves the unknown frequency $p$ out of $N$, dividing by the known frequencies only.`,
      remediation: t`The $p$ observations are part of the data too, so $N = \sum f_i$ includes $p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Takes the middle observation, after arranging the data in order, as the mean.",
      remediation: "The middle value is the median, a different measure. The mean is the sum of the observations divided by their number.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.1" },
      stem: t`Find the mean of the numbers $25$, $30$, $27$, $23$ and $25$.`,
      verify: { kind: "value", inputs: { obs: "(25, 30, 27, 23, 25)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$25$`, correct: false, misconceptionId: "C05-M6", value: "25" },
        { key: "B", text: t`$26$`, correct: true, value: "26" },
        { key: "C", text: t`$32.5$`, correct: false, misconceptionId: "C05-M1", value: "65/2" },
        { key: "D", text: t`$26.25$`, correct: false, misconceptionId: "C05-M2", value: "105/4" },
      ],
      solution: {
        steps: [
          t`Sum $= 25 + 30 + 27 + 23 + 25 = 130$.`,
          t`There are $5$ observations; $25$ counts twice.`,
          t`Mean $= \dfrac{130}{5} = 26$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q1" },
      stem: t`The yield of soyabean per acre, in quintal, in Mukund's field for $7$ years was $10$, $8$, $5$, $3$, $9$, $4$, $3$. Find the mean yield per acre, in quintal.`,
      verify: { kind: "value", inputs: { obs: "(10, 8, 5, 3, 9, 4, 3)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C05-M6", value: "5" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C05-M1", value: "7" },
        { key: "C", text: t`$6.5$`, correct: false, misconceptionId: "C05-M2", value: "13/2" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Sum of yields $= 10 + 8 + 5 + 3 + 9 + 4 + 3$ $= 42$.`,
          t`There are $7$ years, so $7$ observations; $3$ counts twice.`,
          t`Mean $= \dfrac{42}{7} = 6$ quintal per acre.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.2" },
      stem: t`A unit test of $40$ marks was given to $20$ students. Find the mean of the marks.$$\begin{array}{c|c} \text{Marks } x_i & \text{Students } f_i \\ \hline 20 & 3 \\ 25 & 4 \\ 30 & 6 \\ 35 & 5 \\ 40 & 2 \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(20, 25, 30, 35, 40)", fs: "(3, 4, 6, 5, 2)" }, params: { kind: "table" } },
      options: [
        { key: "A", text: t`$29.75$`, correct: true, value: "119/4" },
        { key: "B", text: t`$30$`, correct: false, misconceptionId: "C05-M2", value: "30" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C05-M3", value: "4" },
        { key: "D", text: t`$119$`, correct: false, misconceptionId: "C05-M1", value: "119" },
      ],
      solution: {
        steps: [
          t`$f_i x_i$: $60$, $100$, $180$, $175$, $80$.`,
          t`$\sum f_i x_i = 595$ and $N = \sum f_i = 20$.`,
          t`$\bar{x} = \dfrac{595}{20} = 29.75$ marks.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q13" },
      stem: t`The table shows the number of siblings under $14$ years of age in $50$ families. Find the mean number of siblings per family.$$\begin{array}{c|c} \text{Siblings } x_i & \text{Families } f_i \\ \hline 1 & 15 \\ 2 & 25 \\ 3 & 5 \\ 4 & 5 \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(1, 2, 3, 4)", fs: "(15, 25, 5, 5)" }, params: { kind: "table" } },
      options: [
        { key: "A", text: t`$12.5$`, correct: false, misconceptionId: "C05-M3", value: "25/2" },
        { key: "B", text: t`$2.5$`, correct: false, misconceptionId: "C05-M2", value: "5/2" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$25$`, correct: false, misconceptionId: "C05-M1", value: "25" },
      ],
      solution: {
        steps: [
          t`$f_i x_i$: $15$, $50$, $15$, $20$.`,
          t`$\sum f_i x_i = 100$ and $N = \sum f_i = 50$.`,
          t`$\bar{x} = \dfrac{100}{50} = 2$ siblings per family.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q5" },
      stem: t`The mean of the following data is $21.3$. Find the value of $p$.$$\begin{array}{c|c} x_i & f_i \\ \hline 10 & 12 \\ 15 & 6 \\ 20 & 9 \\ 25 & 3 \\ 30 & p \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(10, 15, 20, 25, 30)", fs: "(12, 6, 9, 3, 0)", j: "4", m: "213/10" }, params: { kind: "missing" } },
      options: [
        { key: "A", text: t`$20$`, correct: true, value: "20" },
        { key: "B", text: t`$5.8$`, correct: false, misconceptionId: "C05-M5", value: "29/5" },
        { key: "C", text: t`$76.5$`, correct: false, misconceptionId: "C05-M3", value: "153/2" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C05-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`$\sum f_i = 30 + p$; $\sum f_i x_i = 465 + 30p$.`,
          t`$465 + 30p = 21.3(30 + p)$ $= 639 + 21.3p$.`,
          t`$30p - 21.3p = 639 - 465$, so $8.7p = 174$.`,
          t`$p = \dfrac{174}{8.7} = 20$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q5" },
      stem: t`The table shows how many books the students of a class read in the holidays. The mean is $6.4$ books. Find the missing frequency $p$.$$\begin{array}{c|c} \text{Books } x_i & \text{Students } f_i \\ \hline 2 & 8 \\ 4 & 2 \\ 6 & 10 \\ 8 & p \\ 10 & 6 \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(2, 4, 6, 8, 10)", fs: "(8, 2, 10, 0, 6)", j: "3", m: "32/5" }, params: { kind: "missing" } },
      options: [
        { key: "A", text: t`$14$`, correct: true, value: "14" },
        { key: "B", text: t`$3.2$`, correct: false, misconceptionId: "C05-M4", value: "16/5" },
        { key: "C", text: t`$2.8$`, correct: false, misconceptionId: "C05-M5", value: "14/5" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C05-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`$\sum f_i = 26 + p$; $\sum f_i x_i = 144 + 8p$.`,
          t`$144 + 8p = 6.4(26 + p)$ $= 166.4 + 6.4p$.`,
          t`$8p - 6.4p = 166.4 - 144$, so $1.6p = 22.4$.`,
          t`$p = \dfrac{22.4}{1.6} = 14$.`,
        ],
      },
    },
  ],
};
