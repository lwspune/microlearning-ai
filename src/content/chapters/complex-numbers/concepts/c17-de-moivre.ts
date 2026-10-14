import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c17: Concept = {
  id: "C17",
  status: "approved",
  hook: {
    prompt: t`Square $\cos\theta + i\sin\theta$ by multiplying it by itself. **What angle does the result have?**`,
    reveal: t`$2\theta$. Multiplying adds angles, so squaring doubles the angle, and the $n$th power multiplies it by $n$.`,
  },
  explanation: {
    intuition: t`A power is repeated multiplication. Each multiplication multiplies the lengths and adds the angles, so $z^n$ has length $r^n$ and angle $n\theta$. That is De Moivre's theorem: it turns a long expansion into one step.`,
    formal: t`**De Moivre:** $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$ for every integer $n$.

For $z = r(\cos\theta + i\sin\theta)$: $z^n = r^n(\cos n\theta + i\sin n\theta)$. Raise the modulus to the power $n$, and reduce the angle $n\theta$ into $(-\pi, \pi]$ at the end.

It applies only to the form $\cos\theta + i\sin\theta$. Rewrite $\sin\theta + i\cos\theta$ first: $\sin\theta + i\cos\theta = \cos\left(\dfrac\pi2 - \theta\right) + i\sin\left(\dfrac\pi2 - \theta\right)$.`,
    worked: {
      prompt: t`Find $(1 + \sqrt3\,i)^5$.`,
      steps: [
        t`Polar form: $r = 2$ and $\theta = \dfrac\pi3$.`,
        t`De Moivre: $2^5\left(\cos\dfrac{5\pi}3 + i\sin\dfrac{5\pi}3\right)$.`,
        t`$\cos\dfrac{5\pi}3 = \dfrac12$ and $\sin\dfrac{5\pi}3 = -\dfrac{\sqrt3}2$, so the result is $32\left(\dfrac12 - \dfrac{\sqrt3}2 i\right)$.`,
      ],
      answer: t`$16 - 16\sqrt3\,i$`,
      figure: {
        alt: "1 + √3i has length 2 at angle π/3. Its fifth power points at angle 5 × π/3 = 5π/3, a sixth of a turn short of a full turn, with length 2⁵ = 32.",
        view: { x: [-2, 2.5], y: [-2.2, 2.4] },
        elements: [
          { kind: "vector", to: [1, 1.732], label: "1 + √3i", labelAt: "ne", step: 1 },
          { kind: "angle", at: [0, 0], from: 0, to: 60, label: "π/3", tone: "muted", step: 1 },
          { kind: "angle", at: [0, 0], from: 0, to: 300, label: "5π/3", step: 2 },
          { kind: "segment", from: [0, 0], to: [1.2, -2.078], dashed: true, tone: "muted", step: 2 },
          { kind: "label", at: [1.15, -1.6], label: "z⁵ is 32 along here", labelAt: "e", tone: "muted", step: 3 },
        ],
      },
    },
    figure: {
      alt: "z has length 1.2 at angle π/6. Each power multiplies the length by 1.2 and adds π/6 to the angle: z² is at π/3 and z³ at π/2.",
      view: { x: [-1, 2.2], y: [-0.5, 2.3] },
      elements: [
        { kind: "vector", to: [1.039, 0.6], label: "z", labelAt: "e", tone: "muted", step: 1 },
        { kind: "vector", to: [0.72, 1.247], label: "z²", labelAt: "ne", tone: "muted", step: 2 },
        { kind: "vector", to: [0, 1.728], label: "z³", labelAt: "e", step: 3 },
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
