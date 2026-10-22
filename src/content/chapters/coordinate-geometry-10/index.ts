import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-distance-formula.ts";
import { c02 } from "./concepts/c02-collinearity-by-distance.ts";
import { c03 } from "./concepts/c03-equidistant-points.ts";
import { c04 } from "./concepts/c04-shapes-from-distances.ts";
import { c05 } from "./concepts/c05-section-formula.ts";
import { c06 } from "./concepts/c06-ratio-of-division.ts";
import { c07 } from "./concepts/c07-centroid.ts";
import { c08 } from "./concepts/c08-slope.ts";
import { c09 } from "./concepts/c09-slopes-collinear-and-parallel.ts";
import { graph } from "./graph.ts";

export const coordinateGeometry10: Chapter = {
  slug: "coordinate-geometry-10",
  title: "Co-ordinate Geometry",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
