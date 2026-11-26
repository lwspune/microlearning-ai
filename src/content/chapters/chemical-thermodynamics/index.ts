import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-thermodynamic-terms.ts";
import { c02 } from "./concepts/c02-pv-work.ts";
import { c03 } from "./concepts/c03-maximum-work.ts";
import { c04 } from "./concepts/c04-first-law.ts";
import { c05 } from "./concepts/c05-enthalpy.ts";
import { c06 } from "./concepts/c06-phase-change-enthalpies.ts";
import { c07 } from "./concepts/c07-enthalpy-of-formation.ts";
import { c08 } from "./concepts/c08-hess-law.ts";
import { c09 } from "./concepts/c09-bond-enthalpies.ts";
import { c10 } from "./concepts/c10-entropy.ts";
import { c11 } from "./concepts/c11-gibbs-energy.ts";
import { c12 } from "./concepts/c12-gibbs-and-equilibrium.ts";
import { graph } from "./graph.ts";

export const chemicalThermodynamics: Chapter = {
  slug: "chemical-thermodynamics",
  title: "Chemical Thermodynamics",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
