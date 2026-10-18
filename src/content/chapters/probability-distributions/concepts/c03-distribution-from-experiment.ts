import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Toss two fair coins and let $X$ be the number of heads. $X$ can be $0$, $1$ or $2$. **Is each value equally likely, with probability $\frac13$?**`,
    reveal: t`No. The four outcomes $HH$, $HT$, $TH$, $TT$ are equally likely, and two of them give $X = 1$. So $P(X = 0) = \frac14$, $P(X = 1) = \frac12$ and $P(X = 2) = \frac14$, which add to $1$.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **random variable** $X$ gives a number to each outcome of an experiment.`,
      t`Toss two fair coins: $HH$, $HT$, $TH$, $TT$ are equally likely. Let $X$ be the number of heads.`,
      t`$X$ takes three values: $0$, $1$ and $2$.`,
      t`But $X = 1$ comes from two outcomes, $HT$ and $TH$, so it is twice as likely.`,
      t`So $P(X = 0) = \frac14$, $P(X = 1) = \frac12$ and $P(X = 2) = \frac14$.`,
      t`A **probability distribution** lists every value of $X$ with its probability; together they add to $1$.`,
    ],
    formal: [
      {
        title: "Three steps to a distribution",
        points: [
          t`**Step 1.** List every value $X$ can take, from the smallest to the largest.`,
          t`**Step 2.** For each value $x$, collect the outcomes that give $X = x$.`,
          t`Add the probabilities of those outcomes to get $P(X = x)$.`,
          t`**Step 3.** Check that each $P(X = x) \ge 0$ and that they add to $1$.`,
          t`Write the values and their probabilities as a table, one column for $x$ and one for $P(X = x)$.`,
        ],
      },
      {
        title: "Equally likely outcomes",
        points: [
          t`When all $n(S)$ outcomes are equally likely, $P(X = x)$ is the number of outcomes giving $x$, over $n(S)$.`,
          t`Example: throw a fair die, and let $X$ be the number of factors of the number shown.`,
          t`$X(1) = 1$; $X(2) = X(3) = X(5) = 2$; $X(4) = 3$; $X(6) = 4$.`,
          t`So $P(X = 2) = \frac36 = \frac12$, while $X = 1$, $3$ and $4$ each get $\frac16$.`,
          t`Check: $\frac16 + \frac36 + \frac16 + \frac16 = 1$.`,
          t`The faces are equally likely, but the values of $X$ are not.`,
        ],
      },
      {
        title: "Repeated independent trials",
        points: [
          t`A **trial** is one toss or one throw; trials are **independent** when one result does not change the chances of the next.`,
          t`Call the result you count a **success**, with chance $p$ on each trial; a failure has chance $q = 1 - p$.`,
          t`In $n$ trials, one order with $x$ successes has chance $p^x q^{n - x}$: the other trials must fail.`,
          t`The successes can come in $^nC_x$ orders: one head in two tosses is $HT$ or $TH$.`,
          t`Each order has the same chance, so $P(X = x) = {}^nC_x\,p^x q^{n - x}$.`,
        ],
      },
      {
        title: "With or without replacement",
        points: [
          t`**With replacement**, each ball drawn goes back, so every draw has the same chances: the draws are independent.`,
          t`**Without replacement**, a drawn ball stays out, so the bag shrinks and the next chances change.`,
          t`Drawing balls **together** is the same as drawing them one by one without replacement.`,
          t`Example: a bag holds $3$ red balls and $1$ green; two balls are drawn.`,
          t`Put back: $P(\text{both red}) = \frac34 \cdot \frac34 = \frac{9}{16}$.`,
          t`Kept out: $P(\text{both red}) = \frac34 \cdot \frac23 = \frac12$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A pair of fair dice is thrown three times. Let $X$ be the number of doublets. Find the probability distribution of $X$.`,
      steps: [
        t`A **doublet** shows the same number on both dice: $6$ of the $36$ outcomes. So $p = \frac16$, $q = \frac56$, and $X$ takes the values $0$, $1$, $2$, $3$.`,
        t`$P(X = 0) = q^3 = \frac{125}{216}$ and $P(X = 3) = p^3 = \frac{1}{216}$.`,
        t`One doublet can come on throw 1, 2 or 3: $P(X = 1) = 3 \cdot \frac16 \cdot \frac{25}{36}$ $= \frac{75}{216}$.`,
        t`Two doublets also have $3$ orders: $P(X = 2) = 3 \cdot \frac{1}{36} \cdot \frac56$ $= \frac{15}{216}$.`,
        t`Check: $125 + 75 + 15 + 1 = 216$, so the probabilities add to $1$.`,
      ],
      answer: t`$$\begin{array}{c|c} x & P(X = x) \\ \hline 0 & \frac{125}{216} \\ 1 & \frac{75}{216} \\ 2 & \frac{15}{216} \\ 3 & \frac{1}{216} \end{array}$$`,
    },
    figure: {
      alt: "Two coins are tossed. The four outcomes are stacked as equal blocks in columns by their number of heads: TT in the column X = 0, HT and TH in the column X = 1, HH in the column X = 2. The column X = 1 is twice as tall. Its two blocks light up. The columns are labelled 1/4, 1/2 and 1/4, and then 1/4 + 1/2 + 1/4 = 1.",
      axes: "none",
      view: { x: [-1, 4], y: [-0.5, 3.1] },
      elements: [
        { kind: "segment", from: [-0.7, 0], to: [3.7, 0], tone: "muted" },
        { kind: "region", within: [{ kind: "halfPlane", through: [[-0.45, 0], [0.45, 0]] }, { kind: "halfPlane", through: [[0.45, 0], [0.45, 1]] }, { kind: "halfPlane", through: [[0.45, 1], [-0.45, 1]] }, { kind: "halfPlane", through: [[-0.45, 1], [-0.45, 0]] }], step: 2 },
        { kind: "label", at: [0, 0.3], label: "TT", labelAt: "n", step: 2 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[1.05, 0], [1.95, 0]] }, { kind: "halfPlane", through: [[1.95, 0], [1.95, 1]] }, { kind: "halfPlane", through: [[1.95, 1], [1.05, 1]] }, { kind: "halfPlane", through: [[1.05, 1], [1.05, 0]] }], step: 2 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[1.05, 1], [1.95, 1]] }, { kind: "halfPlane", through: [[1.95, 1], [1.95, 2]] }, { kind: "halfPlane", through: [[1.95, 2], [1.05, 2]] }, { kind: "halfPlane", through: [[1.05, 2], [1.05, 1]] }], step: 2 },
        { kind: "segment", from: [1.05, 1], to: [1.95, 1], tone: "muted", step: 2 },
        { kind: "label", at: [1.5, 0.3], label: "HT", labelAt: "n", step: 2 },
        { kind: "label", at: [1.5, 1.3], label: "TH", labelAt: "n", step: 2 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[2.55, 0], [3.45, 0]] }, { kind: "halfPlane", through: [[3.45, 0], [3.45, 1]] }, { kind: "halfPlane", through: [[3.45, 1], [2.55, 1]] }, { kind: "halfPlane", through: [[2.55, 1], [2.55, 0]] }], step: 2 },
        { kind: "label", at: [3, 0.3], label: "HH", labelAt: "n", step: 2 },
        { kind: "label", at: [0, 0], label: "X = 0", labelAt: "s", step: 3 },
        { kind: "label", at: [1.5, 0], label: "X = 1", labelAt: "s", step: 3 },
        { kind: "label", at: [3, 0], label: "X = 2", labelAt: "s", step: 3 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[1.05, 0], [1.95, 0]] }, { kind: "halfPlane", through: [[1.95, 0], [1.95, 1]] }, { kind: "halfPlane", through: [[1.95, 1], [1.05, 1]] }, { kind: "halfPlane", through: [[1.05, 1], [1.05, 0]] }], tone: "good", step: 4 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[1.05, 1], [1.95, 1]] }, { kind: "halfPlane", through: [[1.95, 1], [1.95, 2]] }, { kind: "halfPlane", through: [[1.95, 2], [1.05, 2]] }, { kind: "halfPlane", through: [[1.05, 2], [1.05, 1]] }], tone: "good", step: 4 },
        { kind: "label", at: [0, 1], label: "1/4", labelAt: "n", step: 5 },
        { kind: "label", at: [1.5, 2], label: "1/2", labelAt: "n", step: 5 },
        { kind: "label", at: [3, 1], label: "1/4", labelAt: "n", step: 5 },
        { kind: "label", at: [1.5, 2.6], label: "1/4 + 1/2 + 1/4 = 1", labelAt: "n", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Pick an experiment (coins, dice or a bag of balls) and the number of trials; each outcome drops as a block into the column of its value of $X$, building the bar chart of the distribution while a running total climbs to $1$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Treats the values of X as equally likely: P(X = x) = 1 / (number of values X can take)",
      remediation: t`Each value of $X$ collects its own outcomes, and some values collect more than others. Find $P(X = x)$ by adding the chances of the outcomes that give $x$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Counts only one order of the outcomes (HT but not TH), so P(X = x) is too small by the factor nCx",
      remediation: t`The $x$ successes can come in $^nC_x$ different orders, and each order has the same chance. Multiply the chance of one order by the number of orders.`,
      fallback: { kind: "ext", topic: "counting with combinations" },
    },
    {
      id: "C03-M3",
      mistake: "Mixes up drawing with and without replacement: keeps the chances fixed when the ball stays out, or changes them when it is put back",
      remediation: "With replacement the bag is the same at every draw, so the chances stay fixed. Without replacement, or drawing together, a drawn ball stays out, so the next draw's chances change.",
      fallback: { kind: "ext", topic: "independent events" },
    },
    {
      id: "C03-M4",
      mistake: "Multiplies only the successes' chances (nCx p^x, or aCx / NCn), forgetting that the other trials or draws must be failures",
      remediation: t`Exactly $x$ successes means every other trial is a failure, so its chance belongs in the product too: $q^{n - x}$ for repeated trials, or the ways to choose the other balls when drawing without replacement.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Reads 'a head is r times as likely as a tail' as P(T) = 1/r",
      remediation: t`If a head is $r$ times as likely as a tail, then $P(H) = r\,P(T)$ and $P(H) + P(T) = 1$. Together these give $P(T) = \frac{1}{r + 1}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M2 gives the key when x = 0 or x = n (there is only one order); diagnose it with 0 < x < n or a whole table.",
    "C03-M4 gives the key when x = n; diagnose it with x < n.",
    "C03-M3 applies only to draws from a bag (n ≥ 2 draws); C03-M5 only when one face is r times as likely as the other.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.4 (ii)" },
      stem: t`Three fair coins are tossed together. Let $X$ be the number of tails. Then $P(X = 2)$ is:`,
      verify: { kind: "value", inputs: { n: "3", p: "1/2", x: "2" }, params: { kind: "trials" } },
      options: [
        { key: "A", text: t`$\frac{1}{8}$`, correct: false, misconceptionId: "C03-M2", value: "1/8" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C03-M4", value: "3/4" },
        { key: "C", text: t`$\frac{3}{8}$`, correct: true, value: "3/8" },
        { key: "D", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C03-M1", value: "1/4" },
      ],
      solution: {
        steps: [
          t`Three coins give $2^3 = 8$ equally likely outcomes, and $X$ takes the values $0$, $1$, $2$, $3$.`,
          t`$X = 2$ for $HTT$, $THT$ and $TTH$: three outcomes, not one.`,
          t`So $P(X = 2) = \frac38$. The whole table, $\frac18, \frac38, \frac38, \frac18$, adds to $1$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.7" },
      stem: t`A coin is biased so that a head is $3$ times as likely to occur as a tail. The coin is tossed twice, and $X$ is the number of tails. The probabilities $P(X = 0)$, $P(X = 1)$, $P(X = 2)$ are, in order:`,
      verify: { kind: "value", inputs: { n: "2", ratio: "3" }, params: { kind: "trials", succ: "minor" } },
      options: [
        { key: "A", text: t`$(\frac{9}{16}, \frac{3}{16}, \frac{1}{16})$`, correct: false, misconceptionId: "C03-M2", value: "(9/16, 3/16, 1/16)" },
        { key: "B", text: t`$(\frac{4}{9}, \frac{4}{9}, \frac{1}{9})$`, correct: false, misconceptionId: "C03-M5", value: "(4/9, 4/9, 1/9)" },
        { key: "C", text: t`$(\frac{9}{16}, \frac{3}{8}, \frac{1}{16})$`, correct: true, value: "(9/16, 3/8, 1/16)" },
        { key: "D", text: t`$(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$`, correct: false, misconceptionId: "C03-M1", value: "(1/3, 1/3, 1/3)" },
      ],
      solution: {
        steps: [
          t`$P(H) = 3\,P(T)$ and $P(H) + P(T) = 1$, so $4\,P(T) = 1$: $P(T) = \frac14$ and $P(H) = \frac34$.`,
          t`$P(X = 0) = P(HH) = \frac{9}{16}$ and $P(X = 2) = P(TT) = \frac{1}{16}$.`,
          t`$X = 1$ for $HT$ and $TH$: $P(X = 1) = 2 \cdot \frac34 \cdot \frac14$ $= \frac38$.`,
          t`Check: $\frac{9}{16} + \frac{6}{16} + \frac{1}{16} = 1$. The probabilities are $\frac{9}{16}$, $\frac38$, $\frac{1}{16}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.6" },
      stem: t`A lot of $30$ bulbs includes $6$ defective ones. A sample of $4$ bulbs is drawn at random, one at a time, **with replacement**. Let $X$ be the number of defective bulbs in the sample. Then $P(X = 2)$ is:`,
      verify: { kind: "value", inputs: { a: "6", b: "24", n: "4", x: "2" }, params: { kind: "draw", replace: "yes" } },
      options: [
        { key: "A", text: t`$\frac{16}{625}$`, correct: false, misconceptionId: "C03-M2", value: "16/625" },
        { key: "B", text: t`$\frac{92}{609}$`, correct: false, misconceptionId: "C03-M3", value: "92/609" },
        { key: "C", text: t`$\frac{6}{25}$`, correct: false, misconceptionId: "C03-M4", value: "6/25" },
        { key: "D", text: t`$\frac{96}{625}$`, correct: true, value: "96/625" },
      ],
      solution: {
        steps: [
          t`With replacement, every draw is defective with chance $p = \frac{6}{30} = \frac15$, and good with $q = \frac45$.`,
          t`One order, defective, defective, good, good, has chance $\frac{1}{25} \cdot \frac{16}{25} = \frac{16}{625}$.`,
          t`The two defectives can come in $^4C_2 = 6$ orders: $P(X = 2) = 6 \cdot \frac{16}{625}$ $= \frac{96}{625}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.2" },
      stem: t`An urn contains $5$ red and $2$ black balls. Two balls are drawn together at random. Let $X$ be the number of black balls drawn. Then $P(X = 1)$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "5", n: "2", x: "1" }, params: { kind: "draw", replace: "no" } },
      options: [
        { key: "A", text: t`$\frac{20}{49}$`, correct: false, misconceptionId: "C03-M3", value: "20/49" },
        { key: "B", text: t`$\frac{2}{21}$`, correct: false, misconceptionId: "C03-M4", value: "2/21" },
        { key: "C", text: t`$\frac{10}{21}$`, correct: true, value: "10/21" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M1", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Drawn together, the two balls are one of $^7C_2 = 21$ equally likely pairs.`,
          t`One black and one red: $^2C_1 \times {}^5C_1 = 2 \times 5 = 10$ pairs.`,
          t`So $P(X = 1) = \frac{10}{21}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.3.2 SolvedEx.2" },
      stem: t`A bag contains $2$ red and $3$ green balls. A ball is drawn at random, its colour is noted, and it is put back. Then a second ball is drawn. Let $X$ be the number of red balls drawn. The probabilities $P(X = 0)$, $P(X = 1)$, $P(X = 2)$ are, in order:`,
      verify: { kind: "value", inputs: { a: "2", b: "3", n: "2" }, params: { kind: "draw", replace: "yes" } },
      options: [
        { key: "A", text: t`$(\frac{9}{25}, \frac{12}{25}, \frac{4}{25})$`, correct: true, value: "(9/25, 12/25, 4/25)" },
        { key: "B", text: t`$(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$`, correct: false, misconceptionId: "C03-M1", value: "(1/3, 1/3, 1/3)" },
        { key: "C", text: t`$(\frac{9}{25}, \frac{6}{25}, \frac{4}{25})$`, correct: false, misconceptionId: "C03-M2", value: "(9/25, 6/25, 4/25)" },
        { key: "D", text: t`$(\frac{3}{10}, \frac{3}{5}, \frac{1}{10})$`, correct: false, misconceptionId: "C03-M3", value: "(3/10, 3/5, 1/10)" },
      ],
      solution: {
        steps: [
          t`The ball is put back, so every draw is red with chance $\frac25$ and green with chance $\frac35$.`,
          t`$P(X = 0) = \frac35 \cdot \frac35 = \frac{9}{25}$ and $P(X = 2) = \frac25 \cdot \frac25 = \frac{4}{25}$.`,
          t`One red is $RG$ or $GR$: $P(X = 1) = 2 \cdot \frac25 \cdot \frac35$ $= \frac{12}{25}$.`,
          t`Check: $9 + 12 + 4 = 25$, so $\frac{9}{25}$, $\frac{12}{25}$, $\frac{4}{25}$ add to $1$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Misc 7 II (7)" },
      stem: t`A fair die is tossed twice. A toss is a success if it shows a number greater than $4$. Let $X$ be the number of successes. Then $P(X = 1)$ is:`,
      verify: { kind: "value", inputs: { n: "2", p: "1/3", x: "1" }, params: { kind: "trials" } },
      options: [
        { key: "A", text: t`$\frac{4}{9}$`, correct: true, value: "4/9" },
        { key: "B", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M1", value: "1/3" },
        { key: "C", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C03-M2", value: "2/9" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C03-M4", value: "2/3" },
      ],
      solution: {
        steps: [
          t`On one toss a success is a $5$ or a $6$: $p = \frac26 = \frac13$, and $q = \frac23$.`,
          t`One success means success then failure, or failure then success: two orders.`,
          t`$P(X = 1) = 2 \cdot \frac13 \cdot \frac23 = \frac49$.`,
        ],
      },
    },
  ],
};
