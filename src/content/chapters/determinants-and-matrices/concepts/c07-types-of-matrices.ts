import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A $2 \times 4$ matrix and a $4 \times 2$ matrix both have $8$ entries. **Are they the same shape?**`,
    reveal: t`No. The order is always **rows $\times$ columns**: a $2 \times 4$ matrix has $2$ rows and $4$ columns, so it is wide; a $4 \times 2$ matrix has $4$ rows and $2$ columns, so it is tall. Only the number of entries, $mn = 8$, is the same.`,
  },
  explanation: {
    intuition: t`A matrix is a rectangular table of numbers. Everything about it is counted **row first, then column**: an $m \times n$ matrix has $m$ rows and $n$ columns, and $a_{ij}$ is the entry in row $i$, column $j$. When a square matrix has zeros in a pattern around its diagonal (top-left to bottom-right), the pattern gives it a name: triangular, diagonal, scalar or identity. A square matrix also has a determinant, and the matrix is called singular when that determinant is $0$.`,
    formal: t`**Order and entries.** A matrix with $m$ rows and $n$ columns has order $m \times n$ and $mn$ entries. $A = [a_{ij}]_{m \times n}$: $a_{ij}$ is in row $i$, column $j$.

**By shape.** Row matrix: order $1 \times n$. Column matrix: order $m \times 1$. Square matrix: $m = n$; its diagonal is $a_{11}, a_{22}, \dots, a_{nn}$. Zero matrix $O$: every entry is $0$.

**Square types.** Upper triangular: $a_{ij} = 0$ for $i > j$ (zeros **below** the diagonal). Lower triangular: $a_{ij} = 0$ for $i < j$ (zeros **above** it). Diagonal: $a_{ij} = 0$ for $i \ne j$. Scalar: diagonal, with every diagonal entry the same $k$. Identity $I$: scalar with $k = 1$.

**They nest.** Every identity matrix is scalar, every scalar matrix is diagonal, and a diagonal matrix is both upper and lower triangular.

**Singular.** A square matrix $A$ is singular if $|A| = 0$, and non-singular if $|A| \ne 0$.`,
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
