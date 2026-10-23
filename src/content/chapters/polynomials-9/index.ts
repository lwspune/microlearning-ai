import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-polynomials-and-degree.ts";
import { c02 } from "./concepts/c02-forms-of-a-polynomial.ts";
import { c03 } from "./concepts/c03-adding-polynomials.ts";
import { c04 } from "./concepts/c04-multiplying-polynomials.ts";
import { c05 } from "./concepts/c05-dividing-polynomials.ts";
import { c06 } from "./concepts/c06-synthetic-division.ts";
import { c07 } from "./concepts/c07-value-of-a-polynomial.ts";
import { c08 } from "./concepts/c08-remainder-theorem.ts";
import { c09 } from "./concepts/c09-factor-theorem.ts";
import { c10 } from "./concepts/c10-factorising-quadratics.ts";
import { c11 } from "./concepts/c11-factorising-by-substitution.ts";
import { graph } from "./graph.ts";

export const polynomials9: Chapter = {
  slug: "polynomials-9",
  title: "Polynomials",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
