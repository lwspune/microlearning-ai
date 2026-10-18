import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`A three-legged stool stands steady on any floor, but a four-legged chair can rock. Why?`,
    reveal: t`Three feet not in one line always lie on one plane, so all three touch the floor. A fourth foot can sit off the plane of the other three.`,
  },
  explanation: {
    intuition: [
      t`Three points not on one straight line lie on exactly one **plane**, a flat surface without edges.`,
      t`A plane is fixed by one point on it and a **normal**, a vector at right angles to it.`,
      t`The point is easy: any one of the given points will do.`,
      t`The normal is at right angles to every direction lying in the plane.`,
      t`The **cross product** of two non-parallel directions is at right angles to both, so it is a normal.`,
      t`So find two directions in the plane, cross them, and write $\vec r\cdot\vec n = \vec a\cdot\vec n$.`,
    ],
    formal: [
      {
        title: "Plane through three points",
        points: [
          t`Take three points $A(\vec a)$, $B(\vec b)$, $C(\vec c)$, not on one line.`,
          t`$\overrightarrow{AB} = \vec b - \vec a$ and $\overrightarrow{AC} = \vec c - \vec a$ join points of the plane, so they lie in it.`,
          t`The normal is at right angles to both: $\vec n = \overrightarrow{AB}\times\overrightarrow{AC}$.`,
          t`The plane through $A$ with normal $\vec n$ is $\vec r\cdot\vec n = \vec a\cdot\vec n$.`,
          t`A **position vector** like $\vec a$ starts at the origin $O$, usually off the plane, so it is not a direction in it.`,
          t`Check: $\vec b\cdot\vec n$ and $\vec c\cdot\vec n$ give the same number as $\vec a\cdot\vec n$.`,
        ],
        figure: {
          alt: "A tilted plane holding three points A, B and C. Arrows AB and AC run from A to B and to C inside the plane. The normal n = AB × AC rises straight up from A. Below the plane, the origin O is joined to A by a dashed position vector a that leaves the plane.",
          axes: "none",
          view: { x: [-1, 6], y: [-1.8, 3.4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [4.4, 0]] }, { kind: "halfPlane", through: [[4.4, 0], [5.6, 1.8]] }, { kind: "halfPlane", through: [[5.6, 1.8], [1.2, 1.8]] }, { kind: "halfPlane", through: [[1.2, 1.8], [0, 0]] }], tone: "muted", step: 1 },
            { kind: "point", at: [1.3, 0.5], label: "A", labelAt: "w", step: 1 },
            { kind: "point", at: [3.9, 0.45], label: "B", labelAt: "e", step: 1 },
            { kind: "point", at: [3, 1.45], label: "C", labelAt: "ne", step: 1 },
            { kind: "vector", from: [1.3, 0.5], to: [3.9, 0.45], tone: "accent", step: 2 },
            { kind: "label", at: [2.6, 0.475], label: "AB", labelAt: "s", tone: "accent", step: 2 },
            { kind: "vector", from: [1.3, 0.5], to: [3, 1.45], tone: "accent", step: 2 },
            { kind: "label", at: [2.15, 0.975], label: "AC", labelAt: "se", tone: "accent", step: 2 },
            { kind: "vector", from: [1.3, 0.5], to: [1.3, 3], tone: "good", label: "n = AB × AC", labelAt: "e", step: 3 },
            { kind: "point", at: [-0.5, -1.3], tone: "bad", label: "O", labelAt: "sw", step: 5 },
            { kind: "segment", from: [-0.5, -1.3], to: [1.3, 0.5], tone: "bad", dashed: true, step: 5 },
            { kind: "label", at: [0.4, -0.4], label: "a", labelAt: "se", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "A point and two directions",
        points: [
          t`A plane **parallel to** a vector contains that direction: the vector can slide into the plane.`,
          t`Through $A(\vec a)$, parallel to non-parallel $\vec b$ and $\vec c$, the normal is $\vec n = \vec b\times\vec c$.`,
          t`So the plane is $\vec r\cdot(\vec b\times\vec c)$ $= \vec a\cdot(\vec b\times\vec c)$.`,
          t`In **parametric form** it is $\vec r = \vec a + \lambda\vec b + \mu\vec c$, for all real $\lambda$, $\mu$.`,
          t`Here $\vec b$ and $\vec c$ are already directions, not points: don't subtract $\vec a$ from them.`,
          t`A plane **parallel to the Y-axis** contains the direction $\hat j$; its normal is at right angles to $\hat j$.`,
        ],
      },
      {
        title: "The determinant form",
        points: [
          t`$(\vec r - \vec a)\cdot(\vec b\times\vec c) = 0$ is a **scalar triple product**: $[\vec r - \vec a\;\;\vec b\;\;\vec c] = 0$.`,
          t`It says $\vec r - \vec a$, $\vec b$, $\vec c$ are coplanar, so the point $R(\vec r)$ lies in the plane.`,
          t`In Cartesian form it is a $3\times3$ determinant set equal to $0$.`,
          t`Its rows are $x - x_1,\ y - y_1,\ z - z_1$, then $b_1, b_2, b_3$, then $c_1, c_2, c_3$.`,
          t`For three points, the last two rows are $\overrightarrow{AB}$ and $\overrightarrow{AC}$.`,
          t`The first row is $\vec r - \vec a$: $[\vec r\;\;\vec b\;\;\vec c] = 0$ is the parallel plane through $O$.`,
        ],
      },
      {
        title: "Plane containing two lines",
        points: [
          t`Lines $\vec r = \vec a_1 + \lambda\vec b_1$ and $\vec r = \vec a_2 + \mu\vec b_2$ that meet lie in one plane.`,
          t`Both directions lie in it, so $\vec n = \vec b_1\times\vec b_2$.`,
          t`It passes through $A_1(\vec a_1)$: $\vec r\cdot(\vec b_1\times\vec b_2)$ $= \vec a_1\cdot(\vec b_1\times\vec b_2)$.`,
          t`$\vec a_2\cdot\vec n$ gives the same number, since $A_2$ is in the plane too.`,
          t`For a point $P(\vec p)$ and a line $\vec r = \vec a + \lambda\vec b$, cross $\overrightarrow{AP} = \vec p - \vec a$ with $\vec b$.`,
          t`Parallel lines have $\vec b_1\times\vec b_2 = \vec 0$: cross $\vec a_2 - \vec a_1$ with $\vec b_1$ instead.`,
        ],
        figure: {
          alt: "A tilted plane holding two lines L₁ and L₂ that cross. Arrow b₁ runs along L₁ from the point A₁, and arrow b₂ along L₂ from the point A₂. The normal n = b₁ × b₂ rises straight up from the crossing point.",
          axes: "none",
          view: { x: [-1, 6], y: [-1.8, 3.4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [4.4, 0]] }, { kind: "halfPlane", through: [[4.4, 0], [5.6, 1.8]] }, { kind: "halfPlane", through: [[5.6, 1.8], [1.2, 1.8]] }, { kind: "halfPlane", through: [[1.2, 1.8], [0, 0]] }], tone: "muted", step: 1 },
            { kind: "segment", from: [0.5, 0.3], to: [4.9, 0.9], tone: "muted", step: 1 },
            { kind: "label", at: [4.9, 0.9], label: "L₁", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [1.4, 1.6], to: [4, 0.15], tone: "muted", step: 1 },
            { kind: "label", at: [4, 0.15], label: "L₂", labelAt: "e", tone: "muted", step: 1 },
            { kind: "vector", from: [1, 0.368], to: [2, 0.504], tone: "accent", step: 2 },
            { kind: "label", at: [1.5, 0.436], label: "b₁", labelAt: "s", tone: "accent", step: 2 },
            { kind: "vector", from: [1.7, 1.433], to: [2.4, 1.043], tone: "accent", step: 2 },
            { kind: "label", at: [2.05, 1.238], label: "b₂", labelAt: "ne", tone: "accent", step: 2 },
            { kind: "vector", from: [3.1, 0.65], to: [3.1, 2.9], tone: "good", label: "n = b₁ × b₂", labelAt: "e", step: 2 },
            { kind: "point", at: [1, 0.368], label: "A₁", labelAt: "sw", step: 3 },
            { kind: "point", at: [1.7, 1.433], label: "A₂", labelAt: "nw", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the vector equation of the plane passing through the points $A(1, 1, 2)$, $B(0, 2, 3)$ and $C(4, 5, 6)$.`,
      steps: [
        t`$\overrightarrow{AB} = -\hat i + \hat j + \hat k$ and $\overrightarrow{AC} = 3\hat i + 4\hat j + 4\hat k$.`,
        t`$\overrightarrow{AB}\times\overrightarrow{AC}$ $= \hat i(4 - 4) - \hat j(-4 - 3)$ $+ \hat k(-4 - 3)$ $= 7\hat j - 7\hat k$.`,
        t`Divide by $7$: $\vec n = \hat j - \hat k$. Then $\vec a\cdot\vec n = 1 - 2 = -1$.`,
        t`So $\vec r\cdot(\hat j - \hat k) = -1$. Check with $B$: $2 - 3 = -1$.`,
      ],
      answer: t`$\vec r\cdot(\hat j - \hat k) = -1$, that is, $y - z = -1$`,
    },
    visualSpec: t`Drag the points $A$, $B$ and $C$: the plane through them tilts, and the normal $\overrightarrow{AB}\times\overrightarrow{AC}$ turns with it, always at right angles to the plane.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Uses a point's position vector as a direction in the plane: crosses $\vec b$ and $\vec c$ (or $\vec p$, or $\vec b$ with the axis) in place of $\overrightarrow{AB}$ and $\overrightarrow{AC}$ (or $\overrightarrow{AP}$).`,
      remediation: t`A position vector runs from the origin, which is usually off the plane. A direction in the plane joins two of its points, such as $\overrightarrow{AB} = \vec b - \vec a$.`,
      fallback: { kind: "ext", topic: "position vectors" },
    },
    {
      id: "C07-M2",
      mistake: t`Takes a direction that lies in the plane (a given vector, $\overrightarrow{AB}$, $\vec b_1$ or the axis) as its normal.`,
      remediation: "A vector the plane is parallel to lies along the plane; the normal is at right angles to it. Cross two directions in the plane to get the normal.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M3",
      mistake: t`Expands the cross product with a plus sign on the $\hat j$ term.`,
      remediation: t`In the determinant for a cross product, the middle term takes a minus sign: $\hat i(\ldots) - \hat j(\ldots) + \hat k(\ldots)$.`,
      fallback: { kind: "ext", topic: "cross product" },
    },
    {
      id: "C07-M4",
      mistake: t`Writes $\vec r\cdot\vec n = 0$, or $[\vec r\;\;\vec b\;\;\vec c] = 0$, dropping the point the plane passes through.`,
      remediation: t`$\vec r\cdot\vec n = 0$ is the plane through the origin. Through $A$ it is $\vec r\cdot\vec n = \vec a\cdot\vec n$; in the determinant, the first row is $\vec r - \vec a$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M5",
      mistake: t`Treats the given directions $\vec b$, $\vec c$ as points $B$, $C$, and crosses $\vec b - \vec a$ with $\vec c - \vec a$.`,
      remediation: t`For a plane through $A$ parallel to $\vec b$ and $\vec c$, these are already directions in the plane: $\vec n = \vec b\times\vec c$.`,
      fallback: { kind: "ext", topic: "position vectors" },
    },
  ],
  engineNotes: [
    t`C07-M3 gives the key when the normal has no $\hat j$ part (Misc II Q.5, Misc I Q.17), so C07-Q1 and C07-Q6 leave it out.`,
    t`C07-M4 gives the key for a plane through the origin (Misc II Q.11, Q.19): C07-Q5 moves Misc II Q.19's point from the origin to $P(2, -1, 3)$ so the item can catch it and C07-M1.`,
    "C07-M5 applies only to a point and two directions; C07-M1 only to items built from points (three points, a point and a line, two points and an axis).",
    "Misc I Q.18 is left out: its two lines are skew, so no plane contains both (the book's key is wrong too).",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc II Q.5" },
      stem: t`Find the vector equation of the plane passing through the points $A(1, -2, 1)$, $B(2, -1, -3)$ and $C(0, 1, 5)$.`,
      verify: { kind: "value", inputs: { A: "(1, -2, 1)", B: "(2, -1, -3)", C: "(0, 1, 5)" }, params: { kind: "points" } },
      options: [
        { key: "A", text: t`$\vec r\cdot(\hat i + \hat j - 4\hat k)$ $= -5$`, correct: false, misconceptionId: "C07-M2", value: "(1, 1, -4, -5)" },
        { key: "B", text: t`$\vec r\cdot(4\hat i + \hat k)$ $= 0$`, correct: false, misconceptionId: "C07-M4", value: "(4, 0, 1, 0)" },
        { key: "C", text: t`$\vec r\cdot(4\hat i + \hat k)$ $= 5$`, correct: true, value: "(4, 0, 1, 5)" },
        { key: "D", text: t`$\vec r\cdot(-\hat i - 5\hat j + \hat k)$ $= 10$`, correct: false, misconceptionId: "C07-M1", value: "(1, 5, -1, -10)" },
      ],
      solution: {
        steps: [
          t`$\overrightarrow{AB} = \hat i + \hat j - 4\hat k$ and $\overrightarrow{AC} = -\hat i + 3\hat j + 4\hat k$.`,
          t`$\overrightarrow{AB}\times\overrightarrow{AC}$ $= \hat i(4 + 12) - \hat j(4 - 4)$ $+ \hat k(3 + 1)$ $= 16\hat i + 4\hat k$.`,
          t`Divide by $4$: $\vec n = 4\hat i + \hat k$. Then $\vec a\cdot\vec n = 4 + 0 + 1 = 5$.`,
          t`So $\vec r\cdot(4\hat i + \hat k) = 5$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.3 Q.9" },
      stem: t`Find the vector equation of the plane passing through the point $A(-2, 7, 5)$ and parallel to the vectors $4\hat i - \hat j + 3\hat k$ and $\hat i + \hat j + \hat k$.`,
      verify: { kind: "value", inputs: { A: "(-2, 7, 5)", b: "(4, -1, 3)", c: "(1, 1, 1)" }, params: { kind: "dirs" } },
      options: [
        { key: "A", text: t`$\vec r\cdot(4\hat i - \hat j + 3\hat k)$ $= 0$`, correct: false, misconceptionId: "C07-M2", value: "(4, -1, 3, 0)" },
        { key: "B", text: t`$\vec r\cdot(-4\hat i + \hat j + 5\hat k)$ $= 40$`, correct: false, misconceptionId: "C07-M3", value: "(4, -1, -5, -40)" },
        { key: "C", text: t`$\vec r\cdot(10\hat i + 9\hat j - 6\hat k)$ $= 13$`, correct: false, misconceptionId: "C07-M5", value: "(10, 9, -6, 13)" },
        { key: "D", text: t`$\vec r\cdot(-4\hat i - \hat j + 5\hat k)$ $= 26$`, correct: true, value: "(4, 1, -5, -26)" },
      ],
      solution: {
        steps: [
          t`The plane contains $\vec b = 4\hat i - \hat j + 3\hat k$ and $\vec c = \hat i + \hat j + \hat k$, so $\vec n = \vec b\times\vec c$.`,
          t`$\vec b\times\vec c = \hat i(-1 - 3) - \hat j(4 - 3)$ $+ \hat k(4 + 1)$ $= -4\hat i - \hat j + 5\hat k$.`,
          t`$\vec a\cdot\vec n = 8 - 7 + 25 = 26$, so $\vec r\cdot(-4\hat i - \hat j + 5\hat k) = 26$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.3 Q.10" },
      stem: t`Find the Cartesian equation of the plane $\vec r = (5\hat i - 2\hat j - 3\hat k)$ $+ \lambda(\hat i + \hat j + \hat k)$ $+ \mu(\hat i - 2\hat j + 3\hat k)$.`,
      verify: { kind: "value", inputs: { A: "(5, -2, -3)", b: "(1, 1, 1)", c: "(1, -2, 3)" }, params: { kind: "dirs" } },
      options: [
        { key: "A", text: t`$9x + 4y + 6z = 19$`, correct: false, misconceptionId: "C07-M5", value: "(9, 4, 6, 19)" },
        { key: "B", text: t`$5x - 2y - 3z = 38$`, correct: true, value: "(5, -2, -3, 38)" },
        { key: "C", text: t`$5x + 2y - 3z = 30$`, correct: false, misconceptionId: "C07-M3", value: "(5, 2, -3, 30)" },
        { key: "D", text: t`$5x - 2y - 3z = 0$`, correct: false, misconceptionId: "C07-M4", value: "(5, -2, -3, 0)" },
      ],
      solution: {
        steps: [
          t`The plane passes through $(5, -2, -3)$ and contains $\vec b = \hat i + \hat j + \hat k$ and $\vec c = \hat i - 2\hat j + 3\hat k$.`,
          t`$\vec n = \vec b\times\vec c$ $= \hat i(3 + 2) - \hat j(3 - 1)$ $+ \hat k(-2 - 1)$ $= 5\hat i - 2\hat j - 3\hat k$.`,
          t`$5(x - 5) - 2(y + 2) - 3(z + 3) = 0$, so $5x - 2y - 3z = 38$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.3" },
      stem: t`The lines $\vec r = (2\hat j - 3\hat k)$ $+ \lambda(\hat i + 2\hat j + 3\hat k)$ and $\vec r = (2\hat i + 6\hat j + 3\hat k)$ $+ \mu(2\hat i + 3\hat j + 4\hat k)$ are coplanar. Find the vector equation of the plane containing them.`,
      verify: { kind: "value", inputs: { a1: "(0, 2, -3)", b1: "(1, 2, 3)", a2: "(2, 6, 3)", b2: "(2, 3, 4)" }, params: { kind: "lines" } },
      options: [
        { key: "A", text: t`$\vec r\cdot(-\hat i + 2\hat j - \hat k)$ $= 7$`, correct: true, value: "(1, -2, 1, -7)" },
        { key: "B", text: t`$\vec r\cdot(\hat i + 2\hat j + 3\hat k)$ $= -5$`, correct: false, misconceptionId: "C07-M2", value: "(1, 2, 3, -5)" },
        { key: "C", text: t`$\vec r\cdot(-\hat i - 2\hat j - \hat k)$ $= -1$`, correct: false, misconceptionId: "C07-M3", value: "(1, 2, 1, 1)" },
        { key: "D", text: t`$\vec r\cdot(-\hat i + 2\hat j - \hat k)$ $= 0$`, correct: false, misconceptionId: "C07-M4", value: "(1, -2, 1, 0)" },
      ],
      solution: {
        steps: [
          t`Both lines lie in the plane, so $\vec n = \vec b_1\times\vec b_2$ $= \hat i(8 - 9) - \hat j(4 - 6)$ $+ \hat k(3 - 4)$ $= -\hat i + 2\hat j - \hat k$.`,
          t`The plane passes through $A_1(0, 2, -3)$: $\vec a_1\cdot\vec n = 0 + 4 + 3 = 7$.`,
          t`Check with $A_2(2, 6, 3)$: $-2 + 12 - 3 = 7$. So $\vec r\cdot(-\hat i + 2\hat j - \hat k) = 7$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc II Q.19" },
      stem: t`Find the vector equation of the plane passing through the point $P(2, -1, 3)$ and containing the line $\vec r = (\hat i + 4\hat j + \hat k)$ $+ \lambda(\hat i + 2\hat j + \hat k)$.`,
      verify: { kind: "value", inputs: { P: "(2, -1, 3)", a: "(1, 4, 1)", b: "(1, 2, 1)" }, params: { kind: "pointline" } },
      options: [
        { key: "A", text: t`$\vec r\cdot(-7\hat i + \hat j + 5\hat k)$ $= 0$`, correct: false, misconceptionId: "C07-M1", value: "(7, -1, -5, 0)" },
        { key: "B", text: t`$\vec r\cdot(\hat i + 2\hat j + \hat k)$ $= 3$`, correct: false, misconceptionId: "C07-M2", value: "(1, 2, 1, 3)" },
        { key: "C", text: t`$\vec r\cdot(-9\hat i - \hat j + 7\hat k)$ $= 4$`, correct: false, misconceptionId: "C07-M3", value: "(9, 1, -7, -4)" },
        { key: "D", text: t`$\vec r\cdot(-9\hat i + \hat j + 7\hat k)$ $= 2$`, correct: true, value: "(9, -1, -7, -2)" },
      ],
      solution: {
        steps: [
          t`$A(1, 4, 1)$ is on the line, so $\overrightarrow{AP} = \hat i - 5\hat j + 2\hat k$ and $\vec b = \hat i + 2\hat j + \hat k$ lie in the plane.`,
          t`$\vec n = \overrightarrow{AP}\times\vec b$ $= \hat i(-5 - 4) - \hat j(1 - 2)$ $+ \hat k(2 + 5)$ $= -9\hat i + \hat j + 7\hat k$.`,
          t`$\vec p\cdot\vec n = -18 - 1 + 21 = 2$, so $\vec r\cdot(-9\hat i + \hat j + 7\hat k) = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.17" },
      stem: t`The equation of the plane passing through the points $(1, -1, 1)$ and $(3, 2, 4)$ and parallel to the Y-axis is`,
      verify: { kind: "value", inputs: { A: "(1, -1, 1)", B: "(3, 2, 4)", u: "(0, 1, 0)" }, params: { kind: "axis" } },
      options: [
        { key: "A", text: t`$3x - 2z = 1$`, correct: true, value: "(3, 0, -2, 1)" },
        { key: "B", text: t`$4x - 3z = 1$`, correct: false, misconceptionId: "C07-M1", value: "(4, 0, -3, 1)" },
        { key: "C", text: t`$y = -1$`, correct: false, misconceptionId: "C07-M2", value: "(0, 1, 0, -1)" },
        { key: "D", text: t`$3x - 2z = 0$`, correct: false, misconceptionId: "C07-M4", value: "(3, 0, -2, 0)" },
      ],
      solution: {
        steps: [
          t`Call the points $A(1, -1, 1)$ and $B(3, 2, 4)$. The plane contains $\overrightarrow{AB} = 2\hat i + 3\hat j + 3\hat k$ and the Y-axis direction $\hat j$.`,
          t`$\vec n = \overrightarrow{AB}\times\hat j$ $= \hat i(0 - 3) - \hat j(0 - 0)$ $+ \hat k(2 - 0)$ $= -3\hat i + 2\hat k$.`,
          t`$-3(x - 1) + 2(z - 1) = 0$, so $-3x + 2z = -1$, that is, $3x - 2z = 1$.`,
        ],
      },
    },
  ],
};
