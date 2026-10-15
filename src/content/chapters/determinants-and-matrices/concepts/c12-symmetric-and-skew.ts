import type { Concept, Figure, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

type Tone = FigureElement["tone"];

/** Where the entry in row r, column c (1 to 3) of a 3 × 3 matrix sits. */
const at = (r: number, c: number): Pt => [c, 4 - r];

/** Square brackets round the 3 × 3 matrix, with short serifs. */
const brackets: FigureElement[] = [[0.5, 0.2], [3.5, -0.2]].flatMap(([x, d]): FigureElement[] => [
  { kind: "segment", from: [x, 0.65], to: [x, 3.6], tone: "muted" },
  { kind: "segment", from: [x, 3.6], to: [x + d, 3.6], tone: "muted" },
  { kind: "segment", from: [x, 0.65], to: [x + d, 0.65], tone: "muted" },
]);

/** The nine entries, row by row, as labels. */
const entries = (names: string[]): FigureElement[] =>
  names.map((label, k): FigureElement => ({ kind: "label", at: at(Math.floor(k / 3) + 1, (k % 3) + 1), label, labelAt: "n" }));

/** A box round the entry in row r, column c (its text sits about 0.13 above its anchor). */
const box = (r: number, c: number, tone: Tone, step: number): FigureElement[] => {
  const [x, y] = at(r, c);
  const [x0, x1, y0, y1] = [x - 0.4, x + 0.4, y - 0.27, y + 0.53];
  return ([[[x0, y0], [x1, y0]], [[x1, y0], [x1, y1]], [[x1, y1], [x0, y1]], [[x0, y1], [x0, y0]]] as [Pt, Pt][]).map(
    ([from, to]): FigureElement => ({ kind: "segment", from, to, tone, step }),
  );
};

/**
 * The dashed leading diagonal, from top left to bottom right, the fold line, through the
 * diagonal entries' text. List it before the entries so their halos break it round the text.
 */
const diagonal = (step?: number): FigureElement[] => [
  { kind: "segment", from: [0.6, 3.53], to: [3.45, 0.68], dashed: true, tone: "muted", step },
];

/** Each mirror pair boxed in its own tone: (1, 2) with (2, 1), (1, 3) with (3, 1), (2, 3) with (3, 2). */
const pairs = (step: number): FigureElement[] => [
  ...box(1, 2, "good", step), ...box(2, 1, "good", step),
  ...box(1, 3, "accent", step), ...box(3, 1, "accent", step),
  ...box(2, 3, "bad", step), ...box(3, 2, "bad", step),
];

/** The three diagonal entries boxed. */
const diagonalBoxes = (tone: Tone, step: number): FigureElement[] => [1, 2, 3].flatMap((i) => box(i, i, tone, step));

const view: Figure["view"] = { x: [0, 4], y: [0.4, 4] };

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`In $\begin{bmatrix} 2 & 5 & 1 \\ -5 & 4 & 6 \\ -1 & -6 & 3 \end{bmatrix}$ every entry off the diagonal is the negative of its mirror image: $5$ and $-5$, $1$ and $-1$, $6$ and $-6$. **Is the matrix skew-symmetric?**`,
    reveal: t`No. Skew-symmetric means $a_{ij} = -a_{ji}$ for **every** $i$ and $j$, the diagonal included. There it says $a_{ii} = -a_{ii}$, so $a_{ii} = 0$. This diagonal is $2, 4, 3$, so the matrix is not skew-symmetric. It is not symmetric either ($5 \ne -5$): it is neither.`,
  },
  explanation: {
    intuition: [
      t`Recall: the **leading diagonal** of a square matrix runs from its top left entry to its bottom right.`,
      t`Fold the matrix along that diagonal: each entry $a_{ij}$ lands on its **mirror image** $a_{ji}$.`,
      t`Recall: swapping every $a_{ij}$ with $a_{ji}$ is exactly what the transpose $A^T$ does.`,
      t`A matrix is **symmetric** if every entry lands on an equal one, and **skew-symmetric** if on its negative.`,
      t`The diagonal lands on itself, so a skew-symmetric matrix has each diagonal entry equal to its own negative: $0$.`,
      t`Every square matrix is a mix of the two: half of $A + A^T$ is symmetric, half of $A - A^T$ skew-symmetric.`,
    ],
    figure: {
      alt: "A 3 × 3 matrix with entries a₁₁ to a₃₃. First a dashed line is drawn along its leading diagonal, through a₁₁, a₂₂ and a₃₃, from top left to bottom right. Then a₁₂ and a₂₁ are boxed: they sit on opposite sides of the diagonal, each the mirror image of the other. Last, the three diagonal entries are boxed: folding along the diagonal leaves them where they are.",
      axes: "none",
      view,
      elements: [
        ...brackets,
        ...diagonal(1),
        ...entries(["a₁₁", "a₁₂", "a₁₃", "a₂₁", "a₂₂", "a₂₃", "a₃₁", "a₃₂", "a₃₃"]),
        { kind: "label", at: [1.2, 3.65], label: "leading diagonal", labelAt: "n", tone: "muted", step: 1 },
        ...box(1, 2, "good", 2),
        ...box(2, 1, "good", 2),
        ...diagonalBoxes("accent", 5),
      ],
    },
    formal: [
      {
        title: "Symmetric matrices",
        points: [
          t`A square matrix $A$ is **symmetric** when $A^T = A$.`,
          t`Entry by entry, that says $a_{ij} = a_{ji}$ for all $i$ and $j$.`,
          t`So each pair of mirror entries is equal, sign included: here $5$ and $5$, $1$ and $1$, $6$ and $6$.`,
          t`A diagonal entry is its own mirror image, so the diagonal entries can be anything.`,
        ],
        figure: {
          alt: "The symmetric matrix with rows 2 5 1, 5 4 6 and 1 6 3, with its leading diagonal dashed. The mirror pairs are boxed in matching colours: 5 and 5, 1 and 1, 6 and 6, each pair equal. Then the diagonal entries 2, 4 and 3 are boxed: they can be any numbers.",
          axes: "none",
          view,
          elements: [
            ...brackets,
            ...diagonal(),
            ...entries(["2", "5", "1", "5", "4", "6", "1", "6", "3"]),
            ...pairs(3),
            ...diagonalBoxes("muted", 4),
          ],
        },
      },
      {
        title: "Skew-symmetric matrices",
        points: [
          t`A square matrix $A$ is **skew-symmetric** when $A^T = -A$.`,
          t`Entry by entry, that says $a_{ij} = -a_{ji}$ for all $i$ and $j$.`,
          t`So each pair of mirror entries is a pair of negatives: here $5$ and $-5$, $-1$ and $1$, $6$ and $-6$.`,
          t`With $i = j$ it says $a_{ii} = -a_{ii}$, so **every diagonal entry is $0$**.`,
        ],
        figure: {
          alt: "The skew-symmetric matrix with rows 0 5 −1, −5 0 6 and 1 −6 0, with its leading diagonal dashed. The mirror pairs are boxed in matching colours: 5 and −5, −1 and 1, 6 and −6, each pair negatives. Then the diagonal entries are boxed: all three are 0.",
          axes: "none",
          view,
          elements: [
            ...brackets,
            ...diagonal(),
            ...entries(["0", "5", "−1", "−5", "0", "6", "1", "−6", "0"]),
            ...pairs(3),
            ...diagonalBoxes("muted", 4),
          ],
        },
      },
      {
        title: "Both, one or neither",
        points: [
          t`Recall: a **diagonal matrix** has every entry off the leading diagonal equal to $0$.`,
          t`Its mirror pairs are all $0$ and $0$, so a diagonal matrix is always symmetric.`,
          t`If one of its diagonal entries is not $0$, it is not skew-symmetric: it is symmetric only.`,
          t`A matrix that is both has $a_{ij} = a_{ji} = -a_{ji}$, so every entry is $0$.`,
          t`So the **zero matrix** $O$, with every entry $0$, is the only matrix that is both.`,
          t`A matrix can be **neither**: say its mirror pairs are negatives but its diagonal is not all $0$.`,
        ],
      },
      {
        title: "Finding an unknown entry",
        points: [
          t`If $A$ is symmetric, set the entry with the unknown equal to its mirror image.`,
          t`If $A$ is skew-symmetric, set it equal to **minus** its mirror image.`,
          t`Bracket the whole mirror entry before you negate it.`,
          t`So $-(3x - 1) = -3x + 1$, not $-3x - 1$.`,
          t`Then solve that equation for the unknown.`,
        ],
      },
      {
        title: "Two always-true facts",
        points: [
          t`Take any square matrix $A$, and recall that $(A^T)^T = A$ and a sum transposes term by term.`,
          t`So $(A + A^T)^T = A^T + A$, which is $A + A^T$ again.`,
          t`That makes $A + A^T$ always symmetric.`,
          t`Likewise $(A - A^T)^T = A^T - A$.`,
          t`That is $-(A - A^T)$, so $A - A^T$ is always skew-symmetric.`,
        ],
      },
      {
        title: "Splitting a square matrix",
        points: [
          t`Every square matrix $A$ is a sum $A = P + Q$, with $P$ symmetric and $Q$ skew-symmetric.`,
          t`The symmetric part is $P = \frac{1}{2}(A + A^T)$.`,
          t`The skew-symmetric part is $Q = \frac{1}{2}(A - A^T)$.`,
          t`Halving every entry keeps a matrix's type, so $P$ is still symmetric and $Q$ still skew-symmetric.`,
          t`Adding them, the $A^T$ terms cancel: $P + Q = \frac{1}{2}(2A) = A$.`,
          t`Without the halves the two add up to $2A$, not $A$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Express $A = \begin{bmatrix} 5 & 2 & -4 \\ 3 & -7 & 2 \\ 4 & -5 & -3 \end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix.`,
      steps: [
        t`Write the transpose: rows become columns. $A^T = \begin{bmatrix} 5 & 3 & 4 \\ 2 & -7 & -5 \\ -4 & 2 & -3 \end{bmatrix}$.`,
        t`$A + A^T = \begin{bmatrix} 10 & 5 & 0 \\ 5 & -14 & -3 \\ 0 & -3 & -6 \end{bmatrix}$, so $P = \frac{1}{2}(A + A^T)$ $= \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$. Mirror entries are equal: $P$ is symmetric.`,
        t`$A - A^T = \begin{bmatrix} 0 & -1 & -8 \\ 1 & 0 & 7 \\ 8 & -7 & 0 \end{bmatrix}$, so $Q = \frac{1}{2}(A - A^T)$ $= \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$. Mirror entries are negatives and the diagonal is $0$: $Q$ is skew-symmetric.`,
        t`Check one entry of $P + Q$: in row 1, column 2, $\frac{5}{2} + \left(-\frac{1}{2}\right)$ $= 2 = a_{12}$. Every other entry adds back to $A$ the same way.`,
      ],
      answer: t`$A = \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$ $+ \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$, symmetric plus skew-symmetric.`,
    },
    visualSpec: t`Drag a fold line onto the leading diagonal of a $3 \times 3$ matrix: mirror pairs light up green when equal and orange when negatives, and a slider splits the matrix into its symmetric part $P$ and skew-symmetric part $Q$.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Thinks a skew-symmetric matrix only needs $a_{ij} = -a_{ji}$ off the diagonal, so its diagonal can be anything`,
      remediation: t`$a_{ij} = -a_{ji}$ must hold for every $i$ and $j$, the diagonal included, where it says $a_{ii} = -a_{ii}$. So every diagonal entry of a skew-symmetric matrix is $0$, and a diagonal matrix with a non-zero entry is symmetric only.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M2",
      mistake: t`Leaves out the half: takes $P = A + A^T$ and $Q = A - A^T$`,
      remediation: t`$(A + A^T) + (A - A^T) = 2A$, not $A$. Halve both: $P = \frac{1}{2}(A + A^T)$ and $Q = \frac{1}{2}(A - A^T)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Mixes up the two types: takes symmetric to mean $A^T = -A$ and skew-symmetric to mean $A^T = A$`,
      remediation: t`Symmetric means $A^T = A$: mirror entries are equal. Skew-symmetric means $A^T = -A$: mirror entries are negatives and the diagonal is $0$. So the symmetric part of $A$ is $\frac{1}{2}(A + A^T)$, and the skew part is $\frac{1}{2}(A - A^T)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Mirrors in the other diagonal, from top right to bottom left",
      remediation: t`Symmetry is about the leading diagonal, from top left to bottom right: $a_{ij}$ pairs with $a_{ji}$, the entry with its row and column numbers swapped, just as in $A^T$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M5",
      mistake: t`Sees $5$ and $-5$ as matching, so calls a matrix symmetric when mirror entries are equal in size, whatever their signs`,
      remediation: t`Symmetric needs $a_{ij} = a_{ji}$ exactly, sign included. Mirror entries that are negatives of each other, with a zero diagonal, make a matrix skew-symmetric, not symmetric.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: t`Negates only the first term of a two-term entry: writes $-(2x - 3)$ as $-2x - 3$`,
      remediation: t`The minus sign multiplies the whole entry: $-(2x - 3) = -2x + 3$. Put the entry in brackets before you negate it.`,
      fallback: { kind: "ext", topic: "removing brackets" },
    },
  ],
  engineNotes: [
    "C12-M1 shows only on a matrix whose off-diagonal mirror pairs are negatives (or all zero) and whose diagonal is not all zero, such as a non-zero diagonal matrix or the hook's matrix.",
    "C12-M3 has no swapped name for a matrix that is both or neither, so its type items need a matrix that is exactly one of the two types.",
    "C12-M4 gives the key on a matrix that is also symmetric (or skew-symmetric) about the other diagonal; draw its items from matrices where the two reflections differ.",
    "C12-M5 shows only where some mirror pair is a pair of non-zero negatives.",
    t`C12-M6 needs the unknown in a two-term entry that sits below the diagonal, so the student negates it when writing $a_{ij} = -a_{ji}$.`,
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q2(vii)" },
      stem: t`The matrix $A = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & \frac{1}{3} \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 0, 0], [0, 5, 0], [0, 0, Rational(1, 3)]])" }, params: { ask: "type" } },
      options: [
        { key: "A", text: t`Both symmetric and skew-symmetric`, correct: false, misconceptionId: "C12-M1", value: "both" },
        { key: "B", text: t`Skew-symmetric only`, correct: false, misconceptionId: "C12-M3", value: "skew_symmetric" },
        { key: "C", text: t`Neither symmetric nor skew-symmetric`, correct: false, misconceptionId: "C12-M4", value: "neither" },
        { key: "D", text: t`Symmetric only`, correct: true, value: "symmetric" },
      ],
      solution: {
        steps: [
          t`Swapping rows and columns leaves a diagonal matrix as it is, so $A^T = A$: $A$ is symmetric.`,
          t`$-A$ has diagonal $-3, -5, -\frac{1}{3}$, so $A^T \ne -A$. A skew-symmetric matrix needs every diagonal entry to be $0$.`,
          t`So $A$ is symmetric only.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q9(iii)" },
      stem: t`The matrix $A = \begin{bmatrix} 0 & 1+2i & i-2 \\ -1-2i & 0 & -7 \\ 2-i & 7 & 0 \end{bmatrix}$, where $i = \sqrt{-1}$, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[0, 1 + 2*I, I - 2], [-1 - 2*I, 0, -7], [2 - I, 7, 0]])" }, params: { ask: "type" } },
      options: [
        { key: "A", text: t`Both symmetric and skew-symmetric`, correct: false, misconceptionId: "C12-M5", value: "both" },
        { key: "B", text: t`Skew-symmetric only`, correct: true, value: "skew_symmetric" },
        { key: "C", text: t`Symmetric only`, correct: false, misconceptionId: "C12-M3", value: "symmetric" },
        { key: "D", text: t`Neither symmetric nor skew-symmetric`, correct: false, misconceptionId: "C12-M4", value: "neither" },
      ],
      solution: {
        steps: [
          t`Compare mirror pairs: $a_{21} = -1 - 2i = -a_{12}$, $a_{31} = 2 - i = -(i - 2) = -a_{13}$, and $a_{32} = 7 = -a_{23}$.`,
          t`Every diagonal entry is $0$. So $A^T = -A$: $A$ is skew-symmetric.`,
          t`It is not symmetric: $a_{12} = 1 + 2i$ but $a_{21} = -1 - 2i$, and a non-zero number never equals its negative. So $A$ is skew-symmetric only.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q8" },
      stem: t`If $A = \begin{bmatrix} 0 & 7 & 4 \\ 2x - 3 & 0 & 9 \\ -4 & -9 & 0 \end{bmatrix}$ is a skew-symmetric matrix, then $x =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[0, 7, 4], [2*x - 3, 0, 9], [-4, -9, 0]])" }, params: { ask: "findx", cond: "skew" } },
      options: [
        { key: "A", text: t`$-5$`, correct: false, misconceptionId: "C12-M6", value: "-5" },
        { key: "B", text: t`$-2$`, correct: true, value: "-2" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C12-M3", value: "5" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C12-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Skew-symmetric means $a_{21} = -a_{12}$, so $2x - 3 = -7$.`,
          t`$2x = -4$, so $x = -2$.`,
          t`Check: $a_{21} = -7 = -a_{12}$, the pairs $4, -4$ and $9, -9$ are negatives, and the diagonal is $0$. So $x = -2$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q12(i)" },
      stem: t`$A = \begin{bmatrix} 4 & -2 \\ 3 & -5 \end{bmatrix}$ is written as $A = P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. Then $P =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, -2], [3, -5]])" }, params: { ask: "part", part: "P" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}- \frac{1}{2} & -2\\3 & - \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[-1/2, -2], [3, -1/2]])" },
        { key: "B", text: t`$\left[\begin{matrix}4 & \frac{1}{2}\\\frac{1}{2} & -5\end{matrix}\right]$`, correct: true, value: "Matrix([[4, 1/2], [1/2, -5]])" },
        { key: "C", text: t`$\left[\begin{matrix}8 & 1\\1 & -10\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[8, 1], [1, -10]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & - \frac{5}{2}\\\frac{5}{2} & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[0, -5/2], [5/2, 0]])" },
      ],
      solution: {
        steps: [
          t`$A^T = \begin{bmatrix} 4 & 3 \\ -2 & -5 \end{bmatrix}$, so $A + A^T = \begin{bmatrix} 8 & 1 \\ 1 & -10 \end{bmatrix}$.`,
          t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 4 & \frac{1}{2} \\ \frac{1}{2} & -5 \end{bmatrix}$.`,
          t`Check: $Q = A - P = \begin{bmatrix} 0 & -\frac{5}{2} \\ \frac{5}{2} & 0 \end{bmatrix}$ is skew-symmetric, as it should be.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q12(ii)" },
      stem: t`$A = \begin{bmatrix} 3 & 3 & -1 \\ -2 & -2 & 1 \\ -4 & -5 & 2 \end{bmatrix}$ is written as $A = P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. Then $Q =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 3, -1], [-2, -2, 1], [-4, -5, 2]])" }, params: { ask: "part", part: "Q" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}3 & \frac{1}{2} & - \frac{5}{2}\\\frac{1}{2} & -2 & -2\\- \frac{5}{2} & -2 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[3, 1/2, -5/2], [1/2, -2, -2], [-5/2, -2, 2]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{1}{2} & 1 & 0\\\frac{3}{2} & 0 & -1\\0 & - \frac{3}{2} & - \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[1/2, 1, 0], [3/2, 0, -1], [0, -3/2, -1/2]])" },
        { key: "C", text: t`$\left[\begin{matrix}0 & \frac{5}{2} & \frac{3}{2}\\- \frac{5}{2} & 0 & 3\\- \frac{3}{2} & -3 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[0, 5/2, 3/2], [-5/2, 0, 3], [-3/2, -3, 0]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & 5 & 3\\-5 & 0 & 6\\-3 & -6 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[0, 5, 3], [-5, 0, 6], [-3, -6, 0]])" },
      ],
      solution: {
        steps: [
          t`$A^T = \begin{bmatrix} 3 & -2 & -4 \\ 3 & -2 & -5 \\ -1 & 1 & 2 \end{bmatrix}$.`,
          t`$A - A^T = \begin{bmatrix} 0 & 5 & 3 \\ -5 & 0 & 6 \\ -3 & -6 & 0 \end{bmatrix}$.`,
          t`$Q = \frac{1}{2}(A - A^T) = \begin{bmatrix} 0 & \frac{5}{2} & \frac{3}{2} \\ -\frac{5}{2} & 0 & 3 \\ -\frac{3}{2} & -3 & 0 \end{bmatrix}$: zero diagonal, mirror entries negatives.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.7 Q11(i)" },
      stem: t`$A = \begin{bmatrix} 1 & 2 & 4 \\ 3 & 2 & 1 \\ -2 & -3 & 2 \end{bmatrix}$ is written as $A = P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. Then $P =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 4], [3, 2, 1], [-2, -3, 2]])" }, params: { ask: "part", part: "P" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & 5 & 2\\5 & 4 & -2\\2 & -2 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[2, 5, 2], [5, 4, -2], [2, -2, 4]])" },
        { key: "B", text: t`$\left[\begin{matrix}0 & - \frac{1}{2} & 3\\\frac{1}{2} & 0 & 2\\-3 & -2 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[0, -1/2, 3], [1/2, 0, 2], [-3, -2, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{3}{2} & \frac{3}{2} & 4\\0 & 2 & \frac{3}{2}\\-2 & 0 & \frac{3}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[3/2, 3/2, 4], [0, 2, 3/2], [-2, 0, 3/2]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & \frac{5}{2} & 1\\\frac{5}{2} & 2 & -1\\1 & -1 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 5/2, 1], [5/2, 2, -1], [1, -1, 2]])" },
      ],
      solution: {
        steps: [
          t`$A^T = \begin{bmatrix} 1 & 3 & -2 \\ 2 & 2 & -3 \\ 4 & 1 & 2 \end{bmatrix}$.`,
          t`$A + A^T = \begin{bmatrix} 2 & 5 & 2 \\ 5 & 4 & -2 \\ 2 & -2 & 4 \end{bmatrix}$.`,
          t`$P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 1 & \frac{5}{2} & 1 \\ \frac{5}{2} & 2 & -1 \\ 1 & -1 & 2 \end{bmatrix}$: mirror entries are equal.`,
        ],
      },
    },
  ],
};
