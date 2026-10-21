import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-sample-space.ts";
import { c02 } from "./concepts/c02-events.ts";
import { c03 } from "./concepts/c03-probability-of-an-event.ts";
import { c04 } from "./concepts/c04-two-coins-and-two-dice.ts";
import { c05 } from "./concepts/c05-playing-cards.ts";
import { graph } from "./graph.ts";

export const probability10: Chapter = {
  slug: "probability-10",
  title: "Probability",
  group: "school",
  subject: "maths",
  // Balbharati Std X Part 1 (PLAN.md "Std IX and X Maths").
  standard: 10,
  graph,
  concepts: [c01, c02, c03, c04, c05],
};
