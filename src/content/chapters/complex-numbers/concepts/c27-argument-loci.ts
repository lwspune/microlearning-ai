import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c27: Concept = {
  id: "C27",
  status: "approved",
  hook: {
    prompt: t`Points $z$ with $\arg(z - 1) = \dfrac\pi4$: the arrow from $1$ to $z$ points at $45^\circ$. **Is that a whole line?**`,
    reveal: t`No, only half of one: a ray starting at $1$ (not including $1$), going up and to the right. The other half of the line points the opposite way, at $-\dfrac{3\pi}4$.`,
  },
  explanation: {
    intuition: t`$\arg(z - a) = \theta$ fixes the direction of the arrow from $a$ to $z$, so $z$ moves along a ray from $a$. For a quotient, $\arg\left(\dfrac{z - a}{z - b}\right) = \theta$ fixes the angle at $z$ between the arrows to $a$ and $b$, so $z$ moves along an arc through $a$ and $b$: only part of a circle.`,
    formal: t`- $\arg(z - a) = \theta$: the ray from $a$ in the direction $\theta$, with $a$ itself excluded.
- $\arg\left(\dfrac{z - a}{z - b}\right) = \theta$: an arc of a circle through $a$ and $b$ (both excluded). For $\theta = \pm\dfrac\pi2$ the circle has $ab$ as a diameter (the angle in a semicircle), and the sign of $\theta$ picks which half.

To pick the half, test one point. For $\arg\left(\dfrac{z - 2}{z + 2}\right) = -\dfrac\pi2$, try $z = -2i$: $\dfrac{-2i - 2}{-2i + 2} = -i$, whose argument is $-\dfrac\pi2$, so the locus is the lower half.`,
    worked: {
      prompt: t`Describe $\arg(z + 2) = \dfrac{2\pi}3$.`,
      steps: [
        t`Write it as $\arg\big(z - (-2)\big) = \dfrac{2\pi}3$: the ray starts at $-2$.`,
        t`It points at $120^\circ$: up and to the left.`,
      ],
      answer: t`The ray from $-2$ (not including $-2$) in the direction $\dfrac{2\pi}3$.`,
      figure: {
        alt: "The ray from −2, not including −2, pointing at 2π/3: up and to the left.",
        view: { x: [-4.5, 1.5], y: [-1, 3.5] },
        elements: [
          { kind: "label", at: [-2, 0], label: "−2", labelAt: "s", step: 1 },
          { kind: "ray", from: [-2, 0], angle: 120, step: 2 },
          { kind: "angle", at: [-2, 0], from: 0, to: 120, label: "2π/3", step: 2 },
        ],
      },
    },
    figure: {
      alt: "arg(z − a) = θ: the ray from a (not including a itself) in the direction θ.",
      view: { x: [-1, 4], y: [-1, 3] },
      elements: [
        { kind: "label", at: [1, 0], label: "a", labelAt: "s", step: 1 },
        { kind: "ray", from: [1, 0], angle: 60, label: "arg(z − a) = θ", labelAt: "e", step: 2 },
        { kind: "angle", at: [1, 0], from: 0, to: 60, label: "θ", step: 3 },
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
