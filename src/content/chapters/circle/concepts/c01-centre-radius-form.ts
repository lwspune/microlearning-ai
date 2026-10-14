import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A circle has equation $(x + 1)^2 + (y - 5)^2 = 4$. **Is its centre $(1, -5)$, and is its radius $4$?**`,
    reveal: t`Neither. $x + 1 = x - (-1)$, so the centre is $(-1, 5)$: the signs inside are opposite to the centre's. The right side is $r^2 = 4$, so the radius is $2$.`,
  },
  explanation: {
    intuition: t`A circle is every point at the same distance $r$ from its centre. Write that distance with the distance formula, square both sides, and you have the circle's equation. Inside the brackets you subtract the centre's coordinates, so a centre at $(-3, 2)$ shows up as $x + 3$ and $y - 2$. On the right sits $r^2$, never $r$.`,
    formal: t`**Centre–radius form.** The circle with centre $C(h, k)$ and radius $r$ is
$$(x - h)^2 + (y - k)^2 = r^2$$
A point $P(x, y)$ is on it exactly when $CP = r$. Centre at the origin: $x^2 + y^2 = r^2$.

**Reading an equation.** The centre's signs are opposite to the ones you see, and the radius is the square root of the right side: $(x + 4)^2 + (y - 1)^2 = 9$ has centre $(-4, 1)$ and radius $3$.

**Centre and a point.** If the circle passes through $P$, then $r^2 = CP^2$ by the distance formula. The equation needs $r^2$, and so does the area $\pi r^2$: no square root needed.

**Touching an axis.** The radius is the centre's distance from that axis: touching the X-axis, $r = |k|$; touching the Y-axis, $r = |h|$.

**Touching both axes.** $|h| = |k| = r$, with the signs set by the quadrant: $(r, r)$, $(-r, r)$, $(-r, -r)$, $(r, -r)$ in quadrants I to IV.`,
    worked: {
      prompt: t`Find the equation of the circle with centre $(-3, 1)$ that passes through the point $(5, 2)$.`,
      steps: [
        t`With $C(-3, 1)$ and $P(5, 2)$: $r^2 = CP^2 = (5 - (-3))^2 + (2 - 1)^2 = 64 + 1 = 65$.`,
        t`With $h = -3$ and $k = 1$: $x - h = x + 3$ and $y - k = y - 1$.`,
        t`So the circle is $(x + 3)^2 + (y - 1)^2 = 65$. Expanded, $x^2 + y^2 + 6x - 2y - 55 = 0$.`,
      ],
      answer: t`$(x + 3)^2 + (y - 1)^2 = 65$, that is $x^2 + y^2 + 6x - 2y - 55 = 0$.`,
      figure: {
        alt: "Centre C(−3, 1) and the point P(5, 2), joined by the radius CP with r² = 65. The circle (x + 3)² + (y − 1)² = 65 is drawn through P around C.",
        axes: "xy",
        view: { x: [-14, 9], y: [-10, 11] },
        elements: [
          { kind: "point", at: [-3, 1], label: "C(−3, 1)", labelAt: "nw", step: 1 },
          { kind: "point", at: [5, 2], label: "P(5, 2)", labelAt: "e", step: 1 },
          { kind: "segment", from: [-3, 1], to: [5, 2], step: 1 },
          { kind: "label", at: [3, 1.75], label: "r² = 65", labelAt: "n", step: 1 },
          { kind: "circle", centre: [-3, 1], r: 8.062, tone: "good", step: 3 },
          { kind: "label", at: [-6.5, -8.3], label: "(x + 3)² + (y − 1)² = 65", labelAt: "s", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A circle with centre C(h, k) and a point P(x, y) on it. The radius CP has length r. Dashed legs from C across and then up to P have lengths x − h and y − k, so by the distance formula (x − h)² + (y − k)² = r².",
      axes: "xy",
      view: { x: [-3, 9.5], y: [-5, 8.5] },
      elements: [
        { kind: "point", at: [3, 2], label: "C(h, k)", labelAt: "sw", step: 1 },
        { kind: "point", at: [6, 6], label: "P(x, y)", labelAt: "ne", step: 2 },
        { kind: "segment", from: [3, 2], to: [6, 6], label: "r", labelAt: "nw", step: 2 },
        { kind: "segment", from: [3, 2], to: [6, 2], dashed: true, tone: "muted", label: "x − h", labelAt: "s", step: 3 },
        { kind: "segment", from: [6, 2], to: [6, 6], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [6, 2.9], label: "y − k", labelAt: "e", tone: "muted", step: 3 },
        { kind: "circle", centre: [3, 2], r: 5, tone: "accent", step: 4 },
        { kind: "label", at: [4, -3.4], label: "(x − h)² + (y − k)² = r²", labelAt: "s", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag the centre and the radius handle: the equation $(x - h)^2 + (y - k)^2 = r^2$ updates live, its signs flipping as the centre crosses an axis.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Copies the centre's signs into the brackets: centre $(h, k)$ gives $(x + h)^2 + (y + k)^2$, and $(x - a)^2$ is read as a centre at $-a$`,
      remediation: t`The brackets hold $x - h$ and $y - k$: the centre's coordinates are subtracted. So the signs inside are opposite to the centre's: centre $(-5, 2)$ gives $(x + 5)^2 + (y - 2)^2$.`,
      fallback: { kind: "ext", topic: "distance formula" },
    },
    {
      id: "C01-M2",
      mistake: t`Takes the right-hand side as $r$, not $r^2$`,
      remediation: t`The right side is $r^2$. Square the radius when you write the equation, and take the square root of the right side when you read the radius off.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`For a circle touching an axis, takes the wrong coordinate as the radius: $|h|$ for the X-axis, $|k|$ for the Y-axis`,
      remediation: t`The radius to the touching point is perpendicular to the axis. A circle touching the X-axis has $r = |k|$, the centre's height above or below it; touching the Y-axis, $r = |h|$.`,
      fallback: { kind: "ext", topic: "distance of a point from the axes" },
    },
    {
      id: "C01-M4",
      mistake: t`For a circle touching both axes, puts the centre at $(r, r)$ whatever the quadrant`,
      remediation: t`The centre is $r$ from each axis, on the side the quadrant says: $(r, r)$, $(-r, r)$, $(-r, -r)$ or $(r, -r)$ in quadrants I to IV.`,
      fallback: { kind: "ext", topic: "signs of coordinates in the quadrants" },
    },
    {
      id: "C01-M5",
      mistake: t`Treats $r^2$ as $2r$: doubles where it should square`,
      remediation: t`$r^2$ means $r \times r$, not $2r$. A radius of $7$ gives $r^2 = 49$, a right side of $49$ means $r = 7$, and the area is $\pi r^2$, not $2\pi r$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 gives the key when the centre is the origin: draw diagnosing items with a centre off the origin.",
    t`C01-M2 gives the key when $r = 1$, and C01-M5 when $r = 2$: avoid those radii.`,
    t`C01-M3 gives the key when $|h| = |k|$. C01-M4 gives the key in quadrant I and matches C01-M1 in quadrant III, so diagnose it in quadrant II or IV.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q1(ii)" },
      stem: t`The equation of the circle with centre $(-3, -2)$ and radius $6$ is:`,
      verify: { kind: "locus", inputs: { h: "-3", k: "-2", r: "6" }, params: { ask: "eq_r" } },
      options: [
        { key: "A", text: t`$\left(x + 3\right)^2 + \left(y + 2\right)^2 = 36$`, correct: true, value: "x**2 + 6*x + y**2 + 4*y - 23" },
        { key: "B", text: t`$\left(x - 3\right)^2 + \left(y - 2\right)^2 = 36$`, correct: false, misconceptionId: "C01-M1", value: "x**2 - 6*x + y**2 - 4*y - 23" },
        { key: "C", text: t`$\left(x + 3\right)^2 + \left(y + 2\right)^2 = 6$`, correct: false, misconceptionId: "C01-M2", value: "x**2 + 6*x + y**2 + 4*y + 7" },
        { key: "D", text: t`$\left(x + 3\right)^2 + \left(y + 2\right)^2 = 12$`, correct: false, misconceptionId: "C01-M5", value: "x**2 + 6*x + y**2 + 4*y + 1" },
      ],
      solution: {
        steps: [
          t`$h = -3$ and $k = -2$, so $x - h = x + 3$ and $y - k = y + 2$.`,
          t`$r^2 = 6^2 = 36$, so the circle is $(x + 3)^2 + (y + 2)^2 = 36$.`,
        ],
        figure: {
          alt: "The centre C(−3, −2), a radius of 6 drawn straight up from it, and the circle (x + 3)² + (y + 2)² = 36 around C.",
          axes: "xy",
          view: { x: [-11, 6], y: [-10.5, 6] },
          elements: [
            { kind: "point", at: [-3, -2], label: "C(−3, −2)", labelAt: "sw", step: 1 },
            { kind: "segment", from: [-3, -2], to: [-3, 4], label: "r = 6", labelAt: "e", step: 2 },
            { kind: "circle", centre: [-3, -2], r: 6, tone: "good", step: 2 },
            { kind: "label", at: [-5.6, -8.3], label: "(x + 3)² + (y + 2)² = 36", labelAt: "s", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q1(iv)" },
      stem: t`The equation of the circle with centre $(-3, -3)$ that passes through the point $(-3, -6)$ is:`,
      verify: { kind: "locus", inputs: { h: "-3", k: "-3", px: "-3", py: "-6" }, params: { ask: "eq_pt" } },
      options: [
        { key: "A", text: t`$\left(x + 3\right)^2 + \left(y + 3\right)^2 = 9$`, correct: true, value: "x**2 + 6*x + y**2 + 6*y + 9" },
        { key: "B", text: t`$\left(x - 3\right)^2 + \left(y - 3\right)^2 = 117$`, correct: false, misconceptionId: "C01-M1", value: "x**2 - 6*x + y**2 - 6*y - 99" },
        { key: "C", text: t`$\left(x + 3\right)^2 + \left(y + 3\right)^2 = 3$`, correct: false, misconceptionId: "C01-M2", value: "x**2 + 6*x + y**2 + 6*y + 15" },
        { key: "D", text: t`$\left(x + 3\right)^2 + \left(y + 3\right)^2 = 6$`, correct: false, misconceptionId: "C01-M5", value: "x**2 + 6*x + y**2 + 6*y + 12" },
      ],
      solution: {
        steps: [
          t`With $C(-3, -3)$ and $P(-3, -6)$: $r^2 = CP^2 = (-3 - (-3))^2 + (-6 - (-3))^2 = 0 + 9 = 9$.`,
          t`$x - (-3) = x + 3$ and $y - (-3) = y + 3$, so the circle is $(x + 3)^2 + (y + 3)^2 = 9$.`,
        ],
        figure: {
          alt: "The centre C(−3, −3) and the point P(−3, −6) straight below it, 3 apart, and the circle (x + 3)² + (y + 3)² = 9 through P.",
          axes: "xy",
          view: { x: [-9, 2.5], y: [-8.5, 2] },
          elements: [
            { kind: "point", at: [-3, -3], label: "C(−3, −3)", labelAt: "ne", step: 1 },
            { kind: "point", at: [-3, -6], label: "P(−3, −6)", labelAt: "sw", step: 1 },
            { kind: "segment", from: [-3, -3], to: [-3, -6], label: "r = 3", labelAt: "w", step: 1 },
            { kind: "circle", centre: [-3, -3], r: 3, tone: "good", step: 2 },
            { kind: "label", at: [-4.2, 0.1], label: "(x + 3)² + (y + 3)² = 9", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q2(iii)" },
      stem: t`The centre and radius of the circle $\left(x - \dfrac{1}{2}\right)^2 + \left(y + \dfrac{1}{3}\right)^2 = \dfrac{1}{36}$ are:`,
      verify: { kind: "value", inputs: { h: "1/2", k: "-1/3", s: "1/36" }, params: { ask: "read" } },
      options: [
        { key: "A", text: t`Centre $\left(\frac{1}{2}, -\frac{1}{3}\right)$, radius $\frac{1}{36}$`, correct: false, misconceptionId: "C01-M2", value: "((1/2, -1/3), 1/36)" },
        { key: "B", text: t`Centre $\left(\frac{1}{2}, -\frac{1}{3}\right)$, radius $\frac{1}{72}$`, correct: false, misconceptionId: "C01-M5", value: "((1/2, -1/3), 1/72)" },
        { key: "C", text: t`Centre $\left(\frac{1}{2}, -\frac{1}{3}\right)$, radius $\frac{1}{6}$`, correct: true, value: "((1/2, -1/3), 1/6)" },
        { key: "D", text: t`Centre $\left(-\frac{1}{2}, \frac{1}{3}\right)$, radius $\frac{1}{6}$`, correct: false, misconceptionId: "C01-M1", value: "((-1/2, 1/3), 1/6)" },
      ],
      solution: {
        steps: [
          t`Write it as $\left(x - \frac{1}{2}\right)^2 + \left(y - \left(-\frac{1}{3}\right)\right)^2$: the centre is $\left(\frac{1}{2}, -\frac{1}{3}\right)$.`,
          t`$r^2 = \frac{1}{36}$, so the radius is $r = \frac{1}{6}$.`,
        ],
        figure: {
          alt: "A small circle in the fourth quadrant with centre C(1/2, −1/3) and radius 1/6.",
          axes: "xy",
          view: { x: [-0.15, 0.85], y: [-0.65, 0.12] },
          elements: [
            { kind: "point", at: [0.5, -0.333], label: "C(1/2, −1/3)", labelAt: "s", step: 1 },
            { kind: "segment", from: [0.5, -0.333], to: [0.667, -0.333], label: "r = 1/6", labelAt: "n", step: 2 },
            { kind: "circle", centre: [0.5, -0.333], r: 0.1667, tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q3(ii)" },
      stem: t`The equation of the circle with centre $(-2, 3)$ that touches the X-axis is:`,
      verify: { kind: "locus", inputs: { h: "-2", k: "3" }, params: { ask: "touch", axis: "x" } },
      options: [
        { key: "A", text: t`$\left(x + 2\right)^2 + \left(y - 3\right)^2 = 9$`, correct: true, value: "x**2 + 4*x + y**2 - 6*y + 4" },
        { key: "B", text: t`$\left(x - 2\right)^2 + \left(y + 3\right)^2 = 9$`, correct: false, misconceptionId: "C01-M1", value: "x**2 - 4*x + y**2 + 6*y + 4" },
        { key: "C", text: t`$\left(x + 2\right)^2 + \left(y - 3\right)^2 = 3$`, correct: false, misconceptionId: "C01-M2", value: "x**2 + 4*x + y**2 - 6*y + 10" },
        { key: "D", text: t`$\left(x + 2\right)^2 + \left(y - 3\right)^2 = 4$`, correct: false, misconceptionId: "C01-M3", value: "x**2 + 4*x + y**2 - 6*y + 9" },
      ],
      solution: {
        steps: [
          t`The circle touches the X-axis, so the radius is the centre's height above it: $r = |k| = 3$.`,
          t`$r^2 = 9$, and the signs inside flip: $(x + 2)^2 + (y - 3)^2 = 9$.`,
        ],
        figure: {
          alt: "The centre C(−2, 3) with a radius of 3 dropped straight down to the X-axis at (−2, 0), and the circle (x + 2)² + (y − 3)² = 9 touching the X-axis there.",
          axes: "xy",
          view: { x: [-7, 2.5], y: [-1.5, 7.6] },
          elements: [
            { kind: "point", at: [-2, 3], label: "C(−2, 3)", labelAt: "ne", step: 1 },
            { kind: "point", at: [-2, 0], step: 1 },
            { kind: "label", at: [-2, 0.8], label: "(−2, 0)", labelAt: "e", step: 1 },
            { kind: "segment", from: [-2, 3], to: [-2, 0], label: "r = 3", labelAt: "w", step: 1 },
            { kind: "circle", centre: [-2, 3], r: 3, tone: "good", step: 2 },
            { kind: "label", at: [-2.8, 6.1], label: "(x + 2)² + (y − 3)² = 9", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q6" },
      stem: t`A circle of radius $4$ touches both coordinate axes, and its centre is in the second quadrant. Its equation is:`,
      verify: { kind: "locus", inputs: { r: "4", q: "2" }, params: { ask: "both" } },
      options: [
        { key: "A", text: t`$\left(x + 4\right)^2 + \left(y - 4\right)^2 = 16$`, correct: true, value: "x**2 + 8*x + y**2 - 8*y + 16" },
        { key: "B", text: t`$\left(x - 4\right)^2 + \left(y + 4\right)^2 = 16$`, correct: false, misconceptionId: "C01-M1", value: "x**2 - 8*x + y**2 + 8*y + 16" },
        { key: "C", text: t`$\left(x + 4\right)^2 + \left(y - 4\right)^2 = 4$`, correct: false, misconceptionId: "C01-M2", value: "x**2 + 8*x + y**2 - 8*y + 28" },
        { key: "D", text: t`$\left(x - 4\right)^2 + \left(y - 4\right)^2 = 16$`, correct: false, misconceptionId: "C01-M4", value: "x**2 - 8*x + y**2 - 8*y + 16" },
      ],
      solution: {
        steps: [
          t`Touching both axes puts the centre $4$ from each axis. In the second quadrant $x < 0$ and $y > 0$, so the centre is $(-4, 4)$.`,
          t`Flip the signs and square the radius: $(x + 4)^2 + (y - 4)^2 = 16$.`,
        ],
        figure: {
          alt: "The centre C(−4, 4) in the second quadrant, 4 from each axis, and the circle (x + 4)² + (y − 4)² = 16 touching the X-axis at (−4, 0) and the Y-axis at (0, 4).",
          axes: "xy",
          view: { x: [-9.5, 2], y: [-1.5, 9.5] },
          elements: [
            { kind: "point", at: [-4, 4], label: "C(−4, 4)", labelAt: "sw", step: 1 },
            { kind: "segment", from: [-4, 4], to: [-4, 0], dashed: true, label: "4", labelAt: "w", step: 1 },
            { kind: "segment", from: [-4, 4], to: [0, 4], dashed: true, label: "4", labelAt: "n", step: 1 },
            { kind: "circle", centre: [-4, 4], r: 4, tone: "good", step: 2 },
            { kind: "label", at: [-4, 8.15], label: "(x + 4)² + (y − 4)² = 16", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc I Q6" },
      stem: t`The area of the circle with centre $(1, 2)$ that passes through the point $(4, 6)$ is:`,
      verify: { kind: "value", inputs: { h: "1", k: "2", px: "4", py: "6" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$625 \pi$`, correct: false, misconceptionId: "C01-M2", value: "625*pi" },
        { key: "B", text: t`$10 \pi$`, correct: false, misconceptionId: "C01-M5", value: "10*pi" },
        { key: "C", text: t`$25 \pi$`, correct: true, value: "25*pi" },
        { key: "D", text: t`$89 \pi$`, correct: false, misconceptionId: "C01-M1", value: "89*pi" },
      ],
      solution: {
        steps: [
          t`With $C(1, 2)$ and $P(4, 6)$: $r^2 = CP^2 = (4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25$.`,
          t`The area is $\pi r^2 = 25\pi$.`,
        ],
        figure: {
          alt: "The centre C(1, 2) and the point P(4, 6) joined by a radius of 5, and the circle through P, with area 25π.",
          axes: "xy",
          view: { x: [-5.5, 8.5], y: [-4.5, 8.5] },
          elements: [
            { kind: "point", at: [1, 2], label: "C(1, 2)", labelAt: "se", step: 1 },
            { kind: "point", at: [4, 6], label: "P(4, 6)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [1, 2], to: [4, 6], label: "r = 5", labelAt: "nw", step: 1 },
            { kind: "circle", centre: [1, 2], r: 5, tone: "good", step: 2 },
            { kind: "label", at: [3, -3.4], label: "area = 25π", labelAt: "s", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
