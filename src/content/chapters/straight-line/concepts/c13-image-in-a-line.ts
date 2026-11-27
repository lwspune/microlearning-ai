import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`A mirror stands along the line $x + y = 4$. Where does the reflection of a lamp at $(0, 0)$ appear?`,
    reveal: t`At $(4, 4)$: the image is as far behind the mirror line as the lamp is in front, on the perpendicular through it.`,
  },
  explanation: {
    intuition: [
      t`The **image** of a point in a line is its mirror reflection in that line.`,
      t`The point and its image lie on a perpendicular to the line.`,
      t`The line cuts that perpendicular segment exactly in half.`,
      t`The **foot** of the perpendicular is the midpoint of point and image.`,
    ],
    formal: [
      {
        title: "Foot and image",
        points: [
          t`Line $ax + by + c = 0$, point $P(x_1, y_1)$; let $d = \frac{ax_1 + by_1 + c}{a^2 + b^2}$.`,
          t`Foot: $(x_1 - ad,\; y_1 - bd)$.`,
          t`Image: $(x_1 - 2ad,\; y_1 - 2bd)$.`,
          t`The direction $(a, b)$ is perpendicular to the line.`,
        ],
      },
      {
        title: "Simple lines",
        points: [
          t`In $y = x$: $(x, y) \to (y, x)$.`,
          t`In $y = -x$: $(x, y) \to (-y, -x)$.`,
          t`In the x-axis: $(x, y) \to (x, -y)$; in the y-axis: $(x, y) \to (-x, y)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the image of $(2, 1)$ in the line $x - y + 1 = 0$.`,
      steps: [
        t`$d = \frac{2 - 1 + 1}{1 + 1} = 1$`,
        t`Image: $(2 - 2 \cdot 1,\; 1 + 2 \cdot 1)$`,
        t`$= (0, 3)$`,
      ],
      answer: t`$(0, 3)$`,
    },
    visualSpec: t`Drag a point and watch its image move on the other side, the line always bisecting the dashed perpendicular.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Gives the foot.",
      remediation: t`The image is twice as far: use $2d$, not $d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: "Moves the wrong way.",
      remediation: t`Subtract $2ad$ and $2bd$; adding moves away from the line.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: "Swaps the coordinates.",
      remediation: t`Swapping is reflection in $y = x$ only.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: "Gives the image.",
      remediation: t`The foot is halfway: use $d$, not $2d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M5",
      mistake: "Moves the wrong way.",
      remediation: t`Subtract $ad$ and $bd$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M6",
      mistake: t`Forgets to divide by $a^2 + b^2$.`,
      remediation: t`$d = \frac{ax_1 + by_1 + c}{a^2 + b^2}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C13-M7",
      mistake: "Reflects in the x-axis.",
      remediation: t`In $y = x$ the coordinates swap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M8",
      mistake: "Reflects in the y-axis.",
      remediation: t`In $y = x$ the coordinates swap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M9",
      mistake: t`Reflects in $y = -x$.`,
      remediation: t`In $y = x$ the coordinates swap without changing sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M10",
      mistake: "Calls the join parallel.",
      remediation: "The join is perpendicular to the mirror line.",
      fallback: { kind: "none" },
    },
    {
      id: "C13-M11",
      mistake: "Thinks it is only bisected.",
      remediation: "It is bisected and also perpendicular.",
      fallback: { kind: "none" },
    },
    {
      id: "C13-M12",
      mistake: "Sends it through the origin.",
      remediation: "Only the line itself fixes it, not the origin.",
      fallback: { kind: "none" },
    },
    {
      id: "C13-M13",
      mistake: "Gives the foot.",
      remediation: t`The image uses $2d$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M14",
      mistake: "Moves the wrong way.",
      remediation: t`Subtract $2ad$ and $2bd$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M15",
      mistake: t`Divides by $\sqrt{a^2 + b^2}$.`,
      remediation: t`Divide by $a^2 + b^2$, without the root.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "authored" },
      stem: t`The image of the point $(1, 2)$ in the line $x + y - 7 = 0$ is`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "-7", x1: "1", y1: "2" }, params: { q: "image" } },
      options: [
        { key: "A", text: t`$(5, 6)$`, correct: true, value: "5 + 6*I" },
        { key: "B", text: t`$(3, 4)$`, correct: false, misconceptionId: "C13-M1", value: "3 + 4*I" },
        { key: "C", text: t`$(-3, -2)$`, correct: false, misconceptionId: "C13-M2", value: "-3 - 2*I" },
        { key: "D", text: t`$(6, 5)$`, correct: false, misconceptionId: "C13-M3", value: "6 + 5*I" },
      ],
      solution: {
        steps: [
          t`$d = \frac{1 + 2 - 7}{2} = -2$`,
          t`$(1 + 4,\; 2 + 4) = (5, 6)$`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "authored" },
      stem: t`The foot of the perpendicular from $(3, -1)$ to the line $2x - y + 3 = 0$ is`,
      verify: { kind: "value", inputs: { a: "2", b: "-1", c: "3", x1: "3", y1: "-1" }, params: { q: "foot" } },
      options: [
        { key: "A", text: t`$(-1, 1)$`, correct: true, value: "-1 + I" },
        { key: "B", text: t`$(-5, 3)$`, correct: false, misconceptionId: "C13-M4", value: "-5 + 3*I" },
        { key: "C", text: t`$(7, -3)$`, correct: false, misconceptionId: "C13-M5", value: "7 - 3*I" },
        { key: "D", text: t`$(-17, 9)$`, correct: false, misconceptionId: "C13-M6", value: "-17 + 9*I" },
      ],
      solution: {
        steps: [
          t`$d = \frac{6 + 1 + 3}{5} = 2$`,
          t`$(3 - 4,\; -1 + 2) = (-1, 1)$`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "authored" },
      stem: t`The image of the point $(4, -3)$ in the line $y = x$ is`,
      verify: { kind: "value", inputs: { x1: "4", y1: "-3" }, params: { q: "yx" } },
      options: [
        { key: "A", text: t`$(3, -4)$`, correct: false, misconceptionId: "C13-M9", value: "3 - 4*I" },
        { key: "B", text: t`$(-3, 4)$`, correct: true, value: "-3 + 4*I" },
        { key: "C", text: t`$(4, 3)$`, correct: false, misconceptionId: "C13-M7", value: "4 + 3*I" },
        { key: "D", text: t`$(-4, -3)$`, correct: false, misconceptionId: "C13-M8", value: "-4 - 3*I" },
      ],
      solution: {
        steps: [
          t`In $y = x$ the coordinates swap.`,
          t`$(-3, 4)$`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "authored" },
      stem: t`A point $P$ and its image $P'$ in a line $L$ are joined. The segment $PP'$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "join" } },
      options: [
        { key: "A", text: t`parallel to $L$`, correct: false, misconceptionId: "C13-M10", value: "parallel" },
        { key: "B", text: t`bisected by $L$ but not perpendicular to it`, correct: false, misconceptionId: "C13-M11", value: "bisected_only" },
        { key: "C", text: t`always through the origin`, correct: false, misconceptionId: "C13-M12", value: "through_origin" },
        { key: "D", text: t`perpendicular to $L$ and bisected by it`, correct: true, value: "perpendicular_bisected" },
      ],
      solution: {
        steps: [
          t`The image lies on the perpendicular through the point.`,
          t`The line bisects that segment.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`The image of the point $(-2, 3)$ in the line $3x - 4y + 5 = 0$ is`,
      verify: { kind: "value", inputs: { a: "3", b: "-4", c: "5", x1: "-2", y1: "3" }, params: { q: "image2" } },
      options: [
        { key: "A", text: t`$(\frac{28}{25}, - \frac{29}{25})$`, correct: true, value: "28/25 - 29*I/25" },
        { key: "B", text: t`$(- \frac{11}{25}, \frac{23}{25})$`, correct: false, misconceptionId: "C13-M13", value: "-11/25 + 23*I/25" },
        { key: "C", text: t`$(- \frac{128}{25}, \frac{179}{25})$`, correct: false, misconceptionId: "C13-M14", value: "-128/25 + 179*I/25" },
        { key: "D", text: t`$(\frac{68}{5}, - \frac{89}{5})$`, correct: false, misconceptionId: "C13-M15", value: "68/5 - 89*I/5" },
      ],
      solution: {
        steps: [
          t`$d = \frac{-6 - 12 + 5}{25} = -\frac{13}{25}$`,
          t`$\left(-2 + \frac{78}{25},\; 3 - \frac{104}{25}\right)$`,
          t`$= \left(\frac{28}{25}, -\frac{29}{25}\right)$`,
        ],
      },
    },
  ],
};
