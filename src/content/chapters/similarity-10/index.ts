import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ratio-of-areas.ts";
import { c02 } from "./concepts/c02-basic-proportionality.ts";
import { c03 } from "./concepts/c03-parallel-lines-and-transversals.ts";
import { c04 } from "./concepts/c04-angle-bisector-property.ts";
import { c05 } from "./concepts/c05-tests-of-similarity.ts";
import { c06 } from "./concepts/c06-using-similarity.ts";
import { c07 } from "./concepts/c07-areas-of-similar-triangles.ts";
import { graph } from "./graph.ts";

export const similarity10: Chapter = {
  slug: "similarity-10",
  title: "Similarity",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
