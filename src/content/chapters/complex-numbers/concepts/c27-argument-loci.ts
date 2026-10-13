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
      ],
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
      ],
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
    },
  ],
};
