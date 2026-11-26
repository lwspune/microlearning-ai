import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-hydrogen-position-isotopes.ts";
import { c02 } from "./concepts/c02-dihydrogen-peroxide.ts";
import { c03 } from "./concepts/c03-group-1-2-trends.ts";
import { c04 } from "./concepts/c04-reactions-s-block.ts";
import { c05 } from "./concepts/c05-ionic-covalent-character.ts";
import { c06 } from "./concepts/c06-s-block-compounds.ts";
import { c07 } from "./concepts/c07-hard-water.ts";
import { graph } from "./graph.ts";

export const sBlockElements: Chapter = {
  slug: "s-block-elements",
  title: "Elements of Group 1 and 2",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
