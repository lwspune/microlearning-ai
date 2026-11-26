import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-solubility.ts";
import { c02 } from "./concepts/c02-henrys-law.ts";
import { c03 } from "./concepts/c03-raoults-law-liquids.ts";
import { c04 } from "./concepts/c04-vapour-pressure-lowering.ts";
import { c05 } from "./concepts/c05-boiling-point-elevation.ts";
import { c06 } from "./concepts/c06-freezing-point-depression.ts";
import { c07 } from "./concepts/c07-osmotic-pressure.ts";
import { c08 } from "./concepts/c08-vant-hoff-factor.ts";
import { c09 } from "./concepts/c09-degree-of-dissociation.ts";
import { graph } from "./graph.ts";

export const solutions: Chapter = {
  slug: "solutions",
  title: "Solutions",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
