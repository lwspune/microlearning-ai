import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import type { Progress, Question } from "@/server/learning";

vi.mock("../../actions", () => ({ submitAnswer: vi.fn() }));
vi.mock("@/app/login/actions", () => ({ finishGoogleSignIn: vi.fn() }));
const { QuestionPanel } = await import("./QuestionPanel");

const question: Question = {
  itemId: "00000000-0000-0000-0000-000000000001",
  stem: [{ type: "paragraph", inline: [{ type: "text", text: "Pick one", bold: false, italic: false }] }],
  figure: null,
  retry: false,
  options: ["A", "B", "C", "D"].map((key, i) => ({ key, label: "ABCD"[i], text: [{ type: "text", text: `option ${key}`, bold: false, italic: false }] })),
};
const progress: Progress = { streak: 0, toRetry: 0, needed: 3, state: "learning", review: { due: false, correct: 0, needed: 2 } };

const html = (q: Question = question, p: Progress = progress) =>
  renderToStaticMarkup(
    <QuestionPanel
      title="T"
      chapterHref="/learn/c"
      mapHref="/learn/c"
      conceptSlug="s"
      refresher={null}
      initialQuestion={q}
      progress={p}
      nextConcept={null}
      onReread={() => {}}
      guest={false}
    />,
  );

describe("QuestionPanel: tap to answer", () => {
  it("makes each option a button that answers it, keyed by the stored option key", () => {
    const buttons = html().match(/<button[^>]*data-key="([A-D])"[^>]*>/g) ?? [];
    expect(buttons).toHaveLength(4);
    for (const b of buttons) expect(b).toContain('type="button"');
  });

  it("has no separate Check button and no radio inputs", () => {
    const out = html();
    expect(out).not.toContain("Check answer");
    expect(out).not.toContain('type="radio"');
  });
});

describe("QuestionPanel: retry until right", () => {
  it("counts questions right toward mastery, not a run in a row", () => {
    const out = html(question, { ...progress, streak: 2 });
    expect(out).toContain("2 of 3 right");
    expect(out).not.toContain("in a row");
  });

  it("says how many missed questions are waiting to be retried", () => {
    expect(html(question, { ...progress, streak: 2, toRetry: 1 })).toContain("1 to retry");
    expect(html(question, { ...progress, streak: 2, toRetry: 0 })).not.toContain("to retry");
  });

  it("marks a question the learner missed and is now retrying", () => {
    expect(html({ ...question, retry: true })).toContain("Try again: you missed this one earlier.");
    expect(html(question)).not.toContain("Try again");
  });
});
