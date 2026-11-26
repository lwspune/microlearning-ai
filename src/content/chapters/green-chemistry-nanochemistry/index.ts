import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-green-chemistry-basics.ts";
import { c02 } from "./concepts/c02-green-principles.ts";
import { c03 } from "./concepts/c03-atom-economy.ts";
import { c04 } from "./concepts/c04-nanoscale.ts";
import { c05 } from "./concepts/c05-nanomaterial-synthesis.ts";
import { c06 } from "./concepts/c06-nanomaterial-uses.ts";
import { graph } from "./graph.ts";

export const greenChemistryNanochemistry: Chapter = {
  slug: "green-chemistry-nanochemistry",
  title: "Green Chemistry and Nanochemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
