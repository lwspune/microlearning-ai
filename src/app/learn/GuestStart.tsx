import { card, eyebrow, primaryButton } from "@/components/ui";
import { startAsGuest } from "./actions";

/** Starts a guest session (no sign-up) and returns to `next`. */
export function GuestStart({ next, error }: { next: string; error?: boolean }) {
  return (
    <section className={`${card} mx-auto mt-6 max-w-lg p-8`} aria-labelledby="guest-start">
      <p className={eyebrow}>Free · no sign-up</p>
      <h2 id="guest-start" className="mt-2 font-display text-3xl font-semibold tracking-tight">
        Start learning
      </h2>
      <p className="mt-2 text-muted">Jump straight in as a guest. Your progress is saved on this device.</p>
      {error && (
        <p className="mt-2 text-danger" role="alert">
          Couldn&apos;t start a session. Please try again.
        </p>
      )}
      <form action={startAsGuest} className="mt-6">
        <input type="hidden" name="next" value={next} />
        <button type="submit" className={`${primaryButton} w-full sm:w-auto`}>
          Start as guest
        </button>
      </form>
    </section>
  );
}
