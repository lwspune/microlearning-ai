import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-photosynthesis-chloroplast.ts";
import { c02 } from "./concepts/c02-light-pigments.ts";
import { c03 } from "./concepts/c03-light-reaction.ts";
import { c04 } from "./concepts/c04-photophosphorylation.ts";
import { c05 } from "./concepts/c05-calvin-cycle.ts";
import { c06 } from "./concepts/c06-photorespiration.ts";
import { c07 } from "./concepts/c07-c4-pathway.ts";
import { graph } from "./graph.ts";

export const photosynthesis: Chapter = {
  slug: "photosynthesis",
  title: "Photosynthesis",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
