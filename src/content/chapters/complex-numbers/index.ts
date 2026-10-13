import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-imaginary-unit.ts";
import { c02 } from "./concepts/c02-powers-of-i.ts";
import { c03 } from "./concepts/c03-standard-form.ts";
import { c04 } from "./concepts/c04-arithmetic.ts";
import { c05 } from "./concepts/c05-conjugate.ts";
import { c06 } from "./concepts/c06-division.ts";
import { c07 } from "./concepts/c07-purely-real-imaginary.ts";
import { c08 } from "./concepts/c08-solving-for-z.ts";
import { c09 } from "./concepts/c09-square-root.ts";
import { c10 } from "./concepts/c10-argand-plane.ts";
import { c11 } from "./concepts/c11-modulus-distance.ts";
import { c14 } from "./concepts/c14-argument.ts";
import { c25 } from "./concepts/c25-perpendicular-bisector.ts";
import { graph } from "./graph.ts";

export const complexNumbers: Chapter = {
  slug: "complex-numbers",
  title: "Complex Numbers",
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c14, c25],
};
