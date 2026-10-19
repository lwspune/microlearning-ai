import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Five flats in a building cost ₹$40, 45, 50, 55$ and $310$ lakh. Their mean price is ₹$100$ lakh. **Is ₹$100$ lakh a typical price here?**`,
    reveal: t`No: four of the five flats cost far less. The one costly flat drags the mean up. The middle price, ₹$50$ lakh, is the **median**, and it does not care how big the extreme value is.`,
  },
  explanation: {
    intuition: [
      t`To **sort** data is to list it from smallest to largest; the **median** is the middle value of the sorted list.`,
      t`Half the observations lie at or below the median, and half lie at or above it.`,
      t`An odd count has one middle value; an even count has two, and the median is their average.`,
      t`One extreme value can drag the mean a long way, but it hardly moves the median.`,
      t`In a table, the **frequency** $f$ of a value is how many times it occurs.`,
      t`The **cumulative frequency** (c.f.) adds up the frequencies so far; it shows where the middle observation sits.`,
    ],
    formal: [
      {
        title: "Median of raw data",
        points: [
          t`**Raw data** are observations listed one by one; sort them in ascending order, smallest first.`,
          t`If the count $n$ is odd, the median is the $\frac{n+1}{2}$-th observation.`,
          t`If $n$ is even, it is the average of the $\frac{n}{2}$-th and $\left(\frac{n}{2} + 1\right)$-th observations.`,
          t`Negatives come first when you sort: $-5 < -2 < 0 < 1.5$.`,
          t`Example: $3, -2, 7.5, 0$ sorts to $-2, 0, 3, 7.5$.`,
          t`Here $n = 4$ is even, so the median is $\frac{0 + 3}{2} = 1.5$.`,
        ],
      },
      {
        title: "Median of a frequency table",
        points: [
          t`In a **discrete** frequency table, each value $x$ is listed once with its frequency $f$.`,
          t`$N = \sum f$ is the total number of observations.`,
          t`Write the c.f. beside each value: its $f$ plus the c.f. above it.`,
          t`If $N$ is odd, the median is the $\frac{N+1}{2}$-th observation.`,
          t`If $N$ is even, it is the average of the $\frac{N}{2}$-th and $\left(\frac{N}{2} + 1\right)$-th observations.`,
          t`The $k$-th observation is the first value whose c.f. is at least $k$.`,
        ],
      },
      {
        title: "A frequency table example",
        points: [
          t`Take $x = 2, 4, 6, 8$ with $f = 3, 5, 8, 4$, so $N = 20$.`,
          t`The c.f. column is $3$, $3 + 5 = 8$, $8 + 8 = 16$ and $16 + 4 = 20$.`,
          t`$N = 20$ is even, so we need the $10$th and $11$th observations.`,
          t`The c.f. is $8$ at $x = 4$, short of $10$, and $16$ at $x = 6$.`,
          t`So observations $9$ to $16$ all equal $6$, including the $10$th and $11$th.`,
          t`The median is $6$, not the middle of the listed values $2, 4, 6, 8$.`,
        ],
      },
      {
        title: "Median of grouped data",
        points: [
          t`In **grouped** data the values fall in **classes**, ranges such as $10\text{–}20$, each with a frequency.`,
          t`The **class width** $h$ is a class's upper limit minus its lower limit.`,
          t`The **median class** is the first class whose c.f. reaches $\frac{N}{2}$.`,
          t`Then the median is $L + \frac{N/2 - cf}{f} \times h$.`,
          t`$L$ is the median class's lower limit, $f$ its frequency, and $cf$ the c.f. of the classes before it.`,
          t`The formula assumes the $f$ observations are spread evenly across the median class.`,
        ],
      },
      {
        title: "A grouped data example",
        points: [
          t`Classes $0\text{–}20$, $20\text{–}40$, $40\text{–}60$, $60\text{–}80$ have $f = 5, 12, 15, 8$.`,
          t`$N = 40$, so $\frac{N}{2} = 20$; the c.f. column is $5, 17, 32, 40$.`,
          t`The c.f. first reaches $20$ in $40\text{–}60$: that is the median class.`,
          t`So $L = 40$, $cf = 17$, $f = 15$ and $h = 20$.`,
          t`Median $= 40 + \frac{20 - 17}{15} \times 20$ $= 40 + 4 = 44$.`,
        ],
      },
      {
        title: "Unknowns and parts of data",
        points: [
          t`If the median is given, write the middle of the sorted data in terms of the unknown.`,
          t`Set that expression equal to the given median and solve.`,
          t`For the median of part of the data, take only that part and sort it on its own.`,
          t`Example: the first three of $9, 2, 5, 8$ sort to $2, 5, 9$, so their median is $5$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The eight observations $12, 15, 19, x, x + 6, 31, 36, 40$ are in ascending order, and their median is $24$. Find $x$.`,
      steps: [
        t`$n = 8$ is even, so the median is the average of the $4$th and $5$th observations, $x$ and $x + 6$.`,
        t`$\frac{x + (x + 6)}{2} = 24$, so $2x + 6 = 48$.`,
        t`So $2x = 42$ and $x = 21$.`,
        t`Check the order: $19 \le 21$ and $21 + 6 = 27 \le 31$, so the list is still ascending.`,
      ],
      answer: t`$x = 21$.`,
    },
    visualSpec: t`Drag observations along a number line: the middle of the sorted dots stays put while one far dot drags the mean away.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Taking the middle of the list as printed, without sorting it",
      remediation: t`The median is the middle of the **sorted** data. Write the observations from smallest to largest first, with negatives before $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "With an even count, taking just one of the two middle values",
      remediation: t`When $n$ is even there are two middle observations, the $\frac{n}{2}$-th and the $\left(\frac{n}{2} + 1\right)$-th. The median is their average.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Working out the mean instead of the median",
      remediation: "The mean adds up all the values and divides by how many there are. The median is the value in the middle position once the data are sorted.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Ignoring the frequencies and taking the middle of the listed values (or class marks)",
      remediation: "Each value counts as many times as its frequency. Build the cumulative frequency and find the value at the middle position.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M5",
      mistake: t`Using the c.f. up to and including the median class as $cf$ in the grouped formula`,
      remediation: t`In $L + \frac{N/2 - cf}{f} \times h$, $cf$ is the cumulative frequency of the classes **before** the median class, without the median class itself.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M6",
      mistake: "Giving the median's position as its value",
      remediation: t`$\frac{n+1}{2}$ (or $\frac{N}{2}$) tells you **where** the median sits in the sorted data. The median is the observation at that position.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M1 gives the key when the data are already printed in order, so it is tagged only on items whose data are unsorted (C07-Q1, C07-Q2).",
    "C07-M2 applies only to an even count of raw data; C07-M4 only to frequency tables; C07-M5 only to grouped data.",
    t`For a discrete table with even $N$ whose $\frac{N}{2}$-th and $\left(\frac{N}{2} + 1\right)$-th observations differ, NDA keys the first value whose c.f. reaches $\frac{N+1}{2}$: 2019 Sep Q110 keys $5$ where the average of the $120$th and $121$st observations is $4.5$. The items here avoid that case.`,
    t`C07-Q3 changes 2023 Apr Q111's last frequency from $7$ to $9$: with $7$ the mean is also $3$, so C07-M3 would give the key.`,
    t`The bank rows for 2022 Sep Q118 and 2021 Sep Q108 lack their tables. C07-Q5 rebuilds its table from the bank solution's c.f. column ($1, 3, 7, 13, 17, 20$); C07-Q6 is a new table of the same type.`,
    t`C07-Q2 renames the PYQ's $N$ to $K$, since $N$ is the total frequency in this concept.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q110" },
      stem: t`The median of the $12$ observations $4.6, 0, 9.3, -4.8, 7.6, 2.3,$ $12.7, 3.5, 8.2, 6.1, 3.9, 5.2$ is:`,
      verify: { kind: "value", inputs: { xs: "(4.6, 0, 9.3, -4.8, 7.6, 2.3, 12.7, 3.5, 8.2, 6.1, 3.9, 5.2)" }, params: { ask: "raw" } },
      options: [
        { key: "A", text: t`$4.6$`, correct: false, misconceptionId: "C07-M2", value: "23/5" },
        { key: "B", text: t`$6.5$`, correct: false, misconceptionId: "C07-M6", value: "13/2" },
        { key: "C", text: t`$4.9$`, correct: true, value: "49/10" },
        { key: "D", text: t`$7.5$`, correct: false, misconceptionId: "C07-M1", value: "15/2" },
      ],
      solution: {
        steps: [
          t`Sort: $-4.8, 0, 2.3, 3.5, 3.9, 4.6,$ $5.2, 6.1, 7.6, 8.2, 9.3, 12.7$.`,
          t`$n = 12$ is even, so take the $6$th and $7$th observations, $4.6$ and $5.2$.`,
          t`Median $= \frac{4.6 + 5.2}{2} = 4.9$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q112" },
      stem: t`For the data $-1, 1, 4, 3, 8, 12, 17, 19, 9, 11$, let $M$ be the median of the first five observations and $K$ the median of the last five. Then $4M - K$ equals:`,
      verify: { kind: "value", inputs: { xs: "(-1, 1, 4, 3, 8, 12, 17, 19, 9, 11)", k: "5", a: "4", b: "-1" }, params: { ask: "part" } },
      options: [
        { key: "A", text: t`$-3$`, correct: false, misconceptionId: "C07-M1", value: "-3" },
        { key: "B", text: t`$-1.6$`, correct: false, misconceptionId: "C07-M3", value: "-8/5" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C07-M6", value: "9" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`The first five, $-1, 1, 4, 3, 8$, sort to $-1, 1, 3, 4, 8$, so $M = 3$.`,
          t`The last five, $12, 17, 19, 9, 11$, sort to $9, 11, 12, 17, 19$, so $K = 12$.`,
          t`$4M - K = 12 - 12 = 0$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q111" },
      stem: t`The median of this frequency distribution is: $$\begin{array}{c|c} x & f \\ \hline 1 & 4 \\ 2 & 6 \\ 3 & 9 \\ 5 & 9 \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(1, 2, 3, 5)", fs: "(4, 6, 9, 9)" }, params: { ask: "disc" } },
      options: [
        { key: "A", text: t`$14.5$`, correct: false, misconceptionId: "C07-M6", value: "29/2" },
        { key: "B", text: t`$3$`, correct: true, value: "3" },
        { key: "C", text: t`$\frac{22}{7}$`, correct: false, misconceptionId: "C07-M3", value: "22/7" },
        { key: "D", text: t`$2.5$`, correct: false, misconceptionId: "C07-M4", value: "5/2" },
      ],
      solution: {
        steps: [
          t`$N = 4 + 6 + 9 + 9 = 28$, and the c.f. column is $4, 10, 19, 28$.`,
          t`$N$ is even, so we need the $14$th and $15$th observations.`,
          t`The c.f. is $10$ at $x = 2$ and $19$ at $x = 3$, so observations $11$ to $19$ all equal $3$.`,
          t`The median is $3$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q105" },
      stem: t`The numbers of peas in $198$ pea pods are shown below. The median number of peas per pod is: $$\begin{array}{c|c} \text{Peas} & \text{Pods} \\ \hline 1 & 4 \\ 2 & 33 \\ 3 & 76 \\ 4 & 50 \\ 5 & 26 \\ 6 & 8 \\ 7 & 1 \end{array}$$`,
      verify: { kind: "value", inputs: { xs: "(1, 2, 3, 4, 5, 6, 7)", fs: "(4, 33, 76, 50, 26, 8, 1)" }, params: { ask: "disc" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$\frac{683}{198}$`, correct: false, misconceptionId: "C07-M3", value: "683/198" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C07-M4", value: "4" },
        { key: "D", text: t`$99.5$`, correct: false, misconceptionId: "C07-M6", value: "199/2" },
      ],
      solution: {
        steps: [
          t`$N = 198$ is even, so we need the $99$th and $100$th observations.`,
          t`The c.f. column starts $4, 37, 113$.`,
          t`The c.f. is $37$ at $2$ peas and $113$ at $3$, so pods $38$ to $113$ all have $3$ peas.`,
          t`The median is $3$ peas.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q118" },
      stem: t`The median of this grouped distribution is: $$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 0\text{–}10 & 1 \\ 10\text{–}20 & 2 \\ 20\text{–}30 & 4 \\ 30\text{–}40 & 6 \\ 40\text{–}50 & 4 \\ 50\text{–}60 & 3 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "0", h: "10", fs: "(1, 2, 4, 6, 4, 3)" }, params: { ask: "grp" } },
      options: [
        { key: "A", text: t`$34.5$`, correct: false, misconceptionId: "C07-M3", value: "69/2" },
        { key: "B", text: t`$30$`, correct: false, misconceptionId: "C07-M4", value: "30" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C07-M5", value: "25" },
        { key: "D", text: t`$35$`, correct: true, value: "35" },
      ],
      solution: {
        steps: [
          t`$N = 20$, so $\frac{N}{2} = 10$; the c.f. column is $1, 3, 7, 13, 17, 20$.`,
          t`The c.f. first reaches $10$ in $30\text{–}40$: $L = 30$, $cf = 7$, $f = 6$, $h = 10$.`,
          t`Median $= 30 + \frac{10 - 7}{6} \times 10$ $= 30 + 5 = 35$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q108" },
      stem: t`The marks of $50$ students are grouped below. The median mark is: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 10\text{–}20 & 6 \\ 20\text{–}30 & 10 \\ 30\text{–}40 & 15 \\ 40\text{–}50 & 12 \\ 50\text{–}60 & 7 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "10", h: "10", fs: "(6, 10, 15, 12, 7)" }, params: { ask: "grp" } },
      options: [
        { key: "A", text: t`$36$`, correct: true, value: "36" },
        { key: "B", text: t`$35$`, correct: false, misconceptionId: "C07-M4", value: "35" },
        { key: "C", text: t`$26$`, correct: false, misconceptionId: "C07-M5", value: "26" },
        { key: "D", text: t`$25$`, correct: false, misconceptionId: "C07-M6", value: "25" },
      ],
      solution: {
        steps: [
          t`$N = 50$, so $\frac{N}{2} = 25$; the c.f. column starts $6, 16, 31$.`,
          t`The c.f. first reaches $25$ in $30\text{–}40$: $L = 30$, $cf = 16$, $f = 15$, $h = 10$.`,
          t`Median $= 30 + \frac{25 - 16}{15} \times 10$ $= 30 + 6 = 36$ marks.`,
        ],
      },
    },
  ],
};
