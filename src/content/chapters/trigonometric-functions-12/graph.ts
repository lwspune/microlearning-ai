import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Trigonometric Functions prerequisite graph (Balbharati Std XII Part 1, Ch.3).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault State Board subtopics.
 */
const S = (sub: string) => `mh-sb-12/trig-functions-12#${sub}`;

export const graph: GraphNode[] = [
  // Trigonometric equations
  {
    id: "C01", slug: "principal-solutions", title: "Principal solutions", group: "Trigonometric equations", tier: "core", visual: true,
    oneLiner: t`The solutions with $0 \le \theta < 2\pi$: find the reference angle, then the quadrants where the ratio has the given sign`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Trigonometric Equations and General Solutions")],
  },
  {
    id: "C02", slug: "general-solution-sine", title: "General solution of sin θ = sin α", group: "Trigonometric equations", tier: "core",
    oneLiner: t`$\theta = n\pi + (-1)^n\alpha$, $n \in \mathbb{Z}$; no solution when $|\sin\theta|$ would exceed $1$`,
    prereqs: ["C01"], ext: [], sources: [S("Trigonometric Equations and General Solutions")],
  },
  {
    id: "C03", slug: "general-solution-cosine-tangent", title: "General solutions of cos θ and tan θ", group: "Trigonometric equations", tier: "core",
    oneLiner: t`$\cos\theta = \cos\alpha$: $\theta = 2n\pi \pm \alpha$; $\tan\theta = \tan\alpha$: $\theta = n\pi + \alpha$`,
    prereqs: ["C01"], ext: [], sources: [S("Trigonometric Equations and General Solutions")],
  },
  {
    id: "C04", slug: "squared-equations", title: "Equations in sin²θ, cos²θ, tan²θ", group: "Trigonometric equations", tier: "core",
    oneLiner: t`$\sin^2\theta = \sin^2\alpha$ (likewise $\cos^2$, $\tan^2$) gives $\theta = n\pi \pm \alpha$; both signs of the root count`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Trigonometric Equations and General Solutions")],
  },
  {
    id: "C05", slug: "reducible-equations", title: "Equations that reduce to the standard forms", group: "Trigonometric equations", tier: "adv",
    oneLiner: t`Factorise, use identities or divide out a common ratio to reach $\sin\theta = k$, $\cos\theta = k$ or $\tan\theta = k$; don't divide by a factor that can be $0$`,
    prereqs: ["C02", "C03"], ext: ["compound and multiple angle formulae"], sources: [S("Trigonometric Equations and General Solutions")],
  },

  // Polar coordinates
  {
    id: "C06", slug: "polar-coordinates", title: "Polar coordinates", group: "Polar coordinates", tier: "core", visual: true,
    oneLiner: t`$x = r\cos\theta$, $y = r\sin\theta$; back again with $r = \sqrt{x^2 + y^2}$ and $\theta$ in the point's quadrant`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Polar Coordinates")],
  },

  // Solution of a triangle
  {
    id: "C07", slug: "sine-rule", title: "The sine rule", group: "Solution of a triangle", tier: "core", visual: true,
    oneLiner: t`$\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$; the sides are in the ratio of the sines, not of the angles`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Solution of Triangle — Sine, Cosine and Projection Rules")],
  },
  {
    id: "C08", slug: "cosine-rule", title: "The cosine rule", group: "Solution of a triangle", tier: "core", visual: true,
    oneLiner: t`$\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$; the largest angle is obtuse when $a^2 > b^2 + c^2$`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Solution of Triangle — Sine, Cosine and Projection Rules")],
  },
  {
    id: "C09", slug: "projection-rule", title: "The projection rule", group: "Solution of a triangle", tier: "core", visual: true,
    oneLiner: t`$a = b\cos C + c\cos B$: a side is the sum of the other two sides' projections on it`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Solution of Triangle — Sine, Cosine and Projection Rules")],
  },
  {
    id: "C10", slug: "half-angles-and-area", title: "Half-angle formulae and area", group: "Solution of a triangle", tier: "core",
    oneLiner: t`With $s = \dfrac{a + b + c}{2}$: $\sin\dfrac{A}{2} = \sqrt{\dfrac{(s - b)(s - c)}{bc}}$ and area $= \sqrt{s(s - a)(s - b)(s - c)}$`,
    prereqs: ["C08"], ext: [], sources: [S("Applications of Sine, Cosine and Projection Rules")],
  },
  {
    id: "C11", slug: "triangle-identities", title: "Proving triangle identities", group: "Solution of a triangle", tier: "adv",
    oneLiner: "Turn every side into a sine (or every cosine into sides), then use the angle sum A + B + C = π",
    prereqs: ["C07", "C09", "C10"], ext: [], sources: [S("Applications of Sine, Cosine and Projection Rules"), S("Solution of Triangle — Sine, Cosine and Projection Rules")],
  },

  // Inverse trigonometric functions
  {
    id: "C12", slug: "principal-values", title: "Principal values of inverse functions", group: "Inverse trigonometric functions", tier: "core", visual: true,
    oneLiner: t`$\sin^{-1}$ in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, $\cos^{-1}$ in $[0, \pi]$, $\tan^{-1}$ in $(-\frac{\pi}{2}, \frac{\pi}{2})$: one angle, in that range`,
    prereqs: [], ext: ["trigonometric ratios of standard angles"], sources: [S("Inverse Trigonometric Functions and Principal Values")],
  },
  {
    id: "C13", slug: "inverse-of-a-ratio", title: "sin⁻¹(sin x) and its relatives", group: "Inverse trigonometric functions", tier: "core",
    oneLiner: t`$\sin^{-1}(\sin x) = x$ only for $x$ in the principal range; otherwise find the angle in the range with the same sine`,
    prereqs: ["C12"], ext: [], sources: [S("Properties of Inverse Trigonometric Functions")],
  },
  {
    id: "C14", slug: "inverse-properties", title: "Properties of inverse functions", group: "Inverse trigonometric functions", tier: "core",
    oneLiner: t`$\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$; $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x + y}{1 - xy}$ when $xy < 1$`,
    prereqs: ["C12"], ext: ["compound and multiple angle formulae"], sources: [S("Properties of Inverse Trigonometric Functions")],
  },
  {
    id: "C15", slug: "inverse-trig-equations", title: "Equations in inverse functions", group: "Inverse trigonometric functions", tier: "adv",
    oneLiner: "Combine the inverse terms with the properties, take the ratio of both sides, then keep only roots in the principal ranges",
    prereqs: ["C13", "C14"], ext: [], sources: [S("Properties of Inverse Trigonometric Functions")],
  },
];
