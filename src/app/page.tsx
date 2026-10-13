import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { card, eyebrow, linkCardShape, primaryButton } from "@/components/ui";
import { chapters } from "@/content/chapters";
import type { Figure } from "@/content/types";
import { FigureFrame } from "@/figures/FigureFrame";
import { FigureView } from "@/figures/FigureView";
import { reviewEnabled } from "@/lib/review";

/** The hero picture: z = 3 + 2i as a point, an arrow, its modulus and argument. */
const HERO: Figure = {
  alt: "The complex number 3 + 2i drawn on the Argand plane: an arrow from the origin to the point, its distance √13 from the origin, and its angle θ from the real axis.",
  view: { x: [-1.2, 4.6], y: [-1, 3.4] },
  elements: [
    { kind: "arc", centre: [0, 0], r: 3.606, from: 0, to: 75, tone: "muted", step: 4 },
    { kind: "segment", from: [3, 0], to: [3, 2], dashed: true, tone: "muted", step: 2 },
    { kind: "vector", to: [3, 2], step: 3 },
    { kind: "label", at: [1.45, 1.05], label: "|z| = √13", labelAt: "nw", step: 3 },
    { kind: "angle", at: [0, 0], from: 0, to: 33.69, label: "θ", labelAt: "e", step: 3 },
    { kind: "point", at: [3, 2], label: "z = 3 + 2i", labelAt: "e", step: 1 },
  ],
};

const STEPS = [
  { title: "Learn the idea", body: "Short slides with figures that build up step by step, so you see why, not just what." },
  { title: "Check yourself", body: "Every wrong option is a known mistake, so a wrong answer tells you exactly what to fix." },
  { title: "Fix the root", body: "Repeat a mistake and you're sent back to the idea it comes from. Spaced reviews keep it fresh." },
];

export default function Home() {
  const live = chapters.map((ch) => ({ ...ch, ready: ch.concepts.filter((c) => c.status === "approved").length }));
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 md:py-20">
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div>
          <p className={eyebrow}>MicroLearning AI</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Hard chapters, one clear idea at a time.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Learn a complex chapter one connected concept at a time: explanation, questions, and help that goes back to
            exactly the idea you missed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/learn/complex-numbers" className={`${primaryButton} px-6 py-3.5 text-lg`}>
              Start learning: Complex Numbers <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <span className="text-sm text-muted">Free · no sign-up</span>
          </div>
        </div>
        <FigureFrame>
          <FigureView figure={HERO} stagger={0.7} className="h-auto w-full" />
        </FigureFrame>
      </section>

      <section aria-labelledby="how" className="mt-20 md:mt-28">
        <h2 id="how" className="font-display text-3xl font-semibold tracking-tight">
          How it works
        </h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className={`${card} p-6`}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft font-semibold text-accent" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="chapters" className="mt-20 md:mt-28">
        <h2 id="chapters" className="font-display text-3xl font-semibold tracking-tight">
          Chapters
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {live.map((ch) => (
            <li key={ch.slug}>
              <Link href={`/learn/${ch.slug}`} className={`${linkCardShape} group border-border bg-card p-6 hover:border-border-strong`}>
                <span className={eyebrow}>Class 11–12 · JEE · NDA · MHT-CET</span>
                <span className="mt-2 block font-display text-2xl font-semibold">{ch.title}</span>
                <span className="mt-1 block text-muted">{ch.ready} concepts, from i² = −1 to loci and regions</span>
                <span className="mt-4 inline-flex items-center gap-2 font-medium text-accent">
                  Open chapter <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {reviewEnabled() && (
        <Link href="/review" className="mt-12 inline-block text-sm font-medium text-accent underline underline-offset-4">
          Open content review
        </Link>
      )}
    </main>
  );
}
