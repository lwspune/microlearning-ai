import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-area-under-a-curve.ts";
import { c02 } from "./concepts/c02-area-with-y-axis.ts";
import { c03 } from "./concepts/c03-areas-of-standard-curves.ts";
import { c04 } from "./concepts/c04-area-between-curves.ts";
import { graph } from "./graph.ts";

export const applicationOfDefiniteIntegration: Chapter = {
  slug: "application-of-definite-integration",
  title: "Application of Definite Integration",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04],
};
