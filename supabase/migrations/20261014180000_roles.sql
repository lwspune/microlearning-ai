-- Roles (PLAN.md Phase 2, R1): academies and profiles.
--
-- Four roles; the app shows three areas (student, teach, admin). Guests are
-- anonymous logins with no profile: they are students with no academy.
--
-- RULES THE DATABASE ENFORCES
--   * Staff (teacher, academy_admin) belong to an academy; the superadmin
--     belongs to none; a student may or may not (academy or solo).
--   * No profile for an anonymous login. (Self sign-up later: a guest who
--     links an email stops being anonymous, then gets a profile.)
--   * Who reads what: everyone reads their own profile; staff read their own
--     academy's people; the superadmin reads everyone. Same for academies.
--     The anonymous role reads nothing.
--   * Nobody signed in writes these tables: accounts and academies are made
--     server-side with the service role (R1: `npm run user:create`; R2 adds
--     checked functions for staff).
-- supabase/tests/roles.db.test.ts covers every rule.

-- Policy helpers live in `private`, which the API does not expose.
create schema private;
grant usage on schema private to authenticated;

create type app_role as enum ('student', 'teacher', 'academy_admin', 'superadmin');

create table academies (
  id uuid primary key default gen_random_uuid(),
  name text not null constraint academies_name_length check (length(btrim(name)) between 1 and 120),
  slug text not null unique
    constraint academies_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 80),
  created_at timestamptz not null default now()
);

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role app_role not null default 'student',
  -- RESTRICT: an academy is never deleted out from under its people.
  academy_id uuid references academies (id) on delete restrict,
  full_name text not null constraint profiles_full_name_length check (length(btrim(full_name)) between 1 and 120),
  -- A copy of the login's email, so staff can list their people under RLS.
  email text not null unique
    constraint profiles_email_shape check (email = lower(email) and length(email) between 3 and 254),
  -- 11th + 12th or Graduates (src/content/courses.ts GROUPS); null until known.
  stage text constraint profiles_stage_check check (stage in ('school', 'graduate')),
  created_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  constraint profiles_staff_have_academy check (role in ('student', 'superadmin') or academy_id is not null),
  constraint profiles_superadmin_no_academy check (role <> 'superadmin' or academy_id is null)
);

create index profiles_academy_idx on profiles (academy_id);
create index profiles_created_by_idx on profiles (created_by);

-- SECURITY DEFINER: whoever inserts the profile (the service role) need not read auth.users.
create function private.profile_login_check() returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
  if exists (select 1 from auth.users where id = new.id and is_anonymous) then
    raise exception 'profile_for_anonymous_login' using detail = 'Guests have no profile; link an email first.';
  end if;
  return new;
end;
$$;

create trigger profiles_named_login before insert or update of id on profiles
  for each row execute function private.profile_login_check();

-- SECURITY DEFINER so a policy can read profiles without recursing into
-- profiles' own policy; each pins search_path and qualifies every name.
create function private.is_superadmin() returns boolean
language sql stable security definer
set search_path = ''
as $$
  select exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'superadmin');
$$;

create function private.my_academy() returns uuid
language sql stable security definer
set search_path = ''
as $$
  select academy_id from public.profiles where id = (select auth.uid());
$$;

-- Self, the superadmin, or staff of the person's own academy.
create function private.can_view_person(p_person uuid) returns boolean
language sql stable security definer
set search_path = ''
as $$
  select p_person = (select auth.uid())
    or exists (
      select 1 from public.profiles me
      where me.id = (select auth.uid())
        and (
          me.role = 'superadmin'
          or (me.role in ('teacher', 'academy_admin') and me.academy_id is not null
              and me.academy_id = (select them.academy_id from public.profiles them where them.id = p_person))
        )
    );
$$;

revoke all on all functions in schema private from public, anon;
grant execute on function private.is_superadmin(), private.my_academy(), private.can_view_person(uuid) to authenticated;

alter table academies enable row level security;
alter table profiles enable row level security;

revoke all on academies, profiles from anon, authenticated;
grant select on academies, profiles to authenticated;

create policy academies_read on academies for select to authenticated
  using (id = (select private.my_academy()) or (select private.is_superadmin()));

create policy profiles_read on profiles for select to authenticated
  using ((select private.can_view_person(id)));
