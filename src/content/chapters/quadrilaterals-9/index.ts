import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-parallelogram-properties.ts";
import { c02 } from "./concepts/c02-tests-for-a-parallelogram.ts";
import { c03 } from "./concepts/c03-rhombus-rectangle-square.ts";
import { c04 } from "./concepts/c04-trapezium.ts";
import { c05 } from "./concepts/c05-midpoint-theorem.ts";
import { graph } from "./graph.ts";

export const quadrilaterals9: Chapter = {
  slug: "quadrilaterals-9",
  title: "Quadrilaterals",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
