"use client";

import { useId, useState } from "react";
import { RenderedInlineNodes } from "@/components/RenderedRichText";
import { FigureView } from "@/figures/FigureView";
import type { RenderedSolution } from "@/server/learning";
import { secondaryButton } from "./ui";

/** Seconds between solution steps; figure elements tagged with a step appear in sync. */
const STEP_S = 0.9;

/** "See the solution": the steps play in turn, beside the figure when there is one. */
export function SolutionReveal({ solution }: { solution: RenderedSolution }) {
  const [open, setOpen] = useState(false);
  const [plays, setPlays] = useState(0);
  const panelId = useId();

  return (
    <div className="mt-4">
      <button type="button" className={secondaryButton} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide the solution" : "See the solution"}
      </button>
      {open && (
        // Remounting on replay restarts the CSS animations.
        <div key={plays} id={panelId} data-solution className="mt-4 rounded-lg border border-border p-4">
          <div className={solution.figure ? "grid gap-6 md:grid-cols-2 md:items-start" : undefined}>
            <ol className="list-decimal space-y-3 pl-6">
              {solution.steps.map((step, i) => (
                <li key={i} className="fig-in" style={{ animationDelay: `${i * STEP_S}s` }}>
                  <RenderedInlineNodes nodes={step} />
                </li>
              ))}
            </ol>
            {solution.figure && (
              <div className="mx-auto w-full max-w-sm md:max-w-none">
                <FigureView figure={solution.figure} stagger={STEP_S} className="h-auto w-full" />
              </div>
            )}
          </div>
          <button type="button" className="mt-4 text-sm font-medium text-accent underline underline-offset-2" onClick={() => setPlays((n) => n + 1)}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
