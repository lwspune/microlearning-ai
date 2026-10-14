import type { ConceptId, GraphNode } from "@/content/types";

export type LaidOutNode = { id: ConceptId; x: number; y: number; depth: number };
export type LaidOutEdge = { from: ConceptId; to: ConceptId; d: string };
export type GraphLayout = {
  nodes: LaidOutNode[];
  edges: LaidOutEdge[];
  /** The longest prerequisite chain: its concepts, one SVG path along them, and each concept's position on it (0–1). */
  spine: { ids: ConceptId[]; d: string; stops: number[] };
};
export type Box = { width: number; height: number; padX: number; padY: number };

type P = [number, number];

/** A smooth left-to-right curve between two nodes (control points halfway across). */
function curve(a: P, b: P): [P, P, P, P] {
  const mx = (a[0] + b[0]) / 2;
  return [a, [mx, a[1]], [mx, b[1]], b];
}

const r = (n: number) => Math.round(n * 10) / 10;
const pathOf = ([, c1, c2, b]: [P, P, P, P]) => `C${r(c1[0])} ${r(c1[1])} ${r(c2[0])} ${r(c2[1])} ${r(b[0])} ${r(b[1])}`;

function bezierLength([a, c1, c2, b]: [P, P, P, P]): number {
  let len = 0;
  let prev = a;
  for (let i = 1; i <= 24; i++) {
    const t = i / 24;
    const u = 1 - t;
    const p: P = [
      u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0],
      u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1],
    ];
    len += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
    prev = p;
  }
  return len;
}

/**
 * Lays a prerequisite graph out left to right for the homepage hero: a
 * concept's layer is one after its deepest prerequisite, and concepts in a
 * layer are ordered by where their prerequisites sit (fewer crossings).
 * Pure and deterministic, so the server renders the same picture every time.
 */
export function layoutGraph(graph: GraphNode[], box: Box): GraphLayout {
  const byId = new Map(graph.map((n) => [n.id, n]));
  const depth = new Map<ConceptId, number>();
  const depthOf = (id: ConceptId): number => {
    const known = depth.get(id);
    if (known !== undefined) return known;
    const d = Math.max(-1, ...byId.get(id)!.prereqs.map(depthOf)) + 1;
    depth.set(id, d);
    return d;
  };
  graph.forEach((n) => depthOf(n.id));
  const layers = Math.max(...depth.values()) + 1;

  // Order each layer by the average position of its prerequisites in earlier layers.
  const order = new Map<ConceptId, number>();
  const columns: ConceptId[][] = [];
  for (let d = 0; d < layers; d++) {
    const ids = graph.filter((n) => depth.get(n.id) === d).map((n) => n.id);
    const weight = (id: ConceptId) => {
      const ps = byId.get(id)!.prereqs;
      return ps.length ? ps.reduce((s, p) => s + order.get(p)!, 0) / ps.length : 0.5;
    };
    ids.sort((a, b) => weight(a) - weight(b) || a.localeCompare(b));
    ids.forEach((id, i) => order.set(id, ids.length === 1 ? 0.5 : i / (ids.length - 1)));
    columns.push(ids);
  }

  const innerW = box.width - 2 * box.padX;
  const innerH = box.height - 2 * box.padY;
  const tallest = Math.max(...columns.map((c) => c.length));
  const gap = tallest > 1 ? innerH / (tallest - 1) : 0;
  const at = new Map<ConceptId, P>();
  const nodes: LaidOutNode[] = [];
  columns.forEach((ids, d) => {
    const x = box.padX + (layers > 1 ? (innerW * d) / (layers - 1) : innerW / 2);
    // Centre each column vertically; nudge alternate columns so straight runs don't look ruled.
    const span = gap * (ids.length - 1);
    const nudge = ids.length < tallest ? (d % 2 ? 0.25 : -0.25) * gap : 0;
    const top = box.padY + (innerH - span) / 2 + Math.max(-(innerH - span) / 2, Math.min((innerH - span) / 2, nudge));
    ids.forEach((id, i) => {
      const p: P = [x, top + gap * i];
      at.set(id, p);
      nodes.push({ id, x: p[0], y: p[1], depth: d });
    });
  });

  const edges: LaidOutEdge[] = graph.flatMap((n) =>
    n.prereqs.map((p) => {
      const c = curve(at.get(p)!, at.get(n.id)!);
      return { from: p, to: n.id, d: `M${r(c[0][0])} ${r(c[0][1])}${pathOf(c)}` };
    }),
  );

  // Spine: walk back from the deepest concept through its deepest prerequisite each time.
  const deepest = graph.reduce((a, b) => (depth.get(b.id)! > depth.get(a.id)! ? b : a));
  const ids = [deepest.id];
  for (let cur = deepest; cur.prereqs.length; ) {
    cur = byId.get(cur.prereqs.reduce((a, b) => (depth.get(b)! > depth.get(a)! ? b : a)))!;
    ids.unshift(cur.id);
  }
  const segments = ids.slice(1).map((id, i) => curve(at.get(ids[i])!, at.get(id)!));
  const lengths = segments.map(bezierLength);
  const total = lengths.reduce((s, l) => s + l, 0) || 1;
  const stops = [0];
  lengths.forEach((l) => stops.push(stops.at(-1)! + l / total));
  const start = at.get(ids[0])!;
  const d = `M${r(start[0])} ${r(start[1])}${segments.map(pathOf).join("")}`;

  return { nodes, edges, spine: { ids, d, stops } };
}
