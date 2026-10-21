import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cgst-and-sgst.ts";
import { c02 } from "./concepts/c02-discount-then-gst.ts";
import { c03 } from "./concepts/c03-taxable-value-from-total.ts";
import { graph } from "./graph.ts";

export const financialPlanning10: Chapter = {
  slug: "financial-planning-10",
  title: "Financial Planning",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03],
};
