import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$x^2 - 6x + 9 = 0$ and $x^2 - 6x + 10 = 0$ differ only by $1$ in the last term. **One has a real root and the other has none. Which is which, without solving?**`,
    reveal: t`Look at $b^2 - 4ac$, the number under the square root in the formula. For the first it is $36 - 36 = 0$: the root is $x = 3$, twice. For the second it is $36 - 40 = -4$: no real number squares to $-4$, so there is no real root.`,
  },
  explanation: {
    intuition: [
      t`A **quadratic equation** is $ax^2 + bx + c = 0$ with $a \neq 0$; its **roots** are the values of $x$ that satisfy it.`,
      t`The formula gives them: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.`,
      t`Everything hangs on the number under the root, the **discriminant** $D = b^2 - 4ac$.`,
      t`If $D > 0$, the $+$ and the $-$ give two different real roots.`,
      t`If $D = 0$, both signs give the same root $-\frac{b}{2a}$: the roots are **equal**, and still real.`,
      t`If $D < 0$, no real number squares to $D$, so there is no real root.`,
    ],
    formal: [
      {
        title: "Finding D",
        points: [
          t`First write the equation as $ax^2 + bx + c = 0$, with every term on one side.`,
          t`Each coefficient keeps its sign: in $2x^2 + 3x - 5 = 0$, $a = 2$, $b = 3$ and $c = -5$.`,
          t`So $D = 3^2 - 4(2)(-5)$ $= 9 + 40 = 49$.`,
          t`When $a$ and $c$ have opposite signs, $-4ac$ is positive, so $D > 0$ for sure.`,
          t`Here $D = 49 > 0$: two distinct real roots.`,
        ],
      },
      {
        title: "Rational or irrational roots",
        points: [
          t`A **rational** number is a fraction of whole numbers; an **irrational** number, like $\sqrt{3}$, is real but is not such a fraction.`,
          t`Take $a$, $b$, $c$ rational. If $D$ is a **perfect square**, the square of a rational number, the roots are rational.`,
          t`For $2x^2 + 3x - 5 = 0$: $\sqrt{49} = 7$, so $x = \frac{-3 \pm 7}{4}$, that is $1$ and $-\frac{5}{2}$.`,
          t`If $D > 0$ is not a perfect square, the roots are irrational, and still real.`,
          t`For $x^2 - 4x + 1 = 0$: $D = 12$, so $x = 2 \pm \sqrt{3}$.`,
          t`Irrational roots come as a pair, $p + \sqrt{q}$ and $p - \sqrt{q}$.`,
        ],
      },
      {
        title: "A parameter in the equation",
        points: [
          t`A **parameter** is a letter, like $k$, standing for a fixed number we have to find.`,
          t`Turn the words into a condition on $D$: "equal roots" means $D = 0$.`,
          t`"Two distinct real roots" means $D > 0$.`,
          t`"Real roots" means $D \ge 0$: equal roots are real too.`,
          t`"No real roots" means $D < 0$.`,
          t`Then solve that equation or inequality for the parameter.`,
        ],
      },
      {
        title: "Solving for the parameter",
        points: [
          t`For $x^2 - 8x + k = 0$: $D = 64 - 4k$.`,
          t`Equal roots: $64 - 4k = 0$, so $k = 16$.`,
          t`Real roots: $64 - 4k \ge 0$, so $4k \le 64$, that is $k \le 16$.`,
          t`When the parameter is squared, keep both signs: $k^2 < 25$ means $-5 < k < 5$.`,
          t`If $k$ sits in the $x^2$ coefficient, drop any value that makes it $0$: the equation is then not quadratic.`,
        ],
      },
      {
        title: "Coefficients that are expressions",
        points: [
          t`The coefficients may be expressions in other letters, like $b - c$ or $a(b - c)$.`,
          t`Equal roots still means $D = 0$, and this becomes a relation between the letters.`,
          t`$a, b, c$ are in **A.P.**, an arithmetic progression with equal steps, when $2b = a + c$.`,
          t`They are in **G.P.**, a geometric progression with equal ratios, when $b^2 = ac$.`,
          t`They are in **H.P.**, a harmonic progression, when $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$ are in A.P.: $\frac{2}{b} = \frac{1}{a} + \frac{1}{c}$.`,
          t`Simplify $D = 0$ fully, then match it to the exact relation.`,
        ],
      },
    ],
    worked: {
      prompt: t`The roots of $(b - c)x^2 + (c - a)x + (a - b) = 0$, where $b \neq c$, are equal. Show that $a, b, c$ are in A.P.`,
      steps: [
        t`Here $A = b - c$, $B = c - a$ and $C = a - b$; equal roots need $B^2 - 4AC = 0$.`,
        t`$B^2 = (c - a)^2$ $= a^2 - 2ac + c^2$.`,
        t`$4AC = 4(b - c)(a - b)$ $= 4ab - 4b^2 - 4ac + 4bc$.`,
        t`Subtract: $B^2 - 4AC = a^2 + 4b^2 + c^2$ $+ 2ac - 4ab - 4bc$, which is $(a - 2b + c)^2$.`,
        t`So $(a - 2b + c)^2 = 0$, which gives $a + c = 2b$.`,
      ],
      answer: t`$2b = a + c$, so $a, b, c$ are in A.P.`,
    },
    visualSpec: t`Slide $c$ and watch the parabola $y = ax^2 + bx + c$ cross, touch or miss the $x$-axis as $D$ changes sign.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Believing real roots need $D > 0$, so $D = 0$ is left out of "real roots"`,
      remediation: t`When $D = 0$ the two roots are equal, $x = -\frac{b}{2a}$, and they are real. So "real roots" means $D \ge 0$, "two distinct real roots" means $D > 0$ and "no real roots" means $D < 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Taking any positive $D$ to give rational roots`,
      remediation: t`The roots are rational only when $D$ is a perfect square, so that $\sqrt{D}$ is rational. If $D > 0$ is not a perfect square, the roots are irrational, though still real.`,
      fallback: { kind: "ext", topic: "rational and irrational numbers" },
    },
    {
      id: "C02-M3",
      mistake: t`Reading a positive $D$ that is not a perfect square as "no real roots"`,
      remediation: t`Any $D > 0$ gives two real roots. If $\sqrt{D}$ is irrational, like $\sqrt{12}$, the roots are irrational, and irrational numbers are real. Only $D < 0$ means no real roots.`,
      fallback: { kind: "ext", topic: "rational and irrational numbers" },
    },
    {
      id: "C02-M4",
      mistake: t`Getting the sign of the $4ac$ term wrong, using $b^2 + 4ac$`,
      remediation: t`$D = b^2 - 4ac$, with each coefficient put in with its own sign. If $a$ and $c$ have opposite signs, $-4ac$ is positive; if they have the same sign, it is negative.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Dropping the $4$, using $b^2 - ac$ (the G.P. look-alike)`,
      remediation: t`The discriminant is $D = b^2 - 4ac$: keep the $4$. Equal roots means $b^2 = 4ac$, not $b^2 = ac$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Keeping a value of the parameter that makes the $x^2$ coefficient $0$`,
      remediation: t`A quadratic needs $a \neq 0$. A parameter value that makes $a = 0$ leaves no quadratic at all, so drop it from the answer.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C02-M2 and C02-M3 apply only to a nature question whose $D$ is positive and not a perfect square; C02-M6 only when the parameter sits in the $x^2$ coefficient; C02-M1 changes nothing on an equal-roots question.`,
    t`C02-Q6 is NDA 2017 Sep Q13, which asked for the least $P$ ($\frac{1}{81}$); here it asks for the set of $P$, so the strict-boundary mistake C02-M1 is its own option.`,
    "C02-Q1 to C02-Q5 change the PYQs' equations (NDA 2018 Apr Q16, 2023 Apr Q17, 2019 Sep Q16, 2021 Apr Q8, 2022 Apr Q19) so that the four models disagree.",
    "The A.P./G.P./H.P. equal-roots PYQs (NDA 2019 Sep Q6, 2025 Sep Q31 and Q32) are taught in the worked example and the last formal slide, not as items: the wrong discriminants give no progression, so they have no modelled distractors.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q16" },
      stem: t`The roots of $9x^2 + 6x - 1 = 0$ are:`,
      verify: { kind: "value", inputs: { a: "9", b: "6", c: "-1" }, params: { ask: "nature" } },
      options: [
        { key: "A", text: t`two distinct irrational roots`, correct: true, value: "irrational_distinct" },
        { key: "B", text: t`two distinct rational roots`, correct: false, misconceptionId: "C02-M2", value: "rational_distinct" },
        { key: "C", text: t`no real roots`, correct: false, misconceptionId: "C02-M3", value: "no_real_roots" },
        { key: "D", text: t`two equal real roots`, correct: false, misconceptionId: "C02-M4", value: "equal_roots" },
      ],
      solution: {
        steps: [
          t`$a = 9$, $b = 6$, $c = -1$, so $D = 36 - 4(9)(-1)$ $= 36 + 36 = 72$.`,
          t`$D > 0$, so there are two distinct real roots.`,
          t`$72$ is not a perfect square, so they are irrational: $x = \frac{-6 \pm \sqrt{72}}{18}$ $= \frac{-1 \pm \sqrt{2}}{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q17" },
      stem: t`The equation $3x^2 - 4x + k = 0$ has two distinct real roots exactly when:`,
      verify: { kind: "value", inputs: { a: "3", b: "-4", c: "k" }, params: { ask: "distinct" } },
      options: [
        { key: "A", text: t`$k \le \frac{4}{3}$`, correct: false, misconceptionId: "C02-M1", value: "Interval(-oo, 4/3)" },
        { key: "B", text: t`$k > -\frac{4}{3}$`, correct: false, misconceptionId: "C02-M4", value: "Interval.open(-4/3, oo)" },
        { key: "C", text: t`$k < \frac{16}{3}$`, correct: false, misconceptionId: "C02-M5", value: "Interval.open(-oo, 16/3)" },
        { key: "D", text: t`$k < \frac{4}{3}$`, correct: true, value: "Interval.open(-oo, 4/3)" },
      ],
      solution: {
        steps: [
          t`$D = (-4)^2 - 4(3)(k)$ $= 16 - 12k$.`,
          t`Two distinct real roots need $D > 0$: $16 - 12k > 0$.`,
          t`So $12k < 16$, that is $k < \frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q16" },
      stem: t`The equation $x^2 + kx + 9 = 0$ has no real roots exactly when:`,
      verify: { kind: "value", inputs: { a: "1", b: "k", c: "9" }, params: { ask: "noreal" } },
      options: [
        { key: "A", text: t`$-3 < k < 3$`, correct: false, misconceptionId: "C02-M5", value: "Interval.open(-3, 3)" },
        { key: "B", text: t`$-6 < k < 6$`, correct: true, value: "Interval.open(-6, 6)" },
        { key: "C", text: t`$-6 \le k \le 6$`, correct: false, misconceptionId: "C02-M1", value: "Interval(-6, 6)" },
        { key: "D", text: t`no real value of $k$`, correct: false, misconceptionId: "C02-M4", value: "EmptySet" },
      ],
      solution: {
        steps: [
          t`$D = k^2 - 4(1)(9)$ $= k^2 - 36$.`,
          t`No real roots need $D < 0$: $k^2 < 36$.`,
          t`Keep both signs: $-6 < k < 6$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q8" },
      stem: t`The quadratic equation $kx^2 + 6x + 1 = 0$ has real roots exactly when:`,
      verify: { kind: "value", inputs: { a: "k", b: "6", c: "1" }, params: { ask: "real" } },
      options: [
        { key: "A", text: t`$k \le 9$`, correct: false, misconceptionId: "C02-M6", value: "Interval(-oo, 9)" },
        { key: "B", text: t`$k \le 9$ and $k \neq 0$`, correct: true, value: "Union(Interval.open(-oo, 0), Interval.Lopen(0, 9))" },
        { key: "C", text: t`$k < 9$ and $k \neq 0$`, correct: false, misconceptionId: "C02-M1", value: "Union(Interval.open(-oo, 0), Interval.open(0, 9))" },
        { key: "D", text: t`$k \le 36$ and $k \neq 0$`, correct: false, misconceptionId: "C02-M5", value: "Union(Interval.open(-oo, 0), Interval.Lopen(0, 36))" },
      ],
      solution: {
        steps: [
          t`$D = 6^2 - 4(k)(1)$ $= 36 - 4k$.`,
          t`Real roots need $D \ge 0$: $36 - 4k \ge 0$, so $k \le 9$.`,
          t`A quadratic needs $k \neq 0$, so the answer is $k \le 9$ with $k \neq 0$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q19" },
      stem: t`The quadratic equation $(k - 2)x^2 + (k - 2)x + 1 = 0$ has equal roots. Then:`,
      verify: { kind: "value", inputs: { a: "k - 2", b: "k - 2", c: "1" }, params: { ask: "equal" } },
      options: [
        { key: "A", text: t`$k = 2$ or $k = 6$`, correct: false, misconceptionId: "C02-M6", value: "{2, 6}" },
        { key: "B", text: t`$k = 6$`, correct: true, value: "{6}" },
        { key: "C", text: t`$k = -2$`, correct: false, misconceptionId: "C02-M4", value: "{-2}" },
        { key: "D", text: t`$k = 3$`, correct: false, misconceptionId: "C02-M5", value: "{3}" },
      ],
      solution: {
        steps: [
          t`$D = (k - 2)^2 - 4(k - 2)(1)$ $= (k - 2)(k - 6)$.`,
          t`Equal roots need $D = 0$, so $k = 2$ or $k = 6$.`,
          t`At $k = 2$ the $x^2$ coefficient is $0$ and the equation becomes $1 = 0$, so $k = 6$: then it is $4x^2 + 4x + 1 = 0$, that is $(2x + 1)^2 = 0$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q13" },
      stem: t`The roots of $x^2 - 4x - \log_3 P = 0$ are real exactly when:`,
      verify: { kind: "value", inputs: { a: "1", b: "-4", c: "-log(P, 3)" }, params: { ask: "real", var: "P", dom: "pos" } },
      options: [
        { key: "A", text: t`$P \ge \frac{1}{81}$`, correct: true, value: "Interval(1/81, oo)" },
        { key: "B", text: t`$P > \frac{1}{81}$`, correct: false, misconceptionId: "C02-M1", value: "Interval.open(1/81, oo)" },
        { key: "C", text: t`$0 < P \le 81$`, correct: false, misconceptionId: "C02-M4", value: "Interval.Lopen(0, 81)" },
        { key: "D", text: t`$P \ge 3^{-16}$`, correct: false, misconceptionId: "C02-M5", value: "Interval(1/43046721, oo)" },
      ],
      solution: {
        steps: [
          t`$D = (-4)^2 - 4(1)(-\log_3 P)$ $= 16 + 4\log_3 P$.`,
          t`Real roots need $D \ge 0$: $\log_3 P \ge -4$.`,
          t`$\log_3 P$ grows with $P$, so $P \ge 3^{-4} = \frac{1}{81}$.`,
        ],
      },
    },
  ],
};
