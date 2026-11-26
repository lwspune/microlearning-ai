import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-keplers-laws.ts";
import { c02 } from "./concepts/c02-universal-gravitation.ts";
import { c03 } from "./concepts/c03-acceleration-g.ts";
import { c04 } from "./concepts/c04-variation-g.ts";
import { c05 } from "./concepts/c05-gravitational-potential.ts";
import { c06 } from "./concepts/c06-satellites.ts";
import { c07 } from "./concepts/c07-escape-binding.ts";
import { graph } from "./graph.ts";

export const gravitation: Chapter = {
  slug: "gravitation",
  title: "Gravitation",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
