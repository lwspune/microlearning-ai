import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Whole-number marks are grouped as $10$–$19$, $20$–$29$ and $30$–$39$. Each class looks $19 - 10 = 9$ marks wide, yet the three together cover $10$ to $39$. **So how wide is each class?**`,
    reveal: t`$10$ marks. No mark falls between $19$ and $20$, so split that gap: the classes really run $9.5$ to $19.5$, $19.5$ to $29.5$, and so on. These **class boundaries** sit halfway across each gap, and the width is the distance between them: $19.5 - 9.5 = 10$.`,
  },
  explanation: {
    intuition: [
      t`**Raw data** are the **observations**, the values collected, listed one by one in no order.`,
      t`The **frequency** of a value is how many times it occurs.`,
      t`The frequencies add up to $N$, the number of observations.`,
      t`With many values, we group them into **classes**, ranges such as $0$–$10$, and count how many fall in each.`,
      t`A **frequency table** lists each class beside its frequency; the middle of a class, its **class mark**, stands for it.`,
      t`A **cumulative frequency** is a running total: how many observations lie below a point, or above it.`,
    ],
    formal: [
      {
        title: "Making a frequency table",
        points: [
          t`Take the marks $3, 7, 4, 3, 5, 7, 3, 4$: write each value once, in order.`,
          t`Count each one: $f(3) = 3$, $f(4) = 2$, $f(5) = 1$, $f(7) = 2$.`,
          t`The sign $\sum f$ means the sum of all the frequencies.`,
          t`Check: $N = \sum f$ $= 3 + 2 + 1 + 2 = 8$, the number of observations.`,
          t`$N$ counts observations, not different values: here $8$, not $4$.`,
          t`For grouped data, count how many observations fall in each class instead.`,
        ],
      },
      {
        title: "Class limits, exclusive classes",
        points: [
          t`A class such as $20$–$30$ has **lower limit** $20$ and **upper limit** $30$.`,
          t`In **exclusive** classes, such as $0$–$10$, $10$–$20$, $20$–$30$, each class ends where the next begins.`,
          t`A value equal to an upper limit goes in the next class: $20$ is counted in $20$–$30$.`,
          t`So $20$–$30$ holds the values from $20$ up to, but not including, $30$.`,
          t`The **class width** $h$ is the upper limit minus the lower limit: $30 - 20 = 10$.`,
        ],
      },
      {
        title: "Inclusive classes and boundaries",
        points: [
          t`Whole-number data often use **inclusive** classes, such as $10$–$19$, $20$–$29$, which include both limits.`,
          t`They leave a gap of $1$ between one class's upper limit and the next class's lower limit.`,
          t`The **class boundaries** sit halfway across each gap: $20$–$29$ has boundaries $19.5$ and $29.5$.`,
          t`So subtract half the gap from the lower limit and add it to the upper limit.`,
          t`The width is the distance between boundaries: $29.5 - 19.5 = 10$, not $29 - 20 = 9$.`,
          t`Exclusive classes have no gap, so there the limits are the boundaries.`,
        ],
      },
      {
        title: "Class marks",
        points: [
          t`The **class mark** is the middle of a class: $\frac{L + U}{2}$, for lower limit $L$ and upper limit $U$.`,
          t`For $20$–$30$ the mark is $\frac{20 + 30}{2} = 25$; for $20$–$29$ it is $24.5$.`,
          t`The boundaries give the same mark, since they move out equally on both sides.`,
          t`Consecutive class marks differ by the class width: marks $25, 35, 45$ mean $h = 10$.`,
          t`So a class runs from half a width below its mark to half a width above.`,
          t`Mark $25$ with $h = 10$ gives the class $25 - 5$ to $25 + 5$, that is $20$–$30$.`,
        ],
      },
      {
        title: "Cumulative frequency",
        points: [
          t`Take the classes $0$–$10$, $10$–$20$, $20$–$30$, $30$–$40$ with frequencies $3, 5, 8, 4$, so $N = 20$.`,
          t`The **less than** cumulative frequency of a class adds the frequencies from the first class down to it.`,
          t`Here they are $3$, $3 + 5 = 8$, $8 + 8 = 16$, $16 + 4 = 20$; the last is always $N$.`,
          t`The $16$ says $16$ observations are less than $30$, the upper boundary of $20$–$30$.`,
          t`The **more than** cumulative frequency adds from the last class back: $4, 12, 17, 20$.`,
          t`The $12$ says $12$ observations are $20$ or more, from the lower boundary of $20$–$30$.`,
        ],
      },
      {
        title: "Reading a frequency table",
        points: [
          t`Less than $x$: add the classes that end at or before $x$.`,
          t`$x$ or more: add the classes that start at or after $x$.`,
          t`So $20$–$30$ counts in less than $30$ and in $20$ or more, but never in less than $20$.`,
          t`The two counts for the same $x$ always add up to $N$.`,
          t`A class's own frequency is the difference of two less than cumulative frequencies: $16 - 8 = 8$.`,
          t`With inclusive classes, read at the boundaries: $20$–$29$ is less than $29.5$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The class marks of a frequency table of continuous data, in exclusive classes, are $5, 10, 15, \ldots, 50$. Find the class limits of the first five classes.`,
      steps: [
        t`Consecutive marks differ by the width: $h = 10 - 5 = 5$, so half a width is $2.5$.`,
        t`The first class runs from $5 - 2.5 = 2.5$ to $5 + 2.5 = 7.5$.`,
        t`Each class starts where the last one ended and is $5$ wide: $7.5$–$12.5$, then $12.5$–$17.5$.`,
        t`Then $17.5$–$22.5$ and $22.5$–$27.5$. Check the fifth mark: $\frac{22.5 + 27.5}{2} = 25$.`,
      ],
      answer: t`$2.5$–$7.5$, $7.5$–$12.5$, $12.5$–$17.5$, $17.5$–$22.5$ and $22.5$–$27.5$.`,
    },
    visualSpec: t`Drag a divider along a frequency table: the classes before it light up and their running total, the less than cumulative frequency, updates; flip it to count the classes after it instead.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Taking an inclusive class's limits and its boundaries to be the same",
      remediation: t`In inclusive classes such as $30$–$34$, the limits are the printed whole numbers. The boundaries sit half the gap outside them, at $29.5$ and $34.5$, and the width is the distance between boundaries, $5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Taking the class mark as the lower end of its class",
      remediation: "The class mark is the **middle** of a class, not an end. The class runs from half a width below the mark to half a width above it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Going a whole class width either side of the class mark",
      remediation: t`Mark $\pm h$ makes a class twice as wide as it is. Go half a width each way: from mark $- \frac{h}{2}$ to mark $+ \frac{h}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Giving one class's frequency instead of the cumulative total",
      remediation: t`A cumulative frequency is a running total. Less than $x$ adds every class below $x$, from the first class on, and $x$ or more every class above it; not just the class next to $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Also counting the class on the far side of $x$, because $x$ is one of its ends`,
      remediation: t`A class $a$–$b$ holds values from $a$ up to, but not including, $b$. So less than $x$ takes the classes ending at or before $x$, and $x$ or more those starting at or after $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Mixing up the less than and more than counts",
      remediation: t`Less than $x$ adds the classes below $x$, from the top of the table; $x$ or more adds those above $x$, from the bottom. The two counts add up to $N$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1, C01-M2 and C01-M3 apply only to a class found from its class mark (ask limits or bounds); C01-M4, C01-M5 and C01-M6 only to a count read from a table (ask less or more).",
    t`C01-Q1 adapts 2019 Sep Q107 (marks $5, 10, \ldots, 50$ of continuous classes, keyed $2.5$–$7.5$). With exclusive classes the limits are the boundaries, so C01-M1 could not be told apart; here the data are whole numbers in inclusive classes. The original is the worked example.`,
    t`C01-Q3 rebuilds a table like the one behind 2025 Apr Q101, whose stem omits it, and asks less than $164$ (a boundary) instead of up to $165$ (mid-class). The bank stars None of the above there while its own solution argues $39$.`,
    t`C01-Q5 uses the Physics marks of the 2020 Apr Q106 set, with frequencies taken from the bank's solutions and the first class taken as $10$–$20$. C01-Q6 changes the frequencies of the 2025 Sep Q117 table so that C01-M4 and C01-M6 differ from the key.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q107" },
      stem: t`Marks, in whole numbers, are grouped in inclusive classes (such as $10$–$14$, $15$–$19$). The class marks are $12, 17, 22, 27, 32$. The class limits of the third class are:`,
      verify: { kind: "value", inputs: { marks: "(12, 17, 22, 27, 32)", k: "3" }, params: { ask: "limits" } },
      options: [
        { key: "A", text: t`$20$–$24$`, correct: true, value: "(20, 24)" },
        { key: "B", text: t`$19.5$–$24.5$`, correct: false, misconceptionId: "C01-M1", value: "(39/2, 49/2)" },
        { key: "C", text: t`$22$–$27$`, correct: false, misconceptionId: "C01-M2", value: "(22, 27)" },
        { key: "D", text: t`$17$–$27$`, correct: false, misconceptionId: "C01-M3", value: "(17, 27)" },
      ],
      solution: {
        steps: [
          t`Consecutive marks differ by the width: $h = 17 - 12 = 5$. The third mark is $22$.`,
          t`The boundaries are half a width either side: $22 - 2.5 = 19.5$ and $22 + 2.5 = 24.5$.`,
          t`The data are whole numbers, so the limits are the whole numbers just inside: $20$–$24$, like $10$–$14$ and $15$–$19$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`Scores, in whole numbers, are grouped in inclusive classes of width $5$, such as $10$–$14$ and $15$–$19$. One class has class mark $27$. Its class boundaries are:`,
      verify: { kind: "value", inputs: { m: "27", h: "5" }, params: { ask: "bounds" } },
      options: [
        { key: "A", text: t`$24.5$–$29.5$`, correct: true, value: "(49/2, 59/2)" },
        { key: "B", text: t`$25$–$29$`, correct: false, misconceptionId: "C01-M1", value: "(25, 29)" },
        { key: "C", text: t`$27$–$32$`, correct: false, misconceptionId: "C01-M2", value: "(27, 32)" },
        { key: "D", text: t`$22$–$32$`, correct: false, misconceptionId: "C01-M3", value: "(22, 32)" },
      ],
      solution: {
        steps: [
          t`Half the width is $2.5$, so the boundaries are $27 - 2.5 = 24.5$ and $27 + 2.5 = 29.5$.`,
          t`Check: the class is $25$–$29$, its mark is $\frac{25 + 29}{2} = 27$, and its boundaries sit half the gap of $1$ outside its limits.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q101" },
      stem: t`The heights of the students of a class: $$\begin{array}{c|c} \text{Height (cm)} & \text{Students} \\ \hline 158\text{–}160 & 6 \\ 160\text{–}162 & 12 \\ 162\text{–}164 & 15 \\ 164\text{–}166 & 24 \\ 166\text{–}168 & 13 \\ 168\text{–}170 & 5 \end{array}$$ How many students are shorter than $164$ cm?`,
      verify: { kind: "value", inputs: { lo: "158", h: "2", fs: "(6, 12, 15, 24, 13, 5)", x: "164" }, params: { ask: "less" } },
      options: [
        { key: "A", text: t`$57$`, correct: false, misconceptionId: "C01-M5", value: "57" },
        { key: "B", text: t`$42$`, correct: false, misconceptionId: "C01-M6", value: "42" },
        { key: "C", text: t`$33$`, correct: true, value: "33" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C01-M4", value: "15" },
      ],
      solution: {
        steps: [
          t`Shorter than $164$ cm means the classes that end at or before $164$: $158$–$160$, $160$–$162$ and $162$–$164$.`,
          t`Add them: $6 + 12 + 15 = 33$ students.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`The marks of $15$ students are $7, 12, 18, 21, 24, 27, 30, 33, 35, 41, 26, 30, 16, 39, 44$. They are grouped in the classes $0$–$10$, $10$–$20$, $20$–$30$, $30$–$40$, $40$–$50$, each holding its lower limit but not its upper. From this frequency table, how many students scored $30$ or more?`,
      verify: { kind: "value", inputs: { lo: "0", h: "10", k: "5", xs: "(7, 12, 18, 21, 24, 27, 30, 33, 35, 41, 26, 30, 16, 39, 44)", x: "30" }, params: { ask: "more" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C01-M4", value: "5" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C01-M5", value: "11" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C01-M6", value: "8" },
      ],
      solution: {
        steps: [
          t`Tally: $0$–$10$ has $1$, $10$–$20$ has $3$, $20$–$30$ has $4$, $30$–$40$ has $5$, $40$–$50$ has $2$; $N = 15$.`,
          t`Both $30$s go in $30$–$40$, since a class holds its lower limit.`,
          t`$30$ or more means the classes from $30$–$40$ on: $5 + 2 = 7$ students.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q106" },
      stem: t`The Physics marks of $100$ students: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 10\text{–}20 & 8 \\ 20\text{–}30 & 11 \\ 30\text{–}40 & 30 \\ 40\text{–}50 & 26 \\ 50\text{–}60 & 15 \\ 60\text{–}70 & 10 \end{array}$$ How many students scored $40$ or more?`,
      verify: { kind: "value", inputs: { lo: "10", h: "10", fs: "(8, 11, 30, 26, 15, 10)", x: "40" }, params: { ask: "more" } },
      options: [
        { key: "A", text: t`$51$`, correct: true, value: "51" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C01-M4", value: "26" },
        { key: "C", text: t`$81$`, correct: false, misconceptionId: "C01-M5", value: "81" },
        { key: "D", text: t`$49$`, correct: false, misconceptionId: "C01-M6", value: "49" },
      ],
      solution: {
        steps: [
          t`$40$ or more means the classes that start at or after $40$: $40$–$50$, $50$–$60$ and $60$–$70$.`,
          t`Add them: $26 + 15 + 10 = 51$ students.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Sep Q117" },
      stem: t`The Science marks of $100$ students: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 5\text{–}15 & 12 \\ 15\text{–}25 & 30 \\ 25\text{–}35 & 36 \\ 35\text{–}45 & 22 \end{array}$$ The less than cumulative frequency for $25$, the number of students who scored less than $25$, is:`,
      verify: { kind: "value", inputs: { lo: "5", h: "10", fs: "(12, 30, 36, 22)", x: "25" }, params: { ask: "less" } },
      options: [
        { key: "A", text: t`$78$`, correct: false, misconceptionId: "C01-M5", value: "78" },
        { key: "B", text: t`$58$`, correct: false, misconceptionId: "C01-M6", value: "58" },
        { key: "C", text: t`$42$`, correct: true, value: "42" },
        { key: "D", text: t`$30$`, correct: false, misconceptionId: "C01-M4", value: "30" },
      ],
      solution: {
        steps: [
          t`Less than $25$ means the classes that end at or before $25$: $5$–$15$ and $15$–$25$.`,
          t`Add them: $12 + 30 = 42$ students.`,
        ],
      },
    },
  ],
};
