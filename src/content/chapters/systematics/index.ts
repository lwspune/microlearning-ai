import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-nomenclature.ts";
import { c02 } from "./concepts/c02-five-kingdoms.ts";
import { c03 } from "./concepts/c03-kingdom-monera.ts";
import { c04 } from "./concepts/c04-kingdom-protista.ts";
import { c05 } from "./concepts/c05-kingdom-fungi.ts";
import { c06 } from "./concepts/c06-viruses-viroids.ts";
import { graph } from "./graph.ts";

export const systematics: Chapter = {
  slug: "systematics",
  title: "Systematics of Living Organisms",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
