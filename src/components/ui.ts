/**
 * Shared class names for the "calm editorial" theme. Tailwind classes kept as
 * strings so server and client components share them without a wrapper.
 * Lift-on-hover is skipped when the learner prefers reduced motion.
 */

const press =
  "transition duration-150 hover:-translate-y-px active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 disabled:pointer-events-none";

/**
 * Button looks without a size. Add exactly one size (below), since two padding classes in one
 * string conflict.
 */
export const primaryButtonShape = `inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-medium text-background shadow-card hover:shadow-lift disabled:opacity-50 ${press}`;
export const secondaryButtonShape = `inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card font-medium shadow-card hover:border-border-strong disabled:opacity-40 ${press}`;

/** The usual button size. */
const buttonSize = "px-5 py-3";

/** Smaller on a phone and kept to one line from 360px up (narrower, a long label may wrap): two buttons side by side. */
export const compactButtonSize = "whitespace-nowrap max-[359px]:whitespace-normal px-3.5 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base";

export const primaryButton = `${primaryButtonShape} ${buttonSize}`;

export const secondaryButton = `${secondaryButtonShape} ${buttonSize}`;

/**
 * Card shape without colours. Variants add exactly one border colour and one
 * background, since two classes for the same property in one string conflict.
 */
const cardShape = "rounded-2xl border shadow-card";

/** A raised surface: panels, the lesson stage. */
export const card = `${cardShape} border-border bg-card`;

/** Shape and hover lift for a card that is a link; add a border colour and background. */
export const linkCardShape = `${cardShape} block hover:shadow-lift ${press}`;

/** The default link card. */
export const linkCard = `${linkCardShape} border-border bg-card hover:border-border-strong`;

/** Small all-caps label above a heading. */
export const eyebrow = "text-xs font-semibold tracking-[0.12em] text-muted uppercase";
