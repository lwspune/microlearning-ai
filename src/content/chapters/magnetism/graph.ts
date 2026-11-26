import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Magnetism prerequisite graph (Balbharati Physics Std XI, Ch.12): the bar magnet and its field, magnetic lines of force, Gauss' law of magnetism and the Earth's magnetism.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/magnetism-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Magnets
  {
    id: "C01", slug: "bar-magnet", title: "The bar magnet", group: "Magnets", tier: "core", visual: true,
    oneLiner: t`A bar magnet has moment $m = q_m \times 2l$; its field on the axis is twice that on the equator at the same far distance`,
    prereqs: [], ext: [], sources: [S("The Bar Magnet")],
  },
  {
    id: "C02", slug: "magnetic-field-lines", title: "Magnetic lines of force", group: "Magnets", tier: "core", visual: true,
    oneLiner: t`Field lines leave N, enter S and form closed loops; they never cross, and crowd where the field is strong`,
    prereqs: ["C01"], ext: [], sources: [S("Magnetic Lines of Force and Magnetic Field")],
  },
  {
    id: "C03", slug: "gauss-magnetism", title: "Gauss' law of magnetism", group: "Magnets", tier: "core",
    oneLiner: t`The net magnetic flux through any closed surface is zero: there are no isolated magnetic poles`,
    prereqs: ["C02"], ext: [], sources: [S("Gauss' Law of Magnetism")],
  },
  // Earth
  {
    id: "C04", slug: "earths-magnetism", title: "The Earth's magnetism", group: "Earth", tier: "core", visual: true,
    oneLiner: t`Declination, dip $\phi$ and the horizontal component describe the Earth's field: $B_H = B\cos\phi$, $B_V = B\sin\phi$, $\tan\phi = \dfrac{B_V}{B_H}$`,
    prereqs: ["C01"], ext: [], sources: [S("Earth's Magnetism")],
  },
];
