import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ac-rms.ts";
import { c02 } from "./concepts/c02-phasors.ts";
import { c03 } from "./concepts/c03-resistor-ac.ts";
import { c04 } from "./concepts/c04-inductor-ac.ts";
import { c05 } from "./concepts/c05-capacitor-ac.ts";
import { c06 } from "./concepts/c06-lcr-impedance.ts";
import { c07 } from "./concepts/c07-series-resonance.ts";
import { c08 } from "./concepts/c08-parallel-resonance.ts";
import { c09 } from "./concepts/c09-ac-power.ts";
import { c10 } from "./concepts/c10-lc-oscillations.ts";
import { graph } from "./graph.ts";

export const acCircuits: Chapter = {
  slug: "ac-circuits",
  title: "AC Circuits",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
