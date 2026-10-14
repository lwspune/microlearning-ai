import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Determinants and Matrices prerequisite graph (Balbharati Std XI Part 1, Ch.4).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/determinants-matrices-11#${sub}`;

export const graph: GraphNode[] = [
  // Determinants
  {
    id: "C01", slug: "value-of-a-determinant", title: "Value of a determinant", group: "Determinants", tier: "core",
    oneLiner: t`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$; a $3 \times 3$ expands along a row with signs $+ - +$`,
    prereqs: [], ext: [], sources: [S("Value of a Determinant")],
  },
  {
    id: "C02", slug: "minors-and-cofactors", title: "Minors and cofactors", group: "Determinants", tier: "core",
    oneLiner: t`Cofactor $A_{ij} = (-1)^{i+j}M_{ij}$: the minor with the checkerboard sign`,
    prereqs: ["C01"], ext: [], sources: [S("Minors and Cofactors")],
  },
  {
    id: "C03", slug: "determinant-properties", title: "Properties of determinants", group: "Determinants", tier: "core",
    oneLiner: "Swap two rows: sign flips. Two equal rows: 0. Add a multiple of a row: no change. Factor out of one row only",
    prereqs: ["C01"], ext: [], sources: [S("Properties of Determinants")],
  },
  {
    id: "C04", slug: "cramers-rule", title: "Cramer's rule", group: "Determinants", tier: "core",
    oneLiner: t`$x = \frac{D_x}{D}$, $y = \frac{D_y}{D}$, $z = \frac{D_z}{D}$, with $D \ne 0$`,
    prereqs: ["C01"], ext: ["simultaneous linear equations"], sources: [S("Cramer's Rule and Consistency of Equations")],
  },
  {
    id: "C05", slug: "consistency", title: "Consistency of three equations", group: "Determinants", tier: "adv",
    oneLiner: t`Three lines $a_ix + b_iy = c_i$ meet in a point only if the determinant of their coefficients and constants is $0$`,
    prereqs: ["C04"], ext: [], sources: [S("Cramer's Rule and Consistency of Equations")],
  },
  {
    id: "C06", slug: "area-and-collinearity", title: "Area of a triangle and collinearity", group: "Determinants", tier: "core", visual: true,
    oneLiner: t`Area $= \frac{1}{2}\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|$; $0$ means the points are collinear`,
    prereqs: ["C01"], ext: ["coordinates"], sources: [S("Area of a Triangle and Collinearity")],
  },

  // Matrices
  {
    id: "C07", slug: "types-of-matrices", title: "Types of matrices", group: "Matrices", tier: "core",
    oneLiner: "Order is rows × columns; square, diagonal, scalar, identity, triangular, zero; singular when the determinant is 0",
    prereqs: ["C01"], ext: [], sources: [S("Types of Matrices")],
  },
  {
    id: "C08", slug: "matrix-addition-scalar", title: "Adding matrices and scalar multiples", group: "Matrices", tier: "core",
    oneLiner: "Same order only; add entry by entry; a scalar multiplies every entry",
    prereqs: ["C07"], ext: [], sources: [S("Algebra of Matrices")],
  },
  {
    id: "C09", slug: "matrix-multiplication", title: "Multiplying matrices", group: "Matrices", tier: "core",
    oneLiner: t`$(AB)_{ij}$ = row $i$ of $A$ times column $j$ of $B$; needs columns of $A$ = rows of $B$`,
    prereqs: ["C08"], ext: [], sources: [S("Properties of Matrix Multiplication")],
  },
  {
    id: "C10", slug: "multiplication-properties", title: "Properties of matrix multiplication", group: "Matrices", tier: "core",
    oneLiner: t`$AB \ne BA$ in general; $AB = O$ without $A$ or $B$ being $O$; $A^2$ means $A \cdot A$`,
    prereqs: ["C09"], ext: [], sources: [S("Properties of Matrix Multiplication")],
  },
  {
    id: "C11", slug: "transpose", title: "The transpose", group: "Matrices", tier: "core",
    oneLiner: t`Rows become columns; $(A + B)^T = A^T + B^T$ and $(AB)^T = B^TA^T$, order reversed`,
    prereqs: ["C09"], ext: [], sources: [S("Properties of the Transpose of a Matrix")],
  },
  {
    id: "C12", slug: "symmetric-and-skew", title: "Symmetric and skew-symmetric matrices", group: "Matrices", tier: "core",
    oneLiner: t`$A^T = A$ or $A^T = -A$ (diagonal all 0); every square matrix is $\frac{A + A^T}{2} + \frac{A - A^T}{2}$`,
    prereqs: ["C11"], ext: [], sources: [S("Properties of the Transpose of a Matrix")],
  },
];
