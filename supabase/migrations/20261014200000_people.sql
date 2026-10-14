-- Creating academies and people (PLAN.md Phase 2, R2).
--
-- WHO MAY CREATE WHOM is decided here. The app calls these functions AS THE
-- SIGNED-IN USER, and only their "yes" licenses the service-role writes that
-- follow (the service role enforces nothing by itself):
--   create_academy      superadmin only
--   can_create_person   superadmin  → anyone (staff need an academy; a superadmin has none)
--                       academy_admin → teachers and students, own academy only
--                       teacher     → students, own academy only
--                       student / guest → no one
--
-- USERNAMES. Many students have no email, so a profile may carry a username
-- instead; its login is <username>@students.microlearning.invalid, and the
-- database keeps the two in step (profiles_username_login).
-- supabase/tests/people.db.test.ts covers every rule.

alter table profiles
  add column username text unique
    constraint profiles_username_format check (username ~ '^[a-z0-9]+([._-][a-z0-9]+)*$' and length(username) between 3 and 40),
  add constraint profiles_username_login check (username is null or email = username || '@students.microlearning.invalid');

create function public.create_academy(p_name text, p_slug text) returns uuid
language plpgsql security definer
set search_path = ''
as $$
declare
  v_id uuid;
begin
  if not exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'superadmin') then
    raise exception 'not_superadmin';
  end if;
  begin
    insert into public.academies (name, slug) values (btrim(p_name), p_slug) returning id into v_id;
  exception when unique_violation then
    raise exception 'slug_taken';
  end;
  return v_id;
end;
$$;

create function public.can_create_person(p_role app_role, p_academy uuid) returns boolean
language sql stable security definer
set search_path = ''
as $$
  select coalesce((
    select case me.role
      when 'superadmin' then
        case
          when p_role in ('teacher', 'academy_admin') then p_academy is not null
          when p_role = 'superadmin' then p_academy is null
          else true
        end
      when 'academy_admin' then p_role in ('student', 'teacher') and p_academy is not null and p_academy = me.academy_id
      when 'teacher' then p_role = 'student' and p_academy is not null and p_academy = me.academy_id
      else false
    end
    from public.profiles me
    where me.id = (select auth.uid())
  ), false);
$$;

revoke all on function public.create_academy(text, text), public.can_create_person(app_role, uuid) from public, anon;
grant execute on function public.create_academy(text, text), public.can_create_person(app_role, uuid) to authenticated;
