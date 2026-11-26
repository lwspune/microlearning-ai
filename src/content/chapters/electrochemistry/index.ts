import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-conductivity.ts";
import { c02 } from "./concepts/c02-molar-conductivity.ts";
import { c03 } from "./concepts/c03-kohlrausch-law.ts";
import { c04 } from "./concepts/c04-electrolysis.ts";
import { c05 } from "./concepts/c05-faraday-laws.ts";
import { c06 } from "./concepts/c06-galvanic-cells.ts";
import { c07 } from "./concepts/c07-electrode-potentials.ts";
import { c08 } from "./concepts/c08-nernst-equation.ts";
import { c09 } from "./concepts/c09-cell-gibbs-energy.ts";
import { c10 } from "./concepts/c10-commercial-cells.ts";
import { c11 } from "./concepts/c11-corrosion.ts";
import { graph } from "./graph.ts";

export const electrochemistry: Chapter = {
  slug: "electrochemistry",
  title: "Electrochemistry",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
