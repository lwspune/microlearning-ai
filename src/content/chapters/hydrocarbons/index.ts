import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-alkanes-preparation-properties.ts";
import { c02 } from "./concepts/c02-alkane-reactions.ts";
import { c03 } from "./concepts/c03-preparing-alkenes.ts";
import { c04 } from "./concepts/c04-alkene-addition.ts";
import { c05 } from "./concepts/c05-alkene-oxidation-ozonolysis.ts";
import { c06 } from "./concepts/c06-alkynes.ts";
import { c07 } from "./concepts/c07-aromaticity-benzene.ts";
import { c08 } from "./concepts/c08-electrophilic-substitution.ts";
import { graph } from "./graph.ts";

export const hydrocarbons: Chapter = {
  slug: "hydrocarbons",
  title: "Hydrocarbons",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
