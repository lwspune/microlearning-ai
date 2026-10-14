import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-gp-common-ratio.ts";
import { c02 } from "./concepts/c02-gp-nth-term.ts";
import { c03 } from "./concepts/c03-numbers-in-gp.ts";
import { c04 } from "./concepts/c04-gp-sum.ts";
import { c05 } from "./concepts/c05-sums-like-5-55-555.ts";
import { c06 } from "./concepts/c06-term-from-sum.ts";
import { c07 } from "./concepts/c07-infinite-gp.ts";
import { c08 } from "./concepts/c08-recurring-decimals.ts";
import { c09 } from "./concepts/c09-harmonic-progression.ts";
import { c10 } from "./concepts/c10-am-gm-hm.ts";
import { c11 } from "./concepts/c11-inserting-means.ts";
import { c12 } from "./concepts/c12-arithmetico-geometric.ts";
import { c13 } from "./concepts/c13-sigma-formulas.ts";
import { c14 } from "./concepts/c14-series-by-sigma.ts";
import { graph } from "./graph.ts";

export const sequencesAndSeries: Chapter = {
  slug: "sequences-and-series",
  title: "Sequences and Series",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14],
};
