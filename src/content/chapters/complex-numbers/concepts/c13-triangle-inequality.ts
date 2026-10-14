import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`$\lvert z \rvert = 2$, so $z$ lies on a circle of radius 2. **How far can $z$ be from the point $-5$?**`,
    reveal: t`At most $7$ (at $z = 2$, the far side) and at least $3$ (at $z = -2$, the near side). The distance ranges from $5 - 2$ to $5 + 2$.`,
  },
  explanation: {
    intuition: t`The triangle inequality says a detour is never shorter than the direct route: $\lvert z_1 + z_2 \rvert \le \lvert z_1 \rvert + \lvert z_2 \rvert$. For $z$ on the circle $\lvert z \rvert = r$, the distance to a fixed point is greatest on the far side of the circle and least on the near side.`,
    formal: t`**Triangle inequality:** $\big\lvert \lvert z_1 \rvert - \lvert z_2 \rvert \big\rvert \le \lvert z_1 + z_2 \rvert \le \lvert z_1 \rvert + \lvert z_2 \rvert$.

If $\lvert z \rvert = r$, then for a fixed $c$:
- the greatest value of $\lvert z + c \rvert$ is $r + \lvert c \rvert$
- the least value is $\big\lvert r - \lvert c \rvert \big\rvert$

Both values are reached, at the two points of the circle in line with $0$ and $-c$.`,
    worked: {
      prompt: t`If $\lvert z \rvert = 5$, find the least value of $\lvert z - 3i \rvert$.`,
      steps: [
        t`Here $c = -3i$, so $\lvert c \rvert = 3$.`,
        t`Least value: $\lvert 5 - 3 \rvert = 2$, reached at $z = 5i$.`,
      ],
      answer: t`$2$`,
      figure: {
        alt: "The circle |z| = 5 and the point 3i inside it. The nearest point of the circle is 5i, 2 above 3i.",
        view: { x: [-6, 6], y: [-6, 6.5] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 5, label: "|z| = 5", labelAt: "ne", tone: "muted" },
          { kind: "point", at: [0, 3], label: "3i", labelAt: "e", step: 1 },
          { kind: "segment", from: [0, 3], to: [0, 5], label: "2", labelAt: "e", tone: "good", step: 2 },
          { kind: "point", at: [0, 5], label: "z = 5i", labelAt: "ne", tone: "good", step: 2 },
        ],
      },
    },
    figure: {
      alt: "The circle |z| = 2 and the point 3 + 4i, which is 5 from the origin. Along the line through the origin, the nearest point of the circle is 5 − 2 = 3 away and the farthest is 5 + 2 = 7 away.",
      view: { x: [-3, 5], y: [-2.8, 5] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 1 },
        { kind: "label", at: [-1.597, 1.204], label: "|z| = 2", labelAt: "nw", tone: "muted", step: 1 },
        { kind: "point", at: [3, 4], label: "3 + 4i", labelAt: "se", step: 2 },
        { kind: "line", through: [[0, 0], [3, 4]], dashed: true, tone: "muted", step: 2 },
        { kind: "point", at: [1.2, 1.6], label: "nearest: 3", labelAt: "nw", tone: "good", step: 3 },
        { kind: "segment", from: [1.2, 1.6], to: [3, 4], tone: "good", step: 3 },
        { kind: "point", at: [-1.2, -1.6], label: "farthest: 7", labelAt: "se", step: 4 },
        { kind: "segment", from: [-1.2, -1.6], to: [1.2, 1.6], step: 4 },
      ],
    },
    visualSpec: t`A circle $\lvert z \rvert = r$ and a fixed point $-c$. Dragging $z$ around the circle shows the distance live, with the far and near points marked as the greatest and least values.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Giving the other extreme (greatest for least, or least for greatest)",
      remediation: t`The far side of the circle gives the greatest distance, $r + \lvert c \rvert$; the near side gives the least, $\big\lvert r - \lvert c \rvert \big\rvert$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: t`Writing the least value as $\lvert c \rvert - r$ when the circle is the bigger one`,
      remediation: t`A distance can't be negative. The least value is $\big\lvert r - \lvert c \rvert \big\rvert$; when $r > \lvert c \rvert$ that is $r - \lvert c \rvert$.`,
      fallback: { kind: "ext", topic: "absolute value" },
    },
    {
      id: "C13-M3",
      mistake: t`Measuring $\lvert a + ib \rvert$ as $\lvert a \rvert + \lvert b \rvert$`,
      remediation: t`$\lvert a + ib \rvert = \sqrt{a^2 + b^2}$, the straight-line distance, not $\lvert a \rvert + \lvert b \rvert$.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  engineNotes: [
    "C13-M2 only differs from the key when r > |c| (C13-Q3, C13-Q6).",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 2$, the greatest value of $\lvert z + 3 - 4i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "2", c: "3-4*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C13-M1", value: "3" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C13-M3", value: "9" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
      ],
      solution: {
        steps: [
          t`$\lvert z + 3 - 4i \rvert$ is the distance from $z$ to the point $-3 + 4i$, which is $5$ from the origin.`,
          t`The farthest point of the circle is on the far side, in line with $0$: the greatest distance is $5 + 2 = 7$.`,
        ],
        figure: {
          alt: "The circle |z| = 2 and the point −3 + 4i, 5 from the origin. The farthest point of the circle is on the opposite side, 5 + 2 = 7 away.",
          view: { x: [-3.9, 2.9], y: [-2.9, 4.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, label: "|z| = 2", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [-3, 4], label: "−3 + 4i", labelAt: "e" },
            { kind: "line", through: [[0, 0], [-3, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [1.2, -1.6], label: "farthest", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [1.2, -1.6], to: [-3, 4], label: "7", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 4$, the least value of $\lvert z - 6 - 8i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "4", c: "-6-8*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$14$`, correct: false, misconceptionId: "C13-M1", value: "14" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C13-M3", value: "10" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`$\lvert z - 6 - 8i \rvert$ is the distance from $z$ to $6 + 8i$, which is $\sqrt{36 + 64} = 10$ from the origin.`,
          t`The nearest point of the circle is on the near side, in line with $0$: the least distance is $10 - 4 = 6$.`,
        ],
        figure: {
          alt: "The circle |z| = 4 and the point 6 + 8i, 10 from the origin. The nearest point of the circle is in line with it, 10 − 4 = 6 away.",
          view: { x: [-4.9, 6.9], y: [-4.9, 8.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [3.195, -2.407], label: "|z| = 4", labelAt: "se", tone: "muted" },
            { kind: "point", at: [6, 8], label: "6 + 8i", labelAt: "se" },
            { kind: "line", through: [[0, 0], [6, 8]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [2.4, 3.2], label: "nearest", labelAt: "nw", tone: "good", step: 2 },
            { kind: "segment", from: [2.4, 3.2], to: [6, 8], label: "6", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 7$, the least value of $\lvert z + 3 + 4i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "7", c: "3+4*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C13-M3", value: "0" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C13-M2", value: "-2" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C13-M1", value: "12" },
      ],
      solution: {
        steps: [
          t`$\lvert z + 3 + 4i \rvert$ is the distance from $z$ to $-3 - 4i$, which is $5$ from the origin: inside the circle of radius $7$.`,
          t`The nearest point of the circle is straight out past $-3 - 4i$: the least distance is $7 - 5 = 2$.`,
        ],
        figure: {
          alt: "The circle |z| = 7 and the point −3 − 4i inside it, 5 from the origin. The nearest point of the circle is straight out past it, 7 − 5 = 2 away.",
          view: { x: [-7.9, 7.9], y: [-7.9, 7.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 7, label: "|z| = 7", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [-3, -4], label: "−3 − 4i", labelAt: "nw" },
            { kind: "line", through: [[0, 0], [-3, -4]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-4.2, -5.6], label: "nearest", labelAt: "sw", tone: "good", step: 2 },
            { kind: "segment", from: [-4.2, -5.6], to: [-3, -4], label: "2", labelAt: "w", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 3$, the greatest value of $\lvert z - 5 + 12i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "3", c: "-5+12*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C13-M1", value: "10" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C13-M3", value: "20" },
      ],
      solution: {
        steps: [
          t`$\lvert z - 5 + 12i \rvert$ is the distance from $z$ to $5 - 12i$, which is $\sqrt{25 + 144} = 13$ from the origin.`,
          t`The farthest point of the circle is on the far side, in line with $0$: the greatest distance is $13 + 3 = 16$.`,
        ],
        figure: {
          alt: "The circle |z| = 3 and the point 5 − 12i, 13 from the origin. The farthest point of the circle is on the opposite side, 13 + 3 = 16 away.",
          view: { x: [-3.9, 5.9], y: [-12.9, 3.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, label: "|z| = 3", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [5, -12], label: "5 − 12i", labelAt: "w" },
            { kind: "line", through: [[0, 0], [5, -12]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-1.154, 2.769], label: "farthest", labelAt: "nw", tone: "good", step: 2 },
            { kind: "segment", from: [-1.154, 2.769], to: [5, -12], label: "16", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 1$, the least value of $\lvert z - 1 - i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "1", c: "-1-I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$-1 + \sqrt{2}$`, correct: true, value: "-1 + sqrt(2)" },
        { key: "B", text: t`$1 + \sqrt{2}$`, correct: false, misconceptionId: "C13-M1", value: "1 + sqrt(2)" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C13-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`$\lvert z - 1 - i \rvert$ is the distance from $z$ to $1 + i$, which is $\sqrt2$ from the origin: just outside the unit circle.`,
          t`The nearest point of the circle is on the near side, in line with $0$: the least distance is $\sqrt2 - 1$.`,
        ],
        figure: {
          alt: "The unit circle and the point 1 + i, √2 from the origin. The nearest point of the circle is in line with it, √2 − 1 away.",
          view: { x: [-1.9, 1.9], y: [-1.9, 1.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, tone: "muted" },
            { kind: "label", at: [0.707, -0.707], label: "|z| = 1", labelAt: "se", tone: "muted" },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "e" },
            { kind: "line", through: [[0, 0], [1, 1]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [0.707, 0.707], label: "nearest", labelAt: "nw", tone: "good", step: 2 },
            { kind: "segment", from: [0.707, 0.707], to: [1, 1], label: "√2 − 1", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 4$, the least value of $\lvert z + 1 - i \rvert$ is:`,
      verify: { kind: "value", inputs: { r: "4", c: "1-I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$-4 + \sqrt{2}$`, correct: false, misconceptionId: "C13-M2", value: "-4 + sqrt(2)" },
        { key: "B", text: t`$\sqrt{2} + 4$`, correct: false, misconceptionId: "C13-M1", value: "sqrt(2) + 4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C13-M3", value: "2" },
        { key: "D", text: t`$4 - \sqrt{2}$`, correct: true, value: "4 - sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$\lvert z + 1 - i \rvert$ is the distance from $z$ to $-1 + i$, which is $\sqrt2$ from the origin: inside the circle of radius $4$.`,
          t`The nearest point of the circle is straight out past $-1 + i$: the least distance is $4 - \sqrt2$.`,
        ],
        figure: {
          alt: "The circle |z| = 4 and the point −1 + i inside it, √2 from the origin. The nearest point of the circle is straight out past it, 4 − √2 away.",
          view: { x: [-4.9, 4.9], y: [-4.9, 4.9] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, label: "|z| = 4", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [-1, 1], label: "−1 + i", labelAt: "sw" },
            { kind: "line", through: [[0, 0], [-1, 1]], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-2.828, 2.828], label: "nearest", labelAt: "nw", tone: "good", step: 2 },
            { kind: "segment", from: [-2.828, 2.828], to: [-1, 1], label: "4 − √2", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
