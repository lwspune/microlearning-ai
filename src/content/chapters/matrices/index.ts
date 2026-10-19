import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-elementary-transformations.ts";
import { c02 } from "./concepts/c02-inverse-by-transformations.ts";
import { c03 } from "./concepts/c03-minors-and-cofactors.ts";
import { c04 } from "./concepts/c04-adjoint.ts";
import { c05 } from "./concepts/c05-singular-matrices.ts";
import { c06 } from "./concepts/c06-inverse-by-adjoint.ts";
import { c07 } from "./concepts/c07-inverse-properties.ts";
import { c08 } from "./concepts/c08-matrix-equations.ts";
import { c09 } from "./concepts/c09-inversion-method.ts";
import { c10 } from "./concepts/c10-reduction-method.ts";
import { c11 } from "./concepts/c11-linear-systems-word-problems.ts";
import { c12 } from "./concepts/c12-cayley-hamilton.ts";
import { graph } from "./graph.ts";

export const matrices: Chapter = {
  slug: "matrices",
  title: "Matrices",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
