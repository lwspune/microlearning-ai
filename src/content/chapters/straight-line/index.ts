import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-locus.ts";
import { c02 } from "./concepts/c02-shift-of-origin.ts";
import { c03 } from "./concepts/c03-slope.ts";
import { c04 } from "./concepts/c04-parallel-and-perpendicular.ts";
import { c05 } from "./concepts/c05-point-slope-and-two-point.ts";
import { c06 } from "./concepts/c06-intercept-and-normal-forms.ts";
import { c07 } from "./concepts/c07-general-form.ts";
import { c08 } from "./concepts/c08-lines-in-a-triangle.ts";
import { c09 } from "./concepts/c09-angle-between-lines.ts";
import { c10 } from "./concepts/c10-point-to-line-distance.ts";
import { c11 } from "./concepts/c11-parallel-lines-distance.ts";
import { c12 } from "./concepts/c12-family-of-lines.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const straightLine: Chapter = {
  slug: "straight-line",
  title: "Straight Line",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "locus",
    "origin",
    "slope",
    "inclination",
    "intercept",
    "parallel",
    "perpendicular",
    "point–slope form",
    "two-point form",
    "intercept form",
    "normal form",
    "general form",
    "perpendicular bisector",
    "foot of the perpendicular",
    "median",
    "altitude",
    "centroid",
    "orthocentre",
    "circumcentre",
    "concurrent",
    "collinear",
  ],
  translations,
};
