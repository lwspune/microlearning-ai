import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Take the line through $(2, 3)$ and $(2, -1)$, and the line through $(7, 1)$ and $(-3, 1)$. **One has slope $0$ and the other has no slope at all. Which is which?**`,
    reveal: t`Slope is rise over run. From $(7, 1)$ to $(-3, 1)$ the rise is $0$ and the run is $-10$: slope $\frac{0}{-10} = 0$, a horizontal line. From $(2, 3)$ to $(2, -1)$ the run is $0$, and $\frac{-4}{0}$ is not defined: a vertical line has no slope. Its inclination is $90^\circ$, and $\tan 90^\circ$ is not defined either.`,
  },
  explanation: {
    intuition: t`Slope measures how steep a line is: how much it rises for each step to the right. Pick any two points on the line and divide the rise by the run; every pair gives the same answer, so a line has one slope. That number is $\tan\theta$, where $\theta$ is the angle the line makes with the positive $X$-axis, measured anticlockwise. A line rising to the right has a positive slope, a falling one a negative slope, a horizontal one slope $0$, and a vertical one no slope.`,
    formal: t`**Inclination and slope.** The inclination $\theta$ is measured anticlockwise from the positive $X$-axis, $0^\circ \le \theta < 180^\circ$. The slope is $m = \tan\theta$, for $\theta \ne 90^\circ$.

**Slope from two points.** Through $(x_1, y_1)$ and $(x_2, y_2)$ with $x_1 \ne x_2$: $$m = \frac{y_2 - y_1}{x_2 - x_1}$$ Subtract in the same order on top and bottom. A horizontal line has $m = 0$; a vertical line ($x_1 = x_2$) has no slope.

**From the intercepts.** A line with $X$-intercept $a$ and $Y$-intercept $b$ passes through $(a, 0)$ and $(0, b)$, so $m = \frac{b - 0}{0 - a} = -\frac{b}{a}$.

**Back to the angle.** If $m > 0$, $\theta$ is acute: $\theta = \tan^{-1} m$. If $m < 0$, $\theta$ is obtuse: $\theta = 180^\circ - \tan^{-1}|m|$. For example, $m = -1$ gives $\theta = 135^\circ$.

