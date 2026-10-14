import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`On a circle, the tangent at $P$ is perpendicular to $OP$. Take the ellipse $\frac{x^2}{8} + \frac{y^2}{2} = 1$ and the point $P(2, 1)$ on it. **Is the tangent at $P$ perpendicular to $OP$?**`,
    reveal: t`No. The tangent at $P$ is $\frac{2x}{8} + \frac{y}{2} = 1$, that is $x + 2y = 4$, with slope $-\frac12$. $OP$ has slope $\frac12$. The product is $-\frac14$, not $-1$. An ellipse is a stretched circle: the stretch keeps a tangent a tangent, but it does not keep right angles.`,
  },
  explanation: {
    intuition: t`An ellipse is a circle stretched along one axis. A line that touches the circle still touches after the stretch, so tangents survive, but right angles do not: the tangent at $P$ is not perpendicular to $OP$. The tangent at $(x_1, y_1)$ comes from the equation by putting $xx_1$ for $x^2$ and $yy_1$ for $y^2$. For a line $y = mx + c$, put it into the ellipse: it touches when the quadratic in $x$ has one repeated root, which happens when $c^2 = a^2m^2 + b^2$. Each slope gives two tangents, one on each side.`,
    formal: t`**Tangent at a point.** For $P(x_1, y_1)$ on $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, the tangent is $$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1.$$ This needs $P$ on the ellipse.

**At eccentric angle $\theta$.** The point is $(a\cos\theta, b\sin\theta)$, and the tangent there is $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$. $\theta$ is not the angle of $OP$: at $\theta = \frac{\pi}{4}$ the point is $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$, which is not on $y = x$.

**Condition of tangency.** $y = mx + c$ touches the ellipse when $$c^2 = a^2m^2 + b^2.$$ $a^2$ (under $x^2$) goes with $m^2$. So the tangents with slope $m$ are $y = mx \pm \sqrt{a^2m^2 + b^2}$, and it touches at $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$.

**Parallel, perpendicular, through a point.** $Ax + By + C = 0$ has slope $-\frac{A}{B}$; a perpendicular line has slope $\frac{B}{A}$. For an outside point $(x_0, y_0)$, put it in $y_0 = mx_0 + c$ with $c^2 = a^2m^2 + b^2$ and solve for the two slopes; also test the vertical line $x = x_0$, which touches when $x_0 = \pm a$.`,
    worked: {
      prompt: t`Show that the line $x - y = 5$ is a tangent to the ellipse $9x^2 + 16y^2 = 144$, and find the point of contact.`,
      steps: [
        t`Divide by $144$: $\frac{x^2}{16} + \frac{y^2}{9} = 1$, so $a^2 = 16$ and $b^2 = 9$.`,
        t`The line is $y = x - 5$: $m = 1$, $c = -5$. Then $c^2 = 25$ and $a^2m^2 + b^2 = 16 + 9 = 25$. They are equal, so the line is a tangent.`,
        t`The point of contact is $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right) = \left(\frac{16}{5}, -\frac{9}{5}\right)$.`,
        t`Check: the tangent at $\left(\frac{16}{5}, -\frac95\right)$ is $\frac{x}{16}\cdot\frac{16}{5} + \frac{y}{9}\cdot\left(-\frac95\right) = 1$, that is $\frac{x}{5} - \frac{y}{5} = 1$, the given line $x - y = 5$.`,
      ],
      answer: t`The line is a tangent; it touches at $\left(\frac{16}{5}, -\frac{9}{5}\right)$.`,
      figure: {
        alt: "The ellipse x²/16 + y²/9 = 1 and the line x − y = 5, which touches it at the single point (16/5, −9/5).",
        axes: "xy",
        view: { x: [-6, 7.5], y: [-6, 4.5] },
        elements: [
          { kind: "ellipse", centre: [0, 0], rx: 4, ry: 3, step: 1 },
          { kind: "label", at: [-5.8, 3.6], label: "x²/16 + y²/9 = 1", labelAt: "e", step: 1 },
          { kind: "line", through: [[5, 0], [0, -5]], step: 2, tone: "good" },
          { kind: "label", at: [3.2, -3.6], label: "x − y = 5", labelAt: "e", step: 2 },
          { kind: "point", at: [3.2, -1.8], label: "(16/5, −9/5)", labelAt: "se", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The ellipse x²/8 + y²/2 = 1 with four parallel lines of slope −1/2: y = −x/2 + 4 misses it, y = −x/2 cuts it, and y = −x/2 + 2 and y = −x/2 − 2 touch it at P(2, 1) and (−2, −1). The segment OP is not perpendicular to the tangent at P.",
      axes: "xy",
      view: { x: [-5, 6], y: [-3.5, 4.5] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 2.828, ry: 1.414, step: 1 },
        { kind: "label", at: [-4.8, -2.4], label: "x²/8 + y²/2 = 1", labelAt: "e", step: 1 },
        { kind: "line", through: [[0, 4], [4, 2]], step: 2, dashed: true, tone: "muted" },
        { kind: "label", at: [2.4, 3.4], label: "misses", labelAt: "ne", step: 2 },
        { kind: "line", through: [[-2, 1], [2, -1]], step: 3, dashed: true, tone: "muted" },
        { kind: "label", at: [-4, 1.4], label: "cuts", labelAt: "s", step: 3 },
        { kind: "line", through: [[0, 2], [4, 0]], step: 4, tone: "good" },
        { kind: "line", through: [[0, -2], [-4, 0]], step: 4, tone: "good" },
        { kind: "label", at: [4.3, 0.5], label: "touches", labelAt: "ne", step: 4 },
        { kind: "point", at: [2, 1], label: "P(2, 1)", labelAt: "ne", step: 4 },
        { kind: "point", at: [-2, -1], label: "(−2, −1)", labelAt: "sw", step: 4 },
        { kind: "segment", from: [0, 0], to: [2, 1], dashed: true, step: 5 },
      ],
    },
    visualSpec: t`A slider sets the slope $m$ and a handle slides the line $y = mx + c$ across $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$; the line turns green when it touches, at $c = \pm\sqrt{a^2m^2 + b^2}$, and a dot marks the point of contact.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Carries circle facts over to the ellipse: takes $c^2 = a^2(1 + m^2)$ as the condition, or the tangent at $P$ perpendicular to $OP$`,
      remediation: t`An ellipse is a stretched circle, and the stretch bends right angles: the tangent at $P$ is not perpendicular to $OP$ (except at the vertices). Use $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ and $c^2 = a^2m^2 + b^2$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M2",
      mistake: t`Swaps $a^2$ and $b^2$: writes $c^2 = b^2m^2 + a^2$, or $\frac{x\cos\theta}{b} + \frac{y\sin\theta}{a} = 1$`,
      remediation: t`$a^2$ is the number under $x^2$, so it goes with $m^2$: $c^2 = a^2m^2 + b^2$. In the same way $a$ goes with $x$ in $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Keeps only the $+$ root, so finds one tangent (or one value of $k$) where there are two`,
      remediation: t`$c^2 = a^2m^2 + b^2$ gives $c = \pm\sqrt{a^2m^2 + b^2}$: each slope has two tangents, one on each side of the ellipse.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Uses the perpendicular slope for a parallel tangent, or the line's own slope for a perpendicular one",
      remediation: t`Parallel lines have equal slopes; perpendicular slopes multiply to $-1$. $Ax + By + C = 0$ has slope $-\frac{A}{B}$, so a line perpendicular to it has slope $\frac{B}{A}$.`,
      fallback: { kind: "ext", topic: "slopes of parallel and perpendicular lines" },
    },
    {
      id: "C09-M5",
      mistake: t`Puts a point outside the ellipse into $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ to get the tangents from it`,
      remediation: t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ is a tangent only when $(x_1, y_1)$ is on the ellipse. From an outside point, put the point into $y = mx + c$ with $c^2 = a^2m^2 + b^2$ and solve for the two slopes.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M6",
      mistake: t`Takes the eccentric angle $\theta$ as the angle $OP$ makes with the $x$-axis`,
      remediation: t`The point with eccentric angle $\theta$ is $(a\cos\theta, b\sin\theta)$. Unless $a = b$, $OP$ does not make the angle $\theta$ with the $x$-axis: at $\theta = \frac{\pi}{4}$ the point is $\left(\frac{a}{\sqrt2}, \frac{b}{\sqrt2}\right)$, not on $y = x$.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  engineNotes: [
    "C09-M2 gives the key when m² = 1 (a²m² + b² = b²m² + a²), and C09-M1 at a vertex: draw diagnosing items with m ≠ ±1 and P off the axes.",
    "C09-M3 applies only where the answer has two tangents (or two values of k); C09-M4 only to tangents parallel or perpendicular to a given line; C09-M5 only to tangents from an outside point; C09-M6 only to eccentric-angle questions with θ not a multiple of π/2.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q14" },
      stem: t`If the line $4x - 3y + k = 0$ touches the ellipse $5x^2 + 9y^2 = 45$, then $k$ is`,
      verify: { kind: "value", inputs: { a2: "9", b2: "5", A: "4", B: "-3" }, params: { type: "k" } },
      options: [
        { key: "A", text: t`$\pm\sqrt{161}$`, correct: false, misconceptionId: "C09-M2", value: "{-sqrt(161), sqrt(161)}" },
        { key: "B", text: t`$3\sqrt{21}$ only`, correct: false, misconceptionId: "C09-M3", value: "{3*sqrt(21)}" },
        { key: "C", text: t`$\pm 3\sqrt{21}$`, correct: true, value: "{-3*sqrt(21), 3*sqrt(21)}" },
        { key: "D", text: t`$\pm 15$`, correct: false, misconceptionId: "C09-M1", value: "{-15, 15}" },
      ],
      solution: {
        steps: [
          t`$5x^2 + 9y^2 = 45$ is $\frac{x^2}{9} + \frac{y^2}{5} = 1$: $a^2 = 9$, $b^2 = 5$.`,
          t`The line is $y = \frac43 x + \frac{k}{3}$: $m = \frac43$, $c = \frac{k}{3}$.`,
          t`It touches when $c^2 = a^2m^2 + b^2$: $\frac{k^2}{9} = 9 \cdot \frac{16}{9} + 5 = 21$, so $k^2 = 189$ and $k = \pm 3\sqrt{21}$.`,
        ],
        figure: {
          alt: "The ellipse x²/9 + y²/5 = 1 and the two parallel lines 4x − 3y + k = 0 with k = 3√21 and k = −3√21, one touching the ellipse on each side.",
          axes: "xy",
          view: { x: [-6, 6], y: [-5, 5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2.236, step: 1 },
            { kind: "label", at: [2.2, 2.4], label: "x²/9 + y²/5 = 1", labelAt: "ne", step: 1 },
            { kind: "line", through: [[-2.619, 1.091], [0, 4.583]], step: 3, tone: "good" },
            { kind: "line", through: [[2.619, -1.091], [0, -4.583]], step: 3, tone: "good" },
            { kind: "label", at: [0.5, 4.6], label: "k = 3√21", labelAt: "e", step: 3 },
            { kind: "label", at: [-0.5, -4.6], label: "k = −3√21", labelAt: "w", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q11(iv)" },
      stem: t`The tangents to the ellipse $x^2 + 4y^2 = 9$ that are parallel to the line $2x + 3y - 5 = 0$ are`,
      verify: { kind: "locus", inputs: { a2: "9", b2: "9/4", A: "2", B: "3" }, params: { type: "slope", rel: "parallel" } },
      options: [
        { key: "A", text: t`$4x + 6y = \pm 15$`, correct: true, value: "4*x**2/9 + 4*x*y/3 + y**2 - 25/4" },
        { key: "B", text: t`$2x + 3y = \pm 3\sqrt{13}$`, correct: false, misconceptionId: "C09-M1", value: "4*x**2/9 + 4*x*y/3 + y**2 - 13" },
        { key: "C", text: t`$2x + 3y = \pm 3\sqrt{10}$`, correct: false, misconceptionId: "C09-M2", value: "4*x**2/9 + 4*x*y/3 + y**2 - 10" },
        { key: "D", text: t`$3x - 2y = \pm 3\sqrt{10}$`, correct: false, misconceptionId: "C09-M4", value: "9*x**2/4 - 3*x*y + y**2 - 45/2" },
      ],
      solution: {
        steps: [
          t`$x^2 + 4y^2 = 9$ is $\frac{x^2}{9} + \frac{y^2}{9/4} = 1$: $a^2 = 9$, $b^2 = \frac94$. The line $2x + 3y - 5 = 0$ has slope $-\frac23$, so a parallel tangent has $m = -\frac23$.`,
          t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac49 + \frac94 = \frac{25}{4}$, so $c = \pm\frac52$.`,
          t`$y = -\frac23 x \pm \frac52$; multiply by $6$: $4x + 6y = \pm 15$.`,
        ],
        figure: {
          alt: "The ellipse x² + 4y² = 9, the line 2x + 3y − 5 = 0, and the two tangents parallel to it, 4x + 6y = 15 touching at (12/5, 9/10) and 4x + 6y = −15 touching at (−12/5, −9/10).",
          axes: "xy",
          view: { x: [-6, 6], y: [-4, 4] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 1.5 },
            { kind: "label", at: [0.6, -1.9], label: "x² + 4y² = 9", labelAt: "se" },
            { kind: "line", through: [[1, 1], [4, -1]], step: 1, dashed: true, tone: "muted" },
            { kind: "label", at: [3.2, -3.1], label: "2x + 3y − 5 = 0", labelAt: "e", step: 1 },
            { kind: "line", through: [[2.4, 0.9], [0, 2.5]], step: 3, tone: "good" },
            { kind: "line", through: [[-2.4, -0.9], [0, -2.5]], step: 3, tone: "good" },
            { kind: "point", at: [2.4, 0.9], step: 3 },
            { kind: "point", at: [-2.4, -0.9], step: 3 },
            { kind: "label", at: [0.3, 2.9], label: "4x + 6y = 15", labelAt: "ne", step: 3 },
            { kind: "label", at: [-0.3, -2.9], label: "4x + 6y = −15", labelAt: "sw", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q16" },
      stem: t`One of the tangents to the ellipse $4x^2 + 9y^2 = 36$ that are perpendicular to the line $3x + 4y = 17$ is`,
      verify: { kind: "locus", inputs: { a2: "9", b2: "4", A: "3", B: "4" }, params: { type: "slope", rel: "perpendicular", pick: "+" } },
      options: [
        { key: "A", text: t`$3y = 4x + 15$`, correct: false, misconceptionId: "C09-M1", value: "-4*x/3 + y - 5" },
        { key: "B", text: t`$3y = 4x + \sqrt{145}$`, correct: false, misconceptionId: "C09-M2", value: "-4*x/3 + y - sqrt(145)/3" },
        { key: "C", text: t`$3x + 4y = \sqrt{145}$`, correct: false, misconceptionId: "C09-M4", value: "3*x/4 + y - sqrt(145)/4" },
        { key: "D", text: t`$3y = 4x + 6\sqrt{5}$`, correct: true, value: "-4*x/3 + y - 2*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`$4x^2 + 9y^2 = 36$ is $\frac{x^2}{9} + \frac{y^2}{4} = 1$: $a^2 = 9$, $b^2 = 4$. The line $3x + 4y = 17$ has slope $-\frac34$, so a perpendicular tangent has $m = \frac43$.`,
          t`$c^2 = a^2m^2 + b^2 = 9 \cdot \frac{16}{9} + 4 = 20$, so $c = \pm 2\sqrt5$.`,
          t`Take $c = 2\sqrt5$: $y = \frac43 x + 2\sqrt5$; multiply by $3$: $3y = 4x + 6\sqrt5$. (The other one is $3y = 4x - 6\sqrt5$.)`,
        ],
        figure: {
          alt: "The ellipse x²/9 + y²/4 = 1, the line 3x + 4y = 17, and the two tangents of slope 4/3 perpendicular to it; the one above, 3y = 4x + 6√5, is highlighted.",
          axes: "xy",
          view: { x: [-6, 8], y: [-4, 6] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 2 },
            { kind: "label", at: [-3.2, -2.6], label: "4x² + 9y² = 36", labelAt: "e" },
            { kind: "line", through: [[3, 2], [7, -1]], step: 1, dashed: true, tone: "muted" },
            { kind: "label", at: [4.6, 2.2], label: "3x + 4y = 17", labelAt: "ne", step: 1 },
            { kind: "line", through: [[2.683, -0.894], [0, -4.472]], step: 2, dashed: true, tone: "muted" },
            { kind: "line", through: [[-2.683, 0.894], [0, 4.472]], step: 3, tone: "good" },
            { kind: "point", at: [-2.683, 0.894], step: 3 },
            { kind: "label", at: [-5.8, 2.2], label: "3y = 4x + 6√5", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/7.2.8 SolvedEx.1(ii)" },
      stem: t`The tangent to the ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ at the point whose eccentric angle is $\frac{\pi}{4}$ is`,
      verify: { kind: "locus", inputs: { a2: "25", b2: "9", th: "pi/4" }, params: { type: "theta" } },
      options: [
        { key: "A", text: t`$3x + 5y = 15\sqrt{2}$`, correct: true, value: "3*sqrt(2)*x/2 + 5*sqrt(2)*y/2 - 15" },
        { key: "B", text: t`$5x + 3y = 17\sqrt{2}$`, correct: false, misconceptionId: "C09-M1", value: "5*sqrt(2)*x/2 + 3*sqrt(2)*y/2 - 17" },
        { key: "C", text: t`$5x + 3y = 15\sqrt{2}$`, correct: false, misconceptionId: "C09-M2", value: "5*sqrt(2)*x/2 + 3*sqrt(2)*y/2 - 15" },
        { key: "D", text: t`$9x + 25y = 15\sqrt{34}$`, correct: false, misconceptionId: "C09-M6", value: "135*sqrt(34)*x/17 + 375*sqrt(34)*y/17 - 450" },
      ],
      solution: {
        steps: [
          t`Here $a = 5$, $b = 3$, $\theta = \frac{\pi}{4}$. The point is $P(a\cos\theta, b\sin\theta) = \left(\frac{5}{\sqrt2}, \frac{3}{\sqrt2}\right)$.`,
          t`The tangent at $\theta$ is $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$: $\frac{x}{5\sqrt2} + \frac{y}{3\sqrt2} = 1$.`,
          t`Multiply by $15\sqrt2$: $3x + 5y = 15\sqrt2$.`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/9 = 1, the point P(5/√2, 3/√2) with eccentric angle π/4, and the tangent there, 3x + 5y = 15√2, which meets the axes at (5√2, 0) and (0, 3√2).",
          axes: "xy",
          view: { x: [-6, 8.5], y: [-4, 5.5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 3 },
            { kind: "label", at: [-5.8, -3.6], label: "x²/25 + y²/9 = 1", labelAt: "e" },
            { kind: "point", at: [3.536, 2.121], label: "P(5/√2, 3/√2)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[7.071, 0], [0, 4.243]], step: 3, tone: "good" },
            { kind: "label", at: [0.4, 4.6], label: "3x + 5y = 15√2", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q11(i)" },
      stem: t`The tangents to the ellipse $\frac{x^2}{5} + \frac{y^2}{4} = 1$ through the point $(2, -2)$ are`,
      verify: { kind: "locus", inputs: { a2: "5", b2: "4", px: "2", py: "-2" }, params: { type: "from" } },
      options: [
        { key: "A", text: t`$x = 2$ and $x - 8y = 18$`, correct: false, misconceptionId: "C09-M2", value: "-x**2/8 + x*y + 5*x/2 - 2*y - 9/2" },
        { key: "B", text: t`$4x - 5y = 10$`, correct: false, misconceptionId: "C09-M5", value: "8*x - 10*y - 20" },
        { key: "C", text: t`$y = -2$ and $8x - y = 18$`, correct: true, value: "-8*x*y - 16*x + y**2 + 20*y + 36" },
        { key: "D", text: t`$y + 2 = (4 \pm \sqrt{15})(x - 2)$`, correct: false, misconceptionId: "C09-M1", value: "x**2 - 8*x*y - 20*x + y**2 + 20*y + 40" },
      ],
      solution: {
        steps: [
          t`$a^2 = 5$, $b^2 = 4$. The point $(2, -2)$ gives $\frac45 + 1 > 1$: it is outside, so it is not a point of contact. A tangent through it is $y + 2 = m(x - 2)$, with $c = -2 - 2m$.`,
          t`It touches when $c^2 = a^2m^2 + b^2$: $(2 + 2m)^2 = 5m^2 + 4$, so $m^2 - 8m = 0$ and $m = 0$ or $m = 8$.`,
          t`$m = 0$: $y = -2$. $m = 8$: $y + 2 = 8(x - 2)$, that is $8x - y = 18$.`,
        ],
        figure: {
          alt: "The ellipse x²/5 + y²/4 = 1 and the outside point (2, −2), with the two tangents from it: y = −2 touching at (0, −2) and 8x − y = 18 touching at (20/9, −2/9).",
          axes: "xy",
          view: { x: [-4, 5], y: [-4, 3] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2.236, ry: 2 },
            { kind: "label", at: [-3.9, 2.6], label: "x²/5 + y²/4 = 1", labelAt: "e" },
            { kind: "point", at: [2, -2], label: "(2, −2)", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, -2], [2, -2]], step: 3, tone: "good" },
            { kind: "line", through: [[2, -2], [2.222, -0.222]], step: 3, tone: "good" },
            { kind: "point", at: [0, -2], step: 3 },
            { kind: "point", at: [2.222, -0.222], step: 3 },
            { kind: "label", at: [-3.8, -2.4], label: "y = −2", labelAt: "e", step: 3 },
            { kind: "label", at: [2.9, 1.8], label: "8x − y = 18", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q11(vii)" },
      stem: t`The tangents to the ellipse $x^2 + 4y^2 = 20$ that are perpendicular to the line $4x + 3y = 7$ are`,
      verify: { kind: "locus", inputs: { a2: "20", b2: "5", A: "4", B: "3" }, params: { type: "slope", rel: "perpendicular" } },
      options: [
        { key: "A", text: t`$4x + 3y = \pm\sqrt{365}$`, correct: false, misconceptionId: "C09-M4", value: "16*x**2/9 + 8*x*y/3 + y**2 - 365/9" },
        { key: "B", text: t`$4y = 3x \pm 2\sqrt{65}$`, correct: true, value: "9*x**2/16 - 3*x*y/2 + y**2 - 65/4" },
        { key: "C", text: t`$4y = 3x \pm 10\sqrt{5}$`, correct: false, misconceptionId: "C09-M1", value: "9*x**2/16 - 3*x*y/2 + y**2 - 125/4" },
        { key: "D", text: t`$4y = 3x + 2\sqrt{65}$`, correct: false, misconceptionId: "C09-M3", value: "-3*x/4 + y - sqrt(65)/2" },
      ],
      solution: {
        steps: [
          t`$x^2 + 4y^2 = 20$ is $\frac{x^2}{20} + \frac{y^2}{5} = 1$: $a^2 = 20$, $b^2 = 5$. The line $4x + 3y = 7$ has slope $-\frac43$, so the tangents have $m = \frac34$.`,
          t`$c^2 = a^2m^2 + b^2 = 20 \cdot \frac{9}{16} + 5 = \frac{65}{4}$, so $c = \pm\frac{\sqrt{65}}{2}$.`,
          t`$y = \frac34 x \pm \frac{\sqrt{65}}{2}$; multiply by $4$: $4y = 3x \pm 2\sqrt{65}$.`,
        ],
        figure: {
          alt: "The ellipse x² + 4y² = 20, the line 4x + 3y = 7, and the two tangents perpendicular to it, 4y = 3x + 2√65 and 4y = 3x − 2√65, one on each side of the ellipse.",
          axes: "xy",
          view: { x: [-7, 7], y: [-5.5, 5.5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 4.472, ry: 2.236 },
            { kind: "label", at: [-6.8, -3.8], label: "x² + 4y² = 20", labelAt: "e" },
            { kind: "line", through: [[1, 1], [4, -3]], step: 1, dashed: true, tone: "muted" },
            { kind: "label", at: [2.4, 3], label: "4x + 3y = 7", labelAt: "e", step: 1 },
            { kind: "line", through: [[-3.721, 1.24], [0, 4.031]], step: 3, tone: "good" },
            { kind: "line", through: [[3.721, -1.24], [0, -4.031]], step: 3, tone: "good" },
            { kind: "point", at: [-3.721, 1.24], step: 3 },
            { kind: "point", at: [3.721, -1.24], step: 3 },
            { kind: "label", at: [-6.8, 2.6], label: "4y = 3x + 2√65", labelAt: "e", step: 3 },
            { kind: "label", at: [0.6, -4.8], label: "4y = 3x − 2√65", labelAt: "e", step: 3 },
          ],
        },
      },
    },
  ],
};
