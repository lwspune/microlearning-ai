import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({ useRouter: () => ({ refresh: vi.fn() }) }));
vi.mock("@/app/courses/actions", () => ({ rememberLanguage: vi.fn() }));
const { LanguageSwitch } = await import("./LanguageSwitch");

const buttons = (html: string) =>
  [...html.matchAll(/<button[^>]*>([^<]*)<\/button>/g)].map(([b, title]) => ({ title, pressed: b.includes('aria-pressed="true"') }));

describe("LanguageSwitch", () => {
  it("names its group", () => {
    expect(renderToStaticMarkup(<LanguageSwitch current="en" available={["en", "hi", "mr"]} />)).toMatch(/role="group" aria-label="Lesson language"/);
  });

  it("offers English and each translated language, the current one pressed", () => {
    expect(buttons(renderToStaticMarkup(<LanguageSwitch current="hi" available={["en", "hi", "mr"]} />))).toEqual([
      { title: "English", pressed: false },
      { title: "Hindi", pressed: true },
      { title: "Marathi", pressed: false },
    ]);
  });

  it("leaves out a language the lesson isn't in", () => {
    expect(buttons(renderToStaticMarkup(<LanguageSwitch current="en" available={["en", "mr"]} />)).map((b) => b.title)).toEqual(["English", "Marathi"]);
  });

  it("shows nothing for a lesson in English only", () => {
    expect(renderToStaticMarkup(<LanguageSwitch current="en" available={["en"]} />)).toBe("");
  });
});
