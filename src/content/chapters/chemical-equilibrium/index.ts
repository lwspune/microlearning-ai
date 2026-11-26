import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-dynamic-equilibrium.ts";
import { c02 } from "./concepts/c02-equilibrium-constant.ts";
import { c03 } from "./concepts/c03-kp-and-kc.ts";
import { c04 } from "./concepts/c04-heterogeneous-equilibria.ts";
import { c05 } from "./concepts/c05-using-k.ts";
import { c06 } from "./concepts/c06-le-chatelier.ts";
import { c07 } from "./concepts/c07-haber-process.ts";
import { graph } from "./graph.ts";

export const chemicalEquilibrium: Chapter = {
  slug: "chemical-equilibrium",
  title: "Chemical Equilibrium",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
