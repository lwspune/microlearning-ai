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
  /** Taught with pictures: needs a figure on the idea slide and the worked example (AUTHORING.md). */
  visual?: true;
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

/** A point in the complex plane as [real part, imaginary part]. */
export type Pt = [number, number];

/** A convex or co-convex piece of the plane; a region is the overlap of its shapes. */
export type Shape =
  | { kind: "disc"; centre: Pt; r: number }
  | { kind: "outsideDisc"; centre: Pt; r: number }
  /** Keeps the side on the left when walking from the first point to the second. */
  | { kind: "halfPlane"; through: [Pt, Pt] }
  /** Angles in degrees, anticlockwise from `from` to `to`. */
  | { kind: "sector"; centre: Pt; from: number; to: number };

export type FigureElement = {
  /**
   * When the element appears. In a worked example or solution, the step
   * (1-based) that introduces it; on the idea slide, the order it animates in.
   * Omitted: shown from the start.
   */
  step?: number;
  /** Plain text, no LaTeX: "z", "1 + 2i", "|z| = 3". */
  label?: string;
  /** Where the label sits relative to its anchor (default "ne"). */
  labelAt?: "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
  /** Colour role (default: accent for the main object). */
  tone?: "accent" | "muted" | "good" | "bad";
} & (
  /** `hollow` marks an excluded point (e.g. the start of a ray). */
  | { kind: "point"; at: Pt; hollow?: boolean }
  /** An arrow; `from` defaults to the origin. */
  | { kind: "vector"; from?: Pt; to: Pt }
  | { kind: "segment"; from: Pt; to: Pt; dashed?: boolean }
  /** The whole line through two points, clipped to the view. */
  | { kind: "line"; through: [Pt, Pt]; dashed?: boolean }
  /** Starts at `from` (excluded) in the direction `angle`, in degrees. */
  | { kind: "ray"; from: Pt; angle: number }
  | { kind: "circle"; centre: Pt; r: number; dashed?: boolean }
  /** Axis-aligned: `rx` along the real axis, `ry` along the imaginary axis. */
  | { kind: "ellipse"; centre: Pt; rx: number; ry: number; dashed?: boolean }
  /**
   * One branch of a hyperbola, clipped to the view. `axis` is the direction
   * it opens along; `branch` picks the side (+1: right or up). Vertices at
   * centre ± a along that axis; `b` is the other semi-axis.
   */
  | { kind: "hyperbola"; centre: Pt; a: number; b: number; axis: "x" | "y"; branch: 1 | -1; dashed?: boolean }
  /** Angles in degrees, anticlockwise from `from` to `to`. */
  | { kind: "arc"; centre: Pt; r: number; from: number; to: number }
  /** A small arc marking an angle at `at`, anticlockwise from `from` to `to` degrees. */
  | { kind: "angle"; at: Pt; from: number; to: number }
  /** Text alone, anchored at a point. */
  | { kind: "label"; at: Pt }
  /** Shaded overlap of the shapes. */
  | { kind: "region"; within: Shape[] }
);

/** An Argand-plane figure, drawn with axes. Equal scale on both axes. */
export type Figure = {
  /** Read by screen readers in place of the picture: what it shows, in words. */
  alt: string;
  /** The visible window: real parts from x[0] to x[1], imaginary parts from y[0] to y[1]. */
  view: { x: [number, number]; y: [number, number] };
  elements: FigureElement[];
};

/** Shown after the learner answers. Steps are inline text, like worked-example steps. */
export type Solution = {
  steps: string[];
  /** Elements may carry `step` to appear alongside that step. */
  figure?: Figure;
};

export type Item = {
  id: string; // "C06-Q1"
  source: ItemSource;
  stem: string;
  options: Option[];
  verify: ItemVerify;
  /** AUTHORING.md item 9. */
  solution: Solution;
};

export type WorkedExample = {
  prompt: string;
  steps: string[];
  answer: string;
  /** Element `step`s match the worked steps (1-based). */
  figure?: Figure;
};

export type Concept = {
  id: ConceptId;
  status: "draft" | "approved";
  hook: { prompt: string; reveal: string };
  explanation: {
    intuition: string;
    formal: string;
    worked: WorkedExample;
    /** Shown on the idea slide; required for `visual` concepts. */
    figure?: Figure;
    /** Spec for an interactive (draggable) visual; not built yet. */
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
