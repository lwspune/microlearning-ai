import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Which line is closer to the origin: $x + y = 4$ or $3x + 4y = 12$? **Is it the one with the smaller number on the right?**`,
    reveal: t`No. Divide each equation by $\sqrt{a^2 + b^2}$ to get the normal form, whose right side is the distance $p$. $\frac{x}{\sqrt{2}} + \frac{y}{\sqrt{2}} = 2\sqrt{2}$ gives $p = 2\sqrt{2} \approx 2.83$, while $\frac{3}{5}x + \frac{4}{5}y = \frac{12}{5}$ gives $p = 2.4$. So $3x + 4y = 12$ is closer, though its constant is bigger.`,
  },
  explanation: {
    intuition: t`Two facts fix a line, and each form stores two of them. $y = mx + c$ stores the slope and where the line crosses the $Y$-axis. $\frac{x}{a} + \frac{y}{b} = 1$ stores where it crosses both axes. $x\cos\alpha + y\sin\alpha = p$ stores the perpendicular from the origin: its length $p$ and its direction $\alpha$. Pick the form whose two facts the question gives, and read them off only once the equation matches that form exactly.`,
    formal: t`**Slope–intercept form** $y = mx + c$. $m$ is the slope and $c$ is the $Y$-intercept (put $x = 0$). The $X$-intercept comes from $y = 0$: $x = -\frac{c}{m}$.

**Intercept form** $\frac{x}{a} + \frac{y}{b} = 1$ ($a, b \ne 0$). The line passes through $(a, 0)$ and $(0, b)$, and its slope is $\frac{b - 0}{0 - a} = -\frac{b}{a}$. To read the intercepts of $px + qy = r$, divide until it is exactly in this form: the intercepts are the **denominators**.

**Normal form** $x\cos\alpha + y\sin\alpha = p$. $p \ge 0$ is the length of the perpendicular $ON$ from the origin, and $\alpha$ ($0^\circ \le \alpha < 360^\circ$) is the angle $ON$ makes with the positive $X$-axis, not the line's own inclination.

**Reducing** $ax + by + c = 0$ **to normal form.** Write $ax + by = -c$; if the right side is negative, multiply by $-1$. Divide by $\sqrt{a^2 + b^2}$. The coefficients are now $\cos\alpha$ and $\sin\alpha$: find $\alpha$ from the signs of both, and the right side is $p$.

