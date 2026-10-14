import { type CSSProperties, type ReactNode, useId } from "react";
import type { Figure, FigureElement, Pt, Shape } from "@/content/types";
import {
  arcPath,
  arrowHead,
  clipLine,
  clipRay,
  fmt,
  frameFor,
  halfPlanePolygon,
  hyperbolaPoints,
  outsideDiscPath,
  polygonPath,
  sectorPath,
  ticks,
  type Frame,
  type View,
} from "./geometry";

/**
 * An Argand-plane figure as SVG. Plain markup with no browser APIs, so it renders
 * on the server and in client components alike.
 *
 * Steps (see FigureElement.step):
 * - `upTo`: worked example. Shows elements up to that step; the ones it
 *   introduces animate in.
 * - `stagger`: idea slide or solution. Shows everything; each step's elements
 *   animate in `stagger` seconds after the previous step's.
 * Animations are CSS (globals.css) and only run when the learner allows motion.
 */
type Props = { figure: Figure; upTo?: number; stagger?: number; className?: string };

const TONE = {
  accent: "var(--accent)",
  muted: "var(--muted)",
  good: "var(--success)",
  bad: "var(--danger)",
} as const;

const LABEL_OFFSET = {
  n: [0, -10, "middle"],
  s: [0, 18, "middle"],
  e: [9, 5, "start"],
  w: [-9, 5, "end"],
  ne: [7, -8, "start"],
  nw: [-7, -8, "end"],
  se: [7, 16, "start"],
  sw: [-7, 16, "end"],
} as const;

/** Label font size, and a generous per-character width estimate used to keep labels in frame. */
const LABEL_PX = 15;
const LABEL_CHAR_PX = 8.5;

/** Angle marks are drawn at a fixed size on screen. */
const ANGLE_MARK_PX = 22;

type Motion = { className?: string; style?: CSSProperties };

function motionFor(el: FigureElement, props: Props): Motion | null {
  if (props.upTo !== undefined) {
    if (el.step !== undefined && el.step > props.upTo) return null; // not yet
    return el.step === props.upTo ? { className: "fig-in" } : {};
  }
  if (props.stagger !== undefined && el.step !== undefined) {
    return { className: "fig-in", style: { animationDelay: `${(el.step - 1) * props.stagger}s` } };
  }
  return {};
}

/** Line-like strokes draw in instead of fading (unless dashed: dashes and draw-in both use the dash array). */
const drawn = (m: Motion, dashed?: boolean): Motion =>
  m.className && !dashed ? { ...m, className: "fig-draw" } : m;

const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const lerp = (a: Pt, b: Pt, t: number): Pt => [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])];
const polar = (c: Pt, r: number, deg: number): Pt => [c[0] + r * Math.cos((deg * Math.PI) / 180), c[1] + r * Math.sin((deg * Math.PI) / 180)];

/** Where an element's label is anchored, in plane coordinates. */
function labelAnchor(el: FigureElement, view: View, f: Frame): Pt | null {
  switch (el.kind) {
    case "point":
    case "label":
      return el.at;
    case "vector":
      return el.to;
    case "segment":
      return mid(el.from, el.to);
    case "line": {
      const seg = clipLine(view, ...el.through);
      return seg && lerp(seg[0], seg[1], 0.85);
    }
    case "ray": {
      const seg = clipRay(view, el.from, el.angle);
      return seg && lerp(seg[0], seg[1], 0.75);
    }
    case "circle":
      return polar(el.centre, el.r, 45);
    case "ellipse":
      return [el.centre[0] + el.rx * Math.SQRT1_2, el.centre[1] + el.ry * Math.SQRT1_2];
    case "hyperbola":
      return el.axis === "x" ? [el.centre[0] + el.branch * el.a, el.centre[1]] : [el.centre[0], el.centre[1] + el.branch * el.a];
    case "arc":
      return polar(el.centre, el.r, (el.from + el.to) / 2);
    case "angle":
      return polar(el.at, (ANGLE_MARK_PX * 1.5) / f.scale, (el.from + el.to) / 2);
    case "region":
      return null; // label a region with a separate label element
  }
}

