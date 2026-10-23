import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-system-equilibrium.ts";
import { graph } from "./graph.ts";

export const thermodynamics: Chapter = {
  slug: "thermodynamics",
  title: "Thermodynamics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01],
};
