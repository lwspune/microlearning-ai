import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-types-of-solids.ts";
import { c02 } from "./concepts/c02-unit-cells.ts";
import { c03 } from "./concepts/c03-atoms-per-unit-cell.ts";
import { c04 } from "./concepts/c04-close-packing-voids.ts";
import { c05 } from "./concepts/c05-formula-from-voids.ts";
import { c06 } from "./concepts/c06-packing-efficiency.ts";
import { c07 } from "./concepts/c07-density-of-unit-cell.ts";
import { c08 } from "./concepts/c08-crystal-defects.ts";
import { c09 } from "./concepts/c09-band-theory.ts";
import { c10 } from "./concepts/c10-magnetic-properties.ts";
import { graph } from "./graph.ts";

export const solidState: Chapter = {
  slug: "solid-state",
  title: "Solid State",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
