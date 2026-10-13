import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Complex Numbers prerequisite graph — approved 2026-10-13 (M0).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault concept slugs — cn-* NDA, cetcn-* MHT-CET, jcx-* JEE.
 */
export const graph: GraphNode[] = [
  // Algebra
  {
    id: "C01", slug: "imaginary-unit", title: "The imaginary unit", group: "Algebra", tier: "core",
    oneLiner: t`$i^2 = -1$; why $\sqrt a\sqrt b = \sqrt{ab}$ fails when both are negative`,
    prereqs: [], ext: [], sources: ["cn-complex-fundamentals"],
  },
  {
    id: "C02", slug: "powers-of-i", title: "Powers of i", group: "Algebra", tier: "core", visual: true,
    oneLiner: "The period-4 cycle; reduce the exponent mod 4",
    prereqs: ["C01"], ext: [], sources: ["cn-powers-of-i", "cetcn-powers-of-i-and-standard-form"],
  },
  {
    id: "C03", slug: "standard-form", title: "Standard form & equality", group: "Algebra", tier: "core",
    oneLiner: t`$z = x + iy$, Re and Im; two complex numbers are equal iff both parts are equal`,
    prereqs: ["C01"], ext: [], sources: ["cn-complex-fundamentals", "jcx-parts"],
  },
  {
    id: "C04", slug: "arithmetic", title: "Arithmetic", group: "Algebra", tier: "core", visual: true,
    oneLiner: t`Add, subtract and multiply in $x + iy$ form`,
    prereqs: ["C03"], ext: [], sources: [],
  },
  {
    id: "C05", slug: "conjugate", title: "Conjugate", group: "Algebra", tier: "core", visual: true,
    oneLiner: t`$\bar z$; $z + \bar z = 2\operatorname{Re} z$; conjugate of a sum or product`,
    prereqs: ["C04"], ext: [], sources: ["cn-conjugate-and-real-imaginary", "cetcn-conjugate-and-rationalising"],
  },
  {
    id: "C06", slug: "division", title: "Division", group: "Algebra", tier: "core",
    oneLiner: "Multiply top and bottom by the conjugate of the bottom; the bottom becomes real, then split",
    prereqs: ["C05"], ext: [], sources: ["cetcn-conjugate-and-rationalising"],
  },
  {
    id: "C07", slug: "purely-real-imaginary", title: "Purely real / purely imaginary", group: "Algebra", tier: "core",
    oneLiner: t`Set the *other* part to zero; $z = \bar z$ vs $z = -\bar z$`,
    prereqs: ["C06"], ext: [], sources: ["cn-conjugate-and-real-imaginary", "cetcn-purely-real-or-imaginary-condition"],
  },
  {
    id: "C08", slug: "solving-for-z", title: "Solving for z", group: "Algebra", tier: "core",
    oneLiner: t`Put $z = x + iy$ and equate parts; equations in $z$ and $\bar z$`,
    prereqs: ["C06"], ext: [],
    sources: ["cetcn-solve-for-z-with-a-parameter", "jcx-equations", "cetcn-modulus-plus-z-equation"],
  },
  {
    id: "C09", slug: "square-root", title: "Square root of a complex number", group: "Algebra", tier: "core",
    oneLiner: t`Solve $(x + iy)^2 = a + ib$`,
    prereqs: ["C08"], ext: [], sources: [],
  },

  // Geometry & polar
  {
    id: "C10", slug: "argand-plane", title: "Argand plane", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`$z$ as a point and as a vector`,
    prereqs: ["C03"], ext: ["coordinates"], sources: ["cn-complex-fundamentals"],
  },
  {
    id: "C11", slug: "modulus-distance", title: "Modulus as distance", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`$|z|$, and $|z_1 - z_2|$ is the distance between the points`,
    prereqs: ["C10", "C04"], ext: ["distance formula"], sources: ["cn-modulus-properties"],
  },
  {
    id: "C12", slug: "modulus-rules", title: "Modulus rules", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`$|z_1z_2| = |z_1||z_2|$, $|z_1/z_2|$, $z\bar z = |z|^2$, $|\bar z| = |z|$`,
    prereqs: ["C11", "C06"], ext: [],
    sources: ["cn-modulus-properties", "cetcn-modulus-and-its-properties", "jcx-modulus", "cetcn-find-z-from-a-given-modulus"],
  },
  {
    id: "C13", slug: "triangle-inequality", title: "Triangle inequality & bounds", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`Max and min of $|z_1 \pm z_2|$, and when a bound is reached`,
    prereqs: ["C12"], ext: [], sources: ["cn-modulus-properties", "jcx-modulus"],
  },
  {
    id: "C14", slug: "argument", title: "Argument", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`Principal argument by quadrant, not by $\tan^{-1}(b/a)$ alone`,
    prereqs: ["C10"], ext: ["trig values", "inverse tangent"],
    sources: ["cn-argument-polar", "cetcn-argument-and-quadrant", "jcx-arg"],
  },
  {
    id: "C15", slug: "polar-form", title: "Polar & Euler form", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`$r(\cos\theta + i\sin\theta) = re^{i\theta}$`,
    prereqs: ["C11", "C14"], ext: [], sources: ["cn-argument-polar", "jcx-arg"],
  },
  {
    id: "C16", slug: "polar-multiply-divide", title: "Multiply/divide in polar", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: "Moduli multiply, arguments add; argument rules",
    prereqs: ["C15"], ext: ["compound angles"], sources: ["cetcn-polar-form-and-de-moivre"],
  },
  {
    id: "C17", slug: "de-moivre", title: "De Moivre's theorem", group: "Geometry & polar", tier: "core", visual: true,
    oneLiner: t`$(\cos\theta + i\sin\theta)^n$; reduce the angle; rewrite $\sin\theta + i\cos\theta$ first`,
    prereqs: ["C16"], ext: [], sources: ["cn-de-moivre-and-roots", "cetcn-polar-form-and-de-moivre", "jcx-demoivre"],
  },
  {
    id: "C18", slug: "rotation", title: "Rotation", group: "Geometry & polar", tier: "adv", visual: true,
    oneLiner: t`Multiplying by $e^{i\alpha}$ rotates; rotating about a vertex; triangle problems`,
    prereqs: ["C16"], ext: [], sources: ["jcx-rotation"],
  },

  // Roots
  {
    id: "C19", slug: "quadratic-complex-roots", title: "Quadratics with complex roots", group: "Roots", tier: "core",
    oneLiner: "Conjugate-pair roots (real coefficients only); sum and product",
    prereqs: ["C05"], ext: ["quadratic formula"], sources: ["jcx-roots"],
  },
  {
    id: "C20", slug: "cube-roots-of-unity", title: "Cube roots of unity", group: "Roots", tier: "core", visual: true,
    oneLiner: t`$\omega^3 = 1$, $1 + \omega + \omega^2 = 0$, $\omega^2 = \bar\omega$`,
    prereqs: ["C19"], ext: [], sources: ["cn-cube-roots-properties", "cetcn-cube-roots-of-unity", "jcx-omega"],
  },
  {
    id: "C21", slug: "using-omega", title: "Using ω", group: "Roots", tier: "core",
    oneLiner: "Reducing powers mod 3, factorising expressions, related roots",
    prereqs: ["C20"], ext: [], sources: ["cn-cube-roots-applications"],
  },
  {
    id: "C22", slug: "nth-roots-of-unity", title: "nth roots of unity", group: "Roots", tier: "adv", visual: true,
    oneLiner: "Sum = 0, product, regular-polygon geometry",
    prereqs: ["C17", "C20"], ext: [], sources: ["cn-de-moivre-and-roots", "jcx-nth"],
  },
  {
    id: "C23", slug: "polynomial-at-complex-x", title: "Polynomial at a complex x", group: "Roots", tier: "adv",
    oneLiner: "Use the minimal quadratic instead of substituting directly; powers of the roots",
    prereqs: ["C19", "C17"], ext: [], sources: ["cetcn-minimal-quadratic-and-polynomial-values", "jcx-powers"],
  },

  // Loci
  {
    id: "C24", slug: "circle-locus", title: "Circle locus", group: "Loci", tier: "core", visual: true,
    oneLiner: t`$|z - a| = r$: centre $a$, radius $r$`,
    prereqs: ["C11"], ext: ["circle equation"],
    sources: ["cetcn-circle-from-modulus-condition", "jcx-circle", "cn-loci-in-argand-plane"],
  },
  {
    id: "C25", slug: "perpendicular-bisector", title: "Perpendicular bisector", group: "Loci", tier: "core", visual: true,
    oneLiner: t`$|z - a| = |z - b|$ is a line`,
    prereqs: ["C11"], ext: ["line equation"], sources: ["cetcn-perpendicular-bisector-and-lines", "jcx-line"],
  },
  {
    id: "C26", slug: "algebraic-loci", title: "Loci from algebraic conditions", group: "Loci", tier: "core", visual: true,
    oneLiner: t`Re or Im of a quotient $= 0$; $|z - a| = k|z - b|$ (a circle for $k \ne 1$)`,
    prereqs: ["C24", "C25", "C07"], ext: [], sources: ["cetcn-real-part-of-a-quotient-is-zero", "jcx-ratio"],
  },
  {
    id: "C27", slug: "argument-loci", title: "Argument loci", group: "Loci", tier: "adv", visual: true,
    oneLiner: t`$\arg(z - a) = \theta$ is a ray; a fixed argument of a quotient is an arc`,
    prereqs: ["C16", "C24"], ext: [], sources: ["jcx-ratio"],
  },
  {
    id: "C28", slug: "conic-loci", title: "Conic loci", group: "Loci", tier: "adv", visual: true,
    oneLiner: t`$|z - a| \pm |z - b| = k$ as an ellipse or hyperbola`,
    prereqs: ["C11"], ext: ["conics"], sources: ["jcx-conic"],
  },
  {
    id: "C29", slug: "greatest-least-modulus", title: "Greatest/least modulus", group: "Loci", tier: "core", visual: true,
    oneLiner: t`On a disc: $|a| \pm r$; check the extreme point lies in the region`,
    prereqs: ["C13", "C24"], ext: [], sources: ["cetcn-greatest-and-least-modulus-on-a-disc", "jcx-extreme"],
  },
  {
    id: "C30", slug: "regions-areas", title: "Regions & areas", group: "Loci", tier: "adv", visual: true,
    oneLiner: "Inequalities as shaded regions; area; lattice points",
    prereqs: ["C26", "C27"], ext: [], sources: ["jcx-region"],
  },
];
