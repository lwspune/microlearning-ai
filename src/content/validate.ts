import { leadIn } from "./leadIn.ts";
import type { Chapter, Concept, ConceptId, Figure, FigureElement, GraphNode, Item, Pt, Shape } from "./types";

/** Minimum items per authored concept, so mastery and review never repeat an item too soon. */
export const MIN_ITEMS = 5;

/** Options per item (owner's rule, 2026-10-15): four, so a guess is right a quarter of the time and D is a real position. */
export const OPTIONS = 4;

/**
 * Structural checks on a chapter (AUTHORING.md). Answer correctness is checked
 * separately by the sympy verifier. Returns one message per problem; [] = valid.
 */
export function validateChapter(chapter: Chapter): string[] {
  return [...validateGraph(chapter.graph), ...validateConcepts(chapter), ...validateTeaching(chapter), ...chapter.concepts.flatMap(validateText)];
}

/** Control characters other than newlines: what a mangled escape leaves (the `\t` of `\times` becomes a tab). */
const CONTROL = /[\u0000-\u0009\u000b-\u001f\u007f]/;

function validateText(c: Concept): string[] {
  const errors: string[] = [];
  const walk = (v: unknown, path: string) => {
    if (typeof v === "string") {
      const m = CONTROL.exec(v);
      if (m) errors.push(`${c.id} ${path}: control character U+${m[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`);
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}.${i}`));
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, path ? `${path}.${k}` : k);
  };
  walk(c, "");
  return errors;
}

function validateGraph(graph: GraphNode[]): string[] {
  const errors: string[] = [];
  const ids = new Set<ConceptId>();
  for (const n of graph) {
    if (ids.has(n.id)) errors.push(`duplicate concept id ${n.id}`);
    ids.add(n.id);
  }
  for (const n of graph) {
    for (const p of n.prereqs) {
      if (!ids.has(p)) errors.push(`${n.id}: unknown prerequisite ${p}`);
    }
  }
  const cycle = findCycle(graph);
  if (cycle) errors.push(`prerequisite cycle: ${cycle.join(" → ")}`);
  return errors;
}

/** Depth-first search; returns one cycle as a path, or null. */
function findCycle(graph: GraphNode[]): ConceptId[] | null {
  const prereqs = new Map(graph.map((n) => [n.id, n.prereqs]));
  const state = new Map<ConceptId, "visiting" | "done">();
  const path: ConceptId[] = [];

  const visit = (id: ConceptId): ConceptId[] | null => {
    if (state.get(id) === "done") return null;
    if (state.get(id) === "visiting") return [...path.slice(path.indexOf(id)), id];
    state.set(id, "visiting");
    path.push(id);
    for (const p of prereqs.get(id) ?? []) {
      const found = visit(p);
      if (found) return found;
    }
    path.pop();
    state.set(id, "done");
    return null;
  };

  for (const n of graph) {
    const found = visit(n.id);
    if (found) return found;
  }
  return null;
}

/** Every concept reachable by following prerequisites from `id`. */
export function ancestorsOf(graph: GraphNode[], id: ConceptId): Set<ConceptId> {
  const prereqs = new Map(graph.map((n) => [n.id, n.prereqs]));
  const seen = new Set<ConceptId>();
  const stack = [...(prereqs.get(id) ?? [])];
  while (stack.length) {
    const p = stack.pop()!;
    if (seen.has(p)) continue;
    seen.add(p);
    stack.push(...(prereqs.get(p) ?? []));
  }
  return seen;
}

function validateConcepts(chapter: Chapter): string[] {
  const errors: string[] = [];
  const graphIds = new Set(chapter.graph.map((n) => n.id));
  const itemIds = new Set<string>();

  for (const c of chapter.concepts) {
    if (!graphIds.has(c.id)) {
      errors.push(`concept ${c.id} is not in the graph`);
      continue;
    }
    const ancestors = ancestorsOf(chapter.graph, c.id);

    const misconceptionIds = new Set<string>();
    for (const m of c.misconceptions) {
      if (!m.id.startsWith(`${c.id}-`)) errors.push(`misconception ${m.id} must start with ${c.id}-`);
      if (misconceptionIds.has(m.id)) errors.push(`duplicate misconception id ${m.id}`);
      misconceptionIds.add(m.id);
      if (m.fallback.kind === "concept" && !ancestors.has(m.fallback.id)) {
        errors.push(`${m.id}: fallback ${m.fallback.id} is not a prerequisite ancestor of ${c.id}`);
      }
    }

    if (c.items.length < MIN_ITEMS) {
      errors.push(`${c.id} has ${c.items.length} items; needs at least ${MIN_ITEMS}`);
    }

    const detected = new Set<string>();
    for (const item of c.items) {
      if (!item.id.startsWith(`${c.id}-`)) errors.push(`item ${item.id} must start with ${c.id}-`);
      if (itemIds.has(item.id)) errors.push(`duplicate item id ${item.id}`);
      itemIds.add(item.id);

      if (item.options.length !== OPTIONS) errors.push(`${item.id}: needs ${OPTIONS} options (A to D), has ${item.options.length}`);
      const correct = item.options.filter((o) => o.correct).length;
      if (correct !== 1) errors.push(`${item.id}: needs exactly one correct option, found ${correct}`);

      const keys = new Set<string>();
      for (const o of item.options) {
        if (keys.has(o.key)) errors.push(`${item.id}: duplicate option key ${o.key}`);
        keys.add(o.key);

        if (o.correct) {
          if (o.misconceptionId) errors.push(`${item.id} option ${o.key}: a correct option cannot carry a misconception`);
        } else if (!o.misconceptionId) {
          errors.push(`${item.id} option ${o.key}: wrong option has no misconception`);
        } else if (!misconceptionIds.has(o.misconceptionId)) {
          errors.push(`${item.id} option ${o.key}: ${o.misconceptionId} is not a misconception of ${c.id}`);
        } else {
          detected.add(o.misconceptionId);
        }
      }
    }

    for (const m of c.misconceptions) {
      if (!detected.has(m.id)) errors.push(`${m.id}: no item can detect it (no option is tagged with it)`);
    }
  }
  return errors;
}

/** Solution and figure rules (AUTHORING.md items 9–13). */
function validateTeaching(chapter: Chapter): string[] {
  const errors: string[] = [];
  const nodes = new Map(chapter.graph.map((n) => [n.id, n]));

  for (const c of chapter.concepts) {
    const node = nodes.get(c.id);
    if (!node) continue; // reported by validateConcepts
    const ex = c.explanation;
    if (typeof ex.intuition !== "string") errors.push(...pointsProblems(ex.intuition, `${c.id} idea`));
    if (ex.figure) errors.push(...validateFigure(ex.figure, `${c.id} idea figure`, typeof ex.intuition === "string" ? undefined : ex.intuition.length));
    if (ex.worked.figure) errors.push(...validateFigure(ex.worked.figure, `${c.id} worked figure`, ex.worked.steps.length));
    errors.push(...formalProblems(c, node));
    for (const item of c.items) {
      if (item.figure) {
        errors.push(...validateFigure(item.figure, `${item.id} figure`));
        item.figure.elements.forEach((el, i) => {
          if (el.step !== undefined) {
            errors.push(`${item.id} figure element ${i + 1} (${el.kind}): a question's figure is shown whole, so its elements have no step`);
          }
        });
      }
      if (item.solution?.figure) {
        errors.push(...validateFigure(item.solution.figure, `${item.id} solution figure`, item.solution.steps.length));
      }
    }

    errors.push(...missingTeaching(c, node));
  }
  return errors;
}

