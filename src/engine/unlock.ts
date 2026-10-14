import type { ConceptId, GraphNode } from "@/content/types";
import { ancestorsOf } from "@/content/validate";
import type { Role } from "@/lib/auth/routing";

export type ConceptState = "unpublished" | "locked" | "available" | "learning" | "mastered";

/**
 * Whether a student's concept waits for its prerequisites to be mastered.
 * Staff never wait (`gateFor`): teachers sign in and open any concept to teach
 * it. Set to false to open every concept to everyone (it was, 2026-10-14,
 * while teachers reviewed the chapters as guests).
 */
export const MASTERY_GATE = true;

/**
 * Each concept's state for one learner. With the gate on, a published concept
 * opens once every PUBLISHED prerequisite ancestor is mastered; unpublished
 * ones are assumed known. With it off, every published concept is open.
 */
export function conceptStates(
  graph: GraphNode[],
  published: Set<ConceptId>,
  learner: Map<ConceptId, "learning" | "mastered">,
  gate: boolean = MASTERY_GATE,
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
    const blocking = gate && [...ancestorsOf(graph, node.id)].some((a) => published.has(a) && learner.get(a) !== "mastered");
    states.set(node.id, blocking ? "locked" : "available");
  }
  return states;
}

/**
 * The published concepts inside a course's scope. Passed to conceptStates in
 * place of `published`, a prerequisite the course doesn't cover counts as
 * known, like an unpublished one. No scope: the whole chapter.
 */
export function inScope(published: Set<ConceptId>, scope?: Set<ConceptId>): Set<ConceptId> {
  return scope ? new Set([...published].filter((id) => scope.has(id))) : published;
}

/**
 * Whether this viewer waits on prerequisites. Staff (teachers and above) open
 * every concept to teach it; students and guests (no role) follow MASTERY_GATE.
 */
export function gateFor(role: Role | null): boolean {
  return role === null || role === "student" ? MASTERY_GATE : false;
}
