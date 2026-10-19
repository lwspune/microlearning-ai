import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-angles-of-elevation.ts";
import { c02 } from "./concepts/c02-shadows.ts";
import { c03 } from "./concepts/c03-two-points-of-observation.ts";
import { c04 } from "./concepts/c04-objects-on-top.ts";
import { c05 } from "./concepts/c05-directions-and-reflections.ts";
import { graph } from "./graph.ts";

export const heightsAndDistances: Chapter = {
  slug: "heights-and-distances",
  title: "Heights and Distances",
  group: "school",
  subject: "maths",
  // Std X material the books assume: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
