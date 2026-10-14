import type { Chapter } from "../types.ts";
import { binomialTheorem } from "./binomial-theorem/index.ts";
import { complexNumbers } from "./complex-numbers/index.ts";
import { determinantsAndMatrices } from "./determinants-and-matrices/index.ts";
import { linearProgramming } from "./linear-programming/index.ts";
import { permutationsAndCombinations } from "./permutations-and-combinations/index.ts";
import { sequencesAndSeries } from "./sequences-and-series/index.ts";
import { setsAndRelations } from "./sets-and-relations/index.ts";

export const chapters: Chapter[] = [complexNumbers, linearProgramming, setsAndRelations, sequencesAndSeries, permutationsAndCombinations, binomialTheorem, determinantsAndMatrices];
