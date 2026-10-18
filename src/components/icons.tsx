/** Small inline icons (no icon library). Decorative: pair each with visible text. */

type IconProps = { className?: string };

const base = (className?: string) => ({
  className: className ?? "h-4 w-4",
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M7 9V6.5a3 3 0 016 0V9" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M16 10H4M9 5l-5 5 5 5" />
    </svg>
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M15.5 8A6 6 0 004.6 6.5M4.5 12a6 6 0 0010.9 1.5" />
      <path d="M4 3v3.5h3.5M16 17v-3.5h-3.5" />
    </svg>
  );
}

/** The brand mark: a ladder narrowing as it rises. The app icon draws the same path. */
export const LADDER_PATH = "M5 17L7.5 3M15 17L12.5 3M5.6 13.5h8.8M6.25 10h7.5M6.9 6.5h6.2";

export function LadderIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d={LADDER_PATH} />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M10 4v12M5 11l5 5 5-5" />
    </svg>
  );
}
