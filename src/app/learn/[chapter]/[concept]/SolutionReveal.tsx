"use client";

import { useEffect, useRef, useState } from "react";
import { StepList } from "@/components/StepList";
import { FigureView } from "@/figures/FigureView";
import type { RenderedSolution } from "@/server/learning";
import { card, secondaryButton } from "@/components/ui";
import { FigureFrame } from "@/figures/FigureFrame";

/** Seconds between solution steps; figure elements tagged with a step appear in sync. */
const STEP_S = 0.9;

/** The "See the solution" button; it sits in the row with the other answer buttons. */
export function SolutionToggle({ open, panelId, onToggle }: { open: boolean; panelId: string; onToggle: () => void }) {
  return (
    <button type="button" className={secondaryButton} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
      {open ? "Hide the solution" : "See the solution"}
    </button>
  );
}

/** The solution itself: the steps play in turn, beside the figure when there is one. */
export function SolutionPanel({ solution, panelId }: { solution: RenderedSolution; panelId: string }) {
  const [plays, setPlays] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // On small screens the solution opens below the fold of the slide.
  useEffect(() => {
    panelRef.current?.scrollIntoView({ block: "nearest" });
  }, [plays]);

  return (
    // Remounting on replay restarts the CSS animations.
    <div key={plays} ref={panelRef} id={panelId} data-solution className={`${card} mt-4 p-5`}>
      <p className="font-display text-lg font-semibold">Solution</p>
      <div className={`mt-4 ${solution.figure ? "grid gap-6 md:grid-cols-2 md:items-start" : ""}`}>
        <div lang={solution.lang}>
          <StepList steps={solution.steps} stagger={STEP_S} />
        </div>
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
  );
}
