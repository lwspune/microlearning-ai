import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-linear-shm.ts";
import { graph } from "./graph.ts";

export const oscillations: Chapter = {
  slug: "oscillations",
  title: "Oscillations",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01],
};
