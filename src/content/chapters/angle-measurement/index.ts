import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-directed-angles.ts";
import { c02 } from "./concepts/c02-degrees-minutes-seconds.ts";
import { c03 } from "./concepts/c03-radian-measure.ts";
import { c04 } from "./concepts/c04-angles-of-triangles-and-polygons.ts";
import { c05 } from "./concepts/c05-arc-length.ts";
import { c06 } from "./concepts/c06-sector-area.ts";
import { c07 } from "./concepts/c07-clock-hands.ts";
import { graph } from "./graph.ts";
import { translations } from "./translations/index.ts";

export const angleMeasurement: Chapter = {
  slug: "angle-measurement",
  title: "Angle and its Measurement",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
  // The book's terms: a translation keeps them in English wherever the English uses them.
  glossary: [
    "ray",
    "initial arm",
    "terminal arm",
    "directed angle",
    "standard position",
    "quadrant",
    "co-terminal",
    "clockwise",
    "anticlockwise",
    "radian",
    "radius",
    "arc",
    "chord",
    "sector",
    "circumference",
    "perimeter",
    "polygon",
    "diagonal",
    "interior angle",
    "exterior angle",
    "reflex angle",
    "hour hand",
    "minute hand",
  ],
  translations,
};
