import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c19: Concept = {
  id: "C19",
  status: "approved",
  hook: {
    prompt: t`Solve $x^2 + 4 = 0$. **No real number works, so what are the roots?**`,
    reveal: t`$x^2 = -4$, so $x = \pm 2i$. With complex numbers, every quadratic has two roots.`,
  },
  explanation: {
    intuition: [
      t`In $ax^2 + bx + c = 0$, the numbers $a$, $b$ and $c$ are the **coefficients**; here they are real.`,
      t`The **discriminant**, $D = b^2 - 4ac$, is the number under the square root in the quadratic formula.`,
      t`When $D < 0$, no real number squares to $D$, so there are no real roots.`,
      t`But $\sqrt D$ is now imaginary, such as $\sqrt{-16} = 4i$, so the formula still gives two roots.`,
      t`For $x^2 - 2x + 5 = 0$, $D = -16$, and the roots are $1 + 2i$ and $1 - 2i$.`,
      t`They are a **conjugate pair**, $p \pm qi$: mirror images of each other in the real axis.`,
    ],
    figure: {
      alt: "The roots of x² − 2x + 5 = 0 on the Argand plane: 1 + 2i above the real axis and 1 − 2i the same distance below it, joined by a dashed line that the real axis cuts in half. They are mirror images in the real axis.",
      view: { x: [-2, 4], y: [-3, 3] },
      elements: [
        { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "e", step: 5 },
        { kind: "point", at: [1, -2], label: "1 − 2i", labelAt: "e", step: 5 },
        { kind: "segment", from: [1, 2], to: [1, -2], dashed: true, tone: "good", step: 6 },
      ],
    },
    formal: [
      {
        title: "Quadratic formula with negative D",
        points: [
          t`Take $ax^2 + bx + c = 0$ with real $a$, $b$, $c$ and $D = b^2 - 4ac < 0$.`,
          t`Then $-D$ is positive, so $\sqrt D = i\sqrt{-D}$, an imaginary number.`,
          t`So the quadratic formula becomes $x = \dfrac{-b \pm i\sqrt{-D}}{2a}$.`,
          t`It starts with $-b$, not $b$: for $x^2 - 2x + 5$, that is $+2$.`,
          t`Divide **both** parts of the top by $2a$: the $-b$ and the $i\sqrt{-D}$.`,
          t`So the real part is $-\dfrac{b}{2a}$, and the imaginary parts are $\pm\dfrac{\sqrt{-D}}{2a}$.`,
        ],
      },
      {
        title: "Conjugate pairs",
        points: [
          t`Recall: the **conjugate** of $p + qi$ is $p - qi$, its mirror image in the real axis.`,
          t`If the coefficients are real and $p + qi$ is a root, then $p - qi$ is a root too.`,
          t`So if $2 + i$ is a root of a real quadratic, the other root is $2 - i$.`,
          t`It is not the negative, $-2 - i$: that flips both signs.`,
          t`Nor is it $-2 + i$: the real part stays the same.`,
          t`This needs real coefficients: $x^2 - ix = 0$ has roots $0$ and $i$, but not $-i$.`,
        ],
        figure: {
          alt: "The root 2 + i and its conjugate 2 − i, mirror images in the real axis, joined by a dashed line. The negative −2 − i, opposite 2 + i through the origin, and −2 + i, with only the real part flipped, are marked as wrong.",
          view: { x: [-4.5, 4.5], y: [-2.5, 2.5] },
          elements: [
            { kind: "point", at: [2, 1], label: "2 + i", labelAt: "e", step: 3 },
            { kind: "segment", from: [2, 1], to: [2, -1], dashed: true, tone: "good", step: 3 },
            { kind: "point", at: [2, -1], label: "2 − i", labelAt: "e", tone: "good", step: 3 },
            { kind: "segment", from: [2, 1], to: [-2, -1], dashed: true, tone: "muted", step: 4 },
            { kind: "point", at: [-2, -1], label: "−2 − i", labelAt: "w", tone: "bad", step: 4 },
            { kind: "segment", from: [2, 1], to: [-2, 1], dashed: true, tone: "muted", step: 5 },
            { kind: "point", at: [-2, 1], label: "−2 + i", labelAt: "w", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Sum and product of roots",
        points: [
          t`Name the two roots $\alpha$ and $\beta$, the Greek letters alpha and beta.`,
          t`Their sum is $\alpha + \beta = -\dfrac ba$: note the minus sign.`,
          t`Their product is $\alpha\beta = \dfrac ca$, with no minus sign.`,
          t`Both divide by $a$, the coefficient of $x^2$.`,
          t`They hold for complex roots too: the roots of $x^2 - 2x + 5$ add to $2$, which is $-\dfrac ba$.`,
          t`Those roots, $1 \pm 2i$, multiply to $(1 + 2i)(1 - 2i) = 1 - 4i^2 = 5$, which is $\dfrac ca$.`,
        ],
      },
    ],
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
    {
      id: "C19-M8",
      mistake: t`Confusing the conjugate $\bar z$ with the reciprocal $\dfrac1z$`,
      remediation: t`The conjugate only flips the sign of the imaginary part: $\overline{3 - 2i} = 3 + 2i$. The reciprocal $\dfrac1z = \dfrac{\bar z}{\lvert z \rvert^2}$ is a different number unless $\lvert z \rvert = 1$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C19-M9",
      mistake: t`Forgetting to divide by $a$: sum $= -b$, product $= c$`,
      remediation: t`Divide by the leading coefficient: sum $= -\dfrac ba$, product $= \dfrac ca$.`,
      fallback: { kind: "ext", topic: "sum and product of roots" },
    },
    {
      id: "C19-M10",
      mistake: t`Dropping the $i$ when multiplying the roots: $(p + iq)(p - iq) = p^2 - q^2$`,
      remediation: t`$(p + iq)(p - iq) = p^2 - i^2q^2 = p^2 + q^2$, since $i^2 = -1$. Or simply: product $= \dfrac ca$.`,
      fallback: { kind: "concept", id: "C01" },
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
      solution: {
        steps: [
          t`$D = 16 - 52 = -36$, so $\sqrt{-D} = 6$.`,
          t`$x = \dfrac{4 \pm 6i}{2}$.`,
          t`Divide both parts by 2: $x = 2 \pm 3i$.`,
        ],
      },
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
      solution: {
        steps: [
          t`$D = 4 - 40 = -36$, so $\sqrt{-D} = 6$.`,
          t`$x = \dfrac{-2 \pm 6i}{4}$.`,
          t`Divide both parts by 4: $x = -\dfrac12 \pm \dfrac32 i$.`,
        ],
      },
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
        { key: "D", text: t`$\frac{3}{13} + \frac{2 i}{13}$`, correct: false, misconceptionId: "C19-M8", value: "3/13 + 2*I/13" },
      ],
      solution: {
        steps: [
          t`The coefficients $p$ and $q$ are real, so complex roots come in conjugate pairs.`,
          t`The conjugate of $3 - 2i$ is $3 + 2i$: flip only the sign of the imaginary part.`,
        ],
      },
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
        { key: "D", text: t`$-7$`, correct: false, misconceptionId: "C19-M10", value: "-7" },
      ],
      solution: {
        steps: [
          t`For $ax^2 + bx + c = 0$, the product of the roots is $\dfrac ca$.`,
          t`Here $a = 1$ and $c = 25$, so $\alpha\beta = 25$.`,
        ],
      },
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
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C19-M9", value: "3" },
      ],
      solution: {
        steps: [
          t`For $ax^2 + bx + c = 0$, the sum of the roots is $-\dfrac ba$.`,
          t`Here $a = 2$ and $b = -3$, so the sum is $-\dfrac{-3}{2} = \dfrac32$.`,
        ],
      },
    },
  ],
};
