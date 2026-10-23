import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-system-equilibrium.ts";
import { c02 } from "./concepts/c02-internal-energy.ts";
import { c03 } from "./concepts/c03-work-pv.ts";
import { c04 } from "./concepts/c04-first-law.ts";
import { c05 } from "./concepts/c05-isobaric-isochoric.ts";
import { c06 } from "./concepts/c06-isothermal.ts";
import { c07 } from "./concepts/c07-adiabatic.ts";
import { c08 } from "./concepts/c08-cyclic-process.ts";
import { c09 } from "./concepts/c09-process-diagrams.ts";
import { c10 } from "./concepts/c10-heat-engines.ts";
import { graph } from "./graph.ts";

export const thermodynamics: Chapter = {
  slug: "thermodynamics",
  title: "Thermodynamics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
