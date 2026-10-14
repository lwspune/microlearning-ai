import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-roster-and-set-builder.ts";
import { c02 } from "./concepts/c02-subsets-and-power-set.ts";
import { c03 } from "./concepts/c03-union-and-intersection.ts";
import { c04 } from "./concepts/c04-difference-and-complement.ts";
import { c05 } from "./concepts/c05-de-morgans-laws.ts";
import { c06 } from "./concepts/c06-counting-two-sets.ts";
import { c07 } from "./concepts/c07-counting-three-sets.ts";
import { c08 } from "./concepts/c08-least-and-greatest-overlap.ts";
import { c09 } from "./concepts/c09-interval-notation.ts";
import { c10 } from "./concepts/c10-operations-on-intervals.ts";
import { c11 } from "./concepts/c11-inequalities-as-intervals.ts";
import { c12 } from "./concepts/c12-cartesian-product.ts";
import { c13 } from "./concepts/c13-relation-domain-range.ts";
import { c14 } from "./concepts/c14-counting-relations.ts";
import { c15 } from "./concepts/c15-reflexive-symmetric-transitive.ts";
import { c16 } from "./concepts/c16-equivalence-relations.ts";
import { graph } from "./graph.ts";

export const setsAndRelations: Chapter = {
  slug: "sets-and-relations",
  title: "Sets and Relations",
  group: "school",
  subject: "maths",
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16],
};
