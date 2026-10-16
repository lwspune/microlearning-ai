import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The initial arm along the positive x-axis (tone good), its label `labelX` along it, above the axis. */
function initialArm(len: number, labelX: number, step?: number): FigureElement[] {
  const s = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [0, 0], to: [len, 0], tone: "good", ...s },
    { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good", ...s },
  ];
}

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Which line is closer to the origin: $x + y = 4$ or $3x + 4y = 12$? **Is it the one with the smaller number on the right?**`,
    reveal: t`No. Divide each equation by $\sqrt{a^2 + b^2}$ to get the normal form, whose right side is the distance $p$. $\frac{x}{\sqrt{2}} + \frac{y}{\sqrt{2}} = 2\sqrt{2}$ gives $p = 2\sqrt{2} \approx 2.83$, while $\frac{3}{5}x + \frac{4}{5}y = \frac{12}{5}$ gives $p = 2.4$. So $3x + 4y = 12$ is closer, though its constant is bigger.`,
  },
  explanation: {
    intuition: [
      t`Two facts fix a line, and each form of its equation stores two of them.`,
      t`$y = mx + c$ stores the slope $m$ and the **$Y$-intercept** $c$: the line crosses the $Y$-axis at $(0, c)$.`,
      t`$\frac{x}{a} + \frac{y}{b} = 1$ stores both **intercepts**: the line crosses the $X$-axis at $(a, 0)$ and the $Y$-axis at $(0, b)$.`,
      t`The **perpendicular** from the origin $O$ is the segment $ON$ that meets the line at right angles.`,
      t`$x\cos\alpha + y\sin\alpha = p$ stores its length $p$ and its direction $\alpha$, turned from the positive $X$-axis.`,
      t`Pick the form whose two facts you are given, and read them off only once the equation matches it exactly.`,
    ],
    formal: [
      {
        title: "Slope–intercept form",
        points: [
          t`The **slope–intercept form** of a line is $y = mx + c$, like $y = 2x + 2$.`,
          t`$m$ is the slope, the rise for each step of $1$ to the right: here $2$.`,
          t`$c$ is the $Y$-intercept: put $x = 0$ to get $y = c$, here $2$.`,
          t`The $X$-intercept comes from putting $y = 0$: solve $mx + c = 0$.`,
          t`So for $m \ne 0$ it is $x = -\frac{c}{m}$, here $-\frac{2}{2} = -1$.`,
        ],
        figure: {
          alt: "The line y = 2x + 2. A step of 1 to the right from (0, 2) rises 2, so the slope m is 2. The line crosses the Y-axis at (0, 2), so c = 2, and the X-axis at (−1, 0), which is −c/m.",
          axes: "xy",
          view: { x: [-2.5, 2.5], y: [-1.5, 5] },
          elements: [
            { kind: "line", through: [[-1, 0], [1, 4]], step: 1 },
            { kind: "label", at: [-0.9, 1.4], label: "y = 2x + 2", labelAt: "w", step: 1 },
            { kind: "segment", from: [0, 2], to: [1, 2], label: "1", labelAt: "s", dashed: true, tone: "muted", step: 2 },
            { kind: "segment", from: [1, 2], to: [1, 4], label: "rise 2", labelAt: "e", dashed: true, tone: "muted", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2)", labelAt: "nw", tone: "good", step: 3 },
            { kind: "point", at: [-1, 0], label: "(−1, 0)", labelAt: "nw", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Intercept form",
        points: [
          t`The **intercept form** of a line is $\frac{x}{a} + \frac{y}{b} = 1$, where $a \ne 0$ and $b \ne 0$.`,
          t`Put $y = 0$: then $x = a$, so the line passes through $(a, 0)$.`,
          t`Put $x = 0$: then $y = b$, so it passes through $(0, b)$.`,
          t`Its slope, from $(a, 0)$ to $(0, b)$, is $\frac{b - 0}{0 - a} = -\frac{b}{a}$.`,
          t`So a line that cuts both positive axes slopes downwards.`,
        ],
        figure: {
          alt: "The line x/4 + y/2 = 1. Putting y = 0 gives the point (a, 0) = (4, 0) on the X-axis; putting x = 0 gives (0, b) = (0, 2) on the Y-axis. Its slope is −b/a: it cuts both positive axes and slopes downwards.",
          axes: "xy",
          view: { x: [-1, 5.5], y: [-1, 3.5] },
          elements: [
            { kind: "line", through: [[4, 0], [0, 2]], step: 1 },
            { kind: "label", at: [2.2, 1.4], label: "x/4 + y/2 = 1", labelAt: "ne", step: 1 },
            { kind: "point", at: [4, 0], label: "(a, 0)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, b)", labelAt: "ne", tone: "good", step: 3 },
            { kind: "label", at: [0.6, 0.6], label: "slope −b/a", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Reading off the intercepts",
        points: [
          t`To read the intercepts of $px + qy = r$, first make it match the intercept form exactly.`,
          t`For $2x + 3y = 6$, divide by $6$ so the right side is $1$: $\frac{2x}{6} + \frac{3y}{6} = 1$.`,
          t`Simplify: $\frac{x}{3} + \frac{y}{2} = 1$.`,
          t`The intercepts are the **denominators**: $3$ on the $X$-axis and $2$ on the $Y$-axis.`,
          t`They are not the coefficients: the line misses $(2, 0)$ and $(0, 3)$.`,
        ],
        figure: {
          alt: "The line 2x + 3y = 6, which is x/3 + y/2 = 1. It crosses the X-axis at (3, 0) and the Y-axis at (0, 2), the denominators. The points (2, 0) and (0, 3), from the coefficients, are not on it.",
          axes: "xy",
          view: { x: [-1, 4.5], y: [-1, 3.5] },
          elements: [
            { kind: "line", through: [[3, 0], [0, 2]], step: 2 },
            { kind: "label", at: [1.7, 1.8], label: "2x + 3y = 6", labelAt: "ne", step: 2 },
            { kind: "label", at: [1.7, 1.3], label: "x/3 + y/2 = 1", labelAt: "ne", tone: "good", step: 3 },
            { kind: "point", at: [3, 0], label: "3", labelAt: "ne", tone: "good", step: 4 },
            { kind: "point", at: [0, 2], label: "2", labelAt: "ne", tone: "good", step: 4 },
            { kind: "point", at: [2, 0], tone: "bad", step: 5 },
            { kind: "point", at: [0, 3], tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Normal form",
        points: [
          t`**Normal** means perpendicular: the **normal form** describes a line by its perpendicular $ON$ from the origin.`,
          t`$p$ is the length of $ON$, so $p \ge 0$.`,
          t`$\alpha$ is the angle $ON$ is turned through from the positive $X$-axis, anticlockwise.`,
          t`$\alpha$ can be any angle from $0^\circ$ up to, but not including, $360^\circ$.`,
          t`Then the line is $x\cos\alpha + y\sin\alpha = p$.`,
          t`Recall: a line's **inclination** is its own angle with the $X$-axis; $\alpha$ is not that, as $ON$ is at right angles to the line.`,
        ],
        figure: {
          alt: "A line crossing the axes at (−4, 0) and about (0, 2.31). The perpendicular from the origin O meets it at N, up and to the left of O, with ON = p = 2. ON is turned 120° anticlockwise from the initial arm, the positive X-axis, so α = 120°, and the line is x cos 120° + y sin 120° = 2. The line's own inclination is 30°, not α.",
          axes: "xy",
          view: { x: [-5, 2], y: [-1, 3.5] },
          elements: [
            { kind: "line", through: [[-4, 0], [0, 2.3094011]], step: 1 },
            { kind: "segment", from: [0, 0], to: [-1, 1.7320508], tone: "good", step: 1 },
            { kind: "point", at: [-1, 1.7320508], label: "N", labelAt: "nw", tone: "good", step: 1 },
            { kind: "label", at: [-0.7, 1.25], label: "p = 2", labelAt: "w", tone: "good", step: 2 },
            ...initialArm(1.6, 0.9, 3),
            { kind: "turn", r: 1, to: 120, label: "α = 120°", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [-4.9, 3.1], label: "x cos 120° + y sin 120° = 2", labelAt: "e", step: 5 },
            { kind: "angle", at: [-4, 0], from: 0, to: 30, label: "30°", labelAt: "e", tone: "bad", step: 6 },
          ],
        },
      },
      {
        title: "Reducing to normal form",
        points: [
          t`To reduce $ax + by + c = 0$, like $3x + 4y + 10 = 0$, move the constant: $ax + by = -c$.`,
          t`The right side must be $p \ge 0$: if it is negative, multiply both sides by $-1$.`,
          t`Divide by $\sqrt{a^2 + b^2}$, so the squares of the coefficients add up to $1$.`,
          t`The coefficients of $x$ and $y$ are now $\cos\alpha$ and $\sin\alpha$.`,
          t`The right side is now $p$, the length of $ON$.`,
          t`Place $\alpha$ by the signs of both: here both are negative, so $\alpha$ is in Quadrant III.`,
        ],
        figure: {
          alt: "The line 3x + 4y + 10 = 0, crossing the axes at about (−3.33, 0) and (0, −2.5). It is reduced in steps: 3x + 4y = −10, then −3x − 4y = 10, then dividing by √(3² + 4²) = 5 gives −0.6x − 0.8y = 2. The perpendicular from the origin meets the line at N, down and to the left of O, with ON = p = 2. ON is turned about 233° anticlockwise from the initial arm, into Quadrant III, because cos α = −0.6 and sin α = −0.8 are both negative.",
          axes: "xy",
          view: { x: [-4.5, 1.8], y: [-3, 2] },
          elements: [
            { kind: "line", through: [[-3.3333333, 0], [0, -2.5]], step: 1 },
            { kind: "label", at: [-4.4, -1.3], label: "3x + 4y + 10 = 0", labelAt: "e", step: 1 },
            { kind: "label", at: [-2.9, 1.75], label: "3x + 4y = −10", labelAt: "e", step: 1 },
            { kind: "label", at: [-2.9, 1.35], label: "−3x − 4y = 10", labelAt: "e", step: 2 },
            { kind: "label", at: [-2.9, 0.95], label: "÷ √(3² + 4²) = 5", labelAt: "e", step: 3 },
            { kind: "label", at: [-2.9, 0.55], label: "−0.6x − 0.8y = 2", labelAt: "e", tone: "good", step: 4 },
            { kind: "segment", from: [0, 0], to: [-1.2, -1.6], tone: "good", step: 5 },
            { kind: "point", at: [-1.2, -1.6], label: "N", labelAt: "sw", tone: "good", step: 5 },
            { kind: "label", at: [-0.95, -1.27], label: "p = 2", labelAt: "se", tone: "good", step: 5 },
            ...initialArm(1.4, 0.85, 6),
            { kind: "turn", r: 0.8, to: 233.13, label: "α ≈ 233°", labelAt: "w", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Equal or opposite intercepts",
        points: [
          t`Equal intercepts, $a$ on each axis, give $\frac{x}{a} + \frac{y}{a} = 1$: that is, $x + y = a$.`,
          t`Intercepts adding to zero, $a$ and $-a$, give $\frac{x}{a} + \frac{y}{-a} = 1$: that is, $x - y = a$.`,
          t`A line through the origin has both intercepts $0$: equal, and adding to zero too.`,
        ],
        figure: {
          alt: "The line x + y = 3 cuts both axes at 3: equal intercepts. The line x − y = 3 cuts the X-axis at 3 and the Y-axis at −3: intercepts adding to zero. A dashed line through the origin has both intercepts 0.",
          axes: "xy",
          view: { x: [-3.5, 5], y: [-4, 4.5] },
          elements: [
            { kind: "line", through: [[3, 0], [0, 3]], step: 1 },
            { kind: "point", at: [3, 0], step: 1 },
            { kind: "point", at: [0, 3], step: 1 },
            { kind: "label", at: [1.6, 2.2], label: "x + y = 3", labelAt: "ne", step: 1 },
            { kind: "line", through: [[3, 0], [0, -3]], tone: "good", step: 2 },
            { kind: "point", at: [0, -3], tone: "good", step: 2 },
            { kind: "label", at: [1.2, -2.4], label: "x − y = 3", labelAt: "se", tone: "good", step: 2 },
            { kind: "line", through: [[0, 0], [1, 2]], dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [-1.4, -2.8], label: "both 0", labelAt: "w", tone: "muted", step: 3 },
          ],
        },
      },
      {
        title: "Midpoint between the axes",
        points: [
          t`Let the line cut the axes at $A(a, 0)$ and $B(0, b)$.`,
          t`Let $M(h, k)$ be the **midpoint** of $AB$, the point halfway between them.`,
          t`The midpoint of $AB$ is $\left(\frac{a}{2}, \frac{b}{2}\right)$, so $h = \frac{a}{2}$ and $k = \frac{b}{2}$.`,
          t`So the intercepts are $a = 2h$ and $b = 2k$, not $h$ and $k$.`,
          t`The line is $\frac{x}{2h} + \frac{y}{2k} = 1$, that is $\frac{x}{h} + \frac{y}{k} = 2$.`,
        ],
        figure: {
          alt: "A line cutting the axes at A(6, 0) and B(0, 4). The midpoint of AB is M(3, 2), so h = 3 and k = 2, and the intercepts are a = 2h = 6 and b = 2k = 4. The line is x/6 + y/4 = 1, that is x/3 + y/2 = 2.",
          axes: "xy",
          view: { x: [-1, 7.5], y: [-1, 5] },
          elements: [
            { kind: "line", through: [[6, 0], [0, 4]], step: 1 },
            { kind: "point", at: [6, 0], label: "A(6, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 4], label: "B(0, 4)", labelAt: "ne", step: 1 },
            { kind: "point", at: [3, 2], label: "M(3, 2)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "label", at: [4, 4.4], label: "a = 2h, b = 2k", labelAt: "e", tone: "good", step: 4 },
            { kind: "label", at: [4, 3.8], label: "x/3 + y/2 = 2", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Reduce $\sqrt{3}x - y - 2 = 0$ to normal form, and find $p$ and $\alpha$.`,
      steps: [
        t`Move the constant: $\sqrt{3}x - y = 2$. The right side is already positive.`,
        t`$\sqrt{a^2 + b^2} = \sqrt{3 + 1} = 2$. Divide by $2$: $\frac{\sqrt{3}}{2}x - \frac{1}{2}y$ $= 1$, so $p = 1$.`,
        t`$\cos\alpha = \frac{\sqrt{3}}{2}$ is positive and $\sin\alpha = -\frac{1}{2}$ is negative, so $\alpha$ is in the fourth quadrant: $\alpha = 360^\circ - 30^\circ$ $= 330^\circ$.`,
      ],
      answer: t`$x\cos 330^\circ + y\sin 330^\circ$ $= 1$, with $p = 1$ and $\alpha = 330^\circ$.`,
      figure: {
        alt: "The line √3x − y = 2, crossing the axes at about (1.15, 0) and (0, −2). The perpendicular from the origin O meets it at N, below and to the right of O, with ON = p = 1. ON is turned 330° anticlockwise from the initial arm, the positive X-axis, so α = 330°.",
        axes: "xy",
        view: { x: [-1.2, 2.4], y: [-2.4, 1.2] },
        elements: [
          { kind: "line", through: [[0, -2], [2, 1.4641016]], step: 1 },
          { kind: "label", at: [1.2, -1.5], label: "√3x − y = 2", labelAt: "e", step: 1 },
          { kind: "segment", from: [0, 0], to: [0.866, -0.5], tone: "good", step: 2 },
          { kind: "point", at: [0.866, -0.5], label: "N", labelAt: "se", tone: "good", step: 2 },
          { kind: "label", at: [0.3, -0.95], label: "p = 1", tone: "good", step: 2 },
          ...initialArm(1.1, 0.7, 3),
          { kind: "turn", r: 0.8, to: 330, label: "α = 330°", labelAt: "sw", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line 3x + 4y = 12. It crosses the Y-axis at (0, 3), so c = 3 and b = 3, and the X-axis at (4, 0), so a = 4: x/4 + y/3 = 1. The perpendicular from the origin O meets the line at right angles at N; its length is p = 2.4. ON is turned about 53° anticlockwise from the initial arm, the positive X-axis, so α ≈ 53°: 0.6x + 0.8y = 2.4.",
      axes: "xy",
      view: { x: [-1, 5.5], y: [-1, 4] },
      elements: [
        { kind: "line", through: [[4, 0], [0, 3]], step: 1 },
        { kind: "label", at: [2.8, 1.25], label: "3x + 4y = 12", labelAt: "ne", step: 1 },
        { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 2 },
        { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 3 },
        { kind: "segment", from: [0, 0], to: [1.44, 1.92], tone: "good", step: 4 },
        { kind: "point", at: [1.44, 1.92], label: "N", labelAt: "ne", tone: "good", step: 4 },
        { kind: "label", at: [1.08, 1.44], label: "p = 2.4", labelAt: "nw", tone: "good", step: 4 },
        ...initialArm(1.8, 1.3, 5),
        { kind: "turn", r: 1.2, to: 53.13, label: "α ≈ 53°", labelAt: "se", tone: "good", step: 5 },
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
