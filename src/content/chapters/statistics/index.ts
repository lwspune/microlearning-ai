import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-frequency-distributions.ts";
import { c02 } from "./concepts/c02-graphs-of-data.ts";
import { c03 } from "./concepts/c03-arithmetic-mean.ts";
import { c04 } from "./concepts/c04-mean-shortcuts.ts";
import { c05 } from "./concepts/c05-combined-mean.ts";
import { c06 } from "./concepts/c06-mean-of-grouped-data.ts";
import { c07 } from "./concepts/c07-median.ts";
import { c08 } from "./concepts/c08-mode.ts";
import { c09 } from "./concepts/c09-geometric-and-harmonic-means.ts";
import { c10 } from "./concepts/c10-mean-deviation.ts";
import { c11 } from "./concepts/c11-correlation-coefficient.ts";
import { c12 } from "./concepts/c12-regression-lines.ts";
import { c13 } from "./concepts/c13-two-regression-lines.ts";
import { graph } from "./graph.ts";

export const statistics: Chapter = {
  slug: "statistics",
  title: "Statistics",
  group: "school",
  subject: "maths",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13],
};
