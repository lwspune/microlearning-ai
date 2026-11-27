import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-body-plan.ts";
import { c02 } from "./concepts/c02-lower-invertebrates.ts";
import { c03 } from "./concepts/c03-higher-invertebrates.ts";
import { c04 } from "./concepts/c04-protochordates.ts";
import { c05 } from "./concepts/c05-fishes-amphibians.ts";
import { c06 } from "./concepts/c06-reptiles-birds-mammals.ts";
import { graph } from "./graph.ts";

export const kingdomAnimalia: Chapter = {
  slug: "kingdom-animalia",
  title: "Kingdom Animalia",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
