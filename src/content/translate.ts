import { formalParts } from "../lessons/deck.ts";
import { leadIn } from "./leadIn.ts";
import type { Chapter, Concept, ConceptTranslation, Lang } from "./types.ts";

/**
 * Hindi and Marathi lessons (PLAN.md "Hindi and Marathi lessons", AUTHORING.md Translations).
 * A translation carries only the English concept's text fields; the maths, figures, stems and
 * options are the English concept's own.
 */

export const LANGS: Lang[] = ["hi", "mr"];

type Text = Pick<ConceptTranslation, "hook" | "intuition" | "formal" | "worked" | "remediation" | "solutions">;

/** The English concept's translated fields, in a translation's shape. */
function textOf(c: Concept): Text {
  const { intuition, formal, worked } = c.explanation;
  return {
    hook: c.hook,
    intuition,
    formal: typeof formal === "string" ? formal : formal.map((s) => ("points" in s ? { title: s.title, points: s.points } : { body: s.body })),
    worked: { prompt: worked.prompt, steps: worked.steps, answer: worked.answer },
    remediation: Object.fromEntries(c.misconceptions.map((m) => [m.id, m.remediation])),
    solutions: Object.fromEntries(c.items.map((i) => [i.id, i.solution.steps])),
  };
}

/** Every text field by path ("intuition.1", "formal.0.points.2", "solutions.C06-Q2.0"). Formal text goes by slide section. */
function fields(x: Text): Map<string, string> {
  const out = new Map<string, string>([
    ["hook.prompt", x.hook.prompt],
    ["hook.reveal", x.hook.reveal],
  ]);
  if (typeof x.intuition === "string") out.set("intuition", x.intuition);
  else x.intuition.forEach((p, i) => out.set(`intuition.${i}`, p));
  formalParts(x.formal).forEach((part, i) => {
    if ("points" in part) {
      out.set(`formal.${i}.title`, part.title);
      part.points.forEach((p, j) => out.set(`formal.${i}.points.${j}`, p));
    } else out.set(`formal.${i}.body`, part.body);
  });
  out.set("worked.prompt", x.worked.prompt);
  x.worked.steps.forEach((s, i) => out.set(`worked.steps.${i}`, s));
  out.set("worked.answer", x.worked.answer);
  for (const [id, r] of Object.entries(x.remediation)) out.set(`remediation.${id}`, r);
  for (const [id, steps] of Object.entries(x.solutions)) steps.forEach((s, i) => out.set(`solutions.${id}.${i}`, s));
  return out;
}

/** cyrb53: a short, stable hash; it only has to notice that the English changed. */
function hash(s: string): string {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, "0");
}

/** A fingerprint of the English text a translation covers: it changes whenever that text does. */
export function textFingerprint(c: Concept): string {
  return hash(JSON.stringify([...fields(textOf(c))]));
}

/** The English concept with the translation's text in place; figures, stems, options and engine fields stay. */
export function translateConcept(en: Concept, tr: ConceptTranslation): Concept {
  const formal = en.explanation.formal;
  const parts = formalParts(tr.formal);
  return {
    ...en,
    hook: tr.hook,
    explanation: {
      ...en.explanation,
      intuition: tr.intuition,
      formal: typeof formal === "string" ? (typeof tr.formal === "string" ? tr.formal : formal) : formal.map((s, i) => ({ ...(parts[i] ?? s), ...(s.figure && { figure: s.figure }) })),
      worked: { ...en.explanation.worked, prompt: tr.worked.prompt, steps: tr.worked.steps, answer: tr.worked.answer },
    },
    misconceptions: en.misconceptions.map((m) => ({ ...m, remediation: tr.remediation[m.id] ?? m.remediation })),
    items: en.items.map((i) => ({ ...i, solution: { ...i.solution, steps: tr.solutions[i.id] ?? i.solution.steps } })),
  };
}

const MATH = /\$\$[\s\S]+?\$\$|\$[^$]+?\$/g;
/** Devanagari letters and signs; the dandas (U+0964, U+0965) are punctuation, so they don't count. */
const DEVANAGARI = /[ऀ-ॣ०-ॿ]/;

/** The words around the maths, without bold markers. */
const prose = (s: string) => s.replace(MATH, " ").replaceAll("**", "");

/** What `a` has that `b` lacks, counting repeats. */
function less(a: string[], b: string[]): string[] {
  const left = [...b];
  return a.filter((x) => {
    const i = left.indexOf(x);
    if (i < 0) return true;
    left.splice(i, 1);
    return false;
  });
}

const termPattern = (term: string) => new RegExp(`(?<![a-z])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");

/** Field-by-field checks against the English: shape, maths, script, glossary terms. */
function fieldProblems(en: Map<string, string>, tr: Map<string, string>, glossary: string[]): string[] {
  const errors: string[] = [];
  for (const path of en.keys()) if (!tr.has(path)) errors.push(`${path} missing`);
  for (const path of tr.keys()) if (!en.has(path)) errors.push(`${path} is not in the English`);
  for (const [path, e] of en) {
    const t = tr.get(path);
    if (t === undefined) continue;
    const em = e.match(MATH) ?? [];
    const tm = t.match(MATH) ?? [];
    const missing = less(em, tm);
    const extra = less(tm, em);
    if (missing.length || extra.length) {
      const diff = [...(missing.length ? [`missing ${missing.join(" ")}`] : []), ...(extra.length ? [`extra ${extra.join(" ")}`] : [])];
      errors.push(`${path} maths differs from the English: ${diff.join(", ")}`);
    }
    if (/[a-z]/i.test(prose(e)) && !DEVANAGARI.test(prose(t))) errors.push(`${path} has no Devanagari: still in English?`);
    for (const term of glossary) {
      const re = termPattern(term);
      if (re.test(prose(e)) && !re.test(prose(t))) errors.push(`${path} drops the term "${term}" (glossary terms stay in English)`);
    }
    if (/^formal\.\d+\.body$/.test(path) && (leadIn(e) === null) !== (leadIn(t) === null)) {
      errors.push(leadIn(e) ? `${path} needs a bold lead-in, like the English (it titles the slide)` : `${path} has a bold lead-in the English lacks`);
    }
  }
  return errors;
}

/** Checks every translation in the chapter against its English concept. Returns one message per problem. */
export function validateTranslations(chapter: Chapter): string[] {
  const errors: string[] = [];
  const authored = new Map(chapter.concepts.map((c) => [c.id, c]));
  const seen = new Set<string>();
  for (const tr of chapter.translations ?? []) {
    const key = `${tr.lang} ${tr.id}`;
    if (seen.has(key)) {
      errors.push(`${key}: translated twice`);
      continue;
    }
    seen.add(key);
    const en = authored.get(tr.id);
    if (!en) {
      errors.push(`${key}: no authored concept`);
      continue;
    }
    errors.push(...fieldProblems(fields(textOf(en)), fields(tr), chapter.glossary ?? []).map((e) => `${key}: ${e}`));
    const now = textFingerprint(en);
    if (tr.status === "approved" && tr.source !== now) errors.push(`${key}: the English has changed since it was translated (source is now "${now}")`);
  }
  return errors;
}