function Axes({ view, f }: { view: View; f: Frame }) {
  const xs = ticks(...view.x);
  const ys = ticks(...view.y);
  const hasX = view.y[0] < 0 && view.y[1] > 0;
  const hasY = view.x[0] < 0 && view.x[1] > 0;
  const [ox, oy] = f.px([hasY ? 0 : view.x[0], hasX ? 0 : view.y[0]]);
  const imLabel = (v: number) => (v === 1 ? "i" : v === -1 ? "−i" : `${v < 0 ? "−" : ""}${Math.abs(v)}i`);
  return (
    <g aria-hidden="true">
      <g stroke="var(--border)" strokeWidth={1}>
        {xs.map((v) => (
          <line key={`gx${v}`} x1={fmt(f.px([v, 0])[0])} x2={fmt(f.px([v, 0])[0])} y1={0} y2={fmt(f.height)} />
        ))}
        {ys.map((v) => (
          <line key={`gy${v}`} y1={fmt(f.px([0, v])[1])} y2={fmt(f.px([0, v])[1])} x1={0} x2={fmt(f.width)} />
        ))}
      </g>
      <g stroke="var(--muted)" strokeWidth={1.5}>
        {hasX && <line x1={0} x2={fmt(f.width)} y1={fmt(oy)} y2={fmt(oy)} />}
        {hasY && <line y1={0} y2={fmt(f.height)} x1={fmt(ox)} x2={fmt(ox)} />}
      </g>
      <g fill="var(--muted)" fontSize={11} stroke="var(--figure-bg, var(--background))" strokeWidth={3} paintOrder="stroke" strokeLinejoin="round">
        {hasX &&
          xs.map((v) => (
            <text key={`tx${v}`} x={fmt(f.px([v, 0])[0])} y={fmt(oy + 14)} textAnchor="middle">
              {v < 0 ? `−${-v}` : v}
            </text>
          ))}
        {hasY &&
          ys.map((v) => (
            <text key={`ty${v}`} x={fmt(ox - 5)} y={fmt(f.px([0, v])[1] + 4)} textAnchor="end">
              {imLabel(v)}
            </text>
          ))}
        {hasX && (
          <text x={fmt(f.width - 4)} y={fmt(oy - 6)} textAnchor="end" fontStyle="italic">
            Re
          </text>
        )}
        {hasY && (
          <text x={fmt(ox + 6)} y={12} fontStyle="italic">
            Im
          </text>
        )}
      </g>
    </g>
  );
}

function shapeClip(id: string, sh: Shape, view: View, f: Frame) {
  switch (sh.kind) {
    case "disc": {
      const [cx, cy] = f.px(sh.centre);
      return (
        <clipPath id={id}>
          <circle cx={fmt(cx)} cy={fmt(cy)} r={fmt(sh.r * f.scale)} />
        </clipPath>
      );
    }
    case "outsideDisc":
      return (
        <clipPath id={id}>
          <path d={outsideDiscPath(f, view, sh.centre, sh.r)} clipRule="evenodd" />
        </clipPath>
      );
    case "halfPlane":
      return (
        <clipPath id={id}>
          <path d={polygonPath(f, halfPlanePolygon(view, ...sh.through))} />
        </clipPath>
      );
    case "sector":
      return (
        <clipPath id={id}>
          <path d={sectorPath(f, view, sh.centre, sh.from, sh.to)} />
        </clipPath>
      );
  }
}

/** The overlap of the shapes: a full-view fill inside one nested clip per shape. */
function Region({ el, id, view, f, color, motion }: { el: Extract<FigureElement, { kind: "region" }>; id: string; view: View; f: Frame; color: string; motion: Motion }) {
  const ids = el.within.map((_, i) => `${id}-${i}`);
  let fill: ReactNode = <rect x={0} y={0} width={fmt(f.width)} height={fmt(f.height)} fill={color} fillOpacity={0.18} />;
  for (const cid of [...ids].reverse()) fill = <g clipPath={`url(#${cid})`}>{fill}</g>;
  return (
    <g {...motion}>
      <defs>{el.within.map((sh, i) => <g key={ids[i]}>{shapeClip(ids[i], sh, view, f)}</g>)}</defs>
      {fill}
    </g>
  );
}

