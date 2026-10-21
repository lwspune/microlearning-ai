import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-elimination.ts";
import { c02 } from "./concepts/c02-swapped-coefficients.ts";
import { c03 } from "./concepts/c03-graph-of-a-line.ts";
import { c04 } from "./concepts/c04-graphical-solution.ts";
import { c05 } from "./concepts/c05-value-of-a-determinant.ts";
import { c06 } from "./concepts/c06-cramers-rule.ts";
import { c07 } from "./concepts/c07-reducible-equations.ts";
import { c08 } from "./concepts/c08-forming-two-equations.ts";
import { c09 } from "./concepts/c09-speed-and-boat-problems.ts";
import { graph } from "./graph.ts";

export const linearEquations10: Chapter = {
  slug: "linear-equations-10",
  title: "Linear Equations in Two Variables",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
