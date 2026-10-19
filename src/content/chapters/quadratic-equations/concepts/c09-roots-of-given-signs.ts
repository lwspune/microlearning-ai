import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Without solving, are the roots of $x^2 + 7x + 11 = 0$ positive or negative?`,
    reveal: t`Both negative. $D = 49 - 44 = 5 > 0$, so the roots are real. Their product is $11 > 0$, so they share a sign; their sum is $-7 < 0$, so that sign is minus.`,
  },
  explanation: {
    intuition: [
      t`The **sign** of a number says whether it is positive (above $0$) or negative (below $0$).`,
      t`Let $\alpha$ and $\beta$ be the roots of $ax^2 + bx + c = 0$; then $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$.`,
      t`A positive product means the two roots share a sign: both positive or both negative.`,
      t`The sum then says which: a positive sum means both are positive.`,
      t`A negative product means one root is positive and the other negative.`,
      t`Signs only make sense for real roots, so check $D = b^2 - 4ac \ge 0$ as well.`,
    ],
    formal: [
      {
        title: "Both roots of one sign",
        points: [
          t`Both roots positive needs all three: $D \ge 0$, $\alpha + \beta > 0$ and $\alpha\beta > 0$.`,
          t`Both roots negative needs $D \ge 0$, $\alpha + \beta < 0$ and $\alpha\beta > 0$.`,
          t`Equal roots count as two real roots, so $D = 0$ is allowed.`,
          t`Without $D \ge 0$ you may accept values of $k$ that give no real roots at all.`,
          t`Without the sum, a positive product also lets in two roots of the wrong sign.`,
          t`The answer is the **intersection** of the three: the values of $k$ that pass every test.`,
        ],
      },
      {
        title: "Roots of opposite signs",
        points: [
          t`**Opposite signs** means one root is positive and the other negative.`,
          t`That happens exactly when $\alpha\beta = \frac{c}{a} < 0$.`,
          t`No separate check of $D$ is needed: $ac < 0$ makes $b^2 - 4ac$ positive.`,
          t`The **size** of a root is its distance from $0$: $-5$ has size $5$.`,
          t`The sum says which root is larger in size: a positive sum means the positive root.`,
          t`$x^2 + 2x - 8 = 0$: product $-8$, sum $-2$; the roots $2$ and $-4$ fit.`,
        ],
      },
      {
        title: t`Keep $a$ in every test`,
        points: [
          t`The sum is $-\frac{b}{a}$ and the product is $\frac{c}{a}$, not $-b$ and $c$.`,
          t`When $a < 0$, dividing by $a$ flips each sign.`,
          t`In $-2x^2 + 3x + 5 = 0$ the product is $-\frac{5}{2}$, so the roots have opposite signs.`,
          t`When $a$ contains $k$, solve each test as a fraction inequality.`,
          t`$\frac{k + 2}{k - 3} < 0$ holds when top and bottom differ in sign: $-2 < k < 3$.`,
          t`Leave out any $k$ that makes $a = 0$: the equation is then not a quadratic.`,
        ],
      },
      {
        title: "A number between the roots",
        points: [
          t`Write $f(x) = ax^2 + bx + c$, and let $m$ be any fixed number.`,
          t`The graph of $y = f(x)$ is a **parabola**, a U-shaped curve, cutting the $x$-axis at the roots.`,
          t`For $a > 0$ the U opens upward, so $f$ is negative exactly between the roots.`,
          t`For $a < 0$ it opens downward, so $f$ is positive between them.`,
          t`Both cases at once: $m$ lies between the roots exactly when $a\,f(m) < 0$.`,
          t`For $m = 0$ this is $ac < 0$: the opposite-signs test again.`,
        ],
      },
      {
        title: "Both roots beyond a number",
        points: [
          t`Both roots greater than $m$ needs three tests, just like both roots positive.`,
          t`$D \ge 0$: the roots are real.`,
          t`$a\,f(m) > 0$: $m$ is not between the roots, so it is below both or above both.`,
          t`The **midpoint** of the roots is $\frac{\alpha + \beta}{2}$ $= -\frac{b}{2a}$, halfway between them.`,
          t`$-\frac{b}{2a} > m$: the roots sit to the right of $m$, so both exceed it.`,
          t`Both roots less than $m$ keeps the first two tests and needs $-\frac{b}{2a} < m$.`,
        ],
      },
      {
        title: "Roots inside an interval",
        points: [
          t`The **interval** $(p, q)$ is the numbers strictly between $p$ and $q$; both roots inside it needs four tests.`,
          t`$D \ge 0$, so the roots are real.`,
          t`$a\,f(p) > 0$ and $a\,f(q) > 0$, so neither end lies between the roots.`,
          t`$p < -\frac{b}{2a} < q$, so the roots are not both beyond one end.`,
          t`If $f(p)$ and $f(q)$ have opposite signs, exactly one root lies between $p$ and $q$.`,
          t`Each test you drop lets in wrong values of the parameter, so use them all.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the values of $k$ for which both roots of $x^2 - 2(k - 1)x + k + 5 = 0$ are real and positive.`,
      steps: [
        t`Real roots: $D = 4(k - 1)^2 - 4(k + 5) \ge 0$, which is $k^2 - 3k - 4 \ge 0$.`,
        t`$(k - 4)(k + 1) \ge 0$ gives $k \le -1$ or $k \ge 4$.`,
        t`Positive sum: $2(k - 1) > 0$, so $k > 1$. Positive product: $k + 5 > 0$, so $k > -5$.`,
        t`Keep the values that pass all three tests: $k \ge 4$. At $k = 4$ the roots are $3$ and $3$.`,
      ],
      answer: t`$k \ge 4$.`,
    },
    visualSpec: t`Drag $k$ and watch the parabola $y = f(x)$ move: its roots cross $0$, or a marked number $m$, exactly where $D$, the sum, the product or $a\,f(m)$ changes sign.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Skipping the discriminant: taking the sign tests on the sum and product (or on $a\,f(m)$ and the midpoint) as enough`,
      remediation: t`Signs only mean something for real roots. Add $D = b^2 - 4ac \ge 0$ to the tests and keep only the values of $k$ that pass all of them.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C09-M2",
      mistake: t`Leaving out the sum: letting the product (or $a\,f(m)$) alone decide where the roots lie`,
      remediation: t`The product only says whether the roots share a sign. The sum $-\frac{b}{a}$, or the midpoint $-\frac{b}{2a}$, says which sign they share, or which root is larger in size.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M3",
      mistake: t`Dropping the minus sign in the sum: $\alpha + \beta = \frac{b}{a}$, so the midpoint becomes $\frac{b}{2a}$`,
      remediation: t`The sum of the roots is $-\frac{b}{a}$, and their midpoint is $-\frac{b}{2a}$. Only the product, $\frac{c}{a}$, has no minus sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Leaving out $a$: reading the signs of $-b$, $c$ and $f(m)$ as if $a$ were $1$`,
      remediation: t`The tests are on $-\frac{b}{a}$, $\frac{c}{a}$ and $a\,f(m)$. When $a$ can be negative, dividing or multiplying by it flips the sign, so keep it in.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Testing the roots against $0$ when the question names another number $m$`,
      remediation: t`Use the number itself: $m$ lies between the roots when $a\,f(m) < 0$, and both roots exceed $m$ when also $-\frac{b}{2a} > m$. The product and sum tests are only the case $m = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Reversing the between test: taking $a\,f(m) > 0$ to mean $m$ lies between the roots`,
      remediation: t`Between the roots the parabola is on the opposite side of the axis to its arms, so $f(m)$ and $a$ differ in sign: $a\,f(m) < 0$. Outside the roots, $a\,f(m) > 0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C09-M4 gives the key whenever $a$ is a positive number (C09-Q1, Q2, Q5, Q6); diagnose it with $a$ negative or containing $k$ (C09-Q3, Q4).`,
    t`C09-M1 gives the key for opposite signs and for a number between the roots ($ac < 0$ or $a\,f(m) < 0$ forces $D > 0$). C09-M5 applies only when the number is not $0$.`,
    t`In NDA 2023 Apr Q17 itself ($x^2 - 4x + k$, roots in $(0, 5)$) the midpoint is always inside, so C09-M2 gives the key, and C09-M6 gives its count too. C09-Q5 moves the parameter to $b$ so the models differ.`,
    t`NDA 2020 Apr Q76 ($f(0)$ and $f(1)$ of opposite signs) is taught on the interval slide, not asked: its distractors fit no modelled mistake.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`Both roots of $x^2 - (k - 3)x + k = 0$ are real and positive exactly when:`,
      verify: { kind: "value", inputs: { a: "1", b: "-(k - 3)", c: "k" }, params: { ask: "pos" } },
      options: [
        { key: "A", text: t`$0 < k \le 1$ or $k \ge 9$`, correct: false, misconceptionId: "C09-M2", value: "Union(Interval.Lopen(0, 1), Interval(9, oo))" },
        { key: "B", text: t`$0 < k \le 1$`, correct: false, misconceptionId: "C09-M3", value: "Interval.Lopen(0, 1)" },
        { key: "C", text: t`$k \ge 9$`, correct: true, value: "Interval(9, oo)" },
        { key: "D", text: t`$k > 3$`, correct: false, misconceptionId: "C09-M1", value: "Interval.open(3, oo)" },
      ],
      solution: {
        steps: [
          t`Real roots: $D = (k - 3)^2 - 4k$ $= k^2 - 10k + 9 \ge 0$.`,
          t`$(k - 1)(k - 9) \ge 0$ gives $k \le 1$ or $k \ge 9$.`,
          t`Positive sum: $k - 3 > 0$, so $k > 3$. Positive product: $k > 0$.`,
          t`All three together: $k \ge 9$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`Both roots of $x^2 - 2kx + k + 2 = 0$ are real and greater than $1$ exactly when:`,
      verify: { kind: "value", inputs: { a: "1", b: "-2*k", c: "k + 2", n: "1" }, params: { ask: "gt" } },
      options: [
        { key: "A", text: t`$2 \le k < 3$`, correct: true, value: "Interval.Ropen(2, 3)" },
        { key: "B", text: t`$1 < k < 3$`, correct: false, misconceptionId: "C09-M1", value: "Interval.open(1, 3)" },
        { key: "C", text: t`$k \ge 2$`, correct: false, misconceptionId: "C09-M5", value: "Interval(2, oo)" },
        { key: "D", text: t`$k > 3$`, correct: false, misconceptionId: "C09-M6", value: "Interval.open(3, oo)" },
      ],
      solution: {
        steps: [
          t`Real roots: $D = 4k^2 - 4(k + 2) \ge 0$, so $(k - 2)(k + 1) \ge 0$: $k \le -1$ or $k \ge 2$.`,
          t`$1$ not between the roots: $f(1) = 1 - 2k + k + 2$ $= 3 - k > 0$, so $k < 3$.`,
          t`Midpoint to the right of $1$: $-\frac{b}{2a} = k > 1$.`,
          t`All three together: $2 \le k < 3$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The roots of $(k - 1)x^2 + (3 - k)x$ $+ k - 4 = 0$ have opposite signs, with the negative root larger in size, exactly when:`,
      verify: { kind: "value", inputs: { a: "k - 1", b: "3 - k", c: "k - 4" }, params: { ask: "opp_neg" } },
      options: [
        { key: "A", text: t`$1 < k < 4$`, correct: false, misconceptionId: "C09-M2", value: "Interval.open(1, 4)" },
        { key: "B", text: t`$3 < k < 4$`, correct: false, misconceptionId: "C09-M3", value: "Interval.open(3, 4)" },
        { key: "C", text: t`$k < 3$, $k \neq 1$`, correct: false, misconceptionId: "C09-M4", value: "Union(Interval.open(-oo, 1), Interval.open(1, 3))" },
        { key: "D", text: t`$1 < k < 3$`, correct: true, value: "Interval.open(1, 3)" },
      ],
      solution: {
        steps: [
          t`Opposite signs: the product $\frac{k - 4}{k - 1} < 0$, so $1 < k < 4$.`,
          t`Negative root larger in size: the sum $-\frac{b}{a} = \frac{k - 3}{k - 1}$ must be negative, so $1 < k < 3$.`,
          t`Both together: $1 < k < 3$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The number $2$ lies between the roots of $(k - 1)x^2 - (k + 1)x$ $+ 3 = 0$ exactly when:`,
      verify: { kind: "value", inputs: { a: "k - 1", b: "-(k + 1)", c: "3", n: "2" }, params: { ask: "between" } },
      options: [
        { key: "A", text: t`$1 < k < \frac{3}{2}$`, correct: true, value: "Interval.open(1, 3/2)" },
        { key: "B", text: t`$k < \frac{3}{2}$, $k \neq 1$`, correct: false, misconceptionId: "C09-M4", value: "Union(Interval.open(-oo, 1), Interval.open(1, 3/2))" },
        { key: "C", text: t`$k < 1$`, correct: false, misconceptionId: "C09-M5", value: "Interval.open(-oo, 1)" },
        { key: "D", text: t`$k < 1$ or $k > \frac{3}{2}$`, correct: false, misconceptionId: "C09-M6", value: "Union(Interval.open(-oo, 1), Interval.open(3/2, oo))" },
      ],
      solution: {
        steps: [
          t`$f(2) = 4(k - 1) - 2(k + 1) + 3$ $= 2k - 3$.`,
          t`$2$ lies between the roots when $a\,f(2) < 0$: $(k - 1)(2k - 3) < 0$.`,
          t`The product is negative between its zeros $1$ and $\frac{3}{2}$: $1 < k < \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q17" },
      stem: t`For how many integers $k$ does $x^2 - kx + 4 = 0$ have real roots, both lying in the interval $(0, 5)$?`,
      verify: { kind: "value", inputs: { a: "1", b: "-k", c: "4", lo: "0", hi: "5" }, params: { ask: "in", count: "int" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C09-M3", value: "6" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C09-M6", value: "0" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C09-M1", value: "5" },
      ],
      solution: {
        steps: [
          t`Real roots: $k^2 - 16 \ge 0$, so $k \le -4$ or $k \ge 4$.`,
          t`Ends: $f(0) = 4 > 0$ always, and $f(5) = 29 - 5k > 0$ needs $k < \frac{29}{5}$.`,
          t`Midpoint inside: $0 < \frac{k}{2} < 5$, so $0 < k < 10$.`,
          t`Together $4 \le k < \frac{29}{5}$: only $k = 4$ and $k = 5$, so $2$ integers.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`Both roots of $x^2 + 2kx + 2k + 3 = 0$ are real and negative exactly when:`,
      verify: { kind: "value", inputs: { a: "1", b: "2*k", c: "2*k + 3" }, params: { ask: "neg" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2} < k \le -1$`, correct: false, misconceptionId: "C09-M3", value: "Interval.Lopen(-3/2, -1)" },
        { key: "B", text: t`$k \ge 3$`, correct: true, value: "Interval(3, oo)" },
        { key: "C", text: t`$k > 0$`, correct: false, misconceptionId: "C09-M1", value: "Interval.open(0, oo)" },
        { key: "D", text: t`$- \frac{3}{2} < k \le -1$ or $k \ge 3$`, correct: false, misconceptionId: "C09-M2", value: "Union(Interval.Lopen(-3/2, -1), Interval(3, oo))" },
      ],
      solution: {
        steps: [
          t`Real roots: $D = 4k^2 - 4(2k + 3) \ge 0$, so $(k - 3)(k + 1) \ge 0$: $k \le -1$ or $k \ge 3$.`,
          t`Negative sum: $-2k < 0$, so $k > 0$. Positive product: $2k + 3 > 0$, so $k > -\frac{3}{2}$.`,
          t`All three together: $k \ge 3$.`,
        ],
      },
    },
  ],
};
