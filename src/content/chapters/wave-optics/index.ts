import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-wavefronts.ts";
import { c02 } from "./concepts/c02-reflection-huygens.ts";
import { c03 } from "./concepts/c03-refraction-huygens.ts";
import { c04 } from "./concepts/c04-optical-path.ts";
import { c05 } from "./concepts/c05-doppler-light.ts";
import { c06 } from "./concepts/c06-polarization-malus.ts";
import { c07 } from "./concepts/c07-brewster.ts";
import { c08 } from "./concepts/c08-coherent-sources.ts";
import { c09 } from "./concepts/c09-young-double-slit.ts";
import { c10 } from "./concepts/c10-fringe-intensity.ts";
import { c11 } from "./concepts/c11-fringe-shift.ts";
import { c12 } from "./concepts/c12-biprism.ts";
import { c13 } from "./concepts/c13-single-slit.ts";
import { c14 } from "./concepts/c14-central-maximum.ts";
import { c15 } from "./concepts/c15-resolving-power.ts";
import { graph } from "./graph.ts";

export const waveOptics: Chapter = {
  slug: "wave-optics",
  title: "Wave Optics",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XII (PLAN.md "Std XI and XII Physics").
  standard: 12,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15],
};
