import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$\begin{vmatrix} 101 & 202 & 303 \\ 505 & 606 & 707 \\ 1 & 2 & 3 \end{vmatrix}$. **Can you find its value without expanding?**`,
    reveal: t`Yes: it is $0$. Do $R_1 \to R_1 - R_3$: the top row becomes $100, 200, 300$, which is $100$ times $R_3$. Take $100$ out of $R_1$: now $R_1$ and $R_3$ are equal, and a determinant with two equal rows is $0$.`,
  },
  explanation: {
    intuition: t`Row operations change a determinant in fixed, predictable ways, so you can simplify before you expand. Interchanging two rows flips the sign, and two equal rows give $0$. A number common to one row comes out once, as a factor. Adding a multiple of one row to another changes nothing: that is your tool for making zeros and common factors. Since $|A^T| = |A|$, everything true for rows is true for columns.`,
    formal: t`**Interchange.** $R_i \leftrightarrow R_j$ (or $C_i \leftrightarrow C_j$) changes the sign of the determinant.

**Zero.** Two equal rows, or two proportional rows (one a multiple of the other), give $0$.

**Factor out of one row.** A factor $k$ common to one row comes out once:
$$\begin{vmatrix} ka_1 & kb_1 & kc_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = k\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$
In $kA$ every row carries $k$, so for order $n$, $|kA| = k^n|A|$: a $3 \times 3$ gives $k^3$.

**Add a multiple: no change.** $R_i \to R_i + kR_j$ keeps the value. But $R_i \to aR_i + bR_j$ multiplies it by $a$, because $R_i$ itself was scaled. For rows like $x+y$, $y+z$, $z+x$: add all the columns into one, take the common factor out, then subtract.

