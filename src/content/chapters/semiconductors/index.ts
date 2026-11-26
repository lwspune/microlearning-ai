import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-band-theory.ts";
import { c02 } from "./concepts/c02-intrinsic-semiconductors.ts";
import { c03 } from "./concepts/c03-extrinsic-semiconductors.ts";
import { c04 } from "./concepts/c04-pn-junction-diode.ts";
import { graph } from "./graph.ts";

export const semiconductors: Chapter = {
  slug: "semiconductors",
  title: "Semiconductors",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04],
};
