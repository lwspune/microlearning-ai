import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-carbohydrate-classes.ts";
import { c02 } from "./concepts/c02-glucose-structure.ts";
import { c03 } from "./concepts/c03-di-polysaccharides.ts";
import { c04 } from "./concepts/c04-amino-acids.ts";
import { c05 } from "./concepts/c05-protein-structure.ts";
import { c06 } from "./concepts/c06-enzymes.ts";
import { c07 } from "./concepts/c07-nucleic-acids.ts";
import { graph } from "./graph.ts";

export const biomolecules: Chapter = {
  slug: "biomolecules",
  title: "Biomolecules",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
