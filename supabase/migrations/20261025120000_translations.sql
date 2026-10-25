-- Hindi and Marathi lessons (PLAN.md "Hindi and Marathi lessons"). A concept's text in
-- another language, seeded from src/content: approved translations only, already merged
-- with the English figures. Stems and options stay English, so items have no translated
-- text besides their solutions. Server-only, like the rest of the content.

create table concept_translations (
  concept_id uuid not null references concepts (id) on delete cascade,
  lang text not null constraint concept_translations_lang_check check (lang in ('hi', 'mr')),
  -- The English body's shape (hook, explanation, engineNotes), text translated.
  body jsonb not null constraint concept_translations_body_shape check (jsonb_typeof(body) = 'object'),
  primary key (concept_id, lang)
);

create table misconception_translations (
  misconception_id uuid not null references misconceptions (id) on delete cascade,
  lang text not null constraint misconception_translations_lang_check check (lang in ('hi', 'mr')),
  remediation text not null,
  primary key (misconception_id, lang)
);

create table item_translations (
  item_id uuid not null references items (id) on delete cascade,
  lang text not null constraint item_translations_lang_check check (lang in ('hi', 'mr')),
  solution jsonb not null constraint item_translations_solution_shape check (public.is_valid_solution(solution)),
  primary key (item_id, lang)
);

alter table concept_translations enable row level security;
alter table misconception_translations enable row level security;
alter table item_translations enable row level security;

revoke all on concept_translations, misconception_translations, item_translations from anon, authenticated;

-- seed_chapter now replaces each chapter's translations. Otherwise unchanged.
create or replace function seed_chapter(p jsonb) returns jsonb
language plpgsql
set search_path = ''
as $$
declare
  v_chapter uuid;
  v_concept uuid;
  v_item uuid;
  c jsonb;
  n bigint;
  m jsonb;
  it jsonb;
  o jsonb;
  pr text;
  tr jsonb;
  k text;
  v jsonb;
