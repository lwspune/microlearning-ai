import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Elephants in a herd: mean weight $4000$ kg, S.D. $200$ kg. Mice in a cage: mean weight $20$ g, S.D. $4$ g. **Whose weights vary more?**`,
    reveal: t`Judged by $\sigma$ alone, the elephants: $200$ kg against $4$ g. But $200$ kg is only $5\%$ of an elephant's mean weight, while $4$ g is $20\%$ of a mouse's. Relative to their size, the mice vary four times as much. That ratio, $\frac{\sigma}{\bar{x}} \times 100$, is the coefficient of variation.`,
  },
  explanation: {
    intuition: t`The standard deviation is in the data's own units, and it tends to grow with the size of the values. A spread of $5$ kg is tiny for elephants and huge for kittens. Dividing $\sigma$ by the mean gives the spread per unit of mean, a pure number that we write as a percentage. Now groups with different means, or even different units, can be compared fairly: the smaller the C.V., the more consistent the group.`,
    formal: t`**Definition.** The coefficient of variation is $$\text{C.V.} = \frac{\sigma}{\bar{x}} \times 100$$ The S.D. goes on top, the mean below, and the result is a percentage with no units.

**From the variance.** C.V. uses $\sigma$, not $\sigma^2$. If the variance is given, take its square root first.

**Working backwards.** Rearrange the same formula: $\sigma = \frac{\text{C.V.} \times \bar{x}}{100}$ and $\bar{x} = \frac{100\,\sigma}{\text{C.V.}}$.

**Comparing groups.** The smaller C.V. is the more consistent (stable, uniform) group; the larger C.V. is the more variable one. Compare C.V.s, not S.D.s, because the means differ. And consistency is not a high mean: the best average need not be the steadiest.`,
    worked: {
      prompt: t`A shop's daily sales over five days are $49, 53, 50, 47, 51$ units. Find the coefficient of variation. Another shop's sales have C.V. $6\%$: which shop's sales are more consistent?`,
      steps: [
        t`Mean: $\bar{x} = \frac{49 + 53 + 50 + 47 + 51}{5} = \frac{250}{5} = 50$.`,
        t`Deviations from $50$: $-1, 3, 0, -3, 1$. Their squares add to $1 + 9 + 0 + 9 + 1 = 20$, so $\sigma^2 = \frac{20}{5} = 4$ and $\sigma = 2$.`,
        t`C.V. $= \frac{\sigma}{\bar{x}} \times 100 = \frac{2}{50} \times 100 = 4\%$.`,
        t`$4\% < 6\%$: the smaller C.V. is the more consistent, so the first shop's sales are more consistent.`,
      ],
      answer: t`C.V. $= 4\%$; the first shop is more consistent.`,
    },
    visualSpec: t`Two dot plots with sliders for each group's mean and S.D.; a bar beside each shows its C.V., and the group with the shorter bar is marked more consistent.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Turns the ratio upside down: C.V. = mean / σ × 100",
      remediation: t`The standard deviation goes on top: C.V. $= \frac{\sigma}{\bar{x}} \times 100$. It measures spread per unit of mean, so more spread gives a larger C.V.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Puts the variance on top instead of the standard deviation",
      remediation: t`C.V. uses the standard deviation $\sigma$, not the variance $\sigma^2$. When the variance is given, take its square root first.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: "Leaves out the factor 100, taking σ / mean itself as the percentage",
      remediation: t`$\frac{\sigma}{\bar{x}}$ is a fraction of the mean. Multiply it by $100$ to get the C.V. as a percentage.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Reads the C.V. backwards: takes the larger C.V. as the more consistent",
      remediation: "The C.V. measures relative spread. The smaller the C.V., the more consistent (stable) the data; the larger the C.V., the more variable.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Compares the standard deviations alone, ignoring the means",
      remediation: t`When the means differ, the raw $\sigma$ misleads: bigger values usually spread more. Compare the C.V.s, $\frac{\sigma}{\bar{x}} \times 100$, which measure spread relative to the mean.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Takes the group with the highest mean as the most consistent",
      remediation: "A high mean is a good average, not consistency. The most consistent group is the one with the smallest C.V.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M3 can't be detected by a comparison item (the factor 100 doesn't change the order), and on a comparison C06-M1 picks the same group as C06-M4, so comparison items tag C06-M4 only. C06-M6 applies only to 'most consistent' questions.",
    t`C06-Q4: the book's Misc II Q21 (company U) has frequencies 5, 18, 17; changed to 3, 22, 15 so that $\sigma = 3$ and C.V. $= \frac{100}{3}\%$ are exact.`,
    "C06-Q5: the book's 8.3.1 Solved Ex. 1 has three batsmen; a fourth (Sahil, mean 30, S.D. 12) is added so that each mistake picks a different batsman.",
    "C06-Q6: the book's Ex 8.3 Q10 gives two subjects with S.D.s; changed to four subjects with variances so that each mistake picks a different subject.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q16" },
      stem: t`The weights of $100$ boys in a school have mean $60$ kg and variance $16$ kg$^2$. The coefficient of variation of their weights is:`,
      verify: { kind: "value", inputs: { m: "60", v: "16" }, params: { ask: "cv" } },
      options: [
        { key: "A", text: t`$1500\%$`, correct: false, misconceptionId: "C06-M1", value: "1500" },
        { key: "B", text: t`$\frac{80}{3}\%$`, correct: false, misconceptionId: "C06-M2", value: "80/3" },
        { key: "C", text: t`$\frac{1}{15}\%$`, correct: false, misconceptionId: "C06-M3", value: "1/15" },
        { key: "D", text: t`$\frac{20}{3}\%$`, correct: true, value: "20/3" },
      ],
      solution: {
        steps: [
          t`The variance is $16$, so $\sigma = \sqrt{16} = 4$ kg.`,
          t`C.V. $= \frac{\sigma}{\bar{x}} \times 100 = \frac{4}{60} \times 100 = \frac{20}{3}\% \approx 6.67\%$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc I Q10" },
      stem: t`The standard deviation of a set of data is $12$ and its mean is $72$. The coefficient of variation is:`,
      verify: { kind: "value", inputs: { m: "72", s: "12" }, params: { ask: "cv" } },
      options: [
        { key: "A", text: t`$\frac{50}{3}\%$`, correct: true, value: "50/3" },
        { key: "B", text: t`$600\%$`, correct: false, misconceptionId: "C06-M1", value: "600" },
        { key: "C", text: t`$200\%$`, correct: false, misconceptionId: "C06-M2", value: "200" },
        { key: "D", text: t`$\frac{1}{6}\%$`, correct: false, misconceptionId: "C06-M3", value: "1/6" },
      ],
      solution: {
        steps: [
          t`C.V. $= \frac{\sigma}{\bar{x}} \times 100$ with $\sigma = 12$ and $\bar{x} = 72$.`,
          t`$\frac{12}{72} \times 100 = \frac{1}{6} \times 100 = \frac{50}{3}\% \approx 16.67\%$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.3 Q5" },
      stem: t`A group of $65$ students of Std XI has an average height of $150.4$ cm, with coefficient of variation $2.5\%$. The standard deviation of their heights, in cm, is:`,
      verify: { kind: "value", inputs: { m: "752/5", cv: "5/2" }, params: { ask: "sd" } },
      options: [
        { key: "A", text: t`$3.76$`, correct: true, value: "94/25" },
        { key: "B", text: t`$6016$`, correct: false, misconceptionId: "C06-M1", value: "6016" },
        { key: "C", text: t`$\sqrt{3.76}$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(94)/5" },
        { key: "D", text: t`$376$`, correct: false, misconceptionId: "C06-M3", value: "376" },
      ],
      solution: {
        steps: [
          t`From C.V. $= \frac{\sigma}{\bar{x}} \times 100$: $\sigma = \frac{\text{C.V.} \times \bar{x}}{100}$.`,
          t`$\sigma = \frac{2.5 \times 150.4}{100} = \frac{376}{100} = 3.76$ cm.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Misc II Q21" },
      stem: t`The running lives of $40$ cars made by company U are recorded: $$\begin{array}{c|c} \text{Life (years)} & \text{No. of cars} \\ \hline 0\text{–}5 & 3 \\ 5\text{–}10 & 22 \\ 10\text{–}15 & 15 \end{array}$$ The coefficient of variation of their life is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cv", xs: ["5/2", "15/2", "25/2"], fs: ["3", "22", "15"] } },
      options: [
        { key: "A", text: t`$\frac{1}{3}\%$`, correct: false, misconceptionId: "C06-M3", value: "1/3" },
        { key: "B", text: t`$\frac{100}{3}\%$`, correct: true, value: "100/3" },
        { key: "C", text: t`$300\%$`, correct: false, misconceptionId: "C06-M1", value: "300" },
        { key: "D", text: t`$100\%$`, correct: false, misconceptionId: "C06-M2", value: "100" },
      ],
      solution: {
        steps: [
          t`Class marks $x$: $2.5$, $7.5$, $12.5$, with $N = 40$.`,
          t`$\sum fx = 7.5 + 165 + 187.5 = 360$, so $\bar{x} = \frac{360}{40} = 9$ years.`,
          t`$\sum fx^2 = 18.75 + 1237.5 + 2343.75 = 3600$, so $\sigma^2 = \frac{3600}{40} - 9^2 = 9$ and $\sigma = 3$ years.`,
          t`C.V. $= \frac{3}{9} \times 100 = \frac{100}{3}\% \approx 33.33\%$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/8.3.1 SolvedEx.1" },
      stem: t`The means and standard deviations of the runs scored by four batsmen in the same series are: $$\begin{array}{c|c|c} \text{Batsman} & \text{Mean} & \text{S.D.} \\ \hline \text{Varad} & 50 & 11 \\ \text{Viraj} & 52 & 16 \\ \text{Akhilesh} & 21 & 5 \\ \text{Sahil} & 30 & 12 \end{array}$$ Who is the most consistent?`,
      verify: { kind: "value", inputs: { m1: "50", s1: "11", m2: "52", s2: "16", m3: "21", s3: "5", m4: "30", s4: "12" }, params: { ask: "consistent", names: ["varad", "viraj", "akhilesh", "sahil"] } },
      options: [
        { key: "A", text: t`Varad`, correct: true, value: "varad" },
        { key: "B", text: t`Sahil`, correct: false, misconceptionId: "C06-M4", value: "sahil" },
        { key: "C", text: t`Akhilesh`, correct: false, misconceptionId: "C06-M5", value: "akhilesh" },
        { key: "D", text: t`Viraj`, correct: false, misconceptionId: "C06-M6", value: "viraj" },
      ],
      solution: {
        steps: [
          t`C.V. $= \frac{\sigma}{\bar{x}} \times 100$. Varad: $\frac{11}{50} \times 100 = 22$. Viraj: $\frac{16}{52} \times 100 \approx 30.77$. Akhilesh: $\frac{5}{21} \times 100 \approx 23.81$. Sahil: $\frac{12}{30} \times 100 = 40$.`,
          t`The smallest C.V. is Varad's, $22\%$, so Varad is the most consistent. Viraj has the highest mean and Akhilesh the smallest S.D., but neither has the smallest C.V.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/dispersion-11/Ex 8.3 Q10" },
      stem: t`The marks of $100$ students in four subjects have these means and variances: $$\begin{array}{c|c|c} \text{Subject} & \text{Mean} & \text{Variance} \\ \hline \text{Mathematics} & 20 & 25 \\ \text{Statistics} & 80 & 144 \\ \text{Physics} & 50 & 100 \\ \text{Chemistry} & 60 & 9 \end{array}$$ Which subject shows the greatest variability in marks?`,
      verify: { kind: "value", inputs: { m1: "20", v1: "25", m2: "80", v2: "144", m3: "50", v3: "100", m4: "60", v4: "9" }, params: { ask: "variable", names: ["mathematics", "statistics", "physics", "chemistry"] } },
      options: [
        { key: "A", text: t`Chemistry`, correct: false, misconceptionId: "C06-M4", value: "chemistry" },
        { key: "B", text: t`Statistics`, correct: false, misconceptionId: "C06-M5", value: "statistics" },
        { key: "C", text: t`Mathematics`, correct: true, value: "mathematics" },
        { key: "D", text: t`Physics`, correct: false, misconceptionId: "C06-M2", value: "physics" },
      ],
      solution: {
        steps: [
          t`Square roots of the variances: $\sigma = 5$, $12$, $10$, $3$.`,
          t`C.V. $= \frac{\sigma}{\bar{x}} \times 100$. Mathematics: $\frac{5}{20} \times 100 = 25$. Statistics: $\frac{12}{80} \times 100 = 15$. Physics: $\frac{10}{50} \times 100 = 20$. Chemistry: $\frac{3}{60} \times 100 = 5$.`,
          t`The largest C.V. is $25\%$, so Mathematics shows the greatest variability.`,
        ],
      },
    },
  ],
};
