import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-line-from-intercepts.ts";
import { c02 } from "./concepts/c02-half-plane-test.ts";
import { c03 } from "./concepts/c03-feasible-region.ts";
import { c04 } from "./concepts/c04-bounded-unbounded-empty.ts";
import { c05 } from "./concepts/c05-corner-points.ts";
import { graph } from "./graph.ts";

export const linearProgramming: Chapter = {
  slug: "linear-programming",
  title: "Linear Programming",
  group: "school",
  subject: "maths",
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
