-- Learner data: per-concept mastery state and the attempt log.
-- Students may read their own rows; all writes happen server-side (service
-- role), so mastery can never be set from the client.

create table learner_concept_state (
  user_id uuid not null references auth.users (id) on delete cascade,
  concept_id uuid not null references concepts (id) on delete cascade,
  state text not null default 'locked'
    constraint learner_concept_state_state_check
    check (state in ('locked', 'available', 'learning', 'mastered', 'review_due')),
  mastery numeric(4, 3) not null default 0
    constraint learner_concept_state_mastery_range check (mastery between 0 and 1),
  streak integer not null default 0 constraint learner_concept_state_streak_check check (streak >= 0),
  next_review_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, concept_id)
);

create index learner_concept_state_review_idx on learner_concept_state (user_id, next_review_at);

create table attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  item_id uuid not null references items (id) on delete cascade,
  option_key text not null constraint attempts_option_key_check check (option_key in ('A', 'B', 'C', 'D')),
  correct boolean not null,
  misconception_id uuid references misconceptions (id),
  created_at timestamptz not null default now(),
  constraint attempts_option_exists foreign key (item_id, option_key) references item_options (item_id, key)
);

create index attempts_user_created_idx on attempts (user_id, created_at desc);
create index attempts_item_idx on attempts (item_id);

alter table learner_concept_state enable row level security;
alter table attempts enable row level security;

revoke all on learner_concept_state, attempts from anon, authenticated;
grant select on learner_concept_state, attempts to authenticated;

create policy "students read their own state" on learner_concept_state
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "students read their own attempts" on attempts
  for select to authenticated using ((select auth.uid()) = user_id);
