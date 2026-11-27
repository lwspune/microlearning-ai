import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-chemical-evolution.ts";
import { c02 } from "./concepts/c02-evidences-of-evolution.ts";
import { c03 } from "./concepts/c03-fossils-time-scale.ts";
import { c04 } from "./concepts/c04-theories-of-evolution.ts";
import { c05 } from "./concepts/c05-natural-selection.ts";
import { c06 } from "./concepts/c06-hardy-weinberg.ts";
import { c07 } from "./concepts/c07-isolation-speciation.ts";
import { c08 } from "./concepts/c08-human-evolution.ts";
import { graph } from "./graph.ts";

export const originAndEvolutionOfLife: Chapter = {
  slug: "origin-and-evolution-of-life",
  title: "Origin and Evolution of Life",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
