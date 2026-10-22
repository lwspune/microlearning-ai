import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-trigonometric-identities.ts";
import { c02 } from "./concepts/c02-ratios-from-one.ts";
import { c03 } from "./concepts/c03-proving-identities.ts";
import { c04 } from "./concepts/c04-elevation-and-depression.ts";
import { c05 } from "./concepts/c05-two-triangle-problems.ts";
import { graph } from "./graph.ts";

export const trigonometry10: Chapter = {
  slug: "trigonometry-10",
  title: "Trigonometry",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
