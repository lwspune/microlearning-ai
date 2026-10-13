import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

/**
 * Codes like C03-Q1 also exist in the real content, so every lookup is scoped
 * to the fixture's chapter through `concept()`.
 *
 * Fixture: chapter "t" with C01 ← C02 ← C03 (C03 needs C02 needs C01), and a
 * second chapter "u" with U01. All inside the test's rolled-back transaction.
 */
const FIXTURE = `
insert into chapters (slug, title) values ('t', 'T'), ('u', 'U');
insert into concepts (chapter_id, code, slug, title, one_liner, grp, tier)
  select ch.id, c.code, lower(c.code), c.code, '', 'g', 'core'
  from chapters ch
  join (values ('t', 'C01'), ('t', 'C02'), ('t', 'C03'), ('u', 'C01')) as c(chapter, code) on c.chapter = ch.slug;
${prereq("C02", "C01")}
${prereq("C03", "C02")}
`;

function concept(code: string, chapter = "t") {
  return `(select c.id from concepts c join chapters ch on ch.id = c.chapter_id where ch.slug = '${chapter}' and c.code = '${code}')`;
}

function prereq(code: string, needs: string, needsChapter = "t") {
  return `insert into concept_prereqs (concept_id, prereq_id) values (${concept(code)}, ${concept(needs, needsChapter)});`;
}

function misconception(code: string, onConcept: string, fallback: string) {
  return `insert into misconceptions (concept_id, code, mistake, remediation, fallback_kind, fallback_concept_id, fallback_topic)
    values (${concept(onConcept)}, '${code}', 'm', 'r', ${fallback});`;
}

/** An item on C03 with misconceptions C03-M1..M3 and the given options. */
function itemWithOptions(options: string) {
  return `
${misconception("C03-M1", "C03", `'concept', ${concept("C02")}, null`)}
${misconception("C03-M2", "C03", `'concept', ${concept("C01")}, null`)}
${misconception("C03-M3", "C03", `'none', null, null`)}
insert into items (concept_id, code, stem, source, verify) values (${concept("C03")}, 'C03-Q1', 's', '{"kind":"authored"}', '{}');
insert into item_options (item_id, key, text, is_correct, misconception_id, value)
  select i.id, o.key, o.key, o.is_correct, m.id, o.key
  from items i
  cross join (values ${options}) as o(key, is_correct, mcode)
  left join misconceptions m on m.code = o.mcode and m.concept_id = i.concept_id
  where i.concept_id = ${concept("C03")} and i.code = 'C03-Q1';
`;
}

const VALID_OPTIONS = `('A', true, null), ('B', false, 'C03-M1'), ('C', false, 'C03-M2'), ('D', false, 'C03-M3')`;

