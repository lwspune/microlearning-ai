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
    intuition: t`$|z - a|$ is the distance from $z$ to $a$, so $|z - a| = r$ is every point at distance $r$ from $a$: a circle. Read the centre carefully from the sign inside: $|z + 1 - 2i| = |z - (-1 + 2i)|$ has centre $-1 + 2i$.`,
    formal: t`$|z - a| = r$ is the circle with centre $a$ and radius $r$. In Cartesian form, with $a = p + qi$: $(x - p)^2 + (y - q)^2 = r^2$, the radius **squared** on the right.

If $z$ has a coefficient, divide it out first: $|kz - w| = R \iff \left|z - \dfrac wk\right| = \dfrac{R}{|k|}$. Both the centre and the radius change.

In terms of $z$ and $\bar z$: $z\bar z = x^2 + y^2$ and $z + \bar z = 2x$, so $z\bar z + q(z + \bar z) + s = 0$ is $x^2 + y^2 + 2qx + s = 0$.`,
    worked: {
      prompt: t`Describe $|2z + 4i| = 8$.`,
      steps: [
        t`Divide by 2: $|z + 2i| = 4$, that is, $|z - (-2i)| = 4$.`,
        t`Centre $-2i$, radius $4$.`,
        t`Cartesian form: $x^2 + (y + 2)^2 = 16$.`,
      ],
      answer: t`The circle $x^2 + (y + 2)^2 = 16$: centre $-2i$, radius $4$.`,
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
    },
    {
      id: "C24-Q3",
      source: { kind: "authored" },
      stem: t`$z\bar z - 2(z + \bar z) - 1 = 0$ is the circle:`,
      verify: { kind: "locus", inputs: { q: "-2", s: "-1" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$\left(x - 2\right)^2 + y^2 = 25$`, correct: false, misconceptionId: "C24-M2", value: "x**2 - 4*x + y**2 - 21" },
        { key: "B", text: t`$\left(x - 1\right)^2 + y^2 = 2$`, correct: false, misconceptionId: "C24-M6", value: "x**2 - 2*x + y**2 - 1" },
        { key: "C", text: t`$\left(x - 2\right)^2 + y^2 = 5$`, correct: true, value: "x**2 - 4*x + y**2 - 1" },
        { key: "D", text: t`$\left(x + 2\right)^2 + y^2 = 5$`, correct: false, misconceptionId: "C24-M1", value: "x**2 + 4*x + y**2 - 1" },
      ],
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
      ],
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
    },
  ],
};
