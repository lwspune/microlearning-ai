import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-adsorption-basics.ts";
import { c02 } from "./concepts/c02-physisorption-chemisorption.ts";
import { c03 } from "./concepts/c03-adsorption-factors-isotherm.ts";
import { c04 } from "./concepts/c04-adsorption-uses-catalysis.ts";
import { c05 } from "./concepts/c05-colloid-types.ts";
import { c06 } from "./concepts/c06-colloid-preparation.ts";
import { c07 } from "./concepts/c07-colloid-properties.ts";
import { graph } from "./graph.ts";

export const adsorptionColloids: Chapter = {
  slug: "adsorption-colloids",
  title: "Adsorption and Colloids",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
