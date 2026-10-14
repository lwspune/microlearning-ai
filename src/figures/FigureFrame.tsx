import type { CSSProperties, ReactNode } from "react";
import { card } from "@/components/ui";

/**
 * A figure on a card; label halos and hollow points take the card's colour (--figure-bg).
 * `glass`: a frosted card that lets what's behind it show through, softly.
 */
export function FigureFrame({ children, glass = false }: { children: ReactNode; glass?: boolean }) {
  const surface = glass ? "rounded-2xl border border-border bg-card/60 shadow-lift backdrop-blur-[3px]" : card;
  return (
    <div className={`${surface} mx-auto w-full max-w-sm p-2 md:max-w-none`} style={{ "--figure-bg": "var(--card)" } as CSSProperties}>
      {children}
    </div>
  );
}
