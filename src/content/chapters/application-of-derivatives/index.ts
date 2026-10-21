import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-tangent-and-normal.ts";
import { c02 } from "./concepts/c02-tangents-with-conditions.ts";
import { c03 } from "./concepts/c03-rate-of-change.ts";
import { c04 } from "./concepts/c04-related-rates.ts";
import { c05 } from "./concepts/c05-approximations.ts";
import { c06 } from "./concepts/c06-rolles-theorem.ts";
import { c07 } from "./concepts/c07-mean-value-theorem.ts";
import { c08 } from "./concepts/c08-increasing-decreasing.ts";
import { c09 } from "./concepts/c09-maxima-and-minima.ts";
import { c10 } from "./concepts/c10-optimisation.ts";
import { c11 } from "./concepts/c11-angle-between-curves.ts";
import { c12 } from "./concepts/c12-absolute-extrema.ts";
import { graph } from "./graph.ts";

export const applicationOfDerivatives: Chapter = {
  slug: "application-of-derivatives",
  title: "Application of Derivatives",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
