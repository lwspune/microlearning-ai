import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-soil-water.ts";
import { c02 } from "./concepts/c02-diffusion-osmosis.ts";
import { c03 } from "./concepts/c03-dpd-water-potential.ts";
import { c04 } from "./concepts/c04-root-absorption.ts";
import { c05 } from "./concepts/c05-transpiration.ts";
import { c06 } from "./concepts/c06-stomata.ts";
import { c07 } from "./concepts/c07-ascent-of-sap.ts";
import { c08 } from "./concepts/c08-minerals-food-transport.ts";
import { graph } from "./graph.ts";

export const plantWaterRelation: Chapter = {
  slug: "plant-water-relation",
  title: "Plant Water Relation",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
