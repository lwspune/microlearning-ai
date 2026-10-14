"use client";

import { useActionState, useId, useState } from "react";
import type { AddPeopleState } from "@/app/teach/people/actions";
import { card, primaryButton, secondaryButton } from "@/components/ui";
import type { Role } from "@/lib/auth/routing";

const ROLE_LABEL: Record<Role, string> = { student: "Students", teacher: "Teachers", academy_admin: "Academy admins", superadmin: "Superadmins" };

function Results({ state }: { state: Extract<AddPeopleState, { kind: "done" }> }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const rows = state.created.map((p) => `${p.fullName}\t${p.login}\t${p.password}`);
    await navigator.clipboard.writeText(["Name\tSigns in with\tPassword", ...rows].join("\n"));
    setCopied(true);
  };
  return (
    <div role="status" className={`${card} mb-8 p-6`}>
      <h3 className="font-display text-2xl font-semibold">
        {state.created.length === 1 ? "1 login created" : `${state.created.length} logins created`}
      </h3>
      {state.created.length > 0 && (
        <>
          <p className="mt-2 rounded-xl bg-warning-surface px-4 py-3 font-medium">
            Copy or print these passwords now. They&apos;re shown only once and can&apos;t be looked up later.
          </p>
          {/* Phones: one card per login, so the password is never scrolled out of view. */}
          <ul className="mt-4 divide-y divide-border sm:hidden">
            {state.created.map((p) => (
              <li key={p.login} className="py-3 text-sm">
                <p className="font-medium">{p.fullName}</p>
                <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
                  <dt className="text-muted">Signs in with</dt>
                  <dd className="font-mono break-all">{p.login}</dd>
                  <dt className="text-muted">Password</dt>
                  <dd className="font-mono">{p.password}</dd>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-4 hidden overflow-x-auto sm:block">
            <table className="w-full text-left text-sm">
              <thead className="text-muted">
                <tr>
                  <th scope="col" className="py-2 pr-4 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold">
                    Signs in with
                  </th>
                  <th scope="col" className="py-2 font-semibold">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {state.created.map((p) => (
                  <tr key={p.login}>
                    <td className="py-2 pr-4">{p.fullName}</td>
                    <td className="py-2 pr-4 font-mono">{p.login}</td>
                    <td className="py-2 font-mono">{p.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className={secondaryButton} onClick={copy}>
              {copied ? "Copied ✓" : "Copy all"}
            </button>
            <button type="button" className={secondaryButton} onClick={() => window.print()}>
              Print
            </button>
          </div>
        </>
      )}
      {state.existing.length > 0 && (
        <p className="mt-4 text-sm">
          <span className="font-semibold">Already have an account, not changed:</span> {state.existing.join(", ")}
        </p>
      )}
      {state.failed.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-danger">
          {state.failed.map((f) => (
            <li key={f.login}>
              {f.login}: {f.reason}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Paste a list to create logins. `roles` are the ones this viewer may add;
 * the server checks again (can_create_person).
 */
export function AddPeopleForm({
  action,
  roles,
}: {
  action: (state: AddPeopleState, form: FormData) => Promise<AddPeopleState>;
  roles: Role[];
}) {
  const [state, submit, pending] = useActionState(action, { kind: "idle" } as AddPeopleState);
  const [role, setRole] = useState<Role>(roles[0]);
  const id = useId();
  const radio = "h-4 w-4 accent-[var(--accent)]";

  return (
    <div>
      {state.kind === "done" && <Results state={state} />}
      <form action={submit} className="space-y-6" noValidate>
        {roles.length > 1 ? (
          <fieldset>
            <legend className="text-sm font-semibold">Who are you adding?</legend>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              {roles.map((r) => (
                <label key={r} className="inline-flex items-center gap-2">
                  <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} className={radio} />
                  {ROLE_LABEL[r]}
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <input type="hidden" name="role" value={roles[0]} />
        )}

        {role === "student" && (
          <fieldset>
            <legend className="text-sm font-semibold">Their stage</legend>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="stage" value="school" defaultChecked className={radio} />
                11th + 12th
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="stage" value="graduate" className={radio} />
                Graduates
              </label>
            </div>
          </fieldset>
        )}

        <div>
          <label htmlFor={`${id}-lines`} className="block text-sm font-semibold">
            One person per line: name, then email or username
          </label>
          <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
            Type them, or paste two columns from a spreadsheet. A username is lowercase letters or digits, with . _ - between
            them (aarav.k). Every new login gets a password, shown once.
          </p>
          <textarea
            id={`${id}-lines`}
            name="lines"
            rows={8}
            required
            aria-describedby={`${id}-hint`}
            placeholder={"Aarav Kulkarni, aarav.k\nPriya Shah, priya@example.com"}
            className="mt-2 block w-full rounded-xl border border-border-strong bg-card px-3.5 py-3 font-mono text-sm shadow-card focus:border-accent"
          />
        </div>

        {state.kind === "error" && (
          <div role="alert" className="rounded-xl bg-danger-surface px-4 py-3 text-sm text-danger">
            <p className="font-semibold">{state.message}</p>
            {state.lineErrors && (
              <ul className="mt-2 space-y-1">
                {state.lineErrors.map((e) => (
                  <li key={`${e.line}-${e.message}`}>{e.line > 0 ? `Line ${e.line}: ${e.message}` : e.message}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button type="submit" disabled={pending} className={primaryButton}>
          {pending ? "Adding…" : "Add people"}
        </button>
      </form>
    </div>
  );
}
