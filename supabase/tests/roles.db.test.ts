import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

/**
 * Roles (PLAN.md Phase 2, R1): academies and profiles. Rules live in the
 * database: staff belong to an academy, a superadmin to none, no profile for
 * an anonymous (guest) login; people read only what their role allows, and
 * nobody signed in writes these tables.
 */

const SUPER = "00000000-0000-4000-8000-0000000005a0";
const ADMIN_A = "00000000-0000-4000-8000-00000000ad0a";
const TEACHER_A = "00000000-0000-4000-8000-000000007e0a";
const STUDENT_A = "00000000-0000-4000-8000-0000000057da";
const TEACHER_B = "00000000-0000-4000-8000-000000007e0b";
const SOLO = "00000000-0000-4000-8000-00000000501a";
const GUEST = "00000000-0000-4000-8000-00000000600e";
const PEOPLE = [SUPER, ADMIN_A, TEACHER_A, STUDENT_A, TEACHER_B, SOLO];

const ACADEMY = (slug: string) => `(select id from academies where slug = '${slug}')`;

const FIXTURE = `
insert into auth.users (id, email, is_anonymous) values
  ('${SUPER}', 'super@test.invalid', false), ('${ADMIN_A}', 'admin-a@test.invalid', false),
  ('${TEACHER_A}', 'teacher-a@test.invalid', false), ('${STUDENT_A}', 'student-a@test.invalid', false),
  ('${TEACHER_B}', 'teacher-b@test.invalid', false), ('${SOLO}', 'solo@test.invalid', false),
  ('${GUEST}', null, true);
insert into academies (name, slug) values ('Test Academy A', 'test-academy-a'), ('Test Academy B', 'test-academy-b');
insert into profiles (id, role, academy_id, full_name, email) values
  ('${SUPER}', 'superadmin', null, 'Super', 'super@test.invalid'),
  ('${ADMIN_A}', 'academy_admin', ${ACADEMY("test-academy-a")}, 'Admin A', 'admin-a@test.invalid'),
  ('${TEACHER_A}', 'teacher', ${ACADEMY("test-academy-a")}, 'Teacher A', 'teacher-a@test.invalid'),
  ('${STUDENT_A}', 'student', ${ACADEMY("test-academy-a")}, 'Student A', 'student-a@test.invalid'),
  ('${TEACHER_B}', 'teacher', ${ACADEMY("test-academy-b")}, 'Teacher B', 'teacher-b@test.invalid'),
  ('${SOLO}', 'student', null, 'Solo', 'solo@test.invalid');
`;

function as(user: string) {
  return `set local role authenticated; select set_config('request.jwt.claims', '{"sub":"${user}","role":"authenticated"}', true);`;
}

// Aggregated into one row: when a query returns no rows, the Management API
// hands back the previous statement's result instead of an empty list.

/** Which of the fixture's profiles `user` can read. */
async function visibleProfiles(user: string): Promise<string[]> {
  const [row] = await rolledBackSelect<{ ids: string[] }>(
    FIXTURE,
    `${as(user)} select coalesce(array_agg(id::text order by id), '{}') as ids from profiles where id in (${PEOPLE.map((p) => `'${p}'`).join(", ")});`,
  );
  return row.ids;
}

async function visibleAcademies(user: string): Promise<string[]> {
  const [row] = await rolledBackSelect<{ slugs: string[] }>(
    FIXTURE,
    `${as(user)} select coalesce(array_agg(slug order by slug), '{}') as slugs from academies where slug like 'test-academy-%';`,
  );
  return row.slugs;
}

const sorted = (ids: string[]) => [...ids].sort();

