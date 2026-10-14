import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

/**
 * Student performance for staff (PLAN.md "Student performance"). Learner data
 * is readable by its owner, by staff of the student's own academy, and by the
 * superadmin; never by another academy. Two security_invoker views summarise
 * it under the same rules.
 */

const SUPER = "00000000-0000-4000-8000-0000000005a0";
const TEACHER_A = "00000000-0000-4000-8000-000000007e0a";
const ADMIN_A = "00000000-0000-4000-8000-00000000ad0a";
const TEACHER_B = "00000000-0000-4000-8000-000000007e0b";
const A1 = "00000000-0000-4000-8000-0000000057a1";
const A2 = "00000000-0000-4000-8000-0000000057a2";
const B1 = "00000000-0000-4000-8000-0000000057b1";
const STUDENTS = [A1, A2, B1];

const ACADEMY = (slug: string) => `(select id from academies where slug = '${slug}')`;
const T_CONCEPT = (code: string) => `(select c.id from concepts c join chapters ch on ch.id = c.chapter_id where ch.slug = 't' and c.code = '${code}')`;
const T_ITEM = `(select id from items where concept_id = ${T_CONCEPT("C01")} and code = 'C01-Q1')`;
const T_MISC = `(select id from misconceptions where concept_id = ${T_CONCEPT("C01")} and code = 'C01-M1')`;

const FIXTURE = `
insert into auth.users (id, email, is_anonymous) values
  ('${SUPER}', 'super@test.invalid', false), ('${TEACHER_A}', 'teacher-a@test.invalid', false),
  ('${ADMIN_A}', 'admin-a@test.invalid', false), ('${TEACHER_B}', 'teacher-b@test.invalid', false),
  ('${A1}', 'a1@test.invalid', false), ('${A2}', 'a2@test.invalid', false), ('${B1}', 'b1@test.invalid', false);
insert into academies (name, slug) values ('Test Academy A', 'test-academy-a'), ('Test Academy B', 'test-academy-b');
insert into profiles (id, role, academy_id, full_name, email) values
  ('${SUPER}', 'superadmin', null, 'Super', 'super@test.invalid'),
  ('${TEACHER_A}', 'teacher', ${ACADEMY("test-academy-a")}, 'Teacher A', 'teacher-a@test.invalid'),
  ('${ADMIN_A}', 'academy_admin', ${ACADEMY("test-academy-a")}, 'Admin A', 'admin-a@test.invalid'),
  ('${TEACHER_B}', 'teacher', ${ACADEMY("test-academy-b")}, 'Teacher B', 'teacher-b@test.invalid'),
  ('${A1}', 'student', ${ACADEMY("test-academy-a")}, 'A One', 'a1@test.invalid'),
  ('${A2}', 'student', ${ACADEMY("test-academy-a")}, 'A Two', 'a2@test.invalid'),
  ('${B1}', 'student', ${ACADEMY("test-academy-b")}, 'B One', 'b1@test.invalid');

insert into chapters (slug, title) values ('t', 'T');
insert into concepts (chapter_id, code, slug, title, one_liner, grp, tier)
  select id, c, lower(c), c, '', 'g', 'core' from chapters, unnest(array['C01', 'C02']) c where slug = 't';
insert into misconceptions (concept_id, code, mistake, remediation, fallback_kind)
  select ${T_CONCEPT("C01")}, 'C01-M1', 'm', 'r', 'none';
insert into items (concept_id, code, stem, source, verify, solution) select ${T_CONCEPT("C01")}, 'C01-Q1', 's', '{}', '{}', '{"steps":["a","b"]}';
insert into item_options (item_id, key, text, is_correct, misconception_id, value)
  select ${T_ITEM}, 'A', 'a', true, null, 'a'
  union all select ${T_ITEM}, 'B', 'b', false, ${T_MISC}, 'b';

-- A1: C01 mastered and due for review, C02 learning; 3 answers, 2 right, 1 mistake (recent).
insert into learner_concept_state (user_id, concept_id, state, mastery, streak, next_review_at, review_box) values
  ('${A1}', ${T_CONCEPT("C01")}, 'mastered', 1, 3, now() - interval '1 hour', 1),
  ('${A1}', ${T_CONCEPT("C02")}, 'learning', 0.3, 1, null, 0);
insert into attempts (user_id, item_id, option_key, correct, misconception_id, created_at) values
  ('${A1}', ${T_ITEM}, 'A', true, null, now() - interval '2 days'),
  ('${A1}', ${T_ITEM}, 'B', false, ${T_MISC}, now() - interval '1 day'),
  ('${A1}', ${T_ITEM}, 'A', true, null, now() - interval '1 hour');
-- A2: one old mistake (40 days ago). B1: learning C01.
insert into attempts (user_id, item_id, option_key, correct, misconception_id, created_at) values
  ('${A2}', ${T_ITEM}, 'B', false, ${T_MISC}, now() - interval '40 days');
insert into learner_concept_state (user_id, concept_id, state, mastery, streak) values ('${B1}', ${T_CONCEPT("C01")}, 'learning', 0.2, 0);
insert into attempts (user_id, item_id, option_key, correct) values ('${B1}', ${T_ITEM}, 'A', true);
`;

