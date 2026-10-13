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
    },
  ],
};
