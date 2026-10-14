import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Solve $-2x < 6$ by dividing both sides by $-2$. Is the answer $x < -3$? **Try $x = 0$.**`,
    reveal: t`$x = 0$ gives $0 < 6$, which is true, yet $0 < -3$ is false. Dividing by a negative number reverses the order ($2 < 3$, but $-1 > -1.5$), so the sign must flip: $x > -3$, that is, $x \in (-3, \infty)$.`,
  },
  explanation: {
    intuition: t`The solution set of an inequality is a piece of the number line, or a few pieces. For a linear inequality, isolate $x$, and flip the sign whenever you multiply or divide by a negative number. For a quadratic or a fraction, bring everything to one side and compare with $0$. The expression can change sign only at its **critical points**, where a factor is zero, so one test point per region decides that whole region. For $(x + 1)(x - 3) < 0$: the critical points are $-1$ and $3$, the signs are $+, -, +$, and the answer is $(-1, 3)$.`,
    formal: t`**Linear inequalities**

Add or subtract the same number on every side. Multiply or divide by a positive number: the sign stays. By a negative number: the sign **flips**. For $-9 < 2x + 7 \le 19$, work on all three parts: $-16 < 2x \le 12$, so $-8 < x \le 6$, that is, $x \in (-8, 6]$.

**Quadratic and rational: the sign test**

- **1.** Bring everything to one side, so you compare with $0$. Never multiply by an expression such as $x - 4$: its sign is unknown.
- **2.** Make one fraction, factor it, and make each $x$-coefficient positive (dividing by a negative flips the sign).
- **3.** Mark the critical points: the zeros of the numerator and of the denominator. Test one point in each region.
- **4.** Keep the regions with the right sign.

**The ends**

A zero of the numerator gets a square bracket for $\le$ or $\ge$, a round one for $<$ or $>$. A zero of the denominator is never allowed: always a round bracket.

