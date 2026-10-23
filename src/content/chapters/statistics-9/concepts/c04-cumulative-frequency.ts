import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`In a test, $6$ students scored in $0$–$10$, $9$ in $10$–$20$ and $8$ in $20$–$30$. How many students scored less than $20$?`,
    reveal: t`Everyone in $0$–$10$ and $10$–$20$ scored below $20$: $6 + 9 = 15$ students. Adding the frequencies down the table like this gives the **cumulative frequency**.`,
  },
  explanation: {
    intuition: [
      t`A frequency table tells how many observations fall in each class.`,
      t`Often we want a running total instead: how many are below some value.`,
      t`**Cumulative** means added up step by step.`,
      t`The **cumulative frequency** of a class adds its frequency to the frequencies on one side of it.`,
      t`Adding from the top gives the **less than type**; adding from the bottom gives the **equal to or more than type**.`,
      t`The last running total always equals $N$, the total number of observations.`,
    ],
    formal: [
      {
        title: "Less than type",
        points: [
          t`Take the five classes $0$–$10$, $10$–$20$, …, $40$–$50$ with frequencies $2, 5, 8, 6, 4$.`,
          t`The first class's cumulative frequency is its own frequency: $2$.`,
          t`Each next one is the previous cumulative frequency plus the class's frequency.`,
          t`$2 + 5 = 7$, then $7 + 8 = 15$, then $15 + 6 = 21$.`,
          t`Last: $21 + 4 = 25$, which is $N$.`,
          t`So the less than column reads $2, 7, 15, 21, 25$ from top to bottom.`,
        ],
      },
      {
        title: "Reading a less than entry",
        points: [
          t`The less than entry of a class counts the observations below its **upper limit**.`,
          t`For $20$–$30$ the entry is $15$: $15$ observations are less than $30$.`,
          t`A value equal to $30$ is in $30$–$40$, so it is not counted.`,
          t`To answer “how many are less than $40$?”, use the class that **ends** at $40$: $30$–$40$.`,
          t`The answer is $21$.`,
        ],
      },
      {
        title: "Equal to or more than type",
        points: [
          t`Now add from the **bottom** of the table upwards.`,
          t`The last class's entry is its own frequency: $4$.`,
          t`Going up: $4 + 6 = 10$, $10 + 8 = 18$, $18 + 5 = 23$.`,
          t`Top: $23 + 2 = 25$, which is again $N$.`,
          t`So the column reads $25, 23, 18, 10, 4$ from top to bottom.`,
        ],
      },
      {
        title: "Reading an or-more entry",
        points: [
          t`The or-more entry of a class counts the observations at or above its **lower limit**.`,
          t`For $20$–$30$ the entry is $18$: $18$ observations are $20$ or more.`,
          t`To answer “how many are $30$ or more?”, use the class that **starts** at $30$: $30$–$40$.`,
          t`The answer is $10$.`,
          t`The first class's or-more entry is always $N$: every observation is at least its lower limit.`,
        ],
      },
      {
        title: "Checks",
        points: [
          t`Less than entries grow down the table; or-more entries shrink.`,
          t`The less than column ends at $N$; the or-more column starts at $N$.`,
          t`Less than $30$ plus $30$ or more is everyone: $15 + 10 = 25 = N$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The ages of $30$ people are grouped as $10$–$20$: $4$, $20$–$30$: $8$, $30$–$40$: $11$, $40$–$50$: $7$. How many people are $20$ years or older?`,
      steps: [
        t`“$20$ or older” is an equal to or more than question, so add from the bottom.`,
        t`The class that **starts** at $20$ is $20$–$30$; we need its or-more entry.`,
        t`From the bottom: $7$, then $7 + 11 = 18$, then $18 + 8 = 26$.`,
        t`Check: $4$ people are under $20$, and $4 + 26 = 30 = N$.`,
      ],
      answer: t`$26$ people are $20$ years or older.`,
    },
    visualSpec: t`A frequency table beside a stack of blocks; tapping a class fills its cumulative box by stacking that class's blocks on all the blocks above it, or below it for the or-more type.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Gives the class's own frequency as its cumulative frequency, forgetting to add the other classes.",
      remediation: "A cumulative frequency is a running total: add the class's frequency to all the frequencies before it (less than type) or after it (or-more type).",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Adds in the wrong direction: builds a less than entry from the class downwards, or an or-more entry from the top.",
      remediation: "Less than type adds from the **top** down to the class. Equal to or more than type adds from the **bottom** up to the class.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Picks the class on the wrong side of the given value: for “less than $x$” the class starting at $x$, for “$x$ or more” the class ending at $x$.`,
      remediation: t`A value equal to $x$ belongs to the class that **starts** at $x$. So “less than $x$” stops at the class that ends at $x$, and “$x$ or more” begins at the class that starts at $x$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: "Leaves the class itself out: adds only the classes before it (less than) or after it (or-more).",
      remediation: "The cumulative frequency of a class **includes** its own frequency: the previous running total plus this class's frequency.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.4 Q1" },
      stem: t`Complete the less than type cumulative frequency table of heights of $45$ students. What number goes in the box?$$\begin{array}{c|c|c} \text{Height (cm)} & \text{Students} & \text{Less than} \\ \hline 150\text{–}153 & 5 & 5 \\ 153\text{–}156 & 7 & 12 \\ 156\text{–}159 & 15 & \square \\ 159\text{–}162 & 10 & 37 \\ 162\text{–}165 & 5 & 42 \\ 165\text{–}168 & 3 & 45 \end{array}$$`,
      verify: { kind: "value", inputs: { f: "(5, 7, 15, 10, 5, 3)", k: "2" }, params: { type: "lt" } },
      options: [
        { key: "A", text: t`$33$`, correct: false, misconceptionId: "C04-M2", value: "33" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C04-M4", value: "12" },
        { key: "C", text: t`$27$`, correct: true, value: "27" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C04-M1", value: "15" },
      ],
      solution: {
        steps: [
          t`A less than entry is the previous entry plus the class's own frequency.`,
          t`The entry before the box is $12$, and the class $156$–$159$ has frequency $15$.`,
          t`$12 + 15 = 27$. Check: $27 + 10 = 37$, the next entry.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.4 Q2" },
      stem: t`The monthly incomes of $87$ individuals are grouped as follows.$$\begin{array}{c|c} \text{Income (rupees)} & \text{Individuals} \\ \hline 1000\text{–}5000 & 45 \\ 5000\text{–}10000 & 19 \\ 10000\text{–}15000 & 16 \\ 15000\text{–}20000 & 2 \\ 20000\text{–}25000 & 5 \end{array}$$What is the equal to or more than type cumulative frequency of the class $10000$–$15000$?`,
      verify: { kind: "value", inputs: { f: "(45, 19, 16, 2, 5)", k: "2" }, params: { type: "ge" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C04-M1", value: "16" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C04-M2", value: "80" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C04-M4", value: "7" },
        { key: "D", text: t`$23$`, correct: true, value: "23" },
      ],
      solution: {
        steps: [
          t`For the or-more type, add from the bottom up to the class.`,
          t`From the bottom: $5$, then $5 + 2 = 7$, then $7 + 16 = 23$.`,
          t`The cumulative frequency of $10000$–$15000$ is $23$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q6(iii)" },
      stem: t`The marks out of $80$ of $68$ students are grouped as follows.$$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 30\text{–}40 & 14 \\ 40\text{–}50 & 20 \\ 50\text{–}60 & 11 \\ 60\text{–}70 & 12 \\ 70\text{–}80 & 9 \\ 80\text{–}90 & 2 \end{array}$$How many students scored less than $60$ marks?`,
      verify: { kind: "value", inputs: { f: "(14, 20, 11, 12, 9, 2)", k: "2" }, params: { type: "lt", ask: "count" } },
      options: [
        { key: "A", text: t`$57$`, correct: false, misconceptionId: "C04-M3", value: "57" },
        { key: "B", text: t`$34$`, correct: false, misconceptionId: "C04-M4", value: "34" },
        { key: "C", text: t`$45$`, correct: true, value: "45" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C04-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`“Less than $60$” stops at the class that ends at $60$: $50$–$60$.`,
          t`Add from the top: $14 + 20 + 11 = 45$.`,
          t`So $45$ students scored less than $60$ marks.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q7(i)" },
      stem: t`The marks out of $80$ of $68$ students are grouped as follows.$$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 30\text{–}40 & 14 \\ 40\text{–}50 & 20 \\ 50\text{–}60 & 11 \\ 60\text{–}70 & 12 \\ 70\text{–}80 & 9 \\ 80\text{–}90 & 2 \end{array}$$How many students scored $70$ marks or more?`,
      verify: { kind: "value", inputs: { f: "(14, 20, 11, 12, 9, 2)", k: "4" }, params: { type: "ge", ask: "count" } },
      options: [
        { key: "A", text: t`$66$`, correct: false, misconceptionId: "C04-M2", value: "66" },
        { key: "B", text: t`$23$`, correct: false, misconceptionId: "C04-M3", value: "23" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C04-M4", value: "2" },
        { key: "D", text: t`$11$`, correct: true, value: "11" },
      ],
      solution: {
        steps: [
          t`“$70$ or more” begins at the class that starts at $70$: $70$–$80$.`,
          t`Add from the bottom: $2 + 9 = 11$.`,
          t`So $11$ students scored $70$ marks or more.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(x)" },
      stem: t`$$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 0\text{–}10 & 7 \\ 10\text{–}20 & 3 \\ 20\text{–}30 & 12 \\ 30\text{–}40 & 13 \\ 40\text{–}50 & 2 \end{array}$$What is the less than type cumulative frequency of the class $30$–$40$?`,
      verify: { kind: "value", inputs: { f: "(7, 3, 12, 13, 2)", k: "3" }, params: { type: "lt" } },
      options: [
        { key: "A", text: t`$22$`, correct: false, misconceptionId: "C04-M4", value: "22" },
        { key: "B", text: t`$35$`, correct: true, value: "35" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C04-M1", value: "13" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C04-M2", value: "15" },
      ],
      solution: {
        steps: [
          t`The less than entry adds from the top down to the class $30$–$40$.`,
          t`$7 + 3 + 12 + 13 = 35$.`,
          t`The cumulative frequency of $30$–$40$ is $35$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.4 Q3(iii)" },
      stem: t`The marks out of $100$ of $62$ students are grouped in the classes $0$–$10$, $10$–$20$, …, $90$–$100$. In that order, the frequencies are $3, 3, 9, 9, 13, 6, 5, 6, 5, 3$. How many students obtained $60$ marks or more?`,
      verify: { kind: "value", inputs: { f: "(3, 3, 9, 9, 13, 6, 5, 6, 5, 3)", k: "6" }, params: { type: "ge", ask: "count" } },
      options: [
        { key: "A", text: t`$19$`, correct: true, value: "19" },
        { key: "B", text: t`$48$`, correct: false, misconceptionId: "C04-M2", value: "48" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C04-M3", value: "25" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C04-M4", value: "14" },
      ],
      solution: {
        steps: [
          t`“$60$ or more” begins at the class that starts at $60$: $60$–$70$.`,
          t`The classes $60$–$70$ to $90$–$100$ have frequencies $5, 6, 5, 3$.`,
          t`$5 + 6 + 5 + 3 = 19$, so $19$ students obtained $60$ marks or more.`,
        ],
      },
    },
  ],
};
