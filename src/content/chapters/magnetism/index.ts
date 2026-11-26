import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-bar-magnet.ts";
import { c02 } from "./concepts/c02-magnetic-field-lines.ts";
import { c03 } from "./concepts/c03-gauss-magnetism.ts";
import { c04 } from "./concepts/c04-earths-magnetism.ts";
import { graph } from "./graph.ts";

export const magnetism: Chapter = {
  slug: "magnetism",
  title: "Magnetism",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
