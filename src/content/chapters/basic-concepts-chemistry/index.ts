import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classifying-matter.ts";
import { c02 } from "./concepts/c02-si-units-temperature.ts";
import { c03 } from "./concepts/c03-laws-of-combination.ts";
import { c04 } from "./concepts/c04-avogadro-dalton.ts";
import { c05 } from "./concepts/c05-atomic-molecular-mass.ts";
import { c06 } from "./concepts/c06-mole-concept.ts";
import { c07 } from "./concepts/c07-molar-volume.ts";
import { c08 } from "./concepts/c08-physical-chemical-changes.ts";
import { c09 } from "./concepts/c09-types-of-reactions.ts";
import { graph } from "./graph.ts";

export const basicConceptsChemistry: Chapter = {
  slug: "basic-concepts-chemistry",
  title: "Some Basic Concepts of Chemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
