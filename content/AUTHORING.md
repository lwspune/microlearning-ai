# Concept authoring rules

Every concept file in `content/<chapter>/concepts/` must follow these rules.
They become automated checks in M1. Until then, check them by hand and with
the verification script.

## Structure

Each concept file has these sections, in this order:
header (slug, tier, status, prereqs, source, one-liner) · Hook (with reveal) ·
Explanation (Intuition, Formal, Worked example, Visual spec) · Misconceptions ·
Check items.

## Misconceptions

- **IDs** are `<concept>-M<n>`. Once an ID is in use (by an item, attempt data
  or a live build), it is never renumbered or reused. Close gaps only while a
  draft is still unreviewed.
- **Each misconception must be a model you can simulate:** a rule that turns
  the item's inputs into the wrong answer. If you can't write it as a
  function, it's a slip, not a misconception, and it doesn't get an ID.
- **Fallback** is a concept ID, `Ext: <topic>`, or `—` (for a convention-only
  mistake, where re-teaching an earlier concept won't help).

## Check items

1. **The key is re-derived independently** (sympy), never copied from a source
   key. AI-written and textbook keys are both wrong some of the time.
2. **Every wrong option comes from exactly one tagged misconception.** The
   verifier re-runs that misconception's model and must land on the option.
3. **Each option is produced by exactly one model among the item's listed
   ones: the key, or one tagged misconception.** In particular, the key must
   not *also* satisfy a listed misconception's model.
   *Learned 2026-10-13 (C25-Q5):* the original key $-1 - i$ was on the
   correct bisector **and** on the "it's a circle" distractor's circle. A
   student holding the misconception would see two valid options and could be
   credited as correct.
4. **Note when a misconception can't be detected by an item.** If a
   misconception's model gives the key for some inputs (e.g. C14-M1 in quadrants
   I/IV), say so in the concept file. The engine must then draw a diagnosing
   item from inputs where the model and the key differ.
5. **The worked example and the hook must not reuse any check item.** The
   student has already seen their answers.
6. **Source** is one of `authored` · `PYQ Vault practice` · `<exam> style (PYQ Vault …)`.
   Real PYQs keep their PYQ Vault UUID once imported (M1).
7. Aim for 5–6 items per concept, so mastery (2–3 in a row on fresh items) and
   the review queue never repeat an item too soon.
