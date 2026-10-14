import type { Chapter } from "../types.ts";
import { complexNumbers } from "./complex-numbers/index.ts";
import { linearProgramming } from "./linear-programming/index.ts";

export const chapters: Chapter[] = [complexNumbers, linearProgramming];
