import type { Chapter } from "../../types.ts";
import { c06 } from "./concepts/c06-division.ts";
import { c14 } from "./concepts/c14-argument.ts";
import { c25 } from "./concepts/c25-perpendicular-bisector.ts";
import { graph } from "./graph.ts";

export const complexNumbers: Chapter = {
  slug: "complex-numbers",
  title: "Complex Numbers",
  graph,
  concepts: [c06, c14, c25],
};
