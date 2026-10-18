import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Toss a coin $4$ times; $X$ = (number of heads) $-$ (number of tails). A friend says $X$ can be any whole number from $-4$ to $4$. **Can $X$ be $1$?**`,
    reveal: t`No. Turn one head into a tail: heads drop by $1$ and tails rise by $1$, so $X$ drops by $2$. $X$ takes only $-4, -2, 0, 2, 4$. Find $X$ for the outcomes before you write its values.`,
  },
  explanation: {
    intuition: [
      t`A **random experiment** has outcomes you can't predict, like tossing a coin twice.`,
      t`A **random variable** $X$ gives a number to every outcome, such as the number of heads.`,
      t`For two tosses: $X(HH) = 2$, $X(HT) = X(TH) = 1$, $X(TT) = 0$.`,
      t`The set of values $X$ can take is its **range**: here $\{0, 1, 2\}$.`,
      t`Values can be $0$, negative or fractions: a loss of ₹ $3$ is the value $-3$.`,
      t`$X$ is **discrete** if you can list its values, **continuous** if they fill an interval.`,
    ],
    formal: [
      {
        title: "Random variable",
        points: [
          t`A **random variable** $X$ is a function on the sample space $S$: one real number per outcome.`,
          t`Each outcome gets exactly one value, but many outcomes can share a value.`,
          t`Three seeds are sown; $X$ = the number that germinate ($Y$: it does, $N$: it doesn't).`,
          t`$X(YYN) = X(YNY) = X(NYY) = 2$ and $X(NNN) = 0$.`,
          t`The **range** of $X$ is the set of its possible values: $\{0, 1, 2, 3\}$.`,
          t`$[X = 2]$ is the **event** made of the outcomes with $X = 2$: $\{YYN, YNY, NYY\}$.`,
        ],
      },
      {
        title: "Finding the range",
        points: [
          t`List the outcomes, find $X$ for each, then collect the different values.`,
          t`Watch the steps: one more head means one fewer tail, so heads $-$ tails moves by $2$.`,
          t`Watch the supply: from a bag with $2$ white balls you can't draw $3$ white ones.`,
          t`Keep the sign: a loss is a negative gain, so losing ₹ $8$ gives $X = -8$.`,
          t`Keep $0$: drawing no white ball gives $X = 0$, which is a value of $X$.`,
        ],
      },
      {
        title: "Discrete or continuous",
        points: [
          t`A **discrete** random variable has values you can list, $x_1, x_2, x_3, \dots$, with gaps between them.`,
          t`Counts are discrete: heads in $3$ tosses take only $0, 1, 2, 3$.`,
          t`A **continuous** random variable takes every value in an interval of real numbers.`,
          t`Measurements are continuous: a waiting time can be any value from $0$ to $3$ minutes.`,
          t`Fractions don't make $X$ continuous: a value like $\frac{1}{2}$ is still one listed value.`,
          t`Limits don't make $X$ discrete: a weight between $50$ and $51$ kg still fills the interval.`,
        ],
        figure: {
          alt: "Two number lines. On the upper one, four separate dots at 0, 1, 2 and 3 show the values of the number of heads in 3 tosses, a discrete random variable with gaps between its values. On the lower one, a solid stretch from 0 to 3 with both ends filled shows a waiting time that can be any value from 0 to 3 minutes, a continuous random variable.",
          axes: "none",
          view: { x: [-1, 4], y: [-2, 2] },
          elements: [
            { kind: "segment", from: [-0.6, 0.8], to: [3.6, 0.8], tone: "muted", step: 2 },
            { kind: "point", at: [0, 0.8], label: "0", labelAt: "s", step: 2 },
            { kind: "point", at: [1, 0.8], label: "1", labelAt: "s", step: 2 },
            { kind: "point", at: [2, 0.8], label: "2", labelAt: "s", step: 2 },
            { kind: "point", at: [3, 0.8], label: "3", labelAt: "s", step: 2 },
            { kind: "label", at: [1.5, 1.3], label: "heads: discrete", labelAt: "n", tone: "muted", step: 2 },
            { kind: "segment", from: [-0.6, -0.8], to: [3.6, -0.8], tone: "muted", step: 4 },
            { kind: "segment", from: [0, -0.8], to: [3, -0.8], tone: "good", step: 4 },
            { kind: "point", at: [0, -0.8], label: "0", labelAt: "n", tone: "good", step: 4 },
            { kind: "point", at: [3, -0.8], label: "3", labelAt: "n", tone: "good", step: 4 },
            { kind: "label", at: [1.5, -1.3], label: "time: continuous", labelAt: "s", tone: "muted", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`An urn contains $3$ red and $4$ black balls. Four balls are drawn at random. $X$ is the number of black balls drawn. Find the range of $X$. Is $X$ discrete or continuous?`,
      steps: [
        t`$4$ balls are drawn and the urn has $4$ black ones, so the largest value is $X = 4$.`,
        t`Only $3$ balls are red, so at least $4 - 3 = 1$ ball drawn is black: $X = 0$ is impossible.`,
        t`Each count between happens: $1$ black and $3$ red, $2$ and $2$, $3$ black and $1$ red.`,
        t`So the range is $\{1, 2, 3, 4\}$: values you can list, so $X$ is discrete.`,
      ],
      answer: t`The range of $X$ is $\{1, 2, 3, 4\}$, and $X$ is discrete.`,
    },
    visualSpec: t`A number line where the student taps an outcome of the experiment and watches its value of $X$ drop onto the line as a dot; a measurement slider paints a solid stretch instead.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Fills the gaps: lists every whole number from the smallest value of $X$ to the largest.`,
      remediation: t`Find $X$ for each outcome and keep only the values that occur; they can jump. For heads $-$ tails, one more head means one fewer tail, so $X$ moves in steps of $2$.`,
      fallback: { kind: "ext", topic: "sample space" },
    },
    {
      id: "C01-M2",
      mistake: "Ignores the limited supply: lets the number of black balls drawn be anything up to the number of balls drawn.",
      remediation: t`You can't draw more black balls than the bag holds: with $2$ black balls, at most $2$ are drawn, however many balls you take.`,
      fallback: { kind: "ext", topic: "sample space" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinks a random variable takes only positive values, so drops $0$ and every negative value.`,
      remediation: t`A random variable can take $0$ and negative values: breaking even gives $X = 0$, and a loss is a negative gain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Drops the minus sign of a loss, writing the size of each value instead.",
      remediation: t`Keep the sign: a loss of ₹ $15$ is a gain of $-15$, a different value from a gain of $15$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks a variable with a smallest and a largest value is discrete, and lists the whole numbers between them.",
      remediation: t`A measurement such as weight or speed can take every value between its limits, like $0.37$, so it is continuous even when its range has ends.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks a random variable that takes fractional values is continuous.",
      remediation: t`Discrete means the values can be listed one by one, and they may be fractions like $2.5$ or $\frac{1}{3}$. Continuous means every value in an interval.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 gives the key when the values are consecutive whole numbers (a plain count); diagnose it on heads $-$ tails or a ratio.`,
    "C01-M2 gives the key unless the bag holds fewer balls of the counted colour than are drawn.",
    "C01-M3 gives the key when every value is positive, and C01-M4 when no value is negative.",
    "C01-M5 shows only on a measurement, and C01-M6 only on a discrete variable with a fractional value, each when its type is asked.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.1" },
      stem: t`A coin is tossed $6$ times. $X$ = (number of heads) $-$ (number of tails). What are the possible values of $X$?`,
      verify: { kind: "value", inputs: { n: "6" }, params: { var: "coin_diff", ask: "values" } },
      options: [
        { key: "A", text: t`$-6, -4, -2, 0, 2, 4, 6$`, correct: true, value: "{-6, -4, -2, 0, 2, 4, 6}" },
        { key: "B", text: t`Every whole number from $-6$ to $6$`, correct: false, misconceptionId: "C01-M1", value: "{-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6}" },
        { key: "C", text: t`$2, 4, 6$`, correct: false, misconceptionId: "C01-M3", value: "{2, 4, 6}" },
        { key: "D", text: t`$0, 2, 4, 6$`, correct: false, misconceptionId: "C01-M4", value: "{0, 2, 4, 6}" },
      ],
      solution: {
        steps: [
          t`Let $h$ be the number of heads; there are $6 - h$ tails, so $X = h - (6 - h)$ $= 2h - 6$.`,
          t`$h$ runs over $0, 1, 2, \dots, 6$, so $X$ moves in steps of $2$, from $-6$ to $6$.`,
          t`The possible values of $X$ are $-6, -4, -2, 0, 2, 4, 6$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Ex 7.1 Q.2" },
      stem: t`A bag contains $5$ red and $2$ black balls. Three balls are drawn at random. A player wins ₹ $10$ for each black ball drawn and loses ₹ $5$ for each red ball drawn. $X$ is the player's gain in rupees. What are the possible values of $X$?`,
      verify: { kind: "value", inputs: { red: "5", black: "2", r: "3", a: "10", b: "5" }, params: { var: "urn_gain", ask: "values" } },
      options: [
        { key: "A", text: t`$-15, 0, 15$`, correct: true, value: "{-15, 0, 15}" },
        { key: "B", text: t`$-15, 0, 15, 30$`, correct: false, misconceptionId: "C01-M2", value: "{-15, 0, 15, 30}" },
        { key: "C", text: t`$15$ only`, correct: false, misconceptionId: "C01-M3", value: "{15}" },
        { key: "D", text: t`$0, 15$`, correct: false, misconceptionId: "C01-M4", value: "{0, 15}" },
      ],
      solution: {
        steps: [
          t`Only $2$ balls are black, so the $3$ balls drawn hold $0$, $1$ or $2$ black ones, the rest red.`,
          t`$0$ black, $3$ red: $X = -15$. $1$ black, $2$ red: $X = 10 - 10 = 0$.`,
          t`$2$ black, $1$ red: $X = 20 - 5 = 15$.`,
          t`The possible values of $X$ are $-15, 0, 15$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.3.2 SolvedEx.1" },
      stem: t`Two persons A and B toss a coin $3$ times. For each head, A gets ₹ $2$ from B; for each tail, B gets ₹ $1.5$ from A. $X$ is the amount (in ₹) gained by A. Which describes $X$?`,
      verify: { kind: "value", inputs: { n: "3", a: "2", b: "3/2" }, params: { var: "coin_gain", ask: "type" } },
      options: [
        { key: "A", text: t`Discrete, with values $2.5, 6$`, correct: false, misconceptionId: "C01-M3", value: "(discrete, {5/2, 6})" },
        { key: "B", text: t`Discrete, with values $1, 2.5, 4.5, 6$`, correct: false, misconceptionId: "C01-M4", value: "(discrete, {1, 5/2, 9/2, 6})" },
        { key: "C", text: t`Discrete, with values $-4.5, -1, 2.5, 6$`, correct: true, value: "(discrete, {-9/2, -1, 5/2, 6})" },
        { key: "D", text: t`Continuous, every value from $-4.5$ to $6$`, correct: false, misconceptionId: "C01-M6", value: "(continuous, Interval(-9/2, 6))" },
      ],
      solution: {
        steps: [
          t`A's gain depends only on the number of heads among the $8$ outcomes.`,
          t`$3$ heads: $X = 6$. $2$ heads: $X = 4 - 1.5 = 2.5$.`,
          t`$1$ head: $X = 2 - 3 = -1$. $0$ heads: $X = -4.5$, a loss.`,
          t`The values $-4.5, -1, 2.5, 6$ can be listed, so $X$ is discrete; fractions and negatives are allowed.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/7.3.2 ForExample.3" },
      stem: t`A coin is tossed $3$ times. $X = \dfrac{\text{number of heads}}{\text{number of tails} + 1}$. Which describes $X$?`,
      verify: { kind: "value", inputs: { n: "3" }, params: { var: "coin_ratio", ask: "type" } },
      options: [
        { key: "A", text: t`Discrete, with values $0, \frac{1}{3}, 1, 3$`, correct: true, value: "(discrete, {0, 1/3, 1, 3})" },
        { key: "B", text: t`Discrete, with values $0, 1, 2, 3$`, correct: false, misconceptionId: "C01-M1", value: "(discrete, {0, 1, 2, 3})" },
        { key: "C", text: t`Discrete, with values $\frac{1}{3}, 1, 3$`, correct: false, misconceptionId: "C01-M3", value: "(discrete, {1/3, 1, 3})" },
        { key: "D", text: t`Continuous, every value from $0$ to $3$`, correct: false, misconceptionId: "C01-M6", value: "(continuous, Interval(0, 3))" },
      ],
      solution: {
        steps: [
          t`$3$ heads: $X = \frac{3}{0 + 1} = 3$. $2$ heads, $1$ tail: $X = \frac{2}{2} = 1$.`,
          t`$1$ head, $2$ tails: $X = \frac{1}{3}$. $0$ heads: $X = \frac{0}{4} = 0$.`,
          t`The values $0, \frac{1}{3}, 1, 3$ can be listed, so $X$ is discrete, though one is a fraction.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Misc 7 II (1)" },
      stem: t`A person on a high-protein diet records $X$, the gain in weight (in kg) in a week. In a week the weight can change by anything from a loss of $1.5$ kg to a gain of $1$ kg. Which describes $X$?`,
      verify: { kind: "value", inputs: { lo: "-3/2", hi: "1" }, params: { var: "measure", ask: "type" } },
      options: [
        { key: "A", text: t`Continuous, $-1.5 \le X \le 1$`, correct: true, value: "(continuous, Interval(-3/2, 1))" },
        { key: "B", text: t`Discrete, with values $-1, 0, 1$`, correct: false, misconceptionId: "C01-M5", value: "(discrete, {-1, 0, 1})" },
        { key: "C", text: t`Continuous, $0 < X \le 1$`, correct: false, misconceptionId: "C01-M3", value: "(continuous, Interval.Lopen(0, 1))" },
        { key: "D", text: t`Continuous, $0 \le X \le 1.5$`, correct: false, misconceptionId: "C01-M4", value: "(continuous, Interval(0, 3/2))" },
      ],
      solution: {
        steps: [
          t`A loss of $1.5$ kg is a gain of $-1.5$ kg, so $X$ runs from $-1.5$ to $1$.`,
          t`Weight is measured, not counted: $X$ can be $-0.73$, $0.2$, or any value in between.`,
          t`So $X$ is continuous, with $-1.5 \le X \le 1$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/prob-distributions-12/Misc 7 II (1)" },
      stem: t`At a check post, cars pass at speeds anywhere from $40$ km/h to $75$ km/h. The speed limit is $60$ km/h. $X$ = (a car's speed) $-$ (the speed limit), in km/h. Which describes $X$?`,
      verify: { kind: "value", inputs: { lo: "-20", hi: "15" }, params: { var: "measure", ask: "type" } },
      options: [
        { key: "A", text: t`Continuous, $0 < X \le 15$`, correct: false, misconceptionId: "C01-M3", value: "(continuous, Interval.Lopen(0, 15))" },
        { key: "B", text: t`Continuous, $0 \le X \le 20$`, correct: false, misconceptionId: "C01-M4", value: "(continuous, Interval(0, 20))" },
        { key: "C", text: t`Continuous, $-20 \le X \le 15$`, correct: true, value: "(continuous, Interval(-20, 15))" },
        { key: "D", text: t`Discrete, with values $-20, -19, \dots, 15$`, correct: false, misconceptionId: "C01-M5", value: "(discrete, {-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15})" },
      ],
      solution: {
        steps: [
          t`Slowest car: $X = 40 - 60 = -20$. Fastest car: $X = 75 - 60 = 15$.`,
          t`Speed is measured, so it can be $52.7$ km/h or any value from $40$ to $75$.`,
          t`So $X$ is continuous, with $-20 \le X \le 15$; a negative value means below the limit.`,
        ],
      },
    },
  ],
};
