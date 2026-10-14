import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c16: Concept = {
  id: "C16",
  status: "approved",
  hook: {
    prompt: t`$i \times i = -1$. **In terms of direction, what happened to the angle $\dfrac\pi2$?**`,
    reveal: t`It doubled: $\dfrac\pi2 + \dfrac\pi2 = \pi$, the direction of $-1$. Multiplying adds angles.`,
  },
  explanation: {
    intuition: t`In polar form multiplication is simple: multiply the lengths and add the angles. Division undoes it: divide the lengths and subtract the angles, top minus bottom.`,
    formal: t`For $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$:
$$z_1z_2 = r_1r_2\big(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\big)$$
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\big(\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\big)$$

So $\arg(z_1z_2) = \arg z_1 + \arg z_2$ and $\arg\dfrac{z_1}{z_2} = \arg z_1 - \arg z_2$, up to a multiple of $2\pi$. For the principal value, bring the answer back into $(-\pi, \pi]$.`,
    worked: {
      prompt: t`Find $\dfrac{6\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)}{3\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)}$.`,
      steps: [
        t`Divide the moduli: $\dfrac63 = 2$.`,
        t`Subtract the arguments, top minus bottom: $\dfrac{2\pi}3 - \dfrac\pi6 = \dfrac\pi2$.`,
        t`So the quotient is $2\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right) = 2i$.`,
      ],
      answer: t`$2i$`,
      figure: {
        alt: "The top number has length 6 at angle 2π/3 and the bottom has length 3 at angle π/6. The quotient has length 6 ÷ 3 = 2, at the angle between them, π/2: it is 2i.",
        view: { x: [-4, 4], y: [-1, 6.3] },
        elements: [
          { kind: "vector", to: [-3, 5.196], tone: "muted" },
          { kind: "label", at: [-1.5, 2.598], label: "top: length 6", labelAt: "w", tone: "muted" },
          { kind: "vector", to: [2.598, 1.5], tone: "muted" },
          { kind: "label", at: [1.299, 0.75], label: "bottom: length 3", labelAt: "se", tone: "muted" },
          { kind: "angle", at: [0, 0], from: 30, to: 120, label: "π/2", step: 2 },
          { kind: "vector", to: [0, 2], label: "2i", labelAt: "e", step: 3 },
        ],
      },
    },
    figure: {
      alt: "z₁ has length 2 at angle π/6, and z₂ has length 1.5 at angle π/3. Their product has length 2 × 1.5 = 3 at angle π/6 + π/3 = π/2: it is 3i.",
      view: { x: [-1.5, 3.2], y: [-0.6, 3.6] },
      elements: [
        { kind: "vector", to: [1.732, 1], label: "z₁", labelAt: "e", tone: "muted", step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 30, label: "π/6", tone: "muted", step: 1 },
        { kind: "vector", to: [0.75, 1.299], label: "z₂", labelAt: "nw", tone: "muted", step: 2 },
        { kind: "angle", at: [0, 0], from: 30, to: 90, label: "+ π/3", step: 3 },
        { kind: "vector", to: [0, 3], label: "z₁z₂ = 3i", labelAt: "e", step: 3 },
      ],
    },
    visualSpec: t`Two arrows $z_1$ and $z_2$ with their angles. Their product appears as a third arrow whose angle is the sum and whose length is the product; a toggle switches to the quotient.`,
  },
  misconceptions: [
    {
      id: "C16-M1",
      mistake: "Adding the moduli for a product (or subtracting them for a quotient)",
      remediation: "Lengths multiply for a product and divide for a quotient; only the **angles** add or subtract.",
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C16-M2",
      mistake: "Mixing up the angle rules: subtracting for a product, adding for a quotient",
      remediation: "Product: add the angles. Quotient: subtract them.",
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M3",
      mistake: "Subtracting the angles the wrong way round in a quotient",
      remediation: t`For $\dfrac{z_1}{z_2}$ the angle is $\theta_1 - \theta_2$: top minus bottom.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M4",
      mistake: t`Leaving an angle outside $(-\pi, \pi]$ as the principal argument`,
      remediation: t`Add or subtract $2\pi$ to bring it into $(-\pi, \pi]$: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$.`,
      fallback: { kind: "concept", id: "C14" },
    },
  ],
  items: [
    {
      id: "C16-Q1",
      source: { kind: "authored" },
      stem: t`$2\left(\cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3}\right)\cdot 3\left(\cos\dfrac{\pi}{6} + i\sin\dfrac{\pi}{6}\right) = ?$`,
      verify: { kind: "value", inputs: { z1: "2*(cos(pi/3)+I*sin(pi/3))", z2: "3*(cos(pi/6)+I*sin(pi/6))" }, params: { op: "prod" } },
      options: [
        { key: "A", text: t`$5\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: false, misconceptionId: "C16-M1", value: "5*I" },
        { key: "B", text: t`$6\left(\cos \frac{\pi}{6} + i\sin \frac{\pi}{6}\right)$`, correct: false, misconceptionId: "C16-M2", value: "3*sqrt(3) + 3*I" },
        { key: "C", text: t`$6\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: true, value: "6*I" },
      ],
      solution: {
        steps: [
          t`Multiply the moduli: $2 \times 3 = 6$.`,
          t`Add the arguments: $\dfrac\pi3 + \dfrac\pi6 = \dfrac\pi2$.`,
          t`So the product is $6\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$, which is $6i$.`,
        ],
      },
    },
    {
      id: "C16-Q2",
      source: { kind: "authored" },
      stem: t`$\dfrac{8\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right)}{2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)} = ?$`,
      verify: { kind: "value", inputs: { z1: "8*(cos(5*pi/6)+I*sin(5*pi/6))", z2: "2*(cos(pi/3)+I*sin(pi/3))" }, params: { op: "quot" } },
      options: [
        { key: "A", text: t`$4\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: true, value: "4*I" },
        { key: "B", text: t`$6\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: false, misconceptionId: "C16-M1", value: "6*I" },
        { key: "C", text: t`$4\left(\cos \left(- \frac{5 \pi}{6}\right) + i\sin \left(- \frac{5 \pi}{6}\right)\right)$`, correct: false, misconceptionId: "C16-M2", value: "-2*sqrt(3) - 2*I" },
        { key: "D", text: t`$4\left(\cos \left(- \frac{\pi}{2}\right) + i\sin \left(- \frac{\pi}{2}\right)\right)$`, correct: false, misconceptionId: "C16-M3", value: "-4*I" },
      ],
      solution: {
        steps: [
          t`Divide the moduli: $\dfrac82 = 4$.`,
          t`Subtract the arguments, top minus bottom: $\dfrac{5\pi}6 - \dfrac\pi3 = \dfrac\pi2$.`,
          t`So the quotient is $4\left(\cos\dfrac\pi2 + i\sin\dfrac\pi2\right)$, which is $4i$.`,
        ],
      },
    },
    {
      id: "C16-Q3",
      source: { kind: "authored" },
      stem: t`In polar form, $(1 + i)(\sqrt3 + i) = ?$`,
      verify: { kind: "value", inputs: { z1: "1+I", z2: "sqrt(3)+I" }, params: { op: "prod" } },
      options: [
        { key: "A", text: t`$\left(\sqrt{2} + 2\right)\left(\cos \frac{5 \pi}{12} + i\sin \frac{5 \pi}{12}\right)$`, correct: false, misconceptionId: "C16-M1", value: "(1 - I)*(-sqrt(2) - 1 + sqrt(3)*I + sqrt(6)*I)/2" },
        { key: "B", text: t`$2 \sqrt{2}\left(\cos \frac{\pi}{12} + i\sin \frac{\pi}{12}\right)$`, correct: false, misconceptionId: "C16-M2", value: "1 - I + sqrt(3)*(1 + I)" },
        { key: "C", text: t`$2 \sqrt{2}\left(\cos \frac{5 \pi}{12} + i\sin \frac{5 \pi}{12}\right)$`, correct: true, value: "-1 + I + sqrt(3)*(1 + I)" },
      ],
      solution: {
        steps: [
          t`Polar forms: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$ and $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$.`,
          t`Multiply the moduli: $\sqrt2 \times 2 = 2\sqrt2$.`,
          t`Add the arguments: $\dfrac\pi4 + \dfrac\pi6 = \dfrac{5\pi}{12}$, so the product is $2\sqrt2\left(\cos\dfrac{5\pi}{12} + i\sin\dfrac{5\pi}{12}\right)$.`,
        ],
      },
    },
    {
      id: "C16-Q4",
      source: { kind: "authored" },
      stem: t`In polar form, $\dfrac{1 + \sqrt3\,i}{1 + i} = ?$`,
      verify: { kind: "value", inputs: { z1: "1+sqrt(3)*I", z2: "1+I" }, params: { op: "quot" } },
      options: [
        { key: "A", text: t`$\sqrt{2}\left(\cos \frac{\pi}{12} + i\sin \frac{\pi}{12}\right)$`, correct: true, value: "(1 - I)*(1 + sqrt(3)*I)/2" },
        { key: "B", text: t`$\left(2 - \sqrt{2}\right)\left(\cos \frac{\pi}{12} + i\sin \frac{\pi}{12}\right)$`, correct: false, misconceptionId: "C16-M1", value: "(1 - I)*(-1 + sqrt(2) - sqrt(3)*I + sqrt(6)*I)/2" },
        { key: "C", text: t`$\sqrt{2}\left(\cos \frac{7 \pi}{12} + i\sin \frac{7 \pi}{12}\right)$`, correct: false, misconceptionId: "C16-M2", value: "(1 - I)*(-sqrt(3) + I)/2" },
        { key: "D", text: t`$\sqrt{2}\left(\cos \left(- \frac{\pi}{12}\right) + i\sin \left(- \frac{\pi}{12}\right)\right)$`, correct: false, misconceptionId: "C16-M3", value: "(1 - I)*(sqrt(3) + I)/2" },
      ],
      solution: {
        steps: [
          t`Polar forms: $1 + \sqrt3\,i = 2\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)$ and $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
          t`Divide the moduli: $\dfrac{2}{\sqrt2} = \sqrt2$.`,
          t`Subtract the arguments, top minus bottom: $\dfrac\pi3 - \dfrac\pi4 = \dfrac\pi{12}$, so the quotient is $\sqrt2\left(\cos\dfrac\pi{12} + i\sin\dfrac\pi{12}\right)$.`,
        ],
      },
    },
    {
      id: "C16-Q5",
      source: { kind: "authored" },
      stem: t`If $\arg z_1 = \dfrac{3\pi}{4}$ and $\arg z_2 = \dfrac{\pi}{2}$, the principal argument of $z_1 z_2$ is:`,
      verify: { kind: "value", inputs: { t1: "3*pi/4", t2: "pi/2" }, params: { op: "argsum" } },
      options: [
        { key: "A", text: t`$\frac{5 \pi}{4}$`, correct: false, misconceptionId: "C16-M4", value: "5*pi/4" },
        { key: "B", text: t`$- \frac{3 \pi}{4}$`, correct: true, value: "-3*pi/4" },
        { key: "C", text: t`$\frac{\pi}{4}$`, correct: false, misconceptionId: "C16-M2", value: "pi/4" },
      ],
      solution: {
        steps: [
          t`Add the arguments: $\dfrac{3\pi}4 + \dfrac\pi2 = \dfrac{5\pi}4$.`,
          t`$\dfrac{5\pi}4$ is outside $(-\pi, \pi]$, so subtract $2\pi$: $\dfrac{5\pi}4 - 2\pi = -\dfrac{3\pi}4$.`,
        ],
        figure: {
          alt: "An angle of 5π/4 anticlockwise ends in the same direction as −3π/4 clockwise. The principal argument is −3π/4.",
          view: { x: [-1.8, 1.8], y: [-1.6, 1.6] },
          elements: [
            { kind: "vector", to: [-0.849, -0.849], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 225, label: "5π/4", tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: -135, to: 0, label: "−3π/4", step: 2 },
          ],
        },
      },
    },
  ],
};
