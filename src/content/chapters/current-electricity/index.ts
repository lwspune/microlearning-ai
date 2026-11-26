import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-junction-law.ts";
import { c02 } from "./concepts/c02-loop-law.ts";
import { c03 } from "./concepts/c03-resistor-networks.ts";
import { c04 } from "./concepts/c04-wheatstone-bridge.ts";
import { c05 } from "./concepts/c05-metre-bridge.ts";
import { c06 } from "./concepts/c06-potentiometer.ts";
import { c07 } from "./concepts/c07-compare-emfs.ts";
import { c08 } from "./concepts/c08-internal-resistance.ts";
import { c09 } from "./concepts/c09-ammeter.ts";
import { c10 } from "./concepts/c10-voltmeter.ts";
import { graph } from "./graph.ts";

export const currentElectricity: Chapter = {
  slug: "current-electricity",
  title: "Current Electricity",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
