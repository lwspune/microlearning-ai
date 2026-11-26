import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-kinematics-1d.ts";
import { c02 } from "./concepts/c02-motion-graphs.ts";
import { c03 } from "./concepts/c03-motion-in-plane.ts";
import { c04 } from "./concepts/c04-relative-velocity.ts";
import { c05 } from "./concepts/c05-projectile-motion.ts";
import { c06 } from "./concepts/c06-circular-motion.ts";
import { graph } from "./graph.ts";

export const motionInAPlane: Chapter = {
  slug: "motion-in-a-plane",
  title: "Motion in a Plane",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
