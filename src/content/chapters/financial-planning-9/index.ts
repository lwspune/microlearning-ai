import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-savings-and-expenditure.ts";
import { c02 } from "./concepts/c02-comparing-investments.ts";
import { c03 } from "./concepts/c03-taxable-income.ts";
import { c04 } from "./concepts/c04-computing-income-tax.ts";
import { graph } from "./graph.ts";

export const financialPlanning9: Chapter = {
  slug: "financial-planning-9",
  title: "Financial Planning",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04],
};
