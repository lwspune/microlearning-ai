import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-root-modifications.ts";
import { c02 } from "./concepts/c02-stem-modifications.ts";
import { c03 } from "./concepts/c03-leaf-modifications.ts";
import { c04 } from "./concepts/c04-inflorescence.ts";
import { c05 } from "./concepts/c05-flower-whorls-aestivation.ts";
import { c06 } from "./concepts/c06-placentation.ts";
import { c07 } from "./concepts/c07-dicot-seed.ts";
import { graph } from "./graph.ts";

export const morphologyFloweringPlants: Chapter = {
  slug: "morphology-flowering-plants",
  title: "Morphology of Flowering Plants",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
