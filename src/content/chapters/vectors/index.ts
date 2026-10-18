import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-vectors-in-space.ts";
import { c02 } from "./concepts/c02-vector-algebra.ts";
import { c03 } from "./concepts/c03-collinear-and-coplanar.ts";
import { c04 } from "./concepts/c04-section-formula.ts";
import { c05 } from "./concepts/c05-dot-product.ts";
import { c06 } from "./concepts/c06-projection.ts";
import { c07 } from "./concepts/c07-direction-cosines.ts";
import { c08 } from "./concepts/c08-cross-product.ts";
import { c09 } from "./concepts/c09-cross-product-geometry.ts";
import { c10 } from "./concepts/c10-scalar-triple-product.ts";
import { c11 } from "./concepts/c11-volume-and-coplanarity.ts";
import { c12 } from "./concepts/c12-vector-triple-product.ts";
import { c13 } from "./concepts/c13-triple-product-identities.ts";
import { graph } from "./graph.ts";

export const vectors: Chapter = {
  slug: "vectors",
  title: "Vectors",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13],
};
