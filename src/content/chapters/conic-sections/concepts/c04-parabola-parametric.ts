import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A point $P$ on the parabola $y^2 = 20x$ is $9$ units from the focus. **How far is $P$ from the $y$-axis?** Try it without a single square root.`,
    reveal: t`$4$ units. The focus is $S(5, 0)$ and the directrix is $x = -5$. On a parabola $SP = PM$, the distance to the directrix, and that distance is $x_1 + 5$. So $x_1 + 5 = 9$ and $x_1 = 4$. (Only now do you need a root: $y_1^2 = 80$, so $P$ is $(4, \pm 4\sqrt{5})$.)`,
  },
  explanation: {
    intuition: t`One number $t$ is enough to name any point of $y^2 = 4ax$: the point $(at^2, 2at)$. As $t$ runs through the reals, the point slides along the whole parabola: above the axis for $t > 0$, below it for $t < 0$, at the vertex for $t = 0$. And because every point is as far from the focus as from the directrix $x = -a$, its focal distance is just $x_1 + a$: no distance formula needed.`,
    formal: t`**The parametric point.** For every real $t$, $P(at^2, 2at)$ lies on $y^2 = 4ax$, since $(2at)^2 = 4a \cdot at^2$. So $x = at^2$, $y = 2at$ are the parametric equations, and $t$ is the **parameter** of $P$.

**The parameter of a point** $(x_1, y_1)$: from $y_1 = 2at$, $t = \dfrac{y_1}{2a}$. Use $y$, not $x$: $x_1 = at^2$ fixes only $t^2$ and loses the sign. $t$ has the sign of $y_1$.

**Focal distance.** $SP = PM$, the distance from $P$ to the directrix $x = -a$. So $$SP = a + x_1 = a(1 + t^2).$$

**Points with focal distance $d$:** $x_1 = d - a$, then $y_1^2 = 4ax_1$ gives two points $(x_1, \pm y_1)$, mirror images in the axis.

