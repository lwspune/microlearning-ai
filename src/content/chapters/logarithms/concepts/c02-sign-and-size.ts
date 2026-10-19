import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Solve $2^y = 0.3$ roughly, in your head. **Is $y$ positive or negative?** That $y$ is $\log_2 0.3$.`,
    reveal: t`$2^0 = 1$, and $2^y$ drops below $1$ as $y$ goes below $0$. So $2^y = 0.3$ needs $y < 0$: $\log_2 0.3 \approx -1.74$ is negative. A log is negative whenever its base is above $1$ and its number lies between $0$ and $1$.`,
  },
  explanation: {
    intuition: [
      t`$\log_a x$ is the power of $a$ that gives $x$, so its sign is the sign of that power.`,
      t`With base $2$, a positive power gives more than $1$: $2^3 = 8$, so $\log_2 8 = 3$.`,
      t`A zero power gives $1$, and a negative power gives a number between $0$ and $1$: $2^{-2} = \frac{1}{4}$.`,
      t`So $\log_2 x$ is positive for $x > 1$, zero at $x = 1$ and negative for $0 < x < 1$.`,
      t`No power of $2$ is $0$ or negative, so $\log_2 0$ and $\log_2(-4)$ do not exist.`,
      t`A base between $0$ and $1$ flips it: $(\frac{1}{2})^3 = \frac{1}{8}$, so $\log_{1/2} 8 = -3$.`,
    ],
    formal: [
      {
        title: "Sign for a base above 1",
        points: [
          t`Take a base $a > 1$; the **argument** is the number $x$ in $\log_a x$.`,
          t`If $x > 1$, then $\log_a x > 0$: for example $\log_2 32 = 5$.`,
          t`If $x = 1$, then $\log_a x = 0$, because $a^0 = 1$.`,
          t`If $0 < x < 1$, then $\log_a x < 0$: for example $\log_2 \frac{1}{8} = -3$.`,
          t`The reason: a negative power of $a$, such as $10^{-2} = 0.01$, lies between $0$ and $1$.`,
          t`The sign changes at $x = 1$, not at $x = a$: $\log_a a = 1$, not $0$.`,
        ],
      },
      {
        title: "A base below 1 reverses it",
        points: [
          t`For a base $0 < a < 1$, a positive power falls below $1$: $(\frac{1}{3})^2 = \frac{1}{9}$.`,
          t`So $\log_a x < 0$ when $x > 1$: $\log_{1/3} 9 = -2$.`,
          t`And $\log_a x > 0$ when $0 < x < 1$: $\log_{1/3} \frac{1}{9} = 2$.`,
          t`It is still $0$ at $x = 1$.`,
          t`One test for every base: $\log_a x > 0$ when $a$ and $x$ lie on the same side of $1$.`,
          t`It is negative when they lie on opposite sides, as in $\log_{1/2} 5$ and $\log_5 \frac{1}{2}$.`,
        ],
      },
      {
        title: "Only positive numbers have logs",
        points: [
          t`Every power of a positive base is positive: $a^y > 0$ for every $y$.`,
          t`So no power of $a$ equals $0$ or a negative number.`,
          t`So $\log_a 0$ and $\log_a(-4)$ are **undefined**: they do not exist.`,
          t`In $\log_a u$ the argument must satisfy $u > 0$: this is the log's **domain** condition.`,
          t`The log itself may be negative: $\log_{10} 0.001 = -3$ is fine.`,
        ],
      },
      {
        title: "How a log grows",
        points: [
          t`For $a > 1$, $\log_a x$ is **increasing**: a bigger $x$ gives a bigger log.`,
          t`So for $p, q > 0$: $\log_a p < \log_a q$ exactly when $p < q$.`,
          t`For $0 < a < 1$, $\log_a x$ is **decreasing**: a bigger $x$ gives a smaller log.`,
          t`So $\log_{1/2} 8 < \log_{1/2} 4$, though $8 > 4$: they are $-3$ and $-2$.`,
          t`To order logs with different bases, find each one's sign first.`,
          t`Then compare each with a whole number: $\log_3 10 > \log_3 9 = 2$.`,
        ],
      },
      {
        title: "Solving a log inequality",
        points: [
          t`To solve $\log_a u > c$, write $c$ as a log: $c = \log_a a^c$.`,
          t`For $a > 1$ the inequality keeps its way: $u > a^c$.`,
          t`For $0 < a < 1$ it turns round: $u < a^c$.`,
          t`Then add the domain condition $u > 0$, and keep the $x$ that satisfy both.`,
          t`Example: $\log_2(x - 1) < 3$ gives $x - 1 < 8$ and $x - 1 > 0$.`,
          t`So $1 < x < 9$.`,
        ],
      },
      {
        title: "Least value of a log",
        points: [
          t`For $a > 1$, $\log_a f(x)$ is least exactly where $f(x)$ is least.`,
          t`Find a quadratic's least value by completing the square: $x^2 + 4x + 12$ $= (x + 2)^2 + 8$.`,
          t`A square is never negative, so the least value is $8$, at $x = -2$.`,
          t`So the least value of $\log_2(x^2 + 4x + 12)$ is $\log_2 8 = 3$.`,
          t`The answer is the log, $3$: not $8$, and not $x = -2$.`,
          t`For $0 < a < 1$ it flips: the log is **greatest** where $f(x)$ is least.`,
        ],
      },
    ],
    worked: {
      prompt: t`Put $p = \log_5 4$, $q = \log_4 5$ and $r = \log_{1/4} 5$ in increasing order.`,
      steps: [
        t`$r$: the base $\frac{1}{4}$ is below $1$ and $5$ is above it: opposite sides, so $r < 0$.`,
        t`$p$: $1 < 4 < 5$ and $\log_5$ increases, so $\log_5 1 < p < \log_5 5$, that is $0 < p < 1$.`,
        t`$q$: $5 > 4$ and $\log_4$ increases, so $q > \log_4 4 = 1$.`,
        t`Negative, then between $0$ and $1$, then above $1$: $r < p < q$.`,
      ],
      answer: t`$r < p < q$. In fact $r \approx -1.16$, $p \approx 0.86$ and $q \approx 1.16$.`,
    },
    figure: {
      alt: "The curves y = log₂ x and y = log½ x for x from 0 to 8. Both pass through the point (1, 0). The base 2 curve rises: it is below the x-axis for x between 0 and 1, through (¼, −2), and above it for x above 1, through (8, 3). The base ½ curve is its mirror image in the x-axis: above the axis for x between 0 and 1 and below it for x above 1. Neither curve reaches x = 0 or goes left of it.",
      axes: "xy",
      view: { x: [-1, 9], y: [-3.6, 3.6] },
      elements: [
        { kind: "point", at: [8, 3], label: "(8, 3)", labelAt: "se", step: 2 },
        { kind: "point", at: [1, 0], label: "(1, 0)", labelAt: "nw", step: 3 },
        { kind: "point", at: [0.25, -2], label: "(¼, −2)", labelAt: "e", step: 3 },
        { kind: "curve", points: [[0.1, -3.322], [0.205, -2.286], [0.31, -1.69], [0.415, -1.269], [0.52, -0.943], [0.625, -0.678], [0.73, -0.454], [0.835, -0.26], [0.94, -0.089], [1.045, 0.064], [1.15, 0.202], [1.255, 0.328], [1.36, 0.444], [1.465, 0.551], [1.57, 0.651], [1.675, 0.744], [1.78, 0.832], [1.885, 0.915], [1.99, 0.993], [2.095, 1.067], [2.2, 1.138], [2.305, 1.205], [2.41, 1.269], [2.515, 1.331], [2.62, 1.39], [2.725, 1.446], [2.83, 1.501], [2.935, 1.553], [3.04, 1.604], [3.145, 1.653], [3.25, 1.7], [3.355, 1.746], [3.46, 1.791], [3.565, 1.834], [3.67, 1.876], [3.775, 1.916], [3.88, 1.956], [3.985, 1.995], [4.09, 2.032], [4.195, 2.069], [4.3, 2.104], [4.405, 2.139], [4.51, 2.173], [4.615, 2.206], [4.72, 2.239], [4.825, 2.271], [4.93, 2.302], [5.035, 2.332], [5.14, 2.362], [5.245, 2.391], [5.35, 2.42], [5.455, 2.448], [5.56, 2.475], [5.665, 2.502], [5.77, 2.529], [5.875, 2.555], [5.98, 2.58], [6.085, 2.605], [6.19, 2.63], [6.295, 2.654], [6.4, 2.678], [6.505, 2.702], [6.61, 2.725], [6.715, 2.747], [6.82, 2.77], [6.925, 2.792], [7.03, 2.814], [7.135, 2.835], [7.24, 2.856], [7.345, 2.877], [7.45, 2.897], [7.555, 2.917], [7.66, 2.937], [7.765, 2.957], [7.87, 2.976], [7.975, 2.995], [8.08, 3.014], [8.185, 3.033], [8.29, 3.051], [8.395, 3.07], [8.5, 3.087]], tone: "accent", step: 4 },
        { kind: "label", at: [4, 2], label: "y = log₂ x", labelAt: "nw", tone: "accent", step: 4 },
        { kind: "curve", points: [[0.1, 3.322], [0.205, 2.286], [0.31, 1.69], [0.415, 1.269], [0.52, 0.943], [0.625, 0.678], [0.73, 0.454], [0.835, 0.26], [0.94, 0.089], [1.045, -0.064], [1.15, -0.202], [1.255, -0.328], [1.36, -0.444], [1.465, -0.551], [1.57, -0.651], [1.675, -0.744], [1.78, -0.832], [1.885, -0.915], [1.99, -0.993], [2.095, -1.067], [2.2, -1.138], [2.305, -1.205], [2.41, -1.269], [2.515, -1.331], [2.62, -1.39], [2.725, -1.446], [2.83, -1.501], [2.935, -1.553], [3.04, -1.604], [3.145, -1.653], [3.25, -1.7], [3.355, -1.746], [3.46, -1.791], [3.565, -1.834], [3.67, -1.876], [3.775, -1.916], [3.88, -1.956], [3.985, -1.995], [4.09, -2.032], [4.195, -2.069], [4.3, -2.104], [4.405, -2.139], [4.51, -2.173], [4.615, -2.206], [4.72, -2.239], [4.825, -2.271], [4.93, -2.302], [5.035, -2.332], [5.14, -2.362], [5.245, -2.391], [5.35, -2.42], [5.455, -2.448], [5.56, -2.475], [5.665, -2.502], [5.77, -2.529], [5.875, -2.555], [5.98, -2.58], [6.085, -2.605], [6.19, -2.63], [6.295, -2.654], [6.4, -2.678], [6.505, -2.702], [6.61, -2.725], [6.715, -2.747], [6.82, -2.77], [6.925, -2.792], [7.03, -2.814], [7.135, -2.835], [7.24, -2.856], [7.345, -2.877], [7.45, -2.897], [7.555, -2.917], [7.66, -2.937], [7.765, -2.957], [7.87, -2.976], [7.975, -2.995], [8.08, -3.014], [8.185, -3.033], [8.29, -3.051], [8.395, -3.07], [8.5, -3.087]], tone: "bad", dashed: true, step: 6 },
        { kind: "label", at: [6, -2.58], label: "y = log½ x", labelAt: "sw", tone: "bad", step: 6 },
      ],
    },
    visualSpec: t`Drag the base $a$ across $1$ and watch the curve $y = \log_a x$ flip over the $x$-axis, always through $(1, 0)$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Treating a base below $1$ like a base above $1$: no reversal of sign, order or inequality`,
      remediation: t`For $0 < a < 1$, $\log_a x$ decreases: it is negative for $x > 1$ and positive for $0 < x < 1$. Turn an inequality round when you remove such a base.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Believing a log is never negative, mixing up 'the argument is positive' with 'the log is positive'",
      remediation: t`Only the argument must be positive; the log itself can be negative, as $\log_2 \frac{1}{4} = -2$. For a base above $1$, $\log_a x < 0$ whenever $0 < x < 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Taking $\log_a a = 0$, so the sign changes at $x = a$ instead of $x = 1$`,
      remediation: t`$\log_a 1 = 0$ and $\log_a a = 1$. The sign of $\log_a x$ changes at $x = 1$, whatever the base.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C02-M4",
      mistake: t`Giving the least value of $f(x)$ itself as the least value of $\log_a f(x)$`,
      remediation: "After finding the least (or greatest) value of the quadratic, take its log: that log is the answer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Forgetting that the log of $0$ or of a negative number is undefined (dropping $u > 0$)`,
      remediation: t`$\log_a u$ exists only for $u > 0$, since no power of $a$ is $0$ or negative. Keep only the $x$ with $u > 0$.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C02-M6",
      mistake: t`Giving the $x$ where $f(x)$ is least (or greatest) as the value`,
      remediation: t`The question asks for a value of the log, not where it happens. The value is $\log_a f(x)$ at that $x$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M1 applies only to a base below $1$; C02-M4 and C02-M6 only to least or greatest values; C02-M2 and C02-M3 to comparisons with $0$ (and C02-M3 to $\log_a a$ in C02-Q1 and C02-Q4).`,
    t`On a count item C02-M3 gives the key when no argument lies between $1$ and its base, and C02-M2 when every log is positive: diagnose them with a mix like C02-Q5.`,
    t`C02-Q1 is NDA 2022 Sep Q73 (options $0, 1, 2, 10$): the unmodelled $2$ is replaced by $-1$ (C02-M6).`,
    t`C02-Q4 is modelled on NDA 2019 Sep Q36 ($x^{\log_7 x} > 7$, asked in C04) with new numbers, and its stem does not say $x > 0$, so forgetting the domain (C02-M5) can show.`,
    t`NDA 2018 Apr Q32 (why $\log_{10} a < 0$ for $0 < a < 1$) is taught on the first formal slide, not asked: its options are wordings, not a modelled answer.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q73" },
      stem: t`What is the least value of $f(x) = \log_{10}(x^2 + 2x + 11)$ for real $x$?`,
      verify: { kind: "value", inputs: { a: "10", f: "x**2 + 2*x + 11" }, params: { ask: "least" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C02-M3", value: "0" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M6", value: "-1" },
      ],
      solution: {
        steps: [
          t`Complete the square: $x^2 + 2x + 11 = (x + 1)^2 + 10$, least value $10$ at $x = -1$.`,
          t`The base $10$ is above $1$, so the log is least where the quadratic is least.`,
          t`Least value $= \log_{10} 10 = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is the greatest value of $\log_{1/2}(x^2 - 6x + 13)$ for real $x$?`,
      verify: { kind: "value", inputs: { a: "1/2", f: "x**2 - 6*x + 13" }, params: { ask: "greatest" } },
      options: [
        { key: "A", text: t`It has no greatest value`, correct: false, misconceptionId: "C02-M1", value: "no_greatest" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C02-M4", value: "4" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M6", value: "3" },
        { key: "D", text: t`$-2$`, correct: true, value: "-2" },
      ],
      solution: {
        steps: [
          t`$x^2 - 6x + 13 = (x - 3)^2 + 4$: least value $4$ at $x = 3$, and no greatest value.`,
          t`The base $\frac{1}{2}$ is below $1$, so the log decreases: it is greatest where the quadratic is least.`,
          t`Greatest value $= \log_{1/2} 4 = -2$, since $(\frac{1}{2})^{-2} = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`For which real $x$ is $\log_{1/2}(x - 2) > 0$?`,
      verify: { kind: "value", inputs: { a: "1/2", u: "x - 2", c: "0" }, params: { ask: "ineq", op: ">" } },
      options: [
        { key: "A", text: t`$x < 3$`, correct: false, misconceptionId: "C02-M5", value: "Interval.open(-oo, 3)" },
        { key: "B", text: t`$2 < x < 3$`, correct: true, value: "Interval.open(2, 3)" },
        { key: "C", text: t`$x > 3$`, correct: false, misconceptionId: "C02-M1", value: "Interval.open(3, oo)" },
        { key: "D", text: t`$2 < x < \frac{5}{2}$`, correct: false, misconceptionId: "C02-M3", value: "Interval.open(2, 5/2)" },
      ],
      solution: {
        steps: [
          t`Domain: $x - 2 > 0$, so $x > 2$.`,
          t`$0 = \log_{1/2} 1$ and the base is below $1$, so the inequality turns round: $x - 2 < 1$, so $x < 3$.`,
          t`Both together: $2 < x < 3$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`For which real $x$ is $x^{\log_3 x} > 81$?`,
      verify: { kind: "value", inputs: { a: "3", k: "4" }, params: { ask: "powlog" } },
      options: [
        { key: "A", text: t`$x < \frac{1}{9}$ or $x > 9$`, correct: false, misconceptionId: "C02-M5", value: "Union(Interval.open(-oo, 1/9), Interval.open(9, oo))" },
        { key: "B", text: t`$0 < x < \frac{1}{9}$ or $x > 9$`, correct: true, value: "Union(Interval.open(0, 1/9), Interval.open(9, oo))" },
        { key: "C", text: t`$x > 9$ only`, correct: false, misconceptionId: "C02-M2", value: "Interval.open(9, oo)" },
        { key: "D", text: t`Every $x > 0$ except $x = 1$`, correct: false, misconceptionId: "C02-M3", value: "Union(Interval.open(0, 1), Interval.open(1, oo))" },
      ],
      solution: {
        steps: [
          t`Domain: $\log_3 x$ needs $x > 0$.`,
          t`Take $\log_3$ of both sides; the base is above $1$, so the inequality keeps its way: $(\log_3 x)^2 > 4$.`,
          t`So $\log_3 x > 2$ or $\log_3 x < -2$: a log can be negative.`,
          t`That gives $x > 9$ or $0 < x < \frac{1}{9}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`How many of the five numbers $\log_{1/2} 3$, $\log_5 3$, $\log_{1/3} \frac{1}{2}$, $\log_{10} \frac{1}{2}$ and $\log_{1/4} 3$ are positive?`,
      verify: { kind: "value", inputs: { logs: "((1/2, 3), (5, 3), (1/3, 1/2), (10, 1/2), (1/4, 3))" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C02-M3", value: "0" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C02-M2", value: "5" },
      ],
      solution: {
        steps: [
          t`A log is positive when its base and argument lie on the same side of $1$.`,
          t`$\log_5 3$ (both above $1$) and $\log_{1/3} \frac{1}{2}$ (both below $1$) are positive.`,
          t`$\log_{1/2} 3$, $\log_{10} \frac{1}{2}$ and $\log_{1/4} 3$ have them on opposite sides, so they are negative.`,
          t`So $2$ of the five are positive.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`For which real $x$ is $\log_3(2x - 1)$ negative?`,
      verify: { kind: "value", inputs: { a: "3", u: "2*x - 1", c: "0" }, params: { ask: "ineq", op: "<" } },
      options: [
        { key: "A", text: t`$\frac{1}{2} < x < 1$`, correct: true, value: "Interval.open(1/2, 1)" },
        { key: "B", text: t`No real $x$`, correct: false, misconceptionId: "C02-M2", value: "EmptySet" },
        { key: "C", text: t`$\frac{1}{2} < x < 2$`, correct: false, misconceptionId: "C02-M3", value: "Interval.open(1/2, 2)" },
        { key: "D", text: t`$x < 1$`, correct: false, misconceptionId: "C02-M5", value: "Interval.open(-oo, 1)" },
      ],
      solution: {
        steps: [
          t`Domain: $2x - 1 > 0$, so $x > \frac{1}{2}$.`,
          t`The base $3$ is above $1$, so $\log_3(2x - 1) < 0$ means $2x - 1 < 1$, that is $x < 1$.`,
          t`Both together: $\frac{1}{2} < x < 1$.`,
        ],
      },
    },
  ],
};
