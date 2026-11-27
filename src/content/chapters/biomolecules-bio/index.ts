import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-biomolecules-metabolism.ts";
import { c02 } from "./concepts/c02-carbohydrates.ts";
import { c03 } from "./concepts/c03-proteins.ts";
import { c04 } from "./concepts/c04-lipids.ts";
import { c05 } from "./concepts/c05-enzymes.ts";
import { c06 } from "./concepts/c06-nucleic-acids.ts";
import { graph } from "./graph.ts";

export const biomoleculesBio: Chapter = {
  slug: "biomolecules-bio",
  title: "Biomolecules",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
