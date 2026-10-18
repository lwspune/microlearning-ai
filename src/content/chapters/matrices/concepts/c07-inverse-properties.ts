import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Every morning you put on your socks, then your shoes. At night you undo it. **Which comes off first, and what does that say about undoing a product $AB$?**`,
    reveal: t`The shoes come off first: the last step is undone first. Matrices work the same way: $(AB)^{-1} = B^{-1}A^{-1}$, with the order reversed.`,
  },
  explanation: {
    intuition: [
      t`Recall: $\operatorname{adj}A$ is the transpose of the cofactor matrix of $A$.`,
      t`Multiplying $A$ by $\operatorname{adj}A$ gives $|A|$ down the diagonal and $0$ everywhere else.`,
      t`So $\operatorname{adj}A$ is almost the inverse: it is off by the factor $|A|$.`,
      t`An **inverse** undoes a matrix: $AA^{-1} = A^{-1}A = I$, the identity matrix.`,
      t`Undoing a product reverses the order, just as shoes come off before socks.`,
      t`Undoing an inverse gives back the matrix you started with.`,
    ],
    formal: [
      {
        title: "A times its adjoint",
        points: [
          t`Row $i$ of $A$ times column $j$ of $\operatorname{adj}A$ is $a_{i1}A_{j1} + a_{i2}A_{j2} + a_{i3}A_{j3}$.`,
          t`When $i = j$, this is the expansion of $|A|$ along row $i$.`,
          t`When $i \neq j$, it pairs one row's elements with another row's cofactors, and the sum is $0$.`,
          t`So $A(\operatorname{adj}A) = (\operatorname{adj}A)A = |A|I$.`,
          t`The number on the diagonal is $|A|$ itself: if $A(\operatorname{adj}A) = kI$, then $k = |A|$.`,
          t`Example: $A = \begin{bmatrix} 2 & 1 \\ 5 & 4 \end{bmatrix}$ has $|A| = 3$, so $A(\operatorname{adj}A) = 3I$.`,
        ],
      },
      {
        title: "Determinant of adj A",
        points: [
          t`For an $n \times n$ matrix, $|kI| = k^n$: each of the $n$ rows gives out a factor $k$.`,
          t`Take determinants of $A(\operatorname{adj}A) = |A|I$: $|A| \cdot |\operatorname{adj}A| = |A|^n$.`,
          t`If $|A| \neq 0$, divide by $|A|$: $|\operatorname{adj}A| = |A|^{n-1}$.`,
          t`For a $2 \times 2$ matrix $|\operatorname{adj}A| = |A|$; for a $3 \times 3$ matrix $|\operatorname{adj}A| = |A|^2$.`,
          t`Example: a $3 \times 3$ matrix with $|A| = -3$ has $|\operatorname{adj}A| = 9$.`,
        ],
      },
      {
        title: "Inverse of a product",
        points: [
          t`Let $A$ and $B$ be invertible matrices of the same order.`,
          t`Try $B^{-1}A^{-1}$: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1}$.`,
          t`This is $AIA^{-1} = AA^{-1} = I$; in the same way $(B^{-1}A^{-1})(AB) = I$.`,
          t`So $(AB)^{-1} = B^{-1}A^{-1}$: the order is reversed.`,
          t`$A^{-1}B^{-1}$ does not work, because $AB$ and $BA$ are usually different.`,
        ],
      },
      {
        title: "Inverse of the inverse",
        points: [
          t`The equation $AA^{-1} = A^{-1}A = I$ also says that $A$ undoes $A^{-1}$.`,
          t`So $A^{-1}$ is invertible, and $(A^{-1})^{-1} = A$.`,
          t`To get $A$ back from $A^{-1}$, find the inverse of $A^{-1}$.`,
          t`A number in front inverts too: $(kM)^{-1} = \frac{1}{k}M^{-1}$ for $k \neq 0$.`,
          t`Example: if $A^{-1} = 2\begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$, then $A = \frac{1}{2}\begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $A = \begin{bmatrix} 2 & 1 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix}$, verify that $(AB)^{-1} = B^{-1}A^{-1}$.`,
      steps: [
        t`$|A| = 8 - 3 = 5$, so $A^{-1} = \frac{1}{5}\begin{bmatrix} 4 & -1 \\ -3 & 2 \end{bmatrix}$.`,
        t`$|B| = 2 - 0 = 2$, so $B^{-1} = \frac{1}{2}\begin{bmatrix} 2 & -1 \\ 0 & 1 \end{bmatrix}$.`,
        t`Multiply in reverse order: $B^{-1}A^{-1} = \frac{1}{10}\begin{bmatrix} 11 & -4 \\ -3 & 2 \end{bmatrix}$.`,
        t`Directly: $AB = \begin{bmatrix} 2 & 4 \\ 3 & 11 \end{bmatrix}$, and $|AB| = 22 - 12 = 10$.`,
        t`So $(AB)^{-1} = \frac{1}{10}\begin{bmatrix} 11 & -4 \\ -3 & 2 \end{bmatrix}$, the same matrix.`,
      ],
      answer: t`$(AB)^{-1} = B^{-1}A^{-1} = \frac{1}{10}\begin{bmatrix} 11 & -4 \\ -3 & 2 \end{bmatrix}$.`,
    },
    visualSpec: t`Drag the entries of a $2 \times 2$ matrix $A$: the product $A(\operatorname{adj}A)$ updates live, always $|A|$ down the diagonal and $0$ off it.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Treating $\operatorname{adj}A$ as $A^{-1}$, with the factor $\frac{1}{|A|}$ left out`,
      remediation: t`$\operatorname{adj}A$ is not the inverse: $A(\operatorname{adj}A) = |A|I$, not $I$. Divide by $|A|$: $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M2",
      mistake: t`Using $|A|^n$, the determinant of $|A|I$, where the property has $|A|$ or $|A|^{n-1}$`,
      remediation: t`In $A(\operatorname{adj}A) = |A|I$ the diagonal holds $|A|$ itself, so $k = |A|$. Only the determinant of $|A|I$ is $|A|^n$; dividing it by $|A|$ gives $|\operatorname{adj}A| = |A|^{n-1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Taking $|\operatorname{adj}A| = |A|$, as for a transpose`,
      remediation: t`Taking determinants of $A(\operatorname{adj}A) = |A|I$ gives $|\operatorname{adj}A| = |A|^{n-1}$. That equals $|A|$ only for a $2 \times 2$ matrix; for $3 \times 3$ it is $|A|^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Writing $(AB)^{-1} = A^{-1}B^{-1}$, with the order kept`,
      remediation: t`The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$, as shoes come off before socks. Matrix products usually change when the order changes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Inverting only the number in front: $(kM)^{-1} = \frac{1}{k}M$`,
      remediation: t`Both parts invert: $(kM)^{-1} = \frac{1}{k}M^{-1}$. And $(A^{-1})^{-1} = A$, so undoing an inverse brings back the original matrix.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`A sign slip in the determinant, such as $bc - ad$ for $ad - bc$`,
      remediation: t`For $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $|A| = ad - bc$: the leading diagonal comes first. In a $3 \times 3$ expansion the signs go $+ - +$. A wrong sign flips $k$ and every entry of the inverse.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M1 gives the key when |A| = 1 (|adj A| and inverse items) and always gives 1 on k items: use matrices with |A| not 0 or 1, and |AB| not 1 or -1 for (AB)^{-1} items.",
    "C07-M3 gives the key for every 2 x 2 matrix (|adj A| = |A| there): catch it with 3 x 3 items only. C07-M2 gives the key on k items when |A| is 0 or 1.",
    "C07-M4 gives the key when A and B commute (e.g. one of them is a scalar matrix).",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc I (5)" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $A(\operatorname{adj}A) = kI$, then $k$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [3, 4]])" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C07-M2", value: "4" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C07-M6", value: "2" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$|A| = 1 \times 4 - 2 \times 3 = -2$.`,
          t`$A(\operatorname{adj}A) = |A|I$, so $k = |A| = -2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.4" },
      stem: t`For $A = \begin{bmatrix} 1 & -1 & 2 \\ 3 & 0 & -2 \\ 1 & 0 & 3 \end{bmatrix}$, $|A| = 11$. Then $|\operatorname{adj}A|$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [3, 0, -2], [1, 0, 3]])" }, params: { ask: "adjdet" } },
      options: [
        { key: "A", text: t`$\frac{1}{11}$`, correct: false, misconceptionId: "C07-M1", value: "1/11" },
        { key: "B", text: t`$1331$`, correct: false, misconceptionId: "C07-M2", value: "1331" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C07-M3", value: "11" },
        { key: "D", text: t`$121$`, correct: true, value: "121" },
      ],
      solution: {
        steps: [
          t`For a $3 \times 3$ matrix, $|\operatorname{adj}A| = |A|^{3-1} = |A|^2$.`,
          t`So $|\operatorname{adj}A| = 11^2 = 121$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.9" },
      stem: t`If $A = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 0 \\ 3 & 2 \end{bmatrix}$, then $(AB)^{-1}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 3], [1, 2]])", B: "Matrix([[1, 0], [3, 2]])" }, params: { ask: "abinv" } },
      options: [
        { key: "A", text: t`$-\dfrac{1}{2}\begin{bmatrix} 4 & -6 \\ -7 & 11 \end{bmatrix}$`, correct: false, misconceptionId: "C07-M6", value: "Matrix([[-2, 3], [7/2, -11/2]])" },
        { key: "B", text: t`$\dfrac{1}{2}\begin{bmatrix} 4 & -6 \\ -7 & 11 \end{bmatrix}$`, correct: true, value: "Matrix([[2, -3], [-7/2, 11/2]])" },
        { key: "C", text: t`$\begin{bmatrix} 4 & -6 \\ -7 & 11 \end{bmatrix}$`, correct: false, misconceptionId: "C07-M1", value: "Matrix([[4, -6], [-7, 11]])" },
        { key: "D", text: t`$\dfrac{1}{2}\begin{bmatrix} 13 & -3 \\ -8 & 2 \end{bmatrix}$`, correct: false, misconceptionId: "C07-M4", value: "Matrix([[13/2, -3/2], [-4, 1]])" },
      ],
      solution: {
        steps: [
          t`$AB = \begin{bmatrix} 11 & 6 \\ 7 & 4 \end{bmatrix}$, and $|AB| = 44 - 42 = 2$.`,
          t`$\operatorname{adj}(AB) = \begin{bmatrix} 4 & -6 \\ -7 & 11 \end{bmatrix}$.`,
          t`So $(AB)^{-1} = \frac{1}{2}\begin{bmatrix} 4 & -6 \\ -7 & 11 \end{bmatrix}$.`,
          t`$B^{-1}A^{-1}$ gives the same matrix; $A^{-1}B^{-1}$ does not.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc I (12)" },
      stem: t`If $A^{-1} = -\dfrac{1}{2}\begin{bmatrix} 1 & -4 \\ -1 & 2 \end{bmatrix}$, then $A$ is:`,
      verify: { kind: "value", inputs: { c: "-1/2", M: "Matrix([[1, -4], [-1, 2]])" }, params: { ask: "frominv" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & 4\\1 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[2, 4], [1, 1]])" },
        { key: "B", text: t`$-\dfrac{1}{2}\begin{bmatrix} 2 & 4 \\ 1 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C07-M1", value: "Matrix([[-1, -2], [-1/2, -1/2]])" },
        { key: "C", text: t`$\left[\begin{matrix}-2 & 8\\2 & -4\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M5", value: "Matrix([[-2, 8], [2, -4]])" },
        { key: "D", text: t`$\left[\begin{matrix}-2 & -4\\-1 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M6", value: "Matrix([[-2, -4], [-1, -1]])" },
      ],
      solution: {
        steps: [
          t`$A = (A^{-1})^{-1}$, and $(kM)^{-1} = \frac{1}{k}M^{-1}$; here $\frac{1}{k} = -2$.`,
          t`For $M = \begin{bmatrix} 1 & -4 \\ -1 & 2 \end{bmatrix}$: $|M| = 2 - 4 = -2$.`,
          t`So $M^{-1} = -\frac{1}{2}\begin{bmatrix} 2 & 4 \\ 1 & 1 \end{bmatrix}$.`,
          t`$A = -2M^{-1} = \begin{bmatrix} 2 & 4 \\ 1 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.15" },
      stem: t`If $A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 3 \\ 1 & 2 & 1 \end{bmatrix}$ and $(\operatorname{adj}A)A = kI$, then $k$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 1], [0, 2, 3], [1, 2, 1]])" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
        { key: "B", text: t`$-216$`, correct: false, misconceptionId: "C07-M2", value: "-216" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C07-M6", value: "6" },
        { key: "D", text: t`$-6$`, correct: true, value: "-6" },
      ],
      solution: {
        steps: [
          t`Expand along row 1: $|A| = 1(2 - 6) - 0 + 1(0 - 2)$ $= -6$.`,
          t`$(\operatorname{adj}A)A = |A|I$, so $k = -6$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.5 (ii)" },
      stem: t`If $A = \begin{bmatrix} 2 & -2 \\ 4 & 3 \end{bmatrix}$, then $(A^{-1})^{-1}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -2], [4, 3]])" }, params: { ask: "invinv" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & -2\\4 & 3\end{matrix}\right]$`, correct: true, value: "Matrix([[2, -2], [4, 3]])" },
        { key: "B", text: t`$\dfrac{1}{14}\begin{bmatrix} 2 & -2 \\ 4 & 3 \end{bmatrix}$`, correct: false, misconceptionId: "C07-M1", value: "Matrix([[1/7, -1/7], [2/7, 3/14]])" },
        { key: "C", text: t`$\left[\begin{matrix}42 & 28\\-56 & 28\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M5", value: "Matrix([[42, 28], [-56, 28]])" },
        { key: "D", text: t`$\left[\begin{matrix}-2 & 2\\-4 & -3\end{matrix}\right]$`, correct: false, misconceptionId: "C07-M6", value: "Matrix([[-2, 2], [-4, -3]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 6 + 8 = 14 \neq 0$, so $A^{-1}$ exists.`,
          t`$AA^{-1} = A^{-1}A = I$ shows that $A$ is the inverse of $A^{-1}$.`,
          t`So $(A^{-1})^{-1} = A = \begin{bmatrix} 2 & -2 \\ 4 & 3 \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
