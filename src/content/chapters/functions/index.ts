import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-what-is-a-function.ts";
import { c02 } from "./concepts/c02-value-of-a-function.ts";
import { c03 } from "./concepts/c03-domain-and-range.ts";
import { c04 } from "./concepts/c04-one-one-and-onto.ts";
import { c05 } from "./concepts/c05-modulus-and-signum.ts";
import { c06 } from "./concepts/c06-greatest-integer.ts";
import { c07 } from "./concepts/c07-logarithms.ts";
import { c08 } from "./concepts/c08-piecewise-functions.ts";
import { c09 } from "./concepts/c09-algebra-of-functions.ts";
import { c10 } from "./concepts/c10-composition.ts";
import { c11 } from "./concepts/c11-inverse-functions.ts";
import { c12 } from "./concepts/c12-functional-equations.ts";
import { graph } from "./graph.ts";

export const functions: Chapter = {
  slug: "functions",
  title: "Functions",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
