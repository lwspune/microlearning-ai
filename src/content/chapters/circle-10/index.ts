import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-tangent-and-radius.ts";
import { c02 } from "./concepts/c02-tangent-segments.ts";
import { c03 } from "./concepts/c03-touching-circles.ts";
import { c04 } from "./concepts/c04-arcs-and-central-angles.ts";
import { c05 } from "./concepts/c05-inscribed-angle.ts";
import { c06 } from "./concepts/c06-cyclic-quadrilateral.ts";
import { c07 } from "./concepts/c07-angles-of-intersecting-chords.ts";
import { c08 } from "./concepts/c08-tangent-and-chord-angle.ts";
import { c09 } from "./concepts/c09-intersecting-chords.ts";
import { c10 } from "./concepts/c10-tangent-secant-segments.ts";
import { graph } from "./graph.ts";

export const circle10: Chapter = {
  slug: "circle-10",
  title: "Circle",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
