import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$A(-3, 0)$ and $B(3, 0)$ are the ends of a diameter, and $P(x, y)$ is any point on the circle. **What is $\angle APB$, and what does it tell you about $x$ and $y$?**`,
    reveal: t`$\angle APB = 90^\circ$: the angle in a semicircle. So $PA \perp PB$, and the product of their slopes is $-1$: $\dfrac{y}{x + 3} \cdot \dfrac{y}{x - 3} = -1$. Clear the fractions: $(x + 3)(x - 3) + y \cdot y = 0$, that is $x^2 + y^2 = 9$. You have the circle without finding its centre or radius.`,
  },
  explanation: {
    intuition: t`The two ends of a diameter fix the circle. You could find the centre (the midpoint) and the radius (half of $AB$), then use the centre–radius form. There is a shorter way. From every point $P$ on the circle, the diameter $AB$ is seen at a right angle. So $PA \perp PB$, and that one condition, written in $x$ and $y$, is the equation of the circle.`,
    formal: t`**Diameter form.** If $A(x_1, y_1)$ and $B(x_2, y_2)$ are the ends of a diameter, the circle is
$$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$$

**Why.** For $P(x, y)$ on the circle, $\angle APB = 90^\circ$, so (slope of $PA$) $\times$ (slope of $PB$) $= -1$: $\dfrac{y - y_1}{x - x_1} \cdot \dfrac{y - y_2}{x - x_2} = -1$. Clearing the fractions gives the form; $A$ and $B$ satisfy it too.

**Pair the coordinates.** $x$ goes with both $x$-coordinates and $y$ with both $y$-coordinates, each subtracted; then **add** the two products.

**A chord as a diameter.** First find the chord's ends: solve the line with the circle. Then use the form.

