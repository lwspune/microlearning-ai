import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-primary-and-secondary-data.ts";
import { c02 } from "./concepts/c02-class-limits-and-class-marks.ts";
import { c03 } from "./concepts/c03-frequency-tables.ts";
import { c04 } from "./concepts/c04-cumulative-frequency.ts";
import { c05 } from "./concepts/c05-mean.ts";
import { c06 } from "./concepts/c06-problems-on-the-mean.ts";
import { c07 } from "./concepts/c07-median.ts";
import { c08 } from "./concepts/c08-mode.ts";
import { c09 } from "./concepts/c09-bar-diagrams.ts";
import { graph } from "./graph.ts";

export const statistics9: Chapter = {
  slug: "statistics-9",
  title: "Statistics",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
