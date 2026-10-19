import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`One root of $x^2 - 9x + c = 0$ is twice the other. **Can you find $c$ without guessing the roots?**`,
    reveal: t`Call the roots $\alpha$ and $2\alpha$. Their sum is $3\alpha = 9$, so $\alpha = 3$ and the roots are $3$ and $6$. Their product is $c = 18$. Writing the condition into the roots, then using the sum and product, is the whole method.`,
  },
  explanation: {
    intuition: [
      t`A **condition on the roots** says how the two roots are related, such as "one root is twice the other".`,
      t`Build the condition into the roots: call them $\alpha$ and $2\alpha$, or $\alpha$ and $\frac{1}{\alpha}$.`,
      t`The sum and product of the roots, $-\frac{b}{a}$ and $\frac{c}{a}$, then give two equations.`,
      t`Eliminate $\alpha$: what is left is an equation in the coefficients $a$, $b$, $c$ alone.`,
      t`If a coefficient holds an unknown, a **parameter** such as $k$, that equation finds $k$.`,
      t`Last, check that the roots asked for, such as real ones, really exist for that $k$.`,
    ],
    formal: [
      {
        title: "One root λ times the other",
        points: [
          t`Say one root is $\lambda$ (lambda) times the other: call the roots $\alpha$ and $\lambda\alpha$.`,
          t`Sum: $(\lambda + 1)\alpha = -\frac{b}{a}$, so $\alpha = \frac{-b}{(\lambda + 1)a}$.`,
          t`Product: $\lambda\alpha^2 = \frac{c}{a}$.`,
          t`Put $\alpha$ into the product: $\frac{\lambda b^2}{(\lambda + 1)^2 a^2}$ $= \frac{c}{a}$.`,
          t`Clear the fractions: $\lambda b^2 = (\lambda + 1)^2 ac$.`,
          t`One root twice the other ($\lambda = 2$) gives $2b^2 = 9ac$.`,
        ],
      },
      {
        title: "Roots in a given ratio",
        points: [
          t`The roots are in the **ratio** $m : n$ when they are $mt$ and $nt$ for some number $t \neq 0$.`,
          t`So $m$ and $n$ are not the roots themselves: $t$ scales them.`,
          t`Sum: $(m + n)t = -\frac{b}{a}$. Product: $mnt^2 = \frac{c}{a}$.`,
          t`Find $t$ from the sum; the product then gives the missing coefficient.`,
          t`Eliminating $t$ gives $mnb^2 = (m + n)^2 ac$.`,
          t`With $m = \lambda$ and $n = 1$ this is the rule for one root $\lambda$ times the other.`,
        ],
      },
      {
        title: "Roots that differ by d",
        points: [
          t`Roots that **differ by** $d$ are $\alpha$ and $\alpha + d$: one is $d$ more than the other.`,
          t`Square the gap: $(\alpha - \beta)^2$ $= (\alpha + \beta)^2 - 4\alpha\beta$.`,
          t`Why $4$: $(\alpha + \beta)^2$ $= \alpha^2 + 2\alpha\beta + \beta^2$, and taking away $4\alpha\beta$ leaves $(\alpha - \beta)^2$.`,
          t`Set it equal to $d^2$, not $d$: so $\frac{b^2}{a^2} - \frac{4c}{a} = d^2$.`,
          t`Times $a^2$: $b^2 - 4ac = a^2 d^2$.`,
          t`**Consecutive integers**, like $4$ and $5$, differ by $1$, so then $b^2 - 4ac = a^2$.`,
        ],
      },
      {
        title: "Reciprocal and opposite roots",
        points: [
          t`The **reciprocal** of $\alpha$ is $\frac{1}{\alpha}$; roots $\alpha$ and $\frac{1}{\alpha}$ have product $1$.`,
          t`So reciprocal roots need $\frac{c}{a} = 1$, that is $c = a$.`,
          t`Roots **equal in size and opposite in sign** are $\alpha$ and $-\alpha$, like $3$ and $-3$.`,
          t`Their sum is $0$, so they need $b = 0$.`,
          t`Don't swap the two: reciprocal fixes the product, opposite fixes the sum.`,
          t`Each gives only an equation; the next slide checks the roots exist.`,
        ],
      },
      {
        title: "Check that the roots exist",
        points: [
          t`From $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, the roots are real only when $b^2 - 4ac \ge 0$.`,
          t`Reciprocal roots: if $c = a$ but $b^2 - 4ac < 0$, there are no real roots, so reject that $k$.`,
          t`Opposite roots: the product of $\alpha$ and $-\alpha$ is $-\alpha^2$, which is negative.`,
          t`So real opposite roots need $b = 0$ **and** $\frac{c}{a} < 0$.`,
          t`For example $x^2 + 4 = 0$ has $b = 0$ but no real roots.`,
          t`Also reject a $k$ that makes $a = 0$: the equation is then not a quadratic.`,
        ],
      },
    ],
    worked: {
      prompt: t`The roots of $4x^2 - (5k + 1)x + 5k = 0$ differ by $1$. Find $k$.`,
      steps: [
        t`Sum $= \frac{5k + 1}{4}$ and product $= \frac{5k}{4}$.`,
        t`Differ by $1$: $(\text{sum})^2 - 4(\text{product}) = 1^2$, so $\frac{(5k + 1)^2}{16} - 5k = 1$.`,
        t`Times $16$: $25k^2 + 10k + 1 - 80k = 16$, so $5k^2 - 14k - 3 = 0$.`,
        t`$(5k + 1)(k - 3) = 0$, so $k = 3$ or $k = -\frac{1}{5}$.`,
        t`Check $k = 3$: $4x^2 - 16x + 15 = 0$ has roots $\frac{3}{2}$ and $\frac{5}{2}$, which differ by $1$.`,
      ],
      answer: t`$k = 3$ or $k = -\frac{1}{5}$.`,
    },
    visualSpec: t`Slide $k$: the parabola $y = ax^2 + bx + c$ moves, its two roots slide along the $x$-axis, and the condition lights up at each $k$ where it holds.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Taking the sum of the roots as $-b$ and the product as $c$, forgetting to divide by $a$`,
      remediation: t`For $ax^2 + bx + c = 0$ the sum of the roots is $-\frac{b}{a}$ and the product is $\frac{c}{a}$. Divide by $a$ whenever $a \neq 1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M2",
      mistake: t`Taking $(\alpha - \beta)^2$ as $(\alpha + \beta)^2 - 2\alpha\beta$`,
      remediation: t`$(\alpha + \beta)^2 - 2\alpha\beta$ is $\alpha^2 + \beta^2$. The square of the difference is $(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Setting $(\alpha - \beta)^2$ equal to the difference $d$ itself`,
      remediation: t`Roots that differ by $d$ have $(\alpha - \beta)^2 = d^2$: square the difference too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Taking the numbers of the ratio as the roots: roots in the ratio $2 : 3$ (or one twice the other) taken as $2$ and $3$ (or $1$ and $2$)`,
      remediation: t`A ratio fixes only the shape: the roots are $mt$ and $nt$ for some number $t$. Find $t$ from the sum or product of the roots first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Giving the product of the roots a minus sign too: $\alpha\beta = -\frac{c}{a}$`,
      remediation: t`Only the sum carries the minus sign: $\alpha + \beta = -\frac{b}{a}$, but $\alpha\beta = \frac{c}{a}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M6",
      mistake: t`Solving $c = a$ or $b = 0$ for $k$ without checking that the roots are real`,
      remediation: t`Real reciprocal roots need $c = a$ and $b^2 - 4ac \ge 0$; real opposite roots need $b = 0$ and $\frac{c}{a} < 0$. Reject any $k$ that fails the check.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C06-M1 gives the key whenever $a = 1$; diagnose it with $a \neq 1$ (every item here has $a \neq 1$ or $a = k$).`,
    "C06-M2 and C06-M3 apply only to difference conditions, C06-M4 only to ratio conditions, and C06-M6 only to reciprocal and opposite roots.",
    "C06-M3 gives the key when the roots differ by 1, so NDA 2021 Sep Q45 (differ by unity) is the worked example, not an item.",
    t`C06-Q1 changes NDA 2021 Apr Q43 ($5x^2 + 26x + k = 0$, key $5$): there $c = a$ reads straight off. Here the parameter sits in $a$ and $c$, and one root of $c = a$ gives no real roots.`,
    t`C06-Q2 changes NDA 2021 Sep Q6 (key: no such $k$), where C06-M1 would agree with the key; here $a = k$ changes sign, so dividing by $a$ matters.`,
    t`C06-Q3 and C06-Q4 double $a$ in NDA 2025 Apr Q3 and 2022 Apr Q20 so that C06-M1 is caught; the PYQ's own values $k = 6, -2$ are now the C06-M1 option of C06-Q3.`,
    t`C06-Q5 and C06-Q6 are numeric forms of the same-ratio PYQs (NDA 2018 Sep Q49, 2017 Apr Q5), whose symbolic answer is $\frac{b^2}{ac} = \frac{q^2}{pr}$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q43" },
      stem: t`The equation $kx^2 + 5x + (6 - k^2) = 0$ has real roots, and one root is the reciprocal of the other. Then:`,
      verify: { kind: "value", inputs: { a: "k", b: "5", c: "6 - k**2" }, params: { rel: "recip" } },
      options: [
        { key: "A", text: t`$k = \pm\sqrt{5}$`, correct: false, misconceptionId: "C06-M1", value: "{-sqrt(5), sqrt(5)}" },
        { key: "B", text: t`$k = -2$ or $k = 3$`, correct: false, misconceptionId: "C06-M5", value: "{-2, 3}" },
        { key: "C", text: t`$k = -3$ or $k = 2$`, correct: false, misconceptionId: "C06-M6", value: "{-3, 2}" },
        { key: "D", text: t`$k = 2$`, correct: true, value: "{2}" },
      ],
      solution: {
        steps: [
          t`Reciprocal roots have product $1$, so $\frac{6 - k^2}{k} = 1$, that is $k^2 + k - 6 = 0$.`,
          t`$(k + 3)(k - 2) = 0$, so $k = -3$ or $k = 2$.`,
          t`$k = -3$ gives $-3x^2 + 5x - 3 = 0$, with $b^2 - 4ac = 25 - 36 < 0$: no real roots.`,
          t`$k = 2$ gives $2x^2 + 5x + 2 = 0$, with real roots $-2$ and $-\frac{1}{2}$. So $k = 2$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q6" },
      stem: t`The equation $kx^2 + (k^2 - 4)x + 5 = 0$ has real roots that are equal in size and opposite in sign. Then:`,
      verify: { kind: "value", inputs: { a: "k", b: "k**2 - 4", c: "5" }, params: { rel: "opp" } },
      options: [
        { key: "A", text: t`$k = -2$`, correct: true, value: "{-2}" },
        { key: "B", text: t`no real value of $k$`, correct: false, misconceptionId: "C06-M1", value: "EmptySet" },
        { key: "C", text: t`$k = 2$`, correct: false, misconceptionId: "C06-M5", value: "{2}" },
        { key: "D", text: t`$k = -2$ or $k = 2$`, correct: false, misconceptionId: "C06-M6", value: "{-2, 2}" },
      ],
      solution: {
        steps: [
          t`Roots $\alpha$ and $-\alpha$ have sum $0$, so $k^2 - 4 = 0$: $k = 2$ or $k = -2$.`,
          t`Their product, $-\alpha^2$, is negative, so $\frac{5}{k} < 0$, which needs $k < 0$.`,
          t`$k = 2$ gives $2x^2 + 5 = 0$: no real roots. $k = -2$ gives $-2x^2 + 5 = 0$, roots $\pm\sqrt{\frac{5}{2}}$. So $k = -2$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q3" },
      stem: t`One root of $2x^2 - kx + k = 0$ exceeds the other by $2\sqrt{3}$. Then:`,
      verify: { kind: "value", inputs: { a: "2", b: "-k", c: "k", d: "2*sqrt(3)" }, params: { rel: "diff" } },
      options: [
        { key: "A", text: t`$k = -4$ or $k = 12$`, correct: true, value: "{-4, 12}" },
        { key: "B", text: t`$k = -2$ or $k = 6$`, correct: false, misconceptionId: "C06-M1", value: "{-2, 6}" },
        { key: "C", text: t`$k = 2 \pm 2\sqrt{13}$`, correct: false, misconceptionId: "C06-M2", value: "{2 - 2*sqrt(13), 2 + 2*sqrt(13)}" },
        { key: "D", text: t`$k = -12$ or $k = 4$`, correct: false, misconceptionId: "C06-M5", value: "{-12, 4}" },
      ],
      solution: {
        steps: [
          t`Sum $= \frac{k}{2}$ and product $= \frac{k}{2}$.`,
          t`$(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$: $\frac{k^2}{4} - 2k = (2\sqrt{3})^2 = 12$.`,
          t`$k^2 - 8k - 48 = 0$, so $(k - 12)(k + 4) = 0$: $k = 12$ or $k = -4$.`,
          t`Check $k = 12$: $x^2 - 6x + 6 = 0$ has roots $3 \pm \sqrt{3}$, which differ by $2\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q20" },
      stem: t`Let $\alpha$ and $\beta$, with $\alpha > \beta$, be the roots of $2x^2 - 16x + q = 0$. If $\alpha^2 - \beta^2 = 16$, then $q$ equals:`,
      verify: { kind: "value", inputs: { a: "2", b: "-16", c: "q", s: "16" }, params: { rel: "sqdiff", param: "q", one: "1" } },
      options: [
        { key: "A", text: t`$31$`, correct: false, misconceptionId: "C06-M3", value: "31" },
        { key: "B", text: t`$30$`, correct: true, value: "30" },
        { key: "C", text: t`$\frac{255}{4}$`, correct: false, misconceptionId: "C06-M1", value: "255/4" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C06-M2", value: "60" },
      ],
      solution: {
        steps: [
          t`Sum $\alpha + \beta = \frac{16}{2} = 8$ and product $\alpha\beta = \frac{q}{2}$.`,
          t`$\alpha^2 - \beta^2 = (\alpha + \beta)(\alpha - \beta)$, so $8(\alpha - \beta) = 16$ and $\alpha - \beta = 2$.`,
          t`$(\alpha - \beta)^2 = 8^2 - 4 \cdot \frac{q}{2}$ $= 64 - 2q$.`,
          t`Set it equal to $2^2 = 4$: $q = 30$, and the roots are $5$ and $3$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q49" },
      stem: t`One root of $2x^2 + kx + 9 = 0$ is twice the other. Then:`,
      verify: { kind: "value", inputs: { a: "2", b: "k", c: "9", R: "2" }, params: { rel: "times" } },
      options: [
        { key: "A", text: t`$k = \pm 9$`, correct: true, value: "{-9, 9}" },
        { key: "B", text: t`$k = \pm \frac{9\sqrt{2}}{2}$`, correct: false, misconceptionId: "C06-M1", value: "{-9*sqrt(2)/2, 9*sqrt(2)/2}" },
        { key: "C", text: t`$k = -6$`, correct: false, misconceptionId: "C06-M4", value: "{-6}" },
        { key: "D", text: t`no real value of $k$`, correct: false, misconceptionId: "C06-M5", value: "EmptySet" },
      ],
      solution: {
        steps: [
          t`Call the roots $\alpha$ and $2\alpha$: sum $3\alpha = -\frac{k}{2}$, product $2\alpha^2 = \frac{9}{2}$.`,
          t`From the product, $\alpha^2 = \frac{9}{4}$, so $\alpha = \pm\frac{3}{2}$.`,
          t`Then $k = -6\alpha$, so $k = -9$ or $k = 9$ (or by $\lambda b^2 = (\lambda + 1)^2 ac$: $2k^2 = 162$).`,
          t`Check $k = 9$: $2x^2 + 9x + 9 = 0$ has roots $-\frac{3}{2}$ and $-3$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Apr Q5" },
      stem: t`The roots of $2x^2 - 20x + k = 0$ are in the ratio $2 : 3$. Then $k$ equals:`,
      verify: { kind: "value", inputs: { a: "2", b: "-20", c: "k", m: "2", n: "3" }, params: { rel: "ratio", one: "1" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C06-M4", value: "12" },
        { key: "B", text: t`$-48$`, correct: false, misconceptionId: "C06-M5", value: "-48" },
        { key: "C", text: t`$48$`, correct: true, value: "48" },
        { key: "D", text: t`$96$`, correct: false, misconceptionId: "C06-M1", value: "96" },
      ],
      solution: {
        steps: [
          t`Call the roots $2t$ and $3t$: sum $5t = \frac{20}{2} = 10$, so $t = 2$.`,
          t`The roots are $4$ and $6$, with product $24$.`,
          t`The product is $\frac{k}{2}$, so $k = 48$.`,
        ],
      },
    },
  ],
};