**Special lines.** Equal intercepts: $x + y = a$. Intercepts adding to zero: $x - y = a$. (A line through the origin has both intercepts $0$.) If $(h, k)$ bisects the segment between the axes, the intercepts are $2h$ and $2k$: $\frac{x}{h} + \frac{y}{k} = 2$.`,
    worked: {
      prompt: t`Reduce $\sqrt{3}x - y - 2 = 0$ to normal form, and find $p$ and $\alpha$.`,
      steps: [
        t`Move the constant: $\sqrt{3}x - y = 2$. The right side is already positive.`,
        t`$\sqrt{a^2 + b^2} = \sqrt{3 + 1} = 2$. Divide by $2$: $\frac{\sqrt{3}}{2}x - \frac{1}{2}y = 1$, so $p = 1$.`,
        t`$\cos\alpha = \frac{\sqrt{3}}{2}$ is positive and $\sin\alpha = -\frac{1}{2}$ is negative, so $\alpha$ is in the fourth quadrant: $\alpha = 360^\circ - 30^\circ = 330^\circ$.`,
      ],
      answer: t`$x\cos 330^\circ + y\sin 330^\circ = 1$, with $p = 1$ and $\alpha = 330^\circ$.`,
      figure: {
        alt: "The line √3x − y = 2, crossing the axes at about (1.15, 0) and (0, −2). The perpendicular from the origin O meets it at N, below and to the right of O, with ON = p = 1. The angle from the positive X-axis round to ON, measured anticlockwise, is α = 330°.",
        axes: "xy",
        view: { x: [-1.2, 2.4], y: [-2.4, 1.2] },
        elements: [
          { kind: "line", through: [[0, -2], [2, 1.4641016]], step: 1 },
          { kind: "label", at: [1.2, -1.5], label: "√3x − y = 2", labelAt: "e", step: 1 },
          { kind: "segment", from: [0, 0], to: [0.866, -0.5], tone: "good", step: 2 },
          { kind: "point", at: [0.866, -0.5], label: "N", labelAt: "se", tone: "good", step: 2 },
          { kind: "label", at: [0.3, -0.95], label: "p = 1", tone: "good", step: 2 },
          { kind: "angle", at: [0, 0], from: 0, to: 330, label: "α = 330°", labelAt: "nw", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line 3x + 4y = 12. It cuts the X-axis at (4, 0), so a = 4, and the Y-axis at (0, 3), so b = 3: x/4 + y/3 = 1. The perpendicular from the origin O meets the line at N; its length is p = 2.4 and it makes an angle α of about 53° with the positive X-axis: 0.6x + 0.8y = 2.4.",
      axes: "xy",
      view: { x: [-1, 5.5], y: [-1, 4] },
      elements: [
        { kind: "line", through: [[4, 0], [0, 3]], step: 1 },
        { kind: "label", at: [2.8, 1.25], label: "3x + 4y = 12", labelAt: "ne", step: 1 },
        { kind: "point", at: [4, 0], label: "a = 4", labelAt: "ne", step: 2 },
        { kind: "point", at: [0, 3], label: "b = 3", labelAt: "ne", step: 2 },
        { kind: "segment", from: [0, 0], to: [1.44, 1.92], tone: "good", step: 3 },
        { kind: "point", at: [1.44, 1.92], label: "N", labelAt: "ne", tone: "good", step: 3 },
        { kind: "label", at: [0.72, 0.96], label: "p = 2.4", labelAt: "se", tone: "good", step: 3 },
        { kind: "angle", at: [0, 0], from: 0, to: 53.13, label: "α ≈ 53°", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag a line around the plane; its slope and $Y$-intercept, its two intercepts, and its perpendicular from the origin (length $p$, angle $\alpha$) update together, with the three equations shown beside it.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Taking $c$ in $y = mx + c$ as the point where the line meets the $X$-axis`,
      remediation: t`In $y = mx + c$, $c$ is the $Y$-intercept: put $x = 0$ and $y = c$. An $X$-intercept $a$ means the point $(a, 0)$; use point–slope form through it, or put $y = 0$ to get $x = -\frac{c}{m}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: t`Reading intercepts or $p$ off an equation that is not yet in the form: $\frac{x}{a} + \frac{y}{b} = 1$ taken as $ax + by = 1$, and the constant of $ax + by = c$ taken as $p$`,
      remediation: t`Make the equation match the form exactly before reading it. In $\frac{x}{a} + \frac{y}{b} = 1$ the intercepts are the denominators. For normal form, divide by $\sqrt{a^2 + b^2}$ so the coefficients are $\cos\alpha$ and $\sin\alpha$; only then is the right side $p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Dropping the minus sign that links slope and intercepts: slope $\frac{b}{a}$, $c = ma$, $X$-intercept $\frac{c}{m}$`,
      remediation: t`From $(a, 0)$ to $(0, b)$ the slope is $\frac{b - 0}{0 - a} = -\frac{b}{a}$. So $c = -ma$, and the $X$-intercept is $-\frac{c}{m}$. A line that cuts both positive axes slopes downwards.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: "Taking the coordinates of the point that bisects the intercepted segment as the intercepts",
      remediation: t`If $(h, k)$ is the midpoint of the segment from $(a, 0)$ to $(0, b)$, then $\frac{a}{2} = h$ and $\frac{b}{2} = k$, so $a = 2h$ and $b = 2k$. The line is $\frac{x}{2h} + \frac{y}{2k} = 1$, that is $\frac{x}{h} + \frac{y}{k} = 2$.`,
      fallback: { kind: "ext", topic: "midpoint formula" },
    },
    {
      id: "C06-M5",
      mistake: t`Taking $\alpha$ in $x\cos\alpha + y\sin\alpha = p$ as the inclination of the line`,
      remediation: t`$\alpha$ is the angle that the perpendicular from the origin makes with the positive $X$-axis. The line itself is at right angles to that perpendicular, so its inclination differs from $\alpha$ by $90^\circ$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M6",
      mistake: t`Using the acute angle for $\alpha$ and ignoring the signs of $\cos\alpha$ and $\sin\alpha$`,
      remediation: t`$\alpha$ runs from $0^\circ$ to $360^\circ$. Use the signs of both $\cos\alpha$ and $\sin\alpha$ to place it: both negative puts it in the third quadrant. The acute angle only gives the size of the ratios.`,
      fallback: { kind: "ext", topic: "signs of trigonometric ratios in the four quadrants" },
    },
  ],
  engineNotes: [
    t`C06-M1 gives the key when the slope is $-1$, since the two intercepts are then equal; diagnose it with any other slope.`,
    t`C06-M6 gives the key when $\alpha$ is acute, and C06-M2 when $a^2 + b^2 = 1$; diagnose them with $\alpha$ outside the first quadrant and $a^2 + b^2 \ne 1$. C06-M5's model on a general equation needs a line that is not vertical.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q21" },
      stem: t`The line with slope $2$ and $X$-intercept $4$ has $Y$-intercept:`,
      verify: { kind: "value", inputs: { m: "2", a: "4" }, params: { given: "slope_xint" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C06-M1", value: "4" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C06-M2", value: "-2" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C06-M3", value: "8" },
        { key: "D", text: t`$-8$`, correct: true, value: "-8" },
      ],
      solution: {
        steps: [
          t`An $X$-intercept of $4$ means the line passes through $(4, 0)$. With slope $2$, point–slope form gives $y - 0 = 2(x - 4)$.`,
          t`So $y = 2x - 8$. In $y = mx + c$, $c$ is the $Y$-intercept: the line meets the $Y$-axis at $(0, -8)$, and the $Y$-intercept is $-8$.`,
        ],
        figure: {
          alt: "The line through (4, 0) with slope 2, which is y = 2x − 8. It meets the Y-axis at (0, −8), so the Y-intercept is −8.",
          axes: "xy",
          view: { x: [-2.5, 6.5], y: [-9, 1.5] },
          elements: [
            { kind: "line", through: [[4, 0], [0, -8]], step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", step: 1 },
            { kind: "label", at: [3.2, -3.5], label: "y = 2x − 8", labelAt: "e", step: 2 },
            { kind: "point", at: [0, -8], label: "(0, −8)", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q17" },
      stem: t`The line with slope $3$ makes an intercept of $4$ on the $Y$-axis. Its $X$-intercept is:`,
      verify: { kind: "value", inputs: { m: "3", c: "4" }, params: { given: "slope_yint" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: true, value: "-4/3" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C06-M1", value: "4" },
        { key: "C", text: t`$-12$`, correct: false, misconceptionId: "C06-M2", value: "-12" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C06-M3", value: "4/3" },
      ],
      solution: {
        steps: [
          t`Slope–intercept form with $m = 3$ and $c = 4$: $y = 3x + 4$. It meets the $Y$-axis at $(0, 4)$.`,
          t`On the $X$-axis $y = 0$: $3x + 4 = 0$, so $x = -\frac{4}{3}$. The $X$-intercept is $-\frac{4}{3}$.`,
        ],
        figure: {
          alt: "The line y = 3x + 4, meeting the Y-axis at (0, 4) and the X-axis at (−4/3, 0), so the X-intercept is −4/3.",
          axes: "xy",
          view: { x: [-3.5, 2.5], y: [-1.5, 5.5] },
          elements: [
            { kind: "line", through: [[0, 4], [-2, -2]], step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "se", step: 1 },
            { kind: "label", at: [0.6, 1.5], label: "y = 3x + 4", labelAt: "e", step: 1 },
            { kind: "point", at: [-1.3333333333333333, 0], label: "(−4/3, 0)", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.3 SolvedEx.3(vii)" },
      stem: t`The segment of a line between the coordinate axes is bisected at $N(-2, 3)$. The equation of the line is:`,
      verify: { kind: "locus", inputs: { h: "-2", k: "3" }, params: { given: "midpoint" } },
      options: [
        { key: "A", text: t`$3x - 2y + 12 = 0$`, correct: true, value: "3*x - 2*y + 12" },
        { key: "B", text: t`$3x - 2y + 6 = 0$`, correct: false, misconceptionId: "C06-M4", value: "3*x - 2*y + 6" },
        { key: "C", text: t`$-4x + 6y = 1$`, correct: false, misconceptionId: "C06-M2", value: "-4*x + 6*y - 1" },
        { key: "D", text: t`$3x + 2y = 0$`, correct: false, misconceptionId: "C06-M3", value: "3*x + 2*y" },
      ],
      solution: {
        steps: [
          t`Let the line meet the axes at $A(a, 0)$ and $B(0, b)$. $N$ is the midpoint of $AB$: $\left(\frac{a}{2}, \frac{b}{2}\right) = (-2, 3)$, so $a = -4$ and $b = 6$.`,
          t`Intercept form: $\frac{x}{-4} + \frac{y}{6} = 1$.`,
          t`Multiply by $12$: $-3x + 2y = 12$, that is $3x - 2y + 12 = 0$.`,
        ],
        figure: {
          alt: "The segment from A(−4, 0) on the X-axis to B(0, 6) on the Y-axis, with its midpoint N(−2, 3). The line through A and B is x/(−4) + y/6 = 1, that is 3x − 2y + 12 = 0.",
          axes: "xy",
          view: { x: [-6, 2], y: [-1.5, 7.5] },
          elements: [
            { kind: "point", at: [-2, 3], label: "N(−2, 3)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [-4, 0], to: [0, 6], tone: "muted", step: 1 },
            { kind: "point", at: [-4, 0], label: "A(−4, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 6], label: "B(0, 6)", labelAt: "se", step: 1 },
            { kind: "line", through: [[-4, 0], [0, 6]], tone: "good", step: 2 },
            { kind: "label", at: [-5.6, 4.6], label: "3x − 2y + 12 = 0", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.3 SolvedEx.3(vi)" },
      stem: t`The line making an intercept of $3$ on the $X$-axis and $6$ on the $Y$-axis is:`,
      verify: { kind: "locus", inputs: { a: "3", b: "6" }, params: { given: "intercepts" } },
      options: [
        { key: "A", text: t`$2x + y - 3 = 0$`, correct: false, misconceptionId: "C06-M1", value: "2*x + y - 3" },
        { key: "B", text: t`$2x + y - 6 = 0$`, correct: true, value: "2*x + y - 6" },
        { key: "C", text: t`$3x + 6y = 1$`, correct: false, misconceptionId: "C06-M2", value: "3*x + 6*y - 1" },
        { key: "D", text: t`$2x - y + 6 = 0$`, correct: false, misconceptionId: "C06-M3", value: "2*x - y + 6" },
      ],
      solution: {
        steps: [
          t`Intercept form with $a = 3$ and $b = 6$: $\frac{x}{3} + \frac{y}{6} = 1$.`,
          t`Multiply by $6$: $2x + y = 6$, that is $2x + y - 6 = 0$. Check: $(3, 0)$ and $(0, 6)$ both satisfy it.`,
        ],
        figure: {
          alt: "The line through (3, 0) on the X-axis and (0, 6) on the Y-axis: x/3 + y/6 = 1, that is 2x + y − 6 = 0.",
          axes: "xy",
          view: { x: [-1.5, 5.5], y: [-1, 7.5] },
          elements: [
            { kind: "line", through: [[3, 0], [0, 6]], step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 6], label: "(0, 6)", labelAt: "ne", step: 1 },
            { kind: "label", at: [2.2, 2.6], label: "2x + y − 6 = 0", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.3 SolvedEx.2" },
      stem: t`When $x + \sqrt{3}y + 6 = 0$ is reduced to the normal form $x\cos\alpha + y\sin\alpha = p$, the values of $p$ and $\alpha$ are:`,
      verify: { kind: "value", inputs: { A: "1", B: "sqrt(3)", C: "6" }, params: { given: "general" } },
      options: [
        { key: "A", text: t`$p = 3,\ \alpha = 240^\circ$`, correct: true, value: "(3, 240)" },
        { key: "B", text: t`$p = 3,\ \alpha = 150^\circ$`, correct: false, misconceptionId: "C06-M5", value: "(3, 150)" },
        { key: "C", text: t`$p = 3,\ \alpha = 60^\circ$`, correct: false, misconceptionId: "C06-M6", value: "(3, 60)" },
        { key: "D", text: t`$p = 6,\ \alpha = 240^\circ$`, correct: false, misconceptionId: "C06-M2", value: "(6, 240)" },
      ],
      solution: {
        steps: [
          t`Move the constant: $x + \sqrt{3}y = -6$. The right side must be positive, since $p \ge 0$, so multiply by $-1$: $-x - \sqrt{3}y = 6$.`,
          t`$\sqrt{(-1)^2 + (-\sqrt{3})^2} = 2$. Divide by $2$: $-\frac{1}{2}x - \frac{\sqrt{3}}{2}y = 3$, so $p = 3$.`,
          t`$\cos\alpha = -\frac{1}{2}$ and $\sin\alpha = -\frac{\sqrt{3}}{2}$ are both negative, so $\alpha$ is in the third quadrant: $\alpha = 180^\circ + 60^\circ = 240^\circ$. So $p = 3$ and $\alpha = 240^\circ$.`,
        ],
        figure: {
          alt: "The line x + √3y + 6 = 0, crossing the axes at (−6, 0) and about (0, −3.46). The perpendicular from the origin O meets it at N, down and to the left of O, with ON = p = 3. The angle from the positive X-axis round to ON, measured anticlockwise, is α = 240°.",
          axes: "xy",
          view: { x: [-7, 2], y: [-4.5, 1.5] },
          elements: [
            { kind: "line", through: [[-6, 0], [0, -3.4641016]], step: 1 },
            { kind: "label", at: [-6.5, -2.6], label: "x + √3y + 6 = 0", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 0], to: [-1.5, -2.5980762], tone: "good", step: 2 },
            { kind: "point", at: [-1.5, -2.5980762], label: "N", labelAt: "sw", tone: "good", step: 2 },
            { kind: "label", at: [-1, -1], label: "p = 3", labelAt: "w", tone: "good", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 240, label: "α = 240°", labelAt: "nw", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.3 SolvedEx.1" },
      stem: t`The perpendicular drawn from the origin to a line has length $4$ and makes an angle of $150^\circ$ with the positive direction of the $X$-axis. The equation of the line is:`,
      verify: { kind: "locus", inputs: { p: "4", alpha: "5*pi/6" }, params: { given: "normal" } },
      options: [
        { key: "A", text: t`$x + \sqrt{3}y - 8 = 0$`, correct: false, misconceptionId: "C06-M5", value: "x + sqrt(3)*y - 8" },
        { key: "B", text: t`$\sqrt{3}x - y + 4 = 0$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(3)*x - y + 4" },
        { key: "C", text: t`$\sqrt{3}x - y + 8 = 0$`, correct: true, value: "sqrt(3)*x - y + 8" },
        { key: "D", text: t`$\sqrt{3}x + y - 8 = 0$`, correct: false, misconceptionId: "C06-M6", value: "sqrt(3)*x + y - 8" },
      ],
      solution: {
        steps: [
          t`Normal form with $p = 4$ and $\alpha = 150^\circ$: $x\cos 150^\circ + y\sin 150^\circ = 4$.`,
          t`$150^\circ$ is in the second quadrant, so $\cos 150^\circ = -\frac{\sqrt{3}}{2}$ and $\sin 150^\circ = \frac{1}{2}$: $-\frac{\sqrt{3}}{2}x + \frac{1}{2}y = 4$.`,
          t`Multiply by $-2$: $\sqrt{3}x - y = -8$, that is $\sqrt{3}x - y + 8 = 0$.`,
        ],
        figure: {
          alt: "The perpendicular ON from the origin, of length p = 4, at α = 150° to the positive X-axis, so N is about (−3.46, 2). The line through N at right angles to ON is √3x − y + 8 = 0; it crosses the Y-axis at (0, 8).",
          axes: "xy",
          view: { x: [-7, 2], y: [-1.5, 9] },
          elements: [
            { kind: "segment", from: [0, 0], to: [-3.4641016, 2], tone: "good", step: 1 },
            { kind: "point", at: [-3.4641016, 2], label: "N", labelAt: "nw", tone: "good", step: 1 },
            { kind: "label", at: [-2.6, 0.5], label: "p = 4", tone: "good", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 150, label: "α = 150°", labelAt: "e", tone: "good", step: 1 },
            { kind: "line", through: [[-3.4641016, 2], [0, 8]], step: 2 },
            { kind: "label", at: [-6.8, 5], label: "√3x − y + 8 = 0", labelAt: "e", step: 3 },
          ],
        },
      },
    },
  ],
};
