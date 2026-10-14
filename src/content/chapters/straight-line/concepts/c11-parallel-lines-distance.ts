import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Asha says the distance between $3x + 4y + 2 = 0$ and $6x + 8y + 9 = 0$ is $\frac{|2 - 9|}{5} = \frac{7}{5}$. **Is she right?**`,
    reveal: t`No. Halve the second equation: it is the same line, $3x + 4y + \frac{9}{2} = 0$, but now its constant is $\frac{9}{2}$, not $9$. With matching coefficients, $d = \frac{|2 - \frac{9}{2}|}{5} = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: t`Two parallel lines never get closer or further apart. Stand anywhere on one line and drop a perpendicular to the other: it always has the same length, and that length is the distance between the lines. So the distance is the distance of one point from a line, and working that out once for $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$ gives a short formula. It needs both equations written with the **same** $a$ and $b$.`,
    formal: t`**Distance between parallel lines**

For $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$:

$$d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$$

**Why it works.** The point $\left(0, -\frac{c_1}{b}\right)$ lies on the first line. Its distance from the second is $\frac{|-c_1 + c_2|}{\sqrt{a^2 + b^2}}$. (If $b = 0$, use $\left(-\frac{c_1}{a}, 0\right)$.)

**Match the coefficients first.** For $x + 2y - 3 = 0$ and $2x + 4y + 1 = 0$, double the first: $2x + 4y - 6 = 0$. Then $d = \frac{|-6 - 1|}{\sqrt{20}} = \frac{7}{2\sqrt{5}}$.

**Lines as $y = mx + c$.** Write $y = mx + c_1$ as $mx - y + c_1 = 0$, so $d = \frac{|c_1 - c_2|}{\sqrt{m^2 + 1}}$. The plain gap $|c_1 - c_2|$ is the vertical gap, which is longer.`,
    worked: {
      prompt: t`Find the distance between the parallel lines $2x + 3y - 4 = 0$ and $4x + 6y + 5 = 0$.`,
      steps: [
        t`Make the $x$ and $y$ coefficients equal: double the first line to get $4x + 6y - 8 = 0$. Now $a = 4$, $b = 6$, $c_1 = -8$, $c_2 = 5$.`,
        t`$\sqrt{a^2 + b^2} = \sqrt{16 + 36} = \sqrt{52} = 2\sqrt{13}$.`,
        t`$d = \frac{|-8 - 5|}{2\sqrt{13}} = \frac{13}{2\sqrt{13}} = \frac{\sqrt{13}}{2}$.`,
        t`Check: the perpendicular from $(5, -2)$ on the first line meets the second at $\left(4, -\frac{7}{2}\right)$, and $\sqrt{1^2 + \left(\frac{3}{2}\right)^2} = \frac{\sqrt{13}}{2}$.`,
      ],
      answer: t`$d = \frac{\sqrt{13}}{2}$.`,
      figure: {
        alt: "The parallel lines 2x + 3y − 4 = 0 and 4x + 6y + 5 = 0. The perpendicular from (5, −2) on the first line meets the second at (4, −3.5); its length is √13/2, the distance between the lines.",
        axes: "xy",
        view: { x: [-5, 7], y: [-4.5, 2.5] },
        elements: [
          { kind: "line", through: [[0, 1.333], [1, 0.667]] },
          { kind: "label", at: [0.8, 1.3], label: "2x + 3y − 4 = 0", labelAt: "ne" },
          { kind: "line", through: [[0, -0.833], [1, -1.5]], tone: "muted" },
          { kind: "label", at: [-1, -0.9], label: "4x + 6y + 5 = 0", labelAt: "sw", tone: "muted" },
          { kind: "segment", from: [5, -2], to: [4, -3.5], tone: "good", step: 3 },
          { kind: "label", at: [1.75, -1.7], label: "d = √13/2", labelAt: "e", tone: "good", step: 3 },
          { kind: "point", at: [5, -2], step: 4, label: "(5, −2)", labelAt: "ne" },
          { kind: "point", at: [4, -3.5], step: 4, label: "(4, −3.5)", labelAt: "sw" },
        ],
      },
    },
    figure: {
      alt: "Two parallel lines, 3x + 4y − 12 = 0 and 3x + 4y + 3 = 0. Perpendiculars dropped from (4, 0) and from (0, 3) on the first line to the second line both have length 3: the gap is the same wherever you start.",
      axes: "xy",
      view: { x: [-3.5, 5.5], y: [-3.5, 4.5] },
      elements: [
        { kind: "line", through: [[0, 3], [1, 2.25]], step: 1 },
        { kind: "label", at: [3.6, 1.6], label: "3x + 4y − 12 = 0", labelAt: "ne", step: 1 },
        { kind: "line", through: [[0, -0.75], [1, -1.5]], tone: "muted", step: 2 },
        { kind: "label", at: [-2.9, -1], label: "3x + 4y + 3 = 0", labelAt: "sw", tone: "muted", step: 2 },
        { kind: "point", at: [4, 0], step: 3, label: "(4, 0)", labelAt: "ne" },
        { kind: "segment", from: [4, 0], to: [2.2, -2.4], tone: "good", step: 3 },
        { kind: "label", at: [3, -1.2], label: "3", labelAt: "nw", tone: "good", step: 3 },
        { kind: "point", at: [0, 3], step: 4, label: "(0, 3)", labelAt: "ne" },
        { kind: "segment", from: [0, 3], to: [-1.8, 0.6], tone: "good", step: 4 },
        { kind: "label", at: [-1, 1.8], label: "3", labelAt: "nw", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag a point along one line: the perpendicular to the other line follows it and its length stays fixed at $d$. A slider multiplies one equation by $k$: its coefficients change, the line does not.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Using $|c_1 - c_2|$ with the constants as written, without first making the $x$ and $y$ coefficients equal`,
      remediation: t`Multiplying an equation by a number gives the same line but changes $c$. Rewrite one line so both have the same $a$ and $b$, then use $\frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M2",
      mistake: t`Taking the vertical gap between the lines (the difference of their $y$-intercepts) as the distance`,
      remediation: t`The distance between two lines is measured along a perpendicular, the shortest way across. The gap between the $y$-intercepts cuts across at a slant and is longer; use $\frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M3",
      mistake: t`Dividing by $a^2 + b^2$ instead of $\sqrt{a^2 + b^2}$`,
      remediation: t`The denominator is $\sqrt{a^2 + b^2}$, as in the distance of a point from a line. Take the square root before you divide.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: t`Adding the lines' distances from the origin, $\frac{|c_1| + |c_2|}{\sqrt{a^2 + b^2}}$, when the origin is on the same side of both`,
      remediation: t`When $c_1$ and $c_2$ have the same sign, the origin is on the same side of both lines, so their distances from it subtract. The formula's $|c_1 - c_2|$ takes care of this.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M5",
      mistake: t`Stopping at $|c_1 - c_2|$ without dividing by $\sqrt{a^2 + b^2}$`,
      remediation: t`$|c_1 - c_2|$ is not yet a length. Divide it by $\sqrt{a^2 + b^2}$, as in the distance of a point from a line.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "C11-M1 gives the key when the two equations already have the same a and b (Q1, Q4, Q5): diagnose it on items whose coefficients differ.",
    "C11-M4 gives the key when c1 and c2 (after matching) have opposite signs, the origin lying between the lines (Q2, Q6).",
    "C11-M3 and C11-M5 give the key when a² + b² = 1; C11-M2 has no answer for vertical lines.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q13" },
      stem: t`The distance between the parallel lines $4x - 3y + 5 = 0$ and $4x - 3y + 7 = 0$ is:`,
      verify: { kind: "value", inputs: { a1: "4", b1: "-3", c1: "5", a2: "4", b2: "-3", c2: "7" } },
      options: [
        { key: "A", text: t`$\frac{2}{5}$`, correct: true, value: "2/5" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C11-M5", value: "2" },
        { key: "C", text: t`$\frac{2}{25}$`, correct: false, misconceptionId: "C11-M3", value: "2/25" },
        { key: "D", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C11-M4", value: "12/5" },
      ],
      solution: {
        steps: [
          t`The $x$ and $y$ coefficients already match: $a = 4$, $b = -3$, $c_1 = 5$, $c_2 = 7$, and $\sqrt{a^2 + b^2} = \sqrt{16 + 9} = 5$.`,
          t`$d = \frac{|5 - 7|}{5} = \frac{2}{5}$.`,
          t`Check: $(-2, -1)$ lies on the first line, and its distance from the second is $\frac{|-8 + 3 + 7|}{5} = \frac{2}{5}$.`,
        ],
        figure: {
          alt: "The parallel lines 4x − 3y + 5 = 0 and 4x − 3y + 7 = 0, close together. The perpendicular from (−2, −1) on the first line to the second has length 2/5.",
          axes: "xy",
          view: { x: [-3, 2], y: [-1.5, 3.5] },
          elements: [
            { kind: "line", through: [[0, 1.667], [1, 3]] },
            { kind: "label", at: [-1.6, -0.8], label: "4x − 3y + 5 = 0", labelAt: "ne" },
            { kind: "line", through: [[0, 2.333], [1, 3.667]], tone: "muted" },
            { kind: "label", at: [-0.7, 1.9], label: "4x − 3y + 7 = 0", labelAt: "nw", tone: "muted" },
            { kind: "segment", from: [-2, -1], to: [-2.32, -0.76], tone: "good", step: 2 },
            { kind: "label", at: [-2.5, -0.5], label: "d = 2/5", labelAt: "nw", tone: "good", step: 2 },
            { kind: "point", at: [-2, -1], step: 3, label: "(−2, −1)", labelAt: "se" },
          ],
        },
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q14" },
      stem: t`The distance between the parallel lines $9x + 6y - 7 = 0$ and $3x + 2y + 6 = 0$ is:`,
      verify: { kind: "value", inputs: { a1: "9", b1: "6", c1: "-7", a2: "3", b2: "2", c2: "6" } },
      options: [
        { key: "A", text: t`$\frac{25}{6}$`, correct: false, misconceptionId: "C11-M2", value: "25/6" },
        { key: "B", text: t`$\frac{25}{117}$`, correct: false, misconceptionId: "C11-M3", value: "25/117" },
        { key: "C", text: t`$\frac{25 \sqrt{13}}{39}$`, correct: true, value: "25*sqrt(13)/39" },
        { key: "D", text: t`$\frac{\sqrt{13}}{3}$`, correct: false, misconceptionId: "C11-M1", value: "sqrt(13)/3" },
      ],
      solution: {
        steps: [
          t`Make the coefficients equal: $3x + 2y + 6 = 0$ times $3$ is $9x + 6y + 18 = 0$. Now $a = 9$, $b = 6$, $c_1 = -7$, $c_2 = 18$.`,
          t`$\sqrt{a^2 + b^2} = \sqrt{81 + 36} = \sqrt{117} = 3\sqrt{13}$.`,
          t`$d = \frac{|-7 - 18|}{3\sqrt{13}} = \frac{25}{3\sqrt{13}} = \frac{25\sqrt{13}}{39}$.`,
          t`Check: $(-4, 3)$ lies on the second line; its distance from the first is $\frac{|-36 + 18 - 7|}{\sqrt{117}} = \frac{25}{3\sqrt{13}}$.`,
        ],
        figure: {
          alt: "The parallel lines 9x + 6y − 7 = 0 and 3x + 2y + 6 = 0. The perpendicular from (−4, 3) on the second line to the first has length 25/(3√13), about 2.3.",
          axes: "xy",
          view: { x: [-5.5, 5.5], y: [-1.5, 5.5] },
          elements: [
            { kind: "line", through: [[0, 1.167], [1, -0.333]] },
            { kind: "label", at: [1.45, -0.8], label: "9x + 6y − 7 = 0", labelAt: "e" },
            { kind: "line", through: [[0, -3], [1, -4.5]], tone: "muted" },
            { kind: "label", at: [-1.35, -1.1], label: "3x + 2y + 6 = 0", labelAt: "sw", tone: "muted" },
            { kind: "segment", from: [-4, 3], to: [-2.077, 4.282], tone: "good", step: 3 },
            { kind: "label", at: [-2.5, 2.6], label: "d ≈ 2.31", labelAt: "n", tone: "good", step: 3 },
            { kind: "point", at: [-4, 3], step: 4, label: "(−4, 3)", labelAt: "sw" },
          ],
        },
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.4.3 SolvedEx.3" },
      stem: t`The distance between the parallel lines $6x + 8y + 21 = 0$ and $3x + 4y + 7 = 0$ is:`,
      verify: { kind: "value", inputs: { a1: "6", b1: "8", c1: "21", a2: "3", b2: "4", c2: "7" } },
      options: [
        { key: "A", text: t`$\frac{7}{5}$`, correct: false, misconceptionId: "C11-M1", value: "7/5" },
        { key: "B", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C11-M4", value: "7/2" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C11-M5", value: "7" },
        { key: "D", text: t`$\frac{7}{10}$`, correct: true, value: "7/10" },
      ],
      solution: {
        steps: [
          t`Make the coefficients equal: $3x + 4y + 7 = 0$ times $2$ is $6x + 8y + 14 = 0$. Now $a = 6$, $b = 8$, $c_1 = 21$, $c_2 = 14$.`,
          t`$\sqrt{a^2 + b^2} = \sqrt{36 + 64} = 10$, so $d = \frac{|21 - 14|}{10} = \frac{7}{10}$.`,
          t`Check: $(3, -4)$ lies on the second line; its distance from the first is $\frac{|18 - 32 + 21|}{10} = \frac{7}{10}$.`,
        ],
        figure: {
          alt: "The parallel lines 6x + 8y + 21 = 0 and 3x + 4y + 7 = 0. The perpendicular from (3, −4) on the second line to the first has length 7/10.",
          axes: "xy",
          view: { x: [-4, 4.6], y: [-5.2, 1] },
          elements: [
            { kind: "line", through: [[0, -2.625], [1, -3.375]] },
            { kind: "label", at: [-1.05, -2.1], label: "6x + 8y + 21 = 0", labelAt: "sw" },
            { kind: "line", through: [[0, -1.75], [1, -2.5]], tone: "muted" },
            { kind: "label", at: [0.4, -1.6], label: "3x + 4y + 7 = 0", labelAt: "e", tone: "muted" },
            { kind: "segment", from: [3, -4], to: [2.58, -4.56], tone: "good", step: 2 },
            { kind: "label", at: [2.5, -4.6], label: "d = 7/10", labelAt: "sw", tone: "good", step: 2 },
            { kind: "point", at: [3, -4], step: 3, label: "(3, −4)", labelAt: "ne" },
          ],
        },
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc I Q10" },
      stem: t`The distance between the parallel lines $y = 2x + 7$ and $y = 2x + 5$ is:`,
      verify: { kind: "value", inputs: { a1: "2", b1: "-1", c1: "7", a2: "2", b2: "-1", c2: "5" } },
      options: [
        { key: "A", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C11-M3", value: "2/5" },
        { key: "B", text: t`$\frac{12 \sqrt{5}}{5}$`, correct: false, misconceptionId: "C11-M4", value: "12*sqrt(5)/5" },
        { key: "C", text: t`$\frac{2 \sqrt{5}}{5}$`, correct: true, value: "2*sqrt(5)/5" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C11-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`Write both in the form $ax + by + c = 0$: $2x - y + 7 = 0$ and $2x - y + 5 = 0$. So $a = 2$, $b = -1$, $c_1 = 7$, $c_2 = 5$.`,
          t`$d = \frac{|7 - 5|}{\sqrt{4 + 1}} = \frac{2}{\sqrt{5}} = \frac{2\sqrt{5}}{5}$.`,
          t`The vertical gap between the lines, $7 - 5 = 2$, is longer than $d$: it cuts across at a slant, not along the perpendicular.`,
        ],
        figure: {
          alt: "The parallel lines y = 2x + 7 and y = 2x + 5. The perpendicular from (−2.5, 2) on the first line to the second has length 2/√5; a dashed vertical cut between the lines at x = −1 is longer, 2.",
          axes: "xy",
          view: { x: [-5, 2], y: [-1.3, 5.5] },
          elements: [
            { kind: "line", through: [[0, 7], [1, 9]] },
            { kind: "label", at: [-2.3, 3.2], label: "y = 2x + 7", labelAt: "w" },
            { kind: "line", through: [[0, 5], [1, 7]], tone: "muted" },
            { kind: "label", at: [-2.6, -0.9], label: "y = 2x + 5", labelAt: "e", tone: "muted" },
            { kind: "segment", from: [-2.5, 2], to: [-1.7, 1.6], tone: "good", step: 2 },
            { kind: "label", at: [-1.7, 1.6], label: "d = 2/√5", labelAt: "se", tone: "good", step: 2 },
            { kind: "point", at: [-2.5, 2], step: 2, label: "(−2.5, 2)", labelAt: "nw" },
            { kind: "segment", from: [-1, 5], to: [-1, 3], tone: "bad", dashed: true, step: 3 },
            { kind: "label", at: [-0.9, 4.1], label: "2", labelAt: "ne", tone: "bad", step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q11" },
      stem: t`The distance between the parallel lines $3x + 4y + 3 = 0$ and $3x + 4y + 15 = 0$ is:`,
      verify: { kind: "value", inputs: { a1: "3", b1: "4", c1: "3", a2: "3", b2: "4", c2: "15" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C11-M2", value: "3" },
        { key: "B", text: t`$\frac{18}{5}$`, correct: false, misconceptionId: "C11-M4", value: "18/5" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C11-M5", value: "12" },
        { key: "D", text: t`$\frac{12}{5}$`, correct: true, value: "12/5" },
      ],
      solution: {
        steps: [
          t`The coefficients already match: $a = 3$, $b = 4$, $c_1 = 3$, $c_2 = 15$, and $\sqrt{a^2 + b^2} = 5$.`,
          t`$d = \frac{|3 - 15|}{5} = \frac{12}{5}$.`,
          t`Both constants are positive, so the origin is on the same side of both lines, at distances $\frac{3}{5}$ and $\frac{15}{5} = 3$. The gap is $3 - \frac{3}{5} = \frac{12}{5}$: the distances subtract.`,
        ],
        figure: {
          alt: "The parallel lines 3x + 4y + 3 = 0 and 3x + 4y + 15 = 0, both on the same side of the origin. The perpendicular from the origin meets them at distances 3/5 and 3; the part between the lines has length 12/5.",
          axes: "xy",
          view: { x: [-5.5, 2.5], y: [-4, 2.5] },
          elements: [
            { kind: "line", through: [[0, -0.75], [1, -1.5]] },
            { kind: "label", at: [-3.05, 1.65], label: "3x + 4y + 3 = 0", labelAt: "ne" },
            { kind: "line", through: [[0, -3.75], [1, -4.5]], tone: "muted" },
            { kind: "label", at: [-3.6, -1.6], label: "3x + 4y + 15 = 0", labelAt: "sw", tone: "muted" },
            { kind: "segment", from: [-0.36, -0.48], to: [-1.8, -2.4], tone: "good", step: 2 },
            { kind: "label", at: [-1.1, -1.4], label: "d = 12/5", labelAt: "nw", tone: "good", step: 2 },
            { kind: "point", at: [0, 0], step: 3, label: "(0, 0)", labelAt: "ne" },
            { kind: "segment", from: [0, 0], to: [-0.36, -0.48], tone: "muted", dashed: true, step: 3 },
          ],
        },
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "authored" },
      stem: t`The distance between the parallel lines $2x + 4y + 7 = 0$ and $x + 2y = 4$ is:`,
      verify: { kind: "value", inputs: { a1: "2", b1: "4", c1: "7", a2: "1", b2: "2", c2: "-4" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C11-M5", value: "15" },
        { key: "B", text: t`$\frac{3 \sqrt{5}}{2}$`, correct: true, value: "3*sqrt(5)/2" },
        { key: "C", text: t`$\frac{11 \sqrt{5}}{10}$`, correct: false, misconceptionId: "C11-M1", value: "11*sqrt(5)/10" },
        { key: "D", text: t`$\frac{15}{4}$`, correct: false, misconceptionId: "C11-M2", value: "15/4" },
      ],
      solution: {
        steps: [
          t`Write $x + 2y = 4$ as $x + 2y - 4 = 0$ and double it: $2x + 4y - 8 = 0$. Now $a = 2$, $b = 4$, $c_1 = 7$, $c_2 = -8$.`,
          t`$\sqrt{a^2 + b^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$.`,
          t`$d = \frac{|7 - (-8)|}{2\sqrt{5}} = \frac{15}{2\sqrt{5}} = \frac{3\sqrt{5}}{2}$.`,
          t`Check: the perpendicular from $(4, 0)$ on $x + 2y = 4$ meets the other line at $\left(\frac{5}{2}, -3\right)$; its length is $\sqrt{\left(\frac{3}{2}\right)^2 + 3^2} = \frac{3\sqrt{5}}{2}$.`,
        ],
        figure: {
          alt: "The parallel lines 2x + 4y + 7 = 0 and x + 2y = 4, on opposite sides of the origin. The perpendicular from (4, 0) on the second line meets the first at (5/2, −3); its length is 3√5/2.",
          axes: "xy",
          view: { x: [-4.5, 6.5], y: [-4, 3] },
          elements: [
            { kind: "line", through: [[0, -1.75], [1, -2.25]] },
            { kind: "label", at: [-1.3, -1.4], label: "2x + 4y + 7 = 0", labelAt: "sw" },
            { kind: "line", through: [[0, 2], [1, 1.5]], tone: "muted" },
            { kind: "label", at: [1.2, 1.8], label: "x + 2y = 4", labelAt: "ne", tone: "muted" },
            { kind: "segment", from: [4, 0], to: [2.5, -3], tone: "good", step: 3 },
            { kind: "label", at: [3.6, -1.6], label: "d = 3√5/2", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [4, 0], step: 4, label: "(4, 0)", labelAt: "ne" },
            { kind: "point", at: [2.5, -3], step: 4, label: "(5/2, −3)", labelAt: "sw" },
          ],
        },
      },
    },
  ],
};
