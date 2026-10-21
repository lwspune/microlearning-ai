import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-inequality-rules.ts";
import { c02 } from "./concepts/c02-brackets-and-fractions.ts";
import { c03 } from "./concepts/c03-number-line.ts";
import { c04 } from "./concepts/c04-double-inequalities.ts";
import { c05 } from "./concepts/c05-systems-of-inequalities.ts";
import { c06 } from "./concepts/c06-inequality-word-problems.ts";
import { graph } from "./graph.ts";

export const linearInequalities: Chapter = {
  slug: "linear-inequalities",
  title: "Linear Inequalities",
  group: "school",
  subject: "maths",
  // NCERT Class 11 Ch.5, built for CBSE (owner, 2026-10-20).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
