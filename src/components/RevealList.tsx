"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * A list whose items rise in, one after another, the first time it scrolls
 * into view (or is shown, e.g. when its tab is picked). Items opt in with the
 * `reveal-item` class and a `--i` index. The hidden starting state only
 * applies with scripting on and motion allowed (globals.css), so without
 * JavaScript, or with reduced motion, the items are simply there.
 *
 * `spotlight`: a soft glow follows the pointer across `.spot` cards.
 */
export function RevealList({
  children,
  className,
  spotlight = false,
  ordered = false,
}: {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
  ordered?: boolean;
}) {
  const ref = useRef<HTMLUListElement & HTMLOListElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onPointerMove = spotlight
    ? (e: React.PointerEvent) => {
        const card = (e.target as Element).closest<HTMLElement>(".spot");
        if (!card) return;
        const box = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - box.left}px`);
        card.style.setProperty("--my", `${e.clientY - box.top}px`);
      }
    : undefined;

  const List = ordered ? "ol" : "ul";
  return (
    <List ref={ref} data-reveal={shown ? "in" : "pending"} onPointerMove={onPointerMove} className={className}>
      {children}
    </List>
  );
}
