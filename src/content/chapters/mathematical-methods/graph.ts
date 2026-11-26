import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Mathematical Methods prerequisite graph (Balbharati Physics Std XI, Ch.2): vectors and their products, and the calculus physics needs.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/mathematical-methods-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Vectors
  {
    id: "C01", slug: "scalars-vectors", title: "Scalars, vectors and multiplying by a scalar", group: "Vectors", tier: "core",
    oneLiner: t`A vector has size and direction; multiplying by a number scales its size, and a negative number reverses it`,
    prereqs: [], ext: [], sources: [S("Scalars and Vectors"), S("Multiplication of a Vector by a Scalar")],
  },
  {
    id: "C02", slug: "vector-addition", title: "Adding and subtracting vectors", group: "Vectors", tier: "core", visual: true,
    oneLiner: t`Vectors add head to tail (triangle law) or as the diagonal of a parallelogram: $R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}$`,
    prereqs: ["C01"], ext: [], sources: [S("Triangle Law and Parallelogram Law"), S("Addition and Subtraction of Vectors")],
  },
  {
    id: "C03", slug: "resolution", title: "Resolving vectors", group: "Vectors", tier: "core", visual: true,
    oneLiner: t`A vector splits into components $A\cos\theta$ and $A\sin\theta$; in unit vectors, $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$`,
    prereqs: ["C02"], ext: [], sources: [S("Resolution of Vectors")],
  },
  // Products of vectors
  {
    id: "C04", slug: "dot-product", title: "The scalar (dot) product", group: "Products of vectors", tier: "core",
    oneLiner: t`$\vec{A} \cdot \vec{B} = AB\cos\theta = A_xB_x + A_yB_y + A_zB_z$, a scalar; zero when the vectors are perpendicular`,
    prereqs: ["C03"], ext: [], sources: [S("Scalar Product (Dot Product)")],
  },
  {
    id: "C05", slug: "cross-product", title: "The vector (cross) product", group: "Products of vectors", tier: "core",
    oneLiner: t`$\vec{A} \times \vec{B}$ has size $AB\sin\theta$ and points at right angles to both, by the right-hand rule`,
    prereqs: ["C03"], ext: [], sources: [S("Vector Product (Cross Product)")],
  },
  // Calculus
  {
    id: "C06", slug: "differentiation", title: "Differential calculus in physics", group: "Calculus", tier: "core",
    oneLiner: t`The derivative $\dfrac{dy}{dx}$ is the rate of change: velocity is $\dfrac{dx}{dt}$ and acceleration $\dfrac{dv}{dt}$`,
    prereqs: [], ext: ["differentiation (Std XI Maths)"], sources: [S("Differential Calculus")],
  },
  {
    id: "C07", slug: "integration", title: "Integral calculus in physics", group: "Calculus", tier: "core",
    oneLiner: t`Integration adds up small pieces: displacement is $\displaystyle\int v\,dt$, the area under the velocity-time graph`,
    prereqs: ["C06"], ext: [], sources: [S("Integral Calculus")],
  },
];
