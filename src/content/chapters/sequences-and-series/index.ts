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
import { c15 } from "./concepts/c15-sequences-and-series.ts";
import { c16 } from "./concepts/c16-ap-nth-term.ts";
import { c17 } from "./concepts/c17-ap-sum.ts";
import { c18 } from "./concepts/c18-numbers-in-ap.ts";
import { c19 } from "./concepts/c19-recognising-an-ap.ts";
import { c20 } from "./concepts/c20-counting-terms.ts";
import { c21 } from "./concepts/c21-ap-word-problems.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const sequencesAndSeries: Chapter = {
  slug: "sequences-and-series",
  title: "Sequences and Series",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "sequence",
    "series",
    "A.P.",
    "G.P.",
    "H.P.",
    "arithmetic progression",
    "geometric progression",
    "harmonic progression",
    "common difference",
    "common ratio",
    "general term",
    "arithmetic mean",
    "geometric mean",
    "harmonic mean",
    "sum to infinity",
    "partial sum",
    "arithmetico-geometric series",
  ],
  translations,
};
