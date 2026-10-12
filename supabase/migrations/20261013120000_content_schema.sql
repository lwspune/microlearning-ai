-- Content schema: chapters, the concept prerequisite graph, misconceptions,
-- items and options. Seeded from src/content (TypeScript is the source of
-- truth). Only the server (service role) reads it, and only through the
-- published_* views; students never see keys or misconception tags.

create table chapters (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique constraint chapters_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  created_at timestamptz not null default now()
);

create table concepts (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references chapters (id) on delete cascade,
  code text not null constraint concepts_code_format check (code ~ '^C[0-9]{2,}$'),
  slug text not null constraint concepts_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  one_liner text not null,
  grp text not null,
  tier text not null constraint concepts_tier_check check (tier in ('core', 'adv')),
  ext text[] not null default '{}',
  sources text[] not null default '{}',
  status text not null default 'draft' constraint concepts_status_check check (status in ('draft', 'approved')),
  -- Authored body (hook, explanation, engineNotes); null until the concept is written.
  body jsonb,
  constraint concepts_approved_needs_body check (status = 'draft' or body is not null),
  unique (chapter_id, code),
  unique (chapter_id, slug)
);

create table concept_prereqs (
  concept_id uuid not null references concepts (id) on delete cascade,
  prereq_id uuid not null references concepts (id) on delete cascade,
  primary key (concept_id, prereq_id),
  constraint concept_prereqs_no_self_loop check (concept_id <> prereq_id)
);

create index concept_prereqs_prereq_idx on concept_prereqs (prereq_id);

-- Every concept reachable by following prerequisites from p_concept.
create function concept_ancestors(p_concept uuid)
returns table (id uuid)
language sql stable
set search_path = ''
as $$
  with recursive up as (
    select cp.prereq_id as id from public.concept_prereqs cp where cp.concept_id = p_concept
    union
    select cp.prereq_id from public.concept_prereqs cp join up on cp.concept_id = up.id
  )
  select id from up;
$$;

create function concept_prereqs_check() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (select chapter_id from public.concepts where id = new.concept_id)
     is distinct from (select chapter_id from public.concepts where id = new.prereq_id) then
    raise exception 'prerequisite must be in the same chapter';
  end if;
  -- Adding concept <- prereq closes a cycle if concept is already an ancestor of prereq.
  if new.concept_id in (select a.id from public.concept_ancestors(new.prereq_id) a) then
    raise exception 'prerequisite cycle: % would depend on itself', new.concept_id;
  end if;
  return new;
end;
$$;

create trigger concept_prereqs_check
  before insert or update on concept_prereqs
  for each row execute function concept_prereqs_check();

create table misconceptions (
  id uuid primary key default gen_random_uuid(),
  concept_id uuid not null references concepts (id) on delete cascade,
  code text not null constraint misconceptions_code_format check (code ~ '^C[0-9]{2,}-M[0-9]+$'),
  mistake text not null,
  remediation text not null,
  fallback_kind text not null constraint misconceptions_fallback_kind_check check (fallback_kind in ('concept', 'ext', 'none')),
  fallback_concept_id uuid references concepts (id),
  fallback_topic text,
  constraint misconceptions_fallback_shape check (
    (fallback_kind = 'concept' and fallback_concept_id is not null and fallback_topic is null)
    or (fallback_kind = 'ext' and fallback_concept_id is null and fallback_topic is not null)
    or (fallback_kind = 'none' and fallback_concept_id is null and fallback_topic is null)
  ),
  unique (concept_id, code)
);

create function misconceptions_check() returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_concept_code text := (select code from public.concepts where id = new.concept_id);
begin
  if new.code not like v_concept_code || '-%' then
    raise exception 'misconception % must start with %-', new.code, v_concept_code;
  end if;
  -- Routing must go back to an earlier concept, never forward.
  if new.fallback_kind = 'concept'
     and new.fallback_concept_id not in (select a.id from public.concept_ancestors(new.concept_id) a) then
    raise exception 'misconception % fallback is not a prerequisite ancestor of %', new.code, v_concept_code;
  end if;
  return new;
end;
$$;

create trigger misconceptions_check
  before insert or update on misconceptions
  for each row execute function misconceptions_check();

create table items (
  id uuid primary key default gen_random_uuid(),
  concept_id uuid not null references concepts (id) on delete cascade,
  code text not null constraint items_code_format check (code ~ '^C[0-9]{2,}-Q[0-9]+$'),
  stem text not null,
  source jsonb not null,
  verify jsonb not null,
  -- Set only by the seed after `npm run content:verify` passes.
  verified boolean not null default false,
  unique (concept_id, code)
);

create table item_options (
  item_id uuid not null references items (id) on delete cascade,
  key text not null constraint item_options_key_check check (key in ('A', 'B', 'C', 'D')),
  text text not null,
  is_correct boolean not null,
  misconception_id uuid references misconceptions (id),
  value text not null,
  primary key (item_id, key),
  constraint item_options_tagging check (is_correct = (misconception_id is null))
);

create index item_options_misconception_idx on item_options (misconception_id);

create function item_options_same_concept() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.misconception_id is not null
     and (select concept_id from public.misconceptions where id = new.misconception_id)
         is distinct from (select concept_id from public.items where id = new.item_id) then
    raise exception 'option misconception must belong to the same concept as its item';
  end if;
  return new;
end;
$$;

create trigger item_options_same_concept
  before insert or update on item_options
  for each row execute function item_options_same_concept();

-- Exactly one correct option per item, checked at commit so an item and its
-- options can be written in one transaction.
create function items_one_correct_option() returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_item uuid;
  v_correct int;
begin
  -- Separate branches: plpgsql only plans the statement it runs, and items rows have no item_id.
  if tg_table_name = 'items' then
    v_item := new.id;
  elsif tg_op = 'DELETE' then
    v_item := old.item_id;
  else
    v_item := new.item_id;
  end if;
  if not exists (select 1 from public.items where id = v_item) then
    return null; -- item deleted in the same transaction
  end if;
  select count(*) filter (where is_correct) into v_correct from public.item_options where item_id = v_item;
  if v_correct <> 1 then
    raise exception 'item % needs exactly one correct option, has %', v_item, v_correct;
  end if;
  return null;
end;
$$;

create constraint trigger items_one_correct_option
  after insert on items
  deferrable initially deferred
  for each row execute function items_one_correct_option();

create constraint trigger item_options_one_correct_option
  after insert or update or delete on item_options
  deferrable initially deferred
  for each row execute function items_one_correct_option();

-- What students may be served: approved concepts and verified items only.
-- security_invoker so the caller's privileges apply (anon/authenticated have none).
create view published_concepts with (security_invoker = true) as
  select c.* from concepts c where c.status = 'approved';

create view published_items with (security_invoker = true) as
  select i.* from items i join concepts c on c.id = i.concept_id
  where c.status = 'approved' and i.verified;

create view published_item_options with (security_invoker = true) as
  select o.* from item_options o join published_items i on i.id = o.item_id;

-- Least privilege: content is server-only. RLS on with no policies, and no
-- table or view privileges for the API roles.
alter table chapters enable row level security;
alter table concepts enable row level security;
alter table concept_prereqs enable row level security;
alter table misconceptions enable row level security;
alter table items enable row level security;
alter table item_options enable row level security;

revoke all on chapters, concepts, concept_prereqs, misconceptions, items, item_options,
  published_concepts, published_items, published_item_options from anon, authenticated;
revoke execute on function concept_ancestors(uuid) from public, anon, authenticated;
