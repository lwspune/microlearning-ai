import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Group A is $10, 10, 10, 10$ and group B is $20, 20, 20, 20$. Each group has S.D. $0$. **Is the S.D. of all eight values also $0$?**`,
    reveal: t`No. The eight values have mean $15$, and every one of them is $5$ away from it, so the combined S.D. is $5$. Neither group spreads at all; the whole spread comes from the **gap between the group means**. Any formula for the combined S.D. has to count that gap.`,
  },
  explanation: {
    intuition: [
      t`Group 1 is $3, 5$ and group 2 is $12, 14, 16$: together they make one **combined** group of five values.`,
      t`Each group spreads about its own mean: $\bar{x}_1 = 4$ and $\bar{x}_2 = 14$.`,
      t`Recall: a group's **variance** $\sigma^2$ measures that spread, and its S.D. $\sigma$ is the square root.`,
      t`The **combined mean** $\bar{x}_c$ is the mean of all five values: here $10$.`,
      t`Each group mean sits a **gap** $d$ from it: $d_1 = 4 - 10 = -6$ and $d_2 = 14 - 10 = 4$.`,
      t`So the combined variance adds two spreads, weighted by the group sizes: within each group, and the gaps between the means.`,
    ],
    figure: {
      alt: "A number line from 0 to 20. Group 1, the values 3 and 5, sits on the left with its mean 4 marked; group 2, the values 12, 14 and 16, sits on the right with its mean 14 marked. A dashed line at 10 marks the combined mean. Arrows from the combined mean to each group mean show the gaps: d₁ = −6 to the left and d₂ = 4 to the right.",
      axes: "none",
      view: { x: [-1, 21], y: [-3.2, 5.6] },
      elements: [
        { kind: "segment", from: [0, 0], to: [20, 0], tone: "muted" },
        { kind: "point", at: [3, 0], tone: "good", step: 1 },
        { kind: "point", at: [5, 0], tone: "good", step: 1 },
        { kind: "label", at: [3, 0], label: "3", labelAt: "s", step: 1 },
        { kind: "label", at: [5, 0], label: "5", labelAt: "s", step: 1 },
        { kind: "label", at: [4, -1.4], label: "group 1", labelAt: "s", tone: "good", step: 1 },
        { kind: "point", at: [12, 0], step: 1 },
        { kind: "point", at: [14, 0], step: 1 },
        { kind: "point", at: [16, 0], step: 1 },
        { kind: "label", at: [12, 0], label: "12", labelAt: "s", step: 1 },
        { kind: "label", at: [14, 0], label: "14", labelAt: "s", step: 1 },
        { kind: "label", at: [16, 0], label: "16", labelAt: "s", step: 1 },
        { kind: "label", at: [14, -1.4], label: "group 2", labelAt: "s", step: 1 },
        { kind: "segment", from: [4, 0], to: [4, 1.2], tone: "good", step: 2 },
        { kind: "label", at: [4, 1.2], label: "mean 4", labelAt: "n", tone: "good", step: 2 },
        { kind: "segment", from: [14, 0], to: [14, 1.2], step: 2 },
        { kind: "label", at: [14, 1.2], label: "mean 14", labelAt: "n", step: 2 },
        { kind: "segment", from: [10, -0.8], to: [10, 4.4], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [10, 4.4], label: "combined mean 10", labelAt: "n", step: 4 },
        { kind: "vector", from: [10, 3], to: [4, 3], tone: "bad", step: 5 },
        { kind: "label", at: [7, 3], label: "d₁ = −6", labelAt: "n", tone: "bad", step: 5 },
        { kind: "vector", from: [10, 3], to: [14, 3], tone: "bad", step: 5 },
        { kind: "label", at: [12, 3], label: "d₂ = 4", labelAt: "n", tone: "bad", step: 5 },
      ],
    },
    formal: [
      {
        title: "Step 1: the combined mean",
        points: [
          t`$n_1$ and $n_2$ are the two group sizes, and $\bar{x}_1$, $\bar{x}_2$ their means.`,
          t`The combined mean $\bar{x}_c$ equals $\frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$.`,
          t`The top is the total of all the values; the bottom counts them.`,
          t`A bigger group pulls harder: $\bar{x}_c$ lies nearer to its mean.`,
          t`Always find $\bar{x}_c$ first: the gaps and the variance both use it.`,
        ],
      },
      {
        title: "Step 2: the gaps",
        points: [
          t`Each **gap** $d$ is a group mean measured from the combined mean.`,
          t`$d_1 = \bar{x}_1 - \bar{x}_c$.`,
          t`$d_2 = \bar{x}_2 - \bar{x}_c$.`,
          t`Measure both from $\bar{x}_c$, not from the other group's mean.`,
        ],
      },
      {
        title: "Step 3: combined variance and S.D.",
        points: [
          t`Each group brings its variance plus its squared gap: $\sigma_1^2 + d_1^2$ and $\sigma_2^2 + d_2^2$.`,
          t`Weight each by its group size: $n_1(\sigma_1^2 + d_1^2)$ and $n_2(\sigma_2^2 + d_2^2)$.`,
          t`Add them and divide by $n_1 + n_2$: that is the combined variance $\sigma_c^2$.`,
          t`The combined S.D. is $\sigma_c = \sqrt{\sigma_c^2}$.`,
          t`Combine variances, never S.D.s.`,
          t`Take the square root only at the end.`,
        ],
      },
      {
        title: "Why the formula works",
        points: [
          t`Recall the shortcut: $\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2$.`,
          t`So each group's sum of squares is $\sum x_i^2 = n(\sigma^2 + \bar{x}^2)$.`,
          t`Add the two groups' sums of squares and divide by $n_1 + n_2$.`,
          t`Subtract $\bar{x}_c^2$: this gives the same $\sigma_c^2$.`,
          t`Use this route when the sums $\sum x_i$ and $\sum x_i^2$ are given.`,
        ],
      },
      {
        title: "Added values and working backwards",
        points: [
          t`A few **added observations** form a second group of their own.`,
          t`Find their own mean and variance first, then combine the two groups as usual.`,
          t`**Working backwards**, the combined figures are given and one group's are missing.`,
          t`First, $n_2$ is the combined size minus $n_1$.`,
          t`Next, find $\bar{x}_2$ from the mean equation.`,
          t`Then solve the variance equation for $\sigma_2^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two samples of sizes $10$ and $30$ have means $12$ and $20$ and standard deviations $5$ and $3$. Find the standard deviation of the combined sample of $40$.`,
      steps: [
        t`Combined mean: $\bar{x}_c = \frac{10 \times 12 + 30 \times 20}{10 + 30}$ $= \frac{120 + 600}{40}$ $= 18$.`,
        t`Gaps from the combined mean: $d_1 = 12 - 18 = -6$ and $d_2 = 20 - 18 = 2$.`,
        t`$\sigma_c^2 = \frac{10(5^2 + 6^2) + 30(3^2 + 2^2)}{40}$ $= \frac{610 + 390}{40}$ $= \frac{1000}{40}$ $= 25$.`,
        t`$\sigma_c = \sqrt{25} = 5$. Without the $d$-terms you would get $\sqrt{13}$, too small: it misses the gap between the means.`,
      ],
      answer: t`The combined S.D. is $5$.`,
    },
    visualSpec: t`Two clusters of dots on a number line with sliders for each group's size, mean and spread; bars show the within-group part $n_1\sigma_1^2 + n_2\sigma_2^2$ and the between-group part $n_1d_1^2 + n_2d_2^2$ adding up to the combined variance as the means are dragged apart.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Leaving out the d-terms: taking the combined variance as the size-weighted mean of the two variances",
      remediation: t`When the group means differ, the values also spread because of that gap. Add $d_1^2$ and $d_2^2$ to the variances: $\sigma_c^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M2",
      mistake: "Averaging the S.D.s (weighted by size) instead of the variances",
      remediation: t`S.D.s do not combine by averaging; variances, the squares, do. Put $\sigma_1^2$ and $\sigma_2^2$ into the formula and take the square root only at the end.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M3",
      mistake: "Giving the variance as the S.D.: stopping before the square root",
      remediation: t`The formula gives $\sigma^2$, the variance. The standard deviation is its positive square root, in the same units as the data.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M4",
      mistake: "Taking the combined mean as the plain average of the two means, ignoring the group sizes",
      remediation: t`Groups of different sizes pull the mean unequally: $\bar{x}_c = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$. Measure $d_1$ and $d_2$ from this mean.`,
      fallback: { kind: "ext", topic: "mean" },
    },
    {
      id: "C07-M5",
      mistake: t`Taking d as the gap between the two group means, $\bar{x}_1 - \bar{x}_2$, for both groups`,
      remediation: t`Each $d$ is measured from the combined mean: $d_1 = \bar{x}_1 - \bar{x}_c$ and $d_2 = \bar{x}_2 - \bar{x}_c$. Find $\bar{x}_c$ first.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C07-M1 gives the key when the two group means are equal (both $d = 0$), and C07-M2 gives it when both the means and the S.D.s are equal; draw diagnosing items with different means.`,
    "C07-M4 can't be detected when the two groups are the same size (the plain average is then the combined mean) or when the combined mean is given (Q6), so its models raise there.",
    "Book data changed for exact answers, refs kept: Ex 8.3 Q2 uses X (13, 2, 20) and Y (23, 8, 30); Ex 8.3 Q1 uses means 35, 29 and S.D.s 5, 7; Misc II Q12 uses 48 observations (mean 40, S.D. 5) plus 50 and 80; Misc II Q13 uses S.D.s 9 and 11. 8.3 SolvedEx.2 and Misc II Q14 keep the book's numbers.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.3 Q2" },
      stem: t`For a certain data, the following information is available. $$\begin{array}{c|c|c} & X & Y \\ \hline \text{Mean} & 13 & 23 \\ \text{S.D.} & 2 & 8 \\ \text{Size} & 20 & 30 \end{array}$$ The combined standard deviation is:`,
      verify: { kind: "value", inputs: { n1: "20", m1: "13", s1: "2", n2: "30", m2: "23", s2: "8" }, params: { kind: "combine" } },
      options: [
        { key: "A", text: t`$64$`, correct: false, misconceptionId: "C07-M3", value: "64" },
        { key: "B", text: t`$\sqrt{65}$`, correct: false, misconceptionId: "C07-M4", value: "sqrt(65)" },
        { key: "C", text: t`$8$`, correct: true, value: "8" },
        { key: "D", text: t`$2 \sqrt{10}$`, correct: false, misconceptionId: "C07-M1", value: "2*sqrt(10)" },
      ],
      solution: {
        steps: [
          t`Combined mean: $\bar{x}_c = \frac{20 \times 13 + 30 \times 23}{50} = \frac{950}{50} = 19$, so $d_1 = 13 - 19 = -6$ and $d_2 = 23 - 19 = 4$.`,
          t`$\sigma_c^2 = \frac{20(2^2 + 6^2) + 30(8^2 + 4^2)}{50} = \frac{800 + 2400}{50} = 64$.`,
          t`$\sigma_c = \sqrt{64} = 8$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.3 Q1" },
      stem: t`The means of two samples of sizes $60$ and $120$ are $35$ and $29$, and their standard deviations are $5$ and $7$. The standard deviation of the sample of size $180$ obtained by combining the two samples is:`,
      verify: { kind: "value", inputs: { n1: "60", m1: "35", s1: "5", n2: "120", m2: "29", s2: "7" }, params: { kind: "combine" } },
      options: [
        { key: "A", text: t`$\sqrt{41}$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(41)" },
        { key: "B", text: t`$\frac{19}{3}$`, correct: false, misconceptionId: "C07-M2", value: "19/3" },
        { key: "C", text: t`$\sqrt{77}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(77)" },
        { key: "D", text: t`$7$`, correct: true, value: "7" },
      ],
      solution: {
        steps: [
          t`Combined mean: $\bar{x}_c = \frac{60 \times 35 + 120 \times 29}{180} = \frac{5580}{180} = 31$, so $d_1 = 35 - 31 = 4$ and $d_2 = 29 - 31 = -2$.`,
          t`$\sigma_c^2 = \frac{60(5^2 + 4^2) + 120(7^2 + 2^2)}{180} = \frac{2460 + 6360}{180} = \frac{8820}{180} = 49$.`,
          t`$\sigma_c = \sqrt{49} = 7$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.3 SolvedEx.2" },
      stem: t`The first group has $100$ items with mean $45$ and variance $49$. The combined group has $250$ items with mean $51$ and variance $130$. The standard deviation of the second group is:`,
      verify: { kind: "value", inputs: { n1: "100", m1: "45", s1: "7", n: "250", m: "51", s: "sqrt(130)" }, params: { kind: "second" } },
      options: [
        { key: "A", text: t`$2 \sqrt{31}$`, correct: false, misconceptionId: "C07-M4", value: "2*sqrt(31)" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$2 \sqrt{46}$`, correct: false, misconceptionId: "C07-M1", value: "2*sqrt(46)" },
        { key: "D", text: t`$144$`, correct: false, misconceptionId: "C07-M3", value: "144" },
      ],
      solution: {
        steps: [
          t`$n_2 = 250 - 100 = 150$. From the mean: $51 = \frac{100 \times 45 + 150\,\bar{x}_2}{250}$, so $12750 = 4500 + 150\,\bar{x}_2$ and $\bar{x}_2 = 55$.`,
          t`$d_1 = 45 - 51 = -6$ and $d_2 = 55 - 51 = 4$.`,
          t`$130 = \frac{100(49 + 36) + 150(\sigma_2^2 + 16)}{250}$, so $32500 = 8500 + 2400 + 150\,\sigma_2^2$ and $\sigma_2^2 = 144$.`,
          t`$\sigma_2 = \sqrt{144} = 12$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q12" },
      stem: t`The mean and S.D. of a group of $48$ observations are $40$ and $5$. Two more observations, $50$ and $80$, are added to the set. The S.D. of all $50$ observations is:`,
      verify: { kind: "value", inputs: { n1: "48", m1: "40", s1: "5", a: "50", b: "80" }, params: { kind: "add" } },
      options: [
        { key: "A", text: t`$\sqrt{57}$`, correct: true, value: "sqrt(57)" },
        { key: "B", text: t`$\sqrt{33}$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(33)" },
        { key: "C", text: t`$\frac{27}{5}$`, correct: false, misconceptionId: "C07-M2", value: "27/5" },
        { key: "D", text: t`$57$`, correct: false, misconceptionId: "C07-M3", value: "57" },
      ],
      solution: {
        steps: [
          t`Treat $50$ and $80$ as a second group: $n_2 = 2$, $\bar{x}_2 = 65$, $\sigma_2^2 = \frac{15^2 + 15^2}{2} = 225$.`,
          t`Combined mean: $\bar{x}_c = \frac{48 \times 40 + 2 \times 65}{50} = \frac{2050}{50} = 41$, so $d_1 = -1$ and $d_2 = 24$.`,
          t`$\sigma_c^2 = \frac{48(25 + 1) + 2(225 + 576)}{50} = \frac{1248 + 1602}{50} = 57$, so $\sigma_c = \sqrt{57}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q14" },
      stem: t`For $5$ pairs of observations of two variables $x$ and $y$: $\sum x_i = 30$, $\sum y_i = 40$, $\sum x_i^2 = 220$, $\sum y_i^2 = 340$. The combined S.D. of all $10$ observations is:`,
      verify: { kind: "value", inputs: { n1: "5", Sx: "30", Sxx: "220", n2: "5", Sy: "40", Syy: "340" }, params: { kind: "sums" } },
      options: [
        { key: "A", text: t`$\sqrt{6}$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(6)" },
        { key: "B", text: t`$1 + \sqrt{2}$`, correct: false, misconceptionId: "C07-M2", value: "1 + sqrt(2)" },
        { key: "C", text: t`$\sqrt{10}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(10)" },
        { key: "D", text: t`$\sqrt{7}$`, correct: true, value: "sqrt(7)" },
      ],
      solution: {
        steps: [
          t`For $x$: $\bar{x} = 6$, $\sigma_x^2 = \frac{220}{5} - 36 = 8$. For $y$: $\bar{y} = 8$, $\sigma_y^2 = \frac{340}{5} - 64 = 4$.`,
          t`Combined mean $= \frac{30 + 40}{10} = 7$, so $d_1 = -1$ and $d_2 = 1$.`,
          t`$\sigma_c^2 = \frac{5(8 + 1) + 5(4 + 1)}{10} = \frac{70}{10} = 7$, so $\sigma_c = \sqrt{7}$. Check: $\frac{220 + 340}{10} - 7^2 = 7$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q13" },
      stem: t`The mean height of $200$ students is $65$ inches. The mean heights of the boys and the girls are $70$ inches and $62$ inches, and their standard deviations are $9$ inches and $11$ inches. The combined S.D. of the heights (in inches) is:`,
      verify: { kind: "value", inputs: { n: "200", m: "65", m1: "70", m2: "62", s1: "9", s2: "11" }, params: { kind: "split" } },
      options: [
        { key: "A", text: t`$11$`, correct: true, value: "11" },
        { key: "B", text: t`$\frac{41}{4}$`, correct: false, misconceptionId: "C07-M2", value: "41/4" },
        { key: "C", text: t`$121$`, correct: false, misconceptionId: "C07-M3", value: "121" },
        { key: "D", text: t`$\sqrt{170}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(170)" },
      ],
      solution: {
        steps: [
          t`Let there be $n_1$ boys: $70n_1 + 62(200 - n_1) = 200 \times 65$, so $8n_1 = 600$, $n_1 = 75$ boys and $125$ girls.`,
          t`$d_1 = 70 - 65 = 5$ and $d_2 = 62 - 65 = -3$.`,
          t`$\sigma_c^2 = \frac{75(81 + 25) + 125(121 + 9)}{200} = \frac{7950 + 16250}{200} = 121$, so $\sigma_c = 11$ inches.`,
        ],
      },
    },
  ],
};
