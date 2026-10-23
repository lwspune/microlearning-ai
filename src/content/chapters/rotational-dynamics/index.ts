import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-angular-kinematics.ts";
import { c02 } from "./concepts/c02-centripetal-force.ts";
import { c03 } from "./concepts/c03-flat-curved-road.ts";
import { c04 } from "./concepts/c04-banked-road.ts";
import { graph } from "./graph.ts";

export const rotationalDynamics: Chapter = {
  slug: "rotational-dynamics",
  title: "Rotational Dynamics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04],
};
