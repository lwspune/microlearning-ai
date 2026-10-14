"use server";

import { revalidatePath } from "next/cache";
import type { Role } from "@/lib/auth/routing";
import { type LineError, parsePeopleLines } from "@/lib/people";
import { type CreatedPerson, createPeople } from "@/server/people";
import { currentViewer } from "@/server/viewer";

export type AddPeopleState =
  | { kind: "idle" }
  | { kind: "error"; message: string; lineErrors?: LineError[] }
  | { kind: "done"; role: Role; created: CreatedPerson[]; existing: string[]; failed: { login: string; reason: string }[] };

const CREATABLE: Role[] = ["student", "teacher", "academy_admin"];
const NOUN: Record<Role, string> = { student: "students", teacher: "teachers", academy_admin: "academy admins", superadmin: "superadmins" };

/**
 * Adds people to an academy. Staff always add to their OWN academy (the target
 * is ignored for them); the superadmin names the academy. Either way the
 * database decides (can_create_person, as the signed-in caller).
 */
export async function addPeople(target: { academyId: string | null }, _state: AddPeopleState, form: FormData): Promise<AddPeopleState> {
  const viewer = await currentViewer();
  if (!viewer?.profile) return { kind: "error", message: "Your session has ended. Sign in again." };

  const role = String(form.get("role") ?? "") as Role;
  if (!CREATABLE.includes(role)) return { kind: "error", message: "Choose who you're adding." };
  const stage = form.get("stage") === "graduate" ? "graduate" : "school";
  const academyId = viewer.profile.role === "superadmin" ? target.academyId : viewer.profile.academyId;

  const parsed = parsePeopleLines(String(form.get("lines") ?? ""));
  if (parsed.errors.length > 0) {
    return { kind: "error", message: "Fix the lines listed below, then add them again.", lineErrors: parsed.errors };
  }

  const result = await createPeople({ academyId, role, stage, people: parsed.people });
  if (result.kind === "forbidden") return { kind: "error", message: `You can't add ${NOUN[role]} here.` };

  revalidatePath("/teach/people");
  revalidatePath("/admin/academies/[slug]", "page");
  return { kind: "done", role, created: result.created, existing: result.existing, failed: result.failed };
}
