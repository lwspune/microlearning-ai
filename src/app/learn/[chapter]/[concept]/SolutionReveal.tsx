"use client";

import { useEffect, useId, useRef, useState } from "react";
import { StepList } from "@/components/StepList";
import { FigureView } from "@/figures/FigureView";
import type { RenderedSolution } from "@/server/learning";
import { card, secondaryButton } from "@/components/ui";
import { FigureFrame } from "@/figures/FigureFrame";

/** Seconds between solution steps; figure elements tagged with a step appear in sync. */
const STEP_S = 0.9;

/** "See the solution": the steps play in turn, beside the figure when there is one. */
export function SolutionReveal({ solution }: { solution: RenderedSolution }) {
  const [open, setOpen] = useState(false);
  const [plays, setPlays] = useState(0);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // On small screens the solution opens below the fold of the slide.
  useEffect(() => {
    if (open) panelRef.current?.scrollIntoView({ block: "nearest" });
  }, [open, plays]);

  return (
    <div className="mt-4">
      <button type="button" className={secondaryButton} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide the solution" : "See the solution"}
      </button>
      {open && (
        // Remounting on replay restarts the CSS animations.
        <div key={plays} ref={panelRef} id={panelId} data-solution className={`${card} mt-4 p-5`}>
          <p className="font-display text-lg font-semibold">Solution</p>
          <div className={`mt-4 ${solution.figure ? "grid gap-6 md:grid-cols-2 md:items-start" : ""}`}>
            <StepList steps={solution.steps} stagger={STEP_S} />
            {solution.figure && (
              <FigureFrame>
                <FigureView figure={solution.figure} stagger={STEP_S} className="h-auto w-full" />
              </FigureFrame>
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
