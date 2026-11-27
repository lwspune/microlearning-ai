import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-mendel-terms.ts";
import { c02 } from "./concepts/c02-monohybrid-cross.ts";
import { c03 } from "./concepts/c03-dihybrid-cross.ts";
import { c04 } from "./concepts/c04-test-cross.ts";
import { c05 } from "./concepts/c05-incomplete-codominance.ts";
import { c06 } from "./concepts/c06-multiple-alleles-pleiotropy.ts";
import { c07 } from "./concepts/c07-chromosomes.ts";
import { c08 } from "./concepts/c08-linkage-crossing-over.ts";
import { c09 } from "./concepts/c09-sex-determination.ts";
import { c10 } from "./concepts/c10-sex-linked-inheritance.ts";
import { c11 } from "./concepts/c11-genetic-disorders.ts";
import { graph } from "./graph.ts";

export const inheritanceAndVariation: Chapter = {
  slug: "inheritance-and-variation",
  title: "Inheritance and Variation",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11],
};
