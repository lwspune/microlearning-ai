import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-gauss-law.ts";
import { c02 } from "./concepts/c02-field-sphere.ts";
import { c03 } from "./concepts/c03-field-line.ts";
import { c04 } from "./concepts/c04-field-sheet.ts";
import { c05 } from "./concepts/c05-electric-potential.ts";
import { c06 } from "./concepts/c06-potential-gradient.ts";
import { c07 } from "./concepts/c07-dipole-potential.ts";
import { c08 } from "./concepts/c08-potential-energy.ts";
import { c09 } from "./concepts/c09-dipole-in-field.ts";
import { c10 } from "./concepts/c10-conductors-dielectrics.ts";
import { c11 } from "./concepts/c11-capacitance.ts";
import { c12 } from "./concepts/c12-capacitor-combinations.ts";
import { c13 } from "./concepts/c13-capacitor-dielectric.ts";
import { c14 } from "./concepts/c14-capacitor-energy.ts";
import { graph } from "./graph.ts";

export const electrostatics12: Chapter = {
  slug: "electrostatics-12",
  title: "Electrostatics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14],
};
