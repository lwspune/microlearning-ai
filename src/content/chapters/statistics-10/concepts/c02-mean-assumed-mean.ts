import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Find the mean of 498, 499, 500, 501 and 507 in your head. **Is there a shortcut that avoids adding the big numbers?**`,
    reveal: t`Measure each number from 500: $-2, -1, 0, 1, 7$. These add to 5, so on average the numbers are $\frac{5}{5} = 1$ above 500. The mean is $500 + 1 = 501$.`,
  },
  explanation: {
    intuition: [
      t`In the direct method, big class marks times frequencies give big, slow sums.`,
      t`Instead, guess a value near the middle of the data: the **assumed mean** $A$.`,
      t`Measure each class mark from the guess: this distance is the **deviation**, $d_i = x_i - A$.`,
      t`Deviations are small numbers: negative below $A$, positive above it.`,
      t`The average deviation tells how far the true mean is from the guess.`,
      t`So the mean is the guess plus the average deviation, whatever guess you start from.`,
    ],
    formal: [
      {
        title: "Choosing A and the deviations",
        points: [
          t`Find the class mark $x_i$ of every class, as in the direct method.`,
          t`Choose $A$ as a class mark near the middle of the table.`,
          t`For each class, the **deviation** is $d_i = x_i - A$: class mark minus assumed mean.`,
          t`A class mark below $A$ gives a negative $d_i$; the class with $x_i = A$ gives $d_i = 0$.`,
          t`Example: with $A = 75$, class marks 55, 65, 75, 85 give $d_i = -20, -10, 0, 10$.`,
        ],
      },
      {
        title: "The assumed mean formula",
        points: [
          t`Multiply each deviation by its frequency to get $f_i d_i$, keeping its sign.`,
          t`Add them to get $\sum f_i d_i$: the negative terms are subtracted.`,
          t`The mean of the deviations is $\bar{d} = \frac{\sum f_i d_i}{\sum f_i}$.`,
          t`The mean of the data is $\bar{x} = A + \bar{d}$.`,
          t`In one line: $\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i}$.`,
          t`The book's table has the columns class, $x_i$, $d_i$, $f_i$ and $f_i d_i$.`,
        ],
      },
      {
        title: "Why the mean is the same",
        points: [
          t`Each class mark is $x_i = A + d_i$.`,
          t`So $\sum f_i x_i = A \sum f_i + \sum f_i d_i$.`,
          t`Divide by $\sum f_i$: $\bar{x} = A + \bar{d}$, the direct method's mean.`,
          t`Any $A$ gives the same mean; a middle class mark just keeps the numbers small.`,
          t`Check your answer: the mean lies between the smallest and largest class marks.`,
        ],
      },
    ],
    worked: {
      prompt: t`The marks of 50 students in a test are given below. Find the mean marks by the assumed mean method.$$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 10\text{–}20 & 6 \\ 20\text{–}30 & 10 \\ 30\text{–}40 & 14 \\ 40\text{–}50 & 12 \\ 50\text{–}60 & 8 \end{array}$$`,
      steps: [
        t`The class marks are 15, 25, 35, 45, 55. Take the middle one, $A = 35$.`,
        t`The deviations $d_i = x_i - 35$ are $-20, -10, 0, 10, 20$.`,
        t`$f_i d_i$: $-120, -100, 0, 120, 160$, so $\sum f_i d_i = 60$ and $\sum f_i = 50$.`,
        t`$\bar{d} = \frac{60}{50} = 1.2$, so $\bar{x} = 35 + 1.2 = 36.2$.`,
      ],
      answer: t`The mean is 36.2 marks.`,
    },
    visualSpec: t`Drag $A$ along the class marks; the deviations and the $f_i d_i$ column change, but $A + \bar{d}$ stays at the same mean.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Reporting d-bar = sum f_i d_i / sum f_i as the mean, forgetting to add A back",
      remediation: t`$\bar{d}$ only says how far the mean is from $A$. Add it to $A$: $\bar{x} = A + \bar{d}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Taking the deviation the other way round, d_i = A - x_i",
      remediation: t`The deviation is class mark minus assumed mean: $d_i = x_i - A$. Classes below $A$ get negative deviations.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Measuring each deviation from the class's lower limit instead of its class mark",
      remediation: t`Each class stands at its class mark, the middle of the class. Find $x_i$ first, then $d_i = x_i - A$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Adding the sizes of the negative f_i d_i instead of subtracting them",
      remediation: t`Keep every sign: a negative $f_i d_i$ lowers the total. Add the positive terms and subtract the negative ones.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Adding sum f_i d_i to A without dividing it by sum f_i",
      remediation: t`$\sum f_i d_i$ is a total over all the observations. Divide it by $\sum f_i$ first: $\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M2 gives the key when $\sum f_i d_i = 0$, and C02-M4 when no deviation is negative: draw items with negative and positive deviations and a non-zero total.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q2(iv)" },
      stem: t`For a certain frequency distribution, the assumed mean is $A = 1200$, $\sum f_i d_i = 700$ and $\sum f_i = 100$. Find the mean $\bar{x}$.`,
      verify: { kind: "value", inputs: { A: "1200", S: "700", N: "100" }, params: { ask: "fromsums" } },
      options: [
        { key: "A", text: t`$1207$`, correct: true, value: "1207" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C02-M1", value: "7" },
        { key: "C", text: t`$1193$`, correct: false, misconceptionId: "C02-M2", value: "1193" },
        { key: "D", text: t`$1900$`, correct: false, misconceptionId: "C02-M5", value: "1900" },
      ],
      solution: {
        steps: [
          t`$\bar{d} = \frac{\sum f_i d_i}{\sum f_i} = \frac{700}{100} = 7$.`,
          t`$\bar{x} = A + \bar{d} = 1200 + 7 = 1207$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/PS6 Q.4" },
      stem: t`The weekly wages of 120 workers are shown below. In the assumed mean method, take $A = 3000$ and $d_i = x_i - A$. Find $\sum f_i d_i$.$$\begin{array}{c|c} \text{Wages (Rupees)} & \text{Workers} \\ \hline 0\text{–}2000 & 15 \\ 2000\text{–}4000 & 35 \\ 4000\text{–}6000 & 50 \\ 6000\text{–}8000 & 20 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "[0, 2000, 4000, 6000]", hi: "[2000, 4000, 6000, 8000]", f: "[15, 35, 50, 20]", A: "3000" }, params: { ask: "sumfd" } },
      options: [
        { key: "A", text: t`$-150000$`, correct: false, misconceptionId: "C02-M2", value: "-150000" },
        { key: "B", text: t`$30000$`, correct: false, misconceptionId: "C02-M3", value: "30000" },
        { key: "C", text: t`$210000$`, correct: false, misconceptionId: "C02-M4", value: "210000" },
        { key: "D", text: t`$150000$`, correct: true, value: "150000" },
      ],
      solution: {
        steps: [
          t`The class marks are 1000, 3000, 5000, 7000.`,
          t`$d_i = x_i - 3000$: $-2000, 0, 2000, 4000$.`,
          t`$f_i d_i$: $-30000, 0, 100000, 80000$.`,
          t`$\sum f_i d_i = -30000 + 180000$ $= 150000$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q3(iii)" },
      stem: t`The diameters of the heads of 100 screws are given below. Find the mean diameter by the assumed mean method, taking $A = 40$.$$\begin{array}{c|c} \text{Diameter (mm)} & \text{Screws} \\ \hline 33\text{–}35 & 10 \\ 36\text{–}38 & 19 \\ 39\text{–}41 & 23 \\ 42\text{–}44 & 21 \\ 45\text{–}47 & 27 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "[33, 36, 39, 42, 45]", hi: "[35, 38, 41, 44, 47]", f: "[10, 19, 23, 21, 27]", A: "40" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$43.42$`, correct: false, misconceptionId: "C02-M4", value: "2171/50" },
        { key: "B", text: t`$41.08$`, correct: true, value: "1027/25" },
        { key: "C", text: t`$38.92$`, correct: false, misconceptionId: "C02-M2", value: "973/25" },
        { key: "D", text: t`$40.08$`, correct: false, misconceptionId: "C02-M3", value: "1002/25" },
      ],
      solution: {
        steps: [
          t`The class marks are 34, 37, 40, 43, 46, so $d_i = -6, -3, 0, 3, 6$.`,
          t`$f_i d_i$: $-60, -57, 0, 63, 162$, so $\sum f_i d_i = 108$.`,
          t`$\bar{d} = \frac{108}{100} = 1.08$.`,
          t`$\bar{x} = 40 + 1.08 = 41.08$, so the mean diameter is 41.08 mm.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q4(iii)" },
      stem: t`The daily commission of 100 salesmen is given below. Find the mean daily commission (in rupees) by the assumed mean method, taking $A = 150$.$$\begin{array}{c|c} \text{Commission (Rupees)} & \text{Salesmen} \\ \hline 100\text{–}120 & 20 \\ 120\text{–}140 & 45 \\ 140\text{–}160 & 22 \\ 160\text{–}180 & 9 \\ 180\text{–}200 & 4 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "[100, 120, 140, 160, 180]", hi: "[120, 140, 160, 180, 200]", f: "[20, 45, 22, 9, 4]", A: "150" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$170.4$`, correct: false, misconceptionId: "C02-M4", value: "852/5" },
        { key: "B", text: t`$136.4$`, correct: true, value: "682/5" },
        { key: "C", text: t`$-13.6$`, correct: false, misconceptionId: "C02-M1", value: "-68/5" },
        { key: "D", text: t`$126.4$`, correct: false, misconceptionId: "C02-M3", value: "632/5" },
      ],
      solution: {
        steps: [
          t`The class marks are 110, 130, 150, 170, 190, so $d_i = -40, -20, 0, 20, 40$.`,
          t`$f_i d_i$: $-800, -900, 0, 180, 160$, so $\sum f_i d_i = -1360$.`,
          t`$\bar{d} = \frac{-1360}{100} = -13.6$.`,
          t`$\bar{x} = 150 - 13.6 = 136.4$, that is ₹ 136.40.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Assumed mean Ex.1" },
      stem: t`The daily sale of 100 vegetable vendors is given below. Find the mean daily sale (in rupees) by the assumed mean method, taking $A = 2250$.$$\begin{array}{c|c} \text{Sale (Rupees)} & \text{Vendors} \\ \hline 1000\text{–}1500 & 15 \\ 1500\text{–}2000 & 20 \\ 2000\text{–}2500 & 35 \\ 2500\text{–}3000 & 30 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "[1000, 1500, 2000, 2500]", hi: "[1500, 2000, 2500, 3000]", f: "[15, 20, 35, 30]", A: "2250" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$2650$`, correct: false, misconceptionId: "C02-M4", value: "2650" },
        { key: "B", text: t`$2150$`, correct: true, value: "2150" },
        { key: "C", text: t`$2350$`, correct: false, misconceptionId: "C02-M2", value: "2350" },
        { key: "D", text: t`$1900$`, correct: false, misconceptionId: "C02-M3", value: "1900" },
      ],
      solution: {
        steps: [
          t`The class marks are 1250, 1750, 2250, 2750, so $d_i = -1000, -500, 0, 500$.`,
          t`$f_i d_i$: $-15000, -10000, 0, 15000$, so $\sum f_i d_i = -10000$.`,
          t`$\bar{d} = \frac{-10000}{100} = -100$.`,
          t`$\bar{x} = 2250 - 100 = 2150$, that is ₹ 2,150.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q3(B)(iv)" },
      stem: t`The toll paid by 420 vehicles is shown below. In the assumed mean method, take $A = 550$ and $d_i = x_i - A$. Find $\sum f_i d_i$.$$\begin{array}{c|c} \text{Toll (Rupees)} & \text{Vehicles} \\ \hline 300\text{–}400 & 80 \\ 400\text{–}500 & 110 \\ 500\text{–}600 & 120 \\ 600\text{–}700 & 70 \\ 700\text{–}800 & 40 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "[300, 400, 500, 600, 700]", hi: "[400, 500, 600, 700, 800]", f: "[80, 110, 120, 70, 40]", A: "550" }, params: { ask: "sumfd" } },
      options: [
        { key: "A", text: t`$-12000$`, correct: true, value: "-12000" },
        { key: "B", text: t`$12000$`, correct: false, misconceptionId: "C02-M2", value: "12000" },
        { key: "C", text: t`$-33000$`, correct: false, misconceptionId: "C02-M3", value: "-33000" },
        { key: "D", text: t`$42000$`, correct: false, misconceptionId: "C02-M4", value: "42000" },
      ],
      solution: {
        steps: [
          t`The class marks are 350, 450, 550, 650, 750.`,
          t`$d_i = x_i - 550$: $-200, -100, 0, 100, 200$.`,
          t`$f_i d_i$: $-16000, -11000, 0, 7000, 8000$.`,
          t`$\sum f_i d_i = -27000 + 15000$ $= -12000$.`,
        ],
      },
    },
  ],
};
