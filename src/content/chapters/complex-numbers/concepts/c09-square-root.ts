import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`$(2 + i)^2 = 3 + 4i$. **So what are the square roots of $3 + 4i$?**`,
    reveal: t`$2 + i$ and $-(2 + i) = -2 - i$. Every non-zero complex number has exactly two square roots, and they are negatives of each other.`,
  },
  explanation: {
    intuition: t`To find $\sqrt{a + ib}$, look for a number $x + iy$ whose square is $a + ib$. Squaring gives $(x^2 - y^2) + 2xyi$, so equate parts and solve. The two answers are always negatives of each other, written $\pm(x + iy)$.`,
    formal: t`Set $(x + iy)^2 = a + ib$ and equate parts:
$$x^2 - y^2 = a, \qquad 2xy = b.$$
Solve for real $x$ and $y$. The sign of $b$ tells you whether $x$ and $y$ have the same sign ($b > 0$) or opposite signs ($b < 0$).

The square root does **not** split over a sum: $\sqrt{a + ib} \ne \sqrt a + i\sqrt b$.`,
    worked: {
      prompt: t`Find the square roots of $-5 + 12i$.`,
      steps: [
        t`Set $x^2 - y^2 = -5$ and $2xy = 12$, so $xy = 6$.`,
        t`Try whole numbers with $xy = 6$: $x = 2$, $y = 3$ gives $4 - 9 = -5$.`,
        t`$b > 0$, so $x$ and $y$ share a sign: the roots are $\pm(2 + 3i)$.`,
      ],
      answer: t`$\pm(2 + 3i)$`,
    },
    visualSpec: t`Drag a point $w$; its square $w^2$ moves with it, turning twice as fast. Placing $w^2$ on a target shows the two positions of $w$, opposite each other through the origin.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Splitting the root over the sum: $\sqrt{a + ib} = \sqrt a + i\sqrt b$`,
      remediation: t`Square roots don't split over sums. Set $(x + iy)^2 = a + ib$ and equate parts instead.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: t`A sign slip in $2xy = b$, giving the conjugate root`,
      remediation: t`The sign of $b$ decides the signs: $b < 0$ means $x$ and $y$ have opposite signs.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`The square roots of $5 + 12i$ are:`,
      verify: { kind: "value", inputs: { z: "5+12*I" } },
      options: [
        { key: "A", text: t`$\pm(\sqrt{5} + 2 \sqrt{3} i)$`, correct: false, misconceptionId: "C09-M1", value: "sqrt(5) + 2*sqrt(3)*I" },
        { key: "B", text: t`$\pm(3 - 2 i)$`, correct: false, misconceptionId: "C09-M2", value: "3 - 2*I" },
        { key: "C", text: t`$\pm(3 + 2 i)$`, correct: true, value: "3 + 2*I" },
      ],
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`The square roots of $-3 - 4i$ are:`,
      verify: { kind: "value", inputs: { z: "-3-4*I" } },
      options: [
        { key: "A", text: t`$\pm(1 + 2 i)$`, correct: false, misconceptionId: "C09-M2", value: "1 + 2*I" },
        { key: "B", text: t`$\pm(1 - 2 i)$`, correct: true, value: "1 - 2*I" },
        { key: "C", text: t`$\pm(2 - \sqrt{3} i)$`, correct: false, misconceptionId: "C09-M1", value: "2 - sqrt(3)*I" },
      ],
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`The square roots of $8i$ are:`,
      verify: { kind: "value", inputs: { z: "8*I" } },
      options: [
        { key: "A", text: t`$\pm(2 - 2 i)$`, correct: false, misconceptionId: "C09-M2", value: "2 - 2*I" },
        { key: "B", text: t`$\pm(2 + 2 i)$`, correct: true, value: "2 + 2*I" },
        { key: "C", text: t`$\pm 2\sqrt{2}\,i$`, correct: false, misconceptionId: "C09-M1", value: "2*sqrt(2)*I" },
      ],
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`The square roots of $-15 + 8i$ are:`,
      verify: { kind: "value", inputs: { z: "-15+8*I" } },
      options: [
        { key: "A", text: t`$\pm(1 - 4 i)$`, correct: false, misconceptionId: "C09-M2", value: "1 - 4*I" },
        { key: "B", text: t`$\pm(1 + 4 i)$`, correct: true, value: "1 + 4*I" },
        { key: "C", text: t`$\pm(2\sqrt{2} + \sqrt{15})\,i$`, correct: false, misconceptionId: "C09-M1", value: "I*(2*sqrt(2) + sqrt(15))" },
      ],
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`The square roots of $7 - 24i$ are:`,
      verify: { kind: "value", inputs: { z: "7-24*I" } },
      options: [
        { key: "A", text: t`$\pm(2\sqrt{6} - \sqrt{7})$`, correct: false, misconceptionId: "C09-M1", value: "-sqrt(7) + 2*sqrt(6)" },
        { key: "B", text: t`$\pm(4 + 3 i)$`, correct: false, misconceptionId: "C09-M2", value: "4 + 3*I" },
        { key: "C", text: t`$\pm(4 - 3 i)$`, correct: true, value: "4 - 3*I" },
      ],
    },
  ],
};
