import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`Describe the point $1 + i$ without using $x$ and $y$. **Which two numbers would tell someone exactly where it is?**`,
    reveal: t`How far it is from the origin ($\sqrt2$) and which way it points ($\dfrac\pi4$). That is polar form: $\sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
  },
  explanation: {
    intuition: t`Any non-zero complex number is a length and a direction. The length is $r = \lvert z \rvert$, the direction is $\theta = \arg z$, and $x = r\cos\theta$, $y = r\sin\theta$. Written this way, multiplication and powers become easy, as the next concepts show.`,
    formal: t`$z = x + iy = r(\cos\theta + i\sin\theta) = re^{i\theta}$, with $r = \lvert z \rvert = \sqrt{x^2 + y^2}$ and $\theta = \arg z$ (the principal value, placed by quadrant).

Going back: $x = r\cos\theta$ and $y = r\sin\theta$. The cosine goes with the real part and the sine with the imaginary part, and $r$ multiplies both.`,
    worked: {
      prompt: t`Write $2 - 2i$ in polar form.`,
      steps: [
        t`$r = \sqrt{4 + 4} = 2\sqrt2$.`,
        t`The point is in quadrant IV with reference angle $\dfrac\pi4$, so $\theta = -\dfrac\pi4$.`,
        t`So $2 - 2i = 2\sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$.`,
      ],
      answer: t`$2\sqrt2\left(\cos\left(-\frac\pi4\right) + i\sin\left(-\frac\pi4\right)\right) = 2\sqrt2\,e^{-i\pi/4}$`,
    },
    visualSpec: t`A draggable point with its arrow, the radius $r$ and the angle $\theta$ labelled. Readouts show $x + iy$ and $r(\cos\theta + i\sin\theta)$ side by side, updating together.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: t`Taking $\theta = \tan^{-1}\dfrac yx$ without checking the quadrant`,
      remediation: t`$\tan^{-1}$ only gives angles pointing to the right. Place the angle by the point's quadrant.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C15-M2",
      mistake: t`Using $r = x^2 + y^2$, without the square root`,
      remediation: t`$r$ is a distance: $r = \sqrt{x^2 + y^2}$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C15-M3",
      mistake: "Matching the cosine to the imaginary part and the sine to the real part",
      remediation: t`$x = r\cos\theta$ is the real part and $y = r\sin\theta$ is the imaginary part.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C15-M4",
      mistake: t`Multiplying only the cosine by $r$`,
      remediation: t`$r(\cos\theta + i\sin\theta) = r\cos\theta + i\,r\sin\theta$: $r$ multiplies both parts.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "authored" },
      stem: t`The polar form of $-\sqrt3 + i$ is:`,
      verify: { kind: "value", inputs: { z: "-sqrt(3)+I" }, params: { op: "to_polar" } },
      options: [
        { key: "A", text: t`$4\left(\cos \frac{5 \pi}{6} + i\sin \frac{5 \pi}{6}\right)$`, correct: false, misconceptionId: "C15-M2", value: "-2*sqrt(3) + 2*I" },
        { key: "B", text: t`$2\left(\cos \left(- \frac{\pi}{3}\right) + i\sin \left(- \frac{\pi}{3}\right)\right)$`, correct: false, misconceptionId: "C15-M3", value: "1 - sqrt(3)*I" },
        { key: "C", text: t`$2\left(\cos \frac{5 \pi}{6} + i\sin \frac{5 \pi}{6}\right)$`, correct: true, value: "-sqrt(3) + I" },
        { key: "D", text: t`$2\left(\cos \left(- \frac{\pi}{6}\right) + i\sin \left(- \frac{\pi}{6}\right)\right)$`, correct: false, misconceptionId: "C15-M1", value: "sqrt(3) - I" },
      ],
    },
    {
      id: "C15-Q2",
      source: { kind: "authored" },
      stem: t`The polar form of $-1 - \sqrt3\,i$ is:`,
      verify: { kind: "value", inputs: { z: "-1-sqrt(3)*I" }, params: { op: "to_polar" } },
      options: [
        { key: "A", text: t`$2\left(\cos \frac{\pi}{3} + i\sin \frac{\pi}{3}\right)$`, correct: false, misconceptionId: "C15-M1", value: "1 + sqrt(3)*I" },
        { key: "B", text: t`$4\left(\cos \left(- \frac{2 \pi}{3}\right) + i\sin \left(- \frac{2 \pi}{3}\right)\right)$`, correct: false, misconceptionId: "C15-M2", value: "-2 - 2*sqrt(3)*I" },
        { key: "C", text: t`$2\left(\cos \left(- \frac{5 \pi}{6}\right) + i\sin \left(- \frac{5 \pi}{6}\right)\right)$`, correct: false, misconceptionId: "C15-M3", value: "-sqrt(3) - I" },
        { key: "D", text: t`$2\left(\cos \left(- \frac{2 \pi}{3}\right) + i\sin \left(- \frac{2 \pi}{3}\right)\right)$`, correct: true, value: "-1 - sqrt(3)*I" },
      ],
    },
    {
      id: "C15-Q3",
      source: { kind: "authored" },
      stem: t`The polar form of $-3i$ is:`,
      verify: { kind: "value", inputs: { z: "-3*I" }, params: { op: "to_polar" } },
      options: [
        { key: "A", text: t`$3\left(\cos \pi + i\sin \pi\right)$`, correct: false, misconceptionId: "C15-M3", value: "-3" },
        { key: "B", text: t`$3\left(\cos \left(- \frac{\pi}{2}\right) + i\sin \left(- \frac{\pi}{2}\right)\right)$`, correct: true, value: "-3*I" },
        { key: "C", text: t`$9\left(\cos \left(- \frac{\pi}{2}\right) + i\sin \left(- \frac{\pi}{2}\right)\right)$`, correct: false, misconceptionId: "C15-M2", value: "-9*I" },
      ],
    },
    {
      id: "C15-Q4",
      source: { kind: "authored" },
      stem: t`The polar form of $-2$ is:`,
      verify: { kind: "value", inputs: { z: "-2" }, params: { op: "to_polar" } },
      options: [
        { key: "A", text: t`$4\left(\cos \pi + i\sin \pi\right)$`, correct: false, misconceptionId: "C15-M2", value: "-4" },
        { key: "B", text: t`$2\left(\cos \left(- \frac{\pi}{2}\right) + i\sin \left(- \frac{\pi}{2}\right)\right)$`, correct: false, misconceptionId: "C15-M3", value: "-2*I" },
        { key: "C", text: t`$2\left(\cos \pi + i\sin \pi\right)$`, correct: true, value: "-2" },
        { key: "D", text: t`$2\left(\cos 0 + i\sin 0\right)$`, correct: false, misconceptionId: "C15-M1", value: "2" },
      ],
    },
    {
      id: "C15-Q5",
      source: { kind: "authored" },
      stem: t`$4\left(\cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3}\right) = ?$`,
      verify: { kind: "value", inputs: { r: "4", theta: "2*pi/3" }, params: { op: "from_polar" } },
      options: [
        { key: "A", text: t`$-2 + 2 \sqrt{3} i$`, correct: true, value: "-2 + 2*sqrt(3)*I" },
        { key: "B", text: t`$2 \sqrt{3} - 2 i$`, correct: false, misconceptionId: "C15-M3", value: "2*sqrt(3) - 2*I" },
        { key: "C", text: t`$-2 + \frac{\sqrt{3} i}{2}$`, correct: false, misconceptionId: "C15-M4", value: "-2 + sqrt(3)*I/2" },
      ],
    },
    {
      id: "C15-Q6",
      source: { kind: "authored" },
      stem: t`$6\left(\cos\left(-\dfrac{\pi}{6}\right) + i\sin\left(-\dfrac{\pi}{6}\right)\right) = ?$`,
      verify: { kind: "value", inputs: { r: "6", theta: "-pi/6" }, params: { op: "from_polar" } },
      options: [
        { key: "A", text: t`$3 \sqrt{3} - 3 i$`, correct: true, value: "3*sqrt(3) - 3*I" },
        { key: "B", text: t`$-3 + 3 \sqrt{3} i$`, correct: false, misconceptionId: "C15-M3", value: "-3 + 3*sqrt(3)*I" },
        { key: "C", text: t`$3 \sqrt{3} - \frac{i}{2}$`, correct: false, misconceptionId: "C15-M4", value: "3*sqrt(3) - I/2" },
      ],
    },
  ],
};
