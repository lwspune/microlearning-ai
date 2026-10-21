import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Circle prerequisite graph (Balbharati Std X Part 2, Ch.3). The pool's other Circle chapter is
 * Std XI's (equations of circles); this one is the Std X geometry of circles.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-circle-10#${sub}`;
const TANGENT = S("Tangent and Secant to a Circle");
const CHORDS = S("Theorems on Chords and Tangents");
const INSCRIBED = S("Inscribed Angle and Intercepted Arc");

export const graph: GraphNode[] = [
  // Tangents
  {
    id: "C01", slug: "tangent-and-radius", title: "Tangent and radius", group: "Tangents", tier: "core", visual: true,
    oneLiner: t`A tangent touches the circle at one point and is perpendicular to the radius there; parallel tangents are a diameter apart`,
    prereqs: [], ext: ["chords and radii (Std IX Circle)", "Pythagoras theorem (Std X Pythagoras)"], sources: [TANGENT],
  },
  {
    id: "C02", slug: "tangent-segments", title: "Tangent segments from a point", group: "Tangents", tier: "core", visual: true,
    oneLiner: t`The two tangent segments from an outside point are equal, and the line to the centre bisects the angle between them`,
    prereqs: ["C01"], ext: [], sources: [S("Tangent Segment Theorem")],
  },
  {
    id: "C03", slug: "touching-circles", title: "Touching circles", group: "Tangents", tier: "core", visual: true,
    oneLiner: t`The point of contact lies on the line of centres; the centres are $r_1 + r_2$ apart for circles touching outside and $r_1 - r_2$ apart inside`,
    prereqs: [], ext: [], sources: [S("Touching Circles")],
  },

  // Arcs and angles
  {
    id: "C04", slug: "arcs-and-central-angles", title: "Arcs and central angles", group: "Arcs and angles", tier: "core", visual: true,
    oneLiner: t`A minor arc measures its central angle, the major arc $360^\circ$ minus it; equal chords cut off equal arcs, and equal arcs have equal chords`,
    prereqs: [], ext: [], sources: [S("Measure of an Arc and Central Angle"), S("Arcs of a Circle")],
  },
  {
    id: "C05", slug: "inscribed-angle", title: "Inscribed angle", group: "Arcs and angles", tier: "core", visual: true,
    oneLiner: t`An inscribed angle is half its intercepted arc; angles in the same arc are equal, and an angle in a semicircle is a right angle`,
    prereqs: ["C04"], ext: [], sources: [INSCRIBED],
  },
  {
    id: "C06", slug: "cyclic-quadrilateral", title: "Cyclic quadrilateral", group: "Arcs and angles", tier: "core", visual: true,
    oneLiner: t`Opposite angles of a cyclic quadrilateral add up to $180^\circ$, and an exterior angle equals the interior opposite angle; the converses test for one`,
    prereqs: ["C05"], ext: [], sources: [S("Cyclic Quadrilateral")],
  },
  {
    id: "C07", slug: "angles-of-intersecting-chords", title: "Angles between intersecting chords", group: "Arcs and angles", tier: "adv", visual: true,
    oneLiner: t`Chords meeting inside the circle make an angle of half the sum of the two arcs; lines meeting outside make half their difference`,
    prereqs: ["C05"], ext: [], sources: [CHORDS],
  },
  {
    id: "C08", slug: "tangent-and-chord-angle", title: "Angle between a tangent and a chord", group: "Arcs and angles", tier: "core", visual: true,
    oneLiner: t`The angle between a tangent and a chord through the point of contact is half the arc it intercepts`,
    prereqs: ["C01", "C05"], ext: [], sources: [CHORDS],
  },

  // Lengths
  {
    id: "C09", slug: "intersecting-chords", title: "Intersecting chords", group: "Lengths", tier: "core", visual: true,
    oneLiner: t`When two chords cut at P, the products of their parts are equal: $PA \times PB = PC \times PD$`,
    prereqs: [], ext: ["similar triangles (Std X Similarity)"], sources: [CHORDS],
  },
  {
    id: "C10", slug: "tangent-secant-segments", title: "Tangent and secant segments", group: "Lengths", tier: "core", visual: true,
    oneLiner: t`From an outside point P, $PA \times PB$ is the same for every secant and equals $PT^2$ for the tangent segment PT`,
    prereqs: ["C01"], ext: ["similar triangles (Std X Similarity)"], sources: [CHORDS],
  },
];
