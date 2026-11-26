import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-magnetic-force-charge.ts";
import { c02 } from "./concepts/c02-circular-motion-field.ts";
import { c03 } from "./concepts/c03-cyclotron.ts";
import { c04 } from "./concepts/c04-force-on-wire.ts";
import { c05 } from "./concepts/c05-straight-wire-field.ts";
import { c06 } from "./concepts/c06-loop-field.ts";
import { c07 } from "./concepts/c07-parallel-currents.ts";
import { c08 } from "./concepts/c08-magnetic-dipole-moment.ts";
import { c09 } from "./concepts/c09-torque-galvanometer.ts";
import { c10 } from "./concepts/c10-ampere-law.ts";
import { c11 } from "./concepts/c11-solenoid-toroid.ts";
import { graph } from "./graph.ts";

export const magneticFieldsCurrent: Chapter = {
  slug: "magnetic-fields-current",
  title: "Magnetic Fields due to Electric Current",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
