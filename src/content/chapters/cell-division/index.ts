import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cell-cycle.ts";
import { c02 } from "./concepts/c02-mitosis.ts";
import { c03 } from "./concepts/c03-meiosis-one.ts";
import { c04 } from "./concepts/c04-meiosis-two-significance.ts";
import { graph } from "./graph.ts";

export const cellDivision: Chapter = {
  slug: "cell-division",
  title: "Cell Division",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
