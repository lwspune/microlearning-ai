import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-range.ts";
import { c02 } from "./concepts/c02-variance-raw-data.ts";
import { c03 } from "./concepts/c03-variance-frequency-data.ts";
import { c04 } from "./concepts/c04-standard-deviation.ts";
import { c05 } from "./concepts/c05-change-of-origin-and-scale.ts";
import { c06 } from "./concepts/c06-coefficient-of-variation.ts";
import { c07 } from "./concepts/c07-combined-sd.ts";
import { graph } from "./graph.ts";

export const measuresOfDispersion: Chapter = {
  slug: "measures-of-dispersion",
  title: "Measures of Dispersion",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
