import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`In $\frac{x^2}{9} - \frac{y^2}{16} = 1$ the bigger denominator, $16$, is under $y^2$. For an ellipse that would put the major axis on the $y$-axis. **Which way does this hyperbola open?**`,
    reveal: t`Sideways, along the $x$-axis. Put $y = 0$: $x^2 = 9$, so it cuts the $x$-axis at $(\pm 3, 0)$. Put $x = 0$: $-\frac{y^2}{16} = 1$ has no real solution, so it never meets the $y$-axis. In a hyperbola the **positive** term picks the axis; the sizes of the denominators don't.`,
  },
  explanation: {
    intuition: t`A hyperbola is the conic with $e > 1$: every point is farther from the focus than from the directrix, in the fixed ratio $e$. Its two branches open away from each other along the **transverse axis**, and the curve never crosses the other axis. In $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ the minus sign does the work of the ellipse's plus: now $a^2e^2 = a^2 + b^2$, so the foci lie outside the vertices. Read $a$ and $b$ off the equation, find $e$, and every other part follows from the same few formulas.`,
    formal: t`**The standard hyperbola** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is the locus $SP = e \cdot PM$ with focus $S(ae, 0)$, directrix $x = \frac{a}{e}$ and $e > 1$. Here $b^2 = a^2(e^2 - 1)$, so $a^2e^2 = a^2 + b^2$ and $e = \frac{\sqrt{a^2 + b^2}}{a}$.

**Its parts.** Vertices $(\pm a, 0)$; transverse axis $2a$ along the $x$-axis; conjugate axis $2b$ along the $y$-axis; foci $(\pm ae, 0)$; directrices $x = \pm\frac{a}{e}$; latus rectum $\frac{2b^2}{a}$, the chord through a focus at right angles to the transverse axis, from $\left(ae, -\frac{b^2}{a}\right)$ to $\left(ae, \frac{b^2}{a}\right)$.

**The minus sign picks the axis.** In $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$ (the same as $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$) the positive term is $y^2$, so the transverse axis $2b$ is on the $y$-axis: $a^2 = b^2(e^2 - 1)$, foci $(0, \pm be)$, directrices $y = \pm\frac{b}{e}$, latus rectum $\frac{2a^2}{b}$. Which denominator is bigger does not matter. A shifted hyperbola $\frac{(x - h)^2}{a^2} - \frac{(y - k)^2}{b^2} = 1$ has centre $(h, k)$: complete the squares, then read $a$ and $b$ as before.

**Rectangular and conjugate hyperbolas.** If $a = b$ (as in $x^2 - y^2 = a^2$), $e^2 = 2$ and $e = \sqrt{2}$. The **conjugate** of $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$: the two axes swap roles. With $a^2e^2 = a^2 + b^2$ and $b^2e'^2 = a^2 + b^2$, their eccentricities satisfy $\frac{1}{e^2} + \frac{1}{e'^2} = 1$.`,
    worked: {
      prompt: t`For the hyperbola $\frac{x^2}{4} - \frac{y^2}{12} = 1$, find the lengths of the axes, the eccentricity, the foci, the directrices and the length of the latus rectum.`,
      steps: [
        t`The positive term is $x^2$, so the transverse axis is the $x$-axis: $a^2 = 4$, $b^2 = 12$, so $a = 2$, $b = 2\sqrt{3}$. Transverse axis $2a = 4$, conjugate axis $2b = 4\sqrt{3}$.`,
        t`$b^2 = a^2(e^2 - 1)$: $12 = 4(e^2 - 1)$, so $e^2 = 4$ and $e = 2$.`,
        t`$ae = 4$, so the foci are $(\pm 4, 0)$; $\frac{a}{e} = 1$, so the directrices are $x = \pm 1$.`,
        t`Latus rectum $= \frac{2b^2}{a} = \frac{2(12)}{2} = 12$.`,
      ],
      answer: t`Axes $4$ and $4\sqrt{3}$; $e = 2$; foci $(\pm 4, 0)$; directrices $x = \pm 1$; latus rectum $12$.`,
      figure: {
        alt: "The hyperbola x²/4 − y²/12 = 1 with its transverse axis from (−2, 0) to (2, 0), the foci (4, 0) and (−4, 0), the dashed directrices x = 1 and x = −1 between the centre and the vertices, and the latus rectum, a vertical chord of length 12 through (4, 0).",
        axes: "xy",
        view: { x: [-7, 7], y: [-7.5, 7.5] },
        elements: [
          { kind: "hyperbola", centre: [0, 0], a: 2, b: 3.4641, axis: "x", branch: 1, step: 1 },
          { kind: "hyperbola", centre: [0, 0], a: 2, b: 3.4641, axis: "x", branch: -1, step: 1 },
          { kind: "segment", from: [-2, 0], to: [2, 0], tone: "good", step: 1 },
          { kind: "point", at: [4, 0], label: "S(4, 0)", labelAt: "ne", step: 3 },
          { kind: "point", at: [-4, 0], label: "S′(−4, 0)", labelAt: "nw", step: 3 },
          { kind: "line", through: [[1, -7.5], [1, 7.5]], dashed: true, tone: "muted", label: "x = 1", labelAt: "ne", step: 3 },
          { kind: "line", through: [[-1, -7.5], [-1, 7.5]], dashed: true, tone: "muted", label: "x = −1", labelAt: "nw", step: 3 },
          { kind: "segment", from: [4, -6], to: [4, 6], tone: "good", step: 4 },
          { kind: "label", at: [4, 6], label: "LR = 12", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The hyperbola x²/9 − y²/16 = 1: two branches opening left and right. The vertices (3, 0) and (−3, 0) appear first, then the foci (5, 0) and (−5, 0) outside them, then the latus rectum through (5, 0), a vertical chord of length 2b²/a = 32/3.",
      axes: "xy",
      view: { x: [-9, 9], y: [-8, 8] },
      elements: [
        { kind: "hyperbola", centre: [0, 0], a: 3, b: 4, axis: "x", branch: 1, step: 1 },
        { kind: "hyperbola", centre: [0, 0], a: 3, b: 4, axis: "x", branch: -1, step: 1 },
        { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw", step: 2 },
        { kind: "point", at: [-3, 0], label: "(−3, 0)", labelAt: "ne", step: 2 },
        { kind: "point", at: [5, 0], label: "S(5, 0)", labelAt: "ne", tone: "good", step: 3 },
        { kind: "point", at: [-5, 0], label: "S′(−5, 0)", labelAt: "nw", tone: "good", step: 3 },
        { kind: "segment", from: [5, -5.3333], to: [5, 5.3333], tone: "good", step: 4 },
        { kind: "label", at: [5, 5.3333], label: "LR = 32/3", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag sliders for $a$ and $b$ and watch both branches, the foci $(\pm ae, 0)$, the directrices and the latus rectum move; flip the sign on the right-hand side to swap to the conjugate hyperbola opening along the $y$-axis.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Uses the ellipse relation for a hyperbola: $a^2e^2 = a^2 - b^2$, the difference of the denominators`,
      remediation: t`For a hyperbola $e > 1$, so $b^2 = a^2(e^2 - 1)$ and $a^2e^2 = a^2 + b^2$: **add** the denominators. Subtracting them belongs to the ellipse.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M2",
      mistake: "Puts the transverse axis with the bigger denominator, as the major axis of an ellipse",
      remediation: t`In a hyperbola the **positive** term picks the transverse axis, whatever the sizes. In $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$ it is the $y$-axis, even when $a^2 > b^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: t`Takes the latus rectum as $\frac{b^2}{a}$, the height of its end above the axis`,
      remediation: t`The latus rectum is the whole chord through the focus, from $\left(ae, -\frac{b^2}{a}\right)$ to $\left(ae, \frac{b^2}{a}\right)$, so its length is $\frac{2b^2}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Thinks the conjugate hyperbola has the same eccentricity as the hyperbola",
      remediation: t`The conjugate hyperbola swaps the transverse and conjugate axes, so its eccentricity $e'$ changes: $\frac{1}{e^2} + \frac{1}{e'^2} = 1$. The two are equal only when $a = b$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: t`Turns the ratio upside down: takes $e$ as the semi-transverse axis over the focal distance, so $e < 1$`,
      remediation: t`For a hyperbola $e = \frac{\sqrt{a^2 + b^2}}{a} > 1$: the focus is farther from the centre than the vertex. An eccentricity below $1$ means an ellipse.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M6",
      mistake: t`Skips the square root: uses $a^2$ where $a$ belongs, so $e$ comes out as $1 + \frac{b^2}{a^2}$ and the latus rectum as $\frac{2b^2}{a^2}$`,
      remediation: t`$1 + \frac{b^2}{a^2}$ is $e^2$, so take its square root for $e$. The latus rectum $\frac{2b^2}{a}$ divides by $a$, not by $a^2$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C11-M1 doesn't apply to the latus rectum, and for a rectangular hyperbola it gives e = 0.",
    "C11-M2 shows only when the bigger denominator is under the negative term; otherwise it gives the key.",
    "C11-M3 is for latus rectum items only; C11-M4 for conjugate-hyperbola items only, and it gives the key when a = b.",
    "C11-M6 applies to eccentricity and latus rectum items, not to foci or directrices.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q17" },
      stem: t`The eccentricity of the hyperbola $16x^2 - 3y^2 - 32x - 12y - 44 = 0$ is:`,
      verify: { kind: "value", inputs: { A: "3", B: "16", s: "1", h: "1", k: "-2" }, params: { ask: "e" } },
      options: [
        { key: "A", text: t`$\sqrt{\frac{19}{3}}$`, correct: true, value: "sqrt(57)/3" },
        { key: "B", text: t`$\sqrt{\frac{13}{3}}$`, correct: false, misconceptionId: "C11-M1", value: "sqrt(39)/3" },
        { key: "C", text: t`$\frac{\sqrt{19}}{4}$`, correct: false, misconceptionId: "C11-M2", value: "sqrt(19)/4" },
        { key: "D", text: t`$\frac{19}{3}$`, correct: false, misconceptionId: "C11-M6", value: "19/3" },
      ],
      solution: {
        steps: [
          t`Complete the squares: $16(x^2 - 2x) - 3(y^2 + 4y) = 44$, so $16(x - 1)^2 - 3(y + 2)^2 = 44 + 16 - 12 = 48$.`,
          t`Divide by $48$: $\frac{(x - 1)^2}{3} - \frac{(y + 2)^2}{16} = 1$, centre $(1, -2)$. The positive term is in $x$, so $a^2 = 3$ and $b^2 = 16$, although $16$ is bigger.`,
          t`$b^2 = a^2(e^2 - 1)$: $16 = 3(e^2 - 1)$, so $e^2 = \frac{19}{3}$ and $e = \sqrt{\frac{19}{3}}$.`,
        ],
        figure: {
          alt: "The hyperbola (x − 1)²/3 − (y + 2)²/16 = 1: centre (1, −2), branches opening left and right, with the semi-transverse axis a = √3 drawn from the centre to the right vertex.",
          axes: "xy",
          view: { x: [-6, 8], y: [-8, 4] },
          elements: [
            { kind: "point", at: [1, -2], label: "(1, −2)", labelAt: "s", step: 2 },
            { kind: "hyperbola", centre: [1, -2], a: 1.7321, b: 4, axis: "x", branch: 1, step: 2 },
            { kind: "hyperbola", centre: [1, -2], a: 1.7321, b: 4, axis: "x", branch: -1, step: 2 },
            { kind: "segment", from: [1, -2], to: [2.7321, -2], label: "a = √3", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q1(ii)" },
      stem: t`The foci of the hyperbola $\frac{x^2}{25} - \frac{y^2}{16} = -1$ are:`,
      verify: { kind: "value", inputs: { A: "25", B: "16", s: "-1" }, params: { ask: "foci" } },
      options: [
        { key: "A", text: t`$(\pm\sqrt{41}, 0)$`, correct: false, misconceptionId: "C11-M2", value: "{(-sqrt(41), 0), (sqrt(41), 0)}" },
        { key: "B", text: t`$\left(0, \pm\frac{16}{\sqrt{41}}\right)$`, correct: false, misconceptionId: "C11-M5", value: "{(0, -16*sqrt(41)/41), (0, 16*sqrt(41)/41)}" },
        { key: "C", text: t`$(0, \pm\sqrt{41})$`, correct: true, value: "{(0, -sqrt(41)), (0, sqrt(41))}" },
        { key: "D", text: t`$(0, \pm 3)$`, correct: false, misconceptionId: "C11-M1", value: "{(0, -3), (0, 3)}" },
      ],
      solution: {
        steps: [
          t`Multiply by $-1$: $\frac{y^2}{16} - \frac{x^2}{25} = 1$. The positive term is $y^2$, so the transverse axis is the $y$-axis: $b^2 = 16$, $a^2 = 25$ ($25$ is bigger, but it is under the negative term).`,
          t`$a^2 = b^2(e^2 - 1)$: $25 = 16(e^2 - 1)$, so $e^2 = \frac{41}{16}$ and $e = \frac{\sqrt{41}}{4}$.`,
          t`$be = 4 \cdot \frac{\sqrt{41}}{4} = \sqrt{41}$, so the foci are $(0, \pm\sqrt{41})$.`,
        ],
        figure: {
          alt: "The hyperbola y²/16 − x²/25 = 1: branches opening up and down with vertices (0, 4) and (0, −4), and the foci (0, √41) and (0, −√41), about 6.4 units from the centre, on the y-axis.",
          axes: "xy",
          view: { x: [-9, 9], y: [-9, 9] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 5, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 5, axis: "y", branch: -1, step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "se", step: 1 },
            { kind: "point", at: [0, -4], label: "(0, −4)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 6.4031], label: "S(0, √41)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [0, -6.4031], label: "S′(0, −√41)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q3" },
      stem: t`The eccentricity of the hyperbola conjugate to $x^2 - 3y^2 = 3$ is:`,
      verify: { kind: "value", inputs: { A: "3", B: "1", s: "1" }, params: { ask: "econj" } },
      options: [
        { key: "A", text: t`$\sqrt{2}$`, correct: false, misconceptionId: "C11-M1", value: "sqrt(2)" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C11-M4", value: "2*sqrt(3)/3" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C11-M5", value: "1/2" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Divide by $3$: $\frac{x^2}{3} - \frac{y^2}{1} = 1$, so $a^2 = 3$, $b^2 = 1$ (its own $e = \frac{2}{\sqrt{3}}$).`,
          t`The conjugate hyperbola is $\frac{x^2}{3} - \frac{y^2}{1} = -1$, that is $\frac{y^2}{1} - \frac{x^2}{3} = 1$: its transverse axis is the $y$-axis, with $b = 1$.`,
          t`$a^2 = b^2(e'^2 - 1)$: $3 = e'^2 - 1$, so $e' = 2$ and its foci are $(0, \pm be') = (0, \pm 2)$. Check: $\frac{3}{4} + \frac{1}{4} = 1$.`,
        ],
        figure: {
          alt: "The given hyperbola x² − 3y² = 3, dashed, opening left and right, and its conjugate x² − 3y² = −3, solid, opening up and down with foci (0, 2) and (0, −2).",
          axes: "xy",
          view: { x: [-5, 5], y: [-4, 4] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 1.7321, b: 1, axis: "x", branch: 1, dashed: true, tone: "muted", step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 1.7321, b: 1, axis: "x", branch: -1, dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [2.6, 0], label: "x² − 3y² = 3", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 1, b: 1.7321, axis: "y", branch: 1, step: 2 },
            { kind: "hyperbola", centre: [0, 0], a: 1, b: 1.7321, axis: "y", branch: -1, step: 2 },
            { kind: "label", at: [0, 2.6], label: "x² − 3y² = −3", labelAt: "e", step: 2 },
            { kind: "point", at: [0, 2], label: "(0, 2)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q1(viii)" },
      stem: t`The directrices of the hyperbola $\frac{y^2}{25} - \frac{x^2}{144} = 1$ are:`,
      verify: { kind: "locus", inputs: { A: "144", B: "25", s: "-1" }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`$x = \pm\frac{144}{13}$`, correct: false, misconceptionId: "C11-M2", value: "x**2 - 20736/169" },
        { key: "B", text: t`$y = \pm 13$`, correct: false, misconceptionId: "C11-M5", value: "y**2 - 169" },
        { key: "C", text: t`$y = \pm\frac{25}{13}$`, correct: true, value: "y**2 - 625/169" },
        { key: "D", text: t`$y = \pm\frac{25}{\sqrt{119}}$`, correct: false, misconceptionId: "C11-M1", value: "y**2 - 625/119" },
      ],
      solution: {
        steps: [
          t`The positive term is $y^2$, so the transverse axis is the $y$-axis: $b^2 = 25$, $a^2 = 144$, and $b = 5$.`,
          t`$a^2 = b^2(e^2 - 1)$: $144 = 25(e^2 - 1)$, so $e^2 = \frac{169}{25}$ and $e = \frac{13}{5}$. The foci are $(0, \pm be) = (0, \pm 13)$.`,
          t`The directrices are $y = \pm\frac{b}{e} = \pm\frac{5}{13/5}$, that is $y = \pm\frac{25}{13}$.`,
        ],
        figure: {
          alt: "The hyperbola y²/25 − x²/144 = 1: branches opening up and down from (0, 5) and (0, −5), the foci (0, 13) and (0, −13), and the dashed directrices y = 25/13 and y = −25/13 close to the x-axis.",
          axes: "xy",
          view: { x: [-15, 15], y: [-15, 15] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 12, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 12, axis: "y", branch: -1, step: 1 },
            { kind: "point", at: [0, 13], label: "S(0, 13)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [0, -13], label: "S′(0, −13)", labelAt: "e", tone: "good", step: 2 },
            { kind: "line", through: [[-15, 1.9231], [15, 1.9231]], dashed: true, label: "y = 25/13", labelAt: "ne", step: 3 },
            { kind: "line", through: [[-15, -1.9231], [15, -1.9231]], dashed: true, label: "y = −25/13", labelAt: "se", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.3 Q1(v)" },
      stem: t`The length of the latus rectum of the hyperbola $3x^2 - y^2 = 4$ is:`,
      verify: { kind: "value", inputs: { A: "4/3", B: "4", s: "1" }, params: { ask: "lr" } },
      options: [
        { key: "A", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C11-M2", value: "4/3" },
        { key: "B", text: t`$2 \sqrt{3}$`, correct: false, misconceptionId: "C11-M3", value: "2*sqrt(3)" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C11-M6", value: "6" },
        { key: "D", text: t`$4 \sqrt{3}$`, correct: true, value: "4*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Divide by $4$: $\frac{x^2}{4/3} - \frac{y^2}{4} = 1$. The positive term is $x^2$, so $a^2 = \frac{4}{3}$ and $b^2 = 4$, although $4$ is bigger: $a = \frac{2}{\sqrt{3}}$.`,
          t`Latus rectum $= \frac{2b^2}{a} = \frac{8}{2/\sqrt{3}} = 4\sqrt{3}$.`,
          t`Check: $a^2e^2 = \frac{4}{3} + 4 = \frac{16}{3}$, so the focus is $S\left(\frac{4}{\sqrt{3}}, 0\right)$, and the chord through it runs from $y = -2\sqrt{3}$ to $y = 2\sqrt{3}$: length $4\sqrt{3}$.`,
        ],
        figure: {
          alt: "The hyperbola 3x² − y² = 4, branches opening left and right from (±2/√3, 0), and its latus rectum: the vertical chord through the focus (4/√3, 0) from y = −2√3 to y = 2√3, of length 4√3.",
          axes: "xy",
          view: { x: [-5.5, 5.5], y: [-5, 5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 1.1547, b: 2, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 1.1547, b: 2, axis: "x", branch: -1, step: 1 },
            { kind: "segment", from: [2.3094, -3.4641], to: [2.3094, 3.4641], tone: "good", step: 2 },
            { kind: "label", at: [2.3094, 3.4641], label: "LR = 4√3", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [2.3094, 0], label: "S(4/√3, 0)", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q11" },
      stem: t`$x^2 - y^2 = 16$ is a rectangular hyperbola: its transverse and conjugate axes are equal. Its eccentricity is:`,
      verify: { kind: "value", inputs: { A: "16", B: "16", s: "1" }, params: { ask: "e" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C11-M6", value: "2" },
        { key: "B", text: t`$\sqrt{2}$`, correct: true, value: "sqrt(2)" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C11-M1", value: "0" },
        { key: "D", text: t`$\frac{1}{\sqrt{2}}$`, correct: false, misconceptionId: "C11-M5", value: "sqrt(2)/2" },
      ],
      solution: {
        steps: [
          t`Divide by $16$: $\frac{x^2}{16} - \frac{y^2}{16} = 1$, so $a^2 = b^2 = 16$.`,
          t`$b^2 = a^2(e^2 - 1)$: $16 = 16(e^2 - 1)$, so $e^2 = 2$ and $e = \sqrt{2}$. Every rectangular hyperbola has $e = \sqrt{2}$, since $b = a$.`,
          t`Its foci are $(\pm ae, 0) = (\pm 4\sqrt{2}, 0)$, outside the vertices $(\pm 4, 0)$, as they must be when $e > 1$.`,
        ],
        figure: {
          alt: "The rectangular hyperbola x² − y² = 16 with equal semi-axes a = 4 and b = 4 drawn from the centre, and its foci (4√2, 0) and (−4√2, 0) outside the vertices.",
          axes: "xy",
          view: { x: [-10, 10], y: [-8, 8] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 4, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 4, axis: "x", branch: -1, step: 1 },
            { kind: "segment", from: [0, 0], to: [4, 0], label: "a = 4", labelAt: "n", tone: "good", step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 4], label: "b = 4", labelAt: "e", tone: "good", step: 1 },
            { kind: "point", at: [5.6569, 0], label: "S(4√2, 0)", labelAt: "ne", step: 3 },
            { kind: "point", at: [-5.6569, 0], label: "S′(−4√2, 0)", labelAt: "nw", step: 3 },
          ],
        },
      },
    },
  ],
};
