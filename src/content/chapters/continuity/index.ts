import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-continuity-at-a-point.ts";
import { c02 } from "./concepts/c02-left-and-right-continuity.ts";
import { c03 } from "./concepts/c03-finding-constants.ts";
import { c04 } from "./concepts/c04-types-of-discontinuity.ts";
import { c05 } from "./concepts/c05-continuity-on-an-interval.ts";
import { c06 } from "./concepts/c06-intermediate-value-theorem.ts";
import { graph } from "./graph.ts";

export const continuity: Chapter = {
  slug: "continuity",
  title: "Continuity",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
