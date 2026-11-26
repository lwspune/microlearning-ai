import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-scalars-vectors.ts";
import { c02 } from "./concepts/c02-vector-addition.ts";
import { c03 } from "./concepts/c03-resolution.ts";
import { c04 } from "./concepts/c04-dot-product.ts";
import { c05 } from "./concepts/c05-cross-product.ts";
import { c06 } from "./concepts/c06-differentiation.ts";
import { c07 } from "./concepts/c07-integration.ts";
import { graph } from "./graph.ts";

export const mathematicalMethods: Chapter = {
  slug: "mathematical-methods",
  title: "Mathematical Methods",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
