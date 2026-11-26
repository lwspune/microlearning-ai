import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-oxidation-reduction.ts";
import { c02 } from "./concepts/c02-oxidation-number-rules.ts";
import { c03 } from "./concepts/c03-stock-notation.ts";
import { c04 } from "./concepts/c04-identifying-redox.ts";
import { c05 } from "./concepts/c05-balancing-oxidation-number.ts";
import { c06 } from "./concepts/c06-balancing-half-reactions.ts";
import { c07 } from "./concepts/c07-redox-electrode-potential.ts";
import { graph } from "./graph.ts";

export const redoxReactions: Chapter = {
  slug: "redox-reactions",
  title: "Redox Reactions",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
