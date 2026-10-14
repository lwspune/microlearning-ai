"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { primaryButton } from "@/components/ui";
import { slugify } from "@/lib/people";
import { type CreateAcademyState, createAcademy } from "./actions";

const input = "mt-1.5 block min-h-12 w-full rounded-xl border border-border-strong bg-card px-3.5 text-base shadow-card focus:border-accent";

/** Name and short name (suggested from the name until edited). */
export function CreateAcademyForm() {
  const [state, submit, pending] = useActionState<CreateAcademyState, FormData>(createAcademy, { kind: "idle" });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState<string | null>(null);
  return (
    <form action={submit} className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end" noValidate>
      <div>
        <label htmlFor="academy-name" className="block text-sm font-semibold">
          Academy name
        </label>
        <input id="academy-name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className={input} />
      </div>
      <div>
        <label htmlFor="academy-slug" className="block text-sm font-semibold">
          Short name
        </label>
        <input
          id="academy-slug"
          name="slug"
          required
          autoCapitalize="none"
          spellCheck={false}
          value={slug ?? slugify(name)}
          onChange={(e) => setSlug(e.target.value)}
          className={`${input} font-mono`}
        />
      </div>
      <button type="submit" disabled={pending} className={primaryButton}>
        {pending ? "Creating…" : "Create academy"}
      </button>
      {state.kind === "error" && (
        <p role="alert" className="rounded-xl bg-danger-surface px-4 py-3 text-sm font-medium text-danger sm:col-span-3">
          {state.message}
        </p>
      )}
      {state.kind === "done" && (
        <p role="status" className="rounded-xl bg-success-surface px-4 py-3 text-sm font-medium text-success sm:col-span-3">
          Created {state.name}.{" "}
          <Link href={`/admin/academies/${state.slug}`} className="underline underline-offset-4">
            Add its people →
          </Link>
        </p>
      )}
    </form>
  );
}
