import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-neural-tissue.ts";
import { c02 } from "./concepts/c02-nerve-impulse-synapse.ts";
import { c03 } from "./concepts/c03-nervous-systems-animals.ts";
import { c04 } from "./concepts/c04-human-brain.ts";
import { c05 } from "./concepts/c05-cranial-nerves-reflex.ts";
import { c06 } from "./concepts/c06-autonomic-nervous-system.ts";
import { c07 } from "./concepts/c07-senses-disorders.ts";
import { c08 } from "./concepts/c08-hormone-action.ts";
import { c09 } from "./concepts/c09-pituitary-thyroid.ts";
import { c10 } from "./concepts/c10-adrenal-pancreas-gonads.ts";
import { graph } from "./graph.ts";

export const controlCoordination: Chapter = {
  slug: "control-coordination",
  title: "Control and Coordination",
  group: "school",
  subject: "biology",
  // Balbharati Biology Std XII (PLAN.md "Std XI and XII Biology").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10],
};
