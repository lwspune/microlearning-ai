import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Heights and Distances prerequisite graph: Std X material the Std XI/XII books assume and NDA
 * asks (PLAN.md "NDA Maths course", phase 2b). Right triangles drawn from a story.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault NDA subtopics.
 */
const S = (sub: string) => `nda/height-distance#${sub}`;
const ELEVATION = S("Heights and Distances from Angles of Elevation");
const SHADOWS = S("Shadows, Leaning Structures, and Special Geometry");

export const graph: GraphNode[] = [
  // One triangle
  {
    id: "C01", slug: "angles-of-elevation", title: "Angles of elevation and depression", group: "One triangle", tier: "core", visual: true,
    oneLiner: t`Look up at an angle of elevation, down at an angle of depression; the height and the distance are the sides of a right triangle, $\tan\theta = \frac{h}{d}$`,
    prereqs: [], ext: ["trigonometric ratios of standard angles (Trigonometric Functions)"], sources: [ELEVATION],
  },
  {
    id: "C02", slug: "shadows", title: "Shadows", group: "One triangle", tier: "core", visual: true,
    oneLiner: t`The sun's elevation $\theta$ gives a shadow of length $\frac{h}{\tan\theta}$: a lower sun throws a longer shadow`,
    prereqs: ["C01"], ext: [], sources: [SHADOWS],
  },

  // Two triangles
  {
    id: "C03", slug: "two-points-of-observation", title: "Two points of observation", group: "Two triangles", tier: "core", visual: true,
    oneLiner: t`Two angles of the same top from two points on a line give two triangles sharing the height: solve for the height and the distances together`,
    prereqs: ["C01"], ext: [], sources: [ELEVATION, SHADOWS],
  },
  {
    id: "C04", slug: "objects-on-top", title: "Towers, flagstaffs and buildings", group: "Two triangles", tier: "core", visual: true,
    oneLiner: t`A flagstaff on a tower, or a hill seen from the top and the foot of a building: the two angles share one horizontal distance`,
    prereqs: ["C01"], ext: [], sources: [ELEVATION, SHADOWS],
  },
  {
    id: "C05", slug: "directions-and-reflections", title: "Directions and reflections", group: "Two triangles", tier: "adv", visual: true,
    oneLiner: t`Points due south and due east of a tower meet at right angles on the ground; a reflection in a lake lies as far below the surface as the object is above`,
    prereqs: ["C03"], ext: ["Pythagoras' theorem"], sources: [ELEVATION],
  },
];
