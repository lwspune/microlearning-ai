import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-first-principle.ts";
import { c02 } from "./concepts/c02-differentiability.ts";
import { c03 } from "./concepts/c03-standard-derivatives.ts";
import { c04 } from "./concepts/c04-sum-rule.ts";
import { c05 } from "./concepts/c05-product-rule.ts";
import { c06 } from "./concepts/c06-quotient-rule.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const differentiation: Chapter = {
  slug: "differentiation",
  title: "Differentiation",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "derivative",
    "differentiable",
    "first principle",
    "left-hand derivative",
    "right-hand derivative",
    "limit",
    "slope",
    "tangent",
    "sum rule",
    "product rule",
    "quotient rule",
    "continuous",
    "polynomial",
  ],
  translations,
};
