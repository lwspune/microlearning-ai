import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-bases-and-reciprocals.ts";
import { c02 } from "./concepts/c02-sign-and-size.ts";
import { c03 } from "./concepts/c03-logarithmic-equations.ts";
import { c04 } from "./concepts/c04-unknown-in-the-exponent.ts";
import { graph } from "./graph.ts";

export const logarithms: Chapter = {
  slug: "logarithms",
  title: "Logarithms",
  group: "school",
  subject: "maths",
  // Not in the Std XI/XII books as a chapter: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
