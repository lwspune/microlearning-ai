import { startAsGuest } from "./actions";

/** Starts a guest session (no sign-up) and returns to `next`. */
export function GuestStart({ next, error }: { next: string; error?: boolean }) {
  return (
    <section className="rounded-lg border border-border bg-surface p-5" aria-labelledby="guest-start">
      <h2 id="guest-start" className="text-lg font-semibold">
        Start learning
      </h2>
      <p className="mt-2 text-muted">No sign-up needed. Your progress is saved on this device.</p>
      {error && (
        <p className="mt-2 text-danger" role="alert">
          Couldn&apos;t start a session. Please try again.
        </p>
      )}
      <form action={startAsGuest} className="mt-4">
        <input type="hidden" name="next" value={next} />
        <button type="submit" className="rounded-md bg-accent px-5 py-3 font-medium text-background hover:opacity-90">
          Start as guest
        </button>
      </form>
    </section>
  );
}
