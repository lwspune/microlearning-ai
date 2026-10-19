import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-equation-of-a-sphere.ts";
import { c02 } from "./concepts/c02-sphere-conditions.ts";
import { graph } from "./graph.ts";

export const sphere: Chapter = {
  slug: "sphere",
  title: "The Sphere",
  group: "school",
  subject: "maths",
  // 3D geometry NDA asks beyond the Std XII Line and Plane chapter (owner, 2026-10-19).
  standard: 12,
  graph,
  concepts: [c01, c02],
};
