import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-structural-formulas.ts";
import { c02 } from "./concepts/c02-functional-groups-series.ts";
import { c03 } from "./concepts/c03-iupac-nomenclature.ts";
import { c04 } from "./concepts/c04-isomerism.ts";
import { c05 } from "./concepts/c05-bond-fission-intermediates.ts";
import { c06 } from "./concepts/c06-inductive-effect.ts";
import { c07 } from "./concepts/c07-resonance-effect.ts";
import { c08 } from "./concepts/c08-hyperconjugation.ts";
import { graph } from "./graph.ts";

export const organicChemistryBasics: Chapter = {
  slug: "organic-chemistry-basics",
  title: "Basic Principles of Organic Chemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
