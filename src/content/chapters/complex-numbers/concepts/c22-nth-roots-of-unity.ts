import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The point r from 0 along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

/** The kth of the n roots of zⁿ = rⁿ: r from 0 at the angle k × 360°/n. */
const root = (n: number, k: number, r = 1): Pt => tip(r, (360 * k) / n);

/** The initial arm along the positive real axis, `len` long, labelled above the axis at `labelX`. */
const initialArm = (len: number, labelX: number, step?: number): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [len, 0], tone: "good", step },
  { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good", step },
];

/** The dashed sides of the regular n-gon through the nth roots of unity. */
const polygon = (n: number, step?: number): FigureElement[] =>
  Array.from({ length: n }, (_, k) => ({ kind: "segment", from: root(n, k), to: root(n, k + 1), dashed: true, tone: "muted", step }) as FigureElement);

const unitCircle: FigureElement = { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" };

export const c22: Concept = {
  id: "C22",
  status: "approved",
  hook: {
    prompt: t`$z^6 = 1$ has six solutions. **Where are they on the Argand plane?**`,
    reveal: t`Equally spaced round the unit circle, $60^\circ$ apart, starting at $1$: the corners of a regular hexagon.`,
  },
  explanation: {
    intuition: [
      t`An **$n$th root of unity** solves $z^n = 1$ (**unity** means one), and $z = 1$ is always one.`,
      t`Take $n = 6$: every root has $|z|^6 = 1$, so it lies on the **unit circle**, radius $1$ about $0$.`,
      t`Turn an arm $\frac{2\pi}6$ from the **initial arm**, the positive real axis: its tip $\alpha$ is a root.`,
      t`Recall De Moivre: $\alpha^6$ turns six times as far, a whole turn of $2\pi$, so $\alpha^6 = 1$.`,
      t`Each further turn of $\frac{2\pi}6$ gives another root: $\alpha^2$, $\alpha^3$, $\alpha^4$ and $\alpha^5$.`,
      t`The six roots make a **regular hexagon**, six equal sides, so they balance out and add to $0$.`,
    ],
    formal: [
      {
        title: "Where the n roots sit",
        points: [
          t`Each root of $z^n = 1$ is $\cos\theta + i\sin\theta$, with $\theta = \frac{2\pi k}n$ for a whole number $k$.`,
          t`Taking $k = 0, 1, \ldots, n - 1$ gives $n$ different roots.`,
          t`Recall De Moivre: the $n$th power has angle $2\pi k$, $k$ whole turns, so it equals $1$.`,
          t`Neighbouring roots are $\frac{2\pi}n$ apart, so $n$ equal steps fill one whole turn.`,
          t`Then $k = n$ gives the angle $2\pi$, back at $1$, so there are no other roots.`,
        ],
        figure: {
          alt: "The eighth roots of unity on the unit circle. An arm turns 2π/8 from the initial arm to the root with k = 1; the other seven roots, starting at 1, are spaced round the circle. A second arm turns a further 2π/8, to the next root, i.",
          view: { x: [-1.8, 2.4], y: [-1.5, 1.5] },
          elements: [
            unitCircle,
            ...initialArm(2.2, 1.65),
            { kind: "turn", r: 1, to: 45, label: "2π/8", labelAt: "ne", step: 1 },
            { kind: "point", at: root(8, 1), step: 1 },
            { kind: "point", at: root(8, 0), label: "1", labelAt: "ne", step: 2 },
            ...[2, 3, 4, 5, 6, 7].map((k): FigureElement => ({ kind: "point", at: root(8, k), step: 2 })),
            { kind: "turn", r: 1, from: 45, to: 90, label: "+ 2π/8", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Powers of the first root",
        points: [
          t`Write $\alpha$ for the root with $k = 1$, at the angle $\frac{2\pi}n$ from the initial arm.`,
          t`Recall: multiplying by $\alpha$ adds its angle, turning a point a further $\frac{2\pi}n$.`,
          t`So the roots are $1, \alpha, \alpha^2, \ldots, \alpha^{n-1}$, and $\alpha^n = 1$.`,
          t`Note that $\alpha$ depends on $n$: it is $\omega$ only for $n = 3$; for $n = 5$ it is a fifth of a turn.`,
        ],
        figure: {
          alt: "The fifth roots of unity. An arm turns a fifth of a turn, 2π/5, from the initial arm to α. A second arm turns a further 2π/5, to α². The other roots are α³ and α⁴, and the fifth step lands back on 1.",
          view: { x: [-1.8, 2.4], y: [-1.5, 1.5] },
          elements: [
            unitCircle,
            ...initialArm(2.2, 1.65),
            { kind: "turn", r: 1, to: 72, label: "α", labelAt: "ne", step: 1 },
            { kind: "point", at: root(5, 1), step: 1 },
            { kind: "turn", r: 1, from: 72, to: 144, label: "α²", labelAt: "nw", step: 2 },
            { kind: "point", at: root(5, 2), step: 2 },
            { kind: "point", at: root(5, 0), label: "1", labelAt: "ne", step: 3 },
            { kind: "point", at: root(5, 3), label: "α³", labelAt: "sw", step: 3 },
            { kind: "point", at: root(5, 4), label: "α⁴", labelAt: "se", step: 3 },
          ],
        },
      },
      {
        title: "The roots add to 0",
        points: [
          t`The $n$ roots are the corners of a **regular polygon**, with equal sides, centred on $0$.`,
          t`Draw each root as an arrow from $0$: by symmetry, the arrows cancel out.`,
          t`So all $n$ roots add to $0$: $1 + \alpha + \cdots + \alpha^{n-1} = 0$.`,
          t`Recall: $1 + \omega + \omega^2 = 0$ is the case $n = 3$.`,
          t`Leave out the root $1$: the others add to $0 - 1 = -1$, not $0$.`,
        ],
        figure: {
          alt: "The fifth roots of unity are the corners of a regular pentagon centred on 0. Arrows from 0 to the five roots cancel out, so 1 + α + α² + α³ + α⁴ = 0. Without the root 1, the other four add to −1.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            unitCircle,
            ...polygon(5, 1),
            ...[0, 1, 2, 3, 4].map((k): FigureElement => ({ kind: "vector", to: root(5, k), step: 2 })),
            { kind: "label", at: [-1.75, -1.3], label: "1 + α + α² + α³ + α⁴ = 0", labelAt: "e", step: 3 },
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "nw", tone: "good", step: 5 },
            { kind: "label", at: [-1.75, 1.3], label: "α + α² + α³ + α⁴ = −1", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "The product of the roots",
        points: [
          t`Apart from $1$, the roots pair off as **mirror images**: each is the other reflected in the real axis.`,
          t`Recall: a mirror-image pair is $z$ and its conjugate $\bar z$, and $z\bar z = |z|^2 = 1$.`,
          t`For odd $n$, every root but $1$ has a partner, so the product is $1$.`,
          t`For even $n$, the root $-1$ is its own mirror image, so the product is $-1$.`,
          t`Together: the product of all $n$ roots is $(-1)^{n+1}$.`,
          t`No root is $0$, so the product is never $0$, unlike the sum.`,
        ],
        figure: {
          alt: "The sixth roots of unity. Apart from 1, they pair off across the real axis: each pair is a number and its conjugate, multiplying to 1. The root −1 lies on the real axis and has no partner, so the product of all six is (−1)⁶⁺¹ = −1.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            unitCircle,
            { kind: "point", at: root(6, 0), label: "1", labelAt: "ne" },
            ...[1, 2, 3, 4, 5].map((k): FigureElement => ({ kind: "point", at: root(6, k) })),
            { kind: "segment", from: root(6, 1), to: root(6, 5), dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: root(6, 2), to: root(6, 4), dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: root(6, 1), label: "pairs multiply to 1", labelAt: "ne", tone: "muted", step: 2 },
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "nw", tone: "bad", step: 4 },
            { kind: "label", at: [-1.75, -1.3], label: "(−1)⁶⁺¹ = −1", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Roots of zⁿ = k",
        points: [
          t`For $k > 0$, the **real $n$th root** $\sqrt[n]k$ is the positive number whose $n$th power is $k$.`,
          t`Take $z^3 = 27$: each root has $|z|^3 = 27$, so $|z| = \sqrt[3]{27} = 3$.`,
          t`In general, the roots of $z^n = k$ lie on a circle of radius $\sqrt[n]k$, not $1$ or $\sqrt k$.`,
          t`Their angles match the roots of unity: $\frac{2\pi}n$ apart, starting on the initial arm.`,
          t`So the roots of $z^n = k$ are $\sqrt[n]k$ times the roots of unity: here $3$, $3\omega$, $3\omega^2$.`,
        ],
        figure: {
          alt: "The roots of z³ = 27 lie on the circle of radius 3. An arm turns 2π/3 from the initial arm, as for the cube roots of unity 1, ω and ω² on the unit circle. The roots are 3 times those: 3, 3ω and 3ω².",
          view: { x: [-4.2, 4.4], y: [-3.4, 3.4] },
          elements: [
            ...initialArm(4, 1.9),
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", step: 2 },
            { kind: "label", at: tip(3, 45), label: "|z| = 3", labelAt: "ne", step: 2 },
            { ...unitCircle, step: 4 },
            { kind: "point", at: root(3, 0), tone: "muted", step: 4 },
            { kind: "point", at: root(3, 1), label: "ω", labelAt: "ne", tone: "muted", step: 4 },
            { kind: "point", at: root(3, 2), label: "ω²", labelAt: "sw", tone: "muted", step: 4 },
            { kind: "turn", r: 3, to: 120, label: "2π/3", labelAt: "w", step: 4 },
            { kind: "point", at: root(3, 0, 3), label: "3", labelAt: "ne", step: 5 },
            { kind: "point", at: root(3, 1, 3), label: "3ω", labelAt: "ne", step: 5 },
            { kind: "point", at: root(3, 2, 3), label: "3ω²", labelAt: "se", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the product of the fifth roots of unity.`,
      steps: [
        t`Use the product rule $(-1)^{n+1}$ with $n = 5$.`,
        t`$(-1)^6 = 1$.`,
      ],
      answer: t`$1$`,
      figure: {
        alt: "The five fifth roots of unity. Apart from 1, they form two mirror-image pairs across the real axis, and each pair multiplies to 1, so the product of all five is 1, as (−1)⁶ = 1 says.",
        view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
          { kind: "point", at: [1, 0], label: "1", labelAt: "ne", step: 1 },
          { kind: "point", at: [0.309, 0.951], step: 1 },
          { kind: "point", at: [-0.809, 0.588], step: 1 },
          { kind: "point", at: [-0.809, -0.588], step: 1 },
          { kind: "point", at: [0.309, -0.951], step: 1 },
          { kind: "segment", from: [0.309, 0.951], to: [0.309, -0.951], dashed: true, tone: "muted", step: 2 },
          { kind: "segment", from: [-0.809, 0.588], to: [-0.809, -0.588], dashed: true, tone: "muted", step: 2 },
          { kind: "label", at: [0.309, 0.951], label: "pairs multiply to 1", labelAt: "ne", tone: "muted", step: 2 },
        ],
      },
    },
    figure: {
      alt: "The sixth roots of unity. The root 1 sits on the initial arm, the positive real axis, and every root lies on the unit circle. An arm turns a sixth of a turn, 2π/6, from the initial arm to the root α; a further 2π/6 reaches α², and α³, α⁴ and α⁵ follow, equally spaced. The six roots form a regular hexagon centred on 0, so they balance out and add to 0.",
      view: { x: [-1.8, 2.4], y: [-1.5, 1.5] },
      elements: [
        ...initialArm(2.2, 1.65, 3),
        { kind: "point", at: root(6, 0), label: "1", labelAt: "ne", step: 1 },
        { ...unitCircle, step: 2 },
        { kind: "turn", r: 1, to: 60, label: "α", labelAt: "ne", step: 3 },
        { kind: "point", at: root(6, 1), step: 3 },
        { kind: "label", at: tip(0.55, 30), label: "2π/6", labelAt: "e", step: 3 },
        { kind: "turn", r: 1, from: 60, to: 120, label: "α²", labelAt: "nw", step: 5 },
        { kind: "point", at: root(6, 2), step: 5 },
        { kind: "point", at: root(6, 3), label: "α³", labelAt: "nw", step: 5 },
        { kind: "point", at: root(6, 4), label: "α⁴", labelAt: "sw", step: 5 },
        { kind: "point", at: root(6, 5), label: "α⁵", labelAt: "se", step: 5 },
        ...polygon(6, 6),
      ],
    },
    visualSpec: t`A slider for $n$ redraws the $n$ roots round the unit circle as a regular polygon, with arrows from the origin that visibly cancel to a zero sum.`,
  },
  misconceptions: [
    {
      id: "C22-M1",
      mistake: "Saying the roots other than 1 add to 0",
      remediation: t`All $n$ roots add to $0$, so leaving out the root $1$ leaves $-1$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M2",
      mistake: t`Spacing the roots $\dfrac\pi n$ apart`,
      remediation: t`$n$ equal steps fill the whole turn $2\pi$, so the spacing is $\dfrac{2\pi}n$.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M3",
      mistake: "Saying the product of all the roots is always 1",
      remediation: t`The product is $(-1)^{n+1}$: $1$ for odd $n$, $-1$ for even $n$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M4",
      mistake: t`Forgetting to scale by $\sqrt[n]k$`,
      remediation: t`The roots of $z^n = k$ lie on a circle of radius $\sqrt[n]k$, not 1.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M5",
      mistake: "Counting the roots instead of adding them",
      remediation: t`Each root is a complex number, not 1: by symmetry they add to $0$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M6",
      mistake: "Saying the product is 0, like the sum",
      remediation: t`None of the roots is $0$, so their product can't be $0$; it is $(-1)^{n+1}$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M7",
      mistake: t`Thinking the roots of unity are only $\pm1$ and $\pm i$`,
      remediation: t`Those are the fourth roots. The $n$th roots are $n$ points spaced $\dfrac{2\pi}n$ apart.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M8",
      mistake: t`Removing the root $1$ with the wrong sign: $0 + 1 = 1$`,
      remediation: t`All $n$ roots add to $0$, so the others add to $0 - 1 = -1$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M9",
      mistake: t`Taking $\omega$ as the first root whatever $n$ is`,
      remediation: t`$\omega$ is a third of a turn, the first cube root. The first $n$th root is $\dfrac{2\pi}n$ round: a fifth of a turn for $n = 5$.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M10",
      mistake: t`Taking $\sqrt k$ instead of $\sqrt[n]k$ as the radius`,
      remediation: t`Each root has $|z|^n = k$, so $|z| = \sqrt[n]k$: for $z^4 = 81$ the radius is $3$, not $9$.`,
      fallback: { kind: "concept", id: "C17" },
    },
  ],
  items: [
    {
      id: "C22-Q1",
      source: { kind: "authored" },
      stem: t`If $1, \alpha, \alpha^2, \alpha^3, \alpha^4$ are the fifth roots of unity, then $\alpha + \alpha^2 + \alpha^3 + \alpha^4 = ?$`,
      verify: { kind: "value", inputs: { n: "5" }, params: { op: "sum_powers" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C22-M1", value: "0" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C22-M5", value: "4" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C22-M8", value: "1" },
      ],
      solution: {
        steps: [
          t`The five roots add to $0$: $1 + \alpha + \alpha^2 + \alpha^3 + \alpha^4 = 0$.`,
          t`Take away the root $1$: $\alpha + \alpha^2 + \alpha^3 + \alpha^4 = -1$.`,
        ],
      },
    },
    {
      id: "C22-Q2",
      source: { kind: "authored" },
      stem: t`The product of all the sixth roots of unity is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "product_all" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C22-M3", value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C22-M6", value: "0" },
        { key: "D", text: t`$i$`, correct: false, misconceptionId: "C22-M2", value: "I" },
      ],
      solution: {
        steps: [
          t`The product of all $n$ roots is $(-1)^{n+1}$.`,
          t`With $n = 6$: $(-1)^7 = -1$.`,
        ],
      },
    },
    {
      id: "C22-Q3",
      source: { kind: "authored" },
      stem: t`The sum of the sixth roots of unity other than $1$ is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "sum_powers" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C22-M1", value: "0" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C22-M5", value: "5" },
        { key: "C", text: t`$-1$`, correct: true, value: "-1" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C22-M8", value: "1" },
      ],
      solution: {
        steps: [
          t`The six roots add to $0$.`,
          t`Take away the root $1$: the other five add to $-1$.`,
        ],
      },
    },
    {
      id: "C22-Q4",
      source: { kind: "authored" },
      stem: t`Of the sixth roots of unity, the one with the smallest positive argument is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "first_root" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{2} + \frac{i}{2}$`, correct: false, misconceptionId: "C22-M2", value: "sqrt(3)/2 + I/2" },
        { key: "B", text: t`$i$`, correct: false, misconceptionId: "C22-M7", value: "I" },
        { key: "C", text: t`$\frac{1}{2} + \frac{\sqrt{3} i}{2}$`, correct: true, value: "1/2 + sqrt(3)*I/2" },
        { key: "D", text: t`$-\frac{1}{2} + \frac{\sqrt{3} i}{2}$`, correct: false, misconceptionId: "C22-M9", value: "-1/2 + sqrt(3)*I/2" },
      ],
      solution: {
        steps: [
          t`The sixth roots are a sixth of a turn apart, so the first after $1$ has argument $\dfrac{2\pi}{6} = \dfrac\pi3$.`,
          t`$\cos\dfrac\pi3 + i\sin\dfrac\pi3 = \dfrac12 + \dfrac{\sqrt3}{2}i$.`,
        ],
        figure: {
          alt: "The sixth roots of unity on the unit circle. The first one after 1 is a sixth of a turn round, at angle π/3: the point 1/2 + (√3/2)i.",
          view: { x: [-1.8, 1.8], y: [-1.5, 1.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted" },
            { kind: "point", at: [1, 0], tone: "muted" },
            { kind: "point", at: [0.5, 0.866], tone: "muted" },
            { kind: "point", at: [-0.5, 0.866], tone: "muted" },
            { kind: "point", at: [-1, 0], tone: "muted" },
            { kind: "point", at: [-0.5, -0.866], tone: "muted" },
            { kind: "point", at: [0.5, -0.866], tone: "muted" },
            { kind: "angle", at: [0, 0], from: 0, to: 60, label: "π/3", step: 1 },
            { kind: "point", at: [0.5, 0.866], label: "1/2 + (√3/2)i", labelAt: "ne", step: 2 },
          ],
        },
      },
    },
    {
      id: "C22-Q5",
      source: { kind: "authored" },
      stem: t`The roots of $z^4 = 16$ are:`,
      verify: { kind: "value", inputs: { k: "16", n: "4" }, params: { op: "roots_of" } },
      options: [
        { key: "A", text: t`$\pm 1,\ \pm i$`, correct: false, misconceptionId: "C22-M4", value: "I" },
        { key: "B", text: t`$\pm 2,\ \pm 2i$`, correct: true, value: "2*I" },
        { key: "C", text: t`$\pm\sqrt2 \pm \sqrt2\,i$`, correct: false, misconceptionId: "C22-M2", value: "sqrt(2)*(1 + I)" },
        { key: "D", text: t`$\pm 4,\ \pm 4i$`, correct: false, misconceptionId: "C22-M10", value: "4*I" },
      ],
      solution: {
        steps: [
          t`The real fourth root of $16$ is $2$.`,
          t`The fourth roots of unity are $\pm1$ and $\pm i$.`,
          t`Scale them by $2$: the roots are $\pm2$ and $\pm2i$.`,
        ],
        figure: {
          alt: "The fourth roots of unity, ±1 and ±i, scaled by 2 to the circle of radius 2: the roots of z⁴ = 16 are ±2 and ±2i.",
          view: { x: [-3.2, 3.2], y: [-2.8, 2.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 1, dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [1, 0], tone: "muted", step: 2 },
            { kind: "point", at: [0, 1], tone: "muted", step: 2 },
            { kind: "point", at: [-1, 0], tone: "muted", step: 2 },
            { kind: "point", at: [0, -1], tone: "muted", step: 2 },
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted", step: 3 },
            { kind: "point", at: [2, 0], label: "2", labelAt: "ne", step: 3 },
            { kind: "point", at: [0, 2], label: "2i", labelAt: "ne", step: 3 },
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", step: 3 },
            { kind: "point", at: [0, -2], label: "−2i", labelAt: "se", step: 3 },
          ],
        },
      },
    },
  ],
};
