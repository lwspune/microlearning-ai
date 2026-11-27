import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-plant-classification.ts";
import { c02 } from "./concepts/c02-algae.ts";
import { c03 } from "./concepts/c03-bryophytes.ts";
import { c04 } from "./concepts/c04-pteridophytes.ts";
import { c05 } from "./concepts/c05-gymnosperms.ts";
import { c06 } from "./concepts/c06-angiosperms.ts";
import { c07 } from "./concepts/c07-plant-life-cycles.ts";
import { graph } from "./graph.ts";

export const kingdomPlantae: Chapter = {
  slug: "kingdom-plantae",
  title: "Kingdom Plantae",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
