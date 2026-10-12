import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

const USER = "00000000-0000-4000-8000-0000000000c1";

type Payload = {
  slug: string;
  title: string;
  concepts: unknown[];
};

function option(key: string, correct: boolean, misconception: string | null) {
  return { key, text: key, is_correct: correct, misconception, value: key };
}

function item(code: string) {
  return {
    code,
    stem: "s",
    source: { kind: "authored" },
    verify: { kind: "value", inputs: {} },
    verified: true,
    options: [option("A", true, null), option("B", false, "C02-M1"), option("C", false, "C02-M1"), option("D", false, "C02-M1")],
  };
}

/** C01 ← C02; C02 authored with one misconception and two items. */
function payload(overrides: Partial<{ c01Prereqs: string[]; items: string[] }> = {}): Payload {
  return {
    slug: "t",
    title: "T",
    concepts: [
      { code: "C01", slug: "c01", title: "One", one_liner: "", grp: "g", tier: "core", ext: [], sources: [], prereqs: overrides.c01Prereqs ?? [], status: "draft", body: null, misconceptions: [], items: [] },
      {
        code: "C02", slug: "c02", title: "Two", one_liner: "", grp: "g", tier: "core", ext: ["trig"], sources: [], prereqs: ["C01"],
        status: "approved", body: { hook: { prompt: "p", reveal: "r" } },
        misconceptions: [{ code: "C02-M1", mistake: "m", remediation: "r", fallback: { kind: "concept", id: "C01" } }],
        items: (overrides.items ?? ["C02-Q1", "C02-Q2"]).map(item),
      },
    ],
  };
}

function seed(p: Payload) {
  return `select seed_chapter('${JSON.stringify(p).replace(/'/g, "''")}'::jsonb);`;
}

const COUNTS = `select
  (select count(*) from concepts) as concepts,
  (select count(*) from concept_prereqs) as prereqs,
  (select count(*) from misconceptions) as misconceptions,
  (select count(*) from items) as items,
  (select count(*) from item_options) as options,
  (select count(*) from published_items) as published;`;

describe("seed_chapter", () => {
  it("writes a whole chapter", async () => {
    const rows = await rolledBackSelect(seed(payload()), COUNTS);
    expect(rows).toEqual([{ concepts: 2, prereqs: 1, misconceptions: 1, items: 2, options: 8, published: 2 }]);
  });

  it("is idempotent", async () => {
    const rows = await rolledBackSelect(seed(payload()) + seed(payload()), COUNTS);
    expect(rows).toEqual([{ concepts: 2, prereqs: 1, misconceptions: 1, items: 2, options: 8, published: 2 }]);
  });

  it("removes an item that left the content", async () => {
    const rows = await rolledBackSelect(seed(payload()) + seed(payload({ items: ["C02-Q1"] })), COUNTS);
    expect(rows).toEqual([{ concepts: 2, prereqs: 1, misconceptions: 1, items: 1, options: 4, published: 1 }]);
  });

  it("refuses to remove an item a student has attempted", async () => {
    await expect(
      rolledBack(
        `insert into auth.users (id, email) values ('${USER}', 'c@test.invalid');` +
          seed(payload()) +
          `insert into attempts (user_id, item_id, option_key, correct) select '${USER}', id, 'A', true from items where code = 'C02-Q2';` +
          seed(payload({ items: ["C02-Q1"] })),
      ),
    ).rejects.toThrow(/violates foreign key constraint .* on table \\"attempts\\"/);
  });

  it("rolls back entirely when the content is invalid", async () => {
    // C01 <- C02 plus C02 <- C01 is a cycle; nothing from this seed may remain.
    await expect(rolledBack(seed(payload({ c01Prereqs: ["C02"] })))).rejects.toThrow(/cycle/);
  });

  for (const role of ["anon", "authenticated"]) {
    it(`${role} cannot run the seed`, async () => {
      await expect(rolledBack(`set local role ${role};` + seed(payload()))).rejects.toThrow(/permission denied/);
    });
  }
});
