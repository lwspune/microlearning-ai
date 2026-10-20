-- Google sign-in (self sign-up), 2026-10-20.
--
-- Anyone may sign in with Google. A Google login with no profile claims one
-- here: always a solo student (no academy), named and addressed from what the
-- auth server holds, never from the browser. A guest who links Google keeps
-- the same user id, so their progress carries over.
--
-- RULES THE DATABASE ENFORCES
--   * Guests claim nothing (they still have no profile).
--   * Only a login with a Google identity may claim; password logins are
--     still made by staff (people.sql).
--   * An existing profile is never changed: staff signing in with Google
--     stay staff.
-- supabase/tests/google-sign-in.db.test.ts covers every rule.

create function public.claim_student_profile() returns void
language plpgsql security definer
set search_path = ''
as $$
declare
  v_uid uuid := (select auth.uid());
  v_user auth.users%rowtype;
  v_google jsonb;
  v_email text;
  v_name text;
begin
  select * into v_user from auth.users where id = v_uid;
  if not found then
    raise exception 'claim_profile_not_signed_in';
  end if;
  if v_user.is_anonymous then
    raise exception 'claim_profile_guest' using detail = 'Guests have no profile; link Google first.';
  end if;
  if exists (select 1 from public.profiles where id = v_uid) then
    return;
  end if;

  select identity_data into v_google
  from auth.identities where user_id = v_uid and provider = 'google'
  order by created_at desc limit 1;
  if v_google is null then
    raise exception 'claim_profile_needs_google';
  end if;

  v_email := lower(btrim(coalesce(v_user.email, v_google ->> 'email')));
  if v_email is null or v_email = '' then
    raise exception 'claim_profile_needs_email';
  end if;
  v_name := left(btrim(coalesce(
    nullif(btrim(v_user.raw_user_meta_data ->> 'full_name'), ''),
    nullif(btrim(v_user.raw_user_meta_data ->> 'name'), ''),
    nullif(btrim(v_google ->> 'full_name'), ''),
    nullif(btrim(v_google ->> 'name'), ''),
    split_part(v_email, '@', 1)
  )), 120);

  -- A concurrent claim by the same login loses quietly; the profile exists either way.
  insert into public.profiles (id, role, academy_id, full_name, email)
  values (v_uid, 'student', null, v_name, v_email)
  on conflict (id) do nothing;
end;
$$;

revoke all on function public.claim_student_profile() from public, anon;
grant execute on function public.claim_student_profile() to authenticated;
