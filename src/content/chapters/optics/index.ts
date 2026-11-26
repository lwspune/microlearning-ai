import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-nature-of-light.ts";
import { c02 } from "./concepts/c02-mirrors.ts";
import { c03 } from "./concepts/c03-refraction.ts";
import { c04 } from "./concepts/c04-total-internal-reflection.ts";
import { c05 } from "./concepts/c05-lenses.ts";
import { c06 } from "./concepts/c06-prism-dispersion.ts";
import { c07 } from "./concepts/c07-lens-defects.ts";
import { c08 } from "./concepts/c08-optical-instruments.ts";
import { graph } from "./graph.ts";

export const optics: Chapter = {
  slug: "optics",
  title: "Optics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
