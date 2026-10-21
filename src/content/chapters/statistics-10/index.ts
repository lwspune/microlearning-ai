import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-mean-direct-method.ts";
import { c02 } from "./concepts/c02-mean-assumed-mean.ts";
import { c03 } from "./concepts/c03-mean-step-deviation.ts";
import { c04 } from "./concepts/c04-median-of-grouped-data.ts";
import { c05 } from "./concepts/c05-mode-of-grouped-data.ts";
import { c06 } from "./concepts/c06-histogram.ts";
import { c07 } from "./concepts/c07-frequency-polygon.ts";
import { c08 } from "./concepts/c08-pie-diagram.ts";
import { graph } from "./graph.ts";

export const statistics10: Chapter = {
  slug: "statistics-10",
  title: "Statistics",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
