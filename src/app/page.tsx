import type { CSSProperties } from "react";
import Link from "next/link";
import { Suspense } from "react";
import { CoursePicker, CoursePickerFallback } from "@/components/courses/CoursePicker";
import { ConceptGraphBackdrop } from "@/components/home/ConceptGraphBackdrop";
import { RiseWords } from "@/components/home/RiseWords";
import { ArrowDownIcon } from "@/components/icons";
import { RevealList } from "@/components/RevealList";
import { card, eyebrow, primaryButton } from "@/components/ui";
import { complexNumbers } from "@/content/chapters/complex-numbers";
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

const after = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <section className="relative isolate">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-14 md:pt-24 md:pb-28">
          <div>
            <p className={`${eyebrow} hero-in`} style={after(0)}>
              MicroLearning AI
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
              <RiseWords text="Hard chapters, [one clear idea] at a time." />
            </h1>
            <p className="hero-in mt-5 max-w-xl text-lg text-muted" style={after(0.75)}>
              Learn a complex chapter one connected concept at a time: explanation, questions, and help that goes back to
              exactly the idea you missed.
            </p>
            <div className="hero-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-3" style={after(0.9)}>
              <Link href="#courses" className={`${primaryButton} px-6 py-3.5 text-lg`}>
                Choose your course <ArrowDownIcon className="h-5 w-5" />
              </Link>
              <span className="text-sm text-muted">Free · no sign-up</span>
            </div>
          </div>
          <div className="relative">
            {/* The chapter's concept graph spreads out from behind the card. */}
            <ConceptGraphBackdrop
              graph={complexNumbers.graph}
              className="hero-graph absolute top-1/2 left-1/2 -z-10 h-auto w-[260%] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[235%]"
            />
            <div className="hero-in" style={after(0.45)}>
              <FigureFrame glass>
                <FigureView figure={HERO} stagger={0.7} className="h-auto w-full" />
              </FigureFrame>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 md:pb-24">
        <section id="courses" aria-labelledby="courses-title" className="scroll-mt-6">
          <h2 id="courses-title" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Choose your course
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Courses at the same stage share their concepts: master an idea once and it counts in every course that needs it.
          </p>
          <div className="mt-6">
            <Suspense fallback={<CoursePickerFallback />}>
              <CoursePicker />
            </Suspense>
          </div>
        </section>

        <section aria-labelledby="how" className="mt-20 md:mt-28">
          <h2 id="how" className="font-display text-3xl font-semibold tracking-tight">
            How it works
          </h2>
          <div className="relative mt-6">
            <span aria-hidden="true" className="how-line" />
            <RevealList ordered className="grid gap-4 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.title} className={`${card} reveal-item p-6`} style={{ "--i": i } as CSSProperties}>
                  <span
                    className="relative z-[2] grid h-9 w-9 place-items-center rounded-full bg-accent-soft font-semibold text-accent ring-4 ring-card"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </RevealList>
          </div>
        </section>

        {reviewEnabled() && (
          <Link href="/review" className="mt-12 inline-block text-sm font-medium text-accent underline underline-offset-4">
            Open content review
          </Link>
        )}
      </div>
    </main>
  );
}
