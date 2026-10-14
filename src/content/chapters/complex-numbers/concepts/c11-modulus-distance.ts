import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`How far is $3 + 4i$ from $0$? **Use the picture, not a formula.**`,
    reveal: t`It's the point $(3, 4)$: a right triangle with legs $3$ and $4$, so the distance is $\sqrt{9 + 16} = 5$.`,
  },
  explanation: {
    intuition: t`The modulus $|z|$ is a distance: how far the point $z$ is from the origin, found with Pythagoras. The same idea measures the gap between two points: $|z_1 - z_2|$ is the distance between $z_1$ and $z_2$.`,
    formal: t`For $z = a + ib$: $|z| = \sqrt{a^2 + b^2}$, which is never negative.
- Square both parts and add. There's no $i^2$ here, because $b$ is just the coefficient of $i$.
- The distance between $z_1$ and $z_2$ is $|z_1 - z_2|$, and the order doesn't matter: $|z_1 - z_2| = |z_2 - z_1|$.
- $|z_1 - z_2|$ is **not** $|z_1| - |z_2|$. Subtract the numbers first, then take the modulus.`,
    worked: {
      prompt: t`Find the distance between $6 + 2i$ and $1 - 10i$.`,
      steps: [
        t`Subtract: $(6 + 2i) - (1 - 10i) = 5 + 12i$.`,
        t`Take the modulus: $\sqrt{5^2 + 12^2} = \sqrt{169} = 13$.`,
      ],
      answer: t`$13$`,
      figure: {
        alt: "6 + 2i and 1 − 10i are 5 apart across and 12 apart up and down, so the straight line between them is 13 long.",
        view: { x: [-2, 9], y: [-11.5, 3.5] },
        elements: [
          { kind: "point", at: [6, 2], label: "6 + 2i", labelAt: "e" },
          { kind: "point", at: [1, -10], label: "1 − 10i", labelAt: "e" },
          { kind: "segment", from: [1, 2], to: [6, 2], label: "5", labelAt: "n", tone: "muted", step: 1 },
          { kind: "segment", from: [1, -10], to: [1, 2], label: "12", labelAt: "w", tone: "muted", step: 1 },
          { kind: "segment", from: [1, -10], to: [6, 2], label: "13", labelAt: "e", step: 2 },
        ],
      },
    },
    figure: {
      alt: "The point 3 + 4i makes a right triangle with legs 3 and 4. Its distance from the origin, the hypotenuse, is |z| = 5.",
      view: { x: [-1, 5], y: [-1, 5] },
      elements: [
        { kind: "point", at: [3, 4], label: "3 + 4i", labelAt: "ne" },
        { kind: "segment", from: [0, 0], to: [3, 0], label: "3", labelAt: "n", tone: "muted", step: 1 },
        { kind: "segment", from: [3, 0], to: [3, 4], label: "4", labelAt: "e", tone: "muted", step: 2 },
        { kind: "segment", from: [0, 0], to: [3, 4], label: "|z| = 5", labelAt: "nw", step: 3 },
      ],
    },
    visualSpec: t`Two draggable points with the segment between them and a right triangle beneath it. The legs show the real and imaginary differences, and the hypotenuse is labelled $|z_1 - z_2|$, updating live.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Adding the sizes of the parts: $|a + ib| = |a| + |b|$`,
      remediation: t`That walks along the two legs of the triangle. The modulus is the straight-line distance, the hypotenuse: $\sqrt{a^2 + b^2}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M2",
      mistake: t`Letting an $i^2$ in: $|a + ib| = \sqrt{a^2 - b^2}$`,
      remediation: t`The modulus uses the coefficient $b$, not $ib$, so there's no $i^2$: $|a + ib| = \sqrt{a^2 + b^2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C11-M3",
      mistake: "Forgetting the square root",
      remediation: t`$a^2 + b^2$ is the distance **squared**. Take the square root to get $|z|$.`,
      fallback: { kind: "ext", topic: "distance formula" },
    },
    {
      id: "C11-M4",
      mistake: t`Using $|z_1 + z_2|$ for the distance between $z_1$ and $z_2$`,
      remediation: t`Distance is a difference: $|z_1 - z_2|$. Adding the numbers gives a different point altogether.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C11-M5",
      mistake: t`Taking $|z_1| - |z_2|$ for the distance`,
      remediation: t`Subtract the numbers first, then take the modulus: $|z_1 - z_2|$. Two points can be the same distance from the origin and still far apart.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`$|12 + 5i| = ?$`,
      verify: { kind: "value", inputs: { z: "12+5*I" }, params: { op: "abs" } },
      options: [
        { key: "A", text: t`$13$`, correct: true, value: "13" },
        { key: "B", text: t`$17$`, correct: false, misconceptionId: "C11-M1", value: "17" },
        { key: "C", text: t`$\sqrt{119}$`, correct: false, misconceptionId: "C11-M2", value: "sqrt(119)" },
        { key: "D", text: t`$169$`, correct: false, misconceptionId: "C11-M3", value: "169" },
      ],
      solution: {
        steps: [
          t`Square both parts and add: $12^2 + 5^2 = 144 + 25 = 169$.`,
          t`Take the square root: $\sqrt{169} = 13$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`$|-8 - 6i| = ?$`,
      verify: { kind: "value", inputs: { z: "-8-6*I" }, params: { op: "abs" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C11-M1", value: "14" },
        { key: "C", text: t`$2\sqrt7$`, correct: false, misconceptionId: "C11-M2", value: "2*sqrt(7)" },
        { key: "D", text: t`$100$`, correct: false, misconceptionId: "C11-M3", value: "100" },
      ],
      solution: {
        steps: [
          t`Square both parts and add: $(-8)^2 + (-6)^2 = 64 + 36 = 100$. Squares are never negative.`,
          t`Take the square root: $\sqrt{100} = 10$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`The distance between $4 + 6i$ and $1 + 2i$ is:`,
      verify: { kind: "value", inputs: { z1: "4+6*I", z2: "1+2*I" }, params: { op: "dist" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$\sqrt{89}$`, correct: false, misconceptionId: "C11-M4", value: "sqrt(89)" },
        { key: "C", text: t`$2\sqrt{13} - \sqrt5$`, correct: false, misconceptionId: "C11-M5", value: "2*sqrt(13)-sqrt(5)" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C11-M1", value: "7" },
      ],
      solution: {
        steps: [
          t`Subtract: $(4 + 6i) - (1 + 2i) = 3 + 4i$.`,
          t`Take the modulus: $\sqrt{3^2 + 4^2} = \sqrt{25} = 5$.`,
        ],
        figure: {
          alt: "1 + 2i and 4 + 6i are 3 apart across and 4 apart up, so the distance between them is 5.",
          view: { x: [-1, 6], y: [-1, 7] },
          elements: [
            { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "s" },
            { kind: "point", at: [4, 6], label: "4 + 6i", labelAt: "ne" },
            { kind: "segment", from: [1, 2], to: [4, 2], label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [4, 2], to: [4, 6], label: "4", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [1, 2], to: [4, 6], label: "5", labelAt: "nw", step: 2 },
          ],
        },
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`The distance between $1 - 3i$ and $-2 + i$ is:`,
      verify: { kind: "value", inputs: { z1: "1-3*I", z2: "-2+I" }, params: { op: "dist" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$\sqrt5$`, correct: false, misconceptionId: "C11-M4", value: "sqrt(5)" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C11-M3", value: "25" },
        { key: "D", text: t`$\sqrt{10} - \sqrt5$`, correct: false, misconceptionId: "C11-M5", value: "sqrt(10)-sqrt(5)" },
      ],
      solution: {
        steps: [
          t`Subtract: $(1 - 3i) - (-2 + i) = 3 - 4i$.`,
          t`Take the modulus: $\sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.`,
        ],
        figure: {
          alt: "−2 + i and 1 − 3i are 3 apart across and 4 apart up and down, so the distance between them is 5.",
          view: { x: [-3.5, 2.5], y: [-4, 2.2] },
          elements: [
            { kind: "point", at: [-2, 1], label: "−2 + i", labelAt: "nw" },
            { kind: "point", at: [1, -3], label: "1 − 3i", labelAt: "e" },
            { kind: "segment", from: [-2, 1], to: [-2, -3], label: "4", labelAt: "w", tone: "muted", step: 1 },
            { kind: "segment", from: [-2, -3], to: [1, -3], label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [-2, 1], to: [1, -3], label: "5", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`$|24 - 7i| = ?$`,
      verify: { kind: "value", inputs: { z: "24-7*I" }, params: { op: "abs" } },
      options: [
        { key: "A", text: t`$25$`, correct: true, value: "25" },
        { key: "B", text: t`$31$`, correct: false, misconceptionId: "C11-M1", value: "31" },
        { key: "C", text: t`$\sqrt{527}$`, correct: false, misconceptionId: "C11-M2", value: "sqrt(527)" },
        { key: "D", text: t`$625$`, correct: false, misconceptionId: "C11-M3", value: "625" },
      ],
      solution: {
        steps: [
          t`Square both parts and add: $24^2 + (-7)^2 = 576 + 49 = 625$.`,
          t`Take the square root: $\sqrt{625} = 25$.`,
        ],
      },
    },
  ],
};
