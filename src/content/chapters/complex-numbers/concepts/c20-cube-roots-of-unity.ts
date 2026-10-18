import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** ω and ω², a third and two thirds of a turn round the unit circle. */
const OMEGA: Pt = [-0.5, 0.866];
const OMEGA2: Pt = [-0.5, -0.866];

/** The initial arm: the arrow from 0 to 1 along the real axis, where every turn starts; labelled above at `labelX`. */
const initialArm = (labelX = 0.5): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [1, 0], tone: "good" },
  { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good" },
];

export const c20: Concept = {
  id: "C20",
  status: "approved",
  hook: {
    prompt: t`Solve $z^3 = 1$. **Is $z = 1$ the only answer?**`,
    reveal: t`No. $z^3 - 1 = (z - 1)(z^2 + z + 1)$, and the quadratic gives two more roots, $\dfrac{-1 \pm i\sqrt3}{2}$. One is called $\omega$; the other is $\omega^2$.`,
  },
  explanation: {
    intuition: [
      t`A **cube root of unity** is a number whose cube is $1$; **unity** is another word for one.`,
      t`$1$ is one of them, since $1^3 = 1$.`,
      t`The other two lie on the **unit circle**, the circle of radius $1$ about the origin.`,
      t`A third of a turn, $120^\circ$ anticlockwise from $1$, reaches the next root, named $\omega$, the Greek letter omega.`,
      t`Recall: multiplying adds angles, so $\omega^2 = \omega \cdot \omega$ is another third of a turn on.`,
      t`One more third of a turn brings the arm back to $1$, so $\omega^3 = 1$.`,
    ],
    formal: [
      {
        title: "Finding the three roots",
        points: [
          t`The cube roots of unity solve $z^3 = 1$, that is $z^3 - 1 = 0$.`,
          t`It factorises: $z^3 - 1 = (z - 1)(z^2 + z + 1)$.`,
          t`The factor $z - 1$ gives the root $z = 1$.`,
          t`Recall: $z^2 + z + 1 = 0$ has discriminant $D = 1 - 4 = -3$, so its roots are complex.`,
          t`One root is $\omega = \frac{-1 + i\sqrt3}{2}$, called **omega**.`,
          t`The other is $\frac{-1 - i\sqrt3}{2}$, which turns out to be $\omega^2$.`,
        ],
        figure: {
          alt: "The three roots of z³ = 1 as arrows from the origin: 1 on the real axis, ω = −1/2 + (√3/2)i up and to the left, and ω² = −1/2 − (√3/2)i down and to the left, all on the dashed unit circle.",
          view: { x: [-2.6, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "vector", to: [1, 0], label: "1", labelAt: "ne", step: 3 },
            { kind: "vector", to: [-0.5, 0.866], label: "ω = −1/2 + (√3/2)i", labelAt: "nw", step: 5 },
            { kind: "vector", to: [-0.5, -0.866], label: "ω² = −1/2 − (√3/2)i", labelAt: "sw", step: 6 },
          ],
        },
      },
      {
        title: "A third of a turn apart",
        points: [
          t`Recall: the **modulus** is the distance from $0$; here $|\omega| = \sqrt{\frac14 + \frac34} = 1$.`,
          t`Recall: the **argument** is the angle from the positive real axis; $\arg\omega = \frac{2\pi}3$, or $120^\circ$.`,
          t`Multiplying adds arguments, so $\omega^2$ has argument $\frac{4\pi}3$, a third of a turn further.`,
          t`Its modulus is $1 \times 1 = 1$, so $\omega^2$ is the root $\frac{-1 - i\sqrt3}{2}$.`,
          t`One more factor adds $\frac{2\pi}3$ again, to $2\pi$: a full turn, so $\omega^3 = 1$.`,
          t`So the roots are equally spaced: the corners of an **equilateral triangle**, one with equal sides.`,
        ],
        figure: {
          alt: "From the initial arm along the real axis to 1, an arm of length 1 turns a third of a turn, 2π/3, to ω; another third of a turn to ω²; and a third third back to 1, a full turn. The three roots sit on the dashed unit circle at the corners of an equilateral triangle.",
          view: { x: [-1.9, 1.9], y: [-1.5, 1.5] },
          elements: [
            ...initialArm(),
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 1 },
            { kind: "turn", r: 1, to: 120, label: "ω", labelAt: "nw", step: 2 },
            { kind: "turn", r: 1, from: 120, to: 240, label: "ω²", labelAt: "sw", step: 3 },
            { kind: "turn", r: 1, from: 240, to: 360, label: "ω³ = 1", labelAt: "ne", step: 5 },
            { kind: "segment", from: [1, 0], to: OMEGA, dashed: true, tone: "muted", step: 6 },
            { kind: "segment", from: OMEGA, to: OMEGA2, dashed: true, tone: "muted", step: 6 },
            { kind: "segment", from: OMEGA2, to: [1, 0], dashed: true, tone: "muted", step: 6 },
          ],
        },
      },
      {
        title: "Powers repeat every 3",
        points: [
          t`Write a whole number $n$ as $n = 3q + r$; the **remainder** $r$ is $0$, $1$ or $2$.`,
          t`Each block of three factors is $\omega^3 = 1$: a full turn, back to $1$.`,
          t`So $\omega^n = \omega^r$: divide by $3$, not by $4$ as for powers of $i$.`,
          t`Remainder $0$ gives $1$, remainder $1$ gives $\omega$, and remainder $2$ gives $\omega^2$.`,
          t`For example, $5 = 3 \times 1 + 2$, so $\omega^5 = \omega^2$.`,
        ],
        figure: {
          alt: "The cube roots of unity on the dashed unit circle. Three factors of ω turn the arm one full turn, back to 1. Remainder 0 is 1, remainder 1 is ω and remainder 2 is ω². Five factors are one full turn and two thirds more, landing on ω².",
          view: { x: [-1.35, 1.75], y: [-1.25, 1.25] },
          elements: [
            ...initialArm(0.74),
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "point", at: OMEGA, tone: "muted" },
            { kind: "point", at: OMEGA2, tone: "muted" },
            { kind: "turn", r: 1, to: 360, label: "ω³ = 1", labelAt: "ne", step: 2 },
            { kind: "label", at: [1, 0], label: "r = 0", labelAt: "se", tone: "muted", step: 4 },
            { kind: "label", at: OMEGA, label: "r = 1: ω", labelAt: "nw", tone: "muted", step: 4 },
            { kind: "label", at: OMEGA2, label: "r = 2: ω²", labelAt: "w", tone: "muted", step: 4 },
            { kind: "turn", r: 1, to: 600, label: "ω⁵ = ω²", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "The three roots add to zero",
        points: [
          t`The three cube roots of unity add to zero: $1 + \omega + \omega^2 = 0$.`,
          t`Their real parts add to $1 - \frac12 - \frac12 = 0$.`,
          t`Their imaginary parts add to $\frac{\sqrt3}2 - \frac{\sqrt3}2 = 0$.`,
          t`Recall: adding two arrows completes a parallelogram; here $\omega$ and $\omega^2$ add to $-1$.`,
          t`So $\omega + \omega^2 = -1$, not $1$.`,
          t`And $1 + \omega = -\omega^2$, the point opposite $\omega^2$.`,
        ],
        figure: {
          alt: "Arrows from the origin to 1, ω and ω². The arrows ω and ω² complete a parallelogram whose far corner is −1, which cancels 1, so the three add to zero. The point 1 + ω is opposite ω², at −ω².",
          view: { x: [-2.6, 1.9], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "vector", to: [1, 0], label: "1", labelAt: "se", step: 1 },
            { kind: "vector", to: OMEGA, label: "ω", labelAt: "nw", step: 1 },
            { kind: "vector", to: OMEGA2, label: "ω²", labelAt: "sw", step: 1 },
            { kind: "segment", from: OMEGA, to: [-1, 0], dashed: true, tone: "muted", step: 4 },
            { kind: "segment", from: OMEGA2, to: [-1, 0], dashed: true, tone: "muted", step: 4 },
            { kind: "point", at: [-1, 0], label: "ω + ω² = −1", labelAt: "nw", tone: "good", step: 4 },
            { kind: "point", at: [0.5, 0.866], label: "1 + ω = −ω²", labelAt: "ne", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "ω² is the conjugate of ω",
        points: [
          t`Recall: the **conjugate** $\bar z$ flips the sign of the imaginary part: a mirror image in the real axis.`,
          t`$\omega = \frac{-1 + i\sqrt3}{2}$ and $\omega^2 = \frac{-1 - i\sqrt3}{2}$ differ only in that sign.`,
          t`So $\omega^2 = \bar\omega$, the mirror image of $\omega$.`,
          t`But $\omega^2 \ne -\omega$: $-\omega = \frac{1 - i\sqrt3}{2}$ flips the sign of both parts.`,
          t`So $-\omega$ is the point opposite $\omega$, on the far side of the origin.`,
          t`To write $\omega^2$ using $\omega$, use $\omega^2 = -1 - \omega$, from $1 + \omega + \omega^2 = 0$.`,
        ],
        figure: {
          alt: "ω up and to the left and ω² down and to the left are mirror images in the real axis: ω² is the conjugate of ω. The point −ω, opposite ω through the origin, is down and to the right: a different point.",
          view: { x: [-2, 2], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "vector", to: OMEGA, label: "ω", labelAt: "nw", step: 2 },
            { kind: "vector", to: OMEGA2, label: "ω²", labelAt: "sw", step: 2 },
            { kind: "segment", from: OMEGA, to: OMEGA2, dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [-0.95, -0.4], label: "ω² = ω̄", labelAt: "w", tone: "good", step: 3 },
            { kind: "point", at: [0.5, -0.866], label: "−ω = 1/2 − (√3/2)i", labelAt: "se", tone: "bad", step: 4 },
            { kind: "segment", from: OMEGA, to: [0.5, -0.866], dashed: true, tone: "bad", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Simplify $\omega^{25} + \omega^{50}$.`,
      steps: [
        t`$25 = 3 \times 8 + 1$, so $\omega^{25} = \omega$.`,
        t`$50 = 3 \times 16 + 2$, so $\omega^{50} = \omega^2$.`,
        t`$\omega + \omega^2 = -1$.`,
      ],
      answer: t`$-1$`,
      figure: {
        alt: "ω²⁵ is ω and ω⁵⁰ is ω². Adding the two arrows completes a parallelogram whose far corner is −1.",
        view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
          { kind: "vector", to: [-0.5, 0.866], label: "ω²⁵ = ω", labelAt: "nw", tone: "muted", step: 1 },
          { kind: "vector", to: [-0.5, -0.866], label: "ω⁵⁰ = ω²", labelAt: "sw", tone: "muted", step: 2 },
          { kind: "segment", from: [-0.5, 0.866], to: [-1, 0], dashed: true, tone: "muted", step: 3 },
          { kind: "segment", from: [-0.5, -0.866], to: [-1, 0], dashed: true, tone: "muted", step: 3 },
          { kind: "point", at: [-1, 0], label: "sum = −1", labelAt: "nw", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The cube roots of unity on the dashed unit circle. From the initial arm along the real axis to 1, an arm turns a third of a turn, 120°, to ω, another third to ω², and a third third back to 1: ω³ = 1.",
      view: { x: [-1.9, 1.9], y: [-1.5, 1.5] },
      elements: [
        ...initialArm(),
        { kind: "point", at: [1, 0], label: "1", labelAt: "se", step: 2 },
        { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 3 },
        { kind: "turn", r: 1, to: 120, label: "ω", labelAt: "nw", step: 4 },
        { kind: "turn", r: 1, from: 120, to: 240, label: "ω²", labelAt: "sw", step: 5 },
        { kind: "turn", r: 1, from: 240, to: 360, label: "ω³ = 1", labelAt: "ne", step: 6 },
      ],
    },
    visualSpec: t`The unit circle with $1$, $\omega$ and $\omega^2$ marked $120^\circ$ apart. Typing an exponent steps a marker round the three points, showing that only the remainder on division by 3 matters.`,
  },
  misconceptions: [
    {
      id: "C20-M1",
      mistake: t`Reducing the exponent mod 4, as for powers of $i$`,
      remediation: t`$\omega$ repeats every **3**, not 4: use the remainder on division by 3.`,
      fallback: { kind: "none" },
    },
    {
      id: "C20-M2",
      mistake: t`$\omega^3 = -1$`,
      remediation: t`$\omega$ is a cube root of **1**: $\omega^3 = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C20-M3",
      mistake: t`$\omega^2 = -\omega$`,
      remediation: t`$\omega^2 = \bar\omega$, the conjugate, not $-\omega$. If you need it in terms of $\omega$, use $\omega^2 = -1 - \omega$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C20-M4",
      mistake: "An off-by-one slip when reducing a power",
      remediation: t`Remainder $r$ means $\omega^n = \omega^r$ exactly: remainder 1 is $\omega$, remainder 2 is $\omega^2$, remainder 0 is $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C20-M5",
      mistake: t`$\omega + \omega^2 = 1$`,
      remediation: t`The three cube roots add to zero, so $\omega + \omega^2 = -1$.`,
      fallback: { kind: "concept", id: "C19" },
    },
  ],
  items: [
    {
      id: "C20-Q1",
      source: { kind: "authored" },
      stem: t`$\omega^{100} = ?$`,
      verify: { kind: "value", inputs: { e: "omega**100" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C20-M1", value: "1" },
        { key: "B", text: t`$\omega^{2}$`, correct: false, misconceptionId: "C20-M4", value: "omega**2" },
        { key: "C", text: t`$\omega$`, correct: true, value: "omega" },
        { key: "D", text: t`$- \omega$`, correct: false, misconceptionId: "C20-M2", value: "-omega" },
      ],
      solution: {
        steps: [
          t`Divide by 3: $100 = 3 \times 33 + 1$, so the remainder is $1$.`,
          t`$\omega^{100} = (\omega^3)^{33}\,\omega = \omega$.`,
        ],
        figure: {
          alt: "The cube roots of unity, a third of a turn apart. 100 has remainder 1 on division by 3, so ω¹⁰⁰ is 1 third of a turn round from 1: ω.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "point", at: [-0.5, 0.866], tone: "muted" },
            { kind: "point", at: [-0.5, -0.866], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 120, label: "1 third of a turn", labelAt: "ne", step: 1 },
            { kind: "point", at: [-0.5, 0.866], label: "ω¹⁰⁰ = ω", labelAt: "nw", step: 2 },
          ],
        },
      },
    },
    {
      id: "C20-Q2",
      source: { kind: "authored" },
      stem: t`$\omega^{101} = ?$`,
      verify: { kind: "value", inputs: { e: "omega**101" } },
      options: [
        { key: "A", text: t`$- \omega^{2}$`, correct: false, misconceptionId: "C20-M2", value: "-omega**2" },
        { key: "B", text: t`$\omega$`, correct: false, misconceptionId: "C20-M1", value: "omega" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C20-M4", value: "1" },
        { key: "D", text: t`$\omega^{2}$`, correct: true, value: "omega**2" },
      ],
      solution: {
        steps: [
          t`Divide by 3: $101 = 3 \times 33 + 2$, so the remainder is $2$.`,
          t`$\omega^{101} = (\omega^3)^{33}\,\omega^2 = \omega^2$.`,
        ],
        figure: {
          alt: "The cube roots of unity, a third of a turn apart. 101 has remainder 2 on division by 3, so ω¹⁰¹ is 2 thirds of a turn round from 1: ω².",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "point", at: [-0.5, 0.866], tone: "muted" },
            { kind: "point", at: [-0.5, -0.866], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 1, from: 0, to: 240, label: "2 thirds of a turn", labelAt: "ne", step: 1 },
            { kind: "point", at: [-0.5, -0.866], label: "ω¹⁰¹ = ω²", labelAt: "sw", step: 2 },
          ],
        },
      },
    },
    {
      id: "C20-Q3",
      source: { kind: "authored" },
      stem: t`$\omega^2 + \omega^4 = ?$`,
      verify: { kind: "value", inputs: { e: "omega**2 + omega**4" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C20-M3", value: "0" },
        { key: "C", text: t`$\omega^2 - \omega$`, correct: false, misconceptionId: "C20-M2", value: "omega*(omega - 1)" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C20-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`$\omega^4 = \omega^3 \cdot \omega = \omega$.`,
          t`So $\omega^2 + \omega^4 = \omega^2 + \omega = -1$, from $1 + \omega + \omega^2 = 0$.`,
        ],
      },
    },
    {
      id: "C20-Q4",
      source: { kind: "authored" },
      stem: t`$1 + \omega^2 + \omega^7 = ?$`,
      verify: { kind: "value", inputs: { e: "1 + omega**2 + omega**7" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C20-M5", value: "2" },
        { key: "B", text: t`$0$`, correct: true, value: "0" },
        { key: "C", text: t`$\omega^{2} + 2$`, correct: false, misconceptionId: "C20-M1", value: "omega**2 + 2" },
        { key: "D", text: t`$2 \omega^{2} + 1$`, correct: false, misconceptionId: "C20-M4", value: "2*omega**2 + 1" },
      ],
      solution: {
        steps: [
          t`$7 = 3 \times 2 + 1$, so $\omega^7 = \omega$.`,
          t`So $1 + \omega^2 + \omega^7 = 1 + \omega^2 + \omega = 0$.`,
        ],
      },
    },
    {
      id: "C20-Q5",
      source: { kind: "authored" },
      stem: t`$(1 - \omega)(1 - \omega^2) = ?$`,
      verify: { kind: "value", inputs: { e: "(1 - omega)*(1 - omega**2)" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C20-M5", value: "1" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C20-M3", value: "2" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$1 - \omega^{2}$`, correct: false, misconceptionId: "C20-M4", value: "1 - omega**2" },
      ],
      solution: {
        steps: [
          t`Multiply out: $(1 - \omega)(1 - \omega^2) = 1 - \omega^2 - \omega + \omega^3$.`,
          t`Use $\omega^3 = 1$ and $\omega + \omega^2 = -1$: $1 - (-1) + 1 = 3$.`,
        ],
      },
    },
  ],
};
