# Translation runbook: Hindi and Marathi lessons

How to translate a chapter into Hindi and Marathi, from glossary to live. The
rules a translation must follow are AUTHORING.md "Translations" (23–29); the
design is PLAN.md "Hindi and Marathi lessons". This file is the procedure and
the lessons learned doing the first six chapters (2026-10-25).

**Who does what.** The translations are written in the main session, one
chapter at a time, both languages together, and marked `approved` by the
writer. The owner checks them later in the app (owner, 2026-10-25). No
subagents.

**What is translated.** The hook, intuition, formal slides, worked example,
each misconception's remediation and each item's solution steps. Question
stems, options, figures, alt text and the app's own words stay English.

## The tools

| Command | What it does |
| --- | --- |
| `node scripts/translation-skeleton.ts <chapter> <id>...` | Prints the English text in a translation's shape, with its `source` fingerprint |
| `npm run translations:index -- <chapter>` | Rewrites `translations/index.ts` from the files present (creates the folders and an empty register the first time) |
| `npm run translations:check -- <chapter>` | Checks the chapter and its translations; exits 1 on any problem |
| `node scripts/overflow-probe.mjs <chapter> --lang=hi <slug>...` | Finds formulas wider than a phone slide (needs `npm run dev`) |
| `npm run content:seed -- <chapter>` | Verifies and publishes the chapter, its approved translations included |
| `npm run translations:status -- <chapter>` | Compares the live rows with the catalog; exits 1 on any gap |
| `npm run e2e:languages` | The switch, end to end in a browser (run after any change to the switch or lesson UI) |

## The chapter loop

