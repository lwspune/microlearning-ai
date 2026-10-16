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
    intuition: [
      t`Recall: the **modulus** $\lvert z \rvert$ is the length of the arrow from $0$ to $z$: $\lvert 1 + i \rvert = \sqrt2$.`,
      t`The arrow to $2i$ is $2$ long: $\lvert 2i \rvert = 2$.`,
      t`Multiply the two numbers: $(1 + i) \cdot 2i = -2 + 2i$.`,
      t`Its length is $\sqrt{4 + 4} = 2\sqrt2$, which is $\sqrt2 \times 2$.`,
      t`So multiplying multiplies the lengths, dividing divides them, and a power like $z \cdot z \cdot z$ raises the length to that power.`,
      t`Sums are different: adding complex numbers does **not** add their lengths.`,
    ],
    formal: [
      {
        title: "Modulus of a product",
        points: [
          t`Take $z_1 = 2 + i$: its modulus is $\sqrt{4 + 1} = \sqrt5$.`,
          t`Take $z_2 = 1 + 2i$: its modulus is $\sqrt{1 + 4} = \sqrt5$ too.`,
          t`Their product is $(2 + i)(1 + 2i) = 5i$.`,
          t`Its modulus is $5$, which is $\sqrt5 \times \sqrt5$.`,
          t`This holds for any two complex numbers: $\lvert z_1z_2 \rvert = \lvert z_1 \rvert\,\lvert z_2 \rvert$.`,
          t`Moduli multiply: $\lvert z_1z_2 \rvert$ is not $\lvert z_1 \rvert + \lvert z_2 \rvert$.`,
        ],
        figure: {
          alt: "The arrows to 2 + i and 1 + 2i both have length √5. Their product, 5i, has length 5 = √5 × √5.",
          view: { x: [-1, 4.2], y: [-0.8, 5.8] },
          elements: [
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [1, 0.5], label: "√5", labelAt: "se", tone: "muted", step: 1 },
            { kind: "vector", to: [1, 2], label: "1 + 2i", labelAt: "e", tone: "muted", step: 2 },
            { kind: "label", at: [0.5, 1], label: "√5", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "vector", to: [0, 5], label: "5i", labelAt: "e", step: 3 },
            { kind: "label", at: [0, 3.5], label: "5", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "Modulus of a quotient",
        points: [
          t`A **quotient** is the answer to a division, such as $\frac{z_1}{z_2}$ with $z_2 \ne 0$.`,
          t`Take $z_1 = -1 + 3i$: its modulus is $\sqrt{1 + 9} = \sqrt{10}$.`,
          t`Take $z_2 = 1 - i$: its modulus is $\sqrt{1 + 1} = \sqrt2$.`,
          t`Their quotient is $\frac{-1 + 3i}{1 - i} = -2 + i$, of modulus $\sqrt5$.`,
          t`And $\sqrt5 = \frac{\sqrt{10}}{\sqrt2}$: so $\left\lvert \frac{z_1}{z_2} \right\rvert = \frac{\lvert z_1 \rvert}{\lvert z_2 \rvert}$.`,
          t`Moduli divide: don't subtract them.`,
        ],
        figure: {
          alt: "The arrow to −1 + 3i has length √10 and the arrow to 1 − i has length √2. Their quotient, −2 + i, has length √5 = √10 ÷ √2.",
          view: { x: [-3.2, 2.4], y: [-1.8, 3.6] },
          elements: [
            { kind: "vector", to: [-1, 3], label: "−1 + 3i", labelAt: "w", tone: "muted", step: 2 },
            { kind: "label", at: [-0.5, 1.5], label: "√10", labelAt: "w", tone: "muted", step: 2 },
            { kind: "vector", to: [1, -1], label: "1 − i", labelAt: "e", tone: "muted", step: 3 },
            { kind: "label", at: [0.5, -0.5], label: "√2", labelAt: "sw", tone: "muted", step: 3 },
            { kind: "vector", to: [-2, 1], label: "−2 + i", labelAt: "w", step: 4 },
            { kind: "label", at: [-1, 0.5], label: "√5", labelAt: "sw", step: 4 },
          ],
        },
      },
      {
        title: "Modulus of a power",
        points: [
          t`A **power** $z^n$ is $n$ copies of $z$ multiplied together, for a whole number $n$.`,
          t`Take $z = \sqrt3 + i$: its modulus is $\sqrt{3 + 1} = 2$.`,
          t`Then $z^2 = 2 + 2\sqrt3\,i$, of modulus $\sqrt{4 + 12} = 4$, which is $2^2$.`,
          t`And $z^3 = 8i$, of modulus $8$, which is $2^3$.`,
          t`Each copy of $z$ multiplies the length by $\lvert z \rvert$, so $\lvert z^n \rvert = \lvert z \rvert^n$.`,
          t`It is a power, not $n$ times: $\lvert z^n \rvert$ is not $n\lvert z \rvert$.`,
        ],
        figure: {
          alt: "The arrow to √3 + i has length 2. Its square, 2 + 2√3i, has length 4, and its cube, 8i, has length 8: each power doubles the length.",
          view: { x: [-1.2, 4.8], y: [-0.8, 8.8] },
          elements: [
            { kind: "vector", to: [1.732, 1], label: "√3 + i", labelAt: "e", tone: "muted", step: 2 },
            { kind: "label", at: [0.866, 0.5], label: "2", labelAt: "se", tone: "muted", step: 2 },
            { kind: "vector", to: [2, 3.464], label: "2 + 2√3i", labelAt: "e", tone: "muted", step: 3 },
            { kind: "label", at: [1, 1.732], label: "4", labelAt: "nw", tone: "muted", step: 3 },
            { kind: "vector", to: [0, 8], label: "8i", labelAt: "e", step: 4 },
            { kind: "label", at: [0, 5.5], label: "8", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "A real number times z",
        points: [
          t`Take $z = 2 + i$: its modulus is $\sqrt5$.`,
          t`Then $-2z = -4 - 2i$: its arrow points the opposite way and is twice as long.`,
          t`Its modulus is $\sqrt{16 + 4} = 2\sqrt5$, not $-2\sqrt5$.`,
          t`For a real $k$, $\lvert k \rvert$ is $k$ without its sign: $\lvert -2 \rvert = 2$.`,
          t`So $\lvert kz \rvert = \lvert k \rvert\,\lvert z \rvert$ for every real $k$: a modulus is a distance, never negative.`,
          t`With a power, it sits on $z$ alone: $\lvert kz^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$.`,
        ],
        figure: {
          alt: "The arrow to 2 + i has length √5. The arrow to −2 times it, −4 − 2i, points the opposite way and has length 2√5, a positive length.",
          view: { x: [-5.2, 3.4], y: [-2.8, 2] },
          elements: [
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [1, 0.5], label: "√5", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "vector", to: [-4, -2], label: "−4 − 2i", labelAt: "s", step: 2 },
            { kind: "label", at: [-2, -1], label: "2√5", labelAt: "se", step: 3 },
          ],
        },
      },
      {
        title: "Conjugate and modulus",
        points: [
          t`Recall: the **conjugate** of $z = a + ib$ is $\bar z = a - ib$, its mirror image in the real axis.`,
          t`A mirror image is as far from $0$ as the original, so $\lvert \bar z \rvert = \lvert z \rvert$.`,
          t`For $z = 4 + 3i$, both $z$ and $\bar z = 4 - 3i$ have modulus $5$.`,
          t`Recall also: $z\bar z = a^2 + b^2$, a real number.`,
          t`By Pythagoras, that is the square of the distance: $z\bar z = \lvert z \rvert^2$.`,
          t`Here $z\bar z = 16 + 9 = 25$: the **square** of $\lvert z \rvert = 5$, not $5$ itself.`,
        ],
        figure: {
          alt: "z = 4 + 3i and its mirror image in the real axis, z̄ = 4 − 3i. Both arrows have length 5, and z z̄ = 25 = 5².",
          view: { x: [-1.5, 9], y: [-4, 4] },
          elements: [
            { kind: "point", at: [4, 3], label: "z = 4 + 3i", labelAt: "ne" },
            { kind: "segment", from: [4, 3], to: [4, -3], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [4, -3], label: "z̄ = 4 − 3i", labelAt: "se", tone: "good", step: 1 },
            { kind: "vector", to: [4, 3], tone: "muted", step: 2 },
            { kind: "vector", to: [4, -3], tone: "muted", step: 2 },
            { kind: "label", at: [2, 1.5], label: "5", labelAt: "nw", step: 3 },
            { kind: "label", at: [2, -1.5], label: "5", labelAt: "sw", step: 3 },
            { kind: "label", at: [4.5, -1], label: "z z̄ = 25 = 5²", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Sums do not split",
        points: [
          t`Take $z_1 = 4$, of modulus $4$.`,
          t`Add $z_2 = 3i$, of modulus $3$, by placing its arrow at the tip of $z_1$.`,
          t`The sum $z_1 + z_2 = 4 + 3i$ is the arrow straight from $0$ to the end.`,
          t`Its modulus is $\sqrt{16 + 9} = 5$, not $4 + 3 = 7$.`,
          t`Going straight is shorter than the bent path along $z_1$ and then $z_2$.`,
          t`So $\lvert z_1 + z_2 \rvert$ is usually less than $\lvert z_1 \rvert + \lvert z_2 \rvert$: moduli do not add.`,
        ],
        figure: {
          alt: "The arrow to 4, then the arrow 3i placed at its tip, reaching 4 + 3i. The straight arrow from 0 to 4 + 3i has length 5, shorter than the bent path of length 4 + 3 = 7.",
          view: { x: [-1, 6.4], y: [-0.8, 4] },
          elements: [
            { kind: "vector", to: [4, 0], tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "|z₁| = 4", labelAt: "n", tone: "muted", step: 1 },
            { kind: "vector", from: [4, 0], to: [4, 3], tone: "muted", step: 2 },
            { kind: "label", at: [4, 1.5], label: "|z₂| = 3", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", to: [4, 3], label: "4 + 3i", labelAt: "n", step: 3 },
            { kind: "label", at: [2, 1.5], label: "5", labelAt: "nw", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find $\lvert (2 + i)^3(1 - i) \rvert$.`,
      steps: [
        t`Take the modulus of each piece: $\lvert 2 + i \rvert = \sqrt5$ and $\lvert 1 - i \rvert = \sqrt2$.`,
        t`A power raises the modulus: $\lvert (2 + i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$.`,
        t`Multiply: $5\sqrt5\cdot\sqrt2 = 5\sqrt{10}$.`,
      ],
      answer: t`$5\sqrt{10}$`,
      figure: {
        alt: "2 + i has length √5 and 1 − i has length √2. (2 + i)³ = 2 + 11i has length 5√5, and the whole product, 13 + 9i, has length 5√10.",
        view: { x: [-1, 15], y: [-2.5, 12.5] },
        elements: [
          { kind: "vector", to: [2, 1], label: "√5", labelAt: "e", tone: "muted", step: 1 },
          { kind: "vector", to: [1, -1], label: "√2", labelAt: "se", tone: "muted", step: 1 },
          { kind: "vector", to: [2, 11], label: "(2 + i)³: 5√5", labelAt: "e", tone: "muted", step: 2 },
          { kind: "vector", to: [13, 9], label: "product: 5√10", labelAt: "nw", step: 3 },
        ],
      },
    },
    figure: {
      alt: "1 + i has length √2 and 2i has length 2. Their product, −2 + 2i, has length 2√2 = √2 × 2: the lengths multiply.",
      view: { x: [-3.2, 2.4], y: [-0.8, 3.2] },
      elements: [
        { kind: "vector", to: [1, 1], label: "1 + i", labelAt: "e", tone: "muted", step: 1 },
        { kind: "label", at: [0.5, 0.5], label: "√2", labelAt: "se", tone: "muted", step: 1 },
        { kind: "vector", to: [0, 2], label: "2i", labelAt: "e", tone: "muted", step: 2 },
        { kind: "label", at: [0, 1.5], label: "2", labelAt: "e", tone: "muted", step: 2 },
        { kind: "vector", to: [-2, 2], label: "−2 + 2i", labelAt: "n", step: 3 },
        { kind: "label", at: [-1, 1], label: "2√2", labelAt: "sw", step: 4 },
      ],
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
    {
      id: "C12-M6",
      mistake: t`Applying the power to every factor: $\lvert k z^n \rvert = (\lvert k \rvert\,\lvert z \rvert)^n$`,
      remediation: t`The power belongs only to the factor it sits on: $\lvert k z^n \rvert = \lvert k \rvert\,\lvert z \rvert^n$.`,
      fallback: { kind: "ext", topic: "order of operations" },
    },
    {
      id: "C12-M7",
      mistake: t`Adding exponents across a sum: $r^3 + r^2 = r^5$`,
      remediation: t`Exponents add only in a product, $r^3 \cdot r^2 = r^5$. A sum stays a sum: $3^3 + 3^2 = 27 + 9$.`,
      fallback: { kind: "ext", topic: "laws of exponents" },
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
        { key: "D", text: t`$125$`, correct: false, misconceptionId: "C12-M6", value: "125" },
      ],
      solution: {
        steps: [
          t`Take the modulus of each piece: $\lvert 3 + 4i \rvert = 5$ and $\lvert 1 - 2i \rvert = \sqrt5$.`,
          t`A power raises the modulus: $\lvert (3 + 4i)^2 \rvert = 5^2 = 25$.`,
          t`Multiply: $25\sqrt5$.`,
        ],
      },
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
        { key: "D", text: t`$2500$`, correct: false, misconceptionId: "C12-M6", value: "2500" },
      ],
      solution: {
        steps: [
          t`Take the modulus of each piece: $\lvert 1 + i \rvert = \sqrt2$ and $\lvert 3 + 4i \rvert = 5$.`,
          t`A power raises the modulus: $\lvert (1 + i)^4 \rvert = (\sqrt2)^4 = 4$.`,
          t`Multiply: $4 \times 5 = 20$.`,
        ],
      },
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
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C12-M6", value: "1" },
      ],
      solution: {
        steps: [
          t`Take the modulus of each piece: $\lvert 2 - i \rvert = \sqrt5$ and $\lvert 1 + 2i \rvert = \sqrt5$.`,
          t`A power raises the modulus: $\lvert (2 - i)^3 \rvert = (\sqrt5)^3 = 5\sqrt5$.`,
          t`Divide: $\dfrac{5\sqrt5}{\sqrt5} = 5$.`,
        ],
      },
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
        { key: "D", text: t`$1000$`, correct: false, misconceptionId: "C12-M6", value: "1000" },
      ],
      solution: {
        steps: [
          t`A real factor contributes its size: $\lvert -2 \rvert = 2$.`,
          t`A power raises the modulus: $\lvert z^3 \rvert = 5^3 = 125$.`,
          t`Multiply: $2 \times 125 = 250$. A modulus is never negative.`,
        ],
      },
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
        { key: "D", text: t`$243$`, correct: false, misconceptionId: "C12-M7", value: "243" },
      ],
      solution: {
        steps: [
          t`A power raises the modulus: $\lvert z^3 \rvert = 3^3 = 27$.`,
          t`$z\bar z = \lvert z \rvert^2 = 9$.`,
          t`Add: $27 + 9 = 36$. Adding is fine here: these are two real numbers.`,
        ],
      },
    },
  ],
};
