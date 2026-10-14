"use client";

import { useActionState } from "react";
import { primaryButton } from "@/components/ui";
import { type LoginState, signIn } from "./actions";

const input =
  "mt-1.5 block min-h-12 w-full rounded-xl border border-border-strong bg-card px-3.5 text-base shadow-card focus:border-accent";

/** Email + password. The action only returns on failure; success redirects. */
export function LoginForm({ next }: { next: string | null }) {
  const [state, submit, pending] = useActionState<LoginState, FormData>(signIn, { error: null });
  return (
    <form action={submit} className="space-y-5" noValidate>
      {next && <input type="hidden" name="next" value={next} />}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold">
          Email or username
        </label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          required
          defaultValue={state.email}
          className={input}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold">
          Password
        </label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={input} />
      </div>
      {state.error && (
        <p role="alert" className="rounded-xl bg-danger-surface px-3.5 py-2.5 text-sm font-medium text-danger">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending} className={`${primaryButton} w-full`}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
