import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-ideal-gas.ts";
import { c02 } from "./concepts/c02-mean-free-path.ts";
import { c03 } from "./concepts/c03-gas-pressure.ts";
import { graph } from "./graph.ts";

export const kineticTheory: Chapter = {
  slug: "kinetic-theory",
  title: "Kinetic Theory of Gases and Radiation",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03],
};
