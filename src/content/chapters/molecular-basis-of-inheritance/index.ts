import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-dna-genetic-material.ts";
import { c02 } from "./concepts/c02-dna-rna-structure.ts";
import { c03 } from "./concepts/c03-dna-packaging.ts";
import { c04 } from "./concepts/c04-dna-replication.ts";
import { c05 } from "./concepts/c05-transcription.ts";
import { c06 } from "./concepts/c06-genetic-code.ts";
import { c07 } from "./concepts/c07-translation.ts";
import { c08 } from "./concepts/c08-lac-operon.ts";
import { c09 } from "./concepts/c09-genome-hgp.ts";
import { c10 } from "./concepts/c10-dna-fingerprinting.ts";
import { graph } from "./graph.ts";

export const molecularBasisOfInheritance: Chapter = {
  slug: "molecular-basis-of-inheritance",
  title: "Molecular Basis of Inheritance",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
