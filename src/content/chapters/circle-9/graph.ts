import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Circle prerequisite graph (Balbharati Std IX Part 2, Ch.6): chords and their distance from the centre, and the incircle and circumcircle of a triangle.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/circle-9#${sub}`;

export const graph: GraphNode[] = [
  // Chords
  {
    id: "C01", slug: "perpendicular-to-a-chord", title: "Perpendicular from the centre to a chord", group: "Chords", tier: "core", visual: true,
    oneLiner: t`The perpendicular from the centre bisects the chord, so $r^2 = d^2 + \left(\frac{\text{chord}}{2}\right)^2$`,
    prereqs: [], ext: ["Pythagoras theorem (Std VII)"], sources: [S("Property of chord of the circle"), S("Circle")],
  },
  {
    id: "C02", slug: "equal-chords", title: "Equal chords", group: "Chords", tier: "core", visual: true,
    oneLiner: t`Equal chords of a circle are equidistant from the centre, and chords equidistant from the centre are equal`,
    prereqs: ["C01"], ext: [], sources: [S("Property of chord of the circle")],
  },

  // Circles of a triangle
  {
    id: "C03", slug: "incircle", title: "Incircle of a triangle", group: "Circles of a triangle", tier: "core", visual: true,
    oneLiner: t`The bisectors of the angles meet at the incentre; the perpendicular from it to a side is the radius of the incircle`,
    prereqs: [], ext: ["angle bisectors (Std VII)"], sources: [S("Incircle")],
  },
  {
    id: "C04", slug: "circumcircle", title: "Circumcircle of a triangle", group: "Circles of a triangle", tier: "core", visual: true,
    oneLiner: t`The perpendicular bisectors of the sides meet at the circumcentre, which is equidistant from all three vertices`,
    prereqs: [], ext: [], sources: [S("Circumcircle")],
  },
];
