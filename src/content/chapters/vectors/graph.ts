import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Vectors prerequisite graph (Balbharati Std XII Part 1, Ch.5).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/vectors-12#${sub}`;

export const graph: GraphNode[] = [
  // Vectors
  {
    id: "C01", slug: "vectors-in-space", title: "Vectors in space and their magnitude", group: "Vectors", tier: "core", visual: true,
    oneLiner: t`$\vec a = x\hat i + y\hat j + z\hat k$ has $|\vec a| = \sqrt{x^2 + y^2 + z^2}$; $\overrightarrow{AB}$ = position vector of B minus that of A; a unit vector is $\vec a/|\vec a|$`,
    prereqs: [], ext: ["coordinates in three dimensions"], sources: [S("Vectors and Their Types")],
  },
  {
    id: "C02", slug: "vector-algebra", title: "Adding vectors and the triangle law", group: "Vectors", tier: "core", visual: true,
    oneLiner: t`Add and subtract component by component; around a closed figure the vectors add to $\vec 0$; scalar multiples are parallel`,
    prereqs: ["C01"], ext: [], sources: [S("Vectors and Their Types")],
  },
  {
    id: "C03", slug: "collinear-and-coplanar", title: "Collinear and coplanar vectors", group: "Vectors", tier: "core",
    oneLiner: t`Three points are collinear when $\overrightarrow{AB} = k\,\overrightarrow{AC}$; a vector is a linear combination $x\vec a + y\vec b + z\vec c$ of three non-coplanar ones`,
    prereqs: ["C02"], ext: ["solving linear equations"], sources: [S("Vectors and Their Types")],
  },
  {
    id: "C04", slug: "section-formula", title: "Section formula", group: "Vectors", tier: "core", visual: true,
    oneLiner: t`Internal division in $m : n$: $\dfrac{m\vec b + n\vec a}{m + n}$; external: $\dfrac{m\vec b - n\vec a}{m - n}$; midpoint and centroid as special cases`,
    prereqs: ["C02"], ext: [], sources: [S("Section Formula")],
  },

  // Dot product
  {
    id: "C05", slug: "dot-product", title: "Dot product and the angle between vectors", group: "Dot product", tier: "core",
    oneLiner: t`$\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$; zero means perpendicular`,
    prereqs: ["C01"], ext: [], sources: [S("Dot Product of Vectors")],
  },
  {
    id: "C06", slug: "projection", title: "Projection of a vector", group: "Dot product", tier: "core", visual: true,
    oneLiner: t`The scalar projection of $\vec a$ on $\vec b$ is $\dfrac{\vec a\cdot\vec b}{|\vec b|}$; the vector projection multiplies it by $\hat b$`,
    prereqs: ["C05"], ext: [], sources: [S("Dot Product of Vectors")],
  },
  {
    id: "C07", slug: "direction-cosines", title: "Direction cosines and direction ratios", group: "Dot product", tier: "core", visual: true,
    oneLiner: t`$l = \cos\alpha$, $m = \cos\beta$, $n = \cos\gamma$ with $l^2 + m^2 + n^2 = 1$; ratios $a : b : c$ scale to cosines by $\dfrac{1}{\sqrt{a^2 + b^2 + c^2}}$`,
    prereqs: ["C05"], ext: [], sources: [S("Dot Product of Vectors")],
  },

  // Cross product
  {
    id: "C08", slug: "cross-product", title: "Cross product", group: "Cross product", tier: "core",
    oneLiner: t`$\vec a\times\vec b$ is the determinant with rows $\hat i\ \hat j\ \hat k$, $\vec a$, $\vec b$; it is perpendicular to both, and $\vec b\times\vec a = -\vec a\times\vec b$`,
    prereqs: ["C01"], ext: ["3 by 3 determinants"], sources: [S("Cross Product of Vectors")],
  },
  {
    id: "C09", slug: "cross-product-geometry", title: "Areas and unit normals from the cross product", group: "Cross product", tier: "core", visual: true,
    oneLiner: t`$|\vec a\times\vec b| = |\vec a||\vec b|\sin\theta$ is the parallelogram's area; half of it for a triangle; $\pm\dfrac{\vec a\times\vec b}{|\vec a\times\vec b|}$ are the unit normals`,
    prereqs: ["C08"], ext: [], sources: [S("Cross Product of Vectors")],
  },

  // Triple products
  {
    id: "C10", slug: "scalar-triple-product", title: "Scalar triple product", group: "Triple products", tier: "core",
    oneLiner: t`$[\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b\times\vec c)$, the 3 by 3 determinant of the components; cyclic swaps keep it, one swap negates it`,
    prereqs: ["C05", "C08"], ext: [], sources: [S("Scalar and Vector Triple Product")],
  },
  {
    id: "C11", slug: "volume-and-coplanarity", title: "Volume and coplanarity", group: "Triple products", tier: "core", visual: true,
    oneLiner: t`$|[\vec a\ \vec b\ \vec c]|$ is the parallelepiped's volume, one sixth of it the tetrahedron's; it is $0$ exactly when the three vectors are coplanar`,
    prereqs: ["C10"], ext: [], sources: [S("Scalar and Vector Triple Product")],
  },
  {
    id: "C12", slug: "vector-triple-product", title: "Vector triple product", group: "Triple products", tier: "adv",
    oneLiner: t`$\vec a\times(\vec b\times\vec c) = (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$, which lies in the plane of $\vec b$ and $\vec c$`,
    prereqs: ["C10"], ext: [], sources: [S("Scalar and Vector Triple Product")],
  },
  {
    id: "C13", slug: "triple-product-identities", title: "Identities with triple products", group: "Triple products", tier: "adv",
    oneLiner: t`Expand brackets in $[\ ]$, drop terms with a repeated vector: $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a] = 2[\vec a\ \vec b\ \vec c]$`,
    prereqs: ["C11"], ext: [], sources: [S("Scalar and Vector Triple Product")],
  },
];
