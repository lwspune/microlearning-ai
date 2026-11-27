import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-biodiversity-patterns.ts";
import { c02 } from "./concepts/c02-biodiversity-loss.ts";
import { c03 } from "./concepts/c03-conservation.ts";
import { c04 } from "./concepts/c04-air-noise-pollution.ts";
import { c05 } from "./concepts/c05-water-pollution-wastes.ts";
import { c06 } from "./concepts/c06-ozone-global-warming.ts";
import { graph } from "./graph.ts";

export const biodiversityConservation: Chapter = {
  slug: "biodiversity-conservation",
  title: "Biodiversity, Conservation and Environmental Issues",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
