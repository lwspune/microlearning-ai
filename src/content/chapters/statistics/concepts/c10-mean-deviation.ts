import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Batter A scores $38, 40, 42$ and batter B scores $10, 40, 70$. Both average $40$, and for both the deviations from $40$ add up to $0$. **So how can we say who is more consistent?**`,
    reveal: t`Average the distances from $40$, ignoring the signs. For A: $\frac{2 + 0 + 2}{3} = \frac{4}{3}$. For B: $\frac{30 + 0 + 30}{3} = 20$. A's scores sit far closer to the mean, so A is the more consistent batter.`,
  },
  explanation: {
    intuition: [
      t`**Spread** is how far the observations, the data values, sit from a central value $A$.`,
      t`Two usual centres: the **mean** $\bar{x}$, the sum over the count, and the **median** $M$, the middle value once sorted.`,
      t`The **deviation** of $x_i$ from $A$ is $x_i - A$: negative below $A$, positive above it.`,
      t`Deviations from the mean always add up to $0$, so their plain average tells us nothing.`,
      t`So drop the signs: the **absolute value** $|x_i - A|$ is the distance from $x_i$ to $A$.`,
      t`The **mean deviation** (M.D.) about $A$ is the average of these distances; a bigger one means more spread.`,
    ],
    formal: [
      {
        title: "Mean deviation of raw data",
        points: [
          t`**Raw data** are $n$ observations $x_1, x_2, \ldots, x_n$ listed one by one.`,
          t`The sign $\sum$ means add up over all the observations.`,
          t`The mean deviation about $A$ is $\frac{\sum |x_i - A|}{n}$.`,
          t`About the mean, take $A = \bar{x}$; about the median, take $A = M$.`,
          t`It is in the data's own units: marks, runs or cm.`,
        ],
      },
      {
        title: "Mean or median: an example",
        points: [
          t`Take $4, 7, 8, 9, 22$: the mean is $\bar{x} = \frac{50}{5} = 10$ and the median is $M = 8$.`,
          t`The distances from $10$ are $6, 3, 2, 1, 12$, a total of $24$.`,
          t`So the M.D. about the mean is $\frac{24}{5} = 4.8$.`,
          t`The distances from $8$ are $4, 1, 0, 1, 14$, a total of $20$.`,
          t`So the M.D. about the median is $\frac{20}{5} = 4$, which is smaller.`,
        ],
      },
      {
        title: "Least about the median",
        points: [
          t`For any data, $\sum |x_i - A|$ is smallest when $A$ is the median.`,
          t`Why: moving $A$ towards the side with more observations shrinks more distances than it stretches.`,
          t`So the M.D. about the median is never more than the M.D. about the mean.`,
          t`The two are equal when the mean and the median are equal, as in symmetric data.`,
          t`With an even count, any $A$ between the two middle observations gives this least value.`,
          t`The **standard deviation**, taught in Measures of Dispersion, is never smaller than the M.D. about the mean.`,
        ],
      },
      {
        title: "With a frequency table",
        points: [
          t`In a **frequency table**, the value $x_i$ occurs $f_i$ times; $f_i$ is its **frequency**.`,
          t`The number of observations is $N = \sum f_i$, not the number of rows.`,
          t`The mean is $\bar{x} = \frac{\sum f_i x_i}{N}$.`,
          t`The median is the value where the **cumulative frequency**, the running total of $f_i$, first passes $\frac{N}{2}$.`,
          t`Weight each distance by its frequency: M.D. $= \frac{\sum f_i |x_i - A|}{N}$.`,
        ],
      },
      {
        title: "Shifting and scaling the data",
        points: [
          t`Make new observations $y_i = a + bx_i$ from the old ones, for fixed numbers $a$ and $b$.`,
          t`Adding $a$ moves every observation and the centre alike, so no distance changes.`,
          t`Multiplying by $b$ multiplies every distance by $|b|$, the size of $b$.`,
          t`So the M.D. of $a + bx_i$ is $|b|$ times the M.D. of $x_i$, about the mean or the median.`,
          t`If the M.D. of $x_i$ is $3$, the M.D. of $10 - 4x_i$ is $|-4| \times 3 = 12$.`,
          t`A mean deviation is never negative, even when $b$ is.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the mean deviation about the median of this data:

$$\begin{array}{c|c} x & f \\ \hline 2 & 1 \\ 4 & 4 \\ 6 & 8 \\ 8 & 5 \\ 10 & 2 \end{array}$$`,
      steps: [
        t`$N = 1 + 4 + 8 + 5 + 2 = 20$, so $\frac{N}{2} = 10$.`,
        t`The cumulative frequencies are $1, 5, 13, 18, 20$: the $10$th and $11$th observations are both $6$, so $M = 6$.`,
        t`The distances $|x_i - 6|$ are $4, 2, 0, 2, 4$; times $f_i$ they are $4, 8, 0, 10, 8$.`,
        t`Their total is $30$, so M.D. $= \frac{30}{20} = 1.5$.`,
      ],
      answer: t`The mean deviation about the median is $1.5$.`,
    },
    visualSpec: t`Drag a marker $A$ along a number line of dots: the distances to $A$ redraw, and their average is lowest when $A$ sits at the median.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Averaging the signed deviations $x_i - A$ instead of their sizes`,
      remediation: t`Use the distance $|x_i - A|$, which is never negative. Signed deviations cancel out: about the mean they always add up to $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Measuring from the mean when the median is asked (or the reverse), or thinking the mean gives the least mean deviation",
      remediation: "Measure the distances from the centre the question names. The least mean deviation is always the one about the **median**, not the mean.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Ignoring the frequencies: treating each listed value as a single observation",
      remediation: t`A value with frequency $f_i$ stands for $f_i$ observations. Use the frequencies to find the centre, weight each distance by $f_i$, and divide by $N = \sum f_i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M4",
      mistake: "Taking the median as the middle entry of the list as printed, without sorting or counting frequencies",
      remediation: t`Sort the observations first; in a table, find where the cumulative frequency passes $\frac{N}{2}$. The median is the middle observation, not the middle of the printed list.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M5",
      mistake: t`Applying the mean's rule: taking the M.D. of $a + bx_i$ as $a + bd$, where $d$ is the old M.D.`,
      remediation: t`Adding $a$ moves every observation and the centre together, so no distance changes. The M.D. of $a + bx_i$ is just $|b|$ times the old M.D.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Keeping the sign of $b$: taking the M.D. of $a + bx_i$ as $bd$, where $d$ is the old M.D.`,
      remediation: t`A distance is never negative, so neither is a mean deviation. The M.D. of $a + bx_i$ is $|b|$ times the old one: use the size of $b$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C10-M2 gives the key whenever the mean equals the median (symmetric data such as $1, 2, \ldots, 10$), and with an even count any centre between the two middle observations gives the same M.D.; diagnose it with skewed data and an odd count, as in C10-Q3 and C10-Q5.`,
    "C10-M4 gives the key when the data are printed in order, so its items print them unsorted. C10-M3 applies only to frequency tables; C10-M5 and C10-M6 only to a shift a + bx (C10-M6 gives the key when b > 0, and C10-M5 too when a = 0).",
    "C10-M1 always gives 0 about the mean; about the median it gives the mean minus the median.",
    "C10-Q1 shows the class marks of NDA 2022 Sep Q120 as plain values (bank key 10.65 confirmed). C10-Q2 changes 2026 Apr Q119 (frequencies 10, 20, f, 40 with total 100, about the mean, bank key 8 confirmed): there the mean and median are both 25, so here the frequencies are 10, 20, 40, 30 and the question asks about the median.",
    "C10-Q3 replaces the missing table of 2024 Apr Q119 with five unsorted observations; C10-Q5 turns the statement of 2018 Apr Q109 (absolute deviations least about the median) into a number. The unit, S.D.-versus-M.D. and least-about-median statements (2025 Sep Q120, 2018 Sep Q119, 2017 Sep Q105) are taught on the slides.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q120" },
      stem: t`Each value $x$ below occurs $f$ times. The mean deviation about the mean is:

$$\begin{array}{c|c} x & f \\ \hline 5 & 1 \\ 15 & 2 \\ 25 & 4 \\ 35 & 6 \\ 45 & 4 \\ 55 & 3 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(5, 15, 25, 35, 45, 55)", f: "(1, 2, 4, 6, 4, 3)" }, params: { kind: "table", about: "mean" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C10-M1", value: "0" },
        { key: "B", text: t`$10.5$`, correct: false, misconceptionId: "C10-M2", value: "21/2" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C10-M3", value: "15" },
        { key: "D", text: t`$10.65$`, correct: true, value: "213/20" },
      ],
      solution: {
        steps: [
          t`$N = 20$ and $\sum f_i x_i = 5 + 30 + 100 + 210$ $+ 180 + 165 = 690$, so $\bar{x} = \frac{690}{20} = 34.5$.`,
          t`The distances $|x_i - 34.5|$ are $29.5, 19.5, 9.5$, $0.5, 10.5, 20.5$.`,
          t`Times $f_i$ they are $29.5, 39, 38, 3, 42, 61.5$, a total of $213$.`,
          t`M.D. $= \frac{213}{20} = 10.65$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q119" },
      stem: t`The scores $x$ of $100$ candidates are shown with their frequencies $f$. The mean deviation about the median is:

$$\begin{array}{c|c} x & f \\ \hline 5 & 10 \\ 15 & 20 \\ 25 & 40 \\ 35 & 30 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(5, 15, 25, 35)", f: "(10, 20, 40, 30)" }, params: { kind: "table", about: "median" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$7.4$`, correct: false, misconceptionId: "C10-M2", value: "37/5" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C10-M3", value: "10" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C10-M4", value: "9" },
      ],
      solution: {
        steps: [
          t`$N = 100$ and $\frac{N}{2} = 50$; the cumulative frequencies are $10, 30, 70, 100$.`,
          t`The $50$th and $51$st observations are both $25$, so $M = 25$.`,
          t`The distances $|x_i - 25|$ are $20, 10, 0, 10$; times $f_i$ they are $200, 200, 0, 300$, a total of $700$.`,
          t`M.D. $= \frac{700}{100} = 7$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q119" },
      stem: t`The mean deviation about the median of the five observations $22, 31, 53, 30, 59$ is:`,
      verify: { kind: "value", inputs: { xs: "(22, 31, 53, 30, 59)" }, params: { kind: "raw", about: "median" } },
      options: [
        { key: "A", text: t`$16.4$`, correct: false, misconceptionId: "C10-M4", value: "82/5" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C10-M1", value: "8" },
        { key: "D", text: t`$13.6$`, correct: false, misconceptionId: "C10-M2", value: "68/5" },
      ],
      solution: {
        steps: [
          t`Sorted, the data are $22, 30, 31, 53, 59$, so the median is $M = 31$.`,
          t`The distances from $31$, in the printed order, are $9, 0, 22, 1, 28$, a total of $60$.`,
          t`M.D. $= \frac{60}{5} = 12$. About the mean, $39$, it would be $13.6$: the median gives less.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q110" },
      stem: t`The mean deviation about the mean of the first $10$ natural numbers $1, 2, \ldots, 10$ is $2.5$. Each number $x$ is replaced by $21 - 2x$. The mean deviation about the mean of the new numbers is:`,
      verify: { kind: "value", inputs: { xs: "(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)", a: "21", b: "-2" }, params: { kind: "shift" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C10-M5", value: "16" },
        { key: "B", text: t`$-5$`, correct: false, misconceptionId: "C10-M6", value: "-5" },
        { key: "C", text: t`$5$`, correct: true, value: "5" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C10-M1", value: "0" },
      ],
      solution: {
        steps: [
          t`Adding $21$ moves every number and the mean alike, so it changes no distance.`,
          t`Multiplying by $-2$ multiplies every distance by $|-2| = 2$.`,
          t`So the new M.D. is $2 \times 2.5 = 5$. Check: $19, 17, \ldots, 1$ have mean $10$, and their distances $9, 7, 5, 3, 1$ (each twice) give $\frac{50}{10} = 5$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q109" },
      stem: t`The marks of $7$ students are $53, 50, 51, 60, 12, 33, 42$. For a number $A$, let $D(A) = \frac{\sum |x_i - A|}{7}$. The least possible value of $D(A)$ is:`,
      verify: { kind: "value", inputs: { xs: "(53, 50, 51, 60, 12, 33, 42)" }, params: { kind: "least" } },
      options: [
        { key: "A", text: t`$11$`, correct: true, value: "11" },
        { key: "B", text: t`$-7$`, correct: false, misconceptionId: "C10-M1", value: "-7" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C10-M2", value: "12" },
        { key: "D", text: t`$17$`, correct: false, misconceptionId: "C10-M4", value: "17" },
      ],
      solution: {
        steps: [
          t`$D(A)$, the average distance from $A$, is least when $A$ is the median.`,
          t`Sorted, the marks are $12, 33, 42, 50, 51, 53, 60$, so $M = 50$.`,
          t`The distances from $50$ are $38, 17, 8, 0, 1, 3, 10$, a total of $77$.`,
          t`So the least value is $D(50) = \frac{77}{7} = 11$.`,
        ],
      },
    },
  ],
};
