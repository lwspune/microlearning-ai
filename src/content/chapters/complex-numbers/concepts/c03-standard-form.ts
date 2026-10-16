import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Suppose $a + ib = 3 - 5i$, with $a$ and $b$ real. **What must $a$ and $b$ be?**`,
    reveal: t`$a = 3$ and $b = -5$. Real parts match and imaginary parts match: one equation between complex numbers is really two equations.`,
  },
  explanation: {
    intuition: [
      t`Recall: $i$ is the new number with $i^2 = -1$.`,
      t`A **complex number** is a real number plus a real number times $i$, such as $3 - 5i$.`,
      t`So every complex number has two separate parts, like the two coordinates of a point.`,
      t`The **real part** is the number on its own, and the **imaginary part** is the number multiplying $i$.`,
      t`Two complex numbers are equal only when both parts match.`,
      t`So one equation between complex numbers gives two equations between real numbers.`,
    ],
    formal: [
      {
        title: "Standard form",
        points: [
          t`A complex number written as $z = x + iy$, with $x$ and $y$ real, is in **standard form**.`,
          t`Its real part is $x$, the term without $i$: we write $\operatorname{Re} z = x$.`,
          t`Its imaginary part is $y$, the **coefficient** of $i$, the number multiplying it: $\operatorname{Im} z = y$.`,
          t`The imaginary part is the real number $y$, **without** the $i$.`,
          t`It keeps its sign: $\operatorname{Im}(3 - 4i) = -4$.`,
        ],
      },
      {
        title: "Equality of complex numbers",
        points: [
          t`Let $a$, $b$, $c$ and $d$ be real numbers.`,
          t`Then $a + ib = c + id$ exactly when $a = c$ and $b = d$.`,
          t`That is, the real parts are equal and the imaginary parts are equal.`,
          t`It works both ways: matching parts give equal numbers, and equal numbers have matching parts.`,
          t`Match like with like: never a real part with an imaginary part.`,
        ],
      },
      {
        title: "Standard form before comparing",
        points: [
          t`Compare the parts only once each side is in the form $x + iy$.`,
          t`For example, take $i(2 + 5i)$.`,
          t`Multiply out: $i(2 + 5i) = 2i + 5i^2$.`,
          t`Replace $i^2$ by $-1$: this is $2i - 5$.`,
          t`In standard form it is $-5 + 2i$, with real part $-5$ and imaginary part $2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $(x - 1) + i(2y + 3) = 4 - i$ with $x, y$ real, find $x$ and $y$.`,
      steps: [
        t`Equate real parts: $x - 1 = 4$, so $x = 5$.`,
        t`Equate imaginary parts: $2y + 3 = -1$, so $y = -2$.`,
      ],
      answer: t`$x = 5,\ y = -2$`,
    },
    visualSpec: t`A complex number shown as two labelled boxes, Re and Im. Typing $x + iy$ fills them, and an equality check lights both boxes green only when both parts match.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Including the $i$ in the imaginary part: $\operatorname{Im}(a + ib) = ib$`,
      remediation: t`$\operatorname{Im}(a + ib) = b$, a real number. The $i$ only marks which part it is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Giving the real part instead of the imaginary part",
      remediation: t`The imaginary part is the coefficient of $i$, not the term without $i$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Dropping the minus sign of the imaginary part: $\operatorname{Im}(3 - 4i) = 4$`,
      remediation: t`The imaginary part keeps its sign: $\operatorname{Im}(3 - 4i) = -4$.`,
      fallback: { kind: "ext", topic: "signs" },
    },
    {
      id: "C03-M4",
      mistake: "Equating a real part with an imaginary part",
      remediation: "Match like with like: real part with real part, imaginary part with imaginary part.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Moving a constant across without changing its sign",
      remediation: t`To solve $x + p = c$, subtract $p$ from both sides: $x = c - p$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C03-M6",
      mistake: t`Putting a minus sign on a positive imaginary part: matching $y - 1$ in $5 + 3i$ with $-3$`,
      remediation: t`Copy each part with the sign it has. In $5 + 3i$ the imaginary part is $+3$, so $y - 1 = 3$.`,
      fallback: { kind: "ext", topic: "signs" },
    },
  ],
  engineNotes: [
    t`C03-M3 applies only when the imaginary part is negative, and C03-M6 only when it is positive; otherwise each gives the key.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`$\operatorname{Im}(3 - 4i) = ?$`,
      verify: { kind: "value", inputs: { z: "3-4*I" }, params: { op: "im" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C03-M2", value: "3" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C03-M3", value: "4" },
        { key: "C", text: t`$-4$`, correct: true, value: "-4" },
        { key: "D", text: t`$- 4 i$`, correct: false, misconceptionId: "C03-M1", value: "-4*I" },
      ],
      solution: {
        steps: [
          t`The imaginary part is the coefficient of $i$, sign included, without the $i$.`,
          t`In $3 - 4i$ that coefficient is $-4$, so $\operatorname{Im}(3 - 4i) = -4$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`$\operatorname{Im}\big(i(-4 - i)\big) = ?$`,
      verify: { kind: "value", inputs: { z: "I*(-4-I)" }, params: { op: "im" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M2", value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C03-M3", value: "4" },
        { key: "C", text: t`$-4$`, correct: true, value: "-4" },
        { key: "D", text: t`$- 4 i$`, correct: false, misconceptionId: "C03-M1", value: "-4*I" },
      ],
      solution: {
        steps: [
          t`Bring it to standard form first: $i(-4 - i) = -4i - i^2 = 1 - 4i$.`,
          t`The coefficient of $i$ is $-4$, so the imaginary part is $-4$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`If $(x + 2) + i(y - 1) = 5 + 3i$ with $x, y$ real, then:`,
      verify: { kind: "value", inputs: { a1: "1", p: "2", c: "5", a2: "1", q: "-1", d: "3" }, params: { op: "equate" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = 6$`, correct: false, misconceptionId: "C03-M4", value: "1 + 6*I" },
        { key: "B", text: t`$x = 7,\ y = 2$`, correct: false, misconceptionId: "C03-M5", value: "7 + 2*I" },
        { key: "C", text: t`$x = 3,\ y = -2$`, correct: false, misconceptionId: "C03-M6", value: "3 - 2*I" },
        { key: "D", text: t`$x = 3,\ y = 4$`, correct: true, value: "3 + 4*I" },
      ],
      solution: {
        steps: [
          t`Equate real parts: $x + 2 = 5$, so $x = 3$.`,
          t`Equate imaginary parts: $y - 1 = 3$, so $y = 4$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`If $(2x - 1) + i(3y + 2) = 5 - 4i$ with $x, y$ real, then:`,
      verify: { kind: "value", inputs: { a1: "2", p: "-1", c: "5", a2: "3", q: "2", d: "-4" }, params: { op: "equate" } },
      options: [
        { key: "A", text: t`$x = 2,\ y = - \frac{2}{3}$`, correct: false, misconceptionId: "C03-M5", value: "2 - 2*I/3" },
        { key: "B", text: t`$x = 3,\ y = \frac{2}{3}$`, correct: false, misconceptionId: "C03-M3", value: "3 + 2*I/3" },
        { key: "C", text: t`$x = 3,\ y = -2$`, correct: true, value: "3 - 2*I" },
        { key: "D", text: t`$x = - \frac{3}{2},\ y = 1$`, correct: false, misconceptionId: "C03-M4", value: "-3/2 + I" },
      ],
      solution: {
        steps: [
          t`Equate real parts: $2x - 1 = 5$, so $2x = 6$ and $x = 3$.`,
          t`Equate imaginary parts: $3y + 2 = -4$, so $3y = -6$ and $y = -2$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`$\operatorname{Im}(-6i) = ?$`,
      verify: { kind: "value", inputs: { z: "-6*I" }, params: { op: "im" } },
      options: [
        { key: "A", text: t`$-6$`, correct: true, value: "-6" },
        { key: "B", text: t`$- 6 i$`, correct: false, misconceptionId: "C03-M1", value: "-6*I" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C03-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`Write it in standard form: $-6i = 0 + (-6)i$.`,
          t`The coefficient of $i$ is $-6$, so $\operatorname{Im}(-6i) = -6$. The real part is $0$.`,
        ],
      },
    },
  ],
};
