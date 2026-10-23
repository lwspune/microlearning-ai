import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-linear-shm.ts";
import { c02 } from "./concepts/c02-shm-equation.ts";
import { c03 } from "./concepts/c03-velocity-acceleration.ts";
import { graph } from "./graph.ts";

export const oscillations: Chapter = {
  slug: "oscillations",
  title: "Oscillations",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03],
};
