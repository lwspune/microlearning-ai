import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-surface-area-and-volume.ts";
import { c02 } from "./concepts/c02-melting-and-recasting.ts";
import { c03 } from "./concepts/c03-combined-solids.ts";
import { c04 } from "./concepts/c04-frustum.ts";
import { c05 } from "./concepts/c05-arc-length.ts";
import { c06 } from "./concepts/c06-sector-area.ts";
import { c07 } from "./concepts/c07-segment-area.ts";
import { c08 } from "./concepts/c08-combined-figures.ts";
import { graph } from "./graph.ts";

export const mensuration10: Chapter = {
  slug: "mensuration-10",
  title: "Mensuration",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 2 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
