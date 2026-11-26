import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-subatomic-particles.ts";
import { c02 } from "./concepts/c02-isotopes-isobars.ts";
import { c03 } from "./concepts/c03-rutherford-model.ts";
import { c04 } from "./concepts/c04-radiation-and-quanta.ts";
import { c05 } from "./concepts/c05-bohr-model.ts";
import { c06 } from "./concepts/c06-quantum-numbers.ts";
import { c07 } from "./concepts/c07-electronic-configuration.ts";
import { c08 } from "./concepts/c08-photoelectric-effect.ts";
import { c09 } from "./concepts/c09-de-broglie-uncertainty.ts";
import { graph } from "./graph.ts";

export const structureOfAtom: Chapter = {
  slug: "structure-of-atom",
  title: "Structure of Atom",
  group: "school",
  subject: "chemistry",
  // Balbharati Chemistry Std XI (PLAN.md "Std XI and XII Chemistry").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09],
};
