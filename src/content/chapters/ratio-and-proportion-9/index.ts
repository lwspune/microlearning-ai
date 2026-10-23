import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ratios-in-reduced-form.ts";
import { c02 } from "./concepts/c02-ratio-word-problems.ts";
import { c03 } from "./concepts/c03-comparing-ratios.ts";
import { c04 } from "./concepts/c04-combining-ratios.ts";
import { c05 } from "./concepts/c05-operations-on-equal-ratios.ts";
import { c06 } from "./concepts/c06-solving-with-componendo-dividendo.ts";
import { c07 } from "./concepts/c07-theorem-on-equal-ratios.ts";
import { c08 } from "./concepts/c08-continued-proportion.ts";
import { c09 } from "./concepts/c09-k-method.ts";
import { graph } from "./graph.ts";

export const ratioAndProportion9: Chapter = {
  slug: "ratio-and-proportion-9",
  title: "Ratio and Proportion",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 1 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
