import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classes-names-amines.ts";
import { c02 } from "./concepts/c02-preparing-amines.ts";
import { c03 } from "./concepts/c03-physical-properties-amines.ts";
import { c04 } from "./concepts/c04-basicity-of-amines.ts";
import { c05 } from "./concepts/c05-reactions-of-amines.ts";
import { c06 } from "./concepts/c06-aniline-substitution.ts";
import { c07 } from "./concepts/c07-diazonium-salts.ts";
import { graph } from "./graph.ts";

export const amines: Chapter = {
  slug: "amines",
  title: "Amines",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
