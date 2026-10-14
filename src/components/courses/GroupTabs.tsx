"use client";

import { type KeyboardEvent, type ReactNode, useId, useRef, useState, useTransition } from "react";
import { rememberGroup } from "@/app/courses/actions";
import type { Group } from "@/content/courses";
import type { GroupId } from "@/content/types";

/**
 * The 11th + 12th / Graduates switch (WAI-ARIA tabs: arrow keys, Home, End).
 * The choice is remembered on this browser, so a student sees their own
 * group's courses next time. Every panel is server-rendered; hidden ones stay
 * in the page for search engines and no-JS visitors.
 */
export function GroupTabs({ groups, initial, panels }: { groups: Group[]; initial: GroupId; panels: Record<GroupId, ReactNode> }) {
  const [active, setActive] = useState<GroupId>(initial);
  const [, startTransition] = useTransition();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const index = Math.max(0, groups.findIndex((g) => g.id === active));

  const select = (i: number, focus = false) => {
    const group = groups[i];
    setActive(group.id);
    if (focus) tabs.current[i]?.focus();
    startTransition(() => rememberGroup(group.id));
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = groups.length - 1;
    const to = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    select(to, true);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Where you are"
        onKeyDown={onKeyDown}
        className="relative inline-grid rounded-full border border-border bg-card p-1 shadow-card"
        style={{ gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-1 left-1 rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
          style={{ width: `calc((100% - 0.5rem) / ${groups.length})`, transform: `translateX(${index * 100}%)` }}
        />
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${g.id}`}
            aria-selected={g.id === active}
            aria-controls={`${base}-panel-${g.id}`}
            tabIndex={g.id === active ? 0 : -1}
            onClick={() => select(i)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-300 sm:px-7 sm:text-base ${
              g.id === active ? "text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {g.title}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <div
          key={g.id}
          role="tabpanel"
          id={`${base}-panel-${g.id}`}
          aria-labelledby={`${base}-tab-${g.id}`}
          hidden={g.id !== active}
          className="mt-6"
        >
          <p className="text-muted">{g.blurb}</p>
          {panels[g.id]}
        </div>
      ))}
    </div>
  );
}
