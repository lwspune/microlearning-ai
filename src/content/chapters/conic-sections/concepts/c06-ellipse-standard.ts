import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The ellipse $\frac{x^2}{100} + \frac{y^2}{36} = 1$ reaches $10$ units along the $x$-axis and $6$ units up the $y$-axis. **How far from the centre are its two foci?**`,
    reveal: t`$8$ units: the foci are $(\pm 8, 0)$. From $b^2 = a^2(1 - e^2)$, $a^2e^2 = a^2 - b^2 = 100 - 36 = 64$, so $ae = 8$ and $e = \frac{4}{5}$. It is a $6$-$8$-$10$ triangle: from the bottom of the ellipse, $(0, -6)$, each focus is exactly $a = 10$ away.`,
  },
  explanation: {
    intuition: t`An ellipse is the curve $SP = e \cdot PM$ with $e < 1$. Put its centre at the origin and its long axis on the $x$-axis, and its equation is $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$: it reaches $a$ along the $x$-axis and $b$ along the $y$-axis. Everything else comes from $a$ and $b$. The relation $b^2 = a^2(1 - e^2)$ gives $e$; then the foci are $ae$ from the centre, inside the curve, and the directrices are $\frac{a}{e}$ from it, outside. For $\frac{x^2}{100} + \frac{y^2}{36} = 1$: $e = \frac{4}{5}$, foci $(\pm 8, 0)$, directrices $x = \pm\frac{25}{2}$.`,
    formal: t`**The standard ellipse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $a > b > 0$. Centre $O(0, 0)$; vertices $(\pm a, 0)$ and $(0, \pm b)$. The major axis is the $x$-axis, length $2a$; the minor axis is the $y$-axis, length $2b$.

**Eccentricity.** $b^2 = a^2(1 - e^2)$, so $e^2 = 1 - \frac{b^2}{a^2}$ and $0 < e < 1$. Equivalently $a^2e^2 = a^2 - b^2$.

**Foci, directrices, latus rectum.** Foci $S(ae, 0)$ and $S'(-ae, 0)$, a distance $2ae$ apart. Directrices $x = \pm\frac{a}{e}$, a distance $\frac{2a}{e}$ apart. The latus rectum (the chord through a focus, perpendicular to the major axis) has length $\frac{2b^2}{a}$.

**Major axis on the $y$-axis.** The larger denominator decides. If $b > a$, the roles swap: $a^2 = b^2(1 - e^2)$, foci $(0, \pm be)$, directrices $y = \pm\frac{b}{e}$, latus rectum $\frac{2a^2}{b}$.