1. **Branch and scope.** Work on `lesson-languages` (or a fresh branch from
   `main`). Translate the concepts the course teaches: a chapter's coverage
   in `src/content/courses.ts` (for example `book("sequences-and-series", 18)`
   is C01–C18; `cnMaharashtra` lists Complex Numbers' 22).
2. **Glossary and register, in one edit.** In the chapter's `index.ts`, add
   `glossary: [...]` (the book's terms, see "Choosing the glossary") and
   `translations` (imported from `./translations/index.ts`), then run
   `npm run translations:index -- <chapter>` before anything else runs.
   Every script loads the whole catalog, so a chapter that imports a
   missing register breaks them all, a seed already running included.
3. **Skeletons.** Print each concept's skeleton into the session scratchpad:
   `node scripts/translation-skeleton.ts <chapter> C01 > <scratchpad>/C01.txt`.
   List the bold terms across them to choose the glossary.
4. **Per concept, both languages:**
   1. Write `translations/hi/cNN.ts` and `translations/mr/cNN.ts` from the
      skeleton: `export const cNN: ConceptTranslation`, `lang`, `status:
      "approved"`, the skeleton's `source`, and `const t = String.raw`.
   2. `npm run translations:index -- <chapter>`.
   3. `npm run translations:check -- <chapter>`. Fix every message (it names
      language, concept and field) with the Edit tool, then check again.
   4. Commit both files and the register:
      `feat: <Chapter> CNN in Hindi and Marathi`. Chain the commit after the
      check with `&&`, so a failing check stops it.
5. **Overflow probe.** With `npm run dev` running, probe every translated
   concept in both languages. Each run must end `0 overflowing`.
6. **Publish.** `npm run content:seed -- <chapter>`, then `npm test`,
   `npm run lint` and `npx tsc --noEmit -p .`.
7. **Record.** Update PLAN.md "Hindi and Marathi lessons" (the status line)
   and the project memory note; commit as `docs:`.
8. **Merge.** `git checkout main`, `git merge --no-ff lesson-languages`,
   `git push` (Vercel deploys), back to `lesson-languages`.
9. **Verify live.**
   - `npm run translations:status -- <chapter>` must print `live matches the
     catalog`.
   - As a guest on https://www.conceptladder.in, open the chapter's first
     concept: the switch reads English | Hindi | Marathi and both languages
     show Devanagari. Later concepts say "Not unlocked yet" to a new guest;
     that is the normal lock, not a failure.
10. **Clean up** as the global rules say after every push: the scratchpad's
    skeletons and probe logs, old session logs (dry run first), this
    project's finished subagent folders. Report what went and the space freed.

## Choosing the glossary

The check keeps a glossary term in English wherever the English string uses
it, so the list decides how much English stays on the slide.

- **List the book's terms:** the chapter's names for things (`determinant`,
  `cofactor`, `G.P.`, `common ratio`, `modulus`, `argument`), plus the
  chapter's core nouns (`set`, `matrix`, `sequence`).
- **Leave out everyday and generic words.** `order`, `entry`, `term`, `mean`
  and `root` appear in ordinary sentences too ("in order to"); listed, they
  force English into every such sentence.
- **Mind the matching.** It is case-insensitive and matches inside longer
  words: `domain` matches `co-domain`, `symmetric` matches `skew-symmetric`,
  `row` matches `rows`. It does not match a different spelling: `moduli`
  is not `modulus`, `cube roots of unity` is not `cube root of unity`.
  Add the plural when the chapter mostly uses it.
- Bold markers are ignored: `**square** matrix` counts as `square matrix`.

## Writing it

- **Teacher's register:** plain Hindi or Marathi, the book's terms in English,
  glossed in brackets where the English defines them:
  `**Cofactor** (सहखंड)` / `**Cofactor** (सहअवयव)`. Hindi `जोड़िए`, Marathi
  `जोडा`; Hindi ends sentences with `।`, Marathi with `.`.
- **Every string with English words needs a Devanagari word.** Labels that
  are only maths and English fail: write `Row 1 में: …`, `Polar form मध्ये:
  …`, `घन कीजिए: …`, not `Row 1: …`. A string that is only maths stays as it
  is.
- **The maths is copied, never retyped.** Don't repeat a value as maths that
  the English says once (`$0$` twice fails), and don't drop one (`शून्य` for
  `$0$` fails). Spacing inside `$…$` counts: `= 2` is not `=2`.
- A sentence after a danda or full stop still starts with a capital when it
  starts with an English word: `… बाहर। Imaginary part …`.
- Names stay names in Devanagari: Riya → रिया, Sameer → समीर.

Words that recur, kept the same across chapters:

| English | Hindi | Marathi |
| --- | --- | --- |
| Recall: | याद कीजिए: | आठवा: |
| Take … / Find … / Simplify … | लीजिए / ज्ञात कीजिए / सरल कीजिए | घ्या / काढा / सोपे रूप द्या |
| so / check | इसलिए / जाँच | म्हणून / तपासणी |
| term (of a sequence, entry of a matrix) | पद / घटक | पद / घटक |
| coefficient / constant | गुणांक / अचर | सहगुणक / स्थिरांक |
| sum / difference / product / quotient | योग / अंतर / गुणनफल / भागफल | बेरीज / फरक / गुणाकार / भागाकार |
| remainder / ratio / factor | शेषफल / अनुपात / गुणनखंड | बाकी / गुणोत्तर / अवयव |
| numerator / denominator | अंश / हर | अंश / छेद |
| real / imaginary | वास्तविक / काल्पनिक | वास्तव / काल्पनिक |
| positive / negative | धनात्मक / ऋणात्मक | धन / ऋण |
| quadrant | चतुर्थांश | चरण |
| clockwise / anticlockwise | दक्षिणावर्त / वामावर्त | घड्याळाच्या दिशेने / घड्याळाच्या उलट दिशेने |
| root (of an equation) | मूल | मूळ |

## Pitfalls (each happened once)

| What happened | Do instead |
| --- | --- |
| A chained check-and-commit committed a flagged file: the scratch check exited 0 on problems | `translations:check` exits 1; keep the `&&` chain |
| A shell `sed` with `\pi` or `\sqrt` in the pattern silently matched nothing, or ate a space | Edit translation text with the Edit tool |
| A Python `"\f"` wrote a form feed into `\frac` | Never write maths through a shell or Python string |
| The chapter imported `translations/index.ts` before it existed and every script broke | Step 2: add the import and run `translations:index` in one go |
| A test assumed a concept nobody had translated; translating it broke the test | Tests about untranslated concepts use their own fixture |
| `node live.ts /learn/...` in Git Bash became `C:/Program Files/Git/learn/...` | Prefix `MSYS_NO_PATHCONV=1` when passing a `/path` argument |
| `process.exit()` straight after `fetch` crashed Node on Windows | Set `process.exitCode` in scripts that fetch |
| Stopping the background `npm run dev` task left the Node server on port 3000 | Check `Get-NetTCPConnection -LocalPort 3000`, confirm it is this project's `next` server, then stop that process |

## Changing the English later

An approved translation records its English text's fingerprint (`source`).
When the English changes, `translations:check` fails for that concept and
prints the new `source`: update the translation and its `source`, or set
`status: "draft"` so the concept falls back to English until it is redone.