**Collinear points.** $A$, $B$, $C$ lie on one line exactly when slope of $AB$ = slope of $BC$: two lines with the same slope through the common point $B$ are the same line.`,
    worked: {
      prompt: t`Find $k$ if the points $A(1, 3)$, $B(4, 1)$ and $C(3, k)$ are collinear.`,
      steps: [
        t`Slope of $AB = \frac{1 - 3}{4 - 1} = -\frac{2}{3}$.`,
        t`$C$ lies somewhere on $x = 3$. Slope of $BC = \frac{k - 1}{3 - 4} = \frac{k - 1}{-1} = 1 - k$.`,
        t`Collinear, so slope of $BC$ = slope of $AB$: $1 - k = -\frac{2}{3}$, giving $k = \frac{5}{3}$.`,
        t`$AB$ and $BC$ have the same slope and share the point $B$, so they are one line: $C\left(3, \frac{5}{3}\right)$ lies on $AB$.`,
      ],
      answer: t`$k = \frac{5}{3}$.`,
      figure: {
        alt: "The line through A(1, 3) and B(4, 1), falling to the right with slope −2/3. A dashed vertical line x = 3 marks where C(3, k) must be. C(3, 5/3) sits where x = 3 meets line AB, and the piece from B to C lies along the same line.",
        axes: "xy",
        view: { x: [-0.5, 5.5], y: [-0.5, 4] },
        elements: [
          { kind: "line", through: [[1, 3], [4, 1]], step: 1 },
          { kind: "point", at: [1, 3], label: "A(1, 3)", labelAt: "ne", step: 1 },
          { kind: "point", at: [4, 1], label: "B(4, 1)", labelAt: "ne", step: 1 },
          { kind: "label", at: [2.5, 2], label: "slope AB = −2/3", labelAt: "sw", tone: "muted", step: 1 },
          { kind: "line", through: [[3, 0], [3, 1]], dashed: true, tone: "muted", step: 2 },
          { kind: "label", at: [3, 3.6], label: "x = 3", labelAt: "e", tone: "muted", step: 2 },
          { kind: "point", at: [3, 1.667], label: "C(3, 5/3)", labelAt: "ne", tone: "good", step: 3 },
          { kind: "segment", from: [4, 1], to: [3, 1.667], tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A line rising to the right through A(3, 1) and B(6, 3). It meets the x-axis at the angle θ, measured anticlockwise from the positive x-axis. From A, a run of 3 to the right and a rise of 2 up reach B, and the same angle θ shows at A. So the slope is m = 2/3 = tan θ.",
      axes: "xy",
      view: { x: [-0.8, 8], y: [-0.8, 4.6] },
      elements: [
        { kind: "line", through: [[3, 1], [6, 3]], step: 1 },
        { kind: "point", at: [3, 1], label: "A(3, 1)", labelAt: "nw", step: 1 },
        { kind: "point", at: [6, 3], label: "B(6, 3)", labelAt: "nw", step: 1 },
        { kind: "angle", at: [1.5, 0], from: 0, to: 33.69, label: "θ", labelAt: "e", step: 2 },
        { kind: "segment", from: [3, 1], to: [6, 1], label: "run = 3", labelAt: "s", tone: "muted", step: 3 },
        { kind: "segment", from: [6, 1], to: [6, 3], dashed: true, label: "rise = 2", labelAt: "e", tone: "muted", step: 3 },
        { kind: "angle", at: [3, 1], from: 0, to: 33.69, tone: "muted", step: 3 },
        { kind: "label", at: [0.2, 3.9], label: "m = 2/3 = tan θ", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag two points along a line: the rise and run change but their ratio stays fixed, and the inclination $\theta$ and $\tan\theta$ show alongside; tilt the line past vertical and the slope turns negative.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes slope as run over rise, $\frac{x_2 - x_1}{y_2 - y_1}$: that is $\cot\theta$, not $\tan\theta$`,
      remediation: t`Slope is rise over run: $m = \frac{y_2 - y_1}{x_2 - x_1} = \tan\theta$, the change in $y$ divided by the change in $x$. Turned upside down it gives $\cot\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Subtracts the $y$'s in one order and the $x$'s in the other, $\frac{y_2 - y_1}{x_1 - x_2}$, which flips the sign of the slope`,
      remediation: t`Keep the same order on top and bottom: if the top is $y_2 - y_1$, the bottom must be $x_2 - x_1$. Mixing the orders turns a rising line into a falling one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Takes the inclination as the acute angle $\tan^{-1}|m|$ even when the slope is negative`,
      remediation: t`The inclination runs from $0^\circ$ to $180^\circ$, anticlockwise from the positive $X$-axis. A negative slope means a line falling to the right, with an obtuse inclination: $\theta = 180^\circ - \tan^{-1}|m|$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of obtuse angles" },
    },
    {
      id: "C03-M4",
      mistake: t`Measures the angle from the $Y$-axis instead of the positive $X$-axis`,
      remediation: t`The inclination is always measured anticlockwise from the positive $X$-axis. An angle $\alpha$ turned anticlockwise from the positive $Y$-axis means $\theta = 90^\circ + \alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Takes slope as $\sin\theta$: the rise divided by the length of the segment instead of by the run`,
      remediation: t`Slope divides the rise by the run, the horizontal change, not by the length of the segment. So $m = \tan\theta$, not $\sin\theta$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios in a right triangle" },
    },
    {
      id: "C03-M6",
      mistake: t`Takes a point on the $X$-axis as $(0, b)$`,
      remediation: t`A point on the $X$-axis has $y = 0$, so it is $(b, 0)$. A point on the $Y$-axis has $x = 0$: $(0, b)$.`,
      fallback: { kind: "ext", topic: "coordinates of points on the axes" },
    },
  ],
  engineNotes: [
    t`C03-M1 (run over rise) gives the key whenever the slope is $\pm 1$, and on every collinearity question (equal slopes and equal reciprocals give the same $k$): diagnose it with a slope other than $\pm 1$, not with collinearity.`,
    t`C03-M3 gives the key for a positive slope, C03-M4 for an inclination of $45^\circ$ or $135^\circ$, and C03-M2 for a horizontal line: diagnose these with a negative slope other than $-1$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q1(i)" },
      stem: t`The slope of the line passing through $A(2, -1)$ and $B(4, 3)$ is:`,
      verify: { kind: "value", inputs: { x1: "2", y1: "-1", x2: "4", y2: "3" }, params: { q: "slope2" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C03-M2", value: "-2" },
        { key: "B", text: t`$\frac{2}{\sqrt{5}}$`, correct: false, misconceptionId: "C03-M5", value: "2*sqrt(5)/5" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M1", value: "1/2" },
      ],
      solution: {
        steps: [
          t`Rise: $y_2 - y_1 = 3 - (-1) = 4$. Run: $x_2 - x_1 = 4 - 2 = 2$, in the same order ($B$ minus $A$).`,
          t`$m = \frac{\text{rise}}{\text{run}} = \frac{4}{2} = 2$.`,
        ],
        figure: {
          alt: "The line through A(2, −1) and B(4, 3), rising steeply to the right. From A, a run of 2 to the right and a rise of 4 up reach B, so m = 4/2 = 2.",
          axes: "xy",
          view: { x: [-0.8, 6.2], y: [-2, 4.2] },
          elements: [
            { kind: "line", through: [[2, -1], [4, 3]] },
            { kind: "point", at: [2, -1], label: "A(2, −1)", labelAt: "w" },
            { kind: "point", at: [4, 3], label: "B(4, 3)", labelAt: "nw" },
            { kind: "segment", from: [2, -1], to: [4, -1], label: "run = 2", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [4, -1], to: [4, 3], dashed: true, label: "rise = 4", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [0.2, 3.6], label: "m = 4/2 = 2", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q7" },
      stem: t`A line makes an angle of $30^\circ$ with the positive direction of the $Y$-axis, measured anticlockwise. Its slope is:`,
      verify: { kind: "value", inputs: { alpha: "pi/6" }, params: { q: "yaxis" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M4", value: "sqrt(3)/3" },
        { key: "B", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(3)/2" },
        { key: "C", text: t`$-\sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$-\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M1", value: "-sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`Anticlockwise, the positive $Y$-axis is $90^\circ$ from the positive $X$-axis, and the line is $30^\circ$ further on. So $\theta = 90^\circ + 30^\circ = 120^\circ$.`,
          t`$m = \tan 120^\circ = -\tan 60^\circ = -\sqrt{3}$.`,
        ],
        figure: {
          alt: "A line falling to the right, crossing the x-axis at (4, 0). From a point on it, a dashed line points straight up, parallel to the positive y-axis; turning 30° anticlockwise from it reaches the line. The inclination, from the positive x-axis, is θ = 120°, so the slope is tan 120° = −√3.",
          axes: "xy",
          view: { x: [-0.5, 5.8], y: [-0.8, 3.7] },
          elements: [
            { kind: "line", through: [[4, 0], [3, 1.732]] },
            { kind: "segment", from: [3, 1.732], to: [3, 3.6], dashed: true, tone: "muted", step: 1 },
            { kind: "arc", centre: [3, 1.732], r: 1, from: 90, to: 120, tone: "muted", step: 1 },
            { kind: "label", at: [2.651, 2.811], label: "30°", labelAt: "n", tone: "muted", step: 1 },
            { kind: "angle", at: [4, 0], from: 0, to: 120, label: "θ = 120°", labelAt: "e", step: 1 },
            { kind: "label", at: [0.2, 1], label: "m = tan 120° = −√3", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q5" },
      stem: t`A line makes intercepts $2$ and $2\sqrt{3}$ on the $X$- and $Y$-axes respectively. Its inclination is:`,
      verify: { kind: "value", inputs: { x1: "2", y1: "0", x2: "0", y2: "2*sqrt(3)" }, params: { q: "incl2" } },
      options: [
        { key: "A", text: t`$150^\circ$`, correct: false, misconceptionId: "C03-M1", value: "150" },
        { key: "B", text: t`$60^\circ$`, correct: false, misconceptionId: "C03-M3", value: "60" },
        { key: "C", text: t`$30^\circ$`, correct: false, misconceptionId: "C03-M4", value: "30" },
        { key: "D", text: t`$120^\circ$`, correct: true, value: "120" },
      ],
      solution: {
        steps: [
          t`The line passes through $(2, 0)$ and $\left(0, 2\sqrt{3}\right)$, so $m = \frac{2\sqrt{3} - 0}{0 - 2} = -\sqrt{3}$.`,
          t`$m < 0$, so $\theta$ is obtuse: $\tan\theta = -\sqrt{3}$ gives $\theta = 180^\circ - 60^\circ = 120^\circ$.`,
        ],
        figure: {
          alt: "The line through (2, 0) and (0, 2√3), falling to the right, with slope m = −√3. Its inclination θ, measured anticlockwise from the positive x-axis at (2, 0), is the obtuse angle 120°.",
          axes: "xy",
          view: { x: [-0.8, 4.4], y: [-0.8, 4.3] },
          elements: [
            { kind: "line", through: [[2, 0], [0, 3.464]] },
            { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 3.464], label: "(0, 2√3)", labelAt: "ne", step: 1 },
            { kind: "label", at: [2.2, 2.5], label: "m = −√3", labelAt: "e", step: 1 },
            { kind: "angle", at: [2, 0], from: 0, to: 120, label: "θ", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [2.2, 2], label: "θ = 120°", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q2" },
      stem: t`The $X$- and $Y$-intercepts of line $L$ are $2$ and $3$ respectively. The slope of $L$ is:`,
      verify: { kind: "value", inputs: { x1: "2", y1: "0", x2: "0", y2: "3" }, params: { q: "slope2" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C03-M2", value: "3/2" },
        { key: "B", text: t`$\frac{3}{\sqrt{13}}$`, correct: false, misconceptionId: "C03-M5", value: "3*sqrt(13)/13" },
        { key: "C", text: t`$- \frac{3}{2}$`, correct: true, value: "-3/2" },
        { key: "D", text: t`$- \frac{2}{3}$`, correct: false, misconceptionId: "C03-M1", value: "-2/3" },
      ],
      solution: {
        steps: [
          t`The intercepts give two points on $L$: $(2, 0)$ and $(0, 3)$.`,
          t`$m = \frac{3 - 0}{0 - 2} = -\frac{3}{2}$, the same as $-\frac{b}{a}$.`,
        ],
        figure: {
          alt: "Line L through its intercept points (2, 0) and (0, 3), falling to the right. Going from (2, 0) to (0, 3) is a rise of 3 and a run of −2, so m = 3/(−2) = −3/2.",
          axes: "xy",
          view: { x: [-0.8, 4.4], y: [-0.8, 4] },
          elements: [
            { kind: "line", through: [[2, 0], [0, 3]] },
            { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [2, 0], to: [2, 3], dashed: true, label: "rise = 3", labelAt: "e", tone: "muted", step: 2 },
            { kind: "segment", from: [2, 3], to: [0, 3], label: "run = −2", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [2.3, 2.3], label: "m = 3/(−2) = −3/2", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc I Q1" },
      stem: t`$A$ is $(5, -3)$ and $B$ is a point on the $X$-axis such that the slope of line $AB$ is $-2$. Then $B$ is:`,
      verify: { kind: "value", inputs: { xa: "5", ya: "-3", m: "-2" }, params: { q: "on_xaxis" } },
      options: [
        { key: "A", text: t`$\left(\frac{7}{2}, 0\right)$`, correct: true, value: "(7/2, 0)" },
        { key: "B", text: t`$(-1, 0)$`, correct: false, misconceptionId: "C03-M1", value: "(-1, 0)" },
        { key: "C", text: t`$\left(\frac{13}{2}, 0\right)$`, correct: false, misconceptionId: "C03-M2", value: "(13/2, 0)" },
        { key: "D", text: t`$(0, 7)$`, correct: false, misconceptionId: "C03-M6", value: "(0, 7)" },
      ],
      solution: {
        steps: [
          t`$B$ is on the $X$-axis, so $B = (b, 0)$. Slope of $AB = \frac{0 - (-3)}{b - 5} = \frac{3}{b - 5}$.`,
          t`$\frac{3}{b - 5} = -2$, so $b - 5 = -\frac{3}{2}$ and $b = \frac{7}{2}$. So $B = \left(\frac{7}{2}, 0\right)$.`,
          t`Check: from $A$ to $B$ the rise is $3$ and the run is $-\frac{3}{2}$, and $3 \div \left(-\frac{3}{2}\right) = -2$.`,
        ],
        figure: {
          alt: "A(5, −3) below the x-axis, and B(7/2, 0) on the x-axis, joined by a line falling to the right. From A to B the run is −3/2 and the rise is 3, so the slope is 3/(−3/2) = −2.",
          axes: "xy",
          view: { x: [-0.8, 7.5], y: [-4, 1.4] },
          elements: [
            { kind: "point", at: [5, -3], label: "A(5, −3)", labelAt: "e" },
            { kind: "line", through: [[5, -3], [3.5, 0]], step: 2 },
            { kind: "point", at: [3.5, 0], label: "B(7/2, 0)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "segment", from: [5, -3], to: [3.5, -3], label: "run = −3/2", labelAt: "s", tone: "muted", step: 3 },
            { kind: "segment", from: [3.5, -3], to: [3.5, 0], dashed: true, label: "rise = 3", labelAt: "w", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q9" },
      stem: t`The inclination of the line joining $A(3, 1)$ and $B(0, 1 + \sqrt{3})$ is:`,
      verify: { kind: "value", inputs: { x1: "3", y1: "1", x2: "0", y2: "1 + sqrt(3)" }, params: { q: "incl2" } },
      options: [
        { key: "A", text: t`$150^\circ$`, correct: true, value: "150" },
        { key: "B", text: t`$120^\circ$`, correct: false, misconceptionId: "C03-M1", value: "120" },
        { key: "C", text: t`$30^\circ$`, correct: false, misconceptionId: "C03-M3", value: "30" },
        { key: "D", text: t`$60^\circ$`, correct: false, misconceptionId: "C03-M4", value: "60" },
      ],
      solution: {
        steps: [
          t`From $A(3, 1)$ to $B\left(0, 1 + \sqrt{3}\right)$: rise $\sqrt{3}$, run $0 - 3 = -3$. So $m = \frac{\sqrt{3}}{-3} = -\frac{1}{\sqrt{3}}$.`,
          t`$m < 0$, so $\theta$ is obtuse: $\tan\theta = -\frac{1}{\sqrt{3}}$ gives $\theta = 180^\circ - 30^\circ = 150^\circ$.`,
        ],
        figure: {
          alt: "The line through A(3, 1) and B(0, 1 + √3), falling to the right. From A to B the rise is √3 and the run is −3, so m = √3/(−3) = −1/√3. The line meets the x-axis at the obtuse angle θ = 150°, measured anticlockwise from the positive x-axis.",
          axes: "xy",
          view: { x: [-0.8, 6.2], y: [-0.8, 3.6] },
          elements: [
            { kind: "line", through: [[3, 1], [0, 2.732]] },
            { kind: "point", at: [3, 1], label: "A(3, 1)", labelAt: "ne" },
            { kind: "point", at: [0, 2.732], label: "B(0, 1 + √3)", labelAt: "ne" },
            { kind: "segment", from: [3, 1], to: [3, 2.732], dashed: true, label: "rise = √3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [3, 2.732], to: [0, 2.732], tone: "muted", step: 1 },
            { kind: "label", at: [1.8, 2.732], label: "run = −3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [0.2, 0.5], label: "m = √3/(−3) = −1/√3", labelAt: "e", step: 1 },
            { kind: "angle", at: [4.732, 0], from: 0, to: 150, label: "θ", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [3.6, 2.2], label: "θ = 150°", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
