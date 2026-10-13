import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c26: Concept = {
  id: "C26",
  status: "draft",
  hook: {
    prompt: t`Think of the points twice as far from $4$ as from $1$. **Is that a straight line, like equal distances gave?**`,
    reveal: t`No, it's a circle. Equal distances give a line, but any other ratio gives a circle (the circle of Apollonius).`,
  },
  explanation: {
    intuition: t`When a condition isn't one of the standard shapes, translate it: put $z = x + iy$, simplify, and read the curve from the Cartesian equation. Two patterns come up again and again: a ratio of distances (a circle unless the ratio is 1), and the real or imaginary part of a quotient being zero.`,
    formal: t`**Ratio of distances:** $|z - a| = k|z - b|$. For $k = 1$ it is the perpendicular bisector; for $k \ne 1$ it is a circle. Square both sides: $|z - a|^2 = k^2|z - b|^2$, with $k$ **squared**.

**Part of a quotient:** for $\operatorname{Re}\left(\dfrac{z - a}{z - b}\right) = 0$, multiply top and bottom by $\overline{z - b}$. The bottom becomes real and positive, so the condition is on the top: $\operatorname{Re}\big((z - a)\overline{(z - b)}\big) = 0$. The point $z = b$ is excluded.

Purely imaginary means the **real** part is $0$; purely real means the **imaginary** part is $0$.`,
    worked: {
      prompt: t`Find the locus $|z - 3| = 2|z|$.`,
      steps: [
        t`Square: $(x - 3)^2 + y^2 = 4(x^2 + y^2)$.`,
        t`Expand and collect: $3x^2 + 6x + 3y^2 = 9$.`,
        t`Divide by 3 and complete the square: $(x + 1)^2 + y^2 = 4$.`,
      ],
      answer: t`The circle with centre $-1$ and radius $2$.`,
    },
    visualSpec: t`Two fixed points $a$ and $b$ with a ratio slider $k$. The locus redraws live: a straight line at $k = 1$, and circles round $a$ or $b$ as $k$ moves away from 1.`,
  },
  misconceptions: [
    {
      id: "C26-M1",
      mistake: t`Calling $|z - a| = k|z - b|$ a line when $k \ne 1$`,
      remediation: t`Only $k = 1$ gives the perpendicular bisector. Square both sides: for $k \ne 1$ the $x^2$ and $y^2$ terms don't cancel, so it's a circle.`,
      fallback: { kind: "concept", id: "C25" },
    },
    {
      id: "C26-M2",
      mistake: "Applying the condition to the numerator only",
      remediation: t`Multiply by $\overline{z - b}$ first; the condition is on $(z - a)\overline{(z - b)}$, not on $z - a$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C26-M3",
      mistake: t`Using $k$ instead of $k^2$ after squaring`,
      remediation: t`Squaring $k|z - b|$ gives $k^2|z - b|^2$.`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C26-M4",
      mistake: "Setting the other part to zero",
      remediation: t`$\operatorname{Re} = 0$ makes the number purely imaginary; $\operatorname{Im} = 0$ makes it purely real. Use the part the question names.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  items: [
    {
      id: "C26-Q1",
      source: { kind: "authored" },
      stem: t`$|z - 2| = 2|z + 1|$ is:`,
      verify: { kind: "locus", inputs: { a: "2", b: "-1", k: "2" }, params: { op: "apollonius" } },
      options: [
        { key: "A", text: t`$\left(x + 2\right)^2 + y^2 = 4$`, correct: true, value: "-3*x**2 - 12*x - 3*y**2" },
        { key: "B", text: t`$x = \frac{1}{2}$`, correct: false, misconceptionId: "C26-M1", value: "3 - 6*x" },
        { key: "C", text: t`$\left(x + 4\right)^2 + y^2 = 18$`, correct: false, misconceptionId: "C26-M3", value: "-x**2 - 8*x - y**2 + 2" },
      ],
    },
    {
      id: "C26-Q2",
      source: { kind: "authored" },
      stem: t`$\operatorname{Re}\left(\dfrac{z - 1}{z + 1}\right) = 0$ describes (apart from $z = -1$):`,
      verify: { kind: "locus", inputs: { a: "1", b: "-1" }, params: { op: "quotient_part", part: "re" } },
      options: [
        { key: "A", text: t`$x = 1$`, correct: false, misconceptionId: "C26-M2", value: "x - 1" },
        { key: "B", text: t`$y = 0$`, correct: false, misconceptionId: "C26-M4", value: "2*y" },
        { key: "C", text: t`$x^2 + y^2 = 1$`, correct: true, value: "x**2 + y**2 - 1" },
      ],
    },
    {
      id: "C26-Q3",
      source: { kind: "authored" },
      stem: t`$\operatorname{Im}\left(\dfrac{z - i}{z + i}\right) = 0$ describes (apart from $z = -i$):`,
      verify: { kind: "locus", inputs: { a: "I", b: "-I" }, params: { op: "quotient_part", part: "im" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 1$`, correct: false, misconceptionId: "C26-M4", value: "x**2 + y**2 - 1" },
        { key: "B", text: t`$x = 0$`, correct: true, value: "-2*x" },
        { key: "C", text: t`$y = 1$`, correct: false, misconceptionId: "C26-M2", value: "y - 1" },
      ],
    },
    {
      id: "C26-Q4",
      source: { kind: "authored" },
      stem: t`$|z + 1| = 3|z - 1|$ is:`,
      verify: { kind: "locus", inputs: { a: "-1", b: "1", k: "3" }, params: { op: "apollonius" } },
      options: [
        { key: "A", text: t`$\left(x - \frac{5}{4}\right)^2 + y^2 = \frac{9}{16}$`, correct: true, value: "-8*x**2 + 20*x - 8*y**2 - 8" },
        { key: "B", text: t`$x = 0$`, correct: false, misconceptionId: "C26-M1", value: "4*x" },
        { key: "C", text: t`$\left(x - 2\right)^2 + y^2 = 3$`, correct: false, misconceptionId: "C26-M3", value: "-2*x**2 + 8*x - 2*y**2 - 2" },
      ],
    },
    {
      id: "C26-Q5",
      source: { kind: "authored" },
      stem: t`$\operatorname{Re}\left(\dfrac{z - 2}{z - 2i}\right) = 0$ describes (apart from $z = 2i$):`,
      verify: { kind: "locus", inputs: { a: "2", b: "2*I" }, params: { op: "quotient_part", part: "re" } },
      options: [
        { key: "A", text: t`$x = 2$`, correct: false, misconceptionId: "C26-M2", value: "x - 2" },
        { key: "B", text: t`$y = 2 - x$`, correct: false, misconceptionId: "C26-M4", value: "2*x + 2*y - 4" },
        { key: "C", text: t`$\left(x - 1\right)^2 + \left(y - 1\right)^2 = 2$`, correct: true, value: "x**2 - 2*x + y**2 - 2*y" },
      ],
    },
  ],
};
