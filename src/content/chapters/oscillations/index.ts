import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-linear-shm.ts";
import { c02 } from "./concepts/c02-shm-equation.ts";
import { c03 } from "./concepts/c03-velocity-acceleration.ts";
import { c04 } from "./concepts/c04-reference-circle.ts";
import { c05 } from "./concepts/c05-shm-time.ts";
import { c06 } from "./concepts/c06-shm-graphs.ts";
import { c07 } from "./concepts/c07-shm-energy.ts";
import { graph } from "./graph.ts";

export const oscillations: Chapter = {
  slug: "oscillations",
  title: "Oscillations",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
