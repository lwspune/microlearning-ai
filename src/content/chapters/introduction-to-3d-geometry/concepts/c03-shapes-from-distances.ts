import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Three points are $3$, $4$ and $7$ units apart in pairs. Three others are $5$, $12$ and $13$ apart. **Which three make a triangle, and what kind?**`,
    reveal: t`$3 + 4 = 7$: the way round through the middle point is no longer than the straight way, so the first three lie on one line. $5^2 + 12^2 = 13^2$, so the second three make a right-angled triangle. Lengths add up for a line; squares add up for a right angle.`,
  },
  explanation: {
    intuition: [
      t`Points are **collinear** when they all lie on one straight line.`,
      t`Going from $P$ to $R$ by way of $Q$ is never shorter than going straight from $P$ to $R$.`,
      t`The detour costs nothing only when $Q$ lies on the **segment** $PR$, the straight piece between $P$ and $R$.`,
      t`Then $PQ + QR = PR$, so three distances tell a line from a triangle without any drawing.`,
      t`For a triangle, the same distances show its kind: equal sides, or a right angle.`,
      t`For four points, the sides and the two diagonals show a parallelogram or a rectangle.`,
    ],
    formal: [
      {
        title: "Collinear points",
        points: [
          t`Find all three distances $PQ$, $QR$ and $PR$ by the distance formula.`,
          t`The points are collinear exactly when the two shorter distances add up to the longest.`,
          t`The point that is not an end of the longest distance lies **between** the other two.`,
          t`Example: $A(1, 0, 2)$, $B(2, 2, 4)$, $C(4, 6, 8)$ give $AB = 3$, $BC = 6$, $AC = 9$.`,
          t`$3 + 6 = 9$, so $A$, $B$, $C$ are collinear, with $B$ between $A$ and $C$.`,
          t`If no such sum works, the points form a triangle; two equal distances alone never make a line.`,
        ],
      },
      {
        title: "Which kind of triangle",
        points: [
          t`A triangle is **isosceles** when two sides are equal, and **equilateral** when all three are.`,
          t`Pythagoras' theorem works backwards too: if $a^2 + b^2 = c^2$, the angle opposite $c$ is $90^\circ$.`,
          t`So compare the **squared** distances; the right angle sits opposite the longest side.`,
          t`Example: $A(1, 1, 1)$, $B(2, 3, 3)$, $C(5, 1, -1)$ give $AB^2 = 9$, $AC^2 = 20$, $BC^2 = 29$.`,
          t`$9 + 20 = 29$, so the angle at $A$, opposite $BC$, is $90^\circ$; no two sides are equal.`,
          t`If the lengths themselves add up, $a + b = c$, the points are collinear: there is no triangle.`,
        ],
      },
      {
        title: "Parallelograms and rectangles",
        points: [
          t`Name the four vertices in order round the shape: in $ABCD$, $AB$ is opposite $CD$, and $BC$ is opposite $DA$.`,
          t`$ABCD$ is a **parallelogram** when both pairs of opposite sides are equal: $AB = CD$ and $BC = DA$.`,
          t`One equal pair is not enough, and sides next to each other, like $AB$ and $BC$, need not be equal.`,
          t`A **diagonal** joins opposite vertices: here $AC$ and $BD$.`,
          t`A parallelogram is a **rectangle** when, in addition, its diagonals are equal: $AC = BD$.`,
          t`This side test relies on the four points lying in one plane, as they do in NCERT's questions.`,
        ],
      },
      {
        title: "A point on an axis",
        points: [
          t`A point on the $x$-axis is $(x, 0, 0)$; on the $y$-axis, $(0, y, 0)$; on the $z$-axis, $(0, 0, z)$.`,
          t`For the point $P$ equidistant from $A$ and $B$, write $PA^2 = PB^2$.`,
          t`Both sides contain $x^2$, which cancels and leaves a linear equation in $x$.`,
          t`Example: $A(0, 2, 1)$, $B(2, 0, 3)$ and $P(x, 0, 0)$ give $x^2 + 5 = x^2 - 4x + 13$.`,
          t`So $4x = 8$ and $P = (2, 0, 0)$; check: $PA^2 = PB^2 = 9$.`,
          t`The mid-point of $AB$ is not the answer: its $x = 1$ gives $PA^2 = 6$ but $PB^2 = 10$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Show that $A(1, 2, 3)$, $B(-1, -2, -1)$, $C(2, 3, 2)$ and $D(4, 7, 6)$ are the vertices of a parallelogram $ABCD$, but not of a rectangle.`,
      steps: [
        t`Opposite sides $AB$ and $CD$: $AB^2 = 4 + 16 + 16 = 36$ and $CD^2 = 4 + 16 + 16 = 36$.`,
        t`Opposite sides $BC$ and $DA$: $BC^2 = 9 + 25 + 9 = 43$ and $DA^2 = 9 + 25 + 9 = 43$.`,
        t`Both pairs of opposite sides are equal, so $ABCD$ is a parallelogram.`,
        t`Diagonals: $AC^2 = 1 + 1 + 1 = 3$ and $BD^2 = 25 + 81 + 49 = 155$.`,
        t`$AC \ne BD$, so the parallelogram is not a rectangle.`,
      ],
      answer: t`$ABCD$ is a parallelogram, with $AB = CD = 6$ and $BC = DA = \sqrt{43}$, but not a rectangle: $AC = \sqrt{3}$ and $BD = \sqrt{155}$.`,
    },
    visualSpec: t`Drag three or four points in space and watch the distances; a sum lights up when two lengths add to the third (a line) or two squares add to the third (a right angle).`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Takes a point equidistant from two others to be their mid-point: two equal distances then seem to make three points collinear, and the equidistant point on an axis is put under the mid-point",
      remediation: t`Two equal distances make an isosceles triangle, not a line: points are collinear only when the two shorter distances add up to the longest. The point on an axis equidistant from $A$ and $B$ comes from $PA^2 = PB^2$, not from the mid-point.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Calls a triangle right-angled when two sides add up to the third ($a + b = c$), without squaring, and never checks for collinear points`,
      remediation: t`The right-angle test squares the sides: $a^2 + b^2 = c^2$. When the lengths themselves add up, $a + b = c$, the points are collinear and there is no triangle at all.`,
      fallback: { kind: "ext", topic: "Pythagoras' theorem" },
    },
    {
      id: "C03-M3",
      mistake: t`Thinks the adjacent sides of a parallelogram are equal, so sets the two sides at $D$ equal: $CD = DA$`,
      remediation: t`In a parallelogram $ABCD$ the **opposite** sides are equal: $AB = CD$ and $BC = DA$. Sides next to each other are equal only in a rhombus.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Uses one pair of opposite sides only ($AB = CD$) and keeps every value of $k$ it gives`,
      remediation: t`One pair of equal opposite sides is not enough: $BC = DA$ must hold as well. Solve both equations and keep only the value of $k$ that satisfies both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Drops the minus sign of a negative coordinate in the distance formula, so the step from $-2$ to $1$ counts as $1$, not $3$`,
      remediation: t`Subtract with the signs as given: $1 - (-2) = 3$. Each term of the distance formula is $(x_2 - x_1)^2$, minus signs included.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: "Changes a sign while moving terms across the equals sign, so the point on the axis comes out on the wrong side of the origin",
      remediation: t`After $x^2$ cancels, a term that moves across the equals sign changes its sign. Then check: $PA^2$ and $PB^2$ must come out equal at your point.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key on any scalene triangle and C03-M2 gives it on an isosceles triangle with no right angle, so the triangle items use collinear points (C03-Q1) and a right-angled isosceles triangle (C03-Q2).",
    t`C03-M5 gives the key whenever no coordinate changes sign between the points (the book's Ex 11.2 Q3(ii) has every $x \le 0$). C03-Q1, C03-Q2 and C03-Q4 shift the book's points by a constant step for that reason; the shapes and side lengths are the book's.`,
    t`Equal opposite sides prove a parallelogram only for four points in one plane. Every parallelogram item's $D$ is $A - B + C$, so the key is planar; the solutions use NCERT's side test.`,
    t`C03-M4's option is both roots of $AB = CD$, one of which is the key; only the key also satisfies $BC = DA$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q2" },
      stem: t`The points $P(-3, 2, 4)$, $Q(0, 1, 2)$ and $R(6, -1, -2)$ are:`,
      verify: { kind: "value", inputs: { A: "(-3, 2, 4)", B: "(0, 1, 2)", C: "(6, -1, -2)" }, params: { ask: "tri" } },
      options: [
        { key: "A", text: t`the vertices of a right-angled triangle`, correct: false, misconceptionId: "C03-M2", value: "right_angled" },
        { key: "B", text: t`the vertices of an isosceles triangle with no right angle`, correct: false, misconceptionId: "C03-M5", value: "isosceles" },
        { key: "C", text: t`collinear`, correct: true, value: "collinear" },
        { key: "D", text: t`the vertices of a triangle with no right angle and no equal sides`, correct: false, misconceptionId: "C03-M1", value: "scalene" },
      ],
      solution: {
        steps: [
          t`$PQ^2 = 9 + 1 + 4 = 14$, so $PQ = \sqrt{14}$.`,
          t`$QR^2 = 36 + 4 + 16 = 56$, so $QR = 2\sqrt{14}$; $PR^2 = 81 + 9 + 36 = 126$, so $PR = 3\sqrt{14}$.`,
          t`$PQ + QR = \sqrt{14} + 2\sqrt{14}$ $= 3\sqrt{14} = PR$.`,
          t`So $P$, $Q$, $R$ are collinear, with $Q$ between $P$ and $R$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q3(ii)" },
      stem: t`The points $A(2, 7, 10)$, $B(1, 6, 6)$ and $C(-2, 9, 6)$ are:`,
      verify: { kind: "value", inputs: { A: "(2, 7, 10)", B: "(1, 6, 6)", C: "(-2, 9, 6)" }, params: { ask: "tri" } },
      options: [
        { key: "A", text: t`the vertices of an isosceles triangle with no right angle`, correct: false, misconceptionId: "C03-M2", value: "isosceles" },
        { key: "B", text: t`the vertices of a triangle with no right angle and no equal sides`, correct: false, misconceptionId: "C03-M5", value: "scalene" },
        { key: "C", text: t`the vertices of a right-angled isosceles triangle`, correct: true, value: "right_isosceles" },
        { key: "D", text: t`collinear`, correct: false, misconceptionId: "C03-M1", value: "collinear" },
      ],
      solution: {
        steps: [
          t`$AB^2 = 1 + 1 + 16 = 18$, $BC^2 = 9 + 9 + 0 = 18$ and $CA^2 = 16 + 4 + 16 = 36$.`,
          t`$AB + BC = 6\sqrt{2} \ne 6 = CA$, so the points are not collinear.`,
          t`$AB^2 + BC^2 = 36 = CA^2$, so the angle at $B$ is $90^\circ$.`,
          t`$AB = BC$ as well, so the triangle is right-angled and isosceles.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The point on the $x$-axis that is equidistant from $A(-1, -1, 0)$ and $B(3, 4, 5)$ is:`,
      verify: { kind: "value", inputs: { A: "(-1, -1, 0)", B: "(3, 4, 5)" }, params: { ask: "axis", axis: "x" } },
      options: [
        { key: "A", text: t`$(1, 0, 0)$`, correct: false, misconceptionId: "C03-M1", value: "(1, 0, 0)" },
        { key: "B", text: t`$(12, 0, 0)$`, correct: false, misconceptionId: "C03-M5", value: "(12, 0, 0)" },
        { key: "C", text: t`$(-6, 0, 0)$`, correct: false, misconceptionId: "C03-M6", value: "(-6, 0, 0)" },
        { key: "D", text: t`$(6, 0, 0)$`, correct: true, value: "(6, 0, 0)" },
      ],
      solution: {
        steps: [
          t`Let $P = (x, 0, 0)$. Then $PA^2 = (x + 1)^2 + 1$ $= x^2 + 2x + 2$.`,
          t`$PB^2 = (x - 3)^2 + 16 + 25$ $= x^2 - 6x + 50$.`,
          t`$PA^2 = PB^2$ gives $2x + 2 = -6x + 50$, so $8x = 48$ and $x = 6$.`,
          t`The point is $(6, 0, 0)$. Check: $PA^2 = 49 + 1 = 50$ and $PB^2 = 9 + 41 = 50$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q3(iii)" },
      stem: t`$A(0, 1, 1)$, $B(2, -3, 5)$, $C(5, -8, 8)$ and $D(3, -4, k)$ are the vertices of a parallelogram $ABCD$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { A: "(0, 1, 1)", B: "(2, -3, 5)", C: "(5, -8, 8)", D: "(3, -4, k)" }, params: { ask: "para_k" } },
      options: [
        { key: "A", text: t`$4$ or $12$`, correct: false, misconceptionId: "C03-M4", value: "{4, 12}" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C03-M5", value: "6" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C03-M3", value: "7/2" },
      ],
      solution: {
        steps: [
          t`$AB^2 = 4 + 16 + 16 = 36$ and $CD^2 = 4 + 16 + (k - 8)^2$, so $(k - 8)^2 = 16$: $k = 4$ or $12$.`,
          t`$BC^2 = 9 + 25 + 9 = 43$ and $DA^2 = 9 + 25 + (k - 1)^2$, so $(k - 1)^2 = 9$: $k = 4$ or $-2$.`,
          t`Both pairs of opposite sides are equal only when $k = 4$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The point on the $z$-axis that is equidistant from $A(-3, 0, -1)$ and $B(5, 4, 3)$ is:`,
      verify: { kind: "value", inputs: { A: "(-3, 0, -1)", B: "(5, 4, 3)" }, params: { ask: "axis", axis: "z" } },
      options: [
        { key: "A", text: t`$(0, 0, 5)$`, correct: true, value: "(0, 0, 5)" },
        { key: "B", text: t`$(0, 0, 1)$`, correct: false, misconceptionId: "C03-M1", value: "(0, 0, 1)" },
        { key: "C", text: t`$(0, 0, 10)$`, correct: false, misconceptionId: "C03-M5", value: "(0, 0, 10)" },
        { key: "D", text: t`$(0, 0, -5)$`, correct: false, misconceptionId: "C03-M6", value: "(0, 0, -5)" },
      ],
      solution: {
        steps: [
          t`Let $P = (0, 0, z)$. Then $PA^2 = 9 + (z + 1)^2$ $= z^2 + 2z + 10$.`,
          t`$PB^2 = 25 + 16 + (z - 3)^2$ $= z^2 - 6z + 50$.`,
          t`$PA^2 = PB^2$ gives $2z + 10 = -6z + 50$, so $8z = 40$ and $z = 5$.`,
          t`The point is $(0, 0, 5)$. Check: $PA^2 = 9 + 36 = 45$ and $PB^2 = 41 + 4 = 45$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`$A(2, 3, 0)$, $B(-1, -2, -1)$, $C(-1, 0, 0)$ and $D(2, k, 1)$ are the vertices of a parallelogram $ABCD$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { A: "(2, 3, 0)", B: "(-1, -2, -1)", C: "(-1, 0, 0)", D: "(2, k, 1)" }, params: { ask: "para_k" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M3", value: "0" },
        { key: "C", text: t`$-5$ or $5$`, correct: false, misconceptionId: "C03-M4", value: "{-5, 5}" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`$AB^2 = 9 + 25 + 1 = 35$ and $CD^2 = 9 + k^2 + 1$, so $k^2 = 25$: $k = 5$ or $-5$.`,
          t`$BC^2 = 0 + 4 + 1 = 5$ and $DA^2 = 0 + (k - 3)^2 + 1$, so $(k - 3)^2 = 4$: $k = 5$ or $1$.`,
          t`Both pairs of opposite sides are equal only when $k = 5$.`,
        ],
      },
    },
  ],
};
