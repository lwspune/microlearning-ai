"use server";

import { revalidatePath } from "next/cache";
import { createSessionClient } from "@/lib/supabase/server";

export type CreateAcademyState = { kind: "idle" } | { kind: "error"; message: string } | { kind: "done"; name: string; slug: string };

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Creates an academy. create_academy() runs as the caller and refuses anyone but the superadmin. */
export async function createAcademy(_state: CreateAcademyState, form: FormData): Promise<CreateAcademyState> {
  const name = String(form.get("name") ?? "").trim().replace(/\s+/g, " ");
  const slug = String(form.get("slug") ?? "").trim().toLowerCase();
  if (name.length < 1 || name.length > 120) return { kind: "error", message: "Give the academy a name (up to 120 characters)." };
  if (!SLUG.test(slug) || slug.length > 80) {
    return { kind: "error", message: "The short name is lowercase letters and digits, with hyphens between words." };
  }

  const supabase = await createSessionClient();
  const { error } = await supabase.rpc("create_academy", { p_name: name, p_slug: slug });
  if (error) {
    if (error.message.includes("slug_taken")) return { kind: "error", message: `The short name “${slug}” is taken. Choose another.` };
    if (error.message.includes("not_superadmin")) return { kind: "error", message: "Only the platform admin can create academies." };
    console.error("createAcademy failed", error.message);
    return { kind: "error", message: "The academy couldn't be created. Try again." };
  }
  revalidatePath("/admin");
  return { kind: "done", name, slug };
}
