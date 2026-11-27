import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-skeletal-muscle-structure.ts";
import { c02 } from "./concepts/c02-muscle-contraction.ts";
import { c03 } from "./concepts/c03-muscle-properties.ts";
import { c04 } from "./concepts/c04-axial-appendicular-skeleton.ts";
import { c05 } from "./concepts/c05-joints.ts";
import { c06 } from "./concepts/c06-muscle-bone-disorders.ts";
import { graph } from "./graph.ts";

export const skeletonMovement: Chapter = {
  slug: "skeleton-movement",
  title: "Skeleton and Movement",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
