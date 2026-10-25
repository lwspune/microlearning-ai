import { describe, expect, it } from "vitest";
import type { Chapter, Concept, ConceptTranslation, Figure, GraphNode, Item } from "./types";
import { textFingerprint, translateConcept } from "./translate";
import { validateChapter } from "./validate";

const t = String.raw;

function node(id: string, prereqs: string[] = []): GraphNode {
  return { id, slug: id.toLowerCase(), title: id, oneLiner: "", group: "g", tier: "core", prereqs, ext: [], sources: [] };
}

const figure: Figure = { alt: "A ray turned 60° from OA", axes: "none", view: { x: [-1, 3], y: [-1, 3] }, elements: [{ kind: "turn", r: 2, to: 60, step: 1 }] };

function item(n: number): Item {
  return {
    id: `C2-Q${n}`,
    source: { kind: "authored" },
    stem: t`Which angle is co-terminal with $${30 + n}^\circ$?`,
    verify: { kind: "value", inputs: {} },
    options: [
      { key: "A", text: "$1$", correct: true, value: "1" },
      { key: "B", text: "$2$", correct: false, misconceptionId: "C2-M1", value: "2" },
      { key: "C", text: "$3$", correct: false, misconceptionId: "C2-M1", value: "3" },
      { key: "D", text: "$4$", correct: false, misconceptionId: "C2-M1", value: "4" },
    ],
    solution: { steps: [t`Add $360^\circ$ to the angle.`, t`So the answer is $1$.`], ...(n === 1 && { figure }) },
  };
}

/** C1 → C2, with C2 authored. */
function chapter(): Chapter {
  const c2: Concept = {
    id: "C2",
    status: "approved",
    hook: { prompt: t`A spoke turns $750^\circ$. **Where does it stop?**`, reveal: t`At $30^\circ$: the angles are **co-terminal**.` },
    explanation: {
      intuition: [t`A ray turns about $O$.`, t`Where it stops is the **terminal arm**.`],
      formal: [
        { title: "Directed angle", points: [t`Anticlockwise turns are positive: $60^\circ$.`], figure },
        { body: t`**Standard position.** The vertex is at $O$ and the initial arm on the $x$-axis.` },
      ],
      worked: { prompt: t`Is $-330^\circ$ co-terminal with $30^\circ$?`, steps: [t`$-330^\circ + 360^\circ = 30^\circ$.`, "So they are."], answer: "Yes.", figure },
      figure,
      visualSpec: "",
    },
    misconceptions: [{ id: "C2-M1", mistake: "Treats clockwise as positive", remediation: t`Clockwise turns are negative: $-60^\circ$.`, fallback: { kind: "none" } }],
    items: [1, 2, 3, 4, 5].map(item),
  };
  return { slug: "t", title: "T", group: "school", subject: "maths", graph: [node("C1"), node("C2", ["C1"])], concepts: [c2], glossary: ["terminal arm", "co-terminal", "initial arm"] };
}

/** A valid Hindi translation of C2. */
function hindi(ch: Chapter): ConceptTranslation {
  return {
    id: "C2",
    lang: "hi",
    status: "approved",
    source: textFingerprint(ch.concepts[0]),
    hook: { prompt: t`एक spoke $750^\circ$ घूमती है। **वह कहाँ रुकती है?**`, reveal: t`$30^\circ$ पर: ये कोण **co-terminal** हैं।` },
    intuition: [t`एक ray बिंदु $O$ के चारों ओर घूमती है।`, t`ray जहाँ रुकती है, वह **terminal arm** है।`],
    formal: [
      { title: "दिष्ट कोण (directed angle)", points: [t`वामावर्त (anticlockwise) घुमाव धनात्मक होते हैं: $60^\circ$।`] },
      { body: t`**मानक स्थिति (standard position).** शीर्ष $O$ पर है और initial arm $x$-अक्ष पर।` },
    ],
    worked: { prompt: t`क्या $-330^\circ$, $30^\circ$ के साथ co-terminal है?`, steps: [t`$-330^\circ + 360^\circ = 30^\circ$.`, "इसलिए हाँ, हैं।"], answer: "हाँ।" },
    remediation: { "C2-M1": t`दक्षिणावर्त (clockwise) घुमाव ऋणात्मक होते हैं: $-60^\circ$।` },
    solutions: Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`C2-Q${n}`, [t`कोण में $360^\circ$ जोड़िए।`, t`इसलिए उत्तर $1$ है।`]])),
  };
}

