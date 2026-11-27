import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cell-types.ts";
import { c02 } from "./concepts/c02-cell-membrane.ts";
import { c03 } from "./concepts/c03-cell-wall.ts";
import { c04 } from "./concepts/c04-endomembrane-system.ts";
import { c05 } from "./concepts/c05-mitochondria-plastids.ts";
import { c06 } from "./concepts/c06-nucleus.ts";
import { graph } from "./graph.ts";

export const cellStructure: Chapter = {
  slug: "cell-structure",
  title: "Cell Structure and Organization",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
