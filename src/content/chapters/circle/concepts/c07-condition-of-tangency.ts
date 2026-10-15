import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`The line $y = x + c$ slides across the circle $x^2 + y^2 = 8$. **For which values of $c$ does it just touch the circle?**`,
    reveal: t`When its distance from the centre equals the radius. The distance from $O$ to $x - y + c = 0$ is $\dfrac{|c|}{\sqrt2}$, and the radius is $2\sqrt2$. So $|c| = 4$: the line touches at $c = 4$ and again at $c = -4$, once on each side.`,
  },
  explanation: {
    intuition: t`Slide a line of fixed slope across a circle. Far away it misses; then it touches at one point; then it cuts in two. It touches exactly when its distance from the centre equals the radius, and that happens twice, once on each side. For $x^2 + y^2 = a^2$ and $y = mx + c$, the distance from $O$ is $\dfrac{|c|}{\sqrt{1 + m^2}}$, so the line touches when $c^2 = a^2(1 + m^2)$.`,
    formal: t`**The test.** A line touches a circle when its distance from the centre equals the radius $r$. Less than $r$: it cuts; more: it misses.

**Centre at the origin.** For $x^2 + y^2 = a^2$ and $y = mx + c$: $\dfrac{|c|}{\sqrt{1 + m^2}} = a$ gives $$c^2 = a^2(1 + m^2).$$ So the tangents with slope $m$ are $y = mx \pm a\sqrt{1 + m^2}$. For $x^2 + y^2 = 5$, $m = \frac12$: $y = \frac12 x \pm \frac52$. Remember $a$ is the radius: $x^2 + y^2 = 5$ has $a = \sqrt5$, not $5$.

**Parallel or perpendicular to a line.** $Ax + By + C = 0$ has slope $-\dfrac{A}{B}$. A parallel tangent has the same slope; a perpendicular one has slope $\dfrac{B}{A}$.

**Any centre.** For centre $(h, k)$ and radius $r$, $c^2 = a^2(1 + m^2)$ does not apply. Solve $\dfrac{|mh - k + c|}{\sqrt{1 + m^2}} = r$ instead.

**Point of contact.** It is the foot of the perpendicular from the centre: the radius there is at right angles to the tangent. **Two parallel tangents** touch at the ends of a diameter, so the gap between them is $2r$.`,
    worked: {
      prompt: t`Show that the line $3x - 4y + 15 = 0$ touches the circle $x^2 + y^2 = 9$, and find the point of contact.`,
      steps: [
        t`The circle has centre $O(0, 0)$ and radius $3$.`,
        t`Distance from $O$ to the line: $\dfrac{|0 - 0 + 15|}{\sqrt{9 + 16}} = \dfrac{15}{5} = 3$. It equals the radius, so the line is a tangent.`,
        t`The point of contact is the foot of the perpendicular from $O$. Walk from $O$ along the normal $(3, -4)$: the point $(3t, -4t)$ is on the line when $9t + 16t + 15 = 0$, so $t = -\frac35$.`,
        t`The point is $\left(-\frac95, \frac{12}{5}\right)$. Check: $\frac{81}{25} + \frac{144}{25} = \frac{225}{25} = 9$, so it is on the circle.`,
      ],
      answer: t`The line is a tangent; it touches at $\left(-\frac95, \frac{12}{5}\right)$.`,
      figure: {
        alt: "The circle x² + y² = 9 and the line 3x − 4y + 15 = 0. The perpendicular from O to the line has length 3, the radius, and meets the line at the point of contact (−9/5, 12/5).",
        axes: "xy",
        view: { x: [-6, 6], y: [-4, 5.5] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 3, step: 1 },
          { kind: "label", at: [2.2, -2.2], label: "x² + y² = 9", labelAt: "se", step: 1 },
          { kind: "line", through: [[-5, 0], [-1, 3]], tone: "good", step: 2 },
          { kind: "label", at: [1.4, 4.3], label: "3x − 4y + 15 = 0", labelAt: "se", step: 2 },
          { kind: "segment", from: [0, 0], to: [-1.8, 2.4], dashed: true, step: 2 },
          { kind: "label", at: [-1.2, 1], label: "d = 3", labelAt: "w", step: 2 },
          { kind: "point", at: [-1.8, 2.4], label: "(−9/5, 12/5)", labelAt: "nw", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The circle x² + y² = 5 with three parallel lines of slope 1/2: y = x/2 + 5 misses it, y = x/2 − 1 cuts it, and y = x/2 + 5/2 touches it at (−1, 2), where the radius from O, of length √5, meets it at a right angle.",
      axes: "xy",
      view: { x: [-6, 6], y: [-4, 7] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2.236, step: 1 },
        { kind: "label", at: [1.7, -1.9], label: "x² + y² = 5", labelAt: "se", step: 1 },
        { kind: "line", through: [[0, 5], [2, 6]], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [2.2, 5.6], label: "misses", labelAt: "se", step: 2 },
        { kind: "line", through: [[0, -1], [2, 0]], dashed: true, tone: "muted", step: 3 },
        { kind: "label", at: [4.4, 0.9], label: "cuts", labelAt: "se", step: 3 },
        { kind: "line", through: [[-1, 2], [1, 3]], tone: "good", step: 4 },
        { kind: "label", at: [3.4, 3.8], label: "touches", labelAt: "se", step: 4 },
        { kind: "segment", from: [0, 0], to: [-1, 2], dashed: true, step: 5 },
        { kind: "label", at: [-0.75, 0.9], label: "√5", labelAt: "w", step: 5 },
        { kind: "point", at: [-1, 2], label: "(−1, 2)", labelAt: "nw", step: 5 },
      ],
    },
    visualSpec: t`A slider sets the slope $m$ and a handle slides the line $y = mx + c$ across $x^2 + y^2 = a^2$; the distance from $O$ updates, and the line turns green when it equals $a$, at $c = \pm a\sqrt{1 + m^2}$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Mixes up $r$ and $r^2$: takes the number on the right of $x^2 + y^2 = a^2$ as the radius, or sets $r^2$ equal to the distance`,
      remediation: t`In $x^2 + y^2 = a^2$ the right side is $r^2$: $x^2 + y^2 = 16$ has $r = 4$. Take the square root before using $c^2 = a^2(1 + m^2)$, and match the distance with $r$, not $r^2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M2",
      mistake: t`Takes $|c|$ (or the difference of the constants) as the distance, forgetting to divide by $\sqrt{1 + m^2}$ or $\sqrt{A^2 + B^2}$`,
      remediation: t`The distance from $(x_1, y_1)$ to $Ax + By + C = 0$ is $\dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$. For $y = mx + c$ the distance from $O$ is $\dfrac{|c|}{\sqrt{1 + m^2}}$, which is where $c^2 = a^2(1 + m^2)$ comes from.`,
      fallback: { kind: "ext", topic: "distance of a point from a line" },
    },
    {
      id: "C07-M3",
      mistake: "Uses the perpendicular slope for a parallel tangent, or the line's own slope for a perpendicular one",
      remediation: t`Parallel lines have equal slopes; perpendicular slopes multiply to $-1$. $Ax + By + C = 0$ has slope $-\dfrac{A}{B}$, so a line perpendicular to it has slope $\dfrac{B}{A}$.`,
      fallback: { kind: "ext", topic: "slopes of parallel and perpendicular lines" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses $c^2 = a^2(1 + m^2)$ for a circle whose centre is not the origin`,
      remediation: t`$c^2 = a^2(1 + m^2)$ holds only for a circle centred at the origin. For centre $(h, k)$, make the distance from $(h, k)$ to the line equal to $r$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M5",
      mistake: "Takes the distance between two parallel tangents as the radius",
      remediation: t`Two parallel tangents touch the circle at the ends of a diameter, so the gap between them is $2r$. Halve it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Subtracts the constants of two parallel lines without first making their $x$ and $y$ coefficients equal`,
      remediation: t`Write both lines with the same $A$ and $B$ first: $4x + 2y + 5 = 0$ next to $2x + y + 1 = 0$ becomes $2x + y + \frac52 = 0$. Then the gap is $\dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$.`,
      fallback: { kind: "ext", topic: "distance between parallel lines" },
    },
  ],
  engineNotes: [
    "C07-M3 applies only when the tangents are parallel or perpendicular to a given line; C07-M4 only to circles not centred at the origin.",
    "C07-M5 and C07-M6 apply only to the radius of a circle between two parallel tangents (C07-M6 only when the two lines' coefficients differ).",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc I Q4" },
      stem: t`The equations of the tangents to the circle $x^2 + y^2 = 4$ that are parallel to the line $x + 2y + 3 = 0$ are`,
      verify: { kind: "locus", inputs: { h: "0", k: "0", r2: "4", A: "1", B: "2" }, params: { type: "slope", rel: "parallel" } },
      options: [
        { key: "A", text: t`$x + 2y = \pm 4$`, correct: false, misconceptionId: "C07-M2", value: "x**2/4 + x*y + y**2 - 4" },
        { key: "B", text: t`$2x - y = \pm 2\sqrt{5}$`, correct: false, misconceptionId: "C07-M3", value: "4*x**2 - 4*x*y + y**2 - 20" },
        { key: "C", text: t`$x + 2y = \pm 2\sqrt{5}$`, correct: true, value: "x**2/4 + x*y + y**2 - 5" },
        { key: "D", text: t`$x + 2y = \pm 4\sqrt{5}$`, correct: false, misconceptionId: "C07-M1", value: "x**2/4 + x*y + y**2 - 20" },
      ],
      solution: {
        steps: [
          t`$x + 2y + 3 = 0$ has slope $-\frac12$, so a parallel tangent is $y = -\frac12 x + c$.`,
          t`Here $a = 2$: $c^2 = a^2(1 + m^2) = 4\left(1 + \frac14\right) = 5$, so $c = \pm\sqrt5$.`,
          t`$y = -\frac12 x \pm \sqrt5$; multiply by $2$: $x + 2y = \pm 2\sqrt5$.`,
        ],
        figure: {
          alt: "The circle x² + y² = 4, the line x + 2y + 3 = 0, and the two tangents parallel to it, x + 2y = 2√5 and x + 2y = −2√5, each at distance 2 from O.",
          axes: "xy",
          view: { x: [-5, 5], y: [-4, 4] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2 },
            { kind: "line", through: [[-3, 0], [1, -2]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [-4.9, 1.6], label: "x + 2y + 3 = 0", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 0], to: [0.894, 1.789], dashed: true, step: 2 },
            { kind: "segment", from: [0, 0], to: [-0.894, -1.789], dashed: true, step: 2 },
            { kind: "label", at: [0.75, 0.9], label: "2", labelAt: "e", step: 2 },
            { kind: "line", through: [[0, 2.236], [4.472, 0]], tone: "good", step: 3 },
            { kind: "line", through: [[0, -2.236], [-4.472, 0]], tone: "good", step: 3 },
            { kind: "label", at: [1.6, 2], label: "x + 2y = 2√5", labelAt: "ne", step: 3 },
            { kind: "label", at: [-4.9, -1.7], label: "x + 2y = −2√5", labelAt: "se", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q23" },
      stem: t`Find the equations of the tangents to the circle $x^2 + y^2 = 36$ which are perpendicular to the line $5x + y = 2$.`,
      verify: { kind: "locus", inputs: { h: "0", k: "0", r2: "36", A: "5", B: "1" }, params: { type: "slope", rel: "perpendicular" } },
      options: [
        { key: "A", text: t`$x - 5y = \pm 36\sqrt{26}$`, correct: false, misconceptionId: "C07-M1", value: "x**2/25 - 2*x*y/5 + y**2 - 33696/25" },
        { key: "B", text: t`$x - 5y = \pm 30$`, correct: false, misconceptionId: "C07-M2", value: "x**2/25 - 2*x*y/5 + y**2 - 36" },
        { key: "C", text: t`$5x + y = \pm 6\sqrt{26}$`, correct: false, misconceptionId: "C07-M3", value: "25*x**2 + 10*x*y + y**2 - 936" },
        { key: "D", text: t`$x - 5y = \pm 6\sqrt{26}$`, correct: true, value: "x**2/25 - 2*x*y/5 + y**2 - 936/25" },
      ],
      solution: {
        steps: [
          t`$5x + y = 2$ has slope $-5$, so a perpendicular tangent has slope $\frac15$: $y = \frac15 x + c$.`,
          t`Here $a = 6$: $c^2 = 36\left(1 + \frac{1}{25}\right) = \frac{36 \cdot 26}{25}$, so $c = \pm\frac{6\sqrt{26}}{5}$.`,
          t`$y = \frac15 x \pm \frac{6\sqrt{26}}{5}$; multiply by $5$: $x - 5y = \pm 6\sqrt{26}$.`,
        ],
        figure: {
          alt: "The circle x² + y² = 36, the line 5x + y = 2, and the two tangents perpendicular to it, x − 5y = 6√26 and x − 5y = −6√26, each at distance 6 from O.",
          axes: "xy",
          view: { x: [-10, 10], y: [-10, 10] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 6 },
            { kind: "line", through: [[0, 2], [1, -3]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [2.6, -8.4], label: "5x + y = 2", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 0], to: [-1.177, 5.884], dashed: true, step: 2 },
            { kind: "segment", from: [0, 0], to: [1.177, -5.884], dashed: true, step: 2 },
            { kind: "label", at: [-1, 3], label: "r = 6", labelAt: "w", step: 2 },
            { kind: "line", through: [[0, 6.118], [10, 8.118]], tone: "good", step: 3 },
            { kind: "line", through: [[0, -6.118], [10, -4.118]], tone: "good", step: 3 },
            { kind: "label", at: [2.5, 8.6], label: "x − 5y = −6√26", labelAt: "ne", step: 3 },
            { kind: "label", at: [-9.6, -9], label: "x − 5y = 6√26", labelAt: "se", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q24" },
      stem: t`Find the equations of the tangents to the circle $x^2 + y^2 - 2x + 8y - 23 = 0$ having slope $3$.`,
      verify: { kind: "locus", inputs: { h: "1", k: "-4", r2: "40", m: "3" }, params: { type: "slope" } },
      options: [
        { key: "A", text: t`$y = 3x \pm 20$`, correct: false, misconceptionId: "C07-M4", value: "9*x**2 - 6*x*y + y**2 - 400" },
        { key: "B", text: t`$y = 3x - 7 \pm 20$`, correct: true, value: "9*x**2 - 6*x*y - 42*x + y**2 + 14*y - 351" },
        { key: "C", text: t`$y = 3x - 7 \pm 40\sqrt{10}$`, correct: false, misconceptionId: "C07-M1", value: "9*x**2 - 6*x*y - 42*x + y**2 + 14*y - 15951" },
        { key: "D", text: t`$y = 3x - 7 \pm 2\sqrt{10}$`, correct: false, misconceptionId: "C07-M2", value: "9*x**2 - 6*x*y - 42*x + y**2 + 14*y + 9" },
      ],
      solution: {
        steps: [
          t`Centre $(1, -4)$, radius $\sqrt{1 + 16 + 23} = \sqrt{40}$. The centre is not $O$, so use the distance.`,
          t`A tangent $y = 3x + c$ is $3x - y + c = 0$. Its distance from $(1, -4)$: $\dfrac{|3 + 4 + c|}{\sqrt{10}} = \sqrt{40}$, so $|7 + c| = \sqrt{400} = 20$.`,
          t`$c = -7 \pm 20$: the tangents are $y = 3x - 7 \pm 20$, that is $y = 3x + 13$ and $y = 3x - 27$.`,
        ],
        figure: {
          alt: "The circle with centre (1, −4) and radius √40, and its two tangents of slope 3: y = 3x + 13 touching at (−5, −2) and y = 3x − 27 touching at (7, −6).",
          axes: "xy",
          view: { x: [-10, 12], y: [-12, 4] },
          elements: [
            { kind: "circle", centre: [1, -4], r: 6.325, step: 1 },
            { kind: "point", at: [1, -4], label: "(1, −4)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[-5, -2], [-3, 4]], tone: "good", step: 3 },
            { kind: "line", through: [[7, -6], [9, 0]], tone: "good", step: 3 },
            { kind: "segment", from: [1, -4], to: [-5, -2], dashed: true, step: 3 },
            { kind: "segment", from: [1, -4], to: [7, -6], dashed: true, step: 3 },
            { kind: "point", at: [-5, -2], step: 3 },
            { kind: "label", at: [-6, -2.3], label: "(−5, −2)", labelAt: "w", step: 3 },
            { kind: "point", at: [7, -6], label: "(7, −6)", labelAt: "se", step: 3 },
            { kind: "label", at: [-4.4, 1.5], label: "y = 3x + 13", labelAt: "w", step: 3 },
            { kind: "label", at: [6.4, -9.5], label: "y = 3x − 27", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc I Q5" },
      stem: t`If the lines $3x - 4y + 4 = 0$ and $6x - 8y - 7 = 0$ are tangents to a circle, then the radius of the circle is`,
      verify: { kind: "value", inputs: { A1: "3", B1: "-4", C1: "4", A2: "6", B2: "-8", C2: "-7" }, params: { type: "gap" } },
      options: [
        { key: "A", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
        { key: "B", text: t`$\frac{15}{4}$`, correct: false, misconceptionId: "C07-M2", value: "15/4" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C07-M5", value: "3/2" },
        { key: "D", text: t`$\frac{11}{10}$`, correct: false, misconceptionId: "C07-M6", value: "11/10" },
      ],
      solution: {
        steps: [
          t`Match the coefficients: $6x - 8y - 7 = 0$ is $3x - 4y - \frac72 = 0$.`,
          t`Gap between the parallel tangents: $\dfrac{\left|4 - \left(-\frac72\right)\right|}{\sqrt{9 + 16}} = \dfrac{15/2}{5} = \dfrac32$.`,
          t`They touch at the ends of a diameter, so $2r = \frac32$ and $r = \frac34$.`,
        ],
        figure: {
          alt: "The parallel lines 3x − 4y + 4 = 0 and 6x − 8y − 7 = 0, 3/2 apart, with one circle of radius 3/4 touching both; the segment joining the two points of contact is a diameter.",
          axes: "xy",
          view: { x: [-2.5, 3], y: [-2, 2.5] },
          elements: [
            { kind: "line", through: [[0, 1], [4, 4]], step: 1 },
            { kind: "line", through: [[0, -0.875], [3.5, 1.75]], step: 1 },
            { kind: "label", at: [-2.3, 0.6], label: "3x − 4y + 4 = 0", labelAt: "ne", step: 1 },
            { kind: "label", at: [1.5, -0.6], label: "6x − 8y − 7 = 0", labelAt: "se", step: 1 },
            { kind: "segment", from: [-0.2, 0.85], to: [0.7, -0.35], dashed: true, step: 2 },
            { kind: "label", at: [1.3, 1.15], label: "gap = 3/2", labelAt: "ne", step: 2 },
            { kind: "circle", centre: [0.25, 0.25], r: 0.75, tone: "good", step: 3 },
            { kind: "label", at: [-1.7, -0.8], label: "r = 3/4", labelAt: "se", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q20" },
      stem: t`The tangent at $(3, -4)$ to the circle $x^2 + y^2 = 25$ touches the circle $x^2 + y^2 + 8x - 4y + c = 0$. Find $c$.`,
      verify: { kind: "value", inputs: { x1: "3", y1: "-4", a2: "25", g: "4", f: "-2" }, params: { type: "touch" } },
      options: [
        { key: "A", text: t`$11$`, correct: false, misconceptionId: "C07-M1", value: "11" },
        { key: "B", text: t`$-2005$`, correct: false, misconceptionId: "C07-M2", value: "-2005" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C07-M4", value: "-5" },
        { key: "D", text: t`$-61$`, correct: true, value: "-61" },
      ],
      solution: {
        steps: [
          t`The tangent to $x^2 + y^2 = 25$ at $(3, -4)$ is $3x - 4y = 25$.`,
          t`The second circle has centre $(-4, 2)$ and $r^2 = 16 + 4 - c = 20 - c$.`,
          t`Distance from $(-4, 2)$ to $3x - 4y - 25 = 0$: $\dfrac{|-12 - 8 - 25|}{5} = 9$, so $r = 9$.`,
          t`$20 - c = 81$, so $c = -61$.`,
        ],
        figure: {
          alt: "The circle x² + y² = 25 with its tangent 3x − 4y = 25 at (3, −4). The circle with centre (−4, 2) and radius 9 touches the same line at (1.4, −5.2).",
          axes: "xy",
          view: { x: [-14, 12], y: [-10, 12] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 5, tone: "muted", step: 1 },
            { kind: "point", at: [3, -4], step: 1 },
            { kind: "label", at: [4.4, -4.9], label: "(3, −4)", labelAt: "e", step: 1 },
            { kind: "line", through: [[3, -4], [7, -1]], step: 1 },
            { kind: "label", at: [5.9, 3.7], label: "3x − 4y = 25", labelAt: "e", step: 1 },
            { kind: "point", at: [-4, 2], step: 2 },
            { kind: "label", at: [-4.4, 2.9], label: "(−4, 2)", labelAt: "nw", step: 2 },
            { kind: "segment", from: [-4, 2], to: [1.4, -5.2], dashed: true, step: 3 },
            { kind: "label", at: [0.6, -2], label: "r = 9", labelAt: "e", step: 3 },
            { kind: "point", at: [1.4, -5.2], step: 3 },
            { kind: "label", at: [1.8, -6.9], label: "(1.4, −5.2)", labelAt: "e", step: 3 },
            { kind: "circle", centre: [-4, 2], r: 9, tone: "good", step: 4 },
          ],
        },
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q22" },
      stem: t`Find the equations of the tangents to the circle $x^2 + y^2 = 4$ which are parallel to the line $3x + 2y + 1 = 0$.`,
      verify: { kind: "locus", inputs: { h: "0", k: "0", r2: "4", A: "3", B: "2" }, params: { type: "slope", rel: "parallel" } },
      options: [
        { key: "A", text: t`$3x + 2y = \pm 2\sqrt{13}$`, correct: true, value: "9*x**2/4 + 3*x*y + y**2 - 13" },
        { key: "B", text: t`$3x + 2y = \pm 4\sqrt{13}$`, correct: false, misconceptionId: "C07-M1", value: "9*x**2/4 + 3*x*y + y**2 - 52" },
        { key: "C", text: t`$3x + 2y = \pm 4$`, correct: false, misconceptionId: "C07-M2", value: "9*x**2/4 + 3*x*y + y**2 - 4" },
        { key: "D", text: t`$2x - 3y = \pm 2\sqrt{13}$`, correct: false, misconceptionId: "C07-M3", value: "4*x**2/9 - 4*x*y/3 + y**2 - 52/9" },
      ],
      solution: {
        steps: [
          t`$3x + 2y + 1 = 0$ has slope $-\frac32$, so a parallel tangent is $y = -\frac32 x + c$.`,
          t`Here $a = 2$: $c^2 = 4\left(1 + \frac94\right) = 13$, so $c = \pm\sqrt{13}$.`,
          t`$y = -\frac32 x \pm \sqrt{13}$; multiply by $2$: $3x + 2y = \pm 2\sqrt{13}$.`,
        ],
        figure: {
          alt: "The circle x² + y² = 4, the line 3x + 2y + 1 = 0, and the two tangents parallel to it, 3x + 2y = 2√13 and 3x + 2y = −2√13, each at distance 2 from O.",
          axes: "xy",
          view: { x: [-5, 6], y: [-4.5, 4.5] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2 },
            { kind: "line", through: [[1, -2], [-1, 1]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [2.8, -3.9], label: "3x + 2y + 1 = 0", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.664, 1.109], dashed: true, step: 2 },
            { kind: "segment", from: [0, 0], to: [-1.664, -1.109], dashed: true, step: 2 },
            { kind: "label", at: [0.5, 0.75], label: "2", labelAt: "n", step: 2 },
            { kind: "line", through: [[0, 3.606], [2.404, 0]], tone: "good", step: 3 },
            { kind: "line", through: [[0, -3.606], [-2.404, 0]], tone: "good", step: 3 },
            { kind: "label", at: [2, 1.6], label: "3x + 2y = 2√13", labelAt: "ne", step: 3 },
            { kind: "label", at: [-4.9, -2], label: "3x + 2y = −2√13", labelAt: "se", step: 3 },
          ],
        },
      },
    },
  ],
};
