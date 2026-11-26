import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-food-chemistry.ts";
import { c02 } from "./concepts/c02-spoilage-antioxidants.ts";
import { c03 } from "./concepts/c03-soaps.ts";
import { c04 } from "./concepts/c04-detergents.ts";
import { c05 } from "./concepts/c05-analgesics.ts";
import { c06 } from "./concepts/c06-antiseptics-disinfectants.ts";
import { c07 } from "./concepts/c07-antibiotics.ts";
import { c08 } from "./concepts/c08-industrial-materials.ts";
import { c09 } from "./concepts/c09-common-chemicals.ts";
import { graph } from "./graph.ts";

export const everydayChemistry: Chapter = {
  slug: "everyday-chemistry",
  title: "Chemistry in Everyday Life",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
