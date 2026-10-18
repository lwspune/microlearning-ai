import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-random-variables.ts";
import { c02 } from "./concepts/c02-probability-mass-function.ts";
import { c03 } from "./concepts/c03-distribution-from-experiment.ts";
import { c04 } from "./concepts/c04-expected-value-and-variance.ts";
import { c05 } from "./concepts/c05-probability-density-function.ts";
import { c06 } from "./concepts/c06-cumulative-distribution.ts";
import { c07 } from "./concepts/c07-mean-of-continuous.ts";
import { graph } from "./graph.ts";

export const probabilityDistributions: Chapter = {
  slug: "probability-distributions",
  title: "Probability Distributions",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
