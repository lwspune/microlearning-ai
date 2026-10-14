import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-sum-and-product-rules.ts";
import { c02 } from "./concepts/c02-factorials.ts";
import { c03 } from "./concepts/c03-repetition-allowed.ts";
import { c04 } from "./concepts/c04-npr.ts";
import { c05 } from "./concepts/c05-arrangements-with-conditions.ts";
import { c06 } from "./concepts/c06-identical-objects.ts";
import { c07 } from "./concepts/c07-circular-permutations.ts";
import { c08 } from "./concepts/c08-dictionary-rank.ts";
import { c09 } from "./concepts/c09-ncr.ts";
import { c10 } from "./concepts/c10-ncr-properties.ts";
import { c11 } from "./concepts/c11-selections-with-conditions.ts";
import { c12 } from "./concepts/c12-counting-in-geometry.ts";
import { c13 } from "./concepts/c13-dividing-into-groups.ts";
import { c14 } from "./concepts/c14-any-number-of-things.ts";
import { graph } from "./graph.ts";

export const permutationsAndCombinations: Chapter = {
  slug: "permutations-and-combinations",
  title: "Permutations and Combinations",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14],
};
