import { describe, expect, it } from "vitest";
import { LESSON_LANGUAGES, parseLanguage } from "./languages";

describe("lesson languages", () => {
  it("are English, Hindi and Marathi, in that order", () => {
    expect(LESSON_LANGUAGES.map((l) => [l.id, l.title, l.htmlLang])).toEqual([
      ["en", "English", "en"],
      ["hi", "Hindi", "hi"],
      ["mr", "Marathi", "mr"],
    ]);
  });

  it("parses a remembered choice, falling back to English", () => {
    expect(parseLanguage("hi")).toBe("hi");
    expect(parseLanguage("mr")).toBe("mr");
    expect(parseLanguage("en")).toBe("en");
    expect(parseLanguage("ta")).toBe("en");
    expect(parseLanguage(undefined)).toBe("en");
  });
});
