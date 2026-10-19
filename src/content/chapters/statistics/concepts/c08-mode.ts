import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Last week a shop sold shoes of sizes $6, 6, 6, 6, 7, 8, 9, 10, 11$. The mean size is about $7.7$ and the median is $7$. **Which size should the shop order the most of?**`,
    reveal: t`Size $6$: it sold four times, more than any other size. The value that occurs most often is the **mode**. The mean is not even a real shoe size, and the median only says where the middle customer stood.`,
  },
  explanation: {
    intuition: [
      t`The **frequency** of a value is how many times it appears in the data.`,
      t`The **mode** is the value with the highest frequency: the most common one.`,
      t`In $2, 3, 3, 3, 5, 9$ the mode is $3$, because it appears three times.`,
      t`If two values tie for the highest frequency, both are modes and the data are **bimodal**.`,
      t`If every value appears just once, the data have no mode.`,
      t`The mode answers “which is most common?”, even for labels such as blood groups.`,
    ],
    formal: [
      {
        title: "Mode of raw and discrete data",
        points: [
          t`**Raw data** are observations listed one by one; **tally** them by counting each value's frequency.`,
          t`The mode is the **value** with the highest count, never the count itself.`,
          t`A **discrete frequency table** lists each value $x$ with its frequency $f$.`,
          t`There, find the largest $f$ and read off its $x$.`,
          t`For $x = 1, 2, 3, 4$ with $f = 5, 9, 7, 2$, the mode is $2$, not $9$.`,
          t`If two values share the largest frequency, give both modes.`,
        ],
      },
      {
        title: "An unknown from the mode",
        points: [
          t`If the mode is given, the unknown value must make that value the most frequent.`,
          t`Take $4, 7, 9, 7, 9, x$ with mode $9$.`,
          t`Without $x$, $7$ and $9$ each appear twice: a tie.`,
          t`Only $x = 9$ lifts $9$ above $7$, so $x = 9$.`,
        ],
      },
      {
        title: "Grouped data: the formula",
        points: [
          t`In **grouped data**, values are counted in **classes** such as $10$ to $20$, so single values are lost.`,
          t`The **modal class** is the class with the highest frequency $f_1$.`,
          t`$L$ is its lower limit and $h$ its width, the gap between its limits.`,
          t`$f_0$ is the frequency of the class before it, and $f_2$ of the class after it.`,
          t`Then the mode is $L + \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \times h$.`,
          t`The fraction pulls the mode toward the bigger neighbouring class.`,
        ],
      },
      {
        title: "Grouped mode: an example",
        points: [
          t`Take classes $0$–$10$, $10$–$20$, $20$–$30$, $30$–$40$, $40$–$50$ with frequencies $5, 8, 14, 10, 3$.`,
          t`The modal class is $20$–$30$, so $L = 20$, $h = 10$ and $f_1 = 14$.`,
          t`Its neighbours give $f_0 = 8$ and $f_2 = 10$.`,
          t`Mode $= 20 + \frac{14 - 8}{28 - 8 - 10} \times 10$.`,
          t`$= 20 + \frac{6}{10} \times 10 = 26$.`,
          t`It is not the class mark $25$: the heavier class after it pulls the mode up.`,
        ],
      },
      {
        title: "The empirical relation",
        points: [
          t`A **skewed** distribution is lopsided: a long **tail** of a few far values stretches out on one side.`,
          t`For moderately skewed data, an approximate **empirical relation** links the three averages:`,
          t`mode $= 3$ median $- 2$ mean.`,
          t`The $3$ goes with the median and the $2$ with the mean.`,
          t`Mean $50$ and median $47$ give mode $= 141 - 100 = 41$.`,
          t`To find the median instead: median $= \frac{\text{mode} + 2\,\text{mean}}{3}$.`,
        ],
      },
      {
        title: "Skewness fixes the order",
        points: [
          t`**Symmetric** data, the same on both sides of the centre, have mean $=$ median $=$ mode.`,
          t`**Right-skewed** (positively skewed) data have their long tail on the right, toward the big values.`,
          t`The far values pull the mean toward the tail, so mean $>$ median $>$ mode.`,
          t`**Left-skewed** (negatively skewed) data are the mirror image: mode $>$ median $>$ mean.`,
          t`The mode stays at the peak, and the median always lies between the other two.`,
        ],
      },
    ],
    worked: {
      prompt: t`The mode of the scores $5, 2, 9, 5, 17, 2, x$ is $2$. Find $x$, then compare the mean, median and mode.`,
      steps: [
        t`Tally: $2$ and $5$ each appear twice, $9$ and $17$ once. For $2$ to be the mode, $x = 2$.`,
        t`In order the scores are $2, 2, 2, 5, 5, 9, 17$, and the mode is $2$.`,
        t`There are $7$ scores, so the median is the $4$th: $5$.`,
        t`The mean is $\frac{2 + 2 + 2 + 5 + 5 + 9 + 17}{7}$ $= \frac{42}{7} = 6$.`,
        t`So mean $>$ median $>$ mode: the far score $17$ makes a tail on the right.`,
      ],
      answer: t`$x = 2$; mean $6 >$ median $5 >$ mode $2$, so the scores are right-skewed.`,
    },
    visualSpec: t`Drag the tail of a one-peaked frequency curve left or right and watch the mean, median and mode markers separate, with the median always between the other two.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Giving the highest frequency instead of the value that has it",
      remediation: "The mode is a **value** of the data: the one whose frequency is highest. The frequency only says how often that value appears.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M2",
      mistake: "Mixing up the mode and the median",
      remediation: t`The mode is the most frequent value; the median is the middle value once the data are in order. In the empirical relation the median carries the $3$: mode $= 3$ median $- 2$ mean.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: "Mixing up the mode and the mean, so putting the mean at the peak of skewed data",
      remediation: t`The mode is the most frequent value and sits at the peak; the mean is the sum divided by $n$, and far values pull it toward the long tail. The relation is mode $= 3$ median $- 2$ mean.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M4",
      mistake: "Reporting one mode when two values tie for the highest frequency",
      remediation: "When two values share the highest frequency, both are modes: the data are bimodal. Give both.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Taking the class mark of the modal class as the mode",
      remediation: t`Use $L + \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \times h$. The mode leans toward the bigger neighbouring class; it equals the class mark only when $f_0 = f_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Writing the empirical relation as mode $= 3$ mean $- 2$ median`,
      remediation: t`The $3$ goes with the median: mode $= 3$ median $- 2$ mean. That is why the median always lies between the mean and the mode.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M4 applies only to raw data with a tie, C08-M5 only to grouped data, C08-M6 only to the empirical relation and the skewness order; C08-M1 applies where frequencies are counted.",
    t`For symmetric data mean $=$ median $=$ mode, so C08-M2, C08-M3 and C08-M6 all give the key; diagnose them with skewed data only.`,
    t`C08-M5 (class mark) gives the key whenever $f_0 = f_2$; use tables with unequal neighbours.`,
    "C08-Q2 uses the data of NDA 2023 Apr Q108 (which asks for means of the lowest and highest observations) and asks for the mode instead. C08-Q3 supplies a new table: 2021 Sep Q109's table is missing from the bank.",
    t`C08-Q4 and C08-Q5 are NDA-style: the bank has no question that applies mode $= 3$ median $- 2$ mean (2023 Apr Q113, $5P = 4Q = \frac{R}{2}$, is a ratio calculation, not the relation).`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q110" },
      stem: t`A die is thrown $10$ times, giving $1, 2, 1, 1, 2, 1, 4, 6, 5, 4$. The mode of these outcomes is:`,
      verify: { kind: "value", inputs: { xs: "(1, 2, 1, 1, 2, 1, 4, 6, 5, 4)" }, params: { ask: "mode" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M1", value: "4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C08-M2", value: "2" },
        { key: "D", text: t`$2.7$`, correct: false, misconceptionId: "C08-M3", value: "27/10" },
      ],
      solution: {
        steps: [
          t`Tally: $1$ appears $4$ times, $2$ and $4$ twice each, $5$ and $6$ once each.`,
          t`The highest frequency is $4$, and it belongs to the value $1$.`,
          t`So the mode is $1$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q108" },
      stem: t`Twelve dice are thrown together and show $4, 1, 4, 3, 6, 2, 1, 3, 4, 5, 1, 6$. The mode of these observations is:`,
      verify: { kind: "value", inputs: { xs: "(4, 1, 4, 3, 6, 2, 1, 3, 4, 5, 1, 6)" }, params: { ask: "mode" } },
      options: [
        { key: "A", text: t`$1$ only`, correct: false, misconceptionId: "C08-M4", value: "1" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C08-M1", value: "3" },
        { key: "C", text: t`$3.5$`, correct: false, misconceptionId: "C08-M2", value: "7/2" },
        { key: "D", text: t`both $1$ and $4$`, correct: true, value: "{1, 4}" },
      ],
      solution: {
        steps: [
          t`Tally: $1$ and $4$ appear $3$ times each, $3$ and $6$ twice, $2$ and $5$ once.`,
          t`Two values share the highest frequency, $3$.`,
          t`So the data are bimodal: the modes are $1$ and $4$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q109" },
      stem: t`The marks of $50$ students are grouped below. $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 0\text{–}10 & 3 \\ 10\text{–}20 & 12 \\ 20\text{–}30 & 16 \\ 30\text{–}40 & 10 \\ 40\text{–}50 & 9 \end{array}$$ The mode of the marks is:`,
      verify: { kind: "value", inputs: { lo: "0", h: "10", fs: "(3, 12, 16, 10, 9)" }, params: { ask: "grouped" } },
      options: [
        { key: "A", text: t`$25$`, correct: false, misconceptionId: "C08-M5", value: "25" },
        { key: "B", text: t`$26.25$`, correct: false, misconceptionId: "C08-M2", value: "105/4" },
        { key: "C", text: t`$27$`, correct: false, misconceptionId: "C08-M3", value: "27" },
        { key: "D", text: t`$24$`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`The modal class is $20$–$30$ with $f_1 = 16$, so $L = 20$ and $h = 10$.`,
          t`Its neighbours give $f_0 = 12$ and $f_2 = 10$.`,
          t`Mode $= 20 + \frac{16 - 12}{32 - 12 - 10} \times 10$ $= 20 + \frac{4}{10} \times 10 = 24$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`For a moderately skewed distribution, the mean is $45$ and the median is $42$. By the empirical relation, the mode is:`,
      verify: { kind: "value", inputs: { mean: "45", median: "42" }, params: { ask: "emp_mode" } },
      options: [
        { key: "A", text: t`$44$`, correct: false, misconceptionId: "C08-M2", value: "44" },
        { key: "B", text: t`$40.5$`, correct: false, misconceptionId: "C08-M3", value: "81/2" },
        { key: "C", text: t`$36$`, correct: true, value: "36" },
        { key: "D", text: t`$51$`, correct: false, misconceptionId: "C08-M6", value: "51" },
      ],
      solution: {
        steps: [
          t`Mode $= 3$ median $- 2$ mean.`,
          t`$= 3 \times 42 - 2 \times 45$ $= 126 - 90 = 36$.`,
          t`Check: mean $45 >$ median $42 >$ mode $36$, with the median between.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`A moderately skewed distribution has mode $44$ and mean $35$. By the empirical relation, its median is:`,
      verify: { kind: "value", inputs: { mean: "35", mode: "44" }, params: { ask: "emp_median" } },
      options: [
        { key: "A", text: t`$41$`, correct: false, misconceptionId: "C08-M3", value: "41" },
        { key: "B", text: t`$38$`, correct: true, value: "38" },
        { key: "C", text: t`$30.5$`, correct: false, misconceptionId: "C08-M6", value: "61/2" },
        { key: "D", text: t`$62$`, correct: false, misconceptionId: "C08-M2", value: "62" },
      ],
      solution: {
        steps: [
          t`From mode $= 3$ median $- 2$ mean: $3$ median $=$ mode $+ 2$ mean.`,
          t`$3$ median $= 44 + 70 = 114$, so the median is $38$.`,
          t`Check: mode $44 >$ median $38 >$ mean $35$, with the median between.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q102" },
      stem: t`The frequency curve of some data has one peak and is **skewed to the left**: its long tail stretches toward the small values. Which order is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "order", skew: "left" } },
      options: [
        { key: "A", text: t`Median $>$ Mode $>$ Mean`, correct: false, misconceptionId: "C08-M2", value: "median_mode_mean" },
        { key: "B", text: t`Mode $>$ Mean $>$ Median`, correct: false, misconceptionId: "C08-M6", value: "mode_mean_median" },
        { key: "C", text: t`Mode $>$ Median $>$ Mean`, correct: true, value: "mode_median_mean" },
        { key: "D", text: t`Mean $>$ Median $>$ Mode`, correct: false, misconceptionId: "C08-M3", value: "mean_median_mode" },
      ],
      solution: {
        steps: [
          t`The mode stays at the peak of the curve.`,
          t`The few small values in the left tail pull the mean to the left, below the median.`,
          t`The median lies between, so mode $>$ median $>$ mean.`,
        ],
      },
    },
  ],
};
