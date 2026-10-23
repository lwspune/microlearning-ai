import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-base-angle-and-sum.ts";
import { c02 } from "./concepts/c02-base-angle-and-difference.ts";
import { c03 } from "./concepts/c03-two-angles-and-perimeter.ts";
import { graph } from "./graph.ts";

export const constructions9: Chapter = {
  slug: "constructions-9",
  title: "Constructions of Triangles",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03],
};
