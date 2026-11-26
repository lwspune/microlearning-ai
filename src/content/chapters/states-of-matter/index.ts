import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-gas-properties-units.ts";
import { c02 } from "./concepts/c02-intermolecular-forces.ts";
import { c03 } from "./concepts/c03-gas-laws.ts";
import { c04 } from "./concepts/c04-ideal-gas-equation.ts";
import { c05 } from "./concepts/c05-partial-pressures.ts";
import { c06 } from "./concepts/c06-kinetic-theory-real-gases.ts";
import { c07 } from "./concepts/c07-liquid-state.ts";
import { graph } from "./graph.ts";

export const statesOfMatter: Chapter = {
  slug: "states-of-matter",
  title: "States of Matter",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