describe("content schema", () => {
  it("accepts a valid chapter, misconceptions and item", async () => {
    await expect(rolledBack(FIXTURE + itemWithOptions(VALID_OPTIONS))).resolves.toBeDefined();
  });

  describe("prerequisite graph", () => {
    it("rejects a self-loop", async () => {
      await expect(rolledBack(FIXTURE + prereq("C01", "C01"))).rejects.toThrow(/concept_prereqs_no_self_loop/);
    });

    it("rejects a cycle", async () => {
      await expect(rolledBack(FIXTURE + prereq("C01", "C03"))).rejects.toThrow(/prerequisite cycle:/);
    });

    it("rejects a prerequisite from another chapter", async () => {
      await expect(rolledBack(FIXTURE + prereq("C01", "C01", "u"))).rejects.toThrow(/prerequisite must be in the same chapter/);
    });

    it("rejects approving a concept that has no authored body", async () => {
      await expect(
        rolledBack(FIXTURE + `update concepts set status = 'approved' where id = ${concept("C01")};`),
      ).rejects.toThrow(/concepts_approved_needs_body/);
    });

    it("rejects a malformed concept code", async () => {
      await expect(
        rolledBack(FIXTURE + `update concepts set code = 'X1' where id = ${concept("C01")};`),
      ).rejects.toThrow(/concepts_code_format/);
    });
  });

  describe("misconceptions", () => {
    it("rejects a fallback that is not a prerequisite ancestor", async () => {
      await expect(
        rolledBack(FIXTURE + misconception("C02-M1", "C02", `'concept', ${concept("C03")}, null`)),
      ).rejects.toThrow(/fallback is not a prerequisite ancestor of/);
    });

    it("rejects a fallback whose kind and target disagree", async () => {
      await expect(rolledBack(FIXTURE + misconception("C02-M1", "C02", `'concept', null, null`))).rejects.toThrow(
        /misconceptions_fallback_shape/,
      );
    });

    it("rejects a code not prefixed by its concept", async () => {
      await expect(
        rolledBack(FIXTURE + misconception("C01-M1", "C02", `'none', null, null`)),
      ).rejects.toThrow(/misconception C01-M1 must start with C02-/);
    });
  });

  describe("items and options", () => {
    it("rejects a wrong option without a misconception", async () => {
      await expect(
        rolledBack(FIXTURE + itemWithOptions(`('A', true, null), ('B', false, null), ('C', false, 'C03-M2'), ('D', false, 'C03-M3')`)),
      ).rejects.toThrow(/item_options_tagging/);
    });

    it("rejects two correct options", async () => {
      await expect(
        rolledBack(FIXTURE + itemWithOptions(`('A', true, null), ('B', true, null), ('C', false, 'C03-M2'), ('D', false, 'C03-M3')`)),
      ).rejects.toThrow(/needs exactly one correct option/);
    });

    it("rejects an item with no options", async () => {
      await expect(
        rolledBack(
          FIXTURE + `insert into items (concept_id, code, stem, source, verify) values (${concept("C03")}, 'C03-Q1', 's', '{}', '{}');`,
        ),
      ).rejects.toThrow(/needs exactly one correct option/);
    });

    it("rejects an option tagged with another concept's misconception", async () => {
      await expect(
        rolledBack(
          FIXTURE +
            misconception("C02-M1", "C02", `'concept', ${concept("C01")}, null`) +
            itemWithOptions(VALID_OPTIONS) +
            `update item_options set misconception_id = (select id from misconceptions where concept_id = ${concept("C02")} and code = 'C02-M1')
              where key = 'B' and item_id = (select id from items where concept_id = ${concept("C03")} and code = 'C03-Q1');`,
        ),
      ).rejects.toThrow(/option misconception must belong to the same concept as its item/);
    });
  });

  describe("published views", () => {
    const publishedItems = `select i.code from published_items i join concepts c on c.id = i.concept_id join chapters ch on ch.id = c.chapter_id where ch.slug = 't' order by i.code;`;

    it("hides items of draft concepts and unverified items", async () => {
      const draftConcept = await rolledBackSelect(
        FIXTURE + itemWithOptions(VALID_OPTIONS) + `update items set verified = true where concept_id = ${concept("C03")};`,
        publishedItems,
      );
      expect(draftConcept).toEqual([]);

      const unverified = await rolledBackSelect(
        FIXTURE + itemWithOptions(VALID_OPTIONS) + `update concepts set status = 'approved', body = '{}' where id = ${concept("C03")};`,
        publishedItems,
      );
      expect(unverified).toEqual([]);
    });

    it("shows an item once its concept is approved and it is verified", async () => {
      const rows = await rolledBackSelect(
        FIXTURE +
          itemWithOptions(VALID_OPTIONS) +
          `update concepts set status = 'approved', body = '{}' where id = ${concept("C03")}; update items set verified = true where concept_id = ${concept("C03")};`,
        publishedItems,
      );
      expect(rows).toEqual([{ code: "C03-Q1" }]);
    });
  });

  describe("access", () => {
    for (const role of ["anon", "authenticated"]) {
      for (const table of ["chapters", "concepts", "items", "item_options", "misconceptions", "published_items"]) {
        it(`${role} cannot read ${table}`, async () => {
          await expect(rolledBack(`set local role ${role}; select * from ${table} limit 1;`)).rejects.toThrow(
            /permission denied/,
          );
        });
      }
    }
  });
});
