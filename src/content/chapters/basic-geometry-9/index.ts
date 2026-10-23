import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-distance-on-a-number-line.ts";
import { c02 } from "./concepts/c02-betweenness.ts";
import { c03 } from "./concepts/c03-segments-and-rays.ts";
import { c04 } from "./concepts/c04-conditional-statements.ts";
import { graph } from "./graph.ts";

export const basicGeometry9: Chapter = {
  slug: "basic-geometry-9",
  title: "Basic Concepts in Geometry",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
