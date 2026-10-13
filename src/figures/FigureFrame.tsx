import type { CSSProperties, ReactNode } from "react";
import { card } from "@/components/ui";

/** A figure on a card; label halos and hollow points take the card's colour (--figure-bg). */
export function FigureFrame({ children }: { children: ReactNode }) {
  return (
    <div className={`${card} mx-auto w-full max-w-sm p-2 md:max-w-none`} style={{ "--figure-bg": "var(--card)" } as CSSProperties}>
      {children}
    </div>
  );
}
