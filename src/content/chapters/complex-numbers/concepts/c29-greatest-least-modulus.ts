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
    intuition: t`The nearest and farthest points of a circle from a point $c$ lie on the line through $c$ and the centre. So add or subtract the radius from the distance to the centre. If $c$ is inside a disc, the least distance is $0$.`,
    formal: t`For $z$ on the circle $|z - a| = r$, with $d = |a - c|$:
- greatest $|z - c| = d + r$
- least $|z - c| = |d - r|$

For the disc $|z - a| \le r$ the greatest value is the same, $d + r$. The least is $0$ if $c$ is inside ($d < r$), and $d - r$ otherwise.

Always check that the extreme point is allowed by the region.`,
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
      alt: "A circle with centre a and radius 1.5, and a point c at distance 5 from the centre. Along the line through c and a, the nearest point of the circle is 5 − 1.5 = 3.5 from c and the farthest is 5 + 1.5 = 6.5.",
      view: { x: [-1, 7.5], y: [-1, 5.5] },
      elements: [
        { kind: "point", at: [0, 0], label: "c", labelAt: "sw" },
        { kind: "circle", centre: [4, 3], r: 1.5, tone: "muted", step: 1 },
        { kind: "point", at: [4, 3], label: "a", labelAt: "se", tone: "muted", step: 1 },
        { kind: "line", through: [[0, 0], [4, 3]], dashed: true, tone: "muted", step: 2 },
        { kind: "segment", from: [0, 0], to: [2.8, 2.1], tone: "good", step: 3 },
        { kind: "point", at: [2.8, 2.1], label: "nearest", labelAt: "nw", tone: "good", step: 3 },
        { kind: "segment", from: [2.8, 2.1], to: [5.2, 3.9], step: 4 },
        { kind: "point", at: [5.2, 3.9], label: "farthest", labelAt: "e", step: 4 },
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
