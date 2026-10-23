import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-perpendicular-to-a-chord.ts";
import { c02 } from "./concepts/c02-equal-chords.ts";
import { c03 } from "./concepts/c03-incircle.ts";
import { c04 } from "./concepts/c04-circumcircle.ts";
import { graph } from "./graph.ts";

export const circle9: Chapter = {
  slug: "circle-9",
  title: "Circle",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
