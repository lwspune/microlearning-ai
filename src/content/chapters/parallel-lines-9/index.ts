import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-angles-made-by-a-transversal.ts";
import { c02 } from "./concepts/c02-properties-of-parallel-lines.ts";
import { c03 } from "./concepts/c03-tests-for-parallel-lines.ts";
import { c04 } from "./concepts/c04-using-parallel-lines.ts";
import { graph } from "./graph.ts";

export const parallelLines9: Chapter = {
  slug: "parallel-lines-9",
  title: "Parallel Lines",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