/** Errors after changing a valid chapter with a valid Hindi translation. */
function errorsAfter(mutate: (tr: ConceptTranslation, ch: Chapter) => void): string[] {
  const ch = chapter();
  const tr = hindi(ch);
  mutate(tr, ch);
  ch.translations = [tr];
  return validateChapter(ch);
}

describe("translateConcept", () => {
  const ch = chapter();
  const en = ch.concepts[0];
  const hi = translateConcept(en, hindi(ch));

  it("puts the translated text in place of the English", () => {
    expect(hi.hook.prompt).toContain("वह कहाँ रुकती है?");
    expect(hi.explanation.intuition).toEqual(hindi(ch).intuition);
    expect(hi.explanation.formal).toMatchObject([{ title: "दिष्ट कोण (directed angle)" }, { body: expect.stringContaining("मानक स्थिति") }]);
    expect(hi.explanation.worked).toMatchObject({ steps: hindi(ch).worked.steps, answer: "हाँ।" });
    expect(hi.misconceptions[0].remediation).toContain("ऋणात्मक");
    expect(hi.items[2].solution.steps).toEqual(hindi(ch).solutions["C2-Q3"]);
  });

  it("keeps the English figures, stems, options and engine fields", () => {
    expect(hi.explanation.figure).toBe(figure);
    expect((hi.explanation.formal as { figure?: Figure }[])[0].figure).toBe(figure);
    expect(hi.explanation.worked.figure).toBe(figure);
    expect(hi.items[0].solution.figure).toBe(figure);
    expect(hi.items.map((i) => [i.stem, i.options])).toEqual(en.items.map((i) => [i.stem, i.options]));
    expect(hi.misconceptions[0]).toMatchObject({ mistake: en.misconceptions[0].mistake, fallback: en.misconceptions[0].fallback });
  });

  it("translates a formal text written as one string", () => {
    const one = { ...en, explanation: { ...en.explanation, formal: "First.\n\nSecond." } };
    expect(translateConcept(one, { ...hindi(ch), formal: "पहला।\n\nदूसरा।" }).explanation.formal).toBe("पहला।\n\nदूसरा।");
  });

  it("leaves the English concept unchanged", () => {
    expect(en).toEqual(chapter().concepts[0]);
  });
});

describe("textFingerprint", () => {
  const base = textFingerprint(chapter().concepts[0]);
  const after = (mutate: (c: Concept) => void) => {
    const c = chapter().concepts[0];
    mutate(c);
    return textFingerprint(c);
  };

  it("is stable", () => {
    expect(textFingerprint(chapter().concepts[0])).toBe(base);
  });

  it("changes when any translated English text changes", () => {
    expect(after((c) => (c.hook.prompt += " "))).not.toBe(base);
    expect(after((c) => ((c.explanation.formal as { points: string[] }[])[0].points[0] = "Changed."))).not.toBe(base);
    expect(after((c) => (c.misconceptions[0].remediation = "Changed."))).not.toBe(base);
    expect(after((c) => (c.items[4].solution.steps[1] = "Changed."))).not.toBe(base);
  });

  it("ignores what stays English: figures, stems and options", () => {
    expect(after((c) => (c.explanation.figure = { ...figure, alt: "Changed" }))).toBe(base);
    expect(after((c) => (c.items[0].stem = "Changed"))).toBe(base);
    expect(after((c) => (c.items[0].options[0].text = "$9$"))).toBe(base);
  });
});