describe("roles schema", () => {
  it("accepts the fixture: a superadmin, an academy's admin, teacher and student, another academy's teacher, a solo student", async () => {
    await expect(rolledBack(FIXTURE)).resolves.toBeDefined();
  });

  it("requires staff to belong to an academy", async () => {
    await expect(rolledBack(FIXTURE + `update profiles set academy_id = null where id = '${TEACHER_A}';`)).rejects.toThrow(
      /profiles_staff_have_academy/,
    );
  });

  it("keeps the superadmin outside every academy", async () => {
    await expect(
      rolledBack(FIXTURE + `update profiles set academy_id = ${ACADEMY("test-academy-a")} where id = '${SUPER}';`),
    ).rejects.toThrow(/profiles_superadmin_no_academy/);
  });

  it("refuses a profile for an anonymous (guest) login", async () => {
    await expect(
      rolledBack(FIXTURE + `insert into profiles (id, role, full_name, email) values ('${GUEST}', 'student', 'Guest', 'guest@test.invalid');`),
    ).rejects.toThrow(/profile_for_anonymous_login/);
  });

  it("stores emails in lower case, once", async () => {
    await expect(rolledBack(FIXTURE + `update profiles set email = 'Solo@Test.invalid' where id = '${SOLO}';`)).rejects.toThrow(
      /profiles_email_shape/,
    );
    await expect(rolledBack(FIXTURE + `update profiles set email = 'super@test.invalid' where id = '${SOLO}';`)).rejects.toThrow(
      /profiles_email_key/,
    );
  });

  it("accepts only known stages", async () => {
    await expect(rolledBack(FIXTURE + `update profiles set stage = 'graduate' where id = '${SOLO}';`)).resolves.toBeDefined();
    await expect(rolledBack(FIXTURE + `update profiles set stage = 'college' where id = '${SOLO}';`)).rejects.toThrow(
      /profiles_stage_check/,
    );
  });

  it("rejects a malformed academy slug", async () => {
    await expect(rolledBack(FIXTURE + `insert into academies (name, slug) values ('X', 'Not A Slug');`)).rejects.toThrow(
      /academies_slug_format/,
    );
  });

  it("never deletes an academy out from under its people", async () => {
    await expect(rolledBack(FIXTURE + `delete from academies where slug = 'test-academy-a';`)).rejects.toThrow(
      /profiles_academy_id_fkey/,
    );
  });

  it("deletes a profile with its login", async () => {
    const rows = await rolledBackSelect<{ n: number }>(
      FIXTURE + `delete from auth.users where id = '${SOLO}';`,
      `select count(*)::int as n from profiles where id = '${SOLO}';`,
    );
    expect(rows).toEqual([{ n: 0 }]);
  });

  describe("row level security", () => {
    it("a student reads only their own profile", async () => {
      expect(await visibleProfiles(STUDENT_A)).toEqual([STUDENT_A]);
      expect(await visibleProfiles(SOLO)).toEqual([SOLO]);
    });

    it("staff read their own academy's people, never another academy's", async () => {
      const academyA = sorted([ADMIN_A, TEACHER_A, STUDENT_A]);
      expect(await visibleProfiles(TEACHER_A)).toEqual(academyA);
      expect(await visibleProfiles(ADMIN_A)).toEqual(academyA);
      expect(await visibleProfiles(TEACHER_B)).toEqual([TEACHER_B]);
    });

    it("the superadmin reads everyone", async () => {
      expect(await visibleProfiles(SUPER)).toEqual(sorted(PEOPLE));
    });

    it("a guest (no profile) reads no profiles", async () => {
      expect(await visibleProfiles(GUEST)).toEqual([]);
    });

    it("academies: members read their own, the superadmin reads all, a solo student none", async () => {
      expect(await visibleAcademies(TEACHER_A)).toEqual(["test-academy-a"]);
      expect(await visibleAcademies(STUDENT_A)).toEqual(["test-academy-a"]);
      expect(await visibleAcademies(SUPER)).toEqual(["test-academy-a", "test-academy-b"]);
      expect(await visibleAcademies(SOLO)).toEqual([]);
    });

    for (const table of ["profiles", "academies"]) {
      it(`anon cannot read ${table}`, async () => {
        await expect(rolledBack(FIXTURE + `set local role anon; select * from ${table};`)).rejects.toThrow(/permission denied/);
      });
    }

    it("nobody signed in writes profiles, not even the superadmin's own role", async () => {
      await expect(rolledBack(FIXTURE + `${as(STUDENT_A)} update profiles set role = 'superadmin' where id = '${STUDENT_A}';`)).rejects.toThrow(
        /permission denied/,
      );
      await expect(
        rolledBack(FIXTURE + `${as(SUPER)} insert into profiles (id, role, full_name, email) values ('${GUEST}', 'student', 'G', 'g@test.invalid');`),
      ).rejects.toThrow(/permission denied/);
    });

    it("nobody signed in writes academies", async () => {
      await expect(rolledBack(FIXTURE + `${as(SUPER)} insert into academies (name, slug) values ('X', 'x-academy');`)).rejects.toThrow(
        /permission denied/,
      );
    });
  });
});
