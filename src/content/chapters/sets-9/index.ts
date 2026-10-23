import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-sets-and-their-forms.ts";
import { c02 } from "./concepts/c02-types-of-sets.ts";
import { c03 } from "./concepts/c03-equal-sets-and-subsets.ts";
import { c04 } from "./concepts/c04-universal-set-and-complement.ts";
import { c05 } from "./concepts/c05-union-and-intersection.ts";
import { c06 } from "./concepts/c06-reading-venn-diagrams.ts";
import { c07 } from "./concepts/c07-number-of-elements.ts";
import { graph } from "./graph.ts";

export const sets9: Chapter = {
  slug: "sets-9",
  title: "Sets",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
