import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

const ALICE = "00000000-0000-4000-8000-00000000a11c";
const BOB = "00000000-0000-4000-8000-0000000000b0";

// Fixture rows live in chapter "t"; scope every lookup to it (the dev DB also holds real content).
const T_C01 = `(select c.id from concepts c join chapters ch on ch.id = c.chapter_id where ch.slug = 't' and c.code = 'C01')`;
const T_ITEM = `(select id from items where concept_id = ${T_C01} and code = 'C01-Q1')`;

/** Two users, one concept with one item, and a state row + attempt for each user. */
const FIXTURE = `
insert into auth.users (id, email) values ('${ALICE}', 'alice@test.invalid'), ('${BOB}', 'bob@test.invalid');
insert into chapters (slug, title) values ('t', 'T');
insert into concepts (chapter_id, code, slug, title, one_liner, grp, tier)
  select id, 'C01', 'c01', 'C01', '', 'g', 'core' from chapters where slug = 't';
insert into misconceptions (concept_id, code, mistake, remediation, fallback_kind)
  select ${T_C01}, 'C01-M1', 'm', 'r', 'none';
insert into items (concept_id, code, stem, source, verify) select ${T_C01}, 'C01-Q1', 's', '{}', '{}';
insert into item_options (item_id, key, text, is_correct, misconception_id, value)
  select ${T_ITEM}, 'A', 'a', true, null, 'a'
  union all select ${T_ITEM}, 'B', 'b', false, (select id from misconceptions where concept_id = ${T_C01}), 'b';
insert into learner_concept_state (user_id, concept_id, state, mastery, streak)
  select u, ${T_C01}, 'learning', 0.5, 1 from unnest(array['${ALICE}', '${BOB}']::uuid[]) u;
insert into attempts (user_id, item_id, option_key, correct)
  select u, ${T_ITEM}, 'A', true from unnest(array['${ALICE}', '${BOB}']::uuid[]) u;
`;

function as(user: string) {
  return `set local role authenticated; select set_config('request.jwt.claims', '{"sub":"${user}","role":"authenticated"}', true);`;
}

describe("learner schema", () => {
  it("accepts valid learner state and attempts", async () => {
    await expect(rolledBack(FIXTURE)).resolves.toBeDefined();
  });

  it("rejects mastery outside 0..1", async () => {
    await expect(rolledBack(FIXTURE + `update learner_concept_state set mastery = 1.5;`)).rejects.toThrow(
      /learner_concept_state_mastery_range/,
    );
  });

  it("rejects an unknown state", async () => {
    await expect(rolledBack(FIXTURE + `update learner_concept_state set state = 'done';`)).rejects.toThrow(
      /learner_concept_state_state_check/,
    );
  });

  describe("row level security", () => {
    for (const table of ["learner_concept_state", "attempts"]) {
      it(`a student reads only their own ${table}`, async () => {
        const rows = await rolledBackSelect<{ user_id: string }>(FIXTURE, `${as(ALICE)} select user_id from ${table} where user_id in ('${ALICE}', '${BOB}');`);
        expect(rows.map((r) => r.user_id)).toEqual([ALICE]);
      });

      it(`anon cannot read ${table}`, async () => {
        await expect(rolledBack(FIXTURE + `set local role anon; select * from ${table};`)).rejects.toThrow(
          /permission denied/,
        );
      });
    }

    it("a student cannot write their own mastery (server-side only)", async () => {
      await expect(
        rolledBack(FIXTURE + `${as(ALICE)} update learner_concept_state set mastery = 1 where user_id = '${ALICE}';`),
      ).rejects.toThrow(/permission denied/);
    });

    it("a student cannot record attempts directly", async () => {
      await expect(
        rolledBack(
          FIXTURE + `${as(ALICE)} insert into attempts (user_id, item_id, option_key, correct) select '${ALICE}', ${T_ITEM}, 'B', false;`,
        ),
      ).rejects.toThrow(/permission denied/);
    });
  });

  it("deletes a user's learner data with the user", async () => {
    const rows = await rolledBackSelect<{ n: number }>(
      FIXTURE + `delete from auth.users where id = '${ALICE}';`,
      `select (select count(*) from learner_concept_state where user_id in ('${ALICE}', '${BOB}')) + (select count(*) from attempts where user_id in ('${ALICE}', '${BOB}')) as n;`,
    );
    expect(rows).toEqual([{ n: 2 }]); // only Bob's two rows remain
  });
});
