import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Co-ordinate Geometry prerequisite graph (Balbharati Std IX Part 2, Ch.7): the co-ordinate plane, plotting points and lines parallel to the axes.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-9` subtopics.
 */
const S = (sub: string) => `mh-sb-9/coordinate-geometry-9#${sub}`;

export const graph: GraphNode[] = [
  // The plane
  {
    id: "C01", slug: "axes-and-quadrants", title: "Axes, origin and quadrants", group: "The plane", tier: "core", visual: true,
    oneLiner: t`The axes cross at the origin $O(0, 0)$; the signs of $(x, y)$ give the quadrant: $(+, +)$ I, $(-, +)$ II, $(-, -)$ III, $(+, -)$ IV`,
    prereqs: [], ext: ["the number line (Std VII)"], sources: [S("Axis, Origin, Quadrant"), S("Co-ordinates of a Point in a Plane")],
  },
  {
    id: "C02", slug: "plotting-points", title: "Plotting points", group: "The plane", tier: "core", visual: true,
    oneLiner: t`To plot $(x, y)$, go $x$ along the X-axis, then $y$ parallel to the Y-axis; a point on an axis has a zero co-ordinate`,
    prereqs: ["C01"], ext: [], sources: [S("To Plot a Point"), S("Co-ordinates of a Point in a Plane")],
  },

  // Lines
  {
    id: "C03", slug: "lines-parallel-to-axes", title: "Lines parallel to the axes", group: "Lines", tier: "core", visual: true,
    oneLiner: t`Every point of a line parallel to the Y-axis has the same $x$, so its equation is $x = a$; a line parallel to the X-axis is $y = b$`,
    prereqs: ["C02"], ext: [], sources: [S("Line Parallel to Y-axis"), S("Line Parallel to X-axis")],
  },
  {
    id: "C04", slug: "graph-of-a-linear-equation", title: "Graph of a linear equation", group: "Lines", tier: "core", visual: true,
    oneLiner: t`Find two or three solutions of $ax + by = c$, plot them and join them: the graph is a straight line`,
    prereqs: ["C03"], ext: [], sources: [S("Equation of a Line")],
  },
];
