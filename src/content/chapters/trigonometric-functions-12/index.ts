import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-principal-solutions.ts";
import { c02 } from "./concepts/c02-general-solution-sine.ts";
import { c03 } from "./concepts/c03-general-solution-cosine-tangent.ts";
import { c04 } from "./concepts/c04-squared-equations.ts";
import { c05 } from "./concepts/c05-reducible-equations.ts";
import { c06 } from "./concepts/c06-polar-coordinates.ts";
import { c07 } from "./concepts/c07-sine-rule.ts";
import { c08 } from "./concepts/c08-cosine-rule.ts";
import { c09 } from "./concepts/c09-projection-rule.ts";
import { c10 } from "./concepts/c10-half-angles-and-area.ts";
import { c11 } from "./concepts/c11-triangle-identities.ts";
import { c12 } from "./concepts/c12-principal-values.ts";
import { c13 } from "./concepts/c13-inverse-of-a-ratio.ts";
import { c14 } from "./concepts/c14-inverse-properties.ts";
import { c15 } from "./concepts/c15-inverse-trig-equations.ts";
import { c16 } from "./concepts/c16-inradius-and-circumradius.ts";
import { graph } from "./graph.ts";

export const trigonometricFunctions12: Chapter = {
  slug: "trigonometric-functions-12",
  title: "Trigonometric Functions",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16],
};
