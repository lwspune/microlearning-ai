import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-binary-to-decimal.ts";
import { c02 } from "./concepts/c02-decimal-to-binary.ts";
import { c03 } from "./concepts/c03-binary-addition-and-subtraction.ts";
import { c04 } from "./concepts/c04-binary-multiplication-and-division.ts";
import { graph } from "./graph.ts";

export const binaryNumbers: Chapter = {
  slug: "binary-numbers",
  title: "Binary Numbers",
  group: "school",
  subject: "maths",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
