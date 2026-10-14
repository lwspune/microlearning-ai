import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`For a circle, every slope has two tangents. **Does the hyperbola $\dfrac{x^2}{4} - y^2 = 1$ have a tangent of slope $\dfrac14$?**`,
    reveal: t`No. The line $y = \frac14 x + c$ touches only if $c^2 = a^2m^2 - b^2 = 4 \cdot \frac{1}{16} - 1 = -\frac34$, and no real $c$ does that. Every line of slope $\frac14$ cuts the hyperbola, once on each branch. A tangent has to be steeper than $\frac{b}{a} = \frac12$.`,
  },
  explanation: {
    intuition: t`A tangent meets the hyperbola at one point, counted twice. Put $y = mx + c$ into $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$: you get a quadratic in $x$, and the line touches when its two roots coincide. That happens when $c^2 = a^2m^2 - b^2$. The minus sign of the hyperbola stays in every formula, and it has a new effect: when $a^2m^2 < b^2$ there is no tangent of that slope at all.`,
    formal: t`**Read $a^2$ and $b^2$ first.** Divide by the constant: $16x^2 - 25y^2 = 400$ is $\dfrac{x^2}{25} - \dfrac{y^2}{16} = 1$, so $a^2 = 25$ and $b^2 = 16$.

**Tangent at a point.** At $P(x_1, y_1)$ on $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$: $$\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1.$$ Replace $x^2$ by $xx_1$ and $y^2$ by $yy_1$, and keep the minus sign.

**At the point $\theta$.** $P(a\sec\theta, b\tan\theta)$ is on the hyperbola, because $\sec^2\theta - \tan^2\theta = 1$. The tangent there is $\dfrac{x\sec\theta}{a} - \dfrac{y\tan\theta}{b} = 1$.

**Condition of tangency.** $y = mx + c$ touches when $$c^2 = a^2m^2 - b^2.$$ So the tangents of slope $m$ are $y = mx \pm \sqrt{a^2m^2 - b^2}$: two of them, or none if $a^2m^2 < b^2$.

**Point of contact.** $y = mx + c$ touches at $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$. Write the line as $y = mx + c$ before reading $m$ and $c$.`,
    worked: {
      prompt: t`Show that the line $4x - 3y = 16$ touches the hyperbola $16x^2 - 25y^2 = 400$, and find the point of contact.`,
      steps: [
        t`Divide by $400$: $\dfrac{x^2}{25} - \dfrac{y^2}{16} = 1$, so $a^2 = 25$, $b^2 = 16$.`,
        t`Write the line as $y = \frac43 x - \frac{16}{3}$: $m = \frac43$, $c = -\frac{16}{3}$.`,
        t`$a^2m^2 - b^2 = 25 \cdot \frac{16}{9} - 16 = \frac{256}{9}$, and $c^2 = \frac{256}{9}$. They are equal, so the line is a tangent.`,
        t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right) = \left(\dfrac{-25 \cdot \frac43}{-\frac{16}{3}}, \dfrac{-16}{-\frac{16}{3}}\right) = \left(\dfrac{25}{4}, 3\right)$. Check: $16 \cdot \frac{625}{16} - 25 \cdot 9 = 625 - 225 = 400$.`,
      ],
      answer: t`The line is a tangent; it touches at $\left(\frac{25}{4}, 3\right)$.`,
      figure: {
        alt: "The hyperbola x²/25 − y²/16 = 1 and the line 4x − 3y = 16, which touches the right branch at (25/4, 3).",
        axes: "xy",
        view: { x: [-12, 12], y: [-8.5, 8.5] },
        elements: [
          { kind: "hyperbola", centre: [0, 0], a: 5, b: 4, axis: "x", branch: 1, step: 1 },
          { kind: "hyperbola", centre: [0, 0], a: 5, b: 4, axis: "x", branch: -1, step: 1 },
          { kind: "label", at: [-1, 7.96], label: "16x² − 25y² = 400", labelAt: "w", step: 1 },
          { kind: "line", through: [[4, 0], [6.25, 3]], tone: "good", step: 2 },
          { kind: "label", at: [1.2, -5.6], label: "4x − 3y = 16", labelAt: "e", tone: "good", step: 2 },
          { kind: "point", at: [6.25, 3], label: "(25/4, 3)", labelAt: "se", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The hyperbola x²/9 − y²/5 = 1 and its two tangents of slope 1: y = x + 2, touching the left branch at (−9/2, −5/2), and y = x − 2, touching the right branch at (9/2, 5/2).",
      axes: "xy",
      view: { x: [-9, 9], y: [-6.5, 6.5] },
      elements: [
        { kind: "hyperbola", centre: [0, 0], a: 3, b: 2.236, axis: "x", branch: 1, step: 1 },
        { kind: "hyperbola", centre: [0, 0], a: 3, b: 2.236, axis: "x", branch: -1, step: 1 },
        { kind: "label", at: [0.3, -5.6], label: "x²/9 − y²/5 = 1", labelAt: "e", step: 1 },
        { kind: "line", through: [[-2, 0], [0, 2]], tone: "good", step: 2 },
        { kind: "line", through: [[2, 0], [0, -2]], tone: "good", step: 2 },
        { kind: "label", at: [-0.86, 3.71], label: "y = x + 2", labelAt: "w", tone: "good", step: 2 },
        { kind: "label", at: [0.3, -2.3], label: "y = x − 2", labelAt: "e", tone: "good", step: 2 },
        { kind: "point", at: [4.5, 2.5], step: 3 },
        { kind: "point", at: [-4.5, -2.5], step: 3 },
        { kind: "label", at: [5, 1.6], label: "(9/2, 5/2)", labelAt: "e", step: 3 },
        { kind: "label", at: [-5, -1.6], label: "(−9/2, −5/2)", labelAt: "w", step: 3 },
      ],
    },
    visualSpec: t`Drag $P$ along the hyperbola and its tangent follows, with $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ updating; a slider sets the slope $m$ and draws the two tangents $y = mx \pm \sqrt{a^2m^2 - b^2}$, which vanish once $|m| \le \frac{b}{a}$.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: t`Treats the hyperbola like an ellipse: writes $+$ for the $b^2$ term ($\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$, $c^2 = a^2m^2 + b^2$, contact $\left(-\frac{a^2m}{c}, \frac{b^2}{c}\right)$)`,
      remediation: t`The hyperbola's minus sign carries into every tangent formula: $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$, $c^2 = a^2m^2 - b^2$, and the point of contact $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C13-M2",
      mistake: t`Reads $a^2$ and $b^2$ as the coefficients of $x^2$ and $y^2$ in $Ax^2 - By^2 = C$, without dividing by $C$`,
      remediation: t`Divide by the constant first: $3x^2 - 2y^2 = 6$ is $\dfrac{x^2}{2} - \dfrac{y^2}{3} = 1$, so $a^2 = 2$ and $b^2 = 3$. In general $a^2 = \dfrac{C}{A}$ and $b^2 = \dfrac{C}{B}$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C13-M3",
      mistake: t`Uses the circle's rule: takes the tangent at $P$ perpendicular to $OP$, and the point of contact as the foot of the perpendicular from $O$`,
      remediation: t`A tangent is perpendicular to $OP$ only on a circle. On a hyperbola use $\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1$ at $P(x_1, y_1)$, and $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right)$ for the point where $y = mx + c$ touches.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: t`Reads $c$ from $Lx + My + N = 0$ as $-N$, without dividing by $M$`,
      remediation: t`Solve for $y$ before reading $c$: $3x - 2y = 8$ gives $y = \frac32 x - 4$, so $m = \frac32$ and $c = -4$.`,
      fallback: { kind: "ext", topic: "slope-intercept form of a line" },
    },
    {
      id: "C13-M5",
      mistake: t`Takes only the positive square root, so finds one tangent (or one $k$) where there are two`,
      remediation: t`$c^2 = a^2m^2 - b^2$ gives $c = \pm\sqrt{a^2m^2 - b^2}$. There are two tangents of each slope, one on each branch, so two lines and two values of $k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M6",
      mistake: t`Takes the point with eccentric angle $\theta$ as $(a\cos\theta, b\sin\theta)$, the ellipse's point`,
      remediation: t`On the hyperbola the point is $(a\sec\theta, b\tan\theta)$, because $\sec^2\theta - \tan^2\theta = 1$. The tangent there is $\dfrac{x\sec\theta}{a} - \dfrac{y\tan\theta}{b} = 1$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C13-M2 applies only when the hyperbola is written Ax² − By² = C with C ≠ 1, and only where the misread a², b² still give a real tangent.",
    "C13-M3 applies only to the tangent at a point and to the point of contact; C13-M4 only when the line's y coefficient is not 1.",
    "C13-M5 applies only to tangents of a given slope and to finding k; C13-M6 only to a point given by its eccentric angle.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q6(ii)" },
      stem: t`Find the equation of the tangent to the hyperbola $3x^2 - 4y^2 = 12$ at the point $(4, 3)$.`,
      verify: { kind: "locus", inputs: { A: "3", B: "4", C: "12", x1: "4", y1: "3" }, params: { type: "at" } },
      options: [
        { key: "A", text: t`$x - y = 1$`, correct: true, value: "12*x - 12*y - 12" },
        { key: "B", text: t`$x + y = 1$`, correct: false, misconceptionId: "C13-M1", value: "x + y - 1" },
        { key: "C", text: t`$16x - 9y = 12$`, correct: false, misconceptionId: "C13-M2", value: "4*x/3 - 3*y/4 - 1" },
        { key: "D", text: t`$4x + 3y = 25$`, correct: false, misconceptionId: "C13-M3", value: "4*x + 3*y - 25" },
      ],
      solution: {
        steps: [
          t`Divide by $12$: $\dfrac{x^2}{4} - \dfrac{y^2}{3} = 1$, so $a^2 = 4$, $b^2 = 3$.`,
          t`$(4, 3)$ is on it: $\frac{16}{4} - \frac{9}{3} = 1$. The tangent there is $\dfrac{4x}{4} - \dfrac{3y}{3} = 1$.`,
          t`So the tangent is $x - y = 1$.`,
        ],
        figure: {
          alt: "The hyperbola x²/4 − y²/3 = 1 and its tangent x − y = 1 at the point (4, 3) on the right branch.",
          axes: "xy",
          view: { x: [-7, 7], y: [-5, 5.5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 1.732, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 1.732, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-0.88, 5.22], label: "3x² − 4y² = 12", labelAt: "w", step: 1 },
            { kind: "point", at: [4, 3], label: "(4, 3)", labelAt: "se", step: 2 },
            { kind: "line", through: [[1, 0], [4, 3]], tone: "good", step: 3 },
            { kind: "label", at: [0.6, -3.4], label: "x − y = 1", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q6(iii)" },
      stem: t`Find the equation of the tangent to the hyperbola $\dfrac{x^2}{144} - \dfrac{y^2}{25} = 1$ at the point whose eccentric angle is $\dfrac{\pi}{3}$.`,
      verify: { kind: "locus", inputs: { A: "1/144", B: "1/25", C: "1", theta: "pi/3" }, params: { type: "at" } },
      options: [
        { key: "A", text: t`$5x - 6\sqrt{3}\,y = 30$`, correct: true, value: "x/6 - sqrt(3)*y/5 - 1" },
        { key: "B", text: t`$5x + 6\sqrt{3}\,y = 30$`, correct: false, misconceptionId: "C13-M1", value: "x/6 + sqrt(3)*y/5 - 1" },
        { key: "C", text: t`$24x + 5\sqrt{3}\,y = 651$`, correct: false, misconceptionId: "C13-M3", value: "24*x + 5*sqrt(3)*y - 651" },
        { key: "D", text: t`$5x - 12\sqrt{3}\,y = 120$`, correct: false, misconceptionId: "C13-M6", value: "x/24 - sqrt(3)*y/10 - 1" },
      ],
      solution: {
        steps: [
          t`$a = 12$, $b = 5$. The point with eccentric angle $\theta$ is $(a\sec\theta, b\tan\theta)$.`,
          t`$\sec\frac{\pi}{3} = 2$, $\tan\frac{\pi}{3} = \sqrt3$, so $P = (24, 5\sqrt3)$.`,
          t`Tangent: $\dfrac{24x}{144} - \dfrac{5\sqrt3\,y}{25} = 1$, that is $\dfrac{x}{6} - \dfrac{\sqrt3\,y}{5} = 1$.`,
          t`Multiply by $30$: $5x - 6\sqrt3\,y = 30$.`,
        ],
        figure: {
          alt: "The hyperbola x²/144 − y²/25 = 1, the point P(24, 5√3) with eccentric angle π/3, and the tangent there, 5x − 6√3y = 30, which crosses the x-axis at 6.",
          axes: "xy",
          view: { x: [-32, 32], y: [-17, 17] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 12, b: 5, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 12, b: 5, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-30, 14.5], label: "x²/144 − y²/25 = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [24, 8.66], label: "P(24, 5√3)", labelAt: "nw", step: 2 },
            { kind: "line", through: [[6, 0], [24, 8.66]], tone: "good", step: 3 },
            { kind: "label", at: [5, -12.5], label: "5x − 6√3y = 30", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q10" },
      stem: t`Find the equations of the tangents to the hyperbola $5x^2 - 4y^2 = 20$ which are parallel to the line $3x + 2y + 12 = 0$.`,
      verify: { kind: "locus", inputs: { A: "5", B: "4", C: "20", L: "3", M: "2" }, params: { type: "slope", rel: "parallel" } },
      options: [
        { key: "A", text: t`$3x + 2y = 4$ only`, correct: false, misconceptionId: "C13-M5", value: "3*x/2 + y - 2" },
        { key: "B", text: t`$3x + 2y = \pm 4$`, correct: true, value: "9*x**2/4 + 3*x*y + y**2 - 4" },
        { key: "C", text: t`$3x + 2y = \pm 2\sqrt{14}$`, correct: false, misconceptionId: "C13-M1", value: "9*x**2/4 + 3*x*y + y**2 - 14" },
        { key: "D", text: t`$3x + 2y = \pm\sqrt{29}$`, correct: false, misconceptionId: "C13-M2", value: "9*x**2/4 + 3*x*y + y**2 - 29/4" },
      ],
      solution: {
        steps: [
          t`Divide by $20$: $\dfrac{x^2}{4} - \dfrac{y^2}{5} = 1$, so $a^2 = 4$, $b^2 = 5$. The line $3x + 2y + 12 = 0$ has slope $-\frac32$, and so do the tangents.`,
          t`$c^2 = a^2m^2 - b^2 = 4 \cdot \frac94 - 5 = 4$, so $c = \pm 2$.`,
          t`$y = -\frac32 x \pm 2$; multiply by $2$: $3x + 2y = \pm 4$.`,
        ],
        figure: {
          alt: "The hyperbola x²/4 − y²/5 = 1 and its two tangents of slope −3/2, parallel to 3x + 2y + 12 = 0: 3x + 2y = 4 touching the right branch and 3x + 2y = −4 touching the left branch.",
          axes: "xy",
          view: { x: [-8.5, 8.5], y: [-8, 7] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [0.62, 6.62], label: "5x² − 4y² = 20", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 2], [4, -4]], tone: "good", step: 3 },
            { kind: "line", through: [[0, -2], [-4, 4]], tone: "good", step: 3 },
            { kind: "label", at: [4.6, -2.6], label: "3x + 2y = 4", labelAt: "e", tone: "good", step: 3 },
            { kind: "label", at: [-4.6, 2.6], label: "3x + 2y = −4", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc II Q25" },
      stem: t`Find the equations of the tangents to the hyperbola $3x^2 - y^2 = 48$ which are perpendicular to the line $x + 2y - 7 = 0$.`,
      verify: { kind: "locus", inputs: { A: "3", B: "1", C: "48", L: "1", M: "2" }, params: { type: "slope", rel: "perpendicular" } },
      options: [
        { key: "A", text: t`$y = 2x \pm 4\sqrt{7}$`, correct: false, misconceptionId: "C13-M1", value: "4*x**2 - 4*x*y + y**2 - 112" },
        { key: "B", text: t`$y = 2x \pm \sqrt{11}$`, correct: false, misconceptionId: "C13-M2", value: "4*x**2 - 4*x*y + y**2 - 11" },
        { key: "C", text: t`$y = 2x + 4$ only`, correct: false, misconceptionId: "C13-M5", value: "-2*x + y - 4" },
        { key: "D", text: t`$y = 2x \pm 4$`, correct: true, value: "4*x**2 - 4*x*y + y**2 - 16" },
      ],
      solution: {
        steps: [
          t`Divide by $48$: $\dfrac{x^2}{16} - \dfrac{y^2}{48} = 1$, so $a^2 = 16$, $b^2 = 48$. The line $x + 2y - 7 = 0$ has slope $-\frac12$, so the tangents have slope $2$.`,
          t`$c^2 = a^2m^2 - b^2 = 16 \cdot 4 - 48 = 16$, so $c = \pm 4$.`,
          t`The tangents are $y = 2x + 4$ and $y = 2x - 4$, that is $y = 2x \pm 4$.`,
        ],
        figure: {
          alt: "The hyperbola x²/16 − y²/48 = 1, the line x + 2y − 7 = 0, and the two tangents perpendicular to it, y = 2x + 4 touching the left branch and y = 2x − 4 touching the right branch.",
          axes: "xy",
          view: { x: [-15, 15], y: [-15, 15] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 6.928, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 6.928, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [8, 4.5], label: "3x² − y² = 48", labelAt: "e", step: 1 },
            { kind: "line", through: [[7, 0], [-1, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [10, -4.75], label: "x + 2y − 7 = 0", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[-2, 0], [0, 4]], tone: "good", step: 3 },
            { kind: "line", through: [[2, 0], [0, -4]], tone: "good", step: 3 },
            { kind: "label", at: [-0.25, 11.75], label: "y = 2x + 4", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [10, 9], label: "y = 2x − 4", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q8" },
      stem: t`If the line $3x - 4y = k$ touches the hyperbola $\dfrac{x^2}{5} - \dfrac{4y^2}{5} = 1$, then $k =$`,
      verify: { kind: "value", inputs: { A: "1", B: "4", C: "5", L: "3", M: "-4", s: "-1" }, params: { type: "k" } },
      options: [
        { key: "A", text: t`$k = \pm 5$`, correct: true, value: "{-5, 5}" },
        { key: "B", text: t`$k = \pm\sqrt{65}$`, correct: false, misconceptionId: "C13-M1", value: "{-sqrt(65), sqrt(65)}" },
        { key: "C", text: t`$k = \pm\dfrac{5}{4}$`, correct: false, misconceptionId: "C13-M4", value: "{-5/4, 5/4}" },
        { key: "D", text: t`$k = 5$ only`, correct: false, misconceptionId: "C13-M5", value: "{5}" },
      ],
      solution: {
        steps: [
          t`The hyperbola is $\dfrac{x^2}{5} - \dfrac{y^2}{5/4} = 1$: $a^2 = 5$, $b^2 = \frac54$. The line is $y = \frac34 x - \frac{k}{4}$: $m = \frac34$, $c = -\frac{k}{4}$.`,
          t`$c^2 = a^2m^2 - b^2$: $\dfrac{k^2}{16} = 5 \cdot \dfrac{9}{16} - \dfrac54 = \dfrac{25}{16}$.`,
          t`$k^2 = 25$, so $k = \pm 5$: the lines $3x - 4y = 5$ and $3x - 4y = -5$ both touch.`,
        ],
        figure: {
          alt: "The hyperbola x²/5 − y²/(5/4) = 1 and the two lines 3x − 4y = 5 and 3x − 4y = −5, which touch it at (3, 1) and (−3, −1).",
          axes: "xy",
          view: { x: [-6.5, 6.5], y: [-4.5, 4.5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2.236, b: 1.118, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2.236, b: 1.118, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-6.2, 3.8], label: "x² − 4y² = 5", labelAt: "e", step: 1 },
            { kind: "line", through: [[3, 1], [-1, -2]], tone: "good", step: 3 },
            { kind: "line", through: [[-3, -1], [1, 2]], tone: "good", step: 3 },
            { kind: "label", at: [2.57, -1.5], label: "k = 5", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [-3.4, 0.6], label: "k = −5", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q19" },
      stem: t`If the line $2x - y = 4$ touches the hyperbola $4x^2 - 3y^2 = 24$, the point of contact is`,
      verify: { kind: "value", inputs: { A: "4", B: "3", C: "24", L: "2", M: "-1", N: "-4" }, params: { type: "contact" } },
      options: [
        { key: "A", text: t`$(3, -2)$`, correct: false, misconceptionId: "C13-M1", value: "(3, -2)" },
        { key: "B", text: t`$\left(\frac{8}{5}, -\frac{4}{5}\right)$`, correct: false, misconceptionId: "C13-M3", value: "(8/5, -4/5)" },
        { key: "C", text: t`$(-3, -2)$`, correct: false, misconceptionId: "C13-M4", value: "(-3, -2)" },
        { key: "D", text: t`$(3, 2)$`, correct: true, value: "(3, 2)" },
      ],
      solution: {
        steps: [
          t`Divide by $24$: $\dfrac{x^2}{6} - \dfrac{y^2}{8} = 1$, so $a^2 = 6$, $b^2 = 8$.`,
          t`The line is $y = 2x - 4$: $m = 2$, $c = -4$. Check: $a^2m^2 - b^2 = 24 - 8 = 16 = c^2$, so it touches.`,
          t`Point of contact: $\left(-\dfrac{a^2m}{c}, -\dfrac{b^2}{c}\right) = \left(\dfrac{-12}{-4}, \dfrac{-8}{-4}\right) = (3, 2)$.`,
        ],
        figure: {
          alt: "The hyperbola x²/6 − y²/8 = 1 and the line 2x − y = 4, which touches the right branch at (3, 2).",
          axes: "xy",
          view: { x: [-7, 7], y: [-6, 6] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2.449, b: 2.828, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2.449, b: 2.828, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-0.62, 5.75], label: "4x² − 3y² = 24", labelAt: "w", step: 1 },
            { kind: "line", through: [[2, 0], [3, 2]], tone: "good", step: 2 },
            { kind: "label", at: [0.9, -4.4], label: "2x − y = 4", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [3, 2], label: "(3, 2)", labelAt: "nw", step: 3 },
          ],
        },
      },
    },
  ],
};
