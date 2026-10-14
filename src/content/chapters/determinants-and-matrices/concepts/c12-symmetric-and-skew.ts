import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`In $\begin{bmatrix} 2 & 5 & 1 \\ -5 & 4 & 6 \\ -1 & -6 & 3 \end{bmatrix}$ every entry off the diagonal is the negative of its mirror image: $5$ and $-5$, $1$ and $-1$, $6$ and $-6$. **Is the matrix skew-symmetric?**`,
    reveal: t`No. Skew-symmetric means $a_{ij} = -a_{ji}$ for **every** $i$ and $j$, the diagonal included. There it says $a_{ii} = -a_{ii}$, so $a_{ii} = 0$. This diagonal is $2, 4, 3$, so the matrix is not skew-symmetric. It is not symmetric either ($5 \ne -5$): it is neither.`,
  },
  explanation: {
    intuition: t`Fold a square matrix along its leading diagonal, from top left to bottom right. Each entry $a_{ij}$ lands on its mirror image $a_{ji}$, which is exactly what $A^T$ does. If every entry lands on an equal one, the matrix is symmetric. If every entry lands on its negative, it is skew-symmetric; the diagonal lands on itself, so each diagonal entry equals its own negative and must be $0$. Every square matrix is a mix of the two: half of $A + A^T$ is its symmetric part and half of $A - A^T$ its skew part.`,
    formal: t`**Symmetric**: $A^T = A$, that is $a_{ij} = a_{ji}$ for all $i, j$. The diagonal entries can be anything.

**Skew-symmetric**: $A^T = -A$, that is $a_{ij} = -a_{ji}$ for all $i, j$. With $i = j$ this gives $a_{ii} = -a_{ii}$, so **every diagonal entry is $0$**. A diagonal matrix with a non-zero entry is symmetric only; only the zero matrix is both.

**Finding unknowns**: equate each entry with its mirror image (symmetric) or with minus its mirror image (skew-symmetric). Bracket the whole entry before negating: $-(3x - 1) = -3x + 1$.

**Two always-true facts**: for any square $A$, $(A + A^T)^T = A^T + A$, so $A + A^T$ is symmetric; $(A - A^T)^T = A^T - A = -(A - A^T)$, so $A - A^T$ is skew-symmetric.

**The split**: $A = P + Q$ with $P = \frac{1}{2}(A + A^T)$ symmetric and $Q = \frac{1}{2}(A - A^T)$ skew-symmetric. Without the halves the two add up to $2A$.`,
    worked: {
      prompt: t`Express $A = \begin{bmatrix} 5 & 2 & -4 \\ 3 & -7 & 2 \\ 4 & -5 & -3 \end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix.`,
      steps: [
        t`Write the transpose: rows become columns. $A^T = \begin{bmatrix} 5 & 3 & 4 \\ 2 & -7 & -5 \\ -4 & 2 & -3 \end{bmatrix}$.`,
        t`$A + A^T = \begin{bmatrix} 10 & 5 & 0 \\ 5 & -14 & -3 \\ 0 & -3 & -6 \end{bmatrix}$, so $P = \frac{1}{2}(A + A^T) = \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix}$. Mirror entries are equal: $P$ is symmetric.`,
        t`$A - A^T = \begin{bmatrix} 0 & -1 & -8 \\ 1 & 0 & 7 \\ 8 & -7 & 0 \end{bmatrix}$, so $Q = \frac{1}{2}(A - A^T) = \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$. Mirror entries are negatives and the diagonal is $0$: $Q$ is skew-symmetric.`,
        t`Check one entry of $P + Q$: in row 1, column 2, $\frac{5}{2} + \left(-\frac{1}{2}\right) = 2 = a_{12}$. Every other entry adds back to $A$ the same way.`,
      ],
      answer: t`$A = \begin{bmatrix} 5 & \frac{5}{2} & 0 \\ \frac{5}{2} & -7 & -\frac{3}{2} \\ 0 & -\frac{3}{2} & -3 \end{bmatrix} + \begin{bmatrix} 0 & -\frac{1}{2} & -4 \\ \frac{1}{2} & 0 & \frac{7}{2} \\ 4 & -\frac{7}{2} & 0 \end{bmatrix}$, symmetric plus skew-symmetric.`,
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
