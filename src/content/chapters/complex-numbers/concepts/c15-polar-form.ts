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
      figure: {
        alt: "2 − 2i is 2√2 from the origin, at angle −π/4: an eighth of a turn clockwise.",
        view: { x: [-1.3, 3.3], y: [-3.3, 1.3] },
        elements: [
          { kind: "segment", from: [0, 0], to: [2, -2], label: "r = 2√2", labelAt: "ne", step: 1 },
          { kind: "angle", at: [0, 0], from: -45, to: 0, label: "−π/4", step: 2 },
          { kind: "point", at: [2, -2], label: "2 − 2i", labelAt: "se", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A point z at distance r from the origin and angle θ from the positive real axis. Its real part is r cos θ, along the axis, and its imaginary part is r sin θ, straight up.",
      view: { x: [-1, 4], y: [-0.8, 2.8] },
      elements: [
        { kind: "segment", from: [0, 0], to: [2.298, 1.928], label: "r", labelAt: "nw", step: 1 },
        { kind: "point", at: [2.298, 1.928], label: "z", labelAt: "ne", step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 40, label: "θ", step: 2 },
        { kind: "segment", from: [0, 0], to: [2.298, 0], label: "r cos θ", labelAt: "n", tone: "muted", step: 3 },
        { kind: "segment", from: [2.298, 0], to: [2.298, 1.928], label: "r sin θ", labelAt: "e", tone: "muted", step: 4 },
      ],
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
    {
      id: "C15-M5",
      mistake: t`Using the reference angle as $\theta$ and ignoring the signs the quadrant gives`,
      remediation: t`The reference angle only gives the size of the turn. The quadrant sets the signs: $-3i$ points down, so $\theta = -\dfrac\pi2$, and in quadrant II $\cos\theta < 0$.`,
      fallback: { kind: "concept", id: "C14" },
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
      solution: {
        steps: [
          t`$r = \sqrt{3 + 1} = 2$.`,
          t`The point is in quadrant II with reference angle $\dfrac\pi6$, so $\theta = \pi - \dfrac\pi6 = \dfrac{5\pi}{6}$.`,
          t`So $-\sqrt3 + i = 2\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right)$.`,
        ],
        figure: {
          alt: "−√3 + i is 2 from the origin, at angle 5π/6 in quadrant II.",
          view: { x: [-3.032, 1.3], y: [-1.3, 2.3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-1.732, 1], label: "r = 2", labelAt: "ne", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 150, label: "5π/6", step: 2 },
            { kind: "point", at: [-1.732, 1], label: "−√3 + i", labelAt: "nw", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$r = \sqrt{1 + 3} = 2$.`,
          t`The point is in quadrant III with reference angle $\dfrac\pi3$, so $\theta = -\left(\pi - \dfrac\pi3\right) = -\dfrac{2\pi}{3}$.`,
          t`So $-1 - \sqrt3\,i = 2\left(\cos\left(-\dfrac{2\pi}{3}\right) + i\sin\left(-\dfrac{2\pi}{3}\right)\right)$.`,
        ],
        figure: {
          alt: "−1 − √3i is 2 from the origin, at angle −2π/3 in quadrant III, measured clockwise.",
          view: { x: [-2.3, 1.3], y: [-3.032, 1.3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-1, -1.732], label: "r = 2", labelAt: "nw", step: 1 },
            { kind: "angle", at: [0, 0], from: -120, to: 0, label: "−2π/3", step: 2 },
            { kind: "point", at: [-1, -1.732], label: "−1 − √3i", labelAt: "sw", step: 3 },
          ],
        },
      },
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
        { key: "D", text: t`$3\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right)$`, correct: false, misconceptionId: "C15-M5", value: "3*I" },
      ],
      solution: {
        steps: [
          t`$r = \lvert -3i \rvert = 3$.`,
          t`The point is on the negative imaginary axis, so $\theta = -\dfrac\pi2$.`,
          t`So $-3i = 3\left(\cos\left(-\dfrac\pi2\right) + i\sin\left(-\dfrac\pi2\right)\right)$.`,
        ],
        figure: {
          alt: "−3i is 3 from the origin, straight down: angle −π/2.",
          view: { x: [-1.75, 1.75], y: [-4.3, 1.3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [0, -3], label: "r = 3", labelAt: "e", step: 1 },
            { kind: "angle", at: [0, 0], from: -90, to: 0, label: "−π/2", step: 2 },
            { kind: "point", at: [0, -3], label: "−3i", labelAt: "e", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`$r = \lvert -2 \rvert = 2$.`,
          t`The point is on the negative real axis, so $\theta = \pi$.`,
          t`So $-2 = 2(\cos\pi + i\sin\pi)$.`,
        ],
        figure: {
          alt: "−2 is 2 from the origin, straight left: angle π.",
          view: { x: [-3.3, 1.3], y: [-1.75, 1.75] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-2, 0], label: "r = 2", labelAt: "n", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 180, label: "π", step: 2 },
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", step: 3 },
          ],
        },
      },
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
        { key: "D", text: t`$2 + 2 \sqrt{3} i$`, correct: false, misconceptionId: "C15-M5", value: "2 + 2*sqrt(3)*I" },
      ],
      solution: {
        steps: [
          t`$x = r\cos\theta = 4\cos\dfrac{2\pi}{3} = 4 \cdot \left(-\dfrac12\right) = -2$.`,
          t`$y = r\sin\theta = 4\sin\dfrac{2\pi}{3} = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$.`,
          t`So the number is $-2 + 2\sqrt3\,i$.`,
        ],
        figure: {
          alt: "Length 4 at angle 2π/3: two units left (4 cos 2π/3 = −2) and 2√3 up (4 sin 2π/3), so the point −2 + 2√3i.",
          view: { x: [-3.3, 1.3], y: [-1.3, 4.764] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-2, 3.464], label: "4", labelAt: "ne", dashed: true, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 120, label: "2π/3", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [-2, 0], label: "x = −2", labelAt: "n", step: 1 },
            { kind: "segment", from: [-2, 0], to: [-2, 3.464], label: "y = 2√3", labelAt: "w", step: 2 },
            { kind: "point", at: [-2, 3.464], label: "−2 + 2√3i", labelAt: "nw", step: 3 },
          ],
        },
      },
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
        { key: "D", text: t`$3 \sqrt{3} + 3 i$`, correct: false, misconceptionId: "C15-M5", value: "3*sqrt(3) + 3*I" },
      ],
      solution: {
        steps: [
          t`$x = r\cos\theta = 6\cos\left(-\dfrac\pi6\right) = 6 \cdot \dfrac{\sqrt3}{2} = 3\sqrt3$.`,
          t`$y = r\sin\theta = 6\sin\left(-\dfrac\pi6\right) = 6 \cdot \left(-\dfrac12\right) = -3$.`,
          t`So the number is $3\sqrt3 - 3i$.`,
        ],
        figure: {
          alt: "Length 6 at angle −π/6: 3√3 to the right (6 cos(−π/6)) and 3 down (6 sin(−π/6) = −3), so the point 3√3 − 3i.",
          view: { x: [-1.3, 6.496], y: [-4.3, 1.3] },
          elements: [
            { kind: "segment", from: [0, 0], to: [5.196, -3], label: "6", labelAt: "nw", dashed: true, tone: "muted" },
            { kind: "angle", at: [0, 0], from: -30, to: 0, label: "−π/6", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [5.196, 0], label: "x = 3√3", labelAt: "n", step: 1 },
            { kind: "segment", from: [5.196, 0], to: [5.196, -3], label: "y = −3", labelAt: "e", step: 2 },
            { kind: "point", at: [5.196, -3], label: "3√3 − 3i", labelAt: "se", step: 3 },
          ],
        },
      },
    },
  ],
};
