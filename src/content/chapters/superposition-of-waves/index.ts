import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-progressive-wave-equation.ts";
import { c02 } from "./concepts/c02-phase-difference.ts";
import { c03 } from "./concepts/c03-reflection-of-waves.ts";
import { c04 } from "./concepts/c04-superposition.ts";
import { c05 } from "./concepts/c05-stationary-waves.ts";
import { c06 } from "./concepts/c06-string-modes.ts";
import { c07 } from "./concepts/c07-string-free-end.ts";
import { c08 } from "./concepts/c08-string-frequency.ts";
import { c09 } from "./concepts/c09-laws-of-strings.ts";
import { c10 } from "./concepts/c10-closed-pipe.ts";
import { c11 } from "./concepts/c11-open-pipe.ts";
import { c12 } from "./concepts/c12-end-correction.ts";
import { c13 } from "./concepts/c13-beats.ts";
import { c14 } from "./concepts/c14-beats-strings-pipes.ts";
import { graph } from "./graph.ts";

export const superpositionOfWaves: Chapter = {
  slug: "superposition-of-waves",
  title: "Superposition of Waves",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14],
};