**A pattern to check against.** For $a < b$: $(x - a)(x - b) > 0$ outside the roots, on $(-\infty, a) \cup (b, \infty)$; $(x - a)(x - b) < 0$ between them, on $(a, b)$.`,
    worked: {
      prompt: t`Solve $\dfrac{x + 3}{x - 1} \le 2$ and write the solution set in interval notation.`,
      steps: [
        t`Don't multiply by $x - 1$: it can be negative. Subtract $2$ instead: $\dfrac{x + 3 - 2(x - 1)}{x - 1} = \dfrac{5 - x}{x - 1} \le 0$.`,
        t`Multiply by $-1$ and flip the sign: $\dfrac{x - 5}{x - 1} \ge 0$. The critical points are $1$ (denominator) and $5$ (numerator).`,
        t`Test a point in each region: $x = 0$ gives $\dfrac{-5}{-1} = 5 > 0$; $x = 3$ gives $\dfrac{-2}{2} = -1 < 0$; $x = 6$ gives $\dfrac{1}{5} > 0$. Keep the two outer regions.`,
        t`At $x = 5$ the fraction is $0$, and $0 \ge 0$, so $5$ is in: square bracket. At $x = 1$ the denominator is $0$, so $1$ is out: round bracket.`,
      ],
      answer: t`$x \in (-\infty, 1) \cup [5, \infty)$`,
      figure: {
        alt: "A number line with the critical points 1 and 5 of (x − 5)/(x − 1). Above the regions the signs are +, − and +. The answer (−∞, 1) ∪ [5, ∞) is drawn in green: an arrow to the left from a hollow point at 1, and an arrow to the right from a solid point at 5.",
        axes: "none",
        view: { x: [-2.1, 8.1], y: [-1, 1] },
        elements: [
          { kind: "segment", from: [-1.9, 0], to: [7.9, 0], tone: "muted" },
          { kind: "point", at: [1, 0], tone: "muted", step: 2 },
          { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "muted", step: 2 },
          { kind: "point", at: [5, 0], tone: "muted", step: 2 },
          { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted", step: 2 },
          { kind: "label", at: [0, 0], label: "+", labelAt: "n", tone: "good", step: 3 },
          { kind: "label", at: [3, 0], label: "−", labelAt: "n", tone: "bad", step: 3 },
          { kind: "label", at: [6, 0], label: "+", labelAt: "n", tone: "good", step: 3 },
          { kind: "vector", from: [1, 0], to: [-1.9, 0], step: 4, tone: "good" },
          { kind: "point", at: [1, 0], hollow: true, step: 4, tone: "good" },
          { kind: "vector", from: [5, 0], to: [7.9, 0], step: 4, tone: "good" },
          { kind: "point", at: [5, 0], step: 4, tone: "good" },
        ],
      },
    },
    figure: {
      alt: "A number line with the critical points −1 and 3 of (x + 1)(x − 3). Above the regions the signs are +, − and +. The answer to (x + 1)(x − 3) < 0, the open interval (−1, 3), is drawn in green with hollow ends.",
      axes: "none",
      view: { x: [-4.1, 6.1], y: [-1, 1] },
      elements: [
        { kind: "segment", from: [-3.9, 0], to: [5.9, 0], tone: "muted" },
        { kind: "point", at: [-1, 0], tone: "muted", step: 1 },
        { kind: "label", at: [-1, 0], label: "−1", labelAt: "s", tone: "muted", step: 1 },
        { kind: "point", at: [3, 0], tone: "muted", step: 1 },
        { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted", step: 1 },
        { kind: "label", at: [-2, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
        { kind: "label", at: [1, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
        { kind: "label", at: [4, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
        { kind: "segment", from: [-1, 0], to: [3, 0], step: 3, tone: "good" },
        { kind: "point", at: [-1, 0], hollow: true, step: 3, tone: "good" },
        { kind: "point", at: [3, 0], hollow: true, step: 3, tone: "good" },
      ],
    },
    visualSpec: t`Drag the critical points along a number line; the sign of the expression shows above each region, and the regions that satisfy the inequality light up, with the right bracket at each end.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Keeping the inequality sign when multiplying or dividing by a negative number, e.g. when clearing a negative $x^2$ or $x$ coefficient`,
      remediation: t`Multiplying or dividing both sides by a negative number reverses the order, so $<$ becomes $>$ and $\le$ becomes $\ge$. Flip the sign every time you clear a negative coefficient.`,
      fallback: { kind: "ext", topic: "linear inequalities" },
    },
    {
      id: "C11-M2",
      mistake: t`Treating a product or quotient like an equation: each factor takes the inequality's sign, so $(x - a)(x - b) > 0$ becomes $x > a$ and $x > b$`,
      remediation: "A product is positive when both factors have the same sign, both positive **or** both negative, and negative when their signs differ. Mark the critical points and test one point in each region.",
      fallback: { kind: "ext", topic: "signs of products and quotients" },
    },
    {
      id: "C11-M3",
      mistake: t`Cross-multiplying by the denominator, as if $x - a$ were always positive`,
      remediation: t`$x - a$ is negative for some $x$, and multiplying by a negative number flips the sign. Subtract instead, to get $0$ on one side, make one fraction, and test the sign in each region.`,
      fallback: { kind: "ext", topic: "linear inequalities" },
    },
    {
      id: "C11-M4",
      mistake: t`Swapping the brackets: a square bracket for $<$ or $>$, and a round one for $\le$ or $\ge$`,
      remediation: t`A strict sign ($<$ or $>$) leaves the end out: round bracket. $\le$ or $\ge$ keeps it: square bracket. A value that makes the denominator zero is never in the set, so its bracket is always round.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    t`C11-M1 only shows when the inequality has a negative coefficient to clear (a negative $x^2$ term, or a numerator like $20 - 3x$); with positive leading coefficients its model does not apply. On such items its answer is the opposite regions, the same answer as reading the sign test backwards.`,
    t`C11-M3 needs a fraction. On a quotient that ends as $\dfrac{x - a}{x - b} \ge 0$ (C11-Q4) C11-M2 gives the same answer as C11-M3, so C11-Q4 tags only C11-M3; C11-Q5 ends with $\le 0$, where the two differ.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q14(ii)" },
      stem: t`The solution set of $20 + x - x^2 < 0$ is:`,
      verify: { kind: "value", inputs: { lhs: "20 + x - x**2", rhs: "0" }, params: { op: "<" } },
      options: [
        { key: "A", text: t`$\left(-\infty, -4\right) \cup \left(5, \infty\right)$`, correct: true, value: "Union(Interval.open(-oo, -4), Interval.open(5, oo))" },
        { key: "B", text: t`$\left(-4, 5\right)$`, correct: false, misconceptionId: "C11-M1", value: "Interval.open(-4, 5)" },
        { key: "C", text: t`$\left(5, \infty\right)$`, correct: false, misconceptionId: "C11-M2", value: "Interval.open(5, oo)" },
        { key: "D", text: t`$\left(-\infty, -4\right] \cup \left[5, \infty\right)$`, correct: false, misconceptionId: "C11-M4", value: "Union(Interval(-oo, -4), Interval(5, oo))" },
      ],
      solution: {
        steps: [
          t`Multiply by $-1$ and flip the sign: $x^2 - x - 20 > 0$, that is, $(x - 5)(x + 4) > 0$. The critical points are $-4$ and $5$.`,
          t`Test: $x = -5$ gives $(-10)(-1) = 10 > 0$; $x = 0$ gives $-20 < 0$; $x = 6$ gives $(1)(10) = 10 > 0$. Keep the outer regions.`,
          t`The sign is strict, so both ends are open: $x \in (-\infty, -4) \cup (5, \infty)$.`,
        ],
        figure: {
          alt: "A number line with the critical points −4 and 5. Above the regions the signs of (x − 5)(x + 4) are +, − and +. The answer (−∞, −4) ∪ (5, ∞) is drawn in green, with hollow points at −4 and 5.",
          axes: "none",
          view: { x: [-7.1, 8.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-6.9, 0], to: [7.9, 0], tone: "muted" },
            { kind: "point", at: [-4, 0], tone: "muted", step: 1 },
            { kind: "label", at: [-4, 0], label: "−4", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [5, 0], tone: "muted", step: 1 },
            { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [-5, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [0, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [6, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "vector", from: [-4, 0], to: [-6.9, 0], step: 3, tone: "good" },
            { kind: "point", at: [-4, 0], hollow: true, step: 3, tone: "good" },
            { kind: "vector", from: [5, 0], to: [7.9, 0], step: 3, tone: "good" },
            { kind: "point", at: [5, 0], hollow: true, step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1.6 SolvedEx.1(b)" },
      stem: t`The solution set of $15 - 2x - x^2 > 0$ is:`,
      verify: { kind: "value", inputs: { lhs: "15 - 2*x - x**2", rhs: "0" }, params: { op: ">" } },
      options: [
        { key: "A", text: t`$\left(-\infty, -5\right)$`, correct: false, misconceptionId: "C11-M2", value: "Interval.open(-oo, -5)" },
        { key: "B", text: t`$\left[-5, 3\right]$`, correct: false, misconceptionId: "C11-M4", value: "Interval(-5, 3)" },
        { key: "C", text: t`$\left(-5, 3\right)$`, correct: true, value: "Interval.open(-5, 3)" },
        { key: "D", text: t`$\left(-\infty, -5\right) \cup \left(3, \infty\right)$`, correct: false, misconceptionId: "C11-M1", value: "Union(Interval.open(-oo, -5), Interval.open(3, oo))" },
      ],
      solution: {
        steps: [
          t`Multiply by $-1$ and flip the sign: $x^2 + 2x - 15 < 0$, that is, $(x + 5)(x - 3) < 0$. The critical points are $-5$ and $3$.`,
          t`Test: $x = -6$ gives $(-1)(-9) = 9 > 0$; $x = 0$ gives $-15 < 0$; $x = 4$ gives $(9)(1) = 9 > 0$. Keep the middle region.`,
          t`The sign is strict, so both ends are open: $x \in (-5, 3)$.`,
        ],
        figure: {
          alt: "A number line with the critical points −5 and 3. Above the regions the signs of (x + 5)(x − 3) are +, − and +. The answer (−5, 3) is drawn in green, with hollow points at −5 and 3.",
          axes: "none",
          view: { x: [-8.1, 6.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-7.9, 0], to: [5.9, 0], tone: "muted" },
            { kind: "point", at: [-5, 0], tone: "muted", step: 1 },
            { kind: "label", at: [-5, 0], label: "−5", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [3, 0], tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [-6, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [-1, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [4, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "segment", from: [-5, 0], to: [3, 0], step: 3, tone: "good" },
            { kind: "point", at: [-5, 0], hollow: true, step: 3, tone: "good" },
            { kind: "point", at: [3, 0], hollow: true, step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q14(iv)" },
      stem: t`The solution set of $5x - 6x^2 \ge 1$ is:`,
      verify: { kind: "value", inputs: { lhs: "5*x - 6*x**2", rhs: "1" }, params: { op: ">=" } },
      options: [
        { key: "A", text: t`$\left(-\infty, \frac{1}{3}\right] \cup \left[\frac{1}{2}, \infty\right)$`, correct: false, misconceptionId: "C11-M1", value: "Union(Interval(-oo, 1/3), Interval(1/2, oo))" },
        { key: "B", text: t`$\left(-\infty, \frac{1}{3}\right]$`, correct: false, misconceptionId: "C11-M2", value: "Interval(-oo, 1/3)" },
        { key: "C", text: t`$\left(\frac{1}{3}, \frac{1}{2}\right)$`, correct: false, misconceptionId: "C11-M4", value: "Interval.open(1/3, 1/2)" },
        { key: "D", text: t`$\left[\frac{1}{3}, \frac{1}{2}\right]$`, correct: true, value: "Interval(1/3, 1/2)" },
      ],
      solution: {
        steps: [
          t`Bring everything to one side: $-6x^2 + 5x - 1 \ge 0$. Multiply by $-1$ and flip the sign: $6x^2 - 5x + 1 \le 0$, that is, $(2x - 1)(3x - 1) \le 0$. The critical points are $\frac{1}{3}$ and $\frac{1}{2}$.`,
          t`Test: $x = 0$ gives $(-1)(-1) = 1 > 0$; $x = 0.4$ gives $(-0.2)(0.2) = -0.04 < 0$; $x = 1$ gives $(1)(2) = 2 > 0$. Keep the middle region.`,
          t`The sign $\le$ includes the critical points, so both ends are closed: $x \in \left[\frac{1}{3}, \frac{1}{2}\right]$.`,
        ],
        figure: {
          alt: "A number line, magnified, with the critical points 1/3 and 1/2. Above the regions the signs of (2x − 1)(3x − 1) are +, − and +. The answer [1/3, 1/2] is drawn in green, with solid points at 1/3 and 1/2.",
          axes: "none",
          view: { x: [-2.1, 7.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-1.9, 0], to: [6.9, 0], tone: "muted" },
            { kind: "point", at: [2, 0], tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "1/3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [3, 0], tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "1/2", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [0, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [2.5, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [5, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "segment", from: [2, 0], to: [3, 0], step: 3, tone: "good" },
            { kind: "point", at: [2, 0], step: 3, tone: "good" },
            { kind: "point", at: [3, 0], step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q14(iii)" },
      stem: t`The solution set of $\dfrac{2x}{x - 4} \le 5$ (where $x \ne 4$) is:`,
      verify: { kind: "value", inputs: { lhs: "2*x/(x - 4)", rhs: "5" }, params: { op: "<=" } },
      options: [
        { key: "A", text: t`$\left[\frac{20}{3}, \infty\right)$`, correct: false, misconceptionId: "C11-M3", value: "Interval(20/3, oo)" },
        { key: "B", text: t`$\left(-\infty, 4\right] \cup \left(\frac{20}{3}, \infty\right)$`, correct: false, misconceptionId: "C11-M4", value: "Union(Interval(-oo, 4), Interval.open(20/3, oo))" },
        { key: "C", text: t`$\left(-\infty, 4\right) \cup \left[\frac{20}{3}, \infty\right)$`, correct: true, value: "Union(Interval.open(-oo, 4), Interval(20/3, oo))" },
        { key: "D", text: t`$\left(4, \frac{20}{3}\right]$`, correct: false, misconceptionId: "C11-M1", value: "Interval.Lopen(4, 20/3)" },
      ],
      solution: {
        steps: [
          t`Don't multiply by $x - 4$: it can be negative. Subtract $5$: $\dfrac{2x - 5(x - 4)}{x - 4} = \dfrac{20 - 3x}{x - 4} \le 0$. Multiply by $-1$ and flip: $\dfrac{3x - 20}{x - 4} \ge 0$. The critical points are $4$ and $\frac{20}{3}$.`,
          t`Test: $x = 3$ gives $\dfrac{-11}{-1} = 11 > 0$; $x = 5$ gives $\dfrac{-5}{1} = -5 < 0$; $x = 7$ gives $\dfrac{1}{3} > 0$. Keep the outer regions.`,
          t`At $x = \frac{20}{3}$ the fraction is $0$: in, square bracket. At $x = 4$ the denominator is $0$: out, round bracket. So $x \in (-\infty, 4) \cup \left[\frac{20}{3}, \infty\right)$.`,
        ],
        figure: {
          alt: "A number line with the critical points 4 and 20/3. Above the regions the signs of (3x − 20)/(x − 4) are +, − and +. The answer (−∞, 4) ∪ [20/3, ∞) is drawn in green: an arrow to the left from a hollow point at 4, and an arrow to the right from a solid point at 20/3.",
          axes: "none",
          view: { x: [0.9, 9.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [1.1, 0], to: [8.9, 0], tone: "muted" },
            { kind: "point", at: [4, 0], tone: "muted", step: 1 },
            { kind: "label", at: [4, 0], label: "4", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [6.667, 0], tone: "muted", step: 1 },
            { kind: "label", at: [6.667, 0], label: "20/3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [5.333, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [7.5, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "vector", from: [4, 0], to: [1.1, 0], step: 3, tone: "good" },
            { kind: "point", at: [4, 0], hollow: true, step: 3, tone: "good" },
            { kind: "vector", from: [6.667, 0], to: [8.9, 0], step: 3, tone: "good" },
            { kind: "point", at: [6.667, 0], step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1.6 SolvedEx.1(c)" },
      stem: t`The solution set of $\dfrac{x}{x - 3} \ge 4$ (where $x \ne 3$) is:`,
      verify: { kind: "value", inputs: { lhs: "x/(x - 3)", rhs: "4" }, params: { op: ">=" } },
      options: [
        { key: "A", text: t`$\left(-\infty, 3\right) \cup \left[4, \infty\right)$`, correct: false, misconceptionId: "C11-M1", value: "Union(Interval.open(-oo, 3), Interval(4, oo))" },
        { key: "B", text: t`$\left(-\infty, 3\right)$`, correct: false, misconceptionId: "C11-M2", value: "Interval.open(-oo, 3)" },
        { key: "C", text: t`$\left(-\infty, 4\right]$`, correct: false, misconceptionId: "C11-M3", value: "Interval(-oo, 4)" },
        { key: "D", text: t`$\left(3, 4\right]$`, correct: true, value: "Interval.Lopen(3, 4)" },
      ],
      solution: {
        steps: [
          t`Subtract $4$: $\dfrac{x - 4(x - 3)}{x - 3} = \dfrac{12 - 3x}{x - 3} \ge 0$. Divide by $-3$ and flip: $\dfrac{x - 4}{x - 3} \le 0$. The critical points are $3$ and $4$.`,
          t`Test: $x = 2$ gives $\dfrac{-2}{-1} = 2 > 0$; $x = 3.5$ gives $\dfrac{-0.5}{0.5} = -1 < 0$; $x = 5$ gives $\dfrac{1}{2} > 0$. Keep the middle region.`,
          t`At $x = 4$ the fraction is $0$: in. At $x = 3$ the denominator is $0$: out. So $x \in (3, 4]$. Check in the original: $x = 3.5$ gives $\dfrac{3.5}{0.5} = 7 \ge 4$.`,
        ],
        figure: {
          alt: "A number line with the critical points 3 and 4. Above the regions the signs of (x − 4)/(x − 3) are +, − and +. The answer (3, 4] is drawn in green, with a hollow point at 3 and a solid point at 4.",
          axes: "none",
          view: { x: [-0.1, 7.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [0.1, 0], to: [6.9, 0], tone: "muted" },
            { kind: "point", at: [3, 0], tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [4, 0], tone: "muted", step: 1 },
            { kind: "label", at: [4, 0], label: "4", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [3.5, 0], label: "−", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [5, 0], label: "+", labelAt: "n", tone: "good", step: 2 },
            { kind: "segment", from: [3, 0], to: [4, 0], step: 3, tone: "good" },
            { kind: "point", at: [3, 0], hollow: true, step: 3, tone: "good" },
            { kind: "point", at: [4, 0], step: 3, tone: "good" },
          ],
        },
      },
    },
  ],
};
