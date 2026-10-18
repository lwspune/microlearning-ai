import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Are $\vec a = 2\hat i - \hat j + 3\hat k$ and $\vec b = \hat i + 5\hat j + \hat k$ perpendicular? You can't draw space accurately enough to see.`,
    reveal: t`Yes. Multiply matching components and add: $2(1) + (-1)(5) + 3(1) = 0$. A zero dot product means the angle is $90^\circ$, and no drawing is needed.`,
  },
  explanation: {
    intuition: [
      t`Two arrows can point the same way, opposite ways, or anywhere in between.`,
      t`The **dot product** $\vec a\cdot\vec b$ is one number that measures how far they point together.`,
      t`It is the product of their lengths times the cosine of the angle between them.`,
      t`Same direction: it is largest. At a right angle: it is zero. Opposite ways: it is most negative.`,
      t`With components it is easy: multiply matching components and add.`,
      t`So the angle between two vectors in space can be computed, not measured.`,
    ],
    formal: [
      {
        title: "The dot product",
        points: [
          t`Let $\theta$ be the angle between $\vec a$ and $\vec b$, with $0 \le \theta \le \pi$.`,
          t`Their **dot product** (scalar product) is $\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta$.`,
          t`It is a scalar, a single number, not a vector.`,
          t`It uses $\cos\theta$, never $\sin\theta$.`,
          t`Order doesn't matter, $\vec a\cdot\vec b = \vec b\cdot\vec a$, and $(m\vec a)\cdot\vec b = m(\vec a\cdot\vec b)$.`,
          t`The angle between $\vec a$ and itself is $0$, so $\vec a\cdot\vec a = |\vec a|^2$.`,
        ],
      },
      {
        title: "Measuring the angle",
        points: [
          t`The **angle between** two vectors is measured with both drawn from one point.`,
          t`It runs from $0$ to $\pi$; here it is $\theta$.`,
          t`Placed head to tail, like two sides of a triangle, they show $\pi - \theta$ instead.`,
          t`$\cos(\pi - \theta) = -\cos\theta$, so the wrong angle flips the sign of $\vec a\cdot\vec b$.`,
          t`For angle P of a triangle, use $\overrightarrow{PQ}$ and $\overrightarrow{PR}$: both leave P.`,
          t`Find them as $\overrightarrow{PQ} = \vec q - \vec p$, not from the position vectors alone.`,
        ],
        figure: {
          alt: "Two arrows a and b start at the same point O, with the angle θ between them. A dashed copy of b starts at the tip of a instead; there the angle between the two arrows reads π − θ.",
          axes: "none",
          view: { x: [-0.8, 6.4], y: [-0.8, 3.6] },
          elements: [
            { kind: "label", at: [0, 0], label: "O", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "vector", from: [0, 0], to: [4, 0], label: "a", labelAt: "s", tone: "accent", step: 1 },
            { kind: "vector", from: [0, 0], to: [1.5, 2.6], label: "b", labelAt: "nw", tone: "accent", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, tone: "good", step: 2 },
            { kind: "label", at: [0.75, 0.35], label: "θ", labelAt: "e", tone: "good", step: 2 },
            { kind: "segment", from: [4, 0], to: [5.5, 2.6], tone: "bad", dashed: true, step: 3 },
            { kind: "angle", at: [4, 0], from: 60, to: 180, tone: "bad", step: 3 },
            { kind: "label", at: [3.5, 0.75], label: "π − θ", labelAt: "nw", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "Using components",
        points: [
          t`Each unit vector has length 1, so $\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1$.`,
          t`They are at right angles to each other, so $\hat i\cdot\hat j = \hat j\cdot\hat k = \hat k\cdot\hat i = 0$.`,
          t`Expanding $\vec a\cdot\vec b$ gives nine terms, and the six mixed ones vanish.`,
          t`So $\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3$.`,
          t`Then $\cos\theta = \frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$, with $|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$.`,
          t`Divide by the lengths themselves, not by their squares.`,
        ],
      },
      {
        title: "Zero, positive, negative",
        points: [
          t`Two vectors are **perpendicular** (orthogonal) when they meet at a right angle.`,
          t`For non-zero vectors, $\vec a\cdot\vec b = 0$ exactly when $\cos\theta = 0$, that is $\theta = \frac{\pi}{2}$.`,
          t`So perpendicular means $a_1b_1 + a_2b_2 + a_3b_3 = 0$.`,
          t`Components in one ratio is the test for parallel, a different thing.`,
          t`If $\vec a\cdot\vec b > 0$ the angle is acute; if $\vec a\cdot\vec b < 0$ it is obtuse.`,
        ],
      },
      {
        title: "Expanding dot products",
        points: [
          t`Dot products expand like ordinary brackets.`,
          t`$|\vec a + \vec b|^2 = (\vec a + \vec b)\cdot(\vec a + \vec b)$ $= |\vec a|^2 + 2\vec a\cdot\vec b + |\vec b|^2$.`,
          t`Keep the squares: $\vec a\cdot\vec a$ is $|\vec a|^2$, not $|\vec a|$.`,
          t`If $\vec a + \vec b + \vec c = \vec 0$, square $\vec c = -(\vec a + \vec b)$ to find $\vec a\cdot\vec b$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the angle between $\vec a = 2\hat i - \hat j + \hat k$ and $\vec b = \hat i + \hat j + 2\hat k$.`,
      steps: [
        t`Multiply matching components and add: $\vec a\cdot\vec b = 2(1) + (-1)(1) + 1(2)$ $= 3$.`,
        t`$|\vec a| = \sqrt{4 + 1 + 1} = \sqrt6$ and $|\vec b| = \sqrt{1 + 1 + 4} = \sqrt6$.`,
        t`$\cos\theta = \frac{3}{\sqrt6 \cdot \sqrt6} = \frac{3}{6} = \frac{1}{2}$.`,
        t`$\cos\theta > 0$, so $\theta$ is acute: $\theta = \frac{\pi}{3}$, that is $60^\circ$.`,
      ],
      answer: t`$\theta = \frac{\pi}{3}$`,
    },
    visualSpec: t`Drag the tip of $\vec b$ around $\vec a$; the panel shows $\theta$, $\cos\theta$ and $\vec a\cdot\vec b$, which passes through zero as $\theta$ crosses $90^\circ$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Takes $\hat i\cdot\hat j = 1$ like $\hat i\cdot\hat i$, so keeps all nine products: $(a_1 + a_2 + a_3)(b_1 + b_2 + b_3)$`,
      remediation: t`$\hat i$, $\hat j$, $\hat k$ are at right angles, so $\hat i\cdot\hat j = 0$ and only matching products survive: $\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Uses $\sin\theta$ in place of $\cos\theta$: $\vec a\cdot\vec b = |\vec a||\vec b|\sin\theta$`,
      remediation: t`The dot product uses the cosine: $\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta$, so $\cos\theta = \frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$. It is zero at $90^\circ$, where $\cos\theta = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Places the vectors head to tail, as sides of a triangle, so works with $\pi - \theta$ and gets the sign of $\cos\theta$ wrong`,
      remediation: t`The angle between two vectors is measured with both drawn from one point. Head to tail you see $\pi - \theta$, whose cosine has the opposite sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Mixes up $|\vec a|$ and $|\vec a|^2$: divides by the squared lengths, or writes $\vec a\cdot\vec a = |\vec a|$`,
      remediation: t`$\vec a\cdot\vec a = |\vec a|^2$, and $|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$. Divide by the lengths themselves, and keep the squares when you expand.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: "Uses the parallel test (components in one ratio) for perpendicular vectors",
      remediation: t`Components in one ratio means parallel. Perpendicular means the dot product is zero: $a_1b_1 + a_2b_2 + a_3b_3 = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Uses the position vectors of the points instead of the sides leaving the vertex",
      remediation: t`The angle at a vertex lies between the sides leaving it: for angle A use $\overrightarrow{AB} = \vec b - \vec a$ and $\overrightarrow{AC} = \vec c - \vec a$, not $\vec b$ and $\vec c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C05-M2 gives the key when $\theta = \frac{\pi}{4}$ (as in C05-Q2) and C05-M3 when $\theta = \frac{\pi}{2}$: diagnose them at other angles.`,
    "C05-M4 gives the key for unit vectors; C05-M5 applies only when the known components are in one ratio.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.3 SolvedEx.2 ii)" },
      stem: t`The angle between $\vec a = 3\hat i + 4\hat j - 5\hat k$ and $\vec b = 3\hat i - 4\hat j - 5\hat k$ is:`,
      verify: { kind: "value", inputs: { a: "(3, 4, -5)", b: "(3, -4, -5)" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$\cos^{-1}\left(\frac{9}{1250}\right)$`, correct: false, misconceptionId: "C05-M4", value: "acos(9/1250)" },
        { key: "B", text: t`$\cos^{-1}\left(\frac{9}{25}\right)$`, correct: true, value: "acos(9/25)" },
        { key: "C", text: t`$\cos^{-1}\left(-\frac{6}{25}\right)$`, correct: false, misconceptionId: "C05-M1", value: "acos(-6/25)" },
        { key: "D", text: t`$\sin^{-1}\left(\frac{9}{25}\right)$`, correct: false, misconceptionId: "C05-M2", value: "asin(9/25)" },
      ],
      solution: {
        steps: [
          t`$\vec a\cdot\vec b = 3(3) + 4(-4) + (-5)(-5)$ $= 9 - 16 + 25 = 18$.`,
          t`$|\vec a| = |\vec b| = \sqrt{9 + 16 + 25} = \sqrt{50}$.`,
          t`$\cos\theta = \frac{18}{\sqrt{50} \cdot \sqrt{50}} = \frac{9}{25}$, so $\theta = \cos^{-1}\left(\frac{9}{25}\right)$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.3 Ex.Q7" },
      stem: t`The angle $P$ of the triangle with vertices $P(0, -1, -2)$, $Q(3, 1, 4)$ and $R(5, 7, 1)$ is:`,
      verify: { kind: "value", inputs: { P: "(0, -1, -2)", Q: "(3, 1, 4)", R: "(5, 7, 1)" }, params: { ask: "vertex" } },
      options: [
        { key: "A", text: t`$\frac{3 \pi}{4}$`, correct: false, misconceptionId: "C05-M3", value: "3*pi/4" },
        { key: "B", text: t`$\cos^{-1}\left(\frac{1}{98}\right)$`, correct: false, misconceptionId: "C05-M4", value: "acos(1/98)" },
        { key: "C", text: t`$\cos^{-1}\left(\frac{\sqrt{78}}{15}\right)$`, correct: false, misconceptionId: "C05-M6", value: "acos(sqrt(78)/15)" },
        { key: "D", text: t`$\frac{\pi}{4}$`, correct: true, value: "pi/4" },
      ],
      solution: {
        steps: [
          t`Angle P lies between the sides leaving P: $\overrightarrow{PQ} = 3\hat i + 2\hat j + 6\hat k$ and $\overrightarrow{PR} = 5\hat i + 8\hat j + 3\hat k$.`,
          t`$\overrightarrow{PQ}\cdot\overrightarrow{PR} = 15 + 16 + 18 = 49$; $|\overrightarrow{PQ}| = 7$ and $|\overrightarrow{PR}| = \sqrt{98} = 7\sqrt2$.`,
          t`$\cos P = \frac{49}{7 \cdot 7\sqrt2} = \frac{1}{\sqrt2}$, so $P = \frac{\pi}{4}$, that is $45^\circ$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.3 SolvedEx.3 i)" },
      stem: t`The triangle with vertices $A(1, 0, 2)$, $B(4, 2, 11)$ and $C(2, a, 5)$ has a right angle at $A$. The value of $a$ is:`,
      verify: { kind: "value", inputs: { A: "(1, 0, 2)", B: "(4, 2, 11)", C: "(2, a, 5)" }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$-15$`, correct: true, value: "-15" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C05-M1", value: "-4" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C05-M5", value: "2/3" },
        { key: "D", text: t`$- \frac{63}{2}$`, correct: false, misconceptionId: "C05-M6", value: "-63/2" },
      ],
      solution: {
        steps: [
          t`The right angle is at A, so $\overrightarrow{AB}\cdot\overrightarrow{AC} = 0$.`,
          t`$\overrightarrow{AB} = 3\hat i + 2\hat j + 9\hat k$ and $\overrightarrow{AC} = \hat i + a\hat j + 3\hat k$.`,
          t`$3(1) + 2(a) + 9(3) = 0$, so $2a + 30 = 0$ and $a = -15$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc I Q.4" },
      stem: t`If $|\vec a| = 3$, $|\vec b| = 5$, $|\vec c| = 7$ and $\vec a + \vec b + \vec c = \vec 0$, then the angle between $\vec a$ and $\vec b$ is:`,
      verify: { kind: "value", inputs: { ma: "3", mb: "5", mc: "7" }, params: { ask: "sum3", what: "angle" } },
      options: [
        { key: "A", text: t`$\frac{2 \pi}{3}$`, correct: false, misconceptionId: "C05-M3", value: "2*pi/3" },
        { key: "B", text: t`$\cos^{-1}\left(-\frac{1}{30}\right)$`, correct: false, misconceptionId: "C05-M4", value: "acos(-1/30)" },
        { key: "C", text: t`$\frac{\pi}{3}$`, correct: true, value: "pi/3" },
        { key: "D", text: t`$\frac{\pi}{6}$`, correct: false, misconceptionId: "C05-M2", value: "pi/6" },
      ],
      solution: {
        steps: [
          t`$\vec c = -(\vec a + \vec b)$, so $|\vec c|^2 = |\vec a|^2 + 2\vec a\cdot\vec b + |\vec b|^2$.`,
          t`$49 = 9 + 2\vec a\cdot\vec b + 25$, so $\vec a\cdot\vec b = \frac{15}{2}$.`,
          t`$\cos\theta = \frac{15/2}{3 \times 5} = \frac{1}{2}$, so $\theta = \frac{\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.22" },
      stem: t`$\vec a$, $\vec b$, $\vec c$ each have magnitude $2$, and $\vec a + \vec b + \vec c = \vec 0$. The value of $\vec a\cdot\vec b + \vec b\cdot\vec c + \vec c\cdot\vec a$ is:`,
      verify: { kind: "value", inputs: { ma: "2", mb: "2", mc: "2" }, params: { ask: "sum3", what: "dots" } },
      options: [
        { key: "A", text: t`$-6$`, correct: true, value: "-6" },
        { key: "B", text: t`$6 \sqrt{3}$`, correct: false, misconceptionId: "C05-M2", value: "6*sqrt(3)" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C05-M3", value: "6" },
        { key: "D", text: t`$-3$`, correct: false, misconceptionId: "C05-M4", value: "-3" },
      ],
      solution: {
        steps: [
          t`Write $S = \vec a\cdot\vec b + \vec b\cdot\vec c + \vec c\cdot\vec a$, and square the sum: $|\vec a + \vec b + \vec c|^2 = 0$.`,
          t`Expanding: $|\vec a|^2 + |\vec b|^2 + |\vec c|^2 + 2S = 0$.`,
          t`Each $|\vec a|^2 = 4$, so $12 + 2S = 0$ and $S = -6$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.3 SolvedEx.4" },
      stem: t`If $\vec a = \hat i + 2\hat j - 3\hat k$ and $\vec b = 3\hat i - \hat j + 2\hat k$, the angle between $2\vec a + \vec b$ and $\vec a + 2\vec b$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 2, -3)", b: "(3, -1, 2)" }, params: { ask: "angle", p: "(2, 1)", q: "(1, 2)" } },
      options: [
        { key: "A", text: t`$\cos^{-1}\left(\frac{31}{50}\right)$`, correct: true, value: "acos(31/50)" },
        { key: "B", text: t`$\cos^{-1}\left(\frac{16}{25}\right)$`, correct: false, misconceptionId: "C05-M1", value: "acos(16/25)" },
        { key: "C", text: t`$\sin^{-1}\left(\frac{31}{50}\right)$`, correct: false, misconceptionId: "C05-M2", value: "asin(31/50)" },
        { key: "D", text: t`$\cos^{-1}\left(\frac{31}{2500}\right)$`, correct: false, misconceptionId: "C05-M4", value: "acos(31/2500)" },
      ],
      solution: {
        steps: [
          t`$2\vec a + \vec b = 5\hat i + 3\hat j - 4\hat k$ and $\vec a + 2\vec b = 7\hat i + \hat k$.`,
          t`Their dot product: $5(7) + 3(0) + (-4)(1) = 31$.`,
          t`Both have length $\sqrt{50}$: $25 + 9 + 16 = 49 + 0 + 1 = 50$.`,
          t`$\cos\theta = \frac{31}{50}$, so $\theta = \cos^{-1}\left(\frac{31}{50}\right)$.`,
        ],
      },
    },
  ],
};
