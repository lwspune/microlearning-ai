import "server-only";
import type { Role } from "@/lib/auth/routing";
import { generatePassword, loginEmail, loginLabel, type PersonLine } from "@/lib/people";
import { createAdminClient } from "@/lib/supabase/admin";
import { createSessionClient } from "@/lib/supabase/server";
import type { PersonRow } from "@/components/people/PeopleList";

/**
 * Staff create logins in the app (PLAN.md Phase 2, R2; CrackSSB D23).
 *
 * AUTHORIZATION FIRST, AS THE CALLER: can_create_person() runs under the
 * signed-in user's identity in the database, and only its "yes" licenses the
 * service-role writes after it. The service role enforces nothing by itself.
 *
 * AN EXISTING LOGIN IS NEVER TOUCHED: no password write, no profile write. It
 * is reported, and that's all (a "create" that wrote to an existing account
 * would let any teacher take over any student).
 */

export type CreatedPerson = { fullName: string; login: string; password: string };
export type CreatePeopleResult =
  | { kind: "ok"; created: CreatedPerson[]; existing: string[]; failed: { login: string; reason: string }[] }
  | { kind: "forbidden" };

export async function createPeople(input: {
  academyId: string | null;
  role: Role;
  stage: "school" | "graduate" | null;
  people: PersonLine[];
}): Promise<CreatePeopleResult> {
  const caller = await createSessionClient();
  const { data: claims } = await caller.auth.getClaims();
  const callerId = claims?.claims?.sub;
  if (!callerId) return { kind: "forbidden" };

  const { data: allowed, error: checkError } = await caller.rpc("can_create_person", {
    p_role: input.role,
    // The generated type says string, but the function takes null for "no academy".
    p_academy: input.academyId as string,
  });
  if (checkError) {
    console.error("createPeople: can_create_person failed", checkError.message);
    throw checkError;
  }
  if (!allowed) return { kind: "forbidden" };

  const service = createAdminClient();
  const created: CreatedPerson[] = [];
  const existing: string[] = [];
  const failed: { login: string; reason: string }[] = [];

  for (const person of input.people) {
    const label = loginLabel(person.login);
    const email = loginEmail(person.login);
    const password = generatePassword();
    const { data, error } = await service.auth.admin.createUser({ email, password, email_confirm: true });
    if (error || !data.user) {
      if (error?.code === "email_exists") existing.push(label);
      else {
        console.error("createPeople: createUser failed", { code: error?.code, status: error?.status });
        failed.push({ login: label, reason: "The login couldn't be created. Try again." });
      }
      continue;
    }
    const { error: profileError } = await service.from("profiles").insert({
      id: data.user.id,
      role: input.role,
      academy_id: input.academyId,
      full_name: person.fullName,
      email,
      username: person.login.kind === "username" ? person.login.username : null,
      stage: input.role === "student" ? input.stage : null,
      created_by: callerId,
    });
    if (profileError) {
      // Undo the login so a half-made account can't sign in.
      await service.auth.admin.deleteUser(data.user.id);
      console.error("createPeople: profile insert failed", profileError.message);
      failed.push({ login: label, reason: "The profile couldn't be saved; nothing was created." });
      continue;
    }
    created.push({ fullName: person.fullName, login: label, password });
  }
  return { kind: "ok", created, existing, failed };
}

/** An academy's people, read as the viewer (row level security decides what they may see), staff first. */
export async function academyPeople(academyId: string): Promise<PersonRow[]> {
  const supabase = await createSessionClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, email, username, role")
    .eq("academy_id", academyId)
    .order("full_name");
  if (error) {
    console.error("academyPeople: read failed", error.message);
    throw error;
  }
  const rank: Record<Role, number> = { academy_admin: 0, teacher: 1, student: 2, superadmin: 3 };
  return data
    .map((p) => ({ id: p.id, fullName: p.full_name, email: p.email, username: p.username, role: p.role }))
    .sort((a, b) => rank[a.role] - rank[b.role]);
}
