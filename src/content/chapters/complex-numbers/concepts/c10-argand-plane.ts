import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Real numbers live on a line. **Where could $3 + 2i$ possibly go?**`,
    reveal: t`Off the line. Add a second, vertical axis for the imaginary part: $3 + 2i$ is the point $(3, 2)$, three right and two up.`,
  },
  explanation: {
    intuition: t`Give the number line a partner: a vertical axis for imaginary parts. Every complex number $x + iy$ becomes the point $(x, y)$: real part across, imaginary part up. You can also picture it as an arrow from the origin to that point.`,
    formal: t`The **Argand plane** has a horizontal real axis and a vertical imaginary axis, and $z = x + iy$ is the point $(x, y)$.
- Real numbers lie on the real axis ($y = 0$); purely imaginary numbers lie on the imaginary axis ($x = 0$).
- Quadrants go anticlockwise from the top right: I ($x > 0, y > 0$), II ($x < 0, y > 0$), III ($x < 0, y < 0$), IV ($x > 0, y < 0$).
- The $y$-coordinate is the **coefficient** of $i$, sign included: $5 - 7i$ is the point $(5, -7)$.`,
    worked: {
      prompt: t`Plot $-1 + 4i$ and name its quadrant.`,
      steps: [
        t`Real part $-1$: one unit left, so $x = -1$.`,
        t`Imaginary part $4$: four units up, so $y = 4$.`,
        t`$x < 0$ and $y > 0$: top left, quadrant II.`,
      ],
      answer: t`The point $(-1, 4)$, in quadrant II.`,
    },
    visualSpec: t`Tap anywhere on the plane and that point's complex number appears as $x + iy$. Type a number and its point and arrow from the origin appear, with dashed lines to each axis.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Swapping the axes: plotting $x + iy$ at $(y, x)$`,
      remediation: t`Real part across, imaginary part up: $x + iy$ is the point $(x, y)$, in that order.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C10-M2",
      mistake: "Losing the sign of the imaginary part",
      remediation: t`The coefficient of $i$ carries its sign: in $x - iy$ the point goes **down** to $-y$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C10-M3",
      mistake: "Losing the sign of the real part",
      remediation: t`A negative real part means the point is **left** of the imaginary axis.`,
      fallback: { kind: "ext", topic: "signs of coordinates" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`Which point represents $3 - 2i$?`,
      verify: { kind: "value", inputs: { x: "3", y: "-2" }, params: { target: "point" } },
      options: [
        { key: "A", text: t`$(3, -2)$`, correct: true, value: "3-2*I" },
        { key: "B", text: t`$(-2, 3)$`, correct: false, misconceptionId: "C10-M1", value: "-2+3*I" },
        { key: "C", text: t`$(3, 2)$`, correct: false, misconceptionId: "C10-M2", value: "3+2*I" },
        { key: "D", text: t`$(-3, -2)$`, correct: false, misconceptionId: "C10-M3", value: "-3-2*I" },
      ],
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`The point $(-4, 1)$ represents which number?`,
      verify: { kind: "value", inputs: { x: "-4", y: "1" }, params: { target: "point" } },
      options: [
        { key: "A", text: t`$-4 + i$`, correct: true, value: "-4+I" },
        { key: "B", text: t`$1 - 4i$`, correct: false, misconceptionId: "C10-M1", value: "1-4*I" },
        { key: "C", text: t`$-4 - i$`, correct: false, misconceptionId: "C10-M2", value: "-4-I" },
        { key: "D", text: t`$4 + i$`, correct: false, misconceptionId: "C10-M3", value: "4+I" },
      ],
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`In which quadrant does $-2 + 5i$ lie?`,
      verify: { kind: "value", inputs: { x: "-2", y: "5" }, params: { target: "quadrant" } },
      options: [
        { key: "A", text: "Quadrant II", correct: true, value: "2" },
        { key: "B", text: "Quadrant IV", correct: false, misconceptionId: "C10-M1", value: "4" },
        { key: "C", text: "Quadrant III", correct: false, misconceptionId: "C10-M2", value: "3" },
        { key: "D", text: "Quadrant I", correct: false, misconceptionId: "C10-M3", value: "1" },
      ],
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`In which quadrant does $4 - 3i$ lie?`,
      verify: { kind: "value", inputs: { x: "4", y: "-3" }, params: { target: "quadrant" } },
      options: [
        { key: "A", text: "Quadrant IV", correct: true, value: "4" },
        { key: "B", text: "Quadrant II", correct: false, misconceptionId: "C10-M1", value: "2" },
        { key: "C", text: "Quadrant I", correct: false, misconceptionId: "C10-M2", value: "1" },
        { key: "D", text: "Quadrant III", correct: false, misconceptionId: "C10-M3", value: "3" },
      ],
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`The point $(-3, -1)$ represents which number?`,
      verify: { kind: "value", inputs: { x: "-3", y: "-1" }, params: { target: "point" } },
      options: [
        { key: "A", text: t`$-3 - i$`, correct: true, value: "-3-I" },
        { key: "B", text: t`$-1 - 3i$`, correct: false, misconceptionId: "C10-M1", value: "-1-3*I" },
        { key: "C", text: t`$-3 + i$`, correct: false, misconceptionId: "C10-M2", value: "-3+I" },
        { key: "D", text: t`$3 - i$`, correct: false, misconceptionId: "C10-M3", value: "3-I" },
      ],
    },
  ],
  engineNotes: [
    "Quadrant questions can only tell C10-M1 (swapped axes) apart from the key for points in quadrants II and IV; swapping keeps points in I and III in the same quadrant.",
  ],
};
