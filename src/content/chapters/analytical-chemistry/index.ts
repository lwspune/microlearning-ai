import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-scientific-notation-sig-figs.ts";
import { c02 } from "./concepts/c02-rounding-in-calculations.ts";
import { c03 } from "./concepts/c03-accuracy-precision.ts";
import { c04 } from "./concepts/c04-percentage-composition.ts";
import { c05 } from "./concepts/c05-empirical-molecular-formula.ts";
import { c06 } from "./concepts/c06-stoichiometry.ts";
import { c07 } from "./concepts/c07-limiting-reagent.ts";
import { c08 } from "./concepts/c08-concentration-units.ts";
import { c09 } from "./concepts/c09-equivalents-normality.ts";
import { graph } from "./graph.ts";

export const analyticalChemistry: Chapter = {
  slug: "analytical-chemistry",
  title: "Introduction to Analytical Chemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
