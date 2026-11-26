import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-photon-energy.ts";
import { c02 } from "./concepts/c02-photon-momentum.ts";
import { c03 } from "./concepts/c03-photoelectric-effect.ts";
import { c04 } from "./concepts/c04-einstein-equation.ts";
import { c05 } from "./concepts/c05-stopping-potential-graph.ts";
import { c06 } from "./concepts/c06-de-broglie.ts";
import { c07 } from "./concepts/c07-accelerated-particles.ts";
import { c08 } from "./concepts/c08-davisson-germer.ts";
import { graph } from "./graph.ts";

export const dualNature: Chapter = {
  slug: "dual-nature",
  title: "Dual Nature of Radiation and Matter",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
