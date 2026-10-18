"use client";

import { type KeyboardEvent, type ReactNode, useId, useRef, useState, useTransition } from "react";

export type Tab = { id: string; title: string };

/**
 * A pill switch between panels (WAI-ARIA tabs: arrow keys, Home, End). With
 * `remember`, the choice is saved on this browser, so the student sees it again
 * next time. Every panel is server-rendered; hidden ones stay in the page for
 * search engines and no-JS visitors.
 */
export function Tabs({
  label,
  tabs,
  initial,
  panels,
  remember,
}: {
  label: string;
  tabs: Tab[];
  initial: string;
  panels: Record<string, ReactNode>;
  remember?: (id: string) => Promise<void>;
}) {
  const [active, setActive] = useState(initial);
  const [, startTransition] = useTransition();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const index = Math.max(0, tabs.findIndex((t) => t.id === active));

  const select = (i: number, focus = false) => {
    const tab = tabs[i];
    setActive(tab.id);
    if (focus) buttons.current[i]?.focus();
    if (remember) startTransition(() => remember(tab.id));
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = tabs.length - 1;
    const to = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    select(to, true);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="relative inline-grid rounded-full border border-border bg-card p-1 shadow-card"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-1 left-1 rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
          style={{ width: `calc((100% - 0.5rem) / ${tabs.length})`, transform: `translateX(${index * 100}%)` }}
        />
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={t.id === active ? 0 : -1}
            onClick={() => select(i)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-300 sm:px-7 sm:text-base ${
              t.id === active ? "text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`${base}-panel-${t.id}`} aria-labelledby={`${base}-tab-${t.id}`} hidden={t.id !== active} className="mt-6">
          {panels[t.id]}
        </div>
      ))}
    </div>
  );
}
