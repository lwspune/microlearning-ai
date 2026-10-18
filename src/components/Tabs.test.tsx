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
