import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-respiration-atp.ts";
import { c02 } from "./concepts/c02-glycolysis.ts";
import { c03 } from "./concepts/c03-krebs-cycle.ts";
import { c04 } from "./concepts/c04-electron-transport.ts";
import { c05 } from "./concepts/c05-atp-balance-rq.ts";
import { c06 } from "./concepts/c06-anaerobic-fermentation.ts";
import { c07 } from "./concepts/c07-stepwise-amphibolic.ts";
import { graph } from "./graph.ts";

export const respirationEnergyTransfer: Chapter = {
  slug: "respiration-energy-transfer",
  title: "Respiration and Energy Transfer",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XI (PLAN.md "Std XI and XII Biology").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07],
};
