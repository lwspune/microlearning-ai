import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cockroach-body.ts";
import { c02 } from "./concepts/c02-mouthparts-foregut.ts";
import { c03 } from "./concepts/c03-midgut-hindgut.ts";
import { c04 } from "./concepts/c04-tracheal-respiration.ts";
import { c05 } from "./concepts/c05-nervous-system-eye.ts";
import { c06 } from "./concepts/c06-open-circulation.ts";
import { c07 } from "./concepts/c07-female-reproduction.ts";
import { graph } from "./graph.ts";

export const cockroach: Chapter = {
  slug: "cockroach",
  title: "Study of Animal Type: Cockroach",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
