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
    intuition: [
      t`The **origin** is the point $0$, where the real and imaginary axes cross.`,
      t`Recall: $3 + 4i$ is the point $3$ across and $4$ up.`,
      t`The **modulus** of $z$, written $|z|$, is the distance from the origin to the point $z$.`,
      t`The sides $3$ and $4$ meet at a right angle, so by Pythagoras $|z| = \sqrt{3^2 + 4^2} = 5$.`,
      t`The same idea measures the gap between two points $z_1$ and $z_2$: it is $|z_1 - z_2|$.`,
    ],
    formal: [
      {
        title: "The modulus of a + ib",
        points: [
          t`Take any $z = a + ib$, with $a$ and $b$ real.`,
          t`Its point is $a$ across and $b$ up, at a right angle.`,
          t`By Pythagoras, its distance from the origin is $|z| = \sqrt{a^2 + b^2}$.`,
          t`A distance is never negative, so $|z|$ is never negative.`,
        ],
        figure: {
          alt: "The point a + ib, a across and b up from the origin. The arrow from the origin to it is the long side of a right triangle with sides a and b, and its length is |z|.",
          view: { x: [-1, 5], y: [-1, 3.5] },
          elements: [
            { kind: "point", at: [3, 2], label: "a + ib", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "a", labelAt: "n", tone: "muted", step: 2 },
            { kind: "segment", from: [3, 0], to: [3, 2], label: "b", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", to: [3, 2], step: 3 },
            { kind: "label", at: [1.5, 1], label: "|z|", labelAt: "nw", step: 3 },
          ],
        },
      },
      {
        title: "Square both parts and add",
        points: [
          t`To find $|a + ib|$, square $a$ and $b$, add, then take the square root.`,
          t`Recall: the imaginary part $b$ is the real number beside $i$, so no $i^2$ appears.`,
          t`For $-4 + 3i$, the parts are $-4$ and $3$.`,
          t`A square is never negative: $(-4)^2 + 3^2 = 16 + 9 = 25$.`,
          t`Take the square root: $|-4 + 3i| = \sqrt{25} = 5$.`,
        ],
        figure: {
          alt: "The point −4 + 3i, 4 left and 3 up from the origin. The arrow from the origin to it is the long side of a right triangle with sides 4 and 3, so it is 5 long.",
          view: { x: [-5.5, 1.5], y: [-1, 4] },
          elements: [
            { kind: "point", at: [-4, 3], label: "−4 + 3i", labelAt: "n", step: 3 },
            { kind: "segment", from: [0, 0], to: [-4, 0], label: "4", labelAt: "n", tone: "muted", step: 3 },
            { kind: "segment", from: [-4, 0], to: [-4, 3], label: "3", labelAt: "w", tone: "muted", step: 3 },
            { kind: "vector", to: [-4, 3], step: 5 },
            { kind: "label", at: [-2, 1.5], label: "5", labelAt: "ne", step: 5 },
          ],
        },
      },
      {
        title: "Distance between two points",
        points: [
          t`The distance between the points $z_1$ and $z_2$ is $|z_1 - z_2|$.`,
          t`Take $z_1 = 6 + 5i$ and $z_2 = 2 + 2i$.`,
          t`Subtract: $(6 + 5i) - (2 + 2i) = 4 + 3i$.`,
          t`So the points are $4$ apart across and $3$ apart up.`,
          t`Take the modulus: $|4 + 3i| = \sqrt{16 + 9} = 5$.`,
        ],
        figure: {
          alt: "The points 6 + 5i and 2 + 2i. They are 4 apart across and 3 apart up, so the straight line between them is 5 long.",
          view: { x: [-0.8, 7.8], y: [-0.8, 6] },
          elements: [
            { kind: "point", at: [6, 5], label: "6 + 5i", labelAt: "ne", step: 2 },
            { kind: "point", at: [2, 2], label: "2 + 2i", labelAt: "w", step: 2 },
            { kind: "segment", from: [2, 2], to: [6, 2], label: "4", labelAt: "s", tone: "muted", step: 4 },
            { kind: "segment", from: [6, 2], to: [6, 5], label: "3", labelAt: "e", tone: "muted", step: 4 },
            { kind: "segment", from: [2, 2], to: [6, 5], label: "5", labelAt: "nw", step: 5 },
          ],
        },
      },
      {
        title: "Either order, same distance",
        points: [
          t`Swapping the order gives the negative: $z_2 - z_1 = -(z_1 - z_2)$.`,
          t`For those points, $z_1 - z_2 = 4 + 3i$, so $z_2 - z_1 = -4 - 3i$.`,
          t`Both are $\sqrt{16 + 9} = 5$ from the origin, on opposite sides of it.`,
          t`So the order doesn't matter: $|z_1 - z_2| = |z_2 - z_1|$.`,
        ],
        figure: {
          alt: "Arrows from the origin to 4 + 3i and to −4 − 3i point opposite ways. Both are 5 long, so the two differences have the same modulus.",
          view: { x: [-5.5, 5.5], y: [-4, 4] },
          elements: [
            { kind: "point", at: [4, 3], label: "4 + 3i", labelAt: "ne", step: 2 },
            { kind: "vector", to: [4, 3], step: 2 },
            { kind: "point", at: [-4, -3], label: "−4 − 3i", labelAt: "sw", step: 2 },
            { kind: "vector", to: [-4, -3], step: 2 },
            { kind: "label", at: [2, 1.5], label: "5", labelAt: "nw", step: 3 },
            { kind: "label", at: [-2, -1.5], label: "5", labelAt: "se", step: 3 },
          ],
        },
      },
      {
        title: "Subtract first, then take modulus",
        points: [
          t`$|z_1 - z_2|$ is **not** $|z_1| - |z_2|$.`,
          t`Subtract the numbers first, then take the modulus.`,
          t`For example, $4 + 3i$ and $-4 + 3i$ are each $5$ from the origin.`,
          t`So $|z_1| - |z_2| = 5 - 5 = 0$, yet they are different points.`,
          t`Subtract first: $(4 + 3i) - (-4 + 3i) = 8$, so they are $8$ apart.`,
        ],
        figure: {
          alt: "The points 4 + 3i and −4 + 3i are each 5 from the origin, yet the line between them is 8 long: the same distance from the origin, far apart.",
          view: { x: [-5.5, 5.5], y: [-1, 4.5] },
          elements: [
            { kind: "point", at: [4, 3], label: "4 + 3i", labelAt: "ne", step: 3 },
            { kind: "vector", to: [4, 3], tone: "muted", step: 3 },
            { kind: "label", at: [2, 1.5], label: "5", labelAt: "se", step: 3 },
            { kind: "point", at: [-4, 3], label: "−4 + 3i", labelAt: "nw", step: 3 },
            { kind: "vector", to: [-4, 3], tone: "muted", step: 3 },
            { kind: "label", at: [-2, 1.5], label: "5", labelAt: "sw", step: 3 },
            { kind: "segment", from: [-4, 3], to: [4, 3], step: 5 },
            { kind: "label", at: [1.5, 3], label: "8 apart", labelAt: "n", step: 5 },
          ],
        },
      },
    ],
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
      alt: "The origin 0, and the point 3 + 4i, 3 across and 4 up from it. The arrow from the origin to 3 + 4i is the long side of a right triangle with sides 3 and 4: its length |z| is √(3² + 4²) = 5.",
      view: { x: [-1, 5], y: [-1, 5] },
      elements: [
        { kind: "point", at: [0, 0], label: "0", labelAt: "nw", tone: "muted", step: 1 },
        { kind: "point", at: [3, 4], label: "3 + 4i", labelAt: "ne", step: 2 },
        { kind: "segment", from: [0, 0], to: [3, 0], label: "3", labelAt: "n", tone: "muted", step: 2 },
        { kind: "segment", from: [3, 0], to: [3, 4], label: "4", labelAt: "e", tone: "muted", step: 2 },
        { kind: "vector", to: [3, 4], step: 3 },
        { kind: "label", at: [1.5, 2], label: "|z|", labelAt: "nw", step: 3 },
        { kind: "label", at: [-0.8, 4.6], label: "|z| = √(3² + 4²) = 5", labelAt: "e", step: 4 },
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
