import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-combined-equation.ts";
import { c02 } from "./concepts/c02-separating-the-lines.ts";
import { c03 } from "./concepts/c03-sum-and-product-of-slopes.ts";
import { c04 } from "./concepts/c04-angle-between-the-lines.ts";
import { c05 } from "./concepts/c05-lines-with-a-given-condition.ts";
import { c06 } from "./concepts/c06-triangles-from-a-pair.ts";
import { c07 } from "./concepts/c07-angle-bisectors.ts";
import { c08 } from "./concepts/c08-general-second-degree.ts";
import { c09 } from "./concepts/c09-general-pair-properties.ts";
import { graph } from "./graph.ts";

export const pairOfStraightLines: Chapter = {
  slug: "pair-of-straight-lines",
  title: "Pair of Straight Lines",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
