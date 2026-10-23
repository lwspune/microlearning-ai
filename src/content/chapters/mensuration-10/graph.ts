import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Mensuration prerequisite graph (Balbharati Std X Part 2, Ch.7).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-ssc-10-text` subtopics.
 */
const S = (sub: string) => `mh-ssc-10-text/geo-mensuration-10#${sub}`;
const SOLIDS = S("Surface Area and Volume of Solids");
const COMBINED = S("Combination of Solids and Frustum");
const SECTOR = S("Area of Sector and Segment of a Circle");

export const graph: GraphNode[] = [
  // Solids
  {
    id: "C01", slug: "surface-area-and-volume", title: "Surface area and volume of solids", group: "Solids", tier: "core", visual: true,
    oneLiner: t`Cylinder $\pi r^2 h$, cone $\frac{1}{3}\pi r^2 h$ with $l = \sqrt{r^2 + h^2}$, sphere $\frac{4}{3}\pi r^3$ and $4\pi r^2$; curved and total surfaces differ by the flat faces`,
    prereqs: [], ext: ["surface area and volume (Std IX Surface Area and Volume)"], sources: [SOLIDS],
  },
  {
    id: "C02", slug: "melting-and-recasting", title: "Melting and recasting", group: "Solids", tier: "core", visual: true,
    oneLiner: t`Melting keeps the volume: the number of new solids is the old volume divided by one new volume`,
    prereqs: ["C01"], ext: [], sources: [SOLIDS],
  },
  {
    id: "C03", slug: "combined-solids", title: "Combined solids", group: "Solids", tier: "core", visual: true,
    oneLiner: t`For a toy or a tent, add the volumes, but add only the curved surfaces you can see: the joined faces are hidden`,
    prereqs: ["C01"], ext: [], sources: [COMBINED],
  },
  {
    id: "C04", slug: "frustum", title: "Frustum of a cone", group: "Solids", tier: "core", visual: true,
    oneLiner: t`Volume $\frac{1}{3}\pi h(r_1^2 + r_2^2 + r_1 r_2)$, slant height $\sqrt{h^2 + (r_1 - r_2)^2}$, curved surface $\pi l(r_1 + r_2)$`,
    prereqs: ["C01"], ext: [], sources: [COMBINED],
  },

  // Circles
  {
    id: "C05", slug: "arc-length", title: "Length of an arc", group: "Circles", tier: "core", visual: true,
    oneLiner: t`An arc of $\theta^\circ$ is $\frac{\theta}{360} \times 2\pi r$ long; a sector's perimeter adds the two radii`,
    prereqs: [], ext: ["circumference and area of a circle (Std VII)"], sources: [S("Circumference of a Circle"), SECTOR],
  },
  {
    id: "C06", slug: "sector-area", title: "Area of a sector", group: "Circles", tier: "core", visual: true,
    oneLiner: t`A sector of $\theta^\circ$ has area $\frac{\theta}{360} \times \pi r^2$, which is also $\frac{1}{2} \times \text{arc length} \times r$`,
    prereqs: ["C05"], ext: [], sources: [SECTOR],
  },
  {
    id: "C07", slug: "segment-area", title: "Area of a segment", group: "Circles", tier: "core", visual: true,
    oneLiner: t`A minor segment is its sector minus the triangle on its chord: $\frac{\theta}{360}\pi r^2 - \frac{1}{2}r^2 \sin\theta$`,
    prereqs: ["C06"], ext: ["trigonometric ratios of standard angles (Std IX Trigonometry)"], sources: [SECTOR],
  },
  {
    id: "C08", slug: "combined-figures", title: "Areas of combined figures", group: "Circles", tier: "adv", visual: true,
    oneLiner: t`A shaded region is a whole shape minus (or plus) sectors, segments and triangles: name each part, then add or take away`,
    prereqs: ["C06"], ext: [], sources: [S("Area of Combined Figures")],
  },
];
