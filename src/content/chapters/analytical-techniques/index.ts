import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-filtration-crystallisation.ts";
import { c02 } from "./concepts/c02-distillation.ts";
import { c03 } from "./concepts/c03-solvent-extraction.ts";
import { c04 } from "./concepts/c04-chromatography-principle.ts";
import { c05 } from "./concepts/c05-types-of-chromatography.ts";
import { graph } from "./graph.ts";

export const analyticalTechniques: Chapter = {
  slug: "analytical-techniques",
  title: "Some Analytical Techniques",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
