import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-electric-charge.ts";
import { c02 } from "./concepts/c02-coulombs-law.ts";
import { c03 } from "./concepts/c03-superposition.ts";
import { c04 } from "./concepts/c04-electric-field.ts";
import { c05 } from "./concepts/c05-gauss-law.ts";
import { c06 } from "./concepts/c06-electric-dipole.ts";
import { graph } from "./graph.ts";

export const electrostatics: Chapter = {
  slug: "electrostatics",
  title: "Electrostatics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
