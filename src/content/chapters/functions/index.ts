import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-what-is-a-function.ts";
import { c02 } from "./concepts/c02-value-of-a-function.ts";
import { c03 } from "./concepts/c03-domain-and-range.ts";
import { c04 } from "./concepts/c04-one-one-and-onto.ts";
import { c05 } from "./concepts/c05-modulus-and-signum.ts";
import { graph } from "./graph.ts";

export const functions: Chapter = {
  slug: "functions",
  title: "Functions",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
