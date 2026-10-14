-- Student performance for staff (PLAN.md "Student performance").
--
-- WHO READS LEARNER DATA: the student themselves (existing policies), staff
-- of the student's own academy, and the superadmin; never another academy
-- (private.can_view_person, migration roles). Still no client writes.
--
-- Two views summarise it. They are security_invoker, so the policies above
-- apply to whoever reads them: a view never shows rows its reader couldn't
-- read from the tables.
-- supabase/tests/performance.db.test.ts covers every rule.

create policy "staff read their academy's students' state" on learner_concept_state
  for select to authenticated using ((select private.can_view_person(user_id)));

create policy "staff read their academy's students' attempts" on attempts
  for select to authenticated using ((select private.can_view_person(user_id)));

-- One row per learner: concepts mastered and learning, reviews due now
-- (mastered and past next_review_at, as src/engine/review.ts isReviewDue),
-- answers and correct answers, and when they were last active.
create view learner_summary with (security_invoker = true) as
with st as (
  select user_id,
    count(*) filter (where state = 'mastered')::int as mastered,
    count(*) filter (where state = 'learning')::int as learning,
    count(*) filter (where state = 'mastered' and next_review_at <= now())::int as reviews_due,
    max(updated_at) as state_at
  from public.learner_concept_state
  group by user_id
), att as (
  select user_id,
    count(*)::int as answered,
    count(*) filter (where correct)::int as correct,
    max(created_at) as answered_at
  from public.attempts
  group by user_id
)
select
  coalesce(st.user_id, att.user_id) as user_id,
  coalesce(st.mastered, 0) as mastered,
  coalesce(st.learning, 0) as learning,
  coalesce(st.reviews_due, 0) as reviews_due,
  coalesce(att.answered, 0) as answered,
  coalesce(att.correct, 0) as correct,
  greatest(st.state_at, att.answered_at) as last_active
from st full join att on att.user_id = st.user_id;

-- Each learner's misconceptions: how often in the last 30 days, in all, and when last.
create view learner_mistakes with (security_invoker = true) as
select user_id, misconception_id,
  count(*) filter (where created_at > now() - interval '30 days')::int as recent,
  count(*)::int as total,
  max(created_at) as last_at
from public.attempts
where misconception_id is not null
group by user_id, misconception_id;

revoke all on learner_summary, learner_mistakes from anon, authenticated;
grant select on learner_summary, learner_mistakes to authenticated;
