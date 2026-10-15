import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`$2\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $2\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$ look alike. **Does the $2$ do the same job in both?**`,
    reveal: t`No. The determinant is a number, $4 - 6 = -2$, so $2$ times it is $-4$: the $2$ can go into one row. The matrix is the whole array, so the $2$ multiplies every entry: $\begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$. Its determinant is $16 - 24 = -8$, not $-4$.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **matrix** is a table of numbers, set out in rows and columns.`,
      t`Think of a sales sheet, with a row for each shop and a column for each subject.`,
      t`To add two such sheets, add the **matching cells**: the ones in the same row and the same column.`,
      t`So both sheets must have the same shape: the same number of rows and of columns.`,
      t`Scaling the sheet by a number $k$ multiplies every cell by $k$.`,
      t`All of it works **entry by entry**: ordinary arithmetic, done in each position at once.`,
    ],
    formal: [
      {
        title: "Adding matrices",
        points: [
          t`Recall: a matrix of **order** $m \times n$ has $m$ rows and $n$ columns.`,
          t`Recall: $a_{ij}$ is the entry of $A$ in row $i$, column $j$.`,
          t`Two matrices have the **same order** when they have the same number of rows and of columns.`,
          t`Only matrices of the same order can be added.`,
          t`Add the **matching entries**, the ones in the same position: $(A + B)_{ij} = a_{ij} + b_{ij}$.`,
          t`So a $2 \times 3$ and a $3 \times 2$ matrix cannot be added.`,
        ],
      },
      {
        title: "Multiplying by a scalar",
        points: [
          t`A **scalar** is an ordinary number, not a matrix.`,
          t`The **scalar multiple** $kA$ multiplies **every** entry of $A$ by $k$: $(kA)_{ij} = k\,a_{ij}$.`,
          t`In a determinant a factor goes into one row only; in a matrix it goes into every entry.`,
          t`Recall: the identity matrix $I$ has $1$ on its diagonal and $0$ elsewhere.`,
          t`So $kI$ has $k$ on the diagonal and $0$ elsewhere.`,
        ],
      },
      {
        title: "Subtracting matrices",
        points: [
          t`The **negative** $-B = (-1)B$ is $B$ with the sign of every entry changed.`,
          t`Subtracting is adding the negative: $A - B = A + (-1)B$.`,
          t`So subtract the matching entries: $(A - B)_{ij} = a_{ij} - b_{ij}$.`,
          t`Subtracting a negative entry adds it: $a - (-b) = a + b$.`,
        ],
      },
      {
        title: "Rules of addition",
        points: [
          t`Recall: the **zero matrix** $O$ has every entry $0$.`,
          t`The order of adding doesn't matter: $A + B = B + A$.`,
          t`The grouping doesn't matter: $(A + B) + C = A + (B + C)$.`,
          t`Adding $O$ changes nothing: $A + O = A$.`,
          t`A scalar multiplies each matrix in a sum: $k(A + B) = kA + kB$.`,
          t`These hold for matrices of the same order, because they hold for the numbers in each entry.`,
        ],
      },
      {
        title: "Equal matrices",
        points: [
          t`Two matrices are **equal** when they have the same order and all their matching entries are equal.`,
          t`A **matrix equation** says that two matrices are equal.`,
          t`So one matrix equation gives one ordinary equation for each entry.`,
          t`For example, $\begin{bmatrix} x & 2 \end{bmatrix} = \begin{bmatrix} 5 & 2 \end{bmatrix}$ gives $x = 5$.`,
        ],
      },
      {
        title: "Solving matrix equations",
        points: [
          t`Solve a matrix equation for an unknown matrix $X$ just as you would a number equation.`,
          t`A term that crosses the $=$ sign changes sign: $pA + kX = C$ gives $kX = C - pA$.`,
          t`Then multiply every entry by $\frac{1}{k}$: $kX = M$ gives $X = \frac{1}{k}M$.`,
          t`With two equations in $X$ and $Y$, remove one unknown, as in simultaneous equations.`,
          t`To remove it, add or subtract the two equations, after scaling one if needed.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $X$ and $Y$ if $2X - Y = \begin{bmatrix} 3 & -1 \\ 4 & 2 \end{bmatrix}$ and $X + Y = \begin{bmatrix} 3 & 4 \\ -1 & 1 \end{bmatrix}$.`,
      steps: [
        t`Adding the two equations removes $Y$: $(2X - Y) + (X + Y) = 3X$.`,
        t`Add entry by entry: $3X = \begin{bmatrix} 3 + 3 & -1 + 4 \\ 4 + (-1) & 2 + 1 \end{bmatrix}$, so $3X = \begin{bmatrix} 6 & 3 \\ 3 & 3 \end{bmatrix}$.`,
        t`Multiply every entry by $\frac{1}{3}$: $X = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$.`,
        t`From $X + Y$: $Y = \begin{bmatrix} 3 & 4 \\ -1 & 1 \end{bmatrix} - \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$, so $Y = \begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix}$. Check: $2X - Y = \begin{bmatrix} 4 - 1 & 2 - 3 \\ 2 - (-2) & 2 - 0 \end{bmatrix}$, which is $\begin{bmatrix} 3 & -1 \\ 4 & 2 \end{bmatrix}$.`,
      ],
      answer: t`$X = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ and $Y = \begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix}$.`,
    },
    visualSpec: t`Two matrices of the same order side by side: tap an entry and the matching entries of $A$, $B$ and $A + B$ light up together, while a slider for $k$ scales every entry of $kA$ at once.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Multiplying only one row by the scalar, as with a determinant",
      remediation: t`A number times a matrix multiplies every entry: $kA = [k\,a_{ij}]$. Only in a determinant does a factor go into a single row.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M2",
      mistake: t`Taking $kI$ as the matrix with $k$ in every entry`,
      remediation: t`$I$ has $1$ on its diagonal and $0$ everywhere else, so $kI$ has $k$ on the diagonal and $0$ off it. Adding $kI$ changes only the diagonal entries.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M3",
      mistake: "Moving a term across the = sign without changing its sign",
      remediation: t`A term that crosses the $=$ sign changes sign: $pA + kX = C$ gives $kX = C - pA$, and $x + c = r$ gives $x = r - c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Stopping at $kX = M$ without dividing by $k$`,
      remediation: t`Finish by multiplying every entry by $\frac{1}{k}$: $kX = M$ gives $X = \frac{1}{k}M$. The same holds in an entry equation: $-x = 5$ gives $x = -5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Taking minus times minus as minus, so that $a - (-b)$ becomes $a - b$`,
      remediation: t`Subtracting a negative entry adds it: $a - (-b) = a + b$, and $-k \times (-b) = kb$. Check the sign of each entry when you subtract or multiply by a negative number.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M1 gives the key when every scalar is 1 or -1, or the matrices have one row: draw it from items with a scalar other than ±1 and two or more rows.",
    "C08-M2 applies only to items with kI; C08-M3 only where a term is moved across the = sign (it gives the key when that term is 0).",
    "C08-M4 gives the key when the coefficient of the unknown is 1; C08-M5 gives the key when no negative entry is subtracted or multiplied by a negative number.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.5 Q2" },
      stem: t`If $A = \begin{bmatrix} 1 & -2 \\ 5 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & -3 \\ 4 & -7 \end{bmatrix}$, then $A - 2B + 6I$, where $I$ is the unit matrix of order $2$, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -2], [5, 3]])", B: "Matrix([[1, -3], [4, -7]])", a: "1", b: "-2", k: "6" }, params: { kind: "combo" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}5 & 4\\-3 & 23\end{matrix}\right]$`, correct: true, value: "Matrix([[5, 4], [-3, 23]])" },
        { key: "B", text: t`$\left[\begin{matrix}5 & 4\\1 & 11\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[5, 4], [1, 11]])" },
        { key: "C", text: t`$\left[\begin{matrix}5 & 10\\3 & 23\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M2", value: "Matrix([[5, 10], [3, 23]])" },
        { key: "D", text: t`$\left[\begin{matrix}5 & -8\\-3 & -5\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M5", value: "Matrix([[5, -8], [-3, -5]])" },
      ],
      solution: {
        steps: [
          t`$2B = \begin{bmatrix} 2 & -6 \\ 8 & -14 \end{bmatrix}$ and $6I = \begin{bmatrix} 6 & 0 \\ 0 & 6 \end{bmatrix}$.`,
          t`Entry by entry: $A - 2B + 6I = \begin{bmatrix} 1 - 2 + 6 & -2 + 6 + 0 \\ 5 - 8 + 0 & 3 + 14 + 6 \end{bmatrix}$.`,
          t`So $A - 2B + 6I = \begin{bmatrix} 5 & 4 \\ -3 & 23 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.5 Q4" },
      stem: t`If $A = \begin{bmatrix} 1 & -2 \\ 3 & -5 \\ -6 & 0 \end{bmatrix}$, $B = \begin{bmatrix} -1 & -2 \\ 4 & 2 \\ 1 & 5 \end{bmatrix}$ and $C = \begin{bmatrix} 2 & 4 \\ -1 & -4 \\ -3 & 6 \end{bmatrix}$, the matrix $X$ such that $3A - 4B + 5X = C$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -2], [3, -5], [-6, 0]])", B: "Matrix([[-1, -2], [4, 2], [1, 5]])", C: "Matrix([[2, 4], [-1, -4], [-3, 6]])", a: "3", b: "-4", r: "5", c: "1" }, params: { kind: "solve" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-1 & \frac{2}{5}\\0 & 3\\4 & 11\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[-1, 2/5], [0, 3], [4, 11]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{9}{5} & \frac{6}{5}\\- \frac{8}{5} & - \frac{27}{5}\\-5 & - \frac{14}{5}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M3", value: "Matrix([[9/5, 6/5], [-8/5, -27/5], [-5, -14/5]])" },
        { key: "C", text: t`$\left[\begin{matrix}-5 & 2\\6 & 19\\19 & 26\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[-5, 2], [6, 19], [19, 26]])" },
        { key: "D", text: t`$\left[\begin{matrix}-1 & \frac{2}{5}\\\frac{6}{5} & \frac{19}{5}\\\frac{19}{5} & \frac{26}{5}\end{matrix}\right]$`, correct: true, value: "Matrix([[-1, 2/5], [6/5, 19/5], [19/5, 26/5]])" },
      ],
      solution: {
        steps: [
          t`Move $3A$ and $-4B$ across, changing their signs: $5X = C - 3A + 4B$.`,
          t`$C - 3A + 4B = \begin{bmatrix} 2 - 3 - 4 & 4 + 6 - 8 \\ -1 - 9 + 16 & -4 + 15 + 8 \\ -3 + 18 + 4 & 6 - 0 + 20 \end{bmatrix} = \begin{bmatrix} -5 & 2 \\ 6 & 19 \\ 19 & 26 \end{bmatrix}$.`,
          t`Multiply every entry by $\frac{1}{5}$: $X = \begin{bmatrix} -1 & \frac{2}{5} \\ \frac{6}{5} & \frac{19}{5} \\ \frac{19}{5} & \frac{26}{5} \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.5 SolvedEx.5" },
      stem: t`If $X + Y = \begin{bmatrix} 2 & -1 \\ 1 & 3 \\ -3 & -2 \end{bmatrix}$ and $X - 2Y = \begin{bmatrix} -2 & 1 \\ 3 & -1 \\ 4 & -2 \end{bmatrix}$, then $Y$ is:`,
      verify: { kind: "value", inputs: { P: "Matrix([[2, -1], [1, 3], [-3, -2]])", Q: "Matrix([[-2, 1], [3, -1], [4, -2]])", a1: "1", b1: "1", a2: "1", b2: "-2", m1: "1", m2: "1" }, params: { kind: "system", ask: "Y" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{4}{3} & - \frac{2}{3}\\-2 & 4\\-7 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[4/3, -2/3], [-2, 4], [-7, 0]])" },
        { key: "B", text: t`$\left[\begin{matrix}4 & -2\\-2 & 4\\-7 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[4, -2], [-2, 4], [-7, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}0 & 2\\2 & -2\\7 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M5", value: "Matrix([[0, 2], [2, -2], [7, 4]])" },
        { key: "D", text: t`$\left[\begin{matrix}\frac{4}{3} & - \frac{2}{3}\\- \frac{2}{3} & \frac{4}{3}\\- \frac{7}{3} & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[4/3, -2/3], [-2/3, 4/3], [-7/3, 0]])" },
      ],
      solution: {
        steps: [
          t`Subtract the second equation from the first: $(X + Y) - (X - 2Y) = Y + 2Y = 3Y$.`,
          t`$3Y = \begin{bmatrix} 2 - (-2) & -1 - 1 \\ 1 - 3 & 3 - (-1) \\ -3 - 4 & -2 - (-2) \end{bmatrix} = \begin{bmatrix} 4 & -2 \\ -2 & 4 \\ -7 & 0 \end{bmatrix}$.`,
          t`Multiply every entry by $\frac{1}{3}$: $Y = \begin{bmatrix} \frac{4}{3} & -\frac{2}{3} \\ -\frac{2}{3} & \frac{4}{3} \\ -\frac{7}{3} & 0 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4B I Q6" },
      stem: t`If $\begin{bmatrix} 5 & 7 \\ x & 1 \\ 2 & 6 \end{bmatrix} - \begin{bmatrix} 1 & 2 \\ -3 & 5 \\ 2 & y \end{bmatrix} = \begin{bmatrix} 4 & 5 \\ 4 & -4 \\ 0 & 4 \end{bmatrix}$, then:`,
      verify: { kind: "value", inputs: { L: "Matrix([[5, 7], [x, 1], [2, 6]])", M: "Matrix([[1, 2], [-3, 5], [2, y]])", R: "Matrix([[4, 5], [4, -4], [0, 4]])", s: "-1" }, params: { kind: "equal" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = -2$`, correct: false, misconceptionId: "C08-M4", value: "1 - 2*I" },
        { key: "B", text: t`$x = 7,\ y = 2$`, correct: false, misconceptionId: "C08-M5", value: "7 + 2*I" },
        { key: "C", text: t`$x = 1,\ y = 2$`, correct: true, value: "1 + 2*I" },
        { key: "D", text: t`$x = 7,\ y = -10$`, correct: false, misconceptionId: "C08-M3", value: "7 - 10*I" },
      ],
      solution: {
        steps: [
          t`Subtract entry by entry and match each entry with the right-hand side. Second row, first column: $x - (-3) = 4$, so $x + 3 = 4$ and $x = 1$.`,
          t`Third row, second column: $6 - y = 4$, so $-y = -2$ and $y = 2$.`,
          t`The other entries agree: $5 - 1 = 4$, $7 - 2 = 5$, $1 - 5 = -4$, $2 - 2 = 0$. So $x = 1$, $y = 2$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.5 Q5" },
      stem: t`If $3X - Y = \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ and $X - 3Y = \begin{bmatrix} 0 & -1 \\ 0 & -1 \end{bmatrix}$, then $X$ is:`,
      verify: { kind: "value", inputs: { P: "Matrix([[1, -1], [-1, 1]])", Q: "Matrix([[0, -1], [0, -1]])", a1: "3", b1: "-1", a2: "1", b2: "-3", m1: "3", m2: "1" }, params: { kind: "system", ask: "X" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{3}{8} & - \frac{1}{2}\\- \frac{3}{8} & \frac{1}{4}\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M5", value: "Matrix([[3/8, -1/2], [-3/8, 1/4]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{3}{8} & - \frac{1}{4}\\- \frac{3}{8} & \frac{1}{2}\end{matrix}\right]$`, correct: true, value: "Matrix([[3/8, -1/4], [-3/8, 1/2]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{3}{8} & - \frac{1}{4}\\-1 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M1", value: "Matrix([[3/8, -1/4], [-1, 2]])" },
        { key: "D", text: t`$\left[\begin{matrix}3 & -2\\-3 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C08-M4", value: "Matrix([[3, -2], [-3, 4]])" },
      ],
      solution: {
        steps: [
          t`To remove $Y$, take $3$ times the first equation minus the second: $(9X - 3Y) - (X - 3Y) = 8X$.`,
          t`$8X = 3\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} - \begin{bmatrix} 0 & -1 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} 3 - 0 & -3 + 1 \\ -3 - 0 & 3 + 1 \end{bmatrix} = \begin{bmatrix} 3 & -2 \\ -3 & 4 \end{bmatrix}$.`,
          t`Multiply every entry by $\frac{1}{8}$: $X = \begin{bmatrix} \frac{3}{8} & -\frac{1}{4} \\ -\frac{3}{8} & \frac{1}{2} \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
