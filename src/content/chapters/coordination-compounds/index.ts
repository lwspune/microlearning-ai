import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-complex-terms.ts";
import { c02 } from "./concepts/c02-types-of-ligands.ts";
import { c03 } from "./concepts/c03-counting-ionisable-ions.ts";
import { c04 } from "./concepts/c04-classes-of-complexes.ts";
import { c05 } from "./concepts/c05-iupac-names-complexes.ts";
import { c06 } from "./concepts/c06-structural-isomerism.ts";
import { c07 } from "./concepts/c07-stereoisomerism.ts";
import { c08 } from "./concepts/c08-valence-bond-theory.ts";
import { c09 } from "./concepts/c09-crystal-field-theory.ts";
import { c10 } from "./concepts/c10-stability-applications.ts";
import { c11 } from "./concepts/c11-metal-carbonyls.ts";
import { graph } from "./graph.ts";

export const coordinationCompounds: Chapter = {
  slug: "coordination-compounds",
  title: "Coordination Compounds",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
