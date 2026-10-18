import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`A drone at $(1, 1, 1)$ hovers near a roof in the plane $2x + y + 2z = 9$. Putting the point in gives $2 + 1 + 2 - 9 = -4$. **Is the drone $-4$ units from the roof?**`,
    reveal: t`No. A distance is never negative, and $-4$ is scaled up by the normal's length $\sqrt{4 + 1 + 4} = 3$. The distance is $\dfrac{|-4|}{3} = \dfrac{4}{3}$ units.`,
  },
  explanation: {
    intuition: [
      t`The **distance** of a point $P$ from a plane is the length of the shortest path from $P$ to the plane.`,
      t`That path meets the plane at a right angle, so it runs along the **normal** $\vec n$, the arrow perpendicular to the plane.`,
      t`Put $P$ into the plane's equation $\vec r\cdot\vec n = d$: the number $\vec p\cdot\vec n - d$ is $0$ exactly when $P$ is on it.`,
      t`Off the plane, that number grows with the distance, but it is scaled by the length $|\vec n|$.`,
      t`Its sign only tells you which side of the plane $P$ is on.`,
      t`So divide by $|\vec n|$ and take the modulus: that is the distance.`,
    ],
    formal: [
      {
        title: "Why the formula works",
        points: [
          t`Take any point $A(\vec a)$ on the plane and join it to $P(\vec p)$.`,
          t`The shortest path meets the plane at the **foot** $M$, at a right angle, so it runs along $\vec n$.`,
          t`So $PM$ is the **projection** of $\overrightarrow{AP}$ on $\vec n$, its shadow along $\vec n$: $PM = \dfrac{|\overrightarrow{AP}\cdot\vec n|}{|\vec n|}$.`,
          t`$\overrightarrow{AP}\cdot\vec n = \vec p\cdot\vec n - \vec a\cdot\vec n$, and $\vec a\cdot\vec n = d$ since $A$ is on the plane.`,
          t`So the distance is $\dfrac{|\vec p\cdot\vec n - d|}{|\vec n|}$, whichever point $A$ you took.`,
        ],
        figure: {
          alt: "A plane drawn as a slanted parallelogram, labelled r · n = d. A point A lies on it and a point P is above it. A slanted segment joins A to P. A dashed segment drops straight down from P to the foot M on the plane, along the normal n, drawn as an arrow standing up from A. The dashed segment PM is the distance, the projection of AP on n.",
          axes: "none",
          view: { x: [-3.8, 3.6], y: [-1.5, 4.2] },
          elements: [
            { kind: "segment", from: [-3.4, -0.8], to: [1.6, -0.8], tone: "muted" },
            { kind: "segment", from: [1.6, -0.8], to: [3.2, 1.2], tone: "muted" },
            { kind: "segment", from: [3.2, 1.2], to: [-1.8, 1.2], tone: "muted" },
            { kind: "segment", from: [-1.8, 1.2], to: [-3.4, -0.8], tone: "muted" },
            { kind: "label", at: [-0.9, -0.8], label: "r · n = d", labelAt: "s", tone: "muted" },
            { kind: "point", at: [-1.6, -0.1], step: 1, label: "A", labelAt: "sw" },
            { kind: "point", at: [0.8, 3.6], step: 1, label: "P", labelAt: "n" },
            { kind: "segment", from: [-1.6, -0.1], to: [0.8, 3.6], step: 1 },
            { kind: "segment", from: [0.8, 3.6], to: [0.8, 0.3], dashed: true, tone: "good", step: 2 },
            { kind: "point", at: [0.8, 0.3], step: 2, label: "M", labelAt: "se" },
            { kind: "vector", from: [-1.6, -0.1], to: [-1.6, 2.1], tone: "muted", step: 2 },
            { kind: "label", at: [-1.6, 2.1], label: "n", labelAt: "w", tone: "muted", step: 2 },
            { kind: "label", at: [0.8, 2], label: "distance", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Vector and Cartesian forms",
        points: [
          t`Vector form: for the plane $\vec r\cdot\vec n = d$ and the point $\vec p$, the distance is $\dfrac{|\vec p\cdot\vec n - d|}{|\vec n|}$.`,
          t`Cartesian form: the plane is $ax + by + cz = d$ and the point is $(x_1, y_1, z_1)$.`,
          t`Then the distance is $\dfrac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
          t`For $ax + by + cz + k = 0$ the constant is already on the left: the top is $|ax_1 + by_1 + cz_1 + k|$.`,
          t`Distance $0$ means $P$ lies on the plane.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`Always divide by $|\vec n|$: the top alone is the distance only when $|\vec n| = 1$.`,
          t`Divide by the square root $\sqrt{a^2 + b^2 + c^2}$, not by $a^2 + b^2 + c^2$.`,
          t`A negative top means $P$ is on the other side; the distance is its modulus.`,
          t`In normal form $\vec r\cdot\hat n = p$, both sides are divided by $|\vec n|$, so $p = \dfrac{d}{|\vec n|}$.`,
          t`$\dfrac{|d|}{|\vec n|}$ is the plane's distance from the origin, not from any other point.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the distance of the point $2\hat i + 5\hat j - 3\hat k$ from the plane $\vec r\cdot(6\hat i - 3\hat j + 2\hat k) = 4$.`,
      steps: [
        t`Here $\vec p = (2, 5, -3)$, $\vec n = (6, -3, 2)$ and $d = 4$.`,
        t`$\vec p\cdot\vec n = 12 - 15 - 6 = -9$.`,
        t`$|\vec n| = \sqrt{36 + 9 + 4} = \sqrt{49} = 7$.`,
        t`$\vec p\cdot\vec n - d = -9 - 4 = -13$: negative, so take the modulus, $13$.`,
        t`Distance $= \dfrac{13}{7}$.`,
      ],
      answer: t`The distance is $\dfrac{13}{7}$ units.`,
    },
    visualSpec: t`Drag $P$ above and below a tilted plane: readouts show $\vec p\cdot\vec n - d$, $|\vec n|$ and their ratio, which changes sign as $P$ crosses the plane while the distance stays positive.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Drops the modulus and reports the signed value $\dfrac{\vec p\cdot\vec n - d}{|\vec n|}$, which is negative on one side of the plane.`,
      remediation: t`A distance is never negative. The sign of $\vec p\cdot\vec n - d$ only shows which side of the plane the point is on: take its modulus.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Takes $|\vec p\cdot\vec n - d|$ itself as the distance, without dividing by $|\vec n|$.`,
      remediation: t`$\vec p\cdot\vec n - d$ is scaled by the normal's length. Divide by $|\vec n| = \sqrt{a^2 + b^2 + c^2}$; only a unit normal needs no division.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M3",
      mistake: t`Divides by $a^2 + b^2 + c^2$ instead of $\sqrt{a^2 + b^2 + c^2}$.`,
      remediation: t`The divisor is the length of the normal, a square root: $|\vec n| = \sqrt{a^2 + b^2 + c^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Moves the plane's constant across without changing its sign: uses $\vec p\cdot\vec n + d$ for $\vec r\cdot\vec n = d$, or $ax_1 + by_1 + cz_1 - k$ for $ax + by + cz + k = 0$.`,
      remediation: t`Put the point into the equation with everything on one side: $\vec p\cdot\vec n - d$ for $\vec r\cdot\vec n = d$, and $ax_1 + by_1 + cz_1 + k$ for $ax + by + cz + k = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Goes to normal form by dividing $\vec n$ by $|\vec n|$ but not $d$, so computes $|\vec p\cdot\hat n - d|$.`,
      remediation: t`In normal form $\vec r\cdot\hat n = p$ both sides are divided by $|\vec n|$, so $p = \dfrac{d}{|\vec n|}$, and the distance is $|\vec p\cdot\hat n - p|$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M6",
      mistake: t`Gives the plane's distance from the origin, $\dfrac{|d|}{|\vec n|}$, as the distance from the point.`,
      remediation: t`$\dfrac{|d|}{|\vec n|}$ is the distance from $O$ only. For a point $P$, put $\vec p$ in: $\dfrac{|\vec p\cdot\vec n - d|}{|\vec n|}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  engineNotes: [
    t`C09-M1 gives the key whenever $\vec p\cdot\vec n - d > 0$; C09-M4 when $d = 0$; C09-M6 when the point is the origin; C09-M5 when $|\vec n| = 1$. Diagnose them with other inputs.`,
    t`C09-M5 is modelled only for planes given in vector form ($\vec r\cdot\vec n = d$).`,
    "Q6 is the book's solved example 15 of section 6.7; the other items are exercise questions with the book's numbers.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.5" },
      stem: t`The distance of the point $(1, 1, -1)$ from the plane $3x + 4y - 12z + 20 = 0$ is:`,
      verify: { kind: "value", inputs: { P: "(1, 1, -1)", n: "(3, 4, -12)", d: "-20" }, params: { form: "cart" } },
      options: [
        { key: "A", text: t`$\frac{3}{13}$`, correct: false, misconceptionId: "C09-M3", value: "3/13" },
        { key: "B", text: t`$\frac{1}{13}$`, correct: false, misconceptionId: "C09-M4", value: "1/13" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$39$`, correct: false, misconceptionId: "C09-M2", value: "39" },
      ],
      solution: {
        steps: [
          t`The constant is on the left, so the top is $|3x_1 + 4y_1 - 12z_1 + 20|$.`,
          t`At $(1, 1, -1)$: $3 + 4 + 12 + 20 = 39$.`,
          t`$\sqrt{3^2 + 4^2 + (-12)^2}$ $= \sqrt{169} = 13$.`,
          t`Distance $= \dfrac{39}{13} = 3$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.4" },
      stem: t`The distance of the point $4\hat i - 3\hat j + \hat k$ from the plane $\vec r\cdot(2\hat i + 3\hat j - 6\hat k) = 21$ is:`,
      verify: { kind: "value", inputs: { P: "(4, -3, 1)", n: "(2, 3, -6)", d: "21" }, params: { form: "vec" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C09-M1", value: "-4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C09-M4", value: "2" },
        { key: "D", text: t`$22$`, correct: false, misconceptionId: "C09-M5", value: "22" },
      ],
      solution: {
        steps: [
          t`Here $\vec p = (4, -3, 1)$, $\vec n = (2, 3, -6)$ and $d = 21$.`,
          t`$\vec p\cdot\vec n = 8 - 9 - 6 = -7$, and $|\vec n| = \sqrt{4 + 9 + 36} = 7$.`,
          t`Distance $= \dfrac{|-7 - 21|}{7} = \dfrac{28}{7} = 4$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc II Q.18" },
      stem: t`The distance of the point $(13, 13, -13)$ from the plane $3x + 4y - 12z = 0$ is:`,
      verify: { kind: "value", inputs: { P: "(13, 13, -13)", n: "(3, 4, -12)", d: "0" }, params: { form: "cart" } },
      options: [
        { key: "A", text: t`$247$`, correct: false, misconceptionId: "C09-M2", value: "247" },
        { key: "B", text: t`$\frac{19}{13}$`, correct: false, misconceptionId: "C09-M3", value: "19/13" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C09-M6", value: "0" },
        { key: "D", text: t`$19$`, correct: true, value: "19" },
      ],
      solution: {
        steps: [
          t`The plane passes through $O$ ($d = 0$), but the distance from $P$ still needs $P$ put in.`,
          t`$3(13) + 4(13) - 12(-13)$ $= 39 + 52 + 156 = 247$.`,
          t`$\sqrt{9 + 16 + 144} = 13$, so the distance is $\dfrac{247}{13} = 19$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc II Q.2" },
      stem: t`The perpendicular distance of the origin from the plane $6x + 2y + 3z - 7 = 0$ is:`,
      verify: { kind: "value", inputs: { P: "(0, 0, 0)", n: "(6, 2, 3)", d: "7" }, params: { form: "cart" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C09-M1", value: "-1" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C09-M2", value: "7" },
        { key: "D", text: t`$\frac{1}{7}$`, correct: false, misconceptionId: "C09-M3", value: "1/7" },
      ],
      solution: {
        steps: [
          t`At the origin the top is $|0 + 0 + 0 - 7| = 7$.`,
          t`$\sqrt{6^2 + 2^2 + 3^2} = \sqrt{49} = 7$.`,
          t`Distance $= \dfrac{7}{7} = 1$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc II Q.17" },
      stem: t`The distance of the point $3\hat i + 3\hat j + \hat k$ from the plane $\vec r\cdot(2\hat i + 3\hat j + 6\hat k) = 21$ is:`,
      verify: { kind: "value", inputs: { P: "(3, 3, 1)", n: "(2, 3, 6)", d: "21" }, params: { form: "vec" } },
      options: [
        { key: "A", text: t`$18$`, correct: false, misconceptionId: "C09-M5", value: "18" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C09-M6", value: "3" },
        { key: "C", text: t`$0$`, correct: true, value: "0" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C09-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`$\vec p\cdot\vec n = 3(2) + 3(3) + 1(6) = 21$.`,
          t`That equals $d = 21$, so $\vec p\cdot\vec n - d = 0$.`,
          t`The distance is $0$: the point lies on the plane.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.7 SolvedEx.15" },
      stem: t`The distance of the point $4\hat i - 3\hat j + 2\hat k$ from the plane $\vec r\cdot(-2\hat i + \hat j - 2\hat k) = 6$ is:`,
      verify: { kind: "value", inputs: { P: "(4, -3, 2)", n: "(-2, 1, -2)", d: "6" }, params: { form: "vec" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C09-M6", value: "2" },
        { key: "B", text: t`$7$`, correct: true, value: "7" },
        { key: "C", text: t`$-7$`, correct: false, misconceptionId: "C09-M1", value: "-7" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C09-M5", value: "11" },
      ],
      solution: {
        steps: [
          t`$\vec p\cdot\vec n = -8 - 3 - 4 = -15$, and $|\vec n| = \sqrt{4 + 1 + 4} = 3$.`,
          t`$\vec p\cdot\vec n - d = -15 - 6 = -21$: negative, so take the modulus.`,
          t`Distance $= \dfrac{21}{3} = 7$.`,
        ],
      },
    },
  ],
};
