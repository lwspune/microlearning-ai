import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-modern-periodic-table.ts";
import { c02 } from "./concepts/c02-position-from-configuration.ts";
import { c03 } from "./concepts/c03-block-characteristics.ts";
import { c04 } from "./concepts/c04-atomic-ionic-radii.ts";
import { c05 } from "./concepts/c05-ionisation-enthalpy.ts";
import { c06 } from "./concepts/c06-electron-gain-electronegativity.ts";
import { c07 } from "./concepts/c07-metallic-character-oxides.ts";
import { graph } from "./graph.ts";

export const periodicTable: Chapter = {
  slug: "periodic-table",
  title: "Modern Periodic Table",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
