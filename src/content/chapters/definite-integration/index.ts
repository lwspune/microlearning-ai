import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-limit-of-a-sum.ts";
import { c02 } from "./concepts/c02-fundamental-theorem.ts";
import { c03 } from "./concepts/c03-substitution-with-limits.ts";
import { c04 } from "./concepts/c04-parts-and-fractions-definite.ts";
import { c05 } from "./concepts/c05-basic-properties.ts";
import { c06 } from "./concepts/c06-king-property.ts";
import { c07 } from "./concepts/c07-odd-even-properties.ts";
import { c08 } from "./concepts/c08-differentiating-an-integral.ts";
import { c09 } from "./concepts/c09-periodic-integrands.ts";
import { c10 } from "./concepts/c10-greatest-integer-and-modulus.ts";
import { graph } from "./graph.ts";

export const definiteIntegration: Chapter = {
  slug: "definite-integration",
  title: "Definite Integration",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
