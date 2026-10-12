import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "draft",
  hook: {
    prompt: t`$1 + i$ and $-1 - i$ both have $\dfrac{y}{x} = 1$, so $\tan^{-1}\dfrac yx$ gives $\dfrac\pi4$ for both. **Do they point the same way?**`,
    reveal: t`No, they point in exactly opposite directions. $\tan^{-1}$ only knows the slope, not which way the arrow points. The argument needs both.`,
  },
  explanation: {
    intuition: t`Draw an arrow from the origin to $z$. The argument is the angle that arrow makes with the positive real axis. Turning anticlockwise is positive and clockwise is negative. Opposite points share a slope, so the slope alone can't give the angle. **Plot the point first.**`,
    formal: t`$\arg z = \theta$ where $\cos\theta = \dfrac{x}{|z|}$ and $\sin\theta = \dfrac{y}{|z|}$ ($z \ne 0$). The **principal argument** is the one value with $\theta \in (-\pi, \pi]$.

With the reference angle $\alpha = \tan^{-1}\left|\dfrac yx\right|$:
- Quadrant I: $\theta = \alpha$
- Quadrant II: $\theta = \pi - \alpha$
- Quadrant III: $\theta = -(\pi - \alpha)$
- Quadrant IV: $\theta = -\alpha$
- On the axes: positive real $0$, positive imaginary $\dfrac\pi2$, negative real $\pi$, negative imaginary $-\dfrac\pi2$

**Two conventions.** Some papers use $[0, 2\pi)$ instead of $(-\pi, \pi]$. The same direction reads $-\dfrac{3\pi}{4}$ in one and $\dfrac{5\pi}{4}$ in the other. They differ by $2\pi$. Read the question (or the options) to see which one it uses.`,
    worked: {
      prompt: t`Find the principal argument of $z = -2 - 2i$.`,
      steps: [
        t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
        t`Reference angle: $\alpha = \tan^{-1}\left|\dfrac{-2}{-2}\right| = \dfrac\pi4$.`,
        t`Quadrant III: $\theta = -\left(\pi - \dfrac\pi4\right) = -\dfrac{3\pi}{4}$.`,
      ],
      answer: t`$-\dfrac{3\pi}{4}$ (or $\dfrac{5\pi}{4}$ in $[0, 2\pi)$). The trap: $\tan^{-1}\dfrac{-2}{-2} = \dfrac\pi4$ points into quadrant I, the opposite direction.`,
    },
    visualSpec: t`A draggable point on the Argand plane, with its arrow and an arc showing $\theta$. A faint "ghost" arrow shows what $\tan^{-1}\dfrac yx$ alone gives. When the point is dragged to $x < 0$, the ghost flips to the opposite side. That's the gap the quadrant rule fixes.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Taking $\tan^{-1}\dfrac yx$ itself as the argument`,
      remediation: t`$\tan^{-1}$ only returns angles between $-\frac\pi2$ and $\frac\pi2$, which point to the right. Your point is on the left. Plot it, then use the quadrant rule.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C14-M2",
      mistake: t`Answering outside $(-\pi, \pi]$, or mixing up the two conventions`,
      remediation: t`Principal means $(-\pi, \pi]$. Add or subtract $2\pi$ to bring your angle into range. Is the paper using $[0, 2\pi)$? The options tell you.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: t`Reference angle from $\tan^{-1}\left|\dfrac xy\right|$, measured from the imaginary axis (for a point on an axis: swapping the real and imaginary axes)`,
      remediation: t`The angle is measured from the **real** axis, so it's $\tan^{-1}\left|\frac{y}{x}\right|$: imaginary part over real part.`,
      fallback: { kind: "ext", topic: "trig values" },
    },
    {
      id: "C14-M4",
      mistake: "Giving the reference angle without placing it by quadrant",
      remediation: "That's the reference angle. Now place it: which quadrant is the point in?",
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "For a point in quadrant I or IV, C14-M1 gives the correct answer, so those items cannot detect M1. To diagnose M1, use a point with x < 0.",
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "authored" },
      stem: t`The principal argument of $-1 + \sqrt3\,i$ is:`,
      verify: { kind: "value", inputs: { x: "-1", y: "sqrt(3)" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$\dfrac{2\pi}{3}$`, correct: true, value: "2*pi/3" },
        { key: "B", text: t`$-\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M1", value: "-pi/3" },
        { key: "C", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M4", value: "pi/3" },
        { key: "D", text: t`$\dfrac{5\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "5*pi/6" },
      ],
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "cetcn-argument-and-quadrant" },
      stem: t`The principal argument of $-\sqrt3 - i$ is:`,
      verify: { kind: "value", inputs: { x: "-sqrt(3)", y: "-1" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{5\pi}{6}$`, correct: true, value: "-5*pi/6" },
        { key: "B", text: t`$\dfrac{7\pi}{6}$`, correct: false, misconceptionId: "C14-M2", value: "7*pi/6" },
        { key: "C", text: t`$\dfrac{\pi}{6}$`, correct: false, misconceptionId: "C14-M1", value: "pi/6" },
        { key: "D", text: t`$-\dfrac{2\pi}{3}$`, correct: false, misconceptionId: "C14-M3", value: "-2*pi/3" },
      ],
    },
    {
      id: "C14-Q3",
      source: { kind: "authored" },
      stem: t`The principal argument of $1 - \sqrt3\,i$ is:`,
      verify: { kind: "value", inputs: { x: "1", y: "-sqrt(3)" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{\pi}{3}$`, correct: true, value: "-pi/3" },
        { key: "B", text: t`$\dfrac{5\pi}{3}$`, correct: false, misconceptionId: "C14-M2", value: "5*pi/3" },
        { key: "C", text: t`$-\dfrac{\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "-pi/6" },
        { key: "D", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M4", value: "pi/3" },
      ],
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "jcx-arg" },
      stem: t`The principal argument of $-5$ is:`,
      verify: { kind: "value", inputs: { x: "-5", y: "0" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$\pi$`, correct: true, value: "pi" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C14-M1", value: "0" },
        { key: "C", text: t`$-\pi$`, correct: false, misconceptionId: "C14-M2", value: "-pi" },
        { key: "D", text: t`$-\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C14-M3", value: "-pi/2" },
      ],
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`The principal argument of $-2i$ is:`,
      verify: { kind: "value", inputs: { x: "0", y: "-2" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{\pi}{2}$`, correct: true, value: "-pi/2" },
        { key: "B", text: t`$\dfrac{3\pi}{2}$`, correct: false, misconceptionId: "C14-M2", value: "3*pi/2" },
        { key: "C", text: t`$\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C14-M4", value: "pi/2" },
        { key: "D", text: t`$\pi$`, correct: false, misconceptionId: "C14-M3", value: "pi" },
      ],
    },
    {
      id: "C14-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "cn-argument-polar" },
      stem: t`The argument of $-1 - \sqrt3\,i$, taken in $[0, 2\pi)$, is:`,
      verify: { kind: "value", inputs: { x: "-1", y: "-sqrt(3)" }, params: { range: "0_2pi" } },
      options: [
        { key: "A", text: t`$\dfrac{4\pi}{3}$`, correct: true, value: "4*pi/3" },
        { key: "B", text: t`$-\dfrac{2\pi}{3}$`, correct: false, misconceptionId: "C14-M2", value: "-2*pi/3" },
        { key: "C", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M1", value: "pi/3" },
        { key: "D", text: t`$\dfrac{7\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "7*pi/6" },
      ],
    },
  ],
};
