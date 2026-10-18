import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Take $3 + 4i$ and $3 - 4i$. Add them, then multiply them. **What do the two answers have in common?**`,
    reveal: t`Both are real: the sum is $6$ and the product is $9 + 16 = 25$. A number and its conjugate always combine into real numbers.`,
  },
  explanation: {
    intuition: [
      t`Picture $z = a + ib$ as the point $(a, b)$: real part across, imaginary part up.`,
      t`The horizontal axis, marked Re, is the **real axis**: the real numbers lie along it.`,
      t`The **conjugate** of $z$, written $\bar z$ and read "z bar", keeps the real part and flips the sign of the imaginary part.`,
      t`So $\bar z$ is the **mirror image** of $z$ in the real axis: as far below it as $z$ is above.`,
      t`Adding $z$ and $\bar z$ cancels the imaginary parts, so $z + \bar z$ lies on the real axis.`,
      t`Multiplying them cancels the imaginary parts too, so $z\bar z$ is also a real number.`,
    ],
    formal: [
      {
        title: "The conjugate of a + ib",
        points: [
          t`For $z = a + ib$, with $a$ and $b$ real, the conjugate is $\bar z = a - ib$.`,
          t`For example, $\overline{2 + 3i} = 2 - 3i$: the point drops from height $3$ to $-3$.`,
          t`And $\overline{-3 - 2i} = -3 + 2i$: a point below the real axis moves above it.`,
          t`The real part never changes, so $\bar z$ sits straight above or below $z$.`,
        ],
        figure: {
          alt: "Two numbers and their conjugates. 2 + 3i is mirrored in the real axis to 2 − 3i, and −3 − 2i is mirrored to −3 + 2i. Dashed vertical lines join each pair: the real part stays the same.",
          view: { x: [-5.5, 4.5], y: [-4, 4] },
          elements: [
            { kind: "segment", from: [2, 3], to: [2, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [2, 3], label: "2 + 3i", labelAt: "e", step: 2 },
            { kind: "point", at: [2, -3], label: "2 − 3i", labelAt: "e", tone: "good", step: 2 },
            { kind: "segment", from: [-3, -2], to: [-3, 2], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [-3, -2], label: "−3 − 2i", labelAt: "w", step: 3 },
            { kind: "point", at: [-3, 2], label: "−3 + 2i", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Sum and difference",
        points: [
          t`Adding: $z + \bar z = (a + ib) + (a - ib)$.`,
          t`The imaginary parts cancel, leaving $2a$: that is $2\operatorname{Re} z$, twice the real part.`,
          t`Subtracting: $z - \bar z = (a + ib) - (a - ib)$.`,
          t`Now the real parts cancel, leaving $2ib$: that is $2i\operatorname{Im} z$.`,
          t`Keep the $i$: $z - \bar z$ is **purely imaginary**, meaning its real part is $0$.`,
        ],
        figure: {
          alt: "z = 3 + 2i and its conjugate 3 − 2i. Their arrows make a parallelogram whose far corner, z + z̄ = 6, lies on the real axis. The difference z − z̄ = 4i lies on the imaginary axis.",
          view: { x: [-1, 9], y: [-3, 5] },
          elements: [
            { kind: "point", at: [3, 2], label: "z = 3 + 2i", labelAt: "ne" },
            { kind: "point", at: [3, -2], label: "z̄ = 3 − 2i", labelAt: "se" },
            { kind: "vector", to: [3, 2], tone: "muted", step: 1 },
            { kind: "vector", to: [3, -2], tone: "muted", step: 1 },
            { kind: "segment", from: [3, 2], to: [6, 0], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [3, -2], to: [6, 0], dashed: true, tone: "muted", step: 1 },
            { kind: "vector", to: [6, 0], label: "z + z̄ = 6", labelAt: "ne", tone: "good", step: 2 },
            { kind: "vector", to: [0, 4], label: "z − z̄ = 4i", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "A number times its conjugate",
        points: [
          t`Multiplying: $z\bar z = (a + ib)(a - ib)$.`,
          t`Multiply out: $a^2 - iab + iab - i^2b^2$.`,
          t`The middle terms cancel, and $i^2 = -1$ turns $-i^2b^2$ into $+b^2$.`,
          t`So $z\bar z = a^2 + b^2$, a real number.`,
          t`By Pythagoras, $a^2 + b^2$ is the square of the distance from $0$ to $z$.`,
          t`So $z\bar z$ is never negative.`,
        ],
        figure: {
          alt: "z = 4 + 3i and its conjugate 4 − 3i. A right triangle from the origin to z has sides 4 along the real axis and 3 upright, so z z̄ = 4² + 3² = 25, the square of the distance 5 from 0 to z.",
          view: { x: [-1.5, 10], y: [-4, 4] },
          elements: [
            { kind: "point", at: [4, 3], label: "z = 4 + 3i", labelAt: "ne" },
            { kind: "point", at: [4, -3], label: "z̄ = 4 − 3i", labelAt: "se" },
            { kind: "segment", from: [4, 3], to: [4, -3], dashed: true, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [4, 0], label: "4", labelAt: "n", tone: "good", step: 4 },
            { kind: "segment", from: [4, 0], to: [4, 3], label: "3", labelAt: "e", tone: "good", step: 4 },
            { kind: "label", at: [4.4, -1], label: "z z̄ = 4² + 3² = 25", labelAt: "e", tone: "good", step: 4 },
            { kind: "segment", from: [0, 0], to: [4, 3], label: "5", labelAt: "nw", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Conjugate of a sum",
        points: [
          t`Take $z_1 = 2 + i$ and $z_2 = 1 + 2i$: their sum is $3 + 3i$.`,
          t`Their conjugates, $2 - i$ and $1 - 2i$, add to $3 - 3i$.`,
          t`That is the conjugate of $3 + 3i$: so $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$.`,
          t`The whole picture flips in the real axis, so the sum flips with it.`,
        ],
        figure: {
          alt: "Above the real axis, the arrows 2 + i and 1 + 2i add to 3 + 3i. Below it, their conjugates 2 − i and 1 − 2i add to 3 − 3i, the mirror image of 3 + 3i.",
          view: { x: [-1, 6], y: [-4, 4] },
          elements: [
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "e", tone: "muted", step: 1 },
            { kind: "vector", to: [1, 2], label: "1 + 2i", labelAt: "w", tone: "muted", step: 1 },
            { kind: "segment", from: [2, 1], to: [3, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [1, 2], to: [3, 3], dashed: true, tone: "muted", step: 1 },
            { kind: "vector", to: [3, 3], label: "3 + 3i", labelAt: "ne", step: 1 },
            { kind: "vector", to: [2, -1], label: "2 − i", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", to: [1, -2], label: "1 − 2i", labelAt: "w", tone: "muted", step: 2 },
            { kind: "segment", from: [2, -1], to: [3, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [1, -2], to: [3, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "vector", to: [3, -3], label: "3 − 3i", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [3, 3], to: [3, -3], dashed: true, tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Conjugate of a product",
        points: [
          t`Take $z_1 = 1 + i$ and $z_2 = 2 + i$: their product is $1 + 3i$.`,
          t`Their conjugates multiply to $(1 - i)(2 - i) = 1 - 3i$, the mirror image.`,
          t`So $\overline{z_1 z_2} = \bar z_1\,\bar z_2$: the conjugate of a product is the product of the conjugates.`,
          t`Conjugate every factor, or multiply first and then conjugate the answer.`,
          t`Never conjugate just one factor: $(1 - i)(2 + i) = 3 - i$, a different number.`,
        ],
        figure: {
          alt: "The product (1 + i)(2 + i) = 1 + 3i and its mirror image in the real axis, 1 − 3i, which is the product of the conjugates. Conjugating only one factor gives 3 − i, off the mirror line.",
          view: { x: [-1.5, 7], y: [-4, 4] },
          elements: [
            { kind: "point", at: [1, 3], label: "z₁z₂ = 1 + 3i", labelAt: "e", step: 1 },
            { kind: "segment", from: [1, 3], to: [1, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [1, -3], label: "z̄₁z̄₂ = 1 − 3i", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [3, -1], label: "3 − i", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`For $z = 1 - 6i$, find $z + \bar z$ and $z\bar z$.`,
      steps: [
        t`Flip the sign of the imaginary part: $\bar z = 1 + 6i$.`,
        t`Sum: $(1 - 6i) + (1 + 6i) = 2$.`,
        t`Product: $(1 - 6i)(1 + 6i) = 1 - 36i^2$, which is $1 + 36 = 37$.`,
      ],
      answer: t`$z + \bar z = 2$ and $z\bar z = 37$.`,
      figure: {
        alt: "z = 1 − 6i and its mirror image across the real axis, z̄ = 1 + 6i. Their sum, 2, lies on the real axis.",
        view: { x: [-4, 6], y: [-7, 7] },
        elements: [
          { kind: "point", at: [1, -6], label: "z = 1 − 6i", labelAt: "e" },
          { kind: "segment", from: [1, -6], to: [1, 6], dashed: true, tone: "muted", step: 1 },
          { kind: "point", at: [1, 6], label: "z̄ = 1 + 6i", labelAt: "e", step: 1 },
          { kind: "point", at: [2, 0], label: "z + z̄ = 2", labelAt: "ne", tone: "good", step: 2 },
        ],
      },
    },
    figure: {
      alt: "z = 3 + 2i is the point three right and two up, with an arrow from the origin. Its conjugate 3 − 2i is its mirror image in the real axis. Their sum, 6, lies on the real axis, and their product is 9 + 4 = 13.",
      view: { x: [-1, 9.5], y: [-3, 3] },
      elements: [
        { kind: "vector", to: [3, 2], tone: "muted", step: 1 },
        { kind: "point", at: [3, 2], label: "z = 3 + 2i", labelAt: "ne", step: 1 },
        { kind: "vector", to: [3, -2], tone: "muted", step: 3 },
        { kind: "point", at: [3, -2], label: "z̄ = 3 − 2i", labelAt: "se", tone: "good", step: 3 },
        { kind: "segment", from: [3, 2], to: [3, -2], dashed: true, tone: "muted", step: 4 },
        { kind: "segment", from: [3, 2], to: [6, 0], dashed: true, tone: "muted", step: 5 },
        { kind: "segment", from: [3, -2], to: [6, 0], dashed: true, tone: "muted", step: 5 },
        { kind: "point", at: [6, 0], label: "z + z̄ = 6", labelAt: "ne", tone: "good", step: 5 },
        { kind: "label", at: [6.3, -1.5], label: "z z̄ = 9 + 4 = 13", labelAt: "e", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`A draggable point $z$ with its mirror image $\bar z$ across the real axis. Live readouts show $z + \bar z$ and $z\bar z$; both stay on the real axis wherever $z$ is dragged.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Flipping the sign of the real part instead: $\overline{a + ib} = -a + ib$`,
      remediation: t`The conjugate keeps the real part and flips the sign of the imaginary part: $\overline{a + ib} = a - ib$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: t`Flipping both signs: $\overline{a + ib} = -a - ib$`,
      remediation: t`That's $-z$, not $\bar z$. Only the imaginary part changes sign.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`$z\bar z = a^2 - b^2$`,
      remediation: t`$(a + ib)(a - ib) = a^2 - i^2b^2 = a^2 + b^2$. The $i^2$ turns the minus into a plus, so $z\bar z$ is never negative.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgetting the $i$: $z - \bar z = 2b$`,
      remediation: t`$z - \bar z = (a + ib) - (a - ib) = 2ib$. The answer is purely imaginary: keep the $i$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: "Conjugating only one factor of a product",
      remediation: t`$\overline{z_1 z_2} = \bar z_1\,\bar z_2$: conjugate both factors, or multiply first and then conjugate the result.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "authored" },
      stem: t`If $z = 5 - 2i$, then $z\bar z = ?$`,
      verify: { kind: "value", inputs: { z: "5-2*I" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$29$`, correct: true, value: "29" },
        { key: "B", text: t`$21$`, correct: false, misconceptionId: "C05-M3", value: "21" },
        { key: "C", text: t`$-29$`, correct: false, misconceptionId: "C05-M1", value: "-29" },
        { key: "D", text: t`$-21 + 20i$`, correct: false, misconceptionId: "C05-M2", value: "-21+20*I" },
      ],
      solution: {
        steps: [
          t`Conjugate: $\bar z = 5 + 2i$.`,
          t`Multiply: $(5 - 2i)(5 + 2i) = 25 - 4i^2$.`,
          t`Use $i^2 = -1$: $25 + 4 = 29$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`If $z = 2 + 7i$, then $z - \bar z = ?$`,
      verify: { kind: "value", inputs: { z: "2+7*I" }, params: { op: "zminuszbar" } },
      options: [
        { key: "A", text: t`$14i$`, correct: true, value: "14*I" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C05-M4", value: "14" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C05-M1", value: "4" },
        { key: "D", text: t`$4 + 14i$`, correct: false, misconceptionId: "C05-M2", value: "4+14*I" },
      ],
      solution: {
        steps: [
          t`Conjugate: $\bar z = 2 - 7i$.`,
          t`Subtract both parts: $(2 - 2) + \big(7 - (-7)\big)i = 14i$. Keep the $i$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`$\overline{(1 + 2i)(3 - i)} = ?$`,
      verify: { kind: "value", inputs: { z1: "1+2*I", z2: "3-I" }, params: { op: "conjprod" } },
      options: [
        { key: "A", text: t`$5 - 5i$`, correct: true, value: "5-5*I" },
        { key: "B", text: t`$1 - 7i$`, correct: false, misconceptionId: "C05-M5", value: "1-7*I" },
        { key: "C", text: t`$-5 + 5i$`, correct: false, misconceptionId: "C05-M1", value: "-5+5*I" },
        { key: "D", text: t`$-5 - 5i$`, correct: false, misconceptionId: "C05-M2", value: "-5-5*I" },
      ],
      solution: {
        steps: [
          t`Multiply first: $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 5 + 5i$.`,
          t`Conjugate the result, flipping the sign of the imaginary part: $5 - 5i$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`If $z = -1 + 3i$, then $z\bar z = ?$`,
      verify: { kind: "value", inputs: { z: "-1+3*I" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$-8$`, correct: false, misconceptionId: "C05-M3", value: "-8" },
        { key: "C", text: t`$-10$`, correct: false, misconceptionId: "C05-M1", value: "-10" },
        { key: "D", text: t`$8 + 6i$`, correct: false, misconceptionId: "C05-M2", value: "8+6*I" },
      ],
      solution: {
        steps: [
          t`Conjugate: $\bar z = -1 - 3i$.`,
          t`Multiply: $(-1 + 3i)(-1 - 3i) = 1 - 9i^2$.`,
          t`Use $i^2 = -1$: $1 + 9 = 10$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`$\overline{(2 - i)(4 + i)} = ?$`,
      verify: { kind: "value", inputs: { z1: "2-I", z2: "4+I" }, params: { op: "conjprod" } },
      options: [
        { key: "A", text: t`$9 + 2i$`, correct: true, value: "9+2*I" },
        { key: "B", text: t`$7 + 6i$`, correct: false, misconceptionId: "C05-M5", value: "7+6*I" },
        { key: "C", text: t`$-9 - 2i$`, correct: false, misconceptionId: "C05-M1", value: "-9-2*I" },
        { key: "D", text: t`$-9 + 2i$`, correct: false, misconceptionId: "C05-M2", value: "-9+2*I" },
      ],
      solution: {
        steps: [
          t`Multiply first: $(2 - i)(4 + i) = 8 + 2i - 4i - i^2 = 9 - 2i$.`,
          t`Conjugate the result: $9 + 2i$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`If $z = 4 - i$, then $z - \bar z = ?$`,
      verify: { kind: "value", inputs: { z: "4-I" }, params: { op: "zminuszbar" } },
      options: [
        { key: "A", text: t`$-2i$`, correct: true, value: "-2*I" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C05-M4", value: "-2" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C05-M1", value: "8" },
        { key: "D", text: t`$8 - 2i$`, correct: false, misconceptionId: "C05-M2", value: "8-2*I" },
      ],
      solution: {
        steps: [
          t`Conjugate: $\bar z = 4 + i$.`,
          t`Subtract both parts: $(4 - 4) + (-1 - 1)i = -2i$. Keep the $i$.`,
        ],
      },
    },
  ],
};
