import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-order-and-degree.ts";
import { c02 } from "./concepts/c02-forming-equations.ts";
import { c03 } from "./concepts/c03-general-and-particular-solutions.ts";
import { c04 } from "./concepts/c04-variables-separable.ts";
import { c05 } from "./concepts/c05-reducible-to-separable.ts";
import { c06 } from "./concepts/c06-homogeneous-equations.ts";
import { c07 } from "./concepts/c07-linear-equations.ts";
import { c08 } from "./concepts/c08-growth-and-decay.ts";
import { c09 } from "./concepts/c09-other-applications.ts";
import { graph } from "./graph.ts";

export const differentialEquations: Chapter = {
  slug: "differential-equations",
  title: "Differential Equations",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
