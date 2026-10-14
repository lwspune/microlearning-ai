import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

const USER = "00000000-0000-4000-8000-0000000000d1";

/** Chapter "t": C01 (approved) with misconception C01-M1 and four items; A is always correct. */
function payload(status: "approved" | "draft" = "approved", verified = true) {
  const items = ["C01-Q1", "C01-Q2", "C01-Q3", "C01-Q4"].map((code) => ({
    code,
    stem: "s",
    solution: { steps: ["a", "b"] },
    source: { kind: "authored" },
    verify: {},
    verified,
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
        status, body: { hook: {} },
        misconceptions: [{ code: "C01-M1", mistake: "m", remediation: "Think again: $x$.", fallback: { kind: "none" } }],
        items,
      },
    ],
  };
}

function setup(p = payload()) {
  return (
    `insert into auth.users (id, email) values ('${USER}', 'd@test.invalid');` +
    `select seed_chapter('${JSON.stringify(p)}'::jsonb);`
  );
}

const ITEM = (code: string) =>
  `(select i.id from items i join concepts c on c.id = i.concept_id join chapters ch on ch.id = c.chapter_id where ch.slug = 't' and i.code = '${code}')`;

function answer(code: string, key: string) {
  return `select record_attempt('${USER}', ${ITEM(code)}, '${key}') as r;`;
}

type R = { r: Record<string, unknown> };
const last = async (statements: string) => (await rolledBackSelect<R>(statements.slice(0, statements.lastIndexOf("select record_attempt")), statements.slice(statements.lastIndexOf("select record_attempt"))))[0].r;

describe("record_attempt", () => {
  it("grades a correct answer and starts the streak", async () => {
    expect(await last(setup() + answer("C01-Q1", "A"))).toMatchObject({
      correct: true, correct_key: "A", misconception_code: null, remediation: null, streak: 1, needed: 3, state: "learning", mastered_now: false,
    });
  });

  it("returns the misconception and its remediation for a wrong answer", async () => {
    expect(await last(setup() + answer("C01-Q1", "B"))).toMatchObject({
      correct: false, correct_key: "A", misconception_code: "C01-M1", remediation: "Think again: $x$.", streak: 0, state: "learning",
    });
  });

  it("masters the concept after 3 different questions in a row", async () => {
    expect(await last(setup() + answer("C01-Q1", "A") + answer("C01-Q2", "A") + answer("C01-Q3", "A"))).toMatchObject({
      streak: 3, state: "mastered", mastered_now: true,
    });
  });

  it("does not count the same question twice", async () => {
    expect(await last(setup() + answer("C01-Q1", "A") + answer("C01-Q1", "A") + answer("C01-Q1", "A"))).toMatchObject({
      streak: 1, state: "learning",
    });
  });

  it("resets the streak on a wrong answer", async () => {
    expect(
      await last(setup() + answer("C01-Q1", "A") + answer("C01-Q2", "A") + answer("C01-Q3", "B") + answer("C01-Q4", "A")),
    ).toMatchObject({ streak: 1, state: "learning" });
  });

  it("keeps a mastered concept mastered after a later wrong answer", async () => {
    expect(
      await last(setup() + answer("C01-Q1", "A") + answer("C01-Q2", "A") + answer("C01-Q3", "A") + answer("C01-Q4", "B")),
    ).toMatchObject({ correct: false, state: "mastered", mastered_now: false });
  });

  it("stores the attempt and the learner state", async () => {
    const rows = await rolledBackSelect(
      setup() + answer("C01-Q1", "B"),
      `select (select count(*) from attempts where user_id = '${USER}') as attempts,
              (select misconception_id is not null from attempts where user_id = '${USER}') as tagged,
              (select state from learner_concept_state where user_id = '${USER}') as state;`,
    );
    expect(rows).toEqual([{ attempts: 1, tagged: true, state: "learning" }]);
  });

  it("refuses an item that is not published", async () => {
    await expect(rolledBack(setup(payload("approved", false)) + answer("C01-Q1", "A"))).rejects.toThrow(
      /item is not published/,
    );
  });

  it("refuses an option key the item does not have", async () => {
    await expect(rolledBack(setup() + `select record_attempt('${USER}', ${ITEM("C01-Q1")}, 'E');`)).rejects.toThrow(
      /no option E on this item/,
    );
  });

  for (const role of ["anon", "authenticated"]) {
    it(`${role} cannot call it directly`, async () => {
      // Resolve the item id first: as anon/authenticated the items lookup itself is denied.
      const call =
        `select set_config('t.item', ${ITEM("C01-Q1")}::text, true);` +
        `set local role ${role};` +
        `select record_attempt('${USER}', current_setting('t.item')::uuid, 'A');`;
      await expect(rolledBack(setup() + call)).rejects.toThrow(
        /permission denied for function record_attempt/,
      );
    });
  }
});
