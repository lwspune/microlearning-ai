import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Expand $(x - 3)(x + 5)$. Its roots are $3$ and $-5$. **Where do the numbers in the answer come from?**`,
    reveal: t`$(x - 3)(x + 5) = x^2 + 2x - 15$. The $-15$ is the product $3 \times (-5)$, and the $2$ is minus the sum: $-(3 - 5) = 2$. So an equation needs only the sum and product of its roots.`,
  },
  explanation: {
    intuition: [
      t`A **root** of an equation is a value of $x$ that makes it true; a quadratic has two.`,
      t`If the roots are $\alpha$ and $\beta$, then $(x - \alpha)(x - \beta) = 0$ has exactly those roots.`,
      t`Expanded, it reads $x^2 - (\alpha + \beta)x + \alpha\beta = 0$.`,
      t`So two numbers decide the equation: the **sum** $\alpha + \beta$ and the **product** $\alpha\beta$.`,
      t`The sum goes in with a minus sign; the product goes in as it is.`,
      t`For new roots made from old ones, like $\frac{1}{\alpha}$, find their sum and product first, then use the same pattern.`,
    ],
    formal: [
      {
        title: "The equation from its roots",
        points: [
          t`Call the sum of the roots $S$ and their product $P$.`,
          t`The equation is $x^2 - Sx + P = 0$, with a minus before $S$.`,
          t`Roots $3$ and $-5$: $S = -2$ and $P = -15$, so $x^2 + 2x - 15 = 0$.`,
          t`Multiplying by any non-zero number keeps the roots: $2x^2 + 4x - 30 = 0$ is the same equation.`,
          t`So answers are given with whole-number coefficients that share no common factor.`,
        ],
      },
      {
        title: "Clearing fractions",
        points: [
          t`Roots $\frac{1}{2}$ and $-\frac{2}{3}$: $S = -\frac{1}{6}$ and $P = -\frac{1}{3}$.`,
          t`So the equation is $x^2 + \frac{1}{6}x - \frac{1}{3} = 0$.`,
          t`The **LCM** of the denominators is the smallest number each of them divides; here it is $6$.`,
          t`Multiply **every** term by it, the $x^2$ term too.`,
          t`This gives $6x^2 + x - 2 = 0$: whole-number coefficients, the same roots.`,
        ],
      },
      {
        title: "Surd roots come in pairs",
        points: [
          t`A **surd** is a square root such as $\sqrt{3}$ that is not a whole number or a fraction.`,
          t`Roots $m + \sqrt{n}$ and $m - \sqrt{n}$ are **conjugates**: they differ only in the sign of the surd.`,
          t`Their sum is $2m$: the surds cancel.`,
          t`Their product is $m^2 - n$, because $\sqrt{n} \times (-\sqrt{n}) = -n$ and the cross terms cancel.`,
          t`Roots $2 \pm \sqrt{3}$: $S = 4$ and $P = 4 - 3 = 1$, so $x^2 - 4x + 1 = 0$.`,
        ],
      },
      {
        title: "New roots from old ones",
        points: [
          t`Let $\alpha$, $\beta$ be the roots of $ax^2 + bx + c = 0$, with $s = \alpha + \beta$ and $p = \alpha\beta$.`,
          t`Read them off without solving: $s = -\frac{b}{a}$ and $p = \frac{c}{a}$.`,
          t`Roots $k\alpha$ and $k\beta$: the sum is $ks$, but the product is $k^2 p$.`,
          t`Roots $\alpha + k$ and $\beta + k$: the sum is $s + 2k$, the product $p + ks + k^2$.`,
          t`Roots $\frac{1}{\alpha}$ and $\frac{1}{\beta}$: the sum is $\frac{s}{p}$, the product $\frac{1}{p}$.`,
          t`Always add or multiply the new roots themselves: $\frac{1}{\alpha} + \frac{1}{\beta}$ is not $\frac{1}{\alpha + \beta}$.`,
        ],
      },
      {
        title: "Squares, cubes and ratios",
        points: [
          t`Roots $\alpha^2$, $\beta^2$: the sum is $s^2 - 2p$, the product $p^2$.`,
          t`The $2p$ is taken away because $(\alpha + \beta)^2$ $= \alpha^2 + \beta^2 + 2\alpha\beta$.`,
          t`Roots $\alpha^3$, $\beta^3$: the sum is $s^3 - 3ps$, the product $p^3$.`,
          t`Roots $\frac{\alpha}{\beta}$, $\frac{\beta}{\alpha}$: the sum is $\frac{\alpha^2 + \beta^2}{\alpha\beta}$ $= \frac{s^2 - 2p}{p}$.`,
          t`Their product is $\frac{\alpha}{\beta} \cdot \frac{\beta}{\alpha} = 1$.`,
        ],
      },
      {
        title: "Shortcut: substitute in the old equation",
        points: [
          t`For roots $2\alpha$, $2\beta$: if $x = 2\alpha$, then $\frac{x}{2} = \alpha$ is a root of the old equation.`,
          t`So put $\frac{x}{2}$ for $x$ in the old equation: roots $k\alpha$ need $\frac{x}{k}$, not $kx$.`,
          t`For roots $\alpha + k$, put $x - k$ for $x$, since $x - k = \alpha$.`,
          t`For roots $\frac{1}{\alpha}$, put $\frac{1}{x}$ for $x$ and multiply by $x^2$.`,
          t`Then $ax^2 + bx + c = 0$ becomes $cx^2 + bx + a = 0$: the coefficients reversed.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\alpha$ and $\beta$ are the roots of $2x^2 + 3x - 1 = 0$. Form the equation whose roots are $\alpha^2$ and $\beta^2$.`,
      steps: [
        t`Read off $s = -\frac{3}{2}$ and $p = -\frac{1}{2}$.`,
        t`New sum: $\alpha^2 + \beta^2 = s^2 - 2p$ $= \frac{9}{4} + 1 = \frac{13}{4}$.`,
        t`New product: $\alpha^2\beta^2 = p^2 = \frac{1}{4}$.`,
        t`So $x^2 - \frac{13}{4}x + \frac{1}{4} = 0$; multiply every term by $4$.`,
      ],
      answer: t`$4x^2 - 13x + 1 = 0$.`,
    },
    visualSpec: t`Drag two roots along a number line: the equation $x^2 - Sx + P = 0$ rewrites itself as their sum and product change.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Writing $x^2 + (\text{sum})x + \text{product} = 0$: the sum goes in with a plus sign`,
      remediation: t`The equation is $x^2 - Sx + P = 0$: expanding $(x - \alpha)(x - \beta)$ gives the middle term $-(\alpha + \beta)x$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: t`Applying the change to the old sum and product: $\frac{1}{\alpha} + \frac{1}{\beta}$ as $\frac{1}{s}$, $2\alpha \cdot 2\beta$ as $2p$, $\alpha^3 + \beta^3$ as $s^3$`,
      remediation: t`Add and multiply the new roots themselves, then write the result in $s$ and $p$: $2\alpha \cdot 2\beta = 4p$, $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{s}{p}$, $\alpha^3 + \beta^3 = s^3 - 3ps$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Substituting the wrong way: $kx$ for $x$ for roots $k\alpha$, or $x + k$ for $x$ for roots $\alpha + k$`,
      remediation: t`If the new root is $x = k\alpha$, then $\alpha = \frac{x}{k}$, so put $\frac{x}{k}$ for $x$ in the old equation. For roots $\alpha + k$, put $x - k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Clearing fractions but leaving the $x^2$ coefficient as $1$`,
      remediation: t`Multiply every term of $x^2 - Sx + P = 0$ by the LCM, the $x^2$ term too: $x^2 - \frac{13}{4}x + \frac{1}{4} = 0$ becomes $4x^2 - 13x + 1 = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Giving the correction term the wrong sign: $\alpha^2 + \beta^2 = s^2 + 2p$, $\alpha^3 + \beta^3 = s^3 + 3ps$`,
      remediation: t`$(\alpha + \beta)^2 = \alpha^2 + \beta^2 + 2\alpha\beta$, so $\alpha^2 + \beta^2 = s^2 - 2p$; in the same way $\alpha^3 + \beta^3 = s^3 - 3ps$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M6",
      mistake: t`Multiplying a surd pair as $(m + \sqrt{n})(m - \sqrt{n}) = m^2 + n$`,
      remediation: t`The cross terms cancel and $\sqrt{n} \times (-\sqrt{n}) = -n$, so the product of the pair is $m^2 - n$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M2 gives the key's sum for roots $k\alpha$, and the key's product for $\frac{1}{\alpha}$, $\alpha^2$, $\alpha^3$; it has no model for surd pairs or $\frac{\alpha}{\beta}$. On C05-Q4 it is only the slip $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{1}{s}$.`,
    t`C05-M3 applies only to roots $k\alpha$ and $\alpha + k$ (putting $\frac{1}{x}$ is its own inverse). C05-M4 needs a fraction in $S$ or $P$. C05-M5 needs $\alpha^2 + \beta^2$ or $\alpha^3 + \beta^3$. C05-M6 only surd pairs.`,
    t`C05-M1 is the same answer as reading $s = +\frac{b}{a}$ whenever the new sum is odd in $s$, so that slip is not modelled separately.`,
    t`C05-Q4 is NDA 2017 Sep Q24 with $3x^2 + 5x + 1$ for the paper's $3x^2 + 2x + 1$, which has no real roots. That paper's option $x^2 + 8x + 16 = 0$ is the C05-M4 slip.`,
    t`C05-Q5 is NDA 2022 Apr Q17 as printed; its option $p^3 + q^3 + 3pq$ is C05-M5.`,
    t`NDA 2022 Apr Q18 (roots $a$, $b$ of $x^2 - ax - bx + ab - c = 0$) is not used. The bank stars $x^2 - \alpha x - \beta x + \alpha\beta - c = 0$; the right answer is $x^2 - \alpha x - \beta x + \alpha\beta + c = 0$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The quadratic equation with integer coefficients whose roots are $\frac{1 + \sqrt{7}}{2}$ and $\frac{1 - \sqrt{7}}{2}$ is:`,
      verify: { kind: "value", inputs: { p: "1", q: "7", r: "2" }, params: { kind: "surd" } },
      options: [
        { key: "A", text: t`$x^2 - x + 2 = 0$`, correct: false, misconceptionId: "C05-M6", value: "x**2 - x + 2" },
        { key: "B", text: t`$2x^2 - 2x - 3 = 0$`, correct: true, value: "2*x**2 - 2*x - 3" },
        { key: "C", text: t`$2x^2 + 2x - 3 = 0$`, correct: false, misconceptionId: "C05-M1", value: "2*x**2 + 2*x - 3" },
        { key: "D", text: t`$x^2 - 2x - 3 = 0$`, correct: false, misconceptionId: "C05-M4", value: "x**2 - 2*x - 3" },
      ],
      solution: {
        steps: [
          t`The sum is $\frac{1 + \sqrt{7}}{2}$ plus $\frac{1 - \sqrt{7}}{2}$, which is $1$: the surds cancel.`,
          t`The product is $\frac{(1 + \sqrt{7})(1 - \sqrt{7})}{4}$ $= \frac{1 - 7}{4} = -\frac{3}{2}$.`,
          t`So $x^2 - x - \frac{3}{2} = 0$; times $2$, $2x^2 - 2x - 3 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $x^2 - 7x + 5 = 0$, the equation whose roots are $2\alpha$ and $2\beta$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-7", c: "5", k: "2" }, params: { kind: "times" } },
      options: [
        { key: "A", text: t`$x^2 + 14x + 20 = 0$`, correct: false, misconceptionId: "C05-M1", value: "x**2 + 14*x + 20" },
        { key: "B", text: t`$x^2 - 14x + 10 = 0$`, correct: false, misconceptionId: "C05-M2", value: "x**2 - 14*x + 10" },
        { key: "C", text: t`$4x^2 - 14x + 5 = 0$`, correct: false, misconceptionId: "C05-M3", value: "4*x**2 - 14*x + 5" },
        { key: "D", text: t`$x^2 - 14x + 20 = 0$`, correct: true, value: "x**2 - 14*x + 20" },
      ],
      solution: {
        steps: [
          t`$s = 7$ and $p = 5$.`,
          t`New sum $2\alpha + 2\beta = 2s = 14$; new product $2\alpha \cdot 2\beta = 4p = 20$.`,
          t`So the equation is $x^2 - 14x + 20 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $2x^2 - 3x - 4 = 0$, the equation whose roots are $\alpha + 1$ and $\beta + 1$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", c: "-4", k: "1" }, params: { kind: "shift" } },
      options: [
        { key: "A", text: t`$2x^2 - 7x + 1 = 0$`, correct: true, value: "2*x**2 - 7*x + 1" },
        { key: "B", text: t`$2x^2 - 5x - 2 = 0$`, correct: false, misconceptionId: "C05-M2", value: "2*x**2 - 5*x - 2" },
        { key: "C", text: t`$2x^2 + x - 5 = 0$`, correct: false, misconceptionId: "C05-M3", value: "2*x**2 + x - 5" },
        { key: "D", text: t`$x^2 - 7x + 1 = 0$`, correct: false, misconceptionId: "C05-M4", value: "x**2 - 7*x + 1" },
      ],
      solution: {
        steps: [
          t`$s = \frac{3}{2}$ and $p = -2$.`,
          t`New sum $(\alpha + 1) + (\beta + 1)$ $= s + 2 = \frac{7}{2}$.`,
          t`New product $\alpha\beta + \alpha + \beta + 1$ $= -2 + \frac{3}{2} + 1 = \frac{1}{2}$.`,
          t`So $x^2 - \frac{7}{2}x + \frac{1}{2} = 0$; times $2$, $2x^2 - 7x + 1 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q24" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $3x^2 + 5x + 1 = 0$, the equation whose roots are $\alpha + \frac{1}{\beta}$ and $\beta + \frac{1}{\alpha}$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "5", c: "1" }, params: { kind: "plusinv" } },
      options: [
        { key: "A", text: t`$15x^2 + 34x + 80 = 0$`, correct: false, misconceptionId: "C05-M2", value: "15*x**2 + 34*x + 80" },
        { key: "B", text: t`$x^2 + 20x + 16 = 0$`, correct: false, misconceptionId: "C05-M4", value: "x**2 + 20*x + 16" },
        { key: "C", text: t`$3x^2 + 20x + 16 = 0$`, correct: true, value: "3*x**2 + 20*x + 16" },
        { key: "D", text: t`$3x^2 - 20x + 16 = 0$`, correct: false, misconceptionId: "C05-M1", value: "3*x**2 - 20*x + 16" },
      ],
      solution: {
        steps: [
          t`$s = -\frac{5}{3}$ and $p = \frac{1}{3}$.`,
          t`New sum $s + \frac{1}{\alpha} + \frac{1}{\beta} = s + \frac{s}{p}$ $= -\frac{5}{3} - 5 = -\frac{20}{3}$.`,
          t`New product $\alpha\beta + 1 + 1 + \frac{1}{\alpha\beta}$ $= \frac{1}{3} + 2 + 3 = \frac{16}{3}$.`,
          t`So $x^2 + \frac{20}{3}x + \frac{16}{3} = 0$; times $3$, $3x^2 + 20x + 16 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q17" },
      stem: t`Let $\alpha$ and $\beta$ be the roots of $x^2 + px + q = 0$. If $\alpha^3$ and $\beta^3$ are the roots of $x^2 + mx + n = 0$, then $m + n$ equals:`,
      verify: { kind: "value", inputs: { a: "1", b: "p", c: "q" }, params: { kind: "cubes_mn" } },
      options: [
        { key: "A", text: t`$p^3 + q^3 - 3pq$`, correct: true, value: "p**3 - 3*p*q + q**3" },
        { key: "B", text: t`$q^3 - p^3 + 3pq$`, correct: false, misconceptionId: "C05-M1", value: "-p**3 + 3*p*q + q**3" },
        { key: "C", text: t`$p^3 + q^3$`, correct: false, misconceptionId: "C05-M2", value: "p**3 + q**3" },
        { key: "D", text: t`$p^3 + q^3 + 3pq$`, correct: false, misconceptionId: "C05-M5", value: "p**3 + 3*p*q + q**3" },
      ],
      solution: {
        steps: [
          t`$\alpha + \beta = -p$ and $\alpha\beta = q$.`,
          t`$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$ $= -p^3 + 3pq$.`,
          t`In $x^2 + mx + n = 0$ the sum of the roots is $-m$, so $m = p^3 - 3pq$; the product is $n = \alpha^3\beta^3 = q^3$.`,
          t`So $m + n = p^3 + q^3 - 3pq$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $x^2 - 5x + 3 = 0$, the equation whose roots are $\frac{\alpha}{\beta}$ and $\frac{\beta}{\alpha}$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-5", c: "3" }, params: { kind: "ratio" } },
      options: [
        { key: "A", text: t`$3x^2 - 19x + 3 = 0$`, correct: true, value: "3*x**2 - 19*x + 3" },
        { key: "B", text: t`$3x^2 + 19x + 3 = 0$`, correct: false, misconceptionId: "C05-M1", value: "3*x**2 + 19*x + 3" },
        { key: "C", text: t`$x^2 - 19x + 3 = 0$`, correct: false, misconceptionId: "C05-M4", value: "x**2 - 19*x + 3" },
        { key: "D", text: t`$3x^2 - 31x + 3 = 0$`, correct: false, misconceptionId: "C05-M5", value: "3*x**2 - 31*x + 3" },
      ],
      solution: {
        steps: [
          t`$s = 5$ and $p = 3$, so $\alpha^2 + \beta^2 = s^2 - 2p$ $= 25 - 6 = 19$.`,
          t`New sum $\frac{\alpha^2 + \beta^2}{\alpha\beta} = \frac{19}{3}$; new product $\frac{\alpha}{\beta} \cdot \frac{\beta}{\alpha} = 1$.`,
          t`So $x^2 - \frac{19}{3}x + 1 = 0$; times $3$, $3x^2 - 19x + 3 = 0$.`,
        ],
      },
    },
  ],
};
