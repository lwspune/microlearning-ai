import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A fly hangs in the air of a room. Two numbers fix a dot on the floor plan. **How many numbers fix the fly, and from what are they measured?**`,
    reveal: t`Three: its distances from two walls that meet in a corner, and its height above the floor. The two walls and the floor are three perpendicular planes, and those three distances are the fly's coordinates in space.`,
  },
  explanation: {
    intuition: [
      t`On a page, two numbers $(x, y)$ fix a point; space needs a third number, for height.`,
      t`Take three number lines through one point $O$, the **origin**, each perpendicular to the other two.`,
      t`These are the $x$-, $y$- and $z$-**axes**; we usually draw the $z$-axis pointing up.`,
      t`Each pair of axes fixes a flat sheet called a **coordinate plane**: the XY-, YZ- and ZX-planes.`,
      t`A point's **coordinates** $(x, y, z)$ give its distances from these three planes, with a sign for the side.`,
      t`The three planes cut space into $8$ regions, like the corners of a room, called **octants**.`,
    ],
    formal: [
      {
        title: "Axes and coordinate planes",
        points: [
          t`The axes $XOX'$, $YOY'$ and $ZOZ'$ meet at $O$ and are **mutually perpendicular**: each is perpendicular to the other two.`,
          t`The **XY-plane** is the plane that holds the $x$-axis and the $y$-axis.`,
          t`The **YZ-plane** holds the $y$- and $z$-axes; the **ZX-plane** holds the $z$- and $x$-axes.`,
          t`Every point of the XY-plane has height $0$, so the XY-plane is $z = 0$.`,
          t`In the same way, the YZ-plane is $x = 0$ and the ZX-plane is $y = 0$.`,
          t`So a plane is named by the two axes in it, and its missing letter is the coordinate that is $0$.`,
        ],
      },
      {
        title: "Coordinates of a point",
        points: [
          t`Through a point $P$, draw the lines that meet each coordinate plane at right angles.`,
          t`$x$ is the distance of $P$ from the YZ-plane, negative when $P$ is on the side of $OX'$.`,
          t`$y$ is its distance from the ZX-plane, and $z$ its distance from the XY-plane, signed the same way.`,
          t`Example: $(3, -2, 4)$ is $3$ from the YZ-plane, $2$ from the ZX-plane and $4$ above the XY-plane.`,
          t`A distance is never negative: $(-5, 1, 2)$ is $5$ units from the YZ-plane, on the side of $OX'$.`,
          t`So the distances from the three planes and their sides fix the point.`,
        ],
      },
      {
        title: "Points on the axes and planes",
        points: [
          t`A point on the $x$-axis is $0$ from the ZX- and XY-planes, so it is $(x, 0, 0)$.`,
          t`Likewise points on the $y$-axis are $(0, y, 0)$ and points on the $z$-axis are $(0, 0, z)$.`,
          t`So a point on an axis has two zero coordinates.`,
          t`A point in the XY-plane is $(x, y, 0)$, in the YZ-plane $(0, y, z)$, in the ZX-plane $(x, 0, z)$.`,
          t`So a point on a coordinate plane has one zero coordinate.`,
          t`In space, $y = 0$ alone gives the whole ZX-plane; the $x$-axis needs $y = 0$ and $z = 0$.`,
        ],
      },
      {
        title: "Feet of perpendiculars",
        points: [
          t`The **foot** of the perpendicular from $P$ to a plane is the point where that perpendicular meets the plane.`,
          t`Going straight down to the XY-plane changes only the height, so the foot of $(x, y, z)$ is $(x, y, 0)$.`,
          t`On the YZ-plane the foot is $(0, y, z)$, and on the ZX-plane it is $(x, 0, z)$.`,
          t`Example: from $(3, -2, 4)$, the foot on the XY-plane is $(3, -2, 0)$.`,
          t`The foot on the $x$-axis keeps only $x$: it is $(x, 0, 0)$, and so on for the other axes.`,
          t`A foot sets coordinates to $0$; it never changes a sign.`,
        ],
      },
      {
        title: "The eight octants",
        points: [
          t`The three coordinate planes cut space into $8$ parts called **octants**.`,
          t`An octant is fixed by the signs of $x$, $y$ and $z$: $2 \times 2 \times 2 = 8$ choices.`,
          t`Above the XY-plane: I $(+,+,+)$, II $(-,+,+)$, III $(-,-,+)$, IV $(+,-,+)$.`,
          t`Below it: V $(+,+,-)$, VI $(-,+,-)$, VII $(-,-,-)$, VIII $(+,-,-)$.`,
          t`I to IV follow the quadrants of the XY-plane anticlockwise; V to VIII lie directly below I to IV.`,
          t`Example: $(-1, -6, -2)$ has signs $(-,-,-)$, so it lies in octant VII.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $P(-6, 2, -3)$, find the feet of the perpendiculars on the ZX-plane and on the $x$-axis, the distance of $P$ from the XY-plane, and its octant.`,
      steps: [
        t`The ZX-plane is $y = 0$, so the foot there keeps $x$ and $z$: $(-6, 0, -3)$.`,
        t`On the $x$-axis both $y$ and $z$ are $0$, so that foot is $(-6, 0, 0)$.`,
        t`The distance from the XY-plane is $|z| = 3$: $P$ is $3$ units below it.`,
        t`The signs of $P$ are $(-, +, -)$, so $P$ lies in octant VI.`,
      ],
      answer: t`The feet are $(-6, 0, -3)$ and $(-6, 0, 0)$; $P$ is $3$ units from the XY-plane, in octant VI.`,
    },
    visualSpec: t`Drag a point inside a 3D frame of axes and watch its feet on the three planes and its octant's signs update.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Thinks the letters in the name become $0$: the foot on the ZX-plane is $(0, y, 0)$ and on the $x$-axis $(0, y, z)$`,
      remediation: t`The ZX-plane holds the $x$- and $z$-axes, so on it $x$ and $z$ stay and $y = 0$. On the $x$-axis, $x$ stays and $y = z = 0$.`,
      fallback: { kind: "ext", topic: "coordinates in a plane" },
    },
    {
      id: "C01-M2",
      mistake: t`Carries the plane's rules over and forgets $z$: a point on the $y$-axis only needs $x = 0$, and the octant is just the quadrant of $(x, y)$`,
      remediation: t`In space, a point on the $y$-axis needs both $x = 0$ and $z = 0$. An octant also needs the sign of $z$: V to VIII lie below the XY-plane.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Numbers the quadrants clockwise, so II is $(+, -)$ and IV is $(-, +)$, and octants VI and VIII swap too`,
      remediation: t`The quadrants go anticlockwise: II is $(-, +, +)$ and IV is $(+, -, +)$. Below them, VI is $(-, +, -)$ and VIII is $(+, -, -)$.`,
      fallback: { kind: "ext", topic: "coordinates in a plane" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes the mirror image for the foot: changes a coordinate's sign instead of making it $0$`,
      remediation: t`The foot is where the perpendicular meets the plane or axis, so the coordinates it crosses become $0$. Changing their sign gives the mirror image instead.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Reads the first letter of a plane's name as its zero coordinate: the XY-plane as $x = 0$, the YZ-plane as $y = 0$, the ZX-plane as $z = 0$`,
      remediation: t`A plane is named by the two axes in it, so its missing letter is $0$: the XY-plane is $z = 0$, the YZ-plane $x = 0$, the ZX-plane $y = 0$. So the distance from the YZ-plane is $|x|$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes octants I to IV as the ones below the XY-plane and V to VIII as the ones above",
      remediation: t`Octants I to IV have $z > 0$, above the XY-plane; V to VIII have $z < 0$, directly below I to IV.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M2's octant rule gives the key for a point above the XY-plane, and C01-M6 agrees with C01-M2 below it: octant items name two points, one above and one below.",
    "C01-M3 gives the key in octants I, III, V and VII: diagnose it with a point in II, IV, VI or VIII.",
    t`C01-M1, C01-M4 and C01-M5 give the key when the coordinates they change are already $0$: use points with no zero coordinate.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/11.1 Eg.1" },
      stem: t`$F$ is the foot of the perpendicular from $P(2, 4, 5)$ to the ZX-plane. What are the coordinates of $F$?`,
      verify: { kind: "value", inputs: { P: "(2, 4, 5)" }, params: { ask: "foot", onto: "zx" } },
      options: [
        { key: "A", text: t`$(2, 0, 5)$`, correct: true, value: "(2, 0, 5)" },
        { key: "B", text: t`$(0, 4, 0)$`, correct: false, misconceptionId: "C01-M1", value: "(0, 4, 0)" },
        { key: "C", text: t`$(2, -4, 5)$`, correct: false, misconceptionId: "C01-M4", value: "(2, -4, 5)" },
        { key: "D", text: t`$(2, 4, 0)$`, correct: false, misconceptionId: "C01-M5", value: "(2, 4, 0)" },
      ],
      solution: {
        steps: [
          t`The ZX-plane holds the $x$- and $z$-axes, so it is the plane $y = 0$.`,
          t`The perpendicular from $P$ to it changes only $y$, which becomes $0$; $x = 2$ and $z = 5$ stay.`,
          t`So $F = (2, 0, 5)$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`What is the foot of the perpendicular from the point $(-3, 5, -2)$ to the $y$-axis?`,
      verify: { kind: "value", inputs: { P: "(-3, 5, -2)" }, params: { ask: "foot", onto: "y" } },
      options: [
        { key: "A", text: t`$(0, 5, 0)$`, correct: true, value: "(0, 5, 0)" },
        { key: "B", text: t`$(-3, 0, -2)$`, correct: false, misconceptionId: "C01-M1", value: "(-3, 0, -2)" },
        { key: "C", text: t`$(0, 5, -2)$`, correct: false, misconceptionId: "C01-M2", value: "(0, 5, -2)" },
        { key: "D", text: t`$(3, 5, 2)$`, correct: false, misconceptionId: "C01-M4", value: "(3, 5, 2)" },
      ],
      solution: {
        steps: [
          t`Every point of the $y$-axis is $(0, y, 0)$: both $x$ and $z$ are $0$.`,
          t`The foot keeps the point's $y = 5$.`,
          t`So the foot is $(0, 5, 0)$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/11.1 Eg.2" },
      stem: t`Name the octant of $(-3, 1, 2)$, then the octant of $(-3, 1, -2)$.`,
      verify: { kind: "value", inputs: { A: "(-3, 1, 2)", B: "(-3, 1, -2)" }, params: { ask: "octants" } },
      options: [
        { key: "A", text: t`IV, then VIII`, correct: false, misconceptionId: "C01-M3", value: "(oct4, oct8)" },
        { key: "B", text: t`VI, then II`, correct: false, misconceptionId: "C01-M6", value: "(oct6, oct2)" },
        { key: "C", text: t`II, then VI`, correct: true, value: "(oct2, oct6)" },
        { key: "D", text: t`II, then II`, correct: false, misconceptionId: "C01-M2", value: "(oct2, oct2)" },
      ],
      solution: {
        steps: [
          t`$(-3, 1, 2)$ has signs $(-, +, +)$: octant II.`,
          t`$(-3, 1, -2)$ has signs $(-, +, -)$: octant VI, directly below II.`,
          t`So the octants are II, then VI.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.1 Q3" },
      stem: t`Name the octant of $(-3, -1, 6)$, then the octant of $(4, -2, -5)$.`,
      verify: { kind: "value", inputs: { A: "(-3, -1, 6)", B: "(4, -2, -5)" }, params: { ask: "octants" } },
      options: [
        { key: "A", text: t`III, then VIII`, correct: true, value: "(oct3, oct8)" },
        { key: "B", text: t`III, then IV`, correct: false, misconceptionId: "C01-M2", value: "(oct3, oct4)" },
        { key: "C", text: t`III, then VI`, correct: false, misconceptionId: "C01-M3", value: "(oct3, oct6)" },
        { key: "D", text: t`VII, then IV`, correct: false, misconceptionId: "C01-M6", value: "(oct7, oct4)" },
      ],
      solution: {
        steps: [
          t`$(-3, -1, 6)$ has signs $(-, -, +)$: octant III.`,
          t`$(4, -2, -5)$ has signs $(+, -, -)$: octant VIII, directly below IV.`,
          t`So the octants are III, then VIII.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`A point $P$ lies in octant VIII. Its distances from the YZ-, ZX- and XY-planes are $4$, $1$ and $3$. Find $P$.`,
      verify: { kind: "value", inputs: { n: "8", d: "(4, 1, 3)" }, params: { ask: "point" } },
      options: [
        { key: "A", text: t`$(4, -1, -3)$`, correct: true, value: "(4, -1, -3)" },
        { key: "B", text: t`$(-4, 1, -3)$`, correct: false, misconceptionId: "C01-M3", value: "(-4, 1, -3)" },
        { key: "C", text: t`$(3, -4, -1)$`, correct: false, misconceptionId: "C01-M5", value: "(3, -4, -1)" },
        { key: "D", text: t`$(4, -1, 3)$`, correct: false, misconceptionId: "C01-M6", value: "(4, -1, 3)" },
      ],
      solution: {
        steps: [
          t`The distances from the YZ-, ZX- and XY-planes are $|x|$, $|y|$ and $|z|$.`,
          t`So $|x| = 4$, $|y| = 1$ and $|z| = 3$.`,
          t`Octant VIII has signs $(+, -, -)$, so $P = (4, -1, -3)$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`Find the foot of the perpendicular from the point $(-4, 7, -1)$ to the YZ-plane.`,
      verify: { kind: "value", inputs: { P: "(-4, 7, -1)" }, params: { ask: "foot", onto: "yz" } },
      options: [
        { key: "A", text: t`$(4, 7, -1)$`, correct: false, misconceptionId: "C01-M4", value: "(4, 7, -1)" },
        { key: "B", text: t`$(-4, 0, -1)$`, correct: false, misconceptionId: "C01-M5", value: "(-4, 0, -1)" },
        { key: "C", text: t`$(0, 7, -1)$`, correct: true, value: "(0, 7, -1)" },
        { key: "D", text: t`$(-4, 0, 0)$`, correct: false, misconceptionId: "C01-M1", value: "(-4, 0, 0)" },
      ],
      solution: {
        steps: [
          t`The YZ-plane holds the $y$- and $z$-axes, so it is the plane $x = 0$.`,
          t`The foot keeps $y = 7$ and $z = -1$ and sets $x = 0$: it is $(0, 7, -1)$.`,
        ],
      },
    },
  ],
};
