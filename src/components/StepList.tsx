import type { CSSProperties } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import type { RenderedInline } from "@/lib/renderedText";

/**
 * Numbered solution steps with number chips.
 * - `current`: the step just added (worked slides); earlier steps are muted.
 * - `stagger`: seconds between steps fading in one after another (solutions).
 */
export function StepList({ steps, current, stagger }: { steps: RenderedInline[][]; current?: number; stagger?: number }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => {
        const isCurrent = current === i;
        const style: CSSProperties | undefined = stagger !== undefined ? { animationDelay: `${i * stagger}s` } : undefined;
        const motion = stagger !== undefined ? "fig-in" : isCurrent ? "motion-safe:animate-slide-in" : "";
        return (
          <li key={i} className={`flex gap-3 ${motion}`} style={style}>
            <span
              className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-semibold tabular-nums ${
                isCurrent || current === undefined ? "bg-accent-soft text-accent" : "bg-surface text-muted"
              }`}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span className={`min-w-0 flex-1 ${current !== undefined && !isCurrent ? "text-muted" : ""}`}>
              <RenderedInlineNodes nodes={step} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}