begin
  insert into public.chapters (slug, title) values (p ->> 'slug', p ->> 'title')
  on conflict (slug) do update set title = excluded.title
  returning id into v_chapter;

  -- Graph nodes, numbered in the order the content lists them.
  for c, n in select value, ordinality from jsonb_array_elements(p -> 'concepts') with ordinality loop
    insert into public.concepts (chapter_id, code, slug, title, one_liner, grp, tier, ext, sources, status, body, position)
    values (
      v_chapter, c ->> 'code', c ->> 'slug', c ->> 'title', c ->> 'one_liner', c ->> 'grp', c ->> 'tier',
      array(select jsonb_array_elements_text(c -> 'ext')),
      array(select jsonb_array_elements_text(c -> 'sources')),
      c ->> 'status', nullif(c -> 'body', 'null'::jsonb), n
    )
    on conflict (chapter_id, code) do update set
      slug = excluded.slug, title = excluded.title, one_liner = excluded.one_liner, grp = excluded.grp,
      tier = excluded.tier, ext = excluded.ext, sources = excluded.sources, status = excluded.status, body = excluded.body,
      position = excluded.position;
  end loop;

  -- Edges: replace the chapter's edge set (triggers re-check cycles per edge).
  delete from public.concept_prereqs cp
  using public.concepts cc
  where cc.id = cp.concept_id and cc.chapter_id = v_chapter;

  for c in select * from jsonb_array_elements(p -> 'concepts') loop
    for pr in select * from jsonb_array_elements_text(c -> 'prereqs') loop
      insert into public.concept_prereqs (concept_id, prereq_id)
      select a.id, b.id from public.concepts a, public.concepts b
      where a.chapter_id = v_chapter and a.code = c ->> 'code'
        and b.chapter_id = v_chapter and b.code = pr;
      if not found then
        raise exception 'concept % has unknown prerequisite %', c ->> 'code', pr;
      end if;
    end loop;
  end loop;

  -- Misconceptions, then items and options (options reference misconceptions).
  for c in select * from jsonb_array_elements(p -> 'concepts') loop
    select id into v_concept from public.concepts where chapter_id = v_chapter and code = c ->> 'code';

    for m in select * from jsonb_array_elements(c -> 'misconceptions') loop
      insert into public.misconceptions (concept_id, code, mistake, remediation, fallback_kind, fallback_concept_id, fallback_topic)
      values (
        v_concept, m ->> 'code', m ->> 'mistake', m ->> 'remediation', m -> 'fallback' ->> 'kind',
        (select id from public.concepts where chapter_id = v_chapter and code = m -> 'fallback' ->> 'id'),
        m -> 'fallback' ->> 'topic'
      )
      on conflict (concept_id, code) do update set
        mistake = excluded.mistake, remediation = excluded.remediation, fallback_kind = excluded.fallback_kind,
        fallback_concept_id = excluded.fallback_concept_id, fallback_topic = excluded.fallback_topic;
    end loop;

    for it in select * from jsonb_array_elements(c -> 'items') loop
      insert into public.items (concept_id, code, stem, source, verify, verified, solution, figure)
      values (
        v_concept, it ->> 'code', it ->> 'stem', it -> 'source', it -> 'verify', (it ->> 'verified')::boolean,
        nullif(it -> 'solution', 'null'::jsonb), nullif(it -> 'figure', 'null'::jsonb)
      )
      on conflict (concept_id, code) do update set
        stem = excluded.stem, source = excluded.source, verify = excluded.verify, verified = excluded.verified,
        solution = excluded.solution, figure = excluded.figure
      returning id into v_item;

      for o in select * from jsonb_array_elements(it -> 'options') loop
        insert into public.item_options (item_id, key, text, is_correct, misconception_id, value)
        values (
          v_item, o ->> 'key', o ->> 'text', (o ->> 'is_correct')::boolean,
          (select id from public.misconceptions where concept_id = v_concept and code = o ->> 'misconception'),
          o ->> 'value'
        )
        on conflict (item_id, key) do update set
          text = excluded.text, is_correct = excluded.is_correct,
          misconception_id = excluded.misconception_id, value = excluded.value;
      end loop;
    end loop;
  end loop;

  -- Translations: replace the chapter's set from the payload, which holds approved ones only.
  delete from public.concept_translations t using public.concepts cc
  where t.concept_id = cc.id and cc.chapter_id = v_chapter;
  delete from public.misconception_translations t using public.misconceptions mi, public.concepts cc
  where t.misconception_id = mi.id and mi.concept_id = cc.id and cc.chapter_id = v_chapter;
  delete from public.item_translations t using public.items i, public.concepts cc
  where t.item_id = i.id and i.concept_id = cc.id and cc.chapter_id = v_chapter;

  for c in select * from jsonb_array_elements(p -> 'concepts') loop
    select id into v_concept from public.concepts where chapter_id = v_chapter and code = c ->> 'code';
    for tr in select * from jsonb_array_elements(coalesce(c -> 'translations', '[]'::jsonb)) loop
      insert into public.concept_translations (concept_id, lang, body) values (v_concept, tr ->> 'lang', tr -> 'body');

      for k, v in select key, value from jsonb_each(tr -> 'remediation') loop
        insert into public.misconception_translations (misconception_id, lang, remediation)
        select id, tr ->> 'lang', v #>> '{}' from public.misconceptions where concept_id = v_concept and code = k;
        if not found then
          raise exception 'translation of % names unknown misconception %', c ->> 'code', k;
        end if;
      end loop;

      for k, v in select key, value from jsonb_each(tr -> 'solutions') loop
        insert into public.item_translations (item_id, lang, solution)
        select id, tr ->> 'lang', v from public.items where concept_id = v_concept and code = k;
        if not found then
          raise exception 'translation of % names unknown item %', c ->> 'code', k;
        end if;
      end loop;
    end loop;
  end loop;

  -- Remove what left the content. FKs from learner tables refuse to delete anything a student used.
  delete from public.item_options io
  using public.items i, public.concepts cc
  where io.item_id = i.id and i.concept_id = cc.id and cc.chapter_id = v_chapter
    and not exists (
      select 1
      from jsonb_array_elements(p -> 'concepts') pc,
           jsonb_array_elements(pc -> 'items') pi,
           jsonb_array_elements(pi -> 'options') po
      where pc ->> 'code' = cc.code and pi ->> 'code' = i.code and po ->> 'key' = io.key
    );

  delete from public.items i
  using public.concepts cc
  where i.concept_id = cc.id and cc.chapter_id = v_chapter
    and not exists (
      select 1 from jsonb_array_elements(p -> 'concepts') pc, jsonb_array_elements(pc -> 'items') pi
      where pc ->> 'code' = cc.code and pi ->> 'code' = i.code
    );

  delete from public.misconceptions mi
  using public.concepts cc
  where mi.concept_id = cc.id and cc.chapter_id = v_chapter
    and not exists (
      select 1 from jsonb_array_elements(p -> 'concepts') pc, jsonb_array_elements(pc -> 'misconceptions') pm
      where pc ->> 'code' = cc.code and pm ->> 'code' = mi.code
    );

  delete from public.concepts cc
  where cc.chapter_id = v_chapter
    and not exists (select 1 from jsonb_array_elements(p -> 'concepts') pc where pc ->> 'code' = cc.code);

  return jsonb_build_object(
    'chapter', p ->> 'slug',
    'concepts', (select count(*) from public.concepts where chapter_id = v_chapter),
    'items', (select count(*) from public.items i join public.concepts cc on cc.id = i.concept_id where cc.chapter_id = v_chapter),
    'translations', (select count(*) from public.concept_translations t join public.concepts cc on cc.id = t.concept_id where cc.chapter_id = v_chapter)
  );
end;
$$;
