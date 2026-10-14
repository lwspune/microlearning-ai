import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-value-of-a-determinant.ts";
import { c02 } from "./concepts/c02-minors-and-cofactors.ts";
import { c03 } from "./concepts/c03-determinant-properties.ts";
import { c04 } from "./concepts/c04-cramers-rule.ts";
import { c05 } from "./concepts/c05-consistency.ts";
import { c06 } from "./concepts/c06-area-and-collinearity.ts";
import { c07 } from "./concepts/c07-types-of-matrices.ts";
import { c08 } from "./concepts/c08-matrix-addition-scalar.ts";
import { c09 } from "./concepts/c09-matrix-multiplication.ts";
import { c10 } from "./concepts/c10-multiplication-properties.ts";
import { c11 } from "./concepts/c11-transpose.ts";
import { c12 } from "./concepts/c12-symmetric-and-skew.ts";
import { graph } from "./graph.ts";

export const determinantsAndMatrices: Chapter = {
  slug: "determinants-and-matrices",
  title: "Determinants and Matrices",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
