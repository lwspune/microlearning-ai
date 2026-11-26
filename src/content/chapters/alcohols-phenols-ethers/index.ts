import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-classes-names-alcohols.ts";
import { c02 } from "./concepts/c02-preparing-alcohols.ts";
import { c03 } from "./concepts/c03-preparing-phenols.ts";
import { c04 } from "./concepts/c04-physical-properties-alcohols.ts";
import { c05 } from "./concepts/c05-acidity-alcohols-phenols.ts";
import { c06 } from "./concepts/c06-reactions-of-alcohols.ts";
import { c07 } from "./concepts/c07-reactions-of-phenol.ts";
import { c08 } from "./concepts/c08-ethers.ts";
import { graph } from "./graph.ts";

export const alcoholsPhenolsEthers: Chapter = {
  slug: "alcohols-phenols-ethers",
  title: "Alcohols, Phenols and Ethers",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XII (PLAN.md "Std XI and XII Chemistry").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08],
};
