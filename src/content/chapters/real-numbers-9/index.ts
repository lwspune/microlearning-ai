import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-terminating-and-recurring-decimals.ts";
import { c02 } from "./concepts/c02-recurring-to-fraction.ts";
import { c03 } from "./concepts/c03-rationals-between.ts";
import { c04 } from "./concepts/c04-irrational-numbers.ts";
import { c05 } from "./concepts/c05-surds.ts";
import { c06 } from "./concepts/c06-comparing-surds.ts";
import { c07 } from "./concepts/c07-adding-surds.ts";
import { c08 } from "./concepts/c08-multiplying-surds.ts";
import { c09 } from "./concepts/c09-binomial-surds.ts";
import { c10 } from "./concepts/c10-rationalising-a-denominator.ts";
import { c11 } from "./concepts/c11-rationalising-with-a-conjugate.ts";
import { c12 } from "./concepts/c12-absolute-value.ts";
import { c13 } from "./concepts/c13-absolute-value-equations.ts";
import { graph } from "./graph.ts";

export const realNumbers9: Chapter = {
  slug: "real-numbers-9",
  title: "Real Numbers",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13],
};
