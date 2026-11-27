import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-restriction-enzymes.ts";
import { c02 } from "./concepts/c02-vectors-cloning.ts";
import { c03 } from "./concepts/c03-pcr.ts";
import { c04 } from "./concepts/c04-recombinant-proteins.ts";
import { c05 } from "./concepts/c05-transgenic-plants.ts";
import { c06 } from "./concepts/c06-transgenic-animals-gene-therapy.ts";
import { c07 } from "./concepts/c07-biopatent-biopiracy.ts";
import { graph } from "./graph.ts";

export const biotechnology: Chapter = {
  slug: "biotechnology",
  title: "Biotechnology",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
