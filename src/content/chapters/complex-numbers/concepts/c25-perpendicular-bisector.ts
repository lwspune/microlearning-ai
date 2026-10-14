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
      figure: {
        alt: "The points 2 and −2i. Their perpendicular bisector is the line y = −x, which passes through their midpoint 1 − i at right angles to the segment joining them.",
        view: { x: [-3, 3.5], y: [-3, 3] },
        elements: [
          { kind: "point", at: [2, 0], label: "2", labelAt: "ne", step: 1 },
          { kind: "point", at: [0, -2], label: "−2i", labelAt: "e", step: 1 },
          { kind: "line", through: [[0, 0], [-1, 1]], label: "y = −x", labelAt: "ne", step: 3 },
          { kind: "segment", from: [2, 0], to: [0, -2], dashed: true, tone: "muted", step: 4 },
          { kind: "point", at: [1, -1], label: "1 − i", labelAt: "se", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "Points a = −2 + i and b = 2 − i. Every point equally far from both lies on the perpendicular bisector of ab, the line y = 2x through the midpoint 0. For example z = 1 + 2i is √10 from each.",
      view: { x: [-3.5, 3.5], y: [-3, 3.2] },
      elements: [
        { kind: "point", at: [-2, 1], label: "a", labelAt: "w", step: 1 },
        { kind: "point", at: [2, -1], label: "b", labelAt: "e", step: 1 },
        { kind: "segment", from: [-2, 1], to: [2, -1], dashed: true, tone: "muted", step: 2 },
        { kind: "line", through: [[0, 0], [1, 2]], step: 3 },
        { kind: "label", at: [-1.2, -2.4], label: "|z − a| = |z − b|", labelAt: "w", step: 3 },
        { kind: "segment", from: [1, 2], to: [-2, 1], label: "√10", labelAt: "n", tone: "good", step: 4 },
        { kind: "segment", from: [1, 2], to: [2, -1], label: "√10", labelAt: "e", tone: "good", step: 4 },
        { kind: "point", at: [1, 2], label: "z", labelAt: "e", tone: "good", step: 4 },
      ],
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
      solution: {
        steps: [
          t`$|z - 1|$ is the distance from $1$, and $|z + 1| = |z - (-1)|$ is the distance from $-1$.`,
          t`Every point equally far from $1$ and $-1$ lies on their perpendicular bisector.`,
          t`The midpoint is $0$ and the segment lies along the real axis, so the bisector is the imaginary axis.`,
        ],
        figure: {
          alt: "The points 1 and −1 on the real axis. Their perpendicular bisector is the imaginary axis, x = 0.",
          view: { x: [-2, 2], y: [-1.8, 1.8] },
          elements: [
            { kind: "point", at: [1, 0], label: "1", labelAt: "ne", step: 1 },
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "nw", step: 1 },
            { kind: "segment", from: [-1, 0], to: [1, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "line", through: [[0, -1], [0, 1]], label: "x = 0", labelAt: "e", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$|z - 2|$ is the distance from $2$, and $|z - 2i|$ is the distance from $2i$.`,
          t`The midpoint of $2$ and $2i$ is $1 + i$, and the segment between them has slope $-1$.`,
          t`The perpendicular bisector passes through $1 + i$ with slope $1$: the line $y = x$.`,
        ],
        figure: {
          alt: "The points 2 and 2i. Their perpendicular bisector passes through the midpoint 1 + i at right angles to the segment: the line y = x.",
          view: { x: [-1.5, 3.2], y: [-1.5, 3.2] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 2], label: "2i", labelAt: "ne", step: 1 },
            { kind: "segment", from: [2, 0], to: [0, 2], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "se", tone: "muted", step: 2 },
            { kind: "line", through: [[0, 0], [1, 1]], label: "y = x", labelAt: "nw", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$\left|\dfrac{z - 3}{z - 1}\right| = 1$ means $|z - 3| = |z - 1|$.`,
          t`So $z$ is equally far from $3$ and $1$: on their perpendicular bisector.`,
          t`The midpoint is $2$ and the segment lies along the real axis, so the bisector is the vertical line $x = 2$.`,
        ],
        figure: {
          alt: "The points 1 and 3 on the real axis. Their perpendicular bisector is the vertical line x = 2.",
          view: { x: [-0.8, 4], y: [-1.8, 1.8] },
          elements: [
            { kind: "point", at: [3, 0], label: "3", labelAt: "ne", step: 1 },
            { kind: "point", at: [1, 0], label: "1", labelAt: "nw", step: 1 },
            { kind: "segment", from: [1, 0], to: [3, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "line", through: [[2, -1], [2, 1]], label: "x = 2", labelAt: "e", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$|z + 2|$ is the distance from $-2$, and $|z - 4i|$ is the distance from $4i$.`,
          t`Square both sides: $(x + 2)^2 + y^2 = x^2 + (y - 4)^2$.`,
          t`The squares cancel: $4x + 4 = -8y + 16$, so $x + 2y = 3$.`,
        ],
        figure: {
          alt: "The points −2 and 4i. Their perpendicular bisector is the line x + 2y = 3, through the midpoint −1 + 2i.",
          view: { x: [-3.5, 4], y: [-1.2, 5] },
          elements: [
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 4], label: "4i", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-2, 0], to: [0, 4], dashed: true, tone: "muted", step: 3 },
            { kind: "line", through: [[3, 0], [-1, 2]], label: "x + 2y = 3", labelAt: "ne", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$z$ must be equally far from $-4$ and $2i$: it lies on their perpendicular bisector.`,
          t`Check $-4 + 5i$: its distance from $-4$ is $|5i| = 5$, and from $2i$ it is $|-4 + 3i| = 5$.`,
          t`The distances are equal, so $-4 + 5i$ lies on the locus.`,
        ],
        figure: {
          alt: "The points −4 and 2i and their perpendicular bisector. The point −4 + 5i is 5 from each, so it lies on the bisector.",
          view: { x: [-5.5, 1.8], y: [-1.5, 6] },
          elements: [
            { kind: "point", at: [-4, 0], label: "−4", labelAt: "sw" },
            { kind: "point", at: [0, 2], label: "2i", labelAt: "e" },
            { kind: "line", through: [[-4, 5], [-1, -1]], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-4, 5], to: [-4, 0], label: "5", labelAt: "w", tone: "good", step: 2 },
            { kind: "segment", from: [-4, 5], to: [0, 2], label: "5", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [-4, 5], label: "−4 + 5i", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
  ],
};
