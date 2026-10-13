import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c17: Concept = {
  id: "C17",
  status: "draft",
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
    },
  ],
};
