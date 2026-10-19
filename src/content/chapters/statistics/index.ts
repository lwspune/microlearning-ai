import type { Chapter } from "../../types.ts";
import { graph } from "./graph.ts";

export const statistics: Chapter = {
  slug: "statistics",
  title: "Statistics",
  group: "school",
  subject: "maths",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-10-19).
  standard: 11,
  graph,
  concepts: [],
};
