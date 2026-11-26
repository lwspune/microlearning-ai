import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-polymer-basics.ts";
import { c02 } from "./concepts/c02-polymers-by-forces.ts";
import { c03 } from "./concepts/c03-addition-condensation.ts";
import { c04 } from "./concepts/c04-polyolefins-teflon.ts";
import { c05 } from "./concepts/c05-polyamides-polyesters.ts";
import { c06 } from "./concepts/c06-formaldehyde-resins.ts";
import { c07 } from "./concepts/c07-rubbers.ts";
import { graph } from "./graph.ts";

export const polymers: Chapter = {
  slug: "polymers",
  title: "Introduction to Polymer Chemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
