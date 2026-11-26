import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-magnet-torque-energy.ts";
import { c02 } from "./concepts/c02-oscillating-magnet.ts";
import { c03 } from "./concepts/c03-electron-magnet.ts";
import { c04 } from "./concepts/c04-magnetization.ts";
import { c05 } from "./concepts/c05-magnetic-materials-types.ts";
import { c06 } from "./concepts/c06-curie-law.ts";
import { c07 } from "./concepts/c07-hysteresis.ts";
import { c08 } from "./concepts/c08-magnet-uses.ts";
import { graph } from "./graph.ts";

export const magneticMaterials: Chapter = {
  slug: "magnetic-materials",
  title: "Magnetic Materials",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
