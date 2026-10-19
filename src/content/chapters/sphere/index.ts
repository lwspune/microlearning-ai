import type { Chapter } from "../../types.ts";
import { graph } from "./graph.ts";

export const sphere: Chapter = {
  slug: "sphere",
  title: "The Sphere",
  group: "school",
  subject: "maths",
  // 3D geometry NDA asks beyond the Std XII Line and Plane chapter (owner, 2026-10-19).
  standard: 12,
  graph,
  concepts: [],
};
