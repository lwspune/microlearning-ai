import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-d-block-configuration.ts";
import { c02 } from "./concepts/c02-oxidation-states-d.ts";
import { c03 } from "./concepts/c03-atomic-trends-d.ts";
import { c04 } from "./concepts/c04-magnetism-colour.ts";
import { c05 } from "./concepts/c05-d-block-properties.ts";
import { c06 } from "./concepts/c06-extraction-of-iron.ts";
import { c07 } from "./concepts/c07-permanganate-dichromate.ts";
import { c08 } from "./concepts/c08-lanthanoids.ts";
import { c09 } from "./concepts/c09-actinoids.ts";
import { c10 } from "./concepts/c10-tests-for-metal-ions.ts";
import { c11 } from "./concepts/c11-transition-metal-oxides.ts";
import { graph } from "./graph.ts";

export const transitionElements: Chapter = {
  slug: "transition-elements",
  title: "Transition and Inner Transition Elements",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
