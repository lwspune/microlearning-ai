import type { Chapter } from "../../types.ts";
import { c04 } from "./concepts/c04-arithmetic.ts";
import { c05 } from "./concepts/c05-conjugate.ts";
import { c06 } from "./concepts/c06-division.ts";
import { c10 } from "./concepts/c10-argand-plane.ts";
import { c11 } from "./concepts/c11-modulus-distance.ts";
import { c14 } from "./concepts/c14-argument.ts";
import { c25 } from "./concepts/c25-perpendicular-bisector.ts";
import { graph } from "./graph.ts";

export const complexNumbers: Chapter = {
  slug: "complex-numbers",
  title: "Complex Numbers",
  graph,
  concepts: [c04, c05, c06, c10, c11, c14, c25],
};
