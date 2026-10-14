import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-line-from-intercepts.ts";
import { c02 } from "./concepts/c02-half-plane-test.ts";
import { c03 } from "./concepts/c03-feasible-region.ts";
import { c04 } from "./concepts/c04-bounded-unbounded-empty.ts";
import { c05 } from "./concepts/c05-corner-points.ts";
import { c06 } from "./concepts/c06-direction-from-shading.ts";
import { c07 } from "./concepts/c07-system-from-figure.ts";
import { c08 } from "./concepts/c08-corner-point-method.ts";
import { c09 } from "./concepts/c09-minimum-and-difference.ts";
import { c10 } from "./concepts/c10-unbounded-optimum.ts";
import { c11 } from "./concepts/c11-infinitely-many-optima.ts";
import { c12 } from "./concepts/c12-formulating-an-lpp.ts";
import { c13 } from "./concepts/c13-solving-word-problems.ts";
import { graph } from "./graph.ts";

export const linearProgramming: Chapter = {
  slug: "linear-programming",
  title: "Linear Programming",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13],
};
