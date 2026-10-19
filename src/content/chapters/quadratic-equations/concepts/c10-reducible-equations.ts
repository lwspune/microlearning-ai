import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Read $|x|$ as $x$ and $x^2 + 3x + 2 = 0$ has two real roots. **How many real roots does $x^2 + 3|x| + 2 = 0$ have?**`,
    reveal: t`None. Since $x^2 = |x|^2$, put $t = |x|$: then $t^2 + 3t + 2 = 0$, so $t = -1$ or $t = -2$. But $|x|$ is never negative, so no real $x$ works. Indeed $x^2 \ge 0$ and $3|x| \ge 0$, so the left side is at least $2$.`,
  },
  explanation: {
    intuition: [
      t`Some equations are not quadratics in $x$, but are quadratics in an expression made from $x$.`,
      t`In $4^x - 3 \cdot 2^x + 2 = 0$ the key piece is $2^x$, since $4^x = (2^x)^2$.`,
      t`**Substitute**: give that piece a new name, $t = 2^x$, and the equation becomes $t^2 - 3t + 2 = 0$.`,
      t`Solve this quadratic in $t$ as usual: $t = 1$ or $t = 2$.`,
      t`Then **undo** the substitution: $2^x = 1$ gives $x = 0$, and $2^x = 2$ gives $x = 1$.`,
      t`A value the piece can never take, such as a negative value of $2^x$, gives no $x$: **reject** it.`,
    ],
    formal: [
      {
        title: "Substitution, step by step",
        points: [
          t`To **substitute** is to replace a repeated expression in $x$ by a single letter, here $t$.`,
          t`Step 1: find the expression whose square also appears, and call it $t$.`,
          t`Step 2: rewrite the equation in $t$ and solve that quadratic.`,
          t`Step 3: for each root, ask whether the expression can take that value; reject a value it can't.`,
          t`Step 4: solve expression $= t$ for $x$; an allowed $t$ may give two values of $x$, or one.`,
          t`The roots in $t$ are not the answer: the question asks about $x$.`,
        ],
      },
      {
        title: "Exponential equations",
        points: [
          t`An **exponential** expression has $x$ in the power, like $2^x$.`,
          t`The laws of indices give $4^x = (2^2)^x = (2^x)^2$, so $4^x = t^2$ when $t = 2^x$.`,
          t`It is $t^2$, not $2t$: $4^x$ is $2^x$ times itself.`,
          t`In the same way $2^{x + 1} = 2 \cdot 2^x = 2t$, and $2^{-x} = \frac{1}{t}$.`,
          t`For a base $a > 0$, $a^x > 0$ for every $x$, so reject any $t \le 0$.`,
          t`Undo with logs: $a^x = t$ gives $x = \log_a t$; so $3^x = 9$ gives $x = 2$.`,
        ],
      },
      {
        title: "Logarithmic equations",
        points: [
          t`$\log x$ means $\log_{10} x$, the power of $10$ that gives $x$; so $\log 100 = 2$.`,
          t`$\log x$ is defined only for $x > 0$, but its value can be any real number.`,
          t`So no value of $t = \log x$ is rejected: $\log x = -1$ gives $x = \frac{1}{10}$.`,
          t`Use $\log x^3 = 3\log x = 3t$, but $(\log x)^2$ is $t^2$, not $2\log x$.`,
          t`So $(\log x)^2 - \log x^3 + 2 = 0$ becomes $t^2 - 3t + 2 = 0$: $t = 1$ or $t = 2$.`,
          t`Undo with $x = 10^t$: $x = 10$ or $x = 100$, both positive as a log needs.`,
        ],
      },
      {
        title: "Modulus equations",
        points: [
          t`The **modulus** $|x|$ is the size of $x$ without its sign: $|-3| = |3| = 3$.`,
          t`$x^2 = |x|^2$, so in $x^2 - |x| - 2 = 0$ put $t = |x|$: $t^2 - t - 2 = 0$.`,
          t`So $t = 2$ or $t = -1$; but $|x| \ge 0$, so reject $t = -1$.`,
          t`$|x| = 2$ gives two values, $x = 2$ and $x = -2$: keep both.`,
          t`In general, for $t > 0$, $|x - a| = t$ gives $x = a + t$ or $x = a - t$.`,
          t`But $|x - a| = 0$ gives just one value, $x = a$.`,
        ],
      },
      {
        title: "Squares and square roots",
        points: [
          t`A **biquadratic** has only $x^4$, $x^2$ and a number, like $x^4 - 5x^2 + 4 = 0$.`,
          t`Put $t = x^2$: $t^2 - 5t + 4 = 0$, so $t = 1$ or $t = 4$.`,
          t`$x^2 = 1$ gives $x = \pm 1$ and $x^2 = 4$ gives $x = \pm 2$: four real roots.`,
          t`A negative $t$ gives no real $x$, since $x^2 \ge 0$.`,
          t`$\sqrt{x}$ means the square root of $x$ that is not negative; put $t = \sqrt{x}$, so $x = t^2$.`,
          t`So reject a negative $t$; each $t \ge 0$ gives the one value $x = t^2$.`,
        ],
      },
      {
        title: "Reciprocal pairs",
        points: [
          t`The **reciprocal** of $x$ is $\frac{1}{x}$; when $x$ and $\frac{1}{x}$ appear together, put $t = x + \frac{1}{x}$.`,
          t`Squaring gives $x^2 + \frac{1}{x^2} = t^2 - 2$.`,
          t`For $x > 0$, $x + \frac{1}{x} \ge 2$; for $x < 0$, $x + \frac{1}{x} \le -2$.`,
          t`So reject any $t$ strictly between $-2$ and $2$; a negative $t$ such as $-3$ is allowed.`,
          t`$x + \frac{1}{x} = t$ means $x^2 - tx + 1 = 0$: two real roots, or one when $t = \pm 2$.`,
          t`For example $x + \frac{1}{x} = 2$ gives $(x - 1)^2 = 0$, so $x = 1$ only.`,
        ],
      },
      {
        title: "Counting, sum and product",
        points: [
          t`To **count** the real roots, add up the values of $x$ each allowed $t$ gives.`,
          t`For a **sum** or **product**, list the real $x$ first; the sum or product of the $t$ is not it.`,
          t`For $t = a^x$: $x_1 + x_2 = \log_a t_1 + \log_a t_2$ $= \log_a (t_1 t_2)$.`,
          t`That is the log of the product of the two values of $t$, not of their sum.`,
          t`For $t = \log x$: $x_1 x_2 = 10^{t_1} \cdot 10^{t_2}$ $= 10^{t_1 + t_2}$.`,
          t`So $4^x - 3 \cdot 2^x + 2 = 0$, with $t = 1$ and $t = 2$, has roots adding to $\log_2 2 = 1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $x - 3\sqrt{x} - 4 = 0$.`,
      steps: [
        t`Put $t = \sqrt{x}$, so $x = t^2$: the equation is $t^2 - 3t - 4 = 0$.`,
        t`$(t - 4)(t + 1) = 0$, so $t = 4$ or $t = -1$.`,
        t`$\sqrt{x}$ is never negative, so reject $t = -1$. Keeping it would give $x = 1$, but $1 - 3 - 4 \neq 0$.`,
        t`$\sqrt{x} = 4$ gives $x = 16$. Check: $16 - 12 - 4 = 0$.`,
      ],
      answer: t`$x = 16$ only.`,
    },
    visualSpec: t`Slide a value of $t$ up and down beside the graph of the substituted expression, such as $y = |x|$ or $y = 2^x$: the graph shows how many $x$ give that $t$, two, one or none.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Stopping at $t$: reporting the roots of the quadratic in $t$ as the roots in $x$`,
      remediation: t`The roots of the quadratic in $t$ are values of the substituted expression, not of $x$. Undo the substitution: solve $|x - 3| = t$, $3^x = t$ or $\log x = t$ for $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Keeping a value of $t$ the expression can't take: $|x| = -2$ read as $x = \pm 2$, $\sqrt{x} = -2$ as $x = 4$, or $x + \frac{1}{x} = 1$ counted as two roots`,
      remediation: t`Check each $t$ against the values the expression can take: $|x| \ge 0$, $\sqrt{x} \ge 0$, $a^x > 0$, and $x + \frac{1}{x}$ is never strictly between $-2$ and $2$. A value it can't take gives no $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Undoing the substitution on one branch only: $|x - a| = t$ read as $x = a + t$ alone, $x^2 = t$ as $x = \sqrt{t}$ alone`,
      remediation: t`For $t > 0$, $|x - a| = t$ has two solutions, $x = a + t$ and $x = a - t$; likewise $x^2 = t$ gives $x = \pm\sqrt{t}$. Keep both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Reading the square of the expression as twice it: $9^x = (3^x)^2$ taken as $2 \cdot 3^x$, or $(\log x)^2$ taken as $\log x^2 = 2\log x$`,
      remediation: t`$(3^x)^2$ is $3^x$ times itself, so $9^x = t^2$ when $t = 3^x$. In the same way $(\log x)^2 = t^2$, while $\log x^2 = 2\log x = 2t$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C10-M5",
      mistake: t`Rejecting every negative $t$, as if $\log x$ and $x + \frac{1}{x}$ were always positive`,
      remediation: t`$x$ must be positive inside a log, but $\log x$ itself is negative for $0 < x < 1$. And $x + \frac{1}{x} \le -2$ for every negative $x$. Reject only the values the expression can't take.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Taking the sum of the roots of an equation in $t = a^x$ as $\log_a$ of the sum of the values of $t$`,
      remediation: t`Each root is $x = \log_a t$, and $\log_a t_1 + \log_a t_2$ $= \log_a (t_1 t_2)$: the log of the product of the values of $t$, not of their sum.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
  ],
  engineNotes: [
    t`C10-M2 applies only when the quadratic in $t$ has a root the expression can't take; on a roots or sum item only for $|x - a|$ and $\sqrt{x}$, where the kept value still gives real numbers.`,
    t`C10-M3 applies only to $|x - a|$ and $x^2$; C10-M4 only to $a^x$ and $\log x$; C10-M5 only to $\log x$ and $x + \frac{1}{x}$ with an allowed negative $t$; C10-M6 only to the sum of the roots of an equation in $a^x$.`,
    t`On a count for a modulus or biquadratic equation, C10-M1 gives the key whenever one root in $t$ is positive and the other impossible (both count $2$); C10-M3 gives the key when no root in $t$ is positive. Diagnose them with a roots or sum item.`,
    t`The hook is NDA 2019 Sep Q37. C10-Q1 is NDA 2017 Sep Q12 as set; C10-Q5 is NDA 2019 Apr Q78 with the numbers changed so that one root in $t$ survives. The pool has no standalone NDA PYQ on the reciprocal, log or exponential cases (2025 Sep Q21 and Q22 need a missing setup), so C10-Q2 to C10-Q4 are NDA-style.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q12" },
      stem: t`The sum of all real roots of $|x - 3|^2 + |x - 3| - 2 = 0$ is:`,
      verify: { kind: "value", inputs: { q: "t**2 + t - 2", u: "Abs(x - 3)" }, params: { sub: "abs", ask: "sum" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C10-M1", value: "-1" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C10-M2", value: "12" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C10-M3", value: "4" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Put $t = |x - 3|$: $t^2 + t - 2 = 0$, so $(t + 2)(t - 1) = 0$.`,
          t`$t = -2$ is impossible, since $|x - 3| \ge 0$; keep $t = 1$.`,
          t`$|x - 3| = 1$ gives $x - 3 = 1$ or $x - 3 = -1$, so $x = 4$ or $x = 2$.`,
          t`The sum is $4 + 2 = 6$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`How many real roots does $x^2 + \frac{1}{x^2}$ $+ x + \frac{1}{x} = 0$ have?`,
      verify: { kind: "value", inputs: { q: "t**2 + t - 2", u: "x + 1/x" }, params: { sub: "recip", ask: "count" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C10-M1", value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C10-M2", value: "3" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C10-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`Put $t = x + \frac{1}{x}$; then $x^2 + \frac{1}{x^2} = t^2 - 2$.`,
          t`The equation is $t^2 - 2 + t = 0$, so $(t + 2)(t - 1) = 0$: $t = -2$ or $t = 1$.`,
          t`$t = 1$ lies between $-2$ and $2$, so it gives no real $x$: $x^2 - x + 1 = 0$ has discriminant $-3$.`,
          t`$x + \frac{1}{x} = -2$ gives $(x + 1)^2 = 0$, so $x = -1$ only: **one** real root.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`Here $\log$ means $\log_{10}$. The real roots of $(\log x)^2 + \log x^2 - 3 = 0$ are:`,
      verify: { kind: "value", inputs: { q: "t**2 + 2*t - 3", u: "log(x, 10)" }, params: { sub: "log", ask: "roots" } },
      options: [
        { key: "A", text: t`$x = 10$ only`, correct: false, misconceptionId: "C10-M5", value: "{10}" },
        { key: "B", text: t`$x = 10$ or $x = \frac{1}{1000}$`, correct: true, value: "{1/1000, 10}" },
        { key: "C", text: t`$x = 1$ or $x = -3$`, correct: false, misconceptionId: "C10-M1", value: "{-3, 1}" },
        { key: "D", text: t`$x = 10^{3/4}$ only`, correct: false, misconceptionId: "C10-M4", value: "{10**(3/4)}" },
      ],
      solution: {
        steps: [
          t`Put $t = \log x$; for $x > 0$, $\log x^2 = 2\log x = 2t$.`,
          t`$t^2 + 2t - 3 = 0$, so $(t + 3)(t - 1) = 0$: $t = 1$ or $t = -3$.`,
          t`A log can be negative, so keep both: $x = 10^1 = 10$ or $x = 10^{-3} = \frac{1}{1000}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The sum of all real roots of $9^x - 4 \cdot 3^x + 3 = 0$ is:`,
      verify: { kind: "value", inputs: { q: "t**2 - 4*t + 3", u: "3**x" }, params: { sub: "exp", ask: "sum" } },
      options: [
        { key: "A", text: t`$\log_3 \frac{3}{2}$`, correct: false, misconceptionId: "C10-M4", value: "-log(2)/log(3) + 1" },
        { key: "B", text: t`$\log_3 4$`, correct: false, misconceptionId: "C10-M6", value: "2*log(2)/log(3)" },
        { key: "C", text: t`$1$`, correct: true, value: "1" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C10-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`Put $t = 3^x$; $9^x = (3^x)^2 = t^2$, so $t^2 - 4t + 3 = 0$.`,
          t`$(t - 1)(t - 3) = 0$: $t = 1$ or $t = 3$, both positive.`,
          t`$3^x = 1$ gives $x = 0$; $3^x = 3$ gives $x = 1$.`,
          t`The sum is $0 + 1 = 1$, which is also $\log_3 (1 \times 3)$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Apr Q78" },
      stem: t`The real roots of $x^2 - |x| - 6 = 0$ are:`,
      verify: { kind: "value", inputs: { q: "t**2 - t - 6", u: "Abs(x)" }, params: { sub: "abs", ask: "roots" } },
      options: [
        { key: "A", text: t`$x = 3$ or $x = -3$`, correct: true, value: "{-3, 3}" },
        { key: "B", text: t`$x = 3$ or $x = -2$`, correct: false, misconceptionId: "C10-M1", value: "{-2, 3}" },
        { key: "C", text: t`$x = \pm 2$ or $x = \pm 3$`, correct: false, misconceptionId: "C10-M2", value: "{-3, -2, 2, 3}" },
        { key: "D", text: t`$x = 3$ only`, correct: false, misconceptionId: "C10-M3", value: "{3}" },
      ],
      solution: {
        steps: [
          t`$x^2 = |x|^2$, so put $t = |x|$: $t^2 - t - 6 = 0$.`,
          t`$(t - 3)(t + 2) = 0$, so $t = 3$ or $t = -2$; reject $t = -2$, since $|x| \ge 0$.`,
          t`$|x| = 3$ gives $x = 3$ or $x = -3$.`,
        ],
      },
    },
  ],
};