describe("validateChapter: translations", () => {
  it("accepts a valid translation", () => {
    expect(errorsAfter(() => {})).toEqual([]);
  });

  it("rejects a translation of a concept that is not authored", () => {
    expect(errorsAfter((tr) => (tr.id = "C1"))).toContainEqual(expect.stringMatching(/hi C1: no authored concept/));
  });

  it("rejects two translations into the same language", () => {
    const ch = chapter();
    ch.translations = [hindi(ch), hindi(ch)];
    expect(validateChapter(ch)).toContainEqual(expect.stringMatching(/hi C2: translated twice/));
  });

  it("rejects a missing or extra point", () => {
    expect(errorsAfter((tr) => (tr.intuition as string[]).pop())).toContainEqual(expect.stringMatching(/hi C2: intuition.1 missing/));
    expect(errorsAfter((tr) => (tr.intuition as string[]).push("और।"))).toContainEqual(expect.stringMatching(/hi C2: intuition.2 is not in the English/));
  });

  it("rejects a formal section of another kind", () => {
    expect(errorsAfter((tr) => (tr.formal = [{ body: "दिष्ट कोण।" }, (tr.formal as { body: string }[])[1]]))).toContainEqual(
      expect.stringMatching(/hi C2: formal.0.title missing/),
    );
  });

  it("rejects a lead-in the English has and the translation lacks", () => {
    expect(errorsAfter((tr) => ((tr.formal as { body: string }[])[1] = { body: t`शीर्ष $O$ पर है और initial arm $x$-अक्ष पर।` }))).toContainEqual(
      expect.stringMatching(/hi C2: formal.1.body needs a bold lead-in/),
    );
  });

  it("rejects a missing remediation or solution, and solution steps that don't match", () => {
    expect(errorsAfter((tr) => delete tr.remediation["C2-M1"])).toContainEqual(expect.stringMatching(/hi C2: remediation.C2-M1 missing/));
    expect(errorsAfter((tr) => delete tr.solutions["C2-Q5"])).toContainEqual(expect.stringMatching(/hi C2: solutions.C2-Q5.0 missing/));
    expect(errorsAfter((tr) => tr.solutions["C2-Q2"].pop())).toContainEqual(expect.stringMatching(/hi C2: solutions.C2-Q2.1 missing/));
  });

  it("rejects maths that changed, went missing or was added", () => {
    expect(errorsAfter((tr) => (tr.hook.prompt = tr.hook.prompt.replace("750", "760")))).toContainEqual(
      expect.stringMatching(/hi C2: hook.prompt maths differs from the English: missing \$750\^\\circ\$, extra \$760\^\\circ\$/),
    );
    expect(errorsAfter((tr) => (tr.worked.prompt = "क्या ये co-terminal हैं?"))).toContainEqual(expect.stringMatching(/hi C2: worked.prompt maths differs/));
    expect(errorsAfter((tr) => (tr.worked.steps[1] += " $x$"))).toContainEqual(expect.stringMatching(/hi C2: worked.steps.1 maths differs.*extra \$x\$/));
  });

  it("accepts the same maths in another order", () => {
    expect(errorsAfter((tr) => (tr.worked.prompt = t`$30^\circ$ के साथ, क्या $-330^\circ$ co-terminal है?`))).toEqual([]);
  });

  it("rejects prose left in English", () => {
    expect(errorsAfter((tr) => (tr.intuition = [t`A ray turns about $O$.`, (tr.intuition as string[])[1]]))).toContainEqual(
      expect.stringMatching(/hi C2: intuition.0 has no Devanagari/),
    );
  });

  it("accepts a string that is only maths, copied as it is", () => {
    const ch = chapter();
    ch.concepts[0].explanation.worked.answer = t`$30^\circ$`;
    const tr = { ...hindi(ch), worked: { ...hindi(ch).worked, answer: t`$30^\circ$` } };
    ch.translations = [tr];
    expect(validateChapter(ch)).toEqual([]);
  });

  it("rejects a glossary term the English uses and the translation drops", () => {
    expect(errorsAfter((tr) => ((tr.intuition as string[])[1] = "ray जहाँ रुकती है, वह **अंतिम भुजा** है।"))).toContainEqual(
      expect.stringMatching(/hi C2: intuition.1 drops the term "terminal arm"/),
    );
  });

  it("matches glossary terms in any case", () => {
    expect(errorsAfter((tr) => (tr.hook.reveal = t`$30^\circ$ पर: ये कोण **Co-terminal** हैं।`))).toEqual([]);
  });

  it("rejects an approved translation of English that has changed since, naming the new fingerprint", () => {
    const ch = chapter();
    const tr = hindi(ch);
    ch.concepts[0].hook.reveal = t`At $30^\circ$: they are **co-terminal**.`;
    ch.translations = [tr];
    expect(validateChapter(ch)).toContainEqual(`hi C2: the English has changed since it was translated (source is now "${textFingerprint(ch.concepts[0])}")`);
  });

  it("lets a draft translation fall behind the English", () => {
    expect(errorsAfter((tr, ch) => ((tr.status = "draft"), (ch.concepts[0].hook.reveal = t`At $30^\circ$: **co-terminal**.`)))).toEqual([]);
  });

  it("runs the text checks on the translation", () => {
    expect(errorsAfter((tr) => (tr.hook.reveal += "\t"))).toContainEqual(expect.stringMatching(/C2 hook.reveal: control character/));
  });
});
