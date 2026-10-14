import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

const USER = "00000000-0000-4000-8000-0000000000e1";

/** Chapter "t": C01 (approved) with misconception C01-M1 and six items; A is always correct. */
function payload() {
  const items = [1, 2, 3, 4, 5, 6].map((n) => ({
    code: `C01-Q${n}`,
    stem: "s",
    solution: { steps: ["a", "b"] },
    source: { kind: "authored" },
    verify: {},
    verified: true,
    options: [
      { key: "A", text: "a", is_correct: true, misconception: null, value: "a" },
      ...["B", "C", "D"].map((key) => ({ key, text: key, is_correct: false, misconception: "C01-M1", value: key })),
    ],
  }));
  return {
    slug: "t",
    title: "T",
    concepts: [
      {
        code: "C01", slug: "c01", title: "One", one_liner: "", grp: "g", tier: "core", ext: [], sources: [], prereqs: [],
        status: "approved", body: { hook: {} },
        misconceptions: [{ code: "C01-M1", mistake: "m", remediation: "r", fallback: { kind: "none" } }],
        items,
      },
    ],
  };
}

const T_C01 = `(select c.id from concepts c join chapters ch on ch.id = c.chapter_id where ch.slug = 't' and c.code = 'C01')`;
const ITEM = (n: number) => `(select id from items where concept_id = ${T_C01} and code = 'C01-Q${n}')`;
const answer = (n: number, key: string) => `select record_attempt('${USER}', ${ITEM(n)}, '${key}');`;
const STATE = `select review_box, next_review_at = now() + interval '1 day' as in_1_day,
  next_review_at = now() + interval '3 days' as in_3_days, next_review_at = now() + interval '30 days' as in_30_days,
  next_review_at <= now() as due, state
  from learner_concept_state where user_id = '${USER}';`;

const setup = `insert into auth.users (id, email) values ('${USER}', 'e@test.invalid');
select seed_chapter('${JSON.stringify(payload())}'::jsonb);`;
const MASTER = answer(1, "A") + answer(2, "A") + answer(3, "A");
const MAKE_DUE = `update learner_concept_state set next_review_at = now() - interval '1 minute' where user_id = '${USER}';`;

describe("spaced review", () => {
  it("schedules the first review 1 day after mastery (box 1)", async () => {
    expect(await rolledBackSelect(setup + MASTER, STATE)).toMatchObject([{ review_box: 1, in_1_day: true, state: "mastered" }]);
  });

  it("ignores answers when no review is due", async () => {
    expect(await rolledBackSelect(setup + MASTER + answer(4, "B") + answer(5, "A"), STATE)).toMatchObject([
      { review_box: 1, in_1_day: true, state: "mastered" },
    ]);
  });

  it("passes a due review with 2 correct answers: next box, 3 days", async () => {
    expect(await rolledBackSelect(setup + MASTER + MAKE_DUE + answer(4, "A") + answer(5, "A"), STATE)).toMatchObject([
      { review_box: 2, in_3_days: true, due: false },
    ]);
  });

  it("stays due after only 1 of the 2 review answers", async () => {
    expect(await rolledBackSelect(setup + MASTER + MAKE_DUE + answer(4, "A"), STATE)).toMatchObject([
      { review_box: 1, due: true },
    ]);
  });

  it("sends a missed review back to box 1, due in 1 day", async () => {
    const twice = `update learner_concept_state set review_box = 3 where user_id = '${USER}';`;
    expect(await rolledBackSelect(setup + MASTER + twice + MAKE_DUE + answer(4, "A") + answer(5, "B"), STATE)).toMatchObject([
      { review_box: 1, in_1_day: true, state: "mastered" },
    ]);
  });

  it("caps at box 5 (30 days)", async () => {
    const top = `update learner_concept_state set review_box = 5 where user_id = '${USER}';`;
    expect(await rolledBackSelect(setup + MASTER + top + MAKE_DUE + answer(4, "A") + answer(5, "A"), STATE)).toMatchObject([
      { review_box: 5, in_30_days: true },
    ]);
  });

  it("reports review progress from record_attempt", async () => {
    const rows = await rolledBackSelect<{ r: Record<string, unknown> }>(
      setup + MASTER + MAKE_DUE + answer(4, "A"),
      `select record_attempt('${USER}', ${ITEM(5)}, 'A') as r;`,
    );
    expect(rows[0].r).toMatchObject({ reviewing: true, review_done: true, review_box: 2 });
  });

  it("rejects a review box outside 0..5", async () => {
    await expect(
      rolledBack(setup + MASTER + `update learner_concept_state set review_box = 6 where user_id = '${USER}';`),
    ).rejects.toThrow(/learner_concept_state_review_box_range/);
  });

  describe("mark_review_due", () => {
    it("makes a mastered concept due now", async () => {
      expect(
        await rolledBackSelect(setup + MASTER + `select mark_review_due('${USER}', ${T_C01});`, STATE),
      ).toMatchObject([{ due: true, review_box: 1 }]);
    });

    it("leaves a concept that isn't mastered alone", async () => {
      expect(
        await rolledBackSelect(setup + answer(1, "A") + `select mark_review_due('${USER}', ${T_C01});`, STATE),
      ).toMatchObject([{ review_box: 0, due: null, state: "learning" }]);
    });

    for (const role of ["anon", "authenticated"]) {
      it(`${role} cannot call it`, async () => {
        const call =
          `select set_config('t.concept', ${T_C01}::text, true);` +
          `set local role ${role};` +
          `select mark_review_due('${USER}', current_setting('t.concept')::uuid);`;
        await expect(rolledBack(setup + call)).rejects.toThrow(/permission denied for function mark_review_due/);
      });
    }
  });
});
