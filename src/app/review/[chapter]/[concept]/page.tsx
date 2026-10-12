import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichInline, RichText } from "@/components/RichText";
import { chapters } from "@/content/chapters";
import type { Fallback, ItemSource } from "@/content/types";
import { findConcept, reviewEnabled } from "@/lib/review";

export function generateStaticParams() {
  return chapters.flatMap((ch) =>
    ch.concepts.map((c) => ({ chapter: ch.slug, concept: ch.graph.find((n) => n.id === c.id)!.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<"/review/[chapter]/[concept]">): Promise<Metadata> {
  const { chapter, concept } = await params;
  const found = findConcept(chapter, concept);
  return { title: found ? `${found.node.id} ${found.node.title} · review` : "Content review" };
}

function fallbackLabel(f: Fallback): string {
  if (f.kind === "concept") return `Route to ${f.id}`;
  if (f.kind === "ext") return `Outside this chapter: ${f.topic}`;
  return "No route (convention only)";
}

function sourceLabel(s: ItemSource): string {
  if (s.kind === "authored") return "Authored";
  if (s.kind === "pyqvault-practice") return `PYQ Vault practice · ${s.ref}`;
  return `${s.exam} style${s.ref ? ` · ${s.ref}` : ""}`;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function ConceptReview({ params }: PageProps<"/review/[chapter]/[concept]">) {
  if (!reviewEnabled()) notFound();
  const { chapter: chapterSlug, concept: conceptSlug } = await params;
  const found = findConcept(chapterSlug, conceptSlug);
  if (!found) notFound();
  const { chapter, node, concept } = found;
  const { explanation: ex } = concept;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 leading-relaxed">
      <Link href="/review" className="text-sm text-accent underline-offset-2 hover:underline">
        ← {chapter.title}
      </Link>

      <header className="mt-4">
        <p className="font-mono text-sm text-muted">
          {node.id} · {concept.status}
        </p>
        <h1 className="mt-1 text-2xl font-semibold">{node.title}</h1>
        <p className="mt-2 text-muted">
          <RichInline text={node.oneLiner} />
        </p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="text-muted">Needs</dt>
          <dd>{node.prereqs.join(", ") || "—"}</dd>
          {node.ext.length > 0 && (
            <>
              <dt className="text-muted">Assumes</dt>
              <dd>{node.ext.join(", ")}</dd>
            </>
          )}
          <dt className="text-muted">Tier</dt>
          <dd>{node.tier === "adv" ? "advanced" : "core"}</dd>
        </dl>
      </header>

      <Section title="Hook">
        <RichText text={concept.hook.prompt} />
        <details className="mt-3 rounded-lg border border-border bg-surface px-4 py-3">
          <summary className="cursor-pointer font-medium">Reveal</summary>
          <RichText text={concept.hook.reveal} className="mt-2" />
        </details>
      </Section>

      <Section title="Explanation">
        <h3 className="font-semibold">Intuition</h3>
        <RichText text={ex.intuition} className="mt-2" />
        <h3 className="mt-6 font-semibold">Formal</h3>
        <RichText text={ex.formal} className="mt-2" />
        <h3 className="mt-6 font-semibold">Worked example</h3>
        <div className="mt-2 rounded-lg border border-border p-4">
          <RichText text={ex.worked.prompt} />
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {ex.worked.steps.map((s, i) => (
              <li key={i}>
                <RichInline text={s} />
              </li>
            ))}
          </ol>
          <p className="mt-3 border-t border-border pt-3">
            <span className="font-medium">Answer: </span>
            <RichInline text={ex.worked.answer} />
          </p>
        </div>
        <h3 className="mt-6 font-semibold">Visual</h3>
        <p className="mt-1 text-sm text-muted">Spec only. The interactive version is built in M2.</p>
        <RichText text={ex.visualSpec} className="mt-2" />
      </Section>

      <Section title={`Misconceptions (${concept.misconceptions.length})`}>
        <ul className="space-y-3">
          {concept.misconceptions.map((m) => (
            <li key={m.id} className="rounded-lg border border-border p-4">
              <p className="font-mono text-sm text-muted">{m.id}</p>
              <p className="mt-1 font-medium">
                <RichInline text={m.mistake} />
              </p>
              <p className="mt-2 text-sm text-muted">Student sees</p>
              <RichText text={m.remediation} className="mt-1" />
              <p className="mt-2 text-sm text-muted">{fallbackLabel(m.fallback)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={`Check items (${concept.items.length})`}>
        <ol className="space-y-4">
          {concept.items.map((item) => (
            <li key={item.id} className="rounded-lg border border-border p-4">
              <p className="flex flex-wrap gap-x-2 text-sm text-muted">
                <span className="font-mono">{item.id}</span>
                <span>{sourceLabel(item.source)}</span>
              </p>
              <RichText text={item.stem} className="mt-2" />
              <ul className="mt-3 space-y-2">
                {item.options.map((o) => (
                  <li
                    key={o.key}
                    className={`flex flex-wrap items-baseline gap-x-3 rounded-md px-3 py-2 ${
                      o.correct ? "bg-success-surface" : "bg-surface"
                    }`}
                  >
                    <span className="font-mono text-sm font-semibold">{o.key}</span>
                    <span className="min-w-0 flex-1">
                      <RichInline text={o.text} />
                    </span>
                    {o.correct ? (
                      <span className="text-sm font-semibold text-success">✓ Correct</span>
                    ) : (
                      <span className="font-mono text-sm text-danger">{o.misconceptionId}</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {concept.engineNotes && concept.engineNotes.length > 0 && (
        <Section title="Engine notes">
          <ul className="list-disc space-y-1 rounded-lg bg-warning-surface py-3 pr-4 pl-8">
            {concept.engineNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}
