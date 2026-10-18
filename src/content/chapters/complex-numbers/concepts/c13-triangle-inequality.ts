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
    intuition: [
      t`Recall: $\lvert z \rvert$ is the distance from $0$ to $z$, so $\lvert z \rvert = 2$ is a circle of radius $2$.`,
      t`The point $3 + 4i$ is $5$ from $0$.`,
      t`Going from $0$ to $3 + 4i$ by way of a point $z$ on the circle is a **detour**.`,
      t`A detour is never shorter than the straight route: this is the **triangle inequality**.`,
      t`So $z$ is at least $5 - 2 = 3$ away, at the **near side**: the point of the circle facing $3 + 4i$.`,
      t`Going from $z$ through $0$ takes $2 + 5 = 7$, so $z$ is at most $7$ away, at the **far side**.`,
    ],
    formal: [
      {
        title: "The triangle inequality",
        points: [
          t`Recall: to reach $z_1 + z_2$, place the arrow of $z_2$ at the tip of the arrow of $z_1$.`,
          t`The arrow from $0$ to $z_1 + z_2$, here $4 + 3i$, closes a triangle.`,
          t`Its sides are $\lvert z_1 \rvert = 4$, $\lvert z_2 \rvert = 3$ and $\lvert z_1 + z_2 \rvert = 5$.`,
          t`One side of a triangle is never longer than the other two together: $5 \le 4 + 3$.`,
          t`So $\lvert z_1 + z_2 \rvert \le \lvert z_1 \rvert + \lvert z_2 \rvert$: this is the **triangle inequality**.`,
        ],
        figure: {
          alt: "The arrow to z₁ = 4 along the real axis, then the arrow of z₂ = 3i from its tip, straight up. The arrow from the origin to their sum, 4 + 3i, closes a triangle with sides 4, 3 and 5.",
          view: { x: [-1, 5.5], y: [-1, 4] },
          elements: [
            { kind: "vector", to: [4, 0], tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "z₁ = 4", labelAt: "n", tone: "muted", step: 1 },
            { kind: "vector", from: [4, 0], to: [4, 3], tone: "muted", step: 1 },
            { kind: "label", at: [4, 1.5], label: "z₂ = 3i", labelAt: "e", tone: "muted", step: 1 },
            { kind: "vector", to: [4, 3], label: "4 + 3i", labelAt: "ne", step: 2 },
            { kind: "label", at: [2, 1.5], label: "|z₁ + z₂| = 5", labelAt: "nw", step: 3 },
          ],
        },
      },
      {
        title: "Longest and shortest sums",
        points: [
          t`Turn $z_2$ about the tip of $z_1$: its length stays $3$, so its tip stays on a circle.`,
          t`Turned to point the same way as $z_1$, it gives the longest sum: $4 + 3 = 7$.`,
          t`Turned to point back along $z_1$, it gives the shortest sum: $4 - 3 = 1$.`,
          t`In general, $\lvert z_1 + z_2 \rvert$ is at least $\big\lvert \lvert z_1 \rvert - \lvert z_2 \rvert \big\rvert$.`,
          t`The outer bars make the difference positive, whichever of $\lvert z_1 \rvert$ and $\lvert z_2 \rvert$ is larger.`,
          t`Together: $\big\lvert \lvert z_1 \rvert - \lvert z_2 \rvert \big\rvert$ $\le \lvert z_1 + z_2 \rvert$ $\le \lvert z_1 \rvert + \lvert z_2 \rvert$.`,
        ],
        figure: {
          alt: "The arrow to z₁ = 4 and the arrow of z₂ = 3i from its tip. As z₂ turns about the tip of z₁, its own tip moves on a dashed circle of radius 3. Turned to point along z₁, the sum reaches 7, the longest; turned back along z₁, the sum is 1, the shortest.",
          view: { x: [-0.8, 9], y: [-3.4, 3.8] },
          elements: [
            { kind: "vector", to: [4, 0], tone: "muted" },
            { kind: "label", at: [2.8, 0], label: "z₁ = 4", labelAt: "n", tone: "muted" },
            { kind: "segment", from: [4, 0], to: [4, 3], label: "z₂ = 3i", labelAt: "e", tone: "good" },
            { kind: "circle", centre: [4, 0], r: 3, dashed: true, tone: "muted", step: 1 },
            { kind: "turn", centre: [4, 0], r: 3, from: 90, to: 0, label: "longest: 7", labelAt: "n", step: 2 },
            { kind: "turn", centre: [4, 0], r: 3, from: 90, to: 180, label: "shortest: 1", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Farthest and nearest on a circle",
        points: [
          t`Let $z$ move on a circle $\lvert z \rvert = r$, here $\lvert z \rvert = 3$.`,
          t`Recall: $\lvert z - w \rvert$ is the distance from $z$ to $w$, so $\lvert z + c \rvert = \lvert z - (-c) \rvert$ is the distance from $z$ to $-c$.`,
          t`For a fixed $-c = -4 + 3i$, we have $c = 4 - 3i$ and $\lvert c \rvert = 5$.`,
          t`By the triangle inequality, the greatest value of $\lvert z + c \rvert$ is $r + \lvert c \rvert$: here $3 + 5 = 8$, on the far side.`,
          t`The least value is $\big\lvert r - \lvert c \rvert \big\rvert$: here $\lvert 3 - 5 \rvert = 2$, on the near side.`,
          t`Both values are reached, at the two points of the circle in line with $0$ and $-c$.`,
        ],
        figure: {
          alt: "The circle |z| = 3 and the fixed point −c = −4 + 3i outside it, 5 from the origin. A point z on the circle is joined to −c. The farthest point of the circle, on the far side, is 3 + 5 = 8 from −c; the nearest, on the near side, is 5 − 3 = 2 from it. Both lie on the line through 0 and −c.",
          view: { x: [-5, 3.8], y: [-3.4, 4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", step: 1 },
            { kind: "label", at: [2.121, 2.121], label: "|z| = 3", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [-4, 3], label: "−c = −4 + 3i", labelAt: "n", step: 2 },
            { kind: "point", at: [1.5, -2.598], label: "z", labelAt: "se", step: 2 },
            { kind: "segment", from: [1.5, -2.598], to: [-4, 3], dashed: true, step: 2 },
            { kind: "point", at: [2.4, -1.8], label: "farthest: 8", labelAt: "e", step: 4 },
            { kind: "segment", from: [2.4, -1.8], to: [-4, 3], step: 4 },
            { kind: "point", at: [-2.4, 1.8], label: "nearest: 2", labelAt: "ne", tone: "good", step: 5 },
            { kind: "segment", from: [-2.4, 1.8], to: [-4, 3], tone: "good", step: 5 },
            { kind: "line", through: [[0, 0], [-4, 3]], dashed: true, tone: "muted", step: 6 },
          ],
        },
      },
      {
        title: "A point inside the circle",
        points: [
          t`When $\lvert c \rvert < r$, the point $-c$ lies inside the circle: here $-c = -2$ inside $\lvert z \rvert = 3$.`,
          t`The nearest point of the circle is straight out past $-c$: here $z = -3$.`,
          t`So the least value is $r - \lvert c \rvert$: here $3 - 2 = 1$.`,
          t`The other order, $\lvert c \rvert - r = -1$, is negative, and a distance never is.`,
          t`So write the least value as $\big\lvert r - \lvert c \rvert \big\rvert$: it is right whichever is larger.`,
          t`The greatest value is still $r + \lvert c \rvert$: here $3 + 2 = 5$, at $z = 3$.`,
        ],
        figure: {
          alt: "The circle |z| = 3 and the point −c = −2 inside it. The nearest point of the circle is −3, straight out past −2, 1 away. The farthest is 3, on the other side, 5 away.",
          view: { x: [-4.4, 4.4], y: [-3.4, 3.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted" },
            { kind: "label", at: [2.121, 2.121], label: "|z| = 3", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [-2, 0], label: "−c = −2", labelAt: "ne", step: 1 },
            { kind: "point", at: [-3, 0], label: "nearest: 1", labelAt: "nw", tone: "good", step: 2 },
            { kind: "segment", from: [-3, 0], to: [-2, 0], tone: "good", step: 2 },
            { kind: "point", at: [3, 0], label: "farthest: 5", labelAt: "nw", step: 6 },
            { kind: "segment", from: [-2, 0], to: [3, 0], step: 6 },
          ],
        },
      },
    ],
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
      alt: "The circle |z| = 2 and the arrow to 3 + 4i, which is 5 from the origin. A point z on the circle makes a detour from 0 to 3 + 4i. The nearest point of the circle, facing 3 + 4i, is 5 − 2 = 3 away; the farthest, on the far side through 0, is 2 + 5 = 7 away.",
      view: { x: [-3, 5], y: [-2.8, 5] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 1 },
        { kind: "label", at: [-1.597, 1.204], label: "|z| = 2", labelAt: "nw", tone: "muted", step: 1 },
        { kind: "vector", to: [3, 4], label: "3 + 4i", labelAt: "se", tone: "muted", step: 2 },
        { kind: "label", at: [2.1, 2.8], label: "5", labelAt: "nw", tone: "muted", step: 2 },
        { kind: "point", at: [1, -1.732], label: "z", labelAt: "se", step: 3 },
        { kind: "segment", from: [0, 0], to: [1, -1.732], step: 3 },
        { kind: "segment", from: [1, -1.732], to: [3, 4], dashed: true, step: 3 },
        { kind: "point", at: [1.2, 1.6], label: "nearest: 3", labelAt: "w", tone: "good", step: 5 },
        { kind: "segment", from: [1.2, 1.6], to: [3, 4], tone: "good", step: 5 },
        { kind: "point", at: [-1.2, -1.6], label: "farthest: 7", labelAt: "sw", step: 6 },
        { kind: "segment", from: [-1.2, -1.6], to: [0, 0], step: 6 },
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
    {
      id: "C13-M4",
      mistake: t`Dropping the cross term: $\lvert z + c \rvert^2 = \lvert z \rvert^2 + \lvert c \rvert^2$`,
      remediation: t`$\lvert z + c \rvert^2 = \lvert z \rvert^2 + \lvert c \rvert^2 + 2\,\mathrm{Re}(z\bar c)$, and the last term changes as $z$ moves. The extremes lie on the line through $0$ and $-c$: $r + \lvert c \rvert$ and $\big\lvert r - \lvert c \rvert \big\rvert$.`,
      fallback: { kind: "ext", topic: "squaring a sum" },
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
        { key: "D", text: t`$\sqrt{29}$`, correct: false, misconceptionId: "C13-M4", value: "sqrt(29)" },
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
        { key: "D", text: t`$2 \sqrt{29}$`, correct: false, misconceptionId: "C13-M4", value: "2*sqrt(29)" },
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
        { key: "D", text: t`$\sqrt{178}$`, correct: false, misconceptionId: "C13-M4", value: "sqrt(178)" },
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
        { key: "D", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C13-M4", value: "sqrt(3)" },
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
