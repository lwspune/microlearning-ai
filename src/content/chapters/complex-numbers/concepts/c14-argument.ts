import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`$1 + i$ and $-1 - i$ both have $\dfrac{y}{x} = 1$, so $\tan^{-1}\dfrac yx$ gives $\dfrac\pi4$ for both. **Do they point the same way?**`,
    reveal: t`No, they point in exactly opposite directions. $\tan^{-1}$ only knows the slope, not which way the arrow points. The argument needs both.`,
  },
  explanation: {
    intuition: t`Draw an arrow from the origin to $z$. The argument is the angle that arrow makes with the positive real axis. Turning anticlockwise is positive and clockwise is negative. Opposite points share a slope, so the slope alone can't give the angle. **Plot the point first.**`,
    formal: t`$\arg z = \theta$ where $\cos\theta = \dfrac{x}{|z|}$ and $\sin\theta = \dfrac{y}{|z|}$, $(z \ne 0)$. The **principal argument** is the one value with $\theta \in (-\pi, \pi]$.

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
      figure: {
        alt: "−2 − 2i is in quadrant III. Its reference angle with the negative real axis is π/4, so its argument, measured clockwise, is −3π/4.",
        view: { x: [-3.3, 1.3], y: [-3.3, 1.3] },
        elements: [
          { kind: "vector", to: [-2, -2], label: "−2 − 2i", labelAt: "sw", step: 1 },
          { kind: "angle", at: [0, 0], from: -180, to: -135, label: "π/4", tone: "muted", step: 2 },
          { kind: "angle", at: [0, 0], from: -135, to: 0, label: "−3π/4", step: 3 },
        ],
      },
    },
    figure: {
      alt: "2 + 2i is at angle π/4, measured anticlockwise from the positive real axis. The opposite point, −2 − 2i, lies on the same line but its angle is −3π/4, measured clockwise.",
      view: { x: [-3, 3], y: [-3, 3] },
      elements: [
        { kind: "vector", to: [2, 2], label: "2 + 2i", labelAt: "se", step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 45, label: "π/4", step: 1 },
        { kind: "line", through: [[0, 0], [2, 2]], dashed: true, tone: "muted", step: 2 },
        { kind: "vector", to: [-2, -2], label: "−2 − 2i", labelAt: "nw", tone: "bad", step: 2 },
        { kind: "angle", at: [0, 0], from: -135, to: 0, label: "−3π/4", tone: "bad", step: 2 },
      ],
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
      mistake: t`Reference angle from $\tan^{-1}\left|\dfrac xy\right|$, measured from the imaginary axis`,
      remediation: t`The angle is measured from the **real** axis, so it's $\tan^{-1}\left|\frac{y}{x}\right|$: imaginary part over real part.`,
      fallback: { kind: "ext", topic: "trig values" },
    },
    {
      id: "C14-M4",
      mistake: "Giving the reference angle without placing it by quadrant",
      remediation: "That's the reference angle. Now place it: which quadrant is the point in?",
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C14-M5",
      mistake: "For a point on an axis, putting it on the other axis: a real number read as imaginary, or the reverse",
      remediation: t`A real number like $-5$ lies on the **real** axis; a number like $-2i$ lies on the **imaginary** axis. Plot it first, then read off how far the arm turns.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "For a point in quadrant I or IV, C14-M1 gives the correct answer, so those items cannot detect M1. To diagnose M1, use a point with x < 0.",
    "C14-M3 applies only to points off the axes and C14-M5 only to points on an axis: diagnose each with its own kind of point.",
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
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y > 0$, so the point is in quadrant II.`,
          t`Reference angle: $\alpha = \tan^{-1}\dfrac{\sqrt3}{1} = \dfrac\pi3$.`,
          t`Quadrant II: $\theta = \pi - \dfrac\pi3 = \dfrac{2\pi}{3}$.`,
        ],
        figure: {
          alt: "−1 + √3i is in quadrant II, π/3 above the negative real axis, so its argument is π − π/3 = 2π/3.",
          view: { x: [-2.3, 1.3], y: [-1.3, 3.032] },
          elements: [
            { kind: "vector", to: [-1, 1.732], label: "−1 + √3i", labelAt: "nw", step: 1 },
            { kind: "angle", at: [0, 0], from: 120, to: 180, label: "π/3", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 120, label: "2π/3", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
          t`Reference angle: $\alpha = \tan^{-1}\dfrac{1}{\sqrt3} = \dfrac\pi6$.`,
          t`Quadrant III, measured clockwise: $\theta = -\left(\pi - \dfrac\pi6\right) = -\dfrac{5\pi}{6}$.`,
        ],
        figure: {
          alt: "−√3 − i is in quadrant III, π/6 below the negative real axis, so its argument, measured clockwise, is −5π/6.",
          view: { x: [-3.032, 1.3], y: [-2.3, 1.3] },
          elements: [
            { kind: "vector", to: [-1.732, -1], label: "−√3 − i", labelAt: "sw", step: 1 },
            { kind: "angle", at: [0, 0], from: -180, to: -150, label: "π/6", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: -150, to: 0, label: "−5π/6", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Plot: $x > 0$ and $y < 0$, so the point is in quadrant IV.`,
          t`Reference angle: $\alpha = \tan^{-1}\sqrt3 = \dfrac\pi3$.`,
          t`Quadrant IV, measured clockwise: $\theta = -\dfrac\pi3$.`,
        ],
        figure: {
          alt: "1 − √3i is in quadrant IV, π/3 below the positive real axis, so its argument is −π/3.",
          view: { x: [-1.3, 2.3], y: [-3.032, 1.3] },
          elements: [
            { kind: "vector", to: [1, -1.732], label: "1 − √3i", labelAt: "se", step: 1 },
            { kind: "angle", at: [0, 0], from: -60, to: 0, label: "−π/3", step: 2 },
          ],
        },
      },
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
        { key: "D", text: t`$-\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C14-M5", value: "-pi/2" },
      ],
      solution: {
        steps: [
          t`Plot: $-5$ lies on the negative real axis.`,
          t`That is a half-turn from the positive real axis: $\theta = \pi$. Not $-\pi$: the principal range $(-\pi, \pi]$ includes $\pi$ but not $-\pi$.`,
        ],
        figure: {
          alt: "−5 lies on the negative real axis, a half-turn from the positive real axis: its argument is π.",
          view: { x: [-6.3, 1.3], y: [-1.75, 1.75] },
          elements: [
            { kind: "vector", to: [-5, 0], label: "−5", labelAt: "n", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 180, label: "π", step: 2 },
          ],
        },
      },
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
        { key: "D", text: t`$\pi$`, correct: false, misconceptionId: "C14-M5", value: "pi" },
      ],
      solution: {
        steps: [
          t`Plot: $-2i$ lies on the negative imaginary axis.`,
          t`That is a quarter-turn clockwise from the positive real axis: $\theta = -\dfrac\pi2$.`,
        ],
        figure: {
          alt: "−2i lies on the negative imaginary axis, a quarter-turn clockwise: its argument is −π/2.",
          view: { x: [-1.75, 1.75], y: [-3.3, 1.3] },
          elements: [
            { kind: "vector", to: [0, -2], label: "−2i", labelAt: "e", step: 1 },
            { kind: "angle", at: [0, 0], from: -90, to: 0, label: "−π/2", step: 2 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
          t`Reference angle: $\alpha = \tan^{-1}\sqrt3 = \dfrac\pi3$.`,
          t`In $[0, 2\pi)$, measure anticlockwise all the way: $\theta = \pi + \dfrac\pi3 = \dfrac{4\pi}{3}$.`,
        ],
        figure: {
          alt: "−1 − √3i is in quadrant III, π/3 past the negative real axis. Measured anticlockwise all the way round, its argument is 4π/3.",
          view: { x: [-2.3, 1.3], y: [-3.032, 1.3] },
          elements: [
            { kind: "vector", to: [-1, -1.732], label: "−1 − √3i", labelAt: "sw", step: 1 },
            { kind: "angle", at: [0, 0], from: 180, to: 240, label: "π/3", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 240, label: "4π/3", step: 3 },
          ],
        },
      },
    },
  ],
};
