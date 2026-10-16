import type { Concept, Pt } from "../../../types.ts";

const t = String.raw;

/** The point r from the centre c, along the arm at `deg` degrees from the positive x-direction. */
const on = (c: Pt, r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(c[0] + r * Math.cos(a)).toFixed(3), +(c[1] + r * Math.sin(a)).toFixed(3)];
};

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A bead slides round a circular wire with centre $(2, 1)$ and radius $5$. **Can one number tell you exactly where the bead is?**`,
    reveal: t`Yes: the angle $\theta$ that the radius to the bead makes with the positive $x$-direction. The bead is at $(2 + 5\cos\theta,\ 1 + 5\sin\theta)$, and as $\theta$ runs from $0$ to $2\pi$ it goes round the wire once.`,
  },
  explanation: {
    intuition: [
      t`Recall: a circle is every point at one distance $r$, its **radius**, from its **centre** $C(h, k)$.`,
      t`Stand at $C$ and face the **positive $x$-direction**, the way the $x$-axis points.`,
      t`Turn anticlockwise through an angle $\theta$, then walk $r$ units: you reach $P(x, y)$ on the circle.`,
      t`On the way you moved $r\cos\theta$ across and $r\sin\theta$ up.`,
      t`So $x = h + r\cos\theta$ and $y = k + r\sin\theta$.`,
      t`Each $\theta$ gives one point, and as $\theta$ goes from $0$ to $2\pi$, $P$ goes round once.`,
    ],
    formal: [
      {
        title: "Parametric equations",
        points: [
          t`Turn the radius $CP$ through an angle $\theta$ from the positive $x$-direction.`,
          t`Then $P$ has $x = h + r\cos\theta$ and $y = k + r\sin\theta$.`,
          t`A **parameter** is one number that fixes the point: here it is $\theta$.`,
          t`Equations that give $x$ and $y$ in terms of a parameter are **parametric equations**.`,
          t`Taking $0 \le \theta < 2\pi$ takes $P$ round the circle once.`,
          t`For $x^2 + y^2 = r^2$, centred at the origin, they are $x = r\cos\theta$, $y = r\sin\theta$.`,
        ],
        figure: {
          alt: "A circle with centre C(h, k) and radius r. From the initial arm, pointing in the positive x-direction, the radius CP turns through θ to P(x, y), where x = h + r cos θ and y = k + r sin θ. Then the radius turns a whole turn, θ from 0 to 2π, taking P round the circle once. A second circle of radius r, centred at the origin, has x = r cos θ, y = r sin θ.",
          axes: "xy",
          view: { x: [-3.5, 10], y: [-3.5, 8] },
          elements: [
            { kind: "circle", centre: [5.5, 3.5], r: 2.5 },
            { kind: "point", at: [5.5, 3.5], label: "C(h, k)", labelAt: "sw" },
            { kind: "segment", from: [5.5, 3.5], to: [8, 3.5], tone: "good" },
            { kind: "label", at: [7.4, 3.5], label: "initial arm", labelAt: "s", tone: "good" },
            { kind: "turn", centre: [5.5, 3.5], r: 2.5, to: 120, label: "P(x, y)", labelAt: "nw", step: 1 },
            { kind: "label", at: on([5.5, 3.5], 1.15, 60), label: "θ", labelAt: "ne", step: 1 },
            { kind: "label", at: [7.3, 7.0], label: "x = h + r cos θ", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [7.3, 6.35], label: "y = k + r sin θ", labelAt: "n", tone: "good", step: 2 },
            { kind: "turn", centre: [5.5, 3.5], r: 2.5, to: 360, label: "0 to 2π", labelAt: "e", tone: "muted", step: 5 },
            { kind: "circle", centre: [0, 0], r: 2.5, tone: "good", step: 6 },
            { kind: "label", at: [2.4, -1.8], label: "x = r cos θ", labelAt: "e", tone: "good", step: 6 },
            { kind: "label", at: [2.4, -2.5], label: "y = r sin θ", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Why every θ fits",
        points: [
          t`From $C$ to $P$ is $r\cos\theta$ across and $r\sin\theta$ up.`,
          t`So $x - h = r\cos\theta$ and $y - k = r\sin\theta$; square and add.`,
          t`That gives $(x - h)^2 + (y - k)^2$ $= r^2(\cos^2\theta + \sin^2\theta)$.`,
          t`Recall: $\cos^2\theta + \sin^2\theta = 1$ for every angle $\theta$.`,
          t`So $(x - h)^2 + (y - k)^2 = r^2$: $P$ is on the circle for every $\theta$.`,
        ],
        figure: {
          alt: "A circle with centre C(h, k) and radius r. The radius CP has turned through θ from the initial arm. Dashed legs from C go r cos θ across and r sin θ up to P. Squaring and adding gives CP² = r²(cos²θ + sin²θ) = r² × 1 = r². The radius then turns on to another θ and still ends on the circle.",
          axes: "xy",
          view: { x: [-1, 10.8], y: [-1, 10.9] },
          elements: [
            { kind: "circle", centre: [4.5, 4], r: 3.5 },
            { kind: "point", at: [4.5, 4], label: "C(h, k)", labelAt: "w" },
            { kind: "segment", from: [4.5, 4], to: [8, 4], tone: "good" },
            { kind: "label", at: [8, 4], label: "initial arm", labelAt: "se", tone: "good" },
            { kind: "turn", centre: [4.5, 4], r: 3.5, to: 40, label: "P(x, y)", labelAt: "ne" },
            { kind: "label", at: on([4.5, 4], 1.45, 20), label: "θ", labelAt: "e" },
            { kind: "segment", from: [4.5, 4], to: [on([4.5, 4], 3.5, 40)[0], 4], dashed: true, tone: "muted", label: "r cos θ", labelAt: "s", step: 1 },
            { kind: "segment", from: [on([4.5, 4], 3.5, 40)[0], 4], to: on([4.5, 4], 3.5, 40), dashed: true, tone: "muted", label: "r sin θ", labelAt: "e", step: 1 },
            { kind: "label", at: [4.8, 9.9], label: "CP² = r²cos²θ + r²sin²θ", labelAt: "n", step: 2 },
            { kind: "label", at: [4.8, 9.2], label: "= r²(cos²θ + sin²θ)", labelAt: "n", step: 3 },
            { kind: "label", at: [4.8, 8.5], label: "= r² × 1 = r²", labelAt: "n", step: 4 },
            { kind: "turn", centre: [4.5, 4], r: 3.5, from: 40, to: 130, label: "on the circle too", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "From an equation",
        points: [
          t`To write a circle in parametric form, first find its centre and radius.`,
          t`If $x^2$ has a coefficient other than $1$, divide by it: here, by $2$.`,
          t`Then complete the squares: $(x - 2)^2 + (y + 1)^2 = 9$.`,
          t`So the centre is $(2, -1)$ and $r^2 = 9$, so $r = 3$.`,
          t`The number in front of $\cos\theta$ is $r = 3$, not $r^2 = 9$.`,
          t`So $x = 2 + 3\cos\theta$ and $y = -1 + 3\sin\theta$.`,
        ],
        figure: {
          alt: "The equation 2x² + 2y² − 8x + 4y − 8 = 0, divided by 2: x² + y² − 4x + 2y − 4 = 0. Completing the squares gives (x − 2)² + (y + 1)² = 9: the circle with centre C(2, −1) and radius 3. The radius, not 9, goes in front of cos θ: the radius turns through θ from the initial arm to P, so x = 2 + 3 cos θ, y = −1 + 3 sin θ.",
          axes: "xy",
          view: { x: [-3, 9.8], y: [-6, 4.6] },
          elements: [
            { kind: "label", at: [3.9, 3.9], label: "2x² + 2y² − 8x + 4y − 8 = 0", labelAt: "n" },
            { kind: "label", at: [3.9, 3.2], label: "x² + y² − 4x + 2y − 4 = 0", labelAt: "n", step: 2 },
            { kind: "label", at: [3.9, 2.5], label: "(x − 2)² + (y + 1)² = 9", labelAt: "n", tone: "good", step: 3 },
            { kind: "circle", centre: [2, -1], r: 3, step: 3 },
            { kind: "point", at: [2, -1], label: "C(2, −1)", labelAt: "w", step: 4 },
            { kind: "segment", from: [2, -1], to: [2, -4], label: "r = 3", labelAt: "e", tone: "muted", step: 4 },
            { kind: "label", at: [5.4, -2.4], label: "3cos θ, not 9cos θ", labelAt: "e", tone: "bad", step: 5 },
            { kind: "segment", from: [2, -1], to: [5, -1], tone: "good", step: 6 },
            { kind: "label", at: [4.2, -1], label: "initial arm", labelAt: "s", tone: "good", step: 6 },
            { kind: "turn", centre: [2, -1], r: 3, to: 120, label: "P", labelAt: "n", step: 6 },
            { kind: "label", at: [2.6, -4.5], label: "x = 2 + 3cos θ", labelAt: "s", tone: "good", step: 6 },
            { kind: "label", at: [2.6, -5.2], label: "y = −1 + 3sin θ", labelAt: "s", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Back to centre and radius",
        points: [
          t`Take $x = h - r\sin\theta$, $y = k - r\cos\theta$: minus signs, and $\sin$ in the $x$-equation.`,
          t`To go back, isolate the terms in $\sin\theta$ and $\cos\theta$: $x - h = -r\sin\theta$, $y - k = -r\cos\theta$.`,
          t`Square and add: $\sin^2\theta + \cos^2\theta = 1$ removes $\theta$.`,
          t`That leaves $(x - h)^2 + (y - k)^2 = r^2$.`,
          t`So the centre is still $(h, k)$ and the radius still $r$.`,
          t`The signs and the swap change only where $P$ starts and which way it turns.`,
        ],
        figure: {
          alt: "The equations x = h − r sin θ, y = k − r cos θ. Squaring and adding gives (x − h)² + (y − k)² = r²: the circle with centre C(h, k) and radius r. At θ = 0, P is straight below C, so the initial arm points down; as θ grows to π/2, the radius turns clockwise to the point straight left of C.",
          axes: "xy",
          view: { x: [-1, 11], y: [-1, 10.9] },
          elements: [
            { kind: "label", at: [5.5, 9.9], label: "x = h − r sin θ", labelAt: "n" },
            { kind: "label", at: [5.5, 9.2], label: "y = k − r cos θ", labelAt: "n" },
            { kind: "circle", centre: [5.5, 4], r: 3.5, step: 4 },
            { kind: "label", at: [5.5, 7.9], label: "(x − h)² + (y − k)² = r²", labelAt: "n", tone: "good", step: 4 },
            { kind: "point", at: [5.5, 4], label: "C(h, k)", labelAt: "nw", step: 5 },
            { kind: "segment", from: [5.5, 4], to: [9, 4], label: "r", labelAt: "n", tone: "muted", step: 5 },
            { kind: "segment", from: [5.5, 4], to: [5.5, 0.5], tone: "good", step: 6 },
            { kind: "label", at: [5.5, 2.2], label: "θ = 0", labelAt: "e", tone: "good", step: 6 },
            { kind: "turn", centre: [5.5, 4], r: 3.5, from: 270, to: 180, label: "θ = π/2", labelAt: "n", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the parametric equations of the circle $x^2 + y^2 - 6x + 4y - 3 = 0$.`,
      steps: [
        t`Complete the squares: $(x^2 - 6x + 9) + (y^2 + 4y + 4)$ equals $3 + 9 + 4$, so $(x - 3)^2 + (y + 2)^2 = 16$.`,
        t`The centre is $C(3, -2)$ and $r^2 = 16$, so $r = 4$.`,
        t`Let CP make the angle $\theta$ with the positive $x$-direction. Then $x - 3 = 4\cos\theta$ and $y + 2 = 4\sin\theta$.`,
        t`So $x = 3 + 4\cos\theta$ and $y = -2 + 4\sin\theta$.`,
      ],
      answer: t`$x = 3 + 4\cos\theta$, $y = -2 + 4\sin\theta$`,
      figure: {
        alt: "The circle (x − 3)² + (y + 2)² = 16, centre C(3, −2), radius 4. A point P on it makes the angle θ at C with the positive x-direction, so P is (3 + 4 cos θ, −2 + 4 sin θ).",
        axes: "xy",
        view: { x: [-2, 9], y: [-8, 3.2] },
        elements: [
          { kind: "circle", centre: [3, -2], r: 4, step: 1 },
          { kind: "point", at: [3, -2], label: "C(3, −2)", labelAt: "w", step: 2 },
          { kind: "segment", from: [3, -2], to: [7, -2], label: "r = 4", labelAt: "s", tone: "muted", step: 2 },
          { kind: "segment", from: [3, -2], to: [7, -2], tone: "good", step: 3 },
          { kind: "label", at: [5.6, -2], label: "initial arm", labelAt: "n", tone: "good", step: 3 },
          { kind: "turn", centre: [3, -2], r: 4, to: 120, label: "P", labelAt: "nw", step: 3 },
          { kind: "label", at: on([3, -2], 1.7, 35), label: "θ", labelAt: "e", step: 3 },
          { kind: "label", at: [4.6, -7.2], label: "x = 3 + 4cos θ, y = −2 + 4sin θ", labelAt: "n", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A circle with centre C(h, k) and radius r. From C, the initial arm points in the positive x-direction. The radius turns anticlockwise through θ from it to P(x, y) on the circle. From C, go r cos θ across and r sin θ up to reach P, so x = h + r cos θ and y = k + r sin θ. Then the radius turns a whole turn, θ from 0 to 2π, and P goes round the circle once.",
      axes: "xy",
      view: { x: [-1, 9.5], y: [-1, 9.6] },
      elements: [
        { kind: "circle", centre: [4.5, 4], r: 3.5, step: 1 },
        { kind: "point", at: [4.5, 4], label: "C(h, k)", labelAt: "nw", step: 1 },
        { kind: "segment", from: [4.5, 4], to: [8, 4], tone: "good", step: 2 },
        { kind: "label", at: [6.9, 4], label: "initial arm", labelAt: "s", tone: "good", step: 2 },
        { kind: "turn", centre: [4.5, 4], r: 3.5, to: 75, label: "P(x, y)", labelAt: "ne", step: 3 },
        { kind: "label", at: on([4.5, 4], 1.45, 37), label: "θ", labelAt: "e", step: 3 },
        { kind: "label", at: on([4.5, 4], 1.75, 75), label: "r", labelAt: "w", step: 3 },
        { kind: "segment", from: [4.5, 4], to: [5.406, 4], dashed: true, tone: "muted", label: "r cos θ", labelAt: "s", step: 4 },
        { kind: "segment", from: [5.406, 4], to: [5.406, 7.381], dashed: true, tone: "muted", label: "r sin θ", labelAt: "e", step: 4 },
        { kind: "label", at: [4.5, 8.7], label: "x = h + r cos θ,  y = k + r sin θ", labelAt: "n", tone: "good", step: 5 },
        { kind: "turn", centre: [4.5, 4], r: 3.5, to: 360, label: "θ = 2π", labelAt: "se", tone: "muted", step: 6 },
      ],
    },
    visualSpec: t`Drag $\theta$ round from $0$ to $2\pi$: P moves on the circle while the dashed legs $r\cos\theta$ and $r\sin\theta$ stretch, shrink and change sign, and the readout shows $x = h + r\cos\theta$, $y = k + r\sin\theta$ updating. Sliders for $h$, $k$ and $r$ move and resize the circle.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Mixes up $r$ and $r^2$: writes $x = h + r^2\cos\theta$, or reads the coefficient of $\cos\theta$ as $r^2$`,
      remediation: t`The number in front of $\cos\theta$ and $\sin\theta$ is the radius $r$, a length. When the equation gives $r^2 = 25$, write $5\cos\theta$, not $25\cos\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes the centre with the wrong signs: $(-3, 4)$ from $(x - 3)^2 + (y + 4)^2$, or $(-h, -k)$ from $x = h + \ldots$`,
      remediation: t`$(x - h)^2$ has centre coordinate $h$: $(x - 3)^2$ means $h = 3$. In $x = h + r\cos\theta$ the constant term is the centre's coordinate as it stands, sign included.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M3",
      mistake: t`Uses $x = r\cos\theta$, $y = r\sin\theta$ for every circle, dropping the centre`,
      remediation: t`$x = r\cos\theta$, $y = r\sin\theta$ is only for a circle centred at the origin. For centre $(h, k)$, start from the centre: $x = h + r\cos\theta$, $y = k + r\sin\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: t`Moves the constant term across without changing its sign: $r^2 = g^2 + f^2 + c$`,
      remediation: t`A term changes sign when it moves across the $=$ sign: $x^2 + y^2 + 2gx + 2fy + c = 0$ gives $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C05-M5",
      mistake: t`Completes the squares in $ax^2 + ay^2 + \ldots = 0$ without first dividing by $a$`,
      remediation: t`Divide the whole equation by the coefficient of $x^2$ first, so that $x^2$ and $y^2$ have coefficient $1$; only then read off the centre and radius.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C05-M6",
      mistake: t`Believes the equation containing $\cos\theta$ always gives $x$, so takes its constant as $h$`,
      remediation: t`Each equation gives its own coordinate: the constant in the $x$-equation is $h$ and the one in the $y$-equation is $k$, whether $\cos\theta$ or $\sin\theta$ appears there.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M3 gives the key when the centre is the origin, C05-M4 when $c = 0$, C05-M5 when the coefficient of $x^2$ is $1$, and C05-M6 when $\cos\theta$ is already in the $x$-equation: diagnose each on items where it differs from the key.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.3 Q1(iii)" },
      stem: t`The parametric equations of the circle $(x - 3)^2 + (y + 4)^2 = 25$ are:`,
      verify: { kind: "value", inputs: { eq: "(x - 3)**2 + (y + 4)**2 - 25" }, params: { want: "param" } },
      options: [
        { key: "A", text: t`$x = 5\cos\theta,\ y = 5\sin\theta$`, correct: false, misconceptionId: "C05-M3", value: "(5*cos(theta), 5*sin(theta))" },
        { key: "B", text: t`$x = 3 + 5\cos\theta,\ y = -4 + 5\sin\theta$`, correct: true, value: "(5*cos(theta) + 3, 5*sin(theta) - 4)" },
        { key: "C", text: t`$x = 3 + 25\cos\theta,\ y = -4 + 25\sin\theta$`, correct: false, misconceptionId: "C05-M1", value: "(25*cos(theta) + 3, 25*sin(theta) - 4)" },
        { key: "D", text: t`$x = -3 + 5\cos\theta,\ y = 4 + 5\sin\theta$`, correct: false, misconceptionId: "C05-M2", value: "(5*cos(theta) - 3, 5*sin(theta) + 4)" },
      ],
      solution: {
        steps: [
          t`Compare with $(x - h)^2 + (y - k)^2 = r^2$: $h = 3$, $k = -4$ and $r^2 = 25$, so the radius is $r = 5$, not $25$.`,
          t`Put $x - 3 = 5\cos\theta$ and $y + 4 = 5\sin\theta$. Then $(x - 3)^2 + (y + 4)^2 = 25(\cos^2\theta + \sin^2\theta) = 25$, so every $\theta$ gives a point of the circle.`,
          t`The parametric equations are $x = 3 + 5\cos\theta$, $y = -4 + 5\sin\theta$.`,
        ],
        figure: {
          alt: "The circle (x − 3)² + (y + 4)² = 25, centre C(3, −4), radius 5. P on it makes the angle θ at C, so P is (3 + 5 cos θ, −4 + 5 sin θ).",
          axes: "xy",
          view: { x: [-3.5, 10], y: [-11, 2.2] },
          elements: [
            { kind: "circle", centre: [3, -4], r: 5, step: 1 },
            { kind: "point", at: [3, -4], label: "C(3, −4)", labelAt: "sw", step: 1 },
            { kind: "segment", from: [3, -4], to: [8, -4], label: "r = 5", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [3, -4], to: [-1.33, -1.5], dashed: true, step: 2 },
            { kind: "angle", at: [3, -4], from: 0, to: 150, label: "θ", labelAt: "e", step: 2 },
            { kind: "point", at: [-1.33, -1.5], label: "P", labelAt: "w", step: 2 },
            { kind: "label", at: [5.1, -10.4], label: "x = 3 + 5cos θ, y = −4 + 5sin θ", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.3 Q1(ii)" },
      stem: t`The parametric equations of the circle $x^2 + y^2 + 2x - 4y - 4 = 0$ are:`,
      verify: { kind: "value", inputs: { eq: "x**2 + y**2 + 2*x - 4*y - 4" }, params: { want: "param" } },
      options: [
        { key: "A", text: t`$x = 1 + 3\cos\theta,\ y = -2 + 3\sin\theta$`, correct: false, misconceptionId: "C05-M2", value: "(3*cos(theta) + 1, 3*sin(theta) - 2)" },
        { key: "B", text: t`$x = -1 + \cos\theta,\ y = 2 + \sin\theta$`, correct: false, misconceptionId: "C05-M4", value: "(cos(theta) - 1, sin(theta) + 2)" },
        { key: "C", text: t`$x = -1 + 9\cos\theta,\ y = 2 + 9\sin\theta$`, correct: false, misconceptionId: "C05-M1", value: "(9*cos(theta) - 1, 9*sin(theta) + 2)" },
        { key: "D", text: t`$x = -1 + 3\cos\theta,\ y = 2 + 3\sin\theta$`, correct: true, value: "(3*cos(theta) - 1, 3*sin(theta) + 2)" },
      ],
      solution: {
        steps: [
          t`Complete the squares: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 4 + 1 + 4$, so $(x + 1)^2 + (y - 2)^2 = 9$. The $-4$ moved across becomes $+4$.`,
          t`The centre is $(-1, 2)$ and $r = \sqrt{9} = 3$.`,
          t`With $x + 1 = 3\cos\theta$, $y - 2 = 3\sin\theta$: $x = -1 + 3\cos\theta$, $y = 2 + 3\sin\theta$.`,
        ],
        figure: {
          alt: "The circle (x + 1)² + (y − 2)² = 9, centre C(−1, 2), radius 3. P on it makes the angle θ at C, so P is (−1 + 3 cos θ, 2 + 3 sin θ).",
          axes: "xy",
          view: { x: [-5, 4.6], y: [-2.6, 6.4] },
          elements: [
            { kind: "circle", centre: [-1, 2], r: 3, step: 1 },
            { kind: "point", at: [-1, 2], label: "C(−1, 2)", labelAt: "w", step: 2 },
            { kind: "segment", from: [-1, 2], to: [-1, -1], label: "r = 3", labelAt: "w", tone: "muted", step: 2 },
            { kind: "segment", from: [-1, 2], to: [2, 2], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [-1, 2], to: [-2.5, 4.598], dashed: true, step: 3 },
            { kind: "angle", at: [-1, 2], from: 0, to: 120, label: "θ", labelAt: "n", step: 3 },
            { kind: "point", at: [-2.5, 4.598], label: "P", labelAt: "nw", step: 3 },
            { kind: "label", at: [2.4, 5.5], label: "x = −1 + 3cos θ", labelAt: "n", tone: "good", step: 3 },
            { kind: "label", at: [2.4, 4.8], label: "y = 2 + 3sin θ", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.3 Q2" },
      stem: t`A parametric representation of the circle $3x^2 + 3y^2 - 4x + 6y - 4 = 0$ is:`,
      verify: { kind: "value", inputs: { eq: "3*x**2 + 3*y**2 - 4*x + 6*y - 4" }, params: { want: "param" } },
      options: [
        { key: "A", text: t`$x = \frac{2}{3} + \frac{5}{3}\cos\theta,\ y = -1 + \frac{5}{3}\sin\theta$`, correct: true, value: "(5*cos(theta)/3 + 2/3, 5*sin(theta)/3 - 1)" },
        { key: "B", text: t`$x = 2 + \sqrt{17}\cos\theta,\ y = -3 + \sqrt{17}\sin\theta$`, correct: false, misconceptionId: "C05-M5", value: "(sqrt(17)*cos(theta) + 2, sqrt(17)*sin(theta) - 3)" },
        { key: "C", text: t`$x = \frac{2}{3} + \frac{1}{3}\cos\theta,\ y = -1 + \frac{1}{3}\sin\theta$`, correct: false, misconceptionId: "C05-M4", value: "(cos(theta)/3 + 2/3, sin(theta)/3 - 1)" },
        { key: "D", text: t`$x = - \frac{2}{3} + \frac{5}{3}\cos\theta,\ y = 1 + \frac{5}{3}\sin\theta$`, correct: false, misconceptionId: "C05-M2", value: "(5*cos(theta)/3 - 2/3, 5*sin(theta)/3 + 1)" },
      ],
      solution: {
        steps: [
          t`Divide by $3$ first, so that $x^2$ and $y^2$ have coefficient $1$: $x^2 + y^2 - \frac{4}{3}x + 2y - \frac{4}{3} = 0$.`,
          t`Complete the squares: $\left(x - \frac{2}{3}\right)^2 + (y + 1)^2 = \frac{4}{9} + 1 + \frac{4}{3} = \frac{25}{9}$. Centre $\left(\frac{2}{3}, -1\right)$, radius $\frac{5}{3}$.`,
          t`So $x = \frac{2}{3} + \frac{5}{3}\cos\theta$, $y = -1 + \frac{5}{3}\sin\theta$.`,
        ],
        figure: {
          alt: "The circle 3x² + 3y² − 4x + 6y − 4 = 0, which is (x − 2/3)² + (y + 1)² = 25/9: centre C(2/3, −1), radius 5/3.",
          axes: "xy",
          view: { x: [-2, 4.4], y: [-3.4, 1.6] },
          elements: [
            { kind: "circle", centre: [0.667, -1], r: 1.667, step: 2 },
            { kind: "point", at: [0.667, -1], label: "C(2/3, −1)", labelAt: "e", step: 2 },
            { kind: "segment", from: [0.667, -1], to: [0.667, -2.667], label: "r = 5/3", labelAt: "e", tone: "muted", step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc I Q10" },
      stem: t`The parametric equations of the circle $x^2 + y^2 + mx + my = 0$, where $m > 0$, are:`,
      verify: { kind: "value", inputs: { eq: "x**2 + y**2 + m*x + m*y" }, params: { want: "param" } },
      options: [
        { key: "A", text: t`$x = \frac{m}{\sqrt{2}}\cos\theta,\ y = \frac{m}{\sqrt{2}}\sin\theta$`, correct: false, misconceptionId: "C05-M3", value: "(sqrt(2)*m*cos(theta)/2, sqrt(2)*m*sin(theta)/2)" },
        { key: "B", text: t`$x = - \frac{m}{2} + \frac{m^{2}}{2}\cos\theta,\ y = - \frac{m}{2} + \frac{m^{2}}{2}\sin\theta$`, correct: false, misconceptionId: "C05-M1", value: "(m**2*cos(theta)/2 - m/2, m**2*sin(theta)/2 - m/2)" },
        { key: "C", text: t`$x = - \frac{m}{2} + \frac{m}{\sqrt{2}}\cos\theta,\ y = - \frac{m}{2} + \frac{m}{\sqrt{2}}\sin\theta$`, correct: true, value: "(sqrt(2)*m*cos(theta)/2 - m/2, sqrt(2)*m*sin(theta)/2 - m/2)" },
        { key: "D", text: t`$x = \frac{m}{2} + \frac{m}{\sqrt{2}}\cos\theta,\ y = \frac{m}{2} + \frac{m}{\sqrt{2}}\sin\theta$`, correct: false, misconceptionId: "C05-M2", value: "(sqrt(2)*m*cos(theta)/2 + m/2, sqrt(2)*m*sin(theta)/2 + m/2)" },
      ],
      solution: {
        steps: [
          t`Complete the squares: $\left(x + \frac{m}{2}\right)^2 + \left(y + \frac{m}{2}\right)^2 = \frac{m^2}{4} + \frac{m^2}{4} = \frac{m^2}{2}$.`,
          t`Centre $\left(-\frac{m}{2}, -\frac{m}{2}\right)$; radius $\sqrt{\frac{m^2}{2}} = \frac{m}{\sqrt{2}}$, since $m > 0$.`,
          t`So $x = -\frac{m}{2} + \frac{m}{\sqrt{2}}\cos\theta$, $y = -\frac{m}{2} + \frac{m}{\sqrt{2}}\sin\theta$.`,
        ],
        figure: {
          alt: "Drawn for m = 4: the circle x² + y² + 4x + 4y = 0, centre C(−m/2, −m/2) = (−2, −2), radius m/√2 = 2√2. It passes through the origin.",
          axes: "xy",
          view: { x: [-5.6, 4.4], y: [-5.6, 2.8] },
          elements: [
            { kind: "circle", centre: [-2, -2], r: 2.828, step: 1 },
            { kind: "point", at: [-2, -2], label: "C(−m/2, −m/2)", labelAt: "n", step: 2 },
            { kind: "segment", from: [-2, -2], to: [-4.828, -2], label: "r = m/√2", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [2.2, 1.4], label: "drawn for m = 4", labelAt: "n", tone: "good", step: 1 },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q2" },
      stem: t`The centre and radius of the circle $x = 3 - 4\sin\theta$, $y = 2 - 4\cos\theta$ are:`,
      verify: { kind: "value", inputs: { a: "3", p: "-4", b: "2", q: "-4" }, params: { want: "centre_radius", xf: "sin", yf: "cos" } },
      options: [
        { key: "A", text: t`centre $(3, 2)$, radius $4$`, correct: true, value: "(3, 2, 4)" },
        { key: "B", text: t`centre $(3, 2)$, radius $2$`, correct: false, misconceptionId: "C05-M1", value: "(3, 2, 2)" },
        { key: "C", text: t`centre $(-3, -2)$, radius $4$`, correct: false, misconceptionId: "C05-M2", value: "(-3, -2, 4)" },
        { key: "D", text: t`centre $(2, 3)$, radius $4$`, correct: false, misconceptionId: "C05-M6", value: "(2, 3, 4)" },
      ],
      solution: {
        steps: [
          t`Isolate the trigonometric terms: $x - 3 = -4\sin\theta$ and $y - 2 = -4\cos\theta$.`,
          t`Square and add: $(x - 3)^2 + (y - 2)^2 = 16(\sin^2\theta + \cos^2\theta) = 16$.`,
          t`So the centre is $(3, 2)$ and the radius is $4$. The minus signs and the swapped $\sin$ and $\cos$ only change where the point starts and which way it goes round.`,
        ],
        figure: {
          alt: "The circle (x − 3)² + (y − 2)² = 16, centre C(3, 2), radius 4.",
          axes: "xy",
          view: { x: [-2, 8.6], y: [-3, 7] },
          elements: [
            { kind: "circle", centre: [3, 2], r: 4, step: 2 },
            { kind: "point", at: [3, 2], label: "C(3, 2)", labelAt: "n", step: 3 },
            { kind: "segment", from: [3, 2], to: [7, 2], label: "r = 4", labelAt: "s", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q2" },
      stem: t`The Cartesian equation of the circle $x = -2 + 3\sin\theta$, $y = 1 + 3\cos\theta$ is:`,
      verify: { kind: "locus", inputs: { a: "-2", p: "3", b: "1", q: "3" }, params: { want: "equation", xf: "sin", yf: "cos" } },
      options: [
        { key: "A", text: t`$\left(x + 2\right)^2 + \left(y - 1\right)^2 = 9$`, correct: true, value: "x**2 + 4*x + y**2 - 2*y - 4" },
        { key: "B", text: t`$\left(x - 1\right)^2 + \left(y + 2\right)^2 = 9$`, correct: false, misconceptionId: "C05-M6", value: "x**2 - 2*x + y**2 + 4*y - 4" },
        { key: "C", text: t`$\left(x + 2\right)^2 + \left(y - 1\right)^2 = 3$`, correct: false, misconceptionId: "C05-M1", value: "x**2 + 4*x + y**2 - 2*y + 2" },
        { key: "D", text: t`$\left(x - 2\right)^2 + \left(y + 1\right)^2 = 9$`, correct: false, misconceptionId: "C05-M2", value: "x**2 - 4*x + y**2 + 2*y - 4" },
      ],
      solution: {
        steps: [
          t`Isolate the trigonometric terms: $x + 2 = 3\sin\theta$ and $y - 1 = 3\cos\theta$.`,
          t`Square and add: $(x + 2)^2 + (y - 1)^2 = 9(\sin^2\theta + \cos^2\theta) = 9$. The centre is $(-2, 1)$, from the $x$-equation and the $y$-equation in turn, and the radius is $3$.`,
        ],
        figure: {
          alt: "The circle (x + 2)² + (y − 1)² = 9, centre C(−2, 1), radius 3.",
          axes: "xy",
          view: { x: [-6, 3.6], y: [-2.8, 5] },
          elements: [
            { kind: "circle", centre: [-2, 1], r: 3, step: 2 },
            { kind: "point", at: [-2, 1], label: "C(−2, 1)", labelAt: "n", step: 2 },
            { kind: "segment", from: [-2, 1], to: [-5, 1], label: "r = 3", labelAt: "s", tone: "muted", step: 2 },
          ],
        },
      },
    },
  ],
};
