import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-constructing-a-similar-triangle.ts";
import { c02 } from "./concepts/c02-tangent-at-a-point.ts";
import { c03 } from "./concepts/c03-tangents-from-an-outside-point.ts";
import { graph } from "./graph.ts";

export const constructions10: Chapter = {
  slug: "constructions-10",
  title: "Geometric Constructions",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03],
};
