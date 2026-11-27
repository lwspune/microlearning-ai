import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-health-and-disease.ts";
import { c02 } from "./concepts/c02-protozoan-helminth-diseases.ts";
import { c03 } from "./concepts/c03-bacterial-viral-fungal-diseases.ts";
import { c04 } from "./concepts/c04-aids-cancer.ts";
import { c05 } from "./concepts/c05-immunity.ts";
import { c06 } from "./concepts/c06-lymphocytes.ts";
import { c07 } from "./concepts/c07-antibodies-blood-groups.ts";
import { c08 } from "./concepts/c08-drugs-addiction.ts";
import { graph } from "./graph.ts";

export const humanHealthDiseases: Chapter = {
  slug: "human-health-diseases",
  title: "Human Health and Diseases",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
