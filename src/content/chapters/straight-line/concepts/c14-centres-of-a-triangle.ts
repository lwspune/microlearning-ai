import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`A triangle has four famous centres: where its medians meet, its angle bisectors meet, its perpendicular bisectors meet, and its altitudes meet. Do they ever coincide?`,
    reveal: t`Only in an equilateral triangle. Otherwise three of them, the orthocentre, centroid and circumcentre, still line up in a 2 : 1 pattern.`,
  },
  explanation: {
    intuition: [
      t`The **centroid** $G$ is where the medians meet: the balancing point.`,
      t`The **incentre** $I$ is where the angle bisectors meet: the centre of the inscribed circle.`,
      t`The **circumcentre** $O$ is equidistant from all three vertices.`,
      t`The **orthocentre** $H$ is where the altitudes meet.`,
    ],
    formal: [
      {
        title: "Centroid and incentre",
        points: [
          t`$G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$.`,
          t`$I = \frac{aA + bB + cC}{a + b + c}$, coordinate by coordinate.`,
          t`Here $a = BC$ is the side opposite $A$, and so on.`,
        ],
      },
      {
        title: "Circumcentre and orthocentre",
        points: [
          t`$O$: solve $OA = OB = OC$, or meet two perpendicular bisectors.`,
          t`$H$: meet two altitudes.`,
          t`Right angle at $A$: $O$ is the midpoint of the hypotenuse, $H$ is $A$.`,
          t`$H$, $G$, $O$ lie on one line with $HG : GO = 2 : 1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For the triangle $(0, 0)$, $(4, 0)$, $(0, 6)$, find the circumcentre and the orthocentre.`,
      steps: [
        t`The right angle is at $(0, 0)$.`,
        t`$O$ is the midpoint of the hypotenuse: $(2, 3)$.`,
        t`$H$ is the right-angled vertex: $(0, 0)$.`,
      ],
      answer: t`$O = (2, 3)$, $H = (0, 0)$`,
    },
    visualSpec: t`Drag a vertex and watch the four centres move, three of them sliding along Euler's line.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: "Forgets to divide by 3.",
      remediation: "The centroid is the average of the three vertices.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M2",
      mistake: "Gives a side's midpoint.",
      remediation: "A midpoint is only where one median starts.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: "Divides by 2.",
      remediation: "Three vertices, so divide by 3.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M4",
      mistake: "Gives the centroid.",
      remediation: "The incentre weights each vertex by the opposite side.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M5",
      mistake: "Weights by the wrong sides.",
      remediation: t`Vertex $A$ gets the opposite side $a = BC$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M6",
      mistake: "Gives the circumcentre.",
      remediation: "The circumcentre is equidistant from the vertices; the incentre from the sides.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M7",
      mistake: "Gives the orthocentre.",
      remediation: "In a right triangle the orthocentre is the right-angled vertex; the circumcentre is the hypotenuse's midpoint.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M8",
      mistake: "Gives the centroid.",
      remediation: "The circumcentre is equidistant from all three vertices.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M9",
      mistake: "Gives the incentre.",
      remediation: "The incentre is equidistant from the sides, not the vertices.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M10",
      mistake: "Gives the circumcentre.",
      remediation: "The altitudes of a right triangle meet at the right angle.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M11",
      mistake: "Gives the centroid.",
      remediation: "Altitudes, not medians, meet at the orthocentre.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M12",
      mistake: "Completes the rectangle.",
      remediation: "That fourth corner is not where the altitudes meet.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M13",
      mistake: "Says 1 : 1.",
      remediation: t`$G$ is twice as far from $H$ as from $O$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M14",
      mistake: "Says 1 : 2.",
      remediation: t`$HG$ is the longer part: $2 : 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M15",
      mistake: "Says 3 : 1.",
      remediation: t`$HG : GO = 2 : 1$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "authored" },
      stem: t`The centroid of the triangle with vertices $(1, 2)$, $(5, 4)$ and $(3, -3)$ is`,
      verify: { kind: "value", inputs: { A: "1 + 2*I", B: "5 + 4*I", C: "3 - 3*I" }, params: { q: "centroid" } },
      options: [
        { key: "A", text: t`$(\frac{9}{2}, \frac{3}{2})$`, correct: false, misconceptionId: "C14-M3", value: "9/2 + 3*I/2" },
        { key: "B", text: t`$(3, 1)$`, correct: true, value: "3 + I" },
        { key: "C", text: t`$(9, 3)$`, correct: false, misconceptionId: "C14-M1", value: "9 + 3*I" },
        { key: "D", text: t`$(3, 3)$`, correct: false, misconceptionId: "C14-M2", value: "3 + 3*I" },
      ],
      solution: {
        steps: [
          t`$\left(\frac{1 + 5 + 3}{3}, \frac{2 + 4 - 3}{3}\right)$`,
          t`$= (3, 1)$`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "authored" },
      stem: t`The incentre of the triangle with vertices $(0, 0)$, $(6, 0)$ and $(0, 8)$ is`,
      verify: { kind: "value", inputs: { A: "0", B: "6", C: "8*I" }, params: { q: "incentre" } },
      options: [
        { key: "A", text: t`$(2, 2)$`, correct: true, value: "2 + 2*I" },
        { key: "B", text: t`$(2, \frac{8}{3})$`, correct: false, misconceptionId: "C14-M4", value: "2 + 8*I/3" },
        { key: "C", text: t`$(\frac{5}{2}, \frac{8}{3})$`, correct: false, misconceptionId: "C14-M5", value: "5/2 + 8*I/3" },
        { key: "D", text: t`$(3, 4)$`, correct: false, misconceptionId: "C14-M6", value: "3 + 4*I" },
      ],
      solution: {
        steps: [
          t`$a = 10$, $b = 8$, $c = 6$`,
          t`$I = \frac{10(0, 0) + 8(6, 0) + 6(0, 8)}{24}$`,
          t`$= (2, 2)$`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "authored" },
      stem: t`The circumcentre of the triangle with vertices $(1, 1)$, $(7, 1)$ and $(1, 9)$ is`,
      verify: { kind: "value", inputs: { A: "1 + I", B: "7 + I", C: "1 + 9*I" }, params: { q: "circum" } },
      options: [
        { key: "A", text: t`$(4, 5)$`, correct: true, value: "4 + 5*I" },
        { key: "B", text: t`$(1, 1)$`, correct: false, misconceptionId: "C14-M7", value: "1 + I" },
        { key: "C", text: t`$(3, \frac{11}{3})$`, correct: false, misconceptionId: "C14-M8", value: "3 + 11*I/3" },
        { key: "D", text: t`$(3, 3)$`, correct: false, misconceptionId: "C14-M9", value: "3 + 3*I" },
      ],
      solution: {
        steps: [
          t`The right angle is at $(1, 1)$.`,
          t`Midpoint of $(7, 1)$ and $(1, 9)$: $(4, 5)$`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "authored" },
      stem: t`The orthocentre of the triangle with vertices $(2, 3)$, $(6, 3)$ and $(2, 7)$ is`,
      verify: { kind: "value", inputs: { A: "2 + 3*I", B: "6 + 3*I", C: "2 + 7*I" }, params: { q: "ortho" } },
      options: [
        { key: "A", text: t`$(4, 5)$`, correct: false, misconceptionId: "C14-M10", value: "4 + 5*I" },
        { key: "B", text: t`$(\frac{10}{3}, \frac{13}{3})$`, correct: false, misconceptionId: "C14-M11", value: "10/3 + 13*I/3" },
        { key: "C", text: t`$(6, 7)$`, correct: false, misconceptionId: "C14-M12", value: "6 + 7*I" },
        { key: "D", text: t`$(2, 3)$`, correct: true, value: "2 + 3*I" },
      ],
      solution: {
        steps: [
          t`The right angle is at $(2, 3)$.`,
          t`The altitudes meet there: $(2, 3)$`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`The centroid $G$ lies on the line joining the orthocentre $H$ and the circumcentre $O$, and $HG : GO$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "euler" } },
      options: [
        { key: "A", text: t`$1 : 1$`, correct: false, misconceptionId: "C14-M13", value: "one_to_one" },
        { key: "B", text: t`$1 : 2$`, correct: false, misconceptionId: "C14-M14", value: "one_to_two" },
        { key: "C", text: t`$3 : 1$`, correct: false, misconceptionId: "C14-M15", value: "three_to_one" },
        { key: "D", text: t`$2 : 1$`, correct: true, value: "two_to_one" },
      ],
      solution: {
        steps: [
          t`$H$, $G$, $O$ are collinear.`,
          t`$HG : GO = 2 : 1$`,
        ],
      },
    },
  ],
};
