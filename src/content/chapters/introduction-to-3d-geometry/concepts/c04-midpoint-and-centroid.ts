import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A drone flies in a straight line from $(2, 0, 4)$ to $(6, -2, 10)$. **Where is it when it is exactly halfway?**`,
    reveal: t`At $(4, -1, 7)$. Halfway along the path is also halfway along each axis, so each coordinate is the average of the two ends: $\frac{2 + 6}{2} = 4$, $\frac{0 - 2}{2} = -1$, $\frac{4 + 10}{2} = 7$.`,
  },
  explanation: {
    intuition: [
      t`The **mid-point** of a segment is the point exactly halfway between its two ends.`,
      t`Going halfway from one end to the other goes halfway along each axis at the same time.`,
      t`So each coordinate of the mid-point is the average of the two ends' coordinates.`,
      t`A **median** of a triangle joins a vertex to the mid-point of the opposite side.`,
      t`The three medians meet at one point, the **centroid**, whose coordinates average the three vertices.`,
      t`A parallelogram's diagonals **bisect** each other, that is, cut each other in half, so they share a mid-point.`,
    ],
    formal: [
      {
        title: "The mid-point formula",
        points: [
          t`Take the ends $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$ of a segment.`,
          t`Halfway from $x_1$ to $x_2$ is $x_1 + \frac{x_2 - x_1}{2}$ $= \frac{x_1 + x_2}{2}$.`,
          t`The same holds for $y$ and $z$, so the mid-point is $\left(\frac{x_1 + x_2}{2},\right.$ $\frac{y_1 + y_2}{2},$ $\left.\frac{z_1 + z_2}{2}\right)$.`,
          t`It is half the **sum**; half the difference, $\frac{x_2 - x_1}{2}$, is only the step from $P$.`,
          t`Example: the mid-point of $(1, -2, 5)$ and $(3, 6, -1)$ is $(2, 2, 2)$.`,
        ],
      },
      {
        title: "Finding the other end",
        points: [
          t`Sometimes the mid-point $M(x, y, z)$ and one end $P(x_1, y_1, z_1)$ are known.`,
          t`Write $\frac{x_1 + x_2}{2} = x$ and solve: $x_2 = 2x - x_1$.`,
          t`Do the same for $y$ and $z$: double the mid-point's coordinate, then subtract the known end's.`,
          t`Example: mid-point $(1, 3, 0)$ and end $(4, 2, -5)$ give the other end $(-2, 4, 5)$.`,
        ],
      },
      {
        title: "The centroid of a triangle",
        points: [
          t`The **centroid** $G$ of a triangle is the point where its three medians meet.`,
          t`For vertices $(x_1, y_1, z_1)$, $(x_2, y_2, z_2)$ and $(x_3, y_3, z_3)$, $G$ averages them.`,
          t`$G = \left(\frac{x_1 + x_2 + x_3}{3},\right.$ $\frac{y_1 + y_2 + y_3}{3},$ $\left.\frac{z_1 + z_2 + z_3}{3}\right)$.`,
          t`Three vertices, so divide by $3$; the $2$ belongs to the mid-point of two points.`,
          t`Example: $(1, 0, 4)$, $(2, 5, -1)$ and $(3, -2, 3)$ have centroid $(2, 1, 2)$.`,
        ],
      },
      {
        title: "Unknowns from a given centroid",
        points: [
          t`When $G$ is given, each coordinate gives one equation; solve each for its unknown.`,
          t`Multiply by $3$ first: the three $x$-coordinates add up to $3$ times $G$'s $x$-coordinate.`,
          t`Example: the origin is the centroid of $P(2a, 2, 6)$, $Q(-4, 3b, -10)$ and $R(8, 14, 2c)$.`,
          t`Then $2a - 4 + 8 = 0$, $2 + 3b + 14 = 0$ and $6 - 10 + 2c = 0$.`,
          t`So $a = -2$, $b = -\frac{16}{3}$ and $c = 2$.`,
        ],
      },
      {
        title: "The fourth vertex",
        points: [
          t`In a parallelogram $ABCD$ the vertices go round in order, so $A$ is opposite $C$ and $B$ is opposite $D$.`,
          t`So the **diagonals** are $AC$ and $BD$, and they have the same mid-point.`,
          t`Equate the two mid-points and double: $x_A + x_C = x_B + x_D$, and the same for $y$ and $z$.`,
          t`So $x_D = x_A + x_C - x_B$: add the two opposite vertices, subtract the third.`,
          t`Example: $A(1, 2, 0)$, $B(3, 1, 2)$ and $C(4, 5, 1)$ give $D(2, 6, -1)$.`,
          t`Pairing $A$ with $B$ instead gives a vertex of a different parallelogram, not of $ABCD$.`,
        ],
      },
      {
        title: "The length of a median",
        points: [
          t`For the median through $A$ of triangle $ABC$, first find the mid-point $D$ of $BC$.`,
          t`Then find the length $AD$ with the distance formula.`,
          t`The median ends at $D$; the centroid $G$ lies on it, but only $\frac{2}{3}$ of the way from $A$.`,
          t`Example: for $A(2, 1, 3)$, $B(0, 4, 1)$ and $C(4, 2, -1)$, the mid-point of $BC$ is $D(2, 3, 0)$.`,
          t`Then $AD = \sqrt{0 + 4 + 9} = \sqrt{13}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the lengths of the medians of the triangle with vertices $A(0, 0, 6)$, $B(0, 4, 0)$ and $C(6, 0, 0)$.`,
      steps: [
        t`The mid-points of $BC$, $CA$ and $AB$ are $D(3, 2, 0)$, $E(3, 0, 3)$ and $F(0, 2, 3)$.`,
        t`$AD = \sqrt{3^2 + 2^2 + (-6)^2}$ $= \sqrt{49} = 7$.`,
        t`$BE = \sqrt{3^2 + (-4)^2 + 3^2}$ $= \sqrt{34}$.`,
        t`$CF = \sqrt{(-6)^2 + 2^2 + 3^2}$ $= \sqrt{49} = 7$.`,
      ],
      answer: t`The medians are $AD = 7$, $BE = \sqrt{34}$ and $CF = 7$.`,
    },
    visualSpec: t`Drag two points in 3D and watch the mid-point stay halfway along each axis; add a third point to see the medians meet at the centroid.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Halving the difference: taking the mid-point's $x$-coordinate as $\frac{x_2 - x_1}{2}$`,
      remediation: t`The mid-point is half the **sum**: $\frac{x_1 + x_2}{2}$, and the same for $y$ and $z$. Half the difference is only the step from one end, not a point on the segment.`,
      fallback: { kind: "ext", topic: "mid-point formula in a plane" },
    },
    {
      id: "C04-M2",
      mistake: t`Dividing the centroid's sum by $2$, as for a mid-point`,
      remediation: t`The centroid averages **three** vertices, so divide each sum by $3$: $\frac{x_1 + x_2 + x_3}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Taking $AB$ as a diagonal of $ABCD$, so $x_D = x_A + x_B - x_C$`,
      remediation: t`In $ABCD$ the vertices go round in order, so the diagonals are $AC$ and $BD$. Their mid-points agree, so $x_D = x_A + x_C - x_B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Measuring a median from the vertex to the centroid",
      remediation: t`A median runs from a vertex to the mid-point of the opposite side. The centroid lies on it, only $\frac{2}{3}$ of the way along.`,
      fallback: { kind: "ext", topic: "medians of a triangle" },
    },
    {
      id: "C04-M5",
      mistake: t`Leaving out the $\frac{1}{2}$ or $\frac{1}{3}$: writing a mid-point or centroid as a plain sum of coordinates`,
      remediation: t`Divide the sum: the mid-point is $\frac{x_1 + x_2}{2}$ and the centroid is $\frac{x_1 + x_2 + x_3}{3}$. When one of them is given, multiply it by $2$ or $3$ before you subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Averaging the points given in the question instead of solving for the unknown one",
      remediation: "The given mid-point or centroid is already the average. Put the unknown point's coordinates into the formula and solve for them.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M1 on a fourth-vertex item halves both diagonals' differences, $\frac{x_C - x_A}{2} = \frac{x_D - x_B}{2}$, giving $x_B + x_C - x_A$.`,
    t`C04-M5 on a fourth-vertex item finds the mid-point of $AC$ correctly, then sets $x_B + x_D$ equal to it. A student who drops the $\frac{1}{2}$ on both sides gets the key.`,
    t`Misc Q3 (centroid at the origin) is a formal-slide example, not an item: with $G$ the origin, C04-M2 and C04-M5 both give the key.`,
    "Misc Q2 is the worked example. On its triangle C04-M1 gives the key for every median (the zero coordinates hide the sign of half the difference), so C04-Q3 uses fresh numbers.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Misc Eg.9" },
      stem: t`The centroid of a triangle $ABC$ is the point $(1, 1, 1)$. If $A$ is $(3, -5, 7)$ and $B$ is $(-1, 7, -6)$, then $C$ is:`,
      verify: { kind: "value", inputs: { A: "(3, -5, 7)", B: "(-1, 7, -6)", G: "(1, 1, 1)" }, params: { ask: "vertex" } },
      options: [
        { key: "A", text: t`$(-1, -1, 0)$`, correct: false, misconceptionId: "C04-M5", value: "(-1, -1, 0)" },
        { key: "B", text: t`$(1, 1, \frac{2}{3})$`, correct: false, misconceptionId: "C04-M6", value: "(1, 1, 2/3)" },
        { key: "C", text: t`$(1, 1, 2)$`, correct: true, value: "(1, 1, 2)" },
        { key: "D", text: t`$(0, 0, 1)$`, correct: false, misconceptionId: "C04-M2", value: "(0, 0, 1)" },
      ],
      solution: {
        steps: [
          t`Let $C$ be $(x, y, z)$. The centroid averages the vertices: $\frac{3 - 1 + x}{3} = 1$, so $x = 3 - 2 = 1$.`,
          t`$\frac{-5 + 7 + y}{3} = 1$, so $y = 3 - 2 = 1$.`,
          t`$\frac{7 - 6 + z}{3} = 1$, so $z = 3 - 1 = 2$.`,
          t`So $C$ is $(1, 1, 2)$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Misc Q1" },
      stem: t`Three vertices of a parallelogram $ABCD$ are $A(3, -1, 2)$, $B(1, 2, -4)$ and $C(-1, 1, 2)$. The fourth vertex $D$ is:`,
      verify: { kind: "value", inputs: { A: "(3, -1, 2)", B: "(1, 2, -4)", C: "(-1, 1, 2)" }, params: { ask: "fourth" } },
      options: [
        { key: "A", text: t`$(-3, 4, -4)$`, correct: false, misconceptionId: "C04-M1", value: "(-3, 4, -4)" },
        { key: "B", text: t`$(5, 0, -4)$`, correct: false, misconceptionId: "C04-M3", value: "(5, 0, -4)" },
        { key: "C", text: t`$(0, -2, 6)$`, correct: false, misconceptionId: "C04-M5", value: "(0, -2, 6)" },
        { key: "D", text: t`$(1, -2, 8)$`, correct: true, value: "(1, -2, 8)" },
      ],
      solution: {
        steps: [
          t`In $ABCD$ the diagonals are $AC$ and $BD$; they share a mid-point, so $x_A + x_C = x_B + x_D$, and the same for $y$, $z$.`,
          t`$x_D = 3 - 1 - 1 = 1$ and $y_D = -1 + 1 - 2 = -2$.`,
          t`$z_D = 2 + 2 + 4 = 8$, so $D$ is $(1, -2, 8)$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The length of the median through $A$ of the triangle with vertices $A(1, 2, -3)$, $B(3, 0, 1)$ and $C(-1, 4, 5)$ is:`,
      verify: { kind: "value", inputs: { A: "(1, 2, -3)", B: "(3, 0, 1)", C: "(-1, 4, 5)" }, params: { ask: "median" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C04-M4", value: "4" },
        { key: "B", text: t`$\sqrt{86}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(86)" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$\sqrt{34}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(34)" },
      ],
      solution: {
        steps: [
          t`The median through $A$ ends at the mid-point of $BC$: $D(1, 2, 3)$, averaging $3$ and $-1$, $0$ and $4$, $1$ and $5$.`,
          t`$AD = \sqrt{0^2 + 0^2 + 6^2} = 6$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The mid-point of the segment $PQ$ is $(2, -1, 4)$. If $P$ is $(3, 2, -2)$, then $Q$ is:`,
      verify: { kind: "value", inputs: { P: "(3, 2, -2)", M: "(2, -1, 4)" }, params: { ask: "other_end" } },
      options: [
        { key: "A", text: t`$(7, 0, 6)$`, correct: false, misconceptionId: "C04-M1", value: "(7, 0, 6)" },
        { key: "B", text: t`$(-1, -3, 6)$`, correct: false, misconceptionId: "C04-M5", value: "(-1, -3, 6)" },
        { key: "C", text: t`$(\frac{5}{2}, \frac{1}{2}, 1)$`, correct: false, misconceptionId: "C04-M6", value: "(5/2, 1/2, 1)" },
        { key: "D", text: t`$(1, -4, 10)$`, correct: true, value: "(1, -4, 10)" },
      ],
      solution: {
        steps: [
          t`Let $Q$ be $(x, y, z)$. Then $\frac{3 + x}{2} = 2$, so $x = 4 - 3 = 1$.`,
          t`$\frac{2 + y}{2} = -1$, so $y = -2 - 2 = -4$.`,
          t`$\frac{-2 + z}{2} = 4$, so $z = 8 + 2 = 10$. So $Q$ is $(1, -4, 10)$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`Three vertices of a parallelogram $ABCD$ are $A(2, -1, 3)$, $B(4, 1, -1)$ and $C(0, 5, 1)$. Its diagonals meet at the point:`,
      verify: { kind: "value", inputs: { A: "(2, -1, 3)", B: "(4, 1, -1)", C: "(0, 5, 1)" }, params: { ask: "meet" } },
      options: [
        { key: "A", text: t`$(2, 4, 4)$`, correct: false, misconceptionId: "C04-M5", value: "(2, 4, 4)" },
        { key: "B", text: t`$(1, 2, 2)$`, correct: true, value: "(1, 2, 2)" },
        { key: "C", text: t`$(-1, 3, -1)$`, correct: false, misconceptionId: "C04-M1", value: "(-1, 3, -1)" },
        { key: "D", text: t`$(3, 0, 1)$`, correct: false, misconceptionId: "C04-M3", value: "(3, 0, 1)" },
      ],
      solution: {
        steps: [
          t`In $ABCD$, $A$ is opposite $C$, so $AC$ is a diagonal.`,
          t`The diagonals bisect each other, so they meet at the mid-point of $AC$.`,
          t`Average $A$ and $C$: $\frac{2 + 0}{2} = 1$, $\frac{-1 + 5}{2} = 2$, $\frac{3 + 1}{2} = 2$. They meet at $(1, 2, 2)$.`,
        ],
      },
    },
  ],
};
