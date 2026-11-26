import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classes-of-halides.ts";
import { c02 } from "./concepts/c02-naming-halides.ts";
import { c03 } from "./concepts/c03-preparing-halides.ts";
import { c04 } from "./concepts/c04-physical-properties-halides.ts";
import { c05 } from "./concepts/c05-optical-isomerism.ts";
import { c06 } from "./concepts/c06-sn2-mechanism.ts";
import { c07 } from "./concepts/c07-sn1-mechanism.ts";
import { c08 } from "./concepts/c08-substitution-elimination-products.ts";
import { c09 } from "./concepts/c09-haloarenes.ts";
import { c10 } from "./concepts/c10-reactions-with-metals.ts";
import { c11 } from "./concepts/c11-polyhalogen-compounds.ts";
import { graph } from "./graph.ts";

export const halogenDerivatives: Chapter = {
  slug: "halogen-derivatives",
  title: "Halogen Derivatives",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
