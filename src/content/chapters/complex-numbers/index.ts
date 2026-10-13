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
import { c12 } from "./concepts/c12-modulus-rules.ts";
import { c13 } from "./concepts/c13-triangle-inequality.ts";
import { c14 } from "./concepts/c14-argument.ts";
import { c15 } from "./concepts/c15-polar-form.ts";
import { c16 } from "./concepts/c16-polar-multiply-divide.ts";
import { c17 } from "./concepts/c17-de-moivre.ts";
import { c18 } from "./concepts/c18-rotation.ts";
import { c19 } from "./concepts/c19-quadratic-complex-roots.ts";
import { c20 } from "./concepts/c20-cube-roots-of-unity.ts";
import { c21 } from "./concepts/c21-using-omega.ts";
import { c22 } from "./concepts/c22-nth-roots-of-unity.ts";
import { c23 } from "./concepts/c23-polynomial-at-complex-x.ts";
import { c24 } from "./concepts/c24-circle-locus.ts";
import { c25 } from "./concepts/c25-perpendicular-bisector.ts";
import { c26 } from "./concepts/c26-algebraic-loci.ts";
import { c27 } from "./concepts/c27-argument-loci.ts";
import { c28 } from "./concepts/c28-conic-loci.ts";
import { c29 } from "./concepts/c29-greatest-least-modulus.ts";
import { c30 } from "./concepts/c30-regions-areas.ts";
import { graph } from "./graph.ts";

export const complexNumbers: Chapter = {
  slug: "complex-numbers",
  title: "Complex Numbers",
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30],
};
