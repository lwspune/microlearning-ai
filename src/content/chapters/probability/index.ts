import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-sample-space.ts";
import { c02 } from "./concepts/c02-classical-probability.ts";
import { c03 } from "./concepts/c03-probability-by-counting.ts";
import { c04 } from "./concepts/c04-complement-and-odds.ts";
import { c05 } from "./concepts/c05-addition-theorem.ts";
import { c06 } from "./concepts/c06-three-events.ts";
import { c07 } from "./concepts/c07-conditional-probability.ts";
import { c08 } from "./concepts/c08-multiplication-theorem.ts";
import { c09 } from "./concepts/c09-independent-events.ts";
import { c10 } from "./concepts/c10-total-probability-bayes.ts";
import { c11 } from "./concepts/c11-bounds-on-probability.ts";
import { graph } from "./graph.ts";

export const probability: Chapter = {
  slug: "probability",
  title: "Probability",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
