import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c30: Concept = {
  id: "C30",
  status: "approved",
  hook: {
    prompt: t`Shade every point closer to $1$ than to $-1$. **What does the region look like?**`,
    reveal: t`Everything to the right of the imaginary axis: the bisector of $1$ and $-1$ splits the plane in two, and you keep $1$'s side.`,
  },
  explanation: {
    intuition: t`An inequality describes a region, not a curve. Draw the boundary first (a circle, line or ray), then decide which side belongs by testing one point. With several conditions, keep only the overlap.`,
    formal: t`- $|z - a| < r$: inside the circle; $|z - a| > r$: outside it
- $|z - a| < |z - b|$: the half-plane on $a$'s side of the perpendicular bisector
- $\operatorname{Re} z > c$ or $\operatorname{Im} z < c$: half-planes
- $\alpha < \arg z < \beta$: a sector

**Areas:** a disc of radius $r$ has area $\pi r^2$; a sector of angle $\phi$ has area $\dfrac{\phi}{2\pi}\cdot\pi r^2$. With several conditions, find the area of the overlap only.`,
    worked: {
      prompt: t`Find the area of the region $|z| \le 3,\ \operatorname{Im} z \ge 0,\ \operatorname{Re} z \ge 0$.`,
      steps: [
        t`The disc has radius 3.`,
        t`The two half-planes keep a quarter of it.`,
        t`Area $= \dfrac14\cdot\pi\cdot 3^2 = \dfrac{9\pi}4$.`,
      ],
      answer: t`$\dfrac{9\pi}4$`,
      figure: {
        alt: "The disc of radius 3 centred at 0; the conditions Im z ≥ 0 and Re z ≥ 0 keep the quarter in the first quadrant, area 9π/4.",
        view: { x: [-3.8, 3.8], y: [-3.8, 3.8] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 3, tone: "muted", label: "|z| = 3", labelAt: "ne", step: 1 },
          { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }, { kind: "halfPlane", through: [[0, 1], [0, 0]] }], step: 2 },
          { kind: "label", at: [1.3, 1.1], label: "9π/4", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The disc |z − 1 − i| ≤ 2 and the half-plane Re z ≥ 1 overlap in the right half of the disc, shaded.",
      view: { x: [-1.6, 3.8], y: [-1.6, 3.6] },
      elements: [
        { kind: "circle", centre: [1, 1], r: 2, tone: "muted", step: 1 },
        { kind: "line", through: [[1, 0], [1, 1]], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [1, -1.3], label: "Re z = 1", labelAt: "e", tone: "muted", step: 2 },
        { kind: "region", within: [{ kind: "disc", centre: [1, 1], r: 2 }, { kind: "halfPlane", through: [[1, 1], [1, 0]] }], step: 3 },
        { kind: "label", at: [2, 1], label: "overlap", step: 3 },
      ],
    },
    visualSpec: t`Toggle conditions on and off; each shades its region in its own colour, and the overlap that satisfies all of them is highlighted with its area shown.`,
  },
  misconceptions: [
    {
      id: "C30-M1",
      mistake: "Shading the wrong side of the bisector",
      remediation: t`$|z - a| < |z - b|$ keeps the points closer to $a$. Test $a$ itself: it is always in the region.`,
      fallback: { kind: "concept", id: "C25" },
    },
    {
      id: "C30-M2",
      mistake: t`Using $\pi r$ for the area`,
      remediation: t`The area of a disc is $\pi r^2$.`,
      fallback: { kind: "ext", topic: "area of a circle" },
    },
    {
      id: "C30-M3",
      mistake: "Ignoring one of the conditions",
      remediation: "Every condition must hold: keep only the overlap of the regions.",
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C30-M4",
      mistake: t`Using the circumference $2\pi r$ instead of the area`,
      remediation: t`$2\pi r$ is the length round the edge; the area is $\pi r^2$.`,
      fallback: { kind: "ext", topic: "area of a circle" },
    },
    {
      id: "C30-M5",
      mistake: "Misreading the sign of a point",
      remediation: t`$|z + i| = |z - (-i)|$ is the distance from $-i$.`,
      fallback: { kind: "concept", id: "C25" },
    },
    {
      id: "C30-M6",
      mistake: "Flipping the disc inequality",
      remediation: t`$|z - a| \le r$ means inside the circle (or on it).`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C30-M7",
      mistake: "Flipping a half-plane",
      remediation: t`$\operatorname{Im} z \ge 0$ means on or above the real axis.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "'Ignoring a condition' (C30-M3) can't be tested by which-point items, because its region contains the correct one. Area items test it (C30-Q2, C30-Q3).",
  ],
  items: [
    {
      id: "C30-Q1",
      source: { kind: "authored" },
      stem: t`The area of the region $|z - 1 - i| \le 3$ is:`,
      verify: { kind: "value", inputs: { r: "3", f: "1" }, params: { op: "area" } },
      options: [
        { key: "A", text: t`$3 \pi$`, correct: false, misconceptionId: "C30-M2", value: "3*pi" },
        { key: "B", text: t`$6 \pi$`, correct: false, misconceptionId: "C30-M4", value: "6*pi" },
        { key: "C", text: t`$9 \pi$`, correct: true, value: "9*pi" },
      ],
      solution: {
        steps: [
          t`$|z - 1 - i| \le 3$ is a disc of radius $3$ (centre $1 + i$).`,
          t`Area $= \pi \cdot 3^2 = 9\pi$.`,
        ],
        figure: {
          alt: "The disc with centre 1 + i and radius 3, shaded: area 9π.",
          view: { x: [-2.6, 4.6], y: [-2.6, 4.6] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [1, 1], r: 3 }], step: 1 },
            { kind: "circle", centre: [1, 1], r: 3, step: 1 },
            { kind: "segment", from: [1, 1], to: [4, 1], label: "3", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [0.5, 2.2], label: "9π", step: 2 },
          ],
        },
      },
    },
    {
      id: "C30-Q2",
      source: { kind: "authored" },
      stem: t`The area of the region $|z| \le 2,\ \operatorname{Re} z \ge 0$ is:`,
      verify: { kind: "value", inputs: { r: "2", f: "1/2" }, params: { op: "area" } },
      options: [
        { key: "A", text: t`$2 \pi$`, correct: true, value: "2*pi" },
        { key: "B", text: t`$4 \pi$`, correct: false, misconceptionId: "C30-M3", value: "4*pi" },
        { key: "C", text: t`$\pi$`, correct: false, misconceptionId: "C30-M2", value: "pi" },
      ],
      solution: {
        steps: [
          t`$|z| \le 2$ is a disc of radius $2$.`,
          t`$\operatorname{Re} z \ge 0$ keeps the right half of it.`,
          t`Area $= \dfrac12 \cdot \pi \cdot 2^2 = 2\pi$.`,
        ],
        figure: {
          alt: "The disc of radius 2 centred at 0, with its right half shaded: area 2π.",
          view: { x: [-2.8, 2.8], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "halfPlane", through: [[0, 1], [0, 0]] }], step: 2 },
            { kind: "label", at: [1, 0.6], label: "2π", step: 3 },
          ],
        },
      },
    },
    {
      id: "C30-Q3",
      source: { kind: "authored" },
      stem: t`The area of the region $|z| \le 4,\ 0 \le \arg z \le \dfrac\pi2$ is:`,
      verify: { kind: "value", inputs: { r: "4", f: "1/4" }, params: { op: "area" } },
      options: [
        { key: "A", text: t`$4 \pi$`, correct: true, value: "4*pi" },
        { key: "B", text: t`$16 \pi$`, correct: false, misconceptionId: "C30-M3", value: "16*pi" },
        { key: "C", text: t`$\pi$`, correct: false, misconceptionId: "C30-M2", value: "pi" },
        { key: "D", text: t`$2 \pi$`, correct: false, misconceptionId: "C30-M4", value: "2*pi" },
      ],
      solution: {
        steps: [
          t`$|z| \le 4$ is a disc of radius $4$.`,
          t`$0 \le \arg z \le \dfrac\pi2$ keeps the quarter in the first quadrant.`,
          t`Area $= \dfrac14 \cdot \pi \cdot 4^2 = 4\pi$.`,
        ],
        figure: {
          alt: "The disc of radius 4 centred at 0, with the first-quadrant quarter shaded: area 4π.",
          view: { x: [-4.8, 4.8], y: [-4.8, 4.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 4 }, { kind: "sector", centre: [0, 0], from: 0, to: 90 }], step: 2 },
            { kind: "label", at: [1.8, 1.6], label: "4π", step: 3 },
          ],
        },
      },
    },
    {
      id: "C30-Q4",
      source: { kind: "authored" },
      stem: t`Which point satisfies $|z - 1| < |z + i|$?`,
      verify: { kind: "point", inputs: { a: "1", b: "-I" }, params: { op: "closer" } },
      options: [
        { key: "A", text: t`$-1 - i$`, correct: false, misconceptionId: "C30-M1", value: "-1-I" },
        { key: "B", text: t`$2 - 2 i$`, correct: false, misconceptionId: "C30-M5", value: "2-2*I" },
        { key: "C", text: t`$1 + i$`, correct: true, value: "1+I" },
      ],
      solution: {
        steps: [
          t`$|z - 1| < |z + i|$: $z$ is closer to $1$ than to $-i$, so it lies on $1$'s side of their perpendicular bisector, the line $y = -x$.`,
          t`Check $1 + i$: its distance from $1$ is $1$, and from $-i$ it is $|1 + 2i| = \sqrt5$. It is closer to $1$, so it satisfies the inequality.`,
        ],
        figure: {
          alt: "The points 1 and −i and their perpendicular bisector, the line y = −x. The shaded side, nearer 1, is the region. The point 1 + i is 1 from 1 and √5 from −i, so it is in the region.",
          view: { x: [-2.5, 2.8], y: [-2.5, 2.5] },
          elements: [
            { kind: "point", at: [1, 0], label: "1", labelAt: "se" },
            { kind: "point", at: [0, -1], label: "−i", labelAt: "sw" },
            { kind: "line", through: [[-1, 1], [1, -1]], dashed: true, tone: "muted", label: "y = −x", labelAt: "ne", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[-1, 1], [1, -1]] }], step: 1 },
            { kind: "segment", from: [1, 1], to: [1, 0], label: "1 away", labelAt: "e", tone: "good", step: 2 },
            { kind: "segment", from: [1, 1], to: [0, -1], label: "√5 away", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C30-Q5",
      source: { kind: "authored" },
      stem: t`Which point lies in the region $|z - 1| \le 1,\ \operatorname{Im} z \ge 0$?`,
      verify: { kind: "point", inputs: { a: "1", r: "1" }, params: { op: "disc_half" } },
      options: [
        { key: "A", text: t`$1 + \frac{i}{2}$`, correct: true, value: "1+I/2" },
        { key: "B", text: t`$1 - \frac{i}{2}$`, correct: false, misconceptionId: "C30-M7", value: "1-I/2" },
        { key: "C", text: t`$3 i$`, correct: false, misconceptionId: "C30-M6", value: "3*I" },
      ],
      solution: {
        steps: [
          t`$|z - 1| \le 1$ is the disc with centre $1$ and radius $1$; $\operatorname{Im} z \ge 0$ keeps its upper half.`,
          t`Check $1 + \dfrac i2$: it is $\dfrac12$ from the centre, so inside the disc, and its imaginary part $\dfrac12$ is not negative. It lies in the region.`,
        ],
        figure: {
          alt: "The upper half of the disc with centre 1 and radius 1, shaded. The point 1 + i/2 is inside it.",
          view: { x: [-0.8, 2.8], y: [-1.4, 1.6] },
          elements: [
            { kind: "circle", centre: [1, 0], r: 1, tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [1, 0], r: 1 }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [1, 0.5], label: "1 + i/2", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
