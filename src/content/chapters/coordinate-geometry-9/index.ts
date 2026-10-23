import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-axes-and-quadrants.ts";
import { c02 } from "./concepts/c02-plotting-points.ts";
import { c03 } from "./concepts/c03-lines-parallel-to-axes.ts";
import { c04 } from "./concepts/c04-graph-of-a-linear-equation.ts";
import { graph } from "./graph.ts";

export const coordinateGeometry9: Chapter = {
  slug: "coordinate-geometry-9",
  title: "Co-ordinate Geometry",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
