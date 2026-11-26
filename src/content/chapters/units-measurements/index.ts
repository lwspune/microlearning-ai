import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-si-units.ts";
import { c02 } from "./concepts/c02-measuring-length.ts";
import { c03 } from "./concepts/c03-dimensional-formulae.ts";
import { c04 } from "./concepts/c04-dimensional-analysis.ts";
import { c05 } from "./concepts/c05-errors.ts";
import { c06 } from "./concepts/c06-combining-errors.ts";
import { c07 } from "./concepts/c07-significant-figures.ts";
import { c08 } from "./concepts/c08-vernier-screw-gauge.ts";
import { graph } from "./graph.ts";

export const unitsMeasurements: Chapter = {
  slug: "units-measurements",
  title: "Units and Measurements",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
