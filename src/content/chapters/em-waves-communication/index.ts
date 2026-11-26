import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-em-waves.ts";
import { c02 } from "./concepts/c02-em-spectrum.ts";
import { c03 } from "./concepts/c03-em-propagation.ts";
import { c04 } from "./concepts/c04-communication-system.ts";
import { c05 } from "./concepts/c05-modulation.ts";
import { c06 } from "./concepts/c06-displacement-current.ts";
import { c07 } from "./concepts/c07-em-wave-energy.ts";
import { graph } from "./graph.ts";

export const emWavesCommunication: Chapter = {
  slug: "em-waves-communication",
  title: "Electromagnetic Waves and Communication System",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
