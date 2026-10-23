import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-cuboid-and-cube.ts";
import { c02 } from "./concepts/c02-cylinder.ts";
import { c03 } from "./concepts/c03-cone-surface-area.ts";
import { c04 } from "./concepts/c04-cone-volume.ts";
import { c05 } from "./concepts/c05-sphere-and-hemisphere.ts";
import { graph } from "./graph.ts";

export const surfaceAreaVolume9: Chapter = {
  slug: "surface-area-volume-9",
  title: "Surface Area and Volume",
  group: "school",
  subject: "maths",
  // Balbharati Std IX Part 2 (PLAN.md "Std IX and X Maths").
  standard: 9,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
