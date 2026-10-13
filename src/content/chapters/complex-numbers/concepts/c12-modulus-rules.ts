import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`$\lvert 3 + 4i \rvert = 5$ and $\lvert 1 + i \rvert = \sqrt2$. **Guess $\lvert (3 + 4i)(1 + i) \rvert$ without multiplying out.**`,
    reveal: t`$5\sqrt2$: moduli multiply. Check: $(3 + 4i)(1 + i) = -1 + 7i$, and $\lvert -1 + 7i \rvert = \sqrt{50} = 5\sqrt2$.`,
  },
  explanation: {
    intuition: t`Multiplying complex numbers multiplies their distances from the origin. So the modulus works neatly with products, quotients and powers: take the modulus of each piece, then multiply, divide or raise to the power. It does **not** split over sums.`,
    formal: t`- $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$ and $\left\lvert \dfrac{z_1}{z_2} \right\rvert = \dfrac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$
- $\lvert z^n \rvert = \lvert z \rvert^n$ (a power, not $n$ times)
- $\lvert kz \rvert = \lvert k \rvert\,\lvert z \rvert$ for real $k$: a modulus is never negative
- $z\bar z = \lvert z \rvert^2$ and $\lvert \bar z \rvert = \lvert z \rvert$

None of this works for sums: $\lvert z_1 + z_2 \rvert$ is usually less than $\lvert z_1 \rvert + \lvert z_2 \rvert$.`,
    worked: {
      prompt: t`Find $\lvert (2 + i)^3(1 - i) \rvert$.`,
      steps: [
        t`Take the modulus of each piece: $\lvert 2 + i \rvert = \sqrt5$ and $\lvert 1 - i \rvert = \sqrt2$.`,
        t`A power raises the modulus: $\lvert (2 + i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$.`,
        t`Multiply: $5\sqrt5\cdot\sqrt2 = 5\sqrt{10}$.`,
      ],
      answer: t`$5\sqrt{10}$`,
    },
    visualSpec: t`Two arrows $z_1$ and $z_2$ with their lengths shown. Their product appears as a third arrow whose length is the product of the two lengths; dragging either arrow updates all three.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`$z\bar z = \lvert z \rvert$`,
      remediation: t`$z\bar z = x^2 + y^2 = \lvert z \rvert^2$: the **square** of the modulus.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C12-M2",
      mistake: t`Adding moduli in a product: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert + \lvert z_2 \rvert$`,
      remediation: t`Moduli multiply: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M3",
      mistake: t`$\lvert z^n \rvert = n\lvert z \rvert$`,
      remediation: t`A power raises the modulus to that power: $\lvert z^n \rvert = \lvert z \rvert^n$.`,
      fallback: { kind: "ext", topic: "laws of exponents" },
    },
    {
      id: "C12-M4",
      mistake: "Subtracting moduli in a quotient",
      remediation: t`Moduli divide: $\left\lvert \dfrac{z_1}{z_2} \right\rvert = \dfrac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M5",
      mistake: t`Keeping the sign of a negative real factor: $\lvert -kz \rvert = -k\lvert z \rvert$`,
      remediation: t`A modulus is a distance, never negative: $\lvert -2 \rvert = 2$.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "authored" },
      stem: t`$\lvert (3 + 4i)^2(1 - 2i) \rvert = ?$`,
      verify: { kind: "value", inputs: { z1: "3+4*I", n: "2", z2: "1-2*I" }, params: { op: "prod_pow" } },
      options: [
        { key: "A", text: t`$25 \sqrt{5}$`, correct: true, value: "25*sqrt(5)" },
        { key: "B", text: t`$\sqrt{5} + 25$`, correct: false, misconceptionId: "C12-M2", value: "sqrt(5) + 25" },
        { key: "C", text: t`$10 \sqrt{5}$`, correct: false, misconceptionId: "C12-M3", value: "10*sqrt(5)" },
      ],
    },
    {
      id: "C12-Q2",
      source: { kind: "authored" },
      stem: t`$\lvert (1 + i)^4(3 + 4i) \rvert = ?$`,
      verify: { kind: "value", inputs: { z1: "1+I", n: "4", z2: "3+4*I" }, params: { op: "prod_pow" } },
      options: [
        { key: "A", text: t`$20 \sqrt{2}$`, correct: false, misconceptionId: "C12-M3", value: "20*sqrt(2)" },
        { key: "B", text: t`$20$`, correct: true, value: "20" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C12-M2", value: "9" },
      ],
    },
    {
      id: "C12-Q3",
      source: { kind: "authored" },
      stem: t`$\left\lvert \dfrac{(2 - i)^3}{1 + 2i} \right\rvert = ?$`,
      verify: { kind: "value", inputs: { z1: "2-I", n: "3", z2: "1+2*I" }, params: { op: "quot_pow" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C12-M3", value: "3" },
        { key: "C", text: t`$4 \sqrt{5}$`, correct: false, misconceptionId: "C12-M4", value: "4*sqrt(5)" },
      ],
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 5$, then $\lvert -2z^3 \rvert = ?$`,
      verify: { kind: "value", inputs: { k: "-2", n: "3", r: "5" }, params: { op: "scale_pow" } },
      options: [
        { key: "A", text: t`$30$`, correct: false, misconceptionId: "C12-M3", value: "30" },
        { key: "B", text: t`$-250$`, correct: false, misconceptionId: "C12-M5", value: "-250" },
        { key: "C", text: t`$250$`, correct: true, value: "250" },
      ],
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`If $\lvert z \rvert = 3$, then $\lvert z^3 \rvert + z\bar z = ?$`,
      verify: { kind: "value", inputs: { n: "3", r: "3" }, params: { op: "pow_plus_zzbar" } },
      options: [
        { key: "A", text: t`$30$`, correct: false, misconceptionId: "C12-M1", value: "30" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C12-M3", value: "18" },
        { key: "C", text: t`$36$`, correct: true, value: "36" },
      ],
    },
  ],
};
