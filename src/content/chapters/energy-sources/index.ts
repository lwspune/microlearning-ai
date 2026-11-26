import type { Chapter } from "../../types.ts";
import { graph } from "./graph.ts";

export const energySources: Chapter = {
  slug: "energy-sources",
  title: "Energy Sources",
  group: "school",
  subject: "physics",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-11-26).
  standard: 11,
  graph,
  concepts: [],
};
