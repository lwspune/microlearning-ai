-- record_attempt: grade one answer, log it, and update the learner's state for
-- the concept, atomically. The mastery rule lives here so it can't be farmed
-- or raced: the streak is the number of DIFFERENT items answered correctly
-- since the learner's last wrong answer on the concept; mastery_streak_needed() of them
-- masters it. The server calls this with the service role for the signed-in
-- user; clients cannot call it.

create function mastery_streak_needed() returns integer
language sql immutable
set search_path = ''
as $$ select 3 $$;

create function record_attempt(p_user uuid, p_item uuid, p_key text) returns jsonb
language plpgsql
set search_path = ''
as $$
declare
  v_concept uuid;
  v_correct boolean;
  v_misconception uuid;
  v_correct_key text;
  v_state text;
  v_was_mastered boolean;
  v_last_wrong bigint;
  v_streak integer;
  v_needed integer := public.mastery_streak_needed();
begin
  select i.concept_id into v_concept from public.published_items i where i.id = p_item;
  if v_concept is null then
    raise exception 'item is not published';
  end if;

  select o.is_correct, o.misconception_id into v_correct, v_misconception
  from public.item_options o where o.item_id = p_item and o.key = p_key;
  if not found then
    raise exception 'no option % on this item', p_key;
  end if;
  select o.key into v_correct_key from public.item_options o where o.item_id = p_item and o.is_correct;

  -- Serialise concurrent answers for this learner and concept.
  insert into public.learner_concept_state (user_id, concept_id, state)
  values (p_user, v_concept, 'learning')
  on conflict (user_id, concept_id) do nothing;
  select (s.state = 'mastered') into v_was_mastered
  from public.learner_concept_state s
  where s.user_id = p_user and s.concept_id = v_concept
  for update;

  insert into public.attempts (user_id, item_id, option_key, correct, misconception_id)
  values (p_user, p_item, p_key, v_correct, v_misconception);

  -- Attempt ids only increase, so "since the last wrong answer" is id order.
  select max(a.id) into v_last_wrong
  from public.attempts a join public.items i on i.id = a.item_id
  where a.user_id = p_user and i.concept_id = v_concept and not a.correct;

  select count(distinct a.item_id) into v_streak
  from public.attempts a join public.items i on i.id = a.item_id
  where a.user_id = p_user and i.concept_id = v_concept and a.correct
    and a.id > coalesce(v_last_wrong, 0);

  v_state := case
    when v_was_mastered or v_streak >= v_needed then 'mastered'
    else 'learning'
  end;

  update public.learner_concept_state s
  set state = v_state,
      streak = v_streak,
      mastery = case when v_state = 'mastered' then 1 else round(v_streak::numeric / v_needed, 3) end,
      updated_at = now()
  where s.user_id = p_user and s.concept_id = v_concept;

  return jsonb_build_object(
    'correct', v_correct,
    'correct_key', v_correct_key,
    'misconception_code', (select m.code from public.misconceptions m where m.id = v_misconception),
    'remediation', (select m.remediation from public.misconceptions m where m.id = v_misconception),
    'streak', v_streak,
    'needed', v_needed,
    'state', v_state,
    'mastered_now', v_state = 'mastered' and not v_was_mastered
  );
end;
$$;

revoke execute on function mastery_streak_needed() from public, anon, authenticated;
revoke execute on function record_attempt(uuid, uuid, text) from public, anon, authenticated;
grant execute on function record_attempt(uuid, uuid, text) to service_role;
