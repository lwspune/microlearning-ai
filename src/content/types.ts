/**
 * Content model. TypeScript is the single source of truth for chapter content:
 * it is validated (validate.ts), verified (verify/ via `npm run content:verify`)
 * and seeded into the database from here.
 *
 * Text fields are KaTeX-aware: `$…$` inline math, `$$…$$` display math,
 * `**…**` bold.
 */

export type ConceptId = string; // "C06"
export type MisconceptionId = string; // "C06-M1"

export type Tier = "core" | "adv";

/** A node in the chapter's prerequisite graph. Edges are hard prerequisites only. */
export type GraphNode = {
  id: ConceptId;
  slug: string;
  title: string;
  oneLiner: string;
  group: string;
  tier: Tier;
  /** Concepts that must be mastered before this one unlocks (transitively reduced). */
  prereqs: ConceptId[];
  /** Prerequisites from other chapters, assumed (and possibly diagnosed). */
  ext: string[];
  /** PYQ Vault concept slugs this node imports from. */
  sources: string[];
};

/** Where a repeated misconception routes the student. */
export type Fallback =
  | { kind: "concept"; id: ConceptId }
  | { kind: "ext"; topic: string }
  | { kind: "none" };

export type Misconception = {
  id: MisconceptionId;
  /** The mistake, as the author sees it. */
  mistake: string;
  /** What the student is shown after picking an option with this misconception. */
  remediation: string;
  fallback: Fallback;
};

export type OptionKey = "A" | "B" | "C" | "D";

export type Option = {
  key: OptionKey;
  text: string;
  correct: boolean;
  /** Required on every wrong option. */
  misconceptionId?: MisconceptionId;
  /** sympy expression of what `text` shows; checked by the verifier. */
  value: string;
};

/**
 * How the verifier re-derives the options. `inputs` are sympy expressions fed
 * to the concept's models in verify/models/<chapter>.py.
 *   value: options are values (optionally projected with `ask`, an expression in z)
 *   locus: options are loci, given as polynomials in x, y (poly = 0)
 *   point: options are points; each must lie on exactly its own model's locus
 */
export type ItemVerify = {
  kind: "value" | "locus" | "point";
  inputs: Record<string, string>;
  params?: Record<string, string | string[]>;
  ask?: string;
};

export type ItemSource =
  | { kind: "authored" }
  | { kind: "pyqvault-practice"; ref: string }
  | { kind: "exam-style"; exam: "NDA" | "MHT-CET" | "JEE"; ref?: string };

export type Item = {
  id: string; // "C06-Q1"
  source: ItemSource;
  stem: string;
  options: Option[];
  verify: ItemVerify;
};

export type WorkedExample = {
  prompt: string;
  steps: string[];
  answer: string;
};

export type Concept = {
  id: ConceptId;
  status: "draft" | "approved";
  hook: { prompt: string; reveal: string };
  explanation: {
    intuition: string;
    formal: string;
    worked: WorkedExample;
    /** Spec for the interactive visual; built in M2. */
    visualSpec: string;
  };
  misconceptions: Misconception[];
  items: Item[];
  /** Notes for the learning engine (e.g. undetectable misconceptions). */
  engineNotes?: string[];
};

export type Chapter = {
  slug: string;
  title: string;
  graph: GraphNode[];
  /** Fully authored concepts; every graph node gets one eventually. */
  concepts: Concept[];
};
