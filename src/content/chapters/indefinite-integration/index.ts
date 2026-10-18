import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-antiderivatives.ts";
import { c02 } from "./concepts/c02-rewrite-then-integrate.ts";
import { c03 } from "./concepts/c03-substitution.ts";
import { c04 } from "./concepts/c04-trigonometric-integrals.ts";
import { c05 } from "./concepts/c05-half-angle-substitution.ts";
import { c06 } from "./concepts/c06-standard-quadratic-forms.ts";
import { c07 } from "./concepts/c07-completing-the-square.ts";
import { c08 } from "./concepts/c08-linear-over-quadratic.ts";
import { c09 } from "./concepts/c09-integration-by-parts.ts";
import { c10 } from "./concepts/c10-parts-special-forms.ts";
import { c11 } from "./concepts/c11-partial-fractions.ts";
import { graph } from "./graph.ts";

export const indefiniteIntegration: Chapter = {
  slug: "indefinite-integration",
  title: "Indefinite Integration",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
