import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$x^2 + 6x + 9 = 0$ and $x^2 + 6x + 10 = 0$ differ only by $1$. **Do they have the same kind of roots?**`,
    reveal: t`No. The first is $(x + 3)^2 = 0$: one root, $-3$, twice. The second is $(x + 3)^2 = -1$: no square is negative, so no real root. One number, $b^2 - 4ac$, tells them apart without solving.`,
  },
  explanation: {
    intuition: [
      t`The quadratic formula has $\sqrt{b^2 - 4ac}$ in it.`,
      t`So the number $b^2 - 4ac$ decides what kind of roots we get.`,
      t`This number is called the **discriminant**, written $\Delta$ (read delta).`,
      t`If $\Delta$ is positive, we get two different real roots.`,
      t`If $\Delta$ is $0$, both roots are the same number.`,
      t`If $\Delta$ is negative, it has no real square root, so the roots are not real.`,
    ],
    formal: [
      {
        title: "The discriminant",
        points: [
          t`For $ax^2 + bx + c = 0$, the **discriminant** is $\Delta = b^2 - 4ac$.`,
          t`Read $a$, $b$, $c$ with their signs: $x^2 - 3x - 4 = 0$ has $b = -3$, $c = -4$.`,
          t`Put brackets round a negative number before squaring: $(-3)^2 = 9$, never $-9$.`,
          t`A square of a real number is never negative, so $b^2 \geq 0$.`,
          t`Watch the sign of $-4ac$: $-4(1)(-4) = +16$.`,
          t`So for $x^2 - 3x - 4 = 0$, $\Delta = 9 + 16 = 25$.`,
        ],
      },
      {
        title: "Why the sign of Δ matters",
        points: [
          t`The roots are $\dfrac{-b + \sqrt{\Delta}}{2a}$ and $\dfrac{-b - \sqrt{\Delta}}{2a}$.`,
          t`$\Delta$ itself is under the root sign; it is not the root $\sqrt{\Delta}$.`,
          t`If $\Delta > 0$, $\sqrt{\Delta}$ is a real number other than $0$.`,
          t`Adding it and taking it away give two different roots.`,
          t`If $\Delta = 0$, both roots are $-\dfrac{b}{2a}$: one root, repeated.`,
          t`If $\Delta < 0$, no real number squares to $\Delta$, so the roots are not real.`,
        ],
      },
      {
        title: "The nature of roots",
        points: [
          t`The **nature** of the roots means whether they are real, and whether they are equal.`,
          t`$\Delta > 0$: the roots are **real and unequal**.`,
          t`$\Delta = 0$: the roots are **real and equal**.`,
          t`$\Delta < 0$: the roots are **not real**.`,
          t`A negative $\Delta$ does not give negative roots; it gives no real roots at all.`,
          t`$x^2 - 3x - 4 = 0$ has $\Delta = 25 > 0$, so its roots are real and unequal.`,
        ],
      },
      {
        title: "Finding k for equal roots",
        points: [
          t`Sometimes a coefficient has an unknown, $k$ or $m$, in it.`,
          t`Real and equal roots means $\Delta = 0$: write $b^2 - 4ac = 0$.`,
          t`Solve this equation for the unknown.`,
          t`If you get $k^2 = 16$, keep both answers: $k = 4$ or $k = -4$.`,
          t`Reject any value that makes $a = 0$: then the equation is not quadratic.`,
        ],
      },
    ],
    worked: {
      prompt: t`The roots of $3y^2 + ky + 12 = 0$ are real and equal. Find $k$.`,
      steps: [
        t`Compare with $ay^2 + by + c = 0$: $a = 3$, $b = k$, $c = 12$.`,
        t`$\Delta = b^2 - 4ac = k^2 - 4(3)(12)$ $= k^2 - 144$.`,
        t`Real and equal roots means $\Delta = 0$, so $k^2 = 144$.`,
        t`Take both square roots: $k = 12$ or $k = -12$.`,
        t`$a = 3$ does not depend on $k$, so both values are allowed.`,
      ],
      answer: t`$k = 12$ or $k = -12$.`,
    },
    visualSpec: t`A slider for $c$ in $x^2 + 4x + c = 0$: watch $\Delta = 16 - 4c$ change sign and the two roots meet, then leave the real line.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Squares a negative $b$ to a negative number: $(-5)^2 = -25$.`,
      remediation: t`Put a negative $b$ in brackets before squaring: $(-5)^2 = (-5)(-5) = 25$. A square is never negative.`,
      fallback: { kind: "ext", topic: "squares of negative numbers" },
    },
    {
      id: "C06-M2",
      mistake: t`Gets the sign of the $4ac$ term wrong, working out $b^2 + 4ac$.`,
      remediation: t`$\Delta = b^2 - 4ac$. Multiply out $4ac$ with its signs first, then subtract: $-4(1)(-9) = +36$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Takes the discriminant to be $\sqrt{b^2 - 4ac}$, the root part of the formula.`,
      remediation: t`The discriminant is $b^2 - 4ac$ itself, the number under the root sign. Don't take its square root.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks a negative discriminant only makes the roots negative, so they are still real and unequal.",
      remediation: t`If $\Delta < 0$, then $\sqrt{\Delta}$ is not a real number, so the roots are not real at all.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M5",
      mistake: t`Keeps a value of the unknown that makes $a = 0$.`,
      remediation: t`A quadratic equation needs $a \neq 0$. Reject any value of $k$ that makes the coefficient of $x^2$ zero.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M6",
      mistake: t`Forgets the $4$ and works out $b^2 - ac$.`,
      remediation: t`The discriminant is $b^2 - 4ac$: multiply $a$ and $c$, then multiply by $4$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M1 needs a negative $b$; C06-M2 and C06-M6 need $ac \neq 0$.`,
    t`C06-M3 needs $\Delta > 0$ and $\Delta \neq 1$; C06-M4 shows only when $\Delta < 0$.`,
    t`C06-M5 needs a find-$k$ item where a solution of $\Delta = 0$ makes $a = 0$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.1 (4)" },
      stem: t`For $\sqrt{2}\,x^2 - 5x + \sqrt{2} = 0$, what is the value of the discriminant $\Delta$?`,
      verify: { kind: "value", inputs: { a: "sqrt(2)", b: "-5", c: "sqrt(2)" }, params: { ask: "delta" } },
      options: [
        { key: "A", text: t`$\Delta = -33$`, correct: false, misconceptionId: "C06-M1", value: "-33" },
        { key: "B", text: t`$\Delta = 33$`, correct: false, misconceptionId: "C06-M2", value: "33" },
        { key: "C", text: t`$\Delta = \sqrt{17}$`, correct: false, misconceptionId: "C06-M3", value: "sqrt(17)" },
        { key: "D", text: t`$\Delta = 17$`, correct: true, value: "17" },
      ],
      solution: {
        steps: [
          t`Here $a = \sqrt{2}$, $b = -5$, $c = \sqrt{2}$.`,
          t`$b^2 = (-5)^2 = 25$ and $4ac = 4 \times \sqrt{2} \times \sqrt{2} = 8$.`,
          t`$\Delta = b^2 - 4ac = 25 - 8 = 17$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q2(A)(ii)" },
      stem: t`Complete the activity for $x^2 + 2x - 9 = 0$. Here $a = 1$, $b = 2$, $c = -9$. Then $\Delta = b^2 - 4ac = \square$, so the roots are $\square$. What fills the two boxes?`,
      verify: { kind: "value", inputs: { a: "1", b: "2", c: "-9" }, params: { ask: "nature" } },
      options: [
        { key: "A", text: t`$\Delta = 40$; roots real and unequal`, correct: true, value: "(40, real_unequal)" },
        { key: "B", text: t`$\Delta = -32$; roots not real`, correct: false, misconceptionId: "C06-M2", value: "(-32, not_real)" },
        { key: "C", text: t`$\Delta = 2 \sqrt{10}$; roots real and unequal`, correct: false, misconceptionId: "C06-M3", value: "(2*sqrt(10), real_unequal)" },
        { key: "D", text: t`$\Delta = 13$; roots real and unequal`, correct: false, misconceptionId: "C06-M6", value: "(13, real_unequal)" },
      ],
      solution: {
        steps: [
          t`$\Delta = b^2 - 4ac = 2^2 - 4(1)(-9)$.`,
          t`$-4(1)(-9) = +36$, so $\Delta = 4 + 36 = 40$.`,
          t`$\Delta = 40 > 0$, so the roots are real and unequal.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q2(A)(ii)" },
      stem: t`Complete the activity for $m^2 + 2m + 9 = 0$. Here $a = 1$, $b = 2$, $c = 9$. Then $\Delta = b^2 - 4ac = \square$, so the roots are $\square$. What fills the two boxes?`,
      verify: { kind: "value", inputs: { a: "1", b: "2", c: "9" }, params: { ask: "nature" } },
      options: [
        { key: "A", text: t`$\Delta = -32$; roots not real`, correct: true, value: "(-32, not_real)" },
        { key: "B", text: t`$\Delta = 40$; roots real and unequal`, correct: false, misconceptionId: "C06-M2", value: "(40, real_unequal)" },
        { key: "C", text: t`$\Delta = -32$; roots real and unequal`, correct: false, misconceptionId: "C06-M4", value: "(-32, real_unequal)" },
        { key: "D", text: t`$\Delta = -5$; roots not real`, correct: false, misconceptionId: "C06-M6", value: "(-5, not_real)" },
      ],
      solution: {
        steps: [
          t`$\Delta = b^2 - 4ac = 2^2 - 4(1)(9)$.`,
          t`$\Delta = 4 - 36 = -32$.`,
          t`$\Delta = -32 < 0$, so the roots are not real.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.3 (1)" },
      stem: t`Find the discriminant of $x^2 - 4x + 4 = 0$ and the nature of its roots.`,
      verify: { kind: "value", inputs: { a: "1", b: "-4", c: "4" }, params: { ask: "nature" } },
      options: [
        { key: "A", text: t`$\Delta = 12$; roots real and unequal`, correct: false, misconceptionId: "C06-M6", value: "(12, real_unequal)" },
        { key: "B", text: t`$\Delta = 0$; roots real and equal`, correct: true, value: "(0, real_equal)" },
        { key: "C", text: t`$\Delta = -32$; roots not real`, correct: false, misconceptionId: "C06-M1", value: "(-32, not_real)" },
        { key: "D", text: t`$\Delta = 32$; roots real and unequal`, correct: false, misconceptionId: "C06-M2", value: "(32, real_unequal)" },
      ],
      solution: {
        steps: [
          t`Here $a = 1$, $b = -4$, $c = 4$.`,
          t`$\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0$.`,
          t`$\Delta = 0$, so the roots are real and equal.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q4(i)" },
      stem: t`Find $m$ if the quadratic equation $(m - 12)x^2 + 2(m - 12)x + 2 = 0$ has real and equal roots.`,
      verify: { kind: "value", inputs: { a: "m - 12", b: "2*(m - 12)", c: "2" }, params: { ask: "k", var: "m" } },
      options: [
        { key: "A", text: t`$m = 14$`, correct: true, value: "{14}" },
        { key: "B", text: t`$m = 12$ or $m = 14$`, correct: false, misconceptionId: "C06-M5", value: "{12, 14}" },
        { key: "C", text: t`$m = 10$`, correct: false, misconceptionId: "C06-M2", value: "{10}" },
        { key: "D", text: t`$m = \frac{25}{2}$`, correct: false, misconceptionId: "C06-M6", value: "{25/2}" },
      ],
      solution: {
        steps: [
          t`Here $a = m - 12$, $b = 2(m - 12)$, $c = 2$.`,
          t`$\Delta = 4(m - 12)^2 - 8(m - 12)$ $= 4(m - 12)(m - 14)$.`,
          t`Equal roots means $\Delta = 0$, so $m = 12$ or $m = 14$.`,
          t`$m = 12$ makes $a = 0$, so the equation is not quadratic. Hence $m = 14$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.5 Q.7 (2)" },
      stem: t`The roots of the quadratic equation $kx(x - 2) + 6 = 0$ are real and equal. Find $k$.`,
      verify: { kind: "value", inputs: { a: "k", b: "-2*k", c: "6" }, params: { ask: "k", var: "k" } },
      options: [
        { key: "A", text: t`$k = -6$`, correct: false, misconceptionId: "C06-M1", value: "{-6}" },
        { key: "B", text: t`$k = \frac{3}{2}$`, correct: false, misconceptionId: "C06-M6", value: "{3/2}" },
        { key: "C", text: t`$k = 6$`, correct: true, value: "{6}" },
        { key: "D", text: t`$k = 0$ or $k = 6$`, correct: false, misconceptionId: "C06-M5", value: "{0, 6}" },
      ],
      solution: {
        steps: [
          t`Expand: $kx^2 - 2kx + 6 = 0$, so $a = k$, $b = -2k$, $c = 6$.`,
          t`$\Delta = (-2k)^2 - 4(k)(6)$ $= 4k^2 - 24k = 4k(k - 6)$.`,
          t`Equal roots means $\Delta = 0$, so $k = 0$ or $k = 6$.`,
          t`$k = 0$ makes $a = 0$ (the equation becomes $6 = 0$). Hence $k = 6$.`,
        ],
      },
    },
  ],
};
