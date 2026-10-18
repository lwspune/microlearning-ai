import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-chain-rule.ts";
import { c02 } from "./concepts/c02-chain-rule-exp-log.ts";
import { c03 } from "./concepts/c03-inverse-functions.ts";
import { c04 } from "./concepts/c04-inverse-trig-derivatives.ts";
import { c05 } from "./concepts/c05-inverse-trig-substitution.ts";
import { c06 } from "./concepts/c06-logarithmic-differentiation.ts";
import { c07 } from "./concepts/c07-implicit-differentiation.ts";
import { c08 } from "./concepts/c08-parametric-differentiation.ts";
import { c09 } from "./concepts/c09-one-function-wrt-another.ts";
import { c10 } from "./concepts/c10-second-derivative.ts";
import { graph } from "./graph.ts";

export const differentiation12: Chapter = {
  slug: "differentiation-12",
  title: "Differentiation",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
