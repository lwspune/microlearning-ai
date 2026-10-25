import type { ConceptTranslation } from "../../../types.ts";
import { c01 as hiC01 } from "./hi/c01.ts";
import { c02 as hiC02 } from "./hi/c02.ts";
import { c03 as hiC03 } from "./hi/c03.ts";
import { c01 as mrC01 } from "./mr/c01.ts";
import { c02 as mrC02 } from "./mr/c02.ts";
import { c03 as mrC03 } from "./mr/c03.ts";

/** Hindi and Marathi lessons (AUTHORING.md, Translations). */
export const translations: ConceptTranslation[] = [hiC01, hiC02, hiC03, mrC01, mrC02, mrC03];
