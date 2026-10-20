import type { Metadata } from "next";
import { eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Concept Ladder uses your information, and how to have it deleted.",
};

const CONTACT = "connect.pyqvault@gmail.com";

/** The privacy policy (Google's consent screen links here). Plain words; update the date when it changes. */
export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
      <p className={eyebrow}>Updated 20 October 2026</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-4 text-muted">
        This page says how Concept Ladder uses your information and how to have it deleted.
      </p>

      <div className="mt-10 space-y-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:mt-1.5 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        <section>
          <h2>How we use your information</h2>
          <p className="mt-3">
            To sign you in, save your progress, choose your next question and show you what to review. Nothing else: no ads, and
            we never sell or share your information for marketing.
          </p>
        </section>

        <section>
          <h2>Who can see it</h2>
          <ul>
            <li>You.</li>
            <li>If you belong to an academy, its teachers and admins can see your progress, to help you learn.</li>
            <li>
              The services that run the site: Supabase (our database and sign-in), Vercel (hosting) and Google (Google sign-in).
              They handle it only to provide those services.
            </li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p className="mt-3">
            We use cookies only to keep you signed in. There are no advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2>Deleting your data</h2>
          <p className="mt-3">
            Email{" "}
            <a href={`mailto:${CONTACT}`} className="font-medium text-accent underline underline-offset-4">
              {CONTACT}
            </a>{" "}
            from the address you sign in with, and we will delete your account and all your progress within 30 days. If your
            academy made your login, you can also ask your academy.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p className="mt-3">
            Write to{" "}
            <a href={`mailto:${CONTACT}`} className="font-medium text-accent underline underline-offset-4">
              {CONTACT}
            </a>
            . If this policy changes, we will update this page and its date.
          </p>
        </section>
      </div>
    </main>
  );
}
