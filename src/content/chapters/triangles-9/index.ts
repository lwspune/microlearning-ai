import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-angle-sum-and-exterior-angle.ts";
import { c02 } from "./concepts/c02-congruence-tests.ts";
import { c03 } from "./concepts/c03-isosceles-triangle-theorem.ts";
import { c04 } from "./concepts/c04-right-triangle-properties.ts";
import { c05 } from "./concepts/c05-medians-and-centroid.ts";
import { c06 } from "./concepts/c06-bisector-theorems.ts";
import { c07 } from "./concepts/c07-sides-and-angles.ts";
import { c08 } from "./concepts/c08-similar-triangles.ts";
import { graph } from "./graph.ts";

export const triangles9: Chapter = {
  slug: "triangles-9",
  title: "Triangles",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
