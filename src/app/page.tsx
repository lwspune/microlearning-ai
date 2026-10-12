import Link from "next/link";
import { reviewEnabled } from "@/lib/review";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-16">
      <h1 className="text-3xl font-semibold">MicroLearning AI</h1>
      <p className="mt-3 text-lg text-muted">
        Learn a complex chapter one connected concept at a time: explanation, questions, and help that goes back to
        exactly the idea you missed.
      </p>
      <p className="mt-6 text-muted">The learning experience is being built. First chapter: Complex Numbers.</p>
      {reviewEnabled() && (
        <Link href="/review" className="mt-8 self-start font-medium text-accent underline underline-offset-4">
          Open content review
        </Link>
      )}
    </main>
  );
}
