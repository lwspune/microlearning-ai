import type { Chapter } from "../types.ts";
import { angleMeasurement } from "./angle-measurement/index.ts";
import { binomialTheorem } from "./binomial-theorem/index.ts";
import { circle } from "./circle/index.ts";
import { complexNumbers } from "./complex-numbers/index.ts";
import { compoundAndMultipleAngles } from "./compound-and-multiple-angles/index.ts";
import { conicSections } from "./conic-sections/index.ts";
import { determinantsAndMatrices } from "./determinants-and-matrices/index.ts";
import { linearProgramming } from "./linear-programming/index.ts";
import { permutationsAndCombinations } from "./permutations-and-combinations/index.ts";
import { sequencesAndSeries } from "./sequences-and-series/index.ts";
import { setsAndRelations } from "./sets-and-relations/index.ts";
import { straightLine } from "./straight-line/index.ts";
import { trigonometricFunctions } from "./trigonometric-functions/index.ts";

export const chapters: Chapter[] = [complexNumbers, linearProgramming, setsAndRelations, sequencesAndSeries, permutationsAndCombinations, binomialTheorem, determinantsAndMatrices, angleMeasurement, trigonometricFunctions, compoundAndMultipleAngles, straightLine, circle, conicSections];
