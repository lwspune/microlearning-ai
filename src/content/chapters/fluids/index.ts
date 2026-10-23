import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-fluid-pressure.ts";
import { c02 } from "./concepts/c02-pascals-law.ts";
import { c03 } from "./concepts/c03-surface-tension.ts";
import { c04 } from "./concepts/c04-surface-energy.ts";
import { c05 } from "./concepts/c05-drops-merging.ts";
import { graph } from "./graph.ts";

export const fluids: Chapter = {
  slug: "fluids",
  title: "Mechanical Properties of Fluids",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
