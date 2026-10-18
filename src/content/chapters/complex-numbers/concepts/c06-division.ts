import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`You can divide by $2$ in your head. You can't divide by $1 - i$ the same way, because the bottom isn't a plain number. But one multiplication turns $1 - i$ into a plain number. **Which number, multiplied by $1 - i$, gives a real answer?**`,
    reveal: t`$1 + i$, its conjugate: $(1 - i)(1 + i) = 1 - i^2 = 2$.`,
  },
  explanation: {
    intuition: [
      t`In a fraction, the **top** is divided by the **bottom**: $\dfrac{6 + 4i}{2} = 3 + 2i$, each part halved.`,
      t`A complex bottom, such as $2 - i$, can't be shared out like that: it has an $i$ in it.`,
      t`Recall: its **conjugate** is $2 + i$, the sign of $i$ flipped, its mirror image across the real axis.`,
      t`For $z = x + iy$, a number times its own conjugate is always real: $z\bar z = x^2 + y^2$.`,
      t`Here $(2 - i)(2 + i) = 4 + 1 = 5$, a point on the real axis.`,
      t`So multiply top **and** bottom by the bottom's conjugate: the value stays the same, and the bottom turns real.`,
    ],
    figure: {
      alt: "The Argand plane with the bottom 2 − i as an arrow from the origin and its conjugate 2 + i as its mirror image across the real axis. Their product, 5, is an arrow along the positive real axis.",
      view: { x: [-1, 7.5], y: [-2, 2.2] },
      elements: [
        { kind: "vector", to: [2, -1], step: 2 },
        { kind: "point", at: [2, -1], label: "2 − i", labelAt: "se", step: 2 },
        { kind: "segment", from: [2, -1], to: [2, 1], dashed: true, tone: "muted", step: 3 },
        { kind: "vector", to: [2, 1], tone: "muted", step: 3 },
        { kind: "point", at: [2, 1], label: "2 + i", labelAt: "ne", step: 3 },
        { kind: "vector", to: [5, 0], tone: "good", step: 5 },
        { kind: "point", at: [5, 0], label: "(2 − i)(2 + i) = 5", labelAt: "n", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "Making the bottom real",
        points: [
          t`Take $\dfrac{a + ib}{c + id}$, where $a, b, c, d$ are real and $c + id \ne 0$.`,
          t`Multiply top and bottom by $c - id$, the conjugate of the bottom.`,
          t`The new bottom is $(c + id)(c - id)$.`,
          t`When it is expanded, its two $i$ terms, $-icd$ and $+icd$, cancel.`,
          t`Its last term is $(id)(-id) = -i^2d^2$, which is $+d^2$ since $i^2 = -1$.`,
          t`So the bottom is $c^2 + d^2$, with a **plus** sign, not $c^2 - d^2$.`,
        ],
      },
      {
        title: "The division rule",
        points: [
          t`The fraction is now $\dfrac{(a + ib)(c - id)}{c^2 + d^2}$.`,
          t`The top expands, using $i^2 = -1$, to $(ac + bd) + i(bc - ad)$.`,
          t`So $\dfrac{a + ib}{c + id}$ equals $\dfrac{(ac + bd) + i(bc - ad)}{c^2 + d^2}$.`,
          t`Split it: the real part is $\dfrac{ac + bd}{c^2 + d^2}$.`,
          t`The imaginary part is $\dfrac{bc - ad}{c^2 + d^2}$.`,
        ],
      },
      {
        title: "The reciprocal of z",
        points: [
          t`The **reciprocal** of $z$ is $\dfrac{1}{z}$, the number that gives $1$ when multiplied by $z$.`,
          t`Take $z = c + id$, not zero, and put $1$ on top in the rule.`,
          t`The top becomes $1 \cdot (c - id)$, which is $\bar z$, the conjugate of $z$.`,
          t`$|z|$, the **modulus** of $z$, is its distance from $0$, so $|z|^2 = c^2 + d^2$.`,
          t`So the bottom is $|z|^2$, and $\dfrac{1}{z} = \dfrac{\bar z}{|z|^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $\dfrac{4 + 3i}{2 - i}$ in the form $a + ib$.`,
      steps: [
        t`The bottom is $2 - i$, so multiply top and bottom by its conjugate, $2 + i$.`,
        t`Bottom: $(2 - i)(2 + i) = 4 + 1 = 5$.`,
        t`Top: $(4 + 3i)(2 + i)$ $= 8 + 4i + 6i + 3i^2$ $= 8 + 10i - 3$ $= 5 + 10i$.`,
        t`Split: $\dfrac{5 + 10i}{5} = 1 + 2i$.`,
      ],
      answer: t`$1 + 2i$. Check: $(1 + 2i)(2 - i)$ $= 2 - i + 4i - 2i^2$ $= 4 + 3i$.`,
    },
    visualSpec: t`An Argand plane with the denominator $w$ as an arrow and its conjugate $\bar w$ as its mirror image across the real axis. A slider moves $w$. The product $w\bar w$ always lands on the positive real axis at distance $|w|^2$, which is why the move works.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Dividing part by part: $\frac{a+ib}{c+id} = \frac ac + i\frac bd$`,
      remediation: t`Fractions don't split over a sum in the bottom. Make the bottom real first by multiplying by its conjugate.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: "Multiplying only the top by the conjugate",
      remediation: t`Whatever you multiply the top by, multiply the bottom by too. Otherwise the value changes. You forgot to divide by $c^2 + d^2$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: t`Bottom computed as $c^2 - d^2$`,
      remediation: t`$(c + id)(c - id) = c^2 - i^2d^2 = c^2 + d^2$. The $i^2$ turns minus into plus.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M4",
      mistake: t`Using $i^2 = +1$ when expanding the top`,
      remediation: t`$i^2 = -1$. Recheck the $i \cdot i$ term in the top.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M5",
      mistake: "Multiplying by the bottom itself, not its conjugate",
      remediation: t`Use the conjugate, with the sign of $i$ flipped. Multiplying by the bottom itself leaves $i$ in it.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "authored" },
      stem: t`Write $\dfrac{3 + 2i}{1 - i}$ in the form $a + ib$.`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "1", d: "-1" } },
      options: [
        { key: "A", text: t`$\dfrac{1 + 5i}{2}$`, correct: true, value: "(1+5*I)/2" },
        { key: "B", text: t`$3 - 2i$`, correct: false, misconceptionId: "C06-M1", value: "3-2*I" },
        { key: "C", text: t`$1 + 5i$`, correct: false, misconceptionId: "C06-M2", value: "1+5*I" },
        { key: "D", text: t`$\dfrac{5 + 5i}{2}$`, correct: false, misconceptionId: "C06-M4", value: "(5+5*I)/2" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by the conjugate of the bottom, $1 + i$.`,
          t`Bottom: $(1 - i)(1 + i) = 1 + 1 = 2$.`,
          t`Top: $(3 + 2i)(1 + i) = 3 + 3i + 2i + 2i^2 = 1 + 5i$.`,
          t`So the answer is $\dfrac{1 + 5i}{2} = \dfrac12 + \dfrac52 i$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`$\dfrac{5}{2 + i} = ?$`,
      verify: { kind: "value", inputs: { a: "5", b: "0", c: "2", d: "1" } },
      options: [
        { key: "A", text: t`$2 - i$`, correct: true, value: "2-I" },
        { key: "B", text: t`$10 - 5i$`, correct: false, misconceptionId: "C06-M2", value: "10-5*I" },
        { key: "C", text: t`$\dfrac{10 - 5i}{3}$`, correct: false, misconceptionId: "C06-M3", value: "(10-5*I)/3" },
        { key: "D", text: t`$2 + i$`, correct: false, misconceptionId: "C06-M5", value: "2+I" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $2 - i$, the conjugate of the bottom.`,
          t`Bottom: $(2 + i)(2 - i) = 4 + 1 = 5$.`,
          t`Top: $5(2 - i) = 10 - 5i$, so the answer is $\dfrac{10 - 5i}{5} = 2 - i$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "cetcn-conjugate-and-rationalising" },
      stem: t`$\dfrac{1 + i}{1 - i} = ?$`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "1", d: "-1" } },
      options: [
        { key: "A", text: t`$i$`, correct: true, value: "I" },
        { key: "B", text: t`$1 - i$`, correct: false, misconceptionId: "C06-M1", value: "1-I" },
        { key: "C", text: t`$2i$`, correct: false, misconceptionId: "C06-M2", value: "2*I" },
        { key: "D", text: t`$1 + i$`, correct: false, misconceptionId: "C06-M4", value: "1+I" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $1 + i$, the conjugate of the bottom.`,
          t`Bottom: $(1 - i)(1 + i) = 2$.`,
          t`Top: $(1 + i)^2 = 1 + 2i + i^2 = 2i$, so the answer is $\dfrac{2i}{2} = i$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`The real part of $\dfrac{2 + 3i}{3 - 4i}$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "3", c: "3", d: "-4" }, ask: "re(z)" },
      options: [
        { key: "A", text: t`$-\dfrac{6}{25}$`, correct: true, value: "-6/25" },
        { key: "B", text: t`$\dfrac{18}{25}$`, correct: false, misconceptionId: "C06-M4", value: "18/25" },
        { key: "C", text: t`$\dfrac{6}{7}$`, correct: false, misconceptionId: "C06-M3", value: "6/7" },
        { key: "D", text: t`$\dfrac{2}{3}$`, correct: false, misconceptionId: "C06-M1", value: "2/3" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $3 + 4i$, the conjugate of the bottom.`,
          t`Bottom: $9 + 16 = 25$.`,
          t`Top: $(2 + 3i)(3 + 4i) = 6 + 8i + 9i + 12i^2 = -6 + 17i$.`,
          t`Split: $-\dfrac{6}{25} + \dfrac{17}{25}i$, so the real part is $-\dfrac{6}{25}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "cetcn-conjugate-and-rationalising" },
      stem: t`If $\dfrac{2 - i}{3 + 4i} = a + ib$, then $a + b =$`,
      verify: { kind: "value", inputs: { a: "2", b: "-1", c: "3", d: "4" }, ask: "re(z)+im(z)" },
      options: [
        { key: "A", text: t`$-\dfrac{9}{25}$`, correct: true, value: "-9/25" },
        { key: "B", text: t`$-9$`, correct: false, misconceptionId: "C06-M2", value: "-9" },
        { key: "C", text: t`$-\dfrac{1}{25}$`, correct: false, misconceptionId: "C06-M4", value: "-1/25" },
        { key: "D", text: t`$\dfrac{9}{7}$`, correct: false, misconceptionId: "C06-M3", value: "9/7" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $3 - 4i$, the conjugate of the bottom.`,
          t`Bottom: $9 + 16 = 25$.`,
          t`Top: $(2 - i)(3 - 4i) = 6 - 8i - 3i + 4i^2 = 2 - 11i$.`,
          t`So $a = \dfrac{2}{25}$ and $b = -\dfrac{11}{25}$, and $a + b = -\dfrac{9}{25}$.`,
        ],
      },
    },
  ],
};
