import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Ten values are all equal to $10$. What is their standard deviation? **And could a standard deviation ever come out negative?**`,
    reveal: t`Every value equals the mean $10$, so every deviation is $0$, the variance is $0$ and $\sigma = 0$. It can never be negative: $\sigma$ is the positive square root of the variance. It is $0$ only when all the values are equal, with no spread at all.`,
  },
  explanation: {
    intuition: t`Variance measures spread, but in squared units: marks², kg². That is hard to read beside the data. Take its square root and you are back in the data's own units: that is the standard deviation, $\sigma$. Think of it as a typical distance of the values from their mean. Being a square root, it is never negative, and it is $0$ only when there is no spread at all.`,
    formal: t`**Standard deviation (S.D.)**

$$\sigma = \sqrt{\text{Var}(X)} = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}} = \sqrt{\frac{\sum x_i^2}{n} - \bar{x}^2}$$

Work out the whole variance first, then take its **positive** square root.

**Units and sign.** If the data are in kg, the variance is in kg² and $\sigma$ is in kg. Always $\sigma \ge 0$, and $\sigma = 0$ only when all the observations are equal.

**Going back.** The variance is $\sigma^2$. From the mean and the S.D. of $n$ observations: $\sum x_i^2 = n(\sigma^2 + \bar{x}^2)$.

**Two results to remember.** For the first $n$ natural numbers, $\sigma = \sqrt{\frac{n^2 - 1}{12}}$: $n = 5$ gives $\sigma = \sqrt{2}$. For two numbers $a$ and $b$, $\sigma = \frac{|a - b|}{2}$, half the range.`,
    worked: {
      prompt: t`The daily hours of study of 5 students are $2, 5, 6, 8, 9$. Find the standard deviation.`,
      steps: [
        t`Mean: $\bar{x} = \frac{2 + 5 + 6 + 8 + 9}{5} = \frac{30}{5} = 6$ hours.`,
        t`Deviations from $6$: $-4, -1, 0, 2, 3$. Their squares: $16, 1, 0, 4, 9$, with sum $30$.`,
        t`Variance: $\sigma^2 = \frac{30}{5} = 6$ hours².`,
        t`S.D.: $\sigma = \sqrt{6} \approx 2.45$ hours, the positive root, back in hours.`,
      ],
      answer: t`$\sigma = \sqrt{6} \approx 2.45$ hours.`,
    },
    visualSpec: t`Drag points along a number line and watch the squared deviations, the variance (in squared units) and its root $\sigma$ update; $\sigma$ shrinks to $0$ as all the points meet.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Stopping at the variance: giving $\sigma^2$ as the S.D.`,
      remediation: t`The S.D. is the square root of the variance, $\sigma = \sqrt{\sigma^2}$. The variance is in squared units (kg²); its root brings you back to the data's units (kg).`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Thinking the S.D. can be negative: $\sigma = \pm\sqrt{\text{variance}}$`,
      remediation: t`The S.D. is the **positive** square root of the variance, so it is never negative. It is $0$ only when all the observations are equal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Leaving out $-\bar{x}^2$: taking $\sigma = \sqrt{\frac{\sum x_i^2}{n}}$, the root of the mean of the squares`,
      remediation: t`The variance is $\frac{\sum x_i^2}{n} - \bar{x}^2$: subtract the square of the mean before taking the root. Without it you measure the size of the values, not their spread.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: t`Splitting the root over the minus sign: $\sqrt{\frac{\sum x_i^2}{n} - \bar{x}^2} = \sqrt{\frac{\sum x_i^2}{n}} - \bar{x}$`,
      remediation: t`A square root does not split over a minus sign: $\sqrt{a - b} \ne \sqrt{a} - \sqrt{b}$. Work out $\frac{\sum x_i^2}{n} - \bar{x}^2$ first, then take the root of that one number.`,
      fallback: { kind: "ext", topic: "laws of square roots" },
    },
    {
      id: "C04-M5",
      mistake: t`Not dividing by $n$: taking $\sigma = \sqrt{\sum (x_i - \bar{x})^2}$`,
      remediation: t`The variance is the **mean** of the squared deviations: divide their sum by $n$, then take the root.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M2 (plus or minus the root) has no model when $\sigma = 0$, nor on a question that recovers $\sum x_i^2$ from $\sigma$ (its square is the same either way); draw it from a question that asks for $\sigma$ itself.`,
    t`Book data changed for clean answers: Q1 is SolvedEx.1's evenly spaced data shortened to $12, \dots, 24$; Q6 replaces Ex 8.2 Q2's data (a messy decimal) with weights giving $\sigma = 5\sqrt{6}$; Q2's sums are authored on SolvedEx.2's alternate method; Q3 asks for $\sigma$ with $n = 7$ (Misc I Q5 asks for $n$ given $\sigma = \sqrt{2}$, used in the formal slide). Q5 is the first step of Misc II Q11, with its numbers.`,
    t`Misc I Q2 in the book keys the variance $5$ as the S.D. (the S.D. is $\sqrt{5}$): exactly C04-M1. Don't use that book key.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.2.3 SolvedEx.1" },
      stem: t`The marks of 5 students in a test are $12, 15, 18, 21, 24$. The standard deviation of the marks is:`,
      verify: { kind: "value", inputs: { xs: "(12, 15, 18, 21, 24)" }, params: { ask: "raw" } },
      options: [
        { key: "A", text: t`$3 \sqrt{38}$`, correct: false, misconceptionId: "C04-M3", value: "3*sqrt(38)" },
        { key: "B", text: t`$3 \sqrt{10}$`, correct: false, misconceptionId: "C04-M5", value: "3*sqrt(10)" },
        { key: "C", text: t`$3 \sqrt{2}$`, correct: true, value: "3*sqrt(2)" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C04-M1", value: "18" },
      ],
      solution: {
        steps: [
          t`Mean: $\bar{x} = \frac{12 + 15 + 18 + 21 + 24}{5} = \frac{90}{5} = 18$.`,
          t`Deviations: $-6, -3, 0, 3, 6$. Squares: $36, 9, 0, 9, 36$, with sum $90$.`,
          t`Variance $= \frac{90}{5} = 18$, so $\sigma = \sqrt{18} = 3\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.2.3 SolvedEx.2" },
      stem: t`For $10$ observations, $\sum x_i^2 = 1000$ and the mean is $\bar{x} = 8$. Their standard deviation is:`,
      verify: { kind: "value", inputs: { n: "10", sx2: "1000", mean: "8" }, params: { ask: "sums" } },
      options: [
        { key: "A", text: t`$\pm 6$`, correct: false, misconceptionId: "C04-M2", value: "{-6, 6}" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C04-M3", value: "10" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C04-M4", value: "2" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Variance $= \frac{\sum x_i^2}{n} - \bar{x}^2 = \frac{1000}{10} - 8^2 = 100 - 64 = 36$.`,
          t`$\sigma = \sqrt{36} = 6$: the positive root only, since an S.D. is never negative.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q5" },
      stem: t`The standard deviation of the first $7$ natural numbers, $1, 2, 3, \dots, 7$, is:`,
      verify: { kind: "value", inputs: { n: "7" }, params: { ask: "nat" } },
      options: [
        { key: "A", text: t`$2 \sqrt{5}$`, correct: false, misconceptionId: "C04-M3", value: "2*sqrt(5)" },
        { key: "B", text: t`$2 \sqrt{7}$`, correct: false, misconceptionId: "C04-M5", value: "2*sqrt(7)" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C04-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`For the first $n$ natural numbers, $\sigma^2 = \frac{n^2 - 1}{12} = \frac{49 - 1}{12} = 4$.`,
          t`Check: the mean is $4$, the squared deviations are $9, 4, 1, 0, 1, 4, 9$, with sum $28$, and $\frac{28}{7} = 4$.`,
          t`$\sigma = \sqrt{4} = 2$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q8" },
      stem: t`The standard deviation of the two numbers $6$ and $14$ is:`,
      verify: { kind: "value", inputs: { xs: "(6, 14)" }, params: { ask: "raw" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C04-M1", value: "16" },
        { key: "B", text: t`$\pm 4$`, correct: false, misconceptionId: "C04-M2", value: "{-4, 4}" },
        { key: "C", text: t`$4 \sqrt{2}$`, correct: false, misconceptionId: "C04-M5", value: "4*sqrt(2)" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Mean: $\frac{6 + 14}{2} = 10$. Deviations: $-4$ and $4$, squares $16$ and $16$.`,
          t`Variance $= \frac{32}{2} = 16$, so $\sigma = \sqrt{16} = 4$.`,
          t`This is half the range, $\frac{14 - 6}{2} = 4$, as it is for any two numbers.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q11" },
      stem: t`The mean and the standard deviation of $20$ observations are $20$ and $5$. The sum of the squares of the observations, $\sum x_i^2$, is:`,
      verify: { kind: "value", inputs: { n: "20", mean: "20", sd: "5" }, params: { ask: "back" } },
      options: [
        { key: "A", text: t`$12500$`, correct: false, misconceptionId: "C04-M4", value: "12500" },
        { key: "B", text: t`$8500$`, correct: true, value: "8500" },
        { key: "C", text: t`$8100$`, correct: false, misconceptionId: "C04-M1", value: "8100" },
        { key: "D", text: t`$500$`, correct: false, misconceptionId: "C04-M3", value: "500" },
      ],
      solution: {
        steps: [
          t`$\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2$, so $\frac{\sum x_i^2}{n} = \sigma^2 + \bar{x}^2 = 25 + 400 = 425$.`,
          t`$\sum x_i^2 = 20 \times 425 = 8500$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q2" },
      stem: t`The weights (in kg) of 7 students are $60, 70, 75, 80, 85, 90, 100$. Their standard deviation, in kg, is:`,
      verify: { kind: "value", inputs: { xs: "(60, 70, 75, 80, 85, 90, 100)" }, params: { ask: "raw" } },
      options: [
        { key: "A", text: t`$5 \sqrt{6}$`, correct: true, value: "5*sqrt(6)" },
        { key: "B", text: t`$150$`, correct: false, misconceptionId: "C04-M1", value: "150" },
        { key: "C", text: t`$\pm 5\sqrt{6}$`, correct: false, misconceptionId: "C04-M2", value: "{-5*sqrt(6), 5*sqrt(6)}" },
        { key: "D", text: t`$5\sqrt{262} - 80$`, correct: false, misconceptionId: "C04-M4", value: "-80 + 5*sqrt(262)" },
      ],
      solution: {
        steps: [
          t`Mean: $\bar{x} = \frac{560}{7} = 80$ kg. Deviations: $-20, -10, -5, 0, 5, 10, 20$.`,
          t`Squares: $400, 100, 25, 0, 25, 100, 400$, with sum $1050$. Variance $= \frac{1050}{7} = 150$ kg².`,
          t`$\sigma = \sqrt{150} = 5\sqrt{6} \approx 12.25$ kg, back in kg.`,
        ],
      },
    },
  ],
};
