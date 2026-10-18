import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Someone says the number of sixes in their dice throws has mean $5$ and variance $8$. **Can that be true?**`,
    reveal: t`No. The variance is $npq$, which is the mean $np$ times $q$. Since $q < 1$, a binomial variance is always less than its mean, and $8 > 5$.`,
  },
  explanation: {
    intuition: [
      t`Toss a fair coin $10$ times: on average you get $5$ heads, half the tosses.`,
      t`In general, $n$ trials with success chance $p$ give $np$ successes on average: the **mean**, $E(X)$.`,
      t`The **variance**, $\text{Var}(X)$, measures how widely the count spreads around that mean.`,
      t`For a binomial count it is $npq$, where $q = 1 - p$ is the chance of a failure.`,
      t`The **standard deviation**, $\text{SD}(X)$, is the square root of the variance.`,
      t`Since $q < 1$, the variance $npq$ is always less than the mean $np$.`,
    ],
    formal: [
      {
        title: "Mean, variance and SD",
        points: [
          t`For $X \sim B(n, p)$, the mean is $E(X) = np$.`,
          t`The variance is $\text{Var}(X) = npq$, where $q = 1 - p$.`,
          t`The standard deviation is its square root: $\text{SD}(X) = \sqrt{npq}$.`,
          t`For $B(12, 0.25)$: $E(X) = 3$, $\text{Var}(X) = 3(0.75)$ $= 2.25$, and $\text{SD}(X) = 1.5$.`,
          t`$np$ is the mean number of successes; the mean number of failures is $nq$.`,
          t`Swapping $p$ and $q$ leaves $npq$ unchanged, but it changes the mean.`,
        ],
        figure: {
          alt: "The bar chart of B(12, 0.25), the number of successes in 12 trials with p = 0.25. The bar over 3, the tallest, is picked out as the mean E(X) = 3. Then the bars over 2 and 4 are picked out: they lie within one standard deviation, 1.5, of the mean, from 1.5 to 4.5.",
          axes: "none",
          view: { x: [-0.9, 12.9], y: [-0.9, 11.06] },
          elements: [
            { kind: "segment", from: [-0.7, 0], to: [12.7, 0], tone: "muted", step: 1 },
            { kind: "label", at: [0, 0], label: "0", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "2", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [4, 0], label: "4", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [6, 0], label: "6", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [7, 0], label: "7", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [8, 0], label: "8", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [9, 0], label: "9", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [10, 0], label: "10", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [11, 0], label: "11", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [12, 0], label: "12", labelAt: "s", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[-0.3, 0], [0.3, 0]] }, { kind: "halfPlane", through: [[0.3, 0], [0.3, 1.186]] }, { kind: "halfPlane", through: [[0.3, 1.186], [-0.3, 1.186]] }, { kind: "halfPlane", through: [[-0.3, 1.186], [-0.3, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0.7, 0], [1.3, 0]] }, { kind: "halfPlane", through: [[1.3, 0], [1.3, 4.742]] }, { kind: "halfPlane", through: [[1.3, 4.742], [0.7, 4.742]] }, { kind: "halfPlane", through: [[0.7, 4.742], [0.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[1.7, 0], [2.3, 0]] }, { kind: "halfPlane", through: [[2.3, 0], [2.3, 8.694]] }, { kind: "halfPlane", through: [[2.3, 8.694], [1.7, 8.694]] }, { kind: "halfPlane", through: [[1.7, 8.694], [1.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[2.7, 0], [3.3, 0]] }, { kind: "halfPlane", through: [[3.3, 0], [3.3, 9.66]] }, { kind: "halfPlane", through: [[3.3, 9.66], [2.7, 9.66]] }, { kind: "halfPlane", through: [[2.7, 9.66], [2.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[3.7, 0], [4.3, 0]] }, { kind: "halfPlane", through: [[4.3, 0], [4.3, 7.245]] }, { kind: "halfPlane", through: [[4.3, 7.245], [3.7, 7.245]] }, { kind: "halfPlane", through: [[3.7, 7.245], [3.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[4.7, 0], [5.3, 0]] }, { kind: "halfPlane", through: [[5.3, 0], [5.3, 3.864]] }, { kind: "halfPlane", through: [[5.3, 3.864], [4.7, 3.864]] }, { kind: "halfPlane", through: [[4.7, 3.864], [4.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[5.7, 0], [6.3, 0]] }, { kind: "halfPlane", through: [[6.3, 0], [6.3, 1.503]] }, { kind: "halfPlane", through: [[6.3, 1.503], [5.7, 1.503]] }, { kind: "halfPlane", through: [[5.7, 1.503], [5.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[6.7, 0], [7.3, 0]] }, { kind: "halfPlane", through: [[7.3, 0], [7.3, 0.429]] }, { kind: "halfPlane", through: [[7.3, 0.429], [6.7, 0.429]] }, { kind: "halfPlane", through: [[6.7, 0.429], [6.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[7.7, 0], [8.3, 0]] }, { kind: "halfPlane", through: [[8.3, 0], [8.3, 0.089]] }, { kind: "halfPlane", through: [[8.3, 0.089], [7.7, 0.089]] }, { kind: "halfPlane", through: [[7.7, 0.089], [7.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[8.7, 0], [9.3, 0]] }, { kind: "halfPlane", through: [[9.3, 0], [9.3, 0.013]] }, { kind: "halfPlane", through: [[9.3, 0.013], [8.7, 0.013]] }, { kind: "halfPlane", through: [[8.7, 0.013], [8.7, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[2.7, 0], [3.3, 0]] }, { kind: "halfPlane", through: [[3.3, 0], [3.3, 9.66]] }, { kind: "halfPlane", through: [[3.3, 9.66], [2.7, 9.66]] }, { kind: "halfPlane", through: [[2.7, 9.66], [2.7, 0]] }], tone: "good", step: 1 },
            { kind: "point", at: [3, 9.66], tone: "good", step: 1, label: "E(X) = 3", labelAt: "n" },
            { kind: "region", within: [{ kind: "halfPlane", through: [[1.7, 0], [2.3, 0]] }, { kind: "halfPlane", through: [[2.3, 0], [2.3, 8.694]] }, { kind: "halfPlane", through: [[2.3, 8.694], [1.7, 8.694]] }, { kind: "halfPlane", through: [[1.7, 8.694], [1.7, 0]] }], tone: "accent", step: 3 },
            { kind: "point", at: [2, 8.694], tone: "accent", step: 3 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[3.7, 0], [4.3, 0]] }, { kind: "halfPlane", through: [[4.3, 0], [4.3, 7.245]] }, { kind: "halfPlane", through: [[4.3, 7.245], [3.7, 7.245]] }, { kind: "halfPlane", through: [[3.7, 7.245], [3.7, 0]] }], tone: "accent", step: 3 },
            { kind: "point", at: [4, 7.245], tone: "accent", step: 3 },
            { kind: "label", at: [6.2, 6.363], label: "within 1 SD: 1.5 to 4.5", labelAt: "e", tone: "accent", step: 3 },
            { kind: "label", at: [12.8, 10.96], label: "X ~ B(12, 0.25)", labelAt: "sw", step: 1 },
          ],
        },
      },
      {
        title: "Why np and npq",
        points: [
          t`Write $X = X_1 + X_2 + \dots + X_n$, where $X_i$ is $1$ if trial $i$ succeeds, else $0$.`,
          t`Each $X_i$ has mean $p$ and variance $p - p^2 = pq$.`,
          t`Means always add, so $E(X) = p + p + \dots + p = np$.`,
          t`The trials are independent, so their variances add too: $\text{Var}(X) = npq$.`,
          t`$X$ is a sum of $n$ separate trials, not $n$ times one trial, so $\text{Var}(X)$ is not $n^2pq$.`,
          t`Summing $x\,P(X = x)$ over $x = 0, 1, \dots, n$ gives the same $np$.`,
        ],
      },
      {
        title: "Working back to q, p, n",
        points: [
          t`Divide the variance by the mean: $\frac{npq}{np} = q$, so $q = \frac{\text{Var}(X)}{E(X)}$.`,
          t`This ratio is $q$, the failure chance; then $p = 1 - q$.`,
          t`Last, $n = \frac{E(X)}{p}$, which must be a whole number.`,
          t`If the SD is given, square it first: $\text{Var}(X) = \text{SD}^2$.`,
          t`$q$ is a probability less than $1$, so the variance must be less than the mean.`,
          t`If the variance equals or exceeds the mean, no binomial distribution fits.`,
        ],
      },
    ],
    worked: {
      prompt: t`The mean and the variance of a binomial distribution are $8$ and $6$. Find $q$, $p$ and $n$.`,
      steps: [
        t`$np = 8$ and $npq = 6$.`,
        t`Divide: $q = \frac{6}{8} = 0.75$, which is less than $1$, so such a distribution exists.`,
        t`$p = 1 - 0.75 = 0.25$.`,
        t`$n = \frac{8}{0.25} = 32$, a whole number, so $X \sim B(32, 0.25)$.`,
      ],
      answer: t`$q = 0.75$, $p = 0.25$, $n = 32$`,
    },
    visualSpec: t`Sliders for $n$ and $p$ redraw the bar chart of $B(n, p)$, with a marker at the mean $np$ and a band one SD, $\sqrt{npq}$, either side.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes $\text{Var}(X) = np$, leaving out $q$, so the variance comes out equal to the mean.`,
      remediation: t`The variance is $npq$: the mean $np$ times $q$. So it is always less than the mean.`,
      fallback: { kind: "ext", topic: "variance of a random variable" },
    },
    {
      id: "C04-M2",
      mistake: t`Swaps $p$ and $q$: takes $E(X) = nq$, or reads $\frac{\text{Var}(X)}{E(X)}$ as $p$.`,
      remediation: t`$np$ is the mean number of successes, and $\frac{\text{Var}(X)}{E(X)} = \frac{npq}{np} = q$, the failure chance. Then $p = 1 - q$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Mixes up the variance and the standard deviation: gives $npq$ as the SD, or uses a given SD as the variance.`,
      remediation: t`$\text{SD}(X) = \sqrt{npq}$, and $\text{Var}(X) = \text{SD}^2$. Square a given SD before dividing it by the mean.`,
      fallback: { kind: "ext", topic: "variance and standard deviation" },
    },
    {
      id: "C04-M4",
      mistake: t`Takes $\text{Var}(X) = n^2pq$, as if $X$ were $n$ times the outcome of one trial.`,
      remediation: t`$X$ is the sum of $n$ independent trials, each with variance $pq$, and their variances add: $\text{Var}(X) = npq$.`,
      fallback: { kind: "ext", topic: "variance of a sum of independent variables" },
    },
    {
      id: "C04-M5",
      mistake: t`Divides the mean by the variance, taking $q = \frac{E(X)}{\text{Var}(X)}$, so a variance above the mean still gives $q < 1$.`,
      remediation: t`$q = \frac{\text{Var}(X)}{E(X)}$, and it must be less than $1$. A variance at or above the mean means no binomial distribution fits.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M2 gives the key's variance whenever $n$ and $p$ are both given ($npq$ is symmetric in $p$ and $q$): to catch it, ask for the mean, or give the mean and ask for $p$, $n$ or $q$.`,
    t`C04-M1 gives no answer when working back from a mean and a variance. C04-M4 works back to $n = E(X) + \frac{\text{Var}(X)}{E(X)}$, a whole number only when the variance is at least the mean (as in C04-Q5).`,
    t`C04-M3 works back only when the question gives an SD; C04-M5 applies only to working back, and on valid data it gives $q > 1$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/8.3 SolvedEx.1" },
      stem: t`The p.m.f. of $X$ is $P(X = x) = {}^4C_x\left(\frac{5}{9}\right)^x\left(\frac{4}{9}\right)^{4 - x}$, for $x = 0, 1, 2, 3, 4$. Find $E(X)$ and $\text{Var}(X)$.`,
      verify: { kind: "value", inputs: { n: "4", p: "5/9" }, params: { ask: "e_var" } },
      options: [
        { key: "A", text: t`$E(X) = \frac{16}{9}$, $\text{Var}(X) = \frac{80}{81}$`, correct: false, misconceptionId: "C04-M2", value: "(16/9, 80/81)" },
        { key: "B", text: t`$E(X) = \frac{20}{9}$, $\text{Var}(X) = \frac{320}{81}$`, correct: false, misconceptionId: "C04-M4", value: "(20/9, 320/81)" },
        { key: "C", text: t`$E(X) = \frac{20}{9}$, $\text{Var}(X) = \frac{80}{81}$`, correct: true, value: "(20/9, 80/81)" },
        { key: "D", text: t`$E(X) = \frac{20}{9}$, $\text{Var}(X) = \frac{20}{9}$`, correct: false, misconceptionId: "C04-M1", value: "(20/9, 20/9)" },
      ],
      solution: {
        steps: [
          t`The p.m.f. is $^nC_x\,p^x q^{n - x}$ with $n = 4$, $p = \frac{5}{9}$, $q = \frac{4}{9}$.`,
          t`$E(X) = np$ $= 4 \times \frac{5}{9} = \frac{20}{9}$.`,
          t`$\text{Var}(X) = npq$ $= \frac{20}{9} \times \frac{4}{9} = \frac{80}{81}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Ex 8.1 Q.12 (iii)" },
      stem: t`$X \sim B(25, p)$ and $E(X) = 10$. Find $p$ and the standard deviation $\text{SD}(X)$.`,
      verify: { kind: "value", inputs: { n: "25", mean: "10" }, params: { ask: "p_sd" } },
      options: [
        { key: "A", text: t`$p = 0.4$, $\text{SD}(X) = \sqrt{10}$`, correct: false, misconceptionId: "C04-M1", value: "(2/5, sqrt(10))" },
        { key: "B", text: t`$p = 0.6$, $\text{SD}(X) = \sqrt{6}$`, correct: false, misconceptionId: "C04-M2", value: "(3/5, sqrt(6))" },
        { key: "C", text: t`$p = 0.4$, $\text{SD}(X) = 6$`, correct: false, misconceptionId: "C04-M3", value: "(2/5, 6)" },
        { key: "D", text: t`$p = 0.4$, $\text{SD}(X) = \sqrt{6}$`, correct: true, value: "(2/5, sqrt(6))" },
      ],
      solution: {
        steps: [
          t`$np = 10$ with $n = 25$, so $p = \frac{10}{25} = 0.4$ and $q = 0.6$.`,
          t`$\text{Var}(X) = npq$ $= 10 \times 0.6 = 6$.`,
          t`$\text{SD}(X) = \sqrt{6}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Ex 8.1 Q.12 (ii)" },
      stem: t`$X \sim B(n, 0.6)$ and $E(X) = 6$. Find $n$ and $\text{Var}(X)$.`,
      verify: { kind: "value", inputs: { p: "3/5", mean: "6" }, params: { ask: "n_var" } },
      options: [
        { key: "A", text: t`$n = 15$, $\text{Var}(X) = 3.6$`, correct: false, misconceptionId: "C04-M2", value: "(15, 18/5)" },
        { key: "B", text: t`$n = 10$, $\text{Var}(X) = 24$`, correct: false, misconceptionId: "C04-M4", value: "(10, 24)" },
        { key: "C", text: t`$n = 10$, $\text{Var}(X) = 2.4$`, correct: true, value: "(10, 12/5)" },
        { key: "D", text: t`$n = 10$, $\text{Var}(X) = 6$`, correct: false, misconceptionId: "C04-M1", value: "(10, 6)" },
      ],
      solution: {
        steps: [
          t`$np = 6$ with $p = 0.6$, so $n = \frac{6}{0.6} = 10$.`,
          t`$q = 0.4$, so $\text{Var}(X) = npq$ $= 6 \times 0.4 = 2.4$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Misc 8 Q.2 (ii)" },
      stem: t`The mean of a binomial distribution is $24$ and its standard deviation is $4$. What is $q$, the probability of a failure in one trial?`,
      verify: { kind: "value", inputs: { mean: "24", sd: "4" }, params: { ask: "q" } },
      options: [
        { key: "A", text: t`$q = \frac{1}{3}$`, correct: false, misconceptionId: "C04-M2", value: "1/3" },
        { key: "B", text: t`$q = \frac{1}{6}$`, correct: false, misconceptionId: "C04-M3", value: "1/6" },
        { key: "C", text: t`$q = \frac{3}{2}$`, correct: false, misconceptionId: "C04-M5", value: "3/2" },
        { key: "D", text: t`$q = \frac{2}{3}$`, correct: true, value: "2/3" },
      ],
      solution: {
        steps: [
          t`Square the SD: $\text{Var}(X) = 4^2 = 16$.`,
          t`$q = \frac{npq}{np}$ $= \frac{16}{24} = \frac{2}{3}$.`,
          t`Check: $p = \frac{1}{3}$ and $n = 24 \times 3 = 72$, a whole number.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/8.3 SolvedEx.2" },
      stem: t`A binomial distribution is claimed to have mean $6$ and variance $12$. What is $n$?`,
      verify: { kind: "value", inputs: { mean: "6", var: "12" }, params: { ask: "n" } },
      options: [
        { key: "A", text: t`$n = 12$`, correct: false, misconceptionId: "C04-M5", value: "12" },
        { key: "B", text: t`No such binomial distribution exists`, correct: true, value: "no_such_distribution" },
        { key: "C", text: t`$n = 3$`, correct: false, misconceptionId: "C04-M2", value: "3" },
        { key: "D", text: t`$n = 8$`, correct: false, misconceptionId: "C04-M4", value: "8" },
      ],
      solution: {
        steps: [
          t`$np = 6$ and $npq = 12$, so $q = \frac{12}{6} = 2$.`,
          t`A probability cannot exceed $1$, so $q = 2$ is impossible.`,
          t`A binomial variance is always less than its mean, so no such binomial distribution exists.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Misc 8 I (1)" },
      stem: t`A die is thrown $72$ times. Getting a multiple of $3$ (a $3$ or a $6$) is a success. What is the standard deviation of the number of successes?`,
      verify: { kind: "value", inputs: { n: "72", p: "1/3" }, params: { ask: "sd" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$2\sqrt{6}$`, correct: false, misconceptionId: "C04-M1", value: "2*sqrt(6)" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C04-M3", value: "16" },
        { key: "D", text: t`$24\sqrt{2}$`, correct: false, misconceptionId: "C04-M4", value: "24*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$n = 72$ and $p = \frac{2}{6} = \frac{1}{3}$, so $q = \frac{2}{3}$.`,
          t`$\text{Var}(X) = npq$ $= 72 \times \frac{1}{3} \times \frac{2}{3}$ $= 16$.`,
          t`$\text{SD}(X) = \sqrt{16} = 4$.`,
        ],
      },
    },
  ],
};
