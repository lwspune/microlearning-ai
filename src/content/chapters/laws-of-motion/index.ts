import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-newtons-laws.ts";
import { c02 } from "./concepts/c02-types-of-forces.ts";
import { c03 } from "./concepts/c03-work-energy.ts";
import { c04 } from "./concepts/c04-momentum-impulse.ts";
import { c05 } from "./concepts/c05-collisions.ts";
import { c06 } from "./concepts/c06-centre-of-mass.ts";
import { c07 } from "./concepts/c07-torque-equilibrium.ts";
import { c08 } from "./concepts/c08-potential-energy.ts";
import { graph } from "./graph.ts";

export const lawsOfMotion: Chapter = {
  slug: "laws-of-motion",
  title: "Laws of Motion",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
