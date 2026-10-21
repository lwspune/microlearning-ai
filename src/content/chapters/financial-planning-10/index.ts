import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cgst-and-sgst.ts";
import { c02 } from "./concepts/c02-discount-then-gst.ts";
import { c03 } from "./concepts/c03-taxable-value-from-total.ts";
import { c04 } from "./concepts/c04-input-tax-credit.ts";
import { c05 } from "./concepts/c05-face-and-market-value.ts";
import { c06 } from "./concepts/c06-dividend-and-rate-of-return.ts";
import { c07 } from "./concepts/c07-brokerage.ts";
import { c08 } from "./concepts/c08-gain-or-loss-on-shares.ts";
import { c09 } from "./concepts/c09-mutual-funds.ts";
import { graph } from "./graph.ts";

export const financialPlanning10: Chapter = {
  slug: "financial-planning-10",
  title: "Financial Planning",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
