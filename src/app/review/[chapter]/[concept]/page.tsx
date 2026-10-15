import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RichInline, RichText } from "@/components/RichText";
import { chapters } from "@/content/chapters";
import type { Fallback, Figure, ItemSource } from "@/content/types";
import { FigureView } from "@/figures/FigureView";
import { formalSlides } from "@/lessons/deck";
import { findConcept, reviewEnabled } from "@/lib/review";

export function generateStaticParams() {
  return chapters.flatMap((ch) =>
    ch.concepts.map((c) => ({ chapter: ch.slug, concept: ch.graph.find((n) => n.id === c.id)!.slug })),
  );
}

// Static: the page is otherwise fully prerendered, and Cache Components rejects
// reading params in generateMetadata there. The concept is named in the heading.
export const metadata: Metadata = { title: "Content review" };

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

/** A figure with its alt text written out, so reviewers check both. */
function ReviewFigure({ figure, upTo, caption }: { figure: Figure; upTo?: number; caption?: string }) {
  return (
    <figure className="rounded-lg border border-border p-3">
      <FigureView figure={figure} upTo={upTo} className="h-auto w-full" />
      <figcaption className="mt-2 text-sm text-muted">
        {caption && <span className="font-medium text-foreground">{caption}. </span>}
        Alt text: {figure.alt}
      </figcaption>
    </figure>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

async function ConceptReviewContent({ params }: { params: PageProps<"/review/[chapter]/[concept]">["params"] }) {
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
        <Link href={`/review/${chapterSlug}/${conceptSlug}/slides`} className="mt-1 inline-block text-sm text-accent underline underline-offset-2">
          See it as slides →
        </Link>
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
        {ex.figure && (
          <div className="mt-3 max-w-md">
            <ReviewFigure figure={ex.figure} caption="Idea slide" />
          </div>
        )}
        {node.visual && !ex.figure && <p className="mt-3 text-sm text-danger">Visual concept: idea figure missing.</p>}
        <h3 className="mt-6 font-semibold">Formal</h3>
        {formalSlides(ex.formal).map((s, i) => (
          <div key={i} className="mt-3 rounded-lg border border-border p-4">
            <p className="text-sm font-medium text-muted">
              Slide title: <RichInline text={s.title} />
            </p>
            <RichText text={s.body} className="mt-2" />
            {s.figure && (
              <div className="mt-3 max-w-md">
                <ReviewFigure figure={s.figure} />
              </div>
            )}
          </div>
        ))}
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
          {ex.worked.figure && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ex.worked.steps.map((_, i) => (
                <ReviewFigure key={i} figure={ex.worked.figure!} upTo={i + 1} caption={`After step ${i + 1}`} />
              ))}
            </div>
          )}
          {node.visual && !ex.worked.figure && <p className="mt-3 text-sm text-danger">Visual concept: worked figure missing.</p>}
        </div>
        <h3 className="mt-6 font-semibold">Interactive visual</h3>
        <p className="mt-1 text-sm text-muted">Spec only; draggable visuals are not built yet.</p>
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
              {item.figure && (
                <div className="mt-3">
                  <ReviewFigure figure={item.figure} caption="With the question" />
                </div>
              )}
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
              {item.solution ? (
                <div className="mt-3 rounded-md border border-border p-3">
                  <p className="text-sm font-medium">Solution</p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5">
                    {item.solution.steps.map((st, i) => (
                      <li key={i}>
                        <RichInline text={st} />
                      </li>
                    ))}
                  </ol>
                  {item.solution.figure && (
                    <div className="mt-3 max-w-sm">
                      <ReviewFigure figure={item.solution.figure} />
                    </div>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">No solution yet.</p>
              )}
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

export default function ConceptReview({ params }: PageProps<"/review/[chapter]/[concept]">) {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-2xl px-4 py-8 text-muted">Loading…</main>}>
      <ConceptReviewContent params={params} />
    </Suspense>
  );
}
