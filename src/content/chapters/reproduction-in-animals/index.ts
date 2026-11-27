import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-asexual-reproduction-animals.ts";
import { c02 } from "./concepts/c02-male-reproductive-system.ts";
import { c03 } from "./concepts/c03-female-reproductive-system.ts";
import { c04 } from "./concepts/c04-spermatogenesis.ts";
import { c05 } from "./concepts/c05-oogenesis.ts";
import { c06 } from "./concepts/c06-menstrual-cycle.ts";
import { c07 } from "./concepts/c07-fertilization.ts";
import { c08 } from "./concepts/c08-cleavage-implantation.ts";
import { c09 } from "./concepts/c09-pregnancy-placenta.ts";
import { c10 } from "./concepts/c10-parturition-lactation.ts";
import { c11 } from "./concepts/c11-birth-control.ts";
import { c12 } from "./concepts/c12-infertility-std.ts";
import { graph } from "./graph.ts";

export const reproductionInAnimals: Chapter = {
  slug: "reproduction-in-animals",
  title: "Reproduction in Lower and Higher Animals",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
