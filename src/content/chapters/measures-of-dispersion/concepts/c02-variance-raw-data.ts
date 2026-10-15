import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`The sets $4, 5, 6$ and $1, 5, 9$ both have mean $5$. In each, add up the deviations from the mean, $x_i - 5$. **Both sums are $0$. So how can we tell which set is more spread out?**`,
    reveal: t`Square the deviations before adding: the signs go and the far values count more. For $4, 5, 6$ the squares add to $1 + 0 + 1 = 2$; for $1, 5, 9$ they add to $16 + 0 + 16 = 32$. Divide by $n = 3$: the variances are $\frac{2}{3}$ and $\frac{32}{3}$, so the second set is far more spread out.`,
  },
  explanation: {
    intuition: t`Spread means how far the observations sit from their mean. The deviations $x_i - \bar{x}$ always add up to $0$, so their plain average says nothing. Square them first: every square is positive, and a big deviation counts much more than a small one. The mean of these squares is the **variance**, $\sigma^2$. Its square root, the **standard deviation** $\sigma$, brings the answer back to the data's own units.`,
    formal: t`**Variance** of $n$ observations $x_1, x_2, \ldots, x_n$ with mean $\bar{x}$ (the book divides by $n$):

$$\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$$

**Lay it out as a table.** For $2, 5, 6, 9, 13$: $\bar{x} = \frac{35}{5} = 7$.

$$\begin{array}{c|c|c} x_i & x_i - \bar{x} & (x_i - \bar{x})^2 \\ \hline 2 & -5 & 25 \\ 5 & -2 & 4 \\ 6 & -1 & 1 \\ 9 & 2 & 4 \\ 13 & 6 & 36 \end{array}$$

So $\sigma^2 = \frac{70}{5} = 14$ and $\sigma = \sqrt{14}$.

**Shortcut**, handy when $\bar{x}$ is not a whole number: $\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2$, the mean of the squares minus the square of the mean. Above: $\frac{315}{5} - 7^2 = 63 - 49 = 14$.

**Standard deviation**: $\sigma = \sqrt{\sigma^2}$, never negative.

**Working backwards.** From $n$, $\bar{x}$ and $\sigma^2$ you can rebuild both sums: $\sum x_i = n\bar{x}$ and $\sum x_i^2 = n(\sigma^2 + \bar{x}^2)$. Use them to find missing observations, or to correct a misread one in **both** sums.`,
    worked: {
      prompt: t`The mean of $5$ observations is $4.8$ and the variance is $6.56$. Three of them are $1$, $3$ and $8$. Find the other two.`,
      steps: [
        t`Call them $a$ and $b$. $\sum x_i = n\bar{x} = 5 \times 4.8 = 24$, so $a + b = 24 - (1 + 3 + 8) = 12$.`,
        t`$\sum x_i^2 = n(\sigma^2 + \bar{x}^2) = 5(6.56 + 23.04) = 5 \times 29.6 = 148$, so $a^2 + b^2 = 148 - (1 + 9 + 64) = 74$.`,
        t`$2ab = (a + b)^2 - (a^2 + b^2) = 144 - 74 = 70$, so $ab = 35$.`,
        t`$a$ and $b$ are the roots of $t^2 - 12t + 35 = 0$, that is $(t - 5)(t - 7) = 0$.`,
      ],
      answer: t`The other two observations are $5$ and $7$.`,
    },
    visualSpec: t`Drag points along a number line: a square grows on each point's deviation from the mean, and the average area of the squares is the variance.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Taking the mean of the squares, $\frac{\sum x_i^2}{n}$, as the variance`,
      remediation: t`The shortcut is $\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2$: the mean of the squares **minus** the square of the mean. Without the subtraction the answer is far too big.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Subtracting $\bar{x}$ instead of $\bar{x}^2$ in the shortcut`,
      remediation: t`Subtract the square of the mean: $\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2$. Both terms are squares, so both are in squared units.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Dividing the sum of squared deviations by $n - 1$`,
      remediation: t`In this book the variance divides by $n$, the number of observations: $\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Averaging the sizes of the deviations, $|x_i - \bar{x}|$, without squaring them`,
      remediation: t`Square each deviation before you average: $\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$, and $\sigma$ is its square root. The average of $|x_i - \bar{x}|$ is a different measure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Mixing up the variance and the S.D.",
      remediation: t`The variance is $\sigma^2$; the S.D. is its positive square root, $\sigma = \sqrt{\sigma^2}$. Check which one the question asks for before you stop.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Correcting the mean after a misread item but leaving $\sum x_i^2$ unchanged`,
      remediation: t`A misread item is wrong in both sums. Rebuild $\sum x_i = n\bar{x}$ and $\sum x_i^2 = n(\sigma^2 + \bar{x}^2)$, then take out the wrong value (and its square) and put in the right one (and its square).`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M4 (averaging $|x_i - \bar{x}|$) gives the key for any two numbers, so it is not tagged on C02-Q6; diagnose it with three or more observations.`,
    "C02-M1, C02-M2 and C02-M4 apply only to raw observations (ask var or sd); C02-M6 only to a misread-item correction (ask fix).",
    t`C02-Q3 is the book's Misc I Q2, whose printed options (5, 4, 10, 15) have no correct S.D.: the book keys the variance $5$. Here the key is $\sqrt{5}$, and $5$ is the C02-M5 distractor.`,
    t`C02-Q5 changes the numbers of Misc II Q11 (20 items, mean 20, S.D. 5, 13 misread as 30), whose corrected S.D. is a messy decimal: here 10 items, mean 12, S.D. 3, 8 misread as 18, corrected S.D. $\sqrt{6}$. It asks only for the S.D.`,
    "Ex 8.2 Q8 (two unknown observations) is the worked example, not an item: the misconception models give no real pair of observations for it.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q2" },
      stem: t`The variance of the observations $65, 77, 81, 98, 100, 80, 129$ is:`,
      verify: { kind: "value", inputs: { xs: "(65, 77, 81, 98, 100, 80, 129)" }, params: { ask: "var" } },
      options: [
        { key: "A", text: t`$380$`, correct: true, value: "380" },
        { key: "B", text: t`$8480$`, correct: false, misconceptionId: "C02-M1", value: "8480" },
        { key: "C", text: t`$\frac{1330}{3}$`, correct: false, misconceptionId: "C02-M3", value: "1330/3" },
        { key: "D", text: t`$\frac{114}{7}$`, correct: false, misconceptionId: "C02-M4", value: "114/7" },
      ],
      solution: {
        steps: [
          t`$\sum x_i = 630$ and $n = 7$, so $\bar{x} = 90$.`,
          t`The deviations are $-25, -13, -9, 8, 10, -10, 39$; their squares add to $625 + 169 + 81 + 64 + 100 + 100 + 1521 = 2660$.`,
          t`$\sigma^2 = \frac{2660}{7} = 380$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q6" },
      stem: t`The standard deviation of $125, 130, 150, 165, 190, 195, 210, 230, 245, 260$ is:`,
      verify: { kind: "value", inputs: { xs: "(125, 130, 150, 165, 190, 195, 210, 230, 245, 260)" }, params: { ask: "sd" } },
      options: [
        { key: "A", text: t`$2000$`, correct: false, misconceptionId: "C02-M5", value: "2000" },
        { key: "B", text: t`$\frac{100 \sqrt{2}}{3}$`, correct: false, misconceptionId: "C02-M3", value: "100*sqrt(2)/3" },
        { key: "C", text: t`$38$`, correct: false, misconceptionId: "C02-M4", value: "38" },
        { key: "D", text: t`$20 \sqrt{5}$`, correct: true, value: "20*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`$\sum x_i = 1900$ and $n = 10$, so $\bar{x} = 190$.`,
          t`The deviations are $-65, -60, -40, -25, 0, 5, 20, 40, 55, 70$; their squares add to $20000$.`,
          t`$\sigma^2 = \frac{20000}{10} = 2000$, so $\sigma = \sqrt{2000} = 20\sqrt{5}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q2" },
      stem: t`The numbers of patients who visited a cardiologist on four days were $13, 17, 11, 15$. The standard deviation of these numbers is:`,
      verify: { kind: "value", inputs: { xs: "(13, 17, 11, 15)" }, params: { ask: "sd" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C02-M4", value: "2" },
        { key: "B", text: t`$\sqrt{5}$`, correct: true, value: "sqrt(5)" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C02-M5", value: "5" },
        { key: "D", text: t`$\sqrt{187}$`, correct: false, misconceptionId: "C02-M2", value: "sqrt(187)" },
      ],
      solution: {
        steps: [
          t`$\bar{x} = \frac{13 + 17 + 11 + 15}{4} = 14$.`,
          t`The deviations are $-1, 3, -3, 1$; their squares add to $1 + 9 + 9 + 1 = 20$, so $\sigma^2 = \frac{20}{4} = 5$.`,
          t`$\sigma = \sqrt{5} \approx 2.24$ patients.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.2 Q1" },
      stem: t`The variance of the $18$ numbers $7, 11, 2, 4, 9, 6, 3, 7, 11, 2, 5, 8, 3, 6, 8, 8, 2, 6$ is:`,
      verify: { kind: "value", inputs: { xs: "(7, 11, 2, 4, 9, 6, 3, 7, 11, 2, 5, 8, 3, 6, 8, 8, 2, 6)" }, params: { ask: "var" } },
      options: [
        { key: "A", text: t`$\frac{144}{17}$`, correct: false, misconceptionId: "C02-M3", value: "144/17" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$44$`, correct: false, misconceptionId: "C02-M1", value: "44" },
        { key: "D", text: t`$38$`, correct: false, misconceptionId: "C02-M2", value: "38" },
      ],
      solution: {
        steps: [
          t`$\sum x_i = 108$ and $n = 18$, so $\bar{x} = 6$.`,
          t`$\sum x_i^2 = 792$, so $\frac{\sum x_i^2}{n} = \frac{792}{18} = 44$.`,
          t`$\sigma^2 = 44 - 6^2 = 8$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q11" },
      stem: t`The mean and standard deviation of $10$ observations were calculated as $12$ and $3$. Later it was found that the observation $8$ had been misread as $18$. The corrected standard deviation is:`,
      verify: { kind: "value", inputs: { n: "10", m: "12", s: "3", right: "8", wrong: "18" }, params: { ask: "fix" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{51}}{3}$`, correct: false, misconceptionId: "C02-M3", value: "sqrt(51)/3" },
        { key: "B", text: t`$\sqrt{6}$`, correct: true, value: "sqrt(6)" },
        { key: "C", text: t`$4 \sqrt{2}$`, correct: false, misconceptionId: "C02-M6", value: "4*sqrt(2)" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C02-M5", value: "6" },
      ],
      solution: {
        steps: [
          t`Rebuild the sums: $\sum x_i = 10 \times 12 = 120$ and $\sum x_i^2 = 10(3^2 + 12^2) = 1530$.`,
          t`Correct both: $\sum x_i = 120 - 18 + 8 = 110$ and $\sum x_i^2 = 1530 - 324 + 64 = 1270$.`,
          t`The corrected mean is $11$, so $\sigma^2 = \frac{1270}{10} - 11^2 = 127 - 121 = 6$ and $\sigma = \sqrt{6}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q8" },
      stem: t`The standard deviation of the two numbers $3$ and $11$ is:`,
      verify: { kind: "value", inputs: { xs: "(3, 11)" }, params: { ask: "sd" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C02-M5", value: "16" },
        { key: "C", text: t`$\sqrt{65}$`, correct: false, misconceptionId: "C02-M1", value: "sqrt(65)" },
        { key: "D", text: t`$4 \sqrt{2}$`, correct: false, misconceptionId: "C02-M3", value: "4*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$\bar{x} = \frac{3 + 11}{2} = 7$, and the deviations are $-4$ and $4$.`,
          t`$\sigma^2 = \frac{16 + 16}{2} = 16$, so $\sigma = 4$: half the range $11 - 3 = 8$, as for any two numbers.`,
        ],
      },
    },
  ],
};
