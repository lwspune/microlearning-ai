import type { Chapter, ConceptId, GraphNode } from "./types";

/** Minimum items per authored concept, so mastery and review never repeat an item too soon. */
export const MIN_ITEMS = 5;

/**
 * Structural checks on a chapter (AUTHORING.md). Answer correctness is checked
 * separately by the sympy verifier. Returns one message per problem; [] = valid.
 */
export function validateChapter(chapter: Chapter): string[] {
  return [...validateGraph(chapter.graph), ...validateConcepts(chapter)];
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
