import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-properties-of-life.ts";
import { c02 } from "./concepts/c02-taxonomic-aids.ts";
import { c03 } from "./concepts/c03-gardens-zoos-parks.ts";
import { c04 } from "./concepts/c04-conserving-biodiversity.ts";
import { graph } from "./graph.ts";

export const livingWorld: Chapter = {
  slug: "living-world",
  title: "Living World",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
