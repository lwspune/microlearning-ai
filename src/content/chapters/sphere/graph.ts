import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Sphere prerequisite graph: the equation of a sphere, in NDA's syllabus but not in the Std XII
 * Line and Plane chapter (PLAN.md "NDA Maths course", phase 2b). NDA's 3D Geometry takes it in.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/3d-geometry#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "equation-of-a-sphere", title: "The equation of a sphere", group: "The sphere", tier: "core",
    oneLiner: t`$(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$; the general form $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$ has centre $(-u, -v, -w)$`,
    prereqs: [], ext: ["distance between two points in space"], sources: [S("Sphere")],
  },
  {
    id: "C02", slug: "sphere-conditions", title: "A sphere from conditions", group: "The sphere", tier: "adv",
    oneLiner: t`A concentric sphere through a point, a tangent plane (radius $=$ distance from the centre) or intercepts on the axes fix the sphere`,
    prereqs: ["C01"], ext: ["distance of a point from a plane (Line and Plane)"], sources: [S("Sphere")],
  },
];