**Shifted centre.** Complete the squares to reach $\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$: the centre is $(h, k)$. Find $a$, $b$, $e$ as before, then measure from the centre: foci $(h \pm ae, k)$, directrices $x = h \pm \frac{a}{e}$, major axis $y = k$.`,
    worked: {
      prompt: t`For the ellipse $\frac{x^2}{16} + \frac{y^2}{9} = 1$, find the vertices, the eccentricity, the foci, the directrices and the length of the latus rectum.`,
      steps: [
        t`$a^2 = 16$ and $b^2 = 9$, so $a = 4$, $b = 3$, and $a > b$: the major axis is the $x$-axis. Vertices $(\pm 4, 0)$ and $(0, \pm 3)$; the axes have lengths $8$ and $6$.`,
        t`$b^2 = a^2(1 - e^2)$: $9 = 16(1 - e^2)$, so $e^2 = \frac{7}{16}$ and $e = \frac{\sqrt{7}}{4}$ (taking $0 < e < 1$).`,
        t`$ae = \sqrt{7}$ and $\frac{a}{e} = \frac{16}{\sqrt{7}}$. Foci $(\pm\sqrt{7}, 0)$; directrices $x = \pm\frac{16}{\sqrt{7}}$.`,
        t`Latus rectum $= \frac{2b^2}{a} = \frac{2 \times 9}{4} = \frac{9}{2}$.`,
      ],
      answer: t`Vertices $(\pm 4, 0)$, $(0, \pm 3)$; $e = \frac{\sqrt{7}}{4}$; foci $(\pm\sqrt{7}, 0)$; directrices $x = \pm\frac{16}{\sqrt{7}}$; latus rectum $\frac{9}{2}$.`,
      figure: {
        alt: "The ellipse x²/16 + y²/9 = 1 with vertices (±4, 0) and (0, ±3), eccentricity √7/4, foci S(√7, 0) and S′(−√7, 0) inside it, dashed directrices x = ±16/√7 outside it, and the latus rectum of length 9/2 through S.",
        axes: "xy",
        view: { x: [-8, 8], y: [-5.5, 5.5] },
        elements: [
          { kind: "ellipse", centre: [0, 0], rx: 4, ry: 3, step: 1 },
          { kind: "point", at: [4, 0], step: 1 },
          { kind: "point", at: [-4, 0], step: 1 },
          { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 1 },
          { kind: "point", at: [0, -3], step: 1 },
          { kind: "label", at: [0.6, -4.6], label: "e = √7/4", labelAt: "e", step: 2 },
          { kind: "point", at: [2.6458, 0], label: "S", labelAt: "ne", step: 3 },
          { kind: "point", at: [-2.6458, 0], label: "S′", labelAt: "nw", step: 3 },
          { kind: "label", at: [-5.6, -4.6], label: "foci (±√7, 0)", labelAt: "e", step: 3 },
          { kind: "line", through: [[6.0474, 0], [6.0474, 1]], dashed: true, tone: "muted", step: 3 },
          { kind: "line", through: [[-6.0474, 0], [-6.0474, 1]], dashed: true, tone: "muted", step: 3 },
          { kind: "label", at: [6.0474, 4.4], label: "x = 16/√7", labelAt: "w", step: 3 },
          { kind: "label", at: [-6.0474, 4.4], label: "x = −16/√7", labelAt: "e", step: 3 },
          { kind: "segment", from: [2.6458, -2.25], to: [2.6458, 2.25], tone: "good", step: 4 },
          { kind: "label", at: [2.6458, 2.25], label: "9/2", labelAt: "ne", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The ellipse x²/100 + y²/36 = 1, reaching 10 along the x-axis and 6 along the y-axis. Its foci S(8, 0) and S′(−8, 0) lie inside it; the segment from (0, −6) to S has length a = 10. The dashed directrices x = ±12.5 lie outside the ellipse.",
      axes: "xy",
      view: { x: [-16, 16], y: [-10, 10] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 10, ry: 6, step: 1 },
        { kind: "point", at: [0, -6], label: "(0, −6)", labelAt: "se", step: 1 },
        { kind: "point", at: [8, 0], label: "S", labelAt: "n", step: 2 },
        { kind: "point", at: [-8, 0], label: "S′", labelAt: "n", step: 2 },
        { kind: "label", at: [1, 7.4], label: "S(8, 0), S′(−8, 0)", labelAt: "e", step: 2 },
        { kind: "segment", from: [0, -6], to: [8, 0], tone: "good", step: 3 },
        { kind: "label", at: [4, -3.5], label: "10", labelAt: "e", tone: "good", step: 3 },
        { kind: "line", through: [[12.5, 0], [12.5, 1]], dashed: true, tone: "muted", step: 4 },
        { kind: "line", through: [[-12.5, 0], [-12.5, 1]], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [12.5, -8.5], label: "x = 12.5", labelAt: "w", step: 4 },
        { kind: "label", at: [-12.5, -8.5], label: "x = −12.5", labelAt: "e", step: 4 },
      ],
    },
    visualSpec: t`Drag sliders for $a$ and $b$ and watch the foci at $\pm ae$ and the directrices at $\pm\frac{a}{e}$ move; as $b$ grows towards $a$ the foci close in on the centre and the directrices run away.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Uses the hyperbola's relation $a^2e^2 = a^2 + b^2$ (that is, $b^2 = a^2(e^2 - 1)$), so $e$ comes out bigger than $1$`,
      remediation: t`For an ellipse $e < 1$ and $b^2 = a^2(1 - e^2)$, so $a^2e^2 = a^2 - b^2$: subtract the squares. Adding them is the hyperbola's rule.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: t`Takes the major axis to be horizontal, with the foci and directrices on the $x$-axis, even when the $y^2$ term has the larger denominator`,
      remediation: t`The major axis runs along the variable with the **larger** denominator. If it is under $y^2$ ($b > a$), the foci are $(0, \pm be)$ and the directrices $y = \pm\frac{b}{e}$, with $a^2 = b^2(1 - e^2)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Mixes up $ae$ and $\frac{a}{e}$: puts the foci at a distance $\frac{a}{e}$ from the centre, or the directrices at $ae$`,
      remediation: t`Since $0 < e < 1$, $ae < a < \frac{a}{e}$. The foci $(\pm ae, 0)$ lie inside the ellipse and the directrices $x = \pm\frac{a}{e}$ outside it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: t`Forgets the square root: takes $1 - \frac{b^2}{a^2}$, which is $e^2$, as $e$`,
      remediation: t`$b^2 = a^2(1 - e^2)$ gives $e^2 = 1 - \frac{b^2}{a^2}$. Take the square root to get $e$ before working out $ae$ or $\frac{a}{e}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Reads the centre of $\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$ with the signs flipped, as $(-h, -k)$`,
      remediation: t`$(x - 2)^2$ is $0$ when $x = 2$, so that centre has $x = 2$, not $-2$. The centre of $\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$ is $(h, k)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Uses the centre-at-origin results, such as foci $(\pm ae, 0)$, for a shifted ellipse without moving them to its centre $(h, k)$`,
      remediation: t`$(\pm ae, 0)$ and the $x$-axis belong to an ellipse centred at the origin. For centre $(h, k)$, measure from the centre: foci $(h \pm ae, k)$ and major axis $y = k$ (or $x = h$ when it is vertical).`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M2 only shows on ellipses whose y² denominator is the larger (C06-Q3, C06-Q6); otherwise it gives the key.",
    "C06-M3 leaves the eccentricity and the major axis unchanged; C06-M4 leaves the major axis unchanged.",
    "C06-M5 and C06-M6 only apply to ellipses whose centre is not the origin (C06-Q5, C06-Q6).",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q1(a)" },
      stem: t`The distance between the directrices of the ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ is:`,
      verify: { kind: "value", inputs: { A: "1/25", B: "1/9", F: "-1" }, params: { ask: "ddir" } },
      options: [
        { key: "A", text: t`$\frac{25 \sqrt{34}}{17}$`, correct: false, misconceptionId: "C06-M1", value: "25*sqrt(34)/17" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C06-M3", value: "8" },
        { key: "C", text: t`$\frac{125}{8}$`, correct: false, misconceptionId: "C06-M4", value: "125/8" },
        { key: "D", text: t`$\frac{25}{2}$`, correct: true, value: "25/2" },
      ],
      solution: {
        steps: [
          t`$a^2 = 25$, $b^2 = 9$: $a = 5$, $b = 3$. From $9 = 25(1 - e^2)$, $e^2 = \frac{16}{25}$, so $e = \frac{4}{5}$.`,
          t`The directrices are $x = \pm\frac{a}{e} = \pm\frac{25}{4}$, outside the ellipse.`,
          t`The distance between them is $\frac{2a}{e} = \frac{25}{2}$. (The foci $(\pm 4, 0)$, inside, are only $2ae = 8$ apart.)`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/9 = 1 with the dashed directrices x = ±25/4 outside it and a segment of length 25/2 joining them below the ellipse; the foci (±4, 0) are marked inside.",
          axes: "xy",
          view: { x: [-8.5, 8.5], y: [-5.5, 5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 3, step: 1 },
            { kind: "line", through: [[6.25, 0], [6.25, 1]], dashed: true, step: 2 },
            { kind: "line", through: [[-6.25, 0], [-6.25, 1]], dashed: true, step: 2 },
            { kind: "label", at: [6.25, 4], label: "x = 25/4", labelAt: "w", step: 2 },
            { kind: "label", at: [-6.25, 4], label: "x = −25/4", labelAt: "e", step: 2 },
            { kind: "segment", from: [-6.25, -4.2], to: [6.25, -4.2], tone: "good", step: 3 },
            { kind: "label", at: [1.5, -4.2], label: "25/2", labelAt: "s", tone: "good", step: 3 },
            { kind: "point", at: [4, 0], label: "S", labelAt: "n", tone: "muted", step: 3 },
            { kind: "point", at: [-4, 0], label: "S′", labelAt: "n", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc II Q13(b)" },
      stem: t`The distance between the foci of the ellipse $16x^2 + 25y^2 = 400$ is:`,
      verify: { kind: "value", inputs: { A: "16", B: "25", F: "-400" }, params: { ask: "dfoci" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$2 \sqrt{41}$`, correct: false, misconceptionId: "C06-M1", value: "2*sqrt(41)" },
        { key: "C", text: t`$\frac{50}{3}$`, correct: false, misconceptionId: "C06-M3", value: "50/3" },
        { key: "D", text: t`$\frac{18}{5}$`, correct: false, misconceptionId: "C06-M4", value: "18/5" },
      ],
      solution: {
        steps: [
          t`Divide by $400$: $\frac{x^2}{25} + \frac{y^2}{16} = 1$, so $a = 5$, $b = 4$ and the major axis is the $x$-axis.`,
          t`$16 = 25(1 - e^2)$ gives $e^2 = \frac{9}{25}$, $e = \frac{3}{5}$, so $ae = 3$: the focus $S$ is $(3, 0)$.`,
          t`The foci are $(\pm 3, 0)$, so the distance between them is $2ae = 6$.`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/16 = 1. The segment from (0, −4) to the focus S(3, 0) has length a = 5, a 3-4-5 triangle with the axes. The foci S(3, 0) and S′(−3, 0) are 6 apart.",
          axes: "xy",
          view: { x: [-7, 7], y: [-5.5, 6] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 4, step: 1 },
            { kind: "point", at: [0, -4], label: "(0, −4)", labelAt: "se", step: 1 },
            { kind: "point", at: [3, 0], label: "S(3, 0)", labelAt: "nw", step: 2 },
            { kind: "segment", from: [0, -4], to: [3, 0], tone: "muted", step: 2 },
            { kind: "label", at: [1.5, -2], label: "5", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "point", at: [-3, 0], label: "S′(−3, 0)", labelAt: "ne", step: 3 },
            { kind: "segment", from: [-3, 4.8], to: [3, 4.8], tone: "good", step: 3 },
            { kind: "label", at: [1.2, 4.8], label: "6", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/7.2.2 SolvedEx.1(ii)" },
      stem: t`The foci of the ellipse $4x^2 + 3y^2 = 1$ are:`,
      verify: { kind: "value", inputs: { A: "4", B: "3", F: "-1" }, params: { ask: "foci" } },
      options: [
        { key: "A", text: t`$\left(0, \pm \frac{\sqrt{3}}{6}\right)$`, correct: true, value: "{(0, -sqrt(3)/6), (0, sqrt(3)/6)}" },
        { key: "B", text: t`$\left(0, \pm \frac{\sqrt{21}}{6}\right)$`, correct: false, misconceptionId: "C06-M1", value: "{(0, -sqrt(21)/6), (0, sqrt(21)/6)}" },
        { key: "C", text: t`$\left(\pm \frac{\sqrt{3}}{6}, 0\right)$`, correct: false, misconceptionId: "C06-M2", value: "{(-sqrt(3)/6, 0), (sqrt(3)/6, 0)}" },
        { key: "D", text: t`$\left(0, \pm \frac{2 \sqrt{3}}{3}\right)$`, correct: false, misconceptionId: "C06-M3", value: "{(0, -2*sqrt(3)/3), (0, 2*sqrt(3)/3)}" },
      ],
      solution: {
        steps: [
          t`Write it as $\frac{x^2}{1/4} + \frac{y^2}{1/3} = 1$: $a^2 = \frac{1}{4}$, $b^2 = \frac{1}{3}$. Here $b > a$, so the major axis is the $y$-axis.`,
          t`$a^2 = b^2(1 - e^2)$: $\frac{1}{4} = \frac{1}{3}(1 - e^2)$, so $e^2 = \frac{1}{4}$ and $e = \frac{1}{2}$.`,
          t`The foci are on the $y$-axis: $(0, \pm be) = \left(0, \pm\frac{1}{\sqrt{3}} \cdot \frac{1}{2}\right) = \left(0, \pm\frac{\sqrt{3}}{6}\right)$.`,
        ],
        figure: {
          alt: "The ellipse 4x² + 3y² = 1, taller than it is wide: it reaches (±1/2, 0) and (0, ±1/√3). Its foci S and S′ are on the y-axis at (0, ±√3/6).",
          axes: "xy",
          view: { x: [-1.5, 2.5], y: [-1.2, 1.2] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 0.5, ry: 0.5774, step: 1 },
            { kind: "point", at: [0, 0.5774], label: "(0, 1/√3)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0.5, 0], label: "(1/2, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 0.2887], label: "S", labelAt: "w", tone: "good", step: 3 },
            { kind: "point", at: [0, -0.2887], label: "S′", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [0.7, -0.45], label: "foci (0, ±√3/6)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.2 Q1(b)" },
      stem: t`The equations of the directrices of the ellipse $3x^2 + 4y^2 = 12$ are:`,
      verify: { kind: "locus", inputs: { A: "3", B: "4", F: "-12" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$x = \pm 8$`, correct: false, misconceptionId: "C06-M4", value: "x**2 - 64" },
        { key: "B", text: t`$x = \pm 4$`, correct: true, value: "x**2 - 16" },
        { key: "C", text: t`$x = \pm \frac{4 \sqrt{7}}{7}$`, correct: false, misconceptionId: "C06-M1", value: "x**2 - 16/7" },
        { key: "D", text: t`$x = \pm 1$`, correct: false, misconceptionId: "C06-M3", value: "x**2 - 1" },
      ],
      solution: {
        steps: [
          t`Divide by $12$: $\frac{x^2}{4} + \frac{y^2}{3} = 1$, so $a = 2$, $b = \sqrt{3}$ and the major axis is the $x$-axis.`,
          t`$3 = 4(1 - e^2)$ gives $e^2 = \frac{1}{4}$, so $e = \frac{1}{2}$.`,
          t`Directrices $x = \pm\frac{a}{e} = \pm\frac{2}{1/2} = \pm 4$, outside the ellipse (the foci $(\pm 1, 0)$ are inside).`,
        ],
        figure: {
          alt: "The ellipse x²/4 + y²/3 = 1 with its foci (±1, 0) inside it and its dashed directrices x = 4 and x = −4 outside it.",
          axes: "xy",
          view: { x: [-5.5, 5.5], y: [-3, 3] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2, ry: 1.7321, step: 1 },
            { kind: "point", at: [1, 0], label: "S", labelAt: "n", tone: "muted", step: 3 },
            { kind: "point", at: [-1, 0], label: "S′", labelAt: "n", tone: "muted", step: 3 },
            { kind: "line", through: [[4, 0], [4, 1]], dashed: true, tone: "good", step: 3 },
            { kind: "line", through: [[-4, 0], [-4, 1]], dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [4, 2.4], label: "x = 4", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [-4, 2.4], label: "x = −4", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/7.2.2 SolvedEx.1(iv)" },
      stem: t`The foci of the ellipse $4x^2 + 9y^2 - 16x + 54y + 61 = 0$ are:`,
      verify: { kind: "value", inputs: { A: "4", B: "9", D: "-16", E: "54", F: "61" }, params: { ask: "foci" } },
      options: [
        { key: "A", text: t`$\left(2 \pm \sqrt{5}, -3\right)$`, correct: true, value: "{(2 - sqrt(5), -3), (2 + sqrt(5), -3)}" },
        { key: "B", text: t`$\left(2 \pm \sqrt{13}, -3\right)$`, correct: false, misconceptionId: "C06-M1", value: "{(2 - sqrt(13), -3), (2 + sqrt(13), -3)}" },
        { key: "C", text: t`$\left(-2 \pm \sqrt{5}, 3\right)$`, correct: false, misconceptionId: "C06-M5", value: "{(-2 + sqrt(5), 3), (-sqrt(5) - 2, 3)}" },
        { key: "D", text: t`$\left(\pm \sqrt{5}, 0\right)$`, correct: false, misconceptionId: "C06-M6", value: "{(-sqrt(5), 0), (sqrt(5), 0)}" },
      ],
      solution: {
        steps: [
          t`Complete the squares: $4(x^2 - 4x) + 9(y^2 + 6y) = -61$, so $4(x - 2)^2 + 9(y + 3)^2 = -61 + 16 + 81 = 36$, that is $\frac{(x - 2)^2}{9} + \frac{(y + 3)^2}{4} = 1$. The centre is $(2, -3)$.`,
          t`$a^2 = 9$, $b^2 = 4$: $a = 3$, $b = 2$. From $4 = 9(1 - e^2)$, $e = \frac{\sqrt{5}}{3}$, so $ae = \sqrt{5}$.`,
          t`The major axis is the line $y = -3$ through the centre. The foci are $\sqrt{5}$ either side of the centre on it: $(2 \pm \sqrt{5}, -3)$.`,
        ],
        figure: {
          alt: "The ellipse (x − 2)²/9 + (y + 3)²/4 = 1 with centre (2, −3). The dashed major axis y = −3 runs through the centre, and the two foci lie on it at (2 ± √5, −3).",
          axes: "xy",
          view: { x: [-2.5, 6.5], y: [-6, 1.5] },
          elements: [
            { kind: "ellipse", centre: [2, -3], rx: 3, ry: 2, step: 1 },
            { kind: "point", at: [2, -3], label: "(2, −3)", labelAt: "s", step: 1 },
            { kind: "line", through: [[0, -3], [1, -3]], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [4.2361, -3], tone: "good", step: 3 },
            { kind: "point", at: [-0.2361, -3], tone: "good", step: 3 },
            { kind: "label", at: [3, 0.4], label: "foci (2 ± √5, −3)", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q18" },
      stem: t`The major axis of the ellipse $9x^2 + 5y^2 - 36x - 50y - 164 = 0$ lies along the line:`,
      verify: { kind: "locus", inputs: { A: "9", B: "5", D: "-36", E: "-50", F: "-164" }, params: { ask: "major" } },
      options: [
        { key: "A", text: t`$x = -2$`, correct: false, misconceptionId: "C06-M5", value: "x + 2" },
        { key: "B", text: t`$x = 0$`, correct: false, misconceptionId: "C06-M6", value: "x" },
        { key: "C", text: t`$x = 2$`, correct: true, value: "x - 2" },
        { key: "D", text: t`$y = 5$`, correct: false, misconceptionId: "C06-M2", value: "y - 5" },
      ],
      solution: {
        steps: [
          t`Group and complete the squares: $9(x^2 - 4x) + 5(y^2 - 10y) = 164$, so $9(x - 2)^2 + 5(y - 5)^2 = 164 + 36 + 125 = 325$.`,
          t`Divide by $325$: $\frac{(x - 2)^2}{325/9} + \frac{(y - 5)^2}{65} = 1$. The centre is $(2, 5)$, and the larger denominator, $65$, is under $(y - 5)^2$: the major axis is vertical.`,
          t`So the major axis is the vertical line through the centre: $x = 2$.`,
        ],
        figure: {
          alt: "The ellipse (x − 2)²/(325/9) + (y − 5)²/65 = 1, taller than it is wide, with centre (2, 5). Its major axis is the vertical line x = 2 through the centre.",
          axes: "xy",
          view: { x: [-6, 10], y: [-4, 14.5] },
          elements: [
            { kind: "ellipse", centre: [2, 5], rx: 6.0093, ry: 8.0623, step: 2 },
            { kind: "point", at: [2, 5], label: "(2, 5)", labelAt: "e", step: 2 },
            { kind: "line", through: [[2, 0], [2, 1]], tone: "good", step: 3 },
            { kind: "label", at: [2, 13.6], label: "x = 2", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
