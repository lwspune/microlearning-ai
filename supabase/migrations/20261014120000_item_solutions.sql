-- Step-by-step solutions for items, shown to a learner after they answer.
-- Shape is enforced here: an object whose `steps` is an array of at least two
-- non-empty strings, plus an optional `figure` object. Null is allowed while
-- older concepts are being backfilled (the content validator tracks which).

create function is_valid_solution(s jsonb) returns boolean
language sql
immutable
set search_path = ''
as $$
  select s is null or (
    jsonb_typeof(s) = 'object'
    and jsonb_typeof(s -> 'steps') = 'array'
    and jsonb_array_length(s -> 'steps') >= 2
    and not exists (
      select 1 from jsonb_array_elements(s -> 'steps') e
      where jsonb_typeof(e) <> 'string' or btrim(e #>> '{}') = ''
    )
    and (s -> 'figure' is null or jsonb_typeof(s -> 'figure') = 'object')
  )
$$;

revoke execute on function is_valid_solution(jsonb) from public, anon, authenticated;

alter table items
  add column solution jsonb constraint items_solution_shape check (public.is_valid_solution(solution));

-- `select i.*` was expanded when the view was created; recreate it to include the new column.
create or replace view published_items with (security_invoker = true) as
  select i.* from items i join concepts c on c.id = i.concept_id
  where c.status = 'approved' and i.verified;

-- seed_chapter now writes each item's solution. Otherwise unchanged.
create or replace function seed_chapter(p jsonb) returns jsonb
language plpgsql
set search_path = ''
as $$
declare
  v_chapter uuid;
  v_concept uuid;
  v_item uuid;
  c jsonb;
  m jsonb;
  it jsonb;
  o jsonb;
  pr text;
begin
  insert into public.chapters (slug, title) values (p ->> 'slug', p ->> 'title')
  on conflict (slug) do update set title = excluded.title
  returning id into v_chapter;

  -- Graph nodes.
  for c in select * from jsonb_array_elements(p -> 'concepts') loop
    insert into public.concepts (chapter_id, code, slug, title, one_liner, grp, tier, ext, sources, status, body)
    values (
      v_chapter, c ->> 'code', c ->> 'slug', c ->> 'title', c ->> 'one_liner', c ->> 'grp', c ->> 'tier',
      array(select jsonb_array_elements_text(c -> 'ext')),
      array(select jsonb_array_elements_text(c -> 'sources')),
      c ->> 'status', nullif(c -> 'body', 'null'::jsonb)
    )
    on conflict (chapter_id, code) do update set
      slug = excluded.slug, title = excluded.title, one_liner = excluded.one_liner, grp = excluded.grp,
      tier = excluded.tier, ext = excluded.ext, sources = excluded.sources, status = excluded.status, body = excluded.body;
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
      insert into public.items (concept_id, code, stem, source, verify, verified, solution)
      values (
        v_concept, it ->> 'code', it ->> 'stem', it -> 'source', it -> 'verify', (it ->> 'verified')::boolean,
        nullif(it -> 'solution', 'null'::jsonb)
      )
      on conflict (concept_id, code) do update set
        stem = excluded.stem, source = excluded.source, verify = excluded.verify, verified = excluded.verified,
        solution = excluded.solution
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
    'items', (select count(*) from public.items i join public.concepts cc on cc.id = i.concept_id where cc.chapter_id = v_chapter)
  );
end;
$$;

