import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-bernoulli-trials.ts";
import { c02 } from "./concepts/c02-binomial-probability.ts";
import { c03 } from "./concepts/c03-at-least-and-at-most.ts";
import { c04 } from "./concepts/c04-binomial-mean-and-variance.ts";
import { graph } from "./graph.ts";

export const binomialDistribution: Chapter = {
  slug: "binomial-distribution",
  title: "Binomial Distribution",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04],
};
