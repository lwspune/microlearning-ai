import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A shoe shop sold pairs of sizes $6$, $7$, $8$, $7$, $9$, $7$, $6$, $7$ today. The mean size is $7.125$, and no shoe has that size. Which size should the shop order most?`,
    reveal: t`Size $7$: it was sold $4$ times, more often than any other size. The value that occurs most often is the **mode**.`,
  },
  explanation: {
    intuition: [
      t`The **mode** is the observation that occurs the maximum number of times.`,
      t`The number of times a value occurs is its **frequency**.`,
      t`So the mode is the value with the highest frequency.`,
      t`The mode is always one of the observations themselves.`,
      t`In $2$, $5$, $5$, $8$, $5$, $9$ the value $5$ occurs $3$ times, so the mode is $5$.`,
      t`The mode is a value of the data, not the number of times it occurs.`,
    ],
    formal: [
      {
        title: "Mode of raw data",
        points: [
          t`Arrange the observations in ascending order, so equal values stand together.`,
          t`Count how many times each value occurs.`,
          t`The value that occurs the maximum number of times is the mode.`,
          t`Take the data $12$, $8$, $12$, $10$, $8$, $12$.`,
          t`In ascending order: $8$, $8$, $10$, $12$, $12$, $12$.`,
          t`$12$ occurs $3$ times, $8$ twice and $10$ once, so the mode is $12$.`,
        ],
      },
      {
        title: "Mode from a frequency table",
        points: [
          t`In a frequency table the counting is already done.`,
          t`Look down the frequency column and find the highest frequency.`,
          t`The mode is the **value** standing against that frequency.`,
          t`Sizes $4$, $5$, $6$ with frequencies $6$, $11$, $3$: the highest frequency is $11$.`,
          t`So the mode is $5$, the value against $11$; it is not $11$ itself.`,
          t`Do not multiply $f_i \times x_i$ here; that product is for the mean.`,
        ],
      },
      {
        title: "More than one mode",
        points: [
          t`Sometimes two values share the highest frequency.`,
          t`Then both values are modes; give both of them.`,
          t`Data with two modes is called **bimodal**.`,
          t`Data $3$, $4$, $4$, $6$, $7$, $7$: $4$ and $7$ each occur twice.`,
          t`So the modes are $4$ and $7$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A hockey player scored $5$, $4$, $0$, $2$, $2$, $4$, $4$, $3$, $3$ goals in $9$ matches. Find the mode of the data.`,
      steps: [
        t`Ascending order: $0$, $2$, $2$, $3$, $3$, $4$, $4$, $4$, $5$.`,
        t`Count each value: $0$ once, $2$ twice, $3$ twice, $4$ three times, $5$ once.`,
        t`The highest frequency is $3$, and only the value $4$ has it.`,
        t`So the mode is $4$ goals (not $3$, which is how often it occurs).`,
      ],
      answer: t`The mode is $4$ goals.`,
    },
    visualSpec: t`A row of value cards that stack into columns as the student drops equal cards together; the tallest column lights up as the mode, and two equal tallest columns both light up.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Gives the highest frequency (how many times the mode occurs) as the mode, instead of the observation.",
      remediation: "The highest frequency only tells you **which** value is the mode. The mode is the observation that has that frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Finds the mean (sum of observations divided by their number) instead of the mode.",
      remediation: "The mean uses every observation. The mode is simply the value that occurs **most often**; count and pick it.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Finds the median (middle of the ordered data) instead of the mode.",
      remediation: "The median is the middle value. The mode is the value that occurs the **maximum number of times**, wherever it stands.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "When two values share the highest frequency, gives only the first of them.",
      remediation: "When two values share the highest frequency, **both** are modes. The data is bimodal; give both values.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`From a frequency table, picks the value with the largest product $f_i \times x_i$, mixing up the table for the mean.`,
      remediation: t`The products $f_i x_i$ are for the mean. For the mode, look only at the frequencies and take the value with the highest one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Takes the largest observation (the 'highest' value) as the mode.",
      remediation: "The mode is about **how often** a value occurs, not how big it is. Pick the value with the highest frequency.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(viii)" },
      stem: t`What is the mode of $19$, $19$, $15$, $20$, $25$, $15$, $20$, $15$?`,
      verify: { kind: "value", inputs: { obs: "(19, 19, 15, 20, 25, 15, 20, 15)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$15$`, correct: true, value: "15" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C08-M1", value: "3" },
        { key: "C", text: t`$18.5$`, correct: false, misconceptionId: "C08-M2", value: "37/2" },
        { key: "D", text: t`$19$`, correct: false, misconceptionId: "C08-M3", value: "19" },
      ],
      solution: {
        steps: [
          t`Ascending order: $15$, $15$, $15$, $19$, $19$, $20$, $20$, $25$.`,
          t`$15$ occurs $3$ times; $19$ and $20$ occur twice; $25$ once.`,
          t`The value that occurs most often is $15$, so the mode is $15$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q12" },
      stem: t`The weights of $10$ students (in kg) are $40$, $35$, $42$, $43$, $37$, $35$, $37$, $37$, $42$, $37$. Find the mode of the data.`,
      verify: { kind: "value", inputs: { obs: "(40, 35, 42, 43, 37, 35, 37, 37, 42, 37)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$43$`, correct: false, misconceptionId: "C08-M6", value: "43" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M1", value: "4" },
        { key: "C", text: t`$38.5$`, correct: false, misconceptionId: "C08-M2", value: "77/2" },
        { key: "D", text: t`$37$`, correct: true, value: "37" },
      ],
      solution: {
        steps: [
          t`Ascending order: $35$, $35$, $37$, $37$, $37$, $37$, $40$, $42$, $42$, $43$.`,
          t`$37$ occurs $4$ times; $35$ and $42$ twice; $40$ and $43$ once.`,
          t`So the mode is $37$ kg.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.6" },
      stem: t`The ages of the workers in a factory are given below. Find the mode of their ages (in years).$$\begin{array}{c|c} \text{Age (years)} & \text{Workers} \\ \hline 19 & 5 \\ 21 & 15 \\ 25 & 13 \\ 27 & 15 \\ 30 & 7 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(19, 21, 25, 27, 30)", f: "(5, 15, 13, 15, 7)" }, params: { kind: "table" } },
      options: [
        { key: "A", text: t`$21$`, correct: false, misconceptionId: "C08-M4", value: "21" },
        { key: "B", text: t`$15$`, correct: false, misconceptionId: "C08-M1", value: "15" },
        { key: "C", text: t`$30$`, correct: false, misconceptionId: "C08-M6", value: "30" },
        { key: "D", text: t`$21$ and $27$`, correct: true, value: "{21, 27}" },
      ],
      solution: {
        steps: [
          t`The highest frequency in the table is $15$.`,
          t`It stands against two ages, $21$ and $27$.`,
          t`So the data is bimodal: the modes are $21$ years and $27$ years.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q14" },
      stem: t`Find the mode of the marks in this table.$$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 35 & 9 \\ 36 & 7 \\ 37 & 9 \\ 38 & 4 \\ 39 & 4 \\ 40 & 2 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(35, 36, 37, 38, 39, 40)", f: "(9, 7, 9, 4, 4, 2)" }, params: { kind: "table" } },
      options: [
        { key: "A", text: t`$35$`, correct: false, misconceptionId: "C08-M4", value: "35" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C08-M1", value: "9" },
        { key: "C", text: t`$35$ and $37$`, correct: true, value: "{35, 37}" },
        { key: "D", text: t`$36.8$`, correct: false, misconceptionId: "C08-M2", value: "184/5" },
      ],
      solution: {
        steps: [
          t`The highest frequency in the table is $9$.`,
          t`It stands against two marks, $35$ and $37$.`,
          t`So the data is bimodal: the modes are $35$ and $37$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q4" },
      stem: t`The monthly salaries (in rupees) of $30$ workers in a factory are grouped below. Find the mode of the salaries.$$\begin{array}{c|c} \text{Salary} & \text{Workers} \\ \hline 3000 & 8 \\ 4000 & 7 \\ 5000 & 5 \\ 6000 & 4 \\ 7000 & 3 \\ 8000 & 2 \\ 9000 & 1 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(3000, 4000, 5000, 6000, 7000, 8000, 9000)", f: "(8, 7, 5, 4, 3, 2, 1)" }, params: { kind: "table" } },
      options: [
        { key: "A", text: t`$4900$`, correct: false, misconceptionId: "C08-M2", value: "4900" },
        { key: "B", text: t`$3000$`, correct: true, value: "3000" },
        { key: "C", text: t`$4000$`, correct: false, misconceptionId: "C08-M5", value: "4000" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C08-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`The highest frequency in the table is $8$.`,
          t`It stands against the salary $3000$.`,
          t`So the mode of the salaries is ₹ 3,000.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Central Tendency SolvedEx.5" },
      stem: t`Find the mode of $90$, $55$, $67$, $55$, $75$, $75$, $40$, $35$, $55$, $95$.`,
      verify: { kind: "value", inputs: { obs: "(90, 55, 67, 55, 75, 75, 40, 35, 55, 95)" }, params: { kind: "raw" } },
      options: [
        { key: "A", text: t`$95$`, correct: false, misconceptionId: "C08-M6", value: "95" },
        { key: "B", text: t`$64.2$`, correct: false, misconceptionId: "C08-M2", value: "321/5" },
        { key: "C", text: t`$55$`, correct: true, value: "55" },
        { key: "D", text: t`$61$`, correct: false, misconceptionId: "C08-M3", value: "61" },
      ],
      solution: {
        steps: [
          t`Ascending order: $35$, $40$, $55$, $55$, $55$, $67$, $75$, $75$, $90$, $95$.`,
          t`$55$ occurs $3$ times; $75$ occurs twice; every other value once.`,
          t`So the mode is $55$.`,
        ],
      },
    },
  ],
};
