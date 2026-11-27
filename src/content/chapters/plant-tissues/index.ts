import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-meristematic-tissue.ts";
import { c02 } from "./concepts/c02-simple-permanent-tissues.ts";
import { c03 } from "./concepts/c03-complex-permanent-tissues.ts";
import { c04 } from "./concepts/c04-tissue-systems.ts";
import { c05 } from "./concepts/c05-root-stem-leaf-anatomy.ts";
import { c06 } from "./concepts/c06-secondary-growth.ts";
import { c07 } from "./concepts/c07-wood-and-cork.ts";
import { graph } from "./graph.ts";

export const plantTissues: Chapter = {
  slug: "plant-tissues",
  title: "Plant Tissues and Anatomy",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
