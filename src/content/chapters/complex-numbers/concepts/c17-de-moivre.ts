import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The point r from 0 along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

/** The initial arm along the positive real axis, `len` long, labelled above the axis at `labelX`. */
const initialArm = (len: number, labelX: number): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [len, 0], tone: "good" },
  { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good" },
];

export const c17: Concept = {
  id: "C17",
  status: "approved",
  hook: {
    prompt: t`Square $\cos\theta + i\sin\theta$ by multiplying it by itself. **What angle does the result have?**`,
    reveal: t`$2\theta$. Multiplying adds angles, so squaring doubles the angle, and the $n$th power multiplies it by $n$.`,
  },
  explanation: {
    intuition: [
      t`Recall: $z = r(\cos\theta + i\sin\theta)$ has length $r$, its **modulus**, and angle $\theta$, its **argument**.`,
      t`A **power** multiplies copies of $z$: $z^3 = z \cdot z \cdot z$.`,
      t`Recall: each multiplication multiplies the lengths and adds the angles.`,
      t`So $z^2$ has length $r^2$ and angle $\theta + \theta = 2\theta$.`,
      t`One more factor of $z$ gives $z^3$, with length $r^3$ and angle $3\theta$.`,
      t`So $z^n$ has length $r^n$ and angle $n\theta$: **De Moivre's theorem**, one step instead of a long expansion.`,
    ],
    formal: [
      {
        title: "De Moivre's theorem",
        points: [
          t`A number of length $1$ at angle $\theta$ is $\cos\theta + i\sin\theta$.`,
          t`**De Moivre's theorem**: $(\cos\theta + i\sin\theta)^n$ equals $\cos n\theta + i\sin n\theta$.`,
          t`The length stays $1$, since $1^n = 1$.`,
          t`The angle becomes $n\theta$: the cube, $n = 3$, turns the arm through $3\theta$.`,
          t`It holds for every integer $n$: positive, zero or negative.`,
          t`A negative $n$ turns the arm clockwise: $n = -1$ gives the angle $-\theta$.`,
        ],
        figure: {
          alt: "An arm of length 1 turns θ anticlockwise from the initial arm along the real axis: the number cos θ + i sin θ. Its cube turns three times as far, to 3θ, still on the dashed circle of radius 1. For n = −1 the arm turns θ clockwise instead, to −θ.",
          view: { x: [-1.9, 2.6], y: [-1.3, 1.4] },
          elements: [
            ...initialArm(1.4, 1.15),
            { kind: "turn", r: 1, to: 40, label: "cos θ + i sin θ", labelAt: "ne", step: 1 },
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 3 },
            { kind: "turn", r: 1, to: 120, label: "cube: angle 3θ", labelAt: "nw", step: 4 },
            { kind: "turn", r: 1, to: -40, label: "n = −1: angle −θ", labelAt: "e", tone: "bad", step: 6 },
          ],
        },
      },
      {
        title: "Raise the modulus too",
        points: [
          t`Take any $z = r(\cos\theta + i\sin\theta)$, such as $1 + i$, with $r = \sqrt2$ and $\theta = \frac\pi4$.`,
          t`Then $z^n = r^n(\cos n\theta + i\sin n\theta)$.`,
          t`The length is $r^n$, not $r$: raise the modulus to the power $n$.`,
          t`The $n$ factors of $r$ multiply: $r \cdot r \cdots r = r^n$, not $nr$.`,
          t`The angle is $n\theta$: here $4 \times \frac\pi4 = \pi$, so $(1 + i)^4 = -4$.`,
        ],
        figure: {
          alt: "z = 1 + i has length √2 at angle π/4 from the initial arm. Its fourth power turns four times as far, to π, and has length (√2)⁴ = 4: it is −4, on the negative real axis.",
          view: { x: [-4.8, 3], y: [-0.9, 2.6] },
          elements: [
            ...initialArm(2.2, 1.7),
            { kind: "turn", r: 1.414, to: 45, label: "z = 1 + i", labelAt: "ne", step: 1 },
            { kind: "turn", r: 4, to: 180, label: "z⁴", labelAt: "n", step: 2 },
            { kind: "label", at: [-2.5, 0], label: "length (√2)⁴ = 4", labelAt: "n", step: 3 },
            { kind: "label", at: [-4.6, 2.1], label: "angle 4 × π/4 = π, so z⁴ = −4", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Reduce the angle at the end",
        points: [
          t`Recall: the **principal argument** is the angle in $(-\pi, \pi]$, above $-\pi$ and up to $\pi$.`,
          t`Take $z = \cos\frac{2\pi}3 + i\sin\frac{2\pi}3$, at the angle $\frac{2\pi}3$.`,
          t`Then $z^2$ has the angle $\frac{4\pi}3$, which is outside $(-\pi, \pi]$.`,
          t`At the end, take off a whole turn: $\frac{4\pi}3 - 2\pi = -\frac{2\pi}3$.`,
          t`A whole turn brings the arm back where it was, so the point is the same.`,
          t`So $z^2 = -\frac12 - \frac{\sqrt3}2 i$, with principal argument $-\frac{2\pi}3$.`,
        ],
        figure: {
          alt: "An arm of length 1 turns 2π/3 anticlockwise from the initial arm to z, then 2π/3 more, to 4π/3: that is z². An arm turning 2π/3 clockwise, to −2π/3, ends on the same arm, at z² = −1/2 − (√3/2)i.",
          view: { x: [-2.2, 1.9], y: [-1.9, 1.4] },
          elements: [
            ...initialArm(1.4, 1.05),
            { kind: "turn", r: 1, to: 120, label: "z", labelAt: "nw", step: 2 },
            { kind: "turn", r: 1, from: 120, to: 240, label: "4π/3", labelAt: "w", step: 3 },
            { kind: "turn", r: 1, to: -120, label: "−2π/3", labelAt: "e", tone: "bad", step: 4 },
            { kind: "point", at: tip(1, 240), label: "z² = −1/2 − (√3/2)i", labelAt: "s", step: 6 },
          ],
        },
      },
      {
        title: "Rewrite swapped parts first",
        points: [
          t`De Moivre's theorem needs the form $\cos\theta + i\sin\theta$, with the cosine as the real part.`,
          t`In $\sin\theta + i\cos\theta$ the two parts are swapped, so it sits on a different arm.`,
          t`That arm is $\theta$ short of the imaginary axis, so its angle is $\frac\pi2 - \theta$.`,
          t`Recall: $\sin\theta = \cos\left(\frac\pi2 - \theta\right)$ and $\cos\theta = \sin\left(\frac\pi2 - \theta\right)$.`,
          t`So $\sin\theta + i\cos\theta$ equals $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$.`,
          t`Rewrite it this way first, then use De Moivre with the angle $\frac\pi2 - \theta$.`,
        ],
        figure: {
          alt: "The arm of cos θ + i sin θ turns θ from the initial arm. Swapping the parts gives sin θ + i cos θ, on a different arm: θ short of the imaginary axis, at angle π/2 − θ from the initial arm.",
          view: { x: [-0.7, 1.9], y: [-0.35, 1.25] },
          elements: [
            ...initialArm(1.3, 1.35),
            { kind: "turn", r: 1, to: 25, label: "cos θ + i sin θ", labelAt: "e", step: 1 },
            { kind: "turn", r: 1, to: 65, label: "sin θ + i cos θ", labelAt: "ne", tone: "bad", step: 2 },
            { kind: "arc", centre: [0, 0], r: 0.75, from: 65, to: 90, label: "θ", labelAt: "n", step: 3 },
            { kind: "label", at: tip(0.62, 45), label: "π/2 − θ", tone: "bad", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find $(1 + \sqrt3\,i)^5$.`,
      steps: [
        t`Polar form: $r = 2$ and $\theta = \dfrac\pi3$.`,
        t`De Moivre: $2^5\left(\cos\dfrac{5\pi}3 + i\sin\dfrac{5\pi}3\right)$.`,
        t`$\cos\dfrac{5\pi}3 = \dfrac12$ and $\sin\dfrac{5\pi}3 = -\dfrac{\sqrt3}2$, so the result is $32\left(\dfrac12 - \dfrac{\sqrt3}2 i\right)$.`,
      ],
      answer: t`$16 - 16\sqrt3\,i$`,
      figure: {
        alt: "1 + √3i has length 2: its arm turns π/3 from the initial arm. Its fifth power turns five times as far, 5 × π/3 = 5π/3, a sixth of a turn short of a full turn, and has length 2⁵ = 32.",
        view: { x: [-2, 3.8], y: [-2.4, 2.4] },
        elements: [
          ...initialArm(2.4, 2.1),
          { kind: "turn", r: 2, to: 60, label: "1 + √3i", labelAt: "ne", step: 1 },
          { kind: "turn", r: 2.4, to: 300, label: "5π/3", labelAt: "w", step: 2 },
          { kind: "label", at: [1.45, -1.7], label: "z⁵ is 32 along here", labelAt: "e", tone: "muted", step: 3 },
        ],
      },
    },
    figure: {
      alt: "z = 1 + i has length √2 and turns π/4 from the initial arm. z² = 2i has length 2 and turns twice as far, to π/2. z³ = −2 + 2i has length 2√2 and turns three times as far, to 3π/4.",
      view: { x: [-3.2, 3], y: [-0.8, 3.4] },
      elements: [
        ...initialArm(2.6, 2.1),
        { kind: "turn", r: 1.414, to: 45, label: "z = 1 + i", labelAt: "e", step: 1 },
        { kind: "turn", r: 2, to: 90, label: "z² = 2i", labelAt: "e", step: 4 },
        { kind: "turn", r: 2.828, to: 135, label: "z³ = −2 + 2i", labelAt: "nw", step: 5 },
      ],
    },
    visualSpec: t`An arrow $z$ and its powers $z^2, z^3, \ldots$ drawn as a spiral: each step turns by $\theta$ and stretches by $r$. A slider changes $n$.`,
  },
  misconceptions: [
    {
      id: "C17-M1",
      mistake: t`Not raising the modulus: $\big(r(\cos\theta + i\sin\theta)\big)^n = r(\cos n\theta + i\sin n\theta)$`,
      remediation: t`The modulus is raised to the power too: $r^n$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C17-M2",
      mistake: t`Applying De Moivre directly to $\sin\theta + i\cos\theta$`,
      remediation: t`De Moivre needs $\cos\theta + i\sin\theta$. Rewrite $\sin\theta + i\cos\theta$ as $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$ first.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C17-M3",
      mistake: t`Multiplying the modulus by $n$ instead of raising it to the power $n$`,
      remediation: t`Repeated multiplication multiplies the lengths: $r\cdot r\cdots r = r^n$, not $nr$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C17-M4",
      mistake: t`Treating $\sin\theta + i\cos\theta$ as $\cos\theta + i\sin\theta$`,
      remediation: t`The parts are swapped, so the angle is $\frac\pi2 - \theta$, not $\theta$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C17-M5",
      mistake: t`Raising the modulus to the power $n$ but leaving the angle as $\theta$`,
      remediation: t`Each factor adds another $\theta$, so $n$ factors turn by $n\theta$: $z^n = r^n(\cos n\theta + i\sin n\theta)$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C17-M6",
      mistake: t`Raising each term to the power: $(\sin\theta + i\cos\theta)^n = \sin^n\theta + i\cos^n\theta$`,
      remediation: t`A power of a sum is not the sum of the powers. Rewrite as $\cos\left(\frac\pi2 - \theta\right) + i\sin\left(\frac\pi2 - \theta\right)$, then use De Moivre.`,
      fallback: { kind: "ext", topic: "binomial expansion" },
    },
  ],
  items: [
    {
      id: "C17-Q1",
      source: { kind: "authored" },
      stem: t`$(1 + i)^8 = ?$`,
      verify: { kind: "value", inputs: { z: "1+I", n: "8" }, params: { op: "pow" } },
      options: [
        { key: "A", text: t`$\sqrt{2}$`, correct: false, misconceptionId: "C17-M1", value: "sqrt(2)" },
        { key: "B", text: t`$8 \sqrt{2}$`, correct: false, misconceptionId: "C17-M3", value: "8*sqrt(2)" },
        { key: "C", text: t`$16$`, correct: true, value: "16" },
        { key: "D", text: t`$8 \sqrt{2} \left(1 + i\right)$`, correct: false, misconceptionId: "C17-M5", value: "8*sqrt(2)*(1 + I)" },
      ],
      solution: {
        steps: [
          t`Polar form: $1 + i = \sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
          t`De Moivre: $(\sqrt2)^8\left(\cos\dfrac{8\pi}4 + i\sin\dfrac{8\pi}4\right) = 16(\cos 2\pi + i\sin 2\pi)$.`,
          t`$\cos 2\pi = 1$ and $\sin 2\pi = 0$, so the result is $16$.`,
        ],
      },
    },
    {
      id: "C17-Q2",
      source: { kind: "authored" },
      stem: t`$\left(\sin\dfrac{\pi}{6} + i\cos\dfrac{\pi}{6}\right)^3 = ?$`,
      verify: { kind: "value", inputs: { theta: "pi/6", n: "3" }, params: { op: "sinpow" } },
      options: [
        { key: "A", text: t`$i$`, correct: false, misconceptionId: "C17-M4", value: "I" },
        { key: "B", text: t`$-1$`, correct: true, value: "-1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C17-M2", value: "1" },
        { key: "D", text: t`$\frac{1}{8} + \frac{3 \sqrt{3} i}{8}$`, correct: false, misconceptionId: "C17-M6", value: "1/8 + 3*sqrt(3)*I/8" },
      ],
      solution: {
        steps: [
          t`Rewrite in De Moivre's form: $\sin\dfrac\pi6 + i\cos\dfrac\pi6 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$.`,
          t`De Moivre: $\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right)^3 = \cos\pi + i\sin\pi$.`,
          t`$\cos\pi = -1$ and $\sin\pi = 0$, so the result is $-1$.`,
        ],
      },
    },
    {
      id: "C17-Q3",
      source: { kind: "authored" },
      stem: t`$(\sqrt3 + i)^6 = ?$`,
      verify: { kind: "value", inputs: { z: "sqrt(3)+I", n: "6" }, params: { op: "pow" } },
      options: [
        { key: "A", text: t`$-64$`, correct: true, value: "-64" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C17-M1", value: "-2" },
        { key: "C", text: t`$-12$`, correct: false, misconceptionId: "C17-M3", value: "-12" },
        { key: "D", text: t`$32 \sqrt{3} + 32 i$`, correct: false, misconceptionId: "C17-M5", value: "32*sqrt(3) + 32*I" },
      ],
      solution: {
        steps: [
          t`Polar form: $\sqrt3 + i = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$.`,
          t`De Moivre: $2^6\left(\cos\dfrac{6\pi}6 + i\sin\dfrac{6\pi}6\right) = 64(\cos\pi + i\sin\pi)$.`,
          t`$\cos\pi = -1$ and $\sin\pi = 0$, so the result is $-64$.`,
        ],
      },
    },
    {
      id: "C17-Q4",
      source: { kind: "authored" },
      stem: t`$(1 - i)^4 = ?$`,
      verify: { kind: "value", inputs: { z: "1-I", n: "4" }, params: { op: "pow" } },
      options: [
        { key: "A", text: t`$-4$`, correct: true, value: "-4" },
        { key: "B", text: t`$- \sqrt{2}$`, correct: false, misconceptionId: "C17-M1", value: "-sqrt(2)" },
        { key: "C", text: t`$- 4 \sqrt{2}$`, correct: false, misconceptionId: "C17-M3", value: "-4*sqrt(2)" },
        { key: "D", text: t`$2 \sqrt{2} \left(1 - i\right)$`, correct: false, misconceptionId: "C17-M5", value: "2*sqrt(2)*(1 - I)" },
      ],
      solution: {
        steps: [
          t`Polar form: $1 - i = \sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$.`,
          t`De Moivre: $(\sqrt2)^4\big(\cos(-\pi) + i\sin(-\pi)\big) = 4\big(\cos(-\pi) + i\sin(-\pi)\big)$.`,
          t`$\cos(-\pi) = -1$ and $\sin(-\pi) = 0$, so the result is $-4$.`,
        ],
      },
    },
    {
      id: "C17-Q5",
      source: { kind: "authored" },
      stem: t`$\left(\sin\dfrac{\pi}{3} + i\cos\dfrac{\pi}{3}\right)^2 = ?$`,
      verify: { kind: "value", inputs: { theta: "pi/3", n: "2" }, params: { op: "sinpow" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{2} - \frac{i}{2}$`, correct: false, misconceptionId: "C17-M2", value: "sqrt(3)/2 - I/2" },
        { key: "B", text: t`$- \frac{1}{2} + \frac{\sqrt{3} i}{2}$`, correct: false, misconceptionId: "C17-M4", value: "-1/2 + sqrt(3)*I/2" },
        { key: "C", text: t`$\frac{1}{2} + \frac{\sqrt{3} i}{2}$`, correct: true, value: "1/2 + sqrt(3)*I/2" },
        { key: "D", text: t`$\frac{3}{4} + \frac{i}{4}$`, correct: false, misconceptionId: "C17-M6", value: "3/4 + I/4" },
      ],
      solution: {
        steps: [
          t`Rewrite in De Moivre's form: $\sin\dfrac\pi3 + i\cos\dfrac\pi3 = \cos\dfrac\pi6 + i\sin\dfrac\pi6$.`,
          t`De Moivre: $\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)^2 = \cos\dfrac\pi3 + i\sin\dfrac\pi3$.`,
          t`So the result is $\dfrac12 + \dfrac{\sqrt3}{2}i$.`,
        ],
      },
    },
    {
      id: "C17-Q6",
      source: { kind: "authored" },
      stem: t`$\left[2\left(\cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4}\right)\right]^3 = ?$`,
      verify: { kind: "value", inputs: { z: "2*(cos(pi/4)+I*sin(pi/4))", n: "3" }, params: { op: "pow" } },
      options: [
        { key: "A", text: t`$4 \sqrt{2} \left(-1 + i\right)$`, correct: true, value: "4*sqrt(2)*(-1 + I)" },
        { key: "B", text: t`$\sqrt{2} \left(-1 + i\right)$`, correct: false, misconceptionId: "C17-M1", value: "sqrt(2)*(-1 + I)" },
        { key: "C", text: t`$3 \sqrt{2} \left(-1 + i\right)$`, correct: false, misconceptionId: "C17-M3", value: "3*sqrt(2)*(-1 + I)" },
        { key: "D", text: t`$4 \sqrt{2} \left(1 + i\right)$`, correct: false, misconceptionId: "C17-M5", value: "4*sqrt(2)*(1 + I)" },
      ],
      solution: {
        steps: [
          t`De Moivre: cube the modulus and triple the angle: $2^3\left(\cos\dfrac{3\pi}4 + i\sin\dfrac{3\pi}4\right)$.`,
          t`$\cos\dfrac{3\pi}4 = -\dfrac{\sqrt2}2$ and $\sin\dfrac{3\pi}4 = \dfrac{\sqrt2}2$.`,
          t`So the result is $8 \cdot \dfrac{\sqrt2}{2}(-1 + i) = 4\sqrt2(-1 + i)$.`,
        ],
      },
    },
  ],
};
