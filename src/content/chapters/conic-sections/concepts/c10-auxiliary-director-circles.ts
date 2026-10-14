import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`The point $P\left(\frac{3}{2}, \frac{3}{2}\right)$ lies on the ellipse $\frac{x^2}{9} + \frac{y^2}{3} = 1$, and $OP$ makes $45^\circ$ with the $X$-axis. **Is $45^\circ$ the eccentric angle of $P$?**`,
    reveal: t`No. Go straight up from $P$ to the auxiliary circle $x^2 + y^2 = 9$: you reach $Q\left(\frac{3}{2}, \frac{3\sqrt{3}}{2}\right)$, and $OQ$ makes $60^\circ$ with the $X$-axis. So the eccentric angle is $60^\circ$. Check: $\left(3\cos 60^\circ, \sqrt{3}\sin 60^\circ\right) = \left(\frac{3}{2}, \frac{3}{2}\right)$.`,
  },
  explanation: {
    intuition: t`An ellipse is a squashed circle. Take the circle $x^2 + y^2 = a^2$ on the major axis and move each point $Q(a\cos\theta, a\sin\theta)$ straight towards the $X$-axis until its height is $b\sin\theta$: it lands on $P(a\cos\theta, b\sin\theta)$, on the ellipse. That circle is the **auxiliary circle**, and $\theta$, the angle of $Q$ (not of $P$), is the **eccentric angle** of $P$. A second circle comes from tangents. From a point outside you can draw two tangents, and they are at right angles exactly when the point is on the **director circle** $x^2 + y^2 = a^2 + b^2$. The corners $(\pm a, \pm b)$ are on it: there the tangents are $x = \pm a$ and $y = \pm b$.`,
    formal: t`**Auxiliary circle.** The circle with the major axis as diameter. For $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ with $a > b$ it is $x^2 + y^2 = a^2$. If $b > a$ (major axis along the $Y$-axis), it is $x^2 + y^2 = b^2$.

**Eccentric angle.** Take $Q(a\cos\theta, a\sin\theta)$ on the auxiliary circle and drop a perpendicular from $Q$ to the $X$-axis. It meets the ellipse at $P(a\cos\theta, b\sin\theta)$, on the same side as $Q$. Then $\theta = \angle XOQ$ is the eccentric angle of $P$. It is not $\angle XOP$.

**Tangents from $(h, k)$.** A tangent $y = mx + c$ passes through $(h, k)$, so $c = k - mh$, and it touches the ellipse when $c^2 = a^2m^2 + b^2$:
$$(h^2 - a^2)m^2 - 2hkm + (k^2 - b^2) = 0.$$
Its two roots $m_1, m_2$ are the slopes of the two tangents.

**Director circle.** The tangents are perpendicular when $m_1m_2 = \frac{k^2 - b^2}{h^2 - a^2} = -1$, that is $h^2 + k^2 = a^2 + b^2$. So the locus is $x^2 + y^2 = a^2 + b^2$, whichever axis is major. Keep $a^2 - b^2 = a^2e^2$ for the foci: it is $r^2$ for neither circle.`,
    worked: {
      prompt: t`Find the equation of the locus of a point from which the tangents to the ellipse $\frac{x^2}{9} + \frac{y^2}{4} = 1$ are at right angles.`,
      steps: [
        t`Here $a^2 = 9$, $b^2 = 4$. A line $y = mx + c$ through $P(h, k)$ has $c = k - mh$, and it touches the ellipse when $c^2 = 9m^2 + 4$.`,
        t`So $(k - mh)^2 = 9m^2 + 4$, that is $(h^2 - 9)m^2 - 2hkm + (k^2 - 4) = 0$. Its roots $m_1, m_2$ are the slopes of the two tangents from $P$.`,
        t`At right angles: $m_1m_2 = \frac{k^2 - 4}{h^2 - 9} = -1$, so $k^2 - 4 = 9 - h^2$, and $h^2 + k^2 = 13$. From $(2, 3)$, for example, the equation is $-5m^2 - 12m + 5 = 0$, and $m_1m_2 = \frac{5}{-5} = -1$.`,
        t`Check at the corner $(3, 2)$: the tangents there are $x = 3$ and $y = 2$, which are perpendicular, and $3^2 + 2^2 = 13$.`,
      ],
      answer: t`The locus is the director circle $x^2 + y^2 = 13$.`,
      figure: {
        alt: "The ellipse x²/9 + y²/4 = 1 and its director circle x² + y² = 13. From (2, 3) on the circle the two tangents meet at a right angle. At the corner (3, 2) the tangents x = 3 and y = 2 are also perpendicular, and 3² + 2² = 13.",
        axes: "xy",
        view: { x: [-5.5, 6.5], y: [-4.6, 5.2] },
        elements: [
          { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2, step: 1 },
          { kind: "label", at: [-5.4, -4.25], label: "x²/9 + y²/4 = 1", labelAt: "e", step: 1 },
          { kind: "point", at: [2, 3], step: 3 },
          { kind: "label", at: [2.3, 3.63], label: "(2, 3)", labelAt: "ne", step: 3 },
          { kind: "line", through: [[2, 3], [-1.4305, 1.7575]], tone: "good", step: 3 },
          { kind: "line", through: [[2, 3], [2.9163, 0.4693]], tone: "good", step: 3 },
          { kind: "angle", at: [2, 3], from: 199.91, to: 289.91, step: 3 },
          { kind: "circle", centre: [0, 0], r: 3.6056, tone: "good", step: 3 },
          { kind: "label", at: [-5.4, 4.8], label: "x² + y² = 13", labelAt: "e", tone: "good", step: 3 },
          { kind: "segment", from: [3, -0.8], to: [3, 2.7], dashed: true, tone: "muted", step: 4 },
          { kind: "segment", from: [-0.8, 2], to: [4.2, 2], dashed: true, tone: "muted", step: 4 },
          { kind: "point", at: [3, 2], label: "(3, 2)", labelAt: "ne", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The ellipse x²/9 + y²/3 = 1 inside its auxiliary circle x² + y² = 9 (dashed). The radius OQ makes 60° with the x-axis, with Q(3/2, 3√3/2) on the circle. Straight below Q, on the ellipse, is P = (3 cos 60°, √3 sin 60°) = (3/2, 3/2): the eccentric angle of P is 60°, the angle of OQ, not of OP.",
      axes: "xy",
      view: { x: [-4, 6], y: [-3.9, 4] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 3, ry: 1.7321, step: 1 },
        { kind: "label", at: [-3.9, 3.55], label: "x²/9 + y²/3 = 1", labelAt: "e", step: 1 },
        { kind: "circle", centre: [0, 0], r: 3, dashed: true, tone: "muted", step: 1 },
        { kind: "label", at: [-3.9, -3.35], label: "x² + y² = 9", labelAt: "e", tone: "muted", step: 1 },
        { kind: "segment", from: [0, 0], to: [1.5, 2.5981], tone: "muted", step: 2 },
        { kind: "angle", at: [0, 0], from: 0, to: 60, label: "60°", labelAt: "e", step: 2 },
        { kind: "point", at: [1.5, 2.5981], label: "Q(3/2, 3√3/2)", labelAt: "ne", step: 2 },
        { kind: "segment", from: [1.5, 2.5981], to: [1.5, 1.5], dashed: true, tone: "muted", step: 3 },
        { kind: "point", at: [1.5, 1.5], label: "P", labelAt: "sw", tone: "good", step: 3 },
        { kind: "label", at: [0.2, -3.35], label: "P = (3 cos 60°, √3 sin 60°)", labelAt: "e", tone: "good", step: 3 },
      ],
    },
    visualSpec: t`Drag $Q$ around the auxiliary circle and watch $P$ follow it on the ellipse, with $\theta = \angle XOQ$ and $\angle XOP$ shown side by side; then drag a point outside the ellipse and see its two tangents, which turn green and meet at a right angle exactly when the point is on the director circle.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Takes the eccentric angle as the angle $OP$ makes with the $X$-axis, so finds the point of the ellipse in the direction $\theta$`,
      remediation: t`The eccentric angle is measured at $Q$ on the auxiliary circle, not at $P$. Take $Q(a\cos\theta, a\sin\theta)$ and drop straight to the ellipse: $P$ is $(a\cos\theta, b\sin\theta)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Gives $Q(a\cos\theta, a\sin\theta)$, the point on the auxiliary circle, as the point of the ellipse`,
      remediation: t`$Q$ lies on the circle $x^2 + y^2 = a^2$, not on the ellipse. Keep its $x$-coordinate and use $b$ for the $y$-coordinate: $P$ is $(a\cos\theta, b\sin\theta)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Swaps the semi-axes: draws the auxiliary circle on the minor axis, or writes the point as $(b\cos\theta, a\sin\theta)$`,
      remediation: t`The auxiliary circle stands on the major axis, so its radius is the larger semi-axis. In $(a\cos\theta, b\sin\theta)$, $a$ goes with $x$ and $b$ with $y$, as in $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C10-M4",
      mistake: t`Mixes up the two circles: $x^2 + y^2 = a^2 + b^2$ for the auxiliary circle, or $x^2 + y^2 = a^2$ for the locus of perpendicular tangents`,
      remediation: t`The auxiliary circle has the major axis as diameter, so $r^2$ is the larger of $a^2, b^2$. The director circle $x^2 + y^2 = a^2 + b^2$ is bigger: it passes through the corners $(\pm a, \pm b)$, where the tangents $x = \pm a$ and $y = \pm b$ meet at right angles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: t`Uses $a^2 - b^2$ (that is $a^2e^2$, the square of the distance from the centre to a focus) as $r^2$ of the circle`,
      remediation: t`$a^2 - b^2 = a^2e^2$ fixes the foci $(\pm ae, 0)$; it is $r^2$ for neither circle. The auxiliary circle has $r^2$ the larger of $a^2, b^2$, and the director circle has $r^2 = a^2 + b^2$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C10-M6",
      mistake: t`Takes the slopes of perpendicular lines to multiply to $1$, not $-1$`,
      remediation: t`Two lines are perpendicular when their slopes satisfy $m_1m_2 = -1$. Setting $\frac{k^2 - b^2}{h^2 - a^2} = -1$ gives $h^2 + k^2 = a^2 + b^2$, a circle.`,
      fallback: { kind: "ext", topic: "slopes of perpendicular lines" },
    },
  ],
  engineNotes: [
    t`C10-M1 gives the key when $\theta$ is a multiple of $\frac{\pi}{2}$, and C10-M2 when $\sin\theta = 0$: draw eccentric-angle items with $\theta$ off the axes.`,
    t`C10-M3 does not apply to director-circle items: $a$ and $b$ enter $x^2 + y^2 = a^2 + b^2$ the same way.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q12" },
      stem: t`The equation of the locus of a point from which the tangents to the ellipse $3x^2 + 5y^2 = 15$ are at right angles is:`,
      verify: { kind: "locus", inputs: { a2: "5", b2: "3" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 5$`, correct: false, misconceptionId: "C10-M4", value: "x**2 + y**2 - 5" },
        { key: "B", text: t`$x^2 + y^2 = 2$`, correct: false, misconceptionId: "C10-M5", value: "x**2 + y**2 - 2" },
        { key: "C", text: t`$x^2 - y^2 = 2$`, correct: false, misconceptionId: "C10-M6", value: "x**2 - y**2 - 2" },
        { key: "D", text: t`$x^2 + y^2 = 8$`, correct: true, value: "x**2 + y**2 - 8" },
      ],
      solution: {
        steps: [
          t`Divide by $15$: $\frac{x^2}{5} + \frac{y^2}{3} = 1$, so $a^2 = 5$, $b^2 = 3$.`,
          t`From $(h, k)$ the slopes of the tangents satisfy $(h^2 - 5)m^2 - 2hkm + (k^2 - 3) = 0$. At right angles, $m_1m_2 = \frac{k^2 - 3}{h^2 - 5} = -1$.`,
          t`So $h^2 + k^2 = 8$: the locus is the director circle $x^2 + y^2 = 8$. Check: at the corner $(\sqrt{5}, \sqrt{3})$ the tangents $x = \sqrt{5}$ and $y = \sqrt{3}$ are perpendicular, and $5 + 3 = 8$.`,
        ],
        figure: {
          alt: "The ellipse x²/5 + y²/3 = 1 and its director circle x² + y² = 8. At the corner (√5, √3) the tangents x = √5 and y = √3 meet at right angles, and the corner lies on the circle.",
          axes: "xy",
          view: { x: [-4.2, 4.8], y: [-3.7, 3.9] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2.2361, ry: 1.7321, step: 1 },
            { kind: "label", at: [-4.1, -3.4], label: "x²/5 + y²/3 = 1", labelAt: "e", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2.8284, tone: "good", step: 3 },
            { kind: "label", at: [2.5, -3.4], label: "x² + y² = 8", labelAt: "e", tone: "good", step: 3 },
            { kind: "line", through: [[2.2361, 0], [2.2361, 1]], dashed: true, tone: "muted", step: 3 },
            { kind: "line", through: [[0, 1.7321], [1, 1.7321]], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [2.2361, 1.7321], label: "(√5, √3)", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`The auxiliary circle of the ellipse $4x^2 + y^2 = 4$ is:`,
      verify: { kind: "locus", inputs: { a2: "1", b2: "4" }, params: { ask: "aux" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 4$`, correct: true, value: "x**2 + y**2 - 4" },
        { key: "B", text: t`$x^2 + y^2 = 1$`, correct: false, misconceptionId: "C10-M3", value: "x**2 + y**2 - 1" },
        { key: "C", text: t`$x^2 + y^2 = 5$`, correct: false, misconceptionId: "C10-M4", value: "x**2 + y**2 - 5" },
        { key: "D", text: t`$x^2 + y^2 = 3$`, correct: false, misconceptionId: "C10-M5", value: "x**2 + y**2 - 3" },
      ],
      solution: {
        steps: [
          t`Divide by $4$: $\frac{x^2}{1} + \frac{y^2}{4} = 1$.`,
          t`The larger denominator, $4$, is under $y^2$, so the major axis lies along the $Y$-axis, from $(0, -2)$ to $(0, 2)$.`,
          t`The auxiliary circle has this axis as diameter: centre $O$, radius $2$. It is $x^2 + y^2 = 4$.`,
        ],
        figure: {
          alt: "The ellipse x² + y²/4 = 1, taller than it is wide. Its major axis runs along the y-axis from (0, −2) to (0, 2), and the auxiliary circle x² + y² = 4 is drawn on it as diameter, touching the ellipse at those two ends.",
          axes: "xy",
          view: { x: [-3.6, 3.6], y: [-2.9, 3] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 1, ry: 2, step: 1 },
            { kind: "label", at: [1.35, -2.5], label: "x² + y²/4 = 1", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, -2], to: [0, 2], tone: "accent", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2)", labelAt: "ne", step: 2 },
            { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "se", step: 2 },
            { kind: "circle", centre: [0, 0], r: 2, tone: "good", step: 3 },
            { kind: "label", at: [-3.5, 2.5], label: "x² + y² = 4", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/7.2.8 SolvedEx.1(ii)" },
      stem: t`The point on the ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ whose eccentric angle is $\frac{\pi}{4}$ is:`,
      verify: { kind: "value", inputs: { a2: "25", b2: "9", t: "pi/4" }, params: { ask: "pt" } },
      options: [
        { key: "A", text: t`$\left(\frac{3}{\sqrt{2}}, \frac{5}{\sqrt{2}}\right)$`, correct: false, misconceptionId: "C10-M3", value: "(3*sqrt(2)/2, 5*sqrt(2)/2)" },
        { key: "B", text: t`$\left(\frac{5}{\sqrt{2}}, \frac{3}{\sqrt{2}}\right)$`, correct: true, value: "(5*sqrt(2)/2, 3*sqrt(2)/2)" },
        { key: "C", text: t`$\left(\frac{15}{\sqrt{34}}, \frac{15}{\sqrt{34}}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(15*sqrt(34)/34, 15*sqrt(34)/34)" },
        { key: "D", text: t`$\left(\frac{5}{\sqrt{2}}, \frac{5}{\sqrt{2}}\right)$`, correct: false, misconceptionId: "C10-M2", value: "(5*sqrt(2)/2, 5*sqrt(2)/2)" },
      ],
      solution: {
        steps: [
          t`Here $a = 5$, $b = 3$. On the auxiliary circle $x^2 + y^2 = 25$ at $45^\circ$: $Q\left(5\cos 45^\circ, 5\sin 45^\circ\right) = \left(\frac{5}{\sqrt{2}}, \frac{5}{\sqrt{2}}\right)$.`,
          t`$P$ is straight below $Q$, on the ellipse: the same $x$, and $y = b\sin 45^\circ = \frac{3}{\sqrt{2}}$.`,
          t`So the point is $\left(\frac{5}{\sqrt{2}}, \frac{3}{\sqrt{2}}\right)$. Check: $\frac{25/2}{25} + \frac{9/2}{9} = \frac{1}{2} + \frac{1}{2} = 1$.`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/9 = 1 inside its auxiliary circle x² + y² = 25 (dashed). OQ makes 45° with the x-axis, with Q(5/√2, 5/√2) on the circle. Straight below Q, on the ellipse, is P(5/√2, 3/√2).",
          axes: "xy",
          view: { x: [-6, 7.5], y: [-5.9, 6.2] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 3, step: 1 },
            { kind: "label", at: [-5.9, -5.5], label: "x²/25 + y²/9 = 1", labelAt: "e", step: 1 },
            { kind: "circle", centre: [0, 0], r: 5, dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [-5.9, 5.5], label: "x² + y² = 25", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [3.5355, 3.5355], tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 45, label: "45°", labelAt: "e", step: 1 },
            { kind: "point", at: [3.5355, 3.5355], label: "Q(5/√2, 5/√2)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [3.5355, 3.5355], to: [3.5355, 2.1213], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [3.5355, 2.1213], label: "P", labelAt: "sw", tone: "good", step: 2 },
            { kind: "label", at: [1.5, -5.5], label: "P(5/√2, 3/√2)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`From which of these points are the two tangents to the ellipse $x^2 + 4y^2 = 4$ at right angles to each other?`,
      verify: { kind: "point", inputs: { a2: "4", b2: "1" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$(1, -\sqrt{2})$`, correct: false, misconceptionId: "C10-M5", value: "1 - sqrt(2)*I" },
        { key: "B", text: t`$(\sqrt{5}, -\sqrt{2})$`, correct: false, misconceptionId: "C10-M6", value: "sqrt(5) - sqrt(2)*I" },
        { key: "C", text: t`$(-1, 2)$`, correct: true, value: "-1 + 2*I" },
        { key: "D", text: t`$(\sqrt{2}, \sqrt{2})$`, correct: false, misconceptionId: "C10-M4", value: "sqrt(2) + sqrt(2)*I" },
      ],
      solution: {
        steps: [
          t`Divide by $4$: $\frac{x^2}{4} + y^2 = 1$, so $a^2 = 4$, $b^2 = 1$. Perpendicular tangents meet on the director circle $x^2 + y^2 = 4 + 1 = 5$.`,
          t`Test each point: $(-1)^2 + 2^2 = 5$; $(\sqrt{2})^2 + (\sqrt{2})^2 = 4$; $1^2 + (\sqrt{2})^2 = 3$; $(\sqrt{5})^2 + (\sqrt{2})^2 = 7$. Only $(-1, 2)$ is on the circle.`,
          t`Check from $(-1, 2)$: the slopes satisfy $(1 - 4)m^2 - 2(-1)(2)m + (4 - 1) = 0$, that is $-3m^2 + 4m + 3 = 0$, so $m_1m_2 = \frac{3}{-3} = -1$.`,
        ],
        figure: {
          alt: "The ellipse x²/4 + y² = 1 and its director circle x² + y² = 5. The point (−1, 2) lies on the circle, and the two tangents from it to the ellipse meet at a right angle.",
          axes: "xy",
          view: { x: [-3.8, 4.2], y: [-3, 3.4] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2, ry: 1, step: 1 },
            { kind: "label", at: [1, 2.9], label: "x²/4 + y² = 1", labelAt: "e", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2.2361, tone: "good", step: 1 },
            { kind: "label", at: [1.4, -2.75], label: "x² + y² = 5", labelAt: "e", tone: "good", step: 1 },
            { kind: "point", at: [-1, 2], step: 2 },
            { kind: "label", at: [-1.2, 2.75], label: "(−1, 2)", labelAt: "n", step: 2 },
            { kind: "line", through: [[-1, 2], [0, 3.8685]], tone: "good", step: 3 },
            { kind: "line", through: [[-1, 2], [0, 1.4648]], tone: "good", step: 3 },
            { kind: "angle", at: [-1, 2], from: 241.84, to: 331.84, step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`The equation of the locus of a point from which the tangents to the ellipse $25x^2 + 9y^2 = 225$ are perpendicular is:`,
      verify: { kind: "locus", inputs: { a2: "9", b2: "25" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 25$`, correct: false, misconceptionId: "C10-M4", value: "x**2 + y**2 - 25" },
        { key: "B", text: t`$x^2 + y^2 = 16$`, correct: false, misconceptionId: "C10-M5", value: "x**2 + y**2 - 16" },
        { key: "C", text: t`$x^2 + y^2 = 34$`, correct: true, value: "x**2 + y**2 - 34" },
        { key: "D", text: t`$y^2 - x^2 = 16$`, correct: false, misconceptionId: "C10-M6", value: "x**2 - y**2 + 16" },
      ],
      solution: {
        steps: [
          t`Divide by $225$: $\frac{x^2}{9} + \frac{y^2}{25} = 1$, so $a^2 = 9$, $b^2 = 25$ (the major axis is along the $Y$-axis).`,
          t`From $(h, k)$ the slopes of the tangents satisfy $(h^2 - 9)m^2 - 2hkm + (k^2 - 25) = 0$. Perpendicular: $m_1m_2 = \frac{k^2 - 25}{h^2 - 9} = -1$, so $k^2 - 25 = 9 - h^2$.`,
          t`So $h^2 + k^2 = 34$: the locus is $x^2 + y^2 = 34$. At the corner $(3, 5)$ the tangents $x = 3$ and $y = 5$ are perpendicular, and $9 + 25 = 34$.`,
        ],
        figure: {
          alt: "The ellipse x²/9 + y²/25 = 1, with its major axis along the y-axis, and its director circle x² + y² = 34. At the corner (3, 5) the tangents x = 3 and y = 5 meet at right angles, and 3² + 5² = 34.",
          axes: "xy",
          view: { x: [-7.6, 8.4], y: [-7.2, 7.4] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 5, step: 1 },
            { kind: "label", at: [-7.5, -6.7], label: "x²/9 + y²/25 = 1", labelAt: "e", step: 1 },
            { kind: "circle", centre: [0, 0], r: 5.831, tone: "good", step: 3 },
            { kind: "label", at: [3.4, -6.7], label: "x² + y² = 34", labelAt: "e", tone: "good", step: 3 },
            { kind: "line", through: [[3, 0], [3, 1]], dashed: true, tone: "muted", step: 3 },
            { kind: "line", through: [[0, 5], [1, 5]], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [3, 5], label: "(3, 5)", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "authored" },
      stem: t`The point on the ellipse $x^2 + 16y^2 = 16$ whose eccentric angle is $\frac{2\pi}{3}$ is:`,
      verify: { kind: "value", inputs: { a2: "16", b2: "1", t: "2*pi/3" }, params: { ask: "pt" } },
      options: [
        { key: "A", text: t`$\left(-\frac{4}{7}, \frac{4\sqrt{3}}{7}\right)$`, correct: false, misconceptionId: "C10-M1", value: "(-4/7, 4*sqrt(3)/7)" },
        { key: "B", text: t`$\left(-2, 2\sqrt{3}\right)$`, correct: false, misconceptionId: "C10-M2", value: "(-2, 2*sqrt(3))" },
        { key: "C", text: t`$\left(-\frac{1}{2}, 2\sqrt{3}\right)$`, correct: false, misconceptionId: "C10-M3", value: "(-1/2, 2*sqrt(3))" },
        { key: "D", text: t`$\left(-2, \frac{\sqrt{3}}{2}\right)$`, correct: true, value: "(-2, sqrt(3)/2)" },
      ],
      solution: {
        steps: [
          t`Divide by $16$: $\frac{x^2}{16} + y^2 = 1$, so $a = 4$, $b = 1$. On the auxiliary circle $x^2 + y^2 = 16$ at $120^\circ$: $Q\left(4\cos 120^\circ, 4\sin 120^\circ\right) = (-2, 2\sqrt{3})$.`,
          t`$P$ is straight below $Q$, on the ellipse: the same $x$, and $y = b\sin 120^\circ = \frac{\sqrt{3}}{2}$.`,
          t`So the point is $\left(-2, \frac{\sqrt{3}}{2}\right)$. Check: $4 + 16 \cdot \frac{3}{4} = 16$.`,
        ],
        figure: {
          alt: "The ellipse x² + 16y² = 16 inside its auxiliary circle x² + y² = 16 (dashed). OQ makes 120° with the x-axis, with Q(−2, 2√3) on the circle. Straight below Q, on the ellipse, is P(−2, √3/2).",
          axes: "xy",
          view: { x: [-4.8, 4.8], y: [-4.9, 4.9] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 4, ry: 1, step: 1 },
            { kind: "label", at: [0.6, -4.5], label: "x² + 16y² = 16", labelAt: "e", step: 1 },
            { kind: "circle", centre: [0, 0], r: 4, dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [-4.7, -4.5], label: "x² + y² = 16", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [-2, 3.4641], tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 120, label: "120°", labelAt: "e", step: 1 },
            { kind: "point", at: [-2, 3.4641], label: "Q(−2, 2√3)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [-2, 3.4641], to: [-2, 0.866], dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [-2, 0.866], label: "P", labelAt: "nw", tone: "good", step: 2 },
            { kind: "label", at: [1.5, 4.5], label: "P(−2, √3/2)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
