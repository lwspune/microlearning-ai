import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`$A$ is a $2 \times 3$ matrix and $B$ is $3 \times 4$, so $AB$ is $2 \times 4$. **Is $(AB)^T = A^TB^T$?**`,
    reveal: t`It can't be: $A^T$ is $3 \times 2$ and $B^T$ is $4 \times 3$, so $A^TB^T$ can't even be multiplied. Reverse the order: $B^TA^T$ is $(4 \times 3)(3 \times 2) = 4 \times 2$, the order of $(AB)^T$. And it is equal: $(AB)^T = B^TA^T$.`,
  },
  explanation: {
    intuition: t`To transpose a matrix, write its first row as the first column, its second row as the second column, and so on. An $m \times n$ matrix becomes $n \times m$. It is a flip about the leading diagonal: the diagonal stays put and every other entry swaps with its mirror image. Flip twice and you are back where you started. Sums and number multiples transpose term by term, but a product transposes in the **reverse order**.`,
    formal: t`**Definition.** If $A = [a_{ij}]_{m \times n}$, then $A^T = [a_{ji}]_{n \times m}$: the $(i, j)$ entry of $A^T$ is the $(j, i)$ entry of $A$.

$$A = \begin{bmatrix} a & b & c \\ d & e & f \end{bmatrix} \quad\Rightarrow\quad A^T = \begin{bmatrix} a & d \\ b & e \\ c & f \end{bmatrix}$$

**Row 1 goes down column 1.** Read each row left to right and write it top to bottom. A transpose is a flip, not a quarter turn.

**Properties.** $(A^T)^T = A$, $\quad (A + B)^T = A^T + B^T$, $\quad (kA)^T = kA^T$.

**Reversal law.** $(AB)^T = B^TA^T$, not $A^TB^T$. Check the orders: if $A$ is $m \times n$ and $B$ is $n \times p$, then $(AB)^T$ and $B^TA^T$ are both $p \times m$.`,
    worked: {
      prompt: t`If $A = \begin{bmatrix} 1 & 2 \\ 3 & 0 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$, find $(AB)^T$ and check that it equals $B^TA^T$, not $A^TB^T$.`,
      steps: [
        t`$AB = \begin{bmatrix} 0 + 4 & -1 + 2 \\ 0 + 0 & -3 + 0 \end{bmatrix} = \begin{bmatrix} 4 & 1 \\ 0 & -3 \end{bmatrix}$.`,
        t`Rows become columns: $(AB)^T = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$.`,
        t`$B^T = \begin{bmatrix} 0 & 2 \\ -1 & 1 \end{bmatrix}$, $A^T = \begin{bmatrix} 1 & 3 \\ 2 & 0 \end{bmatrix}$, so $B^TA^T = \begin{bmatrix} 0 + 4 & 0 + 0 \\ -1 + 2 & -3 + 0 \end{bmatrix} = \begin{bmatrix} 4 & 0 \\ 1 & -3 \end{bmatrix}$. It matches.`,
        t`In the other order, $A^TB^T = \begin{bmatrix} 0 - 3 & 2 + 3 \\ 0 + 0 & 4 + 0 \end{bmatrix} = \begin{bmatrix} -3 & 5 \\ 0 & 4 \end{bmatrix}$, which is different.`,
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
