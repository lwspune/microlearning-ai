import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ideal-gas.ts";
import { c02 } from "./concepts/c02-mean-free-path.ts";
import { c03 } from "./concepts/c03-gas-pressure.ts";
import { c04 } from "./concepts/c04-rms-speed.ts";
import { c05 } from "./concepts/c05-kinetic-energy-temperature.ts";
import { c06 } from "./concepts/c06-equipartition.ts";
import { c07 } from "./concepts/c07-specific-heats.ts";
import { c08 } from "./concepts/c08-absorption-reflection-transmission.ts";
import { graph } from "./graph.ts";

export const kineticTheory: Chapter = {
  slug: "kinetic-theory",
  title: "Kinetic Theory of Gases and Radiation",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
