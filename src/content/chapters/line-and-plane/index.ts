import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-equation-of-a-line.ts";
import { c02 } from "./concepts/c02-angle-between-lines.ts";
import { c03 } from "./concepts/c03-point-to-line.ts";
import { c04 } from "./concepts/c04-shortest-distance.ts";
import { c05 } from "./concepts/c05-intersecting-and-coplanar-lines.ts";
import { c06 } from "./concepts/c06-equation-of-a-plane.ts";
import { c07 } from "./concepts/c07-plane-through-points.ts";
import { c08 } from "./concepts/c08-foot-from-origin.ts";
import { c09 } from "./concepts/c09-point-to-plane.ts";
import { c10 } from "./concepts/c10-angle-between-planes.ts";
import { c11 } from "./concepts/c11-line-and-plane-together.ts";
import { graph } from "./graph.ts";

export const lineAndPlane: Chapter = {
  slug: "line-and-plane",
  title: "Line and Plane",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
