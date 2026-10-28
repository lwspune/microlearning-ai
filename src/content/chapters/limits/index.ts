import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-one-sided-limits.ts";
import { c02 } from "./concepts/c02-substitution.ts";
import { c03 } from "./concepts/c03-factorization.ts";
import { c04 } from "./concepts/c04-rationalization.ts";
import { c05 } from "./concepts/c05-standard-power-limit.ts";
import { c06 } from "./concepts/c06-limits-at-infinity.ts";
import { c07 } from "./concepts/c07-trigonometric-limits.ts";
import { c08 } from "./concepts/c08-exponential-limits.ts";
import { c09 } from "./concepts/c09-log-limits-and-e.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const limits: Chapter = {
  slug: "limits",
  title: "Limits",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "limit",
    "left-hand limit",
    "right-hand limit",
    "indeterminate form",
    "standard limit",
    "greatest integer function",
    "polynomial",
    "radian",
  ],
  translations,
};
