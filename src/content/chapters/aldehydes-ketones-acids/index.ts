import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classes-names-carbonyl.ts";
import { c02 } from "./concepts/c02-carbonyl-polarity.ts";
import { c03 } from "./concepts/c03-preparing-aldehydes-ketones.ts";
import { c04 } from "./concepts/c04-physical-properties-carbonyl.ts";
import { c05 } from "./concepts/c05-nucleophilic-addition.ts";
import { c06 } from "./concepts/c06-reduction-oxidation-carbonyl.ts";
import { c07 } from "./concepts/c07-aldol-cannizzaro.ts";
import { c08 } from "./concepts/c08-preparing-carboxylic-acids.ts";
import { c09 } from "./concepts/c09-acidity-carboxylic-acids.ts";
import { c10 } from "./concepts/c10-reactions-carboxylic-acids.ts";
import { graph } from "./graph.ts";

export const aldehydesKetonesAcids: Chapter = {
  slug: "aldehydes-ketones-acids",
  title: "Aldehydes, Ketones and Carboxylic Acids",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
