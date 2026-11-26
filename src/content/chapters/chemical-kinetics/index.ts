import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-rate-of-reaction.ts";
import { c02 } from "./concepts/c02-rate-law-order.ts";
import { c03 } from "./concepts/c03-molecularity-mechanism.ts";
import { c04 } from "./concepts/c04-first-order-reactions.ts";
import { c05 } from "./concepts/c05-zero-order-reactions.ts";
import { c06 } from "./concepts/c06-half-life.ts";
import { c07 } from "./concepts/c07-units-pseudo-first-order.ts";
import { c08 } from "./concepts/c08-collision-theory.ts";
import { c09 } from "./concepts/c09-arrhenius-equation.ts";
import { c10 } from "./concepts/c10-catalysis.ts";
import { graph } from "./graph.ts";

export const chemicalKinetics: Chapter = {
  slug: "chemical-kinetics",
  title: "Chemical Kinetics",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
