import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c19: Concept = {
  id: "C19",
  status: "draft",
  hook: {
    prompt: t`Solve $x^2 + 4 = 0$. **No real number works, so what are the roots?**`,
    reveal: t`$x^2 = -4$, so $x = \pm 2i$. With complex numbers, every quadratic has two roots.`,
  },
  explanation: {
    intuition: t`The quadratic formula still works when the discriminant is negative: the square root of a negative number is simply imaginary. With real coefficients, the two roots come out as a conjugate pair $p \pm qi$, mirror images across the real axis.`,
    formal: t`For $ax^2 + bx + c = 0$ with real $a, b, c$ and $D = b^2 - 4ac < 0$:
$$x = \frac{-b \pm i\sqrt{-D}}{2a}.$$
Divide **both** parts by $2a$.

**Conjugate pairs:** with real coefficients, if $p + qi$ is a root, so is $p - qi$. This needs the coefficients to be real.

**Sum and product:** $\alpha + \beta = -\dfrac ba$ and $\alpha\beta = \dfrac ca$, just as for real roots.`,
    worked: {
      prompt: t`Solve $x^2 - 6x + 10 = 0$.`,
      steps: [
        t`$D = 36 - 40 = -4$, so $\sqrt{-D} = 2$.`,
        t`$x = \dfrac{6 \pm 2i}{2}$.`,
        t`Divide both parts by 2: $x = 3 \pm i$.`,
      ],
      answer: t`$3 \pm i$`,
    },
    visualSpec: t`Sliders for $b$ and $c$ move the parabola $y = x^2 + bx + c$. As it lifts off the $x$-axis, the two real roots meet, then split into a conjugate pair shown on an Argand plane beside it.`,
  },
  misconceptions: [
    {
      id: "C19-M1",
      mistake: t`Dropping the $i$: taking $\sqrt D$ as real when $D < 0$`,
      remediation: t`When $D < 0$, $\sqrt D = i\sqrt{-D}$: the roots are complex, not real.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C19-M2",
      mistake: t`Dividing only $-b$ by $2a$`,
      remediation: t`The whole numerator is divided by $2a$: both $-b$ and $i\sqrt{-D}$.`,
      fallback: { kind: "ext", topic: "quadratic formula" },
    },
    {
      id: "C19-M3",
      mistake: t`Using $b$ instead of $-b$`,
      remediation: t`The formula starts with $-b$: for $x^2 - 4x + 13$, that is $+4$.`,
      fallback: { kind: "ext", topic: "quadratic formula" },
    },
    {
      id: "C19-M4",
      mistake: "Taking the other root to be the negative of the root",
      remediation: "With real coefficients the other root is the **conjugate**: flip only the sign of the imaginary part.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C19-M5",
      mistake: "Flipping the sign of the real part to get the other root",
      remediation: t`The conjugate keeps the real part and flips the imaginary part: $3 - 2i$ pairs with $3 + 2i$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C19-M6",
      mistake: "Mixing up the sum and the product of the roots",
      remediation: t`Sum $= -\dfrac ba$, product $= \dfrac ca$.`,
      fallback: { kind: "ext", topic: "sum and product of roots" },
    },
    {
      id: "C19-M7",
      mistake: t`A sign slip: sum $= \dfrac ba$ or product $= -\dfrac ca$`,
      remediation: t`Sum $= -\dfrac ba$ (note the minus), product $= +\dfrac ca$.`,
      fallback: { kind: "ext", topic: "sum and product of roots" },
    },
  ],
  items: [
    {
      id: "C19-Q1",
      source: { kind: "authored" },
      stem: t`The roots of $x^2 - 4x + 13 = 0$ are:`,
      verify: { kind: "value", inputs: { a: "1", b: "-4", c: "13" }, params: { op: "roots" } },
      options: [
        { key: "A", text: t`$2 \pm 3$`, correct: false, misconceptionId: "C19-M1", value: "5" },
        { key: "B", text: t`$2 \pm 6 i$`, correct: false, misconceptionId: "C19-M2", value: "2 + 6*I" },
        { key: "C", text: t`$-2 \pm 3 i$`, correct: false, misconceptionId: "C19-M3", value: "-2 + 3*I" },
        { key: "D", text: t`$2 \pm 3 i$`, correct: true, value: "2 + 3*I" },
      ],
    },
    {
      id: "C19-Q2",
      source: { kind: "authored" },
      stem: t`The roots of $2x^2 + 2x + 5 = 0$ are:`,
      verify: { kind: "value", inputs: { a: "2", b: "2", c: "5" }, params: { op: "roots" } },
      options: [
        { key: "A", text: t`$- \frac{1}{2} \pm \frac{3 i}{2}$`, correct: true, value: "-1/2 + 3*I/2" },
        { key: "B", text: t`$-\frac12 \pm \frac32$`, correct: false, misconceptionId: "C19-M1", value: "1" },
        { key: "C", text: t`$- \frac{1}{2} \pm 6 i$`, correct: false, misconceptionId: "C19-M2", value: "-1/2 + 6*I" },
        { key: "D", text: t`$\frac{1}{2} \pm \frac{3 i}{2}$`, correct: false, misconceptionId: "C19-M3", value: "1/2 + 3*I/2" },
      ],
    },
    {
      id: "C19-Q3",
      source: { kind: "authored" },
      stem: t`$3 - 2i$ is a root of $x^2 + px + q = 0$, where $p$ and $q$ are real. The other root is:`,
      verify: { kind: "value", inputs: { z: "3-2*I" }, params: { op: "other_root" } },
      options: [
        { key: "A", text: t`$3 + 2 i$`, correct: true, value: "3 + 2*I" },
        { key: "B", text: t`$-3 + 2 i$`, correct: false, misconceptionId: "C19-M4", value: "-3 + 2*I" },
        { key: "C", text: t`$-3 - 2 i$`, correct: false, misconceptionId: "C19-M5", value: "-3 - 2*I" },
      ],
    },
    {
      id: "C19-Q4",
      source: { kind: "authored" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $x^2 - 6x + 25 = 0$, then $\alpha\beta = ?$`,
      verify: { kind: "value", inputs: { a: "1", b: "-6", c: "25" }, params: { op: "vieta", want: "product" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C19-M6", value: "6" },
        { key: "B", text: t`$-25$`, correct: false, misconceptionId: "C19-M7", value: "-25" },
        { key: "C", text: t`$25$`, correct: true, value: "25" },
      ],
    },
    {
      id: "C19-Q5",
      source: { kind: "authored" },
      stem: t`The sum of the roots of $2x^2 - 3x + 7 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", c: "7" }, params: { op: "vieta", want: "sum" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C19-M7", value: "-3/2" },
        { key: "B", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "C", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C19-M6", value: "7/2" },
      ],
    },
  ],
};
