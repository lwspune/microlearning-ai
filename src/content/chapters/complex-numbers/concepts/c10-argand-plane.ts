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
      figure: {
        alt: "Plotting −1 + 4i: one unit left along the real axis, then four units up, landing at (−1, 4) in quadrant II.",
        view: { x: [-4, 3], y: [-1.5, 5] },
        elements: [
          { kind: "segment", from: [0, 0], to: [-1, 0], label: "1 left", labelAt: "n", step: 1 },
          { kind: "segment", from: [-1, 0], to: [-1, 4], label: "4 up", labelAt: "w", step: 2 },
          { kind: "point", at: [-1, 4], label: "−1 + 4i", step: 3 },
          { kind: "label", at: [-2.6, 2.2], label: "II", tone: "muted", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The Argand plane with the point 3 + 2i: three units right along the real axis, then two units up, with an arrow from the origin to the point.",
      view: { x: [-2, 5], y: [-1.5, 3.5] },
      elements: [
        { kind: "segment", from: [0, 0], to: [3, 0], label: "3 right", labelAt: "n", step: 1 },
        { kind: "segment", from: [3, 0], to: [3, 2], label: "2 up", labelAt: "e", step: 2 },
        { kind: "point", at: [3, 2], label: "3 + 2i", step: 3 },
        { kind: "vector", to: [3, 2], tone: "muted", step: 4 },
      ],
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
    {
      id: "C10-M4",
      mistake: "Giving both parts the minus sign that belongs to one",
      remediation: t`Each part keeps its own sign: in $3 - 2i$ the minus belongs to the $2$ alone, so the real part is still $+3$.`,
      fallback: { kind: "concept", id: "C03" },
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
        { key: "D", text: t`$(-3, -2)$`, correct: false, misconceptionId: "C10-M4", value: "-3-2*I" },
      ],
      solution: {
        steps: [
          t`The real part is $3$, so $x = 3$: three units right.`,
          t`The coefficient of $i$ is $-2$, sign included, so $y = -2$: two units down.`,
          t`The point is $(3, -2)$.`,
        ],
        figure: {
          alt: "3 − 2i: three units right, then two units down, at the point (3, −2).",
          view: { x: [-1, 5], y: [-3, 1.5] },
          elements: [
            { kind: "segment", from: [0, 0], to: [3, 0], label: "3 right", labelAt: "n", step: 1 },
            { kind: "segment", from: [3, 0], to: [3, -2], label: "2 down", labelAt: "e", step: 2 },
            { kind: "point", at: [3, -2], label: "3 − 2i", labelAt: "sw", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`The point $(-4, 1)$ represents which number?`,
      verify: { kind: "value", inputs: { x: "-4", y: "1" }, params: { target: "point" } },
      options: [
        { key: "A", text: t`$-4 + i$`, correct: true, value: "-4+I" },
        { key: "B", text: t`$1 - 4i$`, correct: false, misconceptionId: "C10-M1", value: "1-4*I" },
        { key: "C", text: t`$-4 - i$`, correct: false, misconceptionId: "C10-M4", value: "-4-I" },
        { key: "D", text: t`$4 + i$`, correct: false, misconceptionId: "C10-M3", value: "4+I" },
      ],
      solution: {
        steps: [
          t`The first coordinate is the real part: $x = -4$.`,
          t`The second coordinate is the coefficient of $i$: $y = 1$.`,
          t`So the number is $-4 + 1 \cdot i = -4 + i$.`,
        ],
        figure: {
          alt: "The point (−4, 1): four units left, then one unit up, which is −4 + i.",
          view: { x: [-5.5, 1.5], y: [-1.5, 2.5] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-4, 0], label: "4 left", labelAt: "n", step: 1 },
            { kind: "segment", from: [-4, 0], to: [-4, 1], label: "1 up", labelAt: "e", step: 2 },
            { kind: "point", at: [-4, 1], label: "−4 + i", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`In which quadrant does $-2 + 5i$ lie?`,
      verify: { kind: "value", inputs: { x: "-2", y: "5" }, params: { target: "quadrant" } },
      options: [
        { key: "A", text: "Quadrant II", correct: true, value: "2" },
        { key: "B", text: "Quadrant IV", correct: false, misconceptionId: "C10-M1", value: "4" },
        { key: "C", text: "Quadrant III", correct: false, misconceptionId: "C10-M4", value: "3" },
        { key: "D", text: "Quadrant I", correct: false, misconceptionId: "C10-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`Real part $-2 < 0$: left of the imaginary axis.`,
          t`Imaginary part $5 > 0$: above the real axis.`,
          t`Left and above is the top-left quadrant: quadrant II.`,
        ],
        figure: {
          alt: "The left half-plane and the upper half-plane overlap in quadrant II, where −2 + 5i lies.",
          view: { x: [-4, 3], y: [-1.5, 6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [0, 1]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [1, 0]] }], tone: "muted", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [0, 1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 3 },
            { kind: "point", at: [-2, 5], label: "−2 + 5i", labelAt: "e", step: 3 },
            { kind: "label", at: [-3, 2], label: "II", step: 3 },
          ],
        },
      },
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
        { key: "D", text: "Quadrant III", correct: false, misconceptionId: "C10-M4", value: "3" },
      ],
      solution: {
        steps: [
          t`Real part $4 > 0$: right of the imaginary axis.`,
          t`Imaginary part $-3 < 0$: below the real axis.`,
          t`Right and below is the bottom-right quadrant: quadrant IV.`,
        ],
        figure: {
          alt: "The right half-plane and the lower half-plane overlap in quadrant IV, where 4 − 3i lies.",
          view: { x: [-2, 5.5], y: [-4.5, 2] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [0, 0]] }], tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[1, 0], [0, 0]] }], tone: "muted", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [0, 0]] }, { kind: "halfPlane", through: [[1, 0], [0, 0]] }], step: 3 },
            { kind: "point", at: [4, -3], label: "4 − 3i", labelAt: "w", step: 3 },
            { kind: "label", at: [2, -1.4], label: "IV", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`The first coordinate is the real part: $x = -3$.`,
          t`The second coordinate is the coefficient of $i$, sign included: $y = -1$.`,
          t`So the number is $-3 + (-1)i = -3 - i$.`,
        ],
        figure: {
          alt: "The point (−3, −1): three units left, then one unit down, which is −3 − i.",
          view: { x: [-4.5, 1.5], y: [-2.5, 1.5] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-3, 0], label: "3 left", labelAt: "n", step: 1 },
            { kind: "segment", from: [-3, 0], to: [-3, -1], label: "1 down", labelAt: "e", step: 2 },
            { kind: "point", at: [-3, -1], label: "−3 − i", labelAt: "s", step: 3 },
          ],
        },
      },
    },
  ],
  engineNotes: [
    "Quadrant questions can only tell C10-M1 (swapped axes) apart from the key for points in quadrants II and IV; swapping keeps points in I and III in the same quadrant.",
    "C10-M2 and C10-M3 drop a minus sign, so they only show on a number whose imaginary (C10-M2) or real (C10-M3) part is negative.",
    "C10-M4 (one part's minus sign spread to the other) was split from C10-M2 and C10-M3, which had covered it on Q1-Q4: it only shows when exactly one part is negative.",
  ],
};
