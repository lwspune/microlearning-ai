import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Angle and its Measurement prerequisite graph (Balbharati Std XI Part 1, Ch.1).
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/angle-measurement-11#${sub}`;

export const graph: GraphNode[] = [
  {
    id: "C01", slug: "directed-angles", title: "Directed angles and quadrants", group: "Measuring angles", tier: "core", visual: true,
    oneLiner: t`Anticlockwise is positive; angles $360^\circ$ apart are co-terminal and share a quadrant`,
    prereqs: [], ext: [], sources: [S("Directed Angles")],
  },
  {
    id: "C02", slug: "degrees-minutes-seconds", title: "Degrees, minutes and seconds", group: "Measuring angles", tier: "core",
    oneLiner: t`$1^\circ = 60'$ and $1' = 60''$: carry and borrow in sixties, not tens`,
    prereqs: [], ext: [], sources: [S("Sexagesimal System (Degree Measure)")],
  },
  {
    id: "C03", slug: "radian-measure", title: "Radian measure", group: "Measuring angles", tier: "core", visual: true,
    oneLiner: t`$\pi^c = 180^\circ$: multiply by $\frac{\pi}{180}$ for radians, by $\frac{180}{\pi}$ for degrees`,
    prereqs: ["C02"], ext: [], sources: [S("Circular System (Radian Measure)")],
  },
  {
    id: "C04", slug: "angles-of-triangles-and-polygons", title: "Angles of triangles and polygons", group: "Measuring angles", tier: "core",
    oneLiner: t`A triangle's angles add to $\pi^c$; each interior angle of a regular $n$-gon is $\frac{(n-2)\pi}{n}$`,
    prereqs: ["C03"], ext: ["ratio and arithmetic progressions"], sources: [S("Circular System (Radian Measure)")],
  },
  {
    id: "C05", slug: "arc-length", title: "Arc length", group: "Arcs and sectors", tier: "core", visual: true,
    oneLiner: t`$s = r\theta$ with $\theta$ in radians: a pendulum's path is an arc`,
    prereqs: ["C03"], ext: [], sources: [S("Arc Length and Area of a Sector")],
  },
  {
    id: "C06", slug: "sector-area", title: "Area of a sector", group: "Arcs and sectors", tier: "core", visual: true,
    oneLiner: t`$A = \frac{1}{2}r^2\theta = \frac{1}{2}rs$, with $\theta$ in radians`,
    prereqs: ["C05"], ext: ["area of a triangle"], sources: [S("Arc Length and Area of a Sector")],
  },
  {
    id: "C07", slug: "clock-hands", title: "Angles between clock hands", group: "Arcs and sectors", tier: "adv", visual: true,
    oneLiner: t`The minute hand turns $6^\circ$ a minute, the hour hand $\frac{1}{2}^\circ$: it gains $5\frac{1}{2}^\circ$ a minute`,
    prereqs: ["C02"], ext: [], sources: [S("Sexagesimal System (Degree Measure)")],
  },
];
