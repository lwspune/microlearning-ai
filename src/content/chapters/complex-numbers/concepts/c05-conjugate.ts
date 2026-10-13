import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Take $3 + 4i$ and $3 - 4i$. Add them, then multiply them. **What do the two answers have in common?**`,
    reveal: t`Both are real: the sum is $6$ and the product is $9 + 16 = 25$. A number and its conjugate always combine into real numbers.`,
  },
  explanation: {
    intuition: t`The conjugate $\bar z$ keeps the real part and flips the sign of the imaginary part. On the Argand plane it is the mirror image of $z$ across the real axis. Adding a number to its conjugate, or multiplying the two, cancels the imaginary parts, so the result is real.`,
    formal: t`For $z = a + ib$: $\bar z = a - ib$.
- $z + \bar z = 2a = 2\operatorname{Re} z$
- $z - \bar z = 2ib = 2i\operatorname{Im} z$ (keep the $i$)
- $z\bar z = a^2 + b^2$, a real number that is never negative
- $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$ and $\overline{z_1 z_2} = \bar z_1\,\bar z_2$. Conjugate every factor, or conjugate the final answer; never just one factor.`,
    worked: {
      prompt: t`For $z = 1 - 6i$, find $z + \bar z$ and $z\bar z$.`,
      steps: [
        t`Flip the sign of the imaginary part: $\bar z = 1 + 6i$.`,
        t`Sum: $(1 - 6i) + (1 + 6i) = 2$.`,
        t`Product: $(1 - 6i)(1 + 6i) = 1 - 36i^2 = 1 + 36 = 37$.`,
      ],
      answer: t`$z + \bar z = 2$ and $z\bar z = 37$.`,
    },
    visualSpec: t`A draggable point $z$ with its mirror image $\bar z$ across the real axis. Live readouts show $z + \bar z$ and $z\bar z$; both stay on the real axis wherever $z$ is dragged.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Flipping the sign of the real part instead: $\overline{a + ib} = -a + ib$`,
      remediation: t`The conjugate keeps the real part and flips the sign of the imaginary part: $\overline{a + ib} = a - ib$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: t`Flipping both signs: $\overline{a + ib} = -a - ib$`,
      remediation: t`That's $-z$, not $\bar z$. Only the imaginary part changes sign.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`$z\bar z = a^2 - b^2$`,
      remediation: t`$(a + ib)(a - ib) = a^2 - i^2b^2 = a^2 + b^2$. The $i^2$ turns the minus into a plus, so $z\bar z$ is never negative.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgetting the $i$: $z - \bar z = 2b$`,
      remediation: t`$z - \bar z = (a + ib) - (a - ib) = 2ib$. The answer is purely imaginary: keep the $i$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: "Conjugating only one factor of a product",
      remediation: t`$\overline{z_1 z_2} = \bar z_1\,\bar z_2$: conjugate both factors, or multiply first and then conjugate the result.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "authored" },
      stem: t`If $z = 5 - 2i$, then $z\bar z = ?$`,
      verify: { kind: "value", inputs: { z: "5-2*I" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$29$`, correct: true, value: "29" },
        { key: "B", text: t`$21$`, correct: false, misconceptionId: "C05-M3", value: "21" },
        { key: "C", text: t`$-29$`, correct: false, misconceptionId: "C05-M1", value: "-29" },
        { key: "D", text: t`$-21 + 20i$`, correct: false, misconceptionId: "C05-M2", value: "-21+20*I" },
      ],
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`If $z = 2 + 7i$, then $z - \bar z = ?$`,
      verify: { kind: "value", inputs: { z: "2+7*I" }, params: { op: "zminuszbar" } },
      options: [
        { key: "A", text: t`$14i$`, correct: true, value: "14*I" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C05-M4", value: "14" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C05-M1", value: "4" },
        { key: "D", text: t`$4 + 14i$`, correct: false, misconceptionId: "C05-M2", value: "4+14*I" },
      ],
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`$\overline{(1 + 2i)(3 - i)} = ?$`,
      verify: { kind: "value", inputs: { z1: "1+2*I", z2: "3-I" }, params: { op: "conjprod" } },
      options: [
        { key: "A", text: t`$5 - 5i$`, correct: true, value: "5-5*I" },
        { key: "B", text: t`$1 - 7i$`, correct: false, misconceptionId: "C05-M5", value: "1-7*I" },
        { key: "C", text: t`$-5 + 5i$`, correct: false, misconceptionId: "C05-M1", value: "-5+5*I" },
        { key: "D", text: t`$-5 - 5i$`, correct: false, misconceptionId: "C05-M2", value: "-5-5*I" },
      ],
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`If $z = -1 + 3i$, then $z\bar z = ?$`,
      verify: { kind: "value", inputs: { z: "-1+3*I" }, params: { op: "zzbar" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$-8$`, correct: false, misconceptionId: "C05-M3", value: "-8" },
        { key: "C", text: t`$-10$`, correct: false, misconceptionId: "C05-M1", value: "-10" },
        { key: "D", text: t`$8 + 6i$`, correct: false, misconceptionId: "C05-M2", value: "8+6*I" },
      ],
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`$\overline{(2 - i)(4 + i)} = ?$`,
      verify: { kind: "value", inputs: { z1: "2-I", z2: "4+I" }, params: { op: "conjprod" } },
      options: [
        { key: "A", text: t`$9 + 2i$`, correct: true, value: "9+2*I" },
        { key: "B", text: t`$7 + 6i$`, correct: false, misconceptionId: "C05-M5", value: "7+6*I" },
        { key: "C", text: t`$-9 - 2i$`, correct: false, misconceptionId: "C05-M1", value: "-9-2*I" },
        { key: "D", text: t`$-9 + 2i$`, correct: false, misconceptionId: "C05-M2", value: "-9+2*I" },
      ],
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`If $z = 4 - i$, then $z - \bar z = ?$`,
      verify: { kind: "value", inputs: { z: "4-I" }, params: { op: "zminuszbar" } },
      options: [
        { key: "A", text: t`$-2i$`, correct: true, value: "-2*I" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C05-M4", value: "-2" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C05-M1", value: "8" },
        { key: "D", text: t`$8 - 2i$`, correct: false, misconceptionId: "C05-M2", value: "8-2*I" },
      ],
    },
  ],
};
