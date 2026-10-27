import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-centre-radius-form.ts";
import { c02 } from "./concepts/c02-diameter-form.ts";
import { c03 } from "./concepts/c03-general-equation.ts";
import { c04 } from "./concepts/c04-circle-from-conditions.ts";
import { c05 } from "./concepts/c05-parametric-form.ts";
import { c06 } from "./concepts/c06-tangent-at-a-point.ts";
import { c07 } from "./concepts/c07-condition-of-tangency.ts";
import { c08 } from "./concepts/c08-tangents-from-a-point.ts";
import { c09 } from "./concepts/c09-two-circles.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const circle: Chapter = {
  slug: "circle",
  title: "Circle",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "centre",
    "radius",
    "diameter",
    "chord",
    "tangent",
    "centre–radius form",
    "diameter form",
    "general equation",
    "parametric",
    "parameter",
    "point circle",
    "point of contact",
    "length of the tangent",
    "director circle",
    "concentric",
    "locus",
    "origin",
    "slope",
    "perpendicular",
    "intercept",
  ],
  translations,
};
