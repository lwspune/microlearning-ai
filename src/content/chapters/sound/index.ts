import type { Chapter } from "../../types.ts";
import { c01 } from "./concepts/c01-wave-basics.ts";
import { c02 } from "./concepts/c02-wave-speed.ts";
import { c03 } from "./concepts/c03-newton-laplace.ts";
import { c04 } from "./concepts/c04-echo-acoustics.ts";
import { c05 } from "./concepts/c05-doppler-effect.ts";
import { c06 } from "./concepts/c06-sound-qualities.ts";
import { graph } from "./graph.ts";

export const sound: Chapter = {
  slug: "sound",
  title: "Sound",
  group: "school",
  subject: "physics",
  // Balbharati Physics Std XI (PLAN.md "Std XI and XII Physics").
  standard: 11,
  graph,
  concepts: [c01, c02, c03, c04, c05, c06],
};
