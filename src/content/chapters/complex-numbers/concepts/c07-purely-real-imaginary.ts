import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`For which $k$ does $(k - 2) + 5i$ lie on the imaginary axis? **What has to vanish?**`,
    reveal: t`The real part: $k - 2 = 0$, so $k = 2$. Every point on the imaginary axis has real part zero.`,
  },
  explanation: {
    intuition: [
      t`Recall: $x + iy$ has real part $x$ and imaginary part $y$, and is drawn as the point $(x, y)$.`,
      t`A number is **purely real**, only real, when its imaginary part is $0$, like $2$: it lies on the real axis.`,
      t`It is **purely imaginary** when its real part is $0$, like $3i$: it lies on the **imaginary axis**, the vertical one.`,
      t`So to make a number purely real or purely imaginary, set the **other** part to zero.`,
      t`If the number is a fraction, first **rationalise** it: make its bottom real, giving the form $x + iy$.`,
      t`The test applies to that simplified number, not to its top, the **numerator**, alone.`,
    ],
    figure: {
      alt: "The Argand plane with the point 3 + 2i off both axes. The real axis is highlighted, where Im z = 0, with the purely real number 2 on it. The imaginary axis is highlighted, where Re z = 0, with the purely imaginary number 3i on it.",
      view: { x: [-2.5, 5.5], y: [-1.5, 4.5] },
      elements: [
        { kind: "point", at: [3, 2], label: "3 + 2i", labelAt: "ne", step: 1 },
        { kind: "line", through: [[0, 0], [1, 0]], tone: "good", step: 2 },
        { kind: "point", at: [2, 0], label: "2", labelAt: "n", tone: "good", step: 2 },
        { kind: "label", at: [4.4, 0], label: "Im z = 0", labelAt: "n", tone: "good", step: 2 },
        { kind: "line", through: [[0, 0], [0, 1]], tone: "good", step: 3 },
        { kind: "point", at: [0, 3], label: "3i", labelAt: "e", tone: "good", step: 3 },
        { kind: "label", at: [0, 4], label: "Re z = 0", labelAt: "e", tone: "good", step: 3 },
      ],
    },
    formal: [
      {
        title: "Purely real numbers",
        points: [
          t`Take $z = x + iy$, with $x$ and $y$ real: it is purely real when $\operatorname{Im} z = 0$, that is, $y = 0$.`,
          t`Recall: the conjugate $\bar z = x - iy$ is the mirror image of $z$ in the real axis.`,
          t`A number on the real axis is its own mirror image: for $z = 4$, $\bar z = 4$ too.`,
          t`In symbols, $z = \bar z$ means $x + iy = x - iy$, so $y = -y$, so $y = 0$.`,
          t`We write $\iff$, read "if and only if", when each statement implies the other.`,
          t`So $z$ is purely real $\iff \operatorname{Im} z = 0$ $\iff z = \bar z$.`,
        ],
        figure: {
          alt: "2 + 3i and its conjugate 2 − 3i are mirror images in the real axis, joined by a dashed line, so they differ. The purely real number 4 lies on the real axis and is its own mirror image: z = z̄ = 4.",
          view: { x: [-1.5, 6], y: [-4, 4] },
          elements: [
            { kind: "segment", from: [2, 3], to: [2, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [2, 3], label: "z = 2 + 3i", labelAt: "e", step: 2 },
            { kind: "point", at: [2, -3], label: "z̄ = 2 − 3i", labelAt: "e", step: 2 },
            { kind: "point", at: [4, 0], label: "z = z̄ = 4", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Purely imaginary numbers",
        points: [
          t`$z = x + iy$ is purely imaginary when $\operatorname{Re} z = 0$, that is, $x = 0$, so $z = iy$.`,
          t`For $z = 3i$, the mirror image in the real axis is $\bar z = -3i$, which is $-z$.`,
          t`In general, the conjugate of $iy$ is $-iy$: so $\bar z = -z$.`,
          t`In symbols, $z = -\bar z$ means $x + iy = -x + iy$, so $x = 0$.`,
          t`So $z$ is purely imaginary $\iff \operatorname{Re} z = 0$ $\iff z = -\bar z$.`,
          t`Usually $z \ne 0$ is asked as well, since $0$ lies on both axes.`,
        ],
        figure: {
          alt: "The purely imaginary number z = 3i as an arrow up the imaginary axis, and its conjugate, the mirror image −3i, as an arrow down it: z̄ = −3i = −z.",
          view: { x: [-3, 4], y: [-4, 4] },
          elements: [
            { kind: "vector", to: [0, 3], step: 2 },
            { kind: "point", at: [0, 3], label: "z = 3i", labelAt: "e", step: 2 },
            { kind: "vector", to: [0, -3], tone: "good", step: 2 },
            { kind: "point", at: [0, -3], label: "z̄ = −3i = −z", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Fractions: rationalise first",
        points: [
          t`For a quotient $\dfrac pq$, first write it in the form $x + iy$.`,
          t`Recall: multiply top and bottom by the conjugate of the bottom, which makes the bottom real.`,
          t`Then set its real part or its imaginary part to zero.`,
          t`Whether the top alone is real or imaginary is **not** the test.`,
          t`For example, the top of $\dfrac{3i}{2 + i}$ is purely imaginary.`,
          t`But $\dfrac{3i(2 - i)}{5} = \dfrac{3 + 6i}{5}$, which is neither.`,
        ],
      },
    ],
    worked: {
      prompt: t`For which real $x$ is $\dfrac{x + 2i}{1 - i}$ purely real?`,
      steps: [
        t`Rationalise: $\dfrac{(x + 2i)(1 + i)}{2}$ $= \dfrac{(x - 2) + (x + 2)i}{2}$.`,
        t`Purely real means the imaginary part is zero: $x + 2 = 0$.`,
      ],
      answer: t`$x = -2$`,
    },
    visualSpec: t`A slider for the parameter moves $z$ across the Argand plane. The point turns green as it crosses the real axis (purely real) or the imaginary axis (purely imaginary).`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Setting the wrong part to zero",
      remediation: "Purely imaginary means the **real** part is zero; purely real means the **imaginary** part is zero.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M2",
      mistake: "Testing only the numerator of a fraction",
      remediation: "Rationalise first. A fraction can be purely real or purely imaginary even when its numerator isn't.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M3",
      mistake: t`Solving $ax + b = 0$ as $x = \dfrac ba$`,
      remediation: t`Move $b$ across with its sign changed: $x = -\dfrac ba$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C07-M4",
      mistake: t`Solving $ax + b = 0$ as $x = -\dfrac ab$`,
      remediation: t`Subtract $b$, then divide by $a$: $x = -\dfrac ba$. Substitute back to check the part is zero.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C07-M5",
      mistake: t`Dividing only one term by the denominator: $\dfrac{x + 1}{2} = x + \dfrac12$`,
      remediation: t`The fraction bar divides the whole numerator: $\dfrac{x + 1}{2} = \dfrac x2 + \dfrac12$. A fraction is zero exactly when its numerator is.`,
      fallback: { kind: "ext", topic: "fractions" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(x - 3) + (x + 2)i$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(x-3) + (x+2)*I", want: "imag" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M1", value: "-2" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C07-M3", value: "-3" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C07-M4", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Purely imaginary means the real part is zero: $x - 3 = 0$, so $x = 3$.`,
          t`Check the imaginary part isn't zero too: $3 + 2 = 5$, so the number is $5i$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(2x + 1) + (x - 4)i$ purely real?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(2*x+1) + (x-4)*I", want: "real" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "-1/2" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C07-M3", value: "-4" },
        { key: "D", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C07-M4", value: "1/4" },
      ],
      solution: {
        steps: [
          t`Purely real means the imaginary part is zero: $x - 4 = 0$.`,
          t`So $x = 4$, and the number is $2(4) + 1 = 9$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $\dfrac{x + i}{1 + i}$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "x + I", den: "1 + I", want: "imag" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C07-M2", value: "0" },
        { key: "B", text: t`$-1$`, correct: true, value: "-1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
        { key: "D", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C07-M5", value: "-1/2" },
      ],
      solution: {
        steps: [
          t`Rationalise: $\dfrac{(x + i)(1 - i)}{(1 + i)(1 - i)} = \dfrac{(x + 1) + (1 - x)i}{2}$.`,
          t`Purely imaginary means the real part is zero: $x + 1 = 0$, so $x = -1$.`,
          t`Check: the number is then $\dfrac{2i}{2} = i$, which isn't zero.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $\dfrac{2 + xi}{3 + 4i}$ purely real?`,
      verify: { kind: "value", inputs: {  }, params: { num: "2 + x*I", den: "3 + 4*I", want: "real" } },
      options: [
        { key: "A", text: t`$\frac{8}{3}$`, correct: true, value: "8/3" },
        { key: "B", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M1", value: "-3/2" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C07-M2", value: "0" },
        { key: "D", text: t`$- \frac{8}{3}$`, correct: false, misconceptionId: "C07-M3", value: "-8/3" },
      ],
      solution: {
        steps: [
          t`Rationalise: $\dfrac{(2 + xi)(3 - 4i)}{25} = \dfrac{(6 + 4x) + (3x - 8)i}{25}$.`,
          t`Purely real means the imaginary part is zero: $3x - 8 = 0$, so $x = \dfrac83$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`For which real $x$ is $(x + 3i)(2 + i)$ purely imaginary?`,
      verify: { kind: "value", inputs: {  }, params: { num: "(x + 3*I)*(2 + I)", want: "imag" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C07-M1", value: "-6" },
        { key: "C", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M3", value: "-3/2" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C07-M4", value: "2/3" },
      ],
      solution: {
        steps: [
          t`Multiply out: $(x + 3i)(2 + i) = 2x + xi + 6i + 3i^2 = (2x - 3) + (x + 6)i$.`,
          t`Purely imaginary means the real part is zero: $2x - 3 = 0$, so $x = \dfrac32$.`,
        ],
      },
    },
  ],
};
