import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Surface Area and Volume prerequisite graph (Balbharati Std IX Part 2, Ch.9): the cuboid, cube, cylinder, cone and sphere.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/surface-area-volume-9#${sub}`;

export const graph: GraphNode[] = [
  // Cuboids and cylinders
  {
    id: "C01", slug: "cuboid-and-cube", title: "Cuboid and cube", group: "Cuboids and cylinders", tier: "core", visual: true,
    oneLiner: t`A cuboid has total surface $2(lb + bh + lh)$ and volume $lbh$; its vertical faces alone are $2(l + b)h$; a cube of side $l$ has $6l^2$ and $l^3$`,
    prereqs: [], ext: ["area of a rectangle (Std VII)"], sources: [S("Surface Area and Volume of Cuboid and Cube")],
  },
  {
    id: "C02", slug: "cylinder", title: "Cylinder", group: "Cuboids and cylinders", tier: "core", visual: true,
    oneLiner: t`Curved surface $2\pi rh$, total surface $2\pi r(r + h)$, volume $\pi r^2 h$; a roller covers its curved surface in one turn`,
    prereqs: [], ext: [], sources: [S("Surface Area and Volume of a Cylinder")],
  },

  // Cone
  {
    id: "C03", slug: "cone-surface-area", title: "Cone: slant height and surface area", group: "Cone", tier: "core", visual: true,
    oneLiner: t`$l^2 = r^2 + h^2$; curved surface $\pi rl$ and total surface $\pi r(l + r)$`,
    prereqs: [], ext: ["Pythagoras theorem (Std VII)"], sources: [S("Terms Related to a Cone"), S("Surface Area of a Cone")],
  },
  {
    id: "C04", slug: "cone-volume", title: "Volume of a cone", group: "Cone", tier: "core", visual: true,
    oneLiner: t`A cone holds a third of the cylinder on the same base and height: $V = \frac{1}{3}\pi r^2 h$`,
    prereqs: ["C03"], ext: [], sources: [S("Volume of a Cone")],
  },

  // Sphere
  {
    id: "C05", slug: "sphere-and-hemisphere", title: "Sphere and hemisphere", group: "Sphere", tier: "core", visual: true,
    oneLiner: t`Sphere: surface $4\pi r^2$, volume $\frac{4}{3}\pi r^3$; solid hemisphere: curved surface $2\pi r^2$, total $3\pi r^2$, volume $\frac{2}{3}\pi r^3$`,
    prereqs: [], ext: [], sources: [S("Surface Area and Volume of a Sphere and Hemisphere")],
  },
];
