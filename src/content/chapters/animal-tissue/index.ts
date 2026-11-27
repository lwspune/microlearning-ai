import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-histology-tissue-types.ts";
import { c02 } from "./concepts/c02-epithelium-glands.ts";
import { c03 } from "./concepts/c03-cell-junctions.ts";
import { c04 } from "./concepts/c04-areolar-adipose-dense.ts";
import { c05 } from "./concepts/c05-cartilage-bone.ts";
import { c06 } from "./concepts/c06-nervous-tissue.ts";
import { c07 } from "./concepts/c07-muscular-tissue.ts";
import { graph } from "./graph.ts";

export const animalTissue: Chapter = {
  slug: "animal-tissue",
  title: "Animal Tissue",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
