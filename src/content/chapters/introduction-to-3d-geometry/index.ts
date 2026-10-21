import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-coordinates-in-space.ts";
import { c02 } from "./concepts/c02-distance-in-space.ts";
import { c03 } from "./concepts/c03-shapes-from-distances.ts";
import { c04 } from "./concepts/c04-midpoint-and-centroid.ts";
import { c05 } from "./concepts/c05-loci-in-space.ts";
import { graph } from "./graph.ts";

export const introductionTo3dGeometry: Chapter = {
  slug: "introduction-to-3d-geometry",
  title: "Introduction to Three Dimensional Geometry",
  group: "school",
  subject: "maths",
  // NCERT Class 11 Ch.11, built for CBSE (owner, 2026-10-20).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
