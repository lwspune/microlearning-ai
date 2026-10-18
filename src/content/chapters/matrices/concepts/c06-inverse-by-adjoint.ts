import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Take $A = \begin{bmatrix} 3 & 1 \\ 4 & 3 \end{bmatrix}$ and its adjoint $\begin{bmatrix} 3 & -1 \\ -4 & 3 \end{bmatrix}$. Their product is not $I$. **What single number must you divide the adjoint by to get $A^{-1}$?**`,
    reveal: t`The product is $\begin{bmatrix} 5 & 0 \\ 0 & 5 \end{bmatrix} = 5I$, and $5 = 9 - 4 = |A|$. Divide the adjoint by $5$: $A^{-1} = \frac{1}{5}\begin{bmatrix} 3 & -1 \\ -4 & 3 \end{bmatrix}$. Dividing by $|A|$ always works, as long as $|A| \neq 0$.`,
  },
  explanation: {
    intuition: [
      t`The **inverse** of a square matrix $A$ is the matrix $A^{-1}$ with $AA^{-1} = A^{-1}A = I$.`,
      t`Recall: $\operatorname{adj}A$ is the transpose of the cofactor matrix of $A$.`,
      t`Multiplying $A$ by $\operatorname{adj}A$ always gives $|A|$ times $I$.`,
      t`So dividing $\operatorname{adj}A$ by the number $|A|$ turns that product into $I$.`,
      t`This needs $|A| \neq 0$: a matrix with $|A| = 0$ has no inverse.`,
      t`At the end, multiply $A$ by your answer: getting $I$ confirms it.`,
    ],
    formal: [
      {
        title: "The adjoint formula",
        points: [
          t`If $|A| \neq 0$, then $A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$.`,
          t`Here $\frac{1}{|A|}$ is a number: it divides every entry of $\operatorname{adj}A$.`,
          t`The reason: $A(\operatorname{adj}A) = (\operatorname{adj}A)A = |A|\,I$.`,
          t`Dividing that by $|A|$ leaves $I$, so $\frac{1}{|A|}\operatorname{adj}A$ is the inverse.`,
          t`If $|A| = 0$, the division is impossible and $A$ has no inverse.`,
          t`Keep the sign of $|A|$: dividing by a negative $|A|$ flips every sign of $\operatorname{adj}A$.`,
        ],
      },
      {
        title: "The 2 × 2 inverse",
        points: [
          t`Take $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ with $|A| = ad - bc \neq 0$.`,
          t`Its adjoint is $\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$: swap the diagonal, negate the other two.`,
          t`So $A^{-1} = \dfrac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.`,
          t`For example, $\begin{bmatrix} 3 & 2 \\ 4 & 5 \end{bmatrix}$ has $|A| = 15 - 8 = 7$.`,
          t`Its inverse is $\frac{1}{7}\begin{bmatrix} 5 & -2 \\ -4 & 3 \end{bmatrix}$.`,
        ],
      },
      {
        title: "The 3 × 3 steps",
        points: [
          t`Step 1: find $|A|$; if it is $0$, stop, because there is no inverse.`,
          t`Step 2: find all nine cofactors $A_{ij} = (-1)^{i+j}M_{ij}$.`,
          t`Step 3: transpose the cofactor matrix to get $\operatorname{adj}A$.`,
          t`Step 4: multiply $\operatorname{adj}A$ by the number $\frac{1}{|A|}$.`,
          t`Leave $\frac{1}{|A|}$ outside the matrix, as the book does: it avoids fractions inside.`,
        ],
      },
      {
        title: "Checking with AA⁻¹ = I",
        points: [
          t`To check, multiply $A$ by your $A^{-1}$: the product must be $I$.`,
          t`Row $i$ of $A$ times column $i$ of $A^{-1}$ must give $1$.`,
          t`Row $i$ of $A$ times any other column of $A^{-1}$ must give $0$.`,
          t`With $\frac{1}{|A|}$ kept outside, $A(\operatorname{adj}A)$ should show $|A|$ on the diagonal and $0$ elsewhere.`,
          t`A wrong sign or a missed transpose shows up as a non-zero entry off the diagonal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $A^{-1}$ by the adjoint method for $A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 3 \\ 1 & 2 & 1 \end{bmatrix}$.`,
      steps: [
        t`$|A| = 1(2 - 6) - 0 + 1(0 - 2)$ $= -6 \neq 0$, so $A^{-1}$ exists.`,
        t`Cofactors by rows: $-4, 3, -2$; then $2, 0, -2$; then $-2, -3, 2$.`,
        t`Transpose: $\operatorname{adj}A = \begin{bmatrix} -4 & 2 & -2 \\ 3 & 0 & -3 \\ -2 & -2 & 2 \end{bmatrix}$.`,
        t`Divide by $|A| = -6$: $A^{-1} = -\frac{1}{6}\operatorname{adj}A$.`,
        t`Check row 1 of $A$ with column 1 of $\operatorname{adj}A$: $-4 + 0 - 2 = -6$, and $-\frac{1}{6}(-6) = 1$. With column 2: $2 + 0 - 2 = 0$.`,
      ],
      answer: t`$A^{-1} = -\frac{1}{6}\begin{bmatrix} -4 & 2 & -2 \\ 3 & 0 & -3 \\ -2 & -2 & 2 \end{bmatrix}$.`,
    },
    visualSpec: t`Drag the entries of a $2 \times 2$ matrix: $|A|$, $\operatorname{adj}A$ and $A^{-1}$ update live, and the product $AA^{-1}$ lights up as $I$ whenever $|A| \neq 0$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Dividing the cofactor matrix by |A| without transposing it",
      remediation: t`$A^{-1}$ uses $\operatorname{adj}A$, the **transpose** of the cofactor matrix: the cofactors of row $i$ of $A$ go down column $i$. Transpose first, then divide by $|A|$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: t`Taking $\operatorname{adj}A$ itself as the inverse`,
      remediation: t`$\operatorname{adj}A$ is not yet the inverse, because $A(\operatorname{adj}A) = |A|\,I$. Divide every entry by $|A|$: $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Multiplying $\operatorname{adj}A$ by $|A|$ instead of dividing by it`,
      remediation: t`The determinant goes in the denominator: $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$. Multiplying by $|A|$ makes the product with $A$ equal $|A|^2 I$, not $I$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Using the transpose $A^T$ in place of $\operatorname{adj}A$`,
      remediation: t`$\operatorname{adj}A$ is the transpose of the **cofactor** matrix, not of $A$. Find each cofactor first; $A^T$ only rearranges the entries of $A$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M5",
      mistake: t`Using the minors $M_{ij}$ without the signs $(-1)^{i+j}$`,
      remediation: t`Each entry of $\operatorname{adj}A$ is a cofactor $A_{ij} = (-1)^{i+j}M_{ij}$, not a bare minor. In the $2 \times 2$ rule this is why $b$ and $c$ change sign.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C06-M1 gives the key when A is symmetric, and C06-M4 when A^T = A^{-1} (rotation matrices such as Misc I (7)); avoid those for these two.",
    "C06-M2 gives the key when |A| = 1, and C06-M3 when |A| = 1 or -1; C06-Q3 has |A| = -1, so it leaves C06-M3 off.",
    "C06-M5 changes only the entries whose cofactor sign is minus; an entry item must ask for one of those (C06-Q5 asks for row 2, column 1).",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.5 (i)" },
      stem: t`By the adjoint method, the inverse of $A = \begin{bmatrix} -1 & 5 \\ -3 & 2 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[-1, 5], [-3, 2]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\frac{1}{13}\begin{bmatrix} 2 & 3 \\ -5 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M1", value: "Matrix([[2/13, 3/13], [-5/13, -1/13]])" },
        { key: "B", text: t`$\begin{bmatrix} 2 & -5 \\ 3 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M2", value: "Matrix([[2, -5], [3, -1]])" },
        { key: "C", text: t`$\frac{1}{13}\begin{bmatrix} 2 & 5 \\ -3 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M5", value: "Matrix([[2/13, 5/13], [-3/13, -1/13]])" },
        { key: "D", text: t`$\frac{1}{13}\begin{bmatrix} 2 & -5 \\ 3 & -1 \end{bmatrix}$`, correct: true, value: "Matrix([[2/13, -5/13], [3/13, -1/13]])" },
      ],
      solution: {
        steps: [
          t`$|A| = (-1)(2) - (5)(-3) = 13$.`,
          t`Swap $-1$ and $2$; negate $5$ and $-3$: $\operatorname{adj}A = \begin{bmatrix} 2 & -5 \\ 3 & -1 \end{bmatrix}$.`,
          t`So $A^{-1} = \frac{1}{13}\begin{bmatrix} 2 & -5 \\ 3 & -1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.7 iv)" },
      stem: t`By the adjoint method, the inverse of $A = \begin{bmatrix} 2 & -3 \\ 5 & 7 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3], [5, 7]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\frac{1}{29}\begin{bmatrix} 7 & 3 \\ -5 & 2 \end{bmatrix}$`, correct: true, value: "Matrix([[7/29, 3/29], [-5/29, 2/29]])" },
        { key: "B", text: t`$\begin{bmatrix} 203 & 87 \\ -145 & 58 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M3", value: "Matrix([[203, 87], [-145, 58]])" },
        { key: "C", text: t`$\frac{1}{29}\begin{bmatrix} 2 & 5 \\ -3 & 7 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M4", value: "Matrix([[2/29, 5/29], [-3/29, 7/29]])" },
        { key: "D", text: t`$\frac{1}{29}\begin{bmatrix} 7 & -5 \\ 3 & 2 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M1", value: "Matrix([[7/29, -5/29], [3/29, 2/29]])" },
      ],
      solution: {
        steps: [
          t`$|A| = (2)(7) - (-3)(5) = 29$.`,
          t`Swap $2$ and $7$; negate $-3$ and $5$: $\operatorname{adj}A = \begin{bmatrix} 7 & 3 \\ -5 & 2 \end{bmatrix}$.`,
          t`So $A^{-1} = \frac{1}{29}\begin{bmatrix} 7 & 3 \\ -5 & 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.14" },
      stem: t`By the adjoint method, the inverse of $A = \begin{bmatrix} 1 & 2 & 3 \\ 1 & 1 & 5 \\ 2 & 4 & 7 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [1, 1, 5], [2, 4, 7]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\begin{bmatrix} 13 & 2 & -7 \\ -3 & -1 & 2 \\ -2 & 0 & 1 \end{bmatrix}$`, correct: true, value: "Matrix([[13, 2, -7], [-3, -1, 2], [-2, 0, 1]])" },
        { key: "B", text: t`$\begin{bmatrix} 13 & -3 & -2 \\ 2 & -1 & 0 \\ -7 & 2 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M1", value: "Matrix([[13, -3, -2], [2, -1, 0], [-7, 2, 1]])" },
        { key: "C", text: t`$\begin{bmatrix} -13 & -2 & 7 \\ 3 & 1 & -2 \\ 2 & 0 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M2", value: "Matrix([[-13, -2, 7], [3, 1, -2], [2, 0, -1]])" },
        { key: "D", text: t`$\begin{bmatrix} 13 & -2 & -7 \\ 3 & -1 & -2 \\ -2 & 0 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M5", value: "Matrix([[13, -2, -7], [3, -1, -2], [-2, 0, 1]])" },
      ],
      solution: {
        steps: [
          t`$|A| = 1(7 - 20) - 2(7 - 10)$ $+ 3(4 - 2) = -1$.`,
          t`Cofactors by rows: $-13, 3, 2$; then $-2, 1, 0$; then $7, -2, -1$.`,
          t`Transpose: $\operatorname{adj}A = \begin{bmatrix} -13 & -2 & 7 \\ 3 & 1 & -2 \\ 2 & 0 & -1 \end{bmatrix}$.`,
          t`Divide by $-1$: $A^{-1} = \begin{bmatrix} 13 & 2 & -7 \\ -3 & -1 & 2 \\ -2 & 0 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.5 (iv)" },
      stem: t`By the adjoint method, the inverse of $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 2 & 4 \\ 0 & 0 & 5 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [0, 2, 4], [0, 0, 5]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\frac{1}{10}\begin{bmatrix} 10 & 10 & 2 \\ 0 & 5 & 4 \\ 0 & 0 & 2 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M5", value: "Matrix([[1, 1, 1/5], [0, 1/2, 2/5], [0, 0, 1/5]])" },
        { key: "B", text: t`$\frac{1}{10}\begin{bmatrix} 10 & -10 & 2 \\ 0 & 5 & -4 \\ 0 & 0 & 2 \end{bmatrix}$`, correct: true, value: "Matrix([[1, -1, 1/5], [0, 1/2, -2/5], [0, 0, 1/5]])" },
        { key: "C", text: t`$\begin{bmatrix} 10 & -10 & 2 \\ 0 & 5 & -4 \\ 0 & 0 & 2 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M2", value: "Matrix([[10, -10, 2], [0, 5, -4], [0, 0, 2]])" },
        { key: "D", text: t`$\frac{1}{10}\begin{bmatrix} 1 & 0 & 0 \\ 2 & 2 & 0 \\ 3 & 4 & 5 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M4", value: "Matrix([[1/10, 0, 0], [1/5, 1/5, 0], [3/10, 2/5, 1/2]])" },
      ],
      solution: {
        steps: [
          t`Expand down column 1: $|A| = 1(10 - 0) = 10$.`,
          t`Cofactors by rows: $10, 0, 0$; then $-10, 5, 0$; then $2, -4, 2$.`,
          t`Transpose: $\operatorname{adj}A = \begin{bmatrix} 10 & -10 & 2 \\ 0 & 5 & -4 \\ 0 & 0 & 2 \end{bmatrix}$.`,
          t`So $A^{-1} = \frac{1}{10}\operatorname{adj}A$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.7 vii)" },
      stem: t`For $A = \begin{bmatrix} 2 & -3 & 3 \\ 2 & 2 & 3 \\ 3 & -2 & 2 \end{bmatrix}$, the entry in row 2, column 1 of $A^{-1}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3, 3], [2, 2, 3], [3, -2, 2]])" }, params: { ask: "entry", i: "2", j: "1" } },
      options: [
        { key: "A", text: t`$- \frac{1}{5}$`, correct: true, value: "-1/5" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C06-M1", value: "0" },
        { key: "C", text: t`$\frac{3}{25}$`, correct: false, misconceptionId: "C06-M4", value: "3/25" },
        { key: "D", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C06-M5", value: "1/5" },
      ],
      solution: {
        steps: [
          t`$|A| = 2(4 + 6) + 3(4 - 9)$ $+ 3(-4 - 6) = -25$.`,
          t`Row 2, column 1 of $A^{-1}$ is $\frac{A_{12}}{|A|}$: the indices swap in $\operatorname{adj}A$.`,
          t`$A_{12} = -(2 \cdot 2 - 3 \cdot 3) = 5$.`,
          t`So the entry is $\frac{5}{-25} = -\frac{1}{5}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.6" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $X$ is a $2 \times 2$ matrix such that $AX = I$, then $X$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [3, 4]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\begin{bmatrix} -8 & 4 \\ 6 & -2 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M3", value: "Matrix([[-8, 4], [6, -2]])" },
        { key: "B", text: t`$-\frac{1}{2}\begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M4", value: "Matrix([[-1/2, -3/2], [-1, -2]])" },
        { key: "C", text: t`$-\frac{1}{2}\begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$`, correct: true, value: "Matrix([[-2, 1], [3/2, -1/2]])" },
        { key: "D", text: t`$\begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C06-M2", value: "Matrix([[4, -2], [-3, 1]])" },
      ],
      solution: {
        steps: [
          t`$AX = I$ means $X = A^{-1}$.`,
          t`$|A| = 4 - 6 = -2$, and $\operatorname{adj}A = \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$.`,
          t`So $X = -\frac{1}{2}\begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$.`,
          t`Check row 1 of $A$ with column 1 of $\operatorname{adj}A$: $4 - 6 = -2$, and $-\frac{1}{2}(-2) = 1$.`,
        ],
      },
    },
  ],
};
