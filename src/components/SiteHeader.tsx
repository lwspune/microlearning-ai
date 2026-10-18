import Link from "next/link";
import { signOut } from "@/app/login/actions";
import { areasFor } from "@/lib/auth/routing";
import { currentViewer } from "@/server/viewer";
import { AreaSwitcher } from "./AreaSwitcher";
import { LadderIcon } from "./icons";

function Shell({ children }: { children?: React.ReactNode }) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-background">
            <LadderIcon className="h-5 w-5" />
          </span>
          {/* The wordmark stays readable to screen readers on phones, where the mark stands alone. */}
          <span className="sr-only sm:not-sr-only">
            Concept <span className="text-accent">Ladder</span>
          </span>
        </Link>
        <nav aria-label="Account" className="flex items-center gap-3">
          {children}
        </nav>
      </div>
    </header>
  );
}

const textLink = "text-sm font-medium text-accent underline-offset-4 hover:underline";

/** The site header: who's signed in, the areas they can switch between, sign in or out. */
export async function SiteHeader() {
  const viewer = await currentViewer();
  if (!viewer?.profile) {
    return (
      <Shell>
        {viewer?.guest && <span className="hidden text-sm text-muted sm:inline">Learning as a guest</span>}
        <Link href="/login" className={textLink}>
          Sign in
        </Link>
      </Shell>
    );
  }
  const { role, fullName } = viewer.profile;
  return (
    <Shell>
      {role !== "student" && <AreaSwitcher areas={areasFor(role)} />}
      <span className="hidden max-w-40 truncate text-sm text-muted md:inline">{fullName}</span>
      <form action={signOut}>
        <button type="submit" className={textLink}>
          Sign out
        </button>
      </form>
    </Shell>
  );
}

/** Shown while the session is read: the same header without the account part. */
export function SiteHeaderFallback() {
  return <Shell />;
}
