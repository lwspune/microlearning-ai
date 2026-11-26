import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classes-of-nuclides.ts";
import { c02 } from "./concepts/c02-nuclear-stability.ts";
import { c03 } from "./concepts/c03-binding-energy.ts";
import { c04 } from "./concepts/c04-modes-of-decay.ts";
import { c05 } from "./concepts/c05-decay-law-half-life.ts";
import { c06 } from "./concepts/c06-nuclear-reactions.ts";
import { c07 } from "./concepts/c07-uses-of-radioisotopes.ts";
import { graph } from "./graph.ts";

export const nuclearChemistry: Chapter = {
  slug: "nuclear-chemistry",
  title: "Nuclear Chemistry and Radioactivity",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
