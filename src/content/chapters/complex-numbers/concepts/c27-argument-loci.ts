import type { Concept, Pt } from "../../../types.ts";

const t = String.raw;

/** The point r from `c` in the direction `deg` degrees. */
const tip = (c: Pt, r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(c[0] + r * Math.cos(a)).toFixed(3), +(c[1] + r * Math.sin(a)).toFixed(3)];
};
/** Direction of the arrow from p to q, in degrees, and its length: a turn about p of this length ends at q. */
const dir = (p: Pt, q: Pt) => (Math.atan2(q[1] - p[1], q[0] - p[0]) * 180) / Math.PI;
const dist = (p: Pt, q: Pt) => Math.hypot(q[0] - p[0], q[1] - p[1]);

/** The chord's ends for the quotient slides: a = 2, b = −2. */
const A: Pt = [2, 0];
const B: Pt = [-2, 0];
/** The circle through 2 and −2 with centre i, radius √5: the arcs of a fixed angle at z. */
const R5 = Math.sqrt(5);
const ends = { a: dir([0, 1], A), b: dir([0, 1], B) + 360 };

export const c27: Concept = {
  id: "C27",
  status: "approved",
  hook: {
    prompt: t`Points $z$ with $\arg(z - 1) = \dfrac\pi4$: the arrow from $1$ to $z$ points at $45^\circ$. **Is that a whole line?**`,
    reveal: t`No, only half of one: a ray starting at $1$ (not including $1$), going up and to the right. The other half of the line points the opposite way, at $-\dfrac{3\pi}4$.`,
  },
  explanation: {
    intuition: [
      t`A **locus** is the set of all points that obey a condition, like $\arg(z - 2) = \frac\pi4$.`,
      t`Recall: $z - 2$ is the arrow from $2$ to $z$, as from $2$ to $3 + i$.`,
      t`Its argument is the angle turned to it from the **initial arm**, here pointing right from $2$.`,
      t`Here the arm turns $\frac\pi4$ **anticlockwise**, against a clock's hands: up and to the right.`,
      t`Every $z$ on the **ray**, the half-line from $2$ that way, gives $\frac\pi4$ too, as $4 + 2i$ does.`,
      t`So the locus is that ray, without $2$: the arrow from $2$ to itself has no direction.`,
    ],
    formal: [
      {
        title: "The ray from any point",
        points: [
          t`In general, $\arg(z - a) = \theta$ fixes the direction of the arrow from $a$ to $z$.`,
          t`A negative $\theta$ turns **clockwise**, the way a clock's hands go: $-\frac\pi4$ points down and right.`,
          t`So the locus is the ray from $a$ in the direction $\theta$: it starts at $a$, not at $0$.`,
          t`$a$ itself is left out, since $z - a = 0$ there and $0$ has no argument.`,
        ],
        figure: {
          alt: "a = 1 + i, with an arrow from a to z = 3 − i. An arm turns clockwise from the initial arm, pointing right from a, through −π/4 to that arrow. The locus is the ray from a, not from the origin, down and to the right; a itself is a hollow dot, left out.",
          view: { x: [-0.8, 4.6], y: [-2.4, 2] },
          elements: [
            { kind: "point", at: [1, 1], label: "a = 1 + i", labelAt: "nw" },
            { kind: "segment", from: [1, 1], to: [3.8, 1], tone: "good" },
            { kind: "label", at: [3.3, 1], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "vector", from: [1, 1], to: [3, -1], label: "z = 3 − i", labelAt: "ne", step: 1 },
            { kind: "turn", centre: [1, 1], r: dist([1, 1], [3, -1]), to: -45, step: 2 },
            { kind: "label", at: tip([1, 1], 1.2, -22), label: "−π/4", labelAt: "e", step: 2 },
            { kind: "ray", from: [1, 1], angle: -45, step: 3 },
            { kind: "label", at: [1, 1], label: "left out", labelAt: "sw", step: 4 },
          ],
        },
      },
      {
        title: "The angle at z",
        points: [
          t`Recall: the argument of a quotient is the top's argument minus the bottom's.`,
          t`So $\arg\dfrac{z - a}{z - b}$ equals $\arg(z - a) - \arg(z - b)$.`,
          t`That is the angle between the two arrows, turned from $z - b$ round to $z - a$.`,
          t`Reverse both arrows to start at $z$: the angle between them stays the same.`,
          t`So $\theta$ is the angle at $z$, turned from the arrow to $b$ round to the arrow to $a$.`,
        ],
        figure: {
          alt: "a = 2 and b = −2 on the real axis, and z = 1 + 3i above them. The arrows z − a, from 2 to z, and z − b, from −2 to z, are drawn. Reversed, they run from z to b, the initial arm, and from z to a. An arm turns anticlockwise at z from the arrow to b round to the arrow to a: that angle is θ.",
          view: { x: [-3, 3.4], y: [-0.8, 3.8] },
          elements: [
            { kind: "point", at: A, label: "a = 2", labelAt: "ne", hollow: true },
            { kind: "point", at: B, label: "b = −2", labelAt: "nw", hollow: true },
            { kind: "point", at: [1, 3], label: "z = 1 + 3i", labelAt: "ne" },
            { kind: "vector", from: A, to: [1, 3], tone: "muted", step: 2 },
            { kind: "label", at: [1.7, 0.9], label: "z − a", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", from: B, to: [1, 3], tone: "muted", step: 2 },
            { kind: "label", at: [-1.3, 0.7], label: "z − b", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "segment", from: [1, 3], to: B, tone: "good", step: 4 },
            { kind: "label", at: [-0.5, 1.5], label: "initial arm", labelAt: "nw", tone: "good", step: 4 },
            { kind: "turn", centre: [1, 3], r: dist([1, 3], A), from: dir([1, 3], B), to: dir([1, 3], A), step: 5 },
            { kind: "label", at: tip([1, 3], 1.35, -103), label: "θ", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "A fixed angle gives an arc",
        points: [
          t`A **chord** $ab$ joins two points of a circle and cuts it into two **arcs**, pieces of the circle.`,
          t`Recall from geometry: from every point of one arc, $ab$ is seen under the same angle.`,
          t`So $\arg\dfrac{z - a}{z - b} = \theta$ is one arc of a circle through $a$ and $b$.`,
          t`$a$ and $b$ are left out: at $a$ the top is $0$, and at $b$ the bottom is $0$.`,
          t`On the other arc, the turn from $b$ to $a$ is clockwise, so the argument there is negative.`,
          t`So a fixed argument gives one arc, never the whole circle.`,
        ],
        figure: {
          alt: "The circle through a = 2 and b = −2 with centre i, cut by the chord from −2 to 2. At 1 + 3i and at −2 + 2i, on the upper arc, an arm turns anticlockwise from the arrow to b to the arrow to a through the same angle θ. The upper arc is the locus, with 2 and −2 left out. At 1 − i, on the lower arc, the turn is clockwise: a negative argument, not on the locus.",
          view: { x: [-3.2, 3.2], y: [-1.7, 3.9] },
          elements: [
            { kind: "circle", centre: [0, 1], r: R5, dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: B, to: A, tone: "muted", step: 1 },
            { kind: "point", at: [1, 3], label: "1 + 3i", labelAt: "ne", step: 2 },
            { kind: "segment", from: [1, 3], to: B, tone: "good", step: 2 },
            { kind: "turn", centre: [1, 3], r: dist([1, 3], A), from: dir([1, 3], B), to: dir([1, 3], A), step: 2 },
            { kind: "label", at: tip([1, 3], 1.35, -103), label: "θ", labelAt: "s", step: 2 },
            { kind: "point", at: [-2, 2], label: "−2 + 2i", labelAt: "nw", step: 2 },
            { kind: "segment", from: [-2, 2], to: B, tone: "good", step: 2 },
            { kind: "turn", centre: [-2, 2], r: dist([-2, 2], A), from: dir([-2, 2], B), to: dir([-2, 2], A), step: 2 },
            { kind: "label", at: tip([-2, 2], 1.75, -58), label: "θ", labelAt: "e", step: 2 },
            { kind: "arc", centre: [0, 1], r: R5, from: ends.a, to: ends.b, label: "the locus", labelAt: "n", step: 3 },
            { kind: "point", at: A, label: "a = 2", labelAt: "se", hollow: true },
            { kind: "point", at: B, label: "b = −2", labelAt: "sw", hollow: true },
            { kind: "point", at: [1, -1], label: "1 − i", labelAt: "se", tone: "bad", step: 5 },
            { kind: "segment", from: [1, -1], to: B, tone: "good", step: 5 },
            { kind: "turn", centre: [1, -1], r: dist([1, -1], A), from: dir([1, -1], B), to: dir([1, -1], A), tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "A right angle: a semicircle",
        points: [
          t`When $\theta = \pm\frac\pi2$, the angle at $z$ is a right angle.`,
          t`Recall from geometry: the angle in a **semicircle**, half a circle, is a right angle.`,
          t`So $z$ lies on the circle with $ab$ as a **diameter**, a chord through the centre.`,
          t`$\theta = \frac\pi2$ gives one half and $\theta = -\frac\pi2$ the other: the sign picks the half.`,
        ],
        figure: {
          alt: "a = 2 and b = −2. At z = 2i an arm turns a quarter turn anticlockwise from the arrow to b to the arrow to a: a right angle, π/2. The circle |z| = 2 has the segment from −2 to 2 as a diameter. The upper half is θ = π/2; at −2i the quarter turn is clockwise, −π/2, and the lower half is θ = −π/2.",
          view: { x: [-3.2, 3.2], y: [-2.9, 2.9] },
          elements: [
            { kind: "point", at: A, label: "a = 2", labelAt: "se", hollow: true },
            { kind: "point", at: B, label: "b = −2", labelAt: "sw", hollow: true },
            { kind: "point", at: [0, 2], label: "2i", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 2], to: B, tone: "good", step: 1 },
            { kind: "turn", centre: [0, 2], r: dist([0, 2], A), from: dir([0, 2], B), to: dir([0, 2], A), step: 1 },
            { kind: "label", at: tip([0, 2], 1.25, -90), label: "π/2", labelAt: "s", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2, dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: B, to: A, tone: "muted", step: 3 },
            { kind: "label", at: [-1, 0], label: "diameter", labelAt: "n", tone: "muted", step: 3 },
            { kind: "arc", centre: [0, 0], r: 2, from: 0, to: 180, step: 4 },
            { kind: "label", at: tip([0, 0], 2, 40), label: "θ = π/2", labelAt: "ne", step: 4 },
            { kind: "point", at: [0, -2], label: "−2i", labelAt: "se", tone: "bad", step: 4 },
            { kind: "segment", from: [0, -2], to: B, tone: "good", step: 4 },
            { kind: "turn", centre: [0, -2], r: dist([0, -2], A), from: dir([0, -2], B), to: dir([0, -2], A), tone: "bad", step: 4 },
            { kind: "arc", centre: [0, 0], r: 2, from: 180, to: 360, tone: "bad", step: 4 },
            { kind: "label", at: tip([0, 0], 2, -40), label: "θ = −π/2", labelAt: "se", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "Test a point for the half",
        points: [
          t`To find which half is the locus, test one easy point on the circle.`,
          t`Take $\arg\dfrac{z - 2}{z + 2} = -\dfrac\pi2$: its circle has diameter from $-2$ to $2$.`,
          t`Try $z = -2i$, at the bottom of the circle.`,
          t`Then $\dfrac{-2i - 2}{-2i + 2} = -i$.`,
          t`Its argument is $-\dfrac\pi2$, a quarter turn clockwise, as required.`,
          t`So the locus is the lower half of $|z| = 2$, without $2$ and $-2$.`,
        ],
        figure: {
          alt: "The circle |z| = 2, with diameter from −2 to 2. The test point z = −2i is at its bottom. At −2i an arm turns a quarter turn clockwise from the arrow to −2 to the arrow to 2: the argument is −π/2. So the locus is the lower half of the circle, with 2 and −2 left out.",
          view: { x: [-3.2, 3.2], y: [-2.9, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: A, label: "2", labelAt: "ne", hollow: true, step: 2 },
            { kind: "point", at: B, label: "−2", labelAt: "nw", hollow: true, step: 2 },
            { kind: "point", at: [0, -2], label: "z = −2i", labelAt: "se", step: 3 },
            { kind: "segment", from: [0, -2], to: B, tone: "good", step: 5 },
            { kind: "turn", centre: [0, -2], r: dist([0, -2], A), from: dir([0, -2], B), to: dir([0, -2], A), step: 5 },
            { kind: "label", at: tip([0, -2], 1.25, 90), label: "−π/2", labelAt: "n", step: 5 },
            { kind: "arc", centre: [0, 0], r: 2, from: 180, to: 360, step: 6 },
            { kind: "label", at: tip([0, 0], 2, 220), label: "the locus", labelAt: "sw", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Describe $\arg(z + 2) = \dfrac{2\pi}3$.`,
      steps: [
        t`Write it as $\arg\big(z - (-2)\big) = \dfrac{2\pi}3$: the ray starts at $-2$.`,
        t`It points at $120^\circ$: up and to the left.`,
      ],
      answer: t`The ray from $-2$ (not including $-2$) in the direction $\dfrac{2\pi}3$.`,
      figure: {
        alt: "The ray from −2, not including −2: an arm turns 2π/3 anticlockwise from the initial arm, pointing right from −2, to up and to the left, and the ray runs that way.",
        view: { x: [-4.5, 1.5], y: [-1, 3.5] },
        elements: [
          { kind: "label", at: [-2, 0], label: "starts at −2", labelAt: "nw", step: 1 },
          { kind: "segment", from: [-2, 0], to: [-0.3, 0], tone: "good", step: 2 },
          { kind: "label", at: [-0.9, 0], label: "initial arm", labelAt: "n", tone: "good", step: 2 },
          { kind: "turn", centre: [-2, 0], r: 1.7, to: 120, step: 2 },
          { kind: "label", at: tip([-2, 0], 0.9, 60), label: "2π/3", labelAt: "ne", step: 2 },
          { kind: "ray", from: [-2, 0], angle: 120, step: 2 },
        ],
      },
    },
    figure: {
      alt: "arg(z − 2) = π/4: the arrow from 2 to 3 + i turns π/4 anticlockwise from the initial arm, pointing right from 2. The locus is the ray from 2 in that direction, through 3 + i and 4 + 2i, with 2 itself left out.",
      view: { x: [-0.8, 5], y: [-0.8, 3.2] },
      elements: [
        { kind: "vector", from: [2, 0], to: [3, 1], label: "3 + i", labelAt: "se", step: 2 },
        { kind: "segment", from: [2, 0], to: [4.6, 0], tone: "good", step: 3 },
        { kind: "label", at: [4.1, 0], label: "initial arm", labelAt: "n", tone: "good", step: 3 },
        { kind: "turn", centre: [2, 0], r: Math.SQRT2, to: 45, step: 4 },
        { kind: "label", at: tip([2, 0], 0.75, 20), label: "π/4", labelAt: "e", step: 4 },
        { kind: "ray", from: [2, 0], angle: 45, label: "arg(z − 2) = π/4", labelAt: "nw", step: 5 },
        { kind: "point", at: [4, 2], label: "4 + 2i", labelAt: "se", step: 5 },
        { kind: "label", at: [2, 0], label: "left out", labelAt: "nw", step: 6 },
      ],
    },
    visualSpec: t`Two fixed points $a$ and $b$ and a draggable $z$, with the angle at $z$ shown live. Points where the angle equals $\theta$ leave a trace, which builds up one arc, not the whole circle.`,
  },
  misconceptions: [
    {
      id: "C27-M1",
      mistake: "Taking a fixed argument of a quotient to give the whole circle",
      remediation: t`The angle at $z$ has a sign: on the other half of the circle it is $-\theta$. A fixed argument gives one arc.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C27-M2",
      mistake: "Picking the wrong half of the circle",
      remediation: "Test one point on each half: only one of them gives the stated argument.",
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C27-M3",
      mistake: "Treating the argument condition like a modulus condition",
      remediation: t`$\left|\frac{z - a}{z - b}\right| = 1$ is the bisector; $\arg\frac{z - a}{z - b} = \theta$ is an arc. Different conditions, different curves.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C27-M4",
      mistake: "Starting the ray at the origin",
      remediation: t`$\arg(z - a) = \theta$ is about the arrow from $a$ to $z$: the ray starts at $a$.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C27-M5",
      mistake: "Misreading the sign of the starting point",
      remediation: t`$\arg(z + a) = \arg\big(z - (-a)\big)$: the ray starts at $-a$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C27-M6",
      mistake: "Turning the wrong way",
      remediation: t`Negative angles turn clockwise: $-\frac\pi4$ points down and to the right.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C27-M7",
      mistake: "Placing the start point on the wrong axis",
      remediation: t`$p + qi$ sits at $(p, q)$: real part across, imaginary part up. So $-2i$ is on the imaginary axis and $1$ is on the real axis.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "A which-point item can't separate 'ray' from 'whole line': the correct point lies on both. Ray items test the start point and direction instead.",
  ],
  items: [
    {
      id: "C27-Q1",
      source: { kind: "authored" },
      stem: t`$\arg\left(\dfrac{z - 1}{z + 1}\right) = \dfrac\pi2$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-1", theta: "pi/2" }, params: { op: "arc" } },
      options: [
        { key: "A", text: t`the whole circle $|z| = 1$`, correct: false, misconceptionId: "C27-M1", value: "3" },
        { key: "B", text: t`the lower half of the circle $|z| = 1$`, correct: false, misconceptionId: "C27-M2", value: "2" },
        { key: "C", text: t`the imaginary axis`, correct: false, misconceptionId: "C27-M3", value: "4" },
        { key: "D", text: t`the upper half of the circle $|z| = 1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`The angle at $z$ between the arrows to $1$ and to $-1$ is a right angle, so $z$ lies on the circle with diameter from $-1$ to $1$: $|z| = 1$.`,
          t`Test $z = i$: $\dfrac{i - 1}{i + 1} = i$, whose argument is $\dfrac\pi2$. So the locus is the upper half (without $\pm1$).`,
        ],
        figure: {
          alt: "The circle with diameter from −1 to 1. At z = i the angle between the lines to 1 and −1 is a right angle, and the argument is +π/2, so the locus is the upper half.",
          view: { x: [-2, 2], y: [-1.5, 1.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 1 },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 180, step: 2 },
            { kind: "segment", from: [0, 1], to: [1, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [0, 1], to: [-1, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "angle", at: [0, 1], from: 225, to: 315, label: "π/2", step: 2 },
            { kind: "point", at: [0, 1], label: "i", labelAt: "ne", step: 2 },
            { kind: "point", at: [1, 0], label: "1", labelAt: "se", hollow: true },
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "sw", hollow: true },
          ],
        },
      },
    },
    {
      id: "C27-Q2",
      source: { kind: "authored" },
      stem: t`$\arg\left(\dfrac{z - 2i}{z + 2i}\right) = \dfrac\pi2$ is:`,
      verify: { kind: "value", inputs: { a: "2*I", b: "-2*I", theta: "pi/2" }, params: { op: "arc" } },
      options: [
        { key: "A", text: t`the left half of the circle $|z| = 2$`, correct: true, value: "1" },
        { key: "B", text: t`the whole circle $|z| = 2$`, correct: false, misconceptionId: "C27-M1", value: "3" },
        { key: "C", text: t`the right half of the circle $|z| = 2$`, correct: false, misconceptionId: "C27-M2", value: "2" },
        { key: "D", text: t`the real axis`, correct: false, misconceptionId: "C27-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`The angle at $z$ between the arrows to $2i$ and to $-2i$ is a right angle, so $z$ lies on the circle with diameter from $-2i$ to $2i$: $|z| = 2$.`,
          t`Test $z = -2$: $\dfrac{-2 - 2i}{-2 + 2i} = i$, whose argument is $\dfrac\pi2$. So the locus is the left half (without $\pm 2i$).`,
        ],
        figure: {
          alt: "The circle with diameter from −2i to 2i. At z = −2 the angle between the lines to 2i and −2i is a right angle, and the argument is +π/2, so the locus is the left half.",
          view: { x: [-3.2, 2.6], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, dashed: true, tone: "muted", step: 1 },
            { kind: "arc", centre: [0, 0], r: 2, from: 90, to: 270, step: 2 },
            { kind: "segment", from: [-2, 0], to: [0, 2], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [-2, 0], to: [0, -2], dashed: true, tone: "muted", step: 2 },
            { kind: "angle", at: [-2, 0], from: -45, to: 45, label: "π/2", step: 2 },
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", step: 2 },
            { kind: "point", at: [0, 2], label: "2i", labelAt: "ne", hollow: true },
            { kind: "point", at: [0, -2], label: "−2i", labelAt: "se", hollow: true },
          ],
        },
      },
    },
    {
      id: "C27-Q3",
      source: { kind: "authored" },
      stem: t`The locus $\arg(z - 1) = \dfrac\pi3$ is a ray. It starts at:`,
      verify: { kind: "value", inputs: { a: "1" }, params: { op: "ray_start" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C27-M4", value: "0" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C27-M5", value: "-1" },
        { key: "D", text: t`$i$`, correct: false, misconceptionId: "C27-M7", value: "I" },
      ],
      solution: {
        steps: [
          t`$\arg(z - 1)$ is the direction of the arrow from $1$ to $z$.`,
          t`So the ray starts at $1$ (which is itself excluded) and points at angle $\dfrac\pi3$.`,
        ],
        figure: {
          alt: "The ray from 1, not including 1, at angle π/3.",
          view: { x: [-1, 3.5], y: [-1, 3] },
          elements: [
            { kind: "label", at: [1, 0], label: "starts at 1", labelAt: "se", step: 1 },
            { kind: "ray", from: [1, 0], angle: 60, step: 2 },
            { kind: "angle", at: [1, 0], from: 0, to: 60, label: "π/3", step: 2 },
          ],
        },
      },
    },
    {
      id: "C27-Q4",
      source: { kind: "authored" },
      stem: t`The locus $\arg(z + 2i) = \dfrac{3\pi}4$ is a ray. It starts at:`,
      verify: { kind: "value", inputs: { a: "-2*I" }, params: { op: "ray_start" } },
      options: [
        { key: "A", text: t`$2 i$`, correct: false, misconceptionId: "C27-M5", value: "2*I" },
        { key: "B", text: t`$- 2 i$`, correct: true, value: "-2*I" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C27-M4", value: "0" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C27-M7", value: "-2" },
      ],
      solution: {
        steps: [
          t`Write it as $\arg\big(z - (-2i)\big) = \dfrac{3\pi}4$.`,
          t`So the ray starts at $-2i$ (excluded) and points at angle $\dfrac{3\pi}{4}$: up and to the left.`,
        ],
        figure: {
          alt: "The ray from −2i, not including −2i, at angle 3π/4: up and to the left.",
          view: { x: [-3.5, 1.5], y: [-3, 1.5] },
          elements: [
            { kind: "label", at: [0, -2], label: "starts at −2i", labelAt: "e", step: 1 },
            { kind: "ray", from: [0, -2], angle: 135, step: 2 },
            { kind: "angle", at: [0, -2], from: 0, to: 135, label: "3π/4", step: 2 },
          ],
        },
      },
    },
    {
      id: "C27-Q5",
      source: { kind: "authored" },
      stem: t`Which point lies on the locus $\arg(z - 3) = -\dfrac\pi4$?`,
      verify: { kind: "point", inputs: { a: "3", theta: "-pi/4" }, params: { op: "ray_point" } },
      options: [
        { key: "A", text: t`$-2 - i$`, correct: false, misconceptionId: "C27-M5", value: "-2-I" },
        { key: "B", text: t`$4 - i$`, correct: true, value: "4-I" },
        { key: "C", text: t`$4 + i$`, correct: false, misconceptionId: "C27-M6", value: "4+I" },
        { key: "D", text: t`$1 - i$`, correct: false, misconceptionId: "C27-M4", value: "1-I" },
      ],
      solution: {
        steps: [
          t`The locus is the ray from $3$ (excluded) at angle $-\dfrac\pi4$: down and to the right.`,
          t`Check $4 - i$: $(4 - i) - 3 = 1 - i$, whose argument is $-\dfrac\pi4$. So $4 - i$ lies on the ray.`,
        ],
        figure: {
          alt: "The ray from 3, not including 3, at angle −π/4. The point 4 − i is one step right and one down from 3, so it lies on the ray.",
          view: { x: [-0.8, 6], y: [-3, 1.5] },
          elements: [
            { kind: "label", at: [3, 0], label: "3", labelAt: "n" },
            { kind: "ray", from: [3, 0], angle: -45, step: 1 },
            { kind: "angle", at: [3, 0], from: -45, to: 0, label: "−π/4", step: 1 },
            { kind: "point", at: [4, -1], label: "4 − i", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
