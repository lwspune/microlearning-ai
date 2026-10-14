import type { CSSProperties } from "react";
import type { GraphNode } from "@/content/types";
import { layoutGraph } from "@/lib/graphLayout";

const BOX = { width: 1200, height: 720, padX: 60, padY: 60 };

/** Seconds: edges draw in layer by layer, then a light runs the spine on a loop. */
const LAYER_DELAY = 0.16;
const COMET_START = 2.4;
const COMET_CYCLE = 8;
/** The comet reaches the end at this fraction of the cycle (matches @keyframes cg-comet). */
const COMET_RUN = 0.8;

/**
 * The hero's backdrop: a real chapter's prerequisite graph drawing itself in,
 * with a light travelling the longest chain of ideas. Decorative (hidden from
 * screen readers); with reduced motion it is drawn, still. Styles: globals.css.
 */
export function ConceptGraphBackdrop({ graph, className }: { graph: GraphNode[]; className?: string }) {
  const { nodes, edges, spine } = layoutGraph(graph, BOX);
  const depthOf = new Map(nodes.map((n) => [n.id, n.depth]));
  const stopOf = new Map(spine.ids.map((id, i) => [id, spine.stops[i]]));
  const vars = (v: Record<string, string | number>) => v as CSSProperties;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${BOX.width} ${BOX.height}`}
      preserveAspectRatio="xMidYMid meet"
      className={`cg ${className ?? ""}`}
      style={vars({ "--cycle": `${COMET_CYCLE}s`, "--comet-start": `${COMET_START}s` })}
    >
      <defs>
        <filter id="cg-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g className="cg-drift">
        {edges.map((e) => (
          <path key={`${e.from}-${e.to}`} d={e.d} pathLength={1} className="cg-edge" style={vars({ "--d": `${0.2 + depthOf.get(e.from)! * LAYER_DELAY}s` })} />
        ))}
        <path d={spine.d} className="cg-track" />
        <path d={spine.d} pathLength={1} className="cg-comet cg-comet-glow" filter="url(#cg-glow)" />
        <path d={spine.d} pathLength={1} className="cg-comet" />
        {nodes.map((n) => {
          const stop = stopOf.get(n.id);
          return (
            <g key={n.id}>
              {stop !== undefined && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={8}
                  className="cg-pulse"
                  style={vars({ "--at": `${COMET_START + stop * COMET_RUN * COMET_CYCLE}s` })}
                />
              )}
              <circle
                cx={n.x}
                cy={n.y}
                r={stop !== undefined ? 6 : 4.5}
                className={stop !== undefined ? "cg-node cg-node-spine" : "cg-node"}
                style={vars({ "--d": `${0.15 + n.depth * LAYER_DELAY}s` })}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
