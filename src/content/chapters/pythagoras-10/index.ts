import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-pythagoras-theorem.ts";
import { c02 } from "./concepts/c02-converse-and-triplets.ts";
import { c03 } from "./concepts/c03-special-right-triangles.ts";
import { c04 } from "./concepts/c04-geometric-mean.ts";
import { c05 } from "./concepts/c05-acute-and-obtuse-angle-results.ts";
import { c06 } from "./concepts/c06-apollonius-theorem.ts";
import { graph } from "./graph.ts";

export const pythagoras10: Chapter = {
  slug: "pythagoras-10",
  title: "Pythagoras Theorem",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
