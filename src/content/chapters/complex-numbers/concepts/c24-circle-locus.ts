import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c24: Concept = {
  id: "C24",
  status: "approved",
  hook: {
    prompt: t`Think of all the points at distance 3 from $1 + 2i$. **What shape do they make, and how would you write it using $z$?**`,
    reveal: t`A circle with centre $1 + 2i$ and radius 3: $|z - (1 + 2i)| = 3$.`,
  },
  explanation: {
    intuition: [
      t`Take a fixed point, $a = 1 + 2i$.`,
      t`Recall: $|z - a|$ is the distance between the points $z$ and $a$.`,
      t`Mark more points $z$ with $|z - a| = 3$: each is $3$ from $a$.`,
      t`Together they make a **circle**: all points at one distance, the **radius**, from one point, the **centre**.`,
      t`So $|z - a| = r$ is the circle with centre $a$ and radius $r$.`,
    ],
    formal: [
      {
        title: "The Cartesian equation",
        points: [
          t`Write $z = x + iy$ and the centre $a = p + qi$.`,
          t`Then $z - a = (x - p) + i(y - q)$: $x - p$ across and $y - q$ up.`,
          t`By Pythagoras, $|z - a|$ is $\sqrt{(x - p)^2 + (y - q)^2}$.`,
          t`Set it equal to $r$ and square: $(x - p)^2 + (y - q)^2 = r^2$.`,
          t`The right side is the radius **squared**: radius $2$ gives $= 4$, not $= 2$.`,
        ],
        figure: {
          alt: "A circle with centre p + qi and a point x + iy on it. From the centre, x − p across and y − q up make a right triangle whose long side, |z − a|, is the radius r. The circle is (x − p)² + (y − q)² = r².",
          view: { x: [-1.6, 4.6], y: [-1.5, 3.9] },
          elements: [
            { kind: "point", at: [1, 1], label: "p + qi", labelAt: "sw", step: 1 },
            { kind: "point", at: [2.532, 2.286], label: "x + iy", labelAt: "ne", step: 1 },
            { kind: "segment", from: [1, 1], to: [2.532, 1], label: "x − p", labelAt: "s", tone: "muted", step: 2 },
            { kind: "segment", from: [2.532, 1], to: [2.532, 2.286], label: "y − q", labelAt: "w", tone: "muted", step: 2 },
            { kind: "segment", from: [1, 1], to: [2.532, 2.286], label: "|z − a|", labelAt: "nw", step: 3 },
            { kind: "circle", centre: [1, 1], r: 2, step: 4 },
            { kind: "label", at: [-1.5, 3.5], label: "(x − p)² + (y − q)² = r²", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "Reading the centre's sign",
        points: [
          t`In $|z - a|$, the centre $a$ is the number taken away from $z$.`,
          t`So write a plus as minus a negative: $|z + 1 - 2i| = |z - (-1 + 2i)|$.`,
          t`So $|z + 1 - 2i| = 2$ is the circle with centre $-1 + 2i$, radius $2$.`,
          t`The centre is not $1 - 2i$, the signs as written.`,
          t`Flipping only one sign, to $-1 - 2i$, is wrong too: both signs flip.`,
        ],
        figure: {
          alt: "The circle |z + 1 − 2i| = 2, with centre −1 + 2i and radius 2. Below it, crossed out as wrong centres, are 1 − 2i (the signs as written) and −1 − 2i (only one sign flipped).",
          view: { x: [-4.6, 3.8], y: [-3, 4.6] },
          elements: [
            { kind: "point", at: [-1, 2], label: "−1 + 2i", labelAt: "sw", step: 3 },
            { kind: "segment", from: [-1, 2], to: [-3, 2], label: "2", labelAt: "n", tone: "muted", step: 3 },
            { kind: "circle", centre: [-1, 2], r: 2, step: 3 },
            { kind: "point", at: [1, -2], hollow: true, label: "not 1 − 2i", labelAt: "e", tone: "bad", step: 4 },
            { kind: "point", at: [-1, -2], hollow: true, label: "not −1 − 2i", labelAt: "w", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "When z has a coefficient",
        points: [
          t`Here $z$ has a **coefficient**, a number multiplying it: the $2$ in $|2z - 2 - 4i| = 6$.`,
          t`Take out the $2$: $2z - 2 - 4i = 2(z - (1 + 2i))$.`,
          t`Recall: $|kw| = |k|\,|w|$, so this is $2\,|z - (1 + 2i)| = 6$.`,
          t`Divide by $2$: $|z - (1 + 2i)| = 3$, centre $1 + 2i$, radius $3$.`,
          t`Both changed: the centre is not $2 + 4i$, and the radius is not $6$.`,
          t`In general, $|kz - w| = R$ means $\left|z - \frac{w}{k}\right| = \frac{R}{|k|}$.`,
        ],
        figure: {
          alt: "The circle |2z − 2 − 4i| = 6, which is |z − (1 + 2i)| = 3: centre 1 + 2i and radius 3. The point 2 + 4i is crossed out as a wrong centre.",
          view: { x: [-2.6, 5], y: [-1.6, 5.6] },
          elements: [
            { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "sw", step: 4 },
            { kind: "segment", from: [1, 2], to: [4, 2], label: "3", labelAt: "n", tone: "muted", step: 4 },
            { kind: "circle", centre: [1, 2], r: 3, step: 4 },
            { kind: "point", at: [2, 4], hollow: true, label: "not 2 + 4i", labelAt: "w", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Using z and its conjugate",
        points: [
          t`Recall: the **conjugate** of $z = x + iy$ is $\bar z = x - iy$, its mirror image in the real axis.`,
          t`Multiply: $z\bar z = x^2 + y^2$, which is $|z|^2$.`,
          t`Add: $z + \bar z = 2x$, twice the real part, not $x$.`,
          t`So $z\bar z + q(z + \bar z) + s = 0$ becomes $x^2 + y^2 + 2qx + s = 0$.`,
        ],
        figure: {
          alt: "The point z = x + iy and its mirror image z̄ = x − iy in the real axis, with arrows from the origin. The arrow to z has length |z|. Adding the two arrows lands on the real axis at 2x, twice the real part.",
          view: { x: [-1, 6.6], y: [-2.4, 2.6] },
          elements: [
            { kind: "vector", to: [2, 1.5], tone: "muted", step: 1 },
            { kind: "point", at: [2, 1.5], label: "x + iy", labelAt: "ne", step: 1 },
            { kind: "vector", to: [2, -1.5], tone: "muted", step: 1 },
            { kind: "point", at: [2, -1.5], label: "x − iy", labelAt: "se", step: 1 },
            { kind: "label", at: [1, 0.75], label: "|z|", labelAt: "nw", step: 2 },
            { kind: "segment", from: [2, 1.5], to: [4, 0], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [2, -1.5], to: [4, 0], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [4, 0], label: "2x", labelAt: "e", step: 3 },
          ],
        },
      },
      {
        title: "Completing the square",
        points: [
          t`For example, take $z\bar z - 3(z + \bar z) + 5 = 0$.`,
          t`It becomes $x^2 + y^2 - 6x + 5 = 0$.`,
          t`**Completing the square** writes $x^2 - 6x$ as a square plus a number: $(x - 3)^2 - 9$.`,
          t`The bracket keeps the sign of $-6x$: it is $x - 3$, not $x + 3$.`,
          t`So $(x - 3)^2 + y^2 = 4$: the circle with centre $3$.`,
          t`The right side is already $r^2$, so the radius is $\sqrt4 = 2$, not $4$.`,
        ],
        figure: {
          alt: "The circle (x − 3)² + y² = 4, with centre 3 on the real axis and radius 2. The point −3 is crossed out as a wrong centre.",
          view: { x: [-4.6, 5.8], y: [-2.8, 2.8] },
          elements: [
            { kind: "point", at: [-3, 0], hollow: true, label: "not −3", labelAt: "n", tone: "bad", step: 4 },
            { kind: "point", at: [3, 0], label: "3", labelAt: "nw", step: 5 },
            { kind: "circle", centre: [3, 0], r: 2, step: 5 },
            { kind: "segment", from: [3, 0], to: [3, 2], label: "2", labelAt: "e", tone: "muted", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Describe $|2z + 4i| = 8$.`,
      steps: [
        t`Divide by 2: $|z + 2i| = 4$, that is, $|z - (-2i)| = 4$.`,
        t`Centre $-2i$, radius $4$.`,
        t`Cartesian form: $x^2 + (y + 2)^2 = 16$.`,
      ],
      answer: t`The circle $x^2 + (y + 2)^2 = 16$: centre $-2i$, radius $4$.`,
      figure: {
        alt: "The circle with centre −2i and radius 4, which is x² + (y + 2)² = 16.",
        view: { x: [-5.5, 5.5], y: [-6.8, 3] },
        elements: [
          { kind: "point", at: [0, -2], label: "−2i", labelAt: "w", step: 1 },
          { kind: "segment", from: [0, -2], to: [4, -2], label: "4", labelAt: "n", tone: "muted", step: 2 },
          { kind: "circle", centre: [0, -2], r: 4, step: 2 },
          { kind: "label", at: [-5.3, 2.6], label: "x² + (y + 2)² = 16", labelAt: "e", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The point a = 1 + 2i and a point z at distance |z − a| from it. Two more points, each at distance 3 from 1 + 2i, then the circle made of all such points: |z − (1 + 2i)| = 3.",
      view: { x: [-3, 5], y: [-1.5, 6.8] },
      elements: [
        { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "sw", step: 1 },
        { kind: "segment", from: [1, 2], to: [3.819, 3.026], tone: "muted", step: 2, label: "|z − a|", labelAt: "se" },
        { kind: "point", at: [3.819, 3.026], label: "z", labelAt: "ne", step: 2 },
        { kind: "segment", from: [1, 2], to: [-1.298, 3.928], tone: "muted", step: 3 },
        { kind: "point", at: [-1.298, 3.928], step: 3 },
        { kind: "segment", from: [1, 2], to: [0.479, -0.954], tone: "muted", step: 3, label: "3", labelAt: "e" },
        { kind: "point", at: [0.479, -0.954], step: 3 },
        { kind: "circle", centre: [1, 2], r: 3, step: 4 },
        { kind: "label", at: [-2.8, 6.3], label: "|z − (1 + 2i)| = 3", labelAt: "e", step: 5 },
      ],
    },
    visualSpec: t`Drag a point $a$ and move a radius slider; the circle $|z - a| = r$ redraws, with its equation in both forms updating as you go.`,
  },
  misconceptions: [
    {
      id: "C24-M1",
      mistake: t`Reading the centre with the wrong sign: $|z + a|$ centred at $+a$`,
      remediation: t`$|z + a| = |z - (-a)|$: the centre is $-a$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C24-M2",
      mistake: "Writing the radius, not its square, on the right",
      remediation: t`The Cartesian form has $r^2$ on the right: radius 2 gives $= 4$.`,
      fallback: { kind: "ext", topic: "circle equation" },
    },
    {
      id: "C24-M3",
      mistake: t`Forgetting to divide the radius by the coefficient of $z$`,
      remediation: t`$|kz - w| = R$ means $\left|z - \frac wk\right| = \frac{R}{|k|}$: divide the radius too.`,
      fallback: { kind: "ext", topic: "taking out a common factor" },
    },
    {
      id: "C24-M4",
      mistake: "Flipping only one sign of the centre",
      remediation: t`Rewrite as $|z - (\text{centre})|$ and read both parts of the centre from it.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C24-M5",
      mistake: "Dividing the radius but not the centre",
      remediation: t`Divide the whole of $kz - w$ by $k$: the centre $\frac wk$ changes too.`,
      fallback: { kind: "ext", topic: "taking out a common factor" },
    },
    {
      id: "C24-M6",
      mistake: t`Taking $z + \bar z = x$`,
      remediation: t`$z + \bar z = (x + iy) + (x - iy) = 2x$.`,
      fallback: { kind: "ext", topic: "conjugate identities" },
    },
    {
      id: "C24-M7",
      mistake: t`Taking $R$ as the diameter, not the radius`,
      remediation: t`$|z - a| = R$ is every point at distance $R$ from $a$: $R$ is the radius, and $R^2$ goes on the right.`,
      fallback: { kind: "ext", topic: "circle equation" },
    },
    {
      id: "C24-M8",
      mistake: t`Completing the square with the wrong sign: $x^2 - 4x$ as $(x + 2)^2 - 4$`,
      remediation: t`$x^2 - 4x = (x - 2)^2 - 4$: the bracket keeps the sign of the $x$ term, so the centre is $+2$.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C24-M9",
      mistake: "Squaring the right side again after completing the square",
      remediation: t`In $(x - 2)^2 + y^2 = 5$ the right side is already $r^2$: the radius is $\sqrt5$, and the $5$ stays.`,
      fallback: { kind: "ext", topic: "circle equation" },
    },
  ],
  items: [
    {
      id: "C24-Q1",
      source: { kind: "authored" },
      stem: t`$|z - 1 + i| = 2$ is the circle:`,
      verify: { kind: "locus", inputs: { k: "1", w: "1-I", R: "2" }, params: { op: "circle" } },
      options: [
        { key: "A", text: t`$\left(x + 1\right)^2 + \left(y - 1\right)^2 = 4$`, correct: false, misconceptionId: "C24-M1", value: "x**2 + 2*x + y**2 - 2*y - 2" },
        { key: "B", text: t`$\left(x - 1\right)^2 + \left(y + 1\right)^2 = 2$`, correct: false, misconceptionId: "C24-M2", value: "x**2 - 2*x + y**2 + 2*y" },
        { key: "C", text: t`$\left(x - 1\right)^2 + \left(y - 1\right)^2 = 4$`, correct: false, misconceptionId: "C24-M4", value: "x**2 - 2*x + y**2 - 2*y - 2" },
        { key: "D", text: t`$\left(x - 1\right)^2 + \left(y + 1\right)^2 = 4$`, correct: true, value: "x**2 - 2*x + y**2 + 2*y - 2" },
      ],
      solution: {
        steps: [
          t`Group the constant: $|z - 1 + i| = |z - (1 - i)|$.`,
          t`So the centre is $1 - i$ and the radius is $2$.`,
          t`Cartesian form: $(x - 1)^2 + (y + 1)^2 = 2^2 = 4$.`,
        ],
        figure: {
          alt: "The circle with centre 1 − i and radius 2.",
          view: { x: [-2, 4.5], y: [-3.8, 1.8] },
          elements: [
            { kind: "point", at: [1, -1], label: "1 − i", labelAt: "sw", step: 2 },
            { kind: "segment", from: [1, -1], to: [3, -1], label: "2", labelAt: "n", tone: "muted", step: 2 },
            { kind: "circle", centre: [1, -1], r: 2, step: 3 },
          ],
        },
      },
    },
    {
      id: "C24-Q2",
      source: { kind: "authored" },
      stem: t`$|2z - 4 + 2i| = 6$ is the circle:`,
      verify: { kind: "locus", inputs: { k: "2", w: "4-2*I", R: "6" }, params: { op: "circle" } },
      options: [
        { key: "A", text: t`$\left(x - 4\right)^2 + \left(y + 2\right)^2 = 9$`, correct: false, misconceptionId: "C24-M5", value: "x**2 - 8*x + y**2 + 4*y + 11" },
        { key: "B", text: t`$\left(x + 2\right)^2 + \left(y - 1\right)^2 = 9$`, correct: false, misconceptionId: "C24-M1", value: "x**2 + 4*x + y**2 - 2*y - 4" },
        { key: "C", text: t`$\left(x - 2\right)^2 + \left(y + 1\right)^2 = 9$`, correct: true, value: "x**2 - 4*x + y**2 + 2*y - 4" },
        { key: "D", text: t`$\left(x - 2\right)^2 + \left(y + 1\right)^2 = 36$`, correct: false, misconceptionId: "C24-M3", value: "x**2 - 4*x + y**2 + 2*y - 31" },
      ],
      solution: {
        steps: [
          t`Divide both sides by $2$: $|z - 2 + i| = 3$.`,
          t`That is $|z - (2 - i)| = 3$: centre $2 - i$, radius $3$.`,
          t`Cartesian form: $(x - 2)^2 + (y + 1)^2 = 9$.`,
        ],
        figure: {
          alt: "The circle with centre 2 − i and radius 3.",
          view: { x: [-1.8, 6], y: [-4.8, 2.6] },
          elements: [
            { kind: "point", at: [2, -1], label: "2 − i", labelAt: "sw", step: 2 },
            { kind: "segment", from: [2, -1], to: [5, -1], label: "3", labelAt: "n", tone: "muted", step: 2 },
            { kind: "circle", centre: [2, -1], r: 3, step: 3 },
          ],
        },
      },
    },
    {
      id: "C24-Q3",
      source: { kind: "authored" },
      stem: t`$z\bar z - 2(z + \bar z) - 1 = 0$ is the circle:`,
      verify: { kind: "locus", inputs: { q: "-2", s: "-1" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$\left(x - 2\right)^2 + y^2 = 25$`, correct: false, misconceptionId: "C24-M9", value: "x**2 - 4*x + y**2 - 21" },
        { key: "B", text: t`$\left(x - 1\right)^2 + y^2 = 2$`, correct: false, misconceptionId: "C24-M6", value: "x**2 - 2*x + y**2 - 1" },
        { key: "C", text: t`$\left(x - 2\right)^2 + y^2 = 5$`, correct: true, value: "x**2 - 4*x + y**2 - 1" },
        { key: "D", text: t`$\left(x + 2\right)^2 + y^2 = 5$`, correct: false, misconceptionId: "C24-M8", value: "x**2 + 4*x + y**2 - 1" },
      ],
      solution: {
        steps: [
          t`Use $z\bar z = x^2 + y^2$ and $z + \bar z = 2x$.`,
          t`The equation becomes $x^2 + y^2 - 4x - 1 = 0$.`,
          t`Complete the square: $(x - 2)^2 + y^2 = 5$, centre $2$, radius $\sqrt5$.`,
        ],
        figure: {
          alt: "The circle with centre 2 and radius √5, which is (x − 2)² + y² = 5.",
          view: { x: [-1, 5.5], y: [-3, 3] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "nw", step: 3 },
            { kind: "segment", from: [2, 0], to: [2, 2.236], label: "√5", labelAt: "e", tone: "muted", step: 3 },
            { kind: "circle", centre: [2, 0], r: 2.236, step: 3 },
          ],
        },
      },
    },
    {
      id: "C24-Q4",
      source: { kind: "authored" },
      stem: t`$|z + 3| = 2$ is the circle:`,
      verify: { kind: "locus", inputs: { k: "1", w: "-3", R: "2" }, params: { op: "circle" } },
      options: [
        { key: "A", text: t`$\left(x - 3\right)^2 + y^2 = 4$`, correct: false, misconceptionId: "C24-M1", value: "x**2 - 6*x + y**2 + 5" },
        { key: "B", text: t`$\left(x + 3\right)^2 + y^2 = 2$`, correct: false, misconceptionId: "C24-M2", value: "x**2 + 6*x + y**2 + 7" },
        { key: "C", text: t`$\left(x + 3\right)^2 + y^2 = 4$`, correct: true, value: "x**2 + 6*x + y**2 + 5" },
        { key: "D", text: t`$\left(x + 3\right)^2 + y^2 = 1$`, correct: false, misconceptionId: "C24-M7", value: "x**2 + 6*x + y**2 + 8" },
      ],
      solution: {
        steps: [
          t`Rewrite $|z + 3|$ as $|z - (-3)|$.`,
          t`So the centre is $-3$ and the radius is $2$.`,
          t`Cartesian form: $(x + 3)^2 + y^2 = 4$.`,
        ],
        figure: {
          alt: "The circle with centre −3 and radius 2.",
          view: { x: [-6, 1], y: [-2.8, 2.8] },
          elements: [
            { kind: "point", at: [-3, 0], label: "−3", labelAt: "nw", step: 2 },
            { kind: "segment", from: [-3, 0], to: [-3, 2], label: "2", labelAt: "e", tone: "muted", step: 2 },
            { kind: "circle", centre: [-3, 0], r: 2, step: 3 },
          ],
        },
      },
    },
    {
      id: "C24-Q5",
      source: { kind: "authored" },
      stem: t`$|3z - 6i| = 9$ is the circle:`,
      verify: { kind: "locus", inputs: { k: "3", w: "6*I", R: "9" }, params: { op: "circle" } },
      options: [
        { key: "A", text: t`$x^2 + \left(y - 2\right)^2 = 81$`, correct: false, misconceptionId: "C24-M3", value: "x**2 + y**2 - 4*y - 77" },
        { key: "B", text: t`$x^2 + \left(y - 6\right)^2 = 9$`, correct: false, misconceptionId: "C24-M5", value: "x**2 + y**2 - 12*y + 27" },
        { key: "C", text: t`$x^2 + \left(y + 2\right)^2 = 9$`, correct: false, misconceptionId: "C24-M1", value: "x**2 + y**2 + 4*y - 5" },
        { key: "D", text: t`$x^2 + \left(y - 2\right)^2 = 9$`, correct: true, value: "x**2 + y**2 - 4*y - 5" },
      ],
      solution: {
        steps: [
          t`Divide both sides by $3$: $|z - 2i| = 3$.`,
          t`So the centre is $2i$ and the radius is $3$.`,
          t`Cartesian form: $x^2 + (y - 2)^2 = 9$.`,
        ],
        figure: {
          alt: "The circle with centre 2i and radius 3.",
          view: { x: [-4, 4.5], y: [-1.8, 5.8] },
          elements: [
            { kind: "point", at: [0, 2], label: "2i", labelAt: "w", step: 2 },
            { kind: "segment", from: [0, 2], to: [3, 2], label: "3", labelAt: "n", tone: "muted", step: 2 },
            { kind: "circle", centre: [0, 2], r: 3, step: 3 },
          ],
        },
      },
    },
  ],
  engineNotes: [
    "C24-M8 (completing the square with the wrong sign) and C24-M9 (squaring the right side again) were split from C24-M1 and C24-M2, which had covered them on Q3: a student starting from z z̄ never reads a centre from |z + a| or writes a radius on the right, so those remediations did not fit.",
  ],
};
