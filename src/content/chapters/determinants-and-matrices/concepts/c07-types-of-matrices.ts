import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

type Tone = FigureElement["tone"];
type Show = { step?: number; tone?: Tone };

/** The figure frame is 400 px wide: plane units per pixel for a view `width` units wide. */
const px = (width: number) => width / 400;

/**
 * A label centred on `at`. Labels sit above their anchor ("n": baseline 10 px up, text about 15 px
 * up at its middle), so the anchor drops by `lift` = 15 px in plane units.
 */
const text = (at: Pt, label: string, lift: number, show: Show = {}): FigureElement => ({
  kind: "label",
  at: [at[0], +(at[1] - lift).toFixed(3)],
  label,
  labelAt: "n",
  ...show,
});

/** A matrix drawn as labels in square brackets: entry (r, c) centred at (x0 + (c − 1)·wx, y0 − (r − 1)·wy). */
type Grid = { x0: number; y0: number; wx: number; wy: number; pad: number; lift: number };

const cell = (g: Grid, r: number, c: number): Pt => [+(g.x0 + (c - 1) * g.wx).toFixed(3), +(g.y0 - (r - 1) * g.wy).toFixed(3)];

/** The entries of `rows` with their brackets, appearing at `step`; zeros muted when `muteZeros`. */
function matrix(g: Grid, rows: string[][], step?: number, muteZeros = false): FigureElement[] {
  const at = step === undefined ? {} : { step };
  const m = rows.length;
  const n = rows[0].length;
  const left = g.x0 - g.pad;
  const right = g.x0 + (n - 1) * g.wx + g.pad;
  const top = g.y0 + g.wy / 2;
  const bottom = g.y0 - (m - 0.5) * g.wy;
  const serif = 0.15;
  const seg = (from: Pt, to: Pt): FigureElement => ({ kind: "segment", from, to, tone: "muted", ...at });
  return [
    seg([left, top], [left, bottom]),
    seg([left, top], [left + serif, top]),
    seg([left, bottom], [left + serif, bottom]),
    seg([right, top], [right, bottom]),
    seg([right, top], [right - serif, top]),
    seg([right, bottom], [right - serif, bottom]),
    ...rows.flatMap((row, r) =>
      row.map((v, c) => text(cell(g, r + 1, c + 1), v, g.lift, { ...at, ...(muteZeros && v === "0" ? { tone: "muted" as const } : {}) })),
    ),
  ];
}

/** A shaded convex polygon, its corners listed anticlockwise. */
const shade = (corners: Pt[], tone: Tone, step: number): FigureElement => ({
  kind: "region",
  within: corners.map((p, i) => ({ kind: "halfPlane" as const, through: [p, corners[(i + 1) % corners.length]] as [Pt, Pt] })),
  tone,
  step,
});

/** A shaded rectangle from corner `lo` to corner `hi`. */
const band = ([x0, y0]: Pt, [x1, y1]: Pt, tone: Tone, step: number): FigureElement =>
  shade([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], tone, step);

/** A ring round each diagonal entry of an n × n grid. */
const diagonalRings = (g: Grid, n: number, step: number, tone: Tone = "good"): FigureElement[] =>
  Array.from({ length: n }, (_, k): FigureElement => ({ kind: "circle", centre: cell(g, k + 1, k + 1), r: 0.32, tone, step }));

/** The idea slide's 2 × 3 matrix: wide cells so the column names fit above. */
const IDEA_W = 6.2;
const ideaGrid: Grid = { x0: 0, y0: 0, wx: 1.6, wy: 1, pad: 0.55, lift: 15 * px(IDEA_W) };

/** The shapes slide: a row matrix, a zero matrix under it, a column matrix and a square matrix. */
const SHAPES_W = 9.5;
const shapesLift = 15 * px(SHAPES_W);
const unit = (x0: number, y0: number, lift: number, pad = 0.5): Grid => ({ x0, y0, wx: 1, wy: 1, pad, lift });
const rowG = unit(0, 0, shapesLift);
const zeroG = unit(0.5, -2, shapesLift);
const colG = unit(3.9, 0, shapesLift);
const squareG = unit(5.5, 0, shapesLift);

/** The triangular slide: an upper triangular matrix on the left, a lower triangular one on the right. */
const TRI_W = 8.4;
const triLift = 15 * px(TRI_W);
const upperG = unit(0, 0, triLift, 0.6);
const lowerG = unit(4.6, 0, triLift, 0.6);

