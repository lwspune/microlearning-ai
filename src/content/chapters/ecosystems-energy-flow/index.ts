import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-productivity.ts";
import { c02 } from "./concepts/c02-decomposition.ts";
import { c03 } from "./concepts/c03-energy-flow.ts";
import { c04 } from "./concepts/c04-ecological-pyramids.ts";
import { c05 } from "./concepts/c05-ecological-succession.ts";
import { c06 } from "./concepts/c06-nutrient-cycles.ts";
import { graph } from "./graph.ts";

export const ecosystemsEnergyFlow: Chapter = {
  slug: "ecosystems-energy-flow",
  title: "Ecosystems and Energy Flow",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
