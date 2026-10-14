import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import { RichInline } from "@/components/RichText";
import { card, eyebrow } from "@/components/ui";
import type { ConceptStatus } from "@/lib/performance";
import { studentPerformance } from "@/server/performance";
import { requireAreaAt } from "@/server/viewer";

export const metadata: Metadata = { title: "Student" };

/** Status by symbol and word as well as colour, so it never relies on colour alone. */
const STATUS: Record<ConceptStatus, { label: string; mark: string; className: string }> = {
  mastered: { label: "Mastered", mark: "✓", className: "bg-success-surface text-success" },
  "review-due": { label: "Review due", mark: "↻", className: "bg-warning-surface text-foreground" },
  learning: { label: "Learning", mark: "●", className: "bg-accent-soft text-accent" },
  "not-started": { label: "Not started", mark: "○", className: "bg-surface text-muted" },
};

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={`${card} p-4`}>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}

async function StudentContent({ params }: { params: PageProps<"/teach/students/[id]">["params"] }) {
  const { profile } = await requireAreaAt("/teach/students");
  const { id } = await params;
  // Row level security decides: another academy's student comes back as null.
  const perf = /^[0-9a-f-]{36}$/i.test(id) ? await studentPerformance(id) : null;
  if (!perf) notFound();
  const { summary } = perf;

  return (
    <>
      <Link
        href={profile.role === "superadmin" ? "/admin" : "/teach/students"}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
      >
        <ArrowLeftIcon className="h-4 w-4" /> {profile.role === "superadmin" ? "Admin" : "Students"}
      </Link>
      <p className={`${eyebrow} mt-6`}>Student</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">{summary.fullName}</h1>
      <p className="mt-1 font-mono text-sm text-muted">{summary.login}</p>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
        <Stat label="Mastered" value={summary.mastered} />
        <Stat label="In progress" value={summary.learning} />
        <Stat label="Reviews due" value={summary.reviewsDue} />
        <Stat label="Accuracy" value={summary.accuracy === null ? "—" : `${summary.accuracy}%`} />
        <Stat label="Last active" value={summary.lastActive} />
      </div>

      <section aria-labelledby="mistakes" className="mt-12">
        <h2 id="mistakes" className="font-display text-2xl font-semibold">
          Recent mistakes
        </h2>
        <p className="mt-1 text-sm text-muted">The last 30 days, most frequent first: what a wrong answer showed they misunderstood.</p>
        {perf.mistakes.length === 0 ? (
          <p className={`${card} mt-4 p-5 text-muted`}>No mistakes in the last 30 days.</p>
        ) : (
          <ol className={`${card} mt-4 divide-y divide-border`}>
            {perf.mistakes.map((m) => (
              <li key={`${m.concept}-${m.mistake}`} className="flex items-start gap-4 px-5 py-4">
                <span className="shrink-0 rounded-full bg-danger-surface px-2.5 py-0.5 text-sm font-semibold text-danger tabular-nums">
                  {m.recent}×
                </span>
                <span className="min-w-0">
                  <span className="block">
                    <RichInline text={m.mistake} />
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    In {m.concept} · last {m.last}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section aria-labelledby="concepts" className="mt-12">
        <h2 id="concepts" className="font-display text-2xl font-semibold">
          Concept by concept
        </h2>
        {perf.chapters.map((ch) => (
          <div key={ch.slug} className="mt-6">
            <h3 className="font-display text-xl font-semibold">{ch.title}</h3>
            {ch.groups.map((g) => (
              <div key={g.name} className="mt-4">
                <h4 className="text-sm font-semibold text-muted">{g.name}</h4>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {g.concepts.map((c) => {
                    const s = STATUS[c.status];
                    return (
                      <li key={c.code} className={`${card} flex items-center justify-between gap-3 px-4 py-3`}>
                        <span className="min-w-0 truncate">{c.title}</span>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.className}`}>
                          <span aria-hidden="true">{s.mark} </span>
                          {s.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default function StudentPage({ params }: PageProps<"/teach/students/[id]">) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <Suspense fallback={<p className="text-muted">Loading…</p>}>
        <StudentContent params={params} />
      </Suspense>
    </main>
  );
}
