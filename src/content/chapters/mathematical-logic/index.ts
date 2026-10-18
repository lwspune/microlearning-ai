import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-statements.ts";
import { c02 } from "./concepts/c02-logical-connectives.ts";
import { c03 } from "./concepts/c03-truth-tables.ts";
import { c04 } from "./concepts/c04-tautology-contradiction.ts";
import { c05 } from "./concepts/c05-logical-equivalence.ts";
import { c06 } from "./concepts/c06-converse-inverse-contrapositive.ts";
import { c07 } from "./concepts/c07-negation.ts";
import { c08 } from "./concepts/c08-quantifiers.ts";
import { c09 } from "./concepts/c09-duality.ts";
import { c10 } from "./concepts/c10-switching-circuits.ts";
import { c11 } from "./concepts/c11-simplifying-circuits.ts";
import { graph } from "./graph.ts";

export const mathematicalLogic: Chapter = {
  slug: "mathematical-logic",
  title: "Mathematical Logic",
  group: "school",
  subject: "maths",
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
