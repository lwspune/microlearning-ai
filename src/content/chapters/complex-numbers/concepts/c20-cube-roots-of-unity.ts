import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c20: Concept = {
  id: "C20",
  status: "approved",
  hook: {
    prompt: t`Solve $z^3 = 1$. **Is $z = 1$ the only answer?**`,
    reveal: t`No. $z^3 - 1 = (z - 1)(z^2 + z + 1)$, and the quadratic gives two more roots, $\dfrac{-1 \pm i\sqrt3}{2}$. One is called $\omega$; the other is $\omega^2$.`,
  },
  explanation: {
    intuition: t`The cube roots of 1 are $1$, $\omega$ and $\omega^2$, equally spaced round the unit circle. Two facts do almost all the work: $\omega^3 = 1$, so powers of $\omega$ repeat every 3; and the three roots add to zero, $1 + \omega + \omega^2 = 0$.`,
    formal: t`$\omega = \dfrac{-1 + i\sqrt3}{2}$ and $\omega^2 = \dfrac{-1 - i\sqrt3}{2} = \bar\omega$.
- $\omega^3 = 1$, so $\omega^n = \omega^r$, where $r$ is the remainder of $n$ on division by **3**
- $1 + \omega + \omega^2 = 0$, so $\omega + \omega^2 = -1$ and $1 + \omega = -\omega^2$

Note that $\omega^2 = \bar\omega$, but $\omega^2 \ne -\omega$.`,
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
      alt: "The cube roots of unity: 1, ω and ω² on the unit circle, a third of a turn (2π/3) apart. They form an equilateral triangle centred on the origin, so they add to zero.",
      view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
        { kind: "point", at: [1, 0], label: "1", labelAt: "ne", step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 120, label: "2π/3", step: 2 },
        { kind: "point", at: [-0.5, 0.866], label: "ω", labelAt: "nw", step: 2 },
        { kind: "point", at: [-0.5, -0.866], label: "ω²", labelAt: "sw", step: 3 },
        { kind: "segment", from: [1, 0], to: [-0.5, 0.866], dashed: true, tone: "muted", step: 4 },
        { kind: "segment", from: [-0.5, 0.866], to: [-0.5, -0.866], dashed: true, tone: "muted", step: 4 },
        { kind: "segment", from: [-0.5, -0.866], to: [1, 0], dashed: true, tone: "muted", step: 4 },
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