**Transpose.** $|A^T| = |A|$, so every rule for rows holds for columns.`,
    worked: {
      prompt: t`Find $k$ if $\begin{vmatrix} x+y & y+z & z+x \\ z+x & x+y & y+z \\ y+z & z+x & x+y \end{vmatrix} = k\begin{vmatrix} x & y & z \\ z & x & y \\ y & z & x \end{vmatrix}$.`,
      steps: [
        t`$C_1 \to C_1 + C_2 + C_3$ (no change): every entry of $C_1$ becomes $2(x+y+z)$. Take $2$ out of $C_1$, leaving $x+y+z$ all down $C_1$.`,
        t`$C_2 \to C_2 - C_1$ and $C_3 \to C_3 - C_1$ (no change) give the columns $-x, -z, -y$ and $-y, -x, -z$. Take $-1$ out of each: $(-1)(-1) = 1$.`,
        t`$C_1 \to C_1 - C_2 - C_3$ (no change) leaves $z, y, x$. The determinant is now $2\begin{vmatrix} z & x & y \\ y & z & x \\ x & y & z \end{vmatrix}$.`,
        t`These rows are the target's $R_2$, $R_3$, $R_1$. $R_1 \leftrightarrow R_3$ and then $R_2 \leftrightarrow R_3$ put them in order: two sign flips cancel.`,
      ],
      answer: t`$k = 2$.`,
    },
    visualSpec: t`Drag a row operation (interchange, scale a row, add a multiple of a row) onto a $3 \times 3$ determinant and watch a dial for its value flip sign, scale by $k$, or stay put.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "A factor common to several rows comes out only once, so |kA| = k|A|",
      remediation: t`A factor comes out of each row that carries it. $kA$ has $k$ in all $n$ rows, so $|kA| = k^n|A|$; taking $2$ out of two rows leaves $2 \times 2 = 4$ outside.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Interchanging two rows or columns leaves the determinant unchanged",
      remediation: "Each interchange of two rows (or two columns) flips the sign. Count the interchanges: an odd number changes the sign, an even number keeps it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Treats rows like equations: multiplying a row by k, or R_i -> aR_i + bR_j, is thought to leave the determinant unchanged",
      remediation: t`Only adding a multiple of another row is free. Multiplying a row by $k$ multiplies the determinant by $k$, so keep every factor you take out; $R_i \to aR_i + bR_j$ multiplies it by $a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Multiplying one row by k is thought to multiply the determinant by k^n, as if the whole matrix were scaled",
      remediation: t`A factor in one row comes out once: $R_i \to kR_i$ multiplies the determinant by $k$. Only $kA$, with $k$ in every row, gives $k^n$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "Transposing is thought to flip the sign, like an interchange of rows",
      remediation: t`Transposing turns rows into columns without interchanging any two of them, so the value stays: $|A^T| = |A|$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 gives the key when the factor sits in one row only; diagnose it with kA or a factor taken out of two or more rows.",
    "C03-M4 gives the key for kA (the factor in every row); diagnose it with a single scaled row.",
    "C03-M2 gives the key when interchanges come in pairs, C03-M3 when no row is scaled, C03-M5 when nothing is transposed.",
    "C03-M2 and C03-M5 give the same value on an item with one interchange and one transpose: never pair them there.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`$A$ is a $3 \times 3$ matrix with $|A| = 5$. $B$ is obtained from $A$ by $R_1 \leftrightarrow R_3$, then $R_2 \to 3R_2$, then $R_1 \to R_1 + 2R_3$. Then $|B| =$`,
      verify: { kind: "value", inputs: { d: "5", n: "3" }, params: { mode: "fwd", ops: ["R1<->R3", "R2*3", "R1=R1+2*R3"] } },
      options: [
        { key: "A", text: t`$-5$`, correct: false, misconceptionId: "C03-M3", value: "-5" },
        { key: "B", text: t`$-135$`, correct: false, misconceptionId: "C03-M4", value: "-135" },
        { key: "C", text: t`$-15$`, correct: true, value: "-15" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C03-M2", value: "15" },
      ],
      solution: {
        steps: [
          t`$R_1 \leftrightarrow R_3$ interchanges two rows: the sign flips, $5 \to -5$.`,
          t`$R_2 \to 3R_2$ multiplies one row by $3$, so the determinant is multiplied by $3$ (not $3^3$): $-15$.`,
          t`$R_1 \to R_1 + 2R_3$ adds a multiple of another row: no change. $|B| = -15$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`$A$ is a $3 \times 3$ matrix with $|A| = 7$. Then $|2A^T| =$`,
      verify: { kind: "value", inputs: { d: "7", n: "3" }, params: { mode: "fwd", ops: ["T", "all*2"] } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C03-M3", value: "7" },
        { key: "B", text: t`$-56$`, correct: false, misconceptionId: "C03-M5", value: "-56" },
        { key: "C", text: t`$56$`, correct: true, value: "56" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C03-M1", value: "14" },
      ],
      solution: {
        steps: [
          t`Transposing changes nothing: $|A^T| = |A| = 7$.`,
          t`$2A^T$ has the factor $2$ in all three rows, and it comes out of each: $|2A^T| = 2^3 \times 7 = 8 \times 7 = 56$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A I Q5" },
      stem: t`If $\begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = 3$, then $\begin{vmatrix} b+c & c+a & a+b \\ q+r & r+p & p+q \\ y+z & z+x & x+y \end{vmatrix} =$`,
      verify: { kind: "value", inputs: { M: "Matrix([[b+c, c+a, a+b], [q+r, r+p, p+q], [y+z, z+x, x+y]])", A: "Matrix([[a, b, c], [p, q, r], [x, y, z]])", d: "3" }, params: { mode: "route", ops: ["C1=C1+C2+C3", "C1*1/2", "C2=C2-C1", "C3=C3-C1", "C2,C3*-1", "C1=C1-C2-C3"] } },
      options: [
        { key: "A", text: t`$-6$`, correct: false, misconceptionId: "C03-M1", value: "-6" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M3", value: "3" },
        { key: "C", text: t`$24$`, correct: false, misconceptionId: "C03-M4", value: "24" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`$C_1 \to C_1 + C_2 + C_3$ (no change): $C_1$ becomes $2(a+b+c)$, $2(p+q+r)$, $2(x+y+z)$. Take $2$ out of $C_1$.`,
          t`$C_2 \to C_2 - C_1$ and $C_3 \to C_3 - C_1$ (no change) give the columns $-b, -q, -y$ and $-c, -r, -z$. Take $-1$ out of each: $(-1)(-1) = 1$.`,
          t`$C_1 \to C_1 - C_2 - C_3$ (no change) leaves $a, p, x$. The value is $2 \times 1 \times \begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = 2 \times 3 = 6$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.2 SolvedEx.3" },
      stem: t`If $\begin{vmatrix} x & y & z \\ -x & y & z \\ x & -y & z \end{vmatrix} = k\,xyz$ (with $xyz \ne 0$), then $k =$`,
      verify: { kind: "value", inputs: { M: "Matrix([[x, y, z], [-x, y, z], [x, -y, z]])", e: "x*y*z" }, params: { mode: "route", ops: ["R2=R2+R1", "R3=R3+R1", "R2,R3*1/2"] } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "B", text: t`$64$`, correct: false, misconceptionId: "C03-M4", value: "64" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$R_2 \to R_2 + R_1$ and $R_3 \to R_3 + R_1$ (no change): the rows become $(0, 2y, 2z)$ and $(2x, 0, 2z)$.`,
          t`Take $2$ out of $R_2$ and $2$ out of $R_3$: $2 \times 2 = 4$ stays outside, with rows $(x, y, z)$, $(0, y, z)$, $(x, 0, z)$.`,
          t`Expand: $x(yz - 0) - y(0 - xz) + z(0 - xy) = xyz + xyz - xyz = xyz$. So the determinant is $4xyz$ and $k = 4$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`$A$ is a $3 \times 3$ matrix with $|A| = -2$. $B$ is obtained from $A^T$ by $R_2 \to 3R_2 - R_1$. Then $|B| =$`,
      verify: { kind: "value", inputs: { d: "-2", n: "3" }, params: { mode: "fwd", ops: ["T", "R2=3*R2-R1"] } },
      options: [
        { key: "A", text: t`$-6$`, correct: true, value: "-6" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C03-M3", value: "-2" },
        { key: "C", text: t`$-54$`, correct: false, misconceptionId: "C03-M4", value: "-54" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C03-M5", value: "6" },
      ],
      solution: {
        steps: [
          t`Transposing changes nothing: $|A^T| = |A| = -2$.`,
          t`In $R_2 \to 3R_2 - R_1$, subtracting $R_1$ changes nothing, but $R_2$ itself is multiplied by $3$, so the determinant is multiplied by $3$.`,
          t`$|B| = 3 \times (-2) = -6$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`$A$ is a $3 \times 3$ matrix with $|A| = 4$. $B$ is obtained from $A$ by $C_1 \leftrightarrow C_3$, and then every entry is multiplied by $3$. Then $|B| =$`,
      verify: { kind: "value", inputs: { d: "4", n: "3" }, params: { mode: "fwd", ops: ["C1<->C3", "all*3"] } },
      options: [
        { key: "A", text: t`$-108$`, correct: true, value: "-108" },
        { key: "B", text: t`$-12$`, correct: false, misconceptionId: "C03-M1", value: "-12" },
        { key: "C", text: t`$108$`, correct: false, misconceptionId: "C03-M2", value: "108" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C03-M3", value: "-4" },
      ],
      solution: {
        steps: [
          t`$C_1 \leftrightarrow C_3$ interchanges two columns: the sign flips, $4 \to -4$.`,
          t`Multiplying every entry by $3$ puts $3$ in all three rows: a factor $3^3 = 27$. $|B| = 27 \times (-4) = -108$.`,
        ],
      },
    },
  ],
};
