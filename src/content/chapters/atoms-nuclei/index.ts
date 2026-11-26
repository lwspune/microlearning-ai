import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-atomic-models.ts";
import { c02 } from "./concepts/c02-bohr-postulates.ts";
import { c03 } from "./concepts/c03-bohr-radius-speed.ts";
import { c04 } from "./concepts/c04-bohr-energy.ts";
import { c05 } from "./concepts/c05-hydrogen-spectrum.ts";
import { c06 } from "./concepts/c06-nucleus-size.ts";
import { c07 } from "./concepts/c07-binding-energy.ts";
import { c08 } from "./concepts/c08-radioactive-decays.ts";
import { c09 } from "./concepts/c09-decay-law.ts";
import { c10 } from "./concepts/c10-half-life.ts";
import { c11 } from "./concepts/c11-fission-fusion.ts";
import { c12 } from "./concepts/c12-de-broglie-bohr.ts";
import { graph } from "./graph.ts";

export const atomsNuclei: Chapter = {
  slug: "atoms-nuclei",
  title: "Structure of Atoms and Nuclei",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12],
};
