import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-stress-strain.ts";
import { c02 } from "./concepts/c02-stress-strain-curve.ts";
import { c03 } from "./concepts/c03-youngs-modulus.ts";
import { c04 } from "./concepts/c04-bulk-shear-modulus.ts";
import { c05 } from "./concepts/c05-strain-energy.ts";
import { c06 } from "./concepts/c06-hardness.ts";
import { c07 } from "./concepts/c07-friction.ts";
import { graph } from "./graph.ts";

export const mechanicalPropertiesSolids: Chapter = {
  slug: "mechanical-properties-solids",
  title: "Mechanical Properties of Solids",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
