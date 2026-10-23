import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-fluid-pressure.ts";
import { graph } from "./graph.ts";

export const fluids: Chapter = {
  slug: "fluids",
  title: "Mechanical Properties of Fluids",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01],
};
