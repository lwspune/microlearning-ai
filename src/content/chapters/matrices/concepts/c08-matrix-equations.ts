import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`With numbers, $3x = 6$ and $x \cdot 3 = 6$ have the same answer. Take $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$. **Do $AX = B$ and $XA = B$ have the same solution $X$?**`,
    reveal: t`No. Here $A^{-1} = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}$. For $AX = B$, $X = A^{-1}B = \begin{bmatrix} -2 & -2 \\ 3 & 4 \end{bmatrix}$. For $XA = B$, $X = BA^{-1} = \begin{bmatrix} 1 & 1 \\ 3 & 1 \end{bmatrix}$. Matrix products depend on order, so $A^{-1}$ must go on the side where $A$ was.`,
  },
  explanation: {
    intuition: [
      t`A **matrix equation** has an unknown matrix $X$ in it, like $AX = B$.`,
      t`With numbers, $3x = 6$ gives $x = 6 \div 3$, and order never matters.`,
      t`There is no division by a matrix; we multiply by the **inverse** $A^{-1}$ instead.`,
      t`$A^{-1}$ cancels $A$ because $A^{-1}A = AA^{-1} = I$, and $IX = XI = X$.`,
      t`But matrix products depend on order: $PQ$ and $QP$ are usually different.`,
      t`So $A^{-1}$ must stand next to $A$, on its side: $AX = B$ gives $X = A^{-1}B$.`,
    ],
    formal: [
      {
        title: "Pre-multiply and post-multiply",
        points: [
          t`To **pre-multiply** by $P$ is to put $P$ on the left: $Q$ becomes $PQ$.`,
          t`To **post-multiply** by $P$ is to put $P$ on the right: $Q$ becomes $QP$.`,
          t`An equation stays true when both sides are multiplied by $P$ on the **same** side.`,
          t`Pre-multiplying one side and post-multiplying the other can break it, since $PQ \neq QP$ in general.`,
          t`$A^{-1}$ exists only when $|A| \neq 0$, and then $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
        ],
      },
      {
        title: "Solving AX = B",
        points: [
          t`$A$ is on the left of $X$, so pre-multiply both sides by $A^{-1}$.`,
          t`This gives $A^{-1}(AX) = A^{-1}B$.`,
          t`Regroup: $(A^{-1}A)X = IX = X$.`,
          t`So $X = A^{-1}B$, with $A^{-1}$ on the left, where $A$ was.`,
          t`$BA^{-1}$ is wrong: when $B$ is a column, $BA^{-1}$ is not even defined.`,
        ],
      },
      {
        title: "Solving XA = B",
        points: [
          t`Now $A$ is on the right of $X$, so post-multiply both sides by $A^{-1}$.`,
          t`This gives $(XA)A^{-1} = BA^{-1}$.`,
          t`Regroup: $X(AA^{-1}) = XI = X$.`,
          t`So $X = BA^{-1}$, with $A^{-1}$ on the right, where $A$ was.`,
        ],
      },
      {
        title: "Solving AXB = C",
        points: [
          t`Here $X$ is sandwiched: $A$ on its left, $B$ on its right.`,
          t`Pre-multiply by $A^{-1}$: $XB = A^{-1}C$.`,
          t`Post-multiply by $B^{-1}$: $X = A^{-1}CB^{-1}$.`,
          t`$X$ stays in the middle: $AXB$ is not $ABX$, so $(AB)^{-1}C$ is wrong.`,
          t`Check any answer by substituting it back into the equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $X$ if $AX = B$, where $A = \begin{bmatrix} 4 & 3 \\ 2 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}$.`,
      steps: [
        t`$|A| = 8 - 6 = 2 \neq 0$, so $A^{-1}$ exists: $A^{-1} = \frac{1}{2}\begin{bmatrix} 2 & -3 \\ -2 & 4 \end{bmatrix}$.`,
        t`$A$ is on the left of $X$, so pre-multiply by $A^{-1}$: $X = A^{-1}B$.`,
        t`$A^{-1}B = \frac{1}{2}\begin{bmatrix} 4 & -4 \\ -4 & 6 \end{bmatrix}$ $= \begin{bmatrix} 2 & -2 \\ -2 & 3 \end{bmatrix}$.`,
        t`Check: $AX = \begin{bmatrix} 8 - 6 & -8 + 9 \\ 4 - 4 & -4 + 6 \end{bmatrix} = B$.`,
        t`The wrong side gives $BA^{-1} = \begin{bmatrix} 1 & -1 \\ -2 & 4 \end{bmatrix}$, and $A$ times that is $\begin{bmatrix} -2 & 8 \\ -2 & 6 \end{bmatrix} \neq B$.`,
      ],
      answer: t`$X = \begin{bmatrix} 2 & -2 \\ -2 & 3 \end{bmatrix}$.`,
    },
    visualSpec: t`Drag $A^{-1}$ to the left or right edge of both sides of $AX = B$: on the matching side $A^{-1}A$ fuses into $I$ and vanishes, leaving $X$; on the wrong side the product stays tangled and the check $AX = B$ turns red.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Putting $A^{-1}$ on the wrong side: $X = BA^{-1}$ from $AX = B$, or $X = A^{-1}B$ from $XA = B$`,
      remediation: t`Matrix products depend on order, so $A^{-1}$ goes on the side where $A$ was. From $AX = B$, pre-multiply: $X = A^{-1}B$. From $XA = B$, post-multiply: $X = BA^{-1}$.`,
      fallback: { kind: "ext", topic: "matrix multiplication is not commutative" },
    },
    {
      id: "C08-M2",
      mistake: t`Dividing $B$ by $|A|$, as if $A$ were a number`,
      remediation: t`There is no division by a matrix, and $|A|$ is just a number. Multiply by the whole matrix $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M3",
      mistake: t`Using $\operatorname{adj}A$ in place of $A^{-1}$, leaving out $\frac{1}{|A|}$`,
      remediation: t`$A^{-1} = \frac{1}{|A|}\operatorname{adj}A$. With $\operatorname{adj}A$ alone, $A(\operatorname{adj}A)B = |A|B$, not $B$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M4",
      mistake: t`Building $A^{-1}$ from the cofactor matrix without transposing it`,
      remediation: t`$A^{-1}$ uses $\operatorname{adj}A$, the **transpose** of the cofactor matrix: $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M5",
      mistake: t`In $AXB = C$, treating $AXB$ as $ABX$, so $X = (AB)^{-1}C$`,
      remediation: t`$X$ stays between $A$ and $B$. Pre-multiply by $A^{-1}$ and post-multiply by $B^{-1}$: $X = A^{-1}CB^{-1}$.`,
      fallback: { kind: "ext", topic: "matrix multiplication is not commutative" },
    },
  ],
  engineNotes: [
    "C08-M1 gives the key when B commutes with A (for example AX = I), and is undefined for AX = B with B a column (C08-Q3).",
    "C08-M3 gives the key when |A| = 1 (and |B| = 1 for AXB = C, as in C08-Q4); C08-M4 gives the key when A (and B) are symmetric.",
    "C08-M5 applies only to AXB = C.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.11" },
      stem: t`Find the matrix $X$ such that $AX = B$, where $A = \begin{bmatrix} 1 & 2 \\ -1 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & 1 \\ 2 & 4 \end{bmatrix}$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [-1, 3]])", B: "Matrix([[0, 1], [2, 4]])" }, params: { eq: "AX=B" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}- \frac{4}{5} & -1\\\frac{2}{5} & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[-4/5, -1], [2/5, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{1}{5} & \frac{1}{5}\\2 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[1/5, 1/5], [2, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}-4 & -5\\2 & 5\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[-4, -5], [2, 5]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & \frac{1}{5}\\\frac{2}{5} & \frac{4}{5}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[0, 1/5], [2/5, 4/5]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 3 + 2 = 5$, so $A^{-1} = \frac{1}{5}\begin{bmatrix} 3 & -2 \\ 1 & 1 \end{bmatrix}$.`,
          t`$A$ is on the left of $X$, so $X = A^{-1}B$.`,
          t`$X = \frac{1}{5}\begin{bmatrix} -4 & -5 \\ 2 & 5 \end{bmatrix}$ $= \begin{bmatrix} -\frac{4}{5} & -1 \\ \frac{2}{5} & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.20" },
      stem: t`Let $A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 3 \\ 1 & 2 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 2 & 3 \\ 1 & 1 & 5 \\ 2 & 4 & 7 \end{bmatrix}$. If $XA = B$, the first row of $X$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 1], [0, 2, 3], [1, 2, 1]])", B: "Matrix([[1, 2, 3], [1, 1, 5], [2, 4, 7]])" }, params: { eq: "XA=B", ask: "row", i: "1" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & \frac{7}{3} & \frac{8}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[1, 7/3, 8/3]])" },
        { key: "B", text: t`$\left[\begin{matrix}-4 & -4 & -2\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[-4, -4, -2]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 1 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[1, 1, 0]])" },
        { key: "D", text: t`$\left[\begin{matrix}\frac{2}{3} & \frac{2}{3} & \frac{1}{3}\end{matrix}\right]$`, correct: true, value: "Matrix([[2/3, 2/3, 1/3]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 1(2 - 6) + 1(0 - 2) = -6$.`,
          t`$\operatorname{adj}A = \begin{bmatrix} -4 & 2 & -2 \\ 3 & 0 & -3 \\ -2 & -2 & 2 \end{bmatrix}$, so $A^{-1} = -\frac{1}{6}\operatorname{adj}A$.`,
          t`$A$ is on the right of $X$, so $X = BA^{-1}$; its first row is $(1, 2, 3)A^{-1}$.`,
          t`$(1, 2, 3)\operatorname{adj}A = (-4, -4, -2)$; times $-\frac{1}{6}$: $\left(\frac{2}{3}, \frac{2}{3}, \frac{1}{3}\right)$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.12" },
      stem: t`Find $X$ if $AX = B$, where $A = \begin{bmatrix} 1 & 2 & 3 \\ -1 & 1 & 2 \\ 1 & 2 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [-1, 1, 2], [1, 2, 4]])", B: "Matrix([[1], [2], [3]])" }, params: { eq: "AX=B" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{1}{3}\\\frac{2}{3}\\1\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[1/3], [2/3], [1]])" },
        { key: "B", text: t`$\left[\begin{matrix}-1\\-7\\6\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[-1], [-7], [6]])" },
        { key: "C", text: t`$\left[\begin{matrix}1\\0\\0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[1], [0], [0]])" },
        { key: "D", text: t`$\left[\begin{matrix}- \frac{1}{3}\\- \frac{7}{3}\\2\end{matrix}\right]$`, correct: true, value: "Matrix([[-1/3], [-7/3], [2]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 1(0) - 2(-6) + 3(-3) = 3$.`,
          t`$\operatorname{adj}A = \begin{bmatrix} 0 & -2 & 1 \\ 6 & 1 & -5 \\ -3 & 0 & 3 \end{bmatrix}$, and $X = A^{-1}B = \frac{1}{3}(\operatorname{adj}A)B$.`,
          t`$(\operatorname{adj}A)B = \begin{bmatrix} 0 - 4 + 3 \\ 6 + 2 - 15 \\ -3 + 0 + 9 \end{bmatrix} = \begin{bmatrix} -1 \\ -7 \\ 6 \end{bmatrix}$.`,
          t`So $X = \begin{bmatrix} -\frac{1}{3} \\ -\frac{7}{3} \\ 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.13" },
      stem: t`Let $A = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$, $B = \begin{bmatrix} 4 & 1 \\ 3 & 1 \end{bmatrix}$ and $C = \begin{bmatrix} 24 & 7 \\ 31 & 9 \end{bmatrix}$. The matrix $X$ such that $AXB = C$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1], [1, 2]])", B: "Matrix([[4, 1], [3, 1]])", C: "Matrix([[24, 7], [31, 9]])" }, params: { eq: "AXB=C" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}10 & 3\\-23 & -7\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M5", value: "Matrix([[10, 3], [-23, -7]])" },
        { key: "B", text: t`$\left[\begin{matrix}12 & -31\\5 & -13\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[12, -31], [5, -13]])" },
        { key: "C", text: t`$\left[\begin{matrix}2 & 3\\1 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[2, 3], [1, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}-12 & 5\\89 & -37\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[-12, 5], [89, -37]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 1$ and $|B| = 1$: $A^{-1} = \begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}$, $B^{-1} = \begin{bmatrix} 1 & -1 \\ -3 & 4 \end{bmatrix}$.`,
          t`$X$ is between $A$ and $B$, so $X = A^{-1}CB^{-1}$.`,
          t`$A^{-1}C = \begin{bmatrix} 17 & 5 \\ 7 & 2 \end{bmatrix}$.`,
          t`$X = \begin{bmatrix} 17 & 5 \\ 7 & 2 \end{bmatrix}B^{-1} = \begin{bmatrix} 2 & 3 \\ 1 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`If $A = \begin{bmatrix} 4 & 1 \\ 5 & 2 \end{bmatrix}$, $B = \begin{bmatrix} 3 & 8 \\ 3 & 10 \end{bmatrix}$ and $AX = B$, then $X$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, 1], [5, 2]])", B: "Matrix([[3, 8], [3, 10]])" }, params: { eq: "AX=B" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-3 & - \frac{34}{3}\\3 & \frac{32}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[-3, -34/3], [3, 32/3]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & 2\\-1 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 2], [-1, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & \frac{8}{3}\\1 & \frac{10}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[1, 8/3], [1, 10/3]])" },
        { key: "D", text: t`$\left[\begin{matrix}3 & 6\\-3 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[3, 6], [-3, 0]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 8 - 5 = 3$, so $A^{-1} = \frac{1}{3}\begin{bmatrix} 2 & -1 \\ -5 & 4 \end{bmatrix}$.`,
          t`$A$ is on the left of $X$, so $X = A^{-1}B$.`,
          t`$X = \frac{1}{3}\begin{bmatrix} 3 & 6 \\ -3 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ -1 & 0 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.20" },
      stem: t`Find the matrix $X$ such that $XA = B$, where $A = \begin{bmatrix} 1 & -1 \\ 2 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1], [2, 3]])", B: "Matrix([[3, 2], [1, 4]])" }, params: { eq: "XA=B" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{3}{5} & \frac{2}{5}\\\frac{1}{5} & \frac{4}{5}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[3/5, 2/5], [1/5, 4/5]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{11}{5} & - \frac{4}{5}\\\frac{7}{5} & \frac{2}{5}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[11/5, -4/5], [7/5, 2/5]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 1\\-1 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 1], [-1, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}2 & 2\\-1 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[2, 2], [-1, 0]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 3 + 2 = 5$, so $A^{-1} = \frac{1}{5}\begin{bmatrix} 3 & 1 \\ -2 & 1 \end{bmatrix}$.`,
          t`$A$ is on the right of $X$, so post-multiply: $X = BA^{-1}$.`,
          t`$X = \frac{1}{5}\begin{bmatrix} 5 & 5 \\ -5 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
