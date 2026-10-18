import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "draft",
  hook: {
    prompt: t`Does it matter where the brackets go? Work out $\hat i\times(\hat i\times\hat j)$ and $(\hat i\times\hat i)\times\hat j$.`,
    reveal: t`$\hat i\times\hat j = \hat k$, so the first is $\hat i\times\hat k = -\hat j$. But $\hat i\times\hat i = \vec 0$, so the second is $\vec 0$. The brackets matter, and one formula tells you exactly what $\vec a\times(\vec b\times\vec c)$ is.`,
  },
  explanation: {
    intuition: [
      t`A **vector triple product** crosses one vector with the cross product of two others: $\vec a\times(\vec b\times\vec c)$.`,
      t`The bracket $\vec b\times\vec c$ is a vector, so the whole answer is a vector too.`,
      t`$\vec b\times\vec c$ stands straight out of the flat sheet that holds $\vec b$ and $\vec c$.`,
      t`Crossing with it again brings the answer back into that sheet.`,
      t`So the answer is a mix of $\vec b$ and $\vec c$: $(\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$.`,
      t`Moving the brackets, to $(\vec a\times\vec b)\times\vec c$, usually changes the answer.`,
    ],
    formal: [
      {
        title: "Two cross products",
        points: [
          t`The **vector triple product** of $\vec a$, $\vec b$, $\vec c$ is $\vec a\times(\vec b\times\vec c)$.`,
          t`Work out the bracket first: $\vec b\times\vec c$ is a vector.`,
          t`Then cross $\vec a$ with that vector, so the answer is a vector, not a number.`,
          t`Compare the scalar triple product $\vec a\cdot(\vec b\times\vec c)$, which is a number.`,
          t`Doing it this way needs two 3 by 3 determinants; a formula is quicker.`,
        ],
      },
      {
        title: "The expansion formula",
        points: [
          t`$\vec a\times(\vec b\times\vec c)$ $= (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$.`,
          t`Read it as: $\vec b$ times $\vec a\cdot\vec c$, minus $\vec c$ times $\vec a\cdot\vec b$.`,
          t`Each vector in the bracket is multiplied by $\vec a$ dotted with the **other** one.`,
          t`The term with $\vec b$, the middle vector, comes first and is positive; the $\vec c$ term is subtracted.`,
          t`A memory aid, **BAC minus CAB**: $\vec b(\vec a\cdot\vec c) - \vec c(\vec a\cdot\vec b)$.`,
          t`Only two dot products are needed, and no determinant.`,
        ],
      },
      {
        title: "Where the answer lies",
        points: [
          t`Draw $\vec b$ and $\vec c$ from one point O: they lie in one flat sheet, a **plane**.`,
          t`$\vec b\times\vec c$ is perpendicular, at right angles, to that plane.`,
          t`Whatever $\vec a$ is, $\vec a\times(\vec b\times\vec c)$ is perpendicular to $\vec b\times\vec c$.`,
          t`So it lies back in the plane of $\vec b$ and $\vec c$.`,
          t`That is why it equals $\lambda\vec b + \mu\vec c$, with $\lambda = \vec a\cdot\vec c$ and $\mu = -\vec a\cdot\vec b$.`,
          t`It is perpendicular to $\vec a$ as well: its dot product with $\vec a$ is $(\vec a\cdot\vec c)(\vec a\cdot\vec b)$ $- (\vec a\cdot\vec b)(\vec a\cdot\vec c) = 0$.`,
        ],
        figure: {
          alt: "A flat sheet drawn at a slant. From a point O in the sheet, arrows b and c lie in the sheet. The arrow b × c points straight up out of the sheet. An arrow a leans out of the sheet. The arrow a × (b × c) lies flat in the sheet, in the plane of b and c.",
          axes: "none",
          view: { x: [-3.2, 3.6], y: [-1.5, 3.2] },
          elements: [
            { kind: "segment", from: [-2.6, -1.1], to: [2, -1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [2, -1.1], to: [3, 1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [3, 1.1], to: [-1.6, 1.1], tone: "muted", step: 1 },
            { kind: "segment", from: [-1.6, 1.1], to: [-2.6, -1.1], tone: "muted", step: 1 },
            { kind: "label", at: [0, 0], label: "O", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "vector", from: [0, 0], to: [2, -0.7], label: "b", labelAt: "s", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [-1.4, 0.7], label: "c", labelAt: "sw", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [0, 2.7], label: "b × c", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", from: [0, 0], to: [-1.7, 2.1], label: "a", labelAt: "w", tone: "accent", step: 3 },
            { kind: "vector", from: [0, 0], to: [1, 0.3], label: "a × (b × c)", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Moving the brackets",
        points: [
          t`Swapping a cross product flips it, so $(\vec a\times\vec b)\times\vec c = -\vec c\times(\vec a\times\vec b)$.`,
          t`Expanding that gives $(\vec a\times\vec b)\times\vec c$ $= (\vec a\cdot\vec c)\vec b - (\vec b\cdot\vec c)\vec a$.`,
          t`It lies in the plane of $\vec a$ and $\vec b$, not of $\vec b$ and $\vec c$.`,
          t`Both expansions start with the middle vector $\vec b$, times the dot product of the other two.`,
          t`For example, $\hat i\times(\hat j\times\hat j) = \vec 0$, but $(\hat i\times\hat j)\times\hat j$ $= \hat k\times\hat j = -\hat i$.`,
          t`So the cross product is not **associative**: its brackets cannot be moved freely.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\vec a\times(\vec b\times\vec c)$ for $\vec a = \hat i - \hat j + 2\hat k$, $\vec b = 2\hat i + \hat j$ and $\vec c = \hat j + 2\hat k$, then check it with the formula.`,
      steps: [
        t`Bracket first: rows $\hat i\ \hat j\ \hat k$, $2\ \ 1\ \ 0$, $0\ \ 1\ \ 2$ give $\vec b\times\vec c = 2\hat i - 4\hat j + 2\hat k$.`,
        t`Now $\vec a\times(2\hat i - 4\hat j + 2\hat k)$: $\hat i$ part $(-1)(2) - (2)(-4) = 6$.`,
        t`$\hat j$ part $-[(1)(2) - (2)(2)] = 2$; $\hat k$ part $(1)(-4) - (-1)(2) = -2$.`,
        t`Formula: $\vec a\cdot\vec c = 0 - 1 + 4 = 3$ and $\vec a\cdot\vec b = 2 - 1 + 0 = 1$.`,
        t`So $3\vec b - \vec c$ $= 6\hat i + 3\hat j - \hat j - 2\hat k$ $= 6\hat i + 2\hat j - 2\hat k$, the same vector.`,
      ],
      answer: t`$\vec a\times(\vec b\times\vec c) = 6\hat i + 2\hat j - 2\hat k$`,
    },
    visualSpec: t`Drag the tips of $\vec a$, $\vec b$, $\vec c$ in a 3D view; $\vec b\times\vec c$ stands out of the plane of $\vec b$ and $\vec c$, and $\vec a\times(\vec b\times\vec c)$ stays in that plane, with its coefficients $\vec a\cdot\vec c$ and $-\vec a\cdot\vec b$ shown live.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Treats the cross product as associative: works $\vec a\times(\vec b\times\vec c)$ as $(\vec a\times\vec b)\times\vec c$, or the other way round`,
      remediation: t`The brackets cannot move: $\vec a\times(\vec b\times\vec c)$ lies in the plane of $\vec b$ and $\vec c$, but $(\vec a\times\vec b)\times\vec c$ lies in the plane of $\vec a$ and $\vec b$. Work out the bracket first.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C12-M2",
      mistake: t`Writes the two terms the wrong way round, $(\vec a\cdot\vec b)\vec c - (\vec a\cdot\vec c)\vec b$, and so gets the negative`,
      remediation: t`The term with the middle vector $\vec b$ comes first and is positive: $\vec a\times(\vec b\times\vec c) = (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Pairs each vector with the dot product that contains it: $(\vec a\cdot\vec b)\vec b - (\vec a\cdot\vec c)\vec c$`,
      remediation: t`Each vector is multiplied by $\vec a$ dotted with the other one: $\vec b$ gets $\vec a\cdot\vec c$, and $\vec c$ gets $\vec a\cdot\vec b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: t`Drops the minus sign: $(\vec a\cdot\vec c)\vec b + (\vec a\cdot\vec b)\vec c$, or $(\vec a\cdot\vec c)\vec b + (\vec b\cdot\vec c)\vec a$ for $(\vec a\times\vec b)\times\vec c$`,
      remediation: t`Both expansions are differences: $\vec a\times(\vec b\times\vec c) = (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$. The second term carries a minus sign.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C12-M2 and C12-M4 agree when $\vec a\cdot\vec c = 0$ (C12-Q2's numbers), and C12-M3 gives the key when $\vec a\cdot\vec b = \vec a\cdot\vec c$: never list such a pair together.`,
    t`C12-M1 needs all three vectors given ($(\vec a\times\vec b)\times\vec c$ leaves the plane of $\vec b$ and $\vec c$, so it has no $\lambda$, $\mu$ or angle answer); C12-M3 is modelled for $\vec a\times(\vec b\times\vec c)$ only.`,
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q8" },
      stem: t`If $\vec a = \hat i + 2\hat j + 3\hat k$, $\vec b = 3\hat i + 2\hat j + \hat k$ and $\vec c = 2\hat i + \hat j + 3\hat k$, then $\vec a\times(\vec b\times\vec c)$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 2, 3)", b: "(3, 2, 1)", c: "(2, 1, 3)" }, params: { ask: "a_bc" } },
      options: [
        { key: "A", text: t`$28\hat i + 4\hat j - 20\hat k$`, correct: false, misconceptionId: "C12-M1", value: "Matrix([[28], [4], [-20]])" },
        { key: "B", text: t`$4\hat i + 7\hat j - 29\hat k$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[4], [7], [-29]])" },
        { key: "C", text: t`$59\hat i + 36\hat j + 43\hat k$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[59], [36], [43]])" },
        { key: "D", text: t`$19\hat i + 16\hat j - 17\hat k$`, correct: true, value: "Matrix([[19], [16], [-17]])" },
      ],
      solution: {
        steps: [
          t`$\vec a\cdot\vec c = 2 + 2 + 9 = 13$ and $\vec a\cdot\vec b = 3 + 4 + 3 = 10$.`,
          t`So $\vec a\times(\vec b\times\vec c) = 13\vec b - 10\vec c$.`,
          t`$= (39 - 20)\hat i + (26 - 10)\hat j$ $+ (13 - 30)\hat k$.`,
          t`$= 19\hat i + 16\hat j - 17\hat k$. Crossing directly, with $\vec b\times\vec c = 5\hat i - 7\hat j - \hat k$, gives the same.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q9 i)" },
      stem: t`If $\vec a = \hat i - 2\hat j$, $\vec b = \hat i + 2\hat j$ and $\vec c = 2\hat i + \hat j - 2\hat k$, then $\vec a\times(\vec b\times\vec c)$ is:`,
      verify: { kind: "value", inputs: { a: "(1, -2, 0)", b: "(1, 2, 0)", c: "(2, 1, -2)" }, params: { ask: "a_bc" } },
      options: [
        { key: "A", text: t`$-3\hat i - 6\hat j$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[-3], [-6], [0]])" },
        { key: "B", text: t`$6\hat i + 3\hat j - 6\hat k$`, correct: true, value: "Matrix([[6], [3], [-6]])" },
        { key: "C", text: t`$-4\hat i + 8\hat j$`, correct: false, misconceptionId: "C12-M1", value: "Matrix([[-4], [8], [0]])" },
        { key: "D", text: t`$-6\hat i - 3\hat j + 6\hat k$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[-6], [-3], [6]])" },
      ],
      solution: {
        steps: [
          t`$\vec a\cdot\vec c = 2 - 2 + 0 = 0$ and $\vec a\cdot\vec b = 1 - 4 + 0 = -3$.`,
          t`So $\vec a\times(\vec b\times\vec c) = 0\,\vec b - (-3)\vec c = 3\vec c$.`,
          t`$3\vec c = 6\hat i + 3\hat j - 6\hat k$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q9 ii)" },
      stem: t`If $\vec a = 2\hat i + \hat j - \hat k$, $\vec b = \hat i - \hat j + 2\hat k$ and $\vec c = 3\hat i + \hat k$, then $(\vec a\times\vec b)\times\vec c$ is:`,
      verify: { kind: "value", inputs: { a: "(2, 1, -1)", b: "(1, -1, 2)", c: "(3, 0, 1)" }, params: { ask: "ab_c" } },
      options: [
        { key: "A", text: t`$15\hat i + 5\hat k$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[15], [0], [5]])" },
        { key: "B", text: t`$-5\hat i - 10\hat j + 15\hat k$`, correct: true, value: "Matrix([[-5], [-10], [15]])" },
        { key: "C", text: t`$8\hat i - 5\hat j + 11\hat k$`, correct: false, misconceptionId: "C12-M1", value: "Matrix([[8], [-5], [11]])" },
        { key: "D", text: t`$5\hat i + 10\hat j - 15\hat k$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[5], [10], [-15]])" },
      ],
      solution: {
        steps: [
          t`Expand: $(\vec a\times\vec b)\times\vec c$ $= (\vec a\cdot\vec c)\vec b - (\vec b\cdot\vec c)\vec a$.`,
          t`$\vec a\cdot\vec c = 6 + 0 - 1 = 5$ and $\vec b\cdot\vec c = 3 + 0 + 2 = 5$.`,
          t`So it is $5\vec b - 5\vec a = 5(\vec b - \vec a)$ $= 5(-\hat i - 2\hat j + 3\hat k)$.`,
          t`$= -5\hat i - 10\hat j + 15\hat k$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc I Q.20" },
      stem: t`$\vec a$, $\vec b$, $\vec c$ are non-coplanar unit vectors with $\vec a\times(\vec b\times\vec c) = \frac{1}{2}\vec b + \frac{\sqrt 3}{2}\vec c$. The angles that $\vec a$ makes with $\vec b$ and with $\vec c$ are, in that order:`,
      verify: { kind: "value", inputs: { l: "1/2", m: "sqrt(3)/2" }, params: { ask: "angles" } },
      options: [
        { key: "A", text: t`$\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C12-M4", value: "(pi/6, pi/3)" },
        { key: "B", text: t`$\dfrac{5\pi}{6}$ and $\dfrac{\pi}{3}$`, correct: true, value: "(5*pi/6, pi/3)" },
        { key: "C", text: t`$\dfrac{\pi}{6}$ and $\dfrac{2\pi}{3}$`, correct: false, misconceptionId: "C12-M2", value: "(pi/6, 2*pi/3)" },
        { key: "D", text: t`$\dfrac{\pi}{3}$ and $\dfrac{5\pi}{6}$`, correct: false, misconceptionId: "C12-M3", value: "(pi/3, 5*pi/6)" },
      ],
      solution: {
        steps: [
          t`Expand: $(\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$ $= \frac{1}{2}\vec b + \frac{\sqrt 3}{2}\vec c$.`,
          t`$\vec b$ and $\vec c$ are not parallel, so compare coefficients: $\vec a\cdot\vec c = \frac{1}{2}$, $\vec a\cdot\vec b = -\frac{\sqrt 3}{2}$.`,
          t`For unit vectors these are cosines: $\cos\theta = -\frac{\sqrt 3}{2}$ gives $\theta = \frac{5\pi}{6}$ between $\vec a$ and $\vec b$.`,
          t`$\cos\phi = \frac{1}{2}$ gives $\phi = \frac{\pi}{3}$ between $\vec a$ and $\vec c$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q8" },
      stem: t`For $\vec a = 2\hat i - \hat j + \hat k$, $\vec b = \hat i + 3\hat k$ and $\vec c = 2\hat j - \hat k$, write $\vec a\times(\vec b\times\vec c) = \lambda\vec b + \mu\vec c$. Then:`,
      verify: { kind: "value", inputs: { a: "(2, -1, 1)", b: "(1, 0, 3)", c: "(0, 2, -1)" }, params: { ask: "coeffs" } },
      options: [
        { key: "A", text: t`$\lambda = 5$, $\mu = 3$`, correct: false, misconceptionId: "C12-M3", value: "(5, 3)" },
        { key: "B", text: t`$\lambda = -3$, $\mu = 5$`, correct: false, misconceptionId: "C12-M4", value: "(-3, 5)" },
        { key: "C", text: t`$\lambda = -3$, $\mu = -5$`, correct: true, value: "(-3, -5)" },
        { key: "D", text: t`$\lambda = 3$, $\mu = 5$`, correct: false, misconceptionId: "C12-M2", value: "(3, 5)" },
      ],
      solution: {
        steps: [
          t`By the formula, $\lambda = \vec a\cdot\vec c$ and $\mu = -\vec a\cdot\vec b$.`,
          t`$\vec a\cdot\vec c = 0 - 2 - 1 = -3$ and $\vec a\cdot\vec b = 2 + 0 + 3 = 5$.`,
          t`So $\lambda = -3$ and $\mu = -5$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q8" },
      stem: t`$\vec b = \hat i + \hat j$ and $\vec c = \hat j - \hat k$. A vector $\vec a$ has $\vec a\cdot\vec b = 2$ and $\vec a\cdot\vec c = -1$. Then $\vec a\times(\vec b\times\vec c)$ is:`,
      verify: { kind: "value", inputs: { ab: "2", ac: "-1", b: "(1, 1, 0)", c: "(0, 1, -1)" }, params: { ask: "dots" } },
      options: [
        { key: "A", text: t`$\hat i + 3\hat j - 2\hat k$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[1], [3], [-2]])" },
        { key: "B", text: t`$2\hat i + 3\hat j - \hat k$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[2], [3], [-1]])" },
        { key: "C", text: t`$-\hat i + \hat j - 2\hat k$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[-1], [1], [-2]])" },
        { key: "D", text: t`$-\hat i - 3\hat j + 2\hat k$`, correct: true, value: "Matrix([[-1], [-3], [2]])" },
      ],
      solution: {
        steps: [
          t`The formula needs only the dot products: $(\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$.`,
          t`$= -1(\hat i + \hat j) - 2(\hat j - \hat k)$.`,
          t`$= -\hat i - 3\hat j + 2\hat k$.`,
        ],
      },
    },
  ],
};