**First read $a$ correctly.** Make the coefficient of $y^2$ equal to 1, then compare the coefficient of $x$ with $4a$: $5y^2 = 24x$ is $y^2 = \frac{24}{5}x$, so $4a = \frac{24}{5}$ and $a = \frac{6}{5}$.`,
    worked: {
      prompt: t`Find the point on the parabola $y^2 = 12x$ whose parameter is $t = -3$, and its focal distance.`,
      steps: [
        t`Compare with $y^2 = 4ax$: $4a = 12$, so $a = 3$. The focus is $S(3, 0)$ and the directrix is $x = -3$.`,
        t`The point is $(at^2, 2at)$: $x = 3 \cdot 9 = 27$ and $y = 2 \cdot 3 \cdot (-3) = -18$. So $P = (27, -18)$, below the axis because $t < 0$.`,
        t`Focal distance: $SP = PM = a + x_1 = 3 + 27 = 30$.`,
        t`Check with the distance formula: $SP = \sqrt{(27 - 3)^2 + (-18)^2} = \sqrt{576 + 324} = \sqrt{900} = 30$.`,
      ],
      answer: t`$P = (27, -18)$, and its focal distance is $30$.`,
      figure: {
        alt: "The parabola y² = 12x with focus S(3, 0) and the dashed directrix x = −3. The point P(27, −18), for t = −3, is below the axis. The dashed segment PM to the directrix is 30 long, and the segment SP to the focus is also 30.",
        axes: "xy",
        view: { x: [-7, 33], y: [-22, 21] },
        elements: [
          { kind: "curve", points: [[31.688, -19.5], [29.61, -18.85], [27.603, -18.2], [25.667, -17.55], [23.801, -16.9], [22.005, -16.25], [20.28, -15.6], [18.625, -14.95], [17.041, -14.3], [15.527, -13.65], [14.083, -13], [12.71, -12.35], [11.407, -11.7], [10.175, -11.05], [9.013, -10.4], [7.922, -9.75], [6.901, -9.1], [5.95, -8.45], [5.07, -7.8], [4.26, -7.15], [3.521, -6.5], [2.852, -5.85], [2.253, -5.2], [1.725, -4.55], [1.267, -3.9], [0.88, -3.25], [0.563, -2.6], [0.317, -1.95], [0.141, -1.3], [0.035, -0.65], [0, 0], [0.035, 0.65], [0.141, 1.3], [0.317, 1.95], [0.563, 2.6], [0.88, 3.25], [1.267, 3.9], [1.725, 4.55], [2.253, 5.2], [2.852, 5.85], [3.521, 6.5], [4.26, 7.15], [5.07, 7.8], [5.95, 8.45], [6.901, 9.1], [7.922, 9.75], [9.013, 10.4], [10.175, 11.05], [11.408, 11.7], [12.71, 12.35], [14.083, 13], [15.527, 13.65], [17.041, 14.3], [18.625, 14.95], [20.28, 15.6], [22.005, 16.25], [23.801, 16.9], [25.667, 17.55], [27.603, 18.2], [29.61, 18.85], [31.688, 19.5]] },
          { kind: "label", at: [30, 15], label: "y² = 12x", labelAt: "s" },
          { kind: "line", through: [[-3, 0], [-3, 1]], tone: "muted", dashed: true, step: 1 },
          { kind: "label", at: [-3, 17], label: "x = −3", labelAt: "w", tone: "muted", step: 1 },
          { kind: "point", at: [3, 0], label: "S(3, 0)", labelAt: "ne", step: 1 },
          { kind: "point", at: [27, -18], step: 2 },
          { kind: "label", at: [27, -18.7], label: "P(27, −18)", labelAt: "sw", step: 2 },
          { kind: "segment", from: [-3, -18], to: [27, -18], tone: "good", dashed: true, step: 3 },
          { kind: "point", at: [-3, -18], label: "M", labelAt: "w", step: 3 },
          { kind: "label", at: [10, -18], label: "PM = 30", labelAt: "n", tone: "good", step: 3 },
          { kind: "segment", from: [3, 0], to: [27, -18], tone: "good", step: 4 },
          { kind: "label", at: [15, -9], label: "SP = 30", labelAt: "ne", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The parabola y² = 4x with focus S(1, 0) and the dashed directrix x = −1. The point P(4, 4) has parameter t = 2 and the point Q(1, −2) has parameter t = −1, below the axis. From P, the segment PM to M(−1, 4) on the directrix and the segment SP to the focus are both 5 long.",
      axes: "xy",
      view: { x: [-3.5, 8], y: [-5.5, 5.5] },
      elements: [
        { kind: "curve", points: [[6.76, -5.2], [6.317, -5.027], [5.889, -4.853], [5.476, -4.68], [5.078, -4.507], [4.694, -4.333], [4.326, -4.16], [3.973, -3.987], [3.635, -3.813], [3.312, -3.64], [3.004, -3.467], [2.712, -3.293], [2.434, -3.12], [2.171, -2.947], [1.923, -2.773], [1.69, -2.6], [1.472, -2.427], [1.269, -2.253], [1.082, -2.08], [0.909, -1.907], [0.751, -1.733], [0.608, -1.56], [0.481, -1.387], [0.368, -1.213], [0.27, -1.04], [0.188, -0.867], [0.12, -0.693], [0.068, -0.52], [0.03, -0.347], [0.008, -0.173], [0, 0], [0.008, 0.173], [0.03, 0.347], [0.068, 0.52], [0.12, 0.693], [0.188, 0.867], [0.27, 1.04], [0.368, 1.213], [0.481, 1.387], [0.608, 1.56], [0.751, 1.733], [0.909, 1.907], [1.082, 2.08], [1.269, 2.253], [1.472, 2.427], [1.69, 2.6], [1.923, 2.773], [2.171, 2.947], [2.434, 3.12], [2.712, 3.293], [3.004, 3.467], [3.312, 3.64], [3.635, 3.813], [3.973, 3.987], [4.326, 4.16], [4.694, 4.333], [5.078, 4.507], [5.476, 4.68], [5.889, 4.853], [6.317, 5.027], [6.76, 5.2]], step: 1 },
        { kind: "label", at: [7.6, -4.4], label: "y² = 4x", labelAt: "w", step: 1 },
        { kind: "line", through: [[-1, 0], [-1, 1]], tone: "muted", dashed: true, step: 1 },
        { kind: "label", at: [-1, -4.8], label: "x = −1", labelAt: "w", tone: "muted", step: 1 },
        { kind: "point", at: [1, 0], step: 1 },
        { kind: "label", at: [1, -0.55], label: "S(1, 0)", labelAt: "se", step: 1 },
        { kind: "point", at: [4, 4], label: "P(4, 4), t = 2", labelAt: "se", step: 2 },
        { kind: "point", at: [1, -2], label: "Q(1, −2), t = −1", labelAt: "ne", step: 2 },
        { kind: "segment", from: [-1, 4], to: [4, 4], tone: "good", dashed: true, step: 3 },
        { kind: "point", at: [-1, 4], label: "M(−1, 4)", labelAt: "w", step: 3 },
        { kind: "label", at: [1.5, 4], label: "PM = 5", labelAt: "n", tone: "good", step: 3 },
        { kind: "segment", from: [1, 0], to: [4, 4], tone: "good", step: 3 },
        { kind: "label", at: [2.5, 2], label: "SP = 5", labelAt: "se", tone: "good", step: 3 },
      ],
    },
    visualSpec: t`Drag the parameter $t$ to slide $P(at^2, 2at)$ along $y^2 = 4ax$; the segments $SP$ and $PM$ to the directrix stay equal, and a readout shows $SP = a + x_1 = a(1 + t^2)$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes the focal distance as the abscissa $x_1$ alone: the distance to the $y$-axis, not to the directrix`,
      remediation: t`The focal distance equals the distance to the directrix $x = -a$, which is $x_1 + a$. So $SP = a + x_1$, never just $x_1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: t`Reads $a$ as the whole coefficient of $x$: $y^2 = 12x$ taken as $a = 12$`,
      remediation: t`Compare with $y^2 = 4ax$: the coefficient of $x$ is $4a$, so divide it by $4$. For $y^2 = 12x$, $4a = 12$ and $a = 3$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M3",
      mistake: t`Compares before making the coefficient of $y^2$ equal to 1: $3y^2 = 16x$ read as $4a = 16$`,
      remediation: t`First divide through so the equation starts with $y^2$: $3y^2 = 16x$ is $y^2 = \frac{16}{3}x$, so $4a = \frac{16}{3}$ and $a = \frac{4}{3}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: t`Finds $t$ from $x_1 = at^2$ and keeps only the positive root`,
      remediation: t`$x_1 = at^2$ fixes only $t^2$. Use $y_1 = 2at$, so $t = \frac{y_1}{2a}$: the parameter has the same sign as $y_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Writes the parametric point the other way round, as $(2at, at^2)$`,
      remediation: t`On $y^2 = 4ax$ the squared coordinate is $y$, so $y = 2at$ and $x = at^2$: the point is $(at^2, 2at)$. Check: $(2at)^2 = 4a \cdot at^2$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M6",
      mistake: t`Takes the directrix as $x = a$, on the same side as the focus, so the focal distance comes out as $|x_1 - a|$`,
      remediation: t`The focus $S(a, 0)$ and the directrix $x = -a$ are on opposite sides of the vertex. A point's distance to the directrix is $x_1 + a$, so $SP = a + x_1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M4 (positive root) gives the key when $y_1 > 0$; its model applies only to points below the axis.`,
    t`C04-M3 needs a coefficient of $y^2$ other than 1; on $y^2 = cx$ it is the key.`,
    t`C04-M5 gives the key for the point when $t = 2$ (then $at^2 = 2at$); avoid $t = 0$ and $t = 2$ when diagnosing it.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q8(ii)" },
      stem: t`The point on the parabola $2y^2 = 7x$ whose parameter is $t = -2$ is:`,
      verify: { kind: "value", inputs: { k: "2", c: "7", t: "-2" }, params: { ask: "point" } },
      options: [
        { key: "A", text: t`$(14, -14)$`, correct: false, misconceptionId: "C04-M2", value: "(14, -14)" },
        { key: "B", text: t`$(7, -7)$`, correct: false, misconceptionId: "C04-M3", value: "(7, -7)" },
        { key: "C", text: t`$\left(\frac{7}{2}, -\frac{7}{2}\right)$`, correct: true, value: "(7/2, -7/2)" },
        { key: "D", text: t`$\left(-\frac{7}{2}, \frac{7}{2}\right)$`, correct: false, misconceptionId: "C04-M5", value: "(-7/2, 7/2)" },
      ],
      solution: {
        steps: [
          t`Make the coefficient of $y^2$ equal to 1: $y^2 = \frac{7}{2}x$. Then $4a = \frac{7}{2}$, so $a = \frac{7}{8}$.`,
          t`The point is $(at^2, 2at)$ with $t = -2$: $x = \frac{7}{8} \cdot 4 = \frac{7}{2}$ and $y = 2 \cdot \frac{7}{8} \cdot (-2) = -\frac{7}{2}$.`,
          t`Check: $2\left(-\frac{7}{2}\right)^2 = \frac{49}{2} = 7 \cdot \frac{7}{2}$. The point is $\left(\frac{7}{2}, -\frac{7}{2}\right)$.`,
        ],
        figure: {
          alt: "The parabola 2y² = 7x, which is y² = (7/2)x, with focus S(7/8, 0) and the dashed directrix x = −7/8. The point P(7/2, −7/2), for t = −2, is below the axis.",
          axes: "xy",
          view: { x: [-3, 5.5], y: [-4.5, 4.5] },
          elements: [
            { kind: "curve", points: [[5.04, -4.2], [4.71, -4.06], [4.39, -3.92], [4.082, -3.78], [3.786, -3.64], [3.5, -3.5], [3.226, -3.36], [2.962, -3.22], [2.71, -3.08], [2.47, -2.94], [2.24, -2.8], [2.022, -2.66], [1.814, -2.52], [1.618, -2.38], [1.434, -2.24], [1.26, -2.1], [1.098, -1.96], [0.946, -1.82], [0.806, -1.68], [0.678, -1.54], [0.56, -1.4], [0.454, -1.26], [0.358, -1.12], [0.274, -0.98], [0.202, -0.84], [0.14, -0.7], [0.09, -0.56], [0.05, -0.42], [0.022, -0.28], [0.006, -0.14], [0, 0], [0.006, 0.14], [0.022, 0.28], [0.05, 0.42], [0.09, 0.56], [0.14, 0.7], [0.202, 0.84], [0.274, 0.98], [0.358, 1.12], [0.454, 1.26], [0.56, 1.4], [0.678, 1.54], [0.806, 1.68], [0.946, 1.82], [1.098, 1.96], [1.26, 2.1], [1.434, 2.24], [1.618, 2.38], [1.814, 2.52], [2.022, 2.66], [2.24, 2.8], [2.47, 2.94], [2.71, 3.08], [2.962, 3.22], [3.226, 3.36], [3.5, 3.5], [3.786, 3.64], [4.082, 3.78], [4.39, 3.92], [4.71, 4.06], [5.04, 4.2]] },
            { kind: "label", at: [5.3, 3.2], label: "2y² = 7x", labelAt: "s" },
            { kind: "line", through: [[-0.875, 0], [-0.875, 1]], tone: "muted", dashed: true, step: 1 },
            { kind: "label", at: [-0.875, 3.9], label: "x = −7/8", labelAt: "w", tone: "muted", step: 1 },
            { kind: "point", at: [0.875, 0], step: 1 },
            { kind: "label", at: [0.875, 0.25], label: "S(7/8, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [3.5, -3.5], label: "P(7/2, −7/2)", labelAt: "sw", tone: "good", step: 2 },
            { kind: "label", at: [3.5, -3.5], label: "t = −2", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q8(i)" },
      stem: t`The focal distance of the point on the parabola $y^2 = 12x$ whose parameter is $t = \frac{1}{3}$ is:`,
      verify: { kind: "value", inputs: { k: "1", c: "12", t: "1/3" }, params: { ask: "sp_t" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C04-M1", value: "1/3" },
        { key: "B", text: t`$\frac{8}{3}$`, correct: false, misconceptionId: "C04-M6", value: "8/3" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C04-M5", value: "5" },
        { key: "D", text: t`$\frac{10}{3}$`, correct: true, value: "10/3" },
      ],
      solution: {
        steps: [
          t`$4a = 12$, so $a = 3$. With $t = \frac{1}{3}$: $x_1 = at^2 = \frac{1}{3}$ and $y_1 = 2at = 2$, so $P = \left(\frac{1}{3}, 2\right)$.`,
          t`The directrix is $x = -3$, so $SP = PM = a + x_1 = 3 + \frac{1}{3} = \frac{10}{3}$, the same as $a(1 + t^2) = 3 \cdot \frac{10}{9}$.`,
        ],
        figure: {
          alt: "The parabola y² = 12x with focus S(3, 0) and the dashed directrix x = −3. The point P(1/3, 2), for t = 1/3, is close to the vertex. The dashed segment PM to M(−3, 2) on the directrix and the segment SP are both 10/3 long.",
          axes: "xy",
          view: { x: [-4.5, 5], y: [-4.5, 4.5] },
          elements: [
            { kind: "curve", points: [[1.613, -4.4], [1.508, -4.253], [1.405, -4.107], [1.307, -3.96], [1.212, -3.813], [1.12, -3.667], [1.033, -3.52], [0.948, -3.373], [0.868, -3.227], [0.791, -3.08], [0.717, -2.933], [0.647, -2.787], [0.581, -2.64], [0.518, -2.493], [0.459, -2.347], [0.403, -2.2], [0.351, -2.053], [0.303, -1.907], [0.258, -1.76], [0.217, -1.613], [0.179, -1.467], [0.145, -1.32], [0.115, -1.173], [0.088, -1.027], [0.065, -0.88], [0.045, -0.733], [0.029, -0.587], [0.016, -0.44], [0.007, -0.293], [0.002, -0.147], [0, 0], [0.002, 0.147], [0.007, 0.293], [0.016, 0.44], [0.029, 0.587], [0.045, 0.733], [0.065, 0.88], [0.088, 1.027], [0.115, 1.173], [0.145, 1.32], [0.179, 1.467], [0.217, 1.613], [0.258, 1.76], [0.303, 1.907], [0.351, 2.053], [0.403, 2.2], [0.459, 2.347], [0.518, 2.493], [0.581, 2.64], [0.647, 2.787], [0.717, 2.933], [0.791, 3.08], [0.868, 3.227], [0.948, 3.373], [1.033, 3.52], [1.12, 3.667], [1.212, 3.813], [1.307, 3.96], [1.405, 4.107], [1.508, 4.253], [1.613, 4.4]] },
            { kind: "label", at: [1.6, -3.4], label: "y² = 12x", labelAt: "e" },
            { kind: "line", through: [[-3, 0], [-3, 1]], tone: "muted", dashed: true, step: 1 },
            { kind: "label", at: [-3, -3.9], label: "x = −3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [3, 0], label: "S(3, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [0.333, 2], step: 1 },
            { kind: "label", at: [0.9, 2.3], label: "P(1/3, 2)", labelAt: "e", step: 1 },
            { kind: "segment", from: [-3, 2], to: [0.333, 2], tone: "good", dashed: true, step: 2 },
            { kind: "point", at: [-3, 2], label: "M", labelAt: "nw", step: 2 },
            { kind: "label", at: [-1.5, 2], label: "PM = 10/3", labelAt: "n", tone: "good", step: 2 },
            { kind: "segment", from: [3, 0], to: [0.333, 2], tone: "good", step: 2 },
            { kind: "label", at: [1.9, 0.8], label: "SP = 10/3", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q6(ii)" },
      stem: t`For the parabola $3y^2 = 16x$, the parameter of the point $(27, -12)$ is:`,
      verify: { kind: "value", inputs: { k: "3", c: "16", px: "27", py: "-12" }, params: { ask: "t" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C04-M3", value: "-3/2" },
        { key: "B", text: t`$- \frac{9}{8}$`, correct: false, misconceptionId: "C04-M2", value: "-9/8" },
        { key: "C", text: t`$- \frac{9}{2}$`, correct: true, value: "-9/2" },
        { key: "D", text: t`$\frac{9}{2}$`, correct: false, misconceptionId: "C04-M4", value: "9/2" },
      ],
      solution: {
        steps: [
          t`Divide by 3: $y^2 = \frac{16}{3}x$, so $4a = \frac{16}{3}$ and $a = \frac{4}{3}$.`,
          t`Use $y = 2at$: $-12 = \frac{8}{3}t$, so $t = -\frac{9}{2}$. It is negative because the point is below the axis.`,
          t`Check with $x = at^2$: $\frac{4}{3} \cdot \frac{81}{4} = 27$. The parameter is $-\frac{9}{2}$.`,
        ],
        figure: {
          alt: "The parabola 3y² = 16x, which is y² = (16/3)x, with focus S(4/3, 0). The point P(27, −12) is below the axis, so its parameter t = −9/2 is negative.",
          axes: "xy",
          view: { x: [-4, 32], y: [-15, 15] },
          elements: [
            { kind: "curve", points: [[31.688, -13], [29.61, -12.567], [27.603, -12.133], [25.667, -11.7], [23.801, -11.267], [22.005, -10.833], [20.28, -10.4], [18.625, -9.967], [17.041, -9.533], [15.527, -9.1], [14.083, -8.667], [12.71, -8.233], [11.408, -7.8], [10.175, -7.367], [9.013, -6.933], [7.922, -6.5], [6.901, -6.067], [5.95, -5.633], [5.07, -5.2], [4.26, -4.767], [3.521, -4.333], [2.852, -3.9], [2.253, -3.467], [1.725, -3.033], [1.267, -2.6], [0.88, -2.167], [0.563, -1.733], [0.317, -1.3], [0.141, -0.867], [0.035, -0.433], [0, 0], [0.035, 0.433], [0.141, 0.867], [0.317, 1.3], [0.563, 1.733], [0.88, 2.167], [1.267, 2.6], [1.725, 3.033], [2.253, 3.467], [2.852, 3.9], [3.521, 4.333], [4.26, 4.767], [5.07, 5.2], [5.95, 5.633], [6.901, 6.067], [7.922, 6.5], [9.013, 6.933], [10.175, 7.367], [11.408, 7.8], [12.71, 8.233], [14.083, 8.667], [15.527, 9.1], [17.041, 9.533], [18.625, 9.967], [20.28, 10.4], [22.005, 10.833], [23.801, 11.267], [25.667, 11.7], [27.603, 12.133], [29.61, 12.567], [31.688, 13]] },
            { kind: "label", at: [27, 9], label: "3y² = 16x", labelAt: "s" },
            { kind: "point", at: [1.333, 0], label: "S(4/3, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [27, -12], label: "P(27, −12)", labelAt: "sw", step: 2 },
            { kind: "label", at: [27, -12], label: "t = −9/2", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q7" },
      stem: t`A point $P$ (not the vertex) on the parabola $y^2 = 16x$ has its ordinate equal to $4$ times its abscissa. The focal distance of $P$ is:`,
      verify: { kind: "value", inputs: { k: "1", c: "16", r: "4" }, params: { ask: "sp_ratio" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C04-M1", value: "1" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C04-M6", value: "3" },
        { key: "C", text: t`$17$`, correct: false, misconceptionId: "C04-M2", value: "17" },
        { key: "D", text: t`$5$`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`Put $y = 4x$ in $y^2 = 16x$: $16x^2 = 16x$, so $x = 0$ (the vertex) or $x = 1$. So $P = (1, 4)$.`,
          t`$4a = 16$, so $a = 4$: the focus is $S(4, 0)$ and the directrix is $x = -4$.`,
          t`$SP = PM = a + x_1 = 4 + 1 = 5$. Check: $\sqrt{(1 - 4)^2 + 4^2} = 5$.`,
        ],
        figure: {
          alt: "The parabola y² = 16x with focus S(4, 0) and the dashed directrix x = −4. The line y = 4x meets it at the vertex and at P(1, 4). The dashed segment PM to the directrix and the segment SP are both 5 long.",
          axes: "xy",
          view: { x: [-6, 6.5], y: [-6, 6.5] },
          elements: [
            { kind: "curve", points: [[2.25, -6], [2.103, -5.8], [1.96, -5.6], [1.823, -5.4], [1.69, -5.2], [1.562, -5], [1.44, -4.8], [1.322, -4.6], [1.21, -4.4], [1.102, -4.2], [1, -4], [0.902, -3.8], [0.81, -3.6], [0.722, -3.4], [0.64, -3.2], [0.562, -3], [0.49, -2.8], [0.423, -2.6], [0.36, -2.4], [0.303, -2.2], [0.25, -2], [0.203, -1.8], [0.16, -1.6], [0.122, -1.4], [0.09, -1.2], [0.062, -1], [0.04, -0.8], [0.022, -0.6], [0.01, -0.4], [0.002, -0.2], [0, 0], [0.003, 0.2], [0.01, 0.4], [0.023, 0.6], [0.04, 0.8], [0.063, 1], [0.09, 1.2], [0.123, 1.4], [0.16, 1.6], [0.203, 1.8], [0.25, 2], [0.303, 2.2], [0.36, 2.4], [0.423, 2.6], [0.49, 2.8], [0.562, 3], [0.64, 3.2], [0.722, 3.4], [0.81, 3.6], [0.902, 3.8], [1, 4], [1.102, 4.2], [1.21, 4.4], [1.322, 4.6], [1.44, 4.8], [1.562, 5], [1.69, 5.2], [1.822, 5.4], [1.96, 5.6], [2.102, 5.8], [2.25, 6]] },
            { kind: "label", at: [3.1, -5], label: "y² = 16x", labelAt: "e" },
            { kind: "line", through: [[0, 0], [1, 4]], tone: "muted", step: 1 },
            { kind: "label", at: [-0.9, -3.6], label: "y = 4x", labelAt: "w", tone: "muted", step: 1 },
            { kind: "point", at: [1, 4], step: 1 },
            { kind: "label", at: [1.3, 4.25], label: "P(1, 4)", labelAt: "e", step: 1 },
            { kind: "line", through: [[-4, 0], [-4, 1]], tone: "muted", dashed: true, step: 2 },
            { kind: "label", at: [-4, -5.3], label: "x = −4", labelAt: "e", tone: "muted", step: 2 },
            { kind: "point", at: [4, 0], label: "S(4, 0)", labelAt: "ne", step: 2 },
            { kind: "segment", from: [-4, 4], to: [1, 4], tone: "good", dashed: true, step: 3 },
            { kind: "label", at: [-2.2, 4], label: "PM = 5", labelAt: "n", tone: "good", step: 3 },
            { kind: "segment", from: [4, 0], to: [1, 4], tone: "good", step: 3 },
            { kind: "label", at: [2.5, 2], label: "SP = 5", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q9" },
      stem: t`The points on the parabola $y^2 = 4x$ whose focal distance is $17$ are:`,
      verify: { kind: "value", inputs: { k: "1", c: "4", d: "17" }, params: { ask: "pts" } },
      options: [
        { key: "A", text: t`$(13, \pm 2\sqrt{13})$`, correct: false, misconceptionId: "C04-M2", value: "{(13, -2*sqrt(13)), (13, 2*sqrt(13))}" },
        { key: "B", text: t`$(16, \pm 8)$`, correct: true, value: "{(16, -8), (16, 8)}" },
        { key: "C", text: t`$(17, \pm 2\sqrt{17})$`, correct: false, misconceptionId: "C04-M1", value: "{(17, -2*sqrt(17)), (17, 2*sqrt(17))}" },
        { key: "D", text: t`$(18, \pm 6\sqrt{2})$`, correct: false, misconceptionId: "C04-M6", value: "{(18, -6*sqrt(2)), (18, 6*sqrt(2))}" },
      ],
      solution: {
        steps: [
          t`$4a = 4$, so $a = 1$ and the directrix is $x = -1$. The focal distance is $a + x_1 = 17$, so $x_1 = 16$.`,
          t`$y_1^2 = 4 \cdot 16 = 64$, so $y_1 = \pm 8$: two points, mirror images in the axis, $(16, \pm 8)$.`,
        ],
        figure: {
          alt: "The parabola y² = 4x with focus S(1, 0) and the dashed directrix x = −1. The points (16, 8) and (16, −8) are each 17 from the directrix, so each has focal distance 17.",
          axes: "xy",
          view: { x: [-3, 20], y: [-10, 10] },
          elements: [
            { kind: "curve", points: [[22.09, -9.4], [20.642, -9.087], [19.243, -8.773], [17.893, -8.46], [16.592, -8.147], [15.34, -7.833], [14.138, -7.52], [12.984, -7.207], [11.88, -6.893], [10.824, -6.58], [9.818, -6.267], [8.861, -5.953], [7.952, -5.64], [7.093, -5.327], [6.283, -5.013], [5.523, -4.7], [4.811, -4.387], [4.148, -4.073], [3.534, -3.76], [2.97, -3.447], [2.454, -3.133], [1.988, -2.82], [1.571, -2.507], [1.203, -2.193], [0.884, -1.88], [0.614, -1.567], [0.393, -1.253], [0.221, -0.94], [0.098, -0.627], [0.025, -0.313], [0, 0], [0.025, 0.313], [0.098, 0.627], [0.221, 0.94], [0.393, 1.253], [0.614, 1.567], [0.884, 1.88], [1.203, 2.193], [1.571, 2.507], [1.988, 2.82], [2.454, 3.133], [2.97, 3.447], [3.534, 3.76], [4.148, 4.073], [4.811, 4.387], [5.523, 4.7], [6.283, 5.013], [7.093, 5.327], [7.952, 5.64], [8.861, 5.953], [9.818, 6.267], [10.824, 6.58], [11.88, 6.893], [12.984, 7.207], [14.138, 7.52], [15.34, 7.833], [16.592, 8.147], [17.893, 8.46], [19.243, 8.773], [20.642, 9.087], [22.09, 9.4]] },
            { kind: "label", at: [9, -3], label: "y² = 4x", labelAt: "e" },
            { kind: "line", through: [[-1, 0], [-1, 1]], tone: "muted", dashed: true, step: 1 },
            { kind: "point", at: [1, 0], label: "S(1, 0)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-1, 8], to: [16, 8], tone: "good", dashed: true, step: 2 },
            { kind: "label", at: [7.5, 8], label: "PM = 17", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [16, 8], label: "(16, 8)", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [-1, -8], to: [16, -8], tone: "good", dashed: true, step: 2 },
            { kind: "point", at: [16, -8], label: "(16, −8)", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc II Q3" },
      stem: t`The points on the parabola $y^2 = 8x$ whose focal distance is $10$ are:`,
      verify: { kind: "value", inputs: { k: "1", c: "8", d: "10" }, params: { ask: "pts" } },
      options: [
        { key: "A", text: t`$(8, \pm 8)$`, correct: true, value: "{(8, -8), (8, 8)}" },
        { key: "B", text: t`$(10, \pm 4\sqrt{5})$`, correct: false, misconceptionId: "C04-M1", value: "{(10, -4*sqrt(5)), (10, 4*sqrt(5))}" },
        { key: "C", text: t`$(12, \pm 4\sqrt{6})$`, correct: false, misconceptionId: "C04-M6", value: "{(12, -4*sqrt(6)), (12, 4*sqrt(6))}" },
        { key: "D", text: t`$(2, \pm 4)$`, correct: false, misconceptionId: "C04-M2", value: "{(2, -4), (2, 4)}" },
      ],
      solution: {
        steps: [
          t`$4a = 8$, so $a = 2$ and the directrix is $x = -2$. The focal distance is $a + x_1 = 10$, so $x_1 = 8$.`,
          t`$y_1^2 = 8 \cdot 8 = 64$, so $y_1 = \pm 8$: the points are $(8, \pm 8)$. Check: $\sqrt{(8 - 2)^2 + 8^2} = 10$.`,
        ],
        figure: {
          alt: "The parabola y² = 8x with focus S(2, 0) and the dashed directrix x = −2. The points (8, 8) and (8, −8) are each 10 from the directrix, so each has focal distance 10.",
          axes: "xy",
          view: { x: [-4, 12.5], y: [-10, 10] },
          elements: [
            { kind: "curve", points: [[11.045, -9.4], [10.321, -9.087], [9.621, -8.773], [8.946, -8.46], [8.296, -8.147], [7.67, -7.833], [7.069, -7.52], [6.492, -7.207], [5.94, -6.893], [5.412, -6.58], [4.909, -6.267], [4.43, -5.953], [3.976, -5.64], [3.547, -5.327], [3.142, -5.013], [2.761, -4.7], [2.405, -4.387], [2.074, -4.073], [1.767, -3.76], [1.485, -3.447], [1.227, -3.133], [0.994, -2.82], [0.785, -2.507], [0.601, -2.193], [0.442, -1.88], [0.307, -1.567], [0.196, -1.253], [0.11, -0.94], [0.049, -0.627], [0.012, -0.313], [0, 0], [0.012, 0.313], [0.049, 0.627], [0.11, 0.94], [0.196, 1.253], [0.307, 1.567], [0.442, 1.88], [0.601, 2.193], [0.785, 2.507], [0.994, 2.82], [1.227, 3.133], [1.485, 3.447], [1.767, 3.76], [2.074, 4.073], [2.405, 4.387], [2.761, 4.7], [3.142, 5.013], [3.547, 5.327], [3.976, 5.64], [4.43, 5.953], [4.909, 6.267], [5.412, 6.58], [5.94, 6.893], [6.492, 7.207], [7.069, 7.52], [7.67, 7.833], [8.296, 8.147], [8.946, 8.46], [9.621, 8.773], [10.321, 9.087], [11.045, 9.4]] },
            { kind: "label", at: [6, -3], label: "y² = 8x", labelAt: "e" },
            { kind: "line", through: [[-2, 0], [-2, 1]], tone: "muted", dashed: true, step: 1 },
            { kind: "point", at: [2, 0], label: "S(2, 0)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-2, 8], to: [8, 8], tone: "good", dashed: true, step: 2 },
            { kind: "label", at: [3, 8], label: "PM = 10", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [8, 8], label: "(8, 8)", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [-2, -8], to: [8, -8], tone: "good", dashed: true, step: 2 },
            { kind: "point", at: [8, -8], label: "(8, −8)", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
