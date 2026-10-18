import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`A raffle ticket wins ₹100 with probability $\frac{1}{50}$ and nothing otherwise. **On average, what is one ticket worth?**`,
    reveal: t`₹2. Out of $50$ tickets about one wins, so the $50$ tickets share ₹100: ₹2 each. That is $E(X) = 100 \times \frac{1}{50}$ $+ 0 \times \frac{49}{50} = 2$, an amount no single ticket ever pays.`,
  },
  explanation: {
    intuition: [
      t`Repeat an experiment many times and average the values of $X$ you get.`,
      t`In the long run that average settles at one number: the **expected value** $E(X)$.`,
      t`A value with probability $\frac{1}{50}$ turns up in about $1$ trial in $50$.`,
      t`So each value counts in proportion to its probability: multiply by it, then add.`,
      t`$E(X)$ need not be a value $X$ takes: the ticket is worth ₹2 but pays ₹0 or ₹100.`,
      t`The **variance** measures how widely $X$ spreads around $E(X)$.`,
    ],
    formal: [
      {
        title: "Expected value",
        points: [
          t`For a discrete r.v. $X$ with p.m.f. $P(x)$, the **expected value** is $E(X) = \sum x\,P(x)$.`,
          t`Multiply each value $x$ by its probability $P(x)$, then add all the products.`,
          t`$E(X)$ is also called the **mean** of $X$ and written $\mu$.`,
          t`The probabilities already add to $1$, so nothing is divided after the sum.`,
          t`$E(X)$ is neither the most likely value nor the plain average of the listed values.`,
        ],
      },
      {
        title: "Variance",
        points: [
          t`The **variance** of $X$ is the expected squared distance of $X$ from $\mu$.`,
          t`In symbols, $\text{Var}(X) = \sum (x - \mu)^2 P(x)$.`,
          t`Expanding the square gives the shortcut $\text{Var}(X) = \sum x^2P(x) - \mu^2$.`,
          t`Here $\sum x^2P(x)$ is $E(X^2)$: square each value, then weight it by $P(x)$.`,
          t`Subtract $\mu^2$, the square of the mean, not $\mu$ itself.`,
          t`A variance is never negative, so a negative answer signals a slip.`,
        ],
      },
      {
        title: "Standard deviation",
        points: [
          t`The **standard deviation** of $X$ is $\sigma = \sqrt{\text{Var}(X)}$.`,
          t`So the variance is $\sigma^2$, and $\sigma$ is its positive square root.`,
          t`$\sigma$ is in the same units as $X$; the variance is in squared units.`,
          t`Check which one the question asks for before you give the answer.`,
        ],
      },
      {
        title: "Lay it out as a table",
        points: [
          t`Make four columns: $x$, $P(x)$, $x\,P(x)$ and $x^2P(x)$.`,
          t`The total of the $x\,P(x)$ column is $E(X)$.`,
          t`The total of the $x^2P(x)$ column is $E(X^2)$.`,
          t`Then $\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
          t`A negative value squares to a positive one: $(-1)^2P(x) = P(x)$.`,
          t`For an experiment, first write the p.m.f. of $X$, then build the table.`,
        ],
      },
    ],
    worked: {
      prompt: t`$X$ has the p.m.f. below. Find $E(X)$, $\text{Var}(X)$ and the standard deviation of $X$.

$$\begin{array}{c|c} x & P(X = x) \\ \hline 0 & 0.1 \\ 1 & 0.3 \\ 2 & 0.4 \\ 3 & 0.2 \end{array}$$`,
      steps: [
        t`The $x\,P(x)$ column is $0, 0.3, 0.8, 0.6$, so $E(X) = 1.7$.`,
        t`The $x^2P(x)$ column is $0, 0.3, 1.6, 1.8$, so $E(X^2) = 3.7$.`,
        t`$\text{Var}(X) = 3.7 - (1.7)^2$ $= 3.7 - 2.89 = 0.81$.`,
        t`$\sigma = \sqrt{0.81} = 0.9$: most of the probability lies between $0.8$ and $2.6$.`,
      ],
      answer: t`$E(X) = 1.7$, $\text{Var}(X) = 0.81$ and $\sigma = 0.9$.`,
      figure: {
        alt: "A bar chart of the p.m.f.: bars over 0, 1, 2 and 3 with heights 0.1, 0.3, 0.4 and 0.2. A dashed line at 1.7 marks E(X) = 1.7, the balance point of the bars. Below the axis a band runs from 0.8 to 2.6, one standard deviation of 0.9 either side of the mean.",
        axes: "none",
        view: { x: [-0.8, 3.8], y: [-1.4, 3] },
        elements: [
          { kind: "segment", from: [-0.5, 0], to: [3.5, 0], tone: "muted" },
          { kind: "region", within: [{ kind: "halfPlane", through: [[-0.2, 0], [0.2, 0]] }, { kind: "halfPlane", through: [[0.2, 0], [0.2, 0.5]] }, { kind: "halfPlane", through: [[0.2, 0.5], [-0.2, 0.5]] }, { kind: "halfPlane", through: [[-0.2, 0.5], [-0.2, 0]] }] },
          { kind: "label", at: [0, 0], label: "0", labelAt: "s", tone: "muted" },
          { kind: "label", at: [0, 0.5], label: "0.1", labelAt: "n" },
          { kind: "region", within: [{ kind: "halfPlane", through: [[0.8, 0], [1.2, 0]] }, { kind: "halfPlane", through: [[1.2, 0], [1.2, 1.5]] }, { kind: "halfPlane", through: [[1.2, 1.5], [0.8, 1.5]] }, { kind: "halfPlane", through: [[0.8, 1.5], [0.8, 0]] }] },
          { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "muted" },
          { kind: "label", at: [1, 1.5], label: "0.3", labelAt: "n" },
          { kind: "region", within: [{ kind: "halfPlane", through: [[1.8, 0], [2.2, 0]] }, { kind: "halfPlane", through: [[2.2, 0], [2.2, 2]] }, { kind: "halfPlane", through: [[2.2, 2], [1.8, 2]] }, { kind: "halfPlane", through: [[1.8, 2], [1.8, 0]] }] },
          { kind: "label", at: [2, 0], label: "2", labelAt: "s", tone: "muted" },
          { kind: "label", at: [2, 2], label: "0.4", labelAt: "n" },
          { kind: "region", within: [{ kind: "halfPlane", through: [[2.8, 0], [3.2, 0]] }, { kind: "halfPlane", through: [[3.2, 0], [3.2, 1]] }, { kind: "halfPlane", through: [[3.2, 1], [2.8, 1]] }, { kind: "halfPlane", through: [[2.8, 1], [2.8, 0]] }] },
          { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted" },
          { kind: "label", at: [3, 1], label: "0.2", labelAt: "n" },
          { kind: "segment", from: [1.7, 0], to: [1.7, 2.6], dashed: true, tone: "good", step: 1 },
          { kind: "point", at: [1.7, 0], tone: "good", step: 1 },
          { kind: "label", at: [1.7, 2.6], label: "E(X) = 1.7", labelAt: "n", tone: "good", step: 1 },
          { kind: "segment", from: [0.8, -0.85], to: [2.6, -0.85], tone: "bad", step: 4 },
          { kind: "point", at: [0.8, -0.85], tone: "bad", step: 4 },
          { kind: "point", at: [2.6, -0.85], tone: "bad", step: 4 },
          { kind: "label", at: [1.7, -0.85], label: "μ ± σ: 0.8 to 2.6", labelAt: "s", tone: "bad", step: 4 },
        ],
      },
    },
    visualSpec: t`Drag the bars of a p.m.f. up and down and watch the balance point $E(X)$ move and the band from $\mu - \sigma$ to $\mu + \sigma$ widen or shrink.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Taking the most likely value of $X$ (the mode) as $E(X)$`,
      remediation: t`$E(X)$ is the long-run average, not the most likely value. Weight every value by its probability: $E(X) = \sum x\,P(x)$.`,
      fallback: { kind: "ext", topic: "mean and mode" },
    },
    {
      id: "C04-M2",
      mistake: t`Averaging the listed values as if each were equally likely, ignoring $P(x)$`,
      remediation: t`A value with a bigger probability turns up more often, so it counts more. Multiply each value by its probability: $E(X) = \sum x\,P(x)$ and $\text{Var}(X) = \sum x^2P(x) - \mu^2$.`,
      fallback: { kind: "ext", topic: "weighted mean" },
    },
    {
      id: "C04-M3",
      mistake: t`Taking $\sum x^2P(x)$, which is $E(X^2)$, as the variance`,
      remediation: t`$\sum x^2P(x)$ is $E(X^2)$, the mean of the squares. Subtract the square of the mean: $\text{Var}(X) = E(X^2) - [E(X)]^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Subtracting $E(X)$ instead of $[E(X)]^2$`,
      remediation: t`Square the mean before you subtract it: $\text{Var}(X) = \sum x^2P(x) - [E(X)]^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Mixing up the variance and the standard deviation",
      remediation: t`The variance is $\sigma^2 = \sum x^2P(x) - \mu^2$; the standard deviation is its square root, $\sigma$. Give the one the question asks for.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Dividing $\sum x\,P(x)$ by the number of values, as for the mean of a list`,
      remediation: t`The probabilities add to $1$, so they already do the dividing. $E(X) = \sum x\,P(x)$, with nothing divided afterwards.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "Misc 7 I (10) changed: the book's P(X = -2) = P(X = -1) = 0.3 tie, so C04-M1 (the mode) has no single answer. Here P(-2) = 0.35 and P(-1) = 0.25, the rest as printed; E(X) = -0.4 (the book's -0.35 is right for its own table).",
    "Ex 7.1 Q.10: the textbook key (mean 7/3, variance 524/54) is wrong; the values are 7/2 and 35/12. Ex 7.1 Q.15 is not used: its key's variance 4.9 and s.d. 2.21 are wrong (Var = 1076/225).",
    "C04-M2 gives the key whenever X is equally likely on its values (a fair die, Misc 7 II (10)(iii)); C04-M3 gives the key when E(X) = 0 (Misc 7 II (12)); C04-M4 when E(X) = 0 or 1; C04-M5 when Var(X) = 0 or 1; C04-M6 when E(X) = 0. Draw diagnosing items only where they differ.",
    "C04-M1 applies only when one value is strictly the most likely (not three coins, Ex 7.1 Q.11).",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.9" },
      stem: t`A random variable $X$ has the p.m.f. below. $\text{Var}(X)$ is:

$$\begin{array}{c|c} x & P(X = x) \\ \hline -2 & 0.2 \\ -1 & 0.3 \\ 0 & 0.1 \\ 1 & 0.15 \\ 2 & 0.25 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(-2, -1, 0, 1, 2)", p: "(1/5, 3/10, 1/10, 3/20, 1/4)" }, params: { exp: "table", ask: "var" } },
      options: [
        { key: "A", text: t`$2.25$`, correct: false, misconceptionId: "C04-M3", value: "9/4" },
        { key: "B", text: t`$2.3$`, correct: false, misconceptionId: "C04-M4", value: "23/10" },
        { key: "C", text: t`$2.2475$`, correct: true, value: "899/400" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C04-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`The $x\,P(x)$ column is $-0.4, -0.3, 0, 0.15, 0.5$, so $E(X) = -0.05$.`,
          t`The $x^2P(x)$ column is $0.8, 0.3, 0, 0.15, 1$, so $E(X^2) = 2.25$.`,
          t`$\text{Var}(X) = 2.25 - (-0.05)^2$ $= 2.25 - 0.0025 = 2.2475$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Misc 7 I (10)" },
      stem: t`The expected value of $X$ for the following p.m.f. is:

$$\begin{array}{c|c} x & P(X = x) \\ \hline -2 & 0.35 \\ -1 & 0.25 \\ 0 & 0.1 \\ 1 & 0.05 \\ 2 & 0.25 \end{array}$$`,
      verify: { kind: "value", inputs: { x: "(-2, -1, 0, 1, 2)", p: "(7/20, 1/4, 1/10, 1/20, 1/4)" }, params: { exp: "table", ask: "E" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C04-M1", value: "-2" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C04-M2", value: "0" },
        { key: "C", text: t`$-0.08$`, correct: false, misconceptionId: "C04-M6", value: "-2/25" },
        { key: "D", text: t`$-0.4$`, correct: true, value: "-2/5" },
      ],
      solution: {
        steps: [
          t`The $x\,P(x)$ column is $-0.7, -0.25, 0, 0.05, 0.5$.`,
          t`Add them: $E(X) = -0.95 + 0.55 = -0.4$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.10" },
      stem: t`A fair die is thrown and $X$ is the number on its uppermost face. $\text{Var}(X)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { exp: "die", ask: "var" } },
      options: [
        { key: "A", text: t`$\frac{35}{3}$`, correct: false, misconceptionId: "C04-M4", value: "35/3" },
        { key: "B", text: t`$\sqrt{\frac{35}{12}}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(105)/6" },
        { key: "C", text: t`$\frac{35}{12}$`, correct: true, value: "35/12" },
        { key: "D", text: t`$\frac{91}{6}$`, correct: false, misconceptionId: "C04-M3", value: "91/6" },
      ],
      solution: {
        steps: [
          t`Each face has $P(x) = \frac{1}{6}$, so $E(X) = \frac{1 + 2 + \cdots + 6}{6}$ $= \frac{7}{2}$.`,
          t`$E(X^2) = \frac{1 + 4 + \cdots + 36}{6}$ $= \frac{91}{6}$.`,
          t`$\text{Var}(X) = \frac{91}{6} - \frac{49}{4}$ $= \frac{182 - 147}{12} = \frac{35}{12}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.14" },
      stem: t`Two fair dice are rolled and $X$ is the sum of the numbers obtained. The standard deviation of $X$ is:`,
      verify: { kind: "value", inputs: {  }, params: { exp: "two_dice_sum", ask: "sd" } },
      options: [
        { key: "A", text: t`$\sqrt{10}$`, correct: false, misconceptionId: "C04-M2", value: "sqrt(10)" },
        { key: "B", text: t`$\sqrt{\frac{329}{6}}$`, correct: false, misconceptionId: "C04-M3", value: "sqrt(1974)/6" },
        { key: "C", text: t`$\frac{35}{6}$`, correct: false, misconceptionId: "C04-M5", value: "35/6" },
        { key: "D", text: t`$\sqrt{\frac{35}{6}}$`, correct: true, value: "sqrt(210)/6" },
      ],
      solution: {
        steps: [
          t`Of the $36$ outcomes, the sums $2$ to $7$ occur $1, 2, \ldots, 6$ times and $8$ to $12$ occur $5, 4, \ldots, 1$ times.`,
          t`The p.m.f. is symmetric about $7$, so $E(X) = 7$; and $\sum x^2P(x) = \frac{1974}{36}$ $= \frac{329}{6}$.`,
          t`$\text{Var}(X) = \frac{329}{6} - 49 = \frac{35}{6}$, so $\sigma = \sqrt{\frac{35}{6}}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.13" },
      stem: t`Two numbers are selected at random, without replacement, from $1, 2, 3, 4, 5, 6$. $X$ is the larger of the two. $E(X)$ is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { exp: "larger_of_two", ask: "E" } },
      options: [
        { key: "A", text: t`$\frac{14}{15}$`, correct: false, misconceptionId: "C04-M6", value: "14/15" },
        { key: "B", text: t`$\frac{14}{3}$`, correct: true, value: "14/3" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C04-M1", value: "6" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C04-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`There are $^6C_2 = 15$ equally likely pairs, and the larger number is $k$ in $k - 1$ of them.`,
          t`So $P(X = k) = \frac{k - 1}{15}$ for $k = 2, 3, \ldots, 6$.`,
          t`$\sum k(k - 1)$ $= 2 + 6 + 12 + 20 + 30 = 70$, so $E(X) = \frac{70}{15} = \frac{14}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.16" },
      stem: t`In a meeting, $70\%$ of the members favour a proposal and $30\%$ oppose it. A member is selected at random; $X = 1$ if he favours it and $X = 0$ if he opposes it. $\text{Var}(X)$ is:`,
      verify: { kind: "value", inputs: { q: "7/10" }, params: { exp: "bernoulli", ask: "var" } },
      options: [
        { key: "A", text: t`$0.21$`, correct: true, value: "21/100" },
        { key: "B", text: t`$0.25$`, correct: false, misconceptionId: "C04-M2", value: "1/4" },
        { key: "C", text: t`$0.7$`, correct: false, misconceptionId: "C04-M3", value: "7/10" },
        { key: "D", text: t`$\sqrt{0.21}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(21)/10" },
      ],
      solution: {
        steps: [
          t`$P(X = 1) = 0.7$ and $P(X = 0) = 0.3$, so $E(X) = 0.7$.`,
          t`$E(X^2) = 1^2 \times 0.7 + 0^2 \times 0.3 = 0.7$.`,
          t`$\text{Var}(X) = 0.7 - (0.7)^2$ $= 0.7 - 0.49 = 0.21$.`,
        ],
      },
    },
  ],
};
