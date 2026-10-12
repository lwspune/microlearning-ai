import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c25: Concept = {
  id: "C25",
  status: "approved",
  hook: {
    prompt: "You want to stand exactly as far from your home as from your school. **Is there one such spot, a few, or a whole line of them?**",
    reveal: "A whole line. Every point on the perpendicular bisector of the segment from home to school works.",
  },
  explanation: {
    intuition: t`$|z - a|$ is the distance from $z$ to the point $a$. So $|z - a| = |z - b|$ asks for every point equally far from $a$ and $b$. That set is the **perpendicular bisector** of $ab$: it passes through the midpoint and is perpendicular to $ab$. It's a line, even though the equation has two moduli.`,
    formal: t`$|z - a| = |z - b|$ with $a \ne b$ is the perpendicular bisector of segment $ab$.

To get its Cartesian equation, put $z = x + iy$ and square both sides. The $x^2$ and $y^2$ terms **always cancel**, which is why the result is a line.

Watch the signs: $|z + 2| = |z - (-2)|$ is the distance from $-2$, **not** from $+2$.

Same locus, different form: $\left|\dfrac{z - a}{z - b}\right| = 1$. (With a ratio $k \ne 1$ it becomes a circle; that's C26.)`,
    worked: {
      prompt: t`Find the locus of $|z - 2| = |z + 2i|$.`,
      steps: [
        t`Read the points: $|z - 2|$ is the distance from $2 = (2, 0)$, and $|z + 2i| = |z - (-2i)|$ is the distance from $-2i = (0, -2)$.`,
        t`Square both sides: $(x - 2)^2 + y^2 = x^2 + (y + 2)^2$.`,
        t`Expand. The $x^2$ and $y^2$ cancel: $-4x + 4 = 4y + 4$, so $y = -x$.`,
        t`Sanity check: the midpoint $(1, -1)$ lies on $y = -x$. Line $ab$ has slope $1$ and $y = -x$ has slope $-1$, so they're perpendicular.`,
      ],
      answer: t`The line $y = -x$.`,
    },
    visualSpec: t`Two fixed points $a$ and $b$ on the Argand plane, and a draggable point $z$ with segments drawn to each. The two lengths are shown live. When they're equal, $z$ leaves a trace. After a few drags the trace shows itself as a straight line through the midpoint, at right angles to $ab$.`,
  },
  misconceptions: [
    {
      id: "C25-M1",
      mistake: "Two moduli, so it must be a circle",
      remediation: t`Equal distances from **two** points gives a line. Square both sides: the $x^2$ and $y^2$ cancel. A circle needs one point and a fixed distance.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C25-M2",
      mistake: t`Misreading the sign of a point: $|z + a|$ as the distance from $+a$ (or $|z - a|$ as from $-a$)`,
      remediation: t`$|z - p|$ is the distance from $p$, so $|z + a| = |z - (-a)|$ is the distance from $-a$. Rewrite each term as $|z - \text{point}|$ before plotting.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C25-M3",
      mistake: t`Giving the line **through** $a$ and $b$ instead of the bisector`,
      remediation: t`The points equidistant from $a$ and $b$ cross segment $ab$ at its midpoint, at right angles. They don't run along it.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  items: [
    {
      id: "C25-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "cn-loci-in-argand-plane" },
      stem: t`The locus $|z - 1| = |z + 1|$ is:`,
      verify: { kind: "locus", inputs: { a: "1", b: "-1" }, params: { flip: ["b"] } },
      options: [
        { key: "A", text: "the imaginary axis", correct: true, value: "x" },
        { key: "B", text: "the real axis", correct: false, misconceptionId: "C25-M3", value: "y" },
        { key: "C", text: t`the circle $|z| = 1$`, correct: false, misconceptionId: "C25-M1", value: "x**2+y**2-1" },
        { key: "D", text: "every point of the plane", correct: false, misconceptionId: "C25-M2", value: "0" },
      ],
    },
    {
      id: "C25-Q2",
      source: { kind: "authored" },
      stem: t`The locus $|z - 2| = |z - 2i|$ is:`,
      verify: { kind: "locus", inputs: { a: "2", b: "2*I" }, params: { flip: ["b"] } },
      options: [
        { key: "A", text: t`the line $y = x$`, correct: true, value: "y-x" },
        { key: "B", text: t`the line $x + y = 2$`, correct: false, misconceptionId: "C25-M3", value: "x+y-2" },
        { key: "C", text: t`the circle $|z - (1 + i)| = \sqrt2$`, correct: false, misconceptionId: "C25-M1", value: "(x-1)**2+(y-1)**2-2" },
        { key: "D", text: t`the line $y = -x$`, correct: false, misconceptionId: "C25-M2", value: "x+y" },
      ],
    },
    {
      id: "C25-Q3",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "cetcn-perpendicular-bisector-and-lines" },
      stem: t`The locus $\left|\dfrac{z - 3}{z - 1}\right| = 1$ is:`,
      verify: { kind: "locus", inputs: { a: "3", b: "1" }, params: { flip: ["a", "b"] } },
      options: [
        { key: "A", text: t`the line $x = 2$`, correct: true, value: "x-2" },
        { key: "B", text: "a circle", correct: false, misconceptionId: "C25-M1", value: "(x-2)**2+y**2-1" },
        { key: "C", text: "the real axis", correct: false, misconceptionId: "C25-M3", value: "y" },
        { key: "D", text: t`the line $x = -2$`, correct: false, misconceptionId: "C25-M2", value: "x+2" },
      ],
    },
    {
      id: "C25-Q4",
      source: { kind: "authored" },
      stem: t`The locus $|z + 2| = |z - 4i|$ is:`,
      verify: { kind: "locus", inputs: { a: "-2", b: "4*I" }, params: { flip: ["a"] } },
      options: [
        { key: "A", text: t`$x + 2y = 3$`, correct: true, value: "x+2*y-3" },
        { key: "B", text: t`$x - 2y = -3$`, correct: false, misconceptionId: "C25-M2", value: "x-2*y+3" },
        { key: "C", text: t`$2x - y = -4$`, correct: false, misconceptionId: "C25-M3", value: "2*x-y+4" },
        { key: "D", text: t`$|z + 1 - 2i| = \sqrt5$`, correct: false, misconceptionId: "C25-M1", value: "(x+1)**2+(y-2)**2-5" },
      ],
    },
    {
      id: "C25-Q5",
      source: { kind: "authored" },
      stem: t`Which point lies on the locus $|z + 4| = |z - 2i|$?`,
      verify: { kind: "point", inputs: { a: "-4", b: "2*I" }, params: { flip: ["a"] } },
      options: [
        { key: "A", text: t`$-4 + 5i$`, correct: true, value: "-4+5*I" },
        { key: "B", text: t`$1 - i$`, correct: false, misconceptionId: "C25-M2", value: "1-I" },
        { key: "C", text: t`$2 + 3i$`, correct: false, misconceptionId: "C25-M3", value: "2+3*I" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C25-M1", value: "0" },
      ],
    },
  ],
};
