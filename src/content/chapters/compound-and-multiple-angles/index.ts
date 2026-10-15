import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-sin-cos-of-sum.ts";
import { c02 } from "./concepts/c02-tan-of-sum.ts";
import { c03 } from "./concepts/c03-allied-angles.ts";
import { c04 } from "./concepts/c04-double-angles.ts";
import { c05 } from "./concepts/c05-half-angles.ts";
import { c06 } from "./concepts/c06-triple-angles.ts";
import { c07 } from "./concepts/c07-angles-18-and-36.ts";
import { c08 } from "./concepts/c08-sum-to-product.ts";
import { c09 } from "./concepts/c09-product-to-sum.ts";
import { c10 } from "./concepts/c10-angles-of-a-triangle.ts";
import { graph } from "./graph.ts";

export const compoundAndMultipleAngles: Chapter = {
  slug: "compound-and-multiple-angles",
  title: "Trigonometry – II",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
