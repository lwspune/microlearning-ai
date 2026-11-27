import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-phases-of-growth.ts";
import { c02 } from "./concepts/c02-growth-rate.ts";
import { c03 } from "./concepts/c03-differentiation.ts";
import { c04 } from "./concepts/c04-auxins-gibberellins.ts";
import { c05 } from "./concepts/c05-cytokinin-ethylene-aba.ts";
import { c06 } from "./concepts/c06-photoperiodism-vernalization.ts";
import { c07 } from "./concepts/c07-mineral-nutrition.ts";
import { c08 } from "./concepts/c08-nitrogen-cycle.ts";
import { graph } from "./graph.ts";

export const plantGrowthMineralNutrition: Chapter = {
  slug: "plant-growth-mineral-nutrition",
  title: "Plant Growth and Mineral Nutrition",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
