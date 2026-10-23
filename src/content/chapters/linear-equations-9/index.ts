import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-equations-in-two-variables.ts";
import { c02 } from "./concepts/c02-elimination.ts";
import { c03 } from "./concepts/c03-substitution.ts";
import { c04 } from "./concepts/c04-equations-with-fractions.ts";
import { c05 } from "./concepts/c05-forming-equations.ts";
import { c06 } from "./concepts/c06-two-digit-numbers.ts";
import { c07 } from "./concepts/c07-shapes-incomes-and-journeys.ts";
import { graph } from "./graph.ts";

export const linearEquations9: Chapter = {
  slug: "linear-equations-9",
  title: "Linear Equations in Two Variables",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
