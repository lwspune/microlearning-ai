import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-temperature-scales.ts";
import { c02 } from "./concepts/c02-ideal-gas.ts";
import { c03 } from "./concepts/c03-linear-expansion.ts";
import { c04 } from "./concepts/c04-area-volume-expansion.ts";
import { c05 } from "./concepts/c05-specific-heat.ts";
import { c06 } from "./concepts/c06-change-of-state.ts";
import { c07 } from "./concepts/c07-heat-transfer.ts";
import { c08 } from "./concepts/c08-newtons-cooling.ts";
import { c09 } from "./concepts/c09-thermal-stress.ts";
import { graph } from "./graph.ts";

export const thermalProperties: Chapter = {
  slug: "thermal-properties",
  title: "Thermal Properties of Matter",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
