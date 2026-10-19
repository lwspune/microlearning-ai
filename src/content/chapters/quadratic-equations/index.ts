import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-solving-quadratics.ts";
import { c02 } from "./concepts/c02-nature-of-roots.ts";
import { c03 } from "./concepts/c03-sum-and-product-of-roots.ts";
import { c04 } from "./concepts/c04-expressions-in-the-roots.ts";
import { c05 } from "./concepts/c05-forming-equations.ts";
import { c06 } from "./concepts/c06-relations-between-roots.ts";
import { c07 } from "./concepts/c07-common-roots.ts";
import { c08 } from "./concepts/c08-sign-and-extreme-value.ts";
import { c09 } from "./concepts/c09-roots-of-given-signs.ts";
import { c10 } from "./concepts/c10-reducible-equations.ts";
import { graph } from "./graph.ts";

export const quadraticEquations: Chapter = {
  slug: "quadratic-equations",
  title: "Quadratic Equations",
  group: "school",
  subject: "maths",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
