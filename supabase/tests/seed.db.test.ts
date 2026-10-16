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

const SOLUTION = { steps: ["first", "second"] };

function item(code: string) {
  return {
    code,
    solution: SOLUTION,
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

// Scoped to chapter "t": the dev DB also holds real content.
const T = `(select id from chapters where slug = 't')`;
const COUNTS = `select
  (select count(*) from concepts where chapter_id = ${T}) as concepts,
  (select count(*) from concept_prereqs cp join concepts c on c.id = cp.concept_id where c.chapter_id = ${T}) as prereqs,
  (select count(*) from misconceptions m join concepts c on c.id = m.concept_id where c.chapter_id = ${T}) as misconceptions,
  (select count(*) from items i join concepts c on c.id = i.concept_id where c.chapter_id = ${T}) as items,
  (select count(*) from item_options o join items i on i.id = o.item_id join concepts c on c.id = i.concept_id where c.chapter_id = ${T}) as options,
  (select count(*) from published_items i join concepts c on c.id = i.concept_id where c.chapter_id = ${T}) as published;`;

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
          `insert into attempts (user_id, item_id, option_key, correct) select '${USER}', i.id, 'A', true from items i join concepts c on c.id = i.concept_id where c.chapter_id = ${T} and i.code = 'C02-Q2';` +
          seed(payload({ items: ["C02-Q1"] })),
      ),
    ).rejects.toThrow(/violates foreign key constraint .* on table \\"attempts\\"/);
  });

  it("rolls back entirely when the content is invalid", async () => {
    // C01 <- C02 plus C02 <- C01 is a cycle; nothing from this seed may remain.
    await expect(rolledBack(seed(payload({ c01Prereqs: ["C02"] })))).rejects.toThrow(/prerequisite cycle:/);
  });

  it("stores each concept's position in the order the content lists it, not by code", async () => {
    const p = payload();
    p.concepts = [p.concepts[1], p.concepts[0]]; // C02 first, as a new opening concept would be
    const rows = await rolledBackSelect(seed(p), `select code, position from concepts where chapter_id = ${T} order by position;`);
    expect(rows).toEqual([
      { code: "C02", position: 1 },
      { code: "C01", position: 2 },
    ]);
  });

  it("stores each item's step-by-step solution, readable through the published view", async () => {
    const rows = await rolledBackSelect(
      seed(payload()),
      `select i.code, i.solution from published_items i join concepts c on c.id = i.concept_id where c.chapter_id = ${T} order by i.code;`,
    );
    expect(rows).toEqual([
      { code: "C02-Q1", solution: SOLUTION },
      { code: "C02-Q2", solution: SOLUTION },
    ]);
  });

  it("stores a question's figure, readable through the published view; questions without one have null", async () => {
    const figure = { alt: "a shaded region", axes: "xy", view: { x: [-1, 5], y: [-1, 5] }, elements: [] };
    const p = payload();
    (p.concepts[1] as { items: { figure?: unknown }[] }).items[0].figure = figure;
    const rows = await rolledBackSelect(
      seed(p),
      `select i.code, i.figure from published_items i join concepts c on c.id = i.concept_id where c.chapter_id = ${T} order by i.code;`,
    );
    expect(rows).toEqual([
      { code: "C02-Q1", figure },
      { code: "C02-Q2", figure: null },
    ]);
  });

  it("rejects a question figure without alt text or elements", async () => {
    for (const figure of [{ elements: [] }, { alt: "x" }, { alt: "", elements: [] }, ["not", "an", "object"]]) {
      const p = payload();
      (p.concepts[1] as { items: { figure?: unknown }[] }).items[0].figure = figure;
      await expect(rolledBack(seed(p))).rejects.toThrow(/items_figure_shape/);
    }
  });

  it("rejects a solution with fewer than two steps", async () => {
    const p = payload();
    (p.concepts[1] as { items: { solution: unknown }[] }).items[0].solution = { steps: ["only one"] };
    await expect(rolledBack(seed(p))).rejects.toThrow(/items_solution_shape/);
  });

  it("rejects an item with no solution", async () => {
    const p = payload();
    (p.concepts[1] as { items: { solution: unknown }[] }).items[0].solution = null;
    await expect(rolledBack(seed(p))).rejects.toThrow(/23502: null value in column \W*solution\W* of relation \W*items/);
  });

  it("rejects a solution whose steps are not text", async () => {
    const p = payload();
    (p.concepts[1] as { items: { solution: unknown }[] }).items[0].solution = { steps: ["one", 2] };
    await expect(rolledBack(seed(p))).rejects.toThrow(/items_solution_shape/);
  });

  for (const role of ["anon", "authenticated"]) {
    it(`${role} cannot run the seed`, async () => {
      await expect(rolledBack(`set local role ${role};` + seed(payload()))).rejects.toThrow(/permission denied/);
    });
  }
});
