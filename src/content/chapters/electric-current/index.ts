import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-drift-speed.ts";
import { c02 } from "./concepts/c02-ohms-law.ts";
import { c03 } from "./concepts/c03-resistivity.ts";
import { c04 } from "./concepts/c04-resistor-combinations.ts";
import { c05 } from "./concepts/c05-electric-power.ts";
import { c06 } from "./concepts/c06-emf-cells.ts";
import { c07 } from "./concepts/c07-electricity-at-home.ts";
import { graph } from "./graph.ts";

export const electricCurrent: Chapter = {
  slug: "electric-current",
  title: "Electric Current Through Conductors",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
