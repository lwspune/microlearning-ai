import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/**
 * Figures draw a determinant as labels between two upright bars (50 px a unit). A label sits above
 * its anchor: the middle of its text is LIFT above the anchor.
 */
const LIFT = 0.31;

/** The two upright bars of a determinant, at x = `left` and `right`, from y = `bottom` to `top`. */
const bars = (left: number, right: number, bottom: number, top: number, step?: number): FigureElement[] =>
  [left, right].map((x): FigureElement => ({ kind: "segment", from: [x, bottom], to: [x, top], tone: "muted", ...(step ? { step } : {}) }));

/** A box with corners `lo` and `hi`. */
const box = ([x0, y0]: Pt, [x1, y1]: Pt, step: number): FigureElement[] =>
  ([[[x0, y0], [x1, y0]], [[x1, y0], [x1, y1]], [[x1, y1], [x0, y1]], [[x0, y1], [x0, y0]]] as [Pt, Pt][]).map(
    ([from, to]): FigureElement => ({ kind: "segment", from, to, tone: "good", step }),
  );

/** The 2 × 2 on the idea slide: columns at X2, rows at Y2 (anchors). */
const X2 = [3, 5];
const Y2 = [3.2, 1.6];

/** The 3 × 3 on the expansion slide: columns at X3, rows at Y3 (anchors). */
const X3 = [2.6, 4, 5.4];
const Y3 = [3.4, 2.4, 1.4];
const SUB = ["₁", "₂", "₃"];

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$\begin{vmatrix} 7 & 9 \\ -4 & 3 \end{vmatrix}$ is a single number. **Is it $21 - 36 = -15$?**`,
    reveal: t`No. A $2 \times 2$ determinant is $ad - bc$: $7 \times 3 - 9 \times (-4) = 21 - (-36) = 21 + 36 = 57$. The product $bc$ is negative here, and subtracting a negative adds it.`,
  },
  explanation: {
    intuition: [
      t`A **square array** is numbers set out in **rows**, across, and **columns**, down, as many rows as columns.`,
      t`Put between two upright bars, a square array is a **determinant**: it stands for a single number.`,
      t`A $2 \times 2$ determinant has $2$ rows and $2$ columns, so four **entries**, the numbers in it.`,
      t`Its **leading diagonal** runs from top-left to bottom-right; the other diagonal, from top-right to bottom-left.`,
      t`Its value comes by **cross-multiplying**: the leading diagonal's product minus the other diagonal's.`,
      t`A bigger determinant, such as a $3 \times 3$, is broken up into $2 \times 2$s.`,
    ],
    figure: {
      alt: "Four entries, a and b on top, c and d below. The rows are labelled row 1 and row 2, the columns column 1 and column 2. Two upright bars appear on either side, making a determinant. Then two arrows cross: the leading diagonal, from a down to d, and the other diagonal, from b down to c. Last, the value: = ad − bc.",
      axes: "none",
      view: { x: [0, 8], y: [1, 4.9] },
      elements: [
        ...["a", "b", "c", "d"].map((label, i): FigureElement => ({ kind: "label", at: [X2[i % 2], Y2[Math.floor(i / 2)]], label })),
        ...Y2.map((y, r): FigureElement => ({ kind: "label", at: [1.1, y], label: `row ${r + 1}`, tone: "muted", step: 1 })),
        ...X2.map((x, c): FigureElement => ({ kind: "label", at: [x, 4.25], label: `column ${c + 1}`, tone: "muted", step: 1 })),
        ...bars(2.3, 5.7, 1.3, 3.95, 2),
        { kind: "vector", from: [3.2, 3.35], to: [4.78, 2.08], tone: "good", step: 4 },
        { kind: "vector", from: [4.8, 3.35], to: [3.22, 2.08], step: 4 },
        { kind: "label", at: [7, 2.4], label: "= ad − bc", step: 5 },
      ],
    },
    formal: [
      {
        title: "Value of a 2 × 2",
        points: [
          t`$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ equals $ad - bc$.`,
          t`$ad$ is the leading diagonal's product: top-left times bottom-right.`,
          t`$bc$ is the other diagonal's product: top-right times bottom-left.`,
          t`The leading diagonal comes first; $bc - ad$ would flip the sign.`,
          t`If $bc$ is negative, subtracting it adds: $4 - (-6) = 10$.`,
          t`If an entry holds $i$, replace each $i^2$ by $-1$.`,
        ],
      },
      {
        title: "Expanding a 3 × 3",
        points: [
          t`Name the entries of a $3 \times 3$ by row: $a_1, b_1, c_1$ on top, then the $a_2$ row and the $a_3$ row.`,
          t`To **expand along the first row** is to break it into $2 \times 2$s, one for each top-row entry, starting with $a_1$.`,
          t`Cross out the row and the column of $a_1$: a $2 \times 2$ is left.`,
          t`Multiply $a_1$ by that $2 \times 2$: this is the first term.`,
          t`Do the same for $b_1$ and $c_1$, then join the three terms with the signs $+$, $-$, $+$.`,
        ],
        figure: {
          alt: "A 3 × 3 determinant with rows a₁ b₁ c₁, a₂ b₂ c₂ and a₃ b₃ c₃. The entry a₁ is ringed. Then lines cross out its row and its column, and a box goes round the 2 × 2 left over: b₂ c₂ over b₃ c₃. The label reads: first term: a₁ × the boxed 2 × 2. Last, the signs +, −, + appear above the three columns.",
          axes: "none",
          view: { x: [0, 8], y: [0.3, 4.9] },
          elements: [
            ...Y3.flatMap((y, r) => X3.map((x, c): FigureElement => ({ kind: "label", at: [x, y], label: `${"abc"[c]}${SUB[r]}` }))),
            ...bars(1.9, 6.1, 1.2, 4),
            { kind: "circle", centre: [X3[0], Y3[0] + LIFT], r: 0.34, tone: "good", step: 2 },
            { kind: "segment", from: [2, Y3[0] + LIFT], to: [6, Y3[0] + LIFT], tone: "bad", step: 3 },
            { kind: "segment", from: [X3[0], 1.3], to: [X3[0], 3.95], tone: "bad", step: 3 },
            ...box([3.6, 1.4], [5.8, 3.05], 3),
            { kind: "label", at: [4, 0.45], label: "first term: a₁ × the boxed 2 × 2", tone: "good", step: 4 },
            ...["+", "−", "+"].map((label, c): FigureElement => ({ kind: "label", at: [X3[c], 4.2], label, step: 5 })),
          ],
        },
      },
      {
        title: "The expansion in full",
        points: [
          t`$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$ equals the sum of three terms.`,
          t`First, $+a_1\begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix}$: row 1 and column 1 are crossed out.`,
          t`Then $-b_1\begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix}$: row 1 and column 2 are crossed out.`,
          t`Then $+c_1\begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}$: row 1 and column 3 are crossed out.`,
          t`Each $2 \times 2$ is then worked out as $ad - bc$.`,
        ],
      },
      {
        title: "The signs alternate",
        points: [
          t`Along the first row the signs **alternate**: they switch back and forth, $+$, $-$, $+$.`,
          t`So the middle term, $b_1$ times its $2 \times 2$, is always subtracted.`,
          t`If $b_1$ is negative, $-b_1$ is positive, so that term is added.`,
        ],
      },
      {
        title: "No diagonal shortcut",
        points: [
          t`The rule $ad - bc$ is only for a $2 \times 2$.`,
          t`A $3 \times 3$ always goes through its three $2 \times 2$s.`,
        ],
      },
      {
        title: "Finding an unknown entry",
        points: [
          t`Sometimes an entry holds an unknown $x$, and the determinant's value is given.`,
          t`Expand the determinant: the result is an expression in $x$.`,
          t`Set that expression equal to the given value.`,
          t`Solve the equation for $x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\begin{vmatrix} 3 & -4 & 5 \\ 1 & 1 & -2 \\ 2 & 3 & -1 \end{vmatrix}$.`,
      steps: [
        t`Expand along the first row with signs $+ - +$: $3\begin{vmatrix} 1 & -2 \\ 3 & -1 \end{vmatrix}$ $- (-4)\begin{vmatrix} 1 & -2 \\ 2 & -1 \end{vmatrix}$ $+ 5\begin{vmatrix} 1 & 1 \\ 2 & 3 \end{vmatrix}$.`,
        t`The $2 \times 2$s: $(1)(-1) - (-2)(3)$ $= -1 + 6 = 5$; $(1)(-1) - (-2)(2)$ $= -1 + 4 = 3$; $(1)(3) - (1)(2) = 1$.`,
        t`Put them together: $3 \times 5 + 4 \times 3 + 5 \times 1$ $= 15 + 12 + 5 = 32$.`,
      ],
      answer: t`The determinant is $32$.`,
    },
    visualSpec: t`Tap an entry of the top row to cross out its row and column; the leftover $2 \times 2$ lights up with its sign from $+ - +$, and the running total builds term by term.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Expanding a $3 \times 3$ with all plus signs instead of $+ - +$`,
      remediation: t`Along the first row the signs alternate: $a_1(\ldots) - b_1(\ldots) + c_1(\ldots)$. The middle term is always subtracted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Using the $2 \times 2$ diagonal rule on a $3 \times 3$: the leading diagonal's product minus the other diagonal's`,
      remediation: t`The rule $ad - bc$ is only for a $2 \times 2$. Expand a $3 \times 3$ along a row: each entry times the $2 \times 2$ left when its row and column are crossed out, with signs $+ - +$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Subtracting the cross products the wrong way round: $bc - ad$`,
      remediation: t`A $2 \times 2$ is the leading diagonal first: $ad - bc$, top-left times bottom-right minus top-right times bottom-left. The other order flips the sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Adding the two cross products, $ad + bc$: the minus before a product is lost, often when the product is negative`,
      remediation: t`A $2 \times 2$ is $ad - bc$: always subtract the second product. If that product is negative, subtracting it adds: $4 - (-6) = 10$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Taking $i^2 = 1$ when multiplying entries that contain $i$`,
      remediation: t`$i^2 = -1$, so $i \times i = -1$ and $i \times (-i) = 1$. Replace each $i^2$ by $-1$ before you add up.`,
      fallback: { kind: "ext", topic: "powers of i" },
    },
  ],
  engineNotes: [
    "C01-M3 gives exactly the negative of the determinant, so it matches the key whenever the determinant is 0: it can't be caught on a 'find x if the determinant is 0' item.",
    t`C01-M1 matches the key when the middle term of the expansion is 0 (for example $b_1 = 0$), and C01-M4 when every subtracted product is 0.`,
    t`C01-M1 and C01-M2 apply only to a $3 \times 3$; C01-M5 only to entries with $i$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q1(ii)" },
      stem: t`Given $i^2 = -1$, the value of $\begin{vmatrix} 2i & 3 \\ 4 & -i \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2*I, 3], [4, -I]])" } },
      options: [
        { key: "A", text: t`$-10$`, correct: true, value: "-10" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M3", value: "10" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C01-M4", value: "14" },
        { key: "D", text: t`$-14$`, correct: false, misconceptionId: "C01-M5", value: "-14" },
      ],
      solution: {
        steps: [
          t`$ad - bc = (2i)(-i) - (3)(4) = -2i^2 - 12$.`,
          t`With $i^2 = -1$: $-2i^2 = 2$, so the value is $2 - 12 = -10$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q2" },
      stem: t`The value of $\begin{vmatrix} 1 & -1 & 2 \\ 3 & 2 & -2 \\ 0 & 1 & -2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [3, 2, -2], [0, 1, -2]])" } },
      options: [
        { key: "A", text: t`$-2$`, correct: true, value: "-2" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M1", value: "10" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C01-M2", value: "-4" },
        { key: "D", text: t`$-6$`, correct: false, misconceptionId: "C01-M4", value: "-6" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $1\begin{vmatrix} 2 & -2 \\ 1 & -2 \end{vmatrix} - (-1)\begin{vmatrix} 3 & -2 \\ 0 & -2 \end{vmatrix} + 2\begin{vmatrix} 3 & 2 \\ 0 & 1 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $-4 - (-2) = -2$; $-6 - 0 = -6$; $3 - 0 = 3$.`,
          t`$1(-2) + 1(-6) + 2(3) = -2 - 6 + 6 = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q1(i)" },
      stem: t`The value of $\begin{vmatrix} 2 & -5 & 7 \\ 5 & 2 & 1 \\ 9 & 0 & 2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -5, 7], [5, 2, 1], [9, 0, 2]])" } },
      options: [
        { key: "A", text: t`$-118$`, correct: false, misconceptionId: "C01-M2", value: "-118" },
        { key: "B", text: t`$113$`, correct: false, misconceptionId: "C01-M3", value: "113" },
        { key: "C", text: t`$-113$`, correct: true, value: "-113" },
        { key: "D", text: t`$-123$`, correct: false, misconceptionId: "C01-M1", value: "-123" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $2\begin{vmatrix} 2 & 1 \\ 0 & 2 \end{vmatrix} - (-5)\begin{vmatrix} 5 & 1 \\ 9 & 2 \end{vmatrix} + 7\begin{vmatrix} 5 & 2 \\ 9 & 0 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $4 - 0 = 4$; $10 - 9 = 1$; $0 - 18 = -18$.`,
          t`$2(4) + 5(1) + 7(-18) = 8 + 5 - 126 = -113$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q1(ii)" },
      stem: t`The value of $\begin{vmatrix} 1 & -3 & 12 \\ 0 & 2 & -4 \\ 9 & 7 & 2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -3, 12], [0, 2, -4], [9, 7, 2]])" } },
      options: [
        { key: "A", text: t`$-76$`, correct: true, value: "-76" },
        { key: "B", text: t`$-292$`, correct: false, misconceptionId: "C01-M1", value: "-292" },
        { key: "C", text: t`$-212$`, correct: false, misconceptionId: "C01-M2", value: "-212" },
        { key: "D", text: t`$84$`, correct: false, misconceptionId: "C01-M4", value: "84" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $1\begin{vmatrix} 2 & -4 \\ 7 & 2 \end{vmatrix} - (-3)\begin{vmatrix} 0 & -4 \\ 9 & 2 \end{vmatrix} + 12\begin{vmatrix} 0 & 2 \\ 9 & 7 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $4 - (-28) = 32$; $0 - (-36) = 36$; $0 - 18 = -18$.`,
          t`$1(32) + 3(36) + 12(-18) = 32 + 108 - 216 = -76$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q2(ii)" },
      stem: t`Find $x$ if $\begin{vmatrix} x & -1 & 2 \\ 2x & 1 & -3 \\ 3 & -4 & 5 \end{vmatrix} = 29$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[x, -1, 2], [2*x, 1, -3], [3, -4, 5]])", k: "29" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$x = -2$`, correct: true, value: "{-2}" },
        { key: "B", text: t`$x = -\frac{4}{3}$`, correct: false, misconceptionId: "C01-M1", value: "{-4/3}" },
        { key: "C", text: t`$x = 7$`, correct: false, misconceptionId: "C01-M2", value: "{7}" },
        { key: "D", text: t`$x = \frac{32}{13}$`, correct: false, misconceptionId: "C01-M3", value: "{32/13}" },
      ],
      solution: {
        steps: [
          t`Expand along the first row: $x(5 - 12) - (-1)(10x + 9) + 2(-8x - 3)$.`,
          t`$= -7x + 10x + 9 - 16x - 6 = -13x + 3$.`,
          t`$-13x + 3 = 29$ gives $-13x = 26$, so $x = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.1.3 SolvedEx.2(ii)" },
      stem: t`Find $x$ if $\begin{vmatrix} x & 3 & 2 \\ x & x & 1 \\ 1 & 0 & 1 \end{vmatrix} = 3$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[x, 3, 2], [x, x, 1], [1, 0, 1]])", k: "3" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$x = 2$ or $x = 3$`, correct: false, misconceptionId: "C01-M3", value: "{2, 3}" },
        { key: "B", text: t`$x = -2$ or $x = 3$`, correct: false, misconceptionId: "C01-M4", value: "{-2, 3}" },
        { key: "C", text: t`$x = 0$ or $x = 5$`, correct: true, value: "{0, 5}" },
        { key: "D", text: t`$x = -3$ or $x = 2$`, correct: false, misconceptionId: "C01-M1", value: "{-3, 2}" },
      ],
      solution: {
        steps: [
          t`Expand along the first row: $x(x - 0) - 3(x - 1) + 2(0 - x) = x^2 - 3x + 3 - 2x = x^2 - 5x + 3$.`,
          t`$x^2 - 5x + 3 = 3$ gives $x^2 - 5x = 0$, that is $x(x - 5) = 0$.`,
          t`So $x = 0$ or $x = 5$.`,
        ],
      },
    },
  ],
};
