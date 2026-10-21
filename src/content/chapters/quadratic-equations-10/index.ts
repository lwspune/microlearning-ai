import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-quadratic-or-not.ts";
import { c02 } from "./concepts/c02-roots.ts";
import { c03 } from "./concepts/c03-factorisation.ts";
import { c04 } from "./concepts/c04-completing-the-square.ts";
import { c05 } from "./concepts/c05-quadratic-formula.ts";
import { c06 } from "./concepts/c06-nature-of-roots.ts";
import { c07 } from "./concepts/c07-sum-and-product.ts";
import { c08 } from "./concepts/c08-expressions-in-the-roots.ts";
import { c09 } from "./concepts/c09-forming-equations.ts";
import { c10 } from "./concepts/c10-word-problems.ts";
import { graph } from "./graph.ts";

export const quadraticEquations10: Chapter = {
  slug: "quadratic-equations-10",
  title: "Quadratic Equations",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
