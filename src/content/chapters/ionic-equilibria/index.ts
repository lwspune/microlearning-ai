import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-acid-base-theories.ts";
import { c02 } from "./concepts/c02-ostwald-dilution-law.ts";
import { c03 } from "./concepts/c03-ph-scale.ts";
import { c04 } from "./concepts/c04-ph-weak-acids-bases.ts";
import { c05 } from "./concepts/c05-hydrolysis-of-salts.ts";
import { c06 } from "./concepts/c06-common-ion-effect.ts";
import { c07 } from "./concepts/c07-buffer-solutions.ts";
import { c08 } from "./concepts/c08-solubility-product.ts";
import { c09 } from "./concepts/c09-precipitation.ts";
import { graph } from "./graph.ts";

export const ionicEquilibria: Chapter = {
  slug: "ionic-equilibria",
  title: "Ionic Equilibria",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
