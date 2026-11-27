import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Tabs } from "./Tabs";

const tabs = [
  { id: "11", title: "Std XI" },
  { id: "12", title: "Std XII" },
];
const panels = { "11": <p>Sets</p>, "12": <p>Matrices</p> };
const html = () => renderToStaticMarkup(<Tabs label="Your standard" tabs={tabs} initial="12" panels={panels} />);

describe("Tabs", () => {
  it("names its tablist", () => {
    expect(html()).toMatch(/role="tablist" aria-label="Your standard"/);
  });

  // Four subjects (Maths, Physics, Chemistry, Biology) must fit a 390 px phone: equal columns are as wide as the
  // longest title, so with four or more tabs the phone padding and text shrink (desktop keeps its size).
  it("tightens its tabs on phones when there are four or more", () => {
    const classes = (n: number) => {
      const many = Array.from({ length: n }, (_, i) => ({ id: String(i), title: `Subject ${i}` }));
      const out = renderToStaticMarkup(<Tabs label="Your subject" tabs={many} initial="0" panels={{}} />);
      return [...out.matchAll(/<button[^>]*class="([^"]+)"/g)].map((m) => m[1].split(" "));
    };
    for (const cls of classes(3)) expect(cls).toEqual(expect.arrayContaining(["px-5", "text-sm", "sm:px-7", "sm:text-base"]));
    for (const cls of classes(4)) {
      expect(cls).toEqual(expect.arrayContaining(["px-2", "text-[13px]", "sm:px-7", "sm:text-base"]));
      expect(cls).not.toContain("px-5");
    }
  });

  it("opens on the initial tab: the only one selected and in the tab order", () => {
    const buttons = [...html().matchAll(/<button[^>]*>([^<]*)<\/button>/g)].map(([b, title]) => ({
      title,
      selected: b.includes('aria-selected="true"'),
      focusable: b.includes('tabindex="0"'),
    }));
    expect(buttons).toEqual([
      { title: "Std XI", selected: false, focusable: false },
      { title: "Std XII", selected: true, focusable: true },
    ]);
  });

  it("renders every panel, hiding all but the initial one", () => {
    const shown = [...html().matchAll(/<div role="tabpanel"([^>]*)>(.*?)<\/div>/g)].map(([, attrs, body]) => [body, !attrs.includes("hidden")]);
    expect(shown).toEqual([
      ["<p>Sets</p>", false],
      ["<p>Matrices</p>", true],
    ]);
  });

  it("links each tab to its panel", () => {
    const out = html();
    const controls = [...out.matchAll(/aria-controls="([^"]+)"/g)].map((m) => m[1]);
    for (const id of controls) expect(out).toContain(`role="tabpanel" id="${id}"`);
    expect(controls).toHaveLength(2);
  });
});