/** The diagonal-types slide: three 3 × 3 matrices side by side. */
const DIAG_W = 11.8;
const diagLift = 15 * px(DIAG_W);
const dG = unit(0, 0, diagLift, 0.55);
const sG = unit(4, 0, diagLift, 0.55);
const iG = unit(8, 0, diagLift, 0.55);
const diag = (a: string, b: string, c: string) => [
  [a, "0", "0"],
  ["0", b, "0"],
  ["0", "0", c],
];

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A $2 \times 4$ matrix and a $4 \times 2$ matrix both have $8$ entries. **Are they the same shape?**`,
    reveal: t`No. The order is always **rows $\times$ columns**: a $2 \times 4$ matrix has $2$ rows and $4$ columns, so it is wide; a $4 \times 2$ matrix has $4$ rows and $2$ columns, so it is tall. Only the number of entries, $mn = 8$, is the same.`,
  },
  explanation: {
    intuition: [
      t`A **matrix** is a rectangular table of numbers, its **entries**, set in **rows** across and **columns** down.`,
      t`Everything is counted **row first, then column**: an $m \times n$ matrix has $m$ rows and $n$ columns.`,
      t`$a_{ij}$ is the entry in row $i$, column $j$: the first subscript is the row.`,
      t`A **square** matrix has as many rows as columns; its **diagonal** runs from top left to bottom right.`,
      t`Zeros in a pattern around that diagonal give it a name: triangular, diagonal, scalar or identity.`,
      t`A square matrix also has a determinant, and it is called **singular** when that determinant is $0$.`,
    ],
    figure: {
      alt: "A matrix with 2 rows and 3 columns: 5, 1, 7 in row 1 and 2, 9, 4 in row 2. First the rows are named down the left, row 1 and row 2, and the columns along the top, column 1 to column 3. Then the label 2 × 3: 2 rows, 3 columns. Last, row 2 and column 3 are shaded; they cross at the entry 4, ringed, labelled a₂₃ = 4: row 2, column 3.",
      axes: "none",
      view: { x: [-2, 4.2], y: [-3, 1.35] },
      elements: [
        ...matrix(ideaGrid, [
          ["5", "1", "7"],
          ["2", "9", "4"],
        ]),
        { kind: "label", at: [-0.75, 0], label: "row 1", labelAt: "w", tone: "muted", step: 1 },
        { kind: "label", at: [-0.75, -1], label: "row 2", labelAt: "w", tone: "muted", step: 1 },
        ...[1, 2, 3].map((c) => text([cell(ideaGrid, 1, c)[0], 0.85], `column ${c}`, ideaGrid.lift, { tone: "muted", step: 1 })),
        text([1.6, -2], "2 × 3: 2 rows, 3 columns", ideaGrid.lift, { step: 2 }),
        band([-0.45, -1.45], [3.7, -0.55], "good", 3),
        band([2.6, -1.45], [3.7, 0.45], "good", 3),
        { kind: "circle", centre: cell(ideaGrid, 2, 3), r: 0.3, tone: "good", step: 3 },
        text([1.6, -2.6], "a₂₃ = 4: row 2, column 3", ideaGrid.lift, { tone: "good", step: 3 }),
      ],
    },
    formal: [
      {
        title: "Order and entries",
        points: [
          t`The **order** of a matrix is its size, rows $\times$ columns: $m$ rows and $n$ columns give $m \times n$.`,
          t`An $m \times n$ matrix has $mn$ entries.`,
          t`A $2 \times 3$ and a $3 \times 2$ matrix both have $6$ entries, but different orders.`,
          t`We write $A = [a_{ij}]_{m \times n}$: the entry in row $i$, column $j$ is $a_{ij}$.`,
          t`The row number $i$ runs from $1$ to $m$; the column number $j$ runs from $1$ to $n$.`,
        ],
      },
      {
        title: "Matrices by shape",
        points: [
          t`A **row matrix** has just one row: its order is $1 \times n$.`,
          t`A **column matrix** has just one column: its order is $m \times 1$.`,
          t`A **square matrix** has $m = n$: its order is $n \times n$.`,
          t`Its **leading diagonal**, or just diagonal, is $a_{11}, a_{22}, \dots, a_{nn}$: the entries with $i = j$.`,
          t`A **zero matrix**, written $O$, has every entry $0$.`,
        ],
        figure: {
          alt: "Four matrices. First a row matrix, 3 1 4, labelled 1 × 3. Then a column matrix, 2 7 5 down one column, labelled 3 × 1. Then a square matrix with 3 rows and 3 columns, labelled 3 × 3; its entries 4, 3 and 9, from top left to bottom right, are ringed and labelled diagonal. Last, a 2 × 2 matrix of zeros, labelled O.",
          axes: "none",
          view: { x: [-1.4, 8.1], y: [-3.8, 1.3] },
          elements: [
            ...matrix(rowG, [["3", "1", "4"]], 1),
            text([1, -0.95], "1 × 3", shapesLift, { tone: "muted", step: 1 }),
            ...matrix(colG, [["2"], ["7"], ["5"]], 2),
            text([3.9, -2.95], "3 × 1", shapesLift, { tone: "muted", step: 2 }),
            ...matrix(
              squareG,
              [
                ["4", "1", "2"],
                ["0", "3", "8"],
                ["6", "5", "9"],
              ],
              3,
            ),
            text([6.5, -2.95], "3 × 3", shapesLift, { tone: "muted", step: 3 }),
            ...diagonalRings(squareG, 3, 4),
            text([5.9, 0.85], "diagonal", shapesLift, { tone: "good", step: 4 }),
            ...matrix(
              zeroG,
              [
                ["0", "0"],
                ["0", "0"],
              ],
              5,
            ),
            { kind: "label", at: [-0.15, -2.5], label: "O =", labelAt: "w", step: 5 },
          ],
        },
      },
      {
        title: "Upper and lower triangular",
        points: [
          t`The next types are all square matrices, named by the zeros around the diagonal.`,
          t`Below the diagonal the row number is larger, $i > j$; above it, $i < j$.`,
          t`**Upper triangular**: $a_{ij} = 0$ for $i > j$, so every entry **below** the diagonal is $0$.`,
          t`Its other entries sit on or above the diagonal, in the upper triangle: hence the name.`,
          t`**Lower triangular**: $a_{ij} = 0$ for $i < j$, so every entry **above** the diagonal is $0$.`,
          t`So name it by the triangle its other entries fill, not by where the zeros are.`,
        ],
        figure: {
          alt: "Two 3 × 3 matrices with their diagonals ringed. The left one has zeros below the diagonal: that corner is shaded red, then the upper triangle, on and above the diagonal, is shaded green, and it is labelled upper triangular. The right one has zeros above the diagonal, shaded red, and its lower triangle shaded green; it is labelled lower triangular.",
          axes: "none",
          view: { x: [-0.9, 7.5], y: [-3.4, 0.9] },
          elements: [
            ...matrix(
              upperG,
              [
                ["1", "4", "2"],
                ["0", "3", "5"],
                ["0", "0", "6"],
              ],
              undefined,
              true,
            ),
            ...matrix(
              lowerG,
              [
                ["1", "0", "0"],
                ["4", "3", "0"],
                ["2", "5", "6"],
              ],
              undefined,
              true,
            ),
            ...diagonalRings(upperG, 3, 1, "accent"),
            ...diagonalRings(lowerG, 3, 1, "accent"),
            shade([[-0.5, 0], [-0.5, -2.5], [2, -2.5]], "bad", 3),
            text([1, -3], "upper triangular", triLift, { step: 3 }),
            shade([[-0.5, 0], [2, -2.5], [2.5, -2.5], [2.5, 0.5], [-0.5, 0.5]], "good", 4),
            shade([[4.6, 0.5], [7.1, -2], [7.1, 0.5]], "bad", 5),
            text([5.6, -3], "lower triangular", triLift, { step: 5 }),
            shade([[4.1, 0.5], [4.1, -2.5], [7.1, -2.5], [7.1, -2], [4.6, 0.5]], "good", 6),
          ],
        },
      },
      {
        title: "Diagonal, scalar and identity",
        points: [
          t`A **diagonal matrix** is a square matrix with $a_{ij} = 0$ whenever $i \ne j$: every entry off the diagonal is $0$.`,
          t`A **scalar matrix** is a diagonal matrix whose diagonal entries all equal the same number $k$.`,
          t`Equal diagonal entries are not enough: every entry off the diagonal must be $0$ as well.`,
          t`The **identity matrix** $I$ is the scalar matrix with $k = 1$.`,
        ],
        figure: {
          alt: "Three 3 × 3 matrices with zeros everywhere off the diagonal. First a diagonal matrix with 2, −1 and 5 on its diagonal. Then a scalar matrix with 3, 3 and 3 on its diagonal, labelled scalar, k = 3. Last the identity matrix I, with 1, 1 and 1 on its diagonal.",
          axes: "none",
          view: { x: [-0.9, 10.9], y: [-3.6, 0.9] },
          elements: [
            ...matrix(dG, diag("2", "−1", "5"), 1, true),
            text([1, -3.1], "diagonal", diagLift, { step: 1 }),
            ...matrix(sG, diag("3", "3", "3"), 2, true),
            text([5, -3.1], "scalar, k = 3", diagLift, { step: 2 }),
            ...matrix(iG, diag("1", "1", "1"), 4, true),
            text([9, -3.1], "identity I", diagLift, { step: 4 }),
          ],
        },
      },
      {
        title: "How the types nest",
        points: [
          t`Every identity matrix is a scalar matrix, with $k = 1$.`,
          t`Every scalar matrix is a diagonal matrix.`,
          t`A diagonal matrix has zeros both below and above its diagonal.`,
          t`So a diagonal matrix is both upper triangular and lower triangular.`,
        ],
      },
      {
        title: "Singular and non-singular",
        points: [
          t`Recall: a square matrix $A$ has a determinant, a single number written $|A|$.`,
          t`$A$ is **singular** if $|A| = 0$.`,
          t`$A$ is **non-singular** if $|A| \ne 0$.`,
          t`A matrix that is not square has no determinant, so it is neither.`,
        ],
      },
    ],
    worked: {
      prompt: t`Construct $A = [a_{ij}]_{2 \times 3}$ with $a_{ij} = 2i - j$.`,
      steps: [
        t`The order $2 \times 3$ means $2$ rows ($i = 1, 2$) and $3$ columns ($j = 1, 2, 3$): $6$ entries.`,
        t`Row 1 ($i = 1$): $a_{11} = 2 - 1 = 1$, $a_{12} = 2 - 2 = 0$, $a_{13} = 2 - 3 = -1$.`,
        t`Row 2 ($i = 2$): $a_{21} = 4 - 1 = 3$, $a_{22} = 4 - 2 = 2$, $a_{23} = 4 - 3 = 1$.`,
        t`Write each row along a row of the matrix. $A$ is not square, so it has no determinant and is none of the square types.`,
      ],
      answer: t`$A = \begin{bmatrix} 1 & 0 & -1 \\ 3 & 2 & 1 \end{bmatrix}$`,
    },
    visualSpec: t`A grid of entries: tap a cell to light up its row $i$ and column $j$ and show $a_{ij}$; drag entries to $0$ and watch the type name update (upper triangular, diagonal, scalar, identity) along with $|A|$ and the word singular or non-singular.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Reads the order m × n as m columns and n rows (like width × height), keeping a_ij in row i",
      remediation: t`The order is always rows $\times$ columns: $3 \times 2$ means $3$ rows and $2$ columns. So $i$ runs over the rows $1$ to $3$, and $j$ over the columns $1$ to $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Takes the first subscript i as the column number: puts j = row, i = column into the rule, or reads a_ij in row j, column i",
      remediation: t`$a_{ij}$ is the entry in row $i$, column $j$: the first subscript is the row. For the entry in row $2$, column $1$, put $i = 2$, $j = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Writes the entries a_i1, a_i2, ... for each i down a column instead of along a row, so builds the transpose",
      remediation: t`For each $i$, the entries $a_{i1}, a_{i2}, \dots$ go **along** row $i$. A matrix of order $3 \times 2$ ends up with $3$ rows and $2$ columns, the order you were given.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Names a triangular matrix by where its zeros are: zeros above the diagonal = upper triangular",
      remediation: t`Upper triangular means the non-zero entries sit in the upper triangle: $a_{ij} = 0$ for $i > j$, so the zeros are **below** the diagonal. Zeros above the diagonal make it lower triangular.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks a scalar matrix is any square matrix with equal diagonal entries, ignoring the entries off the diagonal",
      remediation: t`A scalar matrix is first a diagonal matrix: every entry off the diagonal is $0$. Only then must the diagonal entries all be equal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Swaps singular and non-singular: calls a matrix singular when its determinant is not 0",
      remediation: t`Singular means $|A| = 0$; non-singular means $|A| \ne 0$. Work out $|A|$ first, then name it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M1 and C07-M3 only apply to a non-square order; for a square order C07-M3 builds the same matrix as C07-M2, and C07-M1 gives the key.",
    "C07-M2 gives the key when the rule is symmetric in i and j (e.g. a_ij = (i + j)^3/5), and in statement items it only changes statements about a single entry a_ij.",
    "C07-M4 needs a matrix with zeros on one side of the diagonal only; C07-M5 needs equal diagonal entries with a non-zero entry off the diagonal.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q1(ii)" },
      stem: t`The matrix $A = [a_{ij}]_{3 \times 2}$ with $a_{ij} = i - 3j$ is:`,
      verify: { kind: "value", inputs: { m: "3", n: "2", f: "i - 3*j" }, params: { ask: "build" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-2 & -1\\-5 & -4\\-8 & -7\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M2", value: "Matrix([[-2, -1], [-5, -4], [-8, -7]])" },
        { key: "B", text: t`$\left[\begin{matrix}-2 & -1 & 0\\-5 & -4 & -3\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M3", value: "Matrix([[-2, -1, 0], [-5, -4, -3]])" },
        { key: "C", text: t`$\left[\begin{matrix}-2 & -5\\-1 & -4\\0 & -3\end{matrix}\right]$`, correct: true, value: "Matrix([[-2, -5], [-1, -4], [0, -3]])" },
        { key: "D", text: t`$\left[\begin{matrix}-2 & -5 & -8\\-1 & -4 & -7\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M1", value: "Matrix([[-2, -5, -8], [-1, -4, -7]])" },
      ],
      solution: {
        steps: [
          t`Order $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$).`,
          t`Row 1: $a_{11} = 1 - 3 = -2$, $a_{12} = 1 - 6 = -5$. Row 2: $a_{21} = -1$, $a_{22} = -4$. Row 3: $a_{31} = 0$, $a_{32} = -3$.`,
          t`$A = \begin{bmatrix} -2 & -5 \\ -1 & -4 \\ 0 & -3 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q1(i)" },
      stem: t`The matrix $A = [a_{ij}]_{3 \times 2}$ with $a_{ij} = \dfrac{(i - j)^2}{5 - i}$ is:`,
      verify: { kind: "value", inputs: { m: "3", n: "2", f: "(i - j)**2/(5 - i)" }, params: { ask: "build" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}0 & \frac{1}{4} & 1\\\frac{1}{3} & 0 & \frac{1}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M1", value: "Matrix([[0, 1/4, 1], [1/3, 0, 1/3]])" },
        { key: "B", text: t`$\left[\begin{matrix}0 & \frac{1}{3}\\\frac{1}{4} & 0\\1 & \frac{1}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M2", value: "Matrix([[0, 1/3], [1/4, 0], [1, 1/3]])" },
        { key: "C", text: t`$\left[\begin{matrix}0 & \frac{1}{3} & 2\\\frac{1}{4} & 0 & \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M3", value: "Matrix([[0, 1/3, 2], [1/4, 0, 1/2]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & \frac{1}{4}\\\frac{1}{3} & 0\\2 & \frac{1}{2}\end{matrix}\right]$`, correct: true, value: "Matrix([[0, 1/4], [1/3, 0], [2, 1/2]])" },
      ],
      solution: {
        steps: [
          t`Order $3 \times 2$: $3$ rows ($i = 1, 2, 3$), $2$ columns ($j = 1, 2$). Row $i$ has the denominator $5 - i$.`,
          t`Row 1 (divide by $4$): $a_{11} = 0$, $a_{12} = \frac{1}{4}$. Row 2 (divide by $3$): $a_{21} = \frac{1}{3}$, $a_{22} = 0$. Row 3 (divide by $2$): $a_{31} = \frac{4}{2} = 2$, $a_{32} = \frac{1}{2}$.`,
          t`$A = \begin{bmatrix} 0 & \frac{1}{4} \\ \frac{1}{3} & 0 \\ 2 & \frac{1}{2} \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q2(i)" },
      stem: t`For $A = \begin{bmatrix} 3 & -2 & 4 \\ 0 & 0 & -5 \\ 0 & 0 & 0 \end{bmatrix}$, which statement is true?`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, -2, 4], [0, 0, -5], [0, 0, 0]])" }, params: { ask: "stmt", stmts: ["upper", "lower", "nonsingular", "entry 2 3 0"] } },
      options: [
        { key: "A", text: t`$a_{23} = 0$`, correct: false, misconceptionId: "C07-M2", value: "a23" },
        { key: "B", text: t`$A$ is an upper triangular matrix`, correct: true, value: "upper_triangular" },
        { key: "C", text: t`$A$ is a lower triangular matrix`, correct: false, misconceptionId: "C07-M4", value: "lower_triangular" },
        { key: "D", text: t`$A$ is a non-singular matrix`, correct: false, misconceptionId: "C07-M6", value: "non_singular" },
      ],
      solution: {
        steps: [
          t`Below the diagonal, $a_{21} = a_{31} = a_{32} = 0$: so $A$ is upper triangular. Above it, $a_{12} = -2 \ne 0$, so it is not lower triangular.`,
          t`Expand $|A|$ along row 3: every entry there is $0$, so $|A| = 0$. $A$ is singular, not non-singular.`,
          t`$a_{23}$ is in row 2, column 3: $a_{23} = -5$, not $0$. The true statement: $A$ is an upper triangular matrix.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q2(vi)" },
      stem: t`For $A = \begin{bmatrix} 2 & 0 & 0 \\ 3 & -1 & 0 \\ -7 & 3 & 1 \end{bmatrix}$, which statement is true?`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 0, 0], [3, -1, 0], [-7, 3, 1]])" }, params: { ask: "stmt", stmts: ["entry 2 1 3", "entry 1 2 3", "upper", "singular"] } },
      options: [
        { key: "A", text: t`$a_{21} = 3$`, correct: true, value: "a21" },
        { key: "B", text: t`$a_{12} = 3$`, correct: false, misconceptionId: "C07-M2", value: "a12" },
        { key: "C", text: t`$A$ is an upper triangular matrix`, correct: false, misconceptionId: "C07-M4", value: "upper_triangular" },
        { key: "D", text: t`$A$ is a singular matrix`, correct: false, misconceptionId: "C07-M6", value: "singular" },
      ],
      solution: {
        steps: [
          t`$a_{21}$ is in row 2, column 1: $a_{21} = 3$. And $a_{12}$, in row 1, column 2, is $0$.`,
          t`The zeros $a_{12}, a_{13}, a_{23}$ are above the diagonal, so $A$ is lower triangular, not upper triangular.`,
          t`Expand along row 1, which has two zeros: $|A| = 2\big((-1)(1) - (0)(3)\big) = -2 \ne 0$. $A$ is non-singular. The true statement: $a_{21} = 3$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.4 Q3(iv)" },
      stem: t`For $B = \begin{bmatrix} 7 & 5 \\ -4 & 7 \end{bmatrix}$, which statement is true?`,
      verify: { kind: "value", inputs: { A: "Matrix([[7, 5], [-4, 7]])" }, params: { ask: "stmt", stmts: ["det 69", "entry 1 2 -4", "scalar", "singular"] } },
      options: [
        { key: "A", text: t`$b_{12} = -4$`, correct: false, misconceptionId: "C07-M2", value: "a12" },
        { key: "B", text: t`$B$ is a scalar matrix`, correct: false, misconceptionId: "C07-M5", value: "scalar_matrix" },
        { key: "C", text: t`$B$ is a singular matrix`, correct: false, misconceptionId: "C07-M6", value: "singular" },
        { key: "D", text: t`$|B| = 69$`, correct: true, value: "det_value" },
      ],
      solution: {
        steps: [
          t`$|B| = 7 \times 7 - 5 \times (-4) = 49 + 20 = 69$.`,
          t`$|B| \ne 0$, so $B$ is non-singular. Its off-diagonal entries $5$ and $-4$ are not $0$, so it is not diagonal, and so not scalar.`,
          t`$b_{12}$ is in row 1, column 2: $b_{12} = 5$. The true statement: $|B| = 69$.`,
        ],
      },
    },
  ],
};
