import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-principal-solutions.ts";
import { c02 } from "./concepts/c02-general-solution-sine.ts";
import { c03 } from "./concepts/c03-general-solution-cosine-tangent.ts";
import { c04 } from "./concepts/c04-squared-equations.ts";
import { c05 } from "./concepts/c05-reducible-equations.ts";
import { graph } from "./graph.ts";

export const trigonometricFunctions12: Chapter = {
  slug: "trigonometric-functions-12",
  title: "Trigonometric Functions",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
