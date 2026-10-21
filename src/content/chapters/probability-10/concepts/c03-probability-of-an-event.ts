import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A bag has $1$ red ball and $99$ blue balls. A ball is picked at random. It is either red or blue. **Is the chance of red $\frac{1}{2}$?**`,
    reveal: t`No. There are $100$ balls, and only $1$ of them is red. So $P(\text{red}) = \frac{1}{100}$. Count the balls, not the colours.`,
  },
  explanation: {
    intuition: [
      t`**Probability** is a number that tells how likely an event is.`,
      t`When every outcome is equally likely, count two things: all the outcomes, and the outcomes you want.`,
      t`The probability is the number of outcomes you want divided by the number of all outcomes.`,
      t`A die has $6$ faces and $3$ of them are even, so $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$.`,
      t`The part can never be more than the whole, so a probability is never more than $1$.`,
      t`An event that cannot happen has probability $0$; an event that must happen has probability $1$.`,
    ],
    formal: [
      {
        title: "The formula for P(A)",
        points: [
          t`**Equally likely** outcomes have the same chance: each face of a fair die, each ticket in a box.`,
          t`$S$ is the sample space; $n(S)$ is the number of all its outcomes.`,
          t`$A$ is an event; $n(A)$ is the number of outcomes favourable to $A$.`,
          t`The probability of $A$ is $P(A) = \frac{n(A)}{n(S)}$.`,
          t`The bottom is all the outcomes, including the favourable ones.`,
          t`One coin: $S = \{H, T\}$, $A = \{H\}$, so $P(A) = \frac{1}{2}$.`,
        ],
      },
      {
        title: "Each object is one outcome",
        points: [
          t`Picking from a box, every object is a separate outcome, even when two look alike.`,
          t`A box has $5$ strawberry, $6$ coffee and $2$ peppermint chocolates.`,
          t`So $n(S) = 5 + 6 + 2 = 13$, not $3$ for the three flavours.`,
          t`For a coffee chocolate, $n(A) = 6$, so $P(A) = \frac{6}{13}$.`,
          t`For a peppermint chocolate, $n(A) = 2$, so $P(A) = \frac{2}{13}$.`,
        ],
      },
      {
        title: "Impossible and sure events",
        points: [
          t`A box has six cards numbered $0$ to $5$, so $n(S) = 6$.`,
          t`An **impossible event** has no favourable outcome: a number greater than $5$.`,
          t`Then $n(A) = 0$, so $P(A) = \frac{0}{6} = 0$.`,
          t`A **sure event** contains every outcome: a whole number, since $0$ to $5$ are all whole numbers.`,
          t`Then $n(A) = 6$, so $P(A) = \frac{6}{6} = 1$.`,
          t`Since $0 \le n(A) \le n(S)$, every probability obeys $0 \le P(A) \le 1$.`,
        ],
      },
      {
        title: "Fraction, decimal or percentage",
        points: [
          t`A probability can be written as a fraction, a decimal or a percentage.`,
          t`$\frac{4}{5} = 0.8 = 80\%$: all three are the same probability.`,
          t`$15\%$ means $\frac{15}{100} = 0.15$, which lies between $0$ and $1$.`,
          t`$1.5$ is more than $1$, so $1.5$ cannot be a probability.`,
          t`A negative number, such as $-0.2$, cannot be a probability either.`,
        ],
      },
      {
        title: "Finding n(S) from P(A)",
        points: [
          t`From $P(A) = \frac{n(A)}{n(S)}$ we get $n(S) = \frac{n(A)}{P(A)}$.`,
          t`Example: $n(A) = 3$ and $P(A) = \frac{1}{4}$.`,
          t`Then $n(S) = 3 \div \frac{1}{4} = 3 \times 4 = 12$.`,
          t`Check: $\frac{3}{12} = \frac{1}{4}$. The answer $n(S)$ is a whole number of outcomes.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a hockey team there are $6$ defenders, $4$ offenders and $1$ goalee. One player is selected at random as captain. Find the probability that a defender is selected.`,
      steps: [
        t`Each player is one outcome: $n(S) = 6 + 4 + 1 = 11$.`,
        t`Let $A$ be the event that a defender is selected: $n(A) = 6$.`,
        t`$P(A) = \frac{n(A)}{n(S)} = \frac{6}{11}$.`,
        t`Check: $\frac{6}{11}$ lies between $0$ and $1$.`,
      ],
      answer: t`$P(A) = \frac{6}{11}$.`,
    },
    visualSpec: t`Drag a slider to change how many of the objects in a box are favourable; the fraction $\frac{n(A)}{n(S)}$ and a bar from $0$ to $1$ update together.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Writing the fraction upside down: P(A) = n(S)/n(A), all outcomes over favourable ones",
      remediation: t`Favourable outcomes go on top and all outcomes at the bottom: $P(A) = \frac{n(A)}{n(S)}$. That is why $P(A)$ is never more than $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Dividing by the outcomes that are not favourable: P(A) = n(A)/(n(S) - n(A))",
      remediation: t`The bottom of the fraction is $n(S)$, every outcome in the sample space, the favourable ones included.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: "Counting each kind (colour, letter) as one outcome, so P(A) = 1 / number of kinds",
      remediation: "Every object is a separate outcome, even when two look alike. Count the balloons or cards, not the colours or letters.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: "Taking the event to be a single outcome: P(A) = 1/n(S), so n(S) = 1/P(A)",
      remediation: t`An event can have many outcomes. Count all of them: $n(A)$ is the top of the fraction, not $1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M5",
      mistake: "Thinking 0 and 1 are not probabilities, so 0 < P(A) < 1",
      remediation: t`An impossible event has $P(A) = 0$ and a sure event has $P(A) = 1$. Both ends are allowed: $0 \le P(A) \le 1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "C03-M3 applies only where objects come in kinds (Q2 balloons, Q5 letters); with numbered tickets or die faces each kind is one outcome.",
    "C03-M5 is detected only by the range item (Q4).",
    t`A boundary slip (counting $3$ as less than $3$) is not modelled; on Q1 it gives $\frac{1}{2}$, the same option as C03-M2.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/PS5 Q.1 (2)" },
      stem: t`A die is rolled. What is the probability that the number on the upper face is less than $3$?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "6", k: "3" }, params: { ask: "prob", exp: "numbers", cond: "lt" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M2", value: "1/2" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C03-M4", value: "1/6" },
        { key: "C", text: t`$\frac{1}{3}$`, correct: true, value: "1/3" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C03-M1", value: "3" },
      ],
      solution: {
        steps: [
          t`$S = \{1, 2, 3, 4, 5, 6\}$, so $n(S) = 6$.`,
          t`Less than $3$: $A = \{1, 2\}$, so $n(A) = 2$. ($3$ itself is not less than $3$.)`,
          t`$P(A) = \frac{2}{6} = \frac{1}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(B)(i)" },
      stem: t`A balloon vendor has $2$ red, $3$ blue and $4$ green balloons. He chooses one of them at random to give to Pranali. What is the probability that Pranali gets a green balloon?`,
      verify: { kind: "value", inputs: { c1: "2", c2: "3", c3: "4" }, params: { ask: "prob", exp: "bag", kinds: "red,blue,green", pick: "green" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M3", value: "1/3" },
        { key: "B", text: t`$\frac{1}{9}$`, correct: false, misconceptionId: "C03-M4", value: "1/9" },
        { key: "C", text: t`$\frac{4}{9}$`, correct: true, value: "4/9" },
        { key: "D", text: t`$\frac{9}{4}$`, correct: false, misconceptionId: "C03-M1", value: "9/4" },
      ],
      solution: {
        steps: [
          t`Each balloon is one outcome: $n(S) = 2 + 3 + 4 = 9$.`,
          t`$A$: a green balloon, so $n(A) = 4$.`,
          t`$P(A) = \frac{n(A)}{n(S)} = \frac{4}{9}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q1(A)(iv)" },
      stem: t`If $n(A) = 2$ and $P(A) = \frac{1}{5}$, then $n(S) = ?$`,
      verify: { kind: "value", inputs: { a: "2", p: "1/5" }, params: { ask: "nS" } },
      options: [
        { key: "A", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C03-M1", value: "2/5" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C03-M2", value: "12" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C03-M4", value: "5" },
        { key: "D", text: t`$10$`, correct: true, value: "10" },
      ],
      solution: {
        steps: [
          t`$P(A) = \frac{n(A)}{n(S)}$, so $\frac{1}{5} = \frac{2}{n(S)}$.`,
          t`$n(S) = 2 \div \frac{1}{5} = 2 \times 5 = 10$.`,
          t`Check: $\frac{2}{10} = \frac{1}{5}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q1(A)(iv)" },
      stem: t`$A$ is any event of a random experiment. Which statement about $P(A)$ is always true?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$P(A) \ge 0$, with no upper limit`, correct: false, misconceptionId: "C03-M2", value: "Interval(0, oo)" },
        { key: "B", text: t`$0 < P(A) < 1$`, correct: false, misconceptionId: "C03-M5", value: "Interval.open(0, 1)" },
        { key: "C", text: t`$0 \le P(A) \le 1$`, correct: true, value: "Interval(0, 1)" },
        { key: "D", text: t`$P(A) \ge 1$`, correct: false, misconceptionId: "C03-M1", value: "Interval(1, oo)" },
      ],
      solution: {
        steps: [
          t`$n(A)$ counts some of the outcomes in $S$, so $0 \le n(A) \le n(S)$.`,
          t`Divide by $n(S)$: $0 \le \frac{n(A)}{n(S)} \le 1$.`,
          t`An impossible event gives $0$ and a sure event gives $1$, so $0 \le P(A) \le 1$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/PS5 Q.13" },
      stem: t`Each card bears one letter of the word 'mathematics', one card for each letter. The cards are placed upside down and one card is drawn. What is the probability that it bears the letter 'm'?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "prob", exp: "word", word: "mathematics", pick: "m" } },
      options: [
        { key: "A", text: t`$\frac{2}{11}$`, correct: true, value: "2/11" },
        { key: "B", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C03-M2", value: "2/9" },
        { key: "C", text: t`$\frac{1}{8}$`, correct: false, misconceptionId: "C03-M3", value: "1/8" },
        { key: "D", text: t`$\frac{1}{11}$`, correct: false, misconceptionId: "C03-M4", value: "1/11" },
      ],
      solution: {
        steps: [
          t`'mathematics' has $11$ letters, one on each card, so $n(S) = 11$.`,
          t`The letter 'm' appears twice: $n(A) = 2$.`,
          t`$P(A) = \frac{2}{11}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/PS5 Q.8 (2)" },
      stem: t`A box contains $30$ tickets, each bearing one number from $1$ to $30$. One ticket is drawn at random. What is the probability that the number on it is a perfect square?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "30" }, params: { ask: "prob", exp: "numbers", cond: "square" } },
      options: [
        { key: "A", text: t`$\frac{1}{6}$`, correct: true, value: "1/6" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C03-M1", value: "6" },
        { key: "C", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C03-M2", value: "1/5" },
        { key: "D", text: t`$\frac{1}{30}$`, correct: false, misconceptionId: "C03-M4", value: "1/30" },
      ],
      solution: {
        steps: [
          t`The tickets are $1$ to $30$, so $n(S) = 30$.`,
          t`Perfect squares: $A = \{1, 4, 9, 16, 25\}$, so $n(A) = 5$.`,
          t`$P(A) = \frac{5}{30} = \frac{1}{6}$.`,
        ],
      },
    },
  ],
};
