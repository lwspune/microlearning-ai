"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Area, AREA_HOME, areaOfPath } from "@/lib/auth/routing";

const LABEL: Record<Area, string> = { student: "Learn", teach: "Teach", admin: "Admin" };

/** Links to the areas this role reaches (layered access); the current one is marked. */
export function AreaSwitcher({ areas }: { areas: readonly Area[] }) {
  const current = areaOfPath(usePathname());
  return (
    <ul className="flex items-center gap-1 rounded-full border border-border bg-card p-0.5 text-sm font-medium">
      {areas.map((a) => (
        <li key={a}>
          <Link
            href={AREA_HOME[a]}
            aria-current={a === current ? "page" : undefined}
            className={`block rounded-full px-3 py-1 transition-colors motion-reduce:transition-none ${
              a === current ? "bg-accent text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {LABEL[a]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
