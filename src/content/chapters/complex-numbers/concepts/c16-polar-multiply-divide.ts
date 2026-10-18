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
    intuition: [
      t`Recall: polar form gives a complex number by its length, the **modulus**, and its angle, the **argument**.`,
      t`Take $z_1 = \sqrt3 + i$: length $2$, at angle $\dfrac\pi6$ from the **initial arm**, the positive real axis.`,
      t`Take $z_2 = 1 + \sqrt3\,i$: length $2$, at angle $\dfrac\pi3$.`,
      t`Their product is $z_1z_2 = 4i$, of length $2 \times 2 = 4$: the lengths **multiply**.`,
      t`Its angle is $\dfrac\pi6 + \dfrac\pi3 = \dfrac\pi2$: from $z_1$'s angle, turn on by $z_2$'s, so the angles **add**.`,
      t`A **quotient**, the result of a division, undoes this: divide the lengths and subtract the angles, top minus bottom.`,
    ],
    formal: [
      {
        title: "Multiplying in polar form",
        points: [
          t`Take $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$, with modulus $r_1$ and argument $\theta_1$.`,
          t`Take $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$, with modulus $r_2$ and argument $\theta_2$.`,
          t`The product $z_1z_2$ has modulus $r_1r_2$: the moduli multiply.`,
          t`Its argument is $\theta_1 + \theta_2$: the arguments add.`,
          t`So $z_1z_2$ equals $r_1r_2\big(\cos(\theta_1 + \theta_2)$ $+\, i\sin(\theta_1 + \theta_2)\big)$.`,
          t`In short: $\arg(z_1z_2) = \arg z_1 + \arg z_2$.`,
        ],
        figure: {
          alt: "z₁ is an arrow at angle θ₁ from the initial arm, and z₂ an arrow at angle θ₂. The product z₁z₂ is a longer arrow: its angle starts at θ₁ and turns on by θ₂, so it is θ₁ + θ₂.",
          view: { x: [-1.2, 2.8], y: [-0.6, 2.8] },
          elements: [
            { kind: "segment", from: [0, 0], to: [2.4, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "vector", to: [1.45, 0.676], label: "z₁", labelAt: "e", step: 1 },
            { kind: "turn", r: 0.6, to: 25, label: "θ₁", labelAt: "se", tone: "muted", step: 1 },
            { kind: "vector", to: [0.86, 1.229], label: "z₂", labelAt: "ne", step: 2 },
            { kind: "turn", r: 0.95, to: 55, label: "θ₂", labelAt: "e", tone: "muted", step: 2 },
            { kind: "vector", to: [0.417, 2.364], label: "z₁z₂", labelAt: "e", step: 3 },
            { kind: "turn", r: 2, from: 25, to: 80, label: "+ θ₂", labelAt: "e", step: 4 },
          ],
        },
      },
      {
        title: "Dividing in polar form",
        points: [
          t`The **quotient** $\dfrac{z_1}{z_2}$, for $z_2 \ne 0$, is the number that times $z_2$ gives back $z_1$.`,
          t`So its modulus times $r_2$ is $r_1$: the moduli divide, giving $\dfrac{r_1}{r_2}$.`,
          t`Its argument plus $\theta_2$ is $\theta_1$: the arguments subtract, top minus bottom.`,
          t`So $\dfrac{z_1}{z_2}$ equals $\dfrac{r_1}{r_2}\big(\cos(\theta_1 - \theta_2)$ $+\, i\sin(\theta_1 - \theta_2)\big)$.`,
          t`In short: $\arg\dfrac{z_1}{z_2} = \arg z_1 - \arg z_2$.`,
        ],
        figure: {
          alt: "z₁ is an arrow at angle θ₁ from the initial arm and z₂ a shorter arrow at angle θ₂. The quotient z₁/z₂ has length r₁ ÷ r₂: its angle starts at θ₁ and turns back, clockwise, by θ₂, so it is θ₁ − θ₂.",
          view: { x: [-1, 2.8], y: [-0.6, 2.8] },
          elements: [
            { kind: "segment", from: [0, 0], to: [2.4, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "vector", to: [0.621, 2.318], label: "z₁", labelAt: "e", step: 1 },
            { kind: "turn", r: 2, to: 75, label: "θ₁", labelAt: "e", tone: "muted", step: 1 },
            { kind: "vector", to: [1.45, 0.676], label: "z₂", labelAt: "e", step: 1 },
            { kind: "turn", r: 1.1, to: 25, label: "θ₂", labelAt: "se", tone: "muted", step: 1 },
            { kind: "vector", to: [0.964, 1.149], label: "z₁/z₂", labelAt: "e", step: 2 },
            { kind: "turn", r: 1.2, from: 75, to: 50, label: "− θ₂", labelAt: "w", step: 3 },
          ],
        },
      },
      {
        title: "Back to the principal argument",
        points: [
          t`Recall: the **principal argument** is the one value of the argument in $(-\pi, \pi]$.`,
          t`A full turn, $2\pi$, ends in the same direction, so these rules hold only **up to a multiple of $2\pi$**.`,
          t`If a sum or difference lands outside $(-\pi, \pi]$, add or subtract $2\pi$ to bring it back.`,
          t`Take $z_1 = -1 + \sqrt3\,i$, at angle $\dfrac{2\pi}3$, and $z_2 = i$, at angle $\dfrac\pi2$.`,
          t`The angles add: $\dfrac{2\pi}3 + \dfrac\pi2 = \dfrac{7\pi}6$, more than $\pi$, for $z_1z_2 = -\sqrt3 - i$.`,
          t`Subtract $2\pi$: $\dfrac{7\pi}6 - 2\pi = -\dfrac{5\pi}6$, the principal argument, measured clockwise.`,
        ],
        figure: {
          alt: "z₁ = −1 + √3i at angle 2π/3 and z₂ = i at angle π/2. Turning on from z₁'s angle by π/2 reaches 7π/6, the direction of z₁z₂ = −√3 − i, past the negative real axis. The same direction, turned clockwise from the initial arm, is −5π/6: the principal argument.",
          view: { x: [-2.6, 1.8], y: [-1.8, 2.4] },
          elements: [
            { kind: "segment", from: [0, 0], to: [1.6, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "vector", to: [-1, 1.732], label: "z₁ = −1 + √3i", labelAt: "w", step: 4 },
            { kind: "turn", r: 1.2, to: 120, label: "2π/3", labelAt: "w", tone: "muted", step: 4 },
            { kind: "vector", to: [0, 1], label: "z₂ = i", labelAt: "e", step: 4 },
            { kind: "turn", r: 0.7, to: 90, label: "π/2", labelAt: "e", tone: "muted", step: 4 },
            { kind: "vector", to: [-1.732, -1], label: "z₁z₂ = −√3 − i", labelAt: "s", step: 5 },
            { kind: "turn", r: 1.2, from: 120, to: 210, label: "+ π/2", labelAt: "nw", step: 5 },
            { kind: "turn", r: 0.8, to: -150, label: "−5π/6", labelAt: "se", step: 6 },
          ],
        },
      },
    ],
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
      alt: "z₁ = √3 + i has length 2 at angle π/6 from the initial arm, and z₂ = 1 + √3i has length 2 at angle π/3. Their product z₁z₂ = 4i has length 2 × 2 = 4; its angle starts at π/6 and turns on by π/3, to π/2.",
      view: { x: [-1.5, 3.2], y: [-0.6, 4.6] },
      elements: [
        { kind: "segment", from: [0, 0], to: [3, 0], label: "initial arm", labelAt: "n", tone: "good" },
        { kind: "vector", to: [1.732, 1], label: "z₁ = √3 + i", labelAt: "e", step: 2 },
        { kind: "turn", r: 0.7, to: 30, label: "π/6", labelAt: "se", tone: "muted", step: 2 },
        { kind: "vector", to: [1, 1.732], label: "z₂ = 1 + √3i", labelAt: "e", step: 3 },
        { kind: "turn", r: 1.3, to: 60, label: "π/3", labelAt: "w", tone: "muted", step: 3 },
        { kind: "vector", to: [0, 4], label: "z₁z₂ = 4i", labelAt: "e", step: 4 },
        { kind: "turn", r: 2.5, from: 30, to: 90, label: "+ π/3", labelAt: "w", step: 5 },
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
    {
      id: "C16-M5",
      mistake: t`Treating multiplication by $z_2$ as a pure rotation: turning by $\arg z_2$ but not scaling by $\lvert z_2 \rvert$`,
      remediation: t`Multiplying by $z_2$ turns by $\arg z_2$ **and** stretches by $\lvert z_2 \rvert$: the moduli multiply, $r_1 r_2$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M6",
      mistake: "Bringing an angle into range by measuring it clockwise but dropping the minus sign",
      remediation: t`An angle measured clockwise is negative: $\dfrac{5\pi}4$ is $\dfrac{3\pi}4$ clockwise, so the principal argument is $-\dfrac{3\pi}4$.`,
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
        { key: "D", text: t`$2\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: false, misconceptionId: "C16-M5", value: "2*I" },
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
        { key: "D", text: t`$\sqrt{2}\left(\cos \frac{5 \pi}{12} + i\sin \frac{5 \pi}{12}\right)$`, correct: false, misconceptionId: "C16-M5", value: "(-1 + I + sqrt(3)*(1 + I))/2" },
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
        { key: "D", text: t`$\frac{3 \pi}{4}$`, correct: false, misconceptionId: "C16-M6", value: "3*pi/4" },
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
