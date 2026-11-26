import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-group-trends.ts";
import { c02 } from "./concepts/c02-anomalous-oxygen-fluorine.ts";
import { c03 } from "./concepts/c03-oxidation-states-hydrides.ts";
import { c04 } from "./concepts/c04-oxygen-ozone.ts";
import { c05 } from "./concepts/c05-allotropes-of-sulfur.ts";
import { c06 } from "./concepts/c06-sulfur-dioxide-sulfuric-acid.ts";
import { c07 } from "./concepts/c07-oxoacids.ts";
import { c08 } from "./concepts/c08-chlorine-hydrogen-chloride.ts";
import { c09 } from "./concepts/c09-interhalogen-compounds.ts";
import { c10 } from "./concepts/c10-xenon-compounds.ts";
import { graph } from "./graph.ts";

export const pBlock161718: Chapter = {
  slug: "p-block-16-17-18",
  title: "Elements of Groups 16, 17 and 18",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