function ElementView({ el, id, view, f, motion }: { el: FigureElement; id: string; view: View; f: Frame; motion: Motion }) {
  const color = TONE[el.tone ?? "accent"];
  const stroke = { stroke: color, strokeWidth: 2.5, fill: "none", strokeLinecap: "round" as const };
  // Draw-in needs pathLength={1}, but that would stretch the dash pattern over the whole stroke.
  const dash = (d?: boolean) => (d ? { strokeDasharray: "7 6" } : { pathLength: 1 });
  const line = (a: Pt, b: Pt, m: Motion, dashed?: boolean) => {
    const [x1, y1] = f.px(a);
    const [x2, y2] = f.px(b);
    return <line {...m} {...stroke} {...dash(dashed)} x1={fmt(x1)} y1={fmt(y1)} x2={fmt(x2)} y2={fmt(y2)} />;
  };

  switch (el.kind) {
    case "point": {
      const [cx, cy] = f.px(el.at);
      return el.hollow ? (
        <circle {...motion} cx={fmt(cx)} cy={fmt(cy)} r={4.5} fill="var(--figure-bg, var(--background))" stroke={color} strokeWidth={2} />
      ) : (
        <circle {...motion} cx={fmt(cx)} cy={fmt(cy)} r={4.5} fill={color} />
      );
    }
    case "vector": {
      const from = el.from ?? [0, 0];
      return (
        <g>
          {line(from, el.to, drawn(motion))}
          <polygon {...motion} points={arrowHead(f, from, el.to)} fill={color} />
        </g>
      );
    }
    case "segment":
      return line(el.from, el.to, drawn(motion, el.dashed), el.dashed);
    case "line": {
      const seg = clipLine(view, ...el.through);
      return seg && line(seg[0], seg[1], drawn(motion, el.dashed), el.dashed);
    }
    case "ray": {
      const seg = clipRay(view, el.from, el.angle);
      if (!seg) return null;
      const [sx, sy] = f.px(el.from);
      return (
        <g>
          {line(seg[0], seg[1], drawn(motion))}
          <polygon {...motion} points={arrowHead(f, seg[0], seg[1])} fill={color} />
          <circle {...motion} cx={fmt(sx)} cy={fmt(sy)} r={4.5} fill="var(--figure-bg, var(--background))" stroke={color} strokeWidth={2} />
        </g>
      );
    }
    case "circle": {
      const [cx, cy] = f.px(el.centre);
      return <circle {...drawn(motion, el.dashed)} {...stroke} {...dash(el.dashed)} cx={fmt(cx)} cy={fmt(cy)} r={fmt(el.r * f.scale)} />;
    }
    case "ellipse": {
      const [cx, cy] = f.px(el.centre);
      return (
        <ellipse {...drawn(motion, el.dashed)} {...stroke} {...dash(el.dashed)} cx={fmt(cx)} cy={fmt(cy)} rx={fmt(el.rx * f.scale)} ry={fmt(el.ry * f.scale)} />
      );
    }
    case "hyperbola": {
      const d = hyperbolaPoints(view, el.centre, el.a, el.b, el.axis, el.branch)
        .map((p, i) => `${i === 0 ? "M" : "L"} ${f.px(p).map(fmt).join(" ")}`)
        .join(" ");
      return <path {...drawn(motion, el.dashed)} {...stroke} {...dash(el.dashed)} strokeLinejoin="round" d={d} />;
    }
    case "arc":
      return <path {...drawn(motion)} {...stroke} pathLength={1} d={arcPath(f, el.centre, el.r, el.from, el.to)} />;
    case "angle":
      return <path {...drawn(motion)} {...stroke} strokeWidth={1.75} pathLength={1} d={arcPath(f, el.at, ANGLE_MARK_PX / f.scale, el.from, el.to)} />;
    case "label":
      return null; // drawn with the labels
    case "region":
      return <Region el={el} id={id} view={view} f={f} color={color} motion={motion} />;
  }
}

function Label({ el, view, f, motion }: { el: FigureElement; view: View; f: Frame; motion: Motion }) {
  if (!el.label) return null;
  const anchor = labelAnchor(el, view, f);
  if (!anchor) return null;
  const [ax, ay] = f.px(anchor);
  const [dx, dy, textAnchor] = LABEL_OFFSET[el.labelAt ?? (el.kind === "label" ? "n" : "ne")];
  // Clamp into the frame: a label anchored near an edge would otherwise be cut off.
  const w = el.label.length * LABEL_CHAR_PX;
  const lead = textAnchor === "start" ? 0 : textAnchor === "end" ? w : w / 2;
  const x = Math.min(Math.max(ax + dx, lead + 2), f.width - (w - lead) - 2);
  const y = Math.min(Math.max(ay + dy, LABEL_PX - 1), f.height - 4);
  return (
    <text
      {...motion}
      x={fmt(x)}
      y={fmt(y)}
      textAnchor={textAnchor}
      fontSize={LABEL_PX}
      fontWeight={500}
      fill={el.tone && el.tone !== "accent" ? TONE[el.tone] : "var(--foreground)"}
      stroke="var(--figure-bg, var(--background))"
      strokeWidth={4}
      paintOrder="stroke"
      strokeLinejoin="round"
    >
      {el.label}
    </text>
  );
}

export function FigureView(props: Props) {
  const { figure, className } = props;
  const id = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const f = frameFor(figure.view);
  const visible = figure.elements
    .map((el, i) => ({ el, i, motion: motionFor(el, props) }))
    .filter((v): v is { el: FigureElement; i: number; motion: Motion } => v.motion !== null);
  // Regions underneath the axes; everything else above; labels on top.
  const regions = visible.filter((v) => v.el.kind === "region");
  const others = visible.filter((v) => v.el.kind !== "region");

  return (
    <svg
      viewBox={`0 0 ${fmt(f.width)} ${fmt(f.height)}`}
      role="img"
      aria-labelledby={`${id}-title`}
      className={className}
      style={{ maxHeight: "60vh" }}
    >
      <title id={`${id}-title`}>{figure.alt}</title>
      {regions.map(({ el, i, motion }) => (
        <ElementView key={i} el={el} id={`${id}-r${i}`} view={figure.view} f={f} motion={motion} />
      ))}
      <Axes view={figure.view} f={f} />
      {others.map(({ el, i, motion }) => (
        <ElementView key={i} el={el} id={`${id}-e${i}`} view={figure.view} f={f} motion={motion} />
      ))}
      {visible.map(({ el, i, motion }) => (
        <Label key={`l${i}`} el={el} view={figure.view} f={f} motion={motion.className ? { ...motion, className: "fig-in" } : motion} />
      ))}
    </svg>
  );
}
