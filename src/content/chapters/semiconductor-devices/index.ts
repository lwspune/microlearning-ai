import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-pn-junction.ts";
import { c02 } from "./concepts/c02-rectifiers.ts";
import { c03 } from "./concepts/c03-filters-ripple.ts";
import { c04 } from "./concepts/c04-zener-diode.ts";
import { c05 } from "./concepts/c05-optoelectronic-devices.ts";
import { c06 } from "./concepts/c06-bjt-basics.ts";
import { c07 } from "./concepts/c07-alpha-beta.ts";
import { c08 } from "./concepts/c08-transistor-amplifier.ts";
import { c09 } from "./concepts/c09-basic-gates.ts";
import { c10 } from "./concepts/c10-combination-gates.ts";
import { graph } from "./graph.ts";

export const semiconductorDevices: Chapter = {
  slug: "semiconductor-devices",
  title: "Semiconductor Devices",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
