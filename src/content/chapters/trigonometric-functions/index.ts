import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ratios-from-a-point.ts";
import { c02 } from "./concepts/c02-signs-in-quadrants.ts";
import { c03 } from "./concepts/c03-standard-angles.ts";
import { c04 } from "./concepts/c04-large-and-negative-angles.ts";
import { c05 } from "./concepts/c05-fundamental-identities.ts";
import { c06 } from "./concepts/c06-one-ratio-gives-all.ts";
import { c07 } from "./concepts/c07-simplifying-expressions.ts";
import { c08 } from "./concepts/c08-eliminating-theta.ts";
import { c09 } from "./concepts/c09-range-and-period.ts";
import { c10 } from "./concepts/c10-polar-coordinates.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const trigonometricFunctions: Chapter = {
  slug: "trigonometric-functions",
  title: "Trigonometry – I",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "initial arm",
    "terminal arm",
    "standard position",
    "quadrant",
    "clockwise",
    "anticlockwise",
    "trigonometric function",
    "sine",
    "cosine",
    "tangent",
    "cosecant",
    "secant",
    "cotangent",
    "reciprocal",
    "unit circle",
    "hypotenuse",
    "reference angle",
    "identity",
    "identities",
    "periodic",
    "period",
    "range",
    "polar co-ordinates",
  ],
  translations,
};
