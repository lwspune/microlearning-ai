import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`$40$ students: $15$ scored in $0$–$10$, $10$ in $10$–$20$ and $15$ in $20$–$30$. The middle student is in $10$–$20$. **Which mark is the median?**`,
    reveal: t`The middle is the $20$th student. $15$ students are below $10$, so we need $5$ more of the $10$ in $10$–$20$. Spread evenly, that is halfway in: about $15$ marks.`,
  },
  explanation: {
    intuition: [
      t`The **median** is the middle value: half the observations lie below it and half above it.`,
      t`A grouped table hides each observation. It only tells how many lie in each class.`,
      t`Add the frequencies from the top. These running totals are the **cumulative frequencies**.`,
      t`The class where the running total first reaches half the total is the **median class**.`,
      t`Imagine the observations of that class spread evenly across it.`,
      t`Move into the class just as far as the missing count needs. That point is the median.`,
    ],
    formal: [
      {
        title: "Cumulative frequency",
        points: [
          t`The **cumulative frequency** ($cf$) of a class is its frequency plus all the frequencies above it.`,
          t`Classes $0$–$10$, $10$–$20$, $20$–$30$, $30$–$40$ with frequencies $5, 10, 20, 5$.`,
          t`Their cumulative frequencies are $5, 15, 35, 40$.`,
          t`The last cumulative frequency is the total frequency $N$, here $40$.`,
          t`A 'less than' table already lists cumulative frequencies: 'less than $20$' counts everything below $20$.`,
          t`To get a class's frequency back, subtract the $cf$ before it: $15 - 5 = 10$.`,
        ],
      },
      {
        title: "The median class",
        points: [
          t`The median is the observation at position $\frac{N}{2}$. Here $\frac{N}{2} = \frac{40}{2} = 20$.`,
          t`The **median class** is the first class whose $cf$ is equal to or more than $\frac{N}{2}$.`,
          t`The $cf$ values are $5, 15, 35, 40$; the first to reach $20$ is $35$.`,
          t`So the median class is $20$–$30$.`,
          t`It need not be the class with the highest frequency.`,
          t`Grouped data uses $\frac{N}{2}$, not $\frac{N + 1}{2}$; that is for a list of single values.`,
        ],
      },
      {
        title: "The median formula",
        points: [
          t`Median $= L + \left[\frac{N/2 - cf}{f}\right] \times h$`,
          t`$L$ is the lower limit of the median class, and $h$ is its class width.`,
          t`$f$ is the frequency of the median class.`,
          t`$cf$ is the cumulative frequency of the class **before** the median class.`,
          t`Here $L = 20$, $cf = 15$, $f = 20$, $h = 10$.`,
          t`Median $= 20 + \frac{20 - 15}{20} \times 10$ $= 20 + 2.5 = 22.5$, inside $20$–$30$.`,
        ],
      },
      {
        title: "Why the class before",
        points: [
          t`The $cf$ of the class before counts the observations already below $L$.`,
          t`So $\frac{N}{2} - cf$ more observations are needed inside the median class.`,
          t`The class holds $f$ observations across a width $h$.`,
          t`So we go the fraction $\frac{N/2 - cf}{f}$ of the way across it.`,
          t`That fraction of $h$, added to $L$, gives the median.`,
        ],
      },
      {
        title: "Inclusive classes",
        points: [
          t`**Inclusive** classes like $10$–$19$, $20$–$29$ leave a gap of $1$ between $19$ and $20$.`,
          t`Make them continuous: take $0.5$ off each lower limit and add $0.5$ to each upper limit.`,
          t`$10$–$19$ becomes $9.5$–$19.5$, and $20$–$29$ becomes $19.5$–$29.5$.`,
          t`Now $L$ is the new lower limit, such as $19.5$.`,
          t`The width is $h = 29.5 - 19.5 = 10$, not $29 - 20 = 9$.`,
        ],
      },
      {
        title: "Finding a missing frequency",
        points: [
          t`Classes $0$–$10$ to $30$–$40$ have frequencies $5, x, 20, 5$, and the median is $22.5$.`,
          t`The median lies in its median class, so the median class is $20$–$30$.`,
          t`$N = 30 + x$ includes $x$, and the class before has $cf = 5 + x$.`,
          t`The formula gives $22.5 = 20 + \frac{N/2 - cf}{20} \times 10$.`,
          t`So $\frac{30 + x}{2} - (5 + x) = 5$.`,
          t`That is $10 - \frac{x}{2} = 5$, so $x = 10$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a software company, $150$ workers work $8$–$10$ hours daily, $500$ work $10$–$12$, $300$ work $12$–$14$ and $50$ work $14$–$16$. Find the median number of hours.`,
      steps: [
        t`$N = 150 + 500 + 300 + 50$ $= 1000$, so $\frac{N}{2} = 500$.`,
        t`Cumulative frequencies: $150, 650, 950, 1000$. The first to reach $500$ is $650$, so the median class is $10$–$12$.`,
        t`$L = 10$, $cf = 150$ (the class before), $f = 500$, $h = 2$.`,
        t`Median $= 10 + \frac{500 - 150}{500} \times 2$ $= 10 + 1.4 = 11.4$.`,
      ],
      answer: t`$11.4$ hours`,
    },
    visualSpec: t`A cumulative-frequency bar that fills class by class, stopping at the $\frac{N}{2}$ mark inside the median class.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Uses the cumulative frequency of the median class itself instead of the class before it.",
      remediation: t`In the formula, $cf$ is the cumulative frequency of the class **before** the median class: those observations are already below $L$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Takes the class with the highest frequency as the median class.",
      remediation: t`The highest frequency marks the modal class. The median class is the first class whose cumulative frequency reaches $\frac{N}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Uses inclusive classes as printed: L is the printed lower limit and h is upper limit minus lower limit.",
      remediation: t`Make inclusive classes continuous first: $20$–$29$ becomes $19.5$–$29.5$, so $L = 19.5$ and $h = 10$.`,
      fallback: { kind: "ext", topic: "inclusive and continuous classes (Std IX Statistics)" },
    },
    {
      id: "C04-M4",
      mistake: "Uses (N + 1)/2, the position rule for ungrouped data, in place of N/2.",
      remediation: t`For grouped data the formula uses $\frac{N}{2}$. The rule $\frac{N + 1}{2}$ is for a list of single observations.`,
      fallback: { kind: "ext", topic: "median of ungrouped data (Std IX Statistics)" },
    },
    {
      id: "C04-M5",
      mistake: "Reads a 'less than' cumulative column as the class frequencies.",
      remediation: t`'Less than' numbers are already cumulative. Subtract the one before to get each class's frequency; the last one is $N$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Leaves the missing frequency out of the total N, though it keeps it in cf or f.",
      remediation: t`The missing frequency is part of the total: $N$ includes $x$, so $\frac{N}{2}$ contains $x$ too.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M2 gives the key whenever the modal class is the median class; diagnose it only on tables where they differ.",
    "C04-M3 shows only on inclusive classes (10-19, 20-29), C04-M5 only on 'less than' tables, C04-M6 only on missing-frequency items.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q4(iii)" },
      stem: t`The funds collected by $110$ students for flood affected people are shown below. $$\begin{array}{c|c} \text{Fund (rupees)} & \text{Students} \\ \hline 10\text{–}20 & 10 \\ 20\text{–}30 & 40 \\ 30\text{–}40 & 20 \\ 40\text{–}50 & 20 \\ 50\text{–}60 & 8 \\ 60\text{–}70 & 6 \\ 70\text{–}80 & 6 \end{array}$$ The median fund, in rupees, is:`,
      verify: { kind: "value", inputs: { lo: "(10, 20, 30, 40, 50, 60, 70)", hi: "(20, 30, 40, 50, 60, 70, 80)", f: "(10, 40, 20, 20, 8, 6, 6)" } },
      options: [
        { key: "A", text: t`$31.25$`, correct: false, misconceptionId: "C04-M2", value: "125/4" },
        { key: "B", text: t`$32.75$`, correct: false, misconceptionId: "C04-M4", value: "131/4" },
        { key: "C", text: t`$32.5$`, correct: true, value: "65/2" },
        { key: "D", text: t`$22.5$`, correct: false, misconceptionId: "C04-M1", value: "45/2" },
      ],
      solution: {
        steps: [
          t`$N = 110$, so $\frac{N}{2} = 55$. Cumulative frequencies: $10, 50, 70, \dots$`,
          t`$70$ is the first to reach $55$, so the median class is $30$–$40$: $L = 30$, $cf = 50$, $f = 20$, $h = 10$.`,
          t`Median $= 30 + \frac{55 - 50}{20} \times 10$ $= 30 + 2.5 = 32.5$ rupees.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Median cf SolvedEx.1" },
      stem: t`The distances travelled by $60$ buses in a day are shown below. $$\begin{array}{c|c} \text{Distance (km)} & \text{Buses} \\ \hline 200\text{–}209 & 4 \\ 210\text{–}219 & 20 \\ 220\text{–}229 & 16 \\ 230\text{–}239 & 8 \\ 240\text{–}249 & 12 \end{array}$$ The median distance, in km, is:`,
      verify: { kind: "value", inputs: { lo: "(200, 210, 220, 230, 240)", hi: "(209, 219, 229, 239, 249)", f: "(4, 20, 16, 8, 12)" } },
      options: [
        { key: "A", text: t`$213.25$`, correct: false, misconceptionId: "C04-M1", value: "853/4" },
        { key: "B", text: t`$222.5$`, correct: false, misconceptionId: "C04-M2", value: "445/2" },
        { key: "C", text: t`$223.375$`, correct: false, misconceptionId: "C04-M3", value: "1787/8" },
        { key: "D", text: t`$223.25$`, correct: true, value: "893/4" },
      ],
      solution: {
        steps: [
          t`Make the classes continuous: $219.5$–$229.5$ and so on.`,
          t`$N = 60$, so $\frac{N}{2} = 30$. Cumulative frequencies: $4, 24, 40, \dots$, so the median class is $219.5$–$229.5$.`,
          t`$L = 219.5$, $cf = 24$, $f = 16$, $h = 10$.`,
          t`Median $= 219.5 + \frac{30 - 24}{16} \times 10$ $= 219.5 + 3.75 = 223.25$ km.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Median cf SolvedEx.2" },
      stem: t`The ages of the persons who visited a museum on a day are shown below. $$\begin{array}{c|c} \text{Age (years)} & \text{Persons} \\ \hline \text{Less than }10 & 4 \\ \text{Less than }20 & 12 \\ \text{Less than }30 & 25 \\ \text{Less than }40 & 45 \\ \text{Less than }50 & 60 \\ \text{Less than }60 & 80 \end{array}$$ The median age, in years, is:`,
      verify: { kind: "value", inputs: { lo: "(0, 10, 20, 30, 40, 50)", hi: "(10, 20, 30, 40, 50, 60)", f: "(4, 12, 25, 45, 60, 80)" }, params: { table: "less" } },
      options: [
        { key: "A", text: t`$37.75$`, correct: false, misconceptionId: "C04-M4", value: "151/4" },
        { key: "B", text: t`$44.5$`, correct: false, misconceptionId: "C04-M5", value: "89/2" },
        { key: "C", text: t`$37.5$`, correct: true, value: "75/2" },
        { key: "D", text: t`$27.5$`, correct: false, misconceptionId: "C04-M1", value: "55/2" },
      ],
      solution: {
        steps: [
          t`The numbers are cumulative. Frequencies: $4, 8, 13, 20, 15, 20$, and $N = 80$.`,
          t`$\frac{N}{2} = 40$. The cumulative frequency first reaches $40$ at $45$, so the median class is $30$–$40$.`,
          t`$L = 30$, $cf = 25$, $f = 20$, $h = 10$.`,
          t`Median $= 30 + \frac{40 - 25}{20} \times 10$ $= 30 + 7.5 = 37.5$ years.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Median SolvedEx.1" },
      stem: t`The marks of some students in a practice examination are shown below. $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 0\text{–}20 & 4 \\ 20\text{–}40 & 16 \\ 40\text{–}60 & x \\ 60\text{–}80 & 40 \\ 80\text{–}100 & 10 \end{array}$$ The median of the marks is $55$. The value of $x$ is:`,
      verify: { kind: "value", inputs: { lo: "(0, 20, 40, 60, 80)", hi: "(20, 40, 60, 80, 100)", f: "(4, 16, x, 40, 10)", m: "55" }, params: { ask: "missing" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C04-M1", value: "12" },
        { key: "B", text: t`$62$`, correct: false, misconceptionId: "C04-M4", value: "62" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C04-M6", value: "20" },
        { key: "D", text: t`$60$`, correct: true, value: "60" },
      ],
      solution: {
        steps: [
          t`$N = 70 + x$. The median $55$ lies in $40$–$60$, so $L = 40$, $cf = 20$, $f = x$, $h = 20$.`,
          t`$55 = 40 + \frac{(70 + x)/2 - 20}{x} \times 20$`,
          t`So $15x = (15 + \frac{x}{2}) \times 20$ $= 300 + 10x$.`,
          t`$5x = 300$, so $x = 60$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q3(B)(iv)" },
      stem: t`In a general store, the prices of articles and their demand are shown below. $$\begin{array}{c|c} \text{Price (rupees)} & \text{Articles} \\ \hline 0\text{–}20 & 140 \\ 20\text{–}40 & 100 \\ 40\text{–}60 & 80 \\ 60\text{–}80 & 60 \\ 80\text{–}100 & 40 \end{array}$$ The median price, in rupees, is:`,
      verify: { kind: "value", inputs: { lo: "(0, 20, 40, 60, 80)", hi: "(20, 40, 60, 80, 100)", f: "(140, 100, 80, 60, 40)" } },
      options: [
        { key: "A", text: t`$34.1$`, correct: false, misconceptionId: "C04-M4", value: "341/10" },
        { key: "B", text: t`$34$`, correct: true, value: "34" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C04-M1", value: "14" },
        { key: "D", text: t`$30$`, correct: false, misconceptionId: "C04-M2", value: "30" },
      ],
      solution: {
        steps: [
          t`$N = 420$, so $\frac{N}{2} = 210$. Cumulative frequencies: $140, 240, \dots$`,
          t`$240$ is the first to reach $210$, so the median class is $20$–$40$: $L = 20$, $cf = 140$, $f = 100$, $h = 20$.`,
          t`Median $= 20 + \frac{210 - 140}{100} \times 20$ $= 20 + 14 = 34$ rupees.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Ex 6.2 Q.3" },
      stem: t`The average speeds of $200$ vehicles on the Mumbai-Pune expressway are shown below. $$\begin{array}{c|c} \text{Speed (km/hr)} & \text{Vehicles} \\ \hline 60\text{–}64 & 10 \\ 65\text{–}69 & 18 \\ 70\text{–}74 & 60 \\ 75\text{–}79 & 40 \\ 80\text{–}84 & 42 \\ 85\text{–}89 & 30 \end{array}$$ The median speed, in km/hr, is:`,
      verify: { kind: "value", inputs: { lo: "(60, 65, 70, 75, 80, 85)", hi: "(64, 69, 74, 79, 84, 89)", f: "(10, 18, 60, 40, 42, 30)" } },
      options: [
        { key: "A", text: t`$76$`, correct: true, value: "76" },
        { key: "B", text: t`$75.5$`, correct: false, misconceptionId: "C04-M2", value: "151/2" },
        { key: "C", text: t`$76.2$`, correct: false, misconceptionId: "C04-M3", value: "381/5" },
        { key: "D", text: t`$76.0625$`, correct: false, misconceptionId: "C04-M4", value: "1217/16" },
      ],
      solution: {
        steps: [
          t`Make the classes continuous: $74.5$–$79.5$ and so on.`,
          t`$N = 200$, so $\frac{N}{2} = 100$. Cumulative frequencies: $10, 28, 88, 128, \dots$, so the median class is $74.5$–$79.5$.`,
          t`$L = 74.5$, $cf = 88$, $f = 40$, $h = 5$.`,
          t`Median $= 74.5 + \frac{100 - 88}{40} \times 5$ $= 74.5 + 1.5 = 76$ km/hr.`,
        ],
      },
    },
  ],
};
