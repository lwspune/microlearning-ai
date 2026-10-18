import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`Put the general point $(1 + \lambda, 2 - \lambda, 3)$ of a line into the plane $x + y + z = 6$. You get $6 = 6$, and no $\lambda$ is left. **Where does the line meet the plane?**`,
    reveal: t`Everywhere. The equation holds for every $\lambda$, so every point of the line is on the plane: the line lies in it. Had you got something false like $5 = 6$, no $\lambda$ would work and the line would never meet the plane.`,
  },
  explanation: {
    intuition: [
      t`A line and a plane in space can sit together in three ways.`,
      t`Most lines **cross** the plane, passing through it at exactly one point.`,
      t`A line can run **parallel** to the plane, beside it, and never meet it.`,
      t`Or the line can **lie in** the plane: every point of the line is on the plane.`,
      t`To tell which, ask which points of the line satisfy the plane's equation.`,
      t`Each point of the line comes from one value of $\lambda$, so this is one equation in $\lambda$.`,
    ],
    formal: [
      {
        title: "Finding the meeting point",
        points: [
          t`The line $\vec r = \vec a + \lambda\vec b$ passes through the point $\vec a$ in the direction $\vec b$.`,
          t`Its **general point** $\vec a + \lambda\vec b$ is any point of the line: one for each value of $\lambda$.`,
          t`Put it into the plane $\vec r\cdot\vec n = d$: $\vec a\cdot\vec n + \lambda(\vec b\cdot\vec n) = d$.`,
          t`When $\vec b\cdot\vec n \ne 0$, solve: $\lambda = \dfrac{d - \vec a\cdot\vec n}{\vec b\cdot\vec n}$.`,
          t`Put this $\lambda$ back into $\vec a + \lambda\vec b$: that is the **meeting point**.`,
          t`For $\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}$, the general point is $(x_1 + a\lambda,$ $y_1 + b\lambda,$ $z_1 + c\lambda)$.`,
        ],
      },
      {
        title: "Crossing, parallel or lying in",
        points: [
          t`If $\vec b\cdot\vec n \ne 0$, exactly one $\lambda$ works: the line **crosses** the plane at one point $P$.`,
          t`If $\vec b\cdot\vec n = 0$, the $\lambda$ term drops out and $\vec a\cdot\vec n = d$ is left, with no $\lambda$ in it.`,
          t`If $\vec a\cdot\vec n \ne d$, no $\lambda$ works: the line is **parallel** to the plane and never meets it.`,
          t`If $\vec a\cdot\vec n = d$, every $\lambda$ works: the line **lies in** the plane.`,
          t`So the line lies in the plane when $\vec b\cdot\vec n = 0$ and its point $\vec a$ satisfies the plane's equation.`,
        ],
        figure: {
          alt: "A plane drawn as a slanted parallelogram, labelled r · n = d. One line passes through the plane at a single point P; its part below the plane is dashed. A second line runs above the plane, parallel to it, with a dashed drop to the plane showing its height: it never meets the plane. A third line is drawn on the plane itself: it lies in it.",
          axes: "none",
          view: { x: [-3.8, 3.8], y: [-1.7, 3.7] },
          elements: [
            { kind: "segment", from: [-3.4, -0.8], to: [1.6, -0.8], tone: "muted" },
            { kind: "segment", from: [1.6, -0.8], to: [3.2, 1.2], tone: "muted" },
            { kind: "segment", from: [3.2, 1.2], to: [-1.8, 1.2], tone: "muted" },
            { kind: "segment", from: [-1.8, 1.2], to: [-3.4, -0.8], tone: "muted" },
            { kind: "label", at: [-0.9, -0.8], label: "r · n = d", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [-2, 0], to: [-1.6, 3], step: 1 },
            { kind: "segment", from: [-2, 0], to: [-2.3, -1.4], dashed: true, step: 1 },
            { kind: "point", at: [-2, 0], step: 1, label: "P", labelAt: "w" },
            { kind: "label", at: [-1.6, 3], label: "crosses", labelAt: "e", step: 1 },
            { kind: "segment", from: [-0.6, 2], to: [3, 3.3], tone: "bad", step: 3 },
            { kind: "segment", from: [1.8, 2.87], to: [1.8, 0.87], dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [-0.6, 2], label: "parallel", labelAt: "se", tone: "bad", step: 3 },
            { kind: "segment", from: [-1.2, -0.5], to: [2.6, 0.87], tone: "good", step: 4 },
            { kind: "label", at: [0.7, 0.05], label: "lies in", labelAt: "se", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Traps to avoid",
        points: [
          t`$\vec b\cdot\vec n = 0$ alone only makes the line parallel; check that one point is on the plane too.`,
          t`$\vec n$ is perpendicular to the plane, so the line is perpendicular to the plane when $\vec b$ is parallel to $\vec n$.`,
          t`In $\dfrac{x + 1}{2}$ the point's coordinate is $x_1 = -1$: it is the number subtracted from $x$.`,
          t`In $\vec r = \vec a + \lambda\vec b$ the vector without $\lambda$ is the point; the one with $\lambda$ is the direction.`,
          t`Keep $\vec a$ in the general point: $\vec a + \lambda\vec b$, not $\lambda\vec b$.`,
          t`Check the meeting point by putting it into the plane's equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the point where the line $\dfrac{x - 2}{3} = \dfrac{y + 1}{4} = \dfrac{z - 2}{2}$ meets the plane $x - y + z = 7$.`,
      steps: [
        t`Direction $(3, 4, 2)$, normal $(1, -1, 1)$: $\vec b\cdot\vec n = 3 - 4 + 2 = 1 \ne 0$, so they meet at one point.`,
        t`General point: $(2 + 3\lambda,\ -1 + 4\lambda,\ 2 + 2\lambda)$.`,
        t`Put it in: $(2 + 3\lambda) - (-1 + 4\lambda)$ $+ (2 + 2\lambda) = 7$, so $5 + \lambda = 7$ and $\lambda = 2$.`,
        t`Point: $(2 + 6,\ -1 + 8,\ 2 + 4) = (8, 7, 6)$. Check: $8 - 7 + 6 = 7$.`,
      ],
      answer: t`The line meets the plane at $(8, 7, 6)$.`,
    },
    visualSpec: t`Tilt a line about a fixed point above a plane: the meeting point slides across the plane, runs off to infinity as $\vec b\cdot\vec n$ reaches $0$, and the line drops into the plane when its point is moved onto it.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Moves $\vec a\cdot\vec n$ across with the wrong sign, taking $\lambda = \dfrac{\vec a\cdot\vec n - d}{\vec b\cdot\vec n}$.`,
      remediation: t`From $\vec a\cdot\vec n + \lambda(\vec b\cdot\vec n) = d$, subtract $\vec a\cdot\vec n$: $\lambda = \dfrac{d - \vec a\cdot\vec n}{\vec b\cdot\vec n}$. Then check the point in the plane's equation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Reads the point of $\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}$ with the signs flipped, so $\dfrac{x + 1}{2}$ gives $x_1 = 1$.`,
      remediation: t`The point's coordinate is the number subtracted: $\dfrac{x + 1}{2} = \dfrac{x - (-1)}{2}$, so $x_1 = -1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M3",
      mistake: t`Swaps the line's point and direction, working with $\vec b + \lambda\vec a$ instead of $\vec a + \lambda\vec b$.`,
      remediation: t`In $\vec r = \vec a + \lambda\vec b$ the vector without $\lambda$ is the point and the one with $\lambda$ is the direction. In Cartesian form the numerators give the point, the denominators the direction.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M4",
      mistake: t`Thinks $\vec b\cdot\vec n = 0$ alone puts the line in the plane, without checking a point.`,
      remediation: t`$\vec b\cdot\vec n = 0$ only makes the line parallel to the plane. It lies in the plane when, also, one of its points satisfies the plane's equation.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M5",
      mistake: t`Swaps the conditions: takes $\vec b\cdot\vec n = 0$ to mean the line is perpendicular to the plane, and $\vec b$ parallel to $\vec n$ to mean the line is parallel to it.`,
      remediation: t`The normal $\vec n$ is perpendicular to the plane. So $\vec b\cdot\vec n = 0$ means the line is parallel to the plane, and $\vec b$ parallel to $\vec n$ means it is perpendicular.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M6",
      mistake: t`Leaves $\vec a$ out of the general point and uses $\lambda\vec b$, as if the line passed through the origin.`,
      remediation: t`The general point is $\vec a + \lambda\vec b$: the line passes through $\vec a$. Keep $\vec a\cdot\vec n$ in the equation for $\lambda$, and add $\vec a$ back to get the point.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C11-M1 gives the key when the line's point is on the plane; C11-M2 when the plane passes through the origin and the item asks for the kind, or when $\vec a = \vec 0$; C11-M6 when $\vec a = \vec 0$. Diagnose them with other inputs.`,
    t`C11-M4 and C11-M5 give the key on any line that crosses the plane at one point (with $\vec b$ not parallel to $\vec n$); they are tagged only on items where $\vec b\cdot\vec n = 0$.`,
    "C11-M2 is modelled only for lines given in Cartesian form. The book asks for angles on 6.5 Solved Ex 13, Ex 6.4 Q1 and Q2; Q1, Q3 and Q5 use their lines and planes to ask where they meet. Ex 6.4 Q2 prints a dot for the plus in the line's equation; Q3 reads it as a plus.",
    "Q2 pairs the first line of Misc I Q18 with the plane of Misc I Q16; Q4 puts a line in the plane of 6.4 Solved Ex 9. Q6 is the book's Misc I Q19.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.5 SolvedEx.13" },
      stem: t`The line $\vec r = (\hat i + 2\hat j + \hat k)$ $+ \lambda(\hat i + \hat j + \hat k)$ meets the plane $\vec r\cdot(2\hat i - \hat j + \hat k) = 8$ at the point:`,
      verify: { kind: "value", inputs: { a: "(1, 2, 1)", b: "(1, 1, 1)", n: "(2, -1, 1)", d: "8" }, params: { ask: "point", form: "vec" } },
      options: [
        { key: "A", text: t`$\left(\frac{9}{2}, \frac{11}{2}, \frac{9}{2}\right)$`, correct: true, value: "(9/2, 11/2, 9/2)" },
        { key: "B", text: t`$\left(- \frac{5}{2}, - \frac{3}{2}, - \frac{5}{2}\right)$`, correct: false, misconceptionId: "C11-M1", value: "(-5/2, -3/2, -5/2)" },
        { key: "C", text: t`$(7, 13, 7)$`, correct: false, misconceptionId: "C11-M3", value: "(7, 13, 7)" },
        { key: "D", text: t`$(4, 4, 4)$`, correct: false, misconceptionId: "C11-M6", value: "(4, 4, 4)" },
      ],
      solution: {
        steps: [
          t`Here $\vec a = (1, 2, 1)$, $\vec b = (1, 1, 1)$, $\vec n = (2, -1, 1)$.`,
          t`$\vec a\cdot\vec n = 2 - 2 + 1 = 1$ and $\vec b\cdot\vec n = 2 - 1 + 1 = 2$.`,
          t`$1 + 2\lambda = 8$, so $\lambda = \dfrac{7}{2}$.`,
          t`Point: $\left(1 + \dfrac{7}{2}, 2 + \dfrac{7}{2}, 1 + \dfrac{7}{2}\right)$ $= \left(\dfrac{9}{2}, \dfrac{11}{2}, \dfrac{9}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.18" },
      stem: t`The line $\dfrac{x - 5}{4} = \dfrac{y - 7}{4}$ $= \dfrac{z + 3}{-5}$ meets the plane $2x - y + 2z = 3$ at the point:`,
      verify: { kind: "value", inputs: { a: "(5, 7, -3)", b: "(4, 4, -5)", n: "(2, -1, 2)", d: "3" }, params: { ask: "point", form: "cart" } },
      options: [
        { key: "A", text: t`$(-5, -7, 3)$`, correct: false, misconceptionId: "C11-M2", value: "(-5, -7, 3)" },
        { key: "B", text: t`$(-11, -17, 4)$`, correct: false, misconceptionId: "C11-M3", value: "(-11, -17, 4)" },
        { key: "C", text: t`$(1, 3, 2)$`, correct: true, value: "(1, 3, 2)" },
        { key: "D", text: t`$(9, 11, -8)$`, correct: false, misconceptionId: "C11-M1", value: "(9, 11, -8)" },
      ],
      solution: {
        steps: [
          t`General point: $(5 + 4\lambda,\ 7 + 4\lambda,\ -3 - 5\lambda)$.`,
          t`$2(5 + 4\lambda) - (7 + 4\lambda)$ $+ 2(-3 - 5\lambda) = 3$.`,
          t`That is $-3 - 6\lambda = 3$, so $\lambda = -1$.`,
          t`Point: $(5 - 4,\ 7 - 4,\ -3 + 5) = (1, 3, 2)$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.2" },
      stem: t`The line $\vec r = (\hat i + 2\hat j + 2\hat k)$ $+ \lambda(2\hat i + 3\hat j - 6\hat k)$ meets the plane $\vec r\cdot(2\hat i - \hat j + \hat k) = 0$ at the point:`,
      verify: { kind: "value", inputs: { a: "(1, 2, 2)", b: "(2, 3, -6)", n: "(2, -1, 1)", d: "0" }, params: { ask: "point", form: "vec" } },
      options: [
        { key: "A", text: t`$\left(\frac{1}{5}, \frac{4}{5}, \frac{22}{5}\right)$`, correct: false, misconceptionId: "C11-M1", value: "(1/5, 4/5, 22/5)" },
        { key: "B", text: t`$\left(\frac{9}{2}, 8, -1\right)$`, correct: false, misconceptionId: "C11-M3", value: "(9/2, 8, -1)" },
        { key: "C", text: t`$(0, 0, 0)$`, correct: false, misconceptionId: "C11-M6", value: "(0, 0, 0)" },
        { key: "D", text: t`$\left(\frac{9}{5}, \frac{16}{5}, - \frac{2}{5}\right)$`, correct: true, value: "(9/5, 16/5, -2/5)" },
      ],
      solution: {
        steps: [
          t`$\vec a\cdot\vec n = 2 - 2 + 2 = 2$ and $\vec b\cdot\vec n = 4 - 3 - 6 = -5$.`,
          t`$2 - 5\lambda = 0$, so $\lambda = \dfrac{2}{5}$.`,
          t`Point: $\left(1 + \dfrac{4}{5}, 2 + \dfrac{6}{5}, 2 - \dfrac{12}{5}\right)$ $= \left(\dfrac{9}{5}, \dfrac{16}{5}, -\dfrac{2}{5}\right)$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.4 SolvedEx.9" },
      stem: t`Which is true of the line $x - 1 = \dfrac{y - 2}{2}$ $= \dfrac{z + 7}{2}$ and the plane $2x + y - 2z = 18$?`,
      verify: { kind: "value", inputs: { a: "(1, 2, -7)", b: "(1, 2, 2)", n: "(2, 1, -2)", d: "18" }, params: { ask: "kind", form: "cart" } },
      options: [
        { key: "A", text: t`The line meets the plane at exactly one point`, correct: false, misconceptionId: "C11-M3", value: "one_point" },
        { key: "B", text: t`The line is perpendicular to the plane`, correct: false, misconceptionId: "C11-M5", value: "perpendicular" },
        { key: "C", text: t`The line lies in the plane`, correct: true, value: "lies_in" },
        { key: "D", text: t`The line is parallel to the plane and does not meet it`, correct: false, misconceptionId: "C11-M2", value: "parallel" },
      ],
      solution: {
        steps: [
          t`The line passes through $(1, 2, -7)$ in the direction $(1, 2, 2)$; the normal is $(2, 1, -2)$.`,
          t`$\vec b\cdot\vec n = 2 + 2 - 4 = 0$: the line is parallel to the plane.`,
          t`At $(1, 2, -7)$: $2 + 2 + 14 = 18$, so this point is on the plane.`,
          t`Parallel and sharing a point: the line lies in the plane.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.4 Q.1" },
      stem: t`Which is true of the line $\vec r = (2\hat i - \hat j + 3\hat k)$ $+ \lambda(\hat i + \hat j - \hat k)$ and the plane $\vec r\cdot(\hat i + \hat j + 2\hat k) = 13$?`,
      verify: { kind: "value", inputs: { a: "(2, -1, 3)", b: "(1, 1, -1)", n: "(1, 1, 2)", d: "13" }, params: { ask: "kind", form: "vec" } },
      options: [
        { key: "A", text: t`The line meets the plane at exactly one point`, correct: false, misconceptionId: "C11-M3", value: "one_point" },
        { key: "B", text: t`The line lies in the plane`, correct: false, misconceptionId: "C11-M4", value: "lies_in" },
        { key: "C", text: t`The line is perpendicular to the plane`, correct: false, misconceptionId: "C11-M5", value: "perpendicular" },
        { key: "D", text: t`The line is parallel to the plane and does not meet it`, correct: true, value: "parallel" },
      ],
      solution: {
        steps: [
          t`$\vec b\cdot\vec n = 1 + 1 - 2 = 0$: the line is parallel to the plane.`,
          t`$\vec a\cdot\vec n = 2 - 1 + 6 = 7 \ne 13$, so its point is not on the plane.`,
          t`So the line is parallel to the plane and never meets it.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.19" },
      stem: t`If the line $\dfrac{x + 1}{2} = \dfrac{y - m}{3}$ $= \dfrac{z - 4}{6}$ lies in the plane $3x - 14y + 6z + 49 = 0$, then the value of $m$ is:`,
      verify: { kind: "value", inputs: { a: "(-1, m, 4)", b: "(2, 3, 6)", n: "(3, -14, 6)", d: "-49" }, params: { ask: "param", form: "cart" } },
      options: [
        { key: "A", text: t`Every real value of $m$`, correct: false, misconceptionId: "C11-M4", value: "Reals" },
        { key: "B", text: t`$m = 5$`, correct: true, value: "5" },
        { key: "C", text: t`$m = -2$`, correct: false, misconceptionId: "C11-M2", value: "-2" },
        { key: "D", text: t`$m = \frac{3}{2}$`, correct: false, misconceptionId: "C11-M3", value: "3/2" },
      ],
      solution: {
        steps: [
          t`The line passes through $(-1, m, 4)$ in the direction $(2, 3, 6)$.`,
          t`$\vec b\cdot\vec n = 6 - 42 + 36 = 0$, so the line is parallel to the plane for every $m$.`,
          t`It lies in the plane when $(-1, m, 4)$ is on it: $-3 - 14m + 24 + 49 = 0$.`,
          t`$70 - 14m = 0$, so $m = 5$.`,
        ],
      },
    },
  ],
};