/**
 * Item 17: new visual concepts (drafts) write their formal explanation as sections, one slide
 * each, with a figure. Every section, in any concept, starts with a bold lead-in: its title.
 */
function formalProblems(c: Concept, node: GraphNode): string[] {
  const formal = c.explanation.formal;
  if (typeof formal === "string") {
    return node.visual && c.status === "draft" ? [`${c.id}: a visual concept writes its formal explanation as sections, each with a figure`] : [];
  }
  return formal.flatMap((sec, i) => {
    const where = `${c.id} formal section ${i + 1}`;
    const errors: string[] = [];
    if ("points" in sec) {
      const words = sec.title.trim().split(/\s+/).filter(Boolean).length;
      if (words < 1 || words > 6 || sec.title.includes("*")) errors.push(`${where}: title of 1 to 6 words, plain text`);
      errors.push(...pointsProblems(sec.points, where));
    } else if (!leadIn(sec.body)) {
      errors.push(`${where}: needs a bold lead-in of up to six words ("**Directed angle.** ..."), which titles its slide`);
    }
    if (sec.figure) errors.push(...validateFigure(sec.figure, `${where} figure`, "points" in sec ? sec.points.length : undefined));
    else if (node.visual) errors.push(`${where}: a visual concept's formal section needs a figure`);
    return errors;
  });
}

