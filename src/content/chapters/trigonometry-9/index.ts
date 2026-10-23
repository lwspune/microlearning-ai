import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-trigonometric-ratios.ts";
import { c02 } from "./concepts/c02-ratios-from-two-sides.ts";
import { c03 } from "./concepts/c03-particular-angles.ts";
import { c04 } from "./concepts/c04-relations-among-ratios.ts";
import { graph } from "./graph.ts";

export const trigonometry9: Chapter = {
  slug: "trigonometry-9",
  title: "Trigonometry",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
