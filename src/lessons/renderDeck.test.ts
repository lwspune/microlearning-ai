import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
const { renderDeck } = await import("./renderDeck");

describe("renderDeck", () => {
  it("renders math in a slide's heading, and keeps a plain title for screen readers", () => {
    const [slide] = renderDeck([{ id: "formal-1", title: "The $n$th term", kind: "text", body: "B" }]);
    expect(slide.title).toBe("The nth term");
    expect(slide.heading.some((n) => n.type === "math")).toBe(true);
  });
});