**Through the origin, with intercepts $a$ and $b$.** The circle cuts the axes at $A(a, 0)$ and $B(0, b)$. Since $\angle AOB = 90^\circ$, $AB$ is a diameter.`,
    worked: {
      prompt: t`Find the equation of the circle with $A(3, 1)$ and $B(-1, 5)$ as the ends of a diameter.`,
      steps: [
        t`Take $(x_1, y_1) = (3, 1)$ and $(x_2, y_2) = (-1, 5)$.`,
        t`Diameter form: $(x - 3)(x + 1) + (y - 1)(y - 5) = 0$.`,
        t`Expand: $x^2 - 2x - 3 + y^2 - 6y + 5 = 0$, so $x^2 + y^2 - 2x - 6y + 2 = 0$.`,
        t`Check: this is $(x - 1)^2 + (y - 3)^2 = 8$. The centre $(1, 3)$ is the midpoint of $AB$, and $r^2 = 8 = \tfrac{1}{4}AB^2$, since $AB^2 = 4^2 + 4^2 = 32$.`,
      ],
      answer: t`$x^2 + y^2 - 2x - 6y + 2 = 0$`,
      figure: {
        alt: "A(3, 1) and B(−1, 5) joined by a diameter; the circle x² + y² − 2x − 6y + 2 = 0 drawn on it, with centre C(1, 3), the midpoint of AB.",
        axes: "xy",
        view: { x: [-3.4, 5.8], y: [-0.8, 7] },
        elements: [
          { kind: "segment", from: [3, 1], to: [-1, 5], step: 1 },
          { kind: "point", at: [3, 1], label: "A(3, 1)", labelAt: "se", step: 1 },
          { kind: "point", at: [-1, 5], label: "B(−1, 5)", labelAt: "nw", step: 1 },
          { kind: "circle", centre: [1, 3], r: 2.828, step: 2 },
          { kind: "point", at: [1, 3], label: "C(1, 3)", labelAt: "ne", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The circle on AB as diameter, with A(2, 1), B(8, 3) and centre C(5, 2), the midpoint of AB. A point P(2, 3) on the circle is joined to A and B: the angle APB is 90°.",
      axes: "xy",
      view: { x: [-0.6, 11], y: [-2, 6.4] },
      elements: [
        { kind: "segment", from: [2, 1], to: [8, 3], step: 1 },
        { kind: "point", at: [2, 1], label: "A(2, 1)", labelAt: "sw", step: 1 },
        { kind: "point", at: [8, 3], label: "B(8, 3)", labelAt: "e", step: 1 },
        { kind: "circle", centre: [5, 2], r: 3.162, step: 2 },
        { kind: "point", at: [5, 2], label: "C(5, 2)", labelAt: "se", step: 2 },
        { kind: "segment", from: [2, 3], to: [2, 1], dashed: true, step: 3 },
        { kind: "segment", from: [2, 3], to: [8, 3], dashed: true, step: 3 },
        { kind: "point", at: [2, 3], label: "P(x, y)", labelAt: "nw", step: 3 },
        { kind: "angle", at: [2, 3], from: 270, to: 360, label: "90°", labelAt: "se", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag $P$ round the circle on $AB$: $\angle APB$ stays $90^\circ$ and $(x - x_1)(x - x_2) + (y - y_1)(y - y_2)$ stays $0$; drag $A$ or $B$ and the circle redraws.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Copies the ends' signs into the brackets: $(x + x_1)(x + x_2) + (y + y_1)(y + y_2) = 0$`,
      remediation: t`Each bracket subtracts an end's coordinate: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$. For an end $(2, -3)$ the brackets are $(x - 2)$ and $(y + 3)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Takes the whole diameter $AB$ as the radius`,
      remediation: t`The radius is half the diameter: $r = \tfrac{1}{2}AB$, so $r^2 = \tfrac{1}{4}AB^2$. The diameter form skips this step altogether.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Squares half the diameter as $\tfrac{1}{2}AB^2$`,
      remediation: t`$\left(\tfrac{1}{2}AB\right)^2 = \tfrac{1}{4}AB^2$: the $2$ is squared too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Takes one end of the diameter as the centre, with the other end on the circle",
      remediation: t`Both ends of a diameter lie on the circle; the centre is their midpoint. Use the diameter form, or the midpoint with $r = \tfrac{1}{2}AB$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Subtracts the $y$-product from the $x$-product: $(x - x_1)(x - x_2) - (y - y_1)(y - y_2) = 0$`,
      remediation: t`The two products are added: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$. With a minus, $y^2$ gets a negative sign and the curve is not a circle.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M1 gives the key when the ends are symmetric about the origin ($x_2 = -x_1$, $y_2 = -y_1$): draw diagnosing items from ends whose midpoint is not the origin.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/6.1 SolvedEx.3" },
      stem: t`The equation of the circle with $A(2, -3)$ and $B(-3, 5)$ as the end points of a diameter is:`,
      verify: { kind: "locus", inputs: { x1: "2", y1: "-3", x2: "-3", y2: "5" }, params: { form: "ends" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + x - 2y - 21 = 0$`, correct: true, value: "x**2 + x + y**2 - 2*y - 21" },
        { key: "B", text: t`$x^2 + y^2 - x + 2y - 21 = 0$`, correct: false, misconceptionId: "C02-M1", value: "(x - 3)*(x + 2) + (y - 3)*(y + 5)" },
        { key: "C", text: t`$4x^2 + 4y^2 + 4x - 8y - 351 = 0$`, correct: false, misconceptionId: "C02-M2", value: "x**2 + x + y**2 - 2*y - 351/4" },
        { key: "D", text: t`$x^2 - y^2 + x + 2y + 9 = 0$`, correct: false, misconceptionId: "C02-M5", value: "(x - 2)*(x + 3) - (y - 5)*(y + 3)" },
      ],
      solution: {
        steps: [
          t`Diameter form with $(x_1, y_1) = (2, -3)$ and $(x_2, y_2) = (-3, 5)$: $(x - 2)(x + 3) + (y + 3)(y - 5) = 0$.`,
          t`Expand: $x^2 + x - 6 + y^2 - 2y - 15 = 0$.`,
          t`So the circle is $x^2 + y^2 + x - 2y - 21 = 0$. Its centre $\left(-\tfrac{1}{2}, 1\right)$ is the midpoint of $AB$.`,
        ],
        figure: {
          alt: "A(2, −3) and B(−3, 5) are the ends of a diameter; the circle x² + y² + x − 2y − 21 = 0 is drawn on AB, with centre (−½, 1) at the midpoint.",
          axes: "xy",
          view: { x: [-6.6, 6.2], y: [-5, 7.2] },
          elements: [
            { kind: "segment", from: [2, -3], to: [-3, 5], step: 1 },
            { kind: "point", at: [2, -3], label: "A(2, −3)", labelAt: "se", step: 1 },
            { kind: "point", at: [-3, 5], label: "B(−3, 5)", labelAt: "nw", step: 1 },
            { kind: "circle", centre: [-0.5, 1], r: 4.717, step: 1 },
            { kind: "point", at: [-0.5, 1], label: "(−½, 1)", labelAt: "sw", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q7" },
      stem: t`A circle passes through the origin and has intercepts $4$ and $-5$ on the X-axis and the Y-axis respectively. Its equation is:`,
      verify: { kind: "locus", inputs: { a: "4", b: "-5" }, params: { form: "intercepts" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + 4x - 5y = 0$`, correct: false, misconceptionId: "C02-M1", value: "x*(x + 4) + y*(y - 5)" },
        { key: "B", text: t`$4x^2 + 4y^2 - 16x + 20y - 123 = 0$`, correct: false, misconceptionId: "C02-M2", value: "(x - 2)**2 + (2*y + 5)**2/4 - 41" },
        { key: "C", text: t`$4x^2 + 4y^2 - 16x + 20y - 41 = 0$`, correct: false, misconceptionId: "C02-M3", value: "(x - 2)**2 + (2*y + 5)**2/4 - 41/2" },
        { key: "D", text: t`$x^2 + y^2 - 4x + 5y = 0$`, correct: true, value: "x**2 - 4*x + y**2 + 5*y" },
      ],
      solution: {
        steps: [
          t`Intercept $4$ on the X-axis: the circle cuts it at $O$ and $A(4, 0)$. Intercept $-5$ on the Y-axis: it cuts that at $O$ and $B(0, -5)$.`,
          t`$\angle AOB = 90^\circ$, so $AB$ is a diameter (the angle in a semicircle is a right angle).`,
          t`Diameter form: $(x - 4)(x - 0) + (y - 0)(y + 5) = 0$, so the circle is $x^2 + y^2 - 4x + 5y = 0$.`,
        ],
        figure: {
          alt: "The circle through O, A(4, 0) on the X-axis and B(0, −5) on the Y-axis. The angle AOB is 90°, so AB is a diameter, and the circle is x² + y² − 4x + 5y = 0.",
          axes: "xy",
          view: { x: [-2, 7], y: [-7, 2.2] },
          elements: [
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", step: 1 },
            { kind: "point", at: [4, 0], label: "A(4, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, -5], step: 1 },
            { kind: "label", at: [0.35, -4.6], label: "B(0, −5)", labelAt: "e", step: 1 },
            { kind: "angle", at: [0, 0], from: 270, to: 360, label: "90°", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [4, 0], to: [0, -5], step: 2 },
            { kind: "circle", centre: [2, -2.5], r: 3.202, step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.1 Q5" },
      stem: t`$y = 2x$ is a chord of the circle $x^2 + y^2 - 10x = 0$. The equation of the circle with this chord as a diameter is:`,
      verify: { kind: "locus", inputs: { l1: "2", l2: "-1", l3: "0", g: "-5", f: "0", c: "0" }, params: { form: "chord" } },
      options: [
        { key: "A", text: t`$x^2 - y^2 - 2x + 4y = 0$`, correct: false, misconceptionId: "C02-M5", value: "x*(x - 2) - y*(y - 4)" },
        { key: "B", text: t`$x^2 + y^2 - 2x - 4y = 0$`, correct: true, value: "(x - 1)**2 + (y - 2)**2 - 5" },
        { key: "C", text: t`$x^2 + y^2 + 2x + 4y = 0$`, correct: false, misconceptionId: "C02-M1", value: "x*(x + 2) + y*(y + 4)" },
        { key: "D", text: t`$x^2 + y^2 - 2x - 4y - 5 = 0$`, correct: false, misconceptionId: "C02-M3", value: "(x - 1)**2 + (y - 2)**2 - 10" },
      ],
      solution: {
        steps: [
          t`Put $y = 2x$ in the circle: $x^2 + 4x^2 - 10x = 0$, so $5x(x - 2) = 0$ and $x = 0$ or $2$. The chord's ends are $O(0, 0)$ and $A(2, 4)$.`,
          t`Diameter form with these ends: $(x - 0)(x - 2) + (y - 0)(y - 4) = 0$.`,
          t`So the circle is $x^2 + y^2 - 2x - 4y = 0$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 10x = 0 (centre (5, 0), radius 5) and the line y = 2x, which cuts it at O and A(2, 4). The small circle on OA as diameter is x² + y² − 2x − 4y = 0.",
          axes: "xy",
          view: { x: [-2, 10.6], y: [-6.2, 5.8] },
          elements: [
            { kind: "circle", centre: [5, 0], r: 5, tone: "muted" },
            { kind: "label", at: [5, -5], label: "x² + y² − 10x = 0", labelAt: "s", tone: "muted" },
            { kind: "line", through: [[0, 0], [1, 2]], tone: "muted" },
            { kind: "label", at: [2.7, 5.4], label: "y = 2x", labelAt: "e", tone: "muted" },
            { kind: "point", at: [0, 0], step: 1 },
            { kind: "label", at: [-0.9, -0.3], label: "O", labelAt: "s", step: 1 },
            { kind: "point", at: [2, 4], step: 1 },
            { kind: "label", at: [2.35, 4.05], label: "A(2, 4)", labelAt: "e", step: 1 },
            { kind: "circle", centre: [1, 2], r: 2.236, step: 2 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q6" },
      stem: t`The line $2x - y + 6 = 0$ meets the circle $x^2 + y^2 + 10x + 9 = 0$ at $A$ and $B$. The equation of the circle on $AB$ as a diameter is:`,
      verify: { kind: "locus", inputs: { l1: "2", l2: "-1", l3: "6", g: "5", f: "0", c: "9" }, params: { form: "chord" } },
      options: [
        { key: "A", text: t`$5x^2 - 5y^2 + 34x - 8y + 93 = 0$`, correct: false, misconceptionId: "C02-M5", value: "(x + 5)*(5*x + 9)/5 - (y + 4)*(5*y - 12)/5" },
        { key: "B", text: t`$5x^2 + 5y^2 + 34x + 8y - 3 = 0$`, correct: true, value: "(5*x + 17)**2/25 + (5*y + 4)**2/25 - 64/5" },
        { key: "C", text: t`$5x^2 + 5y^2 + 34x + 8y - 195 = 0$`, correct: false, misconceptionId: "C02-M2", value: "(5*x + 17)**2/25 + (5*y + 4)**2/25 - 256/5" },
        { key: "D", text: t`$5x^2 + 5y^2 + 34x + 8y - 67 = 0$`, correct: false, misconceptionId: "C02-M3", value: "(5*x + 17)**2/25 + (5*y + 4)**2/25 - 128/5" },
      ],
      solution: {
        steps: [
          t`From the line, $y = 2x + 6$. Substitute in the circle: $x^2 + (2x + 6)^2 + 10x + 9 = 0$, so $5x^2 + 34x + 45 = 0$, that is $(x + 5)(5x + 9) = 0$.`,
          t`$x = -5$ gives $y = -4$; $x = -\tfrac{9}{5}$ gives $y = \tfrac{12}{5}$. So $A(-5, -4)$ and $B\left(-\tfrac{9}{5}, \tfrac{12}{5}\right)$.`,
          t`Diameter form: $(x + 5)\left(x + \tfrac{9}{5}\right) + (y + 4)\left(y - \tfrac{12}{5}\right) = 0$. Multiply by $5$: $(x + 5)(5x + 9) + (y + 4)(5y - 12) = 0$.`,
          t`Expand: $5x^2 + 34x + 45 + 5y^2 + 8y - 48 = 0$, so the circle is $5x^2 + 5y^2 + 34x + 8y - 3 = 0$.`,
        ],
        figure: {
          alt: "The circle x² + y² + 10x + 9 = 0 (centre (−5, 0), radius 4) and the line 2x − y + 6 = 0, which meets it at A(−5, −4) and B(−9/5, 12/5). The circle on AB as diameter is 5x² + 5y² + 34x + 8y − 3 = 0.",
          axes: "xy",
          view: { x: [-10, 1.4], y: [-6.2, 5.6] },
          elements: [
            { kind: "circle", centre: [-5, 0], r: 4, tone: "muted" },
            { kind: "label", at: [-5, 4], label: "x² + y² + 10x + 9 = 0", labelAt: "n", tone: "muted" },
            { kind: "line", through: [[-3, 0], [0, 6]], tone: "muted" },
            { kind: "label", at: [-6.1, -5.6], label: "2x − y + 6 = 0", labelAt: "w", tone: "muted" },
            { kind: "point", at: [-5, -4], step: 2 },
            { kind: "label", at: [-5.3, -4], label: "A(−5, −4)", labelAt: "sw", step: 2 },
            { kind: "point", at: [-1.8, 2.4], step: 2 },
            { kind: "label", at: [-2.1, 1.9], label: "B(−9/5, 12/5)", labelAt: "w", step: 2 },
            { kind: "circle", centre: [-3.4, -0.8], r: 3.578, step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`$A(2, 5)$ and $B(6, -1)$ are the ends of a diameter of a circle. Its equation is:`,
      verify: { kind: "locus", inputs: { x1: "2", y1: "5", x2: "6", y2: "-1" }, params: { form: "ends" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 - 4x - 10y - 23 = 0$`, correct: false, misconceptionId: "C02-M4", value: "(x - 2)**2 + (y - 5)**2 - 52" },
        { key: "B", text: t`$x^2 + y^2 - 8x - 4y + 7 = 0$`, correct: true, value: "(x - 4)**2 + (y - 2)**2 - 13" },
        { key: "C", text: t`$x^2 + y^2 + 8x + 4y + 7 = 0$`, correct: false, misconceptionId: "C02-M1", value: "(x + 2)*(x + 6) + (y - 1)*(y + 5)" },
        { key: "D", text: t`$x^2 + y^2 - 8x - 4y - 6 = 0$`, correct: false, misconceptionId: "C02-M3", value: "(x - 4)**2 + (y - 2)**2 - 26" },
      ],
      solution: {
        steps: [
          t`Diameter form with $(x_1, y_1) = (2, 5)$ and $(x_2, y_2) = (6, -1)$: $(x - 2)(x - 6) + (y - 5)(y + 1) = 0$.`,
          t`Expand: $x^2 - 8x + 12 + y^2 - 4y - 5 = 0$, so the circle is $x^2 + y^2 - 8x - 4y + 7 = 0$.`,
          t`Check: this is $(x - 4)^2 + (y - 2)^2 = 13$. The centre $(4, 2)$ is the midpoint of $AB$, not the end $A$.`,
        ],
        figure: {
          alt: "A(2, 5) and B(6, −1) are the ends of a diameter; the circle x² + y² − 8x − 4y + 7 = 0 is drawn on AB, with centre (4, 2) at the midpoint.",
          axes: "xy",
          view: { x: [-0.8, 9], y: [-2.6, 6.4] },
          elements: [
            { kind: "segment", from: [2, 5], to: [6, -1], step: 1 },
            { kind: "point", at: [2, 5], label: "A(2, 5)", labelAt: "nw", step: 1 },
            { kind: "point", at: [6, -1], label: "B(6, −1)", labelAt: "se", step: 1 },
            { kind: "circle", centre: [4, 2], r: 3.606, step: 1 },
            { kind: "point", at: [4, 2], label: "(4, 2)", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`The equation of the circle drawn on the segment joining $A(-2, 1)$ and $B(4, 3)$ as a diameter is:`,
      verify: { kind: "locus", inputs: { x1: "-2", y1: "1", x2: "4", y2: "3" }, params: { form: "ends" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 - 2x - 4y - 5 = 0$`, correct: true, value: "(x - 1)**2 + (y - 2)**2 - 10" },
        { key: "B", text: t`$x^2 + y^2 - 2x - 4y - 35 = 0$`, correct: false, misconceptionId: "C02-M2", value: "(x - 1)**2 + (y - 2)**2 - 40" },
        { key: "C", text: t`$x^2 + y^2 + 4x - 2y - 35 = 0$`, correct: false, misconceptionId: "C02-M4", value: "(x + 2)**2 + (y - 1)**2 - 40" },
        { key: "D", text: t`$x^2 - y^2 - 2x + 4y - 11 = 0$`, correct: false, misconceptionId: "C02-M5", value: "(x - 4)*(x + 2) - (y - 3)*(y - 1)" },
      ],
      solution: {
        steps: [
          t`Diameter form with $(x_1, y_1) = (-2, 1)$ and $(x_2, y_2) = (4, 3)$: $(x + 2)(x - 4) + (y - 1)(y - 3) = 0$.`,
          t`Expand: $x^2 - 2x - 8 + y^2 - 4y + 3 = 0$, so the circle is $x^2 + y^2 - 2x - 4y - 5 = 0$.`,
          t`Check: this is $(x - 1)^2 + (y - 2)^2 = 10$. The centre $(1, 2)$ is the midpoint of $AB$, and $r^2 = 10 = \tfrac{1}{4}AB^2$, since $AB^2 = 6^2 + 2^2 = 40$.`,
        ],
        figure: {
          alt: "A(−2, 1) and B(4, 3) are the ends of a diameter; the circle x² + y² − 2x − 4y − 5 = 0 is drawn on AB, with centre (1, 2) at the midpoint.",
          axes: "xy",
          view: { x: [-4.4, 6.4], y: [-2.2, 6.4] },
          elements: [
            { kind: "segment", from: [-2, 1], to: [4, 3], step: 1 },
            { kind: "point", at: [-2, 1], label: "A(−2, 1)", labelAt: "w", step: 1 },
            { kind: "point", at: [4, 3], label: "B(4, 3)", labelAt: "e", step: 1 },
            { kind: "circle", centre: [1, 2], r: 3.162, step: 1 },
            { kind: "point", at: [1, 2], label: "(1, 2)", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