/** Points per slide, and words per point outside its maths (AUTHORING.md 20). */
export const MAX_POINTS = 6;
export const MAX_POINT_WORDS = 25;

/** Item 20: a few short inline sentences, revealed one per click. */
function pointsProblems(points: string[], where: string): string[] {
  const errors: string[] = [];
  if (points.length === 0 || points.length > MAX_POINTS) errors.push(`${where}: at most ${MAX_POINTS} points, has ${points.length}`);
  points.forEach((p, i) => {
    const at = `${where} point ${i + 1}`;
    if (p.trim() === "") return errors.push(`${at}: empty`);
    if (p.includes("$$") || p.includes("\n")) errors.push(`${at}: inline only (no display maths or line breaks)`);
    const words = p.replace(/\$[^$]*\$/g, " x ").trim().split(/\s+/).length;
    if (words > MAX_POINT_WORDS) errors.push(`${at}: at most ${MAX_POINT_WORDS} words, has ${words}`);
  });
  return errors;
}

/** What a concept lacks under items 9–11. */
function missingTeaching(c: Concept, node: GraphNode): string[] {
  const errors: string[] = [];
  for (const item of c.items) errors.push(...missingSolution(item, node.visual === true));
  if (node.visual) {
    if (!c.explanation.figure) errors.push(`${c.id}: a visual concept needs a figure on the idea slide`);
    if (!c.explanation.worked.figure) errors.push(`${c.id}: a visual concept needs a figure on the worked example`);
  }
  return errors;
}

function missingSolution(item: Item, visual: boolean): string[] {
  const sol = item.solution;
  if (!sol) return [`${item.id}: needs a step-by-step solution`];
  const errors: string[] = [];
  if (sol.steps.length < 2) errors.push(`${item.id}: solution needs at least 2 steps, has ${sol.steps.length}`);
  sol.steps.forEach((step, i) => {
    if (step.trim() === "") errors.push(`${item.id}: solution step ${i + 1} is empty`);
  });
  const kind = item.verify.kind;
  if (visual && (kind === "point" || kind === "locus") && !sol.figure) {
    errors.push(`${item.id}: a ${kind} item in a visual concept needs a figure in its solution`);
  }
  return errors;
}

const finite = (...ns: number[]) => ns.every(Number.isFinite);
const finitePts = (...ps: Pt[]) => ps.every((p) => p.length === 2 && finite(...p));
const samePt = (a: Pt, b: Pt) => a[0] === b[0] && a[1] === b[1];

