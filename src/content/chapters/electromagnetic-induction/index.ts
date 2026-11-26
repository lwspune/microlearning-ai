import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-faraday-law.ts";
import { c02 } from "./concepts/c02-lenz-law.ts";
import { c03 } from "./concepts/c03-stationary-coil-emf.ts";
import { c04 } from "./concepts/c04-motional-emf.ts";
import { c05 } from "./concepts/c05-rotating-conductor.ts";
import { c06 } from "./concepts/c06-generator-back-emf.ts";
import { c07 } from "./concepts/c07-eddy-currents.ts";
import { c08 } from "./concepts/c08-self-inductance.ts";
import { c09 } from "./concepts/c09-inductors-series-parallel.ts";
import { c10 } from "./concepts/c10-inductor-energy.ts";
import { c11 } from "./concepts/c11-mutual-inductance.ts";
import { c12 } from "./concepts/c12-coupling-coefficient.ts";
import { c13 } from "./concepts/c13-transformer.ts";
import { graph } from "./graph.ts";

export const electromagneticInduction: Chapter = {
  slug: "electromagnetic-induction",
  title: "Electromagnetic Induction",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13],
};
