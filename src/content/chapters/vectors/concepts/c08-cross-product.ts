import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Find a vector that is at right angles to both $\hat i + \hat j$ and $\hat j + \hat k$.`,
    reveal: t`$\hat i - \hat j + \hat k$ works: its dot product with each is $0$. The cross product $(\hat i + \hat j)\times(\hat j + \hat k)$ builds such a vector in one step, with no guessing.`,
  },
  explanation: {
    intuition: [
      t`The dot product of two vectors is a number; the cross product is a new vector.`,
      t`Two arrows from one point lie in a flat sheet, called a **plane**.`,
      t`The cross product $\vec a\times\vec b$ stands straight out of that plane.`,
      t`So it is **perpendicular**, at right angles, to both $\vec a$ and $\vec b$.`,
      t`A 3 by 3 determinant gives its three components at once.`,
      t`Swapping the order flips it: $\vec b\times\vec a$ points the opposite way.`,
    ],
    formal: [
      {
        title: "The determinant rule",
        points: [
          t`Let $\vec a$ have components $a_1, a_2, a_3$ and $\vec b$ have components $b_1, b_2, b_3$.`,
          t`The **cross product** $\vec a\times\vec b$ is a 3 by 3 determinant, read as a vector.`,
          t`Row 1 is $\hat i\ \ \hat j\ \ \hat k$; row 2 is $a_1\ \ a_2\ \ a_3$; row 3 is $b_1\ \ b_2\ \ b_3$.`,
          t`The first factor, $\vec a$, always goes in row 2; the second, $\vec b$, in row 3.`,
          t`Expand along row 1, with the signs $+$, $-$, $+$ on $\hat i$, $\hat j$, $\hat k$.`,
        ],
      },
      {
        title: "Expanding along the first row",
        points: [
          t`A **minor** is the 2 by 2 determinant left when you strike out one unit vector's row and column.`,
          t`A 2 by 2 determinant with rows $p\ q$ and $r\ s$ is $ps - qr$: leading diagonal first.`,
          t`The $\hat i$ part is $+(a_2b_3 - a_3b_2)$.`,
          t`The $\hat j$ part is $-(a_1b_3 - a_3b_1)$: the minus sign is easy to drop.`,
          t`The $\hat k$ part is $+(a_1b_2 - a_2b_1)$.`,
          t`Every part mixes different components; $a_1b_1$, $a_2b_2$, $a_3b_3$ belong to the dot product.`,
        ],
      },
      {
        title: "Perpendicular to both",
        points: [
          t`Draw $\vec a$ and $\vec b$ from one point O: they lie in one plane.`,
          t`$\vec a\times\vec b$ is perpendicular to that plane, so to both $\vec a$ and $\vec b$.`,
          t`Check any answer: $(\vec a\times\vec b)\cdot\vec a = 0$ and $(\vec a\times\vec b)\cdot\vec b = 0$.`,
          t`**Right-hand rule:** curl your fingers from $\vec a$ to $\vec b$; your thumb points along $\vec a\times\vec b$.`,
          t`$\vec b\times\vec a$ points the opposite way, straight out of the other side.`,
        ],
        figure: {
          alt: "A flat sheet drawn at a slant. From a point O in the sheet, arrows a and b lie in the sheet. A curved line turns from a to b. The arrow a × b points straight up out of the sheet, and the arrow b × a points straight down, the opposite way.",
          axes: "none",
          view: { x: [-3.2, 3.6], y: [-3.3, 3.3] },
          elements: [
            { kind: "segment", from: [-2.6, -1.1], to: [2, -1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [2, -1.1], to: [3, 1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [3, 1.1], to: [-1.6, 1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [-1.6, 1.1], to: [-2.6, -1.1], tone: "muted", step: 1 },
            { kind: "label", at: [0, 0], label: "O", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "vector", from: [0, 0], to: [2.2, -0.6], label: "a", labelAt: "s", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [-0.8, 0.55], label: "b", labelAt: "nw", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [0, 2.8], label: "a × b", labelAt: "e", tone: "good", step: 2 },
            { kind: "arc", centre: [0, 0], r: 0.7, from: -15, to: 145, tone: "accent", step: 4 },
            { kind: "vector", from: [0, 0], to: [0, -2.8], label: "b × a", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Order matters",
        points: [
          t`Swapping rows 2 and 3 of a determinant changes its sign.`,
          t`So $\vec b\times\vec a = -\vec a\times\vec b$: the cross product is not commutative.`,
          t`A vector crossed with itself, or with a parallel vector, gives $\vec 0$: $\vec a\times\vec a = \vec 0$.`,
          t`Brackets open as usual: $\vec a\times(\vec b + \vec c)$ $= \vec a\times\vec b + \vec a\times\vec c$.`,
          t`For the unit vectors: $\hat i\times\hat j = \hat k$, $\hat j\times\hat k = \hat i$, $\hat k\times\hat i = \hat j$.`,
          t`Against that cycle the sign flips: $\hat j\times\hat i = -\hat k$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\vec a\times\vec b$ and $\vec b\times\vec a$ for $\vec a = 2\hat i - \hat j + 3\hat k$ and $\vec b = \hat i + 2\hat j - \hat k$.`,
      steps: [
        t`Rows: $\hat i\ \hat j\ \hat k$, then $2\ \ {-1}\ \ 3$, then $1\ \ 2\ \ {-1}$.`,
        t`$\hat i$: $(-1)(-1) - (3)(2) = 1 - 6 = -5$.`,
        t`$\hat j$: $-[(2)(-1) - (3)(1)]$ $= -(-5) = 5$. $\hat k$: $(2)(2) - (-1)(1) = 5$.`,
        t`So $\vec a\times\vec b = -5\hat i + 5\hat j + 5\hat k$. Check: dot with $\vec a$ is $-10 - 5 + 15 = 0$.`,
        t`Swapping the order flips the sign: $\vec b\times\vec a = 5\hat i - 5\hat j - 5\hat k$.`,
      ],
      answer: t`$\vec a\times\vec b = -5\hat i + 5\hat j + 5\hat k$, $\vec b\times\vec a = 5\hat i - 5\hat j - 5\hat k$`,
    },
    visualSpec: t`Drag the tips of $\vec a$ and $\vec b$ in a 3D view; $\vec a\times\vec b$ stays at right angles to both, its components update from the determinant, and swapping the two flips it.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Gives the $\hat j$ part a $+$ sign, forgetting the signs $+$, $-$, $+$ along the first row`,
      remediation: t`Expanding along the first row, the signs go $+$, $-$, $+$. The $\hat j$ part is $-(a_1b_3 - a_3b_1)$.`,
      fallback: { kind: "ext", topic: "3 by 3 determinants" },
    },
    {
      id: "C08-M2",
      mistake: t`Treats the cross product as commutative, so $\vec b\times\vec a = \vec a\times\vec b$`,
      remediation: t`Swapping the factors flips the direction: $\vec b\times\vec a = -\vec a\times\vec b$. Put the first factor in row 2 of the determinant.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Multiplies matching components, $a_1b_1\hat i + a_2b_2\hat j + a_3b_3\hat k$, as in the dot product`,
      remediation: t`Each part of $\vec a\times\vec b$ mixes different components: the $\hat i$ part is $a_2b_3 - a_3b_2$. Write the determinant and expand it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Works each 2 by 2 minor as $qr - ps$, the diagonals the wrong way round`,
      remediation: t`A 2 by 2 determinant with rows $p\ q$ and $r\ s$ is $ps - qr$: the leading diagonal, top left to bottom right, comes first.`,
      fallback: { kind: "ext", topic: "2 by 2 determinants" },
    },
    {
      id: "C08-M5",
      mistake: t`Uses the position vectors of $Q$ and $R$ in place of $\overrightarrow{PQ}$ and $\overrightarrow{PR}$`,
      remediation: t`The vector from $P$ to $Q$ is $\overrightarrow{PQ} = \vec q - \vec p$. Find both sides from $P$ first, then cross them.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C08-M4 gives $\vec b\times\vec a$, so on an item asking for $\vec b\times\vec a$ it lands on C08-M2's option: never list both there.`,
    t`C08-M2 shows only where order matters ($\vec b\times\vec a$, or an expansion like $(\vec a + \vec b)\times(\vec a - \vec b)$); C08-M1 gives the key when the $\hat j$ part is $0$.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 SolvedEx.1 ii)" },
      stem: t`If $\vec a = \hat i + 3\hat j - 2\hat k$ and $\vec b = -\hat i + 5\hat k$, then $\vec a\times\vec b$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 3, -2)", b: "(-1, 0, 5)" }, params: { ask: "axb" } },
      options: [
        { key: "A", text: t`$15\hat i - 3\hat j + 3\hat k$`, correct: true, value: "Matrix([[15], [-3], [3]])" },
        { key: "B", text: t`$15\hat i + 3\hat j + 3\hat k$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[15], [3], [3]])" },
        { key: "C", text: t`$-\hat i - 10\hat k$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[-1], [0], [-10]])" },
        { key: "D", text: t`$-15\hat i + 3\hat j - 3\hat k$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[-15], [3], [-3]])" },
      ],
      solution: {
        steps: [
          t`Rows: $\hat i\ \hat j\ \hat k$, then $1\ \ 3\ \ {-2}$, then $-1\ \ 0\ \ 5$.`,
          t`$\hat i$: $(3)(5) - (-2)(0) = 15$. $\hat j$: $-[(1)(5) - (-2)(-1)] = -3$.`,
          t`$\hat k$: $(1)(0) - (3)(-1) = 3$. Check: dot with $\vec a$ is $15 - 9 - 6 = 0$.`,
          t`$\vec a\times\vec b = 15\hat i - 3\hat j + 3\hat k$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 Ex.Q7" },
      stem: t`If $\vec a = \hat i - 2\hat j + 3\hat k$ and $\vec b = \hat i - \hat j + 2\hat k$, then $\vec b\times\vec a$ is:`,
      verify: { kind: "value", inputs: { a: "(1, -2, 3)", b: "(1, -1, 2)" }, params: { ask: "bxa" } },
      options: [
        { key: "A", text: t`$\hat i + \hat j - \hat k$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[1], [1], [-1]])" },
        { key: "B", text: t`$-\hat i + \hat j + \hat k$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[-1], [1], [1]])" },
        { key: "C", text: t`$\hat i + 2\hat j + 6\hat k$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[1], [2], [6]])" },
        { key: "D", text: t`$\hat i - \hat j - \hat k$`, correct: true, value: "Matrix([[1], [-1], [-1]])" },
      ],
      solution: {
        steps: [
          t`$\vec b$ comes first, so it goes in row 2: rows $\hat i\ \hat j\ \hat k$, $1\ \ {-1}\ \ 2$, $1\ \ {-2}\ \ 3$.`,
          t`$\hat i$: $(-1)(3) - (2)(-2) = 1$. $\hat j$: $-[(1)(3) - (2)(1)] = -1$.`,
          t`$\hat k$: $(1)(-2) - (-1)(1) = -1$.`,
          t`$\vec b\times\vec a = \hat i - \hat j - \hat k$, the negative of $\vec a\times\vec b$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 Ex.Q1" },
      stem: t`If $\vec a = 2\hat i + 3\hat j - \hat k$ and $\vec b = \hat i - 4\hat j + 2\hat k$, then $(\vec a + \vec b)\times(\vec a - \vec b)$ is:`,
      verify: { kind: "value", inputs: { a: "(2, 3, -1)", b: "(1, -4, 2)" }, params: { ask: "sum_diff" } },
      options: [
        { key: "A", text: t`$-4\hat i - 10\hat j + 22\hat k$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[-4], [-10], [22]])" },
        { key: "B", text: t`$\vec 0$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[0], [0], [0]])" },
        { key: "C", text: t`$4\hat i - 10\hat j - 22\hat k$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[4], [-10], [-22]])" },
        { key: "D", text: t`$-4\hat i + 10\hat j + 22\hat k$`, correct: true, value: "Matrix([[-4], [10], [22]])" },
      ],
      solution: {
        steps: [
          t`Open the brackets: $\vec a\times\vec a - \vec a\times\vec b$ $+ \vec b\times\vec a - \vec b\times\vec b$.`,
          t`$\vec a\times\vec a = \vec b\times\vec b = \vec 0$ and $\vec b\times\vec a = -\vec a\times\vec b$, so it is $-2(\vec a\times\vec b)$.`,
          t`$\vec a\times\vec b$: $\hat i$ $(3)(2) - (-1)(-4) = 2$; $\hat j$ $-[(2)(2) - (-1)(1)] = -5$; $\hat k$ $(2)(-4) - (3)(1) = -11$.`,
          t`So the answer is $-2(2\hat i - 5\hat j - 11\hat k)$ $= -4\hat i + 10\hat j + 22\hat k$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 SolvedEx.13" },
      stem: t`Two lines have direction ratios $-1, 2, 2$ and $0, 2, 1$, so they run along $\vec d_1 = -\hat i + 2\hat j + 2\hat k$ and $\vec d_2 = 2\hat j + \hat k$. Then $\vec d_1\times\vec d_2$ is:`,
      verify: { kind: "value", inputs: { a: "(-1, 2, 2)", b: "(0, 2, 1)" }, params: { ask: "axb" } },
      options: [
        { key: "A", text: t`$4\hat j + 2\hat k$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[0], [4], [2]])" },
        { key: "B", text: t`$2\hat i - \hat j + 2\hat k$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[2], [-1], [2]])" },
        { key: "C", text: t`$-2\hat i + \hat j - 2\hat k$`, correct: true, value: "Matrix([[-2], [1], [-2]])" },
        { key: "D", text: t`$-2\hat i - \hat j - 2\hat k$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[-2], [-1], [-2]])" },
      ],
      solution: {
        steps: [
          t`Rows: $\hat i\ \hat j\ \hat k$, then $-1\ \ 2\ \ 2$, then $0\ \ 2\ \ 1$.`,
          t`$\hat i$: $(2)(1) - (2)(2) = -2$. $\hat j$: $-[(-1)(1) - (2)(0)] = 1$. $\hat k$: $(-1)(2) - (2)(0) = -2$.`,
          t`Check: dot with $\vec d_1$ is $2 + 2 - 4 = 0$, dot with $\vec d_2$ is $2 - 2 = 0$.`,
          t`$\vec d_1\times\vec d_2 = -2\hat i + \hat j - 2\hat k$, so direction ratios $-2, 1, -2$ for the perpendicular line.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 SolvedEx.1 i)" },
      stem: t`If $\vec a = \hat i + \hat j - \hat k$ and $\vec b = 2\hat i + 4\hat j + 6\hat k$, then $\vec b\times\vec a$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 1, -1)", b: "(2, 4, 6)" }, params: { ask: "bxa" } },
      options: [
        { key: "A", text: t`$2\hat i + 4\hat j - 6\hat k$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[2], [4], [-6]])" },
        { key: "B", text: t`$-10\hat i + 8\hat j - 2\hat k$`, correct: true, value: "Matrix([[-10], [8], [-2]])" },
        { key: "C", text: t`$-10\hat i - 8\hat j - 2\hat k$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[-10], [-8], [-2]])" },
        { key: "D", text: t`$10\hat i - 8\hat j + 2\hat k$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[10], [-8], [2]])" },
      ],
      solution: {
        steps: [
          t`$\vec b$ comes first, so it goes in row 2: rows $\hat i\ \hat j\ \hat k$, $2\ \ 4\ \ 6$, $1\ \ 1\ \ {-1}$.`,
          t`$\hat i$: $(4)(-1) - (6)(1) = -10$. $\hat j$: $-[(2)(-1) - (6)(1)] = 8$.`,
          t`$\hat k$: $(2)(1) - (4)(1) = -2$.`,
          t`$\vec b\times\vec a = -10\hat i + 8\hat j - 2\hat k$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.4 SolvedEx.10" },
      stem: t`For the points $P(2, 2, 0)$, $Q(0, 3, 5)$ and $R(5, 0, 3)$, the vector $\overrightarrow{PQ}\times\overrightarrow{PR}$ is:`,
      verify: { kind: "value", inputs: { P: "(2, 2, 0)", Q: "(0, 3, 5)", R: "(5, 0, 3)" }, params: { ask: "pq_pr" } },
      options: [
        { key: "A", text: t`$-13\hat i - 21\hat j - \hat k$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[-13], [-21], [-1]])" },
        { key: "B", text: t`$9\hat i + 25\hat j - 15\hat k$`, correct: false, misconceptionId: "C08-M5", value: "Matrix([[9], [25], [-15]])" },
        { key: "C", text: t`$13\hat i + 21\hat j + \hat k$`, correct: true, value: "Matrix([[13], [21], [1]])" },
        { key: "D", text: t`$-6\hat i - 2\hat j + 15\hat k$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[-6], [-2], [15]])" },
      ],
      solution: {
        steps: [
          t`$\overrightarrow{PQ} = (0 - 2, 3 - 2, 5 - 0)$, so $\overrightarrow{PQ} = -2\hat i + \hat j + 5\hat k$.`,
          t`$\overrightarrow{PR} = (5 - 2, 0 - 2, 3 - 0)$, so $\overrightarrow{PR} = 3\hat i - 2\hat j + 3\hat k$.`,
          t`$\hat i$: $(1)(3) - (5)(-2) = 13$. $\hat j$: $-[(-2)(3) - (5)(3)] = 21$. $\hat k$: $(-2)(-2) - (1)(3) = 1$.`,
          t`$\overrightarrow{PQ}\times\overrightarrow{PR} = 13\hat i + 21\hat j + \hat k$.`,
        ],
      },
    },
  ],
};
