import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

type Tone = FigureElement["tone"];

/** Square brackets round a matrix from x0 to x1, y0 to y1, with short serifs. */
const brackets = (x0: number, x1: number, y0: number, y1: number, step?: number): FigureElement[] =>
  [[x0, 0.2], [x1, -0.2]].flatMap(([x, d]): FigureElement[] => [
    { kind: "segment", from: [x, y0], to: [x, y1], tone: "muted", step },
    { kind: "segment", from: [x, y1], to: [x + d, y1], tone: "muted", step },
    { kind: "segment", from: [x, y0], to: [x + d, y0], tone: "muted", step },
  ]);

/** A box round a row or column of entries. */
const box = (x0: number, x1: number, y0: number, y1: number, tone: Tone, step: number): FigureElement[] =>
  ([[[x0, y0], [x1, y0]], [[x1, y0], [x1, y1]], [[x1, y1], [x0, y1]], [[x0, y1], [x0, y0]]] as [Pt, Pt][]).map(
    ([from, to]): FigureElement => ({ kind: "segment", from, to, tone, step }),
  );

/** Entries of a matrix as labels, the k-th centred on `at(k)` (a label sits just above its anchor). */
const cells = (names: string[], at: (k: number) => Pt, tone: Tone, step?: number): FigureElement[] =>
  names.map((label, k): FigureElement => {
    const [x, y] = at(k);
    return { kind: "label", at: [x, y - 0.22], label, labelAt: "n", tone, step };
  });

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`$A$ is a $2 \times 3$ matrix and $B$ is $3 \times 4$, so $AB$ is $2 \times 4$. **Is $(AB)^T = A^TB^T$?**`,
    reveal: t`It can't be: $A^T$ is $3 \times 2$ and $B^T$ is $4 \times 3$, so $A^TB^T$ can't even be multiplied. Reverse the order: $B^TA^T$ is $(4 \times 3)(3 \times 2) = 4 \times 2$, the order of $(AB)^T$. And it is equal: $(AB)^T = B^TA^T$.`,
  },
  explanation: {
    intuition: [
      t`To **transpose** a matrix $A$ is to write its rows as columns: the result is $A^T$, read "A transpose".`,
      t`Row 1 of $A$, read left to right, becomes column 1 of $A^T$, read top to bottom.`,
      t`Row 2 becomes column 2, and so on for every row.`,
      t`Recall: order $m \times n$ means $m$ rows and $n$ columns; so $A^T$ is $n \times m$.`,
      t`It is a flip about the **leading diagonal**, top left to bottom right: its entries stay, the others swap.`,
      t`Sums and number multiples transpose term by term, but a product transposes in the **reverse order**.`,
    ],
    figure: {
      alt: "The 2 × 3 matrix A with rows a b c and d e f. Then the bracket for A transpose appears beside it. Row 1, a b c, is boxed and appears as column 1 of A transpose, top to bottom. Then row 2, d e f, is boxed and appears as column 2. The orders 2 × 3 and 3 × 2 are labelled. Last, a dashed leading diagonal through a and e is drawn in both matrices: a and e sit in the same places in each.",
      axes: "none",
      view: { x: [-0.9, 8], y: [-0.4, 4.2] },
      elements: [
        ...brackets(0.5, 3.5, 1.5, 3.5),
        { kind: "label", at: [0.35, 2.5], label: "A =", labelAt: "w" },
        ...cells(["a", "b", "c", "d", "e", "f"], (k) => [1 + (k % 3), 3 - Math.floor(k / 3)], "muted"),
        ...brackets(5.5, 7.5, 0.5, 3.5, 1),
        { kind: "label", at: [5.35, 2], label: "Aᵀ =", labelAt: "w", step: 1 },
        ...box(0.65, 3.35, 2.6, 3.4, "good", 2),
        ...cells(["a", "b", "c"], (k) => [6, 3 - k], "good", 2),
        ...box(5.6, 6.4, 0.6, 3.4, "good", 2),
        ...box(0.65, 3.35, 1.6, 2.4, "accent", 3),
        ...cells(["d", "e", "f"], (k) => [7, 3 - k], "accent", 3),
        ...box(6.6, 7.4, 0.6, 3.4, "accent", 3),
        { kind: "label", at: [2, 1.35], label: "2 × 3", labelAt: "s", step: 4 },
        { kind: "label", at: [6.5, 0.35], label: "3 × 2", labelAt: "s", step: 4 },
        { kind: "segment", from: [0.75, 3.25], to: [2.25, 1.75], dashed: true, tone: "muted", step: 5 },
        { kind: "segment", from: [5.75, 3.25], to: [7.25, 1.75], dashed: true, tone: "muted", step: 5 },
        { kind: "label", at: [1.2, 3.6], label: "leading diagonal", labelAt: "n", tone: "muted", step: 5 },
      ],
    },
    formal: [
      {
        title: "The transpose of a matrix",
        points: [
          t`Recall: $A = [a_{ij}]_{m \times n}$ has the entry $a_{ij}$ in row $i$, column $j$.`,
          t`Its **transpose** is $A^T = [a_{ji}]_{n \times m}$, with $n$ rows and $m$ columns.`,
          t`The $(i, j)$ entry of $A^T$ is the $(j, i)$ entry of $A$.`,
          t`For example, $A = \begin{bmatrix} a & b & c \\ d & e & f \end{bmatrix}$ is $2 \times 3$.`,
          t`Its transpose is $A^T = \begin{bmatrix} a & d \\ b & e \\ c & f \end{bmatrix}$, which is $3 \times 2$.`,
        ],
      },
      {
        title: "Row 1 goes down column 1",
        points: [
          t`Read each row of $A$ from left to right.`,
          t`Write it from top to bottom as the matching column of $A^T$.`,
          t`So row 1 goes down column 1, and row 2 goes down column 2.`,
          t`The leading diagonal, $a_{11}, a_{22}, \ldots$, stays where it is.`,
          t`A transpose is a flip about that diagonal, not a quarter turn.`,
        ],
      },
      {
        title: "Properties of the transpose",
        points: [
          t`Flip twice and you are back where you started: $(A^T)^T = A$.`,
          t`For $A$ and $B$ of the same order, a sum transposes term by term.`,
          t`That is, $(A + B)^T = A^T + B^T$.`,
          t`A number multiple keeps its number: $(kA)^T = kA^T$ for any number $k$.`,
        ],
      },
      {
        title: "The reversal law",
        points: [
          t`A product transposes in the **reverse order**: $(AB)^T = B^TA^T$, not $A^TB^T$.`,
          t`Check the orders: let $A$ be $m \times n$ and $B$ be $n \times p$.`,
          t`Then $AB$ is $m \times p$, so $(AB)^T$ is $p \times m$.`,
          t`$B^T$ is $p \times n$ and $A^T$ is $n \times m$, so $B^TA^T$ is $p \times m$ too.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $A = \begin{bmatrix} 1 & 2 \\ 3 & 0 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$, find $(AB)^T$ and check that it equals $B^TA^T$, not $A^TB^T$.`,
      steps: [
        t`$AB = \begin{bmatrix} 0 + 4 & -1 + 2 \\ 0 + 0 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 1 \\ 0 & -3 \end{bmatrix}$.`,
        t`Rows become columns: $(AB)^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$.`,
        t`$B^T = \begin{bmatrix} 0 & 2 \\ -1 & 1 \end{bmatrix}$, $A^T = \begin{bmatrix} 1 & 3 \\ 2 & 0 \end{bmatrix}$, so $B^TA^T$ $= \begin{bmatrix} 0 + 4 & 0 + 0 \\ -1 + 2 & -3 + 0 \end{bmatrix}$ $= \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$. It matches.`,
        t`In the other order, $A^TB^T$ $= \begin{bmatrix} 0 - 3 & 2 + 3 \\ 0 + 0 & 4 + 0 \end{bmatrix}$ $= \begin{bmatrix} -3 & 5 \\ 0 & 4 \end{bmatrix}$, which is different.`,
      ],
      answer: t`$(AB)^T = B^TA^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$, while $A^TB^T$ is a different matrix.`,
    },
    visualSpec: t`Drag a slider to flip a $2 \times 3$ matrix about its leading diagonal: each row swings down into a column, the diagonal entries stay fixed, and the order label changes from $2 \times 3$ to $3 \times 2$.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Transposing a product without reversing the order: $(AB)^T = A^TB^T$`,
      remediation: t`A product transposes in the reverse order: $(AB)^T = B^TA^T$. If $A$ is $3 \times 2$ and $B$ is $2 \times 3$, $(AB)^T$ is $3 \times 3$ but $A^TB^T$ is only $2 \times 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Reversing the order of a product but not transposing the factors: $(AB)^T = BA$`,
      remediation: t`Reverse the order **and** transpose each factor: $(AB)^T = B^TA^T$. Or simply work out $AB$ and then write its rows as columns.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Turning the matrix a quarter turn clockwise: the first row becomes the last column",
      remediation: t`A transpose is a flip about the leading diagonal, not a turn: row 1 becomes column 1, row 2 becomes column 2. The $(i, j)$ entry of $A^T$ is the $(j, i)$ entry of $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Keeping the entries in reading order and breaking them into rows of the new length",
      remediation: t`Changing the order from $m \times n$ to $n \times m$ is not enough: the entries must move. Row 1 of $A$, read left to right, becomes column 1 of $A^T$, read top to bottom.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Working out the matrix inside correctly but never transposing the result",
      remediation: t`Carry out every transpose in the question: once the sum or product is worked out, write its rows as columns. A $3 \times 2$ result becomes $2 \times 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Turning the matrix a quarter turn anticlockwise: each row is written up its column, bottom to top",
      remediation: t`Each row goes **down** its column: the first entry of row 1 sits at the top of column 1. The leading diagonal $a_{11}, a_{22}, \ldots$ stays where it is.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C11-M1 and C11-M2 apply only to products. C11-M1 gives the key when $AB = BA$; C11-M2 gives it when $BA = (AB)^T$, which always holds for symmetric $A$ and $B$. Diagnose with non-square or non-symmetric factors.`,
    "C11-M4 applies only to a non-square matrix: a square matrix reshapes to itself.",
    "C11-M5 gives the key whenever the result is symmetric; C11-M3 and C11-M6 can agree with the key on special matrices (for example a square matrix with all entries equal). Diagnose with a non-symmetric result.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q1(ii)" },
      stem: t`If $A = \begin{bmatrix} 2 & -6 & 1 \\ -4 & 0 & 5 \end{bmatrix}$, then $A^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -6, 1], [-4, 0, 5]])" }, params: { form: "T" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & -4\\-6 & 0\\1 & 5\end{matrix}\right]$`, correct: true, value: "Matrix([[2, -4], [-6, 0], [1, 5]])" },
        { key: "B", text: t`$\left[\begin{matrix}-4 & 2\\0 & -6\\5 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M3", value: "Matrix([[-4, 2], [0, -6], [5, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}2 & -6\\1 & -4\\0 & 5\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M4", value: "Matrix([[2, -6], [1, -4], [0, 5]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & 5\\-6 & 0\\2 & -4\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M6", value: "Matrix([[1, 5], [-6, 0], [2, -4]])" },
      ],
      solution: {
        steps: [
          t`$A$ is $2 \times 3$, so $A^T$ is $3 \times 2$.`,
          t`Row 1, $(2, -6, 1)$, becomes column 1; row 2, $(-4, 0, 5)$, becomes column 2.`,
          t`$A^T = \begin{bmatrix} 2 & -4 \\ -6 & 0 \\ 1 & 5 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q3" },
      stem: t`If $A = \begin{bmatrix} 5 & -3 \\ 4 & -3 \\ -2 & 1 \end{bmatrix}$, then $(2A)^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[5, -3], [4, -3], [-2, 1]])", a: "2" }, params: { form: "T" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}10 & -6 & 8\\-6 & -4 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M4", value: "Matrix([[10, -6, 8], [-6, -4, 2]])" },
        { key: "B", text: t`$\left[\begin{matrix}10 & -6\\8 & -6\\-4 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M5", value: "Matrix([[10, -6], [8, -6], [-4, 2]])" },
        { key: "C", text: t`$\left[\begin{matrix}10 & 8 & -4\\-6 & -6 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[10, 8, -4], [-6, -6, 2]])" },
        { key: "D", text: t`$\left[\begin{matrix}-4 & 8 & 10\\2 & -6 & -6\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M3", value: "Matrix([[-4, 8, 10], [2, -6, -6]])" },
      ],
      solution: {
        steps: [
          t`$2A = \begin{bmatrix} 10 & -6 \\ 8 & -6 \\ -4 & 2 \end{bmatrix}$, a $3 \times 2$ matrix.`,
          t`Its rows become columns: $(2A)^T = \begin{bmatrix} 10 & 8 & -4 \\ -6 & -6 & 2 \end{bmatrix}$.`,
          t`Check: $A^T = \begin{bmatrix} 5 & 4 & -2 \\ -3 & -3 & 1 \end{bmatrix}$, and $2A^T$ gives the same matrix, as $(kA)^T = kA^T$ says.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q8(i)" },
      stem: t`If $A = \begin{bmatrix} 7 & 3 & 0 \\ 0 & 4 & -2 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & -2 & 3 \\ 2 & 1 & -4 \end{bmatrix}$, then $A^T + 4B^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[7, 3, 0], [0, 4, -2]])", B: "Matrix([[0, -2, 3], [2, 1, -4]])", b: "4" }, params: { form: "sumT" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}7 & -5\\12 & 8\\8 & -18\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M4", value: "Matrix([[7, -5], [12, 8], [8, -18]])" },
        { key: "B", text: t`$\left[\begin{matrix}7 & -5 & 12\\8 & 8 & -18\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M5", value: "Matrix([[7, -5, 12], [8, 8, -18]])" },
        { key: "C", text: t`$\left[\begin{matrix}12 & -18\\-5 & 8\\7 & 8\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M6", value: "Matrix([[12, -18], [-5, 8], [7, 8]])" },
        { key: "D", text: t`$\left[\begin{matrix}7 & 8\\-5 & 8\\12 & -18\end{matrix}\right]$`, correct: true, value: "Matrix([[7, 8], [-5, 8], [12, -18]])" },
      ],
      solution: {
        steps: [
          t`$A^T = \begin{bmatrix} 7 & 0 \\ 3 & 4 \\ 0 & -2 \end{bmatrix}$ and $B^T = \begin{bmatrix} 0 & 2 \\ -2 & 1 \\ 3 & -4 \end{bmatrix}$, so $4B^T = \begin{bmatrix} 0 & 8 \\ -8 & 4 \\ 12 & -16 \end{bmatrix}$.`,
          t`Add entry by entry: $A^T + 4B^T = \begin{bmatrix} 7 & 8 \\ -5 & 8 \\ 12 & -18 \end{bmatrix}$.`,
          t`Check: $A + 4B = \begin{bmatrix} 7 & -5 & 12 \\ 8 & 8 & -18 \end{bmatrix}$, and its transpose is the same, since $(A + 4B)^T = A^T + 4B^T$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4B II Q4(ii)" },
      stem: t`If $A = \begin{bmatrix} 2 & -3 \\ 3 & -2 \\ -1 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} -3 & 4 & 1 \\ 2 & -1 & -3 \end{bmatrix}$, then $(3A - 5B^T)^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3], [3, -2], [-1, 4]])", B: "Matrix([[-3, 4, 1], [2, -1, -3]])", a: "3", b: "-5" }, params: { form: "Tof" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}21 & -19\\-11 & -1\\-8 & 27\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M5", value: "Matrix([[21, -19], [-11, -1], [-8, 27]])" },
        { key: "B", text: t`$\left[\begin{matrix}6 & -1 & 2\\1 & -11 & 12\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M6", value: "Matrix([[6, -1, 2], [1, -11, 12]])" },
        { key: "C", text: t`$\left[\begin{matrix}21 & -11 & -8\\-19 & -1 & 27\end{matrix}\right]$`, correct: true, value: "Matrix([[21, -11, -8], [-19, -1, 27]])" },
        { key: "D", text: t`$\left[\begin{matrix}12 & 14 & -4\\7 & -26 & 6\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M3", value: "Matrix([[12, 14, -4], [7, -26, 6]])" },
      ],
      solution: {
        steps: [
          t`$B^T = \begin{bmatrix} -3 & 2 \\ 4 & -1 \\ 1 & -3 \end{bmatrix}$, so $3A - 5B^T = \begin{bmatrix} 6 + 15 & -9 - 10 \\ 9 - 20 & -6 + 5 \\ -3 - 5 & 12 + 15 \end{bmatrix} = \begin{bmatrix} 21 & -19 \\ -11 & -1 \\ -8 & 27 \end{bmatrix}$.`,
          t`Transpose it: $(3A - 5B^T)^T = \begin{bmatrix} 21 & -11 & -8 \\ -19 & -1 & 27 \end{bmatrix}$.`,
          t`This is $3A^T - 5B$, since $(B^T)^T = B$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q13(i)" },
      stem: t`If $A = \begin{bmatrix} 2 & -1 \\ 3 & -2 \\ 4 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & 3 & -4 \\ 2 & -1 & 1 \end{bmatrix}$, then $(AB)^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -1], [3, -2], [4, 1]])", B: "Matrix([[0, 3, -4], [2, -1, 1]])" }, params: { form: "AB" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-7 & 5\\-10 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M1", value: "Matrix([[-7, 5], [-10, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}-7 & -10\\5 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M2", value: "Matrix([[-7, -10], [5, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}-2 & 7 & -9\\-4 & 11 & -14\\2 & 11 & -15\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M5", value: "Matrix([[-2, 7, -9], [-4, 11, -14], [2, 11, -15]])" },
        { key: "D", text: t`$\left[\begin{matrix}-2 & -4 & 2\\7 & 11 & 11\\-9 & -14 & -15\end{matrix}\right]$`, correct: true, value: "Matrix([[-2, -4, 2], [7, 11, 11], [-9, -14, -15]])" },
      ],
      solution: {
        steps: [
          t`$A$ is $3 \times 2$ and $B$ is $2 \times 3$, so $AB$ is $3 \times 3$, and so is $(AB)^T$.`,
          t`$AB = \begin{bmatrix} 0 - 2 & 6 + 1 & -8 - 1 \\ 0 - 4 & 9 + 2 & -12 - 2 \\ 0 + 2 & 12 - 1 & -16 + 1 \end{bmatrix} = \begin{bmatrix} -2 & 7 & -9 \\ -4 & 11 & -14 \\ 2 & 11 & -15 \end{bmatrix}$.`,
          t`Rows become columns: $(AB)^T = \begin{bmatrix} -2 & -4 & 2 \\ 7 & 11 & 11 \\ -9 & -14 & -15 \end{bmatrix}$, which is $B^TA^T$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4B II Q22" },
      stem: t`If $A = \begin{bmatrix} 2 & -4 \\ 3 & -2 \\ 0 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & -1 & 2 \\ -2 & 1 & 0 \end{bmatrix}$, then $(AB)^T$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -4], [3, -2], [0, 1]])", B: "Matrix([[1, -1, 2], [-2, 1, 0]])" }, params: { form: "AB" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-2 & 7 & 10\\1 & -5 & -6\\0 & 6 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M3", value: "Matrix([[-2, 7, 10], [1, -5, -6], [0, 6, 4]])" },
        { key: "B", text: t`$\left[\begin{matrix}10 & 7 & -2\\-6 & -5 & 1\\4 & 6 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[10, 7, -2], [-6, -5, 1], [4, 6, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}-1 & -1\\0 & 6\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M1", value: "Matrix([[-1, -1], [0, 6]])" },
        { key: "D", text: t`$\left[\begin{matrix}-1 & 0\\-1 & 6\end{matrix}\right]$`, correct: false, misconceptionId: "C11-M2", value: "Matrix([[-1, 0], [-1, 6]])" },
      ],
      solution: {
        steps: [
          t`$A$ is $3 \times 2$ and $B$ is $2 \times 3$, so $(AB)^T$ is $3 \times 3$. A $2 \times 2$ answer like $A^TB^T$ is ruled out.`,
          t`$AB = \begin{bmatrix} 2 + 8 & -2 - 4 & 4 + 0 \\ 3 + 4 & -3 - 2 & 6 + 0 \\ 0 - 2 & 0 + 1 & 0 + 0 \end{bmatrix} = \begin{bmatrix} 10 & -6 & 4 \\ 7 & -5 & 6 \\ -2 & 1 & 0 \end{bmatrix}$.`,
          t`Rows become columns: $(AB)^T = \begin{bmatrix} 10 & 7 & -2 \\ -6 & -5 & 1 \\ 4 & 6 & 0 \end{bmatrix}$, which is $B^TA^T$.`,
        ],
      },
    },
  ],
};
