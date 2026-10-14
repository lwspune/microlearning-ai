import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import type { GraphNode } from "@/content/types";
import { layoutGraph } from "./graphLayout";

function node(id: string, prereqs: string[] = []): GraphNode {
  return { id, slug: id, title: id, oneLiner: "", group: "g", tier: "core", prereqs, ext: [], sources: [] };
}

const box = { width: 1000, height: 400, padX: 40, padY: 30 };

//   A → B → D → E
//   A → C ↗
const small = [node("A"), node("B", ["A"]), node("C", ["A"]), node("D", ["B", "C"]), node("E", ["D"])];

describe("layoutGraph", () => {
  it("puts each concept one layer after its deepest prerequisite", () => {
    const { nodes } = layoutGraph(small, box);
    const depth = Object.fromEntries(nodes.map((n) => [n.id, n.depth]));
    expect(depth).toEqual({ A: 0, B: 1, C: 1, D: 2, E: 3 });
  });

  it("runs left to right: every edge ends to the right of where it starts", () => {
    const { nodes, edges } = layoutGraph(complexNumbers.graph, box);
    const at = new Map(nodes.map((n) => [n.id, n]));
    expect(edges.length).toBe(39);
    for (const e of edges) expect(at.get(e.to)!.x, `${e.from}→${e.to}`).toBeGreaterThan(at.get(e.from)!.x);
  });

  it("keeps every node inside the padded box, with no two in the same spot", () => {
    const { nodes } = layoutGraph(complexNumbers.graph, box);
    for (const n of nodes) {
      expect(n.x).toBeGreaterThanOrEqual(box.padX);
      expect(n.x).toBeLessThanOrEqual(box.width - box.padX);
      expect(n.y).toBeGreaterThanOrEqual(box.padY);
      expect(n.y).toBeLessThanOrEqual(box.height - box.padY);
    }
    const spots = new Set(nodes.map((n) => `${n.x.toFixed(1)},${n.y.toFixed(1)}`));
    expect(spots.size).toBe(nodes.length);
  });

  it("traces a spine: the longest prerequisite chain, from a root to the deepest concept", () => {
    const { spine } = layoutGraph(small, box);
    expect(spine.ids[0]).toBe("A");
    expect(spine.ids.at(-1)).toBe("E");
    expect(spine.ids).toHaveLength(4);
    // Each step of the spine is a real prerequisite edge.
    for (let i = 1; i < spine.ids.length; i++) {
      expect(small.find((n) => n.id === spine.ids[i])!.prereqs).toContain(spine.ids[i - 1]);
    }
  });

  it("times the spine: each stop's position along it runs from 0 to 1", () => {
    const { spine } = layoutGraph(complexNumbers.graph, box);
    expect(spine.stops[0]).toBe(0);
    expect(spine.stops.at(-1)).toBeCloseTo(1);
    for (let i = 1; i < spine.stops.length; i++) expect(spine.stops[i]).toBeGreaterThan(spine.stops[i - 1]);
    expect(spine.d.startsWith("M")).toBe(true);
  });

  it("is deterministic", () => {
    expect(layoutGraph(complexNumbers.graph, box)).toEqual(layoutGraph(complexNumbers.graph, box));
  });
});
