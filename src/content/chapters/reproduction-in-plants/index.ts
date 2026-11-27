import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-asexual-reproduction.ts";
import { c02 } from "./concepts/c02-flower-parts.ts";
import { c03 } from "./concepts/c03-microsporogenesis.ts";
import { c04 } from "./concepts/c04-male-gametophyte.ts";
import { c05 } from "./concepts/c05-ovule-megasporogenesis.ts";
import { c06 } from "./concepts/c06-embryo-sac.ts";
import { c07 } from "./concepts/c07-pollination.ts";
import { c08 } from "./concepts/c08-outbreeding-devices.ts";
import { c09 } from "./concepts/c09-double-fertilization.ts";
import { c10 } from "./concepts/c10-endosperm-embryo.ts";
import { c11 } from "./concepts/c11-seed-fruit.ts";
import { c12 } from "./concepts/c12-apomixis-polyembryony.ts";
import { graph } from "./graph.ts";

export const reproductionInPlants: Chapter = {
  slug: "reproduction-in-plants",
  title: "Reproduction in Lower and Higher Plants",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