/** Items 12–13: well-formed figure. `maxStep` bounds element steps (worked examples and solutions). */
export function validateFigure(fig: Figure, where: string, maxStep?: number): string[] {
  const errors: string[] = [];
  if (fig.alt.trim() === "") errors.push(`${where}: needs alt text describing the picture`);
  const { x, y } = fig.view;
  if (!finite(...x, ...y) || x[0] >= x[1] || y[0] >= y[1]) {
    errors.push(`${where}: view must run from a smaller to a larger value on both axes`);
  }
  fig.elements.forEach((el, i) => {
    const at = `${where} element ${i + 1} (${el.kind})`;
    if (el.step !== undefined) {
      if (!Number.isInteger(el.step) || el.step < 1) errors.push(`${at}: step must be a whole number from 1`);
      else if (maxStep !== undefined && el.step > maxStep) errors.push(`${at}: step ${el.step} is outside 1 to ${maxStep}`);
    }
    if (el.label !== undefined && (el.label.trim() === "" || el.label.includes("$"))) {
      errors.push(`${at}: label must be non-empty plain text (no LaTeX)`);
    }
    errors.push(...elementProblems(el).map((p) => `${at}: ${p}`));
  });
  return errors;
}

function elementProblems(el: FigureElement): string[] {
  switch (el.kind) {
    case "point":
    case "label":
      return finitePts(el.at) ? [] : ["coordinates must be finite numbers"];
    case "vector": {
      const from = el.from ?? [0, 0];
      if (!finitePts(from, el.to)) return ["coordinates must be finite numbers"];
      return samePt(from, el.to) ? ["a vector needs two different points"] : [];
    }
    case "segment":
      if (!finitePts(el.from, el.to)) return ["coordinates must be finite numbers"];
      return samePt(el.from, el.to) ? ["a segment needs two different points"] : [];
    case "line":
      if (!finitePts(...el.through)) return ["coordinates must be finite numbers"];
      return samePt(...el.through) ? ["a line needs two different points"] : [];
    case "ray":
      return finitePts(el.from) && finite(el.angle) ? [] : ["coordinates must be finite numbers"];
    case "circle":
    case "arc":
      if (!finitePts(el.centre) || !finite(el.r)) return ["coordinates must be finite numbers"];
      return el.r > 0 ? [] : ["radius must be positive"];
    case "ellipse":
      if (!finitePts(el.centre) || !finite(el.rx, el.ry)) return ["coordinates must be finite numbers"];
      return el.rx > 0 && el.ry > 0 ? [] : ["semi-axes must be positive"];
    case "hyperbola":
      if (!finitePts(el.centre) || !finite(el.a, el.b)) return ["coordinates must be finite numbers"];
      return el.a > 0 && el.b > 0 ? [] : ["semi-axes must be positive"];
    case "angle":
      return finitePts(el.at) && finite(el.from, el.to) ? [] : ["coordinates must be finite numbers"];
    case "turn":
      if (!finitePts(el.centre ?? [0, 0]) || !finite(el.r, el.from ?? 0, el.to)) return ["coordinates must be finite numbers"];
      if (el.r <= 0) return ["the arm's length must be positive"];
      return el.to === (el.from ?? 0) ? ["a turn needs different start and end angles"] : [];
    case "curve":
      if (el.points.length < 2) return ["a curve needs at least two points"];
      return finitePts(...el.points) ? [] : ["coordinates must be finite numbers"];
    case "region":
      if (el.within.length === 0) return ["a region needs at least one shape"];
      return el.within.flatMap(shapeProblems);
  }
}

function shapeProblems(sh: Shape): string[] {
  switch (sh.kind) {
    case "disc":
    case "outsideDisc":
      if (!finitePts(sh.centre) || !finite(sh.r)) return ["shape coordinates must be finite numbers"];
      return sh.r > 0 ? [] : ["shape radius must be positive"];
    case "halfPlane":
      if (!finitePts(...sh.through)) return ["shape coordinates must be finite numbers"];
      return samePt(...sh.through) ? ["a half-plane needs two different points"] : [];
    case "sector":
      return finitePts(sh.centre) && finite(sh.from, sh.to) ? [] : ["shape coordinates must be finite numbers"];
  }
}
