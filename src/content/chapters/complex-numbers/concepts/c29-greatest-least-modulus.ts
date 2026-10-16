import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c29: Concept = {
  id: "C29",
  status: "approved",
  hook: {
    prompt: t`$z$ can be anywhere on the circle $|z - 6 - 8i| = 3$. **How close can $z$ get to the origin?**`,
    reveal: t`$10 - 3 = 7$. The centre is $10$ from the origin, and the nearest point of the circle is $3$ closer, on the line through the origin and the centre.`,
  },
  explanation: {
    intuition: [
      t`Recall: $|z - c|$ is the distance from $z$ to a fixed point $c$; here $c = 0$, so it is $|z|$.`,
      t`Let $z$ move on a circle of radius $1.5$ whose centre, $4 + 3i$, is $5$ from $c$.`,
      t`The nearest and farthest points of the circle lie on the line through $c$ and the centre.`,
      t`The **nearest** point is $1.5$ closer than the centre, so the **least value** of $|z|$, the smallest it gets, is $5 - 1.5 = 3.5$.`,
      t`The **farthest** point is $1.5$ beyond the centre, so the **greatest value**, the largest it gets, is $5 + 1.5 = 6.5$.`,
      t`So the greatest and least values are the distance to the centre plus or minus the radius.`,
    ],
    formal: [
      {
        title: "Greatest and least on a circle",
        points: [
          t`Recall: $|z - a| = r$ is the circle with centre $a$ and radius $r$; here $|z - 2 - i| = 3$.`,
          t`Take a fixed point $c$ outside it; here $c = -1 - 3i$.`,
          t`Let $d = |a - c|$, the distance from $c$ to the centre; here $d = |3 + 4i| = 5$.`,
          t`The greatest value of $|z - c|$ is $d + r$, on the far side: here $5 + 3 = 8$.`,
          t`When $c$ is outside ($d > r$), the least value is $d - r$, on the near side: here $5 - 3 = 2$.`,
          t`Both of these points lie on the line through $c$ and the centre.`,
        ],
        figure: {
          alt: "The circle |z − 2 − i| = 3 and the point c = −1 − 3i outside it, 5 from the centre 2 + i. Beyond the centre, the farthest point of the circle is 5 + 3 = 8 from c; short of it, the nearest point is 5 − 3 = 2 from c. Both lie on the line through c and the centre.",
          view: { x: [-2.5, 6.5], y: [-4, 4.8] },
          elements: [
            { kind: "line", through: [[-1, -3], [2, 1]], dashed: true, tone: "muted", step: 6 },
            { kind: "circle", centre: [2, 1], r: 3, tone: "muted", step: 1 },
            { kind: "point", at: [2, 1], label: "2 + i", labelAt: "se", tone: "muted", step: 1 },
            { kind: "point", at: [-1, -3], label: "−1 − 3i", labelAt: "e", step: 2 },
            { kind: "segment", from: [-1, -3], to: [2, 1], tone: "muted", step: 3 },
            { kind: "label", at: [-0.4, -2.2], label: "d = 5", labelAt: "w", tone: "muted", step: 3 },
            { kind: "segment", from: [2, 1], to: [3.8, 3.4], step: 4 },
            { kind: "point", at: [3.8, 3.4], label: "farthest: 8", labelAt: "e", step: 4 },
            { kind: "segment", from: [-1, -3], to: [0.2, -1.4], tone: "good", step: 5 },
            { kind: "point", at: [0.2, -1.4], label: "nearest: 2", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "A point inside the circle",
        points: [
          t`Now take $c$ inside the circle, so $d < r$: here $c = 1 + i$ inside $|z - 1 - 2i| = 3$.`,
          t`The nearest point is straight out past $c$, away from the centre: here $1 - i$.`,
          t`So the least value is $r - d$: here $3 - 1 = 2$.`,
          t`The other order, $d - r = -2$, is negative, and a distance never is.`,
          t`So on a circle the least value is $|d - r|$, whichever of $d$ and $r$ is larger.`,
          t`The greatest value is still $d + r$: here $1 + 3 = 4$, at $1 + 5i$.`,
        ],
        figure: {
          alt: "The circle |z − 1 − 2i| = 3 and the point c = 1 + i inside it, 1 below the centre. The nearest point of the circle is 1 − i, straight out past c, 3 − 1 = 2 away. The farthest is 1 + 5i, on the other side, 1 + 3 = 4 away.",
          view: { x: [-3, 5.5], y: [-1.8, 5.8] },
          elements: [
            { kind: "circle", centre: [1, 2], r: 3, tone: "muted" },
            { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "e", tone: "muted" },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "e", step: 1 },
            { kind: "segment", from: [1, 1], to: [1, -1], tone: "good", step: 2 },
            { kind: "point", at: [1, -1], label: "nearest: 1 − i", labelAt: "e", tone: "good", step: 2 },
            { kind: "segment", from: [1, 1], to: [1, 5], step: 6 },
            { kind: "point", at: [1, 5], label: "farthest: 1 + 5i", labelAt: "e", step: 6 },
          ],
        },
      },
      {
        title: "Greatest and least on a disc",
        points: [
          t`A **disc**, $|z - a| \le r$, is the circle together with every point inside it.`,
          t`Here the disc is $|z - 1 - 2i| \le 3$, and $c = 1 + i$ lies inside it.`,
          t`Now $z$ can sit right on $c$, so the least value of $|z - c|$ is $0$.`,
          t`The farthest point is still on the edge, so the greatest value is still $d + r = 1 + 3 = 4$.`,
        ],
        figure: {
          alt: "The disc |z − 1 − 2i| ≤ 3, shaded, and the point c = 1 + i inside it. z can be c itself, so the least value of |z − c| is 0. The farthest point of the disc is 1 + 5i on its edge, 4 away.",
          view: { x: [-3, 5.5], y: [-1.8, 5.8] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [1, 2], r: 3 }], tone: "muted", step: 1 },
            { kind: "circle", centre: [1, 2], r: 3, tone: "muted" },
            { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "e", tone: "muted" },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "w", step: 2 },
            { kind: "label", at: [1, 1], label: "z = c: least 0", labelAt: "e", tone: "good", step: 3 },
            { kind: "segment", from: [1, 1], to: [1, 5], step: 4 },
            { kind: "point", at: [1, 5], label: "farthest: 1 + 5i", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "A point outside the disc",
        points: [
          t`Here the disc is $|z + 3 - 4i| \le 1$, with centre $-3 + 4i$ and radius $1$.`,
          t`Take $c = 0$, so $|z - c| = |z|$; the centre is $d = |-3 + 4i| = 5$ from it.`,
          t`As $d > r$, $c$ is outside, and the nearest point is on the near edge: the least $|z|$ is $5 - 1 = 4$.`,
          t`The greatest value is $5 + 1 = 6$, on the far edge.`,
          t`So, for $d \ge r$, the least value is $d - r$; it is $0$ only when $c$ is inside the disc.`,
          t`Always check that the nearest or farthest point belongs to the circle or disc you were given.`,
        ],
        figure: {
          alt: "The disc |z + 3 − 4i| ≤ 1, centre −3 + 4i, radius 1, and the origin outside it, 5 from the centre. The nearest point of the disc is on its near edge, 5 − 1 = 4 from 0; the farthest is on its far edge, 5 + 1 = 6 from 0.",
          view: { x: [-6.5, 2.5], y: [-1, 6] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [-3, 4], r: 1 }], tone: "muted", step: 1 },
            { kind: "circle", centre: [-3, 4], r: 1, tone: "muted", step: 1 },
            { kind: "point", at: [-3, 4], label: "−3 + 4i", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], label: "c = 0", labelAt: "ne", step: 2 },
            { kind: "vector", to: [-3, 4], tone: "muted", step: 2 },
            { kind: "segment", from: [0, 0], to: [-2.4, 3.2], tone: "good", step: 3 },
            { kind: "point", at: [-2.4, 3.2], label: "nearest: 4", labelAt: "e", tone: "good", step: 3 },
            { kind: "segment", from: [-3, 4], to: [-3.6, 4.8], step: 4 },
            { kind: "point", at: [-3.6, 4.8], label: "farthest: 6", labelAt: "w", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`For $|z - 2i| \le 1$, find the greatest and least values of $|z|$.`,
      steps: [
        t`Distance from the origin to the centre: $d = |2i| = 2$.`,
        t`Greatest: $2 + 1 = 3$.`,
        t`The origin is outside the disc ($2 > 1$), so the least is $2 - 1 = 1$.`,
      ],
      answer: t`Greatest $3$, least $1$.`,
      figure: {
        alt: "The disc |z − 2i| ≤ 1, centre 2i, radius 1. The origin is outside it. The point of the disc farthest from 0 is 3i and the nearest is i.",
        view: { x: [-2.5, 2.5], y: [-0.8, 3.8] },
        elements: [
          { kind: "region", within: [{ kind: "disc", centre: [0, 2], r: 1 }], tone: "muted" },
          { kind: "circle", centre: [0, 2], r: 1, tone: "muted" },
          { kind: "point", at: [0, 2], label: "centre 2i", labelAt: "e", tone: "muted", step: 1 },
          { kind: "point", at: [0, 3], label: "greatest: 3", labelAt: "ne", step: 2 },
          { kind: "point", at: [0, 1], label: "least: 1", labelAt: "se", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The point c = 0 and a circle with centre 4 + 3i and radius 1.5, whose centre is 5 from c. Along the line through c and the centre, the nearest point of the circle is 5 − 1.5 = 3.5 from c and the farthest is 5 + 1.5 = 6.5.",
      view: { x: [-1, 8.5], y: [-1, 5.5] },
      elements: [
        { kind: "line", through: [[0, 0], [4, 3]], dashed: true, tone: "muted", step: 3 },
        { kind: "point", at: [0, 0], label: "c = 0", labelAt: "sw", step: 1 },
        { kind: "circle", centre: [4, 3], r: 1.5, tone: "muted", step: 2 },
        { kind: "point", at: [4, 3], label: "4 + 3i", labelAt: "se", tone: "muted", step: 2 },
        { kind: "vector", to: [4, 3], tone: "muted", step: 2 },
        { kind: "segment", from: [0, 0], to: [2.8, 2.1], tone: "good", step: 4 },
        { kind: "point", at: [2.8, 2.1], label: "nearest: 3.5", labelAt: "nw", tone: "good", step: 4 },
        { kind: "segment", from: [4, 3], to: [5.2, 3.9], step: 5 },
        { kind: "point", at: [5.2, 3.9], label: "farthest: 6.5", labelAt: "e", step: 5 },
      ],
    },
    visualSpec: t`A circle or disc and a point $c$. The line through $c$ and the centre marks the nearest and farthest points; dragging $c$ inside the disc snaps the least distance to 0.`,
  },
  misconceptions: [
    {
      id: "C29-M1",
      mistake: "Giving the other extreme",
      remediation: t`The far point gives $d + r$; the near point gives $d - r$ (or $0$ inside a disc).`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C29-M2",
      mistake: t`Using $d - r$ when the point is inside the disc`,
      remediation: t`If $c$ is inside the disc, $z$ can sit right on it: the least value is $0$.`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C29-M3",
      mistake: t`Measuring the distance to the centre as $|p| + |q|$`,
      remediation: t`$|p + qi| = \sqrt{p^2 + q^2}$, the straight-line distance.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C29-M4",
      mistake: "Forgetting the radius: giving the distance to the centre",
      remediation: t`$z$ moves on the circle, not at its centre. Along the line through the centre, the far point is $d + r$ away and the near point $d - r$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C29-M5",
      mistake: "Taking the least value on a disc as 0 even when the point is outside it",
      remediation: t`The least value is $0$ only if the point is inside the disc. If it is outside, the nearest point of the disc is on its edge: $d - r$.`,
      fallback: { kind: "concept", id: "C24" },
    },
  ],
  items: [
    {
      id: "C29-Q1",
      source: { kind: "authored" },
      stem: t`On the circle $|z - 3 - 4i| = 2$, the greatest value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "3+4*I", r: "2", c: "0" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C29-M1", value: "3" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C29-M3", value: "9" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C29-M4", value: "5" },
      ],
      solution: {
        steps: [
          t`The circle has centre $3 + 4i$ and radius $2$; the centre is $d = |3 + 4i| = 5$ from the origin.`,
          t`The farthest point is on the far side of the circle, in line with the origin: the greatest $|z|$ is $5 + 2 = 7$.`,
        ],
        figure: {
          alt: "The circle with centre 3 + 4i and radius 2, 5 from the origin. Its farthest point from 0 is on the far side, 5 + 2 = 7 away.",
          view: { x: [-1, 6], y: [-1, 7] },
          elements: [
            { kind: "circle", centre: [3, 4], r: 2, tone: "muted" },
            { kind: "point", at: [3, 4], label: "3 + 4i", labelAt: "se", tone: "muted" },
            { kind: "point", at: [0, 0], label: "0", labelAt: "sw" },
            { kind: "line", through: [[0, 0], [3, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [4.2, 5.6], tone: "good", step: 2 },
            { kind: "point", at: [4.2, 5.6], label: "farthest", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C29-Q2",
      source: { kind: "authored" },
      stem: t`For $|z - 3 - 4i| \le 2$, the least value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "3+4*I", r: "2", c: "0" }, params: { want: "min", region: "disc" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C29-M1", value: "7" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C29-M3", value: "5" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C29-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`The disc has centre $3 + 4i$ and radius $2$; the centre is $d = 5$ from the origin.`,
          t`The origin is outside the disc ($5 > 2$), so the nearest point is on the near edge, in line with the centre: the least $|z|$ is $5 - 2 = 3$.`,
        ],
        figure: {
          alt: "The disc with centre 3 + 4i and radius 2. The origin is outside it, so the nearest point of the disc is on its near edge, 5 − 2 = 3 away.",
          view: { x: [-1, 6], y: [-1, 7] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3, 4], r: 2 }], tone: "muted" },
            { kind: "circle", centre: [3, 4], r: 2, tone: "muted" },
            { kind: "point", at: [3, 4], label: "3 + 4i", labelAt: "se", tone: "muted" },
            { kind: "point", at: [0, 0], label: "0", labelAt: "sw" },
            { kind: "line", through: [[0, 0], [3, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.8, 2.4], tone: "good", step: 2 },
            { kind: "point", at: [1.8, 2.4], label: "nearest", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C29-Q3",
      source: { kind: "authored" },
      stem: t`For $|z - 1 - i| \le 3$, the least value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "1+I", r: "3", c: "0" }, params: { want: "min", region: "disc" } },
      options: [
        { key: "A", text: t`$\sqrt2 - 3$`, correct: false, misconceptionId: "C29-M2", value: "-3 + sqrt(2)" },
        { key: "B", text: t`$\sqrt{2} + 3$`, correct: false, misconceptionId: "C29-M1", value: "sqrt(2) + 3" },
        { key: "C", text: t`$0$`, correct: true, value: "0" },
        { key: "D", text: t`$\sqrt{2}$`, correct: false, misconceptionId: "C29-M4", value: "sqrt(2)" },
      ],
      solution: {
        steps: [
          t`The disc has centre $1 + i$ and radius $3$; the centre is $d = \sqrt2$ from the origin.`,
          t`$\sqrt2 < 3$, so the origin lies inside the disc: $z = 0$ is allowed, and the least $|z|$ is $0$.`,
        ],
        figure: {
          alt: "The disc with centre 1 + i and radius 3. The origin lies inside it, so z = 0 is allowed and the least |z| is 0.",
          view: { x: [-2.6, 4.6], y: [-2.6, 4.6] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [1, 1], r: 3 }], tone: "muted" },
            { kind: "circle", centre: [1, 1], r: 3, tone: "muted" },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [1, 1], label: "√2", labelAt: "se", tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], label: "0 is inside", labelAt: "sw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C29-Q4",
      source: { kind: "authored" },
      stem: t`On the circle $|z + 2 - 2i| = 1$, the greatest value of $|z - 1 + 2i|$ is:`,
      verify: { kind: "value", inputs: { a: "-2+2*I", r: "1", c: "1-2*I" }, params: { want: "max" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C29-M3", value: "8" },
        { key: "B", text: t`$6$`, correct: true, value: "6" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C29-M1", value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C29-M4", value: "5" },
      ],
      solution: {
        steps: [
          t`The circle has centre $-2 + 2i$ and radius $1$. $|z - 1 + 2i|$ is the distance from $z$ to $1 - 2i$.`,
          t`The centre is $|(-2 + 2i) - (1 - 2i)| = |-3 + 4i| = 5$ from $1 - 2i$.`,
          t`The farthest point is on the far side: the greatest value is $5 + 1 = 6$.`,
        ],
        figure: {
          alt: "The circle with centre −2 + 2i and radius 1, whose centre is 5 from 1 − 2i. The farthest point of the circle from 1 − 2i is on the far side, 5 + 1 = 6 away.",
          view: { x: [-4, 2], y: [-3, 4] },
          elements: [
            { kind: "circle", centre: [-2, 2], r: 1, tone: "muted" },
            { kind: "point", at: [-2, 2], label: "−2 + 2i", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [1, -2], label: "1 − 2i", labelAt: "se" },
            { kind: "line", through: [[1, -2], [-2, 2]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [1, -2], to: [-2.6, 2.8], tone: "good", step: 2 },
            { kind: "point", at: [-2.6, 2.8], label: "farthest", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C29-Q5",
      source: { kind: "authored" },
      stem: t`On the circle $|z - 5| = 3$, the least value of $|z + 3i|$ is:`,
      verify: { kind: "value", inputs: { a: "5", r: "3", c: "-3*I" }, params: { want: "min" } },
      options: [
        { key: "A", text: t`$\sqrt{34} - 3$`, correct: true, value: "-3 + sqrt(34)" },
        { key: "B", text: t`$3 + \sqrt{34}$`, correct: false, misconceptionId: "C29-M1", value: "3 + sqrt(34)" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C29-M3", value: "5" },
        { key: "D", text: t`$\sqrt{34}$`, correct: false, misconceptionId: "C29-M4", value: "sqrt(34)" },
      ],
      solution: {
        steps: [
          t`The circle has centre $5$ and radius $3$. $|z + 3i|$ is the distance from $z$ to $-3i$.`,
          t`The centre is $|5 - (-3i)| = |5 + 3i| = \sqrt{34}$ from $-3i$.`,
          t`$\sqrt{34} > 3$, so $-3i$ is outside the circle: the least value is $\sqrt{34} - 3$.`,
        ],
        figure: {
          alt: "The circle with centre 5 and radius 3. The point −3i is √34 from the centre, outside the circle, so the nearest point of the circle is √34 − 3 away.",
          view: { x: [-1, 9], y: [-4, 4] },
          elements: [
            { kind: "circle", centre: [5, 0], r: 3, tone: "muted" },
            { kind: "point", at: [5, 0], label: "5", labelAt: "se", tone: "muted" },
            { kind: "point", at: [0, -3], label: "−3i", labelAt: "w" },
            { kind: "line", through: [[0, -3], [5, 0]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [0, -3], to: [2.428, -1.543], tone: "good", step: 2 },
            { kind: "point", at: [2.428, -1.543], label: "nearest", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
