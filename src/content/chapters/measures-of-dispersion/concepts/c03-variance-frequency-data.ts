import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The value $1$ occurs $3$ times and the value $5$ occurs once. **Is the variance the same as for the two numbers $1$ and $5$?**`,
    reveal: t`No. The two numbers $1, 5$ have mean $3$ and variance $\frac{4 + 4}{2} = 4$. But the data is really $1, 1, 1, 5$: mean $\frac{8}{4} = 2$, variance $\frac{1 + 1 + 1 + 9}{4} = 3$. Each value counts as many times as it occurs, so the frequencies change the answer.`,
  },
  explanation: {
    intuition: [
      t`A **frequency table** lists each value $x_i$ with its **frequency** $f_i$, the number of times it occurs.`,
      t`So it is a short way of writing a long list: $x_i$ written down $f_i$ times.`,
      t`Here $1$ with frequency $3$ and $5$ with frequency $1$ stand for the list $1, 1, 1, 5$.`,
      t`Recall: the **variance** is the mean of the squared deviations $(x_i - \bar{x})^2$; here $\bar{x} = 2$.`,
      t`Each value's squared deviation counts $f_i$ times: here $(-1)^2$ three times and $3^2$ once.`,
      t`Divide the total, $12$, by $N = \sum f_i = 4$ observations, not by the $2$ rows: the variance is $3$.`,
    ],
    figure: {
      alt: "A dot plot on a number line from 0 to 6. Three dots are stacked above 1, marked f = 3, and one dot sits above 5, marked f = 1. A dashed line at 2 marks the mean. Arrows run from the mean to each dot: three arrows of −1 to the dots at 1 and one arrow of +3 to the dot at 5. A label reads N = 4.",
      axes: "none",
      view: { x: [-0.6, 6.6], y: [-0.8, 2.4] },
      elements: [
        { kind: "segment", from: [0, 0], to: [6, 0], tone: "muted" },
        { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "muted" },
        { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted" },
        { kind: "point", at: [1, 0.45], step: 3 },
        { kind: "point", at: [1, 1], step: 3 },
        { kind: "point", at: [1, 1.55], step: 3 },
        { kind: "label", at: [1, 1.55], label: "f = 3", labelAt: "n", step: 3 },
        { kind: "point", at: [5, 0.45], step: 3 },
        { kind: "label", at: [5, 0.45], label: "f = 1", labelAt: "n", step: 3 },
        { kind: "segment", from: [2, 0], to: [2, 1.9], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [2, 0], label: "mean 2", labelAt: "s", step: 4 },
        { kind: "vector", from: [2, 0.45], to: [1.12, 0.45], tone: "bad", step: 5 },
        { kind: "vector", from: [2, 1], to: [1.12, 1], tone: "bad", step: 5 },
        { kind: "vector", from: [2, 1.55], to: [1.12, 1.55], tone: "bad", step: 5 },
        { kind: "label", at: [1, 1], label: "−1", labelAt: "w", tone: "bad", step: 5 },
        { kind: "vector", from: [2, 0.45], to: [4.88, 0.45], tone: "bad", step: 5 },
        { kind: "label", at: [3.5, 0.45], label: "+3", labelAt: "n", tone: "bad", step: 5 },
        { kind: "label", at: [3.5, 1.55], label: "N = 4", labelAt: "n", step: 6 },
      ],
    },
    formal: [
      {
        title: "Mean of a frequency distribution",
        points: [
          t`$N$ is the number of observations: $N = \sum f_i$, the total of the frequencies.`,
          t`Each value $x_i$ adds $f_i$ copies of itself to the sum, so the sum is $\sum f_i x_i$.`,
          t`So the mean is $\bar{x} = \frac{\sum f_i x_i}{N}$.`,
        ],
      },
      {
        title: "Variance with frequencies",
        points: [
          t`Weight each squared deviation by its frequency, add them, and divide by $N$.`,
          t`So $\sigma^2$ equals $\frac{\sum f_i (x_i - \bar{x})^2}{N}$.`,
          t`The shortcut, the mean of the squares minus the square of the mean, takes the same weights.`,
          t`So $\sigma^2$ also equals $\frac{\sum f_i x_i^2}{N} - \bar{x}^2$.`,
        ],
      },
      {
        title: "Lay it out as a table",
        points: [
          t`Make columns $x_i$, $f_i$, $f_i x_i$ and $f_i x_i^2$.`,
          t`Total the last three columns: they give $N$, $\sum f_i x_i$ and $\sum f_i x_i^2$.`,
          t`The entry $f_i x_i^2$ is $f_i \times x_i^2$: square the value, then multiply.`,
          t`It is not the product $f_i x_i$ squared, which squares the frequency too.`,
          t`When $\bar{x}$ is a whole number, a column of $f_i (x_i - \bar{x})^2$ is often quicker.`,
        ],
      },
      {
        title: "Class intervals",
        points: [
          t`Grouped data comes in **classes**, intervals such as $10\text{–}20$.`,
          t`A class runs from its **lower limit**, here $10$, to its **upper limit**, here $20$.`,
          t`The exact values inside a class are unknown, so its middle value stands for them all.`,
          t`That middle value is the **class mark**: $x_i = \frac{\text{lower limit} + \text{upper limit}}{2}$.`,
          t`So the class $10\text{–}20$ has mark $15$.`,
          t`An inclusive class like $5\text{–}9$, which contains both $5$ and $9$, has mark $7$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A die is rolled $30$ times with the results below. Find the variance of the score.

$$\begin{array}{c|c} x & f \ \hline 1 & 1 \ 2 & 5 \ 3 & 5 \ 4 & 5 \ 5 & 10 \ 6 & 4 \end{array}$$`,
      steps: [
        t`$N = \sum f_i = 30$. The $f_i x_i$ column is $1, 10, 15, 20, 50, 24$, so $\sum f_i x_i = 120$ and $\bar{x} = \frac{120}{30} = 4$.`,
        t`The $f_i x_i^2$ column is $1 \times 1$, $5 \times 4$, $5 \times 9$, $5 \times 16$, $10 \times 25$, $4 \times 36$, that is $1, 20, 45, 80, 250, 144$. So $\sum f_i x_i^2 = 540$.`,
        t`$\sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$ $= \frac{540}{30} - 4^2$ $= 18 - 16 = 2$.`,
      ],
      answer: t`The variance is $\sigma^2 = 2$.`,
    },
    visualSpec: t`Drag the frequency bar of any value up or down and watch the mean move and the variance, the frequency-weighted mean of the squared deviations, change with it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Ignoring the frequencies: finding the variance of the listed values (or class marks) as if each occurred once",
      remediation: t`A frequency $f_i$ means the value $x_i$ occurs $f_i$ times. Weight every value by its frequency and divide by $N = \sum f_i$, not by the number of rows.`,
      fallback: { kind: "ext", topic: "mean of a frequency distribution" },
    },
    {
      id: "C03-M2",
      mistake: t`Filling the $f x^2$ column with $(f x)^2$`,
      remediation: t`The column is $f_i x_i^2$: square the value first, then multiply by its frequency. Squaring $f_i x_i$ squares the frequency too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Stopping at $\frac{\sum f_i x_i^2}{N}$, the mean of the squares, without subtracting $\bar{x}^2$`,
      remediation: t`$\frac{\sum f_i x_i^2}{N}$ is the mean of the squares, not the variance. Subtract the square of the mean: $\sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Subtracting $\bar{x}$ instead of $\bar{x}^2$`,
      remediation: t`The formula subtracts the square of the mean: $\sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$. Square $\bar{x}$ before you subtract it.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M5",
      mistake: "Taking lower limit + upper limit as the class mark, without halving",
      remediation: t`The class mark is the middle of the class: $\frac{\text{lower limit} + \text{upper limit}}{2}$. Without halving, every value doubles and the variance comes out four times too big.`,
      fallback: { kind: "ext", topic: "class marks" },
    },
  ],
  engineNotes: [
    "Book data changed so every answer is exact: Ex 8.2 Q3 cut from 10 values to 8 (x = 2 to 16) with new frequencies; Ex 8.2 Q4, Q5 and Q7 keep the values or classes with new frequencies (same N for Q5 and Q7, N = 64 for Q4); Ex 8.2 Q6 cut from 9 classes to 8 (10–90) with new frequencies; Misc II Q7 given frequencies totalling 100, matching its stem (the book's total 90 is a misprint).",
    "C03-M1 gives the key whenever the frequency-weighted variance equals the variance of the bare values, e.g. the values 31 to 37 with frequencies 11, 10, 9, 6, 13, 14, 7 give variance 4, the same as the bare values 31 to 37. Draw diagnosing items only where the two differ.",
    "C03-M5 applies only to class intervals. Using the lower (or upper) limits instead of class marks is not modelled: with equal class widths it shifts every value by the same amount and leaves the variance unchanged, so no item can detect it.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q4" },
      stem: t`The variance of the following data is:

$$\begin{array}{c|c} x & f \\ \hline 31 & 16 \\ 32 & 15 \\ 33 & 10 \\ 34 & 7 \\ 35 & 9 \\ 36 & 6 \\ 37 & 1 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(31, 32, 33, 34, 35, 36, 37)", f: "(16, 15, 10, 7, 9, 6, 1)" }, params: { kind: "values" } },
      options: [
        { key: "A", text: t`$1092$`, correct: false, misconceptionId: "C03-M3", value: "1092" },
        { key: "B", text: t`$1059$`, correct: false, misconceptionId: "C03-M4", value: "1059" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`$N = 64$ and $\sum f_i x_i = 496 + 480 + 330 + 238 + 315 + 216 + 37 = 2112$, so $\bar{x} = \frac{2112}{64} = 33$.`,
          t`$\bar{x}$ is a whole number, so use deviations. $x_i - 33$ is $-2, -1, 0, 1, 2, 3, 4$, and $f_i (x_i - 33)^2$ is $64, 15, 0, 7, 36, 54, 16$, a total of $192$.`,
          t`$\sigma^2 = \frac{192}{64} = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q5" },
      stem: t`The ages of 100 students in a college are given below. The variance of their ages (in years$^2$) is:

$$\begin{array}{c|c} \text{Age (years)} & \text{No. of students} \\ \hline 16 & 15 \\ 17 & 3 \\ 18 & 12 \\ 19 & 21 \\ 20 & 35 \\ 21 & 14 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(16, 17, 18, 19, 20, 21)", f: "(15, 3, 12, 21, 35, 14)" }, params: { kind: "values" } },
      options: [
        { key: "A", text: t`$\frac{689}{2}$`, correct: false, misconceptionId: "C03-M4", value: "689/2" },
        { key: "B", text: t`$\frac{727}{2}$`, correct: false, misconceptionId: "C03-M3", value: "727/2" },
        { key: "C", text: t`$\frac{5}{2}$`, correct: true, value: "5/2" },
        { key: "D", text: t`$\frac{35}{12}$`, correct: false, misconceptionId: "C03-M1", value: "35/12" },
      ],
      solution: {
        steps: [
          t`$N = 100$ and $\sum f_i x_i = 240 + 51 + 216 + 399 + 700 + 294 = 1900$, so $\bar{x} = 19$.`,
          t`$x_i - 19$ is $-3, -2, -1, 0, 1, 2$, and $f_i (x_i - 19)^2$ is $135, 12, 12, 0, 35, 56$, a total of $250$.`,
          t`$\sigma^2 = \frac{250}{100} = \frac{5}{2}$, that is $2.5$ years$^2$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q3" },
      stem: t`The variance of the following data is:

$$\begin{array}{c|c} x & f \\ \hline 2 & 7 \\ 4 & 8 \\ 6 & 9 \\ 8 & 4 \\ 10 & 3 \\ 12 & 5 \\ 14 & 3 \\ 16 & 1 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(2, 4, 6, 8, 10, 12, 14, 16)", f: "(7, 8, 9, 4, 3, 5, 3, 1)" }, params: { kind: "values" } },
      options: [
        { key: "A", text: t`$243$`, correct: false, misconceptionId: "C03-M2", value: "243" },
        { key: "B", text: t`$21$`, correct: false, misconceptionId: "C03-M1", value: "21" },
        { key: "C", text: t`$58$`, correct: false, misconceptionId: "C03-M4", value: "58" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`$N = 40$ and $\sum f_i x_i = 14 + 32 + 54 + 32 + 30 + 60 + 42 + 16 = 280$, so $\bar{x} = 7$.`,
          t`$f_i x_i^2$ is $7 \times 4, 8 \times 16, 9 \times 36, 4 \times 64, 3 \times 100, 5 \times 144, 3 \times 196, 1 \times 256$, that is $28, 128, 324, 256, 300, 720, 588, 256$. So $\sum f_i x_i^2 = 2600$.`,
          t`$\sigma^2 = \frac{2600}{40} - 7^2 = 65 - 49 = 16$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q6" },
      stem: t`The variance of the following frequency distribution is:

$$\begin{array}{c|c} \text{Class} & f \\ \hline 10\text{–}20 & 7 \\ 20\text{–}30 & 17 \\ 30\text{–}40 & 8 \\ 40\text{–}50 & 16 \\ 50\text{–}60 & 9 \\ 60\text{–}70 & 17 \\ 70\text{–}80 & 14 \\ 80\text{–}90 & 12 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "(10, 20, 30, 40, 50, 60, 70, 80)", hi: "(20, 30, 40, 50, 60, 70, 80, 90)", f: "(7, 17, 8, 16, 9, 17, 14, 12)" }, params: { kind: "classes" } },
      options: [
        { key: "A", text: t`$525$`, correct: false, misconceptionId: "C03-M1", value: "525" },
        { key: "B", text: t`$3189$`, correct: false, misconceptionId: "C03-M3", value: "3189" },
        { key: "C", text: t`$485$`, correct: true, value: "485" },
        { key: "D", text: t`$1940$`, correct: false, misconceptionId: "C03-M5", value: "1940" },
      ],
      solution: {
        steps: [
          t`The class marks are $15, 25, 35, 45, 55, 65, 75, 85$. $N = 100$ and $\sum f_i x_i = 105 + 425 + 280 + 720 + 495 + 1105 + 1050 + 1020 = 5200$, so $\bar{x} = 52$.`,
          t`$\sum f_i x_i^2 = 1575 + 10625 + 9800 + 32400 + 27225 + 71825 + 78750 + 86700 = 318900$.`,
          t`$\sigma^2 = \frac{318900}{100} - 52^2 = 3189 - 2704 = 485$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q7" },
      stem: t`The heights of 200 plants are given below. The variance of the heights (in cm$^2$) is:

$$\begin{array}{c|c} \text{Height (cm)} & \text{No. of plants} \\ \hline 14\text{–}18 & 9 \\ 19\text{–}23 & 18 \\ 24\text{–}28 & 39 \\ 29\text{–}33 & 70 \\ 34\text{–}38 & 33 \\ 39\text{–}43 & 24 \\ 44\text{–}48 & 7 \end{array}$$`,
      verify: { kind: "value", inputs: { lo: "(14, 19, 24, 29, 34, 39, 44)", hi: "(18, 23, 28, 33, 38, 43, 48)", f: "(9, 18, 39, 70, 33, 24, 7)" }, params: { kind: "classes" } },
      options: [
        { key: "A", text: t`$48$`, correct: true, value: "48" },
        { key: "B", text: t`$978$`, correct: false, misconceptionId: "C03-M4", value: "978" },
        { key: "C", text: t`$192$`, correct: false, misconceptionId: "C03-M5", value: "192" },
        { key: "D", text: t`$40959$`, correct: false, misconceptionId: "C03-M2", value: "40959" },
      ],
      solution: {
        steps: [
          t`The class marks are $16, 21, 26, 31, 36, 41, 46$ (the mark of $14\text{–}18$ is $\frac{14 + 18}{2} = 16$). $N = 200$ and $\sum f_i x_i = 6200$, so $\bar{x} = 31$.`,
          t`$x_i - 31$ is $-15, -10, -5, 0, 5, 10, 15$, and $f_i (x_i - 31)^2$ is $2025, 1800, 975, 0, 825, 2400, 1575$, a total of $9600$.`,
          t`$\sigma^2 = \frac{9600}{200} = 48$ cm$^2$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q7" },
      stem: t`The number of goals scored by a team in 100 matches is given below. The variance of the number of goals is:

$$\begin{array}{c|c} \text{Goals} & \text{No. of matches} \\ \hline 0 & 6 \\ 1 & 20 \\ 2 & 25 \\ 3 & 20 \\ 4 & 25 \\ 5 & 4 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(0, 1, 2, 3, 4, 5)", f: "(6, 20, 25, 20, 25, 4)" }, params: { kind: "values" } },
      options: [
        { key: "A", text: t`$\frac{7}{4}$`, correct: true, value: "7/4" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C03-M3", value: "8" },
        { key: "C", text: t`$\frac{651}{4}$`, correct: false, misconceptionId: "C03-M2", value: "651/4" },
        { key: "D", text: t`$\frac{35}{12}$`, correct: false, misconceptionId: "C03-M1", value: "35/12" },
      ],
      solution: {
        steps: [
          t`$N = 100$ and $\sum f_i x_i = 0 + 20 + 50 + 60 + 100 + 20 = 250$, so $\bar{x} = 2.5$.`,
          t`$f_i x_i^2$ is $0, 20, 100, 180, 400, 100$, so $\sum f_i x_i^2 = 800$.`,
          t`$\sigma^2 = \frac{800}{100} - 2.5^2 = 8 - 6.25 = 1.75 = \frac{7}{4}$.`,
        ],
      },
    },
  ],
};
