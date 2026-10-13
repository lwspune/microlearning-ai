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
      ],
    },
  ],
};
