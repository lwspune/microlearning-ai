import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-binomial-expansion.ts";
import { c02 } from "./concepts/c02-general-term.ts";
import { c03 } from "./concepts/c03-coefficient-of-a-power.ts";
import { c04 } from "./concepts/c04-term-independent-of-x.ts";
import { c05 } from "./concepts/c05-middle-terms.ts";
import { c06 } from "./concepts/c06-sum-of-coefficients.ts";
import { c07 } from "./concepts/c07-binomial-for-numbers.ts";
import { c08 } from "./concepts/c08-negative-fractional-index.ts";
import { c09 } from "./concepts/c09-binomial-approximation.ts";
import { c10 } from "./concepts/c10-remainders-and-integer-parts.ts";
import { graph } from "./graph.ts";

export const binomialTheorem: Chapter = {
  slug: "binomial-theorem",
  title: "Binomial Theorem",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
