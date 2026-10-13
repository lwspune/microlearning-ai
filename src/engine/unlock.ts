import type { ConceptId, GraphNode } from "@/content/types";
import { ancestorsOf } from "@/content/validate";

export type ConceptState = "unpublished" | "locked" | "available" | "learning" | "mastered";

/**
 * Each concept's state for one learner. A published concept opens once every
 * PUBLISHED prerequisite ancestor is mastered; unpublished ones are assumed
 * known (the pilot publishes a few concepts deep in the graph).
 */
export function conceptStates(
  graph: GraphNode[],
  published: Set<ConceptId>,
  learner: Map<ConceptId, "learning" | "mastered">,
): Map<ConceptId, ConceptState> {
  const states = new Map<ConceptId, ConceptState>();
  for (const node of graph) {
    if (!published.has(node.id)) {
      states.set(node.id, "unpublished");
      continue;
    }
    const own = learner.get(node.id);
    if (own) {
      states.set(node.id, own);
      continue;
    }
    const blocking = [...ancestorsOf(graph, node.id)].some((a) => published.has(a) && learner.get(a) !== "mastered");
    states.set(node.id, blocking ? "locked" : "available");
  }
  return states;
}
