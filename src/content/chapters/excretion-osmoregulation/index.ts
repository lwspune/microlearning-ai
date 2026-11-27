import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-nitrogenous-wastes.ts";
import { c02 } from "./concepts/c02-human-excretory-system.ts";
import { c03 } from "./concepts/c03-urine-formation.ts";
import { c04 } from "./concepts/c04-urine-concentration-composition.ts";
import { c05 } from "./concepts/c05-osmoregulation.ts";
import { c06 } from "./concepts/c06-excretory-disorders.ts";
import { graph } from "./graph.ts";

export const excretionOsmoregulation: Chapter = {
  slug: "excretion-osmoregulation",
  title: "Excretion and Osmoregulation",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
