import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-respiratory-surfaces.ts";
import { c02 } from "./concepts/c02-respiratory-tract.ts";
import { c03 } from "./concepts/c03-breathing-lung-volumes.ts";
import { c04 } from "./concepts/c04-gas-transport-disorders.ts";
import { c05 } from "./concepts/c05-circulation-types.ts";
import { c06 } from "./concepts/c06-blood-plasma-rbc-platelets.ts";
import { c07 } from "./concepts/c07-wbc-lymph.ts";
import { c08 } from "./concepts/c08-heart-structure.ts";
import { c09 } from "./concepts/c09-cardiac-cycle-ecg.ts";
import { c10 } from "./concepts/c10-vessels-blood-pressure.ts";
import { graph } from "./graph.ts";

export const respirationCirculation: Chapter = {
  slug: "respiration-circulation",
  title: "Respiration and Circulation",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
