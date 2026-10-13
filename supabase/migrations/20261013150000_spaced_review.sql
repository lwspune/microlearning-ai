-- Spaced review (Leitner boxes). Mastering a concept puts it in box 1, due in
-- 1 day. When a review is due, review_answers_needed() correct answers in a
-- row pass it (next box: 1, 3, 7, 14, 30 days); any miss sends it back to
-- box 1, due in 1 day. Answers when nothing is due don't touch the schedule.
-- Lives in the database next to mastery so it is atomic and can't be gamed.

alter table learner_concept_state
  add column review_box smallint not null default 0
    constraint learner_concept_state_review_box_range check (review_box between 0 and 5),
  add column review_correct smallint not null default 0
    constraint learner_concept_state_review_correct_range check (review_correct >= 0);

create function review_interval(p_box integer) returns interval
language sql immutable
set search_path = ''
as $$
  select case p_box
    when 1 then interval '1 day'
    when 2 then interval '3 days'
    when 3 then interval '7 days'
    when 4 then interval '14 days'
    else interval '30 days'
  end
$$;

create function review_answers_needed() returns integer
language sql immutable
set search_path = ''
as $$ select 2 $$;

create or replace function record_attempt(p_user uuid, p_item uuid, p_key text) returns jsonb
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
  v_box integer;
  v_next timestamptz;
  v_review_correct integer;
  v_reviewing boolean;
  v_review_done boolean := false;
  v_review_passed boolean := false;
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
  select (s.state = 'mastered'), s.review_box, s.next_review_at, s.review_correct
  into v_was_mastered, v_box, v_next, v_review_correct
  from public.learner_concept_state s
  where s.user_id = p_user and s.concept_id = v_concept
  for update;

  insert into public.attempts (user_id, item_id, option_key, correct, misconception_id)
  values (p_user, p_item, p_key, v_correct, v_misconception);

  -- Mastery streak: DIFFERENT items correct since the last wrong answer.
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

  -- Spaced review.
  v_reviewing := v_was_mastered and v_next is not null and v_next <= now();
  if v_reviewing then
    if v_correct then
      v_review_correct := v_review_correct + 1;
      if v_review_correct >= public.review_answers_needed() then
        v_box := least(v_box + 1, 5);
        v_next := now() + public.review_interval(v_box);
        v_review_correct := 0;
        v_review_done := true;
        v_review_passed := true;
      end if;
    else
      v_box := 1;
      v_next := now() + public.review_interval(1);
      v_review_correct := 0;
      v_review_done := true;
    end if;
  elsif v_state = 'mastered' and not v_was_mastered then
    v_box := 1;
    v_next := now() + public.review_interval(1);
    v_review_correct := 0;
  end if;

  update public.learner_concept_state s
  set state = v_state,
      streak = v_streak,
      mastery = case when v_state = 'mastered' then 1 else round(v_streak::numeric / v_needed, 3) end,
      review_box = v_box,
      next_review_at = v_next,
      review_correct = v_review_correct,
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
    'mastered_now', v_state = 'mastered' and not v_was_mastered,
    'reviewing', v_reviewing,
    'review_done', v_review_done,
    'review_passed', v_review_passed,
    'review_correct', v_review_correct,
    'review_needed', public.review_answers_needed(),
    'review_box', v_box,
    'next_review_at', v_next
  );
end;
$$;

-- A repeated misconception makes its (mastered) root concept due for review now.
create function mark_review_due(p_user uuid, p_concept uuid) returns void
language sql
set search_path = ''
as $$
  update public.learner_concept_state
  set next_review_at = now(), review_correct = 0, updated_at = now()
  where user_id = p_user and concept_id = p_concept and state = 'mastered'
$$;

revoke execute on function review_interval(integer) from public, anon, authenticated;
revoke execute on function review_answers_needed() from public, anon, authenticated;
revoke execute on function mark_review_due(uuid, uuid) from public, anon, authenticated;
grant execute on function mark_review_due(uuid, uuid) to service_role;
