import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-group-13-14-15-trends.ts";
import { c02 } from "./concepts/c02-inert-pair-effect.ts";
import { c03 } from "./concepts/c03-oxidation-states-oxides.ts";
import { c04 } from "./concepts/c04-catenation-pi-bonds.ts";
import { c05 } from "./concepts/c05-allotropes.ts";
import { c06 } from "./concepts/c06-structures-of-compounds.ts";
import { c07 } from "./concepts/c07-notable-compounds.ts";
import { graph } from "./graph.ts";

export const pBlock131415: Chapter = {
  slug: "p-block-13-14-15",
  title: "Elements of Group 13, 14 and 15",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
