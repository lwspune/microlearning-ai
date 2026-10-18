import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Are the two lines of $5x^2 + 7xy - 5y^2 = 0$ perpendicular? Decide **without** finding the lines.`,
    reveal: t`Yes. The coefficients of $x^2$ and $y^2$ add to zero, $5 + (-5) = 0$. That alone makes the lines perpendicular, whatever the $xy$ term is.`,
  },
  explanation: {
    intuition: [
      t`A **combined equation** $ax^2 + 2hxy + by^2 = 0$ stands for two lines through the origin.`,
      t`The two lines cross at the origin and make an angle $\theta$ there.`,
      t`Two lines make two angles, adding to $180^\circ$; we take the **acute** one, under $90^\circ$.`,
      t`The slopes come from $a$, $h$ and $b$, so $\theta$ does too: no need to split the equation.`,
      t`Two special cases: **perpendicular**, meeting at right angles, and **coincident**, one line counted twice.`,
    ],
    formal: [
      {
        title: "The angle formula",
        points: [
          t`Put $y = mx$: the two slopes $m_1$, $m_2$ are the roots of $bm^2 + 2hm + a = 0$.`,
          t`So $m_1 + m_2 = -\dfrac{2h}{b}$ and $m_1 m_2 = \dfrac{a}{b}$.`,
          t`The acute angle $\theta$ has $\tan\theta = \left|\dfrac{m_1 - m_2}{1 + m_1 m_2}\right|$.`,
          t`$(m_1 - m_2)^2 = (m_1 + m_2)^2 - 4m_1 m_2$ $= \dfrac{4(h^2 - ab)}{b^2}$.`,
          t`And $1 + m_1 m_2 = \dfrac{a + b}{b}$, so $\tan\theta = \left|\dfrac{2\sqrt{h^2 - ab}}{a + b}\right|$.`,
          t`The **modulus** (absolute value) keeps $\tan\theta \ge 0$, so $\theta$ is the acute angle.`,
        ],
        figure: {
          alt: "Two lines through the origin, labelled slope m₁ and slope m₂. The acute angle θ between them is marked.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.707, 0.707]], step: 1 },
            { kind: "line", through: [[0, 0], [0.141, 0.99]], step: 1 },
            { kind: "label", at: [0.34, 2.38], label: "slope m₁", labelAt: "e", step: 1 },
            { kind: "label", at: [1.7, 1.7], label: "slope m₂", labelAt: "se", step: 1 },
            { kind: "angle", at: [0, 0], from: 45, to: 81.87, step: 3 },
            { kind: "label", at: [0.85, 1.75], label: "θ", labelAt: "ne", step: 3 },
          ],
        },
      },
      {
        title: "Reading a, h and b",
        points: [
          t`Take $7x^2 - 8xy + y^2 = 0$: here $a = 7$ and $b = 1$.`,
          t`$h$ is **half** the coefficient of $xy$: $2h = -8$, so $h = -4$.`,
          t`Then $h^2 - ab = 16 - 7 = 9$, and $a + b = 8$.`,
          t`$\tan\theta = \left|\dfrac{2\sqrt{9}}{8}\right| = \dfrac{3}{4}$, so $\theta = \tan^{-1}\dfrac{3}{4}$.`,
          t`Check: it is $(y - 7x)(y - x) = 0$, the lines $y = 7x$ and $y = x$.`,
        ],
        figure: {
          alt: "The lines of 7x² − 8xy + y² = 0 through the origin. The acute angle between them is marked with tan θ = 3/4, then the lines are labelled y = 7x and y = x.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.707, 0.707]], step: 1 },
            { kind: "line", through: [[0, 0], [0.141, 0.99]], step: 1 },
            { kind: "angle", at: [0, 0], from: 45, to: 81.87, step: 4 },
            { kind: "label", at: [0.85, 1.75], label: "θ", labelAt: "ne", step: 4 },
            { kind: "label", at: [-2.4, 3.2], label: "tan θ = 3/4", labelAt: "n", step: 4 },
            { kind: "label", at: [0.34, 2.38], label: "y = 7x", labelAt: "e", step: 5 },
            { kind: "label", at: [1.7, 1.7], label: "y = x", labelAt: "se", step: 5 },
          ],
        },
      },
      {
        title: "Perpendicular lines",
        points: [
          t`Lines are **perpendicular** when they meet at a right angle, $90^\circ$.`,
          t`Then $1 + m_1 m_2 = 0$, that is $m_1 m_2 = -1$.`,
          t`The product of the slopes is $+\dfrac{a}{b}$, so $\dfrac{a}{b} = -1$, that is $a + b = 0$.`,
          t`**Test:** the lines are perpendicular exactly when $a + b = 0$.`,
          t`In $3x^2 - 4xy - 3y^2 = 0$, $3 + (-3) = 0$, so its lines are perpendicular.`,
          t`The $-1$ is for the slopes, not the coefficients: $ab = -1$ is not the test.`,
        ],
        figure: {
          alt: "The lines of 3x² − 4xy − 3y² = 0 through the origin, meeting at a right angle, marked 90°. Then the note a + b = 0.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.882, 0.472]], step: 1 },
            { kind: "line", through: [[0, 0], [-0.472, 0.882]], step: 1 },
            { kind: "angle", at: [0, 0], from: 28.15, to: 118.15, step: 1 },
            { kind: "label", at: [0.4, 1.25], label: "90°", labelAt: "ne", step: 1 },
            { kind: "label", at: [-1.1, -2.9], label: "a + b = 0", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "Coincident lines",
        points: [
          t`Lines are **coincident** when they lie on top of each other: one line counted twice.`,
          t`Then $m_1 = m_2$, so $(m_1 - m_2)^2 = \dfrac{4(h^2 - ab)}{b^2} = 0$.`,
          t`**Test:** the lines are coincident exactly when $h^2 = ab$; then $\theta = 0$.`,
          t`In $x^2 + 4xy + 4y^2 = 0$, $h = 2$, so $h^2 = 4 = ab$: coincident.`,
          t`Indeed it is $(x + 2y)^2 = 0$: the line $x + 2y = 0$, twice.`,
          t`Keep the tests apart: $a + b = 0$ for perpendicular, $h^2 = ab$ for coincident.`,
        ],
        figure: {
          alt: "A single line through the origin standing for both lines, then marked m₁ = m₂. Then it is labelled (x + 2y)² = 0.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [-0.894, 0.447]], step: 1 },
            { kind: "label", at: [-2.6, 2], label: "m₁ = m₂", labelAt: "n", step: 2 },
            { kind: "label", at: [0.6, 2.2], label: "(x + 2y)² = 0", labelAt: "ne", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the acute angle between the lines $x^2 - 4xy + y^2 = 0$.`,
      steps: [
        t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 1$, $2h = -4$ so $h = -2$, and $b = 1$.`,
        t`$h^2 - ab = 4 - 1 = 3$, and $a + b = 2$.`,
        t`$\tan\theta = \left|\dfrac{2\sqrt{3}}{2}\right| = \sqrt{3}$.`,
        t`So $\theta = 60^\circ$, that is $\dfrac{\pi}{3}$.`,
      ],
      answer: t`The acute angle is $60^\circ$.`,
      figure: {
        alt: "The lines of x² − 4xy + y² = 0 through the origin, at 15° and 75° to the x-axis. The angle between them is marked, then labelled θ = 60°.",
        axes: "xy",
        view: { x: [-4, 4], y: [-4, 4] },
        elements: [
          { kind: "line", through: [[0, 0], [0.966, 0.259]], step: 1 },
          { kind: "line", through: [[0, 0], [0.259, 0.966]], step: 1 },
          { kind: "angle", at: [0, 0], from: 15, to: 75, step: 3 },
          { kind: "label", at: [1.13, 1.13], label: "θ = 60°", labelAt: "ne", step: 4 },
        ],
      },
    },
    figure: {
      alt: "Two lines through the origin, y = x and y = 7x. The acute angle θ between them is marked, then the obtuse angle 180° − θ beside it.",
      axes: "xy",
      view: { x: [-4, 4], y: [-4, 4] },
      elements: [
        { kind: "line", through: [[0, 0], [0.707, 0.707]], step: 1 },
        { kind: "line", through: [[0, 0], [0.141, 0.99]], step: 1 },
        { kind: "angle", at: [0, 0], from: 45, to: 81.87, step: 2 },
        { kind: "label", at: [0.85, 1.75], label: "θ", labelAt: "ne", step: 2 },
        { kind: "angle", at: [0, 0], from: 81.87, to: 225, tone: "muted", step: 3 },
        { kind: "label", at: [-1.7, 0.9], label: "180° − θ", labelAt: "n", tone: "muted", step: 3 },
      ],
    },
    visualSpec: t`Drag sliders for $a$, $h$ and $b$: the two lines through the origin redraw, and the angle $\theta$ between them updates, turning into a right angle at $a + b = 0$ and closing to one line at $h^2 = ab$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Takes h as the whole coefficient of xy, forgetting that the middle term is 2hxy",
      remediation: t`The middle term is $2hxy$, so $h$ is **half** the coefficient of $xy$: in $3x^2 + 8xy + y^2 = 0$, $h = 4$, not $8$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: "Swaps the two tests: perpendicular when h^2 = ab, coincident when a + b = 0",
      remediation: t`Perpendicular means $m_1 m_2 = -1$, which gives $a + b = 0$. Coincident means $m_1 = m_2$, which gives $h^2 = ab$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Applies m1 m2 = -1 to the coefficients themselves: perpendicular when ab = -1",
      remediation: t`The $-1$ is the product of the **slopes**, which is $\dfrac{a}{b}$. So $\dfrac{a}{b} = -1$, that is $a + b = 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: "Takes the product of the slopes as -a/b, so -a/b = -1 gives a = b",
      remediation: t`The product of the slopes is $+\dfrac{a}{b}$; only the sum, $-\dfrac{2h}{b}$, has a minus. So perpendicular means $a + b = 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: "Drops the factor 2: tan(theta) = |sqrt(h^2 - ab) / (a + b)|",
      remediation: t`The formula is $\tan\theta = \left|\dfrac{2\sqrt{h^2 - ab}}{a + b}\right|$: keep the $2$ in front of the root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Writes h^2 + ab under the root in place of h^2 - ab",
      remediation: t`Under the root it is $h^2 - ab$, with a minus. Take care with the sign when $ab$ is itself negative.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key when the equation has no $xy$ term ($h = 0$), and C04-M6 gives the key when $ab = 0$: diagnose them on items with $h \ne 0$ and $ab \ne 0$.`,
    "C04-M3 and C04-M4 show only on the perpendicular test, C04-M5 only on the angle formula, and C04-M2 only on the two tests.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.2 Q4 i)" },
      stem: t`$\theta$ is the acute angle between the lines $3x^2 - 4\sqrt{3}xy + 3y^2 = 0$. Then $\tan\theta =$`,
      verify: { kind: "value", inputs: { a: "3", c: "-4*sqrt(3)", b: "3" }, params: { ask: "tan" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{6}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(3)/6" },
        { key: "B", text: t`$\frac{\sqrt{21}}{3}$`, correct: false, misconceptionId: "C04-M6", value: "sqrt(21)/3" },
        { key: "C", text: t`$\frac{\sqrt{3}}{3}$`, correct: true, value: "sqrt(3)/3" },
        { key: "D", text: t`$\frac{\sqrt{39}}{3}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(39)/3" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 3$, $2h = -4\sqrt{3}$ so $h = -2\sqrt{3}$, and $b = 3$.`,
          t`$h^2 - ab = 12 - 9 = 3$, and $a + b = 6$.`,
          t`$\tan\theta = \left|\dfrac{2\sqrt{3}}{6}\right| = \dfrac{\sqrt{3}}{3}$, so $\theta = 30^\circ$.`,
        ],
        figure: {
          alt: "The lines of 3x² − 4√3xy + 3y² = 0 through the origin, at 30° and 60° to the x-axis, with the angle θ = 30° between them marked.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.866, 0.5]], step: 1 },
            { kind: "line", through: [[0, 0], [0.5, 0.866]], step: 1 },
            { kind: "angle", at: [0, 0], from: 30, to: 60, step: 3 },
            { kind: "label", at: [-2.4, 3.2], label: "θ = 30°", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.2 Q4 iii)" },
      stem: t`The acute angle between the lines $2x^2 + 7xy + 3y^2 = 0$ is:`,
      verify: { kind: "value", inputs: { a: "2", c: "7", b: "3" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$\tan^{-1}\left(\dfrac{2\sqrt{43}}{5}\right)$`, correct: false, misconceptionId: "C04-M1", value: "atan(2*sqrt(43)/5)" },
        { key: "B", text: t`$\tan^{-1}\left(\dfrac{1}{2}\right)$`, correct: false, misconceptionId: "C04-M5", value: "atan(1/2)" },
        { key: "C", text: t`$\tan^{-1}\left(\dfrac{\sqrt{73}}{5}\right)$`, correct: false, misconceptionId: "C04-M6", value: "atan(sqrt(73)/5)" },
        { key: "D", text: t`$\tan^{-1}(1)$`, correct: true, value: "pi/4" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 2$, $2h = 7$ so $h = \dfrac{7}{2}$, and $b = 3$.`,
          t`$h^2 - ab = \dfrac{49}{4} - 6 = \dfrac{25}{4}$, and $a + b = 5$.`,
          t`$\tan\theta = \left|\dfrac{2 \times \frac{5}{2}}{5}\right| = 1$.`,
          t`So $\theta = \tan^{-1}(1) = \dfrac{\pi}{4}$, that is $45^\circ$.`,
        ],
        figure: {
          alt: "The lines of 2x² + 7xy + 3y² = 0 through the origin, y = −2x and y = −x/3, with the 45° angle between them marked.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [-0.447, 0.894]], step: 1 },
            { kind: "line", through: [[0, 0], [-0.949, 0.316]], step: 1 },
            { kind: "angle", at: [0, 0], from: 116.57, to: 161.57, step: 3 },
            { kind: "label", at: [2.4, 3.2], label: "θ = 45°", labelAt: "n", step: 4 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc I (2)" },
      stem: t`The lines $kx^2 - 3xy + 6y^2 = 0$ are perpendicular to each other. Then $k =$`,
      verify: { kind: "value", inputs: { a: "k", c: "-3", b: "6" }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$- \frac{1}{6}$`, correct: false, misconceptionId: "C04-M3", value: "-1/6" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C04-M4", value: "6" },
        { key: "C", text: t`$-6$`, correct: true, value: "-6" },
        { key: "D", text: t`$\frac{3}{8}$`, correct: false, misconceptionId: "C04-M2", value: "3/8" },
      ],
      solution: {
        steps: [
          t`The lines are perpendicular exactly when $a + b = 0$.`,
          t`Here $a = k$ and $b = 6$, so $k + 6 = 0$, giving $k = -6$.`,
        ],
        figure: {
          alt: "With k = −6, the lines of −6x² − 3xy + 6y² = 0 through the origin, meeting at a right angle, marked 90°.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.615, 0.788]], step: 2 },
            { kind: "line", through: [[0, 0], [-0.788, 0.615]], step: 2 },
            { kind: "angle", at: [0, 0], from: 52.02, to: 142.02, step: 2 },
            { kind: "label", at: [-0.55, 1.5], label: "90°", labelAt: "n", step: 2 },
            { kind: "label", at: [2.8, 1], label: "k = −6", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.2 Q3" },
      stem: t`The lines $kx^2 + 4xy - 4y^2 = 0$ are perpendicular to each other. Then $k =$`,
      verify: { kind: "value", inputs: { a: "k", c: "4", b: "-4" }, params: { ask: "perp" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C04-M2", value: "-1" },
        { key: "B", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C04-M3", value: "1/4" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C04-M4", value: "-4" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`The lines are perpendicular exactly when $a + b = 0$.`,
          t`Here $a = k$ and $b = -4$, so $k - 4 = 0$, giving $k = 4$.`,
        ],
        figure: {
          alt: "With k = 4, the lines of 4x² + 4xy − 4y² = 0 through the origin, meeting at a right angle, marked 90°.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.526, 0.851]], step: 2 },
            { kind: "line", through: [[0, 0], [-0.851, 0.526]], step: 2 },
            { kind: "angle", at: [0, 0], from: 58.28, to: 148.28, step: 2 },
            { kind: "label", at: [-0.6, 1.5], label: "90°", labelAt: "n", step: 2 },
            { kind: "label", at: [2.8, 1.2], label: "k = 4", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.2 Q2" },
      stem: t`The lines $x^2 + 6xy + ky^2 = 0$ are coincident. Then $k =$`,
      verify: { kind: "value", inputs: { a: "1", c: "6", b: "k" }, params: { ask: "coinc" } },
      options: [
        { key: "A", text: t`$-9$`, correct: false, misconceptionId: "C04-M6", value: "-9" },
        { key: "B", text: t`$9$`, correct: true, value: "9" },
        { key: "C", text: t`$36$`, correct: false, misconceptionId: "C04-M1", value: "36" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C04-M2", value: "-1" },
      ],
      solution: {
        steps: [
          t`The lines are coincident exactly when $h^2 = ab$.`,
          t`Here $a = 1$, $2h = 6$ so $h = 3$, and $b = k$: $9 = k$.`,
          t`Check: $x^2 + 6xy + 9y^2 = (x + 3y)^2 = 0$, the line $x + 3y = 0$ twice.`,
        ],
        figure: {
          alt: "With k = 9, a single line through the origin, x + 3y = 0, standing for both lines.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [-0.949, 0.316]], step: 2 },
            { kind: "label", at: [0.6, 2.2], label: "(x + 3y)² = 0", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.2 Q6" },
      stem: t`$\theta$ is the acute angle between the lines $2x^2 - 5xy + 3y^2 = 0$. Then $\tan\theta =$`,
      verify: { kind: "value", inputs: { a: "2", c: "-5", b: "3" }, params: { ask: "tan" } },
      options: [
        { key: "A", text: t`$\frac{1}{5}$`, correct: true, value: "1/5" },
        { key: "B", text: t`$\frac{2 \sqrt{19}}{5}$`, correct: false, misconceptionId: "C04-M1", value: "2*sqrt(19)/5" },
        { key: "C", text: t`$\frac{1}{10}$`, correct: false, misconceptionId: "C04-M5", value: "1/10" },
        { key: "D", text: t`$\frac{7}{5}$`, correct: false, misconceptionId: "C04-M6", value: "7/5" },
      ],
      solution: {
        steps: [
          t`Compare with $ax^2 + 2hxy + by^2 = 0$: $a = 2$, $2h = -5$ so $h = -\dfrac{5}{2}$, and $b = 3$.`,
          t`$h^2 - ab = \dfrac{25}{4} - 6 = \dfrac{1}{4}$, and $a + b = 5$.`,
          t`$\tan\theta = \left|\dfrac{2 \times \frac{1}{2}}{5}\right| = \dfrac{1}{5}$.`,
        ],
        figure: {
          alt: "The lines of 2x² − 5xy + 3y² = 0 through the origin, y = x and y = 2x/3, close together, with the small angle θ between them marked: tan θ = 1/5.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [0.832, 0.555]], step: 1 },
            { kind: "line", through: [[0, 0], [0.707, 0.707]], step: 1 },
            { kind: "angle", at: [0, 0], from: 33.69, to: 45, step: 3 },
            { kind: "label", at: [-2.4, 3.2], label: "tan θ = 1/5", labelAt: "n", step: 3 },
          ],
        },
      },
    },
  ],
};
