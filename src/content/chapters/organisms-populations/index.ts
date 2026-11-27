import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-organism-environment.ts";
import { c02 } from "./concepts/c02-responses-adaptations.ts";
import { c03 } from "./concepts/c03-population-attributes.ts";
import { c04 } from "./concepts/c04-population-growth.ts";
import { c05 } from "./concepts/c05-positive-interactions.ts";
import { c06 } from "./concepts/c06-negative-interactions.ts";
import { graph } from "./graph.ts";

export const organismsPopulations: Chapter = {
  slug: "organisms-populations",
  title: "Organisms and Populations",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
