import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Two pins stand $12$ cm apart. Tie the ends of a $20$ cm string to them, pull it tight with a pencil and draw all the way round. **What curve do you get, and how far is it from one end of the curve to the other, along the line of the pins?**`,
    reveal: t`An ellipse, with the pins as its foci $S$ and $S'$. At every point $P$ the two pieces of string add up to the whole string: $SP + S'P = 20$. At either end of the curve both pieces lie along the line of the pins, so the curve measures $20$ cm from end to end: $2a = 20$, $a = 10$, and $ae = 6$.`,
  },
  explanation: {
    intuition: t`Pin the two ends of a string and pull it tight with a pencil: as the pencil goes round, the two straight pieces always add up to the string's length. The curve it draws is an ellipse with the pins at its foci. The focus-directrix definition gives each piece on its own: $SP$ is $e$ times the distance from $P$ to the nearer directrix, which works out to $a - ex_1$, and $S'P = a + ex_1$. As $P$ moves, one piece shrinks by exactly what the other gains, so the total stays $2a$.`,
    formal: t`**The setting.** On $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ with $a > b$, the foci are $S(ae, 0)$ and $S'(-ae, 0)$ and the directrices are $x = \pm\frac{a}{e}$. For a point $P(x_1, y_1)$ on it, $SP$ and $S'P$ are its **focal distances**.

**Each distance.** $SP = e \cdot PM = e\left(\frac{a}{e} - x_1\right) = a - ex_1$, and $S'P = e\left(x_1 + \frac{a}{e}\right) = a + ex_1$. A point on the right ($x_1 > 0$) is nearer to $S$, so $SP$ is the smaller one there.

**The sum.** $SP + S'P = 2a$, the length of the major axis, for every point of the ellipse. It is not $2ae$ (the distance between the foci) or $\frac{2a}{e}$ (between the directrices).

**The product.** $SP \cdot S'P = (a - ex_1)(a + ex_1) = a^2 - e^2x_1^2$. At $P(a\cos\theta, b\sin\theta)$ this is $a^2 - a^2e^2\cos^2\theta$.