function as(user: string) {
  return `set local role authenticated; select set_config('request.jwt.claims', '{"sub":"${user}","role":"authenticated"}', true);`;
}

const inStudents = `(${STUDENTS.map((s) => `'${s}'`).join(", ")})`;

/** Whose rows of `table` the viewer can read (one aggregated row: empty results come back as the previous statement's). */
async function visibleOwners(viewer: string, table: string): Promise<string[]> {
  const [row] = await rolledBackSelect<{ ids: string[] }>(
    FIXTURE,
    `${as(viewer)} select coalesce(array_agg(distinct user_id::text order by user_id::text), '{}') as ids from ${table} where user_id in ${inStudents};`,
  );
  return row.ids;
}

const sorted = (ids: string[]) => [...ids].sort();

/** Academy A's students with rows in each table (A2 has answered but has no concept state). */
const ACADEMY_A_ROWS: Record<string, string[]> = {
  learner_concept_state: [A1],
  attempts: sorted([A1, A2]),
  learner_summary: sorted([A1, A2]),
  learner_mistakes: sorted([A1, A2]),
};

/** Every student with rows in each table (B1 has made no mistakes). */
const ALL_ROWS: Record<string, string[]> = {
  learner_concept_state: sorted([A1, B1]),
  attempts: sorted([A1, A2, B1]),
  learner_summary: sorted([A1, A2, B1]),
  learner_mistakes: sorted([A1, A2]),
};

describe("who reads learner data", () => {
  for (const table of ["learner_concept_state", "attempts", "learner_summary", "learner_mistakes"]) {
    describe(table, () => {
      it("a student reads only their own", async () => {
        expect(await visibleOwners(A1, table)).toEqual([A1]);
      });

      it("a teacher and an academy admin read their own academy's students", async () => {
        const expected = ACADEMY_A_ROWS[table];
        expect(await visibleOwners(TEACHER_A, table)).toEqual(expected);
        expect(await visibleOwners(ADMIN_A, table)).toEqual(expected);
      });

      it("another academy's teacher never reads them", async () => {
        const own = await visibleOwners(TEACHER_B, table);
        expect(own.filter((id) => id === A1 || id === A2)).toEqual([]);
      });

      it("the superadmin reads everyone", async () => {
        expect(await visibleOwners(SUPER, table)).toEqual(ALL_ROWS[table]);
      });

      it("the anonymous role reads nothing", async () => {
        await expect(rolledBack(FIXTURE + `set local role anon; select * from ${table};`)).rejects.toThrow(/permission denied/);
      });
    });
  }

  it("staff still can't write learner data", async () => {
    await expect(
      rolledBack(FIXTURE + `${as(TEACHER_A)} update learner_concept_state set state = 'mastered' where user_id = '${A1}';`),
    ).rejects.toThrow(/permission denied/);
  });
});

describe("learner_summary", () => {
  it("counts mastered, learning, reviews due, answers and accuracy, and the last activity", async () => {
    const [row] = await rolledBackSelect<Record<string, unknown>>(
      FIXTURE,
      `${as(TEACHER_A)} select mastered, learning, reviews_due, answered, correct, last_active > now() - interval '2 hours' as recent
        from learner_summary where user_id = '${A1}';`,
    );
    expect(row).toEqual({ mastered: 1, learning: 1, reviews_due: 1, answered: 3, correct: 2, recent: true });
  });

  it("covers a student who has answered but has no concept state yet", async () => {
    const [row] = await rolledBackSelect<Record<string, unknown>>(
      FIXTURE,
      `${as(TEACHER_A)} select mastered, learning, reviews_due, answered, correct from learner_summary where user_id = '${A2}';`,
    );
    expect(row).toEqual({ mastered: 0, learning: 0, reviews_due: 0, answered: 1, correct: 0 });
  });
});

describe("learner_mistakes", () => {
  it("counts each misconception per student: in the last 30 days, and in all", async () => {
    const [row] = await rolledBackSelect<Record<string, unknown>>(
      FIXTURE,
      `${as(TEACHER_A)} select
        (select recent from learner_mistakes where user_id = '${A1}') as a1_recent,
        (select total from learner_mistakes where user_id = '${A1}') as a1_total,
        (select recent from learner_mistakes where user_id = '${A2}') as a2_recent,
        (select total from learner_mistakes where user_id = '${A2}') as a2_total;`,
    );
    expect(row).toEqual({ a1_recent: 1, a1_total: 1, a2_recent: 0, a2_total: 1 });
  });
});
