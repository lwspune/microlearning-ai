import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A box is $3$ m long, $4$ m wide and $12$ m high. **How long is the longest straight rod that fits inside it?**`,
    reveal: t`The floor's diagonal is $\sqrt{3^2 + 4^2} = 5$ m. It meets the $12$ m height at a right angle, so the rod is $\sqrt{5^2 + 12^2} = 13$ m. Pythagoras twice: that is the distance formula in space.`,
  },
  explanation: {
    intuition: [
      t`In a plane, Pythagoras turns the $x$ and $y$ differences of two points into their distance.`,
      t`In space, two points can also differ in height, along the $z$-axis: a third difference.`,
      t`Picture a box with edges along the axes and the two points at opposite corners.`,
      t`Pythagoras on the base gives the base diagonal.`,
      t`Pythagoras again, with the height, gives the full distance.`,
      t`So the distance is the square root of the sum of three squared differences.`,
    ],
    formal: [
      {
        title: "Pythagoras twice",
        points: [
          t`Take two points $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$.`,
          t`Draw a **cuboid** (a rectangular box) with $PQ$ as a diagonal and faces parallel to the coordinate planes.`,
          t`Its edges have lengths $|x_2 - x_1|$, $|y_2 - y_1|$ and $|z_2 - z_1|$.`,
          t`Let $R(x_2, y_2, z_1)$ be the corner at the height of $P$, directly below or above $Q$.`,
          t`In the base, Pythagoras gives $PR^2 = (x_2 - x_1)^2$ $+ (y_2 - y_1)^2$.`,
          t`$RQ$ is parallel to the $z$-axis, so angle $PRQ$ is $90^\circ$ and $PQ^2 = PR^2 + RQ^2$.`,
        ],
      },
      {
        title: "The distance formula",
        points: [
          t`So $PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$ $+ (z_2 - z_1)^2$.`,
          t`The distance $PQ$ is the positive square root of this sum.`,
          t`Each difference is squared on its own, and then the three squares are added.`,
          t`The order of subtraction does not matter: $(x_1 - x_2)^2 = (x_2 - x_1)^2$.`,
          t`Example: $(2, 3, 5)$ and $(4, 3, 1)$ differ by $2$, $0$ and $-4$.`,
          t`So their distance is $\sqrt{4 + 0 + 16} = \sqrt{20}$ $= 2\sqrt{5}$ units.`,
        ],
      },
      {
        title: "Distance from the origin",
        points: [
          t`The **origin** $O(0, 0, 0)$ is the point where the three axes meet.`,
          t`For $P(x, y, z)$, the differences from $O$ are just $x$, $y$ and $z$.`,
          t`So $OP = \sqrt{x^2 + y^2 + z^2}$.`,
          t`Example: $(1, -2, 2)$ is $\sqrt{1 + 4 + 4} = 3$ units from $O$.`,
        ],
      },
      {
        title: "An unknown coordinate",
        points: [
          t`Sometimes the distance $d$ is given and one coordinate, say $k$, is unknown.`,
          t`Write $PQ^2$ with $k$ in it, and set it equal to $d^2$ to clear the square root.`,
          t`This often comes down to $(k - a)^2 = m$ for some numbers $a$ and $m$.`,
          t`When $m > 0$, both $k = a + \sqrt{m}$ and $k = a - \sqrt{m}$ fit: two answers.`,
          t`When $m = 0$ there is one answer, and when $m < 0$ there is none.`,
        ],
      },
      {
        title: "Points on an axis",
        points: [
          t`A point on the $x$-axis is $(x, 0, 0)$; on the $y$-axis, $(0, y, 0)$; on the $z$-axis, $(0, 0, z)$.`,
          t`Example: find the points on the $z$-axis $3$ units from $(2, 1, 0)$.`,
          t`The distance from $(0, 0, z)$ gives $4 + 1 + z^2 = 9$, so $z^2 = 4$.`,
          t`So $z = 2$ or $z = -2$: the points $(0, 0, 2)$ and $(0, 0, -2)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the points on the $y$-axis at a distance of $7$ units from $A(3, 1, -2)$.`,
      steps: [
        t`A point on the $y$-axis is $B(0, y, 0)$.`,
        t`$AB^2 = (0 - 3)^2 + (y - 1)^2$ $+ (0 + 2)^2$ $= (y - 1)^2 + 13$.`,
        t`Set $AB^2 = 7^2 = 49$: $(y - 1)^2 = 36$.`,
        t`$y - 1 = 6$ or $y - 1 = -6$, so $y = 7$ or $y = -5$.`,
        t`Check $(0, -5, 0)$: $\sqrt{9 + 36 + 4} = \sqrt{49} = 7$.`,
      ],
      answer: t`The points are $(0, 7, 0)$ and $(0, -5, 0)$.`,
    },
    visualSpec: t`Drag two corners of a box in 3D and watch the base diagonal and the height combine, by Pythagoras twice, into the distance.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Using the plane formula $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ in space, dropping the $z$ term`,
      remediation: t`A point in space has three coordinates, so the distance has three squares under the root: add $(z_2 - z_1)^2$ too. It drops out only when the two $z$-coordinates are equal.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Adding the coordinates, $(x_2 + x_1)^2 + \ldots$, instead of subtracting them`,
      remediation: t`Distance measures how far apart the coordinates are, so subtract them: $x_2 - x_1$, $y_2 - y_1$, $z_2 - z_1$. With a negative coordinate, $x_2 - (-3) = x_2 + 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Stopping at the sum of squares and giving $PQ^2$ as the distance`,
      remediation: t`The sum of the three squares is $PQ^2$. Take its square root to get the distance $PQ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Adding the three differences first and then squaring the sum, so $PQ = |(x_2 - x_1) + (y_2 - y_1) + (z_2 - z_1)|$`,
      remediation: t`Square each difference on its own, then add the three squares. $(a + b + c)^2$ is not $a^2 + b^2 + c^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Keeping only the positive root of $(k - a)^2 = m$, so giving one answer where two fit`,
      remediation: t`$(k - a)^2 = m$ with $m > 0$ gives $k - a = \sqrt{m}$ or $k - a = -\sqrt{m}$. Both values give a point at the required distance.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M2 (adding coordinates) gives the key on a distance from the origin, so C02-Q4 leaves it out.",
    t`C02-M1 (the plane formula) needs a non-zero $z$ difference; it is undefined when the unknown is the $z$-coordinate.`,
    t`C02-M3 on an unknown coordinate sets the sum of squares equal to $d$, which gives nested surds or no real value, so only distance items carry it.`,
    "C02-M5 applies only to unknown-coordinate items (C02-Q5, C02-Q6). C02-Q5 and C02-Q6 are written in the CBSE style with integer roots.",
    t`Ex 11.2 Q1(i) is the formal slide's example; Q1(iv) is left out because its $z$ difference is $0$, so C02-M1 would give the key.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/11.2 Eg.3" },
      stem: t`The distance between the points $P(1, -3, 4)$ and $Q(-4, 1, 2)$ is:`,
      verify: { kind: "value", inputs: { P: "(1, -3, 4)", Q: "(-4, 1, 2)" }, params: { ask: "dist" } },
      options: [
        { key: "A", text: t`$3 \sqrt{5}$`, correct: true, value: "3*sqrt(5)" },
        { key: "B", text: t`$\sqrt{41}$`, correct: false, misconceptionId: "C02-M1", value: "sqrt(41)" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C02-M2", value: "7" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C02-M4", value: "3" },
      ],
      solution: {
        steps: [
          t`The differences are $-4 - 1 = -5$, $1 - (-3) = 4$ and $2 - 4 = -2$.`,
          t`$PQ^2 = 25 + 16 + 4 = 45$.`,
          t`So $PQ = \sqrt{45} = 3\sqrt{5}$ units.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q1(ii)" },
      stem: t`The distance between the points $(-3, 7, 2)$ and $(2, 4, -1)$ is:`,
      verify: { kind: "value", inputs: { P: "(-3, 7, 2)", Q: "(2, 4, -1)" }, params: { ask: "dist" } },
      options: [
        { key: "A", text: t`$\sqrt{123}$`, correct: false, misconceptionId: "C02-M2", value: "sqrt(123)" },
        { key: "B", text: t`$43$`, correct: false, misconceptionId: "C02-M3", value: "43" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
        { key: "D", text: t`$\sqrt{43}$`, correct: true, value: "sqrt(43)" },
      ],
      solution: {
        steps: [
          t`The differences are $2 - (-3) = 5$, $4 - 7 = -3$ and $-1 - 2 = -3$.`,
          t`The sum of their squares is $25 + 9 + 9 = 43$.`,
          t`So the distance is $\sqrt{43}$ units.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q1(iii)" },
      stem: t`The distance between the points $(-1, 3, -4)$ and $(1, -3, 4)$ is:`,
      verify: { kind: "value", inputs: { P: "(-1, 3, -4)", Q: "(1, -3, 4)" }, params: { ask: "dist" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C02-M4", value: "4" },
        { key: "B", text: t`$2 \sqrt{26}$`, correct: true, value: "2*sqrt(26)" },
        { key: "C", text: t`$2 \sqrt{10}$`, correct: false, misconceptionId: "C02-M1", value: "2*sqrt(10)" },
        { key: "D", text: t`$104$`, correct: false, misconceptionId: "C02-M3", value: "104" },
      ],
      solution: {
        steps: [
          t`The differences are $1 - (-1) = 2$, $-3 - 3 = -6$ and $4 - (-4) = 8$.`,
          t`The sum of their squares is $4 + 36 + 64 = 104$.`,
          t`So the distance is $\sqrt{104} = 2\sqrt{26}$ units.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The distance of the point $(2, -6, 3)$ from the origin is:`,
      verify: { kind: "value", inputs: { P: "(0, 0, 0)", Q: "(2, -6, 3)" }, params: { ask: "dist" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
        { key: "B", text: t`$7$`, correct: true, value: "7" },
        { key: "C", text: t`$2 \sqrt{10}$`, correct: false, misconceptionId: "C02-M1", value: "2*sqrt(10)" },
        { key: "D", text: t`$49$`, correct: false, misconceptionId: "C02-M3", value: "49" },
      ],
      solution: {
        steps: [
          t`From the origin, the differences are the coordinates $2$, $-6$ and $3$.`,
          t`$OP^2 = 4 + 36 + 9 = 49$.`,
          t`So $OP = 7$ units.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The points on the $x$-axis at a distance of $6$ units from $A(5, 2, -4)$ are:`,
      verify: { kind: "value", inputs: { P: "(k, 0, 0)", Q: "(5, 2, -4)", d: "6" }, params: { ask: "unknown", out: "point" } },
      options: [
        { key: "A", text: t`$(9, 0, 0)$ only`, correct: false, misconceptionId: "C02-M5", value: "{(9, 0, 0)}" },
        { key: "B", text: t`$(1, 0, 0)$ and $(9, 0, 0)$`, correct: true, value: "{(1, 0, 0), (9, 0, 0)}" },
        { key: "C", text: t`$(5 - 4\sqrt{2}, 0, 0)$ and $(5 + 4\sqrt{2}, 0, 0)$`, correct: false, misconceptionId: "C02-M1", value: "{(5 - 4*sqrt(2), 0, 0), (5 + 4*sqrt(2), 0, 0)}" },
        { key: "D", text: t`$(-9, 0, 0)$ and $(-1, 0, 0)$`, correct: false, misconceptionId: "C02-M2", value: "{(-9, 0, 0), (-1, 0, 0)}" },
      ],
      solution: {
        steps: [
          t`A point on the $x$-axis is $P(x, 0, 0)$.`,
          t`$PA^2 = (x - 5)^2 + 4 + 16$, and this must equal $6^2 = 36$.`,
          t`So $(x - 5)^2 = 16$ and $x - 5 = \pm 4$: $x = 1$ or $x = 9$.`,
          t`The points are $(1, 0, 0)$ and $(9, 0, 0)$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The distance between $A(2, k, -3)$ and $B(5, 1, 1)$ is $5\sqrt{2}$. Then $k$ is:`,
      verify: { kind: "value", inputs: { P: "(2, k, -3)", Q: "(5, 1, 1)", d: "5*sqrt(2)" }, params: { ask: "unknown", out: "value" } },
      options: [
        { key: "A", text: t`$-4$ or $6$`, correct: true, value: "{-4, 6}" },
        { key: "B", text: t`$1 - \sqrt{41}$ or $1 + \sqrt{41}$`, correct: false, misconceptionId: "C02-M1", value: "{1 - sqrt(41), 1 + sqrt(41)}" },
        { key: "C", text: t`$8 - 5\sqrt{2}$ or $8 + 5\sqrt{2}$`, correct: false, misconceptionId: "C02-M4", value: "{8 - 5*sqrt(2), 5*sqrt(2) + 8}" },
        { key: "D", text: t`$6$ only`, correct: false, misconceptionId: "C02-M5", value: "{6}" },
      ],
      solution: {
        steps: [
          t`$AB^2 = 3^2 + (1 - k)^2 + 4^2$ $= 25 + (1 - k)^2$.`,
          t`Set it equal to $(5\sqrt{2})^2 = 50$: $(1 - k)^2 = 25$.`,
          t`So $1 - k = \pm 5$, giving $k = -4$ or $k = 6$.`,
        ],
      },
    },
  ],
};
