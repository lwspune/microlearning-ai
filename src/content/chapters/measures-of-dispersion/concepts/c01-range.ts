import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Two students' marks in three tests: Asha $48, 50, 52$ and Ravi $10, 50, 90$. Both have mean $50$. **Does the mean tell you they are alike?**`,
    reveal: t`No. Asha's marks stay close to $50$; Ravi's are far apart. The mean says where the data sits, not how spread it is. The simplest measure of spread is the **range**, largest minus smallest: Asha $52 - 48 = 4$, Ravi $90 - 10 = 80$.`,
  },
  explanation: {
    intuition: t`Two data sets can share a mean and still look very different: one bunched together, one scattered. A measure of dispersion puts a number on that spread. The quickest one is the range: the gap between the largest observation $L$ and the smallest $S$. Its coefficient, $\frac{L - S}{L + S}$, has no units, so it can compare the spread of data in different units, like heights in cm and weights in kg.`,
    formal: t`**Range.** For raw data, $L$ is the largest observation and $S$ the smallest: $$\text{Range} = L - S$$ Find them by scanning the whole list, not by reading its first and last entries.

**Coefficient of range.** $$\frac{L - S}{L + S}$$ The range carries the data's units; the coefficient is a pure number, a relative measure of spread.

**Negative values.** The larger number is the one further right on the number line: $-3 > -10$. For $-3, -10, -6$: $L = -3$, $S = -10$, range $= -3 - (-10) = 7$. A range is never negative.

**Frequency tables.** The range is about the values of the variable, not how often they occur: ignore the frequency column when you pick $L$ and $S$.

**Class intervals.** $L$ is the upper limit of the highest class and $S$ the lower limit of the lowest class. For classes $0\text{–}10, \ldots, 40\text{–}50$: range $= 50 - 0 = 50$.`,
    worked: {
      prompt: t`Find the range and the coefficient of range of $19, 27, 15, 21, 33, 45, 7, 12, 20, 26$.`,
      steps: [
        t`Scan the whole list. Largest: $L = 45$. Smallest: $S = 7$. (The list starts at $19$ and ends at $26$, but neither is an end of the data.)`,
        t`Range $= L - S = 45 - 7 = 38$.`,
        t`Coefficient of range $= \frac{L - S}{L + S} = \frac{38}{45 + 7} = \frac{38}{52} = \frac{19}{26}$.`,
      ],
      answer: t`Range $= 38$; coefficient of range $= \frac{19}{26}$.`,
    },
    visualSpec: t`Drag points along a number line and watch two markers snap to the largest and smallest, with the gap between them labelled as the range and the coefficient $\frac{L - S}{L + S}$ updating beside it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "In a frequency table, works out L and S from the frequency column instead of the values",
      remediation: t`The range measures the spread of the values themselves. In a frequency table, take $L$ and $S$ from the variable's column (or its class limits) and leave the frequencies aside.`,
      fallback: { kind: "ext", topic: "frequency distributions" },
    },
    {
      id: "C01-M2",
      mistake: "For class intervals, uses the class marks (mid-points) of the highest and lowest classes instead of their limits",
      remediation: t`For classes, the data runs from the lower limit of the lowest class to the upper limit of the highest class. Use those limits: $L$ = upper limit of the top class, $S$ = lower limit of the bottom class.`,
      fallback: { kind: "ext", topic: "class intervals" },
    },
    {
      id: "C01-M3",
      mistake: "Takes the last and first observations as listed for L and S, without looking for the largest and smallest",
      remediation: t`$L$ and $S$ are the largest and smallest observations, wherever they sit in the list. Scan every value (or arrange the data in order) before you subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Compares negative numbers by their digits, ignoring the sign: takes -44 as larger than -4",
      remediation: t`Size goes by position on the number line, sign included: the number further right is larger, so $-4 > -44$ and $1 > -7$. Pick $L$ and $S$ that way, and $L - S$ is never negative.`,
      fallback: { kind: "ext", topic: "comparing negative numbers" },
    },
    {
      id: "C01-M5",
      mistake: "Mixes up L - S and L + S: gives L + S as the range, or (L + S)/(L - S) as the coefficient",
      remediation: t`The range is a difference, $L - S$. The coefficient of range puts that difference over the sum: $\frac{L - S}{L + S}$, so for positive data it lies between $0$ and $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Gives the range L - S as the coefficient of range",
      remediation: t`The range has the data's units; the coefficient of range divides it by $L + S$ to give a pure number. Finish the step: coefficient $= \frac{L - S}{L + S}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 needs a frequency table; C01-M2 needs class intervals; C01-M6 only shows on a coefficient question.",
    "C01-M3 gives the key when the list is already in order (every frequency table, every class table): diagnose it with an unsorted raw list (Q1, Q2, Q6).",
    "C01-M4 gives the key when all observations are positive: diagnose it with negative data (Q1, Q6). It is undefined when two observations have the same size (e.g. -1 and 1).",
    "Coefficient of range is asked only for positive data; with negative data L + S can be zero or negative.",
    "Q6 is authored from Misc I Q3 (negative observations) with mixed-sign data; Q3 keeps the Misc II Q3 table but asks for the coefficient of range instead of the range; Q5 asks for the coefficient of range of the 8.1.1 SolvedEx.2 table.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q3" },
      stem: t`The observations of a variable $X$ are $-4$, $-20$, $-30$, $-44$ and $-36$. The range of $X$ is:`,
      verify: { kind: "value", inputs: { x: "(-4, -20, -30, -44, -36)" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$40$`, correct: true, value: "40" },
        { key: "B", text: t`$-32$`, correct: false, misconceptionId: "C01-M3", value: "-32" },
        { key: "C", text: t`$-40$`, correct: false, misconceptionId: "C01-M4", value: "-40" },
        { key: "D", text: t`$-48$`, correct: false, misconceptionId: "C01-M5", value: "-48" },
      ],
      solution: {
        steps: [
          t`The number further right on the number line is larger. Largest: $L = -4$. Smallest: $S = -44$.`,
          t`Range $= L - S = -4 - (-44) = -4 + 44 = 40$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q1" },
      stem: t`The coefficient of range of the data $76, 57, 80, 103, 61, 63, 89, 96, 105, 72$ is:`,
      verify: { kind: "value", inputs: { x: "(76, 57, 80, 103, 61, 63, 89, 96, 105, 72)" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$\frac{8}{27}$`, correct: true, value: "8/27" },
        { key: "B", text: t`$- \frac{1}{37}$`, correct: false, misconceptionId: "C01-M3", value: "-1/37" },
        { key: "C", text: t`$\frac{27}{8}$`, correct: false, misconceptionId: "C01-M5", value: "27/8" },
        { key: "D", text: t`$48$`, correct: false, misconceptionId: "C01-M6", value: "48" },
      ],
      solution: {
        steps: [
          t`Scan the whole list. Largest: $L = 105$. Smallest: $S = 57$.`,
          t`$L - S = 48$ and $L + S = 162$.`,
          t`Coefficient of range $= \frac{L - S}{L + S} = \frac{48}{162} = \frac{8}{27}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q3" },
      stem: t`Weekly wages (in hundreds of rupees) of $400$ workers: $$\begin{array}{c|c} \text{Wages} & \text{Workers} \\ \hline 10 & 45 \\ 15 & 63 \\ 20 & 102 \\ 25 & 55 \\ 30 & 74 \\ 35 & 36 \\ 40 & 25 \end{array}$$ The coefficient of range of the wages is:`,
      verify: { kind: "value", inputs: { x: "(10, 15, 20, 25, 30, 35, 40)", f: "(45, 63, 102, 55, 74, 36, 25)" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C01-M5", value: "5/3" },
        { key: "B", text: t`$30$`, correct: false, misconceptionId: "C01-M6", value: "30" },
        { key: "C", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
        { key: "D", text: t`$\frac{77}{127}$`, correct: false, misconceptionId: "C01-M1", value: "77/127" },
      ],
      solution: {
        steps: [
          t`The values are the wages; the numbers of workers are frequencies, not data values. So $L = 40$ and $S = 10$.`,
          t`$L - S = 30$ and $L + S = 50$.`,
          t`Coefficient of range $= \frac{30}{50} = \frac{3}{5}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.1 Q5" },
      stem: t`The range of the following data is: $$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 62\text{–}64 & 5 \\ 64\text{–}66 & 3 \\ 66\text{–}68 & 4 \\ 68\text{–}70 & 5 \\ 70\text{–}72 & 3 \end{array}$$`,
      verify: { kind: "value", inputs: { c: "((62, 64), (64, 66), (66, 68), (68, 70), (70, 72))", f: "(5, 3, 4, 5, 3)" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C01-M1", value: "2" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C01-M2", value: "8" },
        { key: "D", text: t`$134$`, correct: false, misconceptionId: "C01-M5", value: "134" },
      ],
      solution: {
        steps: [
          t`$L$ = upper limit of the highest class $= 72$. $S$ = lower limit of the lowest class $= 62$.`,
          t`Range $= L - S = 72 - 62 = 10$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.1.1 SolvedEx.2" },
      stem: t`Salaries (in hundreds of rupees) of employees: $$\begin{array}{c|c} \text{Salary} & \text{Employees} \\ \hline 30\text{–}50 & 7 \\ 50\text{–}70 & 15 \\ 70\text{–}90 & 30 \\ 90\text{–}110 & 24 \\ 110\text{–}130 & 18 \\ 130\text{–}150 & 11 \end{array}$$ The coefficient of range of the salaries is:`,
      verify: { kind: "value", inputs: { c: "((30, 50), (50, 70), (70, 90), (90, 110), (110, 130), (130, 150))", f: "(7, 15, 30, 24, 18, 11)" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}$`, correct: true, value: "2/3" },
        { key: "B", text: t`$\frac{5}{9}$`, correct: false, misconceptionId: "C01-M2", value: "5/9" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C01-M5", value: "3/2" },
        { key: "D", text: t`$120$`, correct: false, misconceptionId: "C01-M6", value: "120" },
      ],
      solution: {
        steps: [
          t`$L$ = upper limit of the highest class $= 150$. $S$ = lower limit of the lowest class $= 30$.`,
          t`$L - S = 120$ and $L + S = 180$.`,
          t`Coefficient of range $= \frac{120}{180} = \frac{2}{3}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q3" },
      stem: t`The minimum temperatures (in $^\circ$C) of a hill town over a week were $4, -2, 6, -7, 1, 3, 5$. The range of these temperatures is:`,
      verify: { kind: "value", inputs: { x: "(4, -2, 6, -7, 1, 3, 5)" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$-8$`, correct: false, misconceptionId: "C01-M4", value: "-8" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C01-M5", value: "-1" },
        { key: "C", text: t`$13$`, correct: true, value: "13" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C01-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`Scan the whole list, signs included. Largest: $L = 6$. Smallest: $S = -7$, since $-7$ is further left than $-2$.`,
          t`Range $= L - S = 6 - (-7) = 13$ $^\circ$C.`,
        ],
      },
    },
  ],
};
