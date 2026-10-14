import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`What is the area of the triangle with vertices $A(2, 5)$, $B(5, 7)$ and $C(8, 9)$? **What does the answer tell you about the three points?**`,
    reveal: t`$\begin{vmatrix} 2 & 5 & 1 \\ 5 & 7 & 1 \\ 8 & 9 & 1 \end{vmatrix} = 2(7 - 9) - 5(5 - 8) + 1(45 - 56) = -4 + 15 - 11 = 0$. The area is $0$: there is no triangle at all. From $A$ to $B$ and from $B$ to $C$ you go $3$ right and $2$ up, so the three points lie on one line. They are collinear.`,
  },
  explanation: {
    intuition: t`Write each vertex as a row $x \;\; y \;\; 1$ and take the determinant: half of it is the triangle's area, up to sign. Listing the vertices the other way round flips the sign, so you take its absolute value. If the three points slide onto one line, the triangle goes flat and the determinant becomes $0$. So one determinant answers two questions: how big is the triangle, and are the points collinear?`,
    formal: t`**Area of a triangle** with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:
$$\text{Area} = \frac{1}{2}\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|$$
Expand along the first row with signs $+\,-\,+$. The determinant may be negative; the area never is.

**Example.** $A(-2, -3)$, $B(3, 2)$, $C(-1, -8)$:
$$\begin{vmatrix} -2 & -3 & 1 \\ 3 & 2 & 1 \\ -1 & -8 & 1 \end{vmatrix} = -2(2 + 8) + 3(3 + 1) + 1(-24 + 2) = -30$$
Area $= \frac{1}{2}|-30| = 15$ sq. units.

**Collinear points.** $A$, $B$, $C$ lie on one line exactly when the determinant is $0$. To find $k$ for collinearity, set the determinant equal to $0$ and solve.

**A given area $\Delta$.** $\frac{1}{2}|\det| = \Delta$ means $\det = 2\Delta$ or $\det = -2\Delta$. Solve both: there are usually two values of $k$.`,
    worked: {
      prompt: t`The triangle with vertices $P(-3, 0)$, $Q(3, 0)$ and $R(0, k)$ has area $9$ sq. units. Find $k$.`,
      steps: [
        t`$\begin{vmatrix} -3 & 0 & 1 \\ 3 & 0 & 1 \\ 0 & k & 1 \end{vmatrix} = -3(0 - k) - 0(3 - 0) + 1(3k - 0) = 3k + 3k = 6k$.`,
        t`Area $= \frac{1}{2}|6k| = 9$, so $|6k| = 18$.`,
        t`The determinant can be either sign: $6k = 18$ or $6k = -18$, so $k = 3$ or $k = -3$.`,
      ],
      answer: t`$k = 3$ or $k = -3$: $R$ is $3$ units above or below $PQ$, and both triangles have area $9$.`,
      figure: {
        alt: "P(−3, 0) and Q(3, 0) on the x-axis. The third vertex R(0, k) can be R(0, 3) above the axis or R(0, −3) below it; both triangles have base 6, height 3 and area 9.",
        axes: "xy",
        view: { x: [-4.5, 4.5], y: [-4, 4] },
        elements: [
          { kind: "point", at: [-3, 0], label: "P(−3, 0)", labelAt: "nw", step: 1 },
          { kind: "point", at: [3, 0], label: "Q(3, 0)", labelAt: "ne", step: 1 },
          { kind: "segment", from: [-3, 0], to: [3, 0], step: 1 },
          { kind: "segment", from: [3, 0], to: [0, 3], tone: "good", step: 3 },
          { kind: "segment", from: [0, 3], to: [-3, 0], tone: "good", step: 3 },
          { kind: "point", at: [0, 3], label: "R(0, 3)", labelAt: "e", tone: "good", step: 3 },
          { kind: "segment", from: [3, 0], to: [0, -3], tone: "good", step: 3 },
          { kind: "segment", from: [0, -3], to: [-3, 0], tone: "good", step: 3 },
          { kind: "point", at: [0, -3], label: "R(0, −3)", labelAt: "e", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Triangle ABC with A(−2, −3), B(3, 2) and C(−1, −8). Half the determinant's absolute value, ½|−30|, gives its area, 15. Then a point D(1, 0) on the line through A and B: the triangle ABD is flat, with area 0, because A, B and D are collinear.",
      axes: "xy",
      view: { x: [-4, 5], y: [-9.5, 3.5] },
      elements: [
        { kind: "point", at: [-2, -3], label: "A(−2, −3)", labelAt: "w", step: 1 },
        { kind: "point", at: [3, 2], label: "B(3, 2)", labelAt: "e", step: 1 },
        { kind: "point", at: [-1, -8], label: "C(−1, −8)", labelAt: "e", step: 1 },
        { kind: "segment", from: [-2, -3], to: [3, 2], step: 2 },
        { kind: "segment", from: [3, 2], to: [-1, -8], step: 2 },
        { kind: "segment", from: [-1, -8], to: [-2, -3], step: 2 },
        { kind: "label", at: [2.2, -5], label: "Area = ½|−30| = 15", labelAt: "e", tone: "good", step: 3 },
        { kind: "line", through: [[-2, -3], [3, 2]], tone: "muted", dashed: true, step: 4 },
        { kind: "point", at: [1, 0], label: "D(1, 0)", labelAt: "nw", tone: "bad", step: 4 },
        { kind: "label", at: [-2.5, 1.5], label: "area of ABD = 0", labelAt: "n", tone: "bad", step: 4 },
      ],
    },
    visualSpec: t`Drag any vertex of the triangle: the determinant and the area update as you go, and when the three points line up the triangle flattens and both read $0$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Taking the determinant itself as the area, without the $\frac{1}{2}$`,
      remediation: t`The determinant is twice the area. Area $= \frac{1}{2}|\det|$, so halve it (and when the area is given, $|\det| = 2 \times$ area).`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Taking $\frac{1}{2}\det$ as the area, sign and all: a negative area, or only one value of $k$`,
      remediation: t`Area is never negative, but the determinant can be: Area $= \frac{1}{2}|\det|$. When the area is given, solve both $\det = 2\Delta$ and $\det = -2\Delta$; each gives a value of $k$.`,
      fallback: { kind: "ext", topic: "absolute value" },
    },
    {
      id: "C06-M3",
      mistake: t`Expanding with signs $+\,+\,+$: the middle term not negated`,
      remediation: t`Expand along a row with signs $+\,-\,+$. Along the first row the middle term is $-y_1(x_2 - x_3)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: t`From $\frac{1}{2}|\det| = \Delta$, writing $|\det| = \frac{\Delta}{2}$: halving the area instead of doubling it`,
      remediation: t`Multiply both sides of $\frac{1}{2}|\det| = \Delta$ by $2$: $|\det| = 2\Delta$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C06-M5",
      mistake: t`Solving $ak + b = 0$ as $k = \frac{b}{a}$: the sign lost when $b$ moves across`,
      remediation: t`From $ak + b = 0$, $ak = -b$, so $k = -\frac{b}{a}$. Put your $k$ back in: the determinant must come out $0$.`,
      fallback: { kind: "ext", topic: "solving linear equations" },
    },
    {
      id: "C06-M6",
      mistake: t`Taking the last minor the wrong way round: $x_3y_2 - x_2y_3$ in place of $x_2y_3 - x_3y_2$`,
      remediation: t`Every $2 \times 2$ minor is $ad - bc$: top-left times bottom-right first. The last minor is $x_2y_3 - x_3y_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C06-M1 can't show on a collinearity item: half of 0 is 0. C06-M2 shows on an area item only when the determinant, in the order given, is negative; on a given-area item it always shows (one value of k instead of two).",
    "C06-M4 applies only to given-area items and C06-M5 only to collinearity items.",
    "C06-M3 and C06-M6 change one term of the expansion. Where that term is 0, or the change only flips the whole determinant's sign, they give the key (C06-M3 on Ex 4.3 Q7, where y1 = 0, and on Ex 4.3 Q5(i), where it only flips the sign; C06-M6 on Ex 4.3 Q5(i), where x2y3 = x3y2). Draw them from items where they differ.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q11(iii)" },
      stem: t`The area of the triangle with vertices $L(1, 1)$, $M(-2, 2)$ and $N(5, 4)$ is:`,
      verify: { kind: "value", inputs: { x1: "1", y1: "1", x2: "-2", y2: "2", x3: "5", y3: "4" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$13$`, correct: false, misconceptionId: "C06-M1", value: "13" },
        { key: "B", text: t`$- \frac{13}{2}$`, correct: false, misconceptionId: "C06-M2", value: "-13/2" },
        { key: "C", text: t`$\frac{27}{2}$`, correct: false, misconceptionId: "C06-M3", value: "27/2" },
        { key: "D", text: t`$\frac{13}{2}$`, correct: true, value: "13/2" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} 1 & 1 & 1 \\ -2 & 2 & 1 \\ 5 & 4 & 1 \end{vmatrix} = 1(2 - 4) - 1(-2 - 5) + 1(-8 - 10) = -2 + 7 - 18 = -13$.`,
          t`Area $= \frac{1}{2}|-13| = \frac{13}{2}$ sq. units.`,
        ],
        figure: {
          alt: "Triangle LMN with L(1, 1), M(−2, 2) and N(5, 4); its area is 13/2.",
          axes: "xy",
          view: { x: [-3, 6], y: [-0.5, 5] },
          elements: [
            { kind: "point", at: [1, 1], label: "L(1, 1)", labelAt: "s", step: 1 },
            { kind: "point", at: [-2, 2], label: "M(−2, 2)", labelAt: "nw", step: 1 },
            { kind: "point", at: [5, 4], label: "N(5, 4)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [1, 1], to: [-2, 2], step: 1 },
            { kind: "segment", from: [-2, 2], to: [5, 4], step: 1 },
            { kind: "segment", from: [5, 4], to: [1, 1], step: 1 },
            { kind: "label", at: [2.6, 1.6], label: "Area = 13/2", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q5(ii)" },
      stem: t`The area of the triangle with vertices $P\left(\frac{3}{2}, 1\right)$, $Q(4, 2)$ and $R\left(4, -\frac{1}{2}\right)$ is:`,
      verify: { kind: "value", inputs: { x1: "3/2", y1: "1", x2: "4", y2: "2", x3: "4", y3: "-1/2" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$\frac{25}{8}$`, correct: true, value: "25/8" },
        { key: "B", text: t`$\frac{25}{4}$`, correct: false, misconceptionId: "C06-M1", value: "25/4" },
        { key: "C", text: t`$- \frac{25}{8}$`, correct: false, misconceptionId: "C06-M2", value: "-25/8" },
        { key: "D", text: t`$\frac{55}{8}$`, correct: false, misconceptionId: "C06-M6", value: "55/8" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} \frac{3}{2} & 1 & 1 \\ 4 & 2 & 1 \\ 4 & -\frac{1}{2} & 1 \end{vmatrix} = \frac{3}{2}\left(2 + \frac{1}{2}\right) - 1(4 - 4) + 1(-2 - 8) = \frac{15}{4} - 0 - 10 = -\frac{25}{4}$.`,
          t`Area $= \frac{1}{2}\left|-\frac{25}{4}\right| = \frac{25}{8}$ sq. units.`,
        ],
        figure: {
          alt: "Triangle PQR with P(3/2, 1), Q(4, 2) and R(4, −1/2); its area is 25/8.",
          axes: "xy",
          view: { x: [0, 5.5], y: [-1.5, 3] },
          elements: [
            { kind: "point", at: [1.5, 1], label: "P(3/2, 1)", labelAt: "w", step: 1 },
            { kind: "point", at: [4, 2], label: "Q(4, 2)", labelAt: "e", step: 1 },
            { kind: "point", at: [4, -0.5], label: "R(4, −1/2)", labelAt: "e", step: 1 },
            { kind: "segment", from: [1.5, 1], to: [4, 2], step: 1 },
            { kind: "segment", from: [4, 2], to: [4, -0.5], step: 1 },
            { kind: "segment", from: [4, -0.5], to: [1.5, 1], step: 1 },
            { kind: "label", at: [2, 2.3], label: "Area = 25/8", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q8(i)" },
      stem: t`The points $A(3, -1)$, $B(0, -3)$ and $C(12, k)$ are collinear. The value of $k$ is:`,
      verify: { kind: "value", inputs: { x1: "3", y1: "-1", x2: "0", y2: "-3", x3: "12", y3: "k" }, params: { ask: "collinear" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$13$`, correct: false, misconceptionId: "C06-M3", value: "13" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C06-M5", value: "-5" },
        { key: "D", text: t`$-19$`, correct: false, misconceptionId: "C06-M6", value: "-19" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} 3 & -1 & 1 \\ 0 & -3 & 1 \\ 12 & k & 1 \end{vmatrix} = 3(-3 - k) - (-1)(0 - 12) + 1(0 + 36) = -9 - 3k - 12 + 36 = 15 - 3k$.`,
          t`Collinear means the determinant is $0$: $15 - 3k = 0$, so $k = 5$. From $B$ to $A$ is $3$ right, $2$ up; from $A$ to $C(12, 5)$ is $9$ right, $6$ up: the same direction.`,
        ],
        figure: {
          alt: "The points A(3, −1) and B(0, −3), and the line through them. C(12, 5) lies on that line, so A, B and C are collinear.",
          axes: "xy",
          view: { x: [-1, 13.5], y: [-4.5, 6.5] },
          elements: [
            { kind: "point", at: [3, -1], label: "A(3, −1)", labelAt: "se", step: 1 },
            { kind: "point", at: [0, -3], label: "B(0, −3)", labelAt: "se", step: 1 },
            { kind: "line", through: [[0, -3], [3, -1]], tone: "muted", dashed: true, step: 2 },
            { kind: "point", at: [12, 5], label: "C(12, 5)", labelAt: "nw", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.3.3 SolvedEx.3" },
      stem: t`The points $A(3, 7)$, $B(4, -3)$ and $C(5, k)$ are collinear. The value of $k$ is:`,
      verify: { kind: "value", inputs: { x1: "3", y1: "7", x2: "4", y2: "-3", x3: "5", y3: "k" }, params: { ask: "collinear" } },
      options: [
        { key: "A", text: t`$- \frac{17}{7}$`, correct: false, misconceptionId: "C06-M6", value: "-17/7" },
        { key: "B", text: t`$-13$`, correct: true, value: "-13" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C06-M3", value: "1" },
        { key: "D", text: t`$13$`, correct: false, misconceptionId: "C06-M5", value: "13" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} 3 & 7 & 1 \\ 4 & -3 & 1 \\ 5 & k & 1 \end{vmatrix} = 3(-3 - k) - 7(4 - 5) + 1(4k + 15) = -9 - 3k + 7 + 4k + 15 = k + 13$.`,
          t`Collinear means the determinant is $0$: $k + 13 = 0$, so $k = -13$.`,
        ],
        figure: {
          alt: "The points A(3, 7) and B(4, −3), and the steep line through them. C(5, −13) lies on that line, so A, B and C are collinear.",
          axes: "xy",
          view: { x: [-1, 9], y: [-15, 9] },
          elements: [
            { kind: "point", at: [3, 7], label: "A(3, 7)", labelAt: "e", step: 1 },
            { kind: "point", at: [4, -3], label: "B(4, −3)", labelAt: "e", step: 1 },
            { kind: "line", through: [[3, 7], [4, -3]], tone: "muted", dashed: true, step: 2 },
            { kind: "point", at: [5, -13], label: "C(5, −13)", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q7" },
      stem: t`The triangle with vertices $P(k, 0)$, $Q(2, 2)$ and $R(4, 3)$ has area $\frac{3}{2}$ sq. units. Then:`,
      verify: { kind: "value", inputs: { x1: "k", y1: "0", x2: "2", y2: "2", x3: "4", y3: "3", A: "3/2" }, params: { ask: "k_area" } },
      options: [
        { key: "A", text: t`$k = -5$ or $k = 1$`, correct: true, value: "{-5, 1}" },
        { key: "B", text: t`$k = -5$ only`, correct: false, misconceptionId: "C06-M2", value: "{-5}" },
        { key: "C", text: t`$k = - \frac{11}{4}$ or $k = - \frac{5}{4}$`, correct: false, misconceptionId: "C06-M4", value: "{-11/4, -5/4}" },
        { key: "D", text: t`$k = -1$ or $k = 5$`, correct: false, misconceptionId: "C06-M6", value: "{-1, 5}" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} k & 0 & 1 \\ 2 & 2 & 1 \\ 4 & 3 & 1 \end{vmatrix} = k(2 - 3) - 0(2 - 4) + 1(6 - 8) = -k - 2$.`,
          t`$\frac{1}{2}|-k - 2| = \frac{3}{2}$, so $|-k - 2| = 3$: $-k - 2 = 3$ or $-k - 2 = -3$.`,
          t`So $k = -5$ or $k = 1$: $P(-5, 0)$ or $P(1, 0)$.`,
        ],
        figure: {
          alt: "Q(2, 2) and R(4, 3), with two places for P on the x-axis: P(1, 0) and P(−5, 0). Each triangle PQR has area 3/2.",
          axes: "xy",
          view: { x: [-6, 5], y: [-1, 4] },
          elements: [
            { kind: "point", at: [2, 2], label: "Q(2, 2)", labelAt: "nw", step: 1 },
            { kind: "point", at: [4, 3], label: "R(4, 3)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [2, 2], to: [4, 3], step: 1 },
            { kind: "segment", from: [1, 0], to: [2, 2], tone: "good", step: 3 },
            { kind: "segment", from: [4, 3], to: [1, 0], tone: "good", step: 3 },
            { kind: "point", at: [1, 0], label: "P(1, 0)", labelAt: "se", tone: "good", step: 3 },
            { kind: "segment", from: [-5, 0], to: [2, 2], tone: "good", step: 3 },
            { kind: "segment", from: [4, 3], to: [-5, 0], tone: "good", step: 3 },
            { kind: "point", at: [-5, 0], label: "P(−5, 0)", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q12(i)" },
      stem: t`The triangle with vertices $P(k, 0)$, $Q(4, 0)$ and $R(0, 2)$ has area $4$ sq. units. Then:`,
      verify: { kind: "value", inputs: { x1: "k", y1: "0", x2: "4", y2: "0", x3: "0", y3: "2", A: "4" }, params: { ask: "k_area" } },
      options: [
        { key: "A", text: t`$k = 0$ only`, correct: false, misconceptionId: "C06-M2", value: "{0}" },
        { key: "B", text: t`$k = 3$ or $k = 5$`, correct: false, misconceptionId: "C06-M4", value: "{3, 5}" },
        { key: "C", text: t`$k = 0$ or $k = 8$`, correct: true, value: "{0, 8}" },
        { key: "D", text: t`$k = 2$ or $k = 6$`, correct: false, misconceptionId: "C06-M1", value: "{2, 6}" },
      ],
      solution: {
        steps: [
          t`$\begin{vmatrix} k & 0 & 1 \\ 4 & 0 & 1 \\ 0 & 2 & 1 \end{vmatrix} = k(0 - 2) - 0(4 - 0) + 1(8 - 0) = 8 - 2k$.`,
          t`$\frac{1}{2}|8 - 2k| = 4$, so $|8 - 2k| = 8$: $8 - 2k = 8$ or $8 - 2k = -8$.`,
          t`So $k = 0$ or $k = 8$: $P(0, 0)$ or $P(8, 0)$.`,
        ],
        figure: {
          alt: "Q(4, 0) and R(0, 2), with two places for P on the x-axis: P(0, 0) and P(8, 0). Each triangle PQR has area 4.",
          axes: "xy",
          view: { x: [-1, 9], y: [-1, 3] },
          elements: [
            { kind: "point", at: [4, 0], label: "Q(4, 0)", labelAt: "n", step: 1 },
            { kind: "point", at: [0, 2], label: "R(0, 2)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [4, 0], to: [0, 2], step: 1 },
            { kind: "segment", from: [0, 0], to: [4, 0], tone: "good", step: 3 },
            { kind: "segment", from: [0, 2], to: [0, 0], tone: "good", step: 3 },
            { kind: "point", at: [0, 0], label: "P(0, 0)", labelAt: "ne", tone: "good", step: 3 },
            { kind: "segment", from: [8, 0], to: [4, 0], tone: "good", step: 3 },
            { kind: "segment", from: [0, 2], to: [8, 0], tone: "good", step: 3 },
            { kind: "point", at: [8, 0], label: "P(8, 0)", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
