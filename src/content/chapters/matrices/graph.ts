import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Matrices prerequisite graph (Balbharati Std XII Part 1, Ch.2).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/matrices-12#${sub}`;

export const graph: GraphNode[] = [
  // Transformations
  {
    id: "C01", slug: "elementary-transformations", title: "Elementary transformations", group: "Transformations", tier: "core",
    oneLiner: t`Interchange two rows, multiply a row by $k \ne 0$, add $k$ times one row to another; the same three for columns`,
    prereqs: [], ext: ["matrix algebra"], sources: [S("Elementary Transformations of a Matrix")],
  },
  {
    id: "C02", slug: "inverse-by-transformations", title: "Inverse by elementary transformations", group: "Transformations", tier: "core",
    oneLiner: t`Write $A = IA$ and apply row operations until $I = BA$ (or $A = AI$ with column operations); never mix rows and columns`,
    prereqs: ["C01"], ext: [], sources: [S("Inverse by Elementary Transformation Method")],
  },

  // Adjoint
  {
    id: "C03", slug: "minors-and-cofactors", title: "Minors and cofactors", group: "Adjoint", tier: "core",
    oneLiner: t`$M_{ij}$ deletes row $i$ and column $j$; $A_{ij} = (-1)^{i+j}M_{ij}$; expanding along a row gives $|A|$`,
    prereqs: [], ext: ["determinants"], sources: [S("Minors, Cofactors and Adjoint")],
  },
  {
    id: "C04", slug: "adjoint", title: "Adjoint of a matrix", group: "Adjoint", tier: "core",
    oneLiner: t`$\operatorname{adj}A$ is the transpose of the cofactor matrix; for $2 \times 2$, swap the diagonal and negate the other two`,
    prereqs: ["C03"], ext: [], sources: [S("Minors, Cofactors and Adjoint")],
  },
  {
    id: "C05", slug: "singular-matrices", title: "Singular and invertible matrices", group: "Adjoint", tier: "core",
    oneLiner: t`$A$ has an inverse exactly when $|A| \ne 0$; a matrix with $|A| = 0$ is singular`,
    prereqs: [], ext: ["determinants"], sources: [S("Inverse by Adjoint Method")],
  },
  {
    id: "C06", slug: "inverse-by-adjoint", title: "Inverse by the adjoint method", group: "Adjoint", tier: "core",
    oneLiner: t`$A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$; check with $AA^{-1} = I$`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Inverse by Adjoint Method")],
  },
  {
    id: "C07", slug: "inverse-properties", title: "Properties of the inverse and adjoint", group: "Adjoint", tier: "adv",
    oneLiner: t`$A(\operatorname{adj}A) = |A|I$; $(AB)^{-1} = B^{-1}A^{-1}$; $|\operatorname{adj}A| = |A|^{n-1}$; $(A^{-1})^{-1} = A$`,
    prereqs: ["C06"], ext: [], sources: [S("Minors, Cofactors and Adjoint"), S("Inverse by Adjoint Method")],
  },

  // Linear equations
  {
    id: "C08", slug: "matrix-equations", title: "Matrix equations", group: "Linear equations", tier: "core",
    oneLiner: t`$AX = B$ gives $X = A^{-1}B$, not $BA^{-1}$: the inverse goes on the side where $A$ was`,
    prereqs: ["C06"], ext: [], sources: [S("Inverse by Adjoint Method"), S("Solution of Linear Equations using Matrices")],
  },
  {
    id: "C09", slug: "inversion-method", title: "Solving equations by inversion", group: "Linear equations", tier: "core",
    oneLiner: t`Write the system as $AX = B$, find $A^{-1}$, then $X = A^{-1}B$ gives every unknown at once`,
    prereqs: ["C08"], ext: [], sources: [S("Solution of Linear Equations using Matrices")],
  },
  {
    id: "C10", slug: "reduction-method", title: "Solving equations by reduction", group: "Linear equations", tier: "core",
    oneLiner: "Row-reduce the system to a triangular form, then solve from the last equation upwards",
    prereqs: ["C01"], ext: [], sources: [S("Solution of Linear Equations using Matrices")],
  },
  {
    id: "C11", slug: "linear-systems-word-problems", title: "Word problems as linear systems", group: "Linear equations", tier: "core",
    oneLiner: "Name the unknowns, write one equation per condition, solve by inversion and answer in the problem's units",
    prereqs: ["C09"], ext: [], sources: [S("Solution of Linear Equations using Matrices")],
  },
];
