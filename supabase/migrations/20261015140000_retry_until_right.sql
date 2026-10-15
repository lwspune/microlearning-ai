-- Retry until right (owner's decision, 2026-10-15). A question counts by the
-- learner's LATEST answer to it: right ones count toward mastery, wrong ones
-- stay open until answered right. A miss no longer wipes the count; the
-- concept is mastered once mastery_streak_needed() different questions are
-- right and none is left to retry. `streak` now holds the questions right;
-- `to_retry` the open ones. A mastered concept stays mastered, as before.

alter table learner_concept_state
  add column to_retry integer not null default 0 constraint learner_concept_state_to_retry_check check (to_retry >= 0);

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
  v_right integer;
  v_to_retry integer;
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

  -- Each question by its latest answer: right, or open to retry.
  select count(*) filter (where l.correct), count(*) filter (where not l.correct)
  into v_right, v_to_retry
  from (
    select distinct on (a.item_id) a.correct
    from public.attempts a join public.items i on i.id = a.item_id
    where a.user_id = p_user and i.concept_id = v_concept
    order by a.item_id, a.id desc
  ) l;

  v_state := case
    when v_was_mastered or (v_right >= v_needed and v_to_retry = 0) then 'mastered'
    else 'learning'
  end;

  -- Spaced review (unchanged).
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
      streak = v_right,
      to_retry = v_to_retry,
      mastery = case when v_state = 'mastered' then 1 else round(least(v_right, v_needed)::numeric / v_needed, 3) end,
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
    'streak', v_right,
    'to_retry', v_to_retry,
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

-- Learners part-way through a concept: their counts under the new rule. Their
-- state changes only with their next answer.
update learner_concept_state s
set streak = l.right_count, to_retry = l.open_count
from (
  select a.user_id, i.concept_id,
         count(*) filter (where a.correct) as right_count,
         count(*) filter (where not a.correct) as open_count
  from (
    select distinct on (a.user_id, a.item_id) a.user_id, a.item_id, a.correct
    from attempts a
    order by a.user_id, a.item_id, a.id desc
  ) a join items i on i.id = a.item_id
  group by a.user_id, i.concept_id
) l
where s.user_id = l.user_id and s.concept_id = l.concept_id and s.state = 'learning';
