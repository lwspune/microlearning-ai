"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { rememberLanguage } from "@/app/courses/actions";
import { LESSON_LANGUAGES, type LessonLanguage } from "@/content/languages";

/**
 * English | Hindi | Marathi above a lesson. The choice is saved on this browser and the page
 * re-renders in it; the lesson keeps its slide, since a translation has the English deck's slides.
 */
export function LanguageSwitch({ current, available }: { current: LessonLanguage; available: LessonLanguage[] }) {
  const router = useRouter();
  const [chosen, setChosen] = useState(current);
  const [pending, startTransition] = useTransition();
  const shown = LESSON_LANGUAGES.filter((l) => available.includes(l.id));
  if (shown.length < 2) return null;

  const choose = (id: LessonLanguage) => {
    setChosen(id);
    startTransition(async () => {
      await rememberLanguage(id);
      router.refresh();
    });
  };

  return (
    <div role="group" aria-label="Lesson language" aria-busy={pending} className="inline-flex rounded-full border border-border bg-card p-0.5 shadow-card">
      {shown.map((l) => (
        <button
          key={l.id}
          type="button"
          aria-pressed={l.id === chosen}
          onClick={() => choose(l.id)}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
            l.id === chosen ? "bg-accent text-background" : "text-muted hover:text-foreground"
          }`}
        >
          {l.title}
        </button>
      ))}
    </div>
  );
}
