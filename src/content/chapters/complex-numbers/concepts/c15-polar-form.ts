import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The point r from 0 along the arrow at `deg` degrees from the positive real axis. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

/** The initial arm along the positive real axis, labelled above it at `labelX`, clear of the axis numbers. */
const initialArm = (len: number, labelX: number, step?: number): FigureElement[] => {
  const s = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [0, 0], to: [len, 0], tone: "good", ...s },
    { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good", ...s },
  ];
};

/** z at length 3 and angle 40°, as on the idea slide. */
const z = tip(3, 40);

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`Describe the point $1 + i$ without using $x$ and $y$. **Which two numbers would tell someone exactly where it is?**`,
    reveal: t`How far it is from the origin ($\sqrt2$) and which way it points ($\dfrac\pi4$). That is polar form: $\sqrt2\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right)$.`,
  },
  explanation: {
    intuition: [
      t`Any non-zero complex number $z = x + iy$ is a point, with an arrow from $0$ to it.`,
      t`Its **length** is how far $z$ is from $0$: recall, that is the modulus $r = \lvert z \rvert$.`,
      t`Its **direction** is its argument $\theta = \arg z$: the turn from the **initial arm**, the positive real axis, to the arrow.`,
      t`Going across, the arrow covers $x = r\cos\theta$: the real part.`,
      t`Going up, it covers $y = r\sin\theta$: the imaginary part.`,
      t`Written by its length and direction, multiplying and taking powers become easy, as the next lessons show.`,
    ],
    figure: {
      alt: "The Argand plane with the point z = x + iy and an arrow from 0 to it, of length r. The arrow turns through θ from the initial arm, the positive real axis. Going across, it covers x = r cos θ along the real axis; going up, it covers y = r sin θ.",
      view: { x: [-1, 4.6], y: [-0.8, 2.8] },
      elements: [
        { kind: "vector", to: z, tone: "muted", step: 1 },
        { kind: "point", at: z, label: "z = x + iy", labelAt: "ne", step: 1 },
        { kind: "label", at: tip(1.5, 40), label: "r", labelAt: "nw", step: 2 },
        ...initialArm(3.4, 3.3, 3),
        { kind: "turn", r: 3, to: 40, step: 3 },
        { kind: "label", at: tip(1.5, 22), label: "θ", labelAt: "e", step: 3 },
        { kind: "segment", from: [0, 0], to: [z[0], 0], tone: "muted", step: 4 },
        { kind: "label", at: [1.6, 0], label: "x = r cos θ", labelAt: "n", tone: "muted", step: 4 },
        { kind: "segment", from: [z[0], 0], to: z, label: "y = r sin θ", labelAt: "e", tone: "muted", step: 5 },
      ],
    },
    formal: [
      {
        title: "Polar form",
        points: [
          t`Put $x = r\cos\theta$ and $y = r\sin\theta$ into $z = x + iy$.`,
          t`That gives $z = r\cos\theta + i\,r\sin\theta$.`,
          t`Take out the common factor $r$: $z = r(\cos\theta + i\sin\theta)$.`,
          t`This is the **polar form** of $z$: its length $r$, then its direction $\theta$.`,
          t`The length is $r = \lvert z \rvert = \sqrt{x^2 + y^2}$.`,
          t`The direction is $\theta = \arg z$: recall, the principal value, in $(-\pi, \pi]$, placed by the quadrant.`,
        ],
        figure: {
          alt: "The point z on the Argand plane. Across, it is x = r cos θ along the real axis; up, it is y = r sin θ. So z = r cos θ + i r sin θ = r(cos θ + i sin θ). An arrow of length r = |z| turns through θ = arg z from the initial arm to z.",
          view: { x: [-1, 4.6], y: [-1.6, 2.8] },
          elements: [
            ...initialArm(3.4, 3.3),
            { kind: "point", at: z, label: "z", labelAt: "ne" },
            { kind: "segment", from: [0, 0], to: [z[0], 0], tone: "muted", step: 1 },
            { kind: "label", at: [1.6, 0], label: "x = r cos θ", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [z[0], 0], to: z, label: "y = r sin θ", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [0.2, -0.75], label: "z = r cos θ + i r sin θ", labelAt: "e", step: 2 },
            { kind: "label", at: [0.55, -1.3], label: "= r(cos θ + i sin θ)", labelAt: "e", tone: "good", step: 3 },
            { kind: "turn", r: 3, to: 40, step: 4 },
            { kind: "label", at: tip(1.5, 40), label: "r = |z|", labelAt: "nw", step: 5 },
            { kind: "label", at: tip(1.7, 25), label: "θ = arg z", labelAt: "e", step: 6 },
          ],
        },
      },
      {
        title: "Euler form",
        points: [
          t`For short, $\cos\theta + i\sin\theta$ is written $e^{i\theta}$: this is **Euler's formula**.`,
          t`So $z = re^{i\theta}$: this is the **Euler form** of $z$.`,
          t`For example, $1 + i$ has length $\sqrt{1 + 1} = \sqrt2$ and direction $\frac\pi4$.`,
          t`So its polar form is $\sqrt2\left(\cos\frac\pi4 + i\sin\frac\pi4\right)$.`,
          t`And its Euler form is $\sqrt2\,e^{i\pi/4}$.`,
        ],
        figure: {
          alt: "The point 1 + i on the Argand plane. An arrow of length √2 turns through π/4 from the initial arm to it. So 1 + i = √2(cos π/4 + i sin π/4), which is √2 e^(iπ/4) in Euler form.",
          view: { x: [-1, 2.8], y: [-1.3, 1.8] },
          elements: [
            ...initialArm(2.2, 1.9),
            { kind: "turn", r: 1.414, to: 45, step: 3 },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "ne", step: 3 },
            { kind: "label", at: [0.5, 0.5], label: "√2", labelAt: "nw", step: 3 },
            { kind: "label", at: tip(0.65, 22), label: "π/4", labelAt: "e", step: 3 },
            { kind: "label", at: [0.1, -0.55], label: "√2(cos π/4 + i sin π/4)", labelAt: "e", step: 4 },
            { kind: "label", at: [0.1, -0.95], label: "= √2 e^(iπ/4)", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Back to x + iy",
        points: [
          t`To go back, take $2\left(\cos\frac\pi3 + i\sin\frac\pi3\right)$: length $2$, direction $\frac\pi3$.`,
          t`The cosine gives the real part: $x = r\cos\theta = 2\cos\frac\pi3 = 1$.`,
          t`The sine gives the imaginary part: $y = r\sin\theta = 2\sin\frac\pi3 = \sqrt3$.`,
          t`So the number is $1 + \sqrt3\,i$.`,
          t`The length $r$ multiplies both parts, not only the cosine.`,
          t`In general, $r(\cos\theta + i\sin\theta)$ equals $r\cos\theta + i\,r\sin\theta$.`,
        ],
        figure: {
          alt: "An arrow of length 2 turns through π/3 from the initial arm. Across, it covers x = 2 cos π/3 = 1; up, it covers y = 2 sin π/3 = √3. So it ends at 1 + √3i.",
          view: { x: [-1, 3.2], y: [-0.8, 2.4] },
          elements: [
            ...initialArm(2.4, 2.0),
            { kind: "turn", r: 2, to: 60, step: 1 },
            { kind: "label", at: [0.5, 0.866], label: "2", labelAt: "nw", step: 1 },
            { kind: "label", at: tip(0.75, 30), label: "π/3", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 0], to: [1, 0], step: 2 },
            { kind: "label", at: [0.5, 0], label: "x = 1", labelAt: "s", step: 2 },
            { kind: "segment", from: [1, 0], to: [1, 1.732], label: "y = √3", labelAt: "e", step: 3 },
            { kind: "point", at: [1, 1.732], label: "1 + √3i", labelAt: "ne", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Write $2 - 2i$ in polar form.`,
      steps: [
        t`$r = \sqrt{4 + 4} = 2\sqrt2$.`,
        t`The point is in quadrant IV with reference angle $\dfrac\pi4$, so $\theta = -\dfrac\pi4$.`,
        t`So $2 - 2i$ $= 2\sqrt2\left(\cos\left(-\dfrac\pi4\right) + i\sin\left(-\dfrac\pi4\right)\right)$.`,
      ],
      answer: t`$2\sqrt2\left(\cos\left(-\frac\pi4\right) + i\sin\left(-\frac\pi4\right)\right)$ $= 2\sqrt2\,e^{-i\pi/4}$`,
      figure: {
        alt: "2 − 2i is 2√2 from the origin. The arrow turns −π/4, an eighth of a turn clockwise, from the initial arm to reach it.",
        view: { x: [-1.3, 3.3], y: [-3.3, 1.3] },
        elements: [
          ...initialArm(3, 2.2),
          { kind: "segment", from: [0, 0], to: [2, -2], label: "r = 2√2", labelAt: "sw", tone: "muted", dashed: true, step: 1 },
          { kind: "turn", r: 2.828, to: -45, step: 2 },
          { kind: "label", at: tip(1.2, -22), label: "−π/4", labelAt: "e", step: 2 },
          { kind: "point", at: [2, -2], label: "2 − 2i", labelAt: "se", step: 3 },
        ],
      },
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
