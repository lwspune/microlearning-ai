import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-plant-breeding.ts";
import { c02 } from "./concepts/c02-tissue-culture-scp.ts";
import { c03 } from "./concepts/c03-animal-husbandry.ts";
import { c04 } from "./concepts/c04-fishery-bees-lac.ts";
import { c05 } from "./concepts/c05-microbes-household.ts";
import { c06 } from "./concepts/c06-microbes-industry.ts";
import { c07 } from "./concepts/c07-sewage-biogas.ts";
import { c08 } from "./concepts/c08-biofertilizers.ts";
import { c09 } from "./concepts/c09-biocontrol.ts";
import { graph } from "./graph.ts";

export const enhancementFoodProduction: Chapter = {
  slug: "enhancement-food-production",
  title: "Enhancement of Food Production",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
