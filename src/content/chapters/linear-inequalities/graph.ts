import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Linear Inequalities prerequisite graph: NCERT Class 11 Ch.5 as rationalised (one variable only),
 * built for CBSE (PLAN.md "CBSE Maths course", phase 2); the MH Board books have no such chapter.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: PYQ Vault `CBSE Class 11` subtopics.
 */
const S = (sub: string) => `cbse-11/linear-inequalities#${sub}`;
const RULES = S("Inequalities");
const SOLVING = S("Algebraic Solutions of Linear Inequalities in One Variable");

export const graph: GraphNode[] = [
  // One inequality
  {
    id: "C01", slug: "inequality-rules", title: "Inequalities and their rules", group: "One inequality", tier: "core",
    oneLiner: t`Add or subtract anything on both sides; multiply or divide by a negative number and the sign turns round; the answer depends on whether $x$ is natural, an integer or real`,
    prereqs: [], ext: ["interval notation (Sets and Relations)"], sources: [RULES, SOLVING],
  },
  {
    id: "C02", slug: "brackets-and-fractions", title: "Inequalities with brackets and fractions", group: "One inequality", tier: "core",
    oneLiner: t`Open the brackets, clear the fractions with the L.C.M. (a positive number), collect $x$ on one side, and divide last`,
    prereqs: ["C01"], ext: [], sources: [SOLVING],
  },
  {
    id: "C03", slug: "number-line", title: "Solutions on a number line", group: "One inequality", tier: "core", visual: true,
    oneLiner: t`A hollow circle for $<$ or $>$, a filled one for $\le$ or $\ge$, and an arrow towards the solutions`,
    prereqs: ["C02"], ext: [], sources: [SOLVING],
  },

  // Several conditions at once
  {
    id: "C04", slug: "double-inequalities", title: "Double inequalities", group: "Several conditions", tier: "core",
    oneLiner: t`In $a \le px + q < b$ do each step to all three parts; dividing by a negative turns both signs round`,
    prereqs: ["C02"], ext: [], sources: [SOLVING],
  },
  {
    id: "C05", slug: "systems-of-inequalities", title: "Systems of inequalities", group: "Several conditions", tier: "core", visual: true,
    oneLiner: t`Solve each inequality, then keep only the values that satisfy all of them: where their graphs overlap`,
    prereqs: ["C03"], ext: [], sources: [SOLVING],
  },
  {
    id: "C06", slug: "inequality-word-problems", title: "Word problems with inequalities", group: "Several conditions", tier: "adv",
    oneLiner: t`"At least" is $\ge$, "at most" $\le$, "more than" $>$; write the condition, solve it, and answer in the problem's units`,
    prereqs: ["C04"], ext: [], sources: [SOLVING],
  },
];
