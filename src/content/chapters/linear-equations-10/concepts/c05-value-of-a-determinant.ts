import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`$\begin{vmatrix} 6 & -2 \\ 5 & 3 \end{vmatrix}$ stands for one number. **Is it $18 - 10 = 8$?**`,
    reveal: t`No. It is $ad - bc$: $6 \times 3 - (-2) \times 5$ $= 18 - (-10)$ $= 28$. The up product is negative, and subtracting a negative adds.`,
  },
  explanation: {
    intuition: [
      t`A **determinant** is a square block of numbers between two upright bars; it stands for one number.`,
      t`The numbers in it are its **entries**: **rows** go across and **columns** go down.`,
      t`With $2$ rows and $2$ columns, it is a determinant of **order 2** (some papers say degree 2).`,
      t`Draw an arrow **down** from top-left to bottom-right, and multiply those two entries.`,
      t`Draw an arrow **up** from bottom-left to top-right, and multiply those two entries.`,
      t`The value is the down product minus the up product: $ad - bc$.`,
    ],
    formal: [
      {
        title: "The rule",
        points: [
          t`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$.`,
          t`$ad$ is the **down product**: top-left times bottom-right.`,
          t`$bc$ is the **up product**: bottom-left times top-right.`,
          t`The down product always comes first; $bc - ad$ gives the wrong sign.`,
          t`Multiply across the diagonals, never along a row: $ab$ and $cd$ play no part.`,
          t`Between the two products there is always a minus; never add them.`,
        ],
      },
      {
        title: "Negative entries",
        points: [
          t`Keep each entry's sign while you multiply.`,
          t`Put a negative entry in brackets: $3 \times (-2) = -6$.`,
          t`If the up product is negative, subtracting it adds: $10 - (-6) = 16$.`,
          t`So write the minus and the bracket first, then simplify: $-(-6) = +6$.`,
        ],
      },
      {
        title: "Fractions and surds",
        points: [
          t`Multiply fractions top by top and bottom by bottom, then cancel: $\frac{2}{5} \times \frac{5}{4} = \frac{1}{2}$.`,
          t`Subtract fractions over a common denominator: $\frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.`,
          t`A **surd** is a root, like $\sqrt{2}$, that is not a whole number.`,
          t`A surd times itself is the number under the root: $\sqrt{2} \times \sqrt{2} = 2$.`,
          t`So $4\sqrt{2} \times \sqrt{2} = 4 \times 2 = 8$.`,
          t`A surd times a plain number stays a surd: $5 \times 2\sqrt{2} = 10\sqrt{2}$.`,
        ],
      },
      {
        title: "Finding an unknown entry",
        points: [
          t`Sometimes one entry is a letter, say $m$, and the value is given.`,
          t`Write $ad - bc$ with the letter in it.`,
          t`Set it equal to the given value: this is a linear equation in $m$.`,
          t`Solve it for $m$, then check by putting $m$ back.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the value of $N = \begin{vmatrix} -8 & -3 \\ 2 & 4 \end{vmatrix}$.`,
      steps: [
        t`Down product: $(-8) \times 4 = -32$.`,
        t`Up product: $2 \times (-3) = -6$.`,
        t`$N = -32 - (-6)$ $= -32 + 6$ $= -26$.`,
      ],
      answer: t`$N = -26$.`,
    },
    figure: {
      alt: "Four entries, a and b on top, c and d below. Two upright bars appear on either side. Then the rows are labelled row 1 and row 2, and the columns column 1 and column 2. A down arrow goes from a to d, then an up arrow from c to b. Last, the value: = ad − bc.",
      axes: "none",
      view: { x: [0, 8], y: [1, 4.9] },
      elements: [
        { kind: "label", at: [3, 3.2], label: "a" },
        { kind: "label", at: [5, 3.2], label: "b" },
        { kind: "label", at: [3, 1.6], label: "c" },
        { kind: "label", at: [5, 1.6], label: "d" },
        { kind: "segment", from: [2.3, 1.3], to: [2.3, 3.95], tone: "muted", step: 1 },
        { kind: "segment", from: [5.7, 1.3], to: [5.7, 3.95], tone: "muted", step: 1 },
        { kind: "label", at: [1.1, 3.2], label: "row 1", tone: "muted", step: 2 },
        { kind: "label", at: [1.1, 1.6], label: "row 2", tone: "muted", step: 2 },
        { kind: "label", at: [3, 4.25], label: "column 1", tone: "muted", step: 2 },
        { kind: "label", at: [5, 4.25], label: "column 2", tone: "muted", step: 2 },
        { kind: "vector", from: [3.2, 3.35], to: [4.78, 2.08], tone: "good", step: 4 },
        { kind: "vector", from: [3.22, 2.08], to: [4.8, 3.35], step: 5 },
        { kind: "label", at: [7, 2.4], label: "= ad − bc", step: 6 },
      ],
    },
    visualSpec: t`Tap an entry to change it; the down and up arrows light up with their products, and the value $ad - bc$ updates.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Taking the up product first: $bc - ad$`,
      remediation: t`The value is the down product minus the up product: $ad - bc$. Starting with $bc$ flips the sign of the answer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Adding the two products, $ad + bc$, often when the up product is negative`,
      remediation: t`Always subtract the up product: $ad - bc$. If it is negative, subtracting it adds: $10 - (-6) = 16$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Multiplying along the rows, $ab - cd$, instead of across the diagonals`,
      remediation: t`Multiply across: top-left with bottom-right ($ad$), then bottom-left with top-right ($bc$). The value is $ad - bc$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Taking a surd times itself as the surd: $\sqrt{3} \times \sqrt{3} = \sqrt{3}$`,
      remediation: t`A surd times itself is the number under the root: $\sqrt{5} \times \sqrt{5} = 5$, so $2\sqrt{5} \times \sqrt{5} = 10$.`,
      fallback: { kind: "ext", topic: "multiplying surds (Std IX Real Numbers)" },
    },
    {
      id: "C05-M5",
      mistake: "Dropping the minus sign of a negative entry while multiplying",
      remediation: t`Keep each entry's sign: put a negative entry in brackets, as in $(-2) \times 5 = -10$. Then work out $ad - bc$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 gives exactly the negative of the value, so it matches the key whenever the determinant is $0$; C05-Q5 leaves it out.`,
    "C05-M4 applies only to entries with a surd, and C05-M5 only to entries with a minus sign.",
    "C05-M5 can agree with C05-M1 or C05-M2 (it does on C05-Q2 and C05-Q6), so it is listed only where it differs.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.3 Q.1" },
      stem: t`Complete the activity: $\begin{vmatrix} 3 & 2 \\ 4 & 5 \end{vmatrix}$ $= \square \times \square - \square \times \square$ $= \square$. The last box holds:`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 2], [4, 5]])" } },
      options: [
        { key: "A", text: t`$-14$`, correct: false, misconceptionId: "C05-M3", value: "-14" },
        { key: "B", text: t`$7$`, correct: true, value: "7" },
        { key: "C", text: t`$-7$`, correct: false, misconceptionId: "C05-M1", value: "-7" },
        { key: "D", text: t`$23$`, correct: false, misconceptionId: "C05-M2", value: "23" },
      ],
      solution: {
        steps: [
          t`Down product: $3 \times 5 = 15$. Up product: $4 \times 2 = 8$.`,
          t`$\begin{vmatrix} 3 & 2 \\ 4 & 5 \end{vmatrix} = 3 \times 5 - 2 \times 4$ $= 15 - 8$.`,
          t`$15 - 8 = 7$, so the last box holds $7$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q1(A)(i)" },
      stem: t`The value of the determinant $\begin{vmatrix} 5 & 3 \\ -7 & -4 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[5, 3], [-7, -4]])" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C05-M1", value: "-1" },
        { key: "B", text: t`$-41$`, correct: false, misconceptionId: "C05-M2", value: "-41" },
        { key: "C", text: t`$-13$`, correct: false, misconceptionId: "C05-M3", value: "-13" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`Down product: $5 \times (-4) = -20$.`,
          t`Up product: $(-7) \times 3 = -21$.`,
          t`Value $= -20 - (-21)$ $= -20 + 21$ $= 1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.3 Q.2(1)" },
      stem: t`The value of $\begin{vmatrix} -1 & 7 \\ 2 & 4 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[-1, 7], [2, 4]])" } },
      options: [
        { key: "A", text: t`$-18$`, correct: true, value: "-18" },
        { key: "B", text: t`$-10$`, correct: false, misconceptionId: "C05-M5", value: "-10" },
        { key: "C", text: t`$18$`, correct: false, misconceptionId: "C05-M1", value: "18" },
        { key: "D", text: t`$-15$`, correct: false, misconceptionId: "C05-M3", value: "-15" },
      ],
      solution: {
        steps: [
          t`Down product: $(-1) \times 4 = -4$.`,
          t`Up product: $2 \times 7 = 14$.`,
          t`Value $= -4 - 14 = -18$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q2(B)(i)" },
      stem: t`The value of $\begin{vmatrix} \dfrac{7}{3} & \dfrac{5}{3} \\ \dfrac{3}{2} & \dfrac{1}{2} \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[Rational(7, 3), Rational(5, 3)], [Rational(3, 2), Rational(1, 2)]])" } },
      options: [
        { key: "A", text: t`$\frac{11}{3}$`, correct: false, misconceptionId: "C05-M2", value: "11/3" },
        { key: "B", text: t`$\frac{113}{36}$`, correct: false, misconceptionId: "C05-M3", value: "113/36" },
        { key: "C", text: t`$- \frac{4}{3}$`, correct: true, value: "-4/3" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C05-M1", value: "4/3" },
      ],
      solution: {
        steps: [
          t`Down product: $\frac{7}{3} \times \frac{1}{2} = \frac{7}{6}$.`,
          t`Up product: $\frac{3}{2} \times \frac{5}{3} = \frac{5}{2}$.`,
          t`Value $= \frac{7}{6} - \frac{15}{6}$ $= -\frac{8}{6}$ $= -\frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q2(A)(i)" },
      stem: t`The value of $\begin{vmatrix} 2\sqrt{3} & 9 \\ 2 & 3\sqrt{3} \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2*sqrt(3), 9], [2, 3*sqrt(3)]])" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$6\sqrt{3} - 18$`, correct: false, misconceptionId: "C05-M4", value: "-18 + 6*sqrt(3)" },
        { key: "C", text: t`$36$`, correct: false, misconceptionId: "C05-M2", value: "36" },
        { key: "D", text: t`$12 \sqrt{3}$`, correct: false, misconceptionId: "C05-M3", value: "12*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Down product: $2\sqrt{3} \times 3\sqrt{3}$ $= 6 \times 3 = 18$.`,
          t`Up product: $2 \times 9 = 18$.`,
          t`Value $= 18 - 18 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q2(iii)" },
      stem: t`If the value of the determinant $\begin{vmatrix} m & 2 \\ -5 & 7 \end{vmatrix}$ is $31$, then $m$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[m, 2], [-5, 7]])", k: "31" }, params: { ask: "m" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$- \frac{41}{7}$`, correct: false, misconceptionId: "C05-M1", value: "-41/7" },
        { key: "C", text: t`$\frac{41}{7}$`, correct: false, misconceptionId: "C05-M2", value: "41/7" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C05-M3", value: "-2" },
      ],
      solution: {
        steps: [
          t`$ad - bc = 7m - (-5) \times 2$ $= 7m + 10$.`,
          t`So $7m + 10 = 31$, and $7m = 21$.`,
          t`$m = 3$.`,
        ],
      },
    },
  ],
};