**Major axis along $y$.** If $b > a$, the foci are $(0, \pm be)$, the focal distances are $b - ey_1$ and $b + ey_1$, and their sum is $2b$. The sum is always the major axis: twice the square root of the **bigger** denominator.`,
    worked: {
      prompt: t`The point $P(3, -\sqrt{15})$ lies on the ellipse $\frac{x^2}{36} + \frac{y^2}{20} = 1$. Find its focal distances $SP$ and $S'P$, and check that they add up to the major axis.`,
      steps: [
        t`Here $a^2 = 36$, $b^2 = 20$, so $a = 6$. From $b^2 = a^2(1 - e^2)$: $1 - e^2 = \frac{20}{36} = \frac{5}{9}$, so $e = \frac{2}{3}$. The foci are $(\pm ae, 0) = (\pm 4, 0)$.`,
        t`With $x_1 = 3$: $SP = a - ex_1 = 6 - \frac{2}{3}(3) = 4$.`,
        t`$S'P = a + ex_1 = 6 + 2 = 8$.`,
        t`Check: $SP + S'P = 12 = 2a$, the major axis. By the distance formula, $SP = \sqrt{(3 - 4)^2 + 15} = 4$ as well.`,
      ],
      answer: t`$SP = 4$ and $S'P = 8$; their sum is $12 = 2a$.`,
      figure: {
        alt: "The ellipse x²/36 + y²/20 = 1 with foci S(4, 0) and S′(−4, 0). The point P(3, −√15) is on it: SP = 4, S′P = 8, and SP + S′P = 12 = 2a.",
        axes: "xy",
        view: { x: [-8, 10], y: [-6.5, 8.5] },
        elements: [
          { kind: "ellipse", centre: [0, 0], rx: 6, ry: 4.4721, tone: "muted" },
          { kind: "point", at: [4, 0], label: "S(4, 0)", labelAt: "n", tone: "muted", step: 1 },
          { kind: "point", at: [-4, 0], label: "S′(−4, 0)", labelAt: "ne", tone: "muted", step: 1 },
          { kind: "point", at: [3, -3.873], label: "P(3, −√15)", labelAt: "se", step: 2 },
          { kind: "segment", from: [4, 0], to: [3, -3.873], step: 2 },
          { kind: "label", at: [0.5, 7.8], label: "SP = 6 − 2 = 4", labelAt: "e", step: 2 },
          { kind: "segment", from: [-4, 0], to: [3, -3.873], step: 3 },
          { kind: "label", at: [0.5, 6.6], label: "S′P = 6 + 2 = 8", labelAt: "e", step: 3 },
          { kind: "label", at: [0.5, 5.4], label: "SP + S′P = 12 = 2a", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The ellipse x²/100 + y²/64 = 1 with foci S(6, 0) and S′(−6, 0). The point P(8, −4.8) is on it, joined to both foci: SP = 5.2 and S′P = 14.8, and SP + S′P = 20 = 2a.",
      axes: "xy",
      view: { x: [-13, 19], y: [-9.5, 13.5] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 10, ry: 8, tone: "muted", step: 1 },
        { kind: "point", at: [6, 0], label: "S(6, 0)", labelAt: "n", tone: "muted", step: 1 },
        { kind: "point", at: [-6, 0], label: "S′(−6, 0)", labelAt: "n", tone: "muted", step: 1 },
        { kind: "point", at: [8, -4.8], label: "P(8, −4.8)", labelAt: "se", step: 2 },
        { kind: "segment", from: [6, 0], to: [8, -4.8], step: 2 },
        { kind: "label", at: [1.5, 12.6], label: "SP = 10 − 0.6 × 8 = 5.2", labelAt: "e", step: 2 },
        { kind: "segment", from: [-6, 0], to: [8, -4.8], step: 3 },
        { kind: "label", at: [1.5, 11.1], label: "S′P = 10 + 0.6 × 8 = 14.8", labelAt: "e", step: 3 },
        { kind: "label", at: [1.5, 9.6], label: "SP + S′P = 20 = 2a", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag $P$ round the ellipse: the pieces $SP$ and $S'P$ are drawn as a taut string, one growing as the other shrinks, while a counter shows $a - ex_1$, $a + ex_1$ and their total, fixed at $2a$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Swapping the two formulas: $SP = a + ex_1$ and $S'P = a - ex_1$, which gives the nearer focus the larger distance`,
      remediation: t`$S(ae, 0)$ is on the right, so a point with $x_1 > 0$ is nearer to it: $SP = a - ex_1$ is the smaller distance and $S'P = a + ex_1$ the larger. A quick check: a point on the right must be closer to $S$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M2",
      mistake: t`Taking the focal distance as the distance to the directrix, $\frac{a}{e} - x_1$, forgetting that $SP = e \cdot PM$ (so the sum comes out as $\frac{2a}{e}$)`,
      remediation: t`The focal distance is $e$ times the distance to the directrix: $SP = e\left(\frac{a}{e} - x_1\right) = a - ex_1$. So $SP + S'P = 2a$; $\frac{2a}{e}$ is the distance between the directrices.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M3",
      mistake: t`Taking $a$ from the $x^2$ term even when the $y^2$ denominator is bigger, so the sum is twice the root of the $x^2$ denominator`,
      remediation: t`$SP + S'P$ is the **major** axis, set by the bigger denominator. In $\frac{x^2}{4} + \frac{y^2}{9} = 1$ the major axis is along $y$ and the sum is $2 \times 3 = 6$, not $4$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M4",
      mistake: t`Taking $SP + S'P$ as the distance between the foci, $2ae$`,
      remediation: t`$S$, $P$ and $S'$ make a triangle, so $SP + S'P$ is more than $SS' = 2ae$. The sum is the major axis, $2a$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M5",
      mistake: t`Dropping the $e$: $SP = a - x_1$ and $S'P = a + x_1$, as if $e = 1$ (like the parabola's focal distance $a + x_1$)`,
      remediation: t`For an ellipse $e < 1$, and it stays in the formula: $SP = a - ex_1$ and $S'P = a + ex_1$. Only a parabola has $e = 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M6",
      mistake: t`Multiplying $(a - ex_1)(a + ex_1)$ out as $a^2 - ex_1^2$, squaring $x_1$ but not $e$`,
      remediation: t`The whole term $ex_1$ is squared: $(a - ex_1)(a + ex_1) = a^2 - (ex_1)^2 = a^2 - e^2x_1^2$.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
  ],
  engineNotes: [
    t`C08-M1 gives the key when $x_1 = 0$, and swapping the formulas does not change the sum or the product (its model raises there): diagnose it with $SP$ or $S'P$ at a point off the minor axis.`,
    t`C08-M3 gives the key when the major axis is along $x$ (its model raises there): diagnose it only with a $y^2$ denominator bigger than the $x^2$ one.`,
    t`C08-M5 leaves the sum at $2a$ (its model raises there). For the product, C08-M5 and C08-M6 give the key when $x_1 = 0$.`,
    "C08-M3 and C08-M4 apply only to the sum (or one distance found from the other); C08-M6 only to the product.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`$S(3, 0)$ is a focus of the ellipse $\frac{x^2}{25} + \frac{y^2}{16} = 1$, and $P\left(4, \frac{12}{5}\right)$ lies on the ellipse. The focal distance $SP$ is:`,
      verify: { kind: "value", inputs: { a2: "25", b2: "16", x1: "4", y1: "12/5" }, params: { ask: "sp" } },
      options: [
        { key: "A", text: t`$\frac{13}{5}$`, correct: true, value: "13/5" },
        { key: "B", text: t`$\frac{37}{5}$`, correct: false, misconceptionId: "C08-M1", value: "37/5" },
        { key: "C", text: t`$\frac{13}{3}$`, correct: false, misconceptionId: "C08-M2", value: "13/3" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C08-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`Here $a^2 = 25$, $b^2 = 16$, so $a = 5$, and $16 = 25(1 - e^2)$ gives $e = \frac{3}{5}$. The focus $S(ae, 0) = (3, 0)$ is on the right, like $P$.`,
          t`$SP = a - ex_1 = 5 - \frac{3}{5}(4) = \frac{13}{5}$.`,
          t`Check by the distance formula: $SP = \sqrt{(4 - 3)^2 + \left(\frac{12}{5}\right)^2} = \sqrt{\frac{169}{25}} = \frac{13}{5}$.`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/16 = 1 with focus S(3, 0). The point P(4, 12/5) is on it, and the segment SP has length 13/5.",
          axes: "xy",
          view: { x: [-6.5, 9], y: [-5, 6.5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 4, tone: "muted" },
            { kind: "point", at: [3, 0], label: "S(3, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [4, 2.4], label: "P(4, 12/5)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [3, 0], to: [4, 2.4], step: 2 },
            { kind: "label", at: [0.5, -4.6], label: "SP = 5 − 12/5 = 13/5", labelAt: "e", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`The ellipse $\frac{x^2}{169} + \frac{y^2}{144} = 1$ has foci $S(5, 0)$ and $S'(-5, 0)$. For the point $P\left(-\frac{39}{5}, \frac{48}{5}\right)$ on it, the focal distance $S'P$ is:`,
      verify: { kind: "value", inputs: { a2: "169", b2: "144", x1: "-39/5", y1: "48/5" }, params: { ask: "s1p" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C08-M1", value: "16" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C08-M2", value: "26" },
        { key: "C", text: t`$\frac{26}{5}$`, correct: false, misconceptionId: "C08-M5", value: "26/5" },
        { key: "D", text: t`$10$`, correct: true, value: "10" },
      ],
      solution: {
        steps: [
          t`Here $a^2 = 169$, $b^2 = 144$, so $a = 13$ and $a^2e^2 = 169 - 144 = 25$: $ae = 5$, $e = \frac{5}{13}$.`,
          t`$S'(-5, 0)$ is on the left, like $P$: $S'P = a + ex_1 = 13 + \frac{5}{13}\left(-\frac{39}{5}\right) = 13 - 3 = 10$.`,
          t`Check: $S'P = \sqrt{\left(-\frac{39}{5} + 5\right)^2 + \left(\frac{48}{5}\right)^2} = \sqrt{\frac{196 + 2304}{25}} = 10$.`,
        ],
        figure: {
          alt: "The ellipse x²/169 + y²/144 = 1 with focus S′(−5, 0). The point P(−39/5, 48/5) is on it, and the segment S′P has length 10.",
          axes: "xy",
          view: { x: [-22, 14], y: [-14, 15] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 13, ry: 12, tone: "muted" },
            { kind: "point", at: [-5, 0], label: "S′", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [-7.8, 9.6], label: "P(−39/5, 48/5)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [-5, 0], to: [-7.8, 9.6], step: 2 },
            { kind: "label", at: [1, -13.2], label: "S′P = 13 − 3 = 10", labelAt: "e", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`$P$ is any point on the ellipse $16x^2 + 9y^2 = 144$, and $S$, $S'$ are its foci. Then $SP + S'P$ is:`,
      verify: { kind: "value", inputs: { a2: "9", b2: "16" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{32 \sqrt{7}}{7}$`, correct: false, misconceptionId: "C08-M2", value: "32*sqrt(7)/7" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C08-M3", value: "6" },
        { key: "C", text: t`$2 \sqrt{7}$`, correct: false, misconceptionId: "C08-M4", value: "2*sqrt(7)" },
        { key: "D", text: t`$8$`, correct: true, value: "8" },
      ],
      solution: {
        steps: [
          t`Divide by $144$: $\frac{x^2}{9} + \frac{y^2}{16} = 1$. The bigger denominator, $16$, is under $y^2$, so the major axis is along the $y$-axis, with semi-major axis $4$.`,
          t`$16(1 - e^2) = 9$ gives $e = \frac{\sqrt{7}}{4}$, so the foci are $(0, \pm 4e) = (0, \pm\sqrt{7})$.`,
          t`$SP + S'P$ is the major axis: $2 \times 4 = 8$. Check at $P(3, 0)$: each focal distance is $\sqrt{9 + 7} = 4$.`,
        ],
        figure: {
          alt: "The ellipse x²/9 + y²/16 = 1, tall along the y-axis, with foci S(0, √7) and S′(0, −√7). The point P(3, 0) is joined to both foci; each distance is 4, so SP + S′P = 8.",
          axes: "xy",
          view: { x: [-4.5, 4.6], y: [-5.3, 5.2] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 3, ry: 4, tone: "muted" },
            { kind: "point", at: [0, 2.6458], label: "S(0, √7)", labelAt: "sw", tone: "muted", step: 2 },
            { kind: "point", at: [0, -2.6458], label: "S′(0, −√7)", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "point", at: [3, 0], label: "P(3, 0)", labelAt: "ne", step: 3 },
            { kind: "segment", from: [0, 2.6458], to: [3, 0], step: 3 },
            { kind: "segment", from: [0, -2.6458], to: [3, 0], step: 3 },
            { kind: "label", at: [1.2, -4.7], label: "SP + S′P = 8", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A point $P$ on the ellipse $3x^2 + 4y^2 = 12$ is at distance $\frac{5}{2}$ from the focus $S(1, 0)$. The $x$-coordinate of $P$ is:`,
      verify: { kind: "value", inputs: { a2: "4", b2: "3", sp: "5/2" }, params: { ask: "x1" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C08-M2", value: "3/2" },
        { key: "B", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C08-M5", value: "-1/2" },
        { key: "C", text: t`$-1$`, correct: true, value: "-1" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C08-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$3x^2 + 4y^2 = 12$ is $\frac{x^2}{4} + \frac{y^2}{3} = 1$: $a = 2$, and $3 = 4(1 - e^2)$ gives $e = \frac{1}{2}$. So $S$ is $(ae, 0) = (1, 0)$.`,
          t`$SP = a - ex_1$: $\frac{5}{2} = 2 - \frac{1}{2}x_1$, so $x_1 = -1$. $SP$ is more than $a$, so $P$ is on the side away from $S$.`,
          t`Check: at $x = -1$, $y^2 = 3\left(1 - \frac{1}{4}\right) = \frac{9}{4}$, so $P$ is $\left(-1, \pm\frac{3}{2}\right)$, and $SP = \sqrt{4 + \frac{9}{4}} = \frac{5}{2}$.`,
        ],
        figure: {
          alt: "The ellipse x²/4 + y²/3 = 1 with focus S(1, 0). The points P(−1, 3/2) and P(−1, −3/2) are on it, each at distance 5/2 from S.",
          axes: "xy",
          view: { x: [-2.8, 2.8], y: [-2.3, 2.5] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 2, ry: 1.7321, tone: "muted" },
            { kind: "point", at: [1, 0], label: "S(1, 0)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [-1, 1.5], label: "P(−1, 3/2)", labelAt: "nw", step: 2 },
            { kind: "point", at: [-1, -1.5], label: "P(−1, −3/2)", labelAt: "sw", step: 2 },
            { kind: "segment", from: [1, 0], to: [-1, 1.5], step: 3 },
            { kind: "segment", from: [1, 0], to: [-1, -1.5], step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q8" },
      stem: t`$P$ is the point $\theta = \frac{\pi}{4}$, that is $P(5\cos\theta, 3\sin\theta)$, on the ellipse $9x^2 + 25y^2 = 225$, and $S$, $S'$ are its foci. Then $SP \cdot S'P$ is:`,
      verify: { kind: "value", inputs: { a2: "25", b2: "9", theta: "pi/4" }, params: { ask: "prod" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C08-M6", value: "15" },
        { key: "B", text: t`$17$`, correct: true, value: "17" },
        { key: "C", text: t`$\frac{425}{16}$`, correct: false, misconceptionId: "C08-M2", value: "425/16" },
        { key: "D", text: t`$\frac{25}{2}$`, correct: false, misconceptionId: "C08-M5", value: "25/2" },
      ],
      solution: {
        steps: [
          t`$9x^2 + 25y^2 = 225$ is $\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$, and $a^2e^2 = 25 - 9 = 16$, so $e = \frac{4}{5}$ and the foci are $(\pm 4, 0)$.`,
          t`At $\theta = \frac{\pi}{4}$, $x_1 = 5\cos\frac{\pi}{4} = \frac{5}{\sqrt{2}}$, so $ex_1 = \frac{4}{5} \cdot \frac{5}{\sqrt{2}} = 2\sqrt{2}$.`,
          t`$SP \cdot S'P = (a - ex_1)(a + ex_1) = a^2 - e^2x_1^2 = 25 - 8 = 17$.`,
        ],
        figure: {
          alt: "The ellipse x²/25 + y²/9 = 1 with foci S(4, 0) and S′(−4, 0). The point P(5/√2, 3/√2) at θ = π/4 is joined to both foci; SP = 5 − 2√2 and S′P = 5 + 2√2.",
          axes: "xy",
          view: { x: [-6.5, 8.5], y: [-3.8, 6.2] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 5, ry: 3, tone: "muted" },
            { kind: "point", at: [4, 0], label: "S", labelAt: "se", tone: "muted", step: 1 },
            { kind: "point", at: [-4, 0], label: "S′", labelAt: "n", tone: "muted", step: 1 },
            { kind: "point", at: [3.5355, 2.1213], label: "P(5/√2, 3/√2)", labelAt: "ne", step: 2 },
            { kind: "segment", from: [4, 0], to: [3.5355, 2.1213], step: 3 },
            { kind: "segment", from: [-4, 0], to: [3.5355, 2.1213], step: 3 },
            { kind: "label", at: [0.4, 5.1], label: "(5 − 2√2)(5 + 2√2) = 17", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "authored" },
      stem: t`A point $P$ on the ellipse $\frac{x^2}{16} + \frac{y^2}{25} = 1$ is at distance $\frac{16}{5}$ from the focus $S(0, 3)$. Its distance $S'P$ from the other focus $S'(0, -3)$ is:`,
      verify: { kind: "value", inputs: { a2: "16", b2: "25", sp: "16/5" }, params: { ask: "other" } },
      options: [
        { key: "A", text: t`$\frac{24}{5}$`, correct: false, misconceptionId: "C08-M3", value: "24/5" },
        { key: "B", text: t`$\frac{14}{5}$`, correct: false, misconceptionId: "C08-M4", value: "14/5" },
        { key: "C", text: t`$\frac{34}{5}$`, correct: true, value: "34/5" },
        { key: "D", text: t`$\frac{202}{15}$`, correct: false, misconceptionId: "C08-M2", value: "202/15" },
      ],
      solution: {
        steps: [
          t`Here $25 > 16$, so the major axis is along the $y$-axis: the semi-major axis is $5$, not $4$, and the foci $(0, \pm 3)$ lie on it.`,
          t`For every point of the ellipse, $SP + S'P$ is the major axis: $2 \times 5 = 10$.`,
          t`So $S'P = 10 - \frac{16}{5} = \frac{34}{5}$. (The point is $P\left(\pm\frac{16}{5}, 3\right)$, level with $S$.)`,
        ],
        figure: {
          alt: "The ellipse x²/16 + y²/25 = 1, tall along the y-axis, with foci S(0, 3) and S′(0, −3). The point P(16/5, 3) is joined to both: SP = 16/5 and S′P = 34/5, adding up to 10.",
          axes: "xy",
          view: { x: [-5.5, 8], y: [-5.6, 7] },
          elements: [
            { kind: "ellipse", centre: [0, 0], rx: 4, ry: 5, tone: "muted" },
            { kind: "point", at: [0, 3], label: "S(0, 3)", labelAt: "w", tone: "muted", step: 1 },
            { kind: "point", at: [0, -3], label: "S′(0, −3)", labelAt: "w", tone: "muted", step: 1 },
            { kind: "point", at: [3.2, 3], label: "P(16/5, 3)", labelAt: "ne", step: 2 },
            { kind: "segment", from: [0, 3], to: [3.2, 3], step: 2 },
            { kind: "segment", from: [0, -3], to: [3.2, 3], step: 3 },
            { kind: "label", at: [0.5, 6.3], label: "S′P = 10 − 16/5 = 34/5", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
