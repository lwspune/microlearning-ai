import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-solar-system-and-universe.ts";
import { graph } from "./graph.ts";

export const astronomyAndSpace: Chapter = {
  slug: "astronomy-and-space",
  title: "Astronomy and Space",
  group: "school",
  subject: "physics",
  // Not in the Std XI/XII books: built for NDA, filed under Std XI (owner, 2026-11-26).
  standard: 11,
  graph,
  concepts: [c01],
};
