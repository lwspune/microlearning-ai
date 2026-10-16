import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The initial arm along the positive real axis, `len` long, labelled above the axis at `labelX`. */
const initialArm = (len: number, labelX: number): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [len, 0], tone: "good" },
  { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good" },
];

/** The point r from 0 at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

export const c30: Concept = {
  id: "C30",
  status: "approved",
  hook: {
    prompt: t`Shade every point closer to $1$ than to $-1$. **What does the region look like?**`,
    reveal: t`Everything to the right of the imaginary axis: the bisector of $1$ and $-1$ splits the plane in two, and you keep $1$'s side.`,
  },
  explanation: {
    intuition: [
      t`An equation such as $|z - 1 - i| = 2$ gives a curve: the circle with centre $1 + i$, radius $2$.`,
      t`An inequality such as $|z - 1 - i| \le 2$ gives a **region**, a whole patch of the plane.`,
      t`The curve is the region's **boundary**, its edge; a boundary can be a circle, a line or a ray.`,
      t`To find which side belongs, test one point: the centre $1 + i$ is $0 \le 2$ away, so the inside belongs.`,
      t`A second condition, $\operatorname{Re} z \ge 1$, keeps the points on or right of the line $\operatorname{Re} z = 1$.`,
      t`With several conditions, keep only their **overlap**, where all of them hold: here the right half of the inside.`,
    ],
    formal: [
      {
        title: "Inside or outside a circle",
        points: [
          t`Recall: $|z - a| = r$ is the circle with centre $a$ and radius $r$.`,
          t`$|z - a| < r$ keeps the points less than $r$ from $a$: the inside of the circle.`,
          t`This inside is a **disc**; $|z - a| \le r$ is the disc with its circle included.`,
          t`$|z - a| > r$ keeps the points more than $r$ from $a$: the outside of the circle.`,
        ],
        figure: {
          alt: "The circle with centre a and radius r. The inside, |z − a| < r, is shaded: the disc. Then the outside, |z − a| > r, is shaded in a fainter colour.",
          view: { x: [-1.5, 5.5], y: [-1.6, 4] },
          elements: [
            { kind: "circle", centre: [2, 1], r: 2, step: 1 },
            { kind: "point", at: [2, 1], label: "a", labelAt: "sw", step: 1 },
            { kind: "segment", from: [2, 1], to: [4, 1], label: "r", labelAt: "n", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [2, 1], r: 2 }], step: 2 },
            { kind: "label", at: [2, 2.1], label: "|z − a| < r", labelAt: "n", step: 2 },
            { kind: "label", at: [2, -0.3], label: "disc", labelAt: "s", step: 3 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [2, 1], r: 2 }], tone: "muted", step: 4 },
            { kind: "label", at: [-1.3, 3.6], label: "|z − a| > r", labelAt: "e", tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "Nearer one point than another",
        points: [
          t`Recall: $|z - a| = |z - b|$ is the perpendicular bisector: the points equally far from $a$ and $b$.`,
          t`$|z - a| < |z - b|$ keeps the points $z$ closer to $a$ than to $b$.`,
          t`They fill a **half-plane**, all of the plane on one side of a line: here $a$'s side.`,
          t`To check the side, test $a$ itself: it is $0$ from $a$, so it is always in.`,
        ],
        figure: {
          alt: "The points a and b and the dashed perpendicular bisector between them. A point z is joined to both: it is nearer a. The half-plane on a's side of the bisector is shaded.",
          view: { x: [-3, 3.5], y: [-2.5, 3] },
          elements: [
            { kind: "point", at: [-1, -1], label: "a", labelAt: "sw", step: 1 },
            { kind: "point", at: [2, 1], label: "b", labelAt: "se", step: 1 },
            { kind: "line", through: [[0.5, 0], [-1.5, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-1.5, 1.5], to: [-1, -1], tone: "good", step: 2 },
            { kind: "segment", from: [-1.5, 1.5], to: [2, 1], tone: "muted", step: 2 },
            { kind: "point", at: [-1.5, 1.5], label: "z", labelAt: "nw", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0.5, 0], [-1.5, 3]] }], step: 3 },
            { kind: "label", at: [-2.9, -2.2], label: "nearer a", labelAt: "e", step: 3 },
          ],
        },
      },
      {
        title: "Half-planes from Re and Im",
        points: [
          t`Recall: $\operatorname{Re} z$ is the real part of $z$, and $\operatorname{Im} z$ its imaginary part.`,
          t`$\operatorname{Re} z > c$ is the half-plane right of the vertical line $\operatorname{Re} z = c$; here $c = 1$.`,
          t`$\operatorname{Im} z < c$ is the half-plane below the horizontal line $\operatorname{Im} z = c$; here $c = 2$.`,
          t`In the same way, $\operatorname{Re} z < c$ is left of its line, and $\operatorname{Im} z > c$ above it.`,
          t`With $\ge$ or $\le$, the line belongs too: $\operatorname{Im} z \ge 0$ is on or above the real axis.`,
        ],
        figure: {
          alt: "The dashed vertical line Re z = 1 with the half-plane to its right shaded, then the dashed horizontal line Im z = 2 with the half-plane below it shaded in a fainter colour.",
          view: { x: [-2, 4], y: [-1.5, 3.5] },
          elements: [
            { kind: "line", through: [[1, 3], [1, -1]], dashed: true, tone: "muted", label: "Re z = 1", labelAt: "e", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[1, 0], [1, -1]] }], step: 2 },
            { kind: "line", through: [[-1, 2], [3, 2]], dashed: true, tone: "muted", label: "Im z = 2", labelAt: "n", step: 3 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[1, 2], [0, 2]] }], tone: "muted", step: 3 },
          ],
        },
      },
      {
        title: "Between two arguments: a sector",
        points: [
          t`Recall: $\arg z$ is the angle an arm turns, from the positive real axis to the arrow to $z$.`,
          t`$\arg z = \alpha$ is a **ray**: a half-line starting at $0$, at angle $\alpha$.`,
          t`$\alpha < \arg z < \beta$ keeps the points whose arrows lie between the rays at $\alpha$ and $\beta$.`,
          t`This wedge is a **sector**: the slice of the plane between two rays from one point.`,
        ],
        figure: {
          alt: "An arm turns from the initial arm on the positive real axis to the arrow to z, tracing arg z. Then the ray arg z = α, and an arm turns on from it to the ray arg z = β. The wedge between the two rays, a sector, is shaded; z lies inside it.",
          view: { x: [-1.5, 3.5], y: [-1, 3.4] },
          elements: [
            ...initialArm(2.8, 2.45),
            { kind: "vector", to: tip(1.8, 50), tone: "muted", step: 1 },
            { kind: "turn", r: 1.8, to: 50, step: 1 },
            { kind: "point", at: tip(1.8, 50), label: "z", labelAt: "e", step: 1 },
            { kind: "label", at: tip(0.8, 22), label: "arg z", labelAt: "e", step: 1 },
            { kind: "ray", from: [0, 0], angle: 30, label: "arg z = α", labelAt: "se", step: 2 },
            { kind: "turn", r: 2.6, from: 30, to: 75, tone: "muted", step: 3 },
            { kind: "ray", from: [0, 0], angle: 75, label: "arg z = β", labelAt: "w", step: 3 },
            { kind: "region", within: [{ kind: "sector", centre: [0, 0], from: 30, to: 75 }], step: 4 },
            { kind: "label", at: tip(2.6, 56), label: "sector", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "Areas of discs and sectors",
        points: [
          t`A disc of radius $r$ has area $\pi r^2$.`,
          t`That is not $2\pi r$: $2\pi r$ is the **circumference**, the length round the edge.`,
          t`A sector of the disc, between two radii $\phi$ radians apart, is $\dfrac{\phi}{2\pi}$ of a whole turn.`,
          t`So its area is $\dfrac{\phi}{2\pi}\cdot\pi r^2$.`,
          t`With several conditions, such as $|z| \le r$ and $0 \le \arg z \le \phi$, find the area of the overlap only.`,
        ],
        figure: {
          alt: "A disc of radius r centred at 0, area πr², with its edge, the circumference 2πr. An arm turns from the radius on the positive real axis through the angle φ, and the sector between the two radii is shaded: its area is φ/2π of πr².",
          view: { x: [-2.8, 2.8], y: [-3.2, 2.8] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }], tone: "muted", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [2, 0], label: "r", labelAt: "n", tone: "good", step: 1 },
            { kind: "label", at: [-0.9, -1], label: "πr²", step: 1 },
            { kind: "label", at: [0, -2.15], label: "2πr round the edge", labelAt: "s", tone: "muted", step: 2 },
            { kind: "turn", r: 2, to: 120, label: "φ", labelAt: "nw", step: 3 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 0, to: 120 }], step: 4 },
            { kind: "label", at: [0.1, 0.9], label: "φ/2π · πr²", labelAt: "e", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the area of the region $|z| \le 3$, $\operatorname{Im} z \ge 0$, $\operatorname{Re} z \ge 0$.`,
      steps: [
        t`The disc has radius 3.`,
        t`The two half-planes keep a quarter of it.`,
        t`Area $= \dfrac14\cdot\pi\cdot 3^2$, which is $\dfrac{9\pi}4$.`,
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
      alt: "The circle |z − 1 − i| = 2, centre 1 + i, is the boundary. Testing the centre shows the inside belongs, so the inside is shaded. The dashed line Re z = 1 is added, and the overlap of the inside with the half-plane Re z ≥ 1, the right half, is shaded more strongly.",
      view: { x: [-1.6, 3.8], y: [-1.6, 3.6] },
      elements: [
        { kind: "circle", centre: [1, 1], r: 2, step: 1 },
        { kind: "point", at: [1, 1], label: "1 + i", labelAt: "w", step: 1 },
        { kind: "label", at: [-1.5, 3.35], label: "|z − 1 − i| = 2", labelAt: "e", step: 1 },
        { kind: "label", at: [-0.414, -0.414], label: "boundary", labelAt: "sw", step: 3 },
        { kind: "region", within: [{ kind: "disc", centre: [1, 1], r: 2 }], tone: "muted", step: 4 },
        { kind: "line", through: [[1, 0], [1, 1]], dashed: true, tone: "muted", step: 5 },
        { kind: "label", at: [1, -1.3], label: "Re z = 1", labelAt: "e", tone: "muted", step: 5 },
        { kind: "region", within: [{ kind: "disc", centre: [1, 1], r: 2 }, { kind: "halfPlane", through: [[1, 1], [1, 0]] }], step: 6 },
        { kind: "label", at: [2, 0.6], label: "overlap", step: 6 },
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
    {
      id: "C30-M8",
      mistake: "Using the diameter in place of the radius",
      remediation: t`In $|z - a| \le r$ the number $r$ is already the radius, so the area is $\pi r^2$, not $\pi(2r)^2$.`,
      fallback: { kind: "ext", topic: "area of a circle" },
    },
    {
      id: "C30-M9",
      mistake: t`Reading $|z - a|$ as the distance from $-a$`,
      remediation: t`$|z - a|$ is the distance from $a$ itself: $|z - 1|$ is measured from $1$, not from $-1$.`,
      fallback: { kind: "concept", id: "C25" },
    },
    {
      id: "C30-M10",
      mistake: "Reading every inequality sign backwards",
      remediation: t`$\le$ means less than or equal: $|z - a| \le r$ is inside the circle, and $\operatorname{Im} z \ge 0$ is on or above the real axis.`,
      fallback: { kind: "ext", topic: "inequalities" },
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
        { key: "D", text: t`$36 \pi$`, correct: false, misconceptionId: "C30-M8", value: "36*pi" },
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
        { key: "D", text: t`$8 \pi$`, correct: false, misconceptionId: "C30-M8", value: "8*pi" },
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
        { key: "D", text: t`$-1 + i$`, correct: false, misconceptionId: "C30-M9", value: "-1+I" },
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
        { key: "D", text: t`$1 - 2 i$`, correct: false, misconceptionId: "C30-M10", value: "1-2*I" },
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
