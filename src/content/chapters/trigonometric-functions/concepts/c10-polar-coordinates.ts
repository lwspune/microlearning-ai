import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`The points $(3, \sqrt3)$ and $(-3, -\sqrt3)$ both have $\tan\theta = \dfrac{y}{x} = \dfrac{1}{\sqrt3}$ and both are $2\sqrt3$ from the origin. **Are their polar co-ordinates both $\left(2\sqrt3, \dfrac{\pi}{6}\right)$?**`,
    reveal: t`No. They lie on one line through the origin, but on opposite sides of it. $(3, \sqrt3)$ is at $\dfrac{\pi}{6}$; $(-3, -\sqrt3)$, in quadrant III, is at $\pi + \dfrac{\pi}{6} = \dfrac{7\pi}{6}$. The ratio $\dfrac{y}{x}$ gives the line; the quadrant picks the side.`,
  },
  explanation: {
    intuition: t`A point can be reached two ways. Cartesian: go $x$ along, then $y$ up. Polar: turn through $\theta$ from the positive $x$-axis, then walk $r$ along that arm. The right triangle under the arm links them: $x = r\cos\theta$ and $y = r\sin\theta$. Going back, $r$ is the hypotenuse, and $\tan\theta = \dfrac{y}{x}$ fixes only the line, not the side. So **plot the point first**, then pick $\theta$ in its quadrant.`,
    formal: t`**Polar to Cartesian.** For the point $P(r, \theta)$:
$$x = r\cos\theta, \qquad y = r\sin\theta$$

**Cartesian to polar.** For the point $P(x, y)$: $r = \sqrt{x^2 + y^2}$, and $\theta$ is the angle with $\cos\theta = \dfrac{x}{r}$, $\sin\theta = \dfrac{y}{r}$. Take $0 \le \theta < 2\pi$.

**Placing $\theta$.** Find the reference angle $\alpha$ from $\tan\alpha = \left|\dfrac{y}{x}\right|$, then:
- Quadrant I: $\theta = \alpha$
- Quadrant II: $\theta = \pi - \alpha$
- Quadrant III: $\theta = \pi + \alpha$
- Quadrant IV: $\theta = 2\pi - \alpha$

**Degrees or radians.** The book writes the polar co-ordinates of $(3, 3)$ as $(3\sqrt2, 45^\circ)$. That is the same as $\left(3\sqrt2, \dfrac{\pi}{4}\right)$.`,
    worked: {
      prompt: t`Find the polar co-ordinates $(r, \theta)$, with $0 \le \theta < 2\pi$, of the point $(2, -2\sqrt3)$.`,
      steps: [
        t`Plot: $x > 0$ and $y < 0$, so the point is in quadrant IV.`,
        t`$r = \sqrt{2^2 + (2\sqrt3)^2} = \sqrt{4 + 12} = 4$.`,
        t`Reference angle: $\tan\alpha = \left|\dfrac{-2\sqrt3}{2}\right| = \sqrt3$, so $\alpha = \dfrac{\pi}{3}$.`,
        t`Quadrant IV: $\theta = 2\pi - \dfrac{\pi}{3} = \dfrac{5\pi}{3}$. Check: $4\cos\dfrac{5\pi}{3} = 2$ and $4\sin\dfrac{5\pi}{3} = -2\sqrt3$.`,
      ],
      answer: t`$\left(4, \dfrac{5\pi}{3}\right)$. The trap: stopping at $\dfrac{\pi}{3}$, which points into quadrant I.`,
      figure: {
        alt: "The point (2, −2√3) in quadrant IV, joined to the origin by an arm of length 4. The arm is π/3 below the positive x-axis, so θ, measured anticlockwise, is 5π/3.",
        axes: "xy",
        view: { x: [-1.5, 4], y: [-4.5, 1.5] },
        elements: [
          { kind: "vector", to: [2, -3.464], label: "(2, −2√3)", labelAt: "e", step: 1 },
          { kind: "label", at: [1, -1.732], label: "r = 4", labelAt: "ne", step: 2 },
          { kind: "angle", at: [0, 0], from: 300, to: 360, step: 3, tone: "muted" },
          { kind: "label", at: [1.2, -0.75], label: "π/3", labelAt: "n", step: 3, tone: "muted" },
          { kind: "angle", at: [0, 0], from: 0, to: 300, label: "5π/3", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The point P(x, y) = (4, 3) joined to the origin by an arm of length r = 5, at angle θ from the positive x-axis. A dashed drop from P to the x-axis makes a right triangle: its base is x = r cos θ and its height is y = r sin θ.",
      axes: "xy",
      view: { x: [-1, 6], y: [-1, 4.5] },
      elements: [
        { kind: "vector", to: [4, 3], label: "P(x, y)", labelAt: "ne", step: 1 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 0.9 }, { kind: "sector", centre: [0, 0], from: 0, to: 36.87 }], tone: "muted", step: 2 },
        { kind: "angle", at: [0, 0], from: 0, to: 36.87, label: "θ", step: 2 },
        { kind: "label", at: [2, 1.5], label: "r", labelAt: "nw", step: 2 },
        { kind: "segment", from: [4, 3], to: [4, 0], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [4, 1.5], label: "y = r sin θ", labelAt: "e", step: 3 },
        { kind: "label", at: [2.5, 0], label: "x = r cos θ", labelAt: "n", step: 3 },
      ],
    },
    visualSpec: t`Drag the point $P$ around the plane: its arm, $r$ and $\theta$ update live, with the reference angle marked against the $x$-axis, so you see $\theta$ jump from $\alpha$ to $\pi - \alpha$ as $P$ crosses into quadrant II.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Ignoring the quadrant: taking $\theta$ as the acute angle from $\tan\theta = \left|\dfrac{y}{x}\right|$, or using $\cos\theta$ and $\sin\theta$ without their signs`,
      remediation: t`The acute angle from $\left|\dfrac{y}{x}\right|$ is only the reference angle, and it points into quadrant I. Plot the point and place $\theta$ in its own quadrant; going the other way, give $\cos\theta$ and $\sin\theta$ the signs of that quadrant.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M2",
      mistake: t`Swapping the roles of $x$ and $y$: $x = r\sin\theta$, $y = r\cos\theta$, so $\tan\theta = \dfrac{x}{y}$`,
      remediation: t`$\theta$ is measured from the positive $x$-axis, so $x = r\cos\theta$, $y = r\sin\theta$ and $\tan\theta = \dfrac{y}{x}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M3",
      mistake: t`Forgetting the square root: $r = x^2 + y^2$`,
      remediation: t`$r$ is the distance from the origin, $r = \sqrt{x^2 + y^2}$. Take the square root at the end.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Measuring the reference angle the wrong way from the negative $x$-axis: $\pi + \alpha$ in quadrant II, $\pi - \alpha$ in quadrant III`,
      remediation: t`In quadrant II the arm stops short of the negative $x$-axis, so $\theta = \pi - \alpha$; in quadrant III it has gone past it, so $\theta = \pi + \alpha$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M5",
      mistake: t`Adding the co-ordinates for the distance: $r = |x| + |y|$`,
      remediation: t`$r$ is the hypotenuse of a right triangle with legs $|x|$ and $|y|$, so $r = \sqrt{x^2 + y^2}$, not their sum.`,
      fallback: { kind: "ext", topic: "Pythagoras theorem" },
    },
  ],
  engineNotes: [
    "C10-M1 gives the key for a point (or an angle) in quadrant I, so diagnose it with a point off quadrant I.",
    "C10-M2 gives the key when |x| = |y|, and C10-M4 applies only in quadrants II and III.",
    "C10-M3 and C10-M5 apply only to Cartesian-to-polar items (r is given in the other direction).",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q13(ii)" },
      stem: t`The polar co-ordinates $(r, \theta)$, with $0 \le \theta < 2\pi$, of the point whose Cartesian co-ordinates are $(1, \sqrt{3})$ are:`,
      verify: { kind: "value", inputs: { x: "1", y: "sqrt(3)" }, params: { dir: "to_polar" } },
      options: [
        { key: "A", text: t`$\left(2, \frac{\pi}{6}\right)$`, correct: false, misconceptionId: "C10-M2", value: "(2, pi/6)" },
        { key: "B", text: t`$\left(4, \frac{\pi}{3}\right)$`, correct: false, misconceptionId: "C10-M3", value: "(4, pi/3)" },
        { key: "C", text: t`$\left(1 + \sqrt{3}, \frac{\pi}{3}\right)$`, correct: false, misconceptionId: "C10-M5", value: "(1 + sqrt(3), pi/3)" },
        { key: "D", text: t`$\left(2, \frac{\pi}{3}\right)$`, correct: true, value: "(2, pi/3)" },
      ],
      solution: {
        steps: [
          t`$r = \sqrt{1^2 + (\sqrt3)^2} = \sqrt4 = 2$.`,
          t`Both co-ordinates are positive, so the point is in quadrant I: $\tan\theta = \dfrac{\sqrt3}{1} = \sqrt3$ gives $\theta = \dfrac{\pi}{3}$.`,
          t`The polar co-ordinates are $\left(2, \dfrac{\pi}{3}\right)$. Check: $2\cos\dfrac{\pi}{3} = 1$ and $2\sin\dfrac{\pi}{3} = \sqrt3$.`,
        ],
        figure: {
          alt: "The point (1, √3) in quadrant I, joined to the origin by an arm of length 2, at angle π/3 from the positive x-axis.",
          axes: "xy",
          view: { x: [-1, 2.5], y: [-1, 2.6] },
          elements: [
            { kind: "vector", to: [1, 1.732], label: "(1, √3)", labelAt: "ne", step: 1 },
            { kind: "label", at: [0.5, 0.866], label: "r = 2", labelAt: "nw", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, label: "π/3", step: 2 },
          ],
        },
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q13(iii)" },
      stem: t`The polar co-ordinates $(r, \theta)$, with $0 \le \theta < 2\pi$, of the point whose Cartesian co-ordinates are $(-1, -1)$ are:`,
      verify: { kind: "value", inputs: { x: "-1", y: "-1" }, params: { dir: "to_polar" } },
      options: [
        { key: "A", text: t`$\left(\sqrt{2}, \frac{5 \pi}{4}\right)$`, correct: true, value: "(sqrt(2), 5*pi/4)" },
        { key: "B", text: t`$\left(\sqrt{2}, \frac{\pi}{4}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(sqrt(2), pi/4)" },
        { key: "C", text: t`$\left(\sqrt{2}, \frac{3 \pi}{4}\right)$`, correct: false, misconceptionId: "C10-M4", value: "(sqrt(2), 3*pi/4)" },
        { key: "D", text: t`$\left(2, \frac{5 \pi}{4}\right)$`, correct: false, misconceptionId: "C10-M3", value: "(2, 5*pi/4)" },
      ],
      solution: {
        steps: [
          t`$r = \sqrt{(-1)^2 + (-1)^2} = \sqrt2$.`,
          t`$x < 0$ and $y < 0$: quadrant III. Reference angle: $\tan\alpha = \left|\dfrac{-1}{-1}\right| = 1$, so $\alpha = \dfrac{\pi}{4}$.`,
          t`Quadrant III: $\theta = \pi + \dfrac{\pi}{4} = \dfrac{5\pi}{4}$. The polar co-ordinates are $\left(\sqrt2, \dfrac{5\pi}{4}\right)$.`,
        ],
        figure: {
          alt: "The point (−1, −1) in quadrant III, joined to the origin by an arm of length √2. The arm is π/4 past the negative x-axis, so θ is π + π/4 = 5π/4.",
          axes: "xy",
          view: { x: [-2, 1.2], y: [-2, 1.2] },
          elements: [
            { kind: "vector", to: [-1, -1], label: "(−1, −1)", labelAt: "sw", step: 1 },
            { kind: "label", at: [-0.5, -0.5], label: "r = √2", labelAt: "se", step: 1 },
            { kind: "angle", at: [0, 0], from: 180, to: 225, step: 2, tone: "muted" },
            { kind: "label", at: [-0.95, -0.45], label: "π/4", labelAt: "n", step: 2, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 225, label: "5π/4", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q13(iv)" },
      stem: t`The polar co-ordinates $(r, \theta)$, with $0 \le \theta < 2\pi$, of the point whose Cartesian co-ordinates are $(-\sqrt{3}, 1)$ are:`,
      verify: { kind: "value", inputs: { x: "-sqrt(3)", y: "1" }, params: { dir: "to_polar" } },
      options: [
        { key: "A", text: t`$\left(2, \frac{7 \pi}{6}\right)$`, correct: false, misconceptionId: "C10-M4", value: "(2, 7*pi/6)" },
        { key: "B", text: t`$\left(2, \frac{5 \pi}{6}\right)$`, correct: true, value: "(2, 5*pi/6)" },
        { key: "C", text: t`$\left(2, \frac{\pi}{6}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(2, pi/6)" },
        { key: "D", text: t`$\left(2, \frac{2 \pi}{3}\right)$`, correct: false, misconceptionId: "C10-M2", value: "(2, 2*pi/3)" },
      ],
      solution: {
        steps: [
          t`$r = \sqrt{(-\sqrt3)^2 + 1^2} = \sqrt4 = 2$.`,
          t`$x < 0$ and $y > 0$: quadrant II. Reference angle: $\tan\alpha = \left|\dfrac{1}{-\sqrt3}\right| = \dfrac{1}{\sqrt3}$, so $\alpha = \dfrac{\pi}{6}$.`,
          t`Quadrant II: $\theta = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$. The polar co-ordinates are $\left(2, \dfrac{5\pi}{6}\right)$.`,
        ],
        figure: {
          alt: "The point (−√3, 1) in quadrant II, joined to the origin by an arm of length 2. The arm is π/6 short of the negative x-axis, so θ is π − π/6 = 5π/6.",
          axes: "xy",
          view: { x: [-2.5, 1.2], y: [-1, 2] },
          elements: [
            { kind: "vector", to: [-1.732, 1], label: "(−√3, 1)", labelAt: "nw", step: 1 },
            { kind: "label", at: [-0.866, 0.5], label: "r = 2", labelAt: "ne", step: 1 },
            { kind: "angle", at: [0, 0], from: 150, to: 180, step: 2, tone: "muted" },
            { kind: "label", at: [-1.35, 0.25], label: "π/6", labelAt: "n", step: 2, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 150, label: "5π/6", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q13(i)" },
      stem: t`The polar co-ordinates $(r, \theta)$, with $0 \le \theta < 2\pi$, of the point whose Cartesian co-ordinates are $(5, -5)$ are:`,
      verify: { kind: "value", inputs: { x: "5", y: "-5" }, params: { dir: "to_polar" } },
      options: [
        { key: "A", text: t`$\left(50, \frac{7 \pi}{4}\right)$`, correct: false, misconceptionId: "C10-M3", value: "(50, 7*pi/4)" },
        { key: "B", text: t`$\left(10, \frac{7 \pi}{4}\right)$`, correct: false, misconceptionId: "C10-M5", value: "(10, 7*pi/4)" },
        { key: "C", text: t`$\left(5 \sqrt{2}, \frac{7 \pi}{4}\right)$`, correct: true, value: "(5*sqrt(2), 7*pi/4)" },
        { key: "D", text: t`$\left(5 \sqrt{2}, \frac{\pi}{4}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(5*sqrt(2), pi/4)" },
      ],
      solution: {
        steps: [
          t`$r = \sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt2$.`,
          t`$x > 0$ and $y < 0$: quadrant IV. Reference angle: $\tan\alpha = \left|\dfrac{-5}{5}\right| = 1$, so $\alpha = \dfrac{\pi}{4}$.`,
          t`Quadrant IV: $\theta = 2\pi - \dfrac{\pi}{4} = \dfrac{7\pi}{4}$. The polar co-ordinates are $\left(5\sqrt2, \dfrac{7\pi}{4}\right)$.`,
        ],
        figure: {
          alt: "The point (5, −5) in quadrant IV, joined to the origin by an arm of length 5√2. The arm is π/4 below the positive x-axis, so θ, measured anticlockwise, is 2π − π/4 = 7π/4.",
          axes: "xy",
          view: { x: [-1.5, 7], y: [-6.5, 1.5] },
          elements: [
            { kind: "vector", to: [5, -5], label: "(5, −5)", labelAt: "e", step: 1 },
            { kind: "label", at: [2.5, -2.5], label: "r = 5√2", labelAt: "ne", step: 1 },
            { kind: "angle", at: [0, 0], from: 315, to: 360, step: 2, tone: "muted" },
            { kind: "label", at: [2.1, -1], label: "π/4", labelAt: "n", step: 2, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 315, label: "7π/4", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q12(ii)" },
      stem: t`The Cartesian co-ordinates of the point whose polar co-ordinates are $\left(4, \dfrac{2\pi}{3}\right)$ are:`,
      verify: { kind: "value", inputs: { r: "4", t: "2*pi/3" }, params: { dir: "to_cart" } },
      options: [
        { key: "A", text: t`$\left(-2, 2 \sqrt{3}\right)$`, correct: true, value: "(-2, 2*sqrt(3))" },
        { key: "B", text: t`$\left(2, 2 \sqrt{3}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(2, 2*sqrt(3))" },
        { key: "C", text: t`$\left(2 \sqrt{3}, -2\right)$`, correct: false, misconceptionId: "C10-M2", value: "(2*sqrt(3), -2)" },
        { key: "D", text: t`$\left(-2, - 2 \sqrt{3}\right)$`, correct: false, misconceptionId: "C10-M4", value: "(-2, -2*sqrt(3))" },
      ],
      solution: {
        steps: [
          t`$\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ is in quadrant II, where cosine is negative and sine positive: $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$, $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$.`,
          t`$x = 4 \cdot \left(-\dfrac{1}{2}\right) = -2$ and $y = 4 \cdot \dfrac{\sqrt3}{2} = 2\sqrt3$. The point is $(-2, 2\sqrt3)$.`,
        ],
        figure: {
          alt: "An arm of length 4 at angle 2π/3, which is π/3 short of the negative x-axis, in quadrant II. Dashed drops to the axes show its end is the point (−2, 2√3).",
          axes: "xy",
          view: { x: [-3, 1.5], y: [-1, 4.2] },
          elements: [
            { kind: "vector", to: [-2, 3.464], step: 1 },
            { kind: "label", at: [-1, 1.732], label: "r = 4", labelAt: "ne", step: 1 },
            { kind: "angle", at: [0, 0], from: 120, to: 180, step: 1, tone: "muted" },
            { kind: "label", at: [-1.3, 0.35], label: "π/3", labelAt: "n", step: 1, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 120, label: "2π/3", step: 1 },
            { kind: "segment", from: [-2, 3.464], to: [-2, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [-2, 3.464], to: [0, 3.464], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [-2, 3.464], label: "(−2, 2√3)", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q12(i)" },
      stem: t`The Cartesian co-ordinates of the point whose polar co-ordinates are $\left(6, \dfrac{7\pi}{6}\right)$ are:`,
      verify: { kind: "value", inputs: { r: "6", t: "7*pi/6" }, params: { dir: "to_cart" } },
      options: [
        { key: "A", text: t`$\left(- 3 \sqrt{3}, -3\right)$`, correct: true, value: "(-3*sqrt(3), -3)" },
        { key: "B", text: t`$\left(3 \sqrt{3}, 3\right)$`, correct: false, misconceptionId: "C10-M1", value: "(3*sqrt(3), 3)" },
        { key: "C", text: t`$\left(-3, - 3 \sqrt{3}\right)$`, correct: false, misconceptionId: "C10-M2", value: "(-3, -3*sqrt(3))" },
        { key: "D", text: t`$\left(- 3 \sqrt{3}, 3\right)$`, correct: false, misconceptionId: "C10-M4", value: "(-3*sqrt(3), 3)" },
      ],
      solution: {
        steps: [
          t`$\dfrac{7\pi}{6} = \pi + \dfrac{\pi}{6}$ is in quadrant III, where cosine and sine are both negative: $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt3}{2}$, $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$.`,
          t`$x = 6 \cdot \left(-\dfrac{\sqrt3}{2}\right) = -3\sqrt3$ and $y = 6 \cdot \left(-\dfrac{1}{2}\right) = -3$. The point is $(-3\sqrt3, -3)$.`,
        ],
        figure: {
          alt: "An arm of length 6 at angle 7π/6, which is π/6 past the negative x-axis, in quadrant III. Dashed drops to the axes show its end is the point (−3√3, −3).",
          axes: "xy",
          view: { x: [-6.5, 1.5], y: [-4.2, 1.5] },
          elements: [
            { kind: "vector", to: [-5.196, -3], step: 1 },
            { kind: "label", at: [-2.598, -1.5], label: "r = 6", labelAt: "nw", step: 1 },
            { kind: "angle", at: [0, 0], from: 180, to: 210, step: 1, tone: "muted" },
            { kind: "label", at: [-3.8, -0.95], label: "π/6", labelAt: "n", step: 1, tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 210, label: "7π/6", step: 1 },
            { kind: "segment", from: [-5.196, -3], to: [-5.196, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [-5.196, -3], to: [0, -3], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [-5.196, -3], label: "(−3√3, −3)", labelAt: "s", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
