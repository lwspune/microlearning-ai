# Suggestions

Ideas worth doing later, parked with enough detail to pick up without
re-deriving them. Approved work lives in [PLAN.md](PLAN.md); when an item
here is taken up, its plan moves there.

## Classes and the teacher dashboard (parked 2026-10-14; was Phase 2 R3)

Planned after roles R1–R2; the owner chose to keep things simple for now.

**Database** (one migration, DB tests first)
- `classes` (academy, name, course slug) and `class_members` (class,
  student); a trigger refuses a member who isn't a student of the class's
  own academy (CrackSSB's `batch_members` pattern).
- Writes only through checked functions, called as the signed-in user:
  `create_class(name, course)`, `add_class_members(class, students)`,
  `remove_class_member(class, student)`. Staff act only in their own
  academy; the superadmin in any.
- **Staff read their academy's students' learner data** (taken up
  2026-10-14 by "Student performance" in PLAN.md; classes can build on it). Today
  `learner_concept_state` and `attempts` are readable only by their owner.
  A new read policy (via `private.can_view_person`) lets staff read their
  own academy's students, and no one else's. It widens who sees student
  data, so it needs the full DB-test treatment (another academy's teacher
  sees nothing; students still see only their own).

**Screens**
- `/teach/classes`: the academy's classes, "New class" (name + course).
- A class page:
  - members: add students from the academy, remove one;
  - students × concepts grid for the class's course (mastered / learning /
    not started / review due, shown by symbol as well as colour; scrolls
    sideways on phones);
  - "mistakes the class keeps making": top 5 misconceptions in the last 14
    days, with how many students made each;
  - reviews due per student; summary (average mastered, active in 7 days).
- `/teach` gets a "Classes" card in place of "Coming soon".

**Tests:** DB tests (membership rule, who may create/add/remove, the new
read policy), unit tests for the dashboard numbers (grid, misconception
ranking, averages), and an e2e test (teacher makes a class, students answer
some questions wrongly, the dashboard shows their states and the top
mistake).

**Open decisions (recommended first):**
1. Who sees which classes: every teacher sees all of the academy's classes,
   or each teacher only their assigned ones (needs class–teacher links).
2. Who creates classes: academy admins and teachers, or admins only.
3. A student in several classes (a Board class and a JEE class): allowed;
   progress is shared because concepts are shared within the group.
4. The superadmin sees an academy's classes read-only from `/admin`, or
   nothing for now.

## Also parked (details in PLAN.md)

- Self sign-up; Google sign-in; staff reset a student's password
  (PLAN.md Phase 2, "Later").
- Teacher present mode; "ask the class" live polls (PLAN.md "Teachers").
- CAPTCHA on guest sign-in and cleanup of inactive guests before a public
  launch (PLAN.md "Follow-ups").
