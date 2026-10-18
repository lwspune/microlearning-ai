import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Do the points $A(1, 0, 2)$, $B(2, 1, 4)$ and $C(-1, -2, -2)$ lie on one straight line?`,
    reveal: t`Yes. $\overrightarrow{AB} = \hat i + \hat j + 2\hat k$ and $\overrightarrow{AC} = -2\hat i - 2\hat j - 4\hat k$, so $\overrightarrow{AC} = -2\,\overrightarrow{AB}$. The two are parallel and share the point A, so all three points lie on one line, with B and C on opposite sides of A.`,
  },
  explanation: {
    intuition: [
      t`Picture a straight road: from a point A you can only go forwards or backwards along it.`,
      t`So every step along the road is a multiple of one step: $\overrightarrow{AC} = k\,\overrightarrow{AB}$.`,
      t`Points that lie on one straight line are called **collinear**.`,
      t`On a flat sheet, two directions are enough to reach every point of the sheet.`,
      t`In space, three directions that do not lie in one sheet reach every point.`,
      t`A sum of scalar multiples, like $x\vec a + y\vec b + z\vec c$, is called a **linear combination**.`,
    ],
    formal: [
      {
        title: "Collinear points",
        points: [
          t`Three points are **collinear** when one straight line passes through all three.`,
          t`Draw $\overrightarrow{AB}$ and $\overrightarrow{AC}$: both start at the same point A.`,
          t`A, B, C are collinear when $\overrightarrow{AC} = k\,\overrightarrow{AB}$ for some scalar $k$.`,
          t`Then the two vectors are parallel and share the point A, so they lie on one line.`,
          t`$k$ is negative when B and C lie on opposite sides of A.`,
          t`Use $\overrightarrow{AB} = \vec b - \vec a$ and $\overrightarrow{AC} = \vec c - \vec a$, not the position vectors $\vec b$, $\vec c$ themselves.`,
        ],
        figure: {
          alt: "A straight line with three points on it: C, then A, then B. Arrows run from A to B and from A to C, pointing opposite ways along the line. A note says k = −2/3 here.",
          axes: "none",
          view: { x: [-2.5, 5.5], y: [-1, 4.5] },
          elements: [
            { kind: "line", through: [[-1, 0.5], [4, 3]], tone: "muted", step: 1 },
            { kind: "point", at: [1, 1.5], label: "A", labelAt: "nw", step: 1 },
            { kind: "point", at: [4, 3], label: "B", labelAt: "nw", step: 1 },
            { kind: "point", at: [-1, 0.5], label: "C", labelAt: "nw", step: 1 },
            { kind: "vector", from: [1, 1.5], to: [4, 3], tone: "accent", step: 2 },
            { kind: "label", at: [2.5, 2.25], label: "AB", labelAt: "nw", tone: "accent", step: 2 },
            { kind: "vector", from: [1, 1.5], to: [-1, 0.5], tone: "good", step: 2 },
            { kind: "label", at: [0, 1], label: "AC", labelAt: "nw", tone: "good", step: 2 },
            { kind: "label", at: [1.5, 0.1], label: "AC = k AB, k = −2/3 here", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "Finding k",
        points: [
          t`Divide a component of $\overrightarrow{AC}$ by the matching component of $\overrightarrow{AB}$.`,
          t`Every component must give the same $k$; if one disagrees, the points are not collinear.`,
          t`Keep the sign: with $k = 2$, C lies beyond B; with $k = -2$, C lies on the other side of A.`,
          t`Keep the order asked: for $\overrightarrow{AC} = k\,\overrightarrow{AB}$, $\overrightarrow{AC}$ goes on top.`,
        ],
      },
      {
        title: "Coplanar vectors",
        points: [
          t`Vectors are **coplanar** when, drawn from one point, they all lie in one plane.`,
          t`Two vectors $\vec a$, $\vec b$ that are not collinear fix a plane through their common start O.`,
          t`A linear combination of them is $x\vec a + y\vec b$, for scalars $x$ and $y$.`,
          t`Every vector in that plane is one of these: here $\vec c = 2\vec a + \vec b$.`,
          t`So three vectors are coplanar exactly when one is a linear combination of the other two.`,
          t`To test, find $x$, $y$ from the $\hat i$ and $\hat j$ parts, then check the $\hat k$ part.`,
        ],
        figure: {
          alt: "From a point O, two arrows a and b lie in a flat sheet. Dashed sides 2a and b make a parallelogram, and the arrow c = 2a + b runs along its diagonal, in the same sheet.",
          axes: "none",
          view: { x: [-0.8, 5.8], y: [-0.8, 4.4] },
          elements: [
            { kind: "label", at: [0, 0], label: "O", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "vector", from: [0, 0], to: [2, 0.5], label: "a", labelAt: "s", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [0.8, 2], label: "b", labelAt: "w", tone: "accent", step: 1 },
            { kind: "segment", from: [2, 0.5], to: [4, 1], tone: "muted", dashed: true, step: 3 },
            { kind: "label", at: [4, 1], label: "2a", labelAt: "se", tone: "muted", step: 3 },
            { kind: "segment", from: [4, 1], to: [4.8, 3], tone: "muted", dashed: true, step: 3 },
            { kind: "label", at: [4.4, 2], label: "b", labelAt: "e", tone: "muted", step: 3 },
            { kind: "vector", from: [0, 0], to: [4.8, 3], label: "c = 2a + b", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Three non-coplanar vectors",
        points: [
          t`If $\vec a$, $\vec b$, $\vec c$ are not coplanar, every vector $\vec r$ is $x\vec a + y\vec b + z\vec c$.`,
          t`Write $\vec a = a_1\hat i + a_2\hat j + a_3\hat k$, and the same for $\vec b$, $\vec c$, $\vec r$.`,
          t`Equate the $\hat i$ parts: $a_1x + b_1y + c_1z = r_1$; then the $\hat j$ and $\hat k$ parts.`,
          t`Each unknown appears in all three equations, so solve them together.`,
          t`Only one set $x$, $y$, $z$ works, so equal combinations have equal coefficients.`,
          t`Check the answer by putting $x$, $y$, $z$ back into $x\vec a + y\vec b + z\vec c$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Express $\vec r = 3\hat i + 5\hat j + 4\hat k$ as a linear combination of $\vec a = \hat i + \hat j$, $\vec b = \hat j + \hat k$ and $\vec c = \hat i + \hat k$.`,
      steps: [
        t`Let $\vec r = x\vec a + y\vec b + z\vec c$. Its $\hat i$ part is $x + z$, its $\hat j$ part $x + y$, its $\hat k$ part $y + z$.`,
        t`Equate with $\vec r$: $x + z = 3$, $x + y = 5$, $y + z = 4$.`,
        t`Add all three: $2(x + y + z) = 12$, so $x + y + z = 6$.`,
        t`Subtract each equation from this: $y = 3$, $z = 1$, $x = 2$. Check: $2\vec a + 3\vec b + \vec c$ $= 3\hat i + 5\hat j + 4\hat k$.`,
      ],
      answer: t`$\vec r = 2\vec a + 3\vec b + \vec c$`,
    },
    visualSpec: t`Drag the point C along or off the line through A and B; the panel shows $\overrightarrow{AB}$ and $\overrightarrow{AC}$, whether $\overrightarrow{AC} = k\,\overrightarrow{AB}$, and $k$ changing sign as C crosses A.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Tests the position vectors ($\vec c = k\vec b$) instead of $\overrightarrow{AC} = k\,\overrightarrow{AB}$`,
      remediation: t`Collinearity is about the steps between the points. Find $\overrightarrow{AB} = \vec b - \vec a$ and $\overrightarrow{AC} = \vec c - \vec a$ first, then compare those.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Builds each equation from one vector's own components instead of one direction's components",
      remediation: t`The $\hat i$ equation collects the $\hat i$ part of every vector: $a_1x + b_1y + c_1z = r_1$. Do the same for $\hat j$ and $\hat k$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: t`Takes $k$ as the ratio of the lengths, so always positive`,
      remediation: t`$k$ is negative when the two vectors point opposite ways, with B and C on opposite sides of A. Read $k$ off the components, sign included.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Writes the relation the other way round, so gives $1/k$`,
      remediation: t`Keep the order the question gives: in $\overrightarrow{AC} = k\,\overrightarrow{AB}$, divide a component of $\overrightarrow{AC}$ by the matching one of $\overrightarrow{AB}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Reads each coefficient off one component ($x = r_1/a_1$, $y = r_2/b_2$, ...), as if each vector lay along one axis`,
      remediation: t`Every vector adds to every component, so each unknown appears in all the equations. Solve them together; dividing one component works only for $\hat i$, $\hat j$, $\hat k$ themselves.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: "Moves the given vector across without changing its sign, so every coefficient comes out negated",
      remediation: "Equate the combination's components with the given vector's components exactly as they stand, then check by substituting back.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M3 gives the key when $k > 0$ and C03-M4 when $k = \pm 1$: diagnose them with a negative $k$ other than $-1$.`,
    "C03-M5 gives the key when the vectors lie along the axes; C03-M1 needs a position vector with a non-zero component.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.1 Ex.Q12 i)" },
      stem: t`The points $A(3, 2, -4)$, $B(9, 8, -10)$ and $C(-2, -3, 1)$ are collinear, with $\overrightarrow{AC} = k\,\overrightarrow{AB}$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { A: "(3, 2, -4)", B: "(9, 8, -10)", C: "(-2, -3, 1)" }, params: { ask: "ratio", num: "AC", den: "AB" } },
      options: [
        { key: "A", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C03-M3", value: "5/6" },
        { key: "B", text: t`$- \frac{6}{5}$`, correct: false, misconceptionId: "C03-M4", value: "-6/5" },
        { key: "C", text: t`$- \frac{5}{6}$`, correct: true, value: "-5/6" },
        { key: "D", text: t`$- \frac{2}{9}$`, correct: false, misconceptionId: "C03-M1", value: "-2/9" },
      ],
      solution: {
        steps: [
          t`$\overrightarrow{AB} = 6\hat i + 6\hat j - 6\hat k$ and $\overrightarrow{AC} = -5\hat i - 5\hat j + 5\hat k$.`,
          t`Each component of $\overrightarrow{AC}$ over that of $\overrightarrow{AB}$: $\frac{-5}{6} = \frac{-5}{6} = \frac{5}{-6}$.`,
          t`So $\overrightarrow{AC} = -\frac{5}{6}\,\overrightarrow{AB}$ and $k = -\frac{5}{6}$: B and C lie on opposite sides of A.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.1 Ex.Q12 ii)" },
      stem: t`The points $P(4, 5, 2)$, $Q(3, 2, 4)$ and $R(5, 8, 0)$ are collinear, with $\overrightarrow{QR} = k\,\overrightarrow{PQ}$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { A: "(4, 5, 2)", B: "(3, 2, 4)", C: "(5, 8, 0)" }, params: { ask: "ratio", num: "BC", den: "AB" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
        { key: "B", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C03-M4", value: "-1/2" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C03-M1", value: "5/3" },
      ],
      solution: {
        steps: [
          t`$\overrightarrow{PQ} = -\hat i - 3\hat j + 2\hat k$ and $\overrightarrow{QR} = 2\hat i + 6\hat j - 4\hat k$.`,
          t`Each component of $\overrightarrow{QR}$ over that of $\overrightarrow{PQ}$: $\frac{2}{-1} = \frac{6}{-3} = \frac{-4}{2} = -2$.`,
          t`So $k = -2$: $\overrightarrow{QR}$ points the opposite way to $\overrightarrow{PQ}$ and is twice as long.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.1 Ex.Q15" },
      stem: t`$\vec r = -\hat i - 3\hat j + 4\hat k$ is written as $\vec r = x\vec a + y\vec b + z\vec c$, where $\vec a = 2\hat i + \hat j - 4\hat k$, $\vec b = 2\hat i - \hat j + 3\hat k$ and $\vec c = 3\hat i + \hat j - 2\hat k$. Then $(x, y, z)$ is:`,
      verify: { kind: "value", inputs: { r: "(-1, -3, 4)", a: "(2, 1, -4)", b: "(2, -1, 3)", c: "(3, 1, -2)" }, params: { ask: "comb3" } },
      options: [
        { key: "A", text: t`$(- \frac{1}{3}, \frac{31}{3}, \frac{8}{3})$`, correct: false, misconceptionId: "C03-M2", value: "(-1/3, 31/3, 8/3)" },
        { key: "B", text: t`$(- \frac{1}{2}, 3, -2)$`, correct: false, misconceptionId: "C03-M5", value: "(-1/2, 3, -2)" },
        { key: "C", text: t`$(-2, -2, 3)$`, correct: false, misconceptionId: "C03-M6", value: "(-2, -2, 3)" },
        { key: "D", text: t`$(2, 2, -3)$`, correct: true, value: "(2, 2, -3)" },
      ],
      solution: {
        steps: [
          t`Equate the $\hat i$, $\hat j$, $\hat k$ parts of $x\vec a + y\vec b + z\vec c$ with those of $\vec r$:`,
          t`(1) $2x + 2y + 3z = -1$, (2) $x - y + z = -3$, (3) $-4x + 3y - 2z = 4$.`,
          t`(1) + 2(2): $4x + 5z = -7$. (3) + 3(2): $-x + z = -5$, so $z = x - 5$.`,
          t`Then $9x - 25 = -7$: $x = 2$, $z = -3$, and from (2) $y = 2$. So $(x, y, z) = (2, 2, -3)$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.12" },
      stem: t`$\vec r = \hat i + 4\hat j - 4\hat k$ is written as $\vec r = x\vec a + y\vec b + z\vec c$, where $\vec a = 2\hat i - \hat j + 3\hat k$, $\vec b = \hat i - 2\hat j + 4\hat k$ and $\vec c = -\hat i + 3\hat j - 5\hat k$. Then $(x, y, z)$ is:`,
      verify: { kind: "value", inputs: { r: "(1, 4, -4)", a: "(2, -1, 3)", b: "(1, -2, 4)", c: "(-1, 3, -5)" }, params: { ask: "comb3" } },
      options: [
        { key: "A", text: t`$(\frac{1}{2}, -2, \frac{4}{5})$`, correct: false, misconceptionId: "C03-M5", value: "(1/2, -2, 4/5)" },
        { key: "B", text: t`$(-1, -2, -3)$`, correct: false, misconceptionId: "C03-M6", value: "(-1, -2, -3)" },
        { key: "C", text: t`$(1, 2, 3)$`, correct: true, value: "(1, 2, 3)" },
        { key: "D", text: t`$(-3, \frac{7}{2}, \frac{7}{2})$`, correct: false, misconceptionId: "C03-M2", value: "(-3, 7/2, 7/2)" },
      ],
      solution: {
        steps: [
          t`Equate the $\hat i$, $\hat j$, $\hat k$ parts of $x\vec a + y\vec b + z\vec c$ with those of $\vec r$:`,
          t`(1) $2x + y - z = 1$, (2) $-x - 2y + 3z = 4$, (3) $3x + 4y - 5z = -4$.`,
          t`From (1), $y = 1 - 2x + z$. Then (2) gives $3x + z = 6$ and (3) gives $5x + z = 8$.`,
          t`Subtract: $2x = 2$, so $x = 1$, $z = 3$, $y = 2$. So $(x, y, z) = (1, 2, 3)$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.1 SolvedEx.16" },
      stem: t`The vectors $\vec a = 4\hat i + 13\hat j - 18\hat k$, $\vec b = \hat i - 2\hat j + 3\hat k$ and $\vec c = 2\hat i + 3\hat j - 4\hat k$ are coplanar, with $\vec a = m\vec b + n\vec c$. Then $(m, n)$ is:`,
      verify: { kind: "value", inputs: { a: "(4, 13, -18)", b: "(1, -2, 3)", c: "(2, 3, -4)" }, params: { ask: "comb2" } },
      options: [
        { key: "A", text: t`$(-2, 3)$`, correct: true, value: "(-2, 3)" },
        { key: "B", text: t`$(\frac{38}{7}, \frac{5}{7})$`, correct: false, misconceptionId: "C03-M2", value: "(38/7, 5/7)" },
        { key: "C", text: t`$(4, \frac{13}{3})$`, correct: false, misconceptionId: "C03-M5", value: "(4, 13/3)" },
        { key: "D", text: t`$(2, -3)$`, correct: false, misconceptionId: "C03-M6", value: "(2, -3)" },
      ],
      solution: {
        steps: [
          t`Equate the parts of $\vec a = m\vec b + n\vec c$: (1) $m + 2n = 4$, (2) $-2m + 3n = 13$, (3) $3m - 4n = -18$.`,
          t`2(1) + (2): $7n = 21$, so $n = 3$ and $m = -2$.`,
          t`Check (3): $3(-2) - 4(3) = -18$. So $(m, n) = (-2, 3)$, and $\vec a = -2\vec b + 3\vec c$.`,
        ],
      },
    },
  ],
};
