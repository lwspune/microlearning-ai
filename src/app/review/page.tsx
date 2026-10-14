import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichInline } from "@/components/RichText";
import { chapters } from "@/content/chapters";
import { reviewEnabled } from "@/lib/review";

export const metadata: Metadata = { title: "Content review" };

export default function ReviewIndex() {
  if (!reviewEnabled()) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8">
      <p className="text-sm font-medium text-muted">Content review</p>
      <Link href="/review/courses" className="mt-2 inline-block font-medium text-accent underline underline-offset-4">
        Course coverage: which concepts each course covers →
      </Link>
      {chapters.map((chapter) => {
        const authored = new Set(chapter.concepts.map((c) => c.id));
        const groups = [...new Set(chapter.graph.map((n) => n.group))];
        return (
          <section key={chapter.slug} aria-labelledby={`ch-${chapter.slug}`}>
            <h1 id={`ch-${chapter.slug}`} className="mt-1 text-2xl font-semibold">
              {chapter.title}
            </h1>
            <p className="mt-2 text-muted">
              {chapter.graph.length} concepts · {authored.size} authored. Authored concepts are links.
            </p>

            {groups.map((group) => (
              <div key={group} className="mt-8">
                <h2 className="text-lg font-semibold">{group}</h2>
                <ul className="mt-3 divide-y divide-border rounded-lg border border-border">
                  {chapter.graph
                    .filter((n) => n.group === group)
                    .map((n) => {
                      const body = (
                        <>
                          <span className="flex flex-wrap items-baseline gap-x-2">
                            <span className="font-mono text-sm text-muted">{n.id}</span>
                            <span className="font-medium">{n.title}</span>
                            {n.tier === "adv" && (
                              <span className="rounded bg-surface px-1.5 text-xs text-muted">advanced</span>
                            )}
                          </span>
                          <span className="mt-1 block text-sm text-muted">
                            <RichInline text={n.oneLiner} />
                          </span>
                          {n.prereqs.length > 0 && (
                            <span className="mt-1 block text-xs text-muted">Needs {n.prereqs.join(", ")}</span>
                          )}
                        </>
                      );
                      return (
                        <li key={n.id}>
                          {authored.has(n.id) ? (
                            <Link
                              href={`/review/${chapter.slug}/${n.slug}`}
                              className="block bg-success-surface px-4 py-3 hover:underline"
                            >
                              {body}
                              <span className="mt-1 block text-xs font-medium text-success">Authored: open review →</span>
                            </Link>
                          ) : (
                            <div className="px-4 py-3">{body}</div>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </main>
  );
}
