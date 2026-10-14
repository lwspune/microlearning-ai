import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

/**
 * Creating academies and people (PLAN.md Phase 2, R2). The database decides
 * who may create whom: the app calls these functions as the signed-in user
 * before any service-role write, so the rules live here, not in the app.
 */

const SUPER = "00000000-0000-4000-8000-0000000005a0";
const ADMIN_A = "00000000-0000-4000-8000-00000000ad0a";
const TEACHER_A = "00000000-0000-4000-8000-000000007e0a";
const STUDENT_A = "00000000-0000-4000-8000-0000000057da";
const SOLO = "00000000-0000-4000-8000-00000000501a";

const ACADEMY = (slug: string) => `(select id from academies where slug = '${slug}')`;

const FIXTURE = `
insert into auth.users (id, email, is_anonymous) values
  ('${SUPER}', 'super@test.invalid', false), ('${ADMIN_A}', 'admin-a@test.invalid', false),
  ('${TEACHER_A}', 'teacher-a@test.invalid', false), ('${STUDENT_A}', 'student-a@test.invalid', false),
  ('${SOLO}', 'solo@test.invalid', false);
insert into academies (name, slug) values ('Test Academy A', 'test-academy-a'), ('Test Academy B', 'test-academy-b');
insert into profiles (id, role, academy_id, full_name, email) values
  ('${SUPER}', 'superadmin', null, 'Super', 'super@test.invalid'),
  ('${ADMIN_A}', 'academy_admin', ${ACADEMY("test-academy-a")}, 'Admin A', 'admin-a@test.invalid'),
  ('${TEACHER_A}', 'teacher', ${ACADEMY("test-academy-a")}, 'Teacher A', 'teacher-a@test.invalid'),
  ('${STUDENT_A}', 'student', ${ACADEMY("test-academy-a")}, 'Student A', 'student-a@test.invalid'),
  ('${SOLO}', 'student', null, 'Solo', 'solo@test.invalid');
`;

function as(user: string) {
  return `set local role authenticated; select set_config('request.jwt.claims', '{"sub":"${user}","role":"authenticated"}', true);`;
}

describe("create_academy", () => {
  it("lets the superadmin create an academy", async () => {
    const [row] = await rolledBackSelect<{ n: number }>(
      FIXTURE + `${as(SUPER)} select public.create_academy('New Academy', 'new-academy-test');`,
      `reset role; select count(*)::int as n from academies where slug = 'new-academy-test' and name = 'New Academy';`,
    );
    expect(row).toEqual({ n: 1 });
  });

  for (const [who, id] of [
    ["an academy admin", ADMIN_A],
    ["a teacher", TEACHER_A],
    ["a student", STUDENT_A],
  ] as const) {
    it(`refuses ${who}`, async () => {
      await expect(rolledBack(FIXTURE + `${as(id)} select public.create_academy('X', 'x-academy-test');`)).rejects.toThrow(
        /not_superadmin/,
      );
    });
  }

  it("refuses a short name that's taken", async () => {
    await expect(rolledBack(FIXTURE + `${as(SUPER)} select public.create_academy('Again', 'test-academy-a');`)).rejects.toThrow(
      /slug_taken/,
    );
  });

  it("still applies the table's own rules (slug format)", async () => {
    await expect(rolledBack(FIXTURE + `${as(SUPER)} select public.create_academy('X', 'Bad Slug');`)).rejects.toThrow(
      /academies_slug_format/,
    );
  });

  it("can't be called by the anonymous role", async () => {
    await expect(rolledBack(FIXTURE + `set local role anon; select public.create_academy('X', 'x-academy-test');`)).rejects.toThrow(
      /permission denied/,
    );
  });
});

describe("can_create_person: who may create whom", () => {
  const A = ACADEMY("test-academy-a");
  const B = ACADEMY("test-academy-b");
  // [caller, role to create, academy, allowed]
  const matrix: [string, string, string, string, boolean][] = [
    ["superadmin", SUPER, "superadmin", "null", true],
    ["superadmin", SUPER, "academy_admin", A, true],
    ["superadmin", SUPER, "teacher", B, true],
    ["superadmin", SUPER, "student", A, true],
    ["superadmin", SUPER, "student", "null", true],
    ["superadmin", SUPER, "teacher", "null", false], // staff need an academy
    ["superadmin", SUPER, "superadmin", A, false], // a superadmin has none
    ["academy admin", ADMIN_A, "teacher", A, true],
    ["academy admin", ADMIN_A, "student", A, true],
    ["academy admin", ADMIN_A, "academy_admin", A, false],
    ["academy admin", ADMIN_A, "student", B, false], // never another academy
    ["academy admin", ADMIN_A, "student", "null", false],
    ["teacher", TEACHER_A, "student", A, true],
    ["teacher", TEACHER_A, "teacher", A, false],
    ["teacher", TEACHER_A, "student", B, false],
    ["student", STUDENT_A, "student", A, false],
    ["solo student", SOLO, "student", "null", false],
  ];
  for (const [who, id, role, academy, allowed] of matrix) {
    const where = academy === "null" ? "no academy" : academy === A ? "academy A" : "academy B";
    it(`${who} ${allowed ? "may" : "may not"} create a ${role} in ${where}`, async () => {
      const [row] = await rolledBackSelect<{ ok: boolean }>(
        FIXTURE,
        `${as(id)} select public.can_create_person('${role}', ${academy}) as ok;`,
      );
      expect(row.ok).toBe(allowed);
    });
  }

  it("says no to a caller with no profile (a guest)", async () => {
    const guest = "00000000-0000-4000-8000-00000000600e";
    const [row] = await rolledBackSelect<{ ok: boolean }>(
      FIXTURE + `insert into auth.users (id, is_anonymous) values ('${guest}', true);`,
      `${as(guest)} select public.can_create_person('student', null) as ok;`,
    );
    expect(row.ok).toBe(false);
  });
});

describe("usernames", () => {
  const U = "00000000-0000-4000-8000-0000000a0a0a";
  const login = (name: string) => `${name}@students.microlearning.invalid`;
  const withUser = (username: string, email: string) =>
    FIXTURE +
    `insert into auth.users (id, email, is_anonymous) values ('${U}', '${email}', false);
     insert into profiles (id, role, academy_id, full_name, email, username)
       values ('${U}', 'student', ${ACADEMY("test-academy-a")}, 'Aarav', '${email}', '${username}');`;

  it("accepts a username whose login matches it", async () => {
    await expect(rolledBack(withUser("aarav.k", login("aarav.k")))).resolves.toBeDefined();
  });

  it("refuses a username that doesn't match the login email", async () => {
    await expect(rolledBack(withUser("aarav.k", login("someone.else")))).rejects.toThrow(/profiles_username_login/);
  });

  it("refuses a malformed username", async () => {
    await expect(rolledBack(withUser("Aarav K", login("Aarav K").toLowerCase()))).rejects.toThrow(/profiles_username_format/);
  });

  it("keeps usernames unique (a username's login email is unique too, so either key refuses it)", async () => {
    await expect(
      rolledBack(
        withUser("aarav.k", login("aarav.k")) +
          `update profiles set username = 'aarav.k', email = '${login("aarav.k")}' where id = '${STUDENT_A}';`,
      ),
    ).rejects.toThrow(/profiles_(username|email)_key/);
  });
});
