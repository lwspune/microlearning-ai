import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-teeth-dentition.ts";
import { c02 } from "./concepts/c02-alimentary-canal.ts";
import { c03 } from "./concepts/c03-digestive-glands.ts";
import { c04 } from "./concepts/c04-physiology-digestion.ts";
import { c05 } from "./concepts/c05-absorption-assimilation.ts";
import { c06 } from "./concepts/c06-nutritional-disorders.ts";
import { graph } from "./graph.ts";

export const humanNutrition: Chapter = {
  slug: "human-nutrition",
  title: "Human Nutrition",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
